"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { FeedbackSheet } from "@/components/drill/FeedbackSheet";
import { Toast, useToast } from "@/components/drill/Toast";
import { badSound, buzz, goodSound, tone } from "@/lib/drill/sound";
import { STREETS } from "@/lib/drill/postflop/line-demo";
import {
  BUCKET_COLOR,
  BUCKET_RANK,
  BUCKETS,
  bucketLabel,
  bucketShort,
  buildRunout,
  PGROUP_INFO,
  PGROUP_ORDER,
  RUNOUTS,
  type Bucket,
  type PGroup,
  type PricePiece,
  type Runout,
} from "@/lib/drill/postflop/price-hands";
import { LineMatrix, type MatrixPalette } from "./LineMatrix";
import { SortPiece } from "./SortPiece";
import { BoardCard, IconButton, InspectPanel, PrimaryButton, Row, Shell, StreetTrack } from "./drill-ui";

/** The boxes along the top: money. Bluffs and showdown value sit on the sides. */
const MONEY_BUCKETS: Bucket[] = ["5", "15", "40", "all"];

/** Matrix color of a group nobody has answered yet on this street. */
const UNSEEN = "#46525C";

/** "deal" = a card just came: its story shows and the obvious groups place
 * themselves. "advancing" = every group placed: BTN bets, BB calls, next card. */
type Phase = "intro" | "deal" | "decide" | "advancing" | "final";

/** A random runout, never the same one twice in a row. `?runout=N` (0-5) forces one. */
function pickRunout(current: number): number {
  const q = new URLSearchParams(window.location.search).get("runout");
  const forced = Number(q);
  if (q !== null && Number.isInteger(forced) && forced >= 0 && forced < RUNOUTS.length) return forced;
  let i = current;
  while (i === current && RUNOUTS.length > 1) i = Math.floor(Math.random() * RUNOUTS.length);
  return i;
}

/** `?street=turn` (from a feedback link) starts the runout on that street,
 * once: the param is then dropped so the next runout starts on the flop. */
function linkedStreet(): number {
  const url = new URL(window.location.href);
  const i = STREETS.indexOf(url.searchParams.get("street") as (typeof STREETS)[number]);
  if (url.searchParams.has("street")) {
    url.searchParams.delete("street");
    window.history.replaceState(null, "", url);
  }
  return Math.max(0, i);
}

