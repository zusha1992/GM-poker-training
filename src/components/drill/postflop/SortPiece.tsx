"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { animate, motion, useMotionValue, useTransform, type PanInfo } from "motion/react";
import { SWIPE_THRESHOLD } from "@/components/drill/PieceCard";
import { SpadeMark, pieceOf } from "@/components/SpadeMark";

/** left = Check, right = the street's main bet, up = the alternative bet (turn: small bet). */
export type SortDir = "left" | "right" | "up";

/** What a floating piece needs to show itself. `shape` picks its chess
 * piece (see pieceOf; defaults to `key`). */
export type PieceView = { key: string; label: string; pct: number; color: string; shape?: string };

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
  /** Allow dragging up (a third option above the pieces). */
  allowUp?: boolean;
  /** Replaces the "N% · tap to see" line under the label; null hides it. */
  caption?: string | null;
  /** Drawn instead of the spade mark (the hands as cards). */
  visual?: ReactNode;
  /** With `zoneAt`: the armed box's rect, so the piece leans into it. */
  rectOf?: (d: D) => DOMRect | null;
};

/** The box that catches a piece dropped at (x, y) (Noam 2026-11-08: easier to
 * drop). Like a pie menu: each box owns the directions closest to it from the
 * middle of the drop area, and catches once the finger is `reach` of the way
 * there, or is on the box itself. */
export function pieTarget<D extends string>(area: DOMRect | undefined, boxes: [D, DOMRect | undefined][], x: number, y: number, reach = 0.5): D | null {
  if (!area) return null;
  const cx = area.left + area.width / 2;
  const cy = area.top + area.height / 2;
  const angle = Math.atan2(y - cy, x - cx);
  let best: D | null = null;
  let bestTurn = Infinity;
  let bestReach = 0;
  for (const [d, r] of boxes) {
    if (!r) continue;
    if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) return d;
    const bx = r.left + r.width / 2 - cx;
    const by = r.top + r.height / 2 - cy;
    const diff = Math.atan2(by, bx) - angle;
    const turn = Math.abs(Math.atan2(Math.sin(diff), Math.cos(diff)));
    if (turn < bestTurn) {
      best = d;
      bestTurn = turn;
      bestReach = Math.hypot(bx, by) * reach;
    }
  }
  return Math.hypot(x - cx, y - cy) >= bestReach ? best : null;
}

/** How far toward the armed box the piece leans (share of the distance), and how much it shrinks. */
const PULL = 0.32;
const PULL_SCALE = 0.72;
const PULL_SPRING = { type: "spring", stiffness: 520, damping: 32 } as const;

/** Which drop zone the piece is heading for. The "up" box sits at the top
 * centre while pieces start left/centre/right, so reaching it is often a
 * diagonal: a clear lift counts as "up" even when the sideways move is up to
 * twice as large. Check / the main bet sit in the bottom corners, so a
 * mostly-sideways move (not lifted much) goes left or right. */
function dirOf(dx: number, dy: number, allowUp: boolean): SortDir | null {
  if (allowUp && dy <= -SWIPE_THRESHOLD && -dy * 2 >= Math.abs(dx)) return "up";
  return Math.abs(dx) >= SWIPE_THRESHOLD ? (dx < 0 ? "left" : "right") : null;
}

/** A floating, ready-made piece (Value / Bluffs / The rest) that the
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
  caption,
  allowUp = false,
  visual,
  rectOf,
}: SortPieceProps<D>) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // The lean toward the armed box (a magnet), on top of the drag itself.
  const pullX = useMotionValue(0);
  const pullY = useMotionValue(0);
  const pullScale = useMotionValue(1);
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
      // Fly into the box it was dropped on, shrinking as it lands. The lean
      // toward the box folds into the flight, so it lands dead center.
      const me = self.current.getBoundingClientRect();
      const dx = flyRect.left + flyRect.width / 2 - (me.left + me.width / 2);
      const dy = flyRect.top + flyRect.height / 2 - (me.top + me.height / 2);
      void animate(x, x.get() + dx, { duration: 0.3, ease: [0.5, 0, 0.9, 0.6] });
      void animate(y, y.get() + dy, { duration: 0.3, ease: [0.5, 0, 0.9, 0.6] });
      void animate(pullX, 0, { duration: 0.3, ease: "easeIn" });
      void animate(pullY, 0, { duration: 0.3, ease: "easeIn" });
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

  function lean(d: D | null) {
    const box = d && rectOf ? rectOf(d) : null;
    const me = self.current?.getBoundingClientRect();
    if (!box || !me) {
      void animate(pullX, 0, PULL_SPRING);
      void animate(pullY, 0, PULL_SPRING);
      void animate(pullScale, 1, PULL_SPRING);
      return;
    }
    void animate(pullX, (box.left + box.width / 2 - (me.left + me.width / 2)) * PULL, PULL_SPRING);
    void animate(pullY, (box.top + box.height / 2 - (me.top + me.height / 2)) * PULL, PULL_SPRING);
    void animate(pullScale, PULL_SCALE, PULL_SPRING);
  }

  function handleDrag(_: unknown, info: PanInfo) {
    const d = target(info);
    if (d !== armed.current) {
      armed.current = d;
      onArm(d);
    }
    if (rectOf) lean(d);
  }

  function handleDragEnd(_: unknown, info: PanInfo) {
    armed.current = null;
    onArm(null);
    onHold(false);
    const d = target(info);
    // A right drop flies on from the lean; anything else lets go of it.
    if (!d) lean(null);
    if (d) onDrop(d);
  }

  // A wrong drop shakes the piece home: let go of the lean too.
  useEffect(() => {
    if (shakeSeq) lean(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shakeSeq]);

  const width = visual ? "w-auto" : tiny ? "w-[62px]" : compact ? "w-[70px]" : caption != null ? "w-[150px]" : "w-[84px]";
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
      aria-label={`${piece.label}, ${caption || `${piece.pct}% of the range`}.${zoneAt ? "Drag it to a box" : "Drag left to check or right to overbet"}. Tap to see the hands.`}
    >
      <motion.div className="flex w-full flex-col items-center" style={{ x: pullX, y: pullY, scale: pullScale }}>
      <motion.div
        className={`flex w-full flex-col items-center ${tiny ? "gap-1" : "gap-1.5"}`}
        animate={intoBox ? { scale: 0.3, opacity: 0 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.34, ease: "easeIn" }}
      >
        {/* Gentle bob so the pieces read as floating, not as fixed cards. */}
        <div
          className={`flex ${visual ? "" : piece.key === "whole" ? "h-[76px]" : tiny ? "h-[50px]" : "h-[64px]"} items-center justify-center`}
          style={{ animation: `sortFloat 2.6s ease-in-out ${delay * 4}s infinite` }}
        >
          {visual ?? <SpadeMark piece={pieceOf(shape)} color={piece.color} size={tiny ? 44 : compact ? 54 : piece.key === "whole" ? 76 : 62} />}
        </div>
        <b className={`font-[family-name:var(--font-display)] ${tiny ? "text-[11.5px] leading-[1.1]" : "leading-none"} ${caption === null ? "text-[17px]" : caption ? "text-[15.5px]" : tiny ? "" : "text-[13.5px]"}`}>
          {piece.label}
        </b>
        {caption !== null && (
          <span className="text-[10.5px] leading-none" style={{ color: "var(--muted)" }}>
            {caption ?? `${piece.pct}%${compact || tiny ? "" : " · tap to see"}`}
          </span>
        )}
      </motion.div>
      </motion.div>
    </motion.div>
  );
}
