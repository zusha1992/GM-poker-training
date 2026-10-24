"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useMotionValue, useTransform, type PanInfo } from "motion/react";
import { PieceShape } from "@/components/drill/PieceShape";
import { SWIPE_THRESHOLD } from "@/components/drill/PieceCard";
import type { SortPieceDef } from "@/lib/drill/postflop/line-demo";

export type SortDir = "left" | "right";

type SortPieceProps = {
  piece: SortPieceDef;
  /** Called once the piece is released past the threshold to one side. */
  onDrop: (dir: SortDir) => void;
  /** Which side the finger is currently heading to (past the threshold), or null. */
  onArm: (dir: SortDir | null) => void;
  /** True while the finger holds this piece (to highlight its hands). */
  onHold: (held: boolean) => void;
  shakeSeq: number;
  /** Set when the drop was right: the piece flies off to that side. */
  flyTo: SortDir | null;
  disabled: boolean;
  /** Entrance stagger, seconds. */
  delay: number;
};

const dirOf = (dx: number, dy: number): SortDir | null =>
  Math.abs(dx) >= SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy) ? (dx < 0 ? "left" : "right") : null;

/** A compact, ready-made Tetris piece (Value / Bluffs / The rest) that the
 * player drags left to Check or right to Overbet. Same physics as the
 * preflop swipe card: follows the finger, tilts, snaps back, shakes on a
 * wrong answer and flies off on a right one. */
export function SortPiece({ piece, onDrop, onArm, onHold, shakeSeq, flyTo, disabled, delay }: SortPieceProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, (v) => v / 14);
  const armed = useRef<SortDir | null>(null);

  useEffect(() => {
    if (!shakeSeq) return;
    void animate(x, [0, -9, 9, -9, 9, 0], { duration: 0.45, ease: "easeInOut" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shakeSeq]);

  useEffect(() => {
    if (!flyTo) return;
    void animate(x, flyTo === "left" ? -320 : 320, { duration: 0.38, ease: "easeIn" });
    void animate(y, 30, { duration: 0.38, ease: "easeIn" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flyTo]);

  function handleDrag(_: unknown, info: PanInfo) {
    const d = dirOf(info.offset.x, info.offset.y);
    if (d !== armed.current) {
      armed.current = d;
      onArm(d);
    }
  }

  function handleDragEnd(_: unknown, info: PanInfo) {
    armed.current = null;
    onArm(null);
    onHold(false);
    const d = dirOf(info.offset.x, info.offset.y);
    if (d) onDrop(d);
  }

  return (
    <motion.div
      drag={!disabled && !flyTo}
      dragSnapToOrigin
      dragElastic={0.65}
      dragMomentum={false}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 28 }}
      onDragStart={() => onHold(true)}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      whileDrag={{ scale: 1.06, zIndex: 5 }}
      style={{ x, y, rotate, background: "var(--panel-2)", borderColor: piece.color, touchAction: "none" }}
      initial={{ y: 30, scale: 0.85, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 0.45, delay, ease: [0.3, 1.3, 0.5, 1] }}
      className="relative -mt-1 flex w-[78px] cursor-grab flex-col items-center gap-1 rounded-xl border-2 px-1 py-1.5 text-center select-none"
      data-testid={`sort-${piece.key}`}
    >
      <div className="flex h-[38px] items-center justify-center">
        <PieceShape hands={piece.hands} color={piece.color} maxSize={38} />
      </div>
      <b className="font-[family-name:var(--font-display)] text-[13.5px] leading-none">{piece.label}</b>
      <span className="text-[10px] leading-tight" style={{ color: "var(--muted)" }}>
        {piece.sub}
        <br />
        <b style={{ color: "var(--foreground)" }}>{piece.pct}%</b>
      </span>
    </motion.div>
  );
}
