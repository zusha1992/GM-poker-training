"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { FeedbackSheet } from "@/components/drill/FeedbackSheet";
import type { FeedbackContext } from "@/lib/drill/feedback";
import { Toast, useToast } from "@/components/drill/Toast";
import { badSound, buzz, goodSound, tone } from "@/lib/drill/sound";
import { rankChar, type Card } from "@/lib/drill/postflop/line-demo";
import { BUCKET_COLOR, BUCKET_RANK, BUCKETS, bucketShort, bucketTiny, type Bucket } from "@/lib/drill/postflop/price-hands";
import { buildFlopSpot, FLOP_BOARDS, spotsOf, type FlopPiece, type FlopSpot, type Street } from "@/lib/drill/postflop/flop-drill";
import { LineMatrix, type MatrixPalette } from "./LineMatrix";
import { MoneyPaddles } from "./MoneyPaddles";
import { pieTarget, SortPiece } from "./SortPiece";
import { HandFan } from "./HandFan";
import { FlopTrailer } from "./FlopTrailer";
import { IconButton, InspectPanel, PrimaryButton, Row, Shell, SUIT_COLOR } from "./drill-ui";

/** The matrix shows the range in one quiet color; groups the player placed take their box's color. */
const RANGE = "#46525C";
type Phase = "intro" | "decide" | "final";

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

/** A random spot of this street (of the picked flop when set), never the same one twice in a row. */
function pickBoard(street: Street, current: string | null, picked: string | null): string {
  const all = spotsOf(street).filter((s) => !picked || s.flop === picked);
  const pool = all.length > 1 ? all.filter((s) => s.name !== current) : all;
  return pool[Math.floor(Math.random() * pool.length)].name;
}

const TITLE: Record<Street, string> = { flop: "Flop", turn: "Turn", river: "River" };

/** "Flop: how many big blinds?" (Noam & Uri 2026-11-10): one flop, BTN's made
 * hands in equity groups, one at a time: drag each into how many big blinds
 * it's worth by the river. */