function shuffled<T>(xs: T[]): T[] {
  const out = [...xs];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** "How many big blinds?" — on every street, BTN's hand groups come one at a
 * time (mixed order) and the player drags each into what it's worth from
 * here. The matrix starts grey and fills with money colors as groups are
 * answered, so each street ends as a map of where BTN's money goes. */
export function PriceScreen() {
  const router = useRouter();
  const [runout, setRunout] = useState<Runout>(() => buildRunout(0));
  const [phase, setPhase] = useState<Phase>("intro");
  const [streetIdx, setStreetIdx] = useState(0);
  const [placed, setPlaced] = useState<Partial<Record<PGroup, Bucket>>>({});
  /** This street's pieces in the order they're asked. */
  const [queue, setQueue] = useState<PricePiece[]>([]);
  /** Pieces answered wrong at least once, as "street:group". */
  const [missed, setMissed] = useState<Set<string>>(new Set());
  const [armed, setArmed] = useState<Bucket | null>(null);
  const [inspecting, setInspecting] = useState(false);
  const [shake, setShake] = useState(0);
  const [flying, setFlying] = useState<{ key: PGroup; bucket: Bucket; rect: DOMRect | null } | null>(null);
  const [pulse, setPulse] = useState<{ groups: PGroup[]; seq: number; color?: string } | null>(null);
  const [seq, setSeq] = useState(0);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const pulseSeq = useRef(0);
  const busy = useRef(false);
  const generation = useRef(0);
  const boxes = useRef<Partial<Record<Bucket, HTMLDivElement | null>>>({});
  const { toast, show: showToast } = useToast();

  // Opened from a feedback link (?runout=N&street=turn): skip the intro and go straight to that spot.
  useEffect(() => {
    if (new URLSearchParams(window.location.search).has("street")) start("new");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const box = (b: Bucket, tall = false) => (
    <BucketBox
      key={b}
      bucket={b}
      behind={st.behind}
      tall={tall}
      armed={armed === b}
      groups={PGROUP_ORDER.filter((g) => placed[g] === b)}
      boxRef={(el) => {
        boxes.current[b] = el;
      }}
    />
  );

  const st = runout.streets[streetIdx];
  const current = queue.find((p) => !placed[p.key]) ?? null;
  const done = queue.filter((p) => placed[p.key]).length;
  const prevSnap = streetIdx > 0 ? runout.streets[streetIdx - 1].snap : undefined;

  // Unanswered groups grey, the current one in its own color, answered ones in their money color.
  const palette: MatrixPalette = {
    order: PGROUP_ORDER,
    fill: (g) => {
      if (phase === "decide" && current?.key === g) return PGROUP_INFO[g as PGroup].color;
      const b = placed[g as PGroup];
      return b ? BUCKET_COLOR[b] : UNSEEN;
    },
  };

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

  /** A new card: show its story, then the obvious groups drop into their boxes. */
  function enterStreet(i: number, r: Runout = runout) {
    busy.current = true;
    const s = r.streets[i];
    setStreetIdx(i);
    setPlaced({});
    setQueue(shuffled(s.pieces));
    setFlying(null);
    setInspecting(false);
    setPulse(null);
    setSeq((n) => n + 1);
    setPhase("deal");
    later(() => {
      const auto: Partial<Record<PGroup, Bucket>> = {};
      for (const g of s.auto) auto[g] = s.answers[g]!.bucket;
      setPlaced(auto);
      pop(s.auto);
      tone(523, 0.08);
      setTimeout(() => tone(659, 0.12), 80);
    }, 900);
    later(() => {
      setPhase("decide");
      busy.current = false;
    }, 2000);
  }

  function start(which: "new" | "same") {
    generation.current += 1;
    const r = which === "new" ? buildRunout(pickRunout(runout.index)) : runout;
    setRunout(r);
    setMissed(new Set());
    enterStreet(which === "new" ? linkedStreet() : 0, r);
  }

  function zoneAt(x: number, y: number): Bucket | null {
    for (const b of BUCKETS) {
      const r = boxes.current[b]?.getBoundingClientRect();
      if (r && x >= r.left - 4 && x <= r.right + 4 && y >= r.top - 6 && y <= r.bottom + 6) return b;
    }
    return null;
  }

  function handleDrop(p: PricePiece, b: Bucket) {
    if (busy.current || placed[p.key]) return;
    if (b !== p.answer.bucket) {
      // Never reveal the box: only whether the group is worth more or less.
      const more = BUCKET_RANK[p.answer.bucket] > BUCKET_RANK[b];
      showToast(more ? "Not quite. It's worth more" : "Not quite. It's worth less", false);
      badSound();
      buzz([30, 40, 30]);
      setShake((n) => n + 1);
      setMissed((m) => new Set(m).add(`${st.street}:${p.key}`));
      return;
    }
    busy.current = true;
    showToast(`Perfect · ${p.label}: ${bucketShort(b)}`, true);
    goodSound();
    buzz(15);
    setFlying({ key: p.key, bucket: b, rect: boxes.current[b]?.getBoundingClientRect() ?? null });
    pop([p.key], BUCKET_COLOR[b]);
    const next = { ...placed, [p.key]: b };
    // Let the piece land before the next one appears.
    later(() => {
      setPlaced(next);
      setFlying(null);
      setShake(0);
      if (queue.every((q) => next[q.key])) {
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
        }, 500);
      } else {
        busy.current = false;
      }
    }, 380);
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
              BTN opened, BB called, 100bb deep. On every street your hand groups come one at a time: drag each into what it&apos;s worth from here, if the
              rest of the board bricks. BB calls every bet.
            </p>
          </div>
          <div className="flex flex-col gap-1.5 rounded-2xl p-3 text-[13px]" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
            <Row label="Board" text={`A♣ 7♦ 2♠ · ${RUNOUTS.length} runouts`} />
            <Row label="Boxes" text="Bluffs · Showdown · +5 · +15 · +40 · All-in" />
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
          <div className="flex flex-shrink-0 flex-col gap-1 rounded-xl p-1.5" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
            {/* Shrinks on short phones so the boxes always fit below it. */}
            <div className="mx-auto w-full" style={{ maxWidth: "max(220px, calc(100dvh - 400px))" }}>
              <LineMatrix snap={st.snap} prev={prevSnap} seq={seq} palette={palette} pulse={pulse} />
            </div>
            <MoneyLegend />
          </div>

          <div className="relative mt-0.5 flex min-h-[236px] flex-1 flex-col gap-1.5 overflow-hidden rounded-2xl p-1.5" style={{ border: "1px dashed var(--line)", touchAction: "none" }}>
            {inspecting && current ? (
              <InspectPanel piece={{ ...current, label: current.name, desc: current.label }} onBack={() => setInspecting(false)} backLabel="Back" />
            ) : (
              <>
                {/* Money boxes across the top; Potential bluffs down the left side, Showdown value down the right. */}
                <div className="grid flex-shrink-0 grid-cols-4 gap-1" data-testid="buckets">
                  {MONEY_BUCKETS.map((b) => box(b))}
                </div>

                <div className="flex min-h-0 flex-1 gap-1.5">
                  {box("bluff", true)}
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
                  {phase === "decide" && current && (
                    <div className="flex flex-col items-center gap-1" data-testid="sort-row">
                      <span className="text-[10.5px] font-semibold uppercase tracking-[0.08em]" style={{ color: "var(--muted)" }} data-testid="piece-count">
                        {done + 1} of {queue.length}
                      </span>
                      <SortPiece<Bucket>
                        key={`${st.street}-${current.key}`}
                        piece={current}
                        caption={`${current.pct}% of the range · tap to see`}
                        delay={0}
                        zoneAt={zoneAt}
                        flyRect={flying?.key === current.key ? flying.rect : null}
                        onDrop={(b) => handleDrop(current, b)}
                        onArm={setArmed}
                        onHold={() => {}}
                        onInspect={() => setInspecting(true)}
                        shakeSeq={shake}
                        flyTo={flying?.key === current.key ? flying.bucket : null}
                        disabled={!!flying}
                      />
                      <span className="text-center text-[10.5px] leading-tight" style={{ color: "var(--muted)" }}>
                        What is it worth from here?
                      </span>
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
                  {box("sd", true)}
                </div>
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
        pageUrl={`/drills/postflop/price?runout=${runout.index}&street=${st.street}`}
      />
    </Shell>
  );
}

/** One box. Lights up while the piece hovers over it; holds a chip for
 * every group placed in it. */
function BucketBox({
  bucket,
  behind,
  tall = false,
  armed,
  groups,
  boxRef,
}: {
  bucket: Bucket;
  behind: number;
  /** A side box: full height, narrow, label in the middle. */
  tall?: boolean;
  armed: boolean;
  groups: PGroup[];
  boxRef: (el: HTMLDivElement | null) => void;
}) {
  const color = BUCKET_COLOR[bucket];
  const { big, small } = bucketLabel(bucket, behind);
  const word = bucket === "bluff" || bucket === "sd";
  return (
    <div
      ref={boxRef}
      className={`flex min-w-0 flex-shrink-0 flex-col items-center gap-0.5 rounded-xl border-[1.5px] transition-[transform,background] duration-150 ${
        tall ? "w-[78px] justify-center px-1 text-center" : "h-[54px] justify-start pt-1.5"
      }`}
      style={{
        borderColor: color,
        background: armed ? color : `color-mix(in srgb, ${color} 14%, transparent)`,
        transform: armed ? "scale(1.05)" : undefined,
        boxShadow: bucket === "all" ? `0 0 12px color-mix(in srgb, ${color} 35%, transparent)` : undefined,
      }}
      data-testid={`bucket-${bucket}`}
    >
      <b
        className={`font-[family-name:var(--font-display)] leading-none ${word ? "text-[12.5px]" : bucket === "all" ? "text-[14px]" : "text-[17px]"}`}
        style={{ color: armed ? "#10161B" : color, fontVariantNumeric: "tabular-nums" }}
      >
        {big}
      </b>
      <span className={`leading-none ${word ? "text-[11px] font-semibold" : "text-[9.5px]"}`} style={{ color: armed ? "#10161B" : word ? color : "var(--muted)" }}>
        {small}
      </span>
      <div className="mt-0.5 flex flex-wrap justify-center gap-[3px] px-1">
        {groups.map((g) => (
          <i
            key={g}
            className="inline-block h-[8px] w-[8px] rounded-[2px]"
            style={{ background: PGROUP_INFO[g].color, boxShadow: "inset 0 1px 0 rgba(255,255,255,.35)", animation: "ldDeal 380ms cubic-bezier(.3,1.4,.5,1) both" }}
          />
        ))}
      </div>
    </div>
  );
}

/** The matrix shows money, not groups: one swatch per box, plus "not asked yet". */
function MoneyLegend() {
  return (
    <div className="flex flex-wrap justify-center gap-x-2 gap-y-0.5 text-[10px]" style={{ color: "var(--muted)" }} data-testid="price-legend">
      <span className="flex items-center gap-1">
        <i className="inline-block h-[8px] w-[8px] rounded-[2px]" style={{ background: UNSEEN, outline: "1px solid var(--line)" }} />
        Not yet
      </span>
      {BUCKETS.map((b) => (
        <span key={b} className="flex items-center gap-1">
          <i className="inline-block h-[8px] w-[8px] rounded-[2px]" style={{ background: BUCKET_COLOR[b] }} />
          {b === "bluff" ? "Bluffs" : b === "sd" ? "Showdown" : b === "all" ? "All-in" : `+${b}`}
        </span>
      ))}
    </div>
  );
}

/** End of the runout: every street's groups with what they were worth, so
 * the player sees what each card did. Tap a chip for the reason. */
function Summary({ runout, missed, onNext, onReplay }: { runout: Runout; missed: Set<string>; onNext: () => void; onReplay: () => void }) {
  const [picked, setPicked] = useState<{ street: number; g: PGroup } | null>(null);
  const asked = runout.streets.reduce((n, s) => n + s.pieces.length, 0);
  const firstTry = asked - missed.size;
  const pickedSt = picked ? runout.streets[picked.street] : undefined;
  const pickedAns = picked ? pickedSt?.answers[picked.g] : undefined;

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-2 rounded-2xl p-3" style={{ background: "var(--panel)", border: "1px solid var(--line)", animation: "rdIn 220ms ease-out both" }} data-testid="price-summary">
      <div className="flex items-baseline justify-between gap-2">
        <b className="font-[family-name:var(--font-display)] text-[16px]">What each group was worth</b>
        <span className="text-[12.5px]" style={{ color: "var(--muted)" }}>
          <b style={{ color: "var(--call)" }}>
            {firstTry}/{asked}
          </b>{" "}
          first try
        </span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto">
        {runout.streets.map((s, i) => (
          <div key={s.street} className="flex flex-col gap-1">
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.06em]" style={{ color: "var(--muted)" }}>
              {s.street}
              {s.street !== "flop" && ` · ${s.story.split(" · ")[0]} · ${s.kind}`}
            </span>
            <div className="flex flex-wrap gap-1">
              {PGROUP_ORDER.filter((g) => s.answers[g]).map((g) => {
                const ans = s.answers[g]!;
                const color = BUCKET_COLOR[ans.bucket];
                const on = picked?.street === i && picked.g === g;
                const wrong = missed.has(`${s.street}:${g}`);
                return (
                  <button
                    key={g}
                    type="button"
                    className="relative flex cursor-pointer items-center gap-1 rounded-md border px-1.5 py-0.5 text-[11.5px]"
                    style={{ borderColor: on ? "var(--foreground)" : color, background: `color-mix(in srgb, ${color} ${ans.auto ? 8 : 20}%, transparent)`, opacity: ans.auto ? 0.65 : 1 }}
                    onClick={() => setPicked({ street: i, g })}
                  >
                    <i className="inline-block h-[8px] w-[8px] rounded-[2px]" style={{ background: PGROUP_INFO[g].color }} />
                    {s.labels[g]}
                    <b className="font-[family-name:var(--font-display)]" style={{ color }}>
                      {ans.bucket === "bluff" ? "Bluff" : ans.bucket === "sd" ? "SD" : ans.bucket === "all" ? "All-in" : `+${ans.bucket}`}
                    </b>
                    {wrong && <span style={{ color: "var(--raise)" }}>✕</span>}
                    {!ans.sure && <span className="inline-block h-[5px] w-[5px] rounded-full" style={{ background: "var(--mix)" }} />}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <p className="m-0 min-h-[34px] text-[12px] leading-snug" style={{ color: "var(--muted)" }} data-testid="summary-why">
        {pickedAns && pickedSt ? (
          <>
            <b style={{ color: PGROUP_INFO[picked!.g].color }}>{pickedSt.labels[picked!.g]}</b> on the {pickedSt.street}: {pickedAns.why}
            {!pickedAns.sure && <span style={{ color: "var(--mix)" }}> (draft, Uri to check)</span>}
          </>
        ) : (
          <>Tap a group to see why. A gold dot marks a draft answer for Uri to check. SD = showdown value.</>
        )}
      </p>

      <div className="flex gap-2">
        <PrimaryButton onClick={onNext}>Next runout</PrimaryButton>
        <button type="button" className="h-[44px] flex-1 cursor-pointer rounded-xl border text-[13px] font-semibold" style={{ borderColor: "var(--line)" }} onClick={onReplay}>
          Replay
        </button>
      </div>
    </div>
  );
}
