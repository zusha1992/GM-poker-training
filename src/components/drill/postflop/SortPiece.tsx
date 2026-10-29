"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useMotionValue, useTransform, type PanInfo } from "motion/react";
import { SWIPE_THRESHOLD } from "@/components/drill/PieceCard";

/** left = Check, right = the street's main bet, up = the alternative bet (turn: small bet). */
export type SortDir = "left" | "right" | "up";

/** What a floating piece needs to show itself. `shape` picks the Tetris
 * shape (defaults to `key`). */
export type PieceView = { key: string; label: string; pct: number; color: string; shape?: string };

/** Classic Tetris shapes, as [col, row] blocks. Abstract on purpose: the
 * shape stands for the group, not for where its hands sit in the matrix. */
const TETROMINO: Record<string, [number, number][]> = {
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
  // Extra shapes for the "how many big blinds" drill, one per hand group.
  block6: [
    [0, 0],
    [1, 0],
    [2, 0],
    [0, 1],
    [1, 1],
    [2, 1],
  ],
  O: [
    [0, 0],
    [1, 0],
    [0, 1],
    [1, 1],
  ],
  I: [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
  ],
  J: [
    [1, 0],
    [1, 1],
    [0, 2],
    [1, 2],
  ],
  V: [
    [0, 0],
    [0, 1],
    [1, 1],
  ],
  I3: [
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  dot2: [
    [0, 0],
    [1, 0],
  ],
  plus: [
    [1, 0],
    [0, 1],
    [1, 1],
    [2, 1],
    [1, 2],
  ],
  U: [
    [0, 0],
    [2, 0],
    [0, 1],
    [1, 1],
    [2, 1],
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
  kind: string;
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

type SortPieceProps<D extends string> = {
  piece: PieceView;
  /** Called once the piece is released past the threshold to one side
   * (or, with `zoneAt`, over a drop box). */
  onDrop: (dir: D) => void;
  /** Which side the finger is currently heading to (past the threshold), or null. */
  onArm: (dir: D | null) => void;
  /** Drop boxes found by finger position instead of drag direction: returns
   * the box under this viewport point, or null. */
  zoneAt?: (x: number, y: number) => D | null;
  /** With `zoneAt`: where the piece flies on a right answer (the box's rect). */
  flyRect?: DOMRect | null;
  /** True while the finger holds this piece (to highlight its hands). */
  onHold: (held: boolean) => void;
  /** A tap without dragging: show which hands are in this piece. */
  onInspect: () => void;
  shakeSeq: number;
  /** Set when the drop was right: the piece flies off to that side. */
  flyTo: D | null;
  disabled: boolean;
  /** Entrance stagger, seconds. */
  delay: number;
  /** Smaller piece, for streets with four pieces in a row. */
  compact?: boolean;
  /** Smaller still, for five pieces in a row. */
  tiny?: boolean;
  /** Per-block colors (whole-range piece). */
  blockColors?: string[];
  /** Allow dragging up (a third option above the pieces). */
  allowUp?: boolean;
  /** Replaces the "N% · tap to see" line under the label. */
  caption?: string;
};

/** Which drop zone the piece is heading for. The "up" box sits at the top
 * centre while pieces start left/centre/right, so reaching it is often a
 * diagonal: a clear lift counts as "up" even when the sideways move is up to
 * twice as large. Check / the main bet sit in the bottom corners, so a
 * mostly-sideways move (not lifted much) goes left or right. */
function dirOf(dx: number, dy: number, allowUp: boolean): SortDir | null {
  if (allowUp && dy <= -SWIPE_THRESHOLD && -dy * 2 >= Math.abs(dx)) return "up";
  return Math.abs(dx) >= SWIPE_THRESHOLD ? (dx < 0 ? "left" : "right") : null;
}

/** A floating, ready-made Tetris piece (Value / Bluffs / The rest) that the
 * player drags left to Check or right to Overbet, or taps to see its
 * hands. Same physics as the preflop swipe card: follows the finger,
 * tilts, snaps back, shakes on a wrong answer and flies off on a right one. */
export function SortPiece<D extends string = SortDir>({
  piece,
  onDrop,
  onArm,
  zoneAt,
  flyRect,
  onHold,
  onInspect,
  shakeSeq,
  flyTo,
  disabled,
  delay,
  compact = false,
  tiny = false,
  blockColors,
  caption,
  allowUp = false,
}: SortPieceProps<D>) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, (v) => v / 12);
  const armed = useRef<D | null>(null);
  const didDrag = useRef(false);
  const self = useRef<HTMLDivElement>(null);
  const intoBox = !!flyTo && !!flyRect;

  useEffect(() => {
    if (!shakeSeq) return;
    void animate(x, [0, -9, 9, -9, 9, 0], { duration: 0.45, ease: "easeInOut" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shakeSeq]);

  useEffect(() => {
    if (!flyTo) return;
    if (flyRect && self.current) {
      // Fly into the box it was dropped on, shrinking as it lands.
      const me = self.current.getBoundingClientRect();
      const dx = flyRect.left + flyRect.width / 2 - (me.left + me.width / 2);
      const dy = flyRect.top + flyRect.height / 2 - (me.top + me.height / 2);
      void animate(x, x.get() + dx, { duration: 0.34, ease: "easeIn" });
      void animate(y, y.get() + dy, { duration: 0.34, ease: "easeIn" });
      return;
    }
    void animate(x, flyTo === "left" ? -320 : flyTo === "right" ? 320 : 0, { duration: 0.38, ease: "easeIn" });
    void animate(y, flyTo === "up" ? -260 : 40, { duration: 0.38, ease: "easeIn" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [flyTo]);

  function target(info: PanInfo): D | null {
    if (zoneAt) return zoneAt(info.point.x - window.scrollX, info.point.y - window.scrollY);
    return dirOf(info.offset.x, info.offset.y, allowUp) as D | null;
  }

  function handleDrag(_: unknown, info: PanInfo) {
    const d = target(info);
    if (d !== armed.current) {
      armed.current = d;
      onArm(d);
    }
  }

  function handleDragEnd(_: unknown, info: PanInfo) {
    armed.current = null;
    onArm(null);
    onHold(false);
    const d = target(info);
    if (d) onDrop(d);
  }

  const width = tiny ? "w-[62px]" : compact ? "w-[70px]" : caption ? "w-[150px]" : "w-[84px]";
  const shape = piece.shape ?? piece.key;

  return (
    <motion.div
      ref={self}
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
      className={`relative flex ${width} cursor-grab flex-col items-center ${tiny ? "gap-1" : "gap-1.5"} text-center select-none`}
      data-testid={`sort-${piece.key}`}
      role="button"
      aria-label={`${piece.label}, ${piece.pct}% of the range. ${zoneAt ? "Drag it to a box" : "Drag left to check or right to overbet"}. Tap to see the hands.`}
    >
      <motion.div
        className={`flex w-full flex-col items-center ${tiny ? "gap-1" : "gap-1.5"}`}
        animate={intoBox ? { scale: 0.3, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.34, ease: "easeIn" }}
      >
        {/* Gentle bob so the pieces read as floating, not as fixed cards. */}
        <div
          className={`flex ${piece.key === "whole" ? "h-[76px]" : tiny ? "h-[50px]" : "h-[64px]"} items-center justify-center`}
          style={{ animation: `sortFloat 2.6s ease-in-out ${delay * 4}s infinite` }}
        >
          <Tetromino kind={shape} color={piece.color} block={tiny ? 12 : compact ? 15 : BLOCK + (piece.key === "whole" ? 4 : 0)} colors={blockColors} />
        </div>
        <b className={`font-[family-name:var(--font-display)] ${tiny ? "text-[11.5px] leading-[1.1]" : "leading-none"} ${caption ? "text-[15.5px]" : tiny ? "" : "text-[13.5px]"}`}>
          {piece.label}
        </b>
        <span className="text-[10.5px] leading-none" style={{ color: "var(--muted)" }}>
          {caption ?? `${piece.pct}%${compact || tiny ? "" : " · tap to see"}`}
        </span>
      </motion.div>
    </motion.div>
  );
}
