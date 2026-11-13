// Flop drill (Noam & Uri 2026-11-10): BTN's made hands on each of the 11 flops,
// grouped and boxed by equity, not by solver strategy. For every hand the
// equity against a ladder of BB ranges: the bigger the box, the stronger the
// hands that would put that much money in. A hand's box is the biggest one
// whose test it passes; groups never straddle two boxes.
// Writes src/lib/drill/postflop/flop-groups.ts and decisions/ranges/flop-equity/<board>.md.
// Usage: npx tsx scripts/analysis/flop-equity-groups.ts [board ...]   (all 11 when none given)
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { score, bbCombos, type Combo } from "./price-equity";
import { btnRangeCombos, card, type Card } from "../../src/lib/drill/postflop/line-demo";
import { flushSuit, handKey, madeGroup } from "../../src/lib/drill/postflop/hand-key";
import { BOARDS, priceGroupOf, realDraw, RUNOUTS, type Bucket, type PGroup } from "../../src/lib/drill/postflop/price-hands";

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

/** Boards Noam has reviewed: his groups and boxes replace the computed ones (the
 * equity is still computed, to show). Every made hand must be listed. */
/** `name`: the group's name in words, shown under the cards (Noam 2026-11-11). */
const REVIEWED: Record<string, { name?: string; hands: string[]; box: Bucket }[]> = {
  // Noam 2026-11-11: two pair with the sets (dry board); top pair in two groups,
  // AT and up / A9 and down at 15–25; all 7x one group at 5–15; the weakest pairs together at 0–5.
  A72: [
    { name: "Sets & two pair", hands: ["AA", "77", "22", "A7", "A2"], box: "b50" },
    { name: "Top pair, good kicker", hands: ["AK", "AQ", "AJ", "AT"], box: "b50" },
    { name: "Top pair, weak kicker", hands: ["A9", "A8", "A6", "A5", "A4", "A3"], box: "b15" },
    { name: "Pocket pairs under the ace", hands: ["KK", "QQ", "JJ", "TT", "99", "88"], box: "b5" },
    { name: "Second pair", hands: ["K7", "Q7", "J7", "T7", "97", "87", "76", "75"], box: "b5" },
    { name: "Small pairs", hands: ["66", "55", "44", "33", "K2"], box: "b0" },
  ],
  // Noam 2026-11-11: the A72 principles carried over (draft for him to play): weak top pair
  // 15–25, all second pair one group at 5–15, the weakest pairs and 3x together at 0–5.
  JT3: [
    { name: "Sets", hands: ["JJ", "TT", "33"], box: "b50" },
    // Noam 2026-11-11: two pair apart from one pair. Overpairs still go for stacks;
    // top pair (AJ–QJ) only for a big pot.
    { name: "Two pair", hands: ["JT"], box: "b50" },
    { name: "Overpairs", hands: ["AA", "KK", "QQ"], box: "b50" },
    { name: "Top pair, good kicker", hands: ["AJ", "KJ", "QJ"], box: "b25" },
    { name: "Top pair, weak kicker", hands: ["J9", "J8", "J7"], box: "b15" },
    { name: "Second pair", hands: ["AT", "KT", "QT", "T9", "T8", "T7"], box: "b5" },
    { name: "Small pairs", hands: ["99", "88", "77", "66", "55", "44", "22", "A3", "K3", "43"], box: "b0" },
    { name: "Ace-high", hands: ["A9", "A8", "A7", "A6", "A5", "A4", "A2"], box: "big" },
  ],
  // Draft 2026-11-11: the A72/JT3 principles on K♠5♥4♣ (connected, so like JT3: two pair
  // on its own, top pair good kicker only 25–50), for Noam to play.
  K54: [
    { name: "Sets", hands: ["KK", "55", "44"], box: "b50" },
    { name: "Two pair", hands: ["K5", "K4", "54"], box: "b50" },
    { name: "Overpair", hands: ["AA"], box: "b50" },
    // Noam 2026-11-11: AK and KQ apart, worth a big pot (25–50; the board is in between dry and wet).
    { name: "Top pair, top kicker", hands: ["AK", "KQ"], box: "b25" },
    // Noam 2026-11-11: top pair in three groups on this board.
    { name: "Top pair, good kicker", hands: ["KJ", "KT", "K9", "K8"], box: "b25" },
    { name: "Top pair, weak kicker", hands: ["K7", "K6", "K3", "K2"], box: "b15" },
    // Noam 2026-11-11: QQ–TT are worth clearly more than 99–66, which go with 5x.
    { name: "Big pocket pairs", hands: ["QQ", "JJ", "TT"], box: "b5" },
    { name: "Medium pairs & second pair", hands: ["99", "88", "77", "66", "A5", "Q5", "75", "65"], box: "b5" },
    { name: "Small pairs", hands: ["A4", "64", "43", "33", "22"], box: "b0" },
    // Noam 2026-11-11: on a rainbow board without many draws ace-high is never "Pot is too big";
    // AQ–AT take one bet of value.
    { name: "Ace-high, good kicker", hands: ["AQ", "AJ", "AT"], box: "b0" },
    { name: "Ace-high", hands: ["A9", "A8", "A7", "A6"], box: "b0" },
  ],
};

