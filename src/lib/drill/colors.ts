/** Action color tokens shared by every drill, matching the CSS variables in globals.css. */
export const ACTION_COLORS: Record<string, string> = {
  raise: "#F2564B",
  call: "#35C277",
  fold: "#3D7EF0",
  mix: "#F2B33D",
  // Postflop reuses the same colors under different names.
  small: "#F2B33D",
  check: "#3D7EF0",
  big: "#F2564B",
  polar: "#F2564B",
};

/** Trash (filled in as a fold) and still-to-place cells; globals.css has the same as --fold-dim and --pending. */
export const FOLD_DIM = "#24436F";
export const PENDING_FILL = "#3A4658";

export function colorOf(action: string): string {
  return ACTION_COLORS[action] ?? "#888";
}

/** CSS for a diagonal-stripe "not in your range at all" cell. */
export const OUT_OF_RANGE_PATTERN =
  "repeating-linear-gradient(45deg,#14243A 0 3px,#22344F 3px 6px)";

/** CSS for a "mix" piece's gradient fill once answered. */
export function mixGradient(primary: string, secondary: string, primaryPct: number): string {
  return `linear-gradient(135deg, ${primary} ${primaryPct}%, ${secondary} ${primaryPct}%)`;
}
