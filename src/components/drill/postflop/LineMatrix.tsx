"use client";

import type { CSSProperties } from "react";
import { MATRIX_HANDS } from "@/lib/drill/matrix";
import { GROUP_INFO, GROUP_ORDER } from "@/lib/drill/postflop/line-demo";
import styles from "./LineMatrix.module.css";

const RANK_LABELS = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];

/** What the matrix draws: for every square, how many (weighted) combos are
 * in each group. Both postflop drills' snapshots fit this shape. */
export type MatrixSnap = {
  street: string;
  cells: Map<string, Partial<Record<string, number>>>;
  basis: Map<string, number>;
  total: number;
};

/** Which groups exist (stacking order, strongest first) and how each is painted. */
export type MatrixPalette = { order: readonly string[]; fill: (g: string) => string };

/** The flop-to-river demo's groups — the default. */
const LINE_PALETTE: MatrixPalette = {
  order: GROUP_ORDER,
  fill: (g) => {
    const info = GROUP_INFO[g as keyof typeof GROUP_INFO];
    return info.pattern ?? info.color;
  },
};

type LineMatrixProps = {
  snap: MatrixSnap;
  /** The picture shown just before this one — used to animate what left
   * (falling ghosts) or what changed group (flash). */
  prev?: MatrixSnap;
  /** Changes every time the picture changes, to replay the animations. */
  seq?: number;
  mini?: boolean;
  /** While the player holds a piece: its hands get a ring, the rest dim. */
  highlight?: readonly string[] | null;
  /** A piece was just sent to the bet: its hands pop once (replays when seq changes). */
  pulse?: { groups: readonly string[]; seq: number; color?: string } | null;
  palette?: MatrixPalette;
};

function sum(cell: Partial<Record<string, number>> | undefined, order: readonly string[]): number {
  if (!cell) return 0;
  return order.reduce((s, g) => s + (cell[g] ?? 0), 0);
}

export function LineMatrix({ snap, prev, seq = 0, mini = false, highlight = null, pulse = null, palette = LINE_PALETTE }: LineMatrixProps) {
  const narrowing = !!prev && snap.total < prev.total - 0.01;
  const revealing = !!prev && !narrowing && prev.street !== snap.street;

  return (
    <div className={`${styles.grid} ${mini ? styles.mini : ""}`} role="img" aria-label={`BTN range on the ${snap.street}`} data-testid={mini ? undefined : "line-matrix"}>
      {!mini && <div />}
      {!mini &&
        RANK_LABELS.map((r) => (
          <div key={`c-${r}`} className={styles.label}>
            {r}
          </div>
        ))}
      {RANK_LABELS.map((r, row) => (
        <Row
          key={r}
          row={row}
          snap={snap}
          prev={prev}
          seq={seq}
          mini={mini}
          narrowing={narrowing}
          revealing={revealing}
          highlight={highlight}
          pulse={pulse}
          palette={palette}
        />
      ))}
    </div>
  );
}

function Row({
  row,
  snap,
  prev,
  seq,
  mini,
  narrowing,
  revealing,
  highlight,
  pulse,
  palette,
}: {
  row: number;
  snap: MatrixSnap;
  prev?: MatrixSnap;
  seq: number;
  mini: boolean;
  narrowing: boolean;
  revealing: boolean;
  highlight: readonly string[] | null;
  pulse: { groups: readonly string[]; seq: number; color?: string } | null;
  palette: MatrixPalette;
}) {
  const { order, fill } = palette;
  const cells = MATRIX_HANDS.filter((c) => c.row === row);
  return (
    <>
      {!mini && <div className={styles.label}>{RANK_LABELS[row]}</div>}
      {cells.map((c) => {
        const basis = snap.basis.get(c.key);
        const now = snap.cells.get(c.key);
        const before = prev?.cells.get(c.key);
        if (!basis || (!now && !before)) return <div key={c.key} className={styles.cell} />;

        const style = { "--d": mini ? "0ms" : `${(c.row + c.col) * 11}ms` } as CSSProperties;
        const nowTotal = sum(now, order);
        const beforeTotal = sum(before, order);

        // What left this square (for the falling ghost): the group that lost the most.
        let ghost: { h: number; fill: string } | null = null;
        if (!mini && narrowing && beforeTotal - nowTotal > 0.001) {
          let lostGroup = order[order.length - 1];
          let lostMost = 0;
          for (const g of order) {
            const lost = (before?.[g] ?? 0) - (now?.[g] ?? 0);
            if (lost > lostMost) {
              lostMost = lost;
              lostGroup = g;
            }
          }
          ghost = { h: ((beforeTotal - nowTotal) / basis) * 100, fill: fill(lostGroup) };
        }

        const changed = !mini && revealing && order.some((g) => Math.abs((now?.[g] ?? 0) - (before?.[g] ?? 0)) > 0.001);
        const kept = !mini && narrowing && nowTotal > 0;
        const has = (gs: readonly string[]) => gs.some((g) => (now?.[g] ?? 0) > 0);
        const lit = !!highlight && has(highlight);
        const dim = !!highlight && !lit;
        const pop = !!pulse && has(pulse.groups);

        const cls = [
          styles.cell,
          changed ? styles.flash : "",
          kept ? styles.kept : "",
          lit ? styles.lit : "",
          dim ? styles.dim : "",
        ].join(" ");
        return (
          <div key={c.key} className={cls} style={style} title={`${c.key}`} data-hand={c.key}>
            <div className={styles.stack}>
              {order.map((g) => {
                const n = now?.[g] ?? 0;
                return <span key={g} className={styles.seg} style={{ height: `${(n / basis) * 100}%`, background: fill(g) }} />;
              })}
            </div>
            {pop && (
              <span
                key={`pop-${pulse!.seq}`}
                className={styles.pop}
                style={
                  pulse!.color
                    ? ({ "--pc": pulse!.color, boxShadow: `0 0 0 2px ${pulse!.color}, 0 0 10px ${pulse!.color}` } as CSSProperties)
                    : undefined
                }
              />
            )}
            {ghost && (
              <span key={`ghost-${seq}`} className={styles.ghost} style={{ height: `${ghost.h}%`, background: ghost.fill }} />
            )}
          </div>
        );
      })}
    </>
  );
}