/** Noam 2026-11-11: how dry each board is. Two-tone = really wet; rainbow but
 * connected = in between (K♠5♥4♣); rainbow, not connected = dry. */
type BoardType = "dry" | "between" | "wet";
const BOARD_TYPE: Record<string, BoardType> = { A72: "dry", JT3: "wet", K54: "between", QT7: "between", "986": "wet", KQT: "wet", A76: "wet", KQ4: "wet", T87: "wet", "962": "wet", "886": "dry" };

/** Noam's earlier notes on single boards (the old full-hand drill), kept over the principles: group name → box. */
const BOARD_NOTES: Record<string, Record<string, Bucket>> = {
  // Noam 2026-11-12 (T♥8♥7♠): 55–22 Pot is too big.
  T87: { "Small pairs": "big" },
  // Noam 2026-11-07 and 2026-11-10 (9♠8♦6♣): overpairs 15–25 (kept 2026-11-12), top pair even with a good kicker 5–15,
  // the underpairs 55–22 "the pot is too big for them already".
  // Noam 2026-11-12: two pair 25–50, not stacks: sets and straights are out there.
  "986": { "Two pair": "b25", Overpairs: "b15", "Top pair, good kicker": "b5", "Top pair, weak kicker": "b5", "Small pairs": "big" },
  // Noam 2026-11-11 (K♦Q♣T♥): a very connected board, so top pair one box down; it won't
  // feel comfortable betting on a lot of turns. Even AK and KJ only 15–25.
  // Two pair (KQ, KT, QT) only 25–50: more straights here.
  // AA too: not a whole stack unless it improves.
  // Noam 2026-11-11 (8♠8♦6♣): overpairs only 25–50: called for stacks, they're up against an 8 (trips) at least.
  "886": { Overpairs: "b25" },
  // Noam 2026-11-11 (9♦6♦2♥): the lower the top pair, the less it's worth; even a good kicker only 15–25.
  "962": { "Top pair, good kicker": "b15", "Top pair, weak kicker": "b5" },
  KQT: { "Two pair": "b25", Overpair: "b25", "Top pair, good kicker": "b15", "Top pair, weak kicker": "b5" },
  // Turn review (Noam 2026-11-13), one turn at a time:
  // A♣7♦2♠ 6♦: second pair is worth no more than 0–5: don't isolate it against better hands.
  // Top pair, good kicker (AK–AT) 25–50, not 50–100: on the turn it isn't going for stacks yet,
  // least of all with AT and AK in one group; the river decides whether to shove.
  "A72-6d": { "Second pair": "b0", "Top pair, good kicker": "b25" },
};

/** The principles from Noam's review of A72, JT3 and K54 (rulebook section 0), as a draft for a new board. */
/** Boards where bottom pair is its own group, apart from the small pocket pairs; the pocket pairs
 * from this rank up join it (Noam 2026-11-12, T♥8♥7♠: A7–75 with 66 at 0–5, 55–22 Pot is too big). */
const BOTTOM_PAIR_APART: Record<string, number> = { T87: 6 };

/** Where top pair splits into good and weak kicker, if not at the T. Noam 2026-11-13 (A♣7♦2♠ 6♦):
 * AK, AQ, AJ together; AT goes down with A9–A3. */
const GOOD_KICKER_FROM: Record<string, number> = { "A72-6d": 11 };

/** A straight or a flush can already be made on this flop: three cards of one suit,
 * or three different ranks inside five (the ace counts low too). */
function straightOrFlushOnFlop(board: Card[]): boolean {
  if (["s", "h", "d", "c"].some((x) => board.filter((c) => c.s === x).length >= 3)) return true;
  const ranks = new Set(board.flatMap((c) => (c.r === 14 ? [14, 1] : [c.r])));
  for (let lo = 1; lo <= 10; lo++) {
    let n = 0;
    for (let r = lo; r < lo + 5; r++) if (ranks.has(r)) n++;
    if (n >= 3) return true;
  }
  return false;
}

