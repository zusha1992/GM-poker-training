"use client";

import { useCallback, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { PieceCard, type FlyTo } from "@/components/drill/PieceCard";
import { DrillMatrix, type CellState } from "@/components/drill/DrillMatrix";
import { Toast, useToast } from "@/components/drill/Toast";
import { FeedbackSheet } from "@/components/drill/FeedbackSheet";
import { PostflopFinishSheet } from "./PostflopFinishSheet";
import { FLOP, POSTFLOP_LEGEND, POSTFLOP_MODES, type PostflopModeKey } from "@/lib/drill/postflop/btn-vs-bb";
import { colorOf } from "@/lib/drill/colors";
import type { DrillAction, DrillPiece, SwipeDirection } from "@/lib/drill/types";
import { badSound, buzz, goodSound, tone } from "@/lib/drill/sound";

const DIRV: Record<SwipeDirection, [number, number]> = {
  up: [0, -400],
  down: [0, 400],
  left: [-400, 0],
  right: [400, 0],
};

const RANK_LABELS = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];

const SUIT_GLYPH: Record<string, string> = { s: "♠", h: "♥", d: "♦", c: "♣" };
const SUIT_RED = new Set(["h", "d"]);

/** The draft BTN-c-bet-vs-BB loop: pick a strategy for every hand category
 * on one street, then the same categories come back for the other seat's
 * response on the same board. Draft format check, not reviewed strategy. */
