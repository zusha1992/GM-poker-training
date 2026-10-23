"use client";

import { useState } from "react";
import { Sheet } from "@/components/ui/Sheet";
import { SEATS, type Seat } from "@/lib/drill/preflop/seats";
import { threebetSpot, type ThreebetSpot } from "@/lib/drill/preflop/threebet";
import { facing3betSpot, type Facing3betSpot } from "@/lib/drill/preflop/facing3bet";
import { facing4betSpot, type Facing4betSpot } from "@/lib/drill/preflop/facing4bet";
import { confirmSound } from "@/lib/drill/sound";

export type AnyPreflopSpot = ThreebetSpot | Facing3betSpot | Facing4betSpot;

const SEAT_POSITION: Record<Seat, [number, number]> = {
  UTG: [22, 8],
  HJ: [78, 8],
  CO: [97, 50],
  BTN: [78, 92],
  SB: [22, 92],
  BB: [3, 50],
};

type SeatPickerProps = {
  open: boolean;
  modeKey: "tb" | "fb" | "fv";
  modeTitle: string;
  onClose: () => void;
  onStart: (spot: AnyPreflopSpot) => void;
};

/** The seat-click table graphic used by 3-bet / facing-3-bet / facing-4-bet
 * to choose which two seats are involved. The player always taps the
 * earlier-position seat first and the later-position seat second — what
 * that tap *means* (who opens vs. who's the hero) depends on the mode. */
