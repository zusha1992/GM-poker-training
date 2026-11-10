// Flop drill (Noam & Uri 2026-11-10): BTN's made hands on each of the 11 flops,
// grouped and boxed by equity, not by solver strategy. For every hand the
// equity against a ladder of BB ranges: the bigger the box, the stronger the
// hands that would put that much money in. A hand's box is the biggest one
// whose test it passes; groups never straddle two boxes.
// Writes src/lib/drill/postflop/flop-groups.ts and decisions/ranges/flop-equity/<board>.md.
// Usage: npx tsx scripts/analysis/flop-equity-groups.ts [board ...]   (all 11 when none given)
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { score, bbCombos, type Combo } from "./price-equity";
import { btnRangeCombos, card, type Card } from "../../src/lib/drill/postflop/line-demo";
import { BOARDS, priceGroupOf, RUNOUTS, type Bucket, type PGroup } from "../../src/lib/drill/postflop/price-hands";

const SAMPLES = Number(process.env.SAMPLES ?? 6000); // per hand and level: about ±0.7%
const SUITS = ["s", "h", "d", "c"];
const RANKS = "AKQJT98765432";
const rv = (c: string) => 14 - RANKS.indexOf(c);
const ch = (r: number) => RANKS[14 - r];
const same = (a: Card, b: Card) => a.r === b.r && a.s === b.s;
const DECK: Card[] = [];
for (const r of [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2]) for (const s of SUITS) DECK.push({ r, s } as Card);

/** BB's hands from a solver range file ("AKs:0.5,22:1,..."). */
function combosOf(spec: string, dead: Card[]): Combo[] {
  const out: Combo[] = [];
  for (const p of spec.trim().split(",")) {
    const [h, w] = p.split(":");
    const a = rv(h[0]), b = rv(h[1]);
    const kind = h.length === 2 ? "p" : h[2];
    for (const s1 of SUITS) for (const s2 of SUITS) {
      if (kind === "p" && s1 >= s2) continue;
      if (kind === "s" && s1 !== s2) continue;
      if (kind === "o" && s1 === s2) continue;
      const c1 = { r: a, s: s1 } as Card, c2 = { r: b, s: s2 } as Card;
      if (dead.some((d) => same(d, c1) || same(d, c2))) continue;
      out.push({ cards: [c1, c2], w: Number(w ?? 1) });
    }
  }
  return out;
}

/** Monte Carlo equity of BTN's hand vs a weighted BB range (BB's combo picked by weight). */
function equity(hero: [Card, Card], board: Card[], range: Combo[], iters: number): number {
  const live = range.filter((c) => !c.cards.some((x) => hero.some((h) => same(h, x))));
  const cum: number[] = [];
  let tot = 0;
  for (const c of live) cum.push((tot += c.w));
  let win = 0;
  for (let i = 0; i < iters; i++) {
    const x = Math.random() * tot;
    let lo = 0, hi = cum.length - 1;
    while (lo < hi) {
      const mid = (lo + hi) >> 1;
      if (cum[mid] < x) lo = mid + 1;
      else hi = mid;
    }
    const v = live[lo];
    const dead = [...hero, ...board, ...v.cards];
    const run = [...board];
    while (run.length < 5) {
      const c = DECK[Math.floor(Math.random() * 52)];
      if (dead.some((d) => same(d, c)) || run.some((d) => same(d, c))) continue;
      run.push(c);
    }
    const a = score([...hero, ...run]), b = score([...v.cards, ...run]);
    win += a > b ? 1 : a === b ? 0.5 : 0;
  }
  return win / iters;
}

