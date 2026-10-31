"use client";

import type { CSSProperties } from "react";
import { BUCKET_COLOR, type Bucket } from "@/lib/drill/postflop/price-hands";
import styles from "./MoneyPaddles.module.css";

/** Where each paddle sits, clockwise from small money to big: bluffs in the
 * bottom-left corner, 5% on the left side, 20% and 50% in the top corners,
 * 100% on the right side, showdown value in the bottom-right corner. */
type Spot = "bl" | "left" | "tl" | "tr" | "right" | "br";
const SPOT: Record<Bucket, Spot> = { bluff: "bl", little: "left", "20": "tl", "50": "tr", all: "right", sd: "br" };
/** How big a pot each paddle stands for (Noam 2026-10-31: pot sizes, not percentages). */
const LABEL: Record<Bucket, string> = { bluff: "Potential\nbluffs", sd: "Showdown\nvalue", little: "Small\npot", "20": "Medium\npot", "50": "Big\npot", all: "Stacks" };

const INSET = 6;
const STROKE = 12;
/** A side paddle's touch area is wider than the paddle itself. */
const SIDE_HIT = 58;

/** One length for every paddle (a corner's two arms add up to it, a side
 * paddle is it), as big as the area allows with room between them. */
export function paddleLength(w: number, h: number): number {
  const fromHeight = (h - 2 * INSET - 2 * 18) / 2;
  const fromWidth = w - 2 * INSET - 70;
  return Math.max(80, Math.min(fromHeight, fromWidth, 240));
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
};

/** The six drop targets as neon paddles: same design, different colors,
 * evenly placed around the frame of the drop area. */
export function MoneyPaddles({ w, h, armed, holding, flash, hitRef }: Props) {
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
        if (spot === "left" || spot === "right") {
          const side = spot;
          return (
            <div
              key={key}
              ref={(el) => hitRef(b, el)}
              className={cls}
              style={{ ...style, [side]: INSET, top: "50%", width: SIDE_HIT, height: L, transform: "translateY(-50%)" }}
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
              <span className={styles.label} style={{ [side]: STROKE + 9, top: "50%", transform: "translateY(-50%)", fontSize: 15, whiteSpace: "pre-line", textAlign: side }}>
                {LABEL[b]}
              </span>
            </div>
          );
        }
        const v = spot[0] === "t" ? "top" : "bottom";
        const hz = spot[1] === "l" ? "left" : "right";
        const radius = { [`border${cap(v)}${cap(hz)}Radius`]: r } as CSSProperties;
        const innerRadius = { [`border${cap(v)}${cap(hz)}Radius`]: Math.max(4, r - 6) } as CSSProperties;
        const word = b === "bluff" || b === "sd";
        return (
          <div key={key} ref={(el) => hitRef(b, el)} className={cls} style={{ ...style, [v]: INSET, [hz]: INSET, width: a, height: a }} data-testid={`bucket-${b}`}>
            <span
              className={styles.pool}
              style={{ ...radius, background: `radial-gradient(circle at ${hz} ${v}, color-mix(in srgb, var(--c) 45%, transparent), transparent 75%)` }}
            />
            <span className={styles.stroke} style={{ ...radius, borderStyle: "solid", ...edges(v, hz, STROKE) }} />
            <span className={styles.inner} style={{ ...innerRadius, [v]: 5, [hz]: 5, width: a - 5, height: a - 5, borderStyle: "solid", ...edges(v, hz, 2) }} />
            <span
              className={styles.label}
              style={{ [v]: STROKE + 9, [hz]: STROKE + 10, fontSize: word ? 13 : 15, textAlign: hz, whiteSpace: "pre-line", transformOrigin: `${hz} ${v}` }}
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
