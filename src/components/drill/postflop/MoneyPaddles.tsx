"use client";

import type { CSSProperties, ReactNode } from "react";
import { BUCKET_COLOR, BUCKET_NAMES, bucketBb, type BetStreet, type Bucket } from "@/lib/drill/postflop/price-hands";
import styles from "./MoneyPaddles.module.css";

/** Where each paddle sits: an arc over the drop area like a gauge, small
 * money to big from left to right (Noam 2026-11-05: five bb boxes). 0–5 on
 * the left side, 5–15 and 25–50 in the top corners, 15–25 top middle,
 * 50–100 on the right side. The bottom stays free for the piece count.
 * Noam 2026-11-07: six boxes, the two ends on the sides (Pot is too big on
 * the left, 50–100 on the right) and the rest in the corners: 0–5 top left,
 * 5–15 bottom left, 15–25 top right, 25–50 bottom right. */
type Spot = "bl" | "left" | "tl" | "top" | "tr" | "right" | "br";
const SPOT: Record<Bucket, Spot> = { big: "left", b0: "tl", b5: "bl", b15: "tr", b25: "br", b50: "right" };
// Noam & Uri 2026-11-20: the name as bets, the bb as small print under it. Noam 2026-11-21: the
// names count the bets left on the street (BUCKET_NAMES), broken onto two lines for the paddle.
const twoLines = (s: string) => (s.includes(", ") ? s.replace(", ", ",\n") : s.replace(/ (?=\S+$)/, "\n"));
const labelsFor = (street: BetStreet) =>
  Object.fromEntries(
    (Object.keys(BUCKET_NAMES[street]) as Bucket[]).map((b) => [
      b,
      <>
        {twoLines(BUCKET_NAMES[street][b])}
        {"\n"}
        <small style={{ fontSize: 10.5, fontWeight: 600, opacity: 0.7 }}>{bucketBb(b)}</small>
      </>,
    ]),
  ) as Record<Bucket, ReactNode>;
const LABELS: Record<BetStreet, Record<Bucket, ReactNode>> = { flop: labelsFor("flop"), turn: labelsFor("turn"), river: labelsFor("river") };

const INSET = 6;
const STROKE = 12;
/** A side paddle's touch area is wider than the paddle itself. */
const SIDE_HIT = 58;

/** One length for every paddle (a corner's two arms add up to it, a side or
 * top paddle is it), as big as the area allows with room between them: a
 * side paddle sits between a top and a bottom corner, and the top row is two
 * corner arms plus the top paddle. */
export function paddleLength(w: number, h: number): number {
  const fromHeight = (h - 2 * INSET - 36) / 2;
  const fromWidth = (w - 2 * INSET - 2 * 18) / 2;
  return Math.max(80, Math.min(fromHeight, fromWidth, 200));
}

type Props = {
  w: number;
  h: number;
  /** The paddle the piece is over right now. */
  armed: Bucket | null;
  /** True while a piece is being dragged. */
  holding: boolean;
  /** Bumped when a piece lands in a paddle, to replay its flash. */
  flash: Partial<Record<Bucket, number>>;
  /** Registers each paddle's touch area, for hit-testing the drop. */
  hitRef: (b: Bucket, el: HTMLDivElement | null) => void;
  /** Which street's names (the bets left); the flop's by default. */
  street?: BetStreet;
};

/** The six drop targets as neon paddles: same design, different colors,
 * in an arc around the top of the drop area. */
