"use client";

import { useEffect, useState } from "react";
import { rankChar, type Card } from "@/lib/drill/postflop/line-demo";
import { SUIT_COLOR, SUIT_GLYPH } from "./drill-ui";

/** A hand group shown as the cards themselves (Noam 2026-11-08, option A):
 * each hand is two cards, the hands fanned in an arc like a player spreading
 * them, strongest on the left. Up to six hands; the rest are counted. */

const MAX_HANDS = 6;
const CARD_W = 34;
const CARD_H = 48;
/** Every card turns around one point this far below the cards' top, like a
 * fan held in the hand (Noam 2026-11-08: a wide angle, so every corner shows). */
const PIVOT = 120;
/** Degrees between the two cards of a hand, and between one hand and the next:
 * the gap between hands is about twice as wide, so each hand reads as a pair
 * (Noam 2026-11-08). */
const INNER = 7;
const BETWEEN = 15;
/** A little wider while the finger holds the fan. */
const OPEN = 1.15;
const BOX_W = 216;
const BOX_H = 104;
const TOP = 6;

/** The group's hands as real combos (so a flush shows its suit), one per rank
 * pair ("A9s" and "A9o" are one hand), high card first, strongest hand first. */
export function fanHands(combos: [Card, Card][]): [Card, Card][] {
  const byRanks = new Map<string, [Card, Card]>();
  for (const [x, y] of combos) {
    const pair: [Card, Card] = x.r >= y.r ? [x, y] : [y, x];
    const key = `${pair[0].r}-${pair[1].r}`;
    if (!byRanks.has(key)) byRanks.set(key, pair);
  }
  return [...byRanks.values()].sort((a, b) => {
    const ap = a[0].r === a[1].r, bp = b[0].r === b[1].r;
    if (ap !== bp) return ap ? -1 : 1;
    return b[0].r - a[0].r || b[1].r - a[1].r;
  });
}

function PlayingCard({ rank, suit, angle, delay }: { rank: string; suit: string; angle: number; delay: number }) {
  const ink = SUIT_COLOR[suit];
  return (
    <span
      className="absolute rounded-[6px]"
      style={{
        left: (BOX_W - CARD_W) / 2,
        top: TOP,
        width: CARD_W,
        height: CARD_H,
        transform: `rotate(${angle}deg)`,
        transformOrigin: `${CARD_W / 2}px ${PIVOT}px`,
        transition: `transform ${delay >= 0 ? 420 : 180}ms cubic-bezier(.3,1.25,.5,1) ${Math.max(0, delay)}ms`,
        background: "linear-gradient(180deg, #FFFFFF 0%, #F6F2E8 100%)",
        border: "1px solid rgba(20,24,32,.2)",
        boxShadow: "-2px 1px 5px rgba(0,0,0,.4), inset 0 0 0 1px rgba(255,255,255,.6)",
      }}
    >
      <span className="absolute left-[3px] top-[4px] flex flex-col items-center font-[family-name:var(--font-display)] font-bold leading-none" style={{ color: ink }}>
        <span className="text-[15px] tracking-[-0.5px]">{rank}</span>
        <span className="mt-[1px] text-[12px]">{SUIT_GLYPH[suit]}</span>
      </span>
      <span className="absolute bottom-[3px] right-[4px] text-[19px] leading-none" style={{ color: ink }}>
        {SUIT_GLYPH[suit]}
      </span>
    </span>
  );
}

export function HandFan({ cards: combos, color, open = false, maxWidth = BOX_W }: { cards: [Card, Card][]; color: string; open?: boolean; maxWidth?: number }) {
  const all = fanHands(combos);
  const shown = all.slice(0, MAX_HANDS);
  const more = all.length - shown.length;
  // The cards deal in stacked, then fan out.
  const [spread, setSpread] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setSpread(true));
    return () => cancelAnimationFrame(id);
  }, []);
  const scale = Math.min(1, Math.max(0.74, maxWidth / BOX_W));
  // Each card's angle: a hand's two cards close together, a wider gap to the next hand.
  const k = open ? OPEN : 1;
  const total = (shown.length * INNER + (shown.length - 1) * BETWEEN) * k;
  const cards = shown.flatMap(([hi, lo], i) => {
    const a = -total / 2 + i * (INNER + BETWEEN) * k;
    return [
      { id: `${hi.r}${hi.s}${lo.r}${lo.s}a`, rank: rankChar(hi.r), suit: hi.s, angle: a },
      { id: `${hi.r}${hi.s}${lo.r}${lo.s}b`, rank: rankChar(lo.r), suit: lo.s, angle: a + INNER * k },
    ];
  });
  const mid = (cards.length - 1) / 2;
  return (
    <div className="relative" style={{ width: BOX_W * scale, height: BOX_H * scale + (more > 0 ? 4 : 0) }} aria-hidden="true">
      <div className="absolute left-0 top-0" style={{ width: BOX_W, height: BOX_H, transform: `scale(${scale})`, transformOrigin: "0 0" }}>
        {/* The group's color glows under the cards, as on the matrix. */}
        <span
          className="absolute left-1/2 rounded-full"
          style={{ bottom: 6, width: 120, height: 16, marginLeft: -60, background: color, filter: "blur(12px)", opacity: open ? 0.75 : 0.5, transition: "opacity 180ms ease-out" }}
        />
        {cards.map((c, i) => (
          <PlayingCard key={c.id} rank={c.rank} suit={c.suit} angle={spread ? c.angle : (i - mid) * 1.5} delay={spread && !open ? i * 18 : -1} />
        ))}
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
