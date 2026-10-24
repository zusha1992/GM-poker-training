"use client";

import { Sheet } from "@/components/ui/Sheet";

type PostflopFinishSheetProps = {
  open: boolean;
  pct: number;
  onReplay: () => void;
  onLobby: () => void;
  /** Called when the sheet is dismissed via the × or the overlay, without
   * picking one of the explicit next-step buttons. */
  onClose: () => void;
};

/** End of the old draft's BB-defense street: score plus replay / lobby. */
export function PostflopFinishSheet({ open, pct, onReplay, onLobby, onClose }: PostflopFinishSheetProps) {
  return (
    <Sheet open={open} onOpenChange={(next) => !next && onClose()} title="Hand complete">
      <div className="font-[family-name:var(--font-display)] text-[52px] font-bold leading-none" style={{ fontVariantNumeric: "tabular-nums" }}>
        {pct}%
      </div>
      <p className="m-0 text-[14px] leading-[1.5]" style={{ color: "var(--muted)" }}>
        That is the full BTN c-bet &rarr; BB defense loop for this board, one-strategy version. Real sizing splits and
        category boundaries still need review.
      </p>
      <button className="h-[52px] rounded-2xl border-0 text-[16px] font-bold" style={{ background: "var(--mix)", color: "#2B1C02" }} onClick={onReplay} type="button">
        Replay
      </button>
      <button className="h-[44px] w-full rounded-xl border text-[14px] font-semibold" style={{ borderColor: "var(--line)" }} onClick={onLobby} type="button">
        Lobby
      </button>
    </Sheet>
  );
}
