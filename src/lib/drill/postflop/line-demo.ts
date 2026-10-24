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
  /** The right turn size, from `turnFavorsBB`: overbet when the turn is good
   * for BTN, 66% when it's good for BB's calling range. */
  turnBet: "overbet" | "twoThirds";
  /** Why the turn was judged good for BB (empty when it's good for BTN). */
  turnReasons: string[];
};

/** Draft rule (agreed with Noam 2026-10-24) for a turn card that's better
 * for BB than for BTN, so the overbet gets too big and 66% is right:
 *  1. it puts a third card of one suit out (completes a flush),
 *  2. it leaves four board cards inside one five-rank window (many straights),
 *  3. it's a 9 or lower that pairs or sits right next to another low card
 *     (BB holds far more of the small two pairs and straights). */
export function turnFavorsBB(flop: Card[], turn: Card): string[] {
  const board = [...flop, turn];
  const reasons: string[] = [];
  for (const s of ["s", "h", "d", "c"] as Suit[]) {
    if (board.filter((bc) => bc.s === s).length >= 3) reasons.push("completes a flush");
  }
  const ranks = new Set(board.flatMap((bc) => (bc.r === 14 ? [14, 1] : [bc.r])));
  for (let lo = 1; lo <= 10; lo++) {
    if ([...ranks].filter((v) => v >= lo && v <= lo + 4).length >= 4) {
      reasons.push("four cards close together");
      break;
    }
  }
  if (turn.r <= 9 && flop.some((fc) => fc.r <= 9 && Math.abs(fc.r - turn.r) <= 1)) {
    reasons.push("low card that connects with the board");
  }
  return reasons;
}

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
        why: "The queen is a good card for BTN and adds a heart flush draw and straight draws like AJ and JT. Overbet polar: value plus draws, medium hands check.",
        rivers: [
          { card: "3♣", why: "The 3 misses every draw." },
          { card: "9♥", why: "The 9♥ completes the flush and gives JT a straight." },
        ],
      },
      {
        card: "A♦",
        why: "The ace hits BTN far harder than BB and adds a diamond flush draw. Overbet polar with a big value part.",
        rivers: [
          { card: "6♣", why: "The 6 misses the draws." },
          { card: "5♦", why: "The 5♦ completes the diamond flush and gives 43 a wheel." },
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
        why: "The 9 connects with the 8, and BB holds more 9x, T7 and 76 than BTN. This card helps BB, so the overbet is too big: bet 66% with value and draws, medium hands check.",
        rivers: [
          { card: "2♠", why: "The deuce misses everything." },
          { card: "6♦", why: "The 6♦ completes the flush and the straights for 75 and T7." },
        ],
      },
      {
        card: "K♣",
        why: "The king is a good card for BTN and adds a club flush draw and broadway draws like QJ and JT. Overbet polar.",
        rivers: [
          { card: "7♥", why: "The 7 misses the draws." },
          { card: "5♣", why: "The 5♣ completes the clubs, but the straight draws miss." },
        ],
      },
    ],
  },
  {
    name: "Q63",
    cards: ["Q♠", "6♦", "3♦"],
    why: "A queen-high flop with two diamonds still favors BTN. Bet small with the whole range.",
    turns: [
      {
        card: "8♦",
        why: "The 8♦ completes the diamond flush and connects with the 6. That helps BB's calling range, so the overbet is too big: bet 66% with value and draws.",
        rivers: [
          { card: "K♠", why: "The king is an overcard but completes no draw." },
          { card: "4♦", why: "The 4♦ puts a fourth diamond out and gives 75 a straight." },
        ],
      },
      {
        card: "J♣",
        why: "The jack adds broadway draws like KT, AK and T9 to the diamond draws, and it's a good card for BTN. Overbet polar.",
        rivers: [
          { card: "2♥", why: "The deuce misses everything." },
          { card: "2♦", why: "The 2♦ completes the diamonds, but the broadway straight draws miss." },
        ],
      },
    ],
  },
  {
    name: "T52",
    cards: ["T♠", "5♦", "2♦"],
    why: "A ten-high flop with two diamonds. BTN's high cards and overpairs let it bet small with the whole range.",
    turns: [
      {
        card: "9♠",
        why: "The 9♠ adds a spade flush draw and straight draws like J8, 87 and QJ, and keeps BTN ahead. Overbet polar.",
        rivers: [
          { card: "3♣", why: "The 3 misses the draws." },
          { card: "Q♠", why: "The Q♠ completes the spades and gives KJ and J8 a straight." },
        ],
      },
      {
        card: "A♦",
        why: "The ace is good for BTN, but the A♦ also completes the diamond flush, and BB has plenty of suited diamonds. Size down: bet 66% with value and draws.",
        rivers: [
          { card: "K♣", why: "The king misses the draws." },
          { card: "7♦", why: "The 7♦ puts a fourth diamond out: every single-diamond draw now has a flush." },
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
        why: "The jack is a good card for BTN: it adds a heart flush draw and straight draws, and gives QT the nut straight. Overbet polar.",
        rivers: [
          { card: "6♣", why: "The 6 misses the draws." },
          { card: "9♥", why: "The 9♥ completes the hearts." },
        ],
      },
      {
        card: "5♠",
        why: "The 5 connects with the 4 and gives BB more two pairs and straight draws like 65, 53 and 43. Size down: bet 66% with value and draws, medium hands check.",
        rivers: [
          { card: "Q♦", why: "The queen misses the draws." },
          { card: "8♠", why: "The 8♠ completes the spades and gives 76 a straight." },
        ],
      },
    ],
  },
];

