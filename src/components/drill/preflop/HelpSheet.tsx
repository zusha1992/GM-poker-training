"use client";

import { Sheet } from "@/components/ui/Sheet";
import { HowToGrid } from "./HowToGrid";
import type { DrillAction, SwipeDirection } from "@/lib/drill/types";

type HelpSheetProps = {
  open: boolean;
  onGotIt: () => void;
  modeKey: string;
  roleText: string;
  swipes: Partial<Record<SwipeDirection, DrillAction>>;
  labels: Record<DrillAction, string>;
};

/** Shown once per mode, before the first piece: explains the swipe
 * mechanic and what this particular spot is. */
export function HelpSheet({ open, onGotIt, modeKey, roleText, swipes, labels }: HelpSheetProps) {
  return (
    <Sheet open={open} onOpenChange={(next) => !next && onGotIt()} title="How to answer">
      <p className="m-0 text-[14px] leading-[1.5]" style={{ color: "var(--muted)" }}>
        <b style={{ color: "var(--mix)" }}>{roleText}</b> Each piece is a group of hands. Drag it
        toward the action you pick. The board shows where those hands sit.
      </p>
      <HowToGrid modeKey={modeKey} swipes={swipes} labels={labels} />
      <button
        className="h-[52px] rounded-2xl border-0 text-[16px] font-bold"
        style={{ background: "var(--mix)", color: "#2B1C02" }}
        onClick={onGotIt}
        type="button"
      >
        Got it
      </button>
    </Sheet>
  );
}
