"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useMotionValue, useTransform, type PanInfo } from "motion/react";
import { SWIPE_THRESHOLD } from "@/components/drill/PieceCard";
import type { SortPieceDef } from "@/lib/drill/postflop/line-demo";

/** left = Check, right = the street's main bet, up = the alternative bet (turn: small bet). */
export type SortDir = "left" | "right" | "up";

/** Classic Tetris shapes, as [col, row] blocks. Abstract on purpose: the
 * shape stands for the group, not for where its hands sit in the matrix. */
const TETROMINO: Record<SortPieceDef["key"], [number, number][]> = {
  value: [
    [0, 0],
    [1, 0],
    [2, 0],
    [1, 1],
  ], // T
  bluff: [
    [1, 0],
    [2, 0],
    [0, 1],
    [1, 1],
  ], // S
  check: [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 2],
  ], // L
  giveup: [
    [0, 0],
    [1, 0],
    [1, 1],
    [2, 1],
  ], // Z — mirror of the all-in bluff's S: same family, opposite decision
  // 3×3 square: the whole range as one piece (flop range bet).
  whole: [
    [0, 0],
    [1, 0],
    [2, 0],
    [0, 1],
    [1, 1],
    [2, 1],
    [0, 2],
    [1, 2],
    [2, 2],
  ],
};

const BLOCK = 19;
const GAP = 2;

export function Tetromino({
  kind,
  color,
  block = BLOCK,
  colors,
}: {
  kind: SortPieceDef["key"];
  color: string;
  block?: number;
  /** Optional color per block (in shape order), e.g. the whole range's mix of groups. */
  colors?: string[];
}) {
  const cells = TETROMINO[kind];
  const cols = Math.max(...cells.map(([c]) => c)) + 1;
  const rows = Math.max(...cells.map(([, r]) => r)) + 1;
  return (
    <div className="relative" style={{ width: cols * (block + GAP) - GAP, height: rows * (block + GAP) - GAP }} aria-hidden="true">
      {cells.map(([c, r], i) => (
        <i
          key={`${c}-${r}`}
          className="absolute rounded-[4px]"
          style={{
            left: c * (block + GAP),
            top: r * (block + GAP),
            width: block,
            height: block,
            background: colors?.[i] ?? color,
            boxShadow: "inset 0 2px 0 rgba(255,255,255,.35), inset 0 -2px 0 rgba(0,0,0,.28), 0 3px 8px rgba(0,0,0,.35)",
          }}
        />
      ))}
    </div>
  );
}

type SortPieceProps = {
  piece: SortPieceDef;
  /** Called once the piece is released past the threshold to one side. */
  onDrop: (dir: SortDir) => void;
  /** Which side the finger is currently heading to (past the threshold), or null. */
  onArm: (dir: SortDir | null) => void;
  /** True while the finger holds this piece (to highlight its hands). */
  onHold: (held: boolean) => void;
  /** A tap without dragging: show which hands are in this piece. */
  onInspect: () => void;
  shakeSeq: number;
  /** Set when the drop was right: the piece flies off to that side. */
  flyTo: SortDir | null;
  disabled: boolean;
  /** Entrance stagger, seconds. */
  delay: number;
  /** Smaller piece, for streets with four pieces in a row. */
  compact?: boolean;
  /** Per-block colors (whole-range piece). */
  blockColors?: string[];
  /** Allow dragging up (a third option above the pieces). */
  allowUp?: boolean;
  /** Replaces the "N% · tap to see" line under the label. */
  caption?: string;
};

function dirOf(dx: number, dy: number, allowUp: boolean): SortDir | null {
  if (allowUp && dy <= -SWIPE_THRESHOLD && Math.abs(dy) > Math.abs(dx)) return "up";
  return Math.abs(dx) >= SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy) ? (dx < 0 ? "left" : "right") : null;
}

/** A floating, ready-made Tetris piece (Value / Bluffs / The rest) that the
 * player drags left to Check or right to Overbet, or taps to see its
 * hands. Same physics as the preflop swipe card: follows the finger,
 * tilts, snaps back, shakes on a wrong answer and flies off on a right one. */
export function SortPiece({
  piece,
  onDrop,
  onArm,
  onHold,
  onInspect,
  shakeSeq,
  flyTo,
  disabled,
  delay,
  compact = false,
  blockColors,
  caption,
  allowUp = false,
}: SortPieceProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, (v) => v / 12);
  const armed = useRef<SortDir | null>(null);
  const didDrag = useRef(false);

  useEffect(() => {
    if (!shakeSeq) return;
    void animate(x, [0, -9, 9, -9, 9, 0], { duration: 0.45, ease: "easeInOut" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shakeSeq]);

  useEffect(() => {
    if (!flyTo) return;
    void animate(x, flyTo === "left" ? -320 : flyTo === "right" ? 320 : 0, { duration: 0.38, ease: "easeIn" });
    void animate(y, flyTo === "up" ? -260 : 40, { duration: 0.38, ease: "easeIn" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flyTo]);

  function handleDrag(_: unknown, info: PanInfo) {
    const d = dirOf(info.offset.x, info.offset.y, allowUp);
    if (d !== armed.current) {
      armed.current = d;
      onArm(d);
    }
  }

  function handleDragEnd(_: unknown, info: PanInfo) {
    armed.current = null;
    onArm(null);
    onHold(false);
    const d = dirOf(info.offset.x, info.offset.y, allowUp);
    if (d) onDrop(d);
  }

  return (
    <motion.div
      drag={!disabled && !flyTo}
      dragSnapToOrigin
      dragElastic={0.65}
      dragMomentum={false}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 28 }}
      onDragStart={() => {
        didDrag.current = true;
        onHold(true);
      }}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      onTap={() => {
        if (!disabled && !didDrag.current) onInspect();
        didDrag.current = false;
      }}
      whileDrag={{ scale: 1.12, zIndex: 5 }}
      whileTap={{ scale: 1.05 }}
      style={{ x, y, rotate, touchAction: "none" }}
      initial={{ y: 30, scale: 0.6, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      transition={{ duration: 0.45, delay, ease: [0.3, 1.3, 0.5, 1] }}
      className={`relative flex ${compact ? "w-[70px]" : caption ? "w-[150px]" : "w-[84px]"} cursor-grab flex-col items-center gap-1.5 text-center select-none`}
      data-testid={`sort-${piece.key}`}
      role="button"
      aria-label={`${piece.label}, ${piece.pct}% of the range. Drag left to check or right to overbet. Tap to see the hands.`}
    >
      {/* Gentle bob so the pieces read as floating, not as fixed cards. */}
      <div className={`flex ${piece.key === "whole" ? "h-[76px]" : "h-[64px]"} items-center justify-center`} style={{ animation: `sortFloat 2.6s ease-in-out ${delay * 4}s infinite` }}>
        <Tetromino kind={piece.key} color={piece.color} block={compact ? 15 : BLOCK + (piece.key === "whole" ? 4 : 0)} colors={blockColors} />
      </div>
      <b className={`font-[family-name:var(--font-display)] leading-none ${caption ? "text-[15.5px]" : "text-[13.5px]"}`}>{piece.label}</b>
      <span className="text-[10.5px] leading-none" style={{ color: "var(--muted)" }}>
        {caption ?? `${piece.pct}%${compact ? "" : " · tap to see"}`}
      </span>
    </motion.div>
  );
}
