import { labelAt } from "@/lib/drill/matrix";
import type { DrillAction, DrillPiece, SwipeDirection } from "@/lib/drill/types";

/** Draft format check, not reviewed strategy: BTN c-bets a single size (or
 * checks) on K♠7♥2♦, BB can only call/raise/fold the small bet. Category
 * boundaries and the bet/check split are illustrative placeholders. */
export const FLOP: { rank: string; suit: "s" | "h" | "d" | "c" }[] = [
  { rank: "K", suit: "s" },
  { rank: "7", suit: "h" },
  { rank: "2", suit: "d" },
];

const BOARD_IDX = { k: 1, mid: 7, low: 12 };

function classify(i: number, j: number): string {
  const hitsK = i === BOARD_IDX.k || j === BOARD_IDX.k;
  const hitsMid = i === BOARD_IDX.mid || j === BOARD_IDX.mid;
  const hitsLow = i === BOARD_IDX.low || j === BOARD_IDX.low;
  if (i === j) {
    if (i === BOARD_IDX.k || i === BOARD_IDX.mid || i === BOARD_IDX.low) return "set";
    if (i < BOARD_IDX.k) return "overpair";
    return "underpair";
  }
  if (hitsK && (hitsMid || hitsLow)) return "twopair";
  if (hitsK) return "toppair";
  if (hitsMid && hitsLow) return "twopair";
  if (hitsMid || hitsLow) return "weakpair";
  return "air";
}

type Category = {
  key: string;
  name: string;
  sub: string;
  color: string;
  btn: DrillAction;
  bb: DrillAction;
};

const CATEGORIES: Category[] = [
  { key: "set", name: "Sets & trips", sub: "Flopped three of a kind", color: "#F2564B", btn: "small", bb: "raise" },
  { key: "overpair", name: "Overpair", sub: "Pocket pair above the board", color: "#F2564B", btn: "small", bb: "raise" },
  { key: "twopair", name: "Two pair", sub: "Both hole cards pair the board", color: "#F2B33D", btn: "small", bb: "raise" },
  { key: "toppair", name: "Top pair", sub: "Paired the King", color: "#F2B33D", btn: "small", bb: "call" },
  { key: "weakpair", name: "Weak pair", sub: "Paired the 7 or the 2", color: "#8F78E8", btn: "small", bb: "call" },
  { key: "underpair", name: "Underpair", sub: "Pocket pair below the board, no hit", color: "#8F78E8", btn: "small", bb: "call" },
  { key: "air", name: "Air", sub: "No pair at all", color: "#5B8FE0", btn: "check", bb: "fold" },
];

const CATEGORY_HANDS: Record<string, string[]> = {};
for (const cat of CATEGORIES) CATEGORY_HANDS[cat.key] = [];
for (let i = 0; i < 13; i++) {
  for (let j = 0; j < 13; j++) {
    CATEGORY_HANDS[classify(i, j)].push(labelAt(i, j));
  }
}

export type PostflopModeKey = "btn" | "bb";

export type PostflopMode = {
  key: PostflopModeKey;
  title: string;
  spotLabel: string;
  swipes: Partial<Record<SwipeDirection, DrillAction>>;
  labels: Record<DrillAction, string>;
  pieces: DrillPiece[];
};

function piecesFor(key: PostflopModeKey): DrillPiece[] {
  return CATEGORIES.map((cat) => ({
    key: cat.key,
    label: cat.name,
    sub: cat.sub,
    color: cat.color,
    hands: CATEGORY_HANDS[cat.key],
    answer: key === "btn" ? cat.btn : cat.bb,
  }));
}

export const POSTFLOP_MODES: Record<PostflopModeKey, PostflopMode> = {
  btn: {
    key: "btn",
    title: "BTN c-bet",
    spotLabel: "BTN: check or bet small",
    swipes: { left: "check", right: "small" },
    labels: { check: "Check", small: "Small bet" },
    pieces: piecesFor("btn"),
  },
  bb: {
    key: "bb",
    title: "BB defense",
    spotLabel: "BB facing a small bet",
    swipes: { up: "raise", right: "call", left: "fold" },
    labels: { raise: "Raise", call: "Call", fold: "Fold" },
    pieces: piecesFor("bb"),
  },
};

export const POSTFLOP_LEGEND = CATEGORIES.map((c) => ({ swatch: c.color, label: c.name }));
