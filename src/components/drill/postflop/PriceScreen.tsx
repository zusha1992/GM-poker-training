"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { FeedbackSheet } from "@/components/drill/FeedbackSheet";
import { Toast, useToast } from "@/components/drill/Toast";
import { badSound, buzz, goodSound, tone } from "@/lib/drill/sound";
import { STREETS } from "@/lib/drill/postflop/line-demo";
import {
  BUCKET_COLOR,
  BUCKETS,
  bucketLabel,
  buildRunout,
  PGROUP_INFO,
  PGROUP_ORDER,
  RUNOUTS,
  type Bucket,
  type PGroup,
  type PricePiece,
  type PriceStreet,
  type Runout,
} from "@/lib/drill/postflop/price-hands";
import { LineMatrix, type MatrixPalette } from "./LineMatrix";
import { SortPiece } from "./SortPiece";
import { BoardCard, IconButton, InspectPanel, PrimaryButton, Row, Shell, StreetTrack } from "./drill-ui";

const PALETTE: MatrixPalette = { order: PGROUP_ORDER, fill: (g) => PGROUP_INFO[g as PGroup].color };

/** "deal" = a card just came: its story shows and the obvious groups place
 * themselves. "advancing" = every group placed: BTN bets, BB calls, next card. */
type Phase = "intro" | "deal" | "decide" | "advancing" | "final";

const BUCKET_RANK: Record<Bucket, number> = { "0": 0, "5": 1, "15": 2, "40": 3, all: 4 };

/** A random runout, never the same one twice in a row. `?runout=N` (0-5) forces one. */
function pickRunout(current: number): number {
  const q = new URLSearchParams(window.location.search).get("runout");
  const forced = Number(q);
  if (q !== null && Number.isInteger(forced) && forced >= 0 && forced < RUNOUTS.length) return forced;
  let i = current;
  while (i === current && RUNOUTS.length > 1) i = Math.floor(Math.random() * RUNOUTS.length);
  return i;
}

/** "How many big blinds?" — on every street, drag each of BTN's hand groups
 * into how many more big blinds it wants to put in from here. Same pieces,
 * matrix and feel as the flop-to-river demo; hands never leave the matrix,
 * they re-sort into new groups on every card. */
