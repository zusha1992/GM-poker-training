"use client";

import { Sheet } from "@/components/ui/Sheet";
import { HowToGrid } from "./HowToGrid";
import { RFI_SPOTS } from "@/lib/drill/preflop/rfi";
import { PREFLOP_MODES } from "@/lib/drill/preflop/modes";
import type { Seat } from "@/lib/drill/preflop/seats";

type PositionPickerProps = {
  open: boolean;
  onClose: () => void;
  onPick: (seat: Seat) => void;
  doneSeats: Set<string>;
};

/** The raise-first-in picker: pick which seat to drill next. */
export function PositionPicker({ open, onClose, onPick, doneSeats }: PositionPickerProps) {
  const mode = PREFLOP_MODES.rfi;
  return (
    <Sheet open={open} onOpenChange={(next) => !next && onClose()} title={mode.title}>
      <p className="m-0 text-[14px] leading-[1.5]" style={{ color: "var(--muted)" }}>
        {mode.intro}
      </p>
      <HowToGrid modeKey="rfi" swipes={mode.swipes} labels={mode.labels} />
      <div className="flex flex-col gap-2">
        {RFI_SPOTS.map((spot) => {
          const done = doneSeats.has(spot.key);
          return (
            <button
              key={spot.key}
              type="button"
              onClick={() => onPick(spot.key)}
              className="flex min-h-14 items-center gap-3 rounded-xl p-2.5 text-left"
              style={{
                background: "var(--panel-2)",
                border: `1px solid ${done ? "var(--call)" : "var(--line)"}`,
              }}
            >
              <span className="w-12 font-[family-name:var(--font-display)] text-[18px] font-bold">
                {spot.key}
              </span>
              <span className="min-w-0 flex-1">
                <b className="block text-[14px] font-semibold">{spot.position.name}</b>
                <span className="text-[12px]" style={{ color: "var(--muted)" }}>
                  {spot.drill.pieces.length} decisions{done ? " · done" : ""}
                </span>
              </span>
              <span className="font-[family-name:var(--font-display)] text-[16px] font-semibold" style={{ fontVariantNumeric: "tabular-nums" }}>
                {spot.drill.pct}%
              </span>
            </button>
          );
        })}
      </div>
      <button
        className="h-[44px] rounded-xl border text-[14px] font-semibold"
        style={{ borderColor: "var(--line)" }}
        onClick={onClose}
        type="button"
      >
        Back to the lobby
      </button>
    </Sheet>
  );
}