/** The river plan is the same on every hand; each river's own line only says what the card did. */
const RIVER_PLAN =
  "Shove value plus the weakest missed draws as bluffs. The missed draws with the best cards give up, and medium hands check.";

export const SCENARIOS: Scenario[] =FLOPS.flatMap((f) =>
  f.turns.flatMap((t) =>
    t.rivers.map((rv) => {
      const reasons = turnFavorsBB(f.cards.map(card), card(t.card));
      return {
        id: `${f.name} · ${t.card} · ${rv.card}`,
        board: { flop: f.cards.map(card), turn: [card(t.card)], river: [card(rv.card)] },
        why: { flop: f.why, turn: t.why, river: `${rv.why} ${RIVER_PLAN}` },
        turnBet: reasons.length ? ("twoThirds" as const) : ("overbet" as const),
        turnReasons: reasons,
      };
    }),
  ),
);

export function boardUpTo(street: Street, sc: Scenario = SCENARIOS[0]): Card[] {
  const out = [...sc.board.flop];
  if (street !== "flop") out.push(...sc.board.turn);
  if (street === "river") out.push(...sc.board.river);
  return out;
}

/** What's the same on every hand for one street: sizes, who stays in the
 * line, and the alternative (wrong-or-right-by-card) size. The per-hand
 * explanation lives on the Scenario. */
export type StreetStep = {
  street: Street;
  /** Pot before BTN acts (the river's depends on the turn size: riverMoney). */
  pot: string;
  /** The main bet: drop zone on the right. */
  betLabel: string;
  betSize: string;
  /** The right answer for the flop's whole-range piece (check ends the line). */
  correct: "bet" | "check";
  /** Which groups stay in the line when BTN bets. */
  keeps: Group[];
  /** One line describing who bets, shown after the bet. */
  betsWho: string;
  /** The other bet size, drop zone at the top: flop big bet (always wrong),
   * turn 66% (right when the turn helps BB, see turnFavorsBB). */
  altBet?: { label: string; size: string; color: string; wrongMsg: string };
};

