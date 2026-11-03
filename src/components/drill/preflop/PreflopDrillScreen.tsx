"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SortPiece } from "@/components/drill/postflop/SortPiece";
import { ActionPaddles } from "./ActionPaddles";
import { DrillMatrix, type CellState } from "@/components/drill/DrillMatrix";
import { Celebration, type CelebrationTrigger } from "@/components/drill/Celebration";
import { Toast, useToast } from "@/components/drill/Toast";
import { FeedbackSheet } from "@/components/drill/FeedbackSheet";
import { SeatsRow } from "./SeatsRow";
import { PositionPicker } from "./PositionPicker";
import { SeatPicker, type AnyPreflopSpot } from "./SeatPicker";
import { ExplainSheet } from "./ExplainSheet";
import { LegendSheet } from "./LegendSheet";
import { FinishSheet } from "./FinishSheet";
import { FAMS, FAM_BY_KEY, FAMILY_DESC, shapeOf, type PreFilledGroup } from "@/lib/drill/preflop/families";
import { PREFLOP_MODES, type PreflopModeKey } from "@/lib/drill/preflop/modes";
import { RFI_SPOTS, rfiSpot, type RfiSpot } from "@/lib/drill/preflop/rfi";
import type { Seat } from "@/lib/drill/preflop/seats";
import { colorOf, mixGradient } from "@/lib/drill/colors";
import { MATRIX_HANDS } from "@/lib/drill/matrix";
import type { DrillAction, DrillPiece } from "@/lib/drill/types";
import type { EvContext } from "@/lib/drill/preflop/ev";
import { badSound, buzz, clickSound, goodSound, tone } from "@/lib/drill/sound";

type AnySpot = AnyPreflopSpot | RfiSpot;

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

/** Hands that start filled in, with their answer: raise-first-in's known
 * raises, and the clear groups of the other drills. */
