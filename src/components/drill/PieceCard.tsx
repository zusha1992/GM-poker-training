"use client";

import { PieceShape } from "./PieceShape";
import type { DrillAction, DrillPiece, SwipeDirection } from "@/lib/drill/types";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { animate, motion, useMotionValue, useTransform, type PanInfo } from "motion/react";

/** How far (px) the card must travel before a release counts as a swipe. */
export const SWIPE_THRESHOLD = 55;
const THRESHOLD = SWIPE_THRESHOLD;

function directionOf(dx: number, dy: number): SwipeDirection | null {
  if (Math.abs(dx) < THRESHOLD && Math.abs(dy) < THRESHOLD) return null;
  if (Math.abs(dy) > Math.abs(dx)) return dy < 0 ? "up" : "down";
  return dx < 0 ? "left" : "right";
}

export type FlyTo = { x: number; y: number; rotate: number };

type PieceCardProps = {
  piece: DrillPiece;
  swipes: Partial<Record<SwipeDirection, DrillAction>>;
  colorFor: (action: DrillAction) => string;
  onSwipe: (direction: SwipeDirection) => void;
  onDragPreview?: (action: DrillAction | null) => void;
  /** Raw finger offset on every drag frame (and 0,0 on release) — for
   * screens that want a continuous preview, not just the threshold one. */
  onDragMove?: (dx: number, dy: number) => void;
  onTap?: () => void;
  /** Bump this to retrigger the "wrong answer" shake, even for repeats. */
  shakeSeq?: number;
  /** When set, the card animates to this offset (a "fly off" after a
   * correct answer) instead of following the pointer. */
  flyTo?: FlyTo | null;
  disabled?: boolean;
  /** Replaces the default footprint-shape icon — for pieces that don't
   * represent a hand-matrix shape (e.g. "the whole range" as one card). */
  icon?: ReactNode;
  /** Replaces the auto "{sub} · {N} combos" line — for pieces where a raw
   * hand-key count isn't a meaningful number (e.g. "the whole range"). */
  subText?: string;
};

/** The swipeable "Tetris piece" the player drags toward an action. Drag
 * physics (follow-the-finger, snap back, rotate-while-dragging, fly off on
 * a correct answer) come from Framer Motion. */
export function PieceCard({
  piece,
  swipes,
  colorFor,
  onSwipe,
  onDragPreview,
  onDragMove,
  onTap,
  shakeSeq = 0,
  flyTo = null,
  disabled = false,
  icon,
  subText,
}: PieceCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, (v) => v / 18);
  const [liveOffset, setLiveOffset] = useState({ dx: 0, dy: 0 });
  const didDrag = useRef(false);

  useEffect(() => {
    if (!shakeSeq) return;
    void animate(x, [0, -10, 10, -10, 10, 0], { duration: 0.45, ease: "easeInOut" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shakeSeq]);

  useEffect(() => {
    if (!flyTo) return;
    void animate(x, flyTo.x, { duration: 0.38, ease: "easeIn" });
    void animate(y, flyTo.y, { duration: 0.38, ease: "easeIn" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flyTo]);

  const activeDir = directionOf(liveOffset.dx, liveOffset.dy);
  const activeAction = activeDir ? swipes[activeDir] : undefined;
  const borderColor = activeAction ? colorFor(activeAction) : piece.color;

  function handleDragStart() {
    didDrag.current = true;
  }

  function handleDrag(_: unknown, info: PanInfo) {
    const next = { dx: info.offset.x, dy: info.offset.y };
    setLiveOffset(next);
    onDragMove?.(next.dx, next.dy);
    onDragPreview?.(directionOf(next.dx, next.dy) ? swipes[directionOf(next.dx, next.dy)!] ?? null : null);
  }

  function handleDragEnd(_: unknown, info: PanInfo) {
    setLiveOffset({ dx: 0, dy: 0 });
    onDragPreview?.(null);
    const dir = directionOf(info.offset.x, info.offset.y);
    if (dir && swipes[dir]) onSwipe(dir);
    else onDragMove?.(0, 0);
  }

  const longLabel = piece.label.length > 18;

  return (
    <motion.div
      drag={!disabled && !flyTo}
      dragSnapToOrigin
      dragElastic={0.65}
      dragMomentum={false}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 28 }}
      onDragStart={handleDragStart}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      onTap={() => {
        if (!disabled && !didDrag.current) onTap?.();
        didDrag.current = false;
      }}
      style={{ x, y, rotate, background: "var(--panel-2)", borderColor }}
      initial={{ y: -40, scale: 0.85, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.3, 1.3, 0.5, 1] }}
      className="flex min-w-[112px] max-w-[calc(100%-156px)] cursor-grab touch-none flex-col items-center gap-2 rounded-2xl border-2 px-3 py-2.5 text-center select-none"
    >
      {icon ?? <PieceShape hands={piece.hands} color={piece.color} maxSize={52} />}
      <div
        className="font-[family-name:var(--font-display)] font-bold"
        style={{ fontSize: longLabel ? 13.5 : 15.5 }}
      >
        {piece.label}
      </div>
      <div className="text-[11.5px]" style={{ color: "var(--muted)" }}>
        {subText ?? `${piece.sub} · ${piece.hands.length} combos`}
      </div>
      {onTap && (
        <div className="text-[11px]" style={{ color: "var(--muted)" }}>
          Tap for details
        </div>
      )}
    </motion.div>
  );
}
