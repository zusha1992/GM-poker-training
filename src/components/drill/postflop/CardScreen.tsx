"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { FeedbackSheet } from "@/components/drill/FeedbackSheet";
import type { FeedbackContext } from "@/lib/drill/feedback";
import { Toast, useToast } from "@/components/drill/Toast";
import { badSound, buzz, goodSound, tone } from "@/lib/drill/sound";
import { rankChar, type Card } from "@/lib/drill/postflop/line-demo";
import { buildCardSpot, CARD_FLOPS, cardSpotsOf, type CardPiece, type CardSpot, type CardStreet } from "@/lib/drill/postflop/card-drill";
import { lineFor } from "@/lib/drill/postflop/lines";
import { SidePaddles, type SideBox } from "./SidePaddles";
import { pieTarget, SortPiece } from "./SortPiece";
import { FlopTrailer } from "./FlopTrailer";
import { LineBar } from "./LineBar";
import { BigBoard } from "./FlopScreen";
import { BoardCard, IconButton, PrimaryButton, Row, Shell, SUIT_GLYPH } from "./drill-ui";

/** Two drills on one screen (Noam & Uri 2026-11-20), the same cards, a different question:
 * - "cards": Good card, bad card: is this turn / river card good or bad for BTN's range?
 * - "round": Round to 100 or 0: on this card, bet the whole range or check it all?
 * The pieces are groups of cards (all the kings, the flush cards, …), one at a time. */

export type CardMode = "cards" | "round";
type Box = "left" | "right";
const GOOD = "#35C277";
const BAD = "#E0565B";
const CLOSE = "#F2C14E";
const BOXES: Record<CardMode, SideBox<Box>[]> = {
  cards: [
    { id: "left", label: "Bad\ncard", color: BAD, side: "left" },
    { id: "right", label: "Good\ncard", color: GOOD, side: "right" },
  ],
  round: [
    { id: "left", label: "Check\nit all", sub: "0%", color: "#5B87C9", side: "left" },
    { id: "right", label: "Bet\nit all", sub: "100%", color: "#F2564B", side: "right" },
  ],
};
const TITLE: Record<CardMode, string> = { cards: "Good card, bad card", round: "Round to 100 or 0" };
const cardText = (c: Card) => `${rankChar(c.r)}${SUIT_GLYPH[c.s]}`;
type Phase = "intro" | "decide" | "final";
const right = (p: CardPiece, b: Box) => p.answer === "close" || (p.answer === "good") === (b === "right");

function answerText(mode: CardMode, p: CardPiece) {
  if (p.answer === "close") return "Close: either";
  if (mode === "cards") return p.answer === "good" ? "Good card" : "Bad card";
  return p.answer === "good" ? "Bet it all" : "Check it all";
}
const answerColor = (p: CardPiece) => (p.answer === "good" ? GOOD : p.answer === "bad" ? BAD : CLOSE);

