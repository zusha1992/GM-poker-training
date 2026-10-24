import { RANKS, type Rank } from "@/lib/poker/types";
import { labelAt } from "@/lib/drill/matrix";
import type { DrillAction, DrillPiece, SwipeDirection } from "@/lib/drill/types";

export type FlopSuit = "s" | "h" | "d" | "c";
export type FlopCard = { rank: Rank; suit: FlopSuit };

const SUITS: FlopSuit[] = ["s", "h", "d", "c"];

function shuffle<T>(arr: readonly T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** A random dry, rainbow, unpaired flop — three different ranks, three
 * different suits. Wet or paired boards need grouping rules we haven't
 * worked out yet (how to classify draws, trips-on-board, etc.), so every
 * generated board stays in the simple case this drill already knows how
 * to handle. */
export function randomDryFlop(): FlopCard[] {
  const rankIdx = shuffle(RANKS.map((_, i) => i))
    .slice(0, 3)
    .sort((a, b) => a - b);
  const suits = shuffle(SUITS).slice(0, 3);
  return rankIdx.map((idx, i) => ({ rank: RANKS[idx], suit: suits[i] }));
}

/** Made-hand category of the matrix cell (i, j) on a board whose sorted rank
 * indexes are hi < mid < low (index 0 = Ace). Dry unpaired boards only. */
function classifyCells(i: number, j: number, hi: number, mid: number, low: number): string {
  const hitsHi = i === hi || j === hi;
  const hitsMid = i === mid || j === mid;
  const hitsLow = i === low || j === low;
  if (i === j) {
    if (i === hi || i === mid || i === low) return "set";
    if (i < hi) return "overpair";
    return "underpair";
  }
  if (hitsHi && (hitsMid || hitsLow)) return "twopair";
  if (hitsHi) return "toppair";
  if (hitsMid && hitsLow) return "twopair";
  if (hitsMid || hitsLow) return "weakpair";
  return "air";
}

/** Made-hand category ("set", "overpair", "twopair", "toppair", "weakpair",
 * "underpair", "air") of one matrix cell on this flop. */
export function handCategoryAt(flop: FlopCard[], row: number, col: number): string {
  const [hi, mid, low] = flop.map((c) => RANKS.indexOf(c.rank)).sort((a, b) => a - b);
  return classifyCells(row, col, hi, mid, low);
}

const RANK_WORD: Record<string, string> = { A: "Ace", K: "King", Q: "Queen", J: "Jack", T: "Ten" };
const rankWord = (r: string) => RANK_WORD[r] ?? r;

type Category = {
  key: string;
  name: string;
  sub: string;
  color: string;
  btn: DrillAction;
  bb: DrillAction;
};

export type PostflopModeKey = "btn" | "bb";

export type PostflopMode = {
  key: PostflopModeKey;
  title: string;
  spotLabel: string;
  swipes: Partial<Record<SwipeDirection, DrillAction>>;
  labels: Record<DrillAction, string>;
  pieces: DrillPiece[];
};

export type PostflopDeal = {
  flop: FlopCard[];
  modes: Record<PostflopModeKey, PostflopMode>;
  /** The 7-group legend for BB's per-category drill on this board. */
  legendBB: { swatch: string; label: string }[];
};

/** Builds everything that depends on a specific flop: which hand falls
 * into which made-hand category on this board, and the single "what's the
 * strategy" question for BTN's whole range.
 *
 * BTN's whole-range matrix is NOT board-dependent — it's literally BTN's
 * raise-first-in range (see BTN_RANGE in postflop/range-decision.ts),
 * unaffected by which flop comes down. Only BB's per-category drill and
 * the board display change per deal. Draft format, not reviewed by Uri:
 * category boundaries and the check/small/big read are illustrative. */
export function buildPostflopDeal(flop: FlopCard[]): PostflopDeal {
  const boardIdx = flop.map((c) => RANKS.indexOf(c.rank)).sort((a, b) => a - b);
  const [hi, mid, low] = boardIdx;
  const [hiRank, midRank, lowRank] = boardIdx.map((idx) => RANKS[idx]);

  const classify = (i: number, j: number) => classifyCells(i, j, hi, mid, low);

  const CATEGORIES: Category[] = [
    { key: "set", name: "Sets & trips", sub: "Flopped three of a kind", color: "#F2564B", btn: "small", bb: "raise" },
    { key: "overpair", name: "Overpair", sub: "Pocket pair above the board", color: "#F2564B", btn: "small", bb: "raise" },
    { key: "twopair", name: "Two pair", sub: "Both hole cards pair the board", color: "#F2B33D", btn: "small", bb: "raise" },
    { key: "toppair", name: "Top pair", sub: `Paired the ${rankWord(hiRank)}`, color: "#F2B33D", btn: "small", bb: "call" },
    { key: "weakpair", name: "Weak pair", sub: `Paired the ${rankWord(midRank)} or the ${rankWord(lowRank)}`, color: "#8F78E8", btn: "small", bb: "call" },
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

  return {
    flop,
    modes: {
      // BTN's side is one whole-range decision with no "correct" answer yet
      // (no coach data) — see BtnRangeDecision.tsx. No pieces to ask.
      btn: {
        key: "btn",
        title: "BTN c-bet",
        spotLabel: "BTN: what's the plan for the whole range?",
        swipes: { left: "check", up: "small", right: "polar" },
        labels: { check: "Check", small: "Small bet", polar: "Polar bet" },
        pieces: [],
      },
      bb: {
        key: "bb",
        title: "BB defense",
        spotLabel: "BB facing a small bet",
        swipes: { up: "raise", right: "call", left: "fold" },
        labels: { raise: "Raise", call: "Call", fold: "Fold" },
        pieces: piecesFor("bb"),
      },
    },
    legendBB: CATEGORIES.map((c) => ({ swatch: c.color, label: c.name })),
  };
}
