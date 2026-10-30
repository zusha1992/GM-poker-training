"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { FeedbackSheet } from "@/components/drill/FeedbackSheet";
import { colorOf } from "@/lib/drill/colors";
import { badSound, buzz, goodSound, tone } from "@/lib/drill/sound";
import type { SwipeDirection } from "@/lib/drill/types";
import { Toast, useToast } from "@/components/drill/Toast";
import {
  boardUpTo,
  buildLine,
  GROUP_INFO,
  GROUP_ORDER,
  riverMoney,
  SCENARIOS,
  STEPS,
  STREETS,
  sortPieces,
  withoutGroups,
  type Group,
  type Line,
  type RangeSnapshot,
  type Scenario,
  type SortPieceDef,
  type Street,
} from "@/lib/drill/postflop/line-demo";
import { LineMatrix } from "./LineMatrix";
import { SortPiece, type SortDir } from "./SortPiece";
import { ArrowIcon } from "./bits";
import { BoardCard, IconButton, InspectPanel, Panel, PrimaryButton, Row, Shell, StreetTrack, Verdict } from "./drill-ui";

/** Everything one dealt hand needs, worked out once per hand and cached. */
type Hand = {
  index: number;
  sc: Scenario;
  line: Line;
  /** Turn and river are sorted, not swiped: ready-made groups the player
   * drags into a bet or Check. The flop is one piece for the whole range. */
  pieces: Record<Street, SortPieceDef[]>;
  /** Colors of the flop's 3×3 whole-range piece. */
  wholeColors: string[];
};

const HAND_CACHE = new Map<number, Hand>();

function handFor(index: number): Hand {
  const cached = HAND_CACHE.get(index);
  if (cached) return cached;
  const sc = SCENARIOS[index];
  const line = buildLine(sc);
  const hand: Hand = {
    index,
    sc,
    line,
    pieces: { flop: [], turn: sortPieces("turn", line.before.turn), river: sortPieces("river", line.before.river) },
    wholeColors: wholeColorsOf(line.before.flop),
  };
  HAND_CACHE.set(index, hand);
  return hand;
}

/** A random hand, never the same one twice in a row. */
function randomHandIndex(current: number): number {
  if (SCENARIOS.length < 2) return 0;
  let i = current;
  while (i === current) i = Math.floor(Math.random() * SCENARIOS.length);
  return i;
}

/** "advancing" = right answer given: the bet animates in, then the next card deals itself. */
type Phase = "intro" | "decide" | "advancing" | "resolved" | "wrong" | "final";

const BET_COLOR: Record<Street, string> = { flop: colorOf("small"), turn: colorOf("big"), river: colorOf("big") };
/** Shown while a right answer's bet animates in, just before the next card deals itself. */
type BetOption = { label: string; size: string; color: string };

/** What each drop zone means on a street: left = Check, right = the main
 * bet (flop small, turn overbet, river all-in), up = the alternative size
 * (flop big bet, turn 66%). */
function optionOf(st: Street, dir: SortDir, sc: Scenario): BetOption {
  const step = STEPS[st];
  if (dir === "left") return { label: "Check", size: "", color: colorOf("check") };
  if (dir === "up" && step.altBet) return { label: step.altBet.label, size: step.altBet.size, color: step.altBet.color };
  return { label: step.betLabel, size: st === "river" ? riverMoney(sc).allIn : step.betSize, color: BET_COLOR[st] };
}

/** Where the betting pieces belong on this street of this hand. On the turn
 * that depends on the card: overbet when it helps BTN, 66% when it helps BB. */
function betDir(st: Street, sc: Scenario): SortDir {
  return st === "turn" && sc.turnBet === "twoThirds" ? "up" : "right";
}

const ADVANCE_TEXT: Record<Street, string> = {
  flop: "The whole range bets",
  turn: "Value + bluffs overbet",
  river: "Value + bluffs all-in",
};

