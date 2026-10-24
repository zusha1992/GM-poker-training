/**
 * Flop-to-river "one line" demo: BTN vs BB on one fixed board, BB only
 * calls. BTN keeps betting (small -> overbet -> all-in) and the range
 * narrows street by street. Built to show Uri the FLOW, not accurate
 * strategy: hand groups come from simple rules below, and the answers /
 * explanations are drafts until Noam and Uri replace them.
 *
 * Everything is worked out per real two-card combo (not per matrix square),
 * because suits matter from the turn on: only the both-hearts combo of a
 * suited hand has the flush draw.
 */
import { combosOf, MATRIX_HANDS } from "@/lib/drill/matrix";
import { FAMS } from "@/lib/drill/preflop/families";
import { rfiSpot } from "@/lib/drill/preflop/rfi";

export type Suit = "s" | "h" | "d" | "c";
export type Card = { r: number; s: Suit };
export type Street = "flop" | "turn" | "river";
export const STREETS: Street[] = ["flop", "turn", "river"];

/** What a combo is on the current street, strongest first. "missed" only
 * exists on the river: a hand that was a draw on the turn and didn't get
 * there — the natural bluffs. */
export type Group = "strong" | "draw" | "potential" | "missed" | "medium" | "air";
export const GROUP_ORDER: Group[] = ["strong", "draw", "potential", "missed", "medium", "air"];

export const GROUP_INFO: Record<Group, { name: string; color: string; pattern?: string }> = {
  strong: { name: "Strong", color: "#F2564B" },
  draw: { name: "Draws", color: "#22C4A1" },
  // Flop only: no pair, but a backdoor straight and/or flush draw.
  potential: { name: "Potential bluffs", color: "#9B7FEA" },
  missed: {
    name: "Missed draws",
    color: "#3E8C7E",
    pattern: "repeating-linear-gradient(135deg,#3E8C7E 0 3px,#2C6A5F 3px 6px)",
  },
  medium: { name: "Medium", color: "#E9C58A" },
  air: { name: "Air", color: "#5A6670" },
};

const RV: Record<string, number> = { A: 14, K: 13, Q: 12, J: 11, T: 10 };
const rankVal = (ch: string) => RV[ch] ?? Number(ch);
const RANK_CH: Record<number, string> = { 14: "A", 13: "K", 12: "Q", 11: "J", 10: "T" };
export const rankChar = (r: number) => RANK_CH[r] ?? String(r);

/** The one demo board, chosen by Noam: dry rainbow flop, a turn that adds a
 * flush draw, a river that misses it. */
export const DEMO_BOARD: Record<Street, Card[]> = {
  flop: [
    { r: 13, s: "s" },
    { r: 7, s: "h" },
    { r: 2, s: "d" },
  ],
  turn: [{ r: 12, s: "h" }],
  river: [{ r: 3, s: "c" }],
};

export function boardUpTo(street: Street): Card[] {
  const out = [...DEMO_BOARD.flop];
  if (street !== "flop") out.push(...DEMO_BOARD.turn);
  if (street === "river") out.push(...DEMO_BOARD.river);
  return out;
}
const ALL_BOARD = boardUpTo("river");

export type StreetStep = {
  street: Street;
  /** Shown above the board. */
  pot: string;
  betAction: string;
  betLabel: string;
  betSize: string;
  /** The right answer for this street (draft: always the betting option). */
  correct: "bet" | "check";
  /** One-sentence why. DRAFT — Noam to replace with his own words. */
  why: string;
  /** Which groups stay in the line when BTN bets. */
  keeps: Group[];
  /** Optional extra rule on top of `keeps`, per combo. */
  keepCombo?: (g: Group, cards: [Card, Card]) => boolean;
  /** One line describing who bets, shown after the bet. */
  betsWho: string;
};

