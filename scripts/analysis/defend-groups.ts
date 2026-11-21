// Defend drill (Noam & Uri 2026-11-20): we're the BB, BTN bets the flop, the turn and the river
// (the attack drill's line: flop 33%, the board's turn size, river about 66%). BB only calls or folds.
// For every spot: BB's range there, split into groups (Tetris pieces), and the EV of calling with each.
// Answer per group by EV (Noam 2026-11-21: "we don't need equity, just whether the call is +EV, 0 EV or −EV"):
// EV of the call (bb, both then playing the solver's strategy, scripts/analysis/bb-call-ev.ts)
// +0.5bb or more = Call, between −0.5 and +0.5 = Bluff-catch (about 0 EV, the solver is indifferent), −0.5 or less = Fold.
// Reads the TexasSolver results in C:/Users/noams/Developer/tools/TexasSolver/runs/<board>/ (solve-board.ts).
// Writes src/lib/drill/postflop/defend-groups.json and decisions/ranges/defend-drill/<spot>.md.
// Usage: npx tsx scripts/analysis/defend-groups.ts [board ...]
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { score } from "./price-equity";
import { bbCallEv } from "./bb-call-ev";
import type { Card } from "../../src/lib/drill/postflop/line-demo";
import { BOARDS } from "../../src/lib/drill/postflop/price-hands";

const RUNS = "C:/Users/noams/Developer/tools/TexasSolver/runs";
const OUT = "src/lib/drill/postflop/defend-groups.json";
const DIR = "decisions/ranges/defend-drill";
/** EV (bb) band around 0 that is a bluff-catch (Noam 2026-11-21: "between 0 and 0.5"). */
const BLUFF = 0.5;
const tierOf = (ev: number) => (ev >= BLUFF ? 0 : ev > -BLUFF ? 1 : 2);
const RANKS = "AKQJT98765432";
const SUITS = ["s", "h", "d", "c"] as const;
const rv = (c: string) => 14 - RANKS.indexOf(c);
const ch = (r: number) => RANKS[14 - r];
const GLYPH: Record<string, string> = { "♠": "s", "♥": "h", "♦": "d", "♣": "c" };
const code = (c: string) => c[0] + GLYPH[c.slice(1)];
const parse = (c: string): Card => ({ r: rv(c[0]), s: c[1] as Card["s"] });
const same = (a: Card, b: Card) => a.r === b.r && a.s === b.s;

type Node = { actions?: string[]; childrens?: Record<string, Node>; strategy?: { actions: string[]; strategy: Record<string, number[]> } };

/** "AcKd" → "AKo". */
function classOf(combo: string): string {
  const [a, b] = [combo[0], combo[2]].sort((x, y) => RANKS.indexOf(x) - RANKS.indexOf(y));
  return a === b ? a + b : a + b + (combo[1] === combo[3] ? "s" : "o");
}

function rangeOf(input: string, who: "oop" | "ip"): Map<string, number> {
  const m = new Map<string, number>();
  const tag = `set_range_${who} `;
  for (const l of readFileSync(input, "utf8").split(/\r?\n/)) {
    if (!l.startsWith(tag)) continue;
    for (const p of l.slice(tag.length).split(",")) {
      const [h, w] = p.split(":");
      m.set(h, Number(w ?? 1));
    }
  }
  return m;
}

const prob = (n: Node, action: (a: string) => boolean) => {
  const acts = n.strategy!.actions;
  const idx = acts.map((a, i) => (action(a) ? i : -1)).filter((i) => i >= 0);
  return (combo: string) => idx.reduce((s, i) => s + (n.strategy!.strategy[combo]?.[i] ?? 0), 0);
};

// ---------- BB's hand, in plain categories (strongest feature first) ----------
const CATS = [
  "Two pair or better",
  "Overpairs",
  "Top pair",
  "Pair + draw",
  "Pocket pairs under the top card",
  "Second pair",
  "Third pair or lower",
  "Small pocket pairs",
  "Flush draws",
  "Open-enders",
  "Gutshots",
  "Ace-high",
  "Two overcards",
  "Backdoor flush draws",
  "King-high and worse",
] as const;
type Cat = (typeof CATS)[number];
// Groups only ever join inside one family (Noam 2026-11-21: 99, 77 and A2s were one group on 8-8-6-2
// because all three call). Pocket pairs with pocket pairs, board pairs with board pairs, and so on.
const FAMILY: Record<Cat, string> = {
  "Two pair or better": "strong",
  Overpairs: "pocket",
  "Pocket pairs under the top card": "pocket",
  "Small pocket pairs": "pocket",
  "Top pair": "top",
  // Noam 2026-11-21 (A-7-6-K turn): a pair with a flush draw is a +EV call, its own group.
  "Pair + draw": "pairdraw",
  "Second pair": "pair",
  "Third pair or lower": "pair",
  "Flush draws": "draw",
  "Open-enders": "draw",
  Gutshots: "draw",
  "Ace-high": "air",
  "Two overcards": "air",
  "Backdoor flush draws": "air",
  "King-high and worse": "air",
};