/** On the turn the three pieces need the full width, so Check / Overbet sit in the bottom corners. */
const SORT_POS: Record<SortDir, string> = {
  left: "left-2 bottom-2 flex-row gap-1 rounded-full px-2.5 py-1 text-[11.5px]",
  right: "right-2 bottom-2 flex-row gap-1 rounded-full px-2.5 py-1 text-[11.5px]",
  up: "top-2 left-1/2 -translate-x-1/2 flex-row gap-1 rounded-full px-2.5 py-1 text-[11.5px]",
};

/** The flop's single piece: the whole range as a 3×3 block, bet or checked as one. */
const WHOLE_PIECE: SortPieceDef = {
  key: "whole",
  label: "Small, big or check?",
  sub: "",
  desc: "",
  color: "#9AA6B1",
  groups: GROUP_ORDER,
  target: "bet",
  partMark: "",
  hands: [],
  entries: [],
  pct: 100,
};

/** The 3×3 block's nine colors follow the flop range's real mix of groups,
 * strongest first (largest-remainder rounding to nine blocks). */
function wholeColorsOf(snap: RangeSnapshot): string[] {
  const shares = GROUP_ORDER.map((g) => ({ g, exact: (snap.byGroup[g] / snap.total) * 9 }));
  const counts = shares.map((s) => ({ ...s, n: Math.floor(s.exact) }));
  let left = 9 - counts.reduce((s, c) => s + c.n, 0);
  for (const c of [...counts].sort((a, b) => b.exact - b.n - (a.exact - a.n))) {
    if (left <= 0) break;
    c.n += 1;
    left -= 1;
  }
  return counts.flatMap((c) => Array<string>(c.n).fill(GROUP_INFO[c.g].pattern ?? GROUP_INFO[c.g].color));
}

const pctOf = (snap: RangeSnapshot, line: Line) => Math.round((snap.total / line.start) * 100);

/** Flop-to-river demo: one BTN line (small bet, overbet, all-in), BB only
 * calls, on one of 20 hands (5 flops × 2 turns × 2 rivers) dealt at random.
 * Each street the player picks the plan for the whole range; the matrix
 * shows the range changing and shrinking street by street. */