export function PostflopDrillScreen() {
  const router = useRouter();
  const [started, setStarted] = useState(false);
  const [stage, setStage] = useState<PostflopModeKey>("btn");
  const [index, setIndex] = useState(0);
  const [busy, setBusy] = useState(false);
  const [score, setScore] = useState(0);
  const [shakeSeq, setShakeSeq] = useState(0);
  const [flyTo, setFlyTo] = useState<FlyTo | null>(null);
  const [dragPreview, setDragPreview] = useState<DrillAction | null>(null);
  const [resolvedColors, setResolvedColors] = useState<Map<string, string>>(new Map());
  const [finished, setFinished] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);

  const { toast, show: showToast } = useToast();
  const generation = useRef(0);

  const later = useCallback((fn: () => void, ms: number) => {
    const gen = generation.current;
    setTimeout(() => {
      if (gen === generation.current) fn();
    }, ms);
  }, []);

  const mode = POSTFLOP_MODES[stage];
  const order = mode.pieces;
  const piece: DrillPiece | undefined = order[index];

  function beginStage(nextStage: PostflopModeKey) {
    generation.current += 1;
    setStage(nextStage);
    setIndex(0);
    setBusy(false);
    setScore(0);
    setShakeSeq(0);
    setFlyTo(null);
    setDragPreview(null);
    setFinished(false);
    setResolvedColors(new Map());
  }

  function startDrill() {
    setStarted(true);
    beginStage("btn");
  }

  const askedHands = new Set(order.flatMap((p) => p.hands));

  const cellStateByHand = new Map<string, CellState>();
  for (const [hand, color] of resolvedColors) cellStateByHand.set(hand, { background: color });
  for (const hand of askedHands) {
    if (!cellStateByHand.has(hand)) cellStateByHand.set(hand, { pending: true });
  }
  if (piece && !flyTo) {
    const liveColor = dragPreview ? colorOf(dragPreview) : piece.color;
    for (const hand of piece.hands) cellStateByHand.set(hand, { background: liveColor, active: true });
  }

  const colorFor = useCallback((action: DrillAction) => colorOf(action), []);

  function handleSwipe(direction: SwipeDirection) {
    const action = mode.swipes[direction];
    if (!action || busy || !piece) return;
    setBusy(true);
    setDragPreview(null);

    if (action === piece.answer) {
      setScore((s) => s + 100);
      setResolvedColors((prev) => {
        const next = new Map(prev);
        for (const h of piece.hands) next.set(h, colorOf(action));
        return next;
      });
      showToast(`Correct — ${mode.labels[action]}`, true);
      goodSound();
      setTimeout(() => tone(990, 0.18), 90);
      buzz(15);

      const dir = (Object.keys(mode.swipes) as SwipeDirection[]).find((d) => mode.swipes[d] === action);
      const vec = dir ? DIRV[dir] : DIRV.up;
      setFlyTo({ x: vec[0], y: vec[1], rotate: vec[0] / 20 });

      const nextIndex = index + 1;
      later(() => {
        setIndex(nextIndex);
        setBusy(false);
        setFlyTo(null);
        if (nextIndex >= order.length) setFinished(true);
      }, 680);
    } else {
      showToast("Not quite", false);
      badSound();
      buzz([30, 40, 30]);
      setShakeSeq((s) => s + 1);
      setBusy(false);
    }
  }

  const pct = order.length ? Math.round((score / (order.length * 100)) * 100) : 0;

  return (
    <div
      className="relative mx-auto flex h-dvh max-w-[460px] flex-col gap-1.5 overflow-hidden px-4 py-2"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      {!started ? (
        <div className="flex h-full flex-col gap-4 overflow-y-auto py-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <span
              className="inline-block rounded-full px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em]"
              style={{ color: "#2B1C02", background: "var(--mix)" }}
            >
              Draft — placeholder strategy
            </span>
            <div className="flex flex-col items-center leading-none">
              <b className="font-[family-name:var(--font-display)] text-[30px] font-bold tracking-[0.04em]" style={{ color: "var(--mix)" }}>
                GM
              </b>
              <span className="font-[family-name:var(--font-display)] text-[12px] font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--muted)" }}>
                Postflop
              </span>
            </div>
            <p className="m-0 max-w-[320px] text-[13px]" style={{ color: "var(--muted)" }}>
              One strategy for now: BTN checks or bets small — no big-bet/polar line yet. Hand categories and the
              exact betting split are illustrative, not reviewed.
            </p>
          </div>
          <button
            className="flex min-h-[68px] items-center gap-3.5 rounded-2xl border p-3.5 text-left"
            style={{ borderColor: "var(--mix)", background: "var(--panel)" }}
            type="button"
            onClick={startDrill}
          >
            <span className="flex-1">
              <b className="block font-[family-name:var(--font-display)] text-[15px] font-bold">BTN c-bet vs BB</b>
              <span className="text-[12px]" style={{ color: "var(--muted)" }}>
                K&spades; 7&hearts; 2&diams; &middot; small bet or check
              </span>
            </span>
          </button>
          <button
            className="block w-full rounded-xl border text-center text-[14px] font-semibold leading-[44px]"
            style={{ borderColor: "var(--line)" }}
            type="button"
            onClick={() => router.push("/")}
          >
            Back to lobby
          </button>
          <a
            className="text-center text-[12px] underline"
            style={{ color: "var(--muted)" }}
            href="/feedback"
          >
            All feedback across every drill
          </a>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-2">
            <button
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[9px] border"
              style={{ borderColor: "var(--line)", background: "var(--panel)" }}
              aria-label="Lobby"
              type="button"
              onClick={() => router.push("/")}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 11l8-7 8 7" />
                <path d="M6 10v10h12V10" />
              </svg>
            </button>
            <div className="min-w-0 flex-1">
              <b className="block overflow-hidden whitespace-nowrap text-ellipsis font-[family-name:var(--font-display)] text-[14px] font-bold">
                {mode.spotLabel}
              </b>
              <span className="text-[10.5px]" style={{ color: "var(--muted)" }}>
                {index + 1} of {order.length} decisions
              </span>
            </div>
            <button
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[9px] border"
              style={{ borderColor: "var(--line)", background: "var(--panel)" }}
              aria-label="Restart"
              type="button"
              onClick={() => beginStage(stage)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M20 12a8 8 0 1 1-2.3-5.6" />
                <path d="M20 4v5h-5" />
              </svg>
            </button>
            <button
              className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-[9px] border"
              style={{ borderColor: "var(--line)", background: "var(--panel)" }}
              aria-label="Feedback"
              type="button"
              onClick={() => setFeedbackOpen(true)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-.9L3 21l1.4-4.5A8.38 8.38 0 0 1 3 11.5 8.5 8.5 0 0 1 11.5 3a8.38 8.38 0 0 1 9.5 8.5z" />
              </svg>
            </button>
          </div>

          <div className="h-[5px] overflow-hidden rounded-full" style={{ background: "var(--panel-2)" }} aria-hidden="true">
            <div className="h-full rounded-full transition-all duration-300" style={{ width: `${(index / order.length) * 100}%`, background: "var(--mix)" }} />
          </div>

          <div className="flex flex-shrink-0 items-center justify-between gap-2 rounded-[14px] p-2" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
            <SeatChip label="BTN" sub="Hero" active={stage === "btn"} />
            <div className="flex flex-col items-center gap-0.5">
              <div className="flex gap-1">
                {FLOP.map((c, i) => (
                  <PlayingCard key={i} rank={c.rank} suit={c.suit} />
                ))}
              </div>
              <div className="font-[family-name:var(--font-display)] text-[11px]" style={{ color: "var(--muted)" }}>
                Pot <b style={{ color: "var(--mix)" }}>{stage === "btn" ? "6bb" : "8bb · facing a small bet"}</b>
              </div>
            </div>
            <SeatChip label="BB" sub="Villain" active={stage === "bb"} />
          </div>

          <div
            className="flex flex-shrink-0 flex-col gap-1 rounded-xl p-1.5"
            style={{ background: "var(--panel)", border: "1px solid var(--line)" }}
          >
            <DrillMatrix cellStateByHand={cellStateByHand} rankLabels={RANK_LABELS} />
            <div className="flex flex-wrap justify-center gap-x-2 gap-y-0.5 text-[9.5px]" style={{ color: "var(--muted)" }} aria-hidden="true">
              {POSTFLOP_LEGEND.map((l) => (
                <span key={l.label} className="flex items-center gap-1">
                  <i className="inline-block h-[7px] w-[7px] rounded-[2px]" style={{ background: l.swatch }} />
                  {l.label}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mt-0.5 flex h-[130px] flex-shrink-0 items-center justify-center rounded-2xl" style={{ border: "1px dashed var(--line)", touchAction: "none" }}>
            {(Object.keys(mode.swipes) as SwipeDirection[]).map((dir) => {
              const action = mode.swipes[dir];
              if (!action) return null;
              const isOn = dragPreview === action;
              const color = colorOf(action);
              const posClass = {
                up: "top-2 left-1/2 -translate-x-1/2",
                down: "bottom-2 left-1/2 -translate-x-1/2",
                left: "left-2 top-1/2 -translate-y-1/2",
                right: "right-2 top-1/2 -translate-y-1/2",
              }[dir];
              return (
                <div
                  key={dir}
                  className={`absolute flex items-center gap-1.5 rounded-full border-[1.5px] px-2.5 py-1 font-[family-name:var(--font-display)] text-[12px] font-bold tracking-[0.08em] ${posClass}`}
                  style={{
                    borderColor: color,
                    background: isOn ? color : "transparent",
                    color: isOn ? "#10161B" : color,
                  }}
                >
                  <ArrowIcon dir={dir} />
                  {mode.labels[action]?.toUpperCase()}
                </div>
              );
            })}

            <Toast toast={toast} />

            {piece && (
              <PieceCard
                key={`${stage}-${piece.key}`}
                piece={piece}
                swipes={mode.swipes}
                colorFor={colorFor}
                onSwipe={handleSwipe}
                onDragPreview={setDragPreview}
                shakeSeq={shakeSeq}
                flyTo={flyTo}
                disabled={busy && !flyTo}
              />
            )}
          </div>
        </>
      )}

      <PostflopFinishSheet
        open={finished}
        stage={stage}
        pct={pct}
        onContinueAsBb={() => beginStage("bb")}
        onReplay={() => beginStage("btn")}
        onLobby={() => router.push("/")}
      />

      <FeedbackSheet
        open={feedbackOpen}
        onClose={() => setFeedbackOpen(false)}
        drillTag={started ? `postflop:btn-vs-bb:${stage}` : "postflop:lobby"}
        drillLabel={started ? mode.title : "Lobby"}
        pageUrl="/drills/postflop/btn-vs-bb"
      />
    </div>
  );
}

function SeatChip({ label, sub, active }: { label: string; sub: string; active: boolean }) {
  return (
    <div
      className="flex min-w-[54px] flex-col items-center gap-0.5 rounded-[9px] px-2 py-1"
      style={{
        background: "var(--panel-2)",
        border: `1px solid ${active ? "var(--mix)" : "var(--line)"}`,
        boxShadow: active ? "0 0 0 2px rgba(242,179,61,.25)" : undefined,
      }}
    >
      <b className="font-[family-name:var(--font-display)] text-[12px]">{label}</b>
      <span className="text-[9px]" style={{ color: "var(--muted)" }}>
        {sub}
      </span>
    </div>
  );
}

function PlayingCard({ rank, suit }: { rank: string; suit: string }) {
  const r = rank === "T" ? "10" : rank;
  return (
    <span
      className="flex h-9 w-[26px] flex-shrink-0 flex-col items-center justify-center rounded-[4px] font-[family-name:var(--font-display)] text-[12px] font-bold leading-none"
      style={{ background: "#F7F4EC", color: SUIT_RED.has(suit) ? "#C62F28" : "#16191C", boxShadow: "0 1px 0 rgba(0,0,0,.4)" }}
    >
      {r}
      <em className="mt-px text-[11px] not-italic">{SUIT_GLYPH[suit]}</em>
    </span>
  );
}

function ArrowIcon({ dir }: { dir: SwipeDirection }) {
  const paths: Record<SwipeDirection, string> = {
    up: "M12 19V5M5 12l7-7 7 7",
    down: "M12 5v14M5 12l7 7 7-7",
    left: "M19 12H5M12 5l-7 7 7 7",
    right: "M5 12h14M12 5l7 7-7 7",
  };
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[dir]} />
    </svg>
  );
}
