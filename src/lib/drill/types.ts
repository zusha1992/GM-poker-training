/**
 * Core types for the "Tetris range drill" engine — the swipe-to-act,
 * group-at-a-time practice mechanic (see ROADMAP.md). A `DrillPiece` is one
 * question: a named group of starting hands the player assigns a single
 * action to, optionally auto-revealing a stronger group above it once
 * answered correctly (the anchor-and-reveal principle — see memory
 * `tetris-piece-grouping-principle`).
 */

export type DrillAction = string;

export type DrillPiece = {
  key: string;
  label: string;
  sub: string;
  color: string;
  /** Starting-hand keys in this project's matrix notation, e.g. "AKs", "77", "T9o". */
  hands: string[];
  /** The correct action for this piece. */
  answer: DrillAction;
  /** Hand keys that auto-fill as already-correct once this piece is answered right. */
  reveal?: string[];
  /** For a "mix" answer: [primaryAction, secondaryAction, primaryPercent] — painted
   * as a diagonal gradient split instead of a solid color once answered. */
  mixSplit?: [DrillAction, DrillAction, number];
  /** Longer explanation shown in the per-piece "explain" sheet. */
  desc?: string;
};

export type SwipeDirection = "up" | "down" | "left" | "right";

export type DrillMode = {
  key: string;
  title: string;
  /** Which swipe direction maps to which action, for this mode. */
  swipes: Partial<Record<SwipeDirection, DrillAction>>;
  labels: Record<DrillAction, string>;
  colors: Record<DrillAction, string>;
  pieces: DrillPiece[];
};

/** One legend row: a solid color or CSS gradient/pattern string, plus its label. */
export type LegendEntry = { swatch: string; label: string };
