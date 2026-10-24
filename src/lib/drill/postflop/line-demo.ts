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
export type Group = "strong" | "draw" | "potential" | "missed" | "giveup" | "medium" | "air";
export const GROUP_ORDER: Group[] = ["strong", "draw", "potential", "missed", "giveup", "medium", "air"];

export const GROUP_INFO: Record<Group, { name: string; color: string; pattern?: string }> = {
  strong: { name: "Strong", color: "#F2564B" },
  draw: { name: "Draws", color: "#22C4A1" },
  // Flop only: no pair, but a backdoor straight and/or flush draw.
  potential: { name: "Potential bluffs", color: "#9B7FEA" },
  // River only. Missed draws with nothing to show down: the all-in bluffs.
  missed: {
    name: "Bluffs",
    color: "#3E8C7E",
    pattern: "repeating-linear-gradient(135deg,#3E8C7E 0 3px,#2C6A5F 3px 6px)",
  },
  // River only. Missed draws with an ace: some showdown value, so they give up and check.
  giveup: {
    name: "Give-up bluffs",
    color: "#7A8188",
    pattern: "repeating-linear-gradient(135deg,#7A8188 0 3px,#545A60 3px 6px)",
  },
  medium: { name: "Medium", color: "#E9C58A" },
  air: { name: "Air", color: "#5A6670" },
};

const RV: Record<string, number> = { A: 14, K: 13, Q: 12, J: 11, T: 10 };
const rankVal = (ch: string) => RV[ch] ?? Number(ch);
const RANK_CH: Record<number, string> = { 14: "A", 13: "K", 12: "Q", 11: "J", 10: "T" };
export const rankChar = (r: number) => RANK_CH[r] ?? String(r);

/** One demo hand: a full board plus the draft "why" for each street. Every
 * hand plays the same line (small bet, overbet, all-in); the runouts tell
 * different stories about how the range changes. */
export type Scenario = {
  /** Short code shown in the header and saved with feedback, e.g. "K72 · Q♥ · 3♣". */
  id: string;
  board: Record<Street, Card[]>;
  /** DRAFT explanations — Noam / Uri to replace. */
  why: Record<Street, string>;
};

const SUIT_CH: Record<Suit, string> = { s: "♠", h: "♥", d: "♦", c: "♣" };

/** "Q♥" → card. Rank chars: A K Q J T 9..2. */
function card(code: string): Card {
  const suit = (Object.keys(SUIT_CH) as Suit[]).find((s) => SUIT_CH[s] === code.slice(1))!;
  return { r: rankVal(code[0]), s: suit };
}

type RiverSpec = { card: string; why: string };
type TurnSpec = { card: string; why: string; rivers: [RiverSpec, RiverSpec] };
type FlopSpec = { name: string; cards: [string, string, string]; why: string; turns: [TurnSpec, TurnSpec] };

/** 5 flops × 2 turns × 2 rivers = 20 hands. Every flop is dry enough for a
 * small range bet; every turn adds a flush and/or straight draw; on each
 * turn one river misses the draws and one completes them. Draft reads, not
 * reviewed by Uri. The first hand is the board Noam picked. */
