import type { DrillMode } from "./types";

/**
 * UTG raise-first-in — ported from the real solver-screenshot-derived data
 * in public/gm-poker-training.html (see decisions/2026-10-23-rfi-ranges-
 * from-solver-screenshots.md). Only UTG is real so far; the other
 * positions are still placeholder in the vanilla-JS prototype and haven't
 * been ported here yet.
 */
export const PREFLOP_RFI_UTG: DrillMode = {
  key: "rfi-utg",
  title: "Raise first in — UTG",
  swipes: { up: "raise", left: "fold" },
  labels: { raise: "Raise", fold: "Fold" },
  colors: { raise: "#F2564B", fold: "#3D7EF0" },
  pieces: [
    {
      key: "LP",
      label: "Low pairs",
      sub: "66–22",
      color: "#8F78E8",
      hands: ["66", "55", "44", "33", "22"],
      answer: "raise",
      reveal: ["77", "88", "99", "TT", "JJ", "QQ", "KK", "AA"],
    },
    {
      key: "SAL",
      label: "Suited aces, low",
      sub: "A2s–A5s",
      color: "#3FCBA8",
      hands: ["A2s", "A3s", "A4s", "A5s"],
      answer: "raise",
      reveal: ["A6s", "A7s", "A8s", "A9s", "ATs", "AJs", "AQs", "AKs"],
    },
    {
      key: "SBF",
      label: "Suited broadway frontier",
      sub: "K9s Q9s J9s T9s",
      color: "#E8BD55",
      hands: ["K9s", "Q9s", "J9s", "T9s"],
      answer: "raise",
      reveal: ["KQs", "KJs", "KTs", "QJs", "QTs", "JTs"],
    },
    {
      key: "OBWF",
      label: "Offsuit broadway frontier",
      sub: "ATo KJo QJo",
      color: "#D9C27E",
      hands: ["ATo", "KJo", "QJo"],
      answer: "raise",
      reveal: ["AKo", "AQo", "AJo", "KQo"],
    },
    {
      key: "SC",
      label: "Suited connectors",
      sub: "98s–65s, T8s 97s",
      color: "#FF8FC1",
      hands: ["98s", "87s", "76s", "65s", "T8s", "97s"],
      answer: "fold",
    },
    {
      key: "OF",
      label: "Offsuit broadway, fold",
      sub: "KTo QTo JTo",
      color: "#8A7B5C",
      hands: ["KTo", "QTo", "JTo"],
      answer: "fold",
    },
  ],
};
