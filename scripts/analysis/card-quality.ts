// Good card, bad card + Round to 100 or 0 (Noam & Uri 2026-11-20). For every flop (turn cards) and
// every solved turn (river cards), how each card changes BTN's whole range against BB's calling range:
// BTN's range equity on that card minus its average over all cards (our equity calculator).
// Draft verdict until Uri sets one: +2.5 points or more = good card (bet the whole range),
// −2.5 or less = bad card (check the whole range), in between = close (either answer is right).
// Where a TexasSolver solve exists (3 turns per flop, 2 rivers per turn) the solver's bet % for
// BTN's whole range on that card is added, to check the draft against.
// Cards are grouped like hand groups (Tetris pieces): one piece per rank, the flush suit's cards apart
// when a flush can come; neighbouring ranks with the same verdict join (at most 8 pieces).
// Writes src/lib/drill/postflop/card-quality.json and decisions/ranges/cards/<spot>.md.
// Usage: npx tsx scripts/analysis/card-quality.ts [board ...]
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { score } from "./price-equity";
import type { Card } from "../../src/lib/drill/postflop/line-demo";
import { BOARDS } from "../../src/lib/drill/postflop/price-hands";

const RUNS = "C:/Users/noams/Developer/tools/TexasSolver/runs";
const SOLVER = "decisions/ranges/solver";
const OUT = "src/lib/drill/postflop/card-quality.json";
const DIR = "decisions/ranges/cards";
const SAMPLES = Number(process.env.SAMPLES ?? 6000);
const GOOD = 2.5;
const RANKS = "AKQJT98765432";
const SUITS = ["s", "h", "d", "c"] as const;
const GLYPH: Record<string, string> = { "♠": "s", "♥": "h", "♦": "d", "♣": "c" };
const SUIT_NAME: Record<string, string> = { s: "♠", h: "♥", d: "♦", c: "♣" };
const rv = (c: string) => 14 - RANKS.indexOf(c);
const ch = (r: number) => RANKS[14 - r];
const code = (c: string) => c[0] + GLYPH[c.slice(1)];
const parse = (c: string): Card => ({ r: rv(c[0]), s: c[1] as Card["s"] });
const same = (a: Card, b: Card) => a.r === b.r && a.s === b.s;
const txt = (c: Card) => ch(c.r) + c.s;