export function SeatPicker({ open, modeKey, modeTitle, onClose, onStart }: SeatPickerProps) {
  const [firstPick, setFirstPick] = useState<Seat | null>(null);
  const [secondPick, setSecondPick] = useState<Seat | null>(null);

  function reset() {
    setFirstPick(null);
    setSecondPick(null);
  }

  function close() {
    reset();
    onClose();
  }

  function spotFor(a: Seat, b: Seat): AnyPreflopSpot {
    if (modeKey === "fb") return facing3betSpot(a, b);
    if (modeKey === "fv") return facing4betSpot(a, b);
    return threebetSpot(a, b);
  }

  const TXT = {
    fb: {
      s1: "Tap your seat. You open the pot.",
      t1: "Where do you open?",
      s2: (f: Seat) => `Now tap who 3-bets you. They act after the ${f}.`,
      t2: "Who 3-bets?",
      sub2: (f: Seat) => `${f} raises to 2.5bb`,
    },
    fv: {
      s1: "Tap the player who opens. They will 4-bet you.",
      t1: "Who opens?",
      s2: (f: Seat) => `Now tap your seat. You 3-bet the ${f}.`,
      t2: "Where do you 3-bet?",
      sub2: (f: Seat) => `${f} raises to 2.5bb`,
    },
    tb: {
      s1: "Tap the player who opens.",
      t1: "Who opens?",
      s2: (f: Seat) => `Now tap your seat. You act after the ${f}.`,
      t2: "Where are you?",
      sub2: (f: Seat) => `${f} raises to 2.5bb`,
    },
  }[modeKey];

  function pick(p: Seat) {
    confirmSound();
    if (p === firstPick) {
      setFirstPick(null);
      setSecondPick(null);
    } else if (p === secondPick) {
      setSecondPick(null);
    } else if (!firstPick) {
      setFirstPick(p);
    } else if (!secondPick && SEATS.indexOf(p) > SEATS.indexOf(firstPick)) {
      setSecondPick(p);
    } else if (secondPick) {
      setFirstPick(p);
      setSecondPick(null);
    }
  }

  function randomSpot() {
    const oi = Math.floor(Math.random() * 5);
    const opener = SEATS[oi];
    const hero = SEATS[oi + 1 + Math.floor(Math.random() * (5 - oi))];
    setFirstPick(opener);
    setSecondPick(hero);
  }

  const step = !firstPick ? TXT.s1 : !secondPick ? TXT.s2(firstPick) : "Ready. Tap a seat again to change it.";
  const feltTitle = !firstPick
    ? TXT.t1
    : !secondPick
      ? TXT.t2
      : modeKey === "fb"
        ? `${firstPick} vs ${secondPick} 3-bet`
        : modeKey === "fv"
          ? `${secondPick} vs ${firstPick} 4-bet`
          : `${secondPick} vs ${firstPick}`;
  const feltSub = !firstPick
    ? "6-max · 100bb"
    : !secondPick
      ? TXT.sub2(firstPick)
      : `${spotFor(firstPick, secondPick).drill.pieces.length} decisions`;

  const chosen =
    firstPick && secondPick
      ? modeKey === "fv"
        ? [
            { text: `You 3-bet: ${secondPick}`, color: "var(--mix)" },
            { text: "vs", color: "var(--muted)" },
            { text: `${firstPick} 4-bet`, color: "var(--raise)" },
          ]
        : modeKey === "fb"
          ? [
              { text: `You open: ${firstPick}`, color: "var(--mix)" },
              { text: "vs", color: "var(--muted)" },
              { text: `${secondPick} 3-bet`, color: "var(--raise)" },
            ]
          : [
              { text: `You: ${secondPick}`, color: "var(--mix)" },
              { text: "vs", color: "var(--muted)" },
              { text: `${firstPick} open`, color: "var(--raise)" },
            ]
      : [];

  return (
    <Sheet open={open} onOpenChange={(next) => !next && close()} title={modeTitle}>
      <p className="m-0 text-[14px] leading-[1.5]" style={{ color: "var(--muted)" }}>
        {step}
      </p>
      <div className="relative mx-auto my-1 w-full max-w-[340px]" style={{ aspectRatio: 1.45 }}>
        <div
          className="absolute flex flex-col items-center justify-center rounded-full text-center"
          style={{
            inset: "16% 12%",
            background: "#17442F",
            border: "8px solid #3A2A1E",
            boxShadow: "inset 0 0 0 2px #22573D",
            padding: "0 12px",
          }}
        >
          <b className="font-[family-name:var(--font-display)] text-[16px]" style={{ color: "#EEF2F5" }}>
            {feltTitle}
          </b>
          <span className="text-[12px]" style={{ color: "#B9D3C4" }}>
            {feltSub}
          </span>
        </div>
        {SEATS.map((seat) => {
          const [left, top] = SEAT_POSITION[seat];
          const isOpener = seat === firstPick;
          const isHero = seat === secondPick;
          const canPick =
            (!firstPick && seat !== "BB") ||
            (firstPick && !secondPick && !isOpener && SEATS.indexOf(seat) > SEATS.indexOf(firstPick));
          const disabled = !isOpener && !isHero && !canPick;
          const smallText = isOpener
            ? modeKey === "fb" ? "YOU" : modeKey === "fv" ? "4-BETS" : "OPENS"
            : isHero
              ? modeKey === "fb" ? "3-BETS" : "YOU"
              : "";
          return (
            <button
              key={seat}
              type="button"
              disabled={disabled}
              onClick={() => pick(seat)}
              className="absolute flex h-[58px] w-[58px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-2 p-0 font-[family-name:var(--font-display)] text-[14px] font-bold"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                background: isOpener || isHero ? "var(--raise)" : "var(--panel-2)",
                borderColor: isOpener || isHero ? "var(--raise)" : canPick ? "var(--mix)" : "var(--line)",
                color: isOpener || isHero ? "#fff" : "var(--foreground)",
                opacity: disabled ? 0.35 : 1,
                cursor: disabled ? "default" : "pointer",
              }}
            >
              {seat}
              <small className="font-[family-name:var(--font-body)] text-[10px] font-semibold tracking-[0.04em]">
                {smallText}
              </small>
            </button>
          );
        })}
        <div
          className="absolute grid h-5 w-5 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full text-[10px] font-bold"
          style={{ left: "66%", top: "76%", background: "#EEF2F5", color: "#10161B" }}
        >
          D
        </div>
      </div>
      <div className="flex min-h-[26px] items-center justify-center gap-2 font-[family-name:var(--font-display)] text-[18px] font-bold">
        {chosen.map((c, i) => (
          <span key={i} style={{ color: c.color }}>
            {c.text}
          </span>
        ))}
      </div>
      {firstPick && secondPick && (
        <button
          className="h-[52px] rounded-2xl border-0 text-[16px] font-bold"
          style={{ background: "var(--mix)", color: "#2B1C02" }}
          onClick={() => {
            confirmSound();
            const spot = spotFor(firstPick, secondPick);
            reset();
            onStart(spot);
          }}
          type="button"
        >
          Start drill
        </button>
      )}
      <div className="grid grid-cols-2 gap-2">
        <button className="h-[44px] rounded-xl border text-[14px] font-semibold" style={{ borderColor: "var(--line)" }} onClick={randomSpot} type="button">
          Random spot
        </button>
        <button className="h-[44px] rounded-xl border text-[14px] font-semibold" style={{ borderColor: "var(--line)" }} onClick={close} type="button">
          Back to the lobby
        </button>
      </div>
    </Sheet>
  );
}
