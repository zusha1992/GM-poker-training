"use client";

import { Sheet } from "@/components/ui/Sheet";
import { HowToGrid } from "./HowToGrid";
import { PieceShape } from "@/components/drill/PieceShape";
import type { DrillAction, DrillPiece, SwipeDirection } from "@/lib/drill/types";

type LegendSheetProps = {
  open: boolean;
  onClose: () => void;
  modeKey: string;
  heroLabel: string;
  modeNote: string;
  swipes: Partial<Record<SwipeDirection, DrillAction>>;
  labels: Record<DrillAction, string>;
  pieces: DrillPiece[];
  currentIndex: number;
  resultLabelByKey: Map<string, string>;
  onPieceClick: (piece: DrillPiece) => void;
};

/** The "pieces" nav button sheet: how-to-answer recap plus every piece in
 * this spot, in order, each clickable to open its explain sheet. */
export function LegendSheet({
  open,
  onClose,
  modeKey,
  heroLabel,
  modeNote,
  swipes,
  labels,
  pieces,
  currentIndex,
  resultLabelByKey,
  onPieceClick,
}: LegendSheetProps) {
  return (
    <Sheet open={open} onOpenChange={(next) => !next && onClose()} title="How to answer">
      <HowToGrid modeKey={modeKey} swipes={swipes} labels={labels} />
      <h2 className="m-0 font-[family-name:var(--font-display)] text-[22px] font-bold">
        {heroLabel} pieces
      </h2>
      <p className="m-0 text-[14px] leading-[1.5]" style={{ color: "var(--muted)" }}>
        Each piece is a group of hands with similar strength. {modeNote}
      </p>
      <div className="flex flex-col gap-2">
        {pieces.map((p, n) => {
          const resultLabel = resultLabelByKey.get(p.key);
          const isNow = n === currentIndex && !resultLabel;
          return (
            <button
              key={p.key}
              type="button"
              onClick={() => onPieceClick(p)}
              className="flex items-center gap-3 rounded-xl p-2 text-left"
              style={{ background: "var(--panel-2)" }}
            >
              <div className="w-14 flex-shrink-0 flex justify-center">
                <PieceShape hands={p.hands} color={p.color} maxSize={52} />
              </div>
              <div className="min-w-0 flex-1">
                <b className="block text-[14px] font-semibold">{p.label}</b>
                <span className="text-[12px]" style={{ color: "var(--muted)" }}>
                  {p.sub}
                </span>
              </div>
              {resultLabel && (
                <span className="text-[12px] font-semibold" style={{ color: "var(--foreground)" }}>
                  {resultLabel}
                </span>
              )}
              {isNow && (
                <span className="text-[12px] font-semibold" style={{ color: "var(--mix)" }}>
                  Now
                </span>
              )}
            </button>
          );
        })}
      </div>
      <p className="m-0 text-[14px] leading-[1.5]" style={{ color: "var(--muted)" }}>
        Sample strategy for this prototype.
      </p>
      <button
        className="h-[52px] rounded-2xl border-0 text-[16px] font-bold"
        style={{ background: "var(--mix)", color: "#2B1C02" }}
        onClick={onClose}
        type="button"
      >
        Back to the board
      </button>
    </Sheet>
  );
}
