import type { Card } from "./line-demo";
import { priceGroupOf, type PGroup } from "./price-hands";

/** The suit with three or more cards on the board (a flush is possible), if any. */
export function flushSuit(board: Card[]): string | undefined {
  return ["s", "h", "d", "c"].find((s) => board.filter((c) => c.s === s).length >= 3);
}

/** On a flush board the old drill files a pair holding one card of the suit as a draw
 * ("pfl", "pflm", "pflw"). The equity drills ask it as the pair it is. */
export function madeGroup(g: PGroup, hole: [Card, Card], board: Card[], cut: Parameters<typeof priceGroupOf>[2]): PGroup {
  if (g !== "pfl" && g !== "pflm" && g !== "pflw") return g;
  const fs = flushSuit(board);
  return priceGroupOf(hole, board.map((c) => ({ ...c, s: c.s === fs ? "_" : c.s }) as Card), cut);
}

/** Noam 2026-11-13 (9♦6♦2♥ 8♦): when a flush is possible, an overpair holding one card of
 * the flush suit (a flush draw) is worth way more than one without; they are separate groups.
 * Top pair too. Such a combo's key is "AA+fd"; every other combo's key is its two ranks ("AA", "AK"). */
export function handKey(hand: string, cards: [Card, Card], g: PGroup, board: Card[]): string {
  const key = hand.slice(0, 2);
  const suit = flushSuit(board);
  // River drill: no draws left. A flush is apart from the same two ranks without it ("AK+fl" vs "AK").
  if (board.length === 5) return suit && (g === "flush" || g === "flushlo") ? `${key}+fl` : key;
  // Noam 2026-11-13: the same for top pair ("top pair needs to have the same thing, with or without the flush draw").
  if (suit && ["op", "tpgk", "tpmk", "tpwk"].includes(g) && cards.filter((c) => c.s === suit).length === 1) return `${key}+fd`;
  return key;
}