const catOf5 = (cards: Card[]) => Math.floor(score(cards) / 15 ** 5);
function straightOuts(hole: Card[], board: Card[]): number {
  const has = (cards: Card[]) => {
    const set = new Set(cards.map((c) => c.r));
    if (set.has(14)) set.add(1);
    for (let hi = 14; hi >= 5; hi--) {
      let ok = true;
      for (let r = hi; r > hi - 5; r--) if (!set.has(r)) ok = false;
      if (ok) return true;
    }
    return false;
  };
  let outs = 0;
  for (let r = 2; r <= 14; r++) {
    const c = { r, s: "x" } as unknown as Card;
    if (has([...hole, ...board, c]) && !has([...board, c])) outs++;
  }
  return outs;
}

function categoryOf(hole: [Card, Card], board: Card[]): Cat {
  const cat = catOf5([...hole, ...board]);
  const boardCat = catOf5(board);
  const ranks = [...new Set(board.map((c) => c.r))].sort((a, b) => b - a);
  const top = ranks[0];
  // Trips or better, or two pair with both hole cards (unpaired board): strong.
  if (cat >= 3 && cat > boardCat) return "Two pair or better";
  if (cat === 2 && boardCat === 0 && hole[0].r !== hole[1].r) return "Two pair or better";
  const pocket = hole[0].r === hole[1].r;
  const hits = hole.filter((h) => ranks.includes(h.r)).map((h) => ranks.indexOf(h.r));
  if (pocket && !ranks.includes(hole[0].r)) {
    if (hole[0].r > top) return "Overpairs";
    if (hole[0].r < ranks[ranks.length - 1]) return "Small pocket pairs";
    return "Pocket pairs under the top card";
  }
  if (hits.length) {
    const best = Math.min(...hits);
    // A pair below top pair with a flush draw or an open-ender (Noam 2026-11-21): its own group.
    if (best > 0 && board.length < 5) {
      const fd = hole.some((h) => [...hole, ...board].filter((c) => c.s === h.s).length >= 4);
      if (fd || straightOuts(hole, board) >= 2) return "Pair + draw";
    }
    return best === 0 ? "Top pair" : best === 1 ? "Second pair" : "Third pair or lower";
  }
  if (board.length < 5) {
    const suitCount = (s: string) => [...hole, ...board].filter((c) => c.s === s).length;
    const fd = hole.some((h) => suitCount(h.s) >= 4);
    if (fd) return "Flush draws";
    const outs = straightOuts(hole, board);
    if (outs >= 2) return "Open-enders";
    if (outs === 1) return "Gutshots";
  }
  if (hole.some((h) => h.r === 14)) return "Ace-high";
  if (hole.every((h) => h.r > top)) return "Two overcards";
  if (board.length === 3 && hole[0].s === hole[1].s && board.some((c) => c.s === hole[0].s)) return "Backdoor flush draws";
  return "King-high and worse";
}

/** "AKs, AKo, AQs" → "AK, AQs" (suited and offsuit together when both are there), strongest first. */
function handsLabel(classes: string[]): string {
  const set = new Set(classes);
  const out: string[] = [];
  const order = (h: string) => RANKS.indexOf(h[0]) * 20 + RANKS.indexOf(h[1]) + (h[2] === "o" ? 0.5 : 0);
  for (const h of [...set].sort((a, b) => order(a) - order(b))) {
    if (h.length === 3 && set.has(h.slice(0, 2) + (h[2] === "s" ? "o" : "s"))) {
      if (h[2] === "s") out.push(h.slice(0, 2));
      continue;
    }
    out.push(h);
  }
  return out.length > 12 ? `${out.slice(0, 11).join(", ")} +${out.length - 11} more` : out.join(", ");
}