/** Made hands only (Noam 2026-11-10): ace-high is the weakest asked; no draws, no K-high. */
const MADE = new Set<PGroup>(["boat", "flush", "flushlo", "straight", "trips", "twopair", "op", "tpgk", "tpmk", "tpwk", "pp1", "pp2", "pp3", "spp", "mp", "bp", "aho", "khnd"]);
const LOW_PAIR = new Set<PGroup>(["pp1", "pp2", "pp3", "spp", "mp", "bp"]);
const ONE_PAIR = new Set<PGroup>([...LOW_PAIR, "op", "tpgk", "tpmk", "tpwk"]);
/** BB's ranges for the two big boxes, by its hand on the flop. */
const L3_GROUPS = new Set<PGroup>(["boat", "flush", "flushlo", "straight", "trips", "twopair", "op", "tpgk", "tpmk", "tpwk"]);
const L2_GROUPS = new Set<PGroup>([...L3_GROUPS, "pp1", "mp"]);

/** The ladder, biggest box first: the box, the level it's tested against, the equity it needs. */
const LADDER: { box: Bucket; level: number; need: number }[] = [
  { box: "b50", level: 3, need: 0.5 },
  { box: "b25", level: 2, need: 0.5 },
  { box: "b15", level: 1, need: 0.6 },
  { box: "b5", level: 1, need: 0.5 },
  { box: "b0", level: 0, need: 0.5 },
];
const BOX_RANK: Record<Bucket, number> = { b50: 5, b25: 4, b15: 3, b5: 2, b0: 1, big: 0 };
const LEVEL_OF: Record<Bucket, number> = { b50: 3, b25: 2, b15: 1, b5: 1, b0: 0, big: 0 };
const BOX_TEXT: Record<Bucket, string> = { big: "Pot is too big", b0: "0–5bb", b5: "5–15bb", b15: "15–25bb", b25: "25–50bb", b50: "50–100bb" };
const LEVEL_TEXT = ["BB's whole range", "BB after calling a flop bet", "BB's middle pair or better", "BB's top pair or better"];

/** Inside a box a group splits only at an equity gap this big, and only into groups of about this many hands. */
const MIN_GAP = 0.04;
const HANDS_PER_GROUP = 4;

type Hand = { key: string; cat: PGroup; pairRank: number; eq: number[]; box: Bucket; weight: number };
type Group = { hands: Hand[]; box: Bucket };

function boxOf(eq: number[]): Bucket {
  for (const l of LADDER) if (eq[l.level] >= l.need) return l.box;
  return "big";
}

/** "AKs" and "AKo" are one hand for the player. */
const rankKey = (k: string) => k.slice(0, 2);

