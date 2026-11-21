"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { FeedbackSheet } from "@/components/drill/FeedbackSheet";
import type { FeedbackContext } from "@/lib/drill/feedback";
import { Toast, useToast } from "@/components/drill/Toast";
import { badSound, buzz, goodSound, tone } from "@/lib/drill/sound";
import { rankChar, type Card } from "@/lib/drill/postflop/line-demo";
import { buildDefendSpot, DEFEND_FLOPS, defendSpotsOf, type DefendPiece, type DefendSpot, type DefendStreet } from "@/lib/drill/postflop/defend-drill";
import { lineFor } from "@/lib/drill/postflop/lines";
import { LineMatrix, type MatrixPalette } from "./LineMatrix";
import { SidePaddles, type SideBox } from "./SidePaddles";
import { pieTarget, SortPiece } from "./SortPiece";
import { HandFan } from "./HandFan";
import { FlopTrailer } from "./FlopTrailer";
import { LineBar } from "./LineBar";
import { BigBoard } from "./FlopScreen";
import { IconButton, InspectPanel, PrimaryButton, Row, Shell, SUIT_GLYPH } from "./drill-ui";

/** "Defend: call or fold?" (Noam & Uri 2026-11-20). We're the BB; BTN bets. BB's range comes in
 * groups, one at a time: drag each to Call or Fold. The summary shows where calling stops. */

type Box = "fold" | "bluff" | "call";
const CALL = "#35C277";
const FOLD = "#5B87C9";
const MIXED = "#F2C14E";
const BOXES: SideBox<Box>[] = [
  { id: "fold", label: "Fold", sub: "−EV", color: FOLD, side: "left" },
  { id: "bluff", label: "Bluff-catch", sub: "about 0 EV", color: MIXED, side: "bottom" },
  { id: "call", label: "Call", sub: "+EV", color: CALL, side: "right" },
];
const RANGE = "#46525C";
type Phase = "intro" | "decide" | "final";
const TITLE: Record<DefendStreet, string> = { flop: "Flop", turn: "Turn", river: "River" };
const cardText = (c: Card) => `${rankChar(c.r)}${SUIT_GLYPH[c.s]}`;
const answerColor = (p: DefendPiece) => (p.answer === "call" ? CALL : p.answer === "fold" ? FOLD : MIXED);
const answerText = (p: DefendPiece) => (p.answer === "call" ? "Call" : p.answer === "fold" ? "Fold" : "Bluff-catch");
/** "+2.1bb" / "−0.4bb": the EV of calling. */
const evText = (ev: number) => `${ev >= 0 ? "+" : "−"}${Math.abs(ev).toFixed(1)}bb`;
const right = (p: DefendPiece, b: Box) => p.answer === b;

