"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { PieceCard, type FlyTo } from "@/components/drill/PieceCard";
import { DrillMatrix, type CellState } from "@/components/drill/DrillMatrix";
import { Celebration, type CelebrationTrigger } from "@/components/drill/Celebration";
import { Toast, useToast } from "@/components/drill/Toast";
import { FeedbackSheet } from "@/components/drill/FeedbackSheet";
import { SeatsRow } from "./SeatsRow";
import { PositionPicker } from "./PositionPicker";
import { SeatPicker, type AnyPreflopSpot } from "./SeatPicker";
import { ExplainSheet } from "./ExplainSheet";
import { LegendSheet } from "./LegendSheet";
import { HelpSheet } from "./HelpSheet";
import { FinishSheet } from "./FinishSheet";
import { FAMS, FAMILY_DESC } from "@/lib/drill/preflop/families";
import { PREFLOP_MODES, type PreflopModeKey } from "@/lib/drill/preflop/modes";
import { RFI_SPOTS, rfiSpot, type RfiSpot } from "@/lib/drill/preflop/rfi";
import type { Seat } from "@/lib/drill/preflop/seats";
import { colorOf, mixGradient } from "@/lib/drill/colors";
import { MATRIX_HANDS } from "@/lib/drill/matrix";
import type { DrillAction, DrillPiece, SwipeDirection } from "@/lib/drill/types";
import type { EvContext } from "@/lib/drill/preflop/ev";
import { badSound, buzz, clickSound, goodSound, tone } from "@/lib/drill/sound";

type AnySpot = AnyPreflopSpot | RfiSpot;

const DIRV: Record<SwipeDirection, [number, number]> = {
  up: [0, -500],
  down: [0, 500],
  left: [-500, 0],
  right: [500, 0],
};

const RANK_LABELS = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];

function headerTitle(spot: AnySpot): string {
  if (spot.modeKey === "rfi") return spot.title;
  if (spot.modeKey === "fv") return `${spot.heroSeat} vs ${spot.openerSeat} 4-bet`;
  if (spot.modeKey === "fb") return `${spot.heroSeat} vs ${spot.villainSeat} 3-bet`;
  return `You: ${spot.heroSeat} vs ${spot.openerSeat}`;
}

function outOfRangeHands(spot: AnySpot): string[] {
  if (spot.modeKey === "fb" || spot.modeKey === "fv") return spot.drill.outOfRange;
  return [];
}

function preFilledHands(spot: AnySpot): string[] {
  if (spot.modeKey === "rfi") return spot.drill.preFilled;
  return [];
}

function evContextFor(spot: AnySpot): EvContext {
  if (spot.modeKey === "rfi") return { modeKey: "rfi", heroSeat: spot.heroSeat };
  if (spot.modeKey === "tb") return { modeKey: "tb", heroSeat: spot.heroSeat, openerSeat: spot.openerSeat };
  if (spot.modeKey === "fb") return { modeKey: "fb", heroSeat: spot.heroSeat, villainSeat: spot.villainSeat };
  return { modeKey: "fv", heroSeat: spot.heroSeat, openerSeat: spot.openerSeat };
}

function finishSummary(spot: AnySpot): string {
  if (spot.modeKey === "rfi")
    return `You open about ${spot.drill.pct}% of hands from ${spot.position.name.toLowerCase()}.`;
  if (spot.modeKey === "tb")
    return `Here you 3-bet about ${spot.drill.tbPct}% of hands and call about ${spot.drill.callPct}%.`;
  if (spot.modeKey === "fb")
    return `Here you 4-bet about ${spot.drill.fourBetPct}% of your opening range and call about ${spot.drill.callPct}%.`;
  return `Here you go all in with about ${spot.drill.allInPct}% of your 3-bet range and call about ${spot.drill.callPct}%.`;
}

function modeNoteFor(modeKey: PreflopModeKey): string {
  if (modeKey === "rfi") return "Groups you already raise from an earlier seat start red. Real trash is filled in.";
  if (modeKey === "fb") return "Only hands you opened are in play. Weaker folds are filled in.";
  if (modeKey === "fv") return "Only hands you 3-bet are in play.";
  return "Real trash is filled in.";
}

function pureFirstOrder(pieces: DrillPiece[], actionOrder: DrillAction[]): DrillPiece[] {
  const rank = (a: DrillAction) => {
    const i = actionOrder.indexOf(a);
    return i === -1 ? actionOrder.length : i;
  };
  return pieces.slice().sort((a, b) => rank(a.answer) - rank(b.answer));
}