export const STEPS: Record<Street, StreetStep> = {
  flop: {
    street: "flop",
    pot: "5.5bb",
    betAction: "small",
    betLabel: "Small bet",
    betSize: "1.8bb",
    correct: "bet",
    why: "A dry K-7-2 with three suits favors BTN's range. The simple plan is a small bet with the whole range.",
    keeps: ["strong", "draw", "potential", "missed", "medium", "air"],
    betsWho: "The whole range bets. BB calls.",
  },
  turn: {
    street: "turn",
    pot: "9.1bb",
    betAction: "overbet",
    betLabel: "Overbet",
    betSize: "13.7bb",
    correct: "bet",
    why: "The queen adds a flush draw. Go big and polar: strong hands bet for value, draws bet as semi-bluffs, and the medium hands check.",
    keeps: ["strong", "draw"],
    betsWho: "Strong hands and draws bet. Medium hands and air check and leave the line. BB calls.",
  },
  river: {
    street: "river",
    pot: "36.5bb",
    betAction: "allin",
    betLabel: "All-in",
    betSize: "82bb",
    correct: "bet",
    why: "The 3 misses every draw. Shove the strongest hands for value and the missed draws as bluffs. Medium hands check.",
    keeps: ["strong", "missed"],
    // Some bluffs, not all: missed draws with an ace can still win at
    // showdown, so they check. The low missed draws are the bluffs.
    keepCombo: (g, [a, b]) => g !== "missed" || (a.r !== 14 && b.r !== 14),
    betsWho: "Strong hands go all-in for value, low missed draws as bluffs. Everything in between checks.",
  },
};

// ---------- hand evaluation (simple, rule-based) ----------

function hasStraight(vals: Iterable<number>): boolean {
  const s = new Set(vals);
  if (s.has(14)) s.add(1);
  for (let lo = 1; lo <= 10; lo++) {
    let run = true;
    for (let k = 0; k < 5 && run; k++) run = s.has(lo + k);
    if (run) return true;
  }
  return false;
}

function straightOuts(vals: Set<number>): number {
  let outs = 0;
  for (let r = 2; r <= 14; r++) {
    if (!vals.has(r) && hasStraight([...vals, r])) outs++;
  }
  return outs;
}

/** Backdoor flush draw: both hole cards share a suit with one flop card
 * (three to a flush, needs that suit on both turn and river). */
function backdoorFlush(hole: [Card, Card], board: Card[]): boolean {
  const [a, b] = hole;
  return a.s === b.s && board.filter((c) => c.s === a.s).length === 1;
}

/** Backdoor straight draw: hole + board put three different ranks inside
 * one five-rank straight window (using at least one hole card), so two
 * more cards could make the straight. */
function backdoorStraight(hole: [Card, Card], board: Card[]): boolean {
  const holeVals = hole.flatMap((c) => (c.r === 14 ? [14, 1] : [c.r]));
  const vals = new Set([...hole, ...board].flatMap((c) => (c.r === 14 ? [14, 1] : [c.r])));
  for (let lo = 1; lo <= 10; lo++) {
    const inWindow = (v: number) => v >= lo && v <= lo + 4;
    const count = [...vals].filter(inWindow).length;
    if (count >= 3 && holeVals.some(inWindow)) return true;
  }
  return false;
}

/** The group a single combo falls in on a street. `wasDraw` = it was a
 * draw on the previous street (decides "missed" on the river). */
export function groupOf(hole: [Card, Card], street: Street, wasDraw: boolean): Group {
  const board = boardUpTo(street);
  const all = [...hole, ...board];
  const vals = new Set(all.map((c) => c.r));
  const boardVals = new Set(board.map((c) => c.r));
  const top = Math.max(...board.map((c) => c.r));
  const [a, b] = hole;
  const pocket = a.r === b.r;

  // Flush / flush draw: count each suit, only if a hole card is part of it.
  let flush = false;
  let flushDraw = false;
  for (const s of ["s", "h", "d", "c"] as Suit[]) {
    const n = all.filter((c) => c.s === s).length;
    const usesHole = a.s === s || b.s === s;
    if (n >= 5 && usesHole) flush = true;
    if (n === 4 && usesHole) flushDraw = true;
  }

  const straight = hasStraight(vals);
  const set = pocket && boardVals.has(a.r);
  const twoPair = !pocket && boardVals.has(a.r) && boardVals.has(b.r);
  const overpair = pocket && a.r > top;
  const topPair = !pocket && (a.r === top || b.r === top);
  const kicker = topPair ? (a.r === top ? b.r : a.r) : 0;
  // On the river a big all-in needs a better kicker than an overbet does.
  const goodKicker = street === "river" ? kicker >= 12 : kicker >= 10;

  if (flush || straight || set || twoPair || overpair || (topPair && goodKicker)) return "strong";

  const paired = pocket || boardVals.has(a.r) || boardVals.has(b.r);
  if (street !== "river") {
    const outs = straightOuts(vals);
    if (flushDraw || outs >= 1) return "draw";
    if (street === "flop" && !paired && (backdoorFlush(hole, board) || backdoorStraight(hole, board))) return "potential";
  } else if (wasDraw && !paired) {
    // A draw that also had a pair keeps its pair on the river (medium).
    return "missed";
  }

  if (paired) return "medium";
  return "air";
}

