"use client";

import { useMemo, useState } from "react";
import { DrillCard } from "./DrillCard";
import { DrillMatrix, type CellState } from "./DrillMatrix";
import type { DrillMode, SwipeDirection } from "@/lib/drill/types";

const ARROW: Record<SwipeDirection, string> = {
  up: "↑",
  down: "↓",
  left: "←",
  right: "→",
};

const RANK_LABELS = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];

type DrillEngineProps = {
  mode: DrillMode;
};

/** Runs one drill mode end to end: shows pieces one at a time, the player
 * swipes each toward an action, the matrix fills in as pieces are answered
 * (including auto-revealed hands from a correctly-answered anchor piece). */
export function DrillEngine({ mode }: DrillEngineProps) {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState(0);
  const [shake, setShake] = useState(false);
  const [answered, setAnswered] = useState<Map<string, string>>(new Map()); // hand -> action color

  const piece = mode.pieces[index];
  const done = index >= mode.pieces.length;

  const cellStateByHand = useMemo(() => {
    const map = new Map<string, CellState>();
    for (const [hand, color] of answered) {
      map.set(hand, { background: color });
    }
    if (piece) {
      for (const hand of piece.hands) {
        map.set(hand, { background: piece.color, active: true });
      }
    }
    return map;
  }, [answered, piece]);

  function colorFor(action: string) {
    return mode.colors[action] ?? "#888";
  }

  function submit(direction: SwipeDirection) {
    if (!piece) return;
    const action = mode.swipes[direction];
    if (!action) return;

    if (action === piece.answer) {
      setScore((s) => s + 100);
      setStreak((s) => {
        const next = s + 1;
        setBest((b) => Math.max(b, next));
        return next;
      });
      setAnswered((prev) => {
        const next = new Map(prev);
        const color = colorFor(action);
        for (const hand of piece.hands) next.set(hand, color);
        for (const hand of piece.reveal ?? []) next.set(hand, color);
        return next;
      });
      setIndex((i) => i + 1);
    } else {
      setStreak(0);
      setShake(true);
      setTimeout(() => setShake(false), 400);
    }
  }

  return (
    <div className="mx-auto flex h-full max-w-[460px] flex-col gap-2 overflow-hidden p-3">
      <div className="flex items-center justify-between">
        <div>
          <div className="font-[family-name:var(--font-display)] text-[15px] font-bold">
            {mode.title}
          </div>
          <div className="text-[11px]" style={{ color: "var(--muted)" }}>
            {done ? "Done" : `${index + 1} of ${mode.pieces.length} decisions`}
          </div>
        </div>
        <div className="font-[family-name:var(--font-display)] text-right text-[15px]">
          <span style={{ color: "var(--muted)" }}>streak</span>{" "}
          <span className="text-[18px] font-semibold">{streak}</span>
        </div>
      </div>

      <div className="h-1.5 overflow-hidden rounded-full" style={{ background: "var(--panel-2)" }}>
        <div
          className="h-full rounded-full transition-all duration-300"
          style={{ width: `${(index / mode.pieces.length) * 100}%`, background: "var(--mix)" }}
        />
      </div>

      <div
        className="flex-1 overflow-hidden rounded-xl p-1.5"
        style={{ background: "var(--panel)", border: "1px solid var(--line)" }}
      >
        <DrillMatrix cellStateByHand={cellStateByHand} rankLabels={RANK_LABELS} />
      </div>

      {!done && piece && (
        <div
          className="relative flex h-[150px] items-center justify-center rounded-2xl"
          style={{ border: "1px dashed var(--line)" }}
        >
          {(Object.keys(mode.swipes) as SwipeDirection[]).map((dir) => {
            const action = mode.swipes[dir];
            if (!action) return null;
            const posClass = {
              up: "top-2 left-1/2 -translate-x-1/2",
              down: "bottom-2 left-1/2 -translate-x-1/2",
              left: "left-2 top-1/2 -translate-y-1/2",
              right: "right-2 top-1/2 -translate-y-1/2",
            }[dir];
            return (
              <div
                key={dir}
                className={`absolute rounded-full border px-2.5 py-1 font-[family-name:var(--font-display)] text-[12px] font-bold ${posClass}`}
                style={{ borderColor: colorFor(action), color: colorFor(action) }}
              >
                {ARROW[dir]} {mode.labels[action]?.toUpperCase()}
              </div>
            );
          })}
          <DrillCard
            key={piece.key}
            piece={piece}
            swipes={mode.swipes}
            colorFor={colorFor}
            onSubmit={submit}
            shake={shake}
          />
        </div>
      )}

      {done && (
        <div className="flex flex-1 flex-col items-center justify-center gap-2 text-center">
          <div className="font-[family-name:var(--font-display)] text-[48px] font-bold">
            {Math.round((score / (mode.pieces.length * 100)) * 100)}%
          </div>
          <div className="text-[13px]" style={{ color: "var(--muted)" }}>
            Best streak {best}
          </div>
        </div>
      )}
    </div>
  );
}