function shuffled<T>(xs: T[]): T[] {
  const out = [...xs];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

function pickSpot(street: DefendStreet, current: string | null, picked: string | null): string {
  const all = defendSpotsOf(street).filter((s) => !picked || s.flop === picked);
  const pool = all.length > 1 ? all.filter((s) => s.name !== current) : all;
  return pool[Math.floor(Math.random() * pool.length)].name;
}

export function DefendScreen({ street }: { street: DefendStreet }) {
  if (!defendSpotsOf(street).length) return <NotReady street={street} />;
  return <DefendDrill street={street} />;
}

/** Noam 2026-11-21: the flop's EV needs the flops re-solved with the turn kept; until a board is done there's no spot. */
function NotReady({ street }: { street: DefendStreet }) {
  const router = useRouter();
  return (
    <Shell>
      <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
        <b className="font-[family-name:var(--font-brand)] text-[24px] font-bold">Defend the {TITLE[street].toLowerCase()}</b>
        <p className="m-0 max-w-[320px] text-[14px] leading-[1.5]" style={{ color: "var(--muted)" }} data-testid="not-ready">
          The answers are being recomputed by EV (call, bluff-catch, fold). Back soon. Turn and river are ready.
        </p>
        <PrimaryButton onClick={() => router.push("/")}>Back to lobby</PrimaryButton>
      </div>
    </Shell>
  );
}

function DefendDrill({ street }: { street: DefendStreet }) {
  const router = useRouter();
  const [spot, setSpot] = useState<DefendSpot>(() => buildDefendSpot(defendSpotsOf(street)[0].name));
  const [phase, setPhase] = useState<Phase>("intro");
  const [picked, setPicked] = useState<string | null>(null);
  const [placed, setPlaced] = useState<Partial<Record<string, Box>>>({});
  const [queue, setQueue] = useState<DefendPiece[]>([]);
  const [missed, setMissed] = useState<Set<string>>(new Set());
  const [tries, setTries] = useState<Partial<Record<string, Box>>>({});
  const [armed, setArmed] = useState<Box | null>(null);
  const [inspecting, setInspecting] = useState(false);
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

  const zoneShown = phase === "decide" && !trailer;
  useEffect(() => {
    const el = zoneRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setZone({ w: e.contentRect.width, h: e.contentRect.height }));
    ro.observe(el);
    return () => ro.disconnect();
  }, [zoneShown]);

  // Opened from a feedback link (?spot=A72-Qh): straight to that spot.
  useEffect(() => {
    const s = new URLSearchParams(window.location.search).get("spot");
    if (s && defendSpotsOf(street).some((x) => x.name === s)) start(s);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const current = trailer ? null : (queue.find((p) => !placed[p.key]) ?? null);
  const done = queue.filter((p) => placed[p.key]).length;
  const palette: MatrixPalette = {
    order: spot.order,
    fill: (g) => {
      const b = placed[g];
      return b === "call" ? CALL : b === "fold" ? FOLD : b === "bluff" ? MIXED : RANGE;
    },
  };

  const focus = phase === "decide" ? current : null;
  const feedbackContext: FeedbackContext = {
    drill: `Defend ${TITLE[street]}: call or fold`,
    spot: `${spot.board.map(cardText).join(" ")} · BB vs a ${spot.bet}bb bet into ${spot.pot}bb`,
    focus: focus ? `${focus.label} (${focus.hands})` : phase === "final" ? "End-of-spot summary" : undefined,
    app: focus ? answerText(focus) : undefined,
    player: focus && tries[focus.key] ? `${tries[focus.key]} (wrong)` : undefined,
  };

  function later(fn: () => void, ms: number) {
    const gen = generation.current;
    setTimeout(() => {
      if (gen === generation.current) fn();
    }, ms);
  }

  function start(name?: string) {
    generation.current += 1;
    const s = buildDefendSpot(name ?? pickSpot(street, spot.name, picked));
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

  function endTrailer() {
    setTrailer(false);
    tone(523, 0.08);
    setTimeout(() => tone(659, 0.12), 80);
  }

  const zoneAt = (x: number, y: number) => pieTarget(zoneRef.current?.getBoundingClientRect(), BOXES.map((b) => [b.id, boxes.current[b.id]?.getBoundingClientRect()]), x, y);
  const rectOf = (b: Box) => boxes.current[b]?.getBoundingClientRect() ?? null;
  function arm(b: Box | null) {
    setArmed(b);
    if (b) buzz(8);
  }

  function handleDrop(p: DefendPiece, b: Box) {
    if (busy.current || placed[p.key]) return;
    if (!right(p, b)) {
      showToast(`Not quite. Calling is worth ${evText(p.ev)} here`, false);
      badSound();
      buzz([30, 40, 30]);
      setShake((n) => n + 1);
      setMissed((m) => new Set(m).add(p.key));
      setTries((t) => ({ ...t, [p.key]: b }));
      return;
    }
    busy.current = true;
    showToast(`Perfect · ${p.label}: ${answerText(p).toLowerCase()} (${evText(p.ev)})`, true);
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

  if (phase !== "intro" && trailer)
    return <FlopTrailer key={seq} board={spot.board} street={street} turnBet={spot.turnBet} line={[...lineFor(street, spot.turnBet), { street, acts: [{ who: "BB", act: "check" }, { who: "BTN", act: "bet", bb: spot.bet }] }]} openLast hero="BB" caption={`BTN bets ${spot.bet}bb: call or fold?`} onDone={endTrailer} />;

  if (phase === "intro") {
    const spots = defendSpotsOf(street);
    return (
      <Shell>
        <div className="flex h-full flex-col gap-4 overflow-y-auto py-6">
          <div className="flex flex-col items-center gap-2 text-center">
            <span className="inline-block rounded-full px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em]" style={{ color: "#2B1C02", background: "var(--mix)" }}>
              Prototype · solver answers
            </span>
            <b className="font-[family-name:var(--font-brand)] text-[26px] font-bold">Defend the {TITLE[street].toLowerCase()}: call or fold?</b>
            <p className="m-0 max-w-[330px] text-[13.5px] leading-[1.5]" style={{ color: "var(--muted)" }}>
              You&apos;re the BB. BTN opened, you called, 100bb deep.
              {street === "flop" && " BTN bets small on the flop (33%)."}
              {street === "turn" && " You called a small flop bet; now BTN bets the turn."}
              {street === "river" && " You called the flop and the turn; now BTN bets the river."} Your hands come in groups, one at a time: drag each to Call, Bluff-catch or Fold. You can only call, never raise.
            </p>
          </div>
          <div className="flex flex-col gap-1.5 rounded-2xl p-3 text-[13px]" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
            <Row label="Boxes" text="Fold · Bluff-catch · Call" />
            <Row label="Answers" text="The EV of calling, from our solver: +0.5bb or more is a call, about 0 (−0.5 to +0.5bb) a bluff-catch, less is a fold" />
          </div>
          <div className="grid grid-cols-2 gap-1.5" role="radiogroup" aria-label="Board" data-testid="board-picker">
            <b className="col-span-2 font-[family-name:var(--font-display)] text-[13px] tracking-[0.06em] uppercase" style={{ color: "var(--muted)" }}>
              Flop · {spots.length} spots
            </b>
            {[{ key: null as string | null, title: "Mix them all", sub: "A random spot each time" }, ...DEFEND_FLOPS.filter((b) => spots.some((s) => s.flop === b.name)).map((b) => ({ key: b.name as string | null, title: b.flop.join(" "), sub: b.blurb }))].map((o) => {
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
          Defend {TITLE[street]}{" "}
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
          <Summary spot={spot} missed={missed} onNext={() => start(pickSpot(street, spot.name, null))} onReplay={() => start(spot.name)} />
        </>
      ) : (
        <>
          <div className="mx-auto w-full min-h-0 flex-shrink" style={{ maxWidth: `min(370px, max(170px, calc(100dvh - ${street === "flop" ? 470 : 530}px)))` }}>
            <div className="rounded-xl p-1" style={{ background: "var(--panel)", border: "1px solid var(--line)" }}>
              <LineMatrix snap={spot.snap} seq={seq} palette={palette} mini />
            </div>
          </div>
          <BigBoard board={spot.board} dealt />
          {street !== "flop" && (
            <div className="flex-shrink-0">
              <LineBar line={lineFor(street, spot.turnBet)} compact />
            </div>
          )}
          <div className="flex flex-shrink-0 items-center justify-center gap-2 text-[13px]" data-testid="pot-line" style={{ color: "var(--muted)" }}>
            <span className="whitespace-nowrap rounded-full px-2.5 py-0.5 font-bold" style={{ color: "var(--gold)", border: "1px solid color-mix(in srgb, var(--gold) 45%, transparent)" }}>
              BTN bets {spot.bet}bb into {spot.pot}bb
            </span>
          </div>

          <div ref={zoneRef} className="relative mt-auto flex-shrink-0" style={{ touchAction: "none", height: "clamp(220px, 34dvh, 290px)" }} data-testid="buckets">
            {inspecting && current ? (
              <div className="absolute inset-0 overflow-hidden rounded-2xl" style={{ border: "1px solid var(--line)", background: "var(--panel)" }}>
                <InspectPanel piece={{ ...current, desc: `${current.hands} · ${current.name}` }} onBack={() => setInspecting(false)} backLabel="Back" />
              </div>
            ) : (
              <>
                <SidePaddles boxes={BOXES} w={zone.w} h={zone.h} armed={armed} holding={holding} flash={flash} hitRef={(b, el) => (boxes.current[b] = el)} />
                <div className="absolute top-5 bottom-[66px] left-[84px] right-[84px] flex items-center justify-center">
                  <Toast toast={toast} />
                  {current && (
                    <div className="flex flex-col items-center" data-testid="sort-row">
                      <SortPiece<Box>
                        key={current.key}
                        piece={current}
                        caption={null}
                        visual={<HandFan cards={current.cards} color={current.color} open={holding} maxWidth={zone.w - 190} />}
                        delay={0}
                        zoneAt={zoneAt}
                        flyRect={flying?.key === current.key ? flying.rect : null}
                        onDrop={(b) => handleDrop(current, b)}
                        onArm={arm}
                        rectOf={rectOf}
                        onHold={setHolding}
                        onInspect={() => setInspecting(true)}
                        shakeSeq={shake}
                        flyTo={flying?.key === current.key ? flying.box : null}
                        disabled={!!flying}
                      />
                    </div>
                  )}
                </div>
                {current && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 font-[family-name:var(--font-display)] text-[12px] font-semibold" style={{ color: "var(--muted)", fontVariantNumeric: "tabular-nums" }} data-testid="piece-count">
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
        drillTag={`postflop:defend:${street}:${spot.name}`}
        drillLabel={`Defend ${TITLE[street]}: call or fold · ${spot.name}`}
        pageUrl={`/drills/postflop/defend/${street}?spot=${spot.name}`}
      />
    </Shell>
  );
}

/** The end of a spot: BB's groups from most calls to fewest, and the line where calling stops. */
function Summary({ spot, missed, onNext, onReplay }: { spot: DefendSpot; missed: Set<string>; onNext: () => void; onReplay: () => void }) {
  const [picked, setPicked] = useState<DefendPiece | null>(null);
  const sorted = [...spot.pieces].sort((a, b) => b.ev - a.ev);
  const asked = sorted.length;
  const firstTry = asked - sorted.filter((p) => missed.has(p.key)).length;
  const lastCall = sorted.filter((p) => p.answer !== "fold").pop();
  const cut = sorted.findIndex((p) => p.answer === "fold");

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-2 rounded-2xl p-3" style={{ background: "var(--panel)", border: "1px solid var(--line)", animation: "rdIn 220ms ease-out both" }} data-testid="defend-summary">
      <div className="flex items-baseline justify-between gap-2">
        <b className="font-[family-name:var(--font-display)] text-[16px]">Where calling stops</b>
        <span className="text-[12.5px]" style={{ color: "var(--muted)" }}>
          <b style={{ color: "var(--call)" }}>
            {firstTry}/{asked}
          </b>{" "}
          first try
        </span>
      </div>
      <p className="m-0 text-[12.5px]" style={{ color: "var(--muted)" }} data-testid="threshold">
        {lastCall ? (
          <>
            Facing {spot.bet}bb into {spot.pot}bb, BB calls down to <b style={{ color: "var(--foreground)" }}>{lastCall.label}</b>{lastCall.label.endsWith("…") ? "" : "."}
          </>
        ) : (
          "BB folds everything here."
        )}
      </p>

      <div className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto">
        {sorted.map((p, i) => {
          const color = answerColor(p);
          const on = picked?.key === p.key;
          return (
            <div key={p.key} className="flex flex-col gap-1">
              {i === cut && cut > 0 && (
                <div className="flex items-center gap-2 py-0.5 text-[11px] font-bold uppercase tracking-[0.08em]" style={{ color: "var(--gold)" }} data-testid="threshold-line">
                  <i className="h-px flex-1" style={{ background: "var(--gold)" }} />
                  calling stops here
                  <i className="h-px flex-1" style={{ background: "var(--gold)" }} />
                </div>
              )}
              <button
                type="button"
                className="flex cursor-pointer items-center gap-2 rounded-lg border px-2 py-1.5 text-left text-[13px]"
                style={{ borderColor: on ? "var(--foreground)" : color, background: `color-mix(in srgb, ${color} 16%, transparent)` }}
                onClick={() => setPicked(p)}
                data-testid={`summary-${p.key}`}
              >
                <i className="inline-block h-[9px] w-[9px] flex-shrink-0 rounded-[2px]" style={{ background: p.color }} />
                <span className="min-w-0 flex-1">
                  {p.label}
                  {!p.label.includes(p.hands) && <span style={{ color: "var(--muted)" }}> · {p.hands}</span>}
                </span>
                {missed.has(p.key) && <span style={{ color: "var(--raise)" }}>✕</span>}
                <b className="flex-shrink-0 font-[family-name:var(--font-display)]" style={{ color }}>
                  {answerText(p)} <small className="font-semibold opacity-75">{evText(p.ev)}</small>
                </b>
              </button>
            </div>
          );
        })}
      </div>

      <p className="m-0 min-h-[50px] text-[12px] leading-snug" style={{ color: "var(--muted)" }} data-testid="summary-why">
        {picked ? (
          <>
            <b style={{ color: picked.color }}>{picked.label}</b>: {picked.why}
          </>
        ) : (
          <>Tap a group to see why. Answers come from our solver, for Uri to check.</>
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
