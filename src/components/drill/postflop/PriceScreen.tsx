"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { FeedbackSheet } from "@/components/drill/FeedbackSheet";
import type { FeedbackContext } from "@/lib/drill/feedback";
import { Toast, useToast } from "@/components/drill/Toast";
import { badSound, buzz, goodSound, tone } from "@/lib/drill/sound";
import { rankChar, STREETS, type Card } from "@/lib/drill/postflop/line-demo";
import {
  BUCKET_COLOR,
  BUCKET_RANK,
  BUCKETS,
  bucketShort,
  bucketTiny,
  buildRunout,
  PGROUP_INFO,
  PGROUP_ORDER,
  BOARDS,
  RUNOUTS,
  type Bucket,
  type PGroup,
  type PricePiece,
  type Runout,
  type TurnBet,
} from "@/lib/drill/postflop/price-hands";
import { LineMatrix, type MatrixPalette } from "./LineMatrix";
import { MoneyPaddles } from "./MoneyPaddles";
import { SortPiece } from "./SortPiece";
import { BoardCard, IconButton, InspectPanel, PrimaryButton, Row, Shell, StreetTrack } from "./drill-ui";

/** Matrix color of a group nobody has answered yet on this street. */
const UNSEEN = "#46525C";

/** "deal" = a card just came: its story shows and the obvious groups place
 * themselves. "advancing" = every group placed: BTN bets, BB calls, next card. */
type Phase = "intro" | "deal" | "decide" | "advancing" | "final";

/** A random runout of the chosen board (any board when null), never the
 * same one twice in a row. `?runout=N` forces one (feedback links, testing). */
