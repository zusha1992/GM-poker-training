"use client";

import { Sheet } from "@/components/ui/Sheet";
import { PieceShape } from "@/components/drill/PieceShape";
import { PlayingCards } from "./PlayingCards";
import { combosOf } from "@/lib/drill/matrix";
import { colorOf, mixGradient } from "@/lib/drill/colors";
import { evOf, type EvContext } from "@/lib/drill/preflop/ev";
import type { DrillAction, DrillPiece } from "@/lib/drill/types";

type ExplainSheetProps = {
  piece: DrillPiece | null;
  onClose: () => void;
  /** Whether this piece has actually been answered yet — before that, the
   * verdict and EV numbers stay hidden so the player isn't spoiled. */
  answered: boolean;
  evContext: EvContext;
  evLabel: string;
  labelFor: (action: DrillAction) => string;
};

export function ExplainSheet({ piece, onClose, answered, evContext, evLabel, labelFor }: ExplainSheetProps) {
  return (
    <Sheet open={!!piece} onOpenChange={(open) => !open && onClose()} title={piece?.label ?? ""} hideTitle>
      {piece && (
        <>
          <div className="flex items-center gap-3.5">
            <PieceShape hands={piece.hands} color={piece.color} maxSize={64} />
            <div>
              <h2 className="m-0 font-[family-name:var(--font-display)] text-[22px] font-bold">
                {piece.label}
              </h2>
              <span className="text-[13px]" style={{ color: "var(--muted)" }}>
                {piece.sub} &middot; {piece.hands.reduce((a, h) => a + combosOf(h), 0)} combos
              </span>
            </div>
          </div>

          <p className="m-0 text-[14px] leading-[1.5]" style={{ color: "var(--muted)" }}>
            {piece.desc ?? ""}
          </p>

          {answered ? (
            <div className="flex items-center gap-2 text-[14px] font-semibold">
              <i
                className="inline-block h-3 w-3 rounded-[3px]"
                style={{
                  background:
                    piece.answer === "mix" && piece.mixSplit
                      ? mixGradient(colorOf(piece.mixSplit[0]), colorOf(piece.mixSplit[1]), piece.mixSplit[2])
                      : colorOf(piece.answer),
                }}
              />
              In this spot: {labelFor(piece.answer)}
            </div>
          ) : (
            <div className="text-[14px] font-semibold" style={{ color: "var(--muted)" }}>
              Answer this piece to see the verdict and the EV.
            </div>
          )}

          <div className="grid grid-cols-2 gap-2">
            {piece.hands.map((hand) => {
              const ev = evOf(evContext, hand);
              return (
                <div key={hand} className="flex min-w-0 items-center gap-2 rounded-xl p-2" style={{ background: "var(--panel-2)" }}>
                  <PlayingCards hand={hand} />
                  <div className="flex min-w-0 flex-1 flex-col">
                    <b className="font-[family-name:var(--font-display)] text-[15px]">{hand}</b>
                    <span className="text-[11px]" style={{ color: "var(--muted)" }}>
                      {combosOf(hand)} combos
                    </span>
                  </div>
                  {answered ? (
                    <span
                      className="font-[family-name:var(--font-display)] text-[14px] font-bold"
                      style={{ color: ev >= 0 ? "var(--call)" : "var(--raise)" }}
                    >
                      {ev >= 0 ? "+" : ""}
                      {ev.toFixed(2)}
                    </span>
                  ) : (
                    <span className="text-[12px]" style={{ color: "var(--muted)" }}>
                      ?
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          <p className="m-0 text-[14px] leading-[1.5]" style={{ color: "var(--muted)" }}>
            {evLabel} in big blinds. Sample numbers for the prototype, not solver output.
          </p>
          <button className="h-[52px] rounded-2xl border-0 text-[16px] font-bold" style={{ background: "var(--mix)", color: "#2B1C02" }} onClick={onClose} type="button">
            Close
          </button>
        </>
      )}
    </Sheet>
  );
}