export type DefendGroup = {
  id: string;
  label: string;
  handsLabel: string;
  /** Hand classes and BB's weight of each in this group (for the matrix). */
  cells: Record<string, number>;
  /** Up to 6 real hands for the card fan, e.g. "AcKd". */
  fan: string[];
  /** How often the solver continues (call or raise), 0–100. */
  callPct: number;
  /** EV of calling, bb (folding = 0). */
  ev: number;
  /** Share of BB's range at this spot, 0–100. */
  share: number;
  answer: "call" | "fold" | "bluff";
  why: string;
};
export type DefendSpot = {
  street: "flop" | "turn" | "river";
  board: string[];
  pot: number;
  bet: number;
  behind: number;
  /** Equity a call needs: bet / (pot + 2 bets). */
  need: number;
  /** The flop's EV checks hands down from the river (the flop solve's dump stops at the turn). */
  approx?: boolean;
  /** Combos per hand class still live (for the matrix). */
  basis: Record<string, number>;
  groups: DefendGroup[];
};

function spotOf(street: DefendSpot["street"], board: Card[], json: string, input: string, pot: number, betBb: number, behind: number, prefix: string): DefendSpot {
  const tree = JSON.parse(readFileSync(json, "utf8")) as Node;
  const bbPrior = rangeOf(input, "oop");
  const checks = prob(tree, (a) => a === "CHECK");
  const ip = tree.childrens!.CHECK;
  const bets = Object.keys(ip.childrens!).filter((a) => a.startsWith("BET"));
  const bet = bets.sort((a, b) => Math.abs(Number(a.split(" ")[1]) - betBb) - Math.abs(Number(b.split(" ")[1]) - betBb))[0];
  const realBet = Number(bet.split(" ")[1]);
  const bbNode = ip.childrens![bet];
  const cont = prob(bbNode, (a) => a !== "FOLD");
  const { ev: evMap, checkedDown } = bbCallEv(tree as never, input, bet);

  // BB's live combos and how often each continues.
  type BB = { combo: string; cls: string; cards: [Card, Card]; w: number; c: number; ev: number; cat: Cat };
  const bb: BB[] = [];
  for (const combo of Object.keys(bbNode.strategy!.strategy)) {
    const cls = classOf(combo);
    const w = (bbPrior.get(cls) ?? 0) * checks(combo);
    if (w < 0.005 || !evMap.has(combo)) continue;
    const cards: [Card, Card] = [parse(combo.slice(0, 2)), parse(combo.slice(2))];
    bb.push({ combo, cls, cards, w, c: cont(combo), ev: evMap.get(combo)!, cat: categoryOf(cards, board) });
  }
  const total = bb.reduce((s, x) => s + x.w, 0);

  // Groups: one per category; a category whose hands split around 50% becomes two groups.
  type G = { label: string; hands: BB[]; fam: string };
  const groups: G[] = [];
  for (const cat of CATS) {
    const hands = bb.filter((x) => x.cat === cat);
    if (!hands.length) continue;
    const byCls = new Map<string, { w: number; e: number }>();
    for (const h of hands) {
      const cur = byCls.get(h.cls) ?? { w: 0, e: 0 };
      byCls.set(h.cls, { w: cur.w + h.w, e: cur.e + h.w * h.ev });
    }
    // Split by the answer of each hand class (call ≥75%, mixed, fold ≤25%); a part under 12% of
    // the category joins the next part, so a group never mixes a clear call with a clear fold.
    const tier = (k: string) => {
      const v = byCls.get(k)!;
      return tierOf(v.e / v.w);
    };
    const wAll = hands.reduce((s, h) => s + h.w, 0);
    const parts: BB[][] = [0, 1, 2].map((t) => hands.filter((h) => tier(h.cls) === t)).filter((p) => p.length);
    for (let i = 0; i < parts.length; i++) {
      const w = parts[i].reduce((s, h) => s + h.w, 0);
      if (w >= 0.12 * wAll || parts.length === 1) continue;
      const into = parts[i + 1] ?? parts[i - 1];
      into.push(...parts[i]);
      parts.splice(i, 1);
      i = -1;
    }
    for (const p of parts) groups.push({ label: cat, hands: p, fam: FAMILY[cat] });
  }
  const wOf = (g: G) => g.hands.reduce((s, h) => s + h.w, 0);
  const callOf = (g: G) => (g.hands.reduce((s, h) => s + h.w * h.c, 0) / wOf(g)) * 100;
  // pctOf: the group's EV of calling; the order and the answer go by it.
  const pctOf = (g: G) => g.hands.reduce((s, h) => s + h.w * h.ev, 0) / wOf(g);
  const answerOf = (e: number): DefendGroup["answer"] => (["call", "bluff", "fold"] as const)[tierOf(e)];
  // Strongest (most calls) first; a tiny group joins its neighbor with the same answer.
  groups.sort((a, b) => pctOf(b) - pctOf(a));
  // Never overwhelm (Uri): at most 9 groups, so past that the smallest ones join a neighbor too.
  const MAX_GROUPS = 9;
  const join = (g: G, n: G) => {
    n.hands.push(...g.hands);
    if (!n.label.includes(g.label) && !n.label.includes(" & ")) n.label = `${n.label} & ${g.label.toLowerCase()}`;
    groups.splice(groups.indexOf(g), 1);
    groups.sort((a, b) => pctOf(b) - pctOf(a));
  };
  while (groups.length > MAX_GROUPS) {
    const pair = groups
      .map((g, i) => ({ g, n: groups.filter((x) => x !== g && x.fam === g.fam && answerOf(pctOf(x)) === answerOf(pctOf(g))).sort((a, b) => wOf(a) - wOf(b))[0] }))
      .filter((x) => x.n)
      .sort((a, b) => wOf(a.g) + wOf(a.n) - (wOf(b.g) + wOf(b.n)))[0];
    if (!pair) break;
    join(pair.g, pair.n);
  }
  for (let i = 0; i < groups.length; i++) {
    const g = groups[i];
    if (wOf(g) / total >= 0.02 || groups.length <= 3) continue;
    const ans = answerOf(pctOf(g));
    const n = groups.filter((x) => x !== g && x.fam === g.fam && answerOf(pctOf(x)) === ans).sort((a, b) => Math.abs(pctOf(a) - pctOf(g)) - Math.abs(pctOf(b) - pctOf(g)))[0];
    if (!n) continue;
    n.hands.push(...g.hands);
    if (!n.label.includes(g.label) && !n.label.includes(" & ")) n.label = `${n.label} & ${g.label.toLowerCase()}`;
    groups.splice(i, 1);
    i = -1;
    groups.sort((a, b) => pctOf(b) - pctOf(a));
  }
  // A group made of several categories gets its family's plain name.
  for (const g of groups) {
    if (!g.label.includes(" & ")) continue;
    if (g.fam === "pocket") g.label = `Pocket pairs ${[...new Set(g.hands.map((h) => h.cls))].sort((a, b) => "AKQJT98765432".indexOf(a[0]) - "AKQJT98765432".indexOf(b[0])).join(", ")}`;
    else if (g.fam === "air") g.label = g.hands.some((h) => h.cat === "Ace-high") ? "Ace-high and worse" : "No pair, no draw";
    else if (g.fam === "draw") g.label = "Draws";
    else if (g.fam === "pair") g.label = "Second pair and weaker pairs";
  }
  // Two groups with one name: tell them apart by their hands.
  const named = new Map<string, number>();
  for (const g of groups) named.set(g.label, (named.get(g.label) ?? 0) + 1);

  const need = (realBet / (pot + 2 * realBet)) * 100;
  const out: DefendGroup[] = groups.map((g, i) => {
    const cells: Record<string, number> = {};
    for (const h of g.hands) cells[h.cls] = +((cells[h.cls] ?? 0) + h.w).toFixed(3);
    const classes = Object.keys(cells);
    const callPct = callOf(g);
    const ev = pctOf(g);
    const answer = answerOf(ev);
    const hl = handsLabel(classes);
    const evTxt = `${ev >= 0 ? "+" : "−"}${Math.abs(ev).toFixed(1)}bb`;
    const why =
      answer === "call"
        ? `Call: calling wins ${evTxt} on average. The solver calls ${callPct.toFixed(0)}%.`
        : answer === "bluff"
          ? `Bluff-catch: calling is worth about 0 (${evTxt}). It beats BTN's bluffs and loses to his value bets; the solver calls ${callPct.toFixed(0)}%.`
          : `Fold: calling loses ${evTxt.slice(1)} on average. The solver calls ${callPct.toFixed(0)}%.`;
    const seen = new Set<string>();
    const fan = g.hands
      .slice()
      .sort((a, b) => b.w - a.w)
      .filter((h) => !seen.has(h.cls) && seen.add(h.cls))
      .slice(0, 6)
      .map((h) => h.combo);
    return {
      id: `${prefix}g${i + 1}`,
      label: (named.get(g.label) ?? 0) > 1 ? `${g.label}: ${hl.split(", ").slice(0, 3).join(", ")}${hl.split(", ").length > 3 ? "…" : ""}` : g.label,
      handsLabel: hl,
      cells,
      fan,
      callPct: +callPct.toFixed(1),
      ev: +ev.toFixed(2),
      share: +((wOf(g) / total) * 100).toFixed(1),
      answer,
      why,
    };
  });
  const basis: Record<string, number> = {};
  for (const x of bb) basis[x.cls] = 0;
  for (const cls of Object.keys(basis)) {
    let n = 0;
    const a = cls[0], b = cls[1], kind = cls.length === 2 ? "p" : cls[2];
    for (const s1 of SUITS) for (const s2 of SUITS) {
      if (kind === "p" && s1 >= s2) continue;
      if (kind === "s" && s1 !== s2) continue;
      if (kind === "o" && s1 === s2) continue;
      const c1 = parse(a + s1), c2 = parse(b + s2);
      if (!board.some((d) => same(d, c1) || same(d, c2))) n++;
    }
    basis[cls] = n;
  }
  return { street, board: board.map((c) => ch(c.r) + c.s), pot, bet: realBet, behind, need: +need.toFixed(1), ...(checkedDown && street === "flop" ? { approx: true } : {}), basis, groups: out };
}

