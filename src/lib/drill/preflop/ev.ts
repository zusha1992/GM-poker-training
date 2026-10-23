import { SEATS, type Seat } from "./seats";

const RANK_VALUE: Record<string, number> = {
  A: 14, K: 13, Q: 12, J: 11, T: 10, "9": 9, "8": 8, "7": 7, "6": 6, "5": 5, "4": 4, "3": 3, "2": 2,
};

/** Chen formula — a quick, rough hand-strength score. Used only to generate
 * sample "EV" numbers for the explain sheet; not solver output. */
function chen(hand: string): number {
  const points = (v: number) => (v === 14 ? 10 : v === 13 ? 8 : v === 12 ? 7 : v === 11 ? 6 : v / 2);
  const a = RANK_VALUE[hand[0]];
  const b = RANK_VALUE[hand[1]];
  if (hand.length === 2) return Math.max(5, points(a) * 2);
  let score = points(a);
  if (hand[2] === "s") score += 2;
  const gap = a - b - 1;
  const gapPenalty = [0, 1, 2, 4][gap] ?? 5;
  score -= gapPenalty;
  if (gap <= 1 && a < 12) score += 1;
  return score;
}

export type EvContext = {
  modeKey: "rfi" | "tb" | "fb" | "fv";
  heroSeat: Seat;
  openerSeat?: Seat;
  villainSeat?: Seat;
};

const RFI_CUT: Partial<Record<Seat, number>> = { UTG: 9, HJ: 8, CO: 7, BTN: 5.5, SB: 6 };

/** Sample EV per hand (in big blinds), from the Chen score adjusted for the
 * spot. Placeholder numbers for the prototype — not solver output. */
export function evOf(ctx: EvContext, hand: string): number {
  const c = chen(hand);
  let cut: number;
  if (ctx.modeKey === "rfi") cut = RFI_CUT[ctx.heroSeat] ?? 8;
  else if (ctx.modeKey === "fv") cut = 13.5 - 1.0 * SEATS.indexOf(ctx.openerSeat ?? ctx.heroSeat);
  else if (ctx.modeKey === "fb")
    cut =
      12.5 -
      1.1 * SEATS.indexOf(ctx.heroSeat) -
      (ctx.villainSeat === "SB" || ctx.villainSeat === "BB" ? 0.8 : 0);
  else
    cut =
      11 - 1.2 * SEATS.indexOf(ctx.openerSeat ?? ctx.heroSeat) - (ctx.heroSeat === "BB" ? 2 : 0);
  return Math.max(-0.6, Math.round(((c - cut) / 6) * 100) / 100);
}