export function PriceScreen() {
  const router = useRouter();
  const [runout, setRunout] = useState<Runout>(() => buildRunout(0));
  const [phase, setPhase] = useState<Phase>("intro");
  const [streetIdx, setStreetIdx] = useState(0);
  const [placed, setPlaced] = useState<Partial<Record<PGroup, Bucket>>>({});
  /** Pieces answered wrong at least once, as "street:group". */
  const [missed, setMissed] = useState<Set<string>>(new Set());
  const [armed, setArmed] = useState<Bucket | null>(null);
  const [held, setHeld] = useState<PGroup | null>(null);
  const [inspecting, setInspecting] = useState<PricePiece | null>(null);
  const [shakes, setShakes] = useState<Record<string, number>>({});
  const [flying, setFlying] = useState<Partial<Record<PGroup, Bucket>>>({});
  const [flyRects, setFlyRects] = useState<Partial<Record<PGroup, DOMRect>>>({});
  const [pulse, setPulse] = useState<{ groups: PGroup[]; seq: number; color?: string } | null>(null);
  const [seq, setSeq] = useState(0);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const pulseSeq = useRef(0);
  const busy = useRef(false);
  const generation = useRef(0);
  const boxes = useRef<Partial<Record<Bucket, HTMLDivElement | null>>>({});
  const { toast, show: showToast } = useToast();

  const st = runout.streets[streetIdx];
  const prevSnap = streetIdx > 0 ? runout.streets[streetIdx - 1].snap : undefined;

  /** Runs `fn` after `ms`, unless the player restarted in the meantime. */
  function later(fn: () => void, ms: number) {
    const gen = generation.current;
    setTimeout(() => {
      if (gen === generation.current) fn();
    }, ms);
  }

  function pop(groups: PGroup[], color?: string) {
    pulseSeq.current += 1;
    setPulse({ groups, seq: pulseSeq.current, color });
  }

  /** A new card: show its story, then the obvious groups drop into their buckets. */
  function enterStreet(i: number, r: Runout = runout) {
    busy.current = true;
    setStreetIdx(i);
    setPlaced({});
    setFlying({});
    setFlyRects({});
    setShakes({});
    setInspecting(null);
    setHeld(null);
    setPulse(null);
    setSeq((s) => s + 1);
    setPhase("deal");
    const s = r.streets[i];
    later(() => {
      const auto: Partial<Record<PGroup, Bucket>> = {};
      for (const g of s.auto) auto[g] = s.answers[g]!.bucket;
      setPlaced(auto);
      // Ring the strong ones as they land; flashing every no-pair hand is just noise.
      pop(s.auto.filter((g) => g !== "nopair"));
      tone(523, 0.08);
      setTimeout(() => tone(659, 0.12), 80);
    }, 900);
    later(() => {
      setPhase("decide");
      busy.current = false;
    }, 1900);
  }

  function start(which: "new" | "same") {
    generation.current += 1;
    const r = which === "new" ? buildRunout(pickRunout(runout.index)) : runout;
    setRunout(r);
    setMissed(new Set());
    enterStreet(0, r);
  }

  function zoneAt(x: number, y: number): Bucket | null {
    for (const b of BUCKETS) {
      const r = boxes.current[b]?.getBoundingClientRect();
      if (r && x >= r.left - 6 && x <= r.right + 6 && y >= r.top - 14 && y <= r.bottom + 14) return b;
    }
    return null;
  }

  function handleDrop(p: PricePiece, b: Bucket) {
    if (busy.current || placed[p.key]) return;
    setHeld(null);
    if (b !== p.answer.bucket) {
      // Never reveal the bucket: only whether it wants more or less money.
      const more = BUCKET_RANK[p.answer.bucket] > BUCKET_RANK[b];
      showToast(more ? "Not quite. It wants more" : "Not quite. It wants less", false);
      badSound();
      buzz([30, 40, 30]);
      setShakes((s) => ({ ...s, [p.key]: (s[p.key] ?? 0) + 1 }));
      setMissed((m) => new Set(m).add(`${st.street}:${p.key}`));
      return;
    }
    showToast(`Perfect · ${p.label}: ${b === "all" ? "all-in" : `${b}bb`}`, true);
    goodSound();
    buzz(15);
    const rect = boxes.current[b]?.getBoundingClientRect();
    if (rect) setFlyRects((f) => ({ ...f, [p.key]: rect }));
    setFlying((f) => ({ ...f, [p.key]: b }));
    const next = { ...placed, [p.key]: b };
    setPlaced(next);
    pop([p.key], BUCKET_COLOR[b]);

    if (st.pieces.every((q) => next[q.key])) {
      busy.current = true;
      later(() => {
        tone(784, 0.1);
        setTimeout(() => tone(1046, 0.18), 90);
        if (streetIdx === STREETS.length - 1) {
          setPhase("final");
          busy.current = false;
        } else {
          setPhase("advancing");
          later(() => enterStreet(streetIdx + 1), 1500);
        }
      }, 650);
    }
  }

  if (phase === "intro") {
    return (
      <Shell>
        <div className="flex h-full flex-col gap-4 overflow-y-auto py-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="inline-block rounded-full px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em]" style={{ color: "#2B1C02", background: "var(--mix)" }}>
              Prototype · draft answers
            </span>
            <b className="font-[family-name:var(--font-display)] text-[26px] font-bold">How many big blinds?</b>
            <p className="m-0 max-w-[330px] text-[13.5px] leading-[1.5]" style={{ color: "var(--muted)" }}>
              BTN opened, BB called, 100bb deep. On every street, drag each hand group into how many more big blinds it wants to put in from here, if the
              rest of the board bricks. BB calls every bet.
            </p>
          </div>
          <div className="flex flex-col gap-1.5 rounded-2xl p-3 text-[13px]" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
            <Row label="Board" text={`A♣ 7♦ 2♠ · ${RUNOUTS.length} runouts`} />
            <Row label="Buckets" text="0 · 5 · 15 · 40 · all-in" />
            <Row label="Streets" text="Flop, turn and river" />
          </div>
          <button type="button" className="h-[52px] cursor-pointer rounded-2xl border-0 text-[16px] font-bold active:scale-[0.98]" style={{ background: "var(--mix)", color: "#2B1C02" }} onClick={() => start("new")}>
            Start
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
            How many bb? <span className="font-medium" style={{ color: "var(--muted)" }} data-testid="runout-id">· {runout.id}</span>
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
          {st.board.map((c, i) => (
            <BoardCard key={i} card={c} fresh={phase === "deal" && i >= 3 && i === st.board.length - 1} />
          ))}
        </div>
        <div className="flex flex-col items-end gap-0.5 text-right">
          <span className="font-[family-name:var(--font-display)] text-[12px]" style={{ color: "var(--muted)" }}>
            Pot <b style={{ color: "var(--mix)" }} data-testid="pot">{st.pot}bb</b>
          </span>
          <span className="text-[11px]" style={{ color: "var(--muted)" }}>
            Behind <b style={{ color: "var(--foreground)", fontVariantNumeric: "tabular-nums" }}>{st.behind}bb</b>
          </span>
        </div>
      </div>

      {phase === "final" ? (
        <Summary runout={runout} missed={missed} onNext={() => start("new")} onReplay={() => start("same")} />
      ) : (
        <>
          <div className="flex flex-shrink-0 flex-col gap-1.5 rounded-xl p-1.5" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
            <LineMatrix
              snap={st.snap}
              prev={prevSnap}
              seq={seq}
              palette={PALETTE}
              highlight={inspecting ? [inspecting.key] : held ? [held] : null}
              pulse={pulse}
            />
            <Legend st={st} />
          </div>

          <div className="relative mt-0.5 flex min-h-[226px] flex-1 flex-col gap-1.5 overflow-hidden rounded-2xl p-1.5" style={{ border: "1px dashed var(--line)", touchAction: "none" }}>
            {inspecting ? (
              <InspectPanel
                piece={{ ...inspecting, label: PGROUP_INFO[inspecting.key].name }}
                onBack={() => setInspecting(null)}
              />
            ) : (
              <>
                <div className="grid flex-shrink-0 grid-cols-5 gap-1" data-testid="buckets">
                  {BUCKETS.map((b) => (
                    <BucketBox
                      key={b}
                      bucket={b}
                      behind={st.behind}
                      armed={armed === b}
                      groups={PGROUP_ORDER.filter((g) => placed[g] === b)}
                      boxRef={(el) => {
                        boxes.current[b] = el;
                      }}
                    />
                  ))}
                </div>

                <div className="relative flex min-h-0 flex-1 items-center justify-center">
                  <Toast toast={toast} />
                  {phase === "deal" && (
                    <div className="flex flex-col items-center gap-1 px-2 text-center" style={{ animation: "rdIn 220ms ease-out both" }} data-testid="story">
                      <b className="font-[family-name:var(--font-display)] text-[17px]" style={{ animation: "ldBanner 520ms cubic-bezier(.3,1.4,.5,1) both" }}>
                        {st.street === "flop" ? "The flop" : st.story.split(" · ")[0]}
                      </b>
                      <span className="max-w-[300px] text-[12.5px] leading-snug" style={{ color: "var(--muted)" }}>
                        {st.street === "flop" ? st.story : st.story.split(" · ").slice(1).join(" · ")}
                      </span>
                    </div>
                  )}
                  {phase === "decide" && (
                    <div className="flex items-end justify-center gap-1" data-testid="sort-row">
                      {st.pieces.map((p, i) => (
                        <SortPiece<Bucket>
                          key={`${st.street}-${p.key}`}
                          tiny={st.pieces.length > 4}
                          compact={st.pieces.length <= 4}
                          piece={p}
                          delay={0.08 * i}
                          zoneAt={zoneAt}
                          flyRect={flyRects[p.key] ?? null}
                          onDrop={(b) => handleDrop(p, b)}
                          onArm={setArmed}
                          onHold={(h) => setHeld(h ? p.key : null)}
                          onInspect={() => setInspecting(p)}
                          shakeSeq={shakes[p.key] ?? 0}
                          flyTo={flying[p.key] ?? null}
                          disabled={!!placed[p.key]}
                        />
                      ))}
                    </div>
                  )}
                  {phase === "advancing" && (
                    <div className="flex flex-col items-center gap-1 text-center" style={{ animation: "rdIn 220ms ease-out both" }} data-testid="advancing">
                      <b className="font-[family-name:var(--font-display)] text-[20px]" style={{ color: "var(--mix)", animation: "ldBanner 520ms cubic-bezier(.3,1.4,.5,1) both" }}>
                        BTN bets · BB calls
                      </b>
                      <span className="text-[12.5px]" style={{ color: "var(--muted)" }}>
                        Pot {runout.streets[streetIdx + 1]?.pot}bb on the {STREETS[streetIdx + 1]}
                      </span>
                    </div>
                  )}
                </div>

                <span className="flex-shrink-0 text-center text-[11px]" style={{ color: "var(--muted)" }}>
                  {phase === "decide" ? "How many more bb does each group want? Tap a piece to see its hands." : " "}
                </span>
              </>
            )}
          </div>
        </>
      )}

      <FeedbackSheet
        open={feedbackOpen}
        onClose={() => setFeedbackOpen(false)}
        drillTag={`postflop:price:${runout.id}:${st.street}`}
        drillLabel={`How many big blinds · ${runout.id} · ${st.street}`}
        pageUrl="/drills/postflop/price"
      />
    </Shell>
  );
}