// ---------- every spot of every board ----------
const names = process.argv.slice(2);
const all: Record<string, DefendSpot> = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : {};
mkdirSync(DIR, { recursive: true });
const ANS = { call: "Call", fold: "Fold", bluff: "Bluff-catch" };
function report(name: string, s: DefendSpot) {
  const lines = [
    `# Defend ${s.street} · ${name} (${s.board.join(" ")})`,
    "",
    `BTN bets ${s.bet}bb into ${s.pot}bb. Answer by the EV of calling (Noam 2026-11-21): +${BLUFF}bb or more = Call, −${BLUFF} to +${BLUFF} = Bluff-catch, −${BLUFF} or less = Fold. Source: TexasSolver (our solve); EV = both play the solver's strategy after the call${s.approx ? " (flop: the solve's dump stops at the turn, so hands are checked down from the river; approximate)" : ""}. Draft for Noam and Uri.`,
    "",
    "| Group | Hands | Share | EV of a call | Solver continues | Answer |",
    "|---|---|---|---|---|---|",
    ...s.groups.map((g) => `| ${g.label} | ${g.handsLabel} | ${g.share}% | ${g.ev >= 0 ? "+" : ""}${g.ev}bb | ${g.callPct}% | ${ANS[g.answer]} |`),
    "",
  ];
  writeFileSync(`${DIR}/${name}.md`, lines.join("\n"));
}
for (const b of BOARDS.filter((x) => !names.length || names.includes(x.name))) {
  const dir = `${RUNS}/${b.name}`;
  const flop = b.flop.map((c) => parse(code(c)));
  // The flop re-solved with the turn in the dump (for the EV), when it's there.
  // Without it the EV would check hands down from the turn, too rough: the flop spot waits.
  if (!existsSync(`${dir}/flop-d2.json`)) delete all[b.name];
  else {
    all[b.name] = spotOf("flop", flop, `${dir}/flop-d2.json`, `${dir}/flop-d2.txt`, 5.5, 1.8, 97.5, "f");
    report(b.name, all[b.name]);
    console.log(b.name, "flop:", all[b.name].groups.length, "groups");
  }
  for (const t of b.turns) {
    const tc = code(t.card);
    const turnBoard = [...flop, parse(tc)];
    const over = t.bet === "overbet";
    const tf = `${dir}/turn-${tc}.json`;
    if (existsSync(tf)) {
      const name = `${b.name}-${tc}`;
      all[name] = spotOf("turn", turnBoard, tf, `${dir}/turn-${tc}.txt`, 9.1, over ? 13.7 : 6, 95.7, "t");
      report(name, all[name]);
      console.log(name, "turn:", all[name].groups.length, "groups");
    }
    for (const r of t.rivers) {
      const rc = code(r.card);
      const rf = `${dir}/river-${tc}-${rc}.json`;
      if (!existsSync(rf)) continue;
      const name = `${b.name}-${tc}-${rc}`;
      const pot = over ? 36.5 : 21.1;
      all[name] = spotOf("river", [...turnBoard, parse(rc)], rf, `${dir}/river-${tc}-${rc}.txt`, pot, pot * 0.66, over ? 82 : 89.7, "r");
      report(name, all[name]);
      console.log(name, "river:", all[name].groups.length, "groups");
    }
  }
}
writeFileSync(OUT, JSON.stringify(all));
console.log(`${Object.keys(all).length} spots written to ${OUT}`);
