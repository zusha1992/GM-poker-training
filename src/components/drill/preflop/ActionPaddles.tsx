"use client";

import type { CSSProperties } from "react";
import { colorOf } from "@/lib/drill/colors";
import type { DrillAction, SwipeDirection } from "@/lib/drill/types";
import styles from "@/components/drill/postflop/MoneyPaddles.module.css";

const INSET = 6;
const STROKE = 12;
/** A paddle's touch area is wider than the paddle itself. */
const HIT = 58;

type Props = {
  w: number;
  h: number;
  /** Which action sits on which side (left/right/up/down). */
  swipes: Partial<Record<SwipeDirection, DrillAction>>;
  labels: Partial<Record<DrillAction, string>>;
  /** The paddle the piece is over right now. */
  armed: DrillAction | null;
  /** True while a piece is being dragged. */
  holding: boolean;
  /** Bumped when a piece lands in a paddle, to replay its flash. */
  flash: Partial<Record<DrillAction, number>>;
  /** Registers each paddle's touch area, for hit-testing the drop. */
  hitRef: (a: DrillAction, el: HTMLDivElement | null) => void;
};

/** The preflop drop targets as neon paddles, the same design as the
 * "How many big blinds?" drill: one per side of the drop area. */
export function ActionPaddles({ w, h, swipes, labels, armed, holding, flash, hitRef }: Props) {
  const side = Math.max(80, Math.min(h - 2 * INSET - 2 * HIT - 16, 220));
  const flat = Math.max(90, Math.min(w - 2 * INSET - 2 * HIT - 24, 220));
  return (
    <>
      {(Object.keys(swipes) as SwipeDirection[]).map((dir) => {
        const action = swipes[dir]!;
        const cls = [styles.paddle, holding ? styles.holding : "", armed === action ? styles.armed : "", flash[action] ? styles.flash : ""].join(" ");
        const style = { "--c": colorOf(action) } as CSSProperties;
        const label = (labels[action] ?? action).toUpperCase();
        const key = `${action}-${flash[action] ?? 0}`;
        const testId = `paddle-${action}`;
        if (dir === "left" || dir === "right") {
          return (
            <div
              key={key}
              ref={(el) => hitRef(action, el)}
              className={cls}
              style={{ ...style, [dir]: INSET, top: "50%", width: HIT, height: side, transform: "translateY(-50%)" }}
              data-testid={testId}
            >
              <span className={styles.stroke} style={{ left: dir === "left" ? 0 : "auto", right: dir === "right" ? 0 : "auto", width: STROKE, borderRadius: STROKE / 2, background: "var(--c)" }} />
              <span className={styles.inner} style={{ [dir]: 5, top: 7, bottom: 7, width: 2, borderRadius: 1, background: "#fff" }} />
              {/* Centred with flex, not a transform: the armed state scales the label. */}
              <span className={styles.label} style={{ [dir]: STROKE + 7, top: 0, bottom: 0, display: "flex", alignItems: "center", fontSize: 14, letterSpacing: "0.08em", transformOrigin: dir }}>
                {label}
              </span>
            </div>
          );
        }
        const edge = dir === "up" ? "top" : "bottom";
        return (
          <div
            key={key}
            ref={(el) => hitRef(action, el)}
            className={cls}
            style={{ ...style, [edge]: INSET, left: "50%", width: flat, height: HIT, transform: "translateX(-50%)" }}
            data-testid={testId}
          >
            <span className={styles.stroke} style={{ top: edge === "top" ? 0 : "auto", bottom: edge === "bottom" ? 0 : "auto", height: STROKE, borderRadius: STROKE / 2, background: "var(--c)" }} />
            <span className={styles.inner} style={{ [edge]: 5, left: 7, right: 7, height: 2, borderRadius: 1, background: "#fff" }} />
            <span className={styles.label} style={{ [edge]: STROKE + 6, left: 0, right: 0, display: "flex", justifyContent: "center", fontSize: 14, letterSpacing: "0.08em", transformOrigin: `center ${edge}` }}>
              {label}
            </span>
          </div>
        );
      })}
    </>
  );
}