export const STEPS: Record<Street, StreetStep> = {
  flop: {
    street: "flop",
    pot: "5.5bb",
    betLabel: "Small bet",
    betSize: "1.8bb",
    correct: "bet",
    keeps: ["strong", "draw", "potential", "missed", "medium", "air"],
    betsWho: "The whole range bets. BB calls.",
    altBet: { label: "Big bet", size: "4.1bb", color: "#F2564B", wrongMsg: "Not quite. Too big here" },
  },
  turn: {
    street: "turn",
    pot: "9.1bb",
    betLabel: "Overbet",
    betSize: "13.7bb",
    correct: "bet",
    keeps: ["strong", "draw"],
    betsWho: "Value and bluffs bet. The rest checks and leaves the line. BB calls.",
    altBet: { label: "Bet 66%", size: "6bb", color: "#F2853D", wrongMsg: "Not quite. Go bigger here" },
  },
  river: {
    street: "river",
    pot: "36.5bb",
    betLabel: "All-in",
    betSize: "82bb",
    correct: "bet",
    keeps: ["strong", "missed"],
    betsWho: "Value and bluffs go all-in. Medium hands and the give-up bluffs check. BB calls.",
  },
};

/** River pot and all-in size depend on the turn size that was bet:
 * overbet 13.7bb into 9.1bb, or 66% = 6bb (100bb stacks, 2.5bb open, 1.8bb flop bet). */
export function riverMoney(sc: Scenario): { pot: string; allIn: string } {
  return sc.turnBet === "overbet" ? { pot: "36.5bb", allIn: "82bb" } : { pot: "21.1bb", allIn: "89.7bb" };
}

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
    // Every other missed draw is "missed"; splitBluffs then decides which
    // of them shove as bluffs and which give up.
    return "missed";
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
      desc: "The weakest missed draws. They can't win by checking, so they shove.",
      color: GROUP_INFO.missed.pattern ?? GROUP_INFO.missed.color,
      groups: ["missed"],
      target: "bet",
      partMark: "some",
    },
    {
      key: "giveup",
      label: "Give up",
      sub: "Missed, best cards",
      desc: "The missed draws with the highest cards. They can still win at showdown sometimes, so they give up and check.",
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
/** River bluff selection (draft rule, every river gets both kinds):
 * the missed draws are ranked by showdown value (highest card first, then
 * kicker). The weakest ones — no chance to win by checking — become the
 * all-in bluffs, up to half the value hands' weight (a 2:1 value-to-bluff
 * shove) and never more than 75% of the misses. The rest, the misses with the
 * most showdown value, always give up and check. */
const BLUFF_TO_VALUE = 0.5;
const MAX_BLUFF_SHARE_OF_MISSES = 0.75;

function splitBluffs<T extends { c: Combo; g: Group }>(live: T[]): T[] {
  const weightOf = (g: Group) => live.reduce((s, x) => s + (x.g === g ? x.c.weight : 0), 0);
  const missedTotal = weightOf("missed");
  if (missedTotal <= 0) return live;
  const budget = Math.min(weightOf("strong") * BLUFF_TO_VALUE, missedTotal * MAX_BLUFF_SHARE_OF_MISSES);
  const showdown = (x: T) => Math.max(x.c.cards[0].r, x.c.cards[1].r) * 15 + Math.min(x.c.cards[0].r, x.c.cards[1].r);
  const weakestFirst = live.filter((x) => x.g === "missed").sort((p, q) => showdown(p) - showdown(q));
  const bluffs = new Set<T>();
  let used = 0;
  for (const x of weakestFirst) {
    if (used >= budget) break;
    bluffs.add(x);
    used += x.c.weight;
  }
  return live.map((x) => (x.g === "missed" && !bluffs.has(x) ? { ...x, g: "giveup" as Group } : x));
}

export type Line ={ before: Record<Street, RangeSnapshot>; after: Record<Street, RangeSnapshot>; start: number };

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
    if (street === "river") live = splitBluffs(live);
    before[street] = snapshot(street, live, basis);
    const keeps = new Set(STEPS[street].keeps);
    live = live.filter((x) => keeps.has(x.g)).map((x) => ({ ...x, wasDraw: x.g === "draw" }));
    after[street] = snapshot(street, live, basis);
  }
  return { before, after, start: before.flop.total };
}
