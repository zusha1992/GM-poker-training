"use client";

import type { CSSProperties, Ref } from "react";
import { MATRIX_HANDS } from "@/lib/drill/matrix";
import { colorOf } from "@/lib/drill/colors";
import { outcomeOf, type PolarSplit, type RangeAction, type RangeHand } from "@/lib/drill/postflop/range-decision";
import styles from "./RangeMatrix.module.css";

const RANK_LABELS = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];

/** Same color for the same meaning everywhere in the drill: checking is
 * always blue, a small bet always amber, a polar (big) bet always red. */
export function outcomeColor(action: RangeAction, outcome: "bet" | "check"): string {
  if (outcome === "check") return colorOf("check");
  return action === "small" ? colorOf("small") : colorOf("polar");
}

type RangeMatrixProps = {
  range: RangeHand[];
  split: PolarSplit;
  /** Action the finger is currently heading toward (live preview), if any.
   * The preview's strength is the CSS variable --pv on the root element,
   * written directly by the parent so dragging never re-renders 169 cells. */
  preview: RangeAction | null;
  /** The decision once committed — drives the coordinated animation. */
  committed: RangeAction | null;
  rootRef?: Ref<HTMLDivElement>;
};

/** Wave delay for one cell, in ms. Each action has its own rhythm so the
 * three are distinct even before the colors register:
 *  - small: one diagonal wave from AA outward (the range moves as one)
 *  - check: everything at once (a single calm settle)
 *  - polar: the betting group first, then the checking group falls back */
function delayFor(action: RangeAction, outcome: "bet" | "check", row: number, col: number): number {
  const diag = row + col;
  if (action === "small") return diag * 15;
  if (action === "check") return 0;
  return outcome === "bet" ? diag * 9 : 240 + diag * 5;
}

function animClass(action: RangeAction, outcome: "bet" | "check"): string {
  if (action === "small") return styles.betWave;
  if (action === "check") return styles.checkAll;
  return outcome === "bet" ? styles.polarBet : styles.polarCheck;
}

export function RangeMatrix({ range, split, preview, committed, rootRef }: RangeMatrixProps) {
  const byHand = new Map(range.map((h) => [h.hand, h]));

  return (
    <div
      ref={rootRef}
      className={styles.grid}
      role="img"
      aria-label={committed ? `BTN range after choosing ${committed}` : "BTN range on this flop"}
      data-testid="range-matrix"
    >
      <div />
      {RANK_LABELS.map((r) => (
        <div key={`c-${r}`} className={styles.label}>
          {r}
        </div>
      ))}
      {RANK_LABELS.map((r, row) => (
        <Row key={r} row={row} byHand={byHand} split={split} preview={preview} committed={committed} />
      ))}
    </div>
  );
}

function Row({
  row,
  byHand,
  split,
  preview,
  committed,
}: {
  row: number;
  byHand: Map<string, RangeHand>;
  split: PolarSplit;
  preview: RangeAction | null;
  committed: RangeAction | null;
}) {
  const cells = MATRIX_HANDS.filter((c) => c.row === row);
  return (
    <>
      <div className={styles.label}>{RANK_LABELS[row]}</div>
      {cells.map((c) => {
        const h = byHand.get(c.key);
        if (!h) return <div key={c.key} className={styles.empty} title={`${c.key} · folded preflop`} />;

        const height = `${Math.round(h.weight * 100)}%`;
        let fillColor = h.family.color;
        let cls = styles.cell;
        const style: CSSProperties & Record<string, string> = {};

        if (committed) {
          const outcome = outcomeOf(committed, h.hand, split);
          fillColor = outcomeColor(committed, outcome);
          cls += ` ${animClass(committed, outcome)}`;
          style["--d"] = `${delayFor(committed, outcome, h.row, h.col)}ms`;
        }

        // The preview layer stays mounted through the commit so it can fade
        // out instead of vanishing in one frame.
        const shown = committed ?? preview;
        let previewColor: string | undefined;
        if (shown) {
          const outcome = outcomeOf(shown, h.hand, split);
          previewColor = outcomeColor(shown, outcome);
          if (!committed && preview === "polar") cls += ` ${outcome === "bet" ? styles.previewLift : styles.previewRecede}`;
        }

        return (
          <div key={c.key} className={cls} style={style} title={h.weight < 1 ? `${h.hand} · opened ${height}` : h.hand} data-hand={h.hand}>
            <span className={styles.fill} style={{ height, backgroundColor: fillColor }} />
            {previewColor && (
              <span
                className={`${styles.preview} ${committed ? styles.previewOff : ""}`}
                style={{ height, backgroundColor: previewColor }}
              />
            )}
          </div>
        );
      })}
    </>
  );
}
