"use client";

import { Sheet } from "@/components/ui/Sheet";

function Star({ on }: { on: boolean }) {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"
        fill={on ? "#F2B33D" : "#2C3640"}
      />
    </svg>
  );
}

type FinishSheetProps = {
  open: boolean;
  heroLabel: string;
  pct: number;
  stars: 1 | 2 | 3;
  firstTry: number;
  total: number;
  bestStreak: number;
  summary: string;
  nextLabel: string;
  onNext: () => void;
  onReplay: () => void;
  onLobby: () => void;
  onView: () => void;
};

/** The "range complete" sheet after the last piece — stars, score, a
 * one-line summary of what % of hands this spot plays, and next steps. */
export function FinishSheet({
  open,
  heroLabel,
  pct,
  stars,
  firstTry,
  total,
  bestStreak,
  summary,
  nextLabel,
  onNext,
  onReplay,
  onLobby,
  onView,
}: FinishSheetProps) {
  return (
    <Sheet open={open} onOpenChange={(next) => !next && onView()} title={`${heroLabel} complete`}>
      <div className="flex gap-1.5" aria-label={`${stars} of 3 stars`}>
        <Star on={true} />
        <Star on={stars > 1} />
        <Star on={stars > 2} />
      </div>
      <div className="font-[family-name:var(--font-display)] text-[64px] font-bold leading-none" style={{ fontVariantNumeric: "tabular-nums" }}>
        {pct}%
      </div>
      <p className="m-0 text-[14px] leading-[1.5]" style={{ color: "var(--muted)" }}>
        {firstTry} of {total} pieces perfect on the first try &middot; best streak {bestStreak}. {summary}
      </p>
      <button className="h-[52px] rounded-2xl border-0 text-[16px] font-bold" style={{ background: "var(--mix)", color: "#2B1C02" }} onClick={onNext} type="button">
        {nextLabel}
      </button>
      <button className="h-[44px] rounded-xl border text-[14px] font-semibold" style={{ borderColor: "var(--line)" }} onClick={onReplay} type="button">
        Replay {heroLabel}
      </button>
      <button className="h-[44px] rounded-xl border text-[14px] font-semibold" style={{ borderColor: "var(--line)" }} onClick={onLobby} type="button">
        Lobby
      </button>
      <button className="h-[44px] rounded-xl border text-[14px] font-semibold" style={{ borderColor: "var(--line)" }} onClick={onView} type="button">
        See the board
      </button>
    </Sheet>
  );
}
