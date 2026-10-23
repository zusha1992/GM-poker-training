"use client";

import { PieceShape } from "./PieceShape";
import type { DrillPiece, SwipeDirection } from "@/lib/drill/types";
import { useRef, useState, type PointerEvent as ReactPointerEvent } from "react";

const THRESHOLD = 55;

function directionOf(dx: number, dy: number): SwipeDirection | null {
  if (Math.abs(dx) < THRESHOLD && Math.abs(dy) < THRESHOLD) return null;
  if (Math.abs(dy) > Math.abs(dx)) return dy < 0 ? "up" : "down";
  return dx < 0 ? "left" : "right";
}

type DrillCardProps = {
  piece: DrillPiece;
  swipes: Partial<Record<SwipeDirection, string>>;
  colorFor: (action: string) => string;
  onSubmit: (direction: SwipeDirection) => void;
  shake: boolean;
};

/** The swipeable "Tetris piece" the player drags toward an action. */
export function DrillCard({ piece, swipes, colorFor, onSubmit, shake }: DrillCardProps) {
  const [drag, setDrag] = useState<{ dx: number; dy: number } | null>(null);
  const start = useRef<{ x: number; y: number } | null>(null);

  const activeDir = drag ? directionOf(drag.dx, drag.dy) : null;
  const activeAction = activeDir ? swipes[activeDir] : undefined;
  const borderColor = activeAction ? colorFor(activeAction) : piece.color;

  function onPointerDown(e: ReactPointerEvent<HTMLDivElement>) {
    start.current = { x: e.clientX, y: e.clientY };
    setDrag({ dx: 0, dy: 0 });
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }

  function onPointerMove(e: ReactPointerEvent<HTMLDivElement>) {
    if (!start.current) return;
    setDrag({ dx: e.clientX - start.current.x, dy: e.clientY - start.current.y });
  }

  function onPointerUp() {
    if (!start.current) return;
    const d = drag ? directionOf(drag.dx, drag.dy) : null;
    start.current = null;
    setDrag(null);
    if (d && swipes[d]) onSubmit(d);
  }

  return (
    <div
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      className={`flex min-w-[140px] max-w-[calc(100%-40px)] cursor-grab touch-none flex-col items-center gap-2 rounded-2xl border-2 px-4 py-3 text-center select-none ${
        shake ? "animate-[shake_0.4s_ease]" : ""
      }`}
      style={{
        background: "var(--panel-2)",
        borderColor,
        transform: drag ? `translate(${drag.dx}px, ${drag.dy}px) rotate(${drag.dx / 18}deg)` : undefined,
        transition: drag ? "none" : "transform 0.25s ease",
      }}
    >
      <PieceShape hands={piece.hands} color={piece.color} maxSize={64} />
      <div className="font-[family-name:var(--font-display)] text-[17px] font-bold">
        {piece.label}
      </div>
      <div className="text-[11.5px]" style={{ color: "var(--muted)" }}>
        {piece.sub} &middot; {piece.hands.length} combos
      </div>
    </div>
  );
}
