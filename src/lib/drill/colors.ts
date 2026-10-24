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

export const FOLD_DIM = "#1F3354";
export const PENDING_FILL = "#33404C";

export function colorOf(action: string): string {
  return ACTION_COLORS[action] ?? "#888";
}

/** CSS for a diagonal-stripe "not in your range at all" cell. */
export const OUT_OF_RANGE_PATTERN =
  "repeating-linear-gradient(45deg,#1A2128 0 3px,#26303A 3px 6px)";

/** CSS for a "mix" piece's gradient fill once answered. */
export function mixGradient(primary: string, secondary: string, primaryPct: number): string {
  return `linear-gradient(135deg, ${primary} ${primaryPct}%, ${secondary} ${primaryPct}%)`;
}
