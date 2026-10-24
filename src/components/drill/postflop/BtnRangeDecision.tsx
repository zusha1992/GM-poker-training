"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { PieceCard, SWIPE_THRESHOLD, type FlyTo } from "@/components/drill/PieceCard";
import { colorOf } from "@/lib/drill/colors";
import type { FlopCard } from "@/lib/drill/postflop/btn-vs-bb";
import {
  BTN_RANGE,
  betSharePct,
  placeholderPolarSplit,
  type RangeAction,
} from "@/lib/drill/postflop/range-decision";
import type { DrillAction, DrillPiece, SwipeDirection } from "@/lib/drill/types";
import { buzz, tone } from "@/lib/drill/sound";
import { RangeMatrix, outcomeColor } from "./RangeMatrix";
import { ArrowIcon, HINT_POS, PlayingCard } from "./bits";

const SWIPES: Partial<Record<SwipeDirection, RangeAction>> = { left: "check", up: "small", right: "polar" };
const LABELS: Record<RangeAction, string> = { check: "Check", small: "Small bet", polar: "Polar bet" };
const FLY: Record<SwipeDirection, FlyTo> = {
  up: { x: 0, y: -380, rotate: 0 },
  down: { x: 0, y: 380, rotate: 0 },
  left: { x: -380, y: 0, rotate: -12 },
  right: { x: 380, y: 0, rotate: 12 },
};

/** The swipe card itself has nothing to "answer" — it stands for the whole
 * range. Only its label/color matter. */
const WHOLE_RANGE_PIECE: DrillPiece = {
  key: "whole-range",
  label: "Whole range",
  sub: "",
  color: "#9AA6B1",
  hands: [],
  answer: "",
};

/** Matrix + swipe zone are ready to show the result after this long: the
 * card has flown off and the first part of every action's wave has played.
 * The wave keeps finishing underneath the result panel. */
const RESULT_DELAY_MS = 380;

function playActionSound(action: RangeAction) {
  if (action === "check") {
    tone(392, 0.16);
  } else if (action === "small") {
    tone(660, 0.09);
    setTimeout(() => tone(880, 0.14), 70);
  } else {
    tone(330, 0.1, "triangle");
    setTimeout(() => tone(990, 0.16), 110);
  }
}

type BtnRangeDecisionProps = {
  flop: FlopCard[];
  onNextFlop: () => void;
  onRespondAsBb: () => void;
};

/** One whole-range decision on one flop. "Same flop, try another" remounts
 * the inner round with a new key, so no animation state can leak between
 * attempts; the parent does the same with a new key for every new flop. */
export function BtnRangeDecision({ flop, onNextFlop, onRespondAsBb }: BtnRangeDecisionProps) {
  const [attempt, setAttempt] = useState(0);
  return (
    <Round
      key={attempt}
      flop={flop}
      onNextFlop={onNextFlop}
      onRetry={() => setAttempt((a) => a + 1)}
      onRespondAsBb={onRespondAsBb}
    />
  );
}

function Round({
  flop,
  onNextFlop,
  onRetry,
  onRespondAsBb,
}: {
  flop: FlopCard[];
  onNextFlop: () => void;
  onRetry: () => void;
  onRespondAsBb: () => void;
}) {
  const split = useMemo(() => placeholderPolarSplit(flop), [flop]);
  const matrixRef = useRef<HTMLDivElement>(null);
  const [preview, setPreview] = useState<RangeAction | null>(null);
  const [armed, setArmed] = useState<RangeAction | null>(null);
  const [committed, setCommitted] = useState<RangeAction | null>(null);
  const [flyTo, setFlyTo] = useState<FlyTo | null>(null);
  const [showResult, setShowResult] = useState(false);
  const leaving = useRef(false);

  useEffect(() => {
    if (!committed) return;
    const t = setTimeout(() => setShowResult(true), RESULT_DELAY_MS);
    return () => clearTimeout(t);
  }, [committed]);

  function handleDragMove(dx: number, dy: number) {
    if (committed) return;
    const ax = Math.abs(dx);
    const ay = Math.abs(dy);
    let dir: SwipeDirection | null = null;
    if (Math.max(ax, ay) > 8) dir = ay > ax ? (dy < 0 ? "up" : "down") : dx < 0 ? "left" : "right";
    const action = dir ? SWIPES[dir] ?? null : null;
    const dist = dir === "up" || dir === "down" ? ay : ax;
    // Grows with the finger: ~80% strength at the release point, full
    // strength just past it, so the in-between muddy blend is brief.
    const pv = action ? Math.min(1, dist / (SWIPE_THRESHOLD * 1.25)) : 0;
    matrixRef.current?.style.setProperty("--pv", pv.toFixed(3));
    setPreview(action);
  }

  function handleSwipe(dir: SwipeDirection) {
    const action = SWIPES[dir];
    if (!action || committed) return;
    setArmed(null);
    setCommitted(action);
    setFlyTo(FLY[dir]);
    playActionSound(action);
    buzz(14);
  }

  // Guards against a double tap on a result button firing twice (e.g. two
  // new flops dealt in a row before the first one rendered).
  function once(fn: () => void) {
    if (leaving.current) return;
    leaving.current = true;
    fn();
  }

  const pct = committed ? betSharePct(committed, split) : 0;
  const shownAction = committed ?? preview;

  return (
    <>
      <div className="flex flex-shrink-0 flex-col gap-1.5 rounded-xl p-1.5" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
        <RangeMatrix range={BTN_RANGE} split={split} preview={preview} committed={committed} rootRef={matrixRef} />
        <Legend action={shownAction} />
      </div>

      <div
        className="relative mt-0.5 flex h-[200px] flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl"
        style={{ border: showResult ? "1px solid var(--line)" : "1px dashed var(--line)", touchAction: "none", background: showResult ? "var(--panel)" : undefined }}
      >
        {!showResult &&
          (Object.keys(SWIPES) as SwipeDirection[]).map((dir) => {
            const action = SWIPES[dir]!;
            const color = colorOf(action);
            const on = armed === action || committed === action;
            const leaning = preview === action;
            return (
              <div
                key={dir}
                className={`absolute flex items-center border-[1.5px] font-[family-name:var(--font-display)] font-bold tracking-[0.08em] transition-[background-color,color,scale] duration-150 ${HINT_POS[dir]}`}
                style={{
                  borderColor: color,
                  background: on ? color : "transparent",
                  color: on ? "#10161B" : color,
                  scale: leaning ? 1.08 : 1,
                }}
              >
                <ArrowIcon dir={dir} />
                {LABELS[action].toUpperCase()}
              </div>
            );
          })}

        {!showResult && (
          <PieceCard
            piece={WHOLE_RANGE_PIECE}
            swipes={SWIPES as Partial<Record<SwipeDirection, DrillAction>>}
            colorFor={colorOf}
            onSwipe={handleSwipe}
            onDragMove={handleDragMove}
            onDragPreview={(a) => setArmed((a as RangeAction | null) ?? null)}
            flyTo={flyTo}
            disabled={!!committed}
            icon={
              <div className="flex gap-1">
                {flop.map((c, i) => (
                  <PlayingCard key={i} rank={c.rank} suit={c.suit} />
                ))}
              </div>
            }
            subText="Swipe one plan for every hand"
          />
        )}

        {showResult && committed && (
          <ResultPanel
            action={committed}
            pct={pct}
            note={committed === "polar" ? split.note : undefined}
            onNextFlop={() => once(onNextFlop)}
            onRetry={() => once(onRetry)}
            onRespondAsBb={() => once(onRespondAsBb)}
          />
        )}
      </div>
    </>
  );
}