export function LineDemoScreen() {
  const router = useRouter();
  const [hand, setHand] = useState<Hand>(() => handFor(0));
  const LINE = hand.line;
  const [phase, setPhase] = useState<Phase>("intro");
  const [streetIdx, setStreetIdx] = useState(0);
  const [afterBet, setAfterBet] = useState(false);
  const [seq, setSeq] = useState(0);
  const [prev, setPrev] = useState<RangeSnapshot | undefined>(undefined);
  const [shakeSeq, setShakeSeq] = useState(0);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const busy = useRef(false);
  const generation = useRef(0);

  // Turn sorting state.
  const [placed, setPlaced] = useState<SortPieceDef["key"][]>([]);
  const [sortSnap, setSortSnap] = useState<RangeSnapshot | null>(null);
  const [held, setHeld] = useState<Group[] | null>(null);
  /** The piece whose hands the player is looking at (tapped), if any. */
  const [inspecting, setInspecting] = useState<SortPieceDef | null>(null);
  const [sortArmed, setSortArmed] = useState<SortDir | null>(null);
  const [shakes, setShakes] = useState<Record<string, number>>({});
  const [flying, setFlying] = useState<Record<string, SortDir>>({});
  const [pulse, setPulse] = useState<{ groups: Group[]; seq: number; color?: string } | null>(null);
  const pulseSeq = useRef(0);
  const { toast, show: showToast } = useToast();

  const street = STREETS[streetIdx];
  const step = STEPS[street];
  const baseSnap = afterBet ? LINE.after[street] : LINE.before[street];
  // While sorting the turn, the matrix shows the range minus what has been sent to check so far.
  const snap = street !== "flop" && !afterBet && sortSnap ? sortSnap : baseSnap;
  const pieces = hand.pieces[street];
  const sorting = pieces.length > 0;
  const board = boardUpTo(street, hand.sc);
  const why = street === "river" ? `${hand.sc.why.river} ${LINE.riverPlan}` : hand.sc.why[street];
  const correctBetDir = betDir(street, hand.sc);
  const betOpt = optionOf(street, correctBetDir, hand.sc);

  function resetSort() {
    setPlaced([]);
    setSortSnap(null);
    setHeld(null);
    setInspecting(null);
    setSortArmed(null);
    setShakes({});
    setFlying({});
    setPulse(null);
  }

  function handleSortDrop(piece: SortPieceDef, dir: SortDir) {
    if (busy.current || placed.includes(piece.key)) return;
    setHeld(null);
    // "up" (the turn's small bet) is never right on this board — it's the believable mistake.
    const right = dir === (piece.target === "bet" ? correctBetDir : "left");
    if (!right) {
      // A betting piece put into the other bet size gets a size hint.
      const wrongSize = piece.target === "bet" && dir !== "left";
      const msg = !wrongSize
        ? "Not quite. Try again"
        : dir === "right"
          ? "Not quite. Too big on this turn"
          : (step.altBet?.wrongMsg ?? "Not quite. Try again");
      showToast(msg, false);
      badSound();
      buzz([30, 40, 30]);
      setShakes((s) => ({ ...s, [piece.key]: (s[piece.key] ?? 0) + 1 }));
      return;
    }
    showToast(piece.target === "bet" ? `Perfect · ${piece.label}: ${betOpt.label.toLowerCase()}` : `Perfect · ${piece.label}: check`, true);
    goodSound();
    buzz(15);
    setFlying((f) => ({ ...f, [piece.key]: dir }));
    const nextPlaced = [...placed, piece.key];
    setPlaced(nextPlaced);

    if (piece.target === "check") {
      // The checking hands visibly leave the line.
      setPrev(snap);
      setSortSnap(withoutGroups(snap, piece.groups));
      setSeq((s) => s + 1);
    } else {
      pulseSeq.current += 1;
      setPulse({ groups: piece.groups, seq: pulseSeq.current });
    }

    if (nextPlaced.length === pieces.length) {
      busy.current = true;
      const fromIdx = streetIdx;
      later(() => {
        tone(784, 0.1);
        setTimeout(() => tone(1046, 0.18), 90);
        // The sorted range IS the bet range; switch to it without replaying the narrowing.
        setPrev(LINE.after[street]);
        setAfterBet(true);
        setSortSnap(null);
        setPulse(null);
        if (street === "river") {
          // End of the hand: stop on the explanation, then the summary.
          setPhase("resolved");
          busy.current = false;
        } else {
          // Right answer: no button, show the bet going in and deal the next card.
          setPhase("advancing");
          later(() => dealNext(fromIdx), 1100);
        }
      }, 700);
    }
  }

  /** Runs `fn` after `ms`, unless the player restarted in the meantime. */
  function later(fn: () => void, ms: number) {
    const gen = generation.current;
    setTimeout(() => {
      if (gen === generation.current) fn();
    }, ms);
  }

  /** Deal the next street's card: the range that bet becomes the range that arrives. */
  function dealNext(fromIdx: number) {
    resetSort();
    setPrev(LINE.after[STREETS[fromIdx]]);
    setStreetIdx(fromIdx + 1);
    setAfterBet(false);
    setSeq((s) => s + 1);
    setPhase("decide");
    busy.current = false;
  }

  /** Deal a hand from the flop: a new random one, or the same one again. */
  function start(which: "new" | "same" = "same") {
    generation.current += 1;
    if (which === "new") {
      // `?hand=N` (0-19) opens one specific hand — for testing and for
      // pointing at a runout in feedback. Otherwise a random one.
      const forced = Number(new URLSearchParams(window.location.search).get("hand"));
      const valid = Number.isInteger(forced) && forced >= 0 && forced < SCENARIOS.length && window.location.search.includes("hand=");
      setHand(handFor(valid ? forced : randomHandIndex(hand.index)));
    }
    setPrev(undefined);
    setStreetIdx(0);
    setAfterBet(false);
    setSeq((s) => s + 1);
    resetSort();
    busy.current = false;
    setPhase("decide");
  }

  /** The flop's whole-range piece was dropped left (check) or right (bet). */
  function handleSwipe(dir: SortDir) {
    if (busy.current || phase !== "decide") return;
    if (dir === "up") {
      // The wrong bet size: shake back and let the player try again.
      showToast(step.altBet?.wrongMsg ?? "Not quite. Try again", false);
      badSound();
      buzz([30, 40, 30]);
      setShakeSeq((s) => s + 1);
      return;
    }
    const choice = dir === "left" ? "check" : "bet";
    if (choice !== step.correct) {
      badSound();
      buzz([30, 40, 30]);
      setShakeSeq((s) => s + 1);
      setPhase("wrong");
      return;
    }
    busy.current = true;
    showToast(`Perfect · ${betOpt.label}`, true);
    goodSound();
    buzz(15);
    setFlying((f) => ({ ...f, whole: "right" }));
    // The whole range bets: one wave of the bet color across every hand.
    pulseSeq.current += 1;
    setPulse({ groups: GROUP_ORDER, seq: pulseSeq.current, color: betOpt.color });
    setPhase("advancing");
    const fromIdx = streetIdx;
    later(() => dealNext(fromIdx), 1500);
  }

  function next() {
    if (busy.current) return;
    if (street === "river") setPhase("final");
  }

  function retryStreet() {
    setFlying({});
    setPhase("decide");
  }

  if (phase === "intro") {
    return (
      <Shell>
        <div className="flex h-full flex-col gap-4 overflow-y-auto py-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="inline-block rounded-full px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em]" style={{ color: "#2B1C02", background: "var(--mix)" }}>
              Demo · draft answers
            </span>
            <b className="font-[family-name:var(--font-display)] text-[26px] font-bold">Flop to river</b>
            <p className="m-0 max-w-[330px] text-[13.5px] leading-[1.5]" style={{ color: "var(--muted)" }}>
              BTN opened, BB called. You get one of {SCENARIOS.length} hands at random and play it to the river. On every street you pick one plan for your whole
              range. BB always calls. Watch how each plan shapes the range you take to the next street.
            </p>
          </div>
          <div className="flex flex-col gap-1.5 rounded-2xl p-3 text-[13px]" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
            <Row label="Flop" text="Small bet, big bet or check" />
            <Row label="Turn" text="Overbet, 66% or check" />
            <Row label="River" text="All-in or check" />
          </div>
          <button type="button" className="h-[52px] cursor-pointer rounded-2xl border-0 text-[16px] font-bold active:scale-[0.98]" style={{ background: "var(--mix)", color: "#2B1C02" }} onClick={() => start("new")}>
            Start the hand
          </button>
          <button type="button" className="h-[44px] cursor-pointer rounded-xl border text-[14px] font-semibold" style={{ borderColor: "var(--line)" }} onClick={() => router.push("/")}>
            Back to lobby
          </button>
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <div className="flex items-center gap-2">
        <IconButton label="Lobby" onClick={() => router.push("/")}>
          <path d="M4 11l8-7 8 7" />
          <path d="M6 10v10h12V10" />
        </IconButton>
        <div className="min-w-0 flex-1">
          <b className="block truncate font-[family-name:var(--font-display)] text-[14px] font-bold">
            BTN vs BB <span className="font-medium" style={{ color: "var(--muted)" }} data-testid="hand-id">· {hand.sc.id}</span>
          </b>
          <StreetTrack current={streetIdx} done={phase === "final"} />
        </div>
        <IconButton label="Start over" onClick={() => start("same")}>
          <path d="M20 12a8 8 0 1 1-2.3-5.6" />
          <path d="M20 4v5h-5" />
        </IconButton>
        <IconButton label="Feedback" onClick={() => setFeedbackOpen(true)}>
          <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-.9L3 21l1.4-4.5A8.38 8.38 0 0 1 3 11.5 8.5 8.5 0 0 1 11.5 3a8.38 8.38 0 0 1 9.5 8.5z" />
        </IconButton>
      </div>

      <div className="flex flex-shrink-0 items-center justify-between gap-2 rounded-[14px] p-2" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
        <div className="flex gap-1">
          {board.map((c, i) => (
            <BoardCard key={i} card={c} fresh={!afterBet && phase === "decide" && i >= 3 && i === board.length - 1} />
          ))}
        </div>
        <div className="flex flex-col items-end gap-0.5 text-right">
          <span className="font-[family-name:var(--font-display)] text-[11px]" style={{ color: "var(--muted)" }}>
            Pot <b style={{ color: "var(--mix)" }}>{street === "river" ? riverMoney(hand.sc).pot : step.pot}</b>
          </span>
          <span className="text-[11px]" style={{ color: "var(--muted)" }}>
            Range left{" "}
            <b className="font-[family-name:var(--font-display)] text-[15px]" style={{ color: "var(--foreground)", fontVariantNumeric: "tabular-nums" }} data-testid="range-left">
              {pctOf(snap, LINE)}%
            </b>
          </span>
        </div>
      </div>

      <div className="flex flex-shrink-0 flex-col gap-1.5 rounded-xl p-1.5" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
        <LineMatrix snap={snap} prev={prev} seq={seq} highlight={inspecting?.groups ?? held} pulse={pulse} />
        <Legend snap={snap} />
      </div>

      <div
        className="relative mt-0.5 flex flex-shrink-0 items-center justify-center overflow-hidden rounded-2xl"
        style={{ height: phase === "final" ? 244 : 196, border: phase === "decide" ? "1px dashed var(--line)" : "1px solid var(--line)", background: phase === "decide" ? undefined : "var(--panel)", touchAction: "none" }}
      >
        {phase === "decide" && inspecting && <InspectPanel piece={inspecting} onBack={() => setInspecting(null)} />}

        {phase === "decide" && !inspecting && (
          <>
            {(["left", "right", ...(step.altBet ? ["up"] : [])] as SortDir[]).map((dir) => {
              const opt = optionOf(street, dir, hand.sc);
              const on = sortArmed === dir;
              return (
                <div
                  key={dir}
                  className={`absolute flex items-center border-[1.5px] font-[family-name:var(--font-display)] font-bold tracking-[0.08em] ${SORT_POS[dir]}`}
                  style={{ borderColor: opt.color, background: on ? opt.color : "transparent", color: on ? "#10161B" : opt.color }}
                  data-testid={`target-${dir}`}
                >
                  <ArrowIcon dir={dir as SwipeDirection} />
                  {opt.label.toUpperCase()}
                  {opt.size && <span className="text-[9.5px] font-semibold opacity-80">{opt.size}</span>}
                </div>
              );
            })}
            <Toast toast={toast} />
            {sorting ? (
              <>
                <div className="flex items-center gap-2.5" data-testid="sort-row">
                  {pieces.map((p, i) => (
                    <SortPiece
                      key={`${street}-${p.key}`}
                      compact={pieces.length > 3}
                      piece={p}
                      delay={0.08 * i}
                      onDrop={(d) => handleSortDrop(p, d)}
                      onArm={setSortArmed}
                      onHold={(h) => setHeld(h ? p.groups : null)}
                      onInspect={() => setInspecting(p)}
                      shakeSeq={shakes[p.key] ?? 0}
                      flyTo={flying[p.key] ?? null}
                      disabled={placed.includes(p.key)}
                      allowUp={!!step.altBet}
                    />
                  ))}
                </div>
                {!step.altBet && (
                  <span className="absolute top-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px]" style={{ color: "var(--muted)" }}>
                    Drag each group to its plan
                  </span>
                )}
              </>
            ) : (
              <SortPiece
                key={`whole-${hand.index}-${seq}`}
                piece={WHOLE_PIECE}
                blockColors={hand.wholeColors}
                caption="The whole range"
                delay={0}
                onDrop={(d) => handleSwipe(d)}
                onArm={setSortArmed}
                onHold={() => {}}
                onInspect={() => {}}
                shakeSeq={shakeSeq}
                flyTo={flying.whole ?? null}
                disabled={!!flying.whole}
                allowUp={!!step.altBet}
              />
            )}
          </>
        )}

        {phase === "advancing" && (
          <div className="flex flex-col items-center gap-1.5 text-center" style={{ animation: "rdIn 220ms ease-out both" }} data-testid="advancing">
            <b className="font-[family-name:var(--font-display)] text-[22px] font-bold" style={{ color: betOpt.color, animation: "ldBanner 520ms cubic-bezier(.3,1.4,.5,1) both" }}>
              {street === "turn" ? `Value + bluffs ${betOpt.label === "Overbet" ? "overbet" : "bet 66%"}` : ADVANCE_TEXT[street]}
            </b>
            <span className="text-[13px]" style={{ color: "var(--muted)" }}>
              {betOpt.label} {betOpt.size} · BB calls
            </span>
          </div>
        )}

        {phase === "resolved" && (
          <Panel>
            <Verdict ok title={`${betOpt.label} · ${betOpt.size}`} color={betOpt.color} />
            <p className="m-0 text-[13px] leading-[1.4]">{step.betsWho}</p>
            <p className="m-0 text-[11.5px] leading-[1.35]" style={{ color: "var(--muted)" }}>
              {why}
            </p>
            <PrimaryButton onClick={next}>See the whole line</PrimaryButton>
          </Panel>
        )}

        {phase === "wrong" && (
          <Panel>
            <Verdict ok={false} title="Checking ends the line here" color={colorOf("check")} />
            <p className="m-0 text-[12.5px] leading-[1.4]">
              The plan on this {street}: <b style={{ color: betOpt.color }}>{betOpt.label}</b>. {why}
            </p>
            <div className="flex gap-2">
              <PrimaryButton onClick={retryStreet}>Try the {street} again</PrimaryButton>
              <button type="button" className="h-[44px] flex-1 cursor-pointer rounded-xl border text-[13px] font-semibold" style={{ borderColor: "var(--line)" }} onClick={() => start("same")}>
                Start over
              </button>
            </div>
          </Panel>
        )}

        {phase === "final" && (
          <Panel>
            <b className="font-[family-name:var(--font-display)] text-[15px]">How your range narrowed</b>
            <div className="grid grid-cols-3 gap-2" data-testid="line-summary">
              {STREETS.map((s) => (
                <div key={s} className="flex min-w-0 flex-col gap-1">
                  <LineMatrix snap={LINE.after[s]} mini />
                  <span className="text-center text-[10.5px] leading-tight" style={{ color: "var(--muted)" }}>
                    {optionOf(s, betDir(s, hand.sc), hand.sc).label} <b style={{ color: "var(--foreground)" }}>{pctOf(LINE.after[s], LINE)}%</b>
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <PrimaryButton onClick={() => start("new")}>Next hand</PrimaryButton>
              <button type="button" className="h-[44px] flex-1 cursor-pointer rounded-xl border text-[13px] font-semibold" style={{ borderColor: "var(--line)" }} onClick={() => start("same")}>
                Replay
              </button>
            </div>
          </Panel>
        )}
      </div>

      <FeedbackSheet
        open={feedbackOpen}
        onClose={() => setFeedbackOpen(false)}
        drillTag={`postflop:line-demo:${hand.sc.id}:${street}`}
        drillLabel={`Flop to river · ${hand.sc.id} · ${street}`}
        pageUrl={`/drills/postflop/line?hand=${hand.index}`}
      />
    </Shell>
  );
}

function Legend({ snap }: { snap: RangeSnapshot }) {
  const present = GROUP_ORDER.filter((g) => snap.byGroup[g] > 0.01);
  return (
    <div className="flex min-h-[14px] flex-wrap justify-center gap-x-3 gap-y-0.5 text-[10.5px]" style={{ color: "var(--muted)" }} data-testid="line-legend">
      {present.map((g) => (
        <span key={g} className="flex items-center gap-1">
          <i className="inline-block h-[8px] w-[8px] rounded-[2px]" style={{ background: GROUP_INFO[g].pattern ?? GROUP_INFO[g].color }} />
          {g === "missed" && snap.split ? snap.split.shove.label : g === "giveup" && snap.split ? snap.split.giveUp.label : GROUP_INFO[g].name}
          <b style={{ color: "var(--foreground)", fontVariantNumeric: "tabular-nums" }}>{Math.round((snap.byGroup[g] / snap.total) * 100)}%</b>
        </span>
      ))}
    </div>
  );
}