/** A turn like A♣7♦2♠ 6♦ (Noam 2026-11-13: "very wet, brings in the flush draw and the straight draw"):
 * it makes a flush possible, or it brings a flush draw (the flop had one card of its suit) and lands
 * within two ranks of a flop card (the ace doesn't count: A-Q only gives a gutshot). */
function wetTurn(board: Card[]): boolean {
  if (board.length < 4) return false;
  const [t, flop] = [board[3], board.slice(0, 3)];
  if (board.filter((c) => c.s === t.s).length >= 3) return true;
  const draw = flop.filter((c) => c.s === t.s).length === 1;
  const near = t.r !== 14 && flop.some((c) => c.r !== 14 && Math.abs(c.r - t.r) <= 2);
  return draw && near;
}

/** Three different ranks inside five on the board (the ace counts low too): a straight is possible. */
function straightPossible(board: Card[]): boolean {
  const ranks = new Set(board.flatMap((c) => (c.r === 14 ? [14, 1] : [c.r])));
  for (let lo = 1; lo <= 10; lo++) {
    let n = 0;
    for (let r = lo; r < lo + 5; r++) if (ranks.has(r)) n++;
    if (n >= 3) return true;
  }
  return false;
}

function principleGroups(name: string, board: Card[], hands: Hand[]): Group[] {
  const wet4 = wetTurn(board);
  // A turn spot ("A72-Qh") starts from its flop's type; a turn that makes a straight or a flush possible makes it wet.
  let type = BOARD_TYPE[name.split("-")[0]] ?? "wet";
  if (board.length > 3 && straightOrFlushOnFlop(board) && !straightOrFlushOnFlop(board.slice(0, 3))) type = "wet";
  const ranks = [...new Set(board.map((c) => c.r))].sort((a, b) => b - a);
  const top = ranks[0];
  const pocket = (h: Hand) => h.key[0] === h.key[1];
  const kicker = (h: Hand) => [rv(h.key[0]), rv(h.key[1])].find((r) => r !== top) ?? 0;
  const out: Group[] = [];
  const add = (name: string, box: Bucket, hs: Hand[]) => {
    if (hs.length) out.push({ name, box, hands: hs });
  };
  const of = (cats: PGroup[], extra: (h: Hand) => boolean = () => true) => hands.filter((h) => cats.includes(h.cat) && extra(h));

  const sets = of(["twopair"], pocket);
  const twoPair = of(["twopair"], (h) => !pocket(h));
  const monsters = of(["boat", "straight", "flush", "flushlo"]);
  const top3 = [...monsters, ...sets, ...(type === "dry" ? twoPair : [])];
  const parts = [monsters.some((h) => h.cat === "boat") && "full houses", monsters.some((h) => h.cat === "flush" || h.cat === "flushlo") && "flushes", monsters.some((h) => h.cat === "straight") && "straights", sets.length && "sets", type === "dry" && twoPair.length && "two pair"].filter(Boolean);
  const joined = parts.length > 2 ? `${parts.slice(0, -1).join(", ")} & ${parts[parts.length - 1]}` : parts.join(" & ");
  add(joined.replace(/^./, (c) => c.toUpperCase()), "b50", top3);
  // Noam 2026-11-12 (9♠8♦6♣): when a straight or a flush is already possible on the flop,
  // two pair doesn't go for stacks anymore, only half a stack: 25–50.
  if (type !== "dry") add("Two pair", straightOrFlushOnFlop(board) ? "b25" : "b50", twoPair);
  // Trips on a paired board: by kicker.
  add("Trips, good kicker", "b50", of(["trips"], (h) => Math.max(rv(h.key[0]), rv(h.key[1])) >= 10 && h.key[0] !== h.key[1]));
  add("Trips, weak kicker", "b25", of(["trips"], (h) => Math.max(rv(h.key[0]), rv(h.key[1])) < 10));
  // Noam 2026-11-13 (9♦6♦2♥ 8♦): with a flush on board, overpairs with a flush draw are their own group.
  const fd = (h: Hand) => h.key.endsWith("+fd");
  const ops = of(["op"]);
  if (ops.some(fd)) {
    add("Overpairs with a flush draw", "b50", ops.filter(fd));
    add("Overpairs, no flush draw", "b50", ops.filter((h) => !fd(h)));
  } else add(ops.length > 1 ? "Overpairs" : "Overpair", "b50", ops);

  // Top pair: dry and wet in two groups at the T kicker; in between in three (K54: AK+KQ / down to the 8 / the rest).
  const tp = of(["tpgk", "tpmk", "tpwk"]).sort((a, b) => kicker(b) - kicker(a));
  if (type === "between") {
    const best = [...new Set(tp.map(kicker))].slice(0, 2);
    add("Top pair, top kicker", "b25", tp.filter((h) => best.includes(kicker(h))));
    add("Top pair, good kicker", "b25", tp.filter((h) => !best.includes(kicker(h)) && kicker(h) >= 8));
    add("Top pair, weak kicker", "b15", tp.filter((h) => !best.includes(kicker(h)) && kicker(h) < 8));
  } else {
    // On a wet turn AK–AJ stay together and AT goes down with the weak kickers (Noam, A♣7♦2♠ 6♦).
    const good = GOOD_KICKER_FROM[name] ?? (wet4 ? 11 : 10);
    add("Top pair, good kicker", type === "dry" ? "b50" : "b25", tp.filter((h) => kicker(h) >= good));
    add("Top pair, weak kicker", "b15", tp.filter((h) => kicker(h) < good));
  }

  // Pocket pairs between the top two cards: one group on a dry board (A72 KK–88); else
  // the big ones apart and the rest with second pair (K54: QQ–TT / 99–66 with 5x).
  const between = of(["pp1"]);
  const second = of(["mp"]);
  const big = type === "dry" ? between : between.filter((h) => h.pairRank >= 10);
  const rest = type === "dry" ? [] : between.filter((h) => h.pairRank < 10);
  add(type === "dry" ? `Pocket pairs under the ${ch(top)}` : "Big pocket pairs", "b5", big);
  // On a wet turn second pair is worth 0–5: don't isolate it against better hands (Noam, A♣7♦2♠ 6♦).
  add(rest.length ? "Medium pairs & second pair" : "Second pair", wet4 ? "b0" : "b5", [...rest, ...second]);
  const joins = BOTTOM_PAIR_APART[name];
  if (joins !== undefined) {
    const small = of(["pp2", "pp3", "spp"]);
    const up = small.filter((h) => h.pairRank >= joins);
    add(up.length ? `Bottom pair & ${up.map((h) => h.key).join(", ")}` : "Bottom pair", "b0", [...of(["bp"]), ...up]);
    add("Small pairs", "b0", small.filter((h) => h.pairRank < joins));
  } else add("Small pairs", "b0", of(["pp2", "pp3", "spp", "bp"]));

  // Ace-high: never Pot is too big on a dry or in-between board (K54); AQ–AT apart there.
  const aceHigh = of(["aho", "khnd"]);
  if (type === "wet") add("Ace-high", "big", aceHigh);
  else {
    add("Ace-high, good kicker", "b0", aceHigh.filter((h) => rv(h.key[1]) >= 10));
    add("Ace-high", "b0", aceHigh.filter((h) => rv(h.key[1]) < 10));
  }
  // Noam 2026-11-13: on the turn one pair doesn't go for the whole stack yet. BB's calling range
  // keeps getting stronger, and the river decides whether AK shoves. Sets and two pair are way ahead.
  if (board.length > 3) for (const g of out) if (g.box === "b50" && /^(Overpair|Top pair)/.test(g.name ?? "")) g.box = "b25";
  // Noam 2026-11-13 (K♦Q♦4♠ 8♠): weak top pair on the turn wants no more than 15bb extra:
  // don't isolate it against BB's strongest range.
  if (board.length > 3) for (const g of out) if (g.name === "Top pair, weak kicker" && BOX_RANK[g.box] > BOX_RANK.b5) g.box = "b5";
  // Noam 2026-11-13 (9♦6♦2♥ 8♦): on a turn where a flush AND a straight are possible (BB called the flop),
  // two pair is worth only 15–25; top pair, even top kicker, and an overpair only 0–5;
  // an overpair with a flush draw is worth way more than one without (15–25).
  if (board.length > 3 && flushSuit(board) && straightPossible(board))
    for (const g of out) {
      if (g.name === "Two pair" || g.name === "Overpairs with a flush draw") g.box = "b15";
      else if (/^(Overpair|Top pair|Big pocket pairs|Pocket pairs under)/.test(g.name ?? "")) g.box = "b0";
    }
  // All in one box there, top pair is one group.
  if (board.length > 3 && flushSuit(board) && straightPossible(board)) {
    const tps = out.filter((g) => g.name?.startsWith("Top pair"));
    if (tps.length > 1) {
      tps[0].name = "Top pair";
      tps[0].hands = tps.flatMap((g) => g.hands);
      for (const g of tps.slice(1)) out.splice(out.indexOf(g), 1);
    }
    // Noam 2026-11-13: top pair split like the overpairs, with a flush draw (5–15) or without (0–5).
    const tp = out.find((g) => g.name?.startsWith("Top pair"));
    const withFd = tp?.hands.filter(fd) ?? [];
    if (tp && withFd.length) {
      tp.hands = tp.hands.filter((h) => !fd(h));
      tp.name = "Top pair, no flush draw";
      out.splice(out.indexOf(tp), 0, { name: "Top pair with a flush draw", box: "b5", hands: withFd });
      if (!tp.hands.length) out.splice(out.indexOf(tp), 1);
    }
  }
  // Noam 2026-11-13 (K♦Q♦4♠ 8♠, "double flush draw, extremely wet and dangerous"): only the
  // overpairs and top pair, top kicker want the bigger pot (25–50), together; the other good
  // kickers (KJ, KT there) go down to 15–25.
  if (board.length === 4 && ["s", "h", "d", "c"].filter((x) => board.filter((c) => c.s === x).length === 2).length === 2) {
    const good = out.find((g) => g.name === "Top pair, good kicker" && g.box === "b25");
    if (good) {
      const best = Math.max(...good.hands.map(kicker));
      const tk = good.hands.filter((h) => kicker(h) === best);
      good.hands = good.hands.filter((h) => kicker(h) !== best);
      good.box = "b15";
      if (!good.hands.length) out.splice(out.indexOf(good), 1);
      const op = out.find((g) => /^Overpair/.test(g.name ?? "") && g.box === "b25");
      if (op) {
        op.name = `${op.name} & top pair, top kicker`;
        op.hands.push(...tk);
      } else out.push({ name: "Top pair, top kicker", box: "b25", hands: tk });
    }
  }
  // Noam 2026-11-13 (Q♥T♦7♠ J♥: a flush draw and straights already possible): AA and KK are not
  // strong here; 50bb is never good for them: 15–25. Top pair, good kicker (AQ, KQ) 15–25 at most.
  if (wet4 && straightPossible(board) && !flushSuit(board))
    for (const g of out) if (g.box === "b25" && /^(Overpair|Top pair)/.test(g.name ?? "")) g.box = "b15";
  // Noam 2026-11-13 (9♦6♦2♥ 2♣): "A9 cannot be together with T9, J9 and Q9; A9 and K9 can go
  // together." On the turn, top pair at 25–50 keeps only the two best kickers; the other kickers
  // from the J up go to 15–25, the rest to the weak kickers (5–15). Hands only move down.
  const doubleFd = board.length === 4 && ["s", "h", "d", "c"].filter((x) => board.filter((c) => c.s === x).length === 2).length === 2;
  if (board.length > 3 && !doubleFd) {
    const tps = out.filter((g) => g.name?.startsWith("Top pair"));
    const ks = [...new Set(tps.flatMap((g) => g.hands).map(kicker))].sort((a, b) => b - a).slice(0, 2);
    const g25 = tps.filter((g) => g.box === "b25");
    const movers = g25.flatMap((g) => g.hands).filter((h) => !ks.includes(kicker(h)));
    if (movers.length) {
      for (const g of g25) {
        g.hands = g.hands.filter((h) => ks.includes(kicker(h)));
        g.name = "Top pair, top kicker";
        if (!g.hands.length) out.splice(out.indexOf(g), 1);
      }
      const into = (box: Bucket, label: string, hs: Hand[]) => {
        if (!hs.length) return;
        const g = out.find((x) => x.name?.startsWith("Top pair") && x.box === box);
        if (g) g.hands.push(...hs);
        else out.push({ name: label, box, hands: hs });
      };
      into("b15", "Top pair, good kicker", movers.filter((h) => kicker(h) >= 11));
      into("b5", "Top pair, weak kicker", movers.filter((h) => kicker(h) < 11));
    }
  }
  // Noam 2026-11-13 (8♠8♦6♣ J♦): TT and 99 don't want to put in any more money: 0–5. They were
  // overpairs on the flop, and the turn overcard made them pocket pairs under it.
  if (board.length > 3 && board[3].r > Math.max(...board.slice(0, 3).map((c) => c.r))) {
    const passed = (h: Hand) => h.key[0] === h.key[1] && !h.key.includes("+") && rv(h.key[0]) > Math.max(...board.slice(0, 3).map((c) => c.r)) && rv(h.key[0]) < board[3].r;
    for (const g of [...out]) {
      const hs = g.hands.filter(passed);
      if (!hs.length || g.box === "b0" || g.box === "big") continue;
      if (hs.length === g.hands.length) g.box = "b0";
      else {
        g.hands = g.hands.filter((h) => !passed(h));
        out.push({ name: `Pocket pairs under the ${ch(board[3].r)}`, box: "b0", hands: hs });
      }
    }
  }
  const notes = BOARD_NOTES[name] ?? {};
  for (const g of out) if (g.name && notes[g.name]) g.box = notes[g.name];
  // Biggest box first (a stable sort keeps the order above inside a box).
  out.sort((a, b) => BOX_RANK[b.box] - BOX_RANK[a.box]);
  const listed = new Set(out.flatMap((g) => g.hands));
  const left = hands.filter((h) => !listed.has(h));
  if (left.length) throw new Error(`${name} principles: no group for ${left.map((h) => `${h.key} (${h.cat})`).join(" ")}`);
  return out;
}