// ---------- the range, per combo ----------

const SUITS: Suit[] = ["s", "h", "d", "c"];
const sameCard = (x: Card, y: Card) => x.r === y.r && x.s === y.s;

function combosForHand(hand: string): [Card, Card][] {
  const hi = rankVal(hand[0]);
  const lo = rankVal(hand[1]);
  const out: [Card, Card][] = [];
  if (hand.length === 2) {
    for (let i = 0; i < 4; i++) for (let j = i + 1; j < 4; j++) out.push([{ r: hi, s: SUITS[i] }, { r: lo, s: SUITS[j] }]);
  } else if (hand[2] === "s") {
    for (const s of SUITS) out.push([{ r: hi, s }, { r: lo, s }]);
  } else {
    for (const s1 of SUITS) for (const s2 of SUITS) if (s1 !== s2) out.push([{ r: hi, s: s1 }, { r: lo, s: s2 }]);
  }
  // Combos that use a board card can't exist in this hand.
  return out.filter(([x, y]) => !ALL_BOARD.some((c) => sameCard(c, x) || sameCard(c, y)));
}

type Combo = { hand: string; cards: [Card, Card]; weight: number };

/** BTN's opening range, as the finished Raise First In drill paints it. */
function btnCombos(): { combos: Combo[]; basis: Map<string, number> } {
  const strat = rfiSpot("BTN").position.strat;
  const famOf = new Map<string, string>();
  for (const f of FAMS) for (const h of f.hands) famOf.set(h, f.key);
  const combos: Combo[] = [];
  const basis = new Map<string, number>();
  for (const cell of MATRIX_HANDS) {
    const fam = famOf.get(cell.key);
    const f = fam ? strat[fam] ?? 0 : 0;
    const weight = f >= 90 ? 1 : f > 10 ? f / 100 : 0;
    if (!weight) continue;
    const cs = combosForHand(cell.key);
    // A square is "full" when every combo that can exist on this board is
    // in the range (so KK starts full even though the K♠ is on the board).
    basis.set(cell.key, cs.length || combosOf(cell.key));
    for (const cards of cs) combos.push({ hand: cell.key, cards, weight });
  }
  return { combos, basis };
}

/** One picture of the range: for every square, how many (weighted) combos
 * are in each group. `basis` = a square's full combo count, so a square is
 * drawn full only when all its combos are present. */
export type RangeSnapshot = {
  street: Street;
  cells: Map<string, Partial<Record<Group, number>>>;
  basis: Map<string, number>;
  /** Weighted combos in this snapshot. */
  total: number;
  /** Weighted combos per group. */
  byGroup: Record<Group, number>;
};

function snapshot(street: Street, live: { c: Combo; g: Group }[], basis: Map<string, number>): RangeSnapshot {
  const cells = new Map<string, Partial<Record<Group, number>>>();
  const byGroup: Record<Group, number> = { strong: 0, draw: 0, potential: 0, missed: 0, medium: 0, air: 0 };
  let total = 0;
  for (const { c, g } of live) {
    const cell = cells.get(c.hand) ?? {};
    cell[g] = (cell[g] ?? 0) + c.weight;
    cells.set(c.hand, cell);
    byGroup[g] += c.weight;
    total += c.weight;
  }
  return { street, cells, basis, total, byGroup };
}

/** Every picture the demo shows, in order:
 *  [flop, flop after bet, turn, turn after bet, river, river after bet]. */
export function buildLine(): { before: Record<Street, RangeSnapshot>; after: Record<Street, RangeSnapshot>; start: number } {
  const { combos, basis } = btnCombos();
  const before = {} as Record<Street, RangeSnapshot>;
  const after = {} as Record<Street, RangeSnapshot>;

  let live: { c: Combo; g: Group; wasDraw: boolean }[] = combos.map((c) => ({ c, g: "air", wasDraw: false }));
  for (const street of STREETS) {
    live = live.map((x) => {
      const g = groupOf(x.c.cards, street, x.wasDraw);
      return { c: x.c, g, wasDraw: x.wasDraw };
    });
    before[street] = snapshot(street, live, basis);
    const step = STEPS[street];
    const keeps = new Set(step.keeps);
    live = live
      .filter((x) => keeps.has(x.g) && (step.keepCombo?.(x.g, x.c.cards) ?? true))
      .map((x) => ({ ...x, wasDraw: x.g === "draw" }));
    after[street] = snapshot(street, live, basis);
  }
  return { before, after, start: before.flop.total };
}
