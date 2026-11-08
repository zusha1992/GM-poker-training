"use client";

import { useEffect, useState } from "react";
import { SUIT_COLOR, SUIT_GLYPH } from "./drill-ui";

/** A hand group shown as the cards themselves (Noam 2026-11-08, option A):
 * each hand is two cards, the hands fanned in an arc like a player spreading
 * them, strongest on the left. Up to six hands; the rest are counted. */

const RANKS = "AKQJT98765432";
const MAX_HANDS = 6;
const CARD_W = 34;
const CARD_H = 48;
/** How far the second card of a hand sits right of the first. */
const INNER = 16;
const UNIT_W = INNER + CARD_W;
/** The fan turns around a point this far below the cards. */
const PIVOT = 190;
const STEP = 9;
/** A little wider while the finger holds the fan. */
const STEP_OPEN = 10.5;
const BOX_W = 204;
const BOX_H = 98;
/** Suits per hand, so neighbouring hands don't look the same. */
const SUITS: [string, string][] = [
  ["s", "h"],
  ["d", "c"],
  ["h", "s"],
  ["c", "d"],
];

type Hand = { hi: string; lo: string; suited: boolean };

/** The group's hands, one per rank pair ("A9s" and "A9o" are one hand), strongest first. */
export function fanHands(hands: string[]): Hand[] {
  const byRanks = new Map<string, Hand>();
  for (const h of hands) {
    const key = h.slice(0, 2);
    const suited = h[2] === "s";
    const prev = byRanks.get(key);
    // Offsuit wins when both are in: two different suits read as "any".
    byRanks.set(key, { hi: h[0], lo: h[1], suited: prev ? prev.suited && suited : suited });
  }
  const v = (r: string) => RANKS.indexOf(r);
  return [...byRanks.values()].sort((a, b) => {
    const ap = a.hi === a.lo, bp = b.hi === b.lo;
    if (ap !== bp) return ap ? -1 : 1;
    return v(a.hi) - v(b.hi) || v(a.lo) - v(b.lo);
  });
}

function PlayingCard({ rank, suit, left, tilt }: { rank: string; suit: string; left: number; tilt: number }) {
  const ink = SUIT_COLOR[suit];
  return (
    <span
      className="absolute top-0 rounded-[6px]"
      style={{
        left,
        width: CARD_W,
        height: CARD_H,
        transform: `rotate(${tilt}deg)`,
        background: "linear-gradient(180deg, #FFFFFF 0%, #F6F2E8 100%)",
        border: "1px solid rgba(20,24,32,.2)",
        boxShadow: "-2px 2px 6px rgba(0,0,0,.38), inset 0 0 0 1px rgba(255,255,255,.6)",
      }}
    >
      <span className="absolute left-[4px] top-[4px] flex flex-col items-center font-[family-name:var(--font-display)] font-bold leading-none" style={{ color: ink }}>
        <span className="text-[15px] tracking-[-0.5px]">{rank}</span>
        <span className="mt-[2px] text-[11px]">{SUIT_GLYPH[suit]}</span>
      </span>
      <span className="absolute bottom-[3px] right-[4px] text-[19px] leading-none" style={{ color: ink }}>
        {SUIT_GLYPH[suit]}
      </span>
    </span>
  );
}

export function HandFan({ hands, color, open = false, maxWidth = BOX_W }: { hands: string[]; color: string; open?: boolean; maxWidth?: number }) {
  const all = fanHands(hands);
  const shown = all.slice(0, MAX_HANDS);
  const more = all.length - shown.length;
  // The cards deal in stacked, then fan out.
  const [spread, setSpread] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setSpread(true));
    return () => cancelAnimationFrame(id);
  }, []);
  const step = open ? STEP_OPEN : STEP;
  const scale = Math.min(1, Math.max(0.78, maxWidth / BOX_W));
  const n = shown.length;
  return (
    <div className="relative" style={{ width: BOX_W * scale, height: BOX_H * scale + (more > 0 ? 4 : 0) }} aria-hidden="true">
      <div className="absolute left-0 top-0" style={{ width: BOX_W, height: BOX_H, transform: `scale(${scale})`, transformOrigin: "0 0" }}>
        {/* The group's color glows under the cards, as on the matrix. */}
        <span
          className="absolute left-1/2 rounded-full"
          style={{ bottom: 6, width: 120, height: 16, marginLeft: -60, background: color, filter: "blur(12px)", opacity: open ? 0.75 : 0.5, transition: "opacity 180ms ease-out" }}
        />
        {shown.map((h, k) => {
          const angle = spread ? -step * (n - 1) / 2 + k * step : 0;
          const [s1, s2] = SUITS[k % SUITS.length];
          return (
            <span
              key={`${h.hi}${h.lo}`}
              className="absolute"
              style={{
                left: (BOX_W - UNIT_W) / 2,
                top: 10,
                width: UNIT_W,
                height: CARD_H,
                transform: `rotate(${angle}deg)`,
                transformOrigin: `${UNIT_W / 2}px ${PIVOT}px`,
                transition: `transform ${spread && !open ? 420 : 180}ms cubic-bezier(.3,1.25,.5,1) ${spread && !open ? k * 28 : 0}ms`,
              }}
            >
              <PlayingCard rank={h.hi} suit={s1} left={0} tilt={-2} />
              <PlayingCard rank={h.lo} suit={h.suited ? s1 : s2} left={INNER} tilt={2} />
            </span>
          );
        })}
      </div>
      {more > 0 && (
        <span
          className="absolute right-0 top-0 rounded-full px-1.5 py-[1px] text-[10.5px] font-semibold"
          style={{ background: "var(--line)", color: "var(--foreground)", transform: "translate(4px,-2px)" }}
        >
          +{more}
        </span>
      )}
    </div>
  );
}