/** One money bucket. Lights up while a piece hovers over it; holds a chip
 * for every group placed in it. */
function BucketBox({
  bucket,
  behind,
  armed,
  groups,
  boxRef,
}: {
  bucket: Bucket;
  behind: number;
  armed: boolean;
  groups: PGroup[];
  boxRef: (el: HTMLDivElement | null) => void;
}) {
  const color = BUCKET_COLOR[bucket];
  const { big, small } = bucketLabel(bucket, behind);
  return (
    <div
      ref={boxRef}
      className="flex h-[70px] min-w-0 flex-col items-center justify-start gap-0.5 rounded-xl border-[1.5px] pt-1.5 transition-[transform,background] duration-150"
      style={{
        borderColor: color,
        background: armed ? color : `color-mix(in srgb, ${color} 14%, transparent)`,
        transform: armed ? "scale(1.06)" : undefined,
        boxShadow: bucket === "all" ? `0 0 12px color-mix(in srgb, ${color} 35%, transparent)` : undefined,
      }}
      data-testid={`bucket-${bucket}`}
    >
      <b
        className={`font-[family-name:var(--font-display)] leading-none ${bucket === "all" ? "text-[13px]" : "text-[19px]"}`}
        style={{ color: armed ? "#10161B" : color, fontVariantNumeric: "tabular-nums" }}
      >
        {big}
      </b>
      <span className="text-[9.5px] leading-none" style={{ color: armed ? "#10161B" : "var(--muted)" }}>
        {small}
      </span>
      <div className="mt-0.5 flex flex-wrap justify-center gap-[3px] px-1">
        {groups.map((g) => (
          <i
            key={g}
            title={PGROUP_INFO[g].label}
            className="inline-block h-[10px] w-[10px] rounded-[2.5px]"
            style={{ background: PGROUP_INFO[g].color, boxShadow: "inset 0 1px 0 rgba(255,255,255,.35)", animation: "ldDeal 380ms cubic-bezier(.3,1.4,.5,1) both" }}
          />
        ))}
      </div>
    </div>
  );
}