const FLOPS: FlopSpec[] = [
  {
    name: "K72",
    cards: ["K♠", "7♥", "2♦"],
    why: "A dry K-7-2 with three suits favors BTN's range. Bet small with the whole range.",
    turns: [
      {
        card: "Q♥",
        why: "The queen adds a heart flush draw and straight draws like AJ and JT. Overbet polar: value plus draws, medium hands check.",
        rivers: [
          { card: "3♣", why: "The 3 misses every draw. Shove value and the missed draws with no ace. Ace-high misses and medium hands check." },
          { card: "9♥", why: "The 9♥ completes the flush and gives JT a straight. So many draws got there that the ace-high misses like AJ and AT have to bluff too." },
        ],
      },
      {
        card: "A♦",
        why: "The ace hits BTN far harder than BB and adds a diamond flush draw. Overbet polar with a big value part.",
        rivers: [
          { card: "6♣", why: "The 6 misses the draws. Shove value and the missed draws with no showdown value. One-pair hands check." },
          { card: "5♦", why: "The 5♦ completes the diamond flush and gives 43 a wheel. Draws that hit join the value." },
        ],
      },
    ],
  },
  {
    name: "A83",
    cards: ["A♠", "8♦", "3♣"],
    why: "An ace-high flop with three suits favors BTN, who has many more aces. Bet small with the whole range.",
    turns: [
      {
        card: "9♦",
        why: "The 9♦ adds a diamond flush draw and straight draws like T7, JT and 76. Overbet polar: value plus draws.",
        rivers: [
          { card: "2♠", why: "The deuce misses everything. Shove value and the missed draws. The rest checks." },
          { card: "6♦", why: "The 6♦ completes the flush and the straights for 75 and T7. Many draws are now value; only the misses bluff." },
        ],
      },
      {
        card: "K♣",
        why: "The king adds a club flush draw and broadway draws like QJ and JT. Overbet polar.",
        rivers: [
          { card: "7♥", why: "The 7 misses the draws. Shove value and the missed draws. One-pair hands check." },
          { card: "Q♣", why: "The Q♣ completes the clubs and gives JT the nut straight. Almost every draw got there, so there are hardly any bluffs left." },
        ],
      },
    ],
  },
  {
    name: "Q63",
    cards: ["Q♠", "6♦", "3♣"],
    why: "A dry queen-high flop with three suits favors BTN. Bet small with the whole range.",
    turns: [
      {
        card: "8♦",
        why: "The 8♦ adds a diamond flush draw and straight draws like 75, 54 and T9. Overbet polar.",
        rivers: [
          { card: "K♠", why: "The king is an overcard but completes no draw. Shove value and the missed draws. The rest checks." },
          { card: "4♦", why: "The 4♦ completes the diamond flush and the 75 straight. Draws that hit join the value." },
        ],
      },
      {
        card: "J♣",
        why: "The jack adds a club flush draw and broadway draws like KT, AK and T9. Overbet polar.",
        rivers: [
          { card: "2♥", why: "The deuce misses everything. Shove value and the missed draws with no ace." },
          { card: "T♣", why: "The T♣ completes the clubs and gives AK and K9 a straight. Almost every draw got there, so there are very few bluffs left." },
        ],
      },
    ],
  },
  {
    name: "T52",
    cards: ["T♠", "5♦", "2♣"],
    why: "A dry ten-high flop with three suits. BTN's high cards and overpairs let it bet small with the whole range.",
    turns: [
      {
        card: "9♠",
        why: "The 9♠ adds a spade flush draw and straight draws like J8, 87 and QJ. Overbet polar.",
        rivers: [
          { card: "3♦", why: "The 3 misses the draws. Shove value and the missed draws. One-pair hands check." },
          { card: "Q♠", why: "The Q♠ completes the spades and gives KJ and J8 a straight. Draws that hit join the value." },
        ],
      },
      {
        card: "A♦",
        why: "The ace is great for BTN, gives 43 a wheel and adds a diamond flush draw. Overbet polar.",
        rivers: [
          { card: "K♣", why: "The king misses the draws. Shove value and the missed draws with no ace." },
          { card: "7♦", why: "The 7♦ completes the diamond flush. Flush draws join the value; missed straight draws bluff." },
        ],
      },
    ],
  },
  {
    name: "AK4",
    cards: ["A♥", "K♦", "4♠"],
    why: "A-K-4 with three suits is one of BTN's best flops. Bet small with the whole range.",
    turns: [
      {
        card: "J♥",
        why: "The jack adds a heart flush draw and straight draws, and gives QT the nut straight. Overbet polar.",
        rivers: [
          { card: "6♣", why: "The 6 misses the draws. Shove value and the missed draws. One-pair hands check." },
          { card: "9♥", why: "The 9♥ completes the hearts. Flush draws join the value; missed straight draws bluff." },
        ],
      },
      {
        card: "5♠",
        why: "The 5♠ adds a spade flush draw. Overbet polar: value plus draws, medium hands check.",
        rivers: [
          { card: "Q♦", why: "The queen misses the draws. Shove value and the missed draws with no ace." },
          { card: "8♠", why: "The 8♠ completes the spades and gives 76 a straight. Draws that hit join the value." },
        ],
      },
    ],
  },
];

export const SCENARIOS: Scenario[] = FLOPS.flatMap((f) =>
  f.turns.flatMap((t) =>
    t.rivers.map((rv) => ({
      id: `${f.name} · ${t.card} · ${rv.card}`,
      board: { flop: f.cards.map(card), turn: [card(t.card)], river: [card(rv.card)] },
      why: { flop: f.why, turn: t.why, river: rv.why },
    })),
  ),
);

