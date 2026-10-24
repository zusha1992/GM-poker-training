"use client";

import type { CSSProperties } from "react";
import { MATRIX_HANDS } from "@/lib/drill/matrix";
import { GROUP_INFO, GROUP_ORDER, type Group, type RangeSnapshot } from "@/lib/drill/postflop/line-demo";
import styles from "./LineMatrix.module.css";

const RANK_LABELS = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"];

type LineMatrixProps = {
  snap: RangeSnapshot;
  /** The picture shown just before this one — used to animate what left
   * (falling ghosts) or what changed group (flash). */
  prev?: RangeSnapshot;
  /** Changes every time the picture changes, to replay the animations. */
  seq?: number;
  mini?: boolean;
  /** While the player holds a piece: its hands get a ring, the rest dim. */
  highlight?: Group[] | null;
  /** A piece was just sent to the bet: its hands pop once (replays when seq changes). */
  pulse?: { groups: Group[]; seq: number; color?: string } | null;
};

const fillOf = (g: Group) => GROUP_INFO[g].pattern ?? GROUP_INFO[g].color;

function sum(cell: Partial<Record<Group, number>> | undefined): number {
  if (!cell) return 0;
  return GROUP_ORDER.reduce((s, g) => s + (cell[g] ?? 0), 0);
}

export function LineMatrix({ snap, prev, seq = 0, mini = false, highlight = null, pulse = null }: LineMatrixProps) {
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
}: {
  row: number;
  snap: RangeSnapshot;
  prev?: RangeSnapshot;
  seq: number;
  mini: boolean;
  narrowing: boolean;
  revealing: boolean;
  highlight: Group[] | null;
  pulse: { groups: Group[]; seq: number; color?: string } | null;
}) {
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
        const nowTotal = sum(now);
        const beforeTotal = sum(before);

        // What left this square (for the falling ghost): the group that lost the most.
        let ghost: { h: number; fill: string } | null = null;
        if (!mini && narrowing && beforeTotal - nowTotal > 0.001) {
          let lostGroup: Group = "air";
          let lostMost = 0;
          for (const g of GROUP_ORDER) {
            const lost = (before?.[g] ?? 0) - (now?.[g] ?? 0);
            if (lost > lostMost) {
              lostMost = lost;
              lostGroup = g;
            }
          }
          ghost = { h: ((beforeTotal - nowTotal) / basis) * 100, fill: fillOf(lostGroup) };
        }

        const changed =
          !mini && revealing && GROUP_ORDER.some((g) => Math.abs((now?.[g] ?? 0) - (before?.[g] ?? 0)) > 0.001);
        const kept = !mini && narrowing && nowTotal > 0;
        const has = (gs: Group[]) => gs.some((g) => (now?.[g] ?? 0) > 0);
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
              {GROUP_ORDER.map((g) => {
                const n = now?.[g] ?? 0;
                return <span key={g} className={styles.seg} style={{ height: `${(n / basis) * 100}%`, background: fillOf(g) }} />;
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