function pickRunout(current: number, board: string | null): number {
  const q = new URLSearchParams(window.location.search).get("runout");
  const forced = Number(q);
  if (q !== null && Number.isInteger(forced) && forced >= 0 && forced < RUNOUTS.length) return forced;
  const pool = RUNOUTS.map((r, i) => ({ r, i })).filter(({ r }) => !board || r.board === board).map(({ i }) => i);
  if (pool.length < 2) return pool[0] ?? 0;
  let i = current;
  while (i === current) i = pool[Math.floor(Math.random() * pool.length)];
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

const SUIT_GLYPH: Record<string, string> = { s: "♠", h: "♥", d: "♦", c: "♣" };
const cardText = (c: Card) => `${rankChar(c.r)}${SUIT_GLYPH[c.s]}`;

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
  /** The board picked on the start screen (null = mix every board). */
  const [board, setBoard] = useState<string | null>(null);
  const [streetIdx, setStreetIdx] = useState(0);
  const [placed, setPlaced] = useState<Partial<Record<PGroup, Bucket>>>({});
  /** This street's pieces in the order they're asked. */
  const [queue, setQueue] = useState<PricePiece[]>([]);
  /** Pieces answered wrong at least once, as "street:group". */
  const [missed, setMissed] = useState<Set<string>>(new Set());
  /** The last wrong box tried for each group on this street (saved with feedback notes). */
  const [tries, setTries] = useState<Partial<Record<PGroup, Bucket>>>({});
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
  /** True while a piece is being dragged (the paddles breathe). */
  const [holding, setHolding] = useState(false);
  /** Bumped per paddle when something lands in it (replays its flash). */
  const [flash, setFlash] = useState<Partial<Record<Bucket, number>>>({});
  const zoneRef = useRef<HTMLDivElement>(null);
  const [zone, setZone] = useState({ w: 328, h: 236 });
  const { toast, show: showToast } = useToast();

  /** The drop area exists only while playing a street (not on the intro or the summary). */
  const zoneShown = phase !== "intro" && phase !== "final";
  // The paddles size themselves from the drop area, so measure it (it changes with the phone).
  useEffect(() => {
    const el = zoneRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setZone({ w: e.contentRect.width, h: e.contentRect.height }));
    ro.observe(el);
    return () => ro.disconnect();
  }, [zoneShown]);

  const registerPaddle = (b: Bucket, el: HTMLDivElement | null) => {
    boxes.current[b] = el;
  };
  const flashPaddles = (bs: Bucket[]) => setFlash((f) => Object.fromEntries([...Object.entries(f), ...bs.map((b) => [b, (f[b] ?? 0) + 1])]));

  // Opened from a feedback link (?runout=N&street=turn): skip the intro and go straight to that spot.
  useEffect(() => {
    if (new URLSearchParams(window.location.search).has("street")) start("new");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  // What a feedback note written right now is about: the spot, and the group on screen.
  const focusPiece = phase === "decide" ? current : null;
  const feedbackContext: FeedbackContext = {
    drill: "How many big blinds",
    spot: `${st.board.map(cardText).join(" ")} · ${st.street[0].toUpperCase() + st.street.slice(1)}${st.kind === "flop" ? "" : ` (${st.kind})`}`,
    focus: focusPiece ? `${focusPiece.label} · ${focusPiece.name}` : phase === "final" ? "End-of-hand summary" : undefined,
    app: focusPiece ? bucketShort(focusPiece.answer.bucket) : undefined,
    player: focusPiece && tries[focusPiece.key] ? `${bucketShort(tries[focusPiece.key]!)} (wrong)` : undefined,
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
    setTries({});
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
      flashPaddles([...new Set(s.auto.map((g) => s.answers[g]!.bucket))]);
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
    const r = which === "new" ? buildRunout(pickRunout(runout.index, board)) : runout;
    setRunout(r);
    setMissed(new Set());
    enterStreet(which === "new" ? linkedStreet() : 0, r);
  }

  function zoneAt(x: number, y: number): Bucket | null {
    for (const b of BUCKETS) {
      const r = boxes.current[b]?.getBoundingClientRect();
      if (r && x >= r.left - 10 && x <= r.right + 10 && y >= r.top - 10 && y <= r.bottom + 10) return b;
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
      setTries((t) => ({ ...t, [p.key]: b }));
      return;
    }
    busy.current = true;
    showToast(`Perfect · ${p.label}: ${bucketShort(b)}`, true);
    goodSound();
    buzz(15);
    setFlying({ key: p.key, bucket: b, rect: boxes.current[b]?.getBoundingClientRect() ?? null });
    pop([p.key], BUCKET_COLOR[b]);
    flashPaddles([b]);
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
            <Row label="Boxes" text="Bluffs · Showdown · 5% · 20% · 50% · 100%" />
            <Row label="Flop bet" text="Small, BB calls" />
            <Row label="Turn bet" text="Overbet (polar) on bricks · 66% on wet cards" />
          </div>
          <div className="grid grid-cols-2 gap-1.5" role="radiogroup" aria-label="Board" data-testid="board-picker">
            <b className="col-span-2 font-[family-name:var(--font-display)] text-[13px] tracking-[0.06em] uppercase" style={{ color: "var(--muted)" }}>
              Board · {BOARDS.length} flops, 6 runouts each
            </b>
            {[{ key: null as string | null, title: "Mix them all", sub: `Any board · ${RUNOUTS.length} runouts` }, ...BOARDS.map((b) => ({ key: b.name as string | null, title: b.flop.join(" "), sub: b.blurb }))].map((o) => {
              const on = board === o.key;
              return (
                <button
                  key={o.key ?? "mix"}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  className={`flex cursor-pointer flex-col items-start gap-0.5 rounded-xl border px-2.5 py-2 text-left transition-transform active:scale-[0.98] ${o.key ? "" : "col-span-2"}`}
                  style={{ borderColor: on ? "var(--mix)" : "var(--line)", background: on ? "var(--panel-2)" : "var(--panel)" }}
                  onClick={() => setBoard(o.key)}
                  data-testid={`board-${o.key ?? "mix"}`}
                >
                  <b className="font-[family-name:var(--font-display)] text-[15px]" style={{ color: on ? "var(--mix)" : "var(--foreground)" }}>
                    {o.title}
                  </b>
                  <span className="text-[11px] leading-tight" style={{ color: "var(--muted)" }}>
                    {o.sub}
                  </span>
                </button>
              );
            })}
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

      <div className="flex flex-shrink-0 flex-col gap-1.5 rounded-[14px] p-2" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
        <div className="flex items-center justify-between gap-2">
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
        {phase !== "final" && <BetLine street={st.street} turnBet={st.turnBet} />}
      </div>

      {phase === "final" ? (
        <Summary runout={runout} missed={missed} onNext={() => start("new")} onReplay={() => start("same")} />
      ) : (
        <>
          <div className="flex flex-shrink-0 flex-col gap-1 rounded-xl p-1.5" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
            {/* Shrinks on short phones so the boxes always fit below it. */}
            <div className="mx-auto w-full" style={{ maxWidth: "max(220px, calc(100dvh - 476px))" }}>
              <LineMatrix snap={st.snap} prev={prevSnap} seq={seq} palette={palette} pulse={pulse} />
            </div>
            <MoneyLegend />
          </div>

          {/* The drop area: neon paddles around the frame, the piece floating in the middle. */}
          <div ref={zoneRef} className="relative mt-0.5 min-h-[236px] flex-1" style={{ touchAction: "none" }} data-testid="buckets">
            {inspecting && current ? (
              <div className="absolute inset-0 overflow-hidden rounded-2xl" style={{ border: "1px solid var(--line)", background: "var(--panel)" }}>
                <InspectPanel piece={{ ...current, label: current.name, desc: current.label }} onBack={() => setInspecting(false)} backLabel="Back" />
              </div>
            ) : (
              <>
                <MoneyPaddles w={zone.w} h={zone.h} armed={armed} holding={holding} flash={flash} hitRef={registerPaddle} />

                <div className="absolute inset-y-2 left-[64px] right-[64px] flex items-center justify-center">
                  <Toast toast={toast} />
                  {phase === "deal" && (
                    <div className="flex flex-col items-center gap-1 px-1 text-center" style={{ animation: "rdIn 220ms ease-out both" }} data-testid="story">
                      <b className="font-[family-name:var(--font-display)] text-[17px]" style={{ animation: "ldBanner 520ms cubic-bezier(.3,1.4,.5,1) both" }}>
                        {st.street === "flop" ? "The flop" : st.story.split(" · ")[0]}
                      </b>
                      <span className="text-[12.5px] leading-snug" style={{ color: "var(--muted)" }}>
                        {st.street === "flop" ? st.story : st.story.split(" · ").slice(1).join(" · ")}
                      </span>
                    </div>
                  )}
                  {phase === "decide" && current && (
                    <div className="flex flex-col items-center" data-testid="sort-row">
                      <SortPiece<Bucket>
                        key={`${st.street}-${current.key}`}
                        piece={current}
                        caption={`${current.pct}% · tap to see`}
                        delay={0}
                        zoneAt={zoneAt}
                        flyRect={flying?.key === current.key ? flying.rect : null}
                        onDrop={(b) => handleDrop(current, b)}
                        onArm={setArmed}
                        onHold={setHolding}
                        onInspect={() => setInspecting(true)}
                        shakeSeq={shake}
                        flyTo={flying?.key === current.key ? flying.bucket : null}
                        disabled={!!flying}
                      />
                    </div>
                  )}
                  {phase === "advancing" && (
                    <div className="flex flex-col items-center gap-1 text-center" style={{ animation: "rdIn 220ms ease-out both" }} data-testid="advancing">
                      <b className="font-[family-name:var(--font-display)] text-[19px]" style={{ color: "var(--mix)", animation: "ldBanner 520ms cubic-bezier(.3,1.4,.5,1) both" }}>
                        {st.street === "flop" ? "BTN bets small" : st.turnBet === "overbet" ? "BTN overbets · polar" : "BTN bets 66%"} · BB calls
                      </b>
                      <span className="text-[12.5px]" style={{ color: "var(--muted)" }}>
                        Pot {runout.streets[streetIdx + 1]?.pot}bb on the {STREETS[streetIdx + 1]}
                      </span>
                    </div>
                  )}
                </div>

                {phase === "decide" && current && (
                  <span
                    className="absolute bottom-2.5 left-1/2 -translate-x-1/2 font-[family-name:var(--font-display)] text-[12px] font-semibold"
                    style={{ color: "var(--muted)", fontVariantNumeric: "tabular-nums" }}
                    data-testid="piece-count"
                  >
                    {done + 1} / {queue.length}
                  </span>
                )}
              </>
            )}
          </div>
        </>
      )}

      <FeedbackSheet
        context={feedbackContext}
        hideAppAnswer={phase === "decide" && !!current && !placed[current.key]}
        open={feedbackOpen}
        onClose={() => setFeedbackOpen(false)}
        drillTag={`postflop:price:${runout.id}:${st.street}`}
        drillLabel={`How many big blinds · ${runout.id} · ${st.street}`}
        pageUrl={`/drills/postflop/price?runout=${runout.index}&street=${st.street}`}
      />
    </Shell>
  );
}

/** How BTN bets on this street (or bet the turn, on the river), always on
 * screen: the turn size decides which groups still want money. */
function BetLine({ street, turnBet }: { street: string; turnBet: TurnBet }) {
  const polar = turnBet === "overbet";
  const color = street === "flop" ? "#9DB4C4" : polar ? "#F2564B" : "#22C4A1";
  const [tag, note] =
    street === "flop"
      ? ["Flop: small bet", "The whole range bets small"]
      : street === "turn"
        ? polar
          ? ["Turn: OVERBET · polar", "Only the best hands + bluffs bet"]
          : ["Turn: 66% bet", "Not polar: medium hands can add money"]
        : polar
          ? ["Turn was an overbet · polar", "Checked hands just show down"]
          : ["Turn was a 66% bet", "BB called: smaller pot, more room"];
  return (
    <div className="flex items-center gap-2" data-testid="bet-line">
      <span
        className="flex-shrink-0 rounded-full px-2 py-0.5 font-[family-name:var(--font-display)] text-[11px] font-bold tracking-[0.04em]"
        style={{ background: `color-mix(in srgb, ${color} 22%, transparent)`, color, border: `1px solid ${color}` }}
      >
        {tag}
      </span>
      <span className="min-w-0 truncate text-[11px]" style={{ color: "var(--muted)" }}>
        {note}
      </span>
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
          {bucketTiny(b)}
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
                      {ans.bucket === "sd" ? "SD" : bucketTiny(ans.bucket)}
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
