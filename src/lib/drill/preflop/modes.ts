import { colorOf, mixGradient, OUT_OF_RANGE_PATTERN } from "@/lib/drill/colors";
import type { DrillAction, LegendEntry, SwipeDirection } from "@/lib/drill/types";

export type PreflopModeKey = "rfi" | "tb" | "fb" | "fv";

export type PreflopModeMeta = {
  key: PreflopModeKey;
  title: string;
  swipes: Partial<Record<SwipeDirection, DrillAction>>;
  labels: Record<DrillAction, string>;
  intro: string;
  phase: string;
  phaseDone: string;
  legend: LegendEntry[];
  /** Pieces are sorted "pure decisions first, mixed ones last" at drill start. */
  actionOrder: DrillAction[];
  /** Whether this mode has hands fully outside the hero's range (fb/fv). */
  hasOutOfRange: boolean;
};

const r = colorOf("raise");
const c = colorOf("call");
const f = colorOf("fold");

export const PREFLOP_MODES: Record<PreflopModeKey, PreflopModeMeta> = {
  rfi: {
    key: "rfi",
    title: "Raise first in",
    swipes: { up: "raise", left: "fold", right: "mix" },
    labels: { raise: "Raise", fold: "Fold", mix: "Mix" },
    intro: "Everyone folds to you. Build your opening range one piece at a time.",
    phase: "Clear decisions",
    phaseDone: "Clear decisions done. Now the mixed hands",
    legend: [
      { swatch: r, label: "Raise" },
      { swatch: f, label: "Fold" },
      { swatch: "var(--fold-dim)", label: "Trash" },
      { swatch: mixGradient(r, f, 50), label: "Mix" },
      { swatch: "var(--pending)", label: "Still to place" },
    ],
    actionOrder: ["raise", "fold", "mix"],
    hasOutOfRange: false,
  },
  tb: {
    key: "tb",
    title: "3-bet",
    swipes: { up: "raise", left: "fold", right: "call", down: "mix" },
    labels: { raise: "3-bet", call: "Call", fold: "Fold", mix: "Mix" },
    intro: "Someone opens before you. Decide each group: 3-bet, call, fold or mix.",
    phase: "Clear decisions",
    phaseDone: "Clear decisions done. Now the mixed hands",
    legend: [
      { swatch: r, label: "3-bet" },
      { swatch: c, label: "Call" },
      { swatch: f, label: "Fold" },
      { swatch: "var(--fold-dim)", label: "Trash" },
      { swatch: mixGradient(r, c, 50), label: "Mix" },
      { swatch: "var(--pending)", label: "Still to place" },
    ],
    actionOrder: ["raise", "call", "fold", "mix"],
    hasOutOfRange: false,
  },
  fv: {
    key: "fv",
    title: "Facing a 4-bet",
    swipes: { up: "raise", left: "fold", right: "call", down: "mix" },
    labels: { raise: "All in", call: "Call", fold: "Fold", mix: "Mix" },
    intro: "You 3-bet and got 4-bet. Decide each group of your 3-bet range: all in, call, fold or mix.",
    phase: "Clear decisions",
    phaseDone: "Clear decisions done. Now the mixed hands",
    legend: [
      { swatch: r, label: "All in" },
      { swatch: c, label: "Call" },
      { swatch: f, label: "Fold" },
      { swatch: mixGradient(r, c, 50), label: "Mix" },
      { swatch: OUT_OF_RANGE_PATTERN, label: "Not in your range" },
      { swatch: "var(--pending)", label: "Still to place" },
    ],
    actionOrder: ["raise", "call", "fold", "mix"],
    hasOutOfRange: true,
  },
  fb: {
    key: "fb",
    title: "Facing a 3-bet",
    swipes: { up: "raise", left: "fold", right: "call", down: "mix" },
    labels: { raise: "4-bet", call: "Call", fold: "Fold", mix: "Mix" },
    intro: "You opened and got 3-bet. Decide each group of your range: 4-bet, call, fold or mix.",
    phase: "Clear decisions",
    phaseDone: "Clear decisions done. Now the mixed hands",
    legend: [
      { swatch: r, label: "4-bet" },
      { swatch: c, label: "Call" },
      { swatch: f, label: "Fold" },
      { swatch: mixGradient(r, c, 50), label: "Mix" },
      { swatch: OUT_OF_RANGE_PATTERN, label: "Not in your range" },
      { swatch: "var(--pending)", label: "Still to place" },
    ],
    actionOrder: ["raise", "call", "fold", "mix"],
    hasOutOfRange: true,
  },
};