function solveBoard(name: string) {
  const spec = BOARDS.find((b) => b.name === name)!;
  const cut = RUNOUTS.find((r) => r.board === name)!.streets[0];
  const board = spec.flop.map(card);
  const top = Math.max(...board.map((c) => c.r));
  const whole = bbCombos(board);
  const called = combosOf(readFileSync(`decisions/ranges/solver/${name}/bb-turn.txt`, "utf8"), board);
  const bbGroup = (c: Combo) => priceGroupOf(c.cards, board, cut);
  const levels = [whole, called, whole.filter((c) => L2_GROUPS.has(bbGroup(c))), whole.filter((c) => L3_GROUPS.has(bbGroup(c)))];

  // Every made BTN combo, by hand: A7s and A7o are one hand for the player (its
  // most common group names the hand).
  const byHand = new Map<string, { combos: [Card, Card][]; weight: number; cats: Map<PGroup, number> }>();
  for (const c of btnRangeCombos(board).combos) {
    const g = priceGroupOf(c.cards, board, cut);
    if (!MADE.has(g)) continue;
    if (g === "khnd" && Math.max(c.cards[0].r, c.cards[1].r) !== 14) continue;
    const cur = byHand.get(rankKey(c.hand)) ?? { combos: [] as [Card, Card][], weight: 0, cats: new Map<PGroup, number>() };
    cur.combos.push(c.cards);
    cur.weight += c.weight;
    cur.cats.set(g, (cur.cats.get(g) ?? 0) + c.weight);
    byHand.set(rankKey(c.hand), cur);
  }

  const hands: Hand[] = [];
  for (const [key, v] of byHand) {
    const cat = [...v.cats].sort((a, b) => b[1] - a[1])[0][0];
    const per = Math.ceil(SAMPLES / v.combos.length);
    const eq = levels.map((range) => v.combos.reduce((s, cards) => s + equity(cards, board, range, per), 0) / v.combos.length);
    const r1 = rv(key[0]), r2 = rv(key[1]);
    const pairRank = r1 === r2 ? r1 : board.some((b) => b.r === r1) ? r1 : board.some((b) => b.r === r2) ? r2 : 0;
    hands.push({ key, cat, pairRank, eq, box: boxOf(eq), weight: v.weight });
  }

  // 1. Inside each box, by equity at the box's level, split at the biggest gaps
  //    (at least MIN_GAP; at most one group per HANDS_PER_GROUP hands; no group of one).
  const at = (h: Hand) => h.eq[LEVEL_OF[h.box]];
  hands.sort((a, b) => BOX_RANK[b.box] - BOX_RANK[a.box] || at(b) - at(a));
  let groups: Group[] = [];
  for (const box of Object.keys(BOX_RANK) as Bucket[]) {
    const inBox = hands.filter((h) => h.box === box);
    if (!inBox.length) continue;
    const cuts: number[] = [];
    const gaps = inBox.slice(1).map((h, i) => ({ i: i + 1, gap: at(inBox[i]) - at(h) })).filter((g) => g.gap >= MIN_GAP).sort((a, b) => b.gap - a.gap);
    for (const { i } of gaps) {
      if (cuts.length + 1 >= Math.ceil(inBox.length / HANDS_PER_GROUP)) break;
      const edges = [0, ...cuts, inBox.length].sort((a, b) => a - b);
      const k = edges.findIndex((e) => e > i);
      if (i - edges[k - 1] >= 2 && edges[k] - i >= 2) cuts.push(i);
    }
    const edges = [0, ...cuts.sort((a, b) => a - b), inBox.length];
    for (let k = 0; k + 1 < edges.length; k++) groups.push({ hands: inBox.slice(edges[k], edges[k + 1]), box });
  }
  groups.sort((a, b) => BOX_RANK[b.box] - BOX_RANK[a.box]);

  // 1b. A pocket pair never sits below a lower pocket pair (equities within noise
  //     can flip them, e.g. JJ under TT on 8♠8♦6♣): it goes up to that pair's group.
  const pocket = (h: Hand) => h.key[0] === h.key[1] && h.cat !== "twopair" && h.cat !== "boat";
  for (let i = groups.length - 1; i > 0; i--) {
    for (const h of groups[i].hands.filter(pocket)) {
      const k = groups.findIndex((g, j) => j < i && g.hands.some((o) => pocket(o) && o.pairRank < h.pairRank));
      if (k < 0) continue;
      groups[i].hands = groups[i].hands.filter((o) => o !== h);
      groups[k].hands.push(h);
    }
  }
  groups = groups.filter((g) => g.hands.length);

  // 2. Noam 2026-11-10 (J♠T♠3♣): pairs below top pair go by the pair's rank. A
  //    pair never sits above a higher pair: it drops to just below it.
  const low = (h: Hand) => LOW_PAIR.has(h.cat) && h.pairRank > 0 && h.pairRank < top;
  /** Groups made by this rule, by pair rank: hands of one rank drop together. */
  const dropped = new Map<number, Group>();
  for (let moved = true; moved; ) {
    moved = false;
    for (let i = 0; i < groups.length && !moved; i++) {
      const h = groups[i].hands.find((x) => low(x) && groups.slice(i + 1).some((g) => g.hands.some((o) => low(o) && o.pairRank > x.pairRank)));
      if (!h) continue;
      // Just below the weakest group that holds a higher low pair.
      let j = groups.length - 1;
      while (!groups[j].hands.some((o) => low(o) && o.pairRank > h.pairRank)) j--;
      groups[i].hands = groups[i].hands.filter((o) => o !== h);
      const into = dropped.get(h.pairRank);
      if (into && groups.indexOf(into) === j + 1) into.hands.push(h);
      else {
        const g = { hands: [h], box: BOX_RANK[h.box] < BOX_RANK[groups[j].box] ? h.box : groups[j].box };
        groups.splice(j + 1, 0, g);
        dropped.set(h.pairRank, g);
      }
      groups = groups.filter((g) => g.hands.length);
      moved = true;
    }
  }

  // 3. Noam 2026-11-10 (A72, K54): two pair is never grouped with one-pair hands
  //    below the best one: it goes up to the top-kicker group (the group of the best one-pair hand).
  const twoPair = (h: Hand) => h.cat === "twopair" && h.key[0] !== h.key[1];
  const best = groups.findIndex((g) => g.hands.some((h) => ONE_PAIR.has(h.cat)));
  if (best >= 0) {
    for (let i = best + 1; i < groups.length; i++) {
      const moving = groups[i].hands.filter(twoPair);
      if (!moving.length) continue;
      groups[i].hands = groups[i].hands.filter((h) => !twoPair(h));
      groups[best].hands.push(...moving);
    }
    groups = groups.filter((g) => g.hands.length);
  }

  // 4. A group of one hand (A7s + A7o count as one) joins its closest neighbor in the same box.
  for (let i = 0; i < groups.length; i++) {
    if (new Set(groups[i].hands.map((h) => rankKey(h.key))).size > 1) continue;
    const h = groups[i].hands[0];
    const near = [i - 1, i + 1].filter((j) => groups[j]?.box === groups[i].box).sort((a, b) => Math.abs(at(groups[a].hands[0]) - at(h)) - Math.abs(at(groups[b].hands[0]) - at(h)))[0];
    if (near === undefined) continue;
    groups[near].hands.push(...groups[i].hands);
    groups.splice(i, 1);
    i = -1;
  }

  return { name, board, hands, groups: groups.map((g) => ({ ...g, hands: g.hands.sort((a, b) => at(b) - at(a) || b.eq[1] - a.eq[1]) })) };
}