export function FlopScreen({ street = "flop" }: { street?: Street }) {
  const router = useRouter();
  const [spot, setSpot] = useState<FlopSpot>(() => buildFlopSpot(spotsOf(street)[0].name));
  const [phase, setPhase] = useState<Phase>("intro");
  const [picked, setPicked] = useState<string | null>(null);
  const [placed, setPlaced] = useState<Partial<Record<string, Bucket>>>({});
  const [queue, setQueue] = useState<FlopPiece[]>([]);
  const [missed, setMissed] = useState<Set<string>>(new Set());
  const [tries, setTries] = useState<Partial<Record<string, Bucket>>>({});
  const [armed, setArmed] = useState<Bucket | null>(null);
  const [inspecting, setInspecting] = useState(false);
  const [shake, setShake] = useState(0);
  const [flying, setFlying] = useState<{ key: string; bucket: Bucket; rect: DOMRect | null } | null>(null);
  const [seq, setSeq] = useState(0);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const busy = useRef(false);
  const generation = useRef(0);
  const boxes = useRef<Partial<Record<Bucket, HTMLDivElement | null>>>({});
  const [holding, setHolding] = useState(false);
  const [flash, setFlash] = useState<Partial<Record<Bucket, number>>>({});
  const zoneRef = useRef<HTMLDivElement>(null);
  const [zone, setZone] = useState({ w: 328, h: 236 });
  const { toast, show: showToast } = useToast();
  /** True while the opening scene (FlopTrailer) plays before the board. */
  const [trailer, setTrailer] = useState(false);

  const zoneShown = phase === "decide" && !trailer;
  useEffect(() => {
    const el = zoneRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setZone({ w: e.contentRect.width, h: e.contentRect.height }));
    ro.observe(el);
    return () => ro.disconnect();
  }, [zoneShown]);

  // Opened from a feedback link (?board=A72): skip the intro, straight to that board.
  useEffect(() => {
    const b = new URLSearchParams(window.location.search).get("board");
    if (b && spotsOf(street).some((x) => x.name === b)) start(b);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const current = trailer ? null : (queue.find((p) => !placed[p.key]) ?? null);
  const done = queue.filter((p) => placed[p.key]).length;

  const palette: MatrixPalette = {
    order: spot.order,
    fill: (g) => {
      const b = placed[g];
      return b ? BUCKET_COLOR[b] : RANGE;
    },
  };

  const focusPiece = phase === "decide" ? current : null;
  const feedbackContext: FeedbackContext = {
    drill: `${TITLE[street]}: how many big blinds`,
    spot: `${spot.board.map(cardText).join(" ")} · ${TITLE[street]}`,
    focus: focusPiece ? `${focusPiece.label} (${focusPiece.hands})` : phase === "final" ? "End-of-board summary" : undefined,
    app: focusPiece ? bucketShort(focusPiece.answer.bucket) : undefined,
    player: focusPiece && tries[focusPiece.key] ? `${bucketShort(tries[focusPiece.key]!)} (wrong)` : undefined,
  };

  function later(fn: () => void, ms: number) {
    const gen = generation.current;
    setTimeout(() => {
      if (gen === generation.current) fn();
    }, ms);
  }

  /** `name` = this board; otherwise the picked board, or a random one. */
  function start(name?: string) {
    generation.current += 1;
    const s = buildFlopSpot(name ?? pickBoard(street, spot.name, picked));
    setSpot(s);
    setMissed(new Set());
    setPlaced({});
    setTries({});
    setQueue(shuffled(s.pieces));
    setFlying(null);
    setInspecting(false);
    setSeq((n) => n + 1);
    setPhase("decide");
    busy.current = false;
    setTrailer(true);
  }

  /** Noam 2026-11-11: the opening scene is over (or skipped): the board, then the first group. */
  function endTrailer() {
    setTrailer(false);
    tone(523, 0.08);
    setTimeout(() => tone(659, 0.12), 80);
  }

  function zoneAt(x: number, y: number): Bucket | null {
    return pieTarget(zoneRef.current?.getBoundingClientRect(), BUCKETS.map((b) => [b, boxes.current[b]?.getBoundingClientRect()]), x, y);
  }
  const rectOf = (b: Bucket) => boxes.current[b]?.getBoundingClientRect() ?? null;
  function arm(b: Bucket | null) {
    setArmed(b);
    if (b) buzz(8);
  }

  function handleDrop(p: FlopPiece, b: Bucket) {
    if (busy.current || placed[p.key]) return;
    if (b !== p.answer.bucket) {
      // Never reveal the box: only whether the group is worth more or less.
      const more = BUCKET_RANK[p.answer.bucket] > BUCKET_RANK[b];
      showToast(more ? "Not quite. It's worth more" : "Not quite. It's worth less", false);
      badSound();
      buzz([30, 40, 30]);
      setShake((n) => n + 1);
      setMissed((m) => new Set(m).add(p.key));
      setTries((t) => ({ ...t, [p.key]: b }));
      return;
    }
    busy.current = true;
    showToast(`Perfect · ${p.label}: ${bucketShort(b)}`, true);
    goodSound();
    buzz(15);
    setFlying({ key: p.key, bucket: b, rect: boxes.current[b]?.getBoundingClientRect() ?? null });
    setFlash((f) => ({ ...f, [b]: (f[b] ?? 0) + 1 }));
    const next = { ...placed, [p.key]: b };
    later(() => {
      setPlaced(next);
      setFlying(null);
      setShake(0);
      if (queue.every((q) => next[q.key])) {
        later(() => {
          tone(784, 0.1);
          setTimeout(() => tone(1046, 0.18), 90);
          setPhase("final");
          busy.current = false;
        }, 500);
      } else {
        busy.current = false;
      }
    }, 380);
  }

  if (phase !== "intro" && trailer) return <FlopTrailer key={seq} board={spot.board} street={street} turnBet={spot.turnBet} onDone={endTrailer} />;

  if (phase === "intro") {
    return (
      <Shell>
        <div className="flex h-full flex-col gap-4 overflow-y-auto py-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="inline-block rounded-full px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em]" style={{ color: "#2B1C02", background: "var(--mix)" }}>
              Prototype · equity answers
            </span>
            <b className="font-[family-name:var(--font-brand)] text-[26px] font-bold">{TITLE[street]}: how many big blinds?</b>
            <p className="m-0 max-w-[330px] text-[13.5px] leading-[1.5]" style={{ color: "var(--muted)" }}>
              BTN opened, BB called, 100bb deep.{street === "turn" && " You bet the flop small (1.8bb), BB called."}
              {street === "river" && " You bet the flop small and bet the turn, BB called both: BB's range is strong now."} Your made hands come in groups, one at a time: drag each into how many big blinds{" "}
              {street === "river" ? "it still wants to put in" : "it’s worth by the river"}. {street === "river" ? "Busted draws and trash aren’t asked." : "Draws and trash aren’t asked."}
            </p>
          </div>
          <div className="flex flex-col gap-1.5 rounded-2xl p-3 text-[13px]" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
            <Row label="Boxes" text="Pot is too big · 0–5 · 5–15 · 15–25 · 25–50 · 50–100bb" />
            <Row label="Groups" text="Ace-high and better, by equity" />
          </div>
          <div className="grid grid-cols-2 gap-1.5" role="radiogroup" aria-label="Board" data-testid="board-picker">
            <b className="col-span-2 font-[family-name:var(--font-display)] text-[13px] tracking-[0.06em] uppercase" style={{ color: "var(--muted)" }}>
              {street === "river" ? `Flop · ${FLOP_BOARDS.length} flops, 3 turns × 2 rivers each` : street === "turn" ? `Flop · ${FLOP_BOARDS.length} flops, 3 turns each` : `Board · ${FLOP_BOARDS.length} flops`}
            </b>
            {[{ key: null as string | null, title: "Mix them all", sub: street === "river" ? "A random flop, turn and river each time" : street === "turn" ? "A random flop and turn each time" : "A random flop each time" }, ...FLOP_BOARDS.map((b) => ({ key: b.name as string | null, title: b.flop.join(" "), sub: b.blurb }))].map((o) => {
              const on = picked === o.key;
              return (
                <button
                  key={o.key ?? "mix"}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  className={`flex cursor-pointer flex-col items-start gap-0.5 rounded-xl border px-2.5 py-2 text-left transition-transform active:scale-[0.98] ${o.key ? "" : "col-span-2"}`}
                  style={{ borderColor: on ? "var(--mix)" : "var(--line)", background: on ? "var(--panel-2)" : "var(--panel)" }}
                  onClick={() => setPicked(o.key)}
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
          <button type="button" className="h-[52px] cursor-pointer rounded-2xl border-0 text-[16px] font-bold active:scale-[0.98]" style={{ background: "var(--mix)", color: "#2B1C02" }} onClick={() => start()} data-testid="start">
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
        <b className="min-w-0 flex-1 truncate text-center font-[family-name:var(--font-brand)] text-[16px] font-bold">
          {TITLE[street]}{" "}
          <span className="font-semibold" style={{ color: "var(--gold)" }} data-testid="board-id">
            · {spot.name}
          </span>
        </b>
        <IconButton label="Start over" onClick={() => start(spot.name)}>
          <path d="M20 12a8 8 0 1 1-2.3-5.6" />
          <path d="M20 4v5h-5" />
        </IconButton>
        <IconButton label="Feedback" onClick={() => setFeedbackOpen(true)}>
          <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-.9L3 21l1.4-4.5A8.38 8.38 0 0 1 3 11.5 8.5 8.5 0 0 1 11.5 3a8.38 8.38 0 0 1 9.5 8.5z" />
        </IconButton>
      </div>

      {phase === "final" ? (
        <>
          <BigBoard board={spot.board} dealt small />
          <Summary spot={spot} missed={missed} onNext={() => start(pickBoard(street, spot.name, null))} onReplay={() => start(spot.name)} />
        </>
      ) : (
        <>
          {/* Noam 2026-11-11: the matrix up top (it fills with each box's color), the big board under it, a compact box area. */}
          <div className="mx-auto w-full min-h-0 flex-shrink" style={{ maxWidth: "min(370px, max(170px, calc(100dvh - 450px)))" }}>
            <div className="rounded-xl p-1" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
              <LineMatrix snap={spot.snap} seq={seq} palette={palette} mini />
            </div>
          </div>

          <BigBoard board={spot.board} dealt />
          {/* Noam 2026-11-13: the pot in view, so the player sees each box against it. */}
          <div className="flex flex-shrink-0 items-center justify-center gap-2 text-[13px]" data-testid="pot-line" style={{ color: "var(--muted)" }}>
            <span className="whitespace-nowrap rounded-full px-2.5 py-0.5 font-bold" style={{ color: "var(--gold)", border: "1px solid color-mix(in srgb, var(--gold) 45%, transparent)" }}>
              Pot {spot.pot}bb
            </span>
            <span>
              {spot.street === "river" ? `flop and turn bets called` : spot.street === "turn" ? "after a 33% flop bet and call" : "single-raised pot"} · {spot.behind}bb behind
            </span>
          </div>

          <div ref={zoneRef} className="relative mt-auto flex-shrink-0" style={{ touchAction: "none", height: "clamp(236px, 37dvh, 310px)" }} data-testid="buckets">
            {inspecting && current ? (
              <div className="absolute inset-0 overflow-hidden rounded-2xl" style={{ border: "1px solid var(--line)", background: "var(--panel)" }}>
                <InspectPanel piece={{ ...current, desc: `${current.hands} · ${current.name}` }} onBack={() => setInspecting(false)} backLabel="Back" />
              </div>
            ) : (
              <>
                <MoneyPaddles w={zone.w} h={zone.h} armed={armed} holding={holding} flash={flash} hitRef={(b, el) => (boxes.current[b] = el)} />
                <div className="absolute inset-y-2 left-[64px] right-[64px] flex items-center justify-center">
                  <Toast toast={toast} />
                  {current && (
                    <div className="flex flex-col items-center" data-testid="sort-row">
                      <SortPiece<Bucket>
                        key={current.key}
                        piece={current}
                        caption={null}
                        visual={<HandFan cards={current.cards} color={current.color} open={holding} maxWidth={zone.w - 170} />}
                        delay={0}
                        zoneAt={zoneAt}
                        flyRect={flying?.key === current.key ? flying.rect : null}
                        onDrop={(b) => handleDrop(current, b)}
                        onArm={arm}
                        rectOf={rectOf}
                        onHold={setHolding}
                        onInspect={() => setInspecting(true)}
                        shakeSeq={shake}
                        flyTo={flying?.key === current.key ? flying.bucket : null}
                        disabled={!!flying}
                      />
                    </div>
                  )}
                </div>
                {current && (
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
        drillTag={`postflop:${street}:${spot.name}`}
        drillLabel={`${TITLE[street]}: how many bb · ${spot.name}`}
        pageUrl={`/drills/postflop/${street}?board=${spot.name}`}
      />
    </Shell>
  );
}

/** The flop, big and in the middle (Noam 2026-11-11). Before the deal: empty slots; then the cards flip in one by one. */
function BigBoard({ board, dealt, small = false }: { board: Card[]; dealt: boolean; small?: boolean }) {
  // Five cards on the river: a bit smaller, so the matrix keeps its room.
  const w = small ? 44 : board.length === 5 ? 52 : 62;
  return (
    <div className="flex flex-shrink-0 justify-center gap-2 py-1" data-testid="big-board">
      {board.map((c, i) => {
        const r = rankChar(c.r);
        const color = SUIT_COLOR[c.s];
        const size = { width: w, height: Math.round(w * 1.38) };
        if (!dealt) return <span key={i} className="rounded-[9px]" style={{ ...size, border: "1.5px dashed var(--line)" }} />;
        return (
          <span
            key={i}
            className="flex flex-col items-center justify-center rounded-[9px] font-[family-name:var(--font-display)] font-bold leading-none"
            style={{
              ...size,
              fontSize: small ? 20 : w < 62 ? 26 : 30,
              background: `linear-gradient(180deg, color-mix(in srgb, ${color} 82%, #ffffff) 0%, ${color} 55%)`,
              color: "#FFFFFF",
              border: "1px solid rgba(255,255,255,.25)",
              boxShadow: i > 2 && i === board.length - 1 ? "0 0 0 2px var(--gold), 0 3px 10px rgba(0,0,0,.35)" : "0 3px 10px rgba(0,0,0,.35)",
              animation: small ? undefined : "rdIn 160ms ease-out both",
            }}
            data-testid="board-card"
          >
            {r === "T" ? "10" : r}
            <em className="mt-0.5 not-italic" style={{ fontSize: small ? 16 : 24 }}>
              {SUIT_GLYPH[c.s]}
            </em>
          </span>
        );
      })}
    </div>
  );
}

/** End of the board: every group in its box, strongest first. Tap one for its equity. */
function Summary({ spot, missed, onNext, onReplay }: { spot: FlopSpot; missed: Set<string>; onNext: () => void; onReplay: () => void }) {
  const [picked, setPicked] = useState<FlopPiece | null>(null);
  const asked = spot.pieces.length;
  const firstTry = asked - spot.pieces.filter((p) => missed.has(p.key)).length;

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-2 rounded-2xl p-3" style={{ background: "var(--panel)", border: "1px solid var(--line)", animation: "rdIn 220ms ease-out both" }} data-testid="flop-summary">
      <div className="flex items-baseline justify-between gap-2">
        <b className="font-[family-name:var(--font-display)] text-[16px]">What each group was worth</b>
        <span className="text-[12.5px]" style={{ color: "var(--muted)" }}>
          <b style={{ color: "var(--call)" }}>
            {firstTry}/{asked}
          </b>{" "}
          first try
        </span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto">
        {spot.pieces.map((p) => {
          const color = BUCKET_COLOR[p.answer.bucket];
          const on = picked?.key === p.key;
          return (
            <button
              key={p.key}
              type="button"
              className="flex cursor-pointer items-center gap-2 rounded-lg border px-2 py-1.5 text-left text-[13px]"
              style={{ borderColor: on ? "var(--foreground)" : color, background: `color-mix(in srgb, ${color} 16%, transparent)` }}
              onClick={() => setPicked(p)}
              data-testid={`summary-${p.key}`}
            >
              <i className="inline-block h-[9px] w-[9px] flex-shrink-0 rounded-[2px]" style={{ background: p.color }} />
              <span className="min-w-0 flex-1">
                {p.label}
                {p.hands !== p.label && <span style={{ color: "var(--muted)" }}> · {p.hands}</span>}
              </span>
              {missed.has(p.key) && <span style={{ color: "var(--raise)" }}>✕</span>}
              <b className="flex-shrink-0 font-[family-name:var(--font-display)]" style={{ color }}>
                {bucketTiny(p.answer.bucket)}
              </b>
            </button>
          );
        })}
      </div>

      <p className="m-0 min-h-[50px] text-[12px] leading-snug" style={{ color: "var(--muted)" }} data-testid="summary-why">
        {picked ? (
          <>
            <b style={{ color: picked.color }}>{picked.label}</b>: {picked.answer.why}
          </>
        ) : (
          <>Tap a group to see its equity. Answers are drafts from the equity calculator, for Uri to check.</>
        )}
      </p>

      <div className="flex gap-2">
        <PrimaryButton onClick={onNext}>{spot.street === "river" ? "Next river" : spot.street === "turn" ? "Next turn" : "Next board"}</PrimaryButton>
        <button type="button" className="h-[44px] flex-1 cursor-pointer rounded-xl border text-[13px] font-semibold" style={{ borderColor: "var(--line)" }} onClick={onReplay}>
          Replay
        </button>
      </div>
    </div>
  );
}
