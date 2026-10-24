"use client";

import { useCallback, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { PieceCard, type FlyTo } from "@/components/drill/PieceCard";
import { DrillMatrix, type CellState } from "@/components/drill/DrillMatrix";
import { Toast, useToast } from "@/components/drill/Toast";
import { FeedbackSheet } from "@/components/drill/FeedbackSheet";
import { PostflopFinishSheet } from "./PostflopFinishSheet";
import { BtnRangeDecision } from "./BtnRangeDecision";
import { ArrowIcon, HINT_POS, PlayingCard } from "./bits";
import { buildPostflopDeal, randomDryFlop, type PostflopModeKey } from "@/lib/drill/postflop/btn-vs-bb";
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

/** The flop drill. BTN's turn is one whole-range decision (check / small
 * bet / polar bet) shown as a range animation — see BtnRangeDecision. BB's
 * per-category response is the older draft, kept unchanged on purpose. */
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
  const [deal, setDeal] = useState(() => buildPostflopDeal(randomDryFlop()));
  /** Counts flops dealt this session; also keys BTN's round so a new flop
   * always starts from a clean, un-animated matrix. */
  const [flopNo, setFlopNo] = useState(1);

  const { toast, show: showToast } = useToast();
  const generation = useRef(0);

  const later = useCallback((fn: () => void, ms: number) => {
    const gen = generation.current;
    setTimeout(() => {
      if (gen === generation.current) fn();
    }, ms);
  }, []);

  const mode = deal.modes[stage];
  const order = mode.pieces;
  const piece: DrillPiece | undefined = order[index];

  function beginStage(nextStage: PostflopModeKey) {
    generation.current += 1;
    // A fresh BTN decision is a fresh hand — deal a new board. Continuing
    // to BB, or restarting BB alone, keeps the same board.
    if (nextStage === "btn") {
      setDeal(buildPostflopDeal(randomDryFlop()));
      setFlopNo((n) => n + 1);
    }
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
    setFlopNo(1);
  }

  // BB's older per-category draft.
  const askedHands = new Set(order.flatMap((p) => p.hands));
  const cellStateByHand = new Map<string, CellState>();
  if (stage === "bb") {
    for (const [hand, color] of resolvedColors) cellStateByHand.set(hand, { background: color });
    for (const hand of askedHands) {
      if (!cellStateByHand.has(hand)) cellStateByHand.set(hand, { pending: true });
    }
    if (piece && !flyTo) {
      const liveColor = dragPreview ? colorOf(dragPreview) : piece.color;
      for (const hand of piece.hands) cellStateByHand.set(hand, { background: liveColor, active: true });
    }
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
      className="relative mx-auto flex h-dvh w-full max-w-[460px] flex-col gap-1.5 overflow-hidden px-4 py-2"
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
              BTN opened and BB called. You see BTN&apos;s whole range on the flop. Swipe one plan for all of it:
              check, a small bet with everything, or a polar bet that splits the range. Then watch what that plan does
              to every hand.
            </p>
          </div>
          <button
            className="flex min-h-[68px] cursor-pointer items-center gap-3.5 rounded-2xl border p-3.5 text-left active:scale-[0.98]"
            style={{ borderColor: "var(--mix)", background: "var(--panel)" }}
            type="button"
            onClick={startDrill}
          >
            <span className="flex-1">
              <b className="block font-[family-name:var(--font-display)] text-[15px] font-bold">BTN vs BB · whole range</b>
              <span className="text-[12px]" style={{ color: "var(--muted)" }}>
                A new dry flop each time &middot; check, small or polar
              </span>
            </span>
          </button>
          <button
            className="block w-full cursor-pointer rounded-xl border text-center text-[14px] font-semibold leading-[44px]"
            style={{ borderColor: "var(--line)" }}
            type="button"
            onClick={() => router.push("/")}
          >
            Back to lobby
          </button>
          <a className="text-center text-[12px] underline" style={{ color: "var(--muted)" }} href="/feedback">
            All feedback across every drill
          </a>
        </div>
      ) : (
        <>
          <div className="flex items-center gap-2">
            <IconButton label="Lobby" onClick={() => router.push("/")}>
              <path d="M4 11l8-7 8 7" />
              <path d="M6 10v10h12V10" />
            </IconButton>
            <div className="min-w-0 flex-1">
              <b className="block overflow-hidden whitespace-nowrap text-ellipsis font-[family-name:var(--font-display)] text-[14px] font-bold">
                {mode.spotLabel}
              </b>
              <span className="text-[10.5px]" style={{ color: "var(--muted)" }}>
                {stage === "btn" ? `Flop ${flopNo} · one plan for every hand` : `${index + 1} of ${order.length} decisions`}
              </span>
            </div>
            <IconButton label={stage === "btn" ? "New flop" : "Restart"} onClick={() => beginStage(stage)}>
              <path d="M20 12a8 8 0 1 1-2.3-5.6" />
              <path d="M20 4v5h-5" />
            </IconButton>
            <IconButton label="Feedback" onClick={() => setFeedbackOpen(true)}>
              <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-.9L3 21l1.4-4.5A8.38 8.38 0 0 1 3 11.5 8.5 8.5 0 0 1 11.5 3a8.38 8.38 0 0 1 9.5 8.5z" />
            </IconButton>
          </div>

          {stage === "bb" && (
            <div className="h-[5px] overflow-hidden rounded-full" style={{ background: "var(--panel-2)" }} aria-hidden="true">
              <div className="h-full rounded-full transition-all duration-300" style={{ width: `${(index / order.length) * 100}%`, background: "var(--mix)" }} />
            </div>
          )}

          <div className="flex flex-shrink-0 items-center justify-between gap-2 rounded-[14px] p-2" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
            <SeatChip label="BTN" sub="Hero" active={stage === "btn"} />
            <div className="flex flex-col items-center gap-0.5">
              <div className="flex gap-1">
                {deal.flop.map((c, i) => (
                  <PlayingCard key={i} rank={c.rank} suit={c.suit} />
                ))}
              </div>
              <div className="font-[family-name:var(--font-display)] text-[11px]" style={{ color: "var(--muted)" }}>
                Pot <b style={{ color: "var(--mix)" }}>{stage === "btn" ? "6bb" : "8bb · facing a small bet"}</b>
              </div>
            </div>
            <SeatChip label="BB" sub="Villain" active={stage === "bb"} />
          </div>

          {stage === "btn" ? (
            <BtnRangeDecision
              key={flopNo}
              flop={deal.flop}
              onNextFlop={() => beginStage("btn")}
              onRespondAsBb={() => beginStage("bb")}
            />
          ) : (
            <>
              <div className="flex flex-shrink-0 flex-col gap-1 rounded-xl p-1.5" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
                <DrillMatrix cellStateByHand={cellStateByHand} rankLabels={RANK_LABELS} />
                <div className="flex flex-wrap justify-center gap-x-2 gap-y-0.5 text-[9.5px]" style={{ color: "var(--muted)" }} aria-hidden="true">
                  {deal.legendBB.map((l) => (
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
                  return (
                    <div
                      key={dir}
                      className={`absolute flex items-center border-[1.5px] font-[family-name:var(--font-display)] font-bold tracking-[0.08em] ${HINT_POS[dir]}`}
                      style={{ borderColor: color, background: isOn ? color : "transparent", color: isOn ? "#10161B" : color }}
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
        </>
      )}

      <PostflopFinishSheet
        open={finished && stage === "bb"}
        stage="bb"
        pct={pct}
        onContinueAsBb={() => beginStage("bb")}
        onReplay={() => beginStage("btn")}
        onLobby={() => router.push("/")}
        onClose={() => setFinished(false)}
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

function IconButton({ label, onClick, children }: { label: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      className="flex h-8 w-8 flex-shrink-0 cursor-pointer items-center justify-center rounded-[9px] border"
      style={{ borderColor: "var(--line)", background: "var(--panel)" }}
      aria-label={label}
      type="button"
      onClick={onClick}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {children}
      </svg>
    </button>
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
