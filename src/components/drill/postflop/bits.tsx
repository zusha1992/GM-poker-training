import type { SwipeDirection } from "@/lib/drill/types";

const SUIT_GLYPH: Record<string, string> = { s: "♠", h: "♥", d: "♦", c: "♣" };
const SUIT_RED = new Set(["h", "d"]);

/** A small face-up board card. */
export function PlayingCard({ rank, suit }: { rank: string; suit: string }) {
  const r = rank === "T" ? "10" : rank;
  return (
    <span
      className="flex h-9 w-[26px] flex-shrink-0 flex-col items-center justify-center rounded-[4px] font-[family-name:var(--font-display)] text-[12px] font-bold leading-none"
      style={{ background: "#F7F4EC", color: SUIT_RED.has(suit) ? "#C62F28" : "#16191C", boxShadow: "0 1px 0 rgba(0,0,0,.4)" }}
    >
      {r}
      <em className="mt-px text-[11px] not-italic">{SUIT_GLYPH[suit]}</em>
    </span>
  );
}

export function ArrowIcon({ dir }: { dir: SwipeDirection }) {
  const paths: Record<SwipeDirection, string> = {
    up: "M12 19V5M5 12l7-7 7 7",
    down: "M12 5v14M5 12l7 7 7-7",
    left: "M19 12H5M12 5l-7 7 7 7",
    right: "M5 12h14M12 5l7 7-7 7",
  };
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[dir]} />
    </svg>
  );
}

/** Position classes for the direction hint pills around a swipe zone. */
export const HINT_POS: Record<SwipeDirection, string> = {
  up: "top-2 left-1/2 -translate-x-1/2 flex-row gap-1.5 rounded-full px-2.5 py-1 text-[12px]",
  down: "bottom-2 left-1/2 -translate-x-1/2 flex-row gap-1.5 rounded-full px-2.5 py-1 text-[12px]",
  left: "left-1.5 top-1/2 -translate-y-1/2 flex-col gap-0.5 rounded-2xl px-1.5 py-1.5 text-[10.5px]",
  right: "right-1.5 top-1/2 -translate-y-1/2 flex-col gap-0.5 rounded-2xl px-1.5 py-1.5 text-[10.5px]",
};