type W = { cards: [Card, Card]; w: number };
function combos(spec: string, dead: Card[]): W[] {
  const out: W[] = [];
  for (const p of spec.trim().split(",")) {
    if (!p) continue;
    const [h, w] = p.split(":");
    const a = rv(h[0]), b = rv(h[1]);
    const kind = h.length === 2 ? "p" : h[2];
    for (const s1 of SUITS)
      for (const s2 of SUITS) {
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
const ipRange = (input: string) => readFileSync(input, "utf8").split(/\r?\n/).find((l) => l.startsWith("set_range_ip "))!.slice(13);

function pick(xs: W[], total: number): W {
  let x = Math.random() * total;
  for (const c of xs) if ((x -= c.w) <= 0) return c;
  return xs[xs.length - 1];
}
/** BTN's range equity vs BB's range on `board` (random cards to the river). */
function rangeEquity(btnSpec: string, bbSpec: string, board: Card[]): number {
  const btn = combos(btnSpec, board), bb = combos(bbSpec, board);
  const tb = btn.reduce((s, c) => s + c.w, 0), tB = bb.reduce((s, c) => s + c.w, 0);
  let win = 0, n = 0;
  for (let i = 0; i < SAMPLES; i++) {
    const h = pick(btn, tb);
    const v = pick(bb, tB);
    if (v.cards.some((c) => h.cards.some((d) => same(c, d)))) continue;
    const run = [...board];
    while (run.length < 5) {
      const c = { r: 2 + Math.floor(Math.random() * 13), s: SUITS[Math.floor(Math.random() * 4)] } as Card;
      if ([...run, ...h.cards, ...v.cards].some((d) => same(d, c))) continue;
      run.push(c);
    }
    const a = score([...h.cards, ...run]), b = score([...v.cards, ...run]);
    win += a > b ? 1 : a === b ? 0.5 : 0;
    n++;
  }
  return (win / n) * 100;
}

/** BTN's whole-range bet % at the start of a solved street (BB checks first). */
function solverBetPct(json: string, input: string): number | null {
  if (!existsSync(json)) return null;
  const tree = JSON.parse(readFileSync(json, "utf8"));
  const ip = tree.childrens.CHECK;
  const acts: string[] = ip.strategy.actions;
  const prior = new Map(ipRange(input).split(",").map((p) => [p.split(":")[0], Number(p.split(":")[1] ?? 1)] as const));
  const cls = (c: string) => {
    const [a, b] = [c[0], c[2]].sort((x, y) => RANKS.indexOf(x) - RANKS.indexOf(y));
    return a === b ? a + b : a + b + (c[1] === c[3] ? "s" : "o");
  };
  let bet = 0, all = 0;
  for (const [combo, probs] of Object.entries(ip.strategy.strategy as Record<string, number[]>)) {
    const w = prior.get(cls(combo)) ?? 0;
    all += w;
    bet += w * acts.reduce((s, a, i) => s + (a.startsWith("BET") ? probs[i] : 0), 0);
  }
  return all ? (bet / all) * 100 : null;
}

export type CardVerdict = "good" | "bad" | "close";
export type CardPiece = { id: string; label: string; cards: string[]; eq: number; delta: number; solverBet: number | null; answer: CardVerdict; why: string };
export type CardSpot = { street: "turn" | "river"; board: string[]; avg: number; pieces: CardPiece[] };

const verdict = (d: number): CardVerdict => (d >= GOOD ? "good" : d <= -GOOD ? "bad" : "close");
const RANK_WORD: Record<number, string> = { 14: "Ace", 13: "King", 12: "Queen", 11: "Jack", 10: "Ten", 9: "Nine", 8: "Eight", 7: "Seven", 6: "Six", 5: "Five", 4: "Four", 3: "Three", 2: "Two" };

function spotOf(street: CardSpot["street"], board: Card[], btnSpec: string, bbSpec: string, solved: Map<string, number | null>): CardSpot {
  const suitCount = (s: string) => board.filter((c) => c.s === s).length;
  // A flush can come: the suit with 2 cards on a 3-card flop, or 2+ on the turn.
  const flushSuit = SUITS.find((s) => suitCount(s) >= 2);
  const left = SUITS.flatMap((s) => RANKS.split("").map((r) => parse(r + s))).filter((c) => !board.some((b) => same(b, c)));
  const eqOf = new Map<string, number>();
  for (const c of left) eqOf.set(txt(c), rangeEquity(btnSpec, bbSpec, [...board, c]));
  const avg = [...eqOf.values()].reduce((s, x) => s + x, 0) / eqOf.size;

  // One piece per rank (off-suit cards), plus the flush suit's cards as their own piece.
  type P = { label: string; cards: Card[] };
  let parts: P[] = [];
  for (let r = 14; r >= 2; r--) {
    const cs = left.filter((c) => c.r === r && c.s !== flushSuit);
    if (cs.length) parts.push({ label: `${RANK_WORD[r]}s`, cards: cs });
  }
  const eqP = (p: P) => p.cards.reduce((s, c) => s + eqOf.get(txt(c))!, 0) / p.cards.length;
  // Neighbouring ranks with the same verdict join, until at most 7 rank pieces are left.
  const join = (i: number) => {
    const [a, b] = [parts[i], parts[i + 1]];
    parts.splice(i, 2, { label: "", cards: [...a.cards, ...b.cards] });
  };
  for (let guard = 0; parts.length > 7 && guard < 20; guard++) {
    let best = -1, gap = Infinity;
    for (let i = 0; i + 1 < parts.length; i++) {
      if (verdict(eqP(parts[i]) - avg) !== verdict(eqP(parts[i + 1]) - avg)) continue;
      const g = Math.abs(eqP(parts[i]) - eqP(parts[i + 1]));
      if (g < gap) {
        gap = g;
        best = i;
      }
    }
    if (best < 0) break;
    join(best);
  }
  parts = parts.map((p) => {
    const ranks = [...new Set(p.cards.map((c) => c.r))].sort((a, b) => b - a);
    return { ...p, label: ranks.length === 1 ? `${RANK_WORD[ranks[0]]}s` : ranks.length === 2 ? `${ch(ranks[0])} or ${ch(ranks[1])}` : `${ch(ranks[0])} down to ${ch(ranks[ranks.length - 1])}` };
  });
  if (flushSuit) parts.push({ label: `Any ${SUIT_NAME[flushSuit]} (flush card)`, cards: left.filter((c) => c.s === flushSuit) });

  const where = street === "turn" ? "turn" : "river";
  const pieces = parts.map((p, i): CardPiece => {
    const eq = eqP(p);
    const delta = eq - avg;
    const ans = verdict(delta);
    const solvedHere = p.cards.map((c) => solved.get(txt(c))).filter((x): x is number => x != null);
    const solverBet = solvedHere.length ? solvedHere.reduce((s, x) => s + x, 0) / solvedHere.length : null;
    const why =
      `${ans === "good" ? "Good card for BTN" : ans === "bad" ? "Bad card for BTN" : "Neutral card: it barely changes who's ahead"}. ` +
      `BTN's range has ${eq.toFixed(0)}% against BB's range on this ${where} (${delta >= 0 ? "+" : ""}${delta.toFixed(1)} vs an average card, ${avg.toFixed(0)}%).` +
      (solverBet != null ? ` The solver bets ${solverBet.toFixed(0)}% of BTN's range on it.` : "");
    return { id: `c${i + 1}`, label: p.label, cards: p.cards.map(txt), eq: +eq.toFixed(1), delta: +delta.toFixed(1), solverBet: solverBet == null ? null : +solverBet.toFixed(0), answer: ans, why };
  });
  return { street, board: board.map(txt), avg: +avg.toFixed(1), pieces };
}

const names = process.argv.slice(2);
const all: Record<string, CardSpot> = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : {};
mkdirSync(DIR, { recursive: true });
const V = { good: "Good", bad: "Bad", close: "Neutral" };
function report(name: string, s: CardSpot) {
  writeFileSync(
    `${DIR}/${name}.md`,
    [
      `# Good card, bad card · ${s.street} cards after ${name} (${s.board.join(" ")})`,
      "",
      `BTN's whole range vs BB's calling range; average card: BTN ${s.avg}%. Draft rule: +${GOOD} or more = good (bet it all), −${GOOD} or less = bad (check it all). Equity calculator; solver bet % where solved. For Uri.`,
      "",
      "| Cards | BTN equity | vs average | Solver bets | Answer |",
      "|---|---|---|---|---|",
      ...s.pieces.map((p) => `| ${p.label} (${p.cards.join(" ")}) | ${p.eq}% | ${p.delta >= 0 ? "+" : ""}${p.delta} | ${p.solverBet == null ? "–" : p.solverBet + "%"} | ${V[p.answer]} |`),
      "",
    ].join("\n"),
  );
}
for (const b of BOARDS.filter((x) => !names.length || names.includes(x.name))) {
  const dir = `${RUNS}/${b.name}`;
  const flop = b.flop.map((c) => parse(code(c)));
  const btn = ipRange(`${dir}/flop.txt`);
  const bbTurn = readFileSync(`${SOLVER}/${b.name}/bb-turn.txt`, "utf8");
  const solvedTurns = new Map<string, number | null>();
  for (const t of b.turns) solvedTurns.set(code(t.card), solverBetPct(`${dir}/turn-${code(t.card)}.json`, `${dir}/turn-${code(t.card)}.txt`));
  all[b.name] = spotOf("turn", flop, btn, bbTurn, solvedTurns);
  report(b.name, all[b.name]);
  console.log(b.name, "turn cards:", all[b.name].pieces.length, "pieces");
  for (const t of b.turns) {
    const tc = code(t.card);
    const riverRange = `${SOLVER}/${b.name}/bb-river-${tc}.txt`;
    if (!existsSync(riverRange)) continue;
    const solvedRivers = new Map<string, number | null>();
    for (const r of t.rivers) solvedRivers.set(code(r.card), solverBetPct(`${dir}/river-${tc}-${code(r.card)}.json`, `${dir}/river-${tc}-${code(r.card)}.txt`));
    const name = `${b.name}-${tc}`;
    all[name] = spotOf("river", [...flop, parse(tc)], btn, readFileSync(riverRange, "utf8"), solvedRivers);
    report(name, all[name]);
    console.log(name, "river cards:", all[name].pieces.length, "pieces");
  }
}
writeFileSync(OUT, JSON.stringify(all));
console.log(`${Object.keys(all).length} spots written to ${OUT}`);