/** "KK–99, A5, K7" — pocket pairs and same-high-card kickers as runs. */
function labelOf(keys: string[]): string {
  const uniq = [...new Set(keys.map(rankKey))];
  const pairs = uniq.filter((k) => k[0] === k[1]).map((k) => rv(k[0])).sort((a, b) => b - a);
  const rest = uniq.filter((k) => k[0] !== k[1]);
  const parts: string[] = [];
  const runsOf = (rs: number[], fmt: (r: number) => string) => {
    for (let i = 0; i < rs.length; ) {
      let j = i;
      while (j + 1 < rs.length && rs[j + 1] === rs[j] - 1) j++;
      parts.push(j - i >= 2 ? `${fmt(rs[i])}–${fmt(rs[j])}` : rs.slice(i, j + 1).map(fmt).join(", "));
      i = j + 1;
    }
  };
  runsOf(pairs, (r) => ch(r) + ch(r));
  const byHigh = new Map<string, number[]>();
  for (const k of rest) byHigh.set(k[0], [...(byHigh.get(k[0]) ?? []), rv(k[1])]);
  for (const [hi, kickers] of [...byHigh].sort((a, b) => rv(b[0]) - rv(a[0]))) runsOf(kickers.sort((a, b) => b - a), (r) => hi + ch(r));
  return parts.join(", ");
}

function whyOf(box: Bucket, eq: number[]): string {
  const p = (x: number) => `${Math.round(x * 100)}%`;
  switch (box) {
    case "b50":
      return `Wins ${p(eq[3])} against BB's top pair or better: it wants the stacks in.`;
    case "b25":
      return `Wins ${p(eq[2])} against BB's middle pair or better, but only ${p(eq[3])} against its top pairs: a big pot, not stacks.`;
    case "b15":
      return `Wins ${p(eq[1])} against the hands that call a flop bet, but only ${p(eq[2])} against BB's middle pair or better: a medium pot.`;
    case "b5":
      return `Just ahead (${p(eq[1])}) of the hands that call a flop bet: about one bet of value.`;
    case "b0":
      return `Behind the hands that call a bet (${p(eq[1])}), ahead of BB's whole range (${p(eq[0])}): a little money, mostly showdown.`;
    default:
      return `Behind even BB's whole range (${p(eq[0])}): the pot is already too big for it.`;
  }
}