function Legend({ action }: { action: RangeAction | null }) {
  const items: { swatch: string; label: string; partial?: boolean }[] = !action
    ? [
        { swatch: "linear-gradient(90deg,#D6C8FF,#5EE0C0,#FFD36B,#FF8FC1)", label: "Each color = one hand group" },
        { swatch: "#9AA6B1", label: "Partly filled = opened part of the time", partial: true },
      ]
    : action === "check"
      ? [{ swatch: outcomeColor("check", "check"), label: "Checks" }]
      : action === "small"
        ? [{ swatch: outcomeColor("small", "bet"), label: "Bets small" }]
        : [
            { swatch: outcomeColor("polar", "bet"), label: "Bets big" },
            { swatch: outcomeColor("polar", "check"), label: "Checks" },
          ];
  return (
    <div className="flex min-h-[14px] flex-wrap justify-center gap-x-3 gap-y-0.5 text-[10px]" style={{ color: "var(--muted)" }} aria-hidden="true">
      {items.map((l) => (
        <span key={l.label} className="flex items-center gap-1">
          <i
            className="relative inline-block h-[8px] w-[8px] overflow-hidden rounded-[2px]"
            style={{ background: l.partial ? "#1a2229" : l.swatch }}
          >
            {l.partial && <i className="absolute inset-x-0 bottom-0 h-1/2" style={{ background: l.swatch }} />}
          </i>
          {l.label}
        </span>
      ))}
    </div>
  );
}

function ResultPanel({
  action,
  pct,
  note,
  onNextFlop,
  onRetry,
  onRespondAsBb,
}: {
  action: RangeAction;
  pct: number;
  note?: string;
  onNextFlop: () => void;
  onRetry: () => void;
  onRespondAsBb: () => void;
}) {
  const color = colorOf(action);
  const line =
    action === "check"
      ? "The whole range checks together."
      : action === "small"
        ? "The whole range bets small together."
        : `${pct}% of the range bets big, ${100 - pct}% checks.`;

  return (
    <div className="flex h-full w-full flex-col justify-between gap-2 p-3" style={{ animation: "rdIn 220ms ease-out both" }} data-testid="range-result">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <i className="inline-block h-[10px] w-[10px] rounded-[3px]" style={{ background: color }} />
          <b className="font-[family-name:var(--font-display)] text-[17px] font-bold" style={{ color }}>
            {LABELS[action]}
          </b>
        </div>
        <p className="m-0 text-[13.5px] leading-[1.4]">{line}</p>
        {note && (
          <p className="m-0 text-[11px] leading-[1.35]" style={{ color: "var(--muted)" }}>
            {note}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-1.5">
        <div className="flex gap-2">
          <button
            type="button"
            className="h-[44px] flex-[2] cursor-pointer rounded-xl border-0 text-[15px] font-bold active:scale-[0.98]"
            style={{ background: "var(--mix)", color: "#2B1C02" }}
            onClick={onNextFlop}
          >
            Next flop
          </button>
          <button
            type="button"
            className="h-[44px] flex-1 cursor-pointer rounded-xl border text-[12.5px] font-semibold active:scale-[0.98]"
            style={{ borderColor: "var(--line)" }}
            onClick={onRetry}
          >
            Try another
          </button>
        </div>
        <button type="button" className="cursor-pointer border-0 bg-transparent text-[11.5px] underline" style={{ color: "var(--muted)" }} onClick={onRespondAsBb}>
          Respond as BB on this flop (old draft)
        </button>
      </div>
    </div>
  );
}