function Legend({ st }: { st: PriceStreet }) {
  const present = PGROUP_ORDER.filter((g) => st.snap.byGroup[g] > 0.01);
  return (
    <div className="flex min-h-[14px] flex-wrap justify-center gap-x-2.5 gap-y-0.5 text-[10.5px]" style={{ color: "var(--muted)" }} data-testid="price-legend">
      {present.map((g) => (
        <span key={g} className="flex items-center gap-1">
          <i className="inline-block h-[8px] w-[8px] rounded-[2px]" style={{ background: PGROUP_INFO[g].color }} />
          {PGROUP_INFO[g].label}
          <b style={{ color: "var(--foreground)", fontVariantNumeric: "tabular-nums" }}>{Math.round((st.snap.byGroup[g] / st.snap.total) * 100)}%</b>
        </span>
      ))}
    </div>
  );
}

/** End of the runout: every group's bucket on every street, side by side,
 * so the player sees what the turn and river did to each group. Tap a cell
 * for the reason. */
function Summary({ runout, missed, onNext, onReplay }: { runout: Runout; missed: Set<string>; onNext: () => void; onReplay: () => void }) {
  const [picked, setPicked] = useState<{ street: number; g: PGroup } | null>(null);
  const groups = PGROUP_ORDER.filter((g) => runout.streets.some((s) => s.answers[g]));
  const asked = runout.streets.reduce((n, s) => n + s.pieces.length, 0);
  const firstTry = asked - missed.size;
  const pickedAns = picked ? runout.streets[picked.street].answers[picked.g] : undefined;

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto rounded-2xl p-3" style={{ background: "var(--panel)", border: "1px solid var(--line)", animation: "rdIn 220ms ease-out both" }} data-testid="price-summary">
      <div className="flex items-baseline justify-between gap-2">
        <b className="font-[family-name:var(--font-display)] text-[17px]">What each group wanted</b>
        <span className="text-[12.5px]" style={{ color: "var(--muted)" }}>
          <b style={{ color: "var(--call)" }}>
            {firstTry}/{asked}
          </b>{" "}
          first try
        </span>
      </div>

      <div className="grid grid-cols-[1fr_repeat(3,54px)] items-center gap-x-1.5 gap-y-1 text-[12px]">
        <span />
        {runout.streets.map((s) => (
          <span key={s.street} className="text-center text-[10.5px] font-semibold uppercase tracking-[0.06em]" style={{ color: "var(--muted)" }}>
            {s.street}
            {s.street !== "flop" && <span className="block normal-case tracking-normal">{s.story.split(" · ")[0]}</span>}
          </span>
        ))}
        {groups.map((g) => (
          <SummaryRow key={g} g={g} runout={runout} missed={missed} picked={picked} onPick={(street) => setPicked({ street, g })} />
        ))}
      </div>

      <p className="m-0 min-h-[34px] text-[12px] leading-snug" style={{ color: "var(--muted)" }} data-testid="summary-why">
        {pickedAns ? (
          <>
            <b style={{ color: PGROUP_INFO[picked!.g].color }}>{PGROUP_INFO[picked!.g].name}</b> on the {STREETS[picked!.street]}: {pickedAns.why}
            {!pickedAns.sure && <span style={{ color: "var(--mix)" }}> (draft, Uri to check)</span>}
          </>
        ) : (
          <>Tap any box to see why. A dot marks a draft answer for Uri to check.</>
        )}
      </p>

      <div className="mt-auto flex gap-2">
        <PrimaryButton onClick={onNext}>Next runout</PrimaryButton>
        <button type="button" className="h-[44px] flex-1 cursor-pointer rounded-xl border text-[13px] font-semibold" style={{ borderColor: "var(--line)" }} onClick={onReplay}>
          Replay
        </button>
      </div>
    </div>
  );
}

