// Equity of BTN's hand groups vs BB's estimated range, for the "How many bb" drill (Monte Carlo).
// Usage from the repo root: npx tsx scripts/analysis/price-equity.ts A72   (DRAWS=1 splits the draws by kind)
import { readFileSync } from "node:fs";
import { btnRangeCombos, card, type Card } from "../../src/lib/drill/postflop/line-demo";
import { priceGroupOf, RUNOUTS } from "../../src/lib/drill/postflop/price-hands";

const SUITS = ["s", "h", "d", "c"];
const RANKS = "AKQJT98765432";
const rv = (c: string) => 14 - RANKS.indexOf(c);

// ---- 7-card evaluator: returns a comparable number ----
export function score(cards: Card[]): number {
  const byRank = new Map<number, number>();
  const bySuit = new Map<string, number[]>();
  for (const c of cards) {
    byRank.set(c.r, (byRank.get(c.r) ?? 0) + 1);
    bySuit.set(c.s, [...(bySuit.get(c.s) ?? []), c.r]);
  }
  const straightHigh = (rs: number[]) => {
    const set = new Set(rs);
    if (set.has(14)) set.add(1);
    for (let hi = 14; hi >= 5; hi--) {
      let ok = true;
      for (let r = hi; r > hi - 5; r--) if (!set.has(r)) { ok = false; break; }
      if (ok) return hi;
    }
    return 0;
  };
  const pack = (cat: number, ks: number[]) => [...ks, 0, 0, 0, 0, 0].slice(0, 5).reduce((s, k) => s * 15 + k, cat);
  for (const rs of bySuit.values()) if (rs.length >= 5) {
    const sf = straightHigh(rs);
    if (sf) return pack(8, [sf]);
  }
  const groups = [...byRank.entries()].sort((a, b) => b[1] - a[1] || b[0] - a[0]);
  const ranksDesc = [...byRank.keys()].sort((a, b) => b - a);
  if (groups[0][1] === 4) return pack(7, [groups[0][0], ...ranksDesc.filter((r) => r !== groups[0][0])]);
  if (groups[0][1] === 3 && groups[1] && groups[1][1] >= 2) return pack(6, [groups[0][0], groups[1][0]]);
  for (const rs of bySuit.values()) if (rs.length >= 5) return pack(5, rs.sort((a, b) => b - a));
  const st = straightHigh(ranksDesc);
  if (st) return pack(4, [st]);
  if (groups[0][1] === 3) return pack(3, [groups[0][0], ...ranksDesc.filter((r) => r !== groups[0][0])]);
  if (groups[0][1] === 2 && groups[1] && groups[1][1] === 2) {
    const [p1, p2] = [groups[0][0], groups[1][0]];
    return pack(2, [p1, p2, ...ranksDesc.filter((r) => r !== p1 && r !== p2)]);
  }
  if (groups[0][1] === 2) return pack(1, [groups[0][0], ...ranksDesc.filter((r) => r !== groups[0][0])]);
  return pack(0, ranksDesc);
}