function shuffled<T>(xs: T[]): T[] {
  const out = [...xs];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

/** A group of cards as the piece: up to four cards side by side, the rest counted. */
function CardStack({ cards }: { cards: Card[] }) {
  return (
    <div className="flex items-center gap-1 rounded-xl px-2 py-2" style={{ background: "var(--panel-2)", border: "1px solid var(--line)" }}>
      {cards.slice(0, 4).map((c, i) => (
        <BoardCard key={i} card={c} />
      ))}
      {cards.length > 4 && (
        <b className="ml-0.5 text-[13px]" style={{ color: "var(--muted)" }}>
          +{cards.length - 4}
        </b>
      )}
    </div>
  );
}

export function CardScreen({ mode }: { mode: CardMode }) {
  const router = useRouter();
  const [street, setStreet] = useState<CardStreet>("turn");
  const [spot, setSpot] = useState<CardSpot>(() => buildCardSpot(cardSpotsOf("turn")[0].name));
  const [phase, setPhase] = useState<Phase>("intro");
  const [picked, setPicked] = useState<string | null>(null);
  const [placed, setPlaced] = useState<Partial<Record<string, Box>>>({});
  const [queue, setQueue] = useState<CardPiece[]>([]);
  const [missed, setMissed] = useState<Set<string>>(new Set());
  const [tries, setTries] = useState<Partial<Record<string, Box>>>({});
  const [armed, setArmed] = useState<Box | null>(null);
  const [shake, setShake] = useState(0);
  const [flying, setFlying] = useState<{ key: string; box: Box; rect: DOMRect | null } | null>(null);
  const [seq, setSeq] = useState(0);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [holding, setHolding] = useState(false);
  const [flash, setFlash] = useState<Partial<Record<Box, number>>>({});
  const [trailer, setTrailer] = useState(false);
  const busy = useRef(false);
  const generation = useRef(0);
  const boxes = useRef<Partial<Record<Box, HTMLDivElement | null>>>({});
  const zoneRef = useRef<HTMLDivElement>(null);
  const [zone, setZone] = useState({ w: 328, h: 236 });
  const { toast, show: showToast } = useToast();
  const BX = BOXES[mode];

  const zoneShown = phase === "decide" && !trailer;
  useEffect(() => {
    const el = zoneRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setZone({ w: e.contentRect.width, h: e.contentRect.height }));
    ro.observe(el);
    return () => ro.disconnect();
  }, [zoneShown]);

  // Opened from a feedback link (?spot=A72 or ?spot=A72-Qh).
  useEffect(() => {
    const s = new URLSearchParams(window.location.search).get("spot");
    const hit = s ? [...cardSpotsOf("turn"), ...cardSpotsOf("river")].find((x) => x.name === s) : undefined;
    if (hit) start(hit.name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const current = trailer ? null : (queue.find((p) => !placed[p.key]) ?? null);
  const done = queue.filter((p) => placed[p.key]).length;
  const what = spot.street === "turn" ? "turn" : "river";

  const feedbackContext: FeedbackContext = {
    drill: TITLE[mode],
    spot: `${spot.board.map(cardText).join(" ")} · ${what} cards`,
    focus: phase === "decide" && current ? `${current.label} (${current.cards.map(cardText).join(" ")})` : phase === "final" ? "End-of-spot summary" : undefined,
    app: phase === "decide" && current ? answerText(mode, current) : undefined,
    player: phase === "decide" && current && tries[current.key] ? `${BX.find((b) => b.id === tries[current.key])!.label.replace("\n", " ")} (wrong)` : undefined,
  };

  function later(fn: () => void, ms: number) {
    const gen = generation.current;
    setTimeout(() => {
      if (gen === generation.current) fn();
    }, ms);
  }

  function pickSpot(st: CardStreet, current: string | null, flop: string | null) {
    const all = cardSpotsOf(st).filter((s) => !flop || s.flop === flop);
    const pool = all.length > 1 ? all.filter((s) => s.name !== current) : all;
    return pool[Math.floor(Math.random() * pool.length)].name;
  }

  function start(name?: string) {
    generation.current += 1;
    const s = buildCardSpot(name ?? pickSpot(street, spot.name, picked));
    setSpot(s);
    setMissed(new Set());
    setPlaced({});
    setTries({});
    setQueue(shuffled(s.pieces));
    setFlying(null);
    setSeq((n) => n + 1);
    setPhase("decide");
    busy.current = false;
    setTrailer(true);
  }

  const zoneAt = (x: number, y: number) => pieTarget(zoneRef.current?.getBoundingClientRect(), BX.map((b) => [b.id, boxes.current[b.id]?.getBoundingClientRect()]), x, y);
  const rectOf = (b: Box) => boxes.current[b]?.getBoundingClientRect() ?? null;

  function handleDrop(p: CardPiece, b: Box) {
    if (busy.current || placed[p.key]) return;
    if (!right(p, b)) {
      showToast(mode === "cards" ? (p.answer === "good" ? "Not quite. This card helps BTN" : "Not quite. This card hurts BTN") : p.answer === "good" ? "Not quite. BTN bets it all here" : "Not quite. BTN checks it all here", false);
      badSound();
      buzz([30, 40, 30]);
      setShake((n) => n + 1);
      setMissed((m) => new Set(m).add(p.key));
      setTries((t) => ({ ...t, [p.key]: b }));
      return;
    }
    busy.current = true;
    showToast(p.answer === "close" ? `Good · ${p.label}: close, either is right` : `Perfect · ${p.label}: ${answerText(mode, p).toLowerCase()}`, true);
    goodSound();
    buzz(15);
    setFlying({ key: p.key, box: b, rect: rectOf(b) });
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
      } else busy.current = false;
    }, 380);
  }

  const line = lineFor(spot.street === "turn" ? "turn" : "river", spot.turnBet);
  const question = mode === "cards" ? `Which ${what} cards help BTN?` : `Each ${what} card: bet it all or check it all?`;
  if (phase !== "intro" && trailer)
    return (
      <FlopTrailer
        key={seq}
        board={spot.board}
        street={spot.street === "turn" ? "turn" : "river"}
        turnBet={spot.turnBet}
        caption={question}
        onDone={() => {
          setTrailer(false);
          tone(523, 0.08);
        }}
      />
    );

  if (phase === "intro") {
    const spots = cardSpotsOf(street);
    return (
      <Shell>
        <div className="flex h-full flex-col gap-4 overflow-y-auto py-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="inline-block rounded-full px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em]" style={{ color: "#2B1C02", background: "var(--mix)" }}>
              Prototype · draft answers
            </span>
            <b className="font-[family-name:var(--font-brand)] text-[26px] font-bold">{TITLE[mode]}</b>
            <p className="m-0 max-w-[330px] text-[13.5px] leading-[1.5]" style={{ color: "var(--muted)" }}>
              {mode === "cards"
                ? "You're the BTN: you bet, BB called. Now a new card comes. Cards come in groups: drag each to Good card (it helps your whole range) or Bad card (it helps BB)."
                : "You're the BTN: you bet, BB called. Keep it simple: on a good card bet your whole range, on a bad card check it all. Drag each group of cards to Bet it all or Check it all."}
            </p>
          </div>
          <div className="flex flex-col gap-1.5 rounded-2xl p-3 text-[13px]" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
            <Row label="Answers" text="How the card moves BTN's range equity vs BB's (draft rule for Uri: ±2.5 points); close cards accept both" />
          </div>
          <div className="grid grid-cols-2 gap-1.5" role="radiogroup" aria-label="Street" data-testid="street-picker">
            {(["turn", "river"] as CardStreet[]).map((st) => (
              <button
                key={st}
                type="button"
                role="radio"
                aria-checked={street === st}
                className="flex h-[48px] cursor-pointer items-center justify-center rounded-xl border font-[family-name:var(--font-display)] text-[16px] font-bold"
                style={{ borderColor: street === st ? "var(--mix)" : "var(--line)", color: street === st ? "var(--mix)" : "var(--foreground)", background: street === st ? "var(--panel-2)" : "var(--panel)" }}
                onClick={() => setStreet(st)}
                data-testid={`street-${st}`}
              >
                {st === "turn" ? "Turn cards" : "River cards"}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-1.5" role="radiogroup" aria-label="Board" data-testid="board-picker">
            <b className="col-span-2 font-[family-name:var(--font-display)] text-[13px] tracking-[0.06em] uppercase" style={{ color: "var(--muted)" }}>
              Flop · {spots.length} spots
            </b>
            {[{ key: null as string | null, title: "Mix them all", sub: "A random spot each time" }, ...CARD_FLOPS.filter((b) => spots.some((s) => s.flop === b.name)).map((b) => ({ key: b.name as string | null, title: b.flop.join(" "), sub: b.blurb }))].map((o) => {
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
          {TITLE[mode]}{" "}
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

      <BigBoard board={spot.board} dealt small={phase === "final"} />
      <div className="flex-shrink-0">
        <LineBar line={line} compact />
      </div>

      {phase === "final" ? (
        <Summary mode={mode} spot={spot} missed={missed} onNext={() => start(pickSpot(spot.street, spot.name, null))} onReplay={() => start(spot.name)} />
      ) : (
        <>
          <b className="flex-shrink-0 text-center font-[family-name:var(--font-display)] text-[16px]">{question}</b>
          <div ref={zoneRef} className="relative min-h-[240px] flex-1" style={{ touchAction: "none", maxHeight: 420 }} data-testid="buckets">
            <SidePaddles boxes={BX} w={zone.w} h={zone.h} armed={armed} holding={holding} flash={flash} hitRef={(b, el) => (boxes.current[b] = el)} />
            <div className="absolute inset-y-2 left-[84px] right-[84px] flex items-center justify-center">
              <Toast toast={toast} />
              {current && (
                <div className="flex flex-col items-center gap-1" data-testid="sort-row">
                  <SortPiece<Box>
                    key={current.key}
                    piece={current}
                    caption={null}
                    visual={<CardStack cards={current.cards} />}
                    delay={0}
                    zoneAt={zoneAt}
                    flyRect={flying?.key === current.key ? flying.rect : null}
                    onDrop={(b) => handleDrop(current, b)}
                    onArm={(b) => {
                      setArmed(b);
                      if (b) buzz(8);
                    }}
                    rectOf={rectOf}
                    onHold={setHolding}
                    onInspect={() => showToast(current.cards.map(cardText).join(" "), true)}
                    shakeSeq={shake}
                    flyTo={flying?.key === current.key ? flying.box : null}
                    disabled={!!flying}
                  />
                </div>
              )}
            </div>
            {current && (
              <span className="absolute bottom-2.5 left-1/2 -translate-x-1/2 font-[family-name:var(--font-display)] text-[12px] font-semibold" style={{ color: "var(--muted)" }} data-testid="piece-count">
                {done + 1} / {queue.length}
              </span>
            )}
          </div>
        </>
      )}

      <FeedbackSheet
        context={feedbackContext}
        hideAppAnswer={phase === "decide" && !!current && !placed[current.key]}
        open={feedbackOpen}
        onClose={() => setFeedbackOpen(false)}
        drillTag={`postflop:${mode}:${spot.name}`}
        drillLabel={`${TITLE[mode]} · ${spot.name}`}
        pageUrl={`/drills/postflop/${mode}?spot=${spot.name}`}
      />
    </Shell>
  );
}

/** The end of a spot: every group of cards, best for BTN first, with the answer and why. */
function Summary({ mode, spot, missed, onNext, onReplay }: { mode: CardMode; spot: CardSpot; missed: Set<string>; onNext: () => void; onReplay: () => void }) {
  const [picked, setPicked] = useState<CardPiece | null>(null);
  const sorted = [...spot.pieces].sort((a, b) => b.delta - a.delta);
  const firstTry = sorted.length - sorted.filter((p) => missed.has(p.key)).length;
  return (
    <div className="flex min-h-0 flex-1 flex-col gap-2 rounded-2xl p-3" style={{ background: "var(--panel)", border: "1px solid var(--line)", animation: "rdIn 220ms ease-out both" }} data-testid="card-summary">
      <div className="flex items-baseline justify-between gap-2">
        <b className="font-[family-name:var(--font-display)] text-[16px]">{mode === "cards" ? "Good and bad cards" : "Bet it all or check it all"}</b>
        <span className="text-[12.5px]" style={{ color: "var(--muted)" }}>
          <b style={{ color: "var(--call)" }}>
            {firstTry}/{sorted.length}
          </b>{" "}
          first try
        </span>
      </div>
      <div className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto">
        {sorted.map((p) => {
          const color = answerColor(p);
          return (
            <button
              key={p.key}
              type="button"
              className="flex cursor-pointer items-center gap-2 rounded-lg border px-2 py-1.5 text-left text-[13px]"
              style={{ borderColor: picked?.key === p.key ? "var(--foreground)" : color, background: `color-mix(in srgb, ${color} 16%, transparent)` }}
              onClick={() => setPicked(p)}
              data-testid={`summary-${p.key}`}
            >
              <span className="min-w-0 flex-1">
                {p.label}
                <span style={{ color: "var(--muted)" }}> · {p.delta >= 0 ? "+" : ""}{p.delta.toFixed(1)}</span>
              </span>
              {missed.has(p.key) && <span style={{ color: "var(--raise)" }}>✕</span>}
              <b className="flex-shrink-0 font-[family-name:var(--font-display)]" style={{ color }}>
                {answerText(mode, p)}
              </b>
            </button>
          );
        })}
      </div>
      <p className="m-0 min-h-[50px] text-[12px] leading-snug" style={{ color: "var(--muted)" }} data-testid="summary-why">
        {picked ? (
          <>
            <b style={{ color: picked.color }}>{picked.label}</b>: {picked.why}
          </>
        ) : (
          <>Tap a group to see why. Numbers: BTN&apos;s range equity vs an average card. Draft rule, for Uri to set.</>
        )}
      </p>
      <div className="flex gap-2">
        <PrimaryButton onClick={onNext}>Next spot</PrimaryButton>
        <button type="button" className="h-[44px] flex-1 cursor-pointer rounded-xl border text-[13px] font-semibold" style={{ borderColor: "var(--line)" }} onClick={onReplay}>
          Replay
        </button>
      </div>
    </div>
  );
}
