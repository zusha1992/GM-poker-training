import type { MatrixSnap } from "@/components/drill/postflop/LineMatrix";
import type { Card, Suit } from "./line-demo";
import { BOARDS } from "./price-hands";
import DEFEND_JSON from "./defend-groups.json";

/** Defend drill (Noam & Uri 2026-11-20): we're the BB, BTN bets the flop (33%), the turn (the board's
 * size) and the river (about 66%). BB only calls or folds. BB's range comes in groups; each goes to
 * Call, Bluff-catch or Fold, by the EV of calling (Noam 2026-11-21): +0.5bb or more call,
 * −0.5 to +0.5 bluff-catch, less fold (scripts/analysis/defend-groups.ts, bb-call-ev.ts). */

export type DefendAnswer = "call" | "fold" | "bluff";
type RawGroup = { id: string; label: string; handsLabel: string; cells: Record<string, number>; fan: string[]; callPct: number; ev: number; share: number; answer: DefendAnswer; why: string };
type RawSpot = { street: "flop" | "turn" | "river"; board: string[]; pot: number; bet: number; behind: number; need: number; basis: Record<string, number>; groups: RawGroup[] };
const DATA = DEFEND_JSON as unknown as Record<string, RawSpot>;

export type DefendStreet = "flop" | "turn" | "river";
export type DefendPiece = {
  key: string;
  label: string;
  hands: string;
  name: string;
  desc: string;
  color: string;
  partMark: string;
  entries: { hand: string; part: number }[];
  cards: [Card, Card][];
  pct: number;
  callPct: number;
  /** EV of calling, bb. */
  ev: number;
  answer: DefendAnswer;
  why: string;
};
export type DefendSpot = {
  name: string;
  flop: string;
  street: DefendStreet;
  board: Card[];
  pot: number;
  bet: number;
  need: number;
  /** BTN's turn bet before a river spot, for the opening scene. */
  turnBet?: number;
  snap: MatrixSnap;
  pieces: DefendPiece[];
  order: string[];
};

/** Calls warm, folds cold, strongest first. */
const GROUP_COLORS = ["#FF3D6E", "#FF7A3B", "#F2C14E", "#B6E35A", "#2EC4B6", "#3FA9F5", "#8B6CFF", "#C59BF0", "#E46FC8", "#9DB4C4", "#7F97A8", "#56626C"];

const RV = "23456789TJQKA";
const card = (c: string): Card => ({ r: RV.indexOf(c[0]) + 2, s: c[1] as Suit });

export const DEFEND_SPOTS: { name: string; flop: string; street: DefendStreet }[] = Object.entries(DATA)
  .filter(([, s]) => s.groups.length)
  .map(([name, s]) => ({ name, flop: name.split("-")[0], street: s.street }));

export const defendSpotsOf = (street: DefendStreet) => DEFEND_SPOTS.filter((s) => s.street === street);

/** The flops that have defend spots, in the lobby's board order. */
export const DEFEND_FLOPS = BOARDS.filter((b) => DEFEND_SPOTS.some((s) => s.flop === b.name));

const CACHE = new Map<string, DefendSpot>();

export function buildDefendSpot(name: string): DefendSpot {
  const hit = CACHE.get(name);
  if (hit) return hit;
  const raw = DATA[name];
  const [flop, turnCode] = name.split("-");
  const spec = BOARDS.find((b) => b.name === flop)!;
  const turn = turnCode ? spec.turns.find((t) => t.card[0] + ({ "♠": "s", "♥": "h", "♦": "d", "♣": "c" } as Record<string, string>)[t.card.slice(1)] === turnCode) : undefined;
  const cells = new Map<string, Partial<Record<string, number>>>();
  let total = 0;
  for (const g of raw.groups)
    for (const [hand, w] of Object.entries(g.cells)) {
      const cell = cells.get(hand) ?? {};
      cell[g.id] = (cell[g.id] ?? 0) + w;
      cells.set(hand, cell);
      total += w;
    }
  const basis = new Map(Object.entries(raw.basis));
  const pieces = raw.groups.map((g, i): DefendPiece => {
    const entries = Object.entries(g.cells).map(([hand, w]) => {
      const all = Object.values(cells.get(hand) ?? {}).reduce((s: number, x) => s + (x ?? 0), 0);
      return { hand, part: all ? w / all : 1 };
    });
    return {
      key: g.id,
      label: g.label,
      hands: g.handsLabel,
      name: `EV of a call ${g.ev >= 0 ? "+" : "−"}${Math.abs(g.ev).toFixed(1)}bb · the solver calls ${g.callPct.toFixed(0)}%`,
      desc: g.handsLabel,
      color: GROUP_COLORS[i % GROUP_COLORS.length],
      partMark: "some",
      entries,
      cards: g.fan.map((c) => [card(c.slice(0, 2)), card(c.slice(2))] as [Card, Card]),
      pct: Math.round(g.share),
      callPct: g.callPct,
      ev: g.ev,
      answer: g.answer,
      why: g.why,
    };
  });
  const spot: DefendSpot = {
    name,
    flop,
    street: raw.street,
    board: raw.board.map(card),
    pot: raw.pot,
    bet: raw.bet,
    need: raw.need,
    turnBet: raw.street === "river" ? (turn?.bet === "overbet" ? 13.7 : 6) : undefined,
    snap: { street: raw.street, cells, basis, total },
    pieces,
    order: raw.groups.map((g) => g.id),
  };
  CACHE.set(name, spot);
  return spot;
}