const names = process.argv.slice(2).length ? process.argv.slice(2) : BOARDS.map((b) => b.name);
const out: string[] = [];
mkdirSync("decisions/ranges/flop-equity", { recursive: true });
for (const name of names) {
  const t0 = Date.now();
  const r = solveBoard(name);
  const avg = (g: Group) => [0, 1, 2, 3].map((l) => g.hands.reduce((s, h) => s + h.eq[l] * h.weight, 0) / g.hands.reduce((s, h) => s + h.weight, 0));
  const groups = r.groups.map((g, i) => ({
    id: `g${i + 1}`,
    label: labelOf(g.hands.map((h) => h.key)),
    hands: g.hands.map((h) => h.key),
    box: g.box,
    eq: avg(g).map((x) => Math.round(x * 1000) / 10),
    why: whyOf(g.box, avg(g)),
  }));
  out.push(`  ${JSON.stringify(name)}: ${JSON.stringify(groups)},`);

  const md = [
    `# ${name} flop (${r.board.map((c) => ch(c.r) + { s: "♠", h: "♥", d: "♦", c: "♣" }[c.s]).join(" ")}): equity groups`,
    "",
    `Generated ${new Date().toISOString().slice(0, 10)} by scripts/analysis/flop-equity-groups.ts (${SAMPLES} samples per hand and level).`,
    "BTN opens, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:",
    LEVEL_TEXT.map((t, i) => `L${i} = ${t}`).join(" · ") + ".",
    "Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.",
    "",
    "| Group | Box | Hands | L0 | L1 | L2 | L3 |",
    "|---|---|---|---|---|---|---|",
    ...groups.map((g) => `| ${g.id} | ${BOX_TEXT[g.box]} | ${g.label} | ${g.eq.map((x) => `${Math.round(x)}%`).join(" | ")} |`),
    "",
    "## Every hand",
    "",
    "| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |",
    "|---|---|---|---|---|---|---|---|",
    ...r.groups.flatMap((g, i) => g.hands.map((h) => `| ${h.key} | ${h.cat} | ${h.eq.map((x) => `${Math.round(x * 100)}%`).join(" | ")} | ${BOX_TEXT[h.box]} | g${i + 1} |`)),
    "",
  ].join("\n");
  writeFileSync(`decisions/ranges/flop-equity/${name}.md`, md);
  console.log(`${name}: ${groups.length} groups, ${r.hands.length} hands (${Math.round((Date.now() - t0) / 1000)}s)`);
  for (const g of groups) console.log(`  ${g.id} ${BOX_TEXT[g.box].padEnd(14)} ${g.label}`);
}

if (process.argv.slice(2).length === 0) {
  writeFileSync(
    "src/lib/drill/postflop/flop-groups.ts",
    [
      "// Generated by scripts/analysis/flop-equity-groups.ts — do not edit by hand.",
      "// Flop drill (Noam & Uri 2026-11-10): BTN's made hands on each flop, grouped and",
      "// boxed by equity against a ladder of BB ranges. Reports: decisions/ranges/flop-equity/.",
      'import type { Bucket } from "./price-hands";',
      "",
      "/** eq = the group's equity (%) vs BB's whole range, BB after calling a flop bet, BB's middle pair+, BB's top pair+. */",
      "export type FlopGroup = { id: string; label: string; hands: string[]; box: Bucket; eq: number[]; why: string };",
      "",
      "export const FLOP_GROUPS: Record<string, FlopGroup[]> = {",
      ...out,
      "};",
      "",
    ].join("\n"),
  );
}