function SummaryRow({
  g,
  runout,
  missed,
  picked,
  onPick,
}: {
  g: PGroup;
  runout: Runout;
  missed: Set<string>;
  picked: { street: number; g: PGroup } | null;
  onPick: (street: number) => void;
}) {
  return (
    <>
      <span className="flex min-w-0 items-center gap-1.5">
        <i className="inline-block h-[10px] w-[10px] flex-shrink-0 rounded-[2.5px]" style={{ background: PGROUP_INFO[g].color }} />
        <span className="truncate">{PGROUP_INFO[g].label}</span>
      </span>
      {runout.streets.map((s, i) => {
        const ans = s.answers[g];
        if (!ans) return <span key={s.street} className="text-center" style={{ color: "var(--line)" }}>–</span>;
        const color = BUCKET_COLOR[ans.bucket];
        const wrong = missed.has(`${s.street}:${g}`);
        const on = picked?.street === i && picked.g === g;
        return (
          <button
            key={s.street}
            type="button"
            className="relative h-[26px] cursor-pointer rounded-md border font-[family-name:var(--font-display)] text-[12.5px] font-bold"
            style={{
              borderColor: on ? "var(--foreground)" : color,
              background: `color-mix(in srgb, ${color} ${ans.auto ? 10 : 24}%, transparent)`,
              color,
              opacity: ans.auto ? 0.6 : 1,
            }}
            onClick={() => onPick(i)}
            aria-label={`${PGROUP_INFO[g].label} on the ${s.street}: ${ans.bucket === "all" ? "all-in" : `${ans.bucket}bb`}`}
          >
            {ans.bucket === "all" ? "All" : ans.bucket}
            {wrong && <span className="absolute -top-1.5 -left-1.5 text-[10px]" style={{ color: "var(--raise)" }}>✕</span>}
            {!ans.sure && <span className="absolute top-0.5 right-1 inline-block h-[5px] w-[5px] rounded-full" style={{ background: "var(--mix)" }} />}
          </button>
        );
      })}
    </>
  );
}
