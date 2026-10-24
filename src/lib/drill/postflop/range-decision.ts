/**
 * Data for the BTN whole-range flop decision: which hands BTN arrives at the
 * flop with, and what each of the three range actions does to every hand.
 *
 *   check  -> the whole range checks
 *   small  -> the whole range bets small (range bet)
 *   polar  -> the range splits: some hands bet big, the rest check
 *
 * The polar split is the only part that needs real strategy data. Until Uri
 * supplies it, `placeholderPolarSplit` produces a simple, clearly labeled
 * stand-in (top pair or better bets) so the animation has something honest
 * to show. Swap in coach data by returning a PolarSplit with source "coach".
 * There is deliberately no "correct answer" here yet.
 */
import { combosOf, MATRIX_HANDS } from "@/lib/drill/matrix";
import { FAMS, type Family } from "@/lib/drill/preflop/families";
import { rfiSpot } from "@/lib/drill/preflop/rfi";
import { handCategoryAt, type FlopCard } from "./btn-vs-bb";

export type RangeAction = "check" | "small" | "polar";
export type CellOutcome = "bet" | "check";

export type RangeHand = {
  hand: string;
  row: number;
  col: number;
  /** Share of this hand BTN opens preflop, 0-1 (1 = always, 0.5 = half the time). */
  weight: number;
  /** The preflop hand group (Tetris piece) this hand belongs to. */
  family: Family;
};

export type PolarSplit = {
  source: "placeholder" | "coach";
  /** One short line shown to the player explaining where the split comes from. */
  note: string;
  outcomeByHand: Map<string, CellOutcome>;
};

const FAMILY_BY_HAND = new Map<string, Family>();
for (const f of FAMS) for (const h of f.hands) FAMILY_BY_HAND.set(h, f);

/** BTN's opening range, exactly as the finished Raise First In drill paints
 * it: groups at 90%+ count as always-open, 10-90% as a partial (mix) open,
 * and everything else folded preflop and never reaches the flop. */
function buildBtnRange(): RangeHand[] {
  const strat = rfiSpot("BTN").position.strat;
  const out: RangeHand[] = [];
  for (const cell of MATRIX_HANDS) {
    const family = FAMILY_BY_HAND.get(cell.key);
    if (!family) continue;
    const f = strat[family.key] ?? 0;
    const weight = f >= 90 ? 1 : f > 10 ? f / 100 : 0;
    if (weight > 0) out.push({ hand: cell.key, row: cell.row, col: cell.col, weight, family });
  }
  return out;
}

export const BTN_RANGE: RangeHand[] = buildBtnRange();

const BET_CATEGORIES = new Set(["set", "twopair", "overpair", "toppair"]);

/** PLACEHOLDER — not reviewed strategy. Bets every hand that is top pair or
 * better on this flop and checks the rest. Exists only so the polar
 * animation shows a real, explainable division instead of random cells. */
export function placeholderPolarSplit(flop: FlopCard[], range: RangeHand[] = BTN_RANGE): PolarSplit {
  const outcomeByHand = new Map<string, CellOutcome>();
  for (const h of range) {
    outcomeByHand.set(h.hand, BET_CATEGORIES.has(handCategoryAt(flop, h.row, h.col)) ? "bet" : "check");
  }
  return {
    source: "placeholder",
    note: "Placeholder split: top pair or better bets, the rest checks. Waiting for Uri's real split.",
    outcomeByHand,
  };
}

/** What a hand does under a chosen range action. */
export function outcomeOf(action: RangeAction, hand: string, split: PolarSplit): CellOutcome {
  if (action === "check") return "check";
  if (action === "small") return "bet";
  return split.outcomeByHand.get(hand) ?? "check";
}

/** Share of the range's combos (weighted by how often each hand is opened)
 * that bets under this action, 0-100. */
export function betSharePct(action: RangeAction, split: PolarSplit, range: RangeHand[] = BTN_RANGE): number {
  let total = 0;
  let bet = 0;
  for (const h of range) {
    const c = combosOf(h.hand) * h.weight;
    total += c;
    if (outcomeOf(action, h.hand, split) === "bet") bet += c;
  }
  return total ? Math.round((bet / total) * 100) : 0;
}
