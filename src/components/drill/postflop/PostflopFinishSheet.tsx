"use client";

import { Sheet } from "@/components/ui/Sheet";

type PostflopFinishSheetProps = {
  open: boolean;
  stage: "btn" | "bb";
  pct: number;
  /** The whole-range piece's explanation, shown as the "why" after BTN's decision. */
  explanation?: string;
  onContinueAsBb: () => void;
  onReplay: () => void;
  onLobby: () => void;
  /** Called when the sheet is dismissed via the × or the overlay, without
   * picking one of the explicit next-step buttons. */
  onClose: () => void;
};

/** Two variants: after BTN's street, nudge straight into BB's response on
 * the same board; after BB's street, the full loop is done. */
export function PostflopFinishSheet({ open, stage, pct, explanation, onContinueAsBb, onReplay, onLobby, onClose }: PostflopFinishSheetProps) {
  return (
    <Sheet open={open} onOpenChange={(next) => !next && onClose()} title={stage === "btn" ? "BTN street done" : "Hand complete"}>
      <div className="font-[family-name:var(--font-display)] text-[52px] font-bold leading-none" style={{ fontVariantNumeric: "tabular-nums" }}>
        {pct}%
      </div>
      {stage === "btn" ? (
        <>
          {explanation && (
            <p className="m-0 text-[14px] leading-[1.5]" style={{ color: "var(--muted)" }}>
              {explanation}
            </p>
          )}
          <p className="m-0 text-[14px] leading-[1.5]" style={{ color: "var(--muted)" }}>
            Next: BB has to respond to a small bet on the same board.
          </p>
          <button className="h-[52px] rounded-2xl border-0 text-[16px] font-bold" style={{ background: "var(--mix)", color: "#2B1C02" }} onClick={onContinueAsBb} type="button">
            Continue as BB
          </button>
        </>
      ) : (
        <>
          <p className="m-0 text-[14px] leading-[1.5]" style={{ color: "var(--muted)" }}>
            That is the full BTN c-bet &rarr; BB defense loop for this board, one-strategy version. Real sizing
            splits and category boundaries still need review.
          </p>
          <button className="h-[52px] rounded-2xl border-0 text-[16px] font-bold" style={{ background: "var(--mix)", color: "#2B1C02" }} onClick={onReplay} type="button">
            Replay
          </button>
          <button className="h-[44px] w-full rounded-xl border text-[14px] font-semibold" style={{ borderColor: "var(--line)" }} onClick={onLobby} type="button">
            Lobby
          </button>
        </>
      )}
    </Sheet>
  );
}