// ---- BB's preflop calling range (call share only; 3-bets left) ----
const read = new Map<string, number>();
for (const line of readFileSync("decisions/ranges/defend/BB-vs-BTN.txt", "utf8").split(/\r?\n/)) {
  const l = line.replace(/#.*/, "").trim();
  if (!l) continue;
  const [h, , call] = l.split(/\s+/);
  read.set(h, Number(call) / 100);
}
export type Combo = { cards: [Card, Card]; w: number };
export function bbCombos(dead: Card[]): Combo[] {
  const out: Combo[] = [];
  const isDead = (c: Card) => dead.some((d) => d.r === c.r && d.s === c.s);
  for (const [h, w] of read) {
    if (!w) continue;
    const a = rv(h[0]), b = rv(h[1]);
    const kind = h.length === 2 ? "p" : h[2];
    for (const s1 of SUITS) for (const s2 of SUITS) {
      if (kind === "p" && s1 >= s2) continue;
      if (kind === "s" && s1 !== s2) continue;
      if (kind === "o" && s1 === s2) continue;
      const c1 = { r: a, s: s1 } as Card, c2 = { r: b, s: s2 } as Card;
      if (isDead(c1) || isDead(c2)) continue;
      out.push({ cards: [c1, c2], w });
    }
  }
  return out;
}

// ---- how BB continues after calling a bet on `board` (estimate) ----
// Flop (small bet): any pair, any draw, A-high/K-high, backdoor draws half; else fold.
// Turn (66% or overbet): pairs except the weakest, real draws, A-high half; else fold.
function hasDraw(hole: Card[], board: Card[], backdoor: boolean): "real" | "bd" | null {
  const all = [...hole, ...board];
  for (const s of SUITS) {
    const n = all.filter((c) => c.s === s).length, inHole = hole.some((c) => c.s === s);
    if (inHole && n >= 4) return "real";
  }
  const have = new Set(all.flatMap((c) => (c.r === 14 ? [1, 14] : [c.r])));
  for (let lo = 1; lo <= 10; lo++) {
    let n = 0; for (let r = lo; r < lo + 5; r++) if (have.has(r)) n++;
    const holeIn = hole.filter((c) => (c.r === 14 ? [1, 14] : [c.r]).some((r) => r >= lo && r < lo + 5)).length;
    if (n >= 4 && holeIn >= 1) return "real";
  }
  if (!backdoor) return null;
  for (const s of SUITS) if (hole.every((c) => c.s === s) && board.filter((c) => c.s === s).length >= 1) return "bd";
  for (let lo = 1; lo <= 10; lo++) {
    let n = 0; for (let r = lo; r < lo + 5; r++) if (have.has(r)) n++;
    const holeIn = hole.filter((c) => (c.r === 14 ? [1, 14] : [c.r]).some((r) => r >= lo && r < lo + 5)).length;
    if (n === 3 && holeIn === 2) return "bd";
  }
  return null;
}
export function continueWeight(hole: Card[], board: Card[], street: "flop" | "turn"): number {
  const all = [...hole, ...board];
  const sc = score(all), boardSc = score(board);
  const cat = Math.floor(sc / 15 ** 5);
  const boardRanks = [...new Set(board.map((c) => c.r))].sort((a, b) => b - a);
  const paired = hole.some((c) => board.some((b) => b.r === c.r)) || hole[0].r === hole[1].r;
  if (cat >= 2 && sc > boardSc) return 1;
  if (paired) {
    if (street === "flop") return 1;
    const pr = hole[0].r === hole[1].r ? hole[0].r : hole.find((c) => board.some((b) => b.r === c.r))!.r;
    return pr >= boardRanks[Math.min(1, boardRanks.length - 1)] ? 1 : 0.5; // top two pairs always, weaker half
  }
  const d = hasDraw(hole, board, street === "flop");
  if (d === "real") return 1;
  const hi = Math.max(hole[0].r, hole[1].r);
  if (street === "flop") {
    if (d === "bd") return 0.5;
    return hi >= 13 ? 0.5 : 0;
  }
  return hi === 14 ? 0.5 : 0;
}

// ---- Monte Carlo equity of one BTN combo vs a weighted BB range ----
const DECK: Card[] = [];
for (const r of [14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2]) for (const s of SUITS) DECK.push({ r, s } as Card);
const same = (a: Card, b: Card) => a.r === b.r && a.s === b.s;
function equity(hero: [Card, Card], board: Card[], range: Combo[], iters: number): number {
  const live = range.filter((c) => !c.cards.some((x) => hero.some((h) => same(h, x))));
  const tot = live.reduce((s, c) => s + c.w, 0);
  let win = 0, n = 0;
  for (let i = 0; i < iters; i++) {
    let x = Math.random() * tot, v = live[0];
    for (const c of live) { x -= c.w; if (x <= 0) { v = c; break; } }
    const dead = [...hero, ...board, ...v.cards];
    const runout = [...board];
    while (runout.length < 5) {
      const c = DECK[Math.floor(Math.random() * 52)];
      if (dead.some((d) => same(d, c)) || runout.some((d) => same(d, c))) continue;
      runout.push(c);
    }
    const a = score([...hero, ...runout]), b = score([...v.cards, ...runout]);
    win += a > b ? 1 : a === b ? 0.5 : 0;
    n++;
  }
  return win / n;
}

// ---- one board: flop, each turn, each river (when run directly) ----
function main() {
  const spot = process.argv[2] ?? "A72";
  const runouts = RUNOUTS.filter((r) => r.board === spot);
  const seen = new Set<string>();
  const flop = runouts[0].flop.map(card);
  for (const r of runouts) {
    const turn = card(r.streets[1].card), river = card(r.streets[2].card);
    const boards: [string, Card[], (typeof r.streets)[number]][] = [];
    if (!seen.has("flop")) boards.push(["flop", flop, r.streets[0]]);
    if (!seen.has(r.streets[1].card)) boards.push([`turn ${r.streets[1].card}`, [...flop, turn], r.streets[1]]);
    boards.push([`river ${r.streets[1].card} ${r.streets[2].card}`, [...flop, turn, river], r.streets[2]]);
    seen.add("flop"); seen.add(r.streets[1].card);
    for (const [name, board, cut] of boards) {
      // BB range reaching this street: preflop calls, then continuing on each earlier street.
      let range = bbCombos(board);
      if (board.length >= 4) range = range.map((c) => ({ ...c, w: c.w * continueWeight(c.cards, flop, "flop") })).filter((c) => c.w > 0);
      if (board.length >= 5) range = range.map((c) => ({ ...c, w: c.w * continueWeight(c.cards, board.slice(0, 4), "turn") })).filter((c) => c.w > 0);
      const { combos } = btnRangeCombos(board);
      const groups = new Map<string, { eq: number; w: number }>();
      for (const c of combos) {
        let g: string = priceGroupOf(c.cards, board, cut);
        if (process.env.DRAWS && g === "imp") g = drawKind(c.cards, board);
        if (process.env.DRAWS && g !== "imp" && !g.startsWith("d:")) continue;
        const e = equity(c.cards, board, range, board.length === 5 ? 120 : 160);
        const cur = groups.get(g) ?? { eq: 0, w: 0 };
        groups.set(g, { eq: cur.eq + e * c.weight, w: cur.w + c.weight });
      }
      console.log(`== ${name}  (BB range: ${Math.round(range.reduce((s, c) => s + c.w, 0))} combos)`);
      for (const [g, v] of [...groups].sort((a, b) => b[1].eq / b[1].w - a[1].eq / a[1].w)) console.log(`   ${g.padEnd(9)} ${Math.round((v.eq / v.w) * 100)}%`);
    }
  }

}
if (process.argv[1]?.includes("price-equity")) main();

function drawKind(hole: [Card, Card], board: Card[]): string {
  const all = [...hole, ...board];
  const fd = SUITS.some((s) => hole.some((c) => c.s === s) && all.filter((c) => c.s === s).length >= 4);
  const have = new Set(all.flatMap((c) => (c.r === 14 ? [1, 14] : [c.r])));
  let outs = 0;
  for (let r = 2; r <= 14; r++) {
    if (have.has(r)) continue;
    const t = new Set(have); t.add(r); if (r === 14) t.add(1);
    let made = false;
    for (let lo = 1; lo <= 10; lo++) { let ok = true; for (let x = lo; x < lo + 5; x++) if (!t.has(x)) ok = false; if (ok) { const used = hole.some((c) => (c.r === 14 ? [1,14] : [c.r]).some((v) => v >= lo && v < lo + 5)); if (used) made = true; } }
    if (made) outs++;
  }
  const sd = outs >= 2 ? "oesd" : outs === 1 ? "gut" : "";
  const over = Math.min(hole[0].r, hole[1].r) > Math.max(...board.map((c) => c.r)) ? "+2over" : "";
  if (fd && sd) return "d:combo(" + sd + "+fd)";
  if (fd) return "d:flushdraw" + (Math.max(hole[0].r, hole[1].r) >= 13 ? "-Khigh+" : "-low");
  if (sd) return "d:" + sd + over;
  return board.length === 3 ? "d:backdoor" + (hole[0].s === hole[1].s ? "-flush" : "-straight") : "d:other";
}