export function boardUpTo(street: Street, sc: Scenario = SCENARIOS[0]): Card[] {
  const out = [...sc.board.flop];
  if (street !== "flop") out.push(...sc.board.turn);
  if (street === "river") out.push(...sc.board.river);
  return out;
}

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
  /** A second, wrong-on-this-board bet size offered as a distractor (turn: small bet). */
  altBet?: { label: string; size: string; color: string; wrongMsg: string };
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
    altBet: { label: "Big bet", size: "4.1bb", color: "#F2564B", wrongMsg: "Not quite. Too big here" },
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
    betsWho: "Value and bluffs overbet. The rest checks and leaves the line. BB calls.",
    altBet: { label: "Small bet", size: "3bb", color: "#F2B33D", wrongMsg: "Not quite. Too small here" },
  },
  river: {
    street: "river",
    pot: "36.5bb",
    betAction: "allin",
    betLabel: "All-in",
    betSize: "82bb",
    correct: "bet",
    why: "The 3 misses every draw. Shove the strongest hands for value and the missed draws with no showdown value as bluffs. Ace-high misses and medium hands check.",
    keeps: ["strong", "missed"],
    betsWho: "Value and bluffs go all-in. Medium hands and the give-up bluffs check. BB calls.",
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
export function groupOf(hole: [Card, Card], street: Street, wasDraw: boolean, sc: Scenario = SCENARIOS[0]): Group {
  const board = boardUpTo(street, sc);
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
  // Trips or better when a hole card matches a paired board card.
  const boardCount = (r: number) => board.filter((bc) => bc.r === r).length;
  const trips = boardCount(a.r) >= 2 || boardCount(b.r) >= 2;
  const set = (pocket && boardVals.has(a.r)) || trips;
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
    // Missed draws with an ace can still win at showdown: they give up.
    // The rest have nothing to show down: they are the all-in bluffs.
    return a.r === 14 || b.r === 14 ? "giveup" : "missed";
  }

  if (paired) return "medium";
  return "air";
}

// ---------- the range, per combo ----------

const SUITS: Suit[] = ["s", "h", "d", "c"];
const sameCard = (x: Card, y: Card) => x.r === y.r && x.s === y.s;

function combosForHand(hand: string, allBoard: Card[]): [Card, Card][] {
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
  return out.filter(([x, y]) => !allBoard.some((bc) => sameCard(bc, x) || sameCard(bc, y)));
}

type Combo = { hand: string; cards: [Card, Card]; weight: number };

