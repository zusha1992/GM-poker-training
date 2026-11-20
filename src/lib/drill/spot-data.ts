import type { Card } from "./postflop/line-demo";
import { BUCKET_COLOR, BUCKET_NAME, BUCKETS, bucketBb } from "./postflop/price-hands";
import type { FlopSpot } from "./postflop/flop-drill";
import type { DefendSpot } from "./postflop/defend-drill";
import type { CardSpot } from "./postflop/card-drill";
import { lineFor } from "./postflop/lines";

/** One data shape for every drill (Noam & Uri 2026-11-20): the app has one drill screen, and
 * each drill is that screen with different data. Today the data comes from our generators
 * (TexasSolver + our equity calculator); later from a PioSolver exporter run on Uri's computer.
 * Whatever makes it, it fills this shape, and the screen doesn't change.
 *
 * The screen, top to bottom:
 *   0. the table scene: `actions`, played in order (blinds, folds, raises, each street's bets);
 *   1. the spot header: `spot` (who we are, the board, the pot);
 *   2. the piece: one `groups` item at a time (its hands or cards);
 *   3. the answer boxes: `boxes`;
 *   4. feedback: right / wrong, then the group's `why` and `numbers`;
 *   5. the summary: every group with its answer, in `groups` order. */
export type SpotData = {
  drill: "attack" | "defend" | "cards" | "round" | "preflop";
  id: string;
  spot: {
    hero: Seat;
    board: string[]; // e.g. ["Ac", "7d", "2s"]
    pot: number; // bb
    behind: number; // bb
    title: string; // e.g. "River · A72-Qh-9c"
    question: string; // e.g. "How many bets is each group worth?"
  };
  actions: SpotAction[];
  boxes: { id: string; label: string; small?: string; color: string }[];
  groups: {
    id: string;
    label: string;
    /** Hand classes ("AKs", "TT") or cards ("Kh"). */
    items: string[];
    /** Box ids that count as right (two or more when the answer is a mix / close call). */
    correct: string[];
    why: string;
    numbers: Record<string, number>;
  }[];
};
export type Seat = "UTG" | "HJ" | "CO" | "BTN" | "SB" | "BB";
export type SpotAction = { street: "preflop" | "flop" | "turn" | "river"; seat: Seat; act: "post" | "fold" | "check" | "call" | "bet" | "raise"; bb?: number };

const txt = (c: Card) => "23456789TJQKA"[c.r - 2] + c.s;

/** The line before a BTN-vs-BB postflop spot: the blinds, the folds to BTN, the open and the call, then each street's bets. */
export function btnVsBbActions(upTo: "flop" | "turn" | "river", turnBet?: number): SpotAction[] {
  const pre: SpotAction[] = [
    { street: "preflop", seat: "SB", act: "post", bb: 0.5 },
    { street: "preflop", seat: "BB", act: "post", bb: 1 },
    { street: "preflop", seat: "UTG", act: "fold" },
    { street: "preflop", seat: "HJ", act: "fold" },
    { street: "preflop", seat: "CO", act: "fold" },
    { street: "preflop", seat: "BTN", act: "raise", bb: 2.5 },
    { street: "preflop", seat: "SB", act: "fold" },
    { street: "preflop", seat: "BB", act: "call", bb: 1.5 },
  ];
  const post = lineFor(upTo, turnBet).flatMap((s) => s.acts.map((a): SpotAction => ({ street: s.street, seat: a.who, act: a.act, bb: a.bb })));
  return [...pre, ...post];
}

export function attackSpotData(s: FlopSpot): SpotData {
  return {
    drill: "attack",
    id: s.name,
    spot: { hero: "BTN", board: s.board.map(txt), pot: s.pot, behind: s.behind, title: `${s.street} · ${s.name}`, question: "How many bets is each group worth?" },
    actions: btnVsBbActions(s.street, s.turnBet),
    boxes: BUCKETS.map((b) => ({ id: b, label: BUCKET_NAME[b], small: bucketBb(b), color: BUCKET_COLOR[b] })),
    groups: s.pieces.map((p) => ({ id: p.key, label: p.label, items: p.entries.map((e) => e.hand), correct: [p.answer.bucket], why: p.answer.why, numbers: Object.fromEntries(p.eq.map((x, i) => [`eq${i}`, x])) })),
  };
}

export function defendSpotData(s: DefendSpot): SpotData {
  return {
    drill: "defend",
    id: s.name,
    spot: { hero: "BB", board: s.board.map(txt), pot: s.pot, behind: 100 - s.pot / 2, title: `Defend ${s.street} · ${s.name}`, question: `BTN bets ${s.bet}bb: call or fold?` },
    actions: [...btnVsBbActions(s.street, s.turnBet), { street: s.street, seat: "BB", act: "check" }, { street: s.street, seat: "BTN", act: "bet", bb: s.bet }],
    boxes: [
      { id: "fold", label: "Fold", color: "#5B87C9" },
      { id: "call", label: "Call", color: "#35C277" },
    ],
    groups: s.pieces.map((p) => ({ id: p.key, label: p.label, items: p.entries.map((e) => e.hand), correct: p.answer === "mix" ? ["call", "fold"] : [p.answer], why: p.why, numbers: { callPct: p.callPct, equity: p.eq, need: s.need } })),
  };
}

export function cardSpotData(s: CardSpot, mode: "cards" | "round"): SpotData {
  const [l, r] = mode === "cards" ? ["Bad card", "Good card"] : ["Check it all", "Bet it all"];
  return {
    drill: mode,
    id: s.name,
    spot: { hero: "BTN", board: s.board.map(txt), pot: s.street === "turn" ? 9.1 : s.turnBet && s.turnBet > 9 ? 36.5 : 21.1, behind: 0, title: `${mode === "cards" ? "Good card, bad card" : "Round to 100 or 0"} · ${s.name}`, question: mode === "cards" ? `Which ${s.street} cards help BTN?` : "Bet it all or check it all?" },
    actions: btnVsBbActions(s.street, s.turnBet),
    boxes: [
      { id: "left", label: l, color: "#E0565B" },
      { id: "right", label: r, color: "#35C277" },
    ],
    groups: s.pieces.map((p) => ({ id: p.key, label: p.label, items: p.cards.map(txt), correct: p.answer === "close" ? ["left", "right"] : [p.answer === "good" ? "right" : "left"], why: p.why, numbers: { equity: p.eq, vsAverage: p.delta, ...(p.solverBet != null ? { solverBet: p.solverBet } : {}) } })),
  };
}
