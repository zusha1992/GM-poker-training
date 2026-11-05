/**
 * "How many bb" answers from our own TexasSolver solves (Noam 2026-11-05; data
 * and setup in decisions/ranges/solver/). Each solve starts on that street in
 * the drill's model: BTN's whole range is there, BB's range is its preflop
 * calls after continuing on the earlier streets (an estimate for now).
 *
 * The box is what the group bets on that street on average once BB checks
 * (frequency × size), for groups with a pair or better that bet at least 30%
 * of the time. Bluffs and hands that rarely bet stay 0–5bb: the drill asks
 * what a group is worth. These answers win over the rule-based ones.
 */
import type { Answer, Bucket, PGroup } from "./price-hands";

const s = (bucket: Bucket, why: string): Answer => ({ bucket, why: `TexasSolver: ${why}`, sure: false });

/** Keyed by runout id ("A72 · Q♥ · 9♣") and street. */
export const SOLVER_ANSWERS: Record<string, Partial<Record<"flop" | "turn" | "river", Partial<Record<PGroup, Answer>>>>> = {
  "A72 · Q♥ · 9♣": {
    river: {
      twopair: s("b50", "sets and two pair bet every time, about 58bb on average."),
      tpgk: s("b25", "AK bets every time, about 26bb on average."),
      tpmk: s("b15", "AJ, AT and A8 bet 88% of the time, about 22bb on average."),
    },
  },
  "A72 · Q♥ · K♦": {
    river: {
      straight: s("b50", "JT (broadway) bets every time, about 73bb on average."),
      twopair: s("b50", "sets and two pair bet every time, about 59bb on average."),
      tpmk: s("b5", "AJ–A8 bet 37% of the time, about 10bb on average."),
    },
  },
  "A72 · 6♦ · K♠": {
    river: {
      twopair: s("b15", "sets and two pair bet every time, about 21bb on average (mostly 125% pot)."),
      tpgk: s("b5", "AQ bets every time, about 15bb on average."),
      tpmk: s("b5", "AJ–A8 bet 85% of the time, about 13bb on average."),
    },
  },
  "A72 · 6♦ · 8♦": {
    river: {
      flush: s("b25", "flushes bet every time, about 46bb on average."),
      straight: s("b25", "straights bet every time, about 45bb on average."),
      twopair: s("b15", "sets and two pair bet 85% of the time, about 15bb on average."),
    },
  },
  "A72 · 5♣ · K♥": {
    river: {
      straight: s("b25", "the wheel bets every time, about 47bb on average."),
      twopair: s("b15", "sets and two pair bet every time, about 22bb on average."),
      tpgk: s("b5", "AQ bets every time, about 14bb on average."),
      tpmk: s("b5", "AJ–A8 bet 60% of the time, about 9bb on average."),
    },
  },
  "A72 · 5♣ · 6♣": {
    river: {
      flush: s("b25", "flushes bet every time, about 44bb on average."),
      straight: s("b25", "straights bet every time, about 42bb on average."),
      twopair: s("b15", "sets and two pair bet 87% of the time, about 16bb on average."),
    },
  },
};