function paintColorFor(piece: DrillPiece, action: DrillAction): string {
  if (action === "mix" && piece.mixSplit) {
    return mixGradient(colorOf(piece.mixSplit[0]), colorOf(piece.mixSplit[1]), piece.mixSplit[2]);
  }
  return colorOf(action);
}

type PreflopDrillScreenProps = { modeKey: PreflopModeKey };

export function PreflopDrillScreen({ modeKey }: PreflopDrillScreenProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const mode = PREFLOP_MODES[modeKey];

  const [spot, setSpot] = useState<AnySpot | null>(null);
  const [order, setOrder] = useState<DrillPiece[]>([]);
  const [index, setIndex] = useState(0);
  const [attempt, setAttempt] = useState(1);
  const [busy, setBusy] = useState(false);
  const [score, setScore] = useState(0);
  const [base, setBase] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [firstTry, setFirstTry] = useState(0);
  const [streak, setStreak] = useState(0);
  const [drillBestStreak, setDrillBestStreak] = useState(0);
  const [streakBump, setStreakBump] = useState(0);
  const [shakeSeq, setShakeSeq] = useState(0);
  const [flyTo, setFlyTo] = useState<FlyTo | null>(null);
  const [dragPreview, setDragPreview] = useState<DrillAction | null>(null);
  const [revealedColors, setRevealedColors] = useState<Map<string, string>>(new Map());
  const [resultLabelByKey, setResultLabelByKey] = useState<Map<string, string>>(new Map());
  const [celebration, setCelebration] = useState<CelebrationTrigger | null>(null);
  const [finished, setFinished] = useState(false);
  const [legendOpen, setLegendOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [explainPiece, setExplainPiece] = useState<DrillPiece | null>(null);
  const [explainAnswered, setExplainAnswered] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [doneSpots, setDoneSpots] = useState<Set<string>>(new Set());

  const { toast, show: showToast } = useToast();
  const seenHelp = useRef<Set<string>>(new Set());
  const generation = useRef(0);
  const deepLinkChecked = useRef(false);
  const celebrationId = useRef(0);

  const later = useCallback((fn: () => void, ms: number) => {
    const gen = generation.current;
    setTimeout(() => {
      if (gen === generation.current) fn();
    }, ms);
  }, []);

  const resetForSpot = useCallback((nextSpot: AnySpot) => {
    generation.current += 1;
    const ordered = pureFirstOrder(nextSpot.drill.pieces, mode.actionOrder);
    setSpot(nextSpot);
    setOrder(ordered);
    setIndex(0);
    setAttempt(1);
    setBusy(false);
    setScore(0);
    setBase(0);
    setMaxScore(0);
    setFirstTry(0);
    setStreak(0);
    setDrillBestStreak(0);
    setShakeSeq(0);
    setFlyTo(null);
    setDragPreview(null);
    setFinished(false);
    const pre = new Map<string, string>();
    for (const h of preFilledHands(nextSpot)) pre.set(h, colorOf("raise"));
    setRevealedColors(pre);
    setResultLabelByKey(new Map());

    if (!seenHelp.current.has(modeKey)) {
      later(() => setHelpOpen(true), 500);
    } else {
      later(() => showToast(nextSpot.roleText, true, 2600), 0);
    }
  }, [mode.actionOrder, modeKey, later, showToast]);

  useEffect(() => {
    // Guarded by a ref (not state) so this runs exactly once per mount even
    // under StrictMode's double-invoke — a setTimeout deferral here would
    // get cancelled by StrictMode's simulated-unmount cleanup before firing.
    if (deepLinkChecked.current) return;
    deepLinkChecked.current = true;
    if (modeKey !== "rfi") return;
    const pos = searchParams.get("pos");
    if (!pos) return;
    try {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- initializing from the URL on mount, not mirroring a changing value
      resetForSpot(rfiSpot(pos as Seat));
    } catch {
      // unknown seat in URL — fall through to the picker
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function closeHelp() {
    seenHelp.current.add(modeKey);
    setHelpOpen(false);
    if (spot) later(() => showToast(spot.roleText, true, 2600), 200);
  }

  const piece = order[index];
  const nPure = useMemo(() => order.filter((p) => p.answer !== "mix").length, [order]);
  const askedHands = useMemo(() => new Set(order.flatMap((p) => p.hands)), [order]);
  const revealTargetHands = useMemo(
    () => new Set(order.flatMap((p) => p.reveal ?? [])),
    [order],
  );
  const outOfRange = useMemo(() => (spot ? new Set(outOfRangeHands(spot)) : new Set<string>()), [spot]);

  const cellStateByHand = useMemo(() => {
    const map = new Map<string, CellState>();
    for (const [hand, color] of revealedColors) {
      map.set(hand, { background: color });
    }
    for (const hand of askedHands) {
      if (!map.has(hand) && !revealTargetHands.has(hand)) map.set(hand, { pending: true });
    }
    for (const hand of outOfRange) {
      if (!map.has(hand)) map.set(hand, { variant: "out" });
    }
    if (piece && !flyTo) {
      const liveColor = dragPreview ? colorOf(dragPreview) : piece.color;
      for (const hand of piece.hands) map.set(hand, { background: liveColor, active: true });
    }
    // Everything else is a guaranteed fold that wasn't worth asking about —
    // dim it in, unless it's still waiting on a reveal animation.
    for (const hand of MATRIX_HANDS) {
      if (!map.has(hand.key) && !revealTargetHands.has(hand.key)) {
        map.set(hand.key, { variant: "auto" });
      }
    }
    return map;
  }, [revealedColors, askedHands, revealTargetHands, outOfRange, piece, dragPreview, flyTo]);

  const colorFor = useCallback((action: DrillAction) => colorOf(action), []);

  function paint(pc: DrillPiece, action: DrillAction) {
    const color = paintColorFor(pc, action);
    setRevealedColors((prev) => {
      const next = new Map(prev);
      for (const h of pc.hands) next.set(h, color);
      return next;
    });
    const rv = pc.reveal ?? [];
    if (rv.length) later(() => showToast("Stronger hands raise too", true, 1200), 250);
    rv.forEach((h, n) => {
      later(() => {
        setRevealedColors((prev) => {
          const next = new Map(prev);
          next.set(h, colorOf("raise"));
          return next;
        });
        if (n % 3 === 0) tone(700 + n * 30, 0.06);
      }, 350 + n * 55);
    });
    return rv.length;
  }

  function handleSwipe(direction: SwipeDirection) {
    const action = mode.swipes[direction];
    if (!action || busy || !piece || !spot) return;
    setBusy(true);
    setDragPreview(null);

    if (action === piece.answer) {
      const mult = attempt === 1 ? 1 : attempt === 2 ? 0.5 : 0;
      const pts = 100 * mult;
      setBase((b) => b + pts);
      setMaxScore((m) => m + 100);
      let bonus = 0;
      let nextStreak = streak;
      if (attempt === 1) {
        setFirstTry((f) => f + 1);
        nextStreak = streak + 1;
        setStreak(nextStreak);
        setDrillBestStreak((b) => Math.max(b, nextStreak));
        if (nextStreak >= 3) bonus = 25 * (nextStreak - 2);
      } else {
        nextStreak = 0;
        setStreak(0);
      }
      setScore((s) => s + pts + bonus);
      setStreakBump((b) => b + 1);
      const party = nextStreak === 3 || nextStreak === 5 || (nextStreak > 5 && nextStreak % 5 === 0);
      if (party) {
        celebrationId.current += 1;
        setCelebration({ id: celebrationId.current, streak: nextStreak, bonus });
      }

      setResultLabelByKey((prev) => {
        const next = new Map(prev);
        next.set(piece.key, mode.labels[action] ?? action);
        return next;
      });
      showToast(`Perfect +${Math.round(pts)}${bonus ? ` · streak +${bonus}` : ""}`, true);
      goodSound();
      buzz(15);
      const revealCount = paint(piece, action);

      const dir = (Object.keys(mode.swipes) as SwipeDirection[]).find((d) => mode.swipes[d] === action);
      const vec = dir ? DIRV[dir] : DIRV.up;
      setFlyTo({ x: vec[0], y: vec[1], rotate: vec[0] / 20 });

      const prevPure = piece.answer !== "mix";
      const nextIndex = index + 1;
      const nextPiece = order[nextIndex];
      if (prevPure && nextPiece && nextPiece.answer === "mix") {
        later(() => showToast(mode.phaseDone, true), 150);
      }

      later(() => {
        setIndex(nextIndex);
        setAttempt(1);
        setBusy(false);
        setFlyTo(null);
        if (nextIndex >= order.length) {
          finishDrill(spot);
        }
      }, (party ? 1450 : 780) + revealCount * 60);
    } else {
      setAttempt((a) => a + 1);
      if (streak >= 3) showToast("Streak lost", false);
      setStreak(0);
      showToast("Not quite. Try again", false);
      badSound();
      buzz([30, 40, 30]);
      setShakeSeq((s) => s + 1);
      setBusy(false);
    }
  }

  function finishDrill(finishedSpot: AnySpot) {
    setDoneSpots((prev) => new Set(prev).add(finishedSpot.key));
    later(() => setFinished(true), 0);
  }

  function explainHand(hand: string) {
    if (!spot) return;
    const existing = order.find((p) => p.hands.includes(hand));
    if (existing) {
      setExplainPiece(existing);
      setExplainAnswered(resultLabelByKey.has(existing.key) || revealedColors.has(hand));
      return;
    }
    const family = FAMS.find((f) => f.hands.includes(hand));
    if (!family || outOfRange.has(hand)) {
      showToast(
        `${hand}${family ? (modeKey === "fv" ? " is not in your 3-bet range here." : " is not in your opening range here.") : " is trash here. Filled in as a fold."}`,
        true,
        1700,
      );
      return;
    }
    const isPre = preFilledHands(spot).includes(hand);
    setExplainPiece({
      key: family.key,
      label: family.name,
      sub: family.sub,
      color: family.color,
      hands: family.hands,
      answer: isPre ? "raise" : "fold",
      desc: FAMILY_DESC[family.key],
    });
    setExplainAnswered(true);
  }

  function pct() {
    return maxScore ? Math.round((base / maxScore) * 100) : 0;
  }
  const stars: 1 | 2 | 3 = pct() >= 90 ? 3 : pct() >= 70 ? 2 : 1;

  function pageUrlFor(s: AnySpot | null): string {
    if (!s) return `/drills/preflop/${modeKey}`;
    if (s.modeKey === "rfi") return `/drills/preflop/rfi?pos=${encodeURIComponent(s.heroSeat)}`;
    return `/drills/preflop/${modeKey}`;
  }

  function feedbackTag(s: AnySpot | null): { tag: string; label: string } {
    if (!s) return { tag: `preflop:${modeKey}:lobby`, label: "Lobby" };
    if (s.modeKey === "rfi") return { tag: `preflop:rfi:${s.heroSeat}`, label: `${mode.title} — ${s.heroSeat}` };
    return { tag: `preflop:${modeKey}:${s.key}`, label: `${mode.title} — ${s.key}` };
  }

  const openerSeat: Seat | undefined =
    spot?.modeKey === "tb" || spot?.modeKey === "fv" ? spot.openerSeat : spot?.modeKey === "fb" ? spot.villainSeat : undefined;
  const openerTag = spot?.modeKey === "tb" ? "OPENS" : spot?.modeKey === "fb" ? "3-BET" : spot?.modeKey === "fv" ? "4-BET" : undefined;
  const allOthersFolded = spot?.modeKey === "fb" || spot?.modeKey === "fv";

  function goToLobby() {
    router.push("/");
  }

  function startNewSpotFlow() {
    setSpot(null);
    setFinished(false);
  }

  const nextRfiSpot = useMemo(() => {
    if (spot?.modeKey !== "rfi") return null;
    const idx = RFI_SPOTS.findIndex((s) => s.key === spot.heroSeat);
    return RFI_SPOTS[idx + 1] ?? null;
  }, [spot]);

  const { tag: fbTag, label: fbLabel } = feedbackTag(spot);

  return (
    <div
      className="relative mx-auto flex h-dvh max-w-[460px] flex-col gap-1.5 overflow-hidden px-4 py-2"
      style={{ background: "var(--background)", color: "var(--foreground)" }}
    >
      <div className="flex items-center gap-2">
        <button
          className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-[9px] border"
          style={{ borderColor: "var(--line)", background: "var(--panel)" }}
          aria-label="Lobby"
          type="button"
          onClick={() => {
            clickSound();
            goToLobby();
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M4 11l8-7 8 7" />
            <path d="M6 10v10h12V10" />
          </svg>
        </button>
        <div className="min-w-0 flex-1">
          <b className="block overflow-hidden whitespace-nowrap text-ellipsis font-[family-name:var(--font-display)] text-[15px] font-bold leading-[1.15] tracking-[0.02em]">
            {spot ? headerTitle(spot) : mode.title}
          </b>
          <span className="text-[11px] leading-[1.2]" style={{ color: "var(--muted)" }}>
            {spot
              ? piece
                ? piece.answer !== "mix"
                  ? `${mode.phase} · ${index + 1} of ${nPure}`
                  : `Mixed hands · ${index - nPure + 1} of ${order.length - nPure}`
                : "6-max cash · 100bb"
              : "6-max cash · 100bb"}
          </span>
        </div>
        {spot && (
          <button
            className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-[9px] border"
            style={{ borderColor: "var(--line)", background: "var(--panel)" }}
            aria-label="Restart drill"
            type="button"
            onClick={() => {
              clickSound();
              resetForSpot(spot);
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 12a8 8 0 1 1-2.3-5.6" />
              <path d="M20 4v5h-5" />
            </svg>
          </button>
        )}
        {spot && (
          <button
            className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-[9px] border"
            style={{ borderColor: "var(--line)", background: "var(--panel)" }}
            aria-label="Pieces"
            type="button"
            onClick={() => setLegendOpen(true)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="8" height="8" rx="1" />
              <rect x="13" y="3" width="8" height="8" rx="1" />
              <rect x="3" y="13" width="8" height="8" rx="1" />
            </svg>
          </button>
        )}
        <button
          className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-[9px] border"
          style={{ borderColor: "var(--line)", background: "var(--panel)" }}
          aria-label="Feedback"
          type="button"
          onClick={() => {
            clickSound();
            setFeedbackOpen(true);
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-.9L3 21l1.4-4.5A8.38 8.38 0 0 1 3 11.5 8.5 8.5 0 0 1 11.5 3a8.38 8.38 0 0 1 9.5 8.5z" />
          </svg>
        </button>
      </div>

      {spot && (
        <>
          <div className="flex items-center gap-2.5">
            <div
              className="flex items-center gap-1 font-[family-name:var(--font-display)] text-[16px] font-bold"
              style={{ color: streak >= 3 ? "var(--mix)" : "var(--muted)", fontVariantNumeric: "tabular-nums" }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                style={streak >= 3 ? { animation: "flick .5s ease-in-out infinite alternate" } : undefined}
              >
                <path d="M12 3c1 4 5 6 5 11a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5 0 2 1 3 2 3 0-4-1-6 1-9.5z" />
              </svg>
              <span key={streakBump} style={{ animation: streakBump ? "bump .4s ease" : undefined }}>
                {streak}
              </span>
            </div>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full" style={{ background: "var(--panel-2)" }} aria-hidden="true">
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{ width: `${order.length ? (index / order.length) * 100 : 0}%`, background: "var(--mix)" }}
              />
            </div>
            <div className="text-right font-[family-name:var(--font-display)] text-[15px] font-semibold" style={{ color: "var(--muted)", fontVariantNumeric: "tabular-nums" }}>
              <span style={{ color: "var(--foreground)", fontSize: 18 }}>{Math.round(score)}</span> pts
            </div>
          </div>

          <SeatsRow heroSeat={spot.heroSeat} openerSeat={openerSeat} openerTag={openerTag} allOthersFolded={!!allOthersFolded} />
        </>
      )}

      <div
        className="flex flex-shrink-0 flex-col gap-1 self-center rounded-xl p-1.5"
        style={{ background: "var(--panel)", border: "1px solid var(--line)", width: "min(100%, 52dvh)", boxSizing: "border-box" }}
      >
        <DrillMatrix cellStateByHand={cellStateByHand} rankLabels={RANK_LABELS} onCellClick={spot ? explainHand : undefined} />
        <div className="flex flex-wrap justify-center gap-x-2 gap-y-0.5 text-[10px]" style={{ color: "var(--muted)" }} aria-hidden="true">
          {mode.legend.map((l) => (
            <span key={l.label} className="flex items-center gap-1">
              <i className="inline-block h-2 w-2 rounded-[2px]" style={{ background: l.swatch }} />
              {l.label}
            </span>
          ))}
        </div>
      </div>

      <div
        className="relative flex min-h-[170px] flex-1 items-center justify-center rounded-2xl"
        style={{ border: "1px dashed var(--line)", touchAction: "none" }}
      >
        {spot &&
          (Object.keys(mode.swipes) as SwipeDirection[]).map((dir) => {
            const action = mode.swipes[dir];
            if (!action) return null;
            const isOn = dragPreview === action;
            const color = colorOf(action);
            const posClass = {
              up: "top-2.5 left-1/2 -translate-x-1/2",
              down: "bottom-2.5 left-1/2 -translate-x-1/2",
              left: "left-2 top-1/2 -translate-y-1/2 flex-col gap-0.5 px-1.5 py-2 rounded-2xl text-[11px]",
              right: "right-2 top-1/2 -translate-y-1/2 flex-col gap-0.5 px-1.5 py-2 rounded-2xl text-[11px]",
            }[dir];
            return (
              <div
                key={dir}
                className={`absolute flex items-center gap-1.5 rounded-full border-[1.5px] px-2.5 py-1 font-[family-name:var(--font-display)] text-[13px] font-bold tracking-[0.1em] transition-transform ${posClass}`}
                style={{
                  borderColor: color,
                  background: isOn ? color : "transparent",
                  color: isOn ? "#10161B" : color,
                  transform: isOn ? `${posClass.includes("-translate-x-1/2") ? "translateX(-50%)" : "translateY(-50%)"} scale(1.12)` : undefined,
                }}
              >
                {dir !== "down" && <ArrowIcon dir={dir} />}
                {mode.labels[action]?.toUpperCase()}
                {dir === "down" && <ArrowIcon dir={dir} />}
              </div>
            );
          })}

        <Toast toast={toast} />
        <Celebration trigger={celebration} />

        {spot && piece && (
          <PieceCard
            key={piece.key}
            piece={piece}
            swipes={mode.swipes}
            colorFor={colorFor}
            onSwipe={handleSwipe}
            onDragPreview={setDragPreview}
            onTap={() => {
              setExplainPiece(piece);
              setExplainAnswered(resultLabelByKey.has(piece.key));
            }}
            shakeSeq={shakeSeq}
            flyTo={flyTo}
            disabled={busy && !flyTo}
          />
        )}
        {spot && !piece && !finished && (
          <div className="font-[family-name:var(--font-display)] text-[20px] font-bold" style={{ color: "var(--line)" }}>
            Range complete
          </div>
        )}
      </div>

      {!spot && modeKey === "rfi" && (
        <PositionPicker
          open
          onClose={goToLobby}
          onPick={(seat) => resetForSpot(rfiSpot(seat))}
          doneSeats={doneSpots}
        />
      )}
      {!spot && modeKey !== "rfi" && (
        <SeatPicker
          open
          modeKey={modeKey}
          modeTitle={mode.title}
          onClose={goToLobby}
          onStart={(newSpot) => resetForSpot(newSpot)}
        />
      )}

      {spot && (
        <HelpSheet
          open={helpOpen}
          onGotIt={closeHelp}
          modeKey={modeKey}
          roleText={spot.roleText}
          swipes={mode.swipes}
          labels={mode.labels}
        />
      )}

      {spot && (
        <LegendSheet
          open={legendOpen}
          onClose={() => setLegendOpen(false)}
          modeKey={modeKey}
          heroLabel={spot.heroSeat}
          modeNote={modeNoteFor(modeKey)}
          swipes={mode.swipes}
          labels={mode.labels}
          pieces={order}
          currentIndex={index}
          resultLabelByKey={resultLabelByKey}
          onPieceClick={(p) => {
            setLegendOpen(false);
            setExplainPiece(p);
            setExplainAnswered(resultLabelByKey.has(p.key));
          }}
        />
      )}

      {spot && (
        <ExplainSheet
          piece={explainPiece}
          onClose={() => setExplainPiece(null)}
          answered={explainAnswered}
          evContext={evContextFor(spot)}
          evLabel={modeKey === "rfi" ? "EV of opening" : "EV of best play"}
          labelFor={(a) => mode.labels[a] ?? a}
        />
      )}

      <FeedbackSheet
        open={feedbackOpen}
        onClose={() => setFeedbackOpen(false)}
        drillTag={fbTag}
        drillLabel={fbLabel}
        pageUrl={pageUrlFor(spot)}
      />

      {spot && (
        <FinishSheet
          open={finished}
          heroLabel={spot.heroSeat}
          pct={pct()}
          stars={stars}
          firstTry={firstTry}
          total={order.length}
          bestStreak={drillBestStreak}
          summary={finishSummary(spot)}
          nextLabel={modeKey === "rfi" ? (nextRfiSpot ? `Next: ${nextRfiSpot.key}` : "Back to the lobby") : "New spot"}
          onNext={() => {
            if (modeKey === "rfi" && nextRfiSpot) resetForSpot(nextRfiSpot);
            else if (modeKey === "rfi") goToLobby();
            else startNewSpotFlow();
          }}
          onReplay={() => resetForSpot(spot)}
          onLobby={goToLobby}
          onView={() => setFinished(false)}
        />
      )}
    </div>
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
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[dir]} />
    </svg>
  );
}