function preFilledHands(spot: AnySpot): Map<string, Omit<PreFilledGroup, "key">> {
  if (spot.modeKey === "rfi") return new Map(spot.drill.preFilled.map((h) => [h, { answer: "raise" }]));
  return new Map(spot.drill.preFilled.flatMap((g) => FAM_BY_KEY[g.key].hands.map((h) => [h, g] as const)));
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
  if (modeKey === "rfi") return "Pairs, suited aces and groups you already raise from an earlier seat start red. Real trash is filled in.";
  if (modeKey === "fb") return "Only hands you opened are in play. AA–QQ and other clear groups start filled in, and so do weaker folds.";
  if (modeKey === "fv") return "Only hands you 3-bet are in play. AA–QQ and other clear groups start filled in.";
  return "AA–QQ and other clear groups start filled in. Real trash is filled in.";
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
  /** Set on a right answer: the piece flies into that action's paddle. */
  const [flying, setFlying] = useState<{ action: DrillAction; rect: DOMRect | null } | null>(null);
  /** True while a piece is being dragged (the paddles breathe). */
  const [holding, setHolding] = useState(false);
  /** Bumped per paddle when a piece lands in it (replays its flash). */
  const [flash, setFlash] = useState<Partial<Record<DrillAction, number>>>({});
  const paddles = useRef<Partial<Record<DrillAction, HTMLDivElement | null>>>({});
  const zoneRef = useRef<HTMLDivElement>(null);
  const [zone, setZone] = useState({ w: 340, h: 200 });
  const [dragPreview, setDragPreview] = useState<DrillAction | null>(null);
  const [revealedColors, setRevealedColors] = useState<Map<string, string>>(new Map());
  const [resultLabelByKey, setResultLabelByKey] = useState<Map<string, string>>(new Map());
  const [celebration, setCelebration] = useState<CelebrationTrigger | null>(null);
  const [finished, setFinished] = useState(false);
  const [legendOpen, setLegendOpen] = useState(false);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [explainPiece, setExplainPiece] = useState<DrillPiece | null>(null);
  const [explainAnswered, setExplainAnswered] = useState(false);
  const [doneSpots, setDoneSpots] = useState<Set<string>>(new Set());

  const { toast, show: showToast } = useToast();
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
    setFlying(null);
    setDragPreview(null);
    setFinished(false);
    const pre = new Map<string, string>();
    for (const [h, g] of preFilledHands(nextSpot)) {
      pre.set(h, g.answer === "mix" && g.mixSplit ? mixGradient(colorOf(g.mixSplit[0]), colorOf(g.mixSplit[1]), g.mixSplit[2]) : colorOf(g.answer));
    }
    setRevealedColors(pre);
    setResultLabelByKey(new Map());

    later(() => showToast(nextSpot.roleText, true, 2600), 0);
  }, [mode.actionOrder, later, showToast]);

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
    if (piece && !flying) {
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
  }, [revealedColors, askedHands, revealTargetHands, outOfRange, piece, dragPreview, flying]);

  // The paddles size themselves from the drop area, so measure it (it changes with the phone).
  useEffect(() => {
    const el = zoneRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setZone({ w: e.contentRect.width, h: e.contentRect.height }));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const registerPaddle = useCallback((a: DrillAction, el: HTMLDivElement | null) => {
    paddles.current[a] = el;
  }, []);

  function zoneAt(x: number, y: number): DrillAction | null {
    for (const a of Object.values(mode.swipes)) {
      const r = paddles.current[a]?.getBoundingClientRect();
      if (r && x >= r.left - 10 && x <= r.right + 10 && y >= r.top - 10 && y <= r.bottom + 10) return a;
    }
    return null;
  }

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

  function handleDrop(action: DrillAction) {
    if (busy || !piece || !spot) return;
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

      setFlying({ action, rect: paddles.current[action]?.getBoundingClientRect() ?? null });
      setFlash((f) => ({ ...f, [action]: (f[action] ?? 0) + 1 }));

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
        setFlying(null);
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
    const pre = preFilledHands(spot).get(hand);
    setExplainPiece({
      key: family.key,
      label: family.name,
      sub: family.sub,
      color: family.color,
      hands: family.hands,
      answer: pre?.answer ?? "fold",
      mixSplit: pre?.mixSplit,
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
      className="relative mx-auto flex h-dvh w-full min-w-0 max-w-[460px] flex-col gap-1.5 overflow-hidden px-4 py-2"
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

      {/* The drop area: neon paddles around the frame, the piece floating in the middle. */}
      <div ref={zoneRef} className="relative flex min-h-[200px] flex-1 items-center justify-center" style={{ touchAction: "none" }} data-testid="drop-zone">
        {spot && (
          <ActionPaddles
            w={zone.w}
            h={zone.h}
            swipes={mode.swipes}
            labels={mode.labels}
            armed={dragPreview}
            holding={holding}
            flash={flash}
            hitRef={registerPaddle}
          />
        )}

        {/* Under the top paddle, so a message never hides its label. */}
        <div className="pointer-events-none absolute inset-x-0 top-[44px] z-[4]">
          <Toast toast={toast} />
        </div>
        <Celebration trigger={celebration} />

        {spot && piece && (
          <SortPiece<DrillAction>
            key={piece.key}
            piece={{ key: piece.key, label: piece.label, pct: 0, color: piece.color, shape: shapeOf(piece.key) }}
            caption={piece.sub}
            delay={0}
            zoneAt={zoneAt}
            flyRect={flying?.rect ?? null}
            onDrop={handleDrop}
            onArm={setDragPreview}
            onHold={setHolding}
            onInspect={() => {
              setExplainPiece(piece);
              setExplainAnswered(resultLabelByKey.has(piece.key));
            }}
            shakeSeq={shakeSeq}
            flyTo={flying?.action ?? null}
            disabled={busy && !flying}
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
