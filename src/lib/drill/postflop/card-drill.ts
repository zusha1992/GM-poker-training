import type { Card, Suit } from "./line-demo";
import { BOARDS } from "./price-hands";
import CARD_JSON from "./card-quality.json";

/** Good card, bad card and Round to 100 or 0 (Noam & Uri 2026-11-20): the same data
 * (scripts/analysis/card-quality.ts). A spot = a flop (its turn cards) or a turn (its river
 * cards), after BTN bet and BB called. Pieces are groups of cards. "close" = either answer. */

export type CardVerdict = "good" | "bad" | "close";
type RawPiece = { id: string; label: string; cards: string[]; eq: number; delta: number; solverBet: number | null; answer: CardVerdict; why: string };
type RawSpot = { street: "turn" | "river"; board: string[]; avg: number; pieces: RawPiece[] };
const DATA = CARD_JSON as unknown as Record<string, RawSpot>;

export type CardStreet = "turn" | "river";
export type CardPiece = { key: string; label: string; pct: number; color: string; cards: Card[]; eq: number; delta: number; solverBet: number | null; answer: CardVerdict; why: string };
export type CardSpot = { name: string; flop: string; street: CardStreet; board: Card[]; avg: number; turnBet?: number; pieces: CardPiece[] };

const RV = "23456789TJQKA";
const card = (c: string): Card => ({ r: RV.indexOf(c[0]) + 2, s: c[1] as Suit });
const COLORS = ["#FF3D6E", "#FF7A3B", "#F2C14E", "#B6E35A", "#2EC4B6", "#3FA9F5", "#8B6CFF", "#C59BF0", "#E46FC8"];
const SUIT_CODE: Record<string, string> = { "♠": "s", "♥": "h", "♦": "d", "♣": "c" };

export const CARD_SPOTS: { name: string; flop: string; street: CardStreet }[] = Object.entries(DATA).map(([name, s]) => ({ name, flop: name.split("-")[0], street: s.street }));
export const cardSpotsOf = (street: CardStreet) => CARD_SPOTS.filter((s) => s.street === street);
export const CARD_FLOPS = BOARDS.filter((b) => CARD_SPOTS.some((s) => s.flop === b.name));

export function buildCardSpot(name: string): CardSpot {
  const raw = DATA[name];
  const [flop, turnCode] = name.split("-");
  const spec = BOARDS.find((b) => b.name === flop)!;
  const turn = turnCode ? spec.turns.find((t) => t.card[0] + SUIT_CODE[t.card.slice(1)] === turnCode) : undefined;
  const total = raw.pieces.reduce((s, p) => s + p.cards.length, 0);
  return {
    name,
    flop,
    street: raw.street,
    board: raw.board.map(card),
    avg: raw.avg,
    turnBet: turn ? (turn.bet === "overbet" ? 13.7 : 6) : undefined,
    pieces: raw.pieces.map((p, i) => ({
      key: p.id,
      label: p.label,
      pct: Math.round((p.cards.length / total) * 100),
      color: COLORS[i % COLORS.length],
      cards: p.cards.map(card),
      eq: p.eq,
      delta: p.delta,
      solverBet: p.solverBet,
      answer: p.answer,
      why: p.why,
    })),
  };
}