/** BTN's opening range, as the finished Raise First In drill paints it. */
function btnCombos(sc: Scenario): { combos: Combo[]; basis: Map<string, number> } {
  const allBoard = boardUpTo("river", sc);
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
    const cs = combosForHand(cell.key, allBoard);
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
  const byGroup: Record<Group, number> = { strong: 0, draw: 0, potential: 0, missed: 0, giveup: 0, medium: 0, air: 0 };
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

/** The same picture with some groups removed — used while the player sorts
 * the turn range piece by piece. */
export function withoutGroups(snap: RangeSnapshot, groups: Group[]): RangeSnapshot {
  const drop = new Set(groups);
  const cells = new Map<string, Partial<Record<Group, number>>>();
  const byGroup = { ...snap.byGroup };
  let total = snap.total;
  for (const [hand, cell] of snap.cells) {
    const next: Partial<Record<Group, number>> = {};
    for (const [g, n] of Object.entries(cell) as [Group, number][]) {
      if (drop.has(g)) continue;
      next[g] = n;
    }
    if (Object.keys(next).length) cells.set(hand, next);
  }
  for (const g of drop) {
    total -= byGroup[g];
    byGroup[g] = 0;
  }
  return { ...snap, cells, byGroup, total };
}

/** A ready-made group the player drags into the bet or Check (turn and river). */
export type SortPieceDef = {
  /** "whole" = the flop's whole-range piece (range bet), not a sorted group. */
  key: "value" | "bluff" | "giveup" | "check" | "whole";
  /** How a partly-included square is marked in the hand list ("♥" = only the both-hearts combo). */
  partMark: string;
  label: string;
  sub: string;
  color: string;
  groups: Group[];
  target: "bet" | "check";
  /** Squares with at least one combo in this piece. */
  hands: string[];
  /** Same squares with how much of each is in this piece (1 = all of it,
   * 0.25 = e.g. only the both-hearts combo). For the "see the hands" view. */
  entries: { hand: string; part: number }[];
  /** One line on what's inside, shown when the player taps the piece. */
  desc: string;
  /** Share of the range (0-100) this piece holds. */
  pct: number;
};

type PieceSpec = Omit<SortPieceDef, "hands" | "entries" | "pct">;

/** The ready-made pieces for each sorted street. Turn: value (strong hands,
 * incl. KJ/KT), bluffs (AJ, AT, JT and every flush draw), and the rest.
 * River: value, all-in bluffs, give-up bluffs, and medium hands. */
const SORT_SPECS: Record<"turn" | "river", PieceSpec[]> = {
  turn: [
    {
      key: "value",
      label: "Value",
      sub: "Strong hands",
      desc: "Sets, two pair, straights, overpairs and top pair with a good kicker.",
      color: GROUP_INFO.strong.color,
      groups: ["strong"],
      target: "bet",
      partMark: "some",
    },
    {
      key: "bluff",
      label: "Bluffs",
      sub: "Draws",
      desc: "Straight draws and flush draws. \"suited\" means only the suited combo that has the flush draw.",
      color: GROUP_INFO.draw.color,
      groups: ["draw"],
      target: "bet",
      partMark: "suited",
    },
    {
      key: "check",
      label: "The rest",
      sub: "Medium & air",
      desc: "Top pair with a weak kicker, lower pairs, and hands with nothing.",
      color: GROUP_INFO.medium.color,
      groups: ["medium", "air"],
      target: "check",
      partMark: "some",
    },
  ],
  river: [
    {
      key: "value",
      label: "Value",
      sub: "Strong hands",
      desc: "Sets, two pair, straights, flushes and top pair with a top kicker. Strong enough to get called by worse.",
      color: GROUP_INFO.strong.color,
      groups: ["strong"],
      target: "bet",
      partMark: "some",
    },
    {
      key: "bluff",
      label: "Bluff",
      sub: "All the way",
      desc: "Missed draws with no ace. They can't win by checking, so they shove.",
      color: GROUP_INFO.missed.pattern ?? GROUP_INFO.missed.color,
      groups: ["missed"],
      target: "bet",
      partMark: "some",
    },
    {
      key: "giveup",
      label: "Give up",
      sub: "Missed, ace-high",
      desc: "Missed draws with an ace. Ace-high can still win at showdown, so they give up and check.",
      color: GROUP_INFO.giveup.pattern ?? GROUP_INFO.giveup.color,
      groups: ["giveup"],
      target: "check",
      partMark: "some",
    },
    {
      key: "check",
      label: "Medium",
      sub: "One pair",
      desc: "One-pair hands. Too weak to shove, good enough to check.",
      color: GROUP_INFO.medium.color,
      groups: ["medium", "air"],
      target: "check",
      partMark: "some",
    },
  ],
};

/** The pieces the player sorts on this street, measured on this snapshot. */
export function sortPieces(street: "turn" | "river", snap: RangeSnapshot): SortPieceDef[] {
  return SORT_SPECS[street]
    .map((d) => {
    const entries: { hand: string; part: number }[] = [];
    for (const [hand, cell] of snap.cells) {
      const mine = d.groups.reduce((s, g) => s + (cell[g] ?? 0), 0);
      if (mine <= 0) continue;
      const all = GROUP_ORDER.reduce((s, g) => s + (cell[g] ?? 0), 0);
      entries.push({ hand, part: mine / all });
    }
    const n = d.groups.reduce((s, g) => s + snap.byGroup[g], 0);
    return { ...d, entries, hands: entries.map((e) => e.hand), pct: Math.round((n / snap.total) * 100) };
    })
    .filter((p) => p.entries.length > 0);
}

/** Every picture the demo shows, in order:
 *  [flop, flop after bet, turn, turn after bet, river, river after bet]. */
export type Line = { before: Record<Street, RangeSnapshot>; after: Record<Street, RangeSnapshot>; start: number };

export function buildLine(sc: Scenario = SCENARIOS[0]): Line {
  const { combos, basis } = btnCombos(sc);
  const before = {} as Record<Street, RangeSnapshot>;
  const after = {} as Record<Street, RangeSnapshot>;

  let live: { c: Combo; g: Group; wasDraw: boolean }[] = combos.map((c) => ({ c, g: "air", wasDraw: false }));
  for (const street of STREETS) {
    live = live.map((x) => {
      const g = groupOf(x.c.cards, street, x.wasDraw, sc);
      return { c: x.c, g, wasDraw: x.wasDraw };
    });
    if (street === "river") {
      // When the draws mostly got there, the natural bluffs (missed draws
      // with no ace) are too few for a polar shove. Then the ace-high misses
      // bluff too instead of giving up — you need bluffs from somewhere.
      const w = (g: Group) => live.reduce((s, x) => s + (x.g === g ? x.c.weight : 0), 0);
      if (w("missed") < 0.3 * w("strong")) {
        live = live.map((x) => (x.g === "giveup" ? { ...x, g: "missed" as Group } : x));
      }
    }
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