export function MoneyPaddles({ w, h, armed, holding, flash, hitRef, street = "flop" }: Props) {
  const LABEL = LABELS[street];
  const L = paddleLength(w, h);
  const a = Math.round(L / 2);
  const r = Math.min(30, Math.round(a * 0.45));
  return (
    <>
      {(Object.keys(SPOT) as Bucket[]).map((b) => {
        const spot = SPOT[b];
        const cls = [styles.paddle, holding ? styles.holding : "", armed === b ? styles.armed : "", flash[b] ? styles.flash : ""].join(" ");
        const style = { "--c": BUCKET_COLOR[b] } as CSSProperties;
        const key = `${b}-${flash[b] ?? 0}`;
        if (spot === "top") {
          return (
            <div
              key={key}
              ref={(el) => hitRef(b, el)}
              className={cls}
              style={{ ...style, top: INSET, left: "50%", width: L, height: SIDE_HIT, transform: "translateX(-50%)" }}
              data-testid={`bucket-${b}`}
            >
              <span className={styles.stroke} style={{ top: 0, left: 0, right: 0, height: STROKE, borderRadius: STROKE / 2, background: "var(--c)" }} />
              <span className={styles.inner} style={{ top: 5, left: 7, right: 7, height: 2, borderRadius: 1, background: "#fff" }} />
              <span className={styles.label} style={{ top: STROKE + 8, left: 0, right: 0, fontSize: 15, textAlign: "center", transformOrigin: "center top" }}>
                {LABEL[b]}
              </span>
            </div>
          );
        }
        if (spot === "left" || spot === "right") {
          const side = spot;
          // Centered between the top and bottom corners.
          const below = INSET + a + 18;
          const top = below + Math.max(0, (h - INSET - a - 18 - below - L) / 2);
          return (
            <div
              key={key}
              ref={(el) => hitRef(b, el)}
              className={cls}
              style={{ ...style, [side]: INSET, top, width: SIDE_HIT, height: L, transformOrigin: `${side} center` }}
              data-testid={`bucket-${b}`}
            >
              <span
                className={styles.stroke}
                style={{ left: side === "left" ? 0 : "auto", right: side === "right" ? 0 : "auto", width: STROKE, borderRadius: STROKE / 2, background: "var(--c)" }}
              />
              <span
                className={styles.inner}
                style={{ [side]: 5, top: 7, bottom: 7, width: 2, borderRadius: 1, background: "#fff" }}
              />
              <span className={styles.label} style={{ [side]: STROKE + 9, top: "50%", transform: "translateY(-50%)", fontSize: 15, whiteSpace: "pre", textAlign: side }}>
                {LABEL[b]}
              </span>
            </div>
          );
        }
        const v = spot[0] === "t" ? "top" : "bottom";
        const hz = spot[1] === "l" ? "left" : "right";
        const radius = { [`border${cap(v)}${cap(hz)}Radius`]: r } as CSSProperties;
        const innerRadius = { [`border${cap(v)}${cap(hz)}Radius`]: Math.max(4, r - 6) } as CSSProperties;
        return (
          <div key={key} ref={(el) => hitRef(b, el)} className={cls} style={{ ...style, [v]: INSET, [hz]: INSET, width: a, height: a, transformOrigin: `${hz} ${v}` }} data-testid={`bucket-${b}`}>
            <span
              className={styles.pool}
              style={{ ...radius, background: `radial-gradient(circle at ${hz} ${v}, color-mix(in srgb, var(--c) 45%, transparent), transparent 75%)` }}
            />
            <span className={styles.stroke} style={{ ...radius, borderStyle: "solid", ...edges(v, hz, STROKE) }} />
            <span className={styles.inner} style={{ ...innerRadius, [v]: 5, [hz]: 5, width: a - 5, height: a - 5, borderStyle: "solid", ...edges(v, hz, 2) }} />
            <span
              className={styles.label}
              style={{ [v]: STROKE + 9, [hz]: STROKE + 10, fontSize: 15, textAlign: hz, whiteSpace: "pre", transformOrigin: `${hz} ${v}` }}
            >
              {LABEL[b]}
            </span>
          </div>
        );
      })}
    </>
  );
}

const cap = (s: string) => s[0].toUpperCase() + s.slice(1);

/** Border widths for a corner: `px` on its two outer edges, 0 on the others. */
function edges(v: string, hz: string, px: number): CSSProperties {
  const on = (side: string) => (side === v || side === hz ? px : 0);
  return { borderTopWidth: on("top"), borderBottomWidth: on("bottom"), borderLeftWidth: on("left"), borderRightWidth: on("right") };
}
