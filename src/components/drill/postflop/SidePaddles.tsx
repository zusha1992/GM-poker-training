"use client";

import type { CSSProperties } from "react";
import { paddleLength } from "./MoneyPaddles";
import styles from "./MoneyPaddles.module.css";

/** Two answer boxes as neon paddles on the sides of the drop area: the same look
 * as the attack drill's six boxes (Noam & Uri 2026-11-20: one screen for every
 * drill, only the boxes change). Used by Defend (Fold / Call), Good card, bad
 * card (Bad / Good) and Round to 100 or 0 (Check all / Bet all). */
export type SideBox<T extends string> = { id: T; label: string; sub?: string; color: string; side: "left" | "right" | "bottom" };

const INSET = 6;
const STROKE = 12;
const SIDE_HIT = 74;

export function SidePaddles<T extends string>({
  boxes,
  w,
  h,
  armed,
  holding,
  flash,
  hitRef,
}: {
  boxes: SideBox<T>[];
  w: number;
  h: number;
  armed: T | null;
  holding: boolean;
  flash: Partial<Record<T, number>>;
  hitRef: (b: T, el: HTMLDivElement | null) => void;
}) {
  const L = Math.min(h - 2 * INSET, paddleLength(w, h) * 1.7);
  return (
    <>
      {boxes.map((b) => {
        const side = b.side;
        if (side === "bottom") {
          // A third box along the bottom (Defend: Bluff-catch between Fold and Call).
          const len = Math.min(w - 2 * 90, 230);
          const cls = [styles.paddle, holding ? styles.holding : "", armed === b.id ? styles.armed : "", flash[b.id] ? styles.flash : ""].join(" ");
          return (
            <div
              key={`${b.id}-${flash[b.id] ?? 0}`}
              ref={(el) => hitRef(b.id, el)}
              className={cls}
              style={{ "--c": b.color, bottom: INSET, left: (w - len) / 2, width: len, height: 58, transformOrigin: "center bottom" } as CSSProperties}
              data-testid={`box-${b.id}`}
            >
              <span className={styles.stroke} style={{ left: 0, right: 0, top: 0, bottom: "auto", height: STROKE, borderRadius: STROKE / 2, background: "var(--c)" }} />
              <span className={styles.inner} style={{ left: 7, right: 7, top: 5, bottom: "auto", height: 2, borderRadius: 1, background: "#fff" }} />
              <span className={styles.label} style={{ left: "50%", top: STROKE + 6, transform: "translateX(-50%)", fontSize: 16, whiteSpace: "nowrap", textAlign: "center" }}>
                {b.label}
                {b.sub && <small style={{ fontSize: 10.5, fontWeight: 600, opacity: 0.7, marginLeft: 6 }}>{b.sub}</small>}
              </span>
            </div>
          );
        }
        const cls = [styles.paddle, holding ? styles.holding : "", armed === b.id ? styles.armed : "", flash[b.id] ? styles.flash : ""].join(" ");
        return (
          <div
            key={`${b.id}-${flash[b.id] ?? 0}`}
            ref={(el) => hitRef(b.id, el)}
            className={cls}
            style={{ "--c": b.color, [side]: INSET, top: (h - L) / 2, width: SIDE_HIT, height: L, transformOrigin: `${side} center` } as CSSProperties}
            data-testid={`box-${b.id}`}
          >
            <span className={styles.stroke} style={{ left: side === "left" ? 0 : "auto", right: side === "right" ? 0 : "auto", width: STROKE, borderRadius: STROKE / 2, background: "var(--c)" }} />
            <span className={styles.inner} style={{ [side]: 5, top: 7, bottom: 7, width: 2, borderRadius: 1, background: "#fff" }} />
            <span className={styles.label} style={{ [side]: STROKE + 8, top: "50%", transform: "translateY(-50%)", fontSize: 17, whiteSpace: "pre", textAlign: side }}>
              {b.label}
              {b.sub && (
                <>
                  {"\n"}
                  <small style={{ fontSize: 10.5, fontWeight: 600, opacity: 0.7 }}>{b.sub}</small>
                </>
              )}
            </span>
          </div>
        );
      })}
    </>
  );
}