/** Inside a box a group splits only at an equity gap this big, and only into groups of about this many hands. */
const MIN_GAP = 0.04;
const HANDS_PER_GROUP = 4;

type Hand = { key: string; cat: PGroup; pairRank: number; eq: number[]; box: Bucket; weight: number };
type Group = { hands: Hand[]; box: Bucket; name?: string };

function boxOf(eq: number[]): Bucket {
  for (const l of LADDER) if (eq[l.level] >= l.need) return l.box;
  return "big";
}

/** "AKs" and "AKo" are one hand for the player. */
const rankKey = (k: string) => k.slice(0, 2);

/** "Q♥" → "Qh", as in the solver's file names. */
const code = (c: string) => c[0] + ({ "♠": "s", "♥": "h", "♦": "d", "♣": "c" } as Record<string, string>)[c[1]];

/** Turn drill (Noam 2026-11-12): the same ladder one street later. BTN bet the flop small
 * and BB called; L0 is BB's range after that call, L1 BB after calling a turn bet (solver). */
function solveBoard(flopName: string, turn?: number) {
  const spec = BOARDS.find((b) => b.name === flopName)!;
  const t = turn === undefined ? undefined : spec.turns[turn];
  const name = t ? `${flopName}-${code(t.card)}` : flopName;
  // On the turn a pair with a draw is still a pair: the drill asks what the made hand is worth.
  const cut = t ? { ...t, pairDraws: false } : RUNOUTS.find((r) => r.board === flopName)!.streets[0];
  const board = [...spec.flop, ...(t ? [t.card] : [])].map(card);
  const top = Math.max(...board.map((c) => c.r));
  const dir = `decisions/ranges/solver/${flopName}`;
  const whole = t ? combosOf(readFileSync(`${dir}/bb-turn.txt`, "utf8"), board) : bbCombos(board);
  const called = combosOf(readFileSync(t ? `${dir}/bb-river-${code(t.card)}.txt` : `${dir}/bb-turn.txt`, "utf8"), board);
  const bbGroup = (c: Combo) => priceGroupOf(c.cards, board, cut);
  const levels = [whole, called, whole.filter((c) => L2_GROUPS.has(bbGroup(c))), whole.filter((c) => L3_GROUPS.has(bbGroup(c)))];

  // Every made BTN combo, by hand: A7s and A7o are one hand for the player (its
  // most common group names the hand).
  const byHand = new Map<string, { combos: [Card, Card][]; weight: number; cats: Map<PGroup, number> }>();
  for (const c of btnRangeCombos(board).combos) {
    let g = madeGroup(priceGroupOf(c.cards, board, cut), c.cards, board, cut);
    const ace = Math.max(c.cards[0].r, c.cards[1].r) === 14;
    // Noam 2026-11-11: ace-high with only a backdoor draw is ace-high; a real draw is not asked.
    if (g === "imp" && ace && !realDraw(c.cards, board)) g = "khnd";
    if (!MADE.has(g)) continue;
    if (g === "khnd" && !ace) continue;
    const key = handKey(c.hand, c.cards, g, board);
    const cur = byHand.get(key) ?? { combos: [] as [Card, Card][], weight: 0, cats: new Map<PGroup, number>() };
    cur.combos.push(c.cards);
    cur.weight += c.weight;
    cur.cats.set(g, (cur.cats.get(g) ?? 0) + c.weight);
    byHand.set(key, cur);
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

  const reviewed = t ? undefined : REVIEWED[name];
  if (!reviewed) groups = principleGroups(name, board, hands);
  if (reviewed) {
    const byKey = new Map(hands.map((h) => [h.key, h]));
    const listed = new Set(reviewed.flatMap((g) => g.hands));
    const missing = hands.filter((h) => !listed.has(h.key)).map((h) => h.key);
    const unknown = [...listed].filter((k) => !byKey.has(k));
    if (missing.length || unknown.length) throw new Error(`${name} review: not listed ${missing.join(" ")} · not made hands ${unknown.join(" ")}`);
    groups = reviewed.map((g) => ({ box: g.box, name: g.name, hands: g.hands.map((k) => byKey.get(k)!) }));
  }

  return { name, board, hands, reviewed: !!reviewed, groups: groups.map((g) => ({ ...g, hands: g.hands.sort((a, b) => at(b) - at(a) || b.eq[1] - a.eq[1]) })) };
}

/** " with a ♦" when every hand has the flush draw, " without a ♦" when the group splits off from them. */
function fdText(keys: string[], board: Card[]): string {
  const suit = flushSuit(board);
  if (!suit) return "";
  const sym = { s: "♠", h: "♥", d: "♦", c: "♣" }[suit];
  if (keys.every((k) => k.endsWith("+fd"))) return ` with a ${sym}`;
  return "";
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

/** A reviewed group's box is Noam's: the reason just shows its equity. */
function whyReviewed(box: Bucket, eq: number[], source: string, street = "flop"): string {
  const p = (x: number) => `${Math.round(x * 100)}%`;
  const all = street === "turn" ? "BB's range after the flop call" : "BB's whole range";
  return `${BOX_TEXT[box]} (${source}). Wins ${p(eq[3])} against BB's top pair or better, ${p(eq[1])} against the hands that call a ${street} bet, ${p(eq[0])} against ${all}.`;
}

const TURN = process.argv.includes("--turn");
const FORCE = process.argv.includes("--force");
const args = process.argv.slice(2).filter((a) => a !== "--turn" && a !== "--force");
/** Turns Noam has reviewed (2026-11-13): a general rule never changes them. Only his own note on
 * that turn does: rerun it with --force after adding the note to BOARD_NOTES. */
const REVIEWED_TURNS = new Set(["A72-6d", "962-8d", "KQ4-8s", "QT7-Jh", "962-2c", "886-Jd"]);
let locked = 0;
const flops = args.length ? args.map((a) => a.split("-")[0]) : BOARDS.map((b) => b.name);
/** With --turn: every turn of the named flops ("A72"), or one turn ("A72-Qh"). */
const spots: [string, number | undefined][] = TURN
  ? (args.length ? args : flops).flatMap((a) => {
      const flop = a.split("-")[0];
      const turns = BOARDS.find((b) => b.name === flop)!.turns;
      return turns.map((tt, i): [string, number] => [flop, i]).filter(([, i]) => !a.includes("-") || a === `${flop}-${code(turns[i].card)}`);
    })
  : flops.map((n): [string, undefined] => [n, undefined]);
const DIR = TURN ? "decisions/ranges/turn-equity" : "decisions/ranges/flop-equity";
const STREET = TURN ? "turn" : "flop";
const levelText = TURN ? ["BB after calling the flop", "BB after calling a turn bet", "BB's middle pair or better", "BB's top pair or better"] : LEVEL_TEXT;
const out: string[] = [];
const done: string[] = [];
mkdirSync(DIR, { recursive: true });
for (const [flopName, turn] of spots) {
  const spotName = turn === undefined ? flopName : `${flopName}-${code(BOARDS.find((b) => b.name === flopName)!.turns[turn].card)}`;
  if (TURN && REVIEWED_TURNS.has(spotName) && !FORCE) {
    console.log(`${spotName}: reviewed by Noam, left as it is (--force to change it)`);
    locked++;
    continue;
  }
  const t0 = Date.now();
  const r = solveBoard(flopName, turn);
  const name = r.name;
  done.push(name);
  const avg = (g: Group) => [0, 1, 2, 3].map((l) => g.hands.reduce((s, h) => s + h.eq[l] * h.weight, 0) / g.hands.reduce((s, h) => s + h.weight, 0));
  const groups = r.groups.map((g, i) => ({
    id: `g${i + 1}`,
    label: g.name ?? labelOf(g.hands.map((h) => h.key)),
    handsLabel: labelOf(g.hands.map((h) => h.key)) + fdText(g.hands.map((h) => h.key), r.board),
    hands: g.hands.map((h) => h.key),
    box: g.box,
    eq: avg(g).map((x) => Math.round(x * 1000) / 10),
    why: whyReviewed(g.box, avg(g), r.reviewed ? "Noam's review" : TURN ? "draft from Noam's flop principles" : "draft from Noam's principles", STREET),
  }));
  out.push(`  ${JSON.stringify(name)}: ${JSON.stringify(groups)},`);

  const md = [
    `# ${name} ${STREET} (${r.board.map((c) => ch(c.r) + { s: "♠", h: "♥", d: "♦", c: "♣" }[c.s]).join(" ")}): equity groups`,
    "",
    `Generated ${new Date().toISOString().slice(0, 10)} by scripts/analysis/flop-equity-groups.ts${TURN ? " --turn" : ""} (${SAMPLES} samples per hand and level).`,
    TURN
      ? "BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:"
      : "BTN opens, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:",
    levelText.map((t, i) => `L${i} = ${t}`).join(" · ") + ".",
    "Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.",
    "",
    "| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |",
    "|---|---|---|---|---|---|---|---|",
    ...groups.map((g) => `| ${g.id} | ${BOX_TEXT[g.box]} | ${g.label} | ${g.handsLabel} | ${g.eq.map((x) => `${Math.round(x)}%`).join(" | ")} |`),
    "",
    "## Every hand",
    "",
    "| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |",
    "|---|---|---|---|---|---|---|---|",
    ...r.groups.flatMap((g, i) => g.hands.map((h) => `| ${h.key} | ${h.cat} | ${h.eq.map((x) => `${Math.round(x * 100)}%`).join(" | ")} | ${BOX_TEXT[h.box]} | g${i + 1} |`)),
    "",
  ].join("\n");
  writeFileSync(`${DIR}/${name}.md`, md);
  console.log(`${name}: ${groups.length} groups, ${r.hands.length} hands (${Math.round((Date.now() - t0) / 1000)}s)`);
  for (const g of groups) console.log(`  ${g.id} ${BOX_TEXT[g.box].padEnd(14)} ${g.label} (${g.handsLabel})`);
}

// With boards named, only their lines change; the other boards stay as generated.
const FILE = TURN ? "src/lib/drill/postflop/turn-groups.ts" : "src/lib/drill/postflop/flop-groups.ts";
if ((args.length || locked) && existsSync(FILE)) {
  let text = readFileSync(FILE, "utf8");
  for (const [i, name] of done.entries()) {
    const re = new RegExp(`^  ${JSON.stringify(name)}: .*,$`, "m");
    if (!re.test(text)) throw new Error(`${name} is not in ${FILE}`);
    text = text.replace(re, () => out[i]);
  }
  writeFileSync(FILE, text);
} else if (TURN) {
  writeFileSync(
    FILE,
    [
      "// Generated by scripts/analysis/flop-equity-groups.ts --turn — do not edit by hand.",
      "// Turn drill (Noam 2026-11-12): BTN bet the flop small, BB called; BTN's made hands on each",
      "// turn, grouped and boxed by equity with Noam's flop principles. Reports: decisions/ranges/turn-equity/.",
      'import type { FlopGroup } from "./flop-groups";',
      "",
      '/** By spot, e.g. "A72-Qh". eq = the group\'s equity (%) vs BB after the flop call, BB after a turn call, BB\'s middle pair+, BB\'s top pair+. */',
      "export const TURN_GROUPS: Record<string, FlopGroup[]> = {",
      ...out,
      "};",
      "",
    ].join("\n"),
  );
} else {

  writeFileSync(
    FILE,
    [
      "// Generated by scripts/analysis/flop-equity-groups.ts — do not edit by hand.",
      "// Flop drill (Noam & Uri 2026-11-10): BTN's made hands on each flop, grouped and",
      "// boxed by equity against a ladder of BB ranges. Reports: decisions/ranges/flop-equity/.",
      'import type { Bucket } from "./price-hands";',
      "",
      "/** eq = the group's equity (%) vs BB's whole range, BB after calling a flop bet, BB's middle pair+, BB's top pair+. */",
      "/** label = the group's name (words once reviewed, else its hands); handsLabel = its hands, e.g. \"AK–AT\". */",
      "export type FlopGroup = { id: string; label: string; handsLabel?: string; hands: string[]; box: Bucket; eq: number[]; why: string };",
      "",
      "export const FLOP_GROUPS: Record<string, FlopGroup[]> = {",
      ...out,
      "};",
      "",
    ].join("\n"),
  );
}
