import { combosOf } from "@/lib/drill/matrix";
import type { DrillAction } from "@/lib/drill/types";
import { SOLVER_READS } from "./solver-reads";

/** One hand's (or group's) split: aggressive / call / fold, in %. */
export type SolverSplit = { raise: number; call: number; fold: number };

const ACTIONS = ["raise", "call", "fold"] as const;

/** A spot's solver read, or undefined while it still has no screenshot. */
export function solverRead(spot: string): Record<string, [number, number, number]> | undefined {
  return SOLVER_READS[spot];
}

export function splitOf(read: Record<string, [number, number, number]>, hand: string): SolverSplit {
  const [raise, call, fold] = read[hand] ?? [0, 0, 100];
  return { raise, call, fold };
}

/** A group's combo-weighted average split. */
export function groupSplit(read: Record<string, [number, number, number]>, hands: string[]): SolverSplit {
  let n = 0;
  const sum: SolverSplit = { raise: 0, call: 0, fold: 0 };
  for (const h of hands) {
    const k = combosOf(h);
    const s = splitOf(read, h);
    n += k;
    for (const a of ACTIONS) sum[a] += s[a] * k;
  }
  return { raise: sum.raise / n, call: sum.call / n, fold: sum.fold / n };
}

/** Noam 2026-11-03: an action at 75% or more is pure, one at 25% or less drops
 * out, anything in between is a mix (of the two biggest when three are left). */
export function ruleAnswer(s: SolverSplit): { answer: DrillAction; mixSplit?: [DrillAction, DrillAction, number]; threeWay: boolean } {
  const ranked = ACTIONS.slice().sort((a, b) => s[b] - s[a]);
  const kept = ranked.filter((a) => s[a] > 25);
  if (s[ranked[0]] >= 75 || kept.length <= 1) return { answer: kept[0] ?? ranked[0], threeWay: false };
  const [a, b] = kept;
  return { answer: "mix", mixSplit: [a, b, Math.round((s[a] / (s[a] + s[b])) * 100)], threeWay: kept.length === 3 };
}
