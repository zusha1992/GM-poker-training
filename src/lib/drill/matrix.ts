/**
 * Starting-hand <-> matrix-coordinate helpers for the drill engine. Row/col
 * both run A,K,Q,J,T,9,8,7,6,5,4,3,2 (RANKS order); row===col is a pair,
 * col>row is suited, col<row is offsuit — same orientation the Tetris
 * prototype's own `lab()`/`coord()` used.
 */
import { RANKS, type Rank } from "@/lib/poker/types";

export type GridCoord = { row: number; col: number };

export type MatrixHand = {
  key: string;
  row: number;
  col: number;
};

function label(row: number, col: number): string {
  const hi: Rank = RANKS[row];
  const lo: Rank = RANKS[col];
  if (row === col) return `${hi}${hi}`;
  return row < col ? `${hi}${lo}s` : `${lo}${hi}o`;
}

export const MATRIX_HANDS: MatrixHand[] = RANKS.flatMap((_, row) =>
  RANKS.map((_, col) => ({ key: label(row, col), row, col })),
);

const COORD_BY_HAND: Map<string, GridCoord> = new Map(
  MATRIX_HANDS.map((h) => [h.key, { row: h.row, col: h.col }]),
);

export function coordOfHand(hand: string): GridCoord {
  const coord = COORD_BY_HAND.get(hand);
  if (!coord) {
    throw new Error(`Unknown hand key: ${hand}`);
  }
  return coord;
}

/** Bounding box + per-cell coords for a group of hands, used to size/shape the swipeable piece. */
export function footprint(hands: string[]) {
  const coords = hands.map(coordOfHand);
  const minRow = Math.min(...coords.map((c) => c.row));
  const maxRow = Math.max(...coords.map((c) => c.row));
  const minCol = Math.min(...coords.map((c) => c.col));
  const maxCol = Math.max(...coords.map((c) => c.col));
  const cellSet = new Set(coords.map((c) => `${c.row},${c.col}`));
  return { minRow, maxRow, minCol, maxCol, cellSet };
}
