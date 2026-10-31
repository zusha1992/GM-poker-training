/**
 * "How many big blinds?" drill (spec: Noam's "Price Every Hand" doc, agreed
 * with Uri 2026-10-28; grouping rules: decisions/price-drill-rulebook.md).
 * SRP BTN vs BB, 100bb, BTN is the player. On every street BTN's range is
 * split into hand groups of the SAME strength, and the player drags each
 * group, one at a time, into what it's worth from here: Potential bluffs,
 * Showdown value, or 5%, 20%, 50% or 100% of the stack, assuming the rest of the board
 * bricks. Bet sizes are never asked.
 *
 * Hands never leave the matrix: every street the whole range re-sorts into
 * the groups for the new board.
 *
 * All answers below are DRAFTS. `sure: false` marks the ones Uri should check.
 */
import { btnRangeCombos, card, hasStraight, rankChar, type Card, type Combo, type Street } from "./line-demo";
import type { MatrixSnap } from "@/components/drill/postflop/LineMatrix";

/** Strongest first; a hand is in exactly one group, checked top-down.
 *  pp1/pp2/pp3 = pocket pairs below the top card, by how many board ranks
 *  sit above them (pp3 = three or more). mp = pairs the second board rank,
 *  bp = pairs a lower one. sd = no pair, high card at or above the board's
 *  showdown cutoff (draws included); air = every other no-pair hand. */
export type PGroup = "monster" | "twopair" | "op" | "tpgk" | "tpmk" | "tpwk" | "pp1" | "pp2" | "pp3" | "mp" | "bp" | "sd" | "air";
export const PGROUP_ORDER: PGroup[] = ["monster", "twopair", "op", "tpgk", "tpmk", "tpwk", "pp1", "pp2", "pp3", "mp", "bp", "sd", "air"];

/** Same color and shape on every board and street. */
export const PGROUP_INFO: Record<PGroup, { color: string; shape: string }> = {
  monster: { color: "#E0413A", shape: "block6" },
  twopair: { color: "#F2853D", shape: "O" },
  op: { color: "#E46FC8", shape: "I" },
  tpgk: { color: "#3FA9F5", shape: "value" },
  tpmk: { color: "#6C8CF2", shape: "J" },
  tpwk: { color: "#22C4A1", shape: "check" },
  pp1: { color: "#9B7FEA", shape: "bluff" },
  pp2: { color: "#C59BF0", shape: "giveup" },
  pp3: { color: "#7A62C9", shape: "V" },
  mp: { color: "#9DB4C4", shape: "I3" },
  bp: { color: "#7F97A8", shape: "dot2" },
  sd: { color: "#9BE07A", shape: "plus" },
  air: { color: "#56626C", shape: "U" },
};

/** What a group is worth from here, as a share of the stack that's left
 * (Noam 2026-10-30: rough shares, not exact bb). "bluff" = Potential bluffs
 * (nothing: it can't win by checking), "sd" = Showdown value (a tiny bit),
 * "little" ≈ 5%, "20" ≈ 20%, "50" ≈ half the stack, "all" = 100%. */
export type Bucket = "bluff" | "sd" | "little" | "20" | "50" | "all";
export const BUCKETS: Bucket[] = ["bluff", "sd", "little", "20", "50", "all"];
export const BUCKET_RANK: Record<Bucket, number> = { bluff: 0, sd: 1, little: 2, "20": 3, "50": 4, all: 5 };

/** The neon paddle colors (Noam 2026-10-30): warmer = more money, violet
 * for potential bluffs, teal for showdown value. The matrix uses them too. */
export const BUCKET_COLOR: Record<Bucket, string> = {
  bluff: "#8B6CFF",
  sd: "#2EC4B6",
  little: "#F2C14E",
  "20": "#F59E3B",
  "50": "#FF6B3B",
  all: "#FF3D6E",
};

/** Tiny text for the legend and summary chips: just the number. */
export function bucketTiny(b: Bucket): string {
  return { bluff: "Bluffs", sd: "Showdown", little: "Small pot", "20": "Medium pot", "50": "Big pot", all: "Stacks" }[b];
}

/** Short text for toasts and feedback notes. */
export function bucketShort(b: Bucket): string {
  return { bluff: "potential bluff", sd: "showdown value", little: "small pot", "20": "medium pot", "50": "big pot", all: "stacks (all-in)" }[b];
}

export type Answer = { bucket: Bucket; why: string; sure: boolean; auto?: boolean };

// ---------- the board: A♣7♦2♠, 3 turns × 2 rivers ----------

type StreetKind = "flop" | "brick" | "dynamic" | "wet";
type StreetSpec = {
  card: string;
  kind: StreetKind;
  story: string;
  /** Top pair cutoffs: kicker ≥ good → tpgk, ≥ mid → tpmk, else tpwk. */
  goodKicker: number;
  midKicker: number;
  /** No-pair hands with a card this high or higher have showdown value (13 = K-high). */
  sdCutoff: number;
  answers: Partial<Record<PGroup, Answer>>;
};

const a = (bucket: Bucket, why: string, sure = false): Answer => ({ bucket, why, sure });
const autoAll = (why: string): Answer => ({ bucket: "all", why, sure: true, auto: true });

/** Straights and better place themselves unless a street says otherwise. */
const AUTO: Partial<Record<PGroup, Answer>> = {
  monster: autoAll("Straights and better want every chip in."),
};

/** The same cutoffs on every street of this board. K-high is the showdown
 * cutoff (Noam 2026-10-29); AK and AQ are the strong kickers, AJ–A8 the
 * medium ones, A6–A3 the weak ones (Noam 2026-10-30: in a single-raised pot
 * AQ is very strong on A72, grouped with AK). */
const CUT = { goodKicker: 12, midKicker: 8, sdCutoff: 13 };

const AIR = a("bluff", "No pair and no high card: it can't win by checking, so it's a potential bluff.", true);
const SD = (why = "K-high: no pair, but it sometimes wins at showdown. Draws included.") => a("sd", why, true);
/** Noam 2026-10-30: when the river completes the draws, K-high has no showdown value left. */
const SD_GONE = a("bluff", "The draws arrived and the ranges are polar: K-high can't win at showdown any more, so it's a potential bluff.");
/** A hand that has already put in what it wants: check and show down. */
const CHECKS = (why = "Check and show down.") => a("sd", why);

const A72_FLOP: StreetSpec = {
  card: "",
  kind: "flop",
  story: "A dry ace-high flop. BTN has far more strong aces than BB.",
  ...CUT,
  answers: {
    twopair: autoAll("Sets and two pair want every chip in on a dry board."),
    tpgk: a("50", "AK and AQ beat all of BB's weaker aces: three streets of value."),
    tpmk: a("20", "AJ–A8 get called by better aces too often: two thin streets."),
    tpwk: a("20", "Any ace is worth two small bets: even A6–A3 bet small now and small again."),
    pp1: a("little", "KK–88 beat every 7x and 2x: one small bet, then showdown."),
    pp2: a("sd", "66–33 lose to every 7x: check and show down."),
    mp: a("little", "Middle pair: one small bet at most."),
    bp: a("sd", "Bottom pair: check and show down."),
    sd: SD(),
    air: AIR,
  },
};

/** How BTN bets the turn (Noam 2026-10-30): a polar overbet when the turn
 * is a brick that's good for BTN, 66% when it brings or completes draws. */
export type TurnBet = "overbet" | "twoThirds";
type TurnSpec = StreetSpec & { bet: TurnBet; rivers: [StreetSpec, StreetSpec] };

const A72_TURNS: TurnSpec[] = [
  {
    card: "Q♥",
    kind: "brick",
    bet: "overbet",
    story: "Q♥ · Brick. Nothing changes for BB: BTN overbets, polar.",
    ...CUT,
    // Polar line (Noam 2026-10-30): only the top of the range and the bluffs
    // keep putting money in; everything else checks back the turn.
    answers: {
      twopair: autoAll("Two pair and better want every chip in."),
      tpgk: a("50", "AK keeps going for three streets of value: another big bet on a blank."),
      tpmk: a("20", "Top pair on a brick turn: another 20%. That's its last bet."),
      tpwk: a("20", "Top pair on a brick turn: another 20%. That's its last bet."),
      pp1: CHECKS(),
      pp2: CHECKS(),
      pp3: CHECKS(),
      mp: CHECKS("Second pair (Qx): check and show down."),
      bp: CHECKS(),
      sd: SD(),
      air: a("bluff", "No showdown value: these are the potential bluffs.", true),
    },
    rivers: [
      {
        card: "9♣",
        kind: "brick",
        story: "9♣ · Brick. Nothing completes.",
        ...CUT,
        answers: {
          twopair: autoAll("After the overbet the rest is less than two pots: all-in."),
          tpgk: a("20", "AK: one more value bet on the river."),
          tpmk: CHECKS("AJ–A8 bet the flop and the turn: that was their last bet. Show down."),
          tpwk: CHECKS("A6–A3 bet the flop and the turn: show down."),
          pp1: CHECKS(),
          pp2: CHECKS(),
          pp3: CHECKS(),
          mp: CHECKS(),
          bp: CHECKS(),
          sd: SD("The draws missed: K-high can still win at showdown."),
          air: AIR,
        },
      },
      {
        card: "K♦",
        kind: "wet",
        story: "K♦ · Wet. JT makes broadway.",
        ...CUT,
        answers: {
          twopair: a("all", "Two pair and better stay the polar value, even with broadway out there."),
          tpmk: CHECKS(),
          tpwk: CHECKS(),
          pp3: CHECKS(),
          mp: CHECKS(),
          bp: CHECKS(),
          air: AIR,
        },
      },
    ],
  },
  {
    card: "6♦",
    kind: "dynamic",
    bet: "twoThirds",
    story: "6♦ · Dynamic. A diamond flush draw and straight draws like 98, 85 and 54: BTN bets 66%.",
    ...CUT,
    answers: {
      twopair: autoAll("Still way ahead: charge every new draw."),
      tpgk: a("50", "Still well ahead: keep charging the new draws."),
      tpmk: a("little", "BB's range improved: the medium kickers slow down."),
      tpwk: a("little", "One small bet, then showdown."),
      pp1: a("sd", "KK–88 under an ace: one small bet on the flop, then check down unless they improve."),
      pp3: a("sd", "55–33 are under three cards: check and show down."),
      mp: a("little", "Keep the pot small."),
      bp: a("sd", "6x and 2x: check and show down."),
      sd: SD(),
      air: a("bluff", "No showdown value: every flush and straight draw is a potential bluff here.", true),
    },
    rivers: [
      {
        card: "K♠",
        kind: "brick",
        story: "K♠ · Brick. The draws missed.",
        ...CUT,
        answers: {
          twopair: autoAll("The draws missed: get the rest in."),
          tpgk: a("20", "AQ: one more value bet against BB's weaker aces."),
          tpmk: a("little", "One small value bet at most."),
          tpwk: a("sd", "Check and show down."),
          pp2: a("sd", "Check and show down."),
          pp3: a("sd", "Check and show down."),
          mp: a("sd", "Check and show down."),
          bp: a("sd", "Check and show down."),
          air: AIR,
        },
      },
      {
        card: "8♦",
        kind: "wet",
        story: "8♦ · Wet. The diamond flush and the 95, T9 and 54 straights all complete.",
        ...CUT,
        answers: {
          twopair: a("20", "Behind every flush and straight: one value bet at most."),
          tpgk: a("little", "Top pair is a bluff-catcher now."),
          tpmk: a("sd", "Check and show down."),
          tpwk: a("sd", "Check and show down."),
          pp1: a("sd", "Check and show down.", true),
          pp3: a("sd", "Check and show down.", true),
          mp: a("sd", "Check and show down.", true),
          bp: a("sd", "Check and show down.", true),
          sd: SD_GONE,
          air: AIR,
        },
      },
    ],
  },
  {
    card: "5♣",
    kind: "wet",
    bet: "twoThirds",
    story: "5♣ · Wet. 43 makes the wheel, and a club flush draw and more straight draws arrive: BTN bets 66%.",
    ...CUT,
    answers: {
      twopair: a("50", "The wheel is possible now: still big, but not all-in."),
      tpgk: a("20", "BB's range got stronger: one step down."),
      tpmk: a("little", "One small bet, then showdown."),
      tpwk: a("little", "A4 and A3 picked up a wheel draw: one small bet."),
      pp1: a("sd", "KK–88 under an ace: one small bet on the flop, then check down unless they improve."),
      pp2: a("sd", "66 is between the 7 and the 5: check and show down."),
      pp3: a("sd", "Check and show down."),
      mp: a("sd", "7x: check and show down."),
      bp: a("sd", "5x and 2x: check and show down."),
      sd: SD(),
      air: a("bluff", "No showdown value: every flush and straight draw is a potential bluff here.", true),
    },
    rivers: [
      {
        card: "K♥",
        kind: "brick",
        story: "K♥ · Brick. The draws missed.",
        ...CUT,
        answers: {
          twopair: a("50", "The draws missed, but the wheel is still out there: big, not all-in."),
          tpgk: a("20", "The draws missed: back to a value bet."),
          tpmk: a("little", "One small value bet at most."),
          tpwk: a("sd", "Check and show down."),
          pp2: a("sd", "Check and show down."),
          pp3: a("sd", "Check and show down."),
          mp: a("sd", "Check and show down."),
          bp: a("sd", "Check and show down."),
          air: AIR,
        },
      },
      {
        card: "6♣",
        kind: "wet",
        story: "6♣ · Wet. The club flush and the 43, 84 and 98 straights complete.",
        ...CUT,
        answers: {
          twopair: a("20", "Behind every flush and straight: one value bet at most."),
          tpgk: a("little", "Top pair is a bluff-catcher now."),
          tpmk: a("sd", "Check and show down."),
          tpwk: a("sd", "Check and show down."),
          pp1: a("sd", "Check and show down.", true),
          pp2: a("sd", "Check and show down.", true),
          pp3: a("sd", "Check and show down.", true),
          mp: a("sd", "Check and show down.", true),
          bp: a("sd", "Check and show down.", true),
          sd: SD_GONE,
          air: AIR,
        },
      },
    ],
  },
];

// ---------- the board: J♠T♠3♣, 3 turns × 2 rivers (drafts, built from the rulebook) ----------

/** J♠T♠3♣: no ace, two-tone, connected. Top pair kickers: AJ–KJ good,
 * every other jack (QJ–J2) one group: Noam 2026-10-31. No ace pairs here, so A-high is the
 * showdown cutoff. */
const JT3_CUT = { goodKicker: 13, midKicker: 2, sdCutoff: 14 };
const A_HIGH_SD = (why = "A-high: no pair, but it sometimes wins at showdown. Draws included.") => a("sd", why);
const A_HIGH_GONE = a("bluff", "The draws arrived and the ranges are polar: A-high can't win at showdown any more, so it's a potential bluff.");
const JT3_AIR = a("bluff", "No pair and no ace: it can't win by checking, so it's a potential bluff. Flush and straight draws live here.", true);
const SHOW = (why = "Check and show down.") => a("sd", why);

const JT3_FLOP: StreetSpec = {
  card: "",
  kind: "flop",
  story: "A connected two-tone flop with no ace: BB's range hits it much more than on A72.",
  ...JT3_CUT,
  answers: {
    twopair: autoAll("Sets and JT want every chip in on a wet board."),
    op: a("50", "QQ–AA beat every jack, but this board moves: build the pot now."),
    tpgk: a("20", "AJ and KJ: two streets of value against BB's weaker jacks and draws."),
    tpmk: a("20", "Top pair wants 20% on the flop, even on a moving board, assuming it bricks."),
    tpwk: a("little", "J8 and below: one small bet at most."),
    pp1: SHOW(),
    pp2: SHOW("99–44 are under two broadway cards: check and show down."),
    pp3: SHOW("22 is under every card: check and show down."),
    mp: a("little", "Second pair (Tx): one small bet at most."),
    bp: SHOW("Bottom pair (3x): check and show down."),
    sd: A_HIGH_SD(),
    air: JT3_AIR,
  },
};

const JT3_TURNS: TurnSpec[] = [
  {
    card: "2♥",
    kind: "brick",
    bet: "overbet",
    story: "2♥ · Brick. Nothing changes: BTN overbets, polar.",
    ...JT3_CUT,
    answers: {
      twopair: autoAll("Sets and two pair want every chip in."),
      op: a("50", "QQ–AA beat every jack: another big bet on a blank."),
      tpgk: a("20", "Top pair on a brick turn: another 20%. That's its last bet."),
      tpmk: a("20", "Top pair on a brick turn: another 20%. That's its last bet."),
      tpwk: CHECKS(),
      pp1: CHECKS(),
      pp2: CHECKS(),
      pp3: CHECKS(),
      mp: CHECKS(),
      bp: CHECKS(),
      sd: A_HIGH_SD(),
      air: a("bluff", "Flush draws, straight draws and air: the potential bluffs.", true),
    },
    rivers: [
      {
        card: "3♦",
        kind: "brick",
        story: "3♦ · Brick. The board pairs and every draw missed.",
        ...JT3_CUT,
        answers: {
          twopair: autoAll("Nothing got there: get the rest in."),
          op: a("20", "QQ–AA: one more value bet."),
          tpgk: CHECKS("Top pair bet the flop and the turn: that was its last bet. Show down."),
          tpmk: CHECKS("Top pair bet the flop and the turn: that was its last bet. Show down."),
          tpwk: CHECKS(),
          pp1: CHECKS(),
          pp2: CHECKS(),
          pp3: CHECKS(),
          mp: CHECKS(),
          bp: CHECKS(),
          sd: A_HIGH_SD("The draws missed: A-high can still win at showdown."),
          air: JT3_AIR,
        },
      },
      {
        card: "9♠",
        kind: "wet",
        story: "9♠ · Wet. The spade flush and the KQ, Q8 and 87 straights complete.",
        ...JT3_CUT,
        answers: {
          twopair: a("20", "Behind every flush and straight now: one value bet at most."),
          op: SHOW("Overpairs are bluff-catchers now."),
          tpgk: SHOW(),
          tpmk: SHOW(),
          tpwk: SHOW(),
          pp1: SHOW(),
          pp2: SHOW(),
          pp3: SHOW(),
          mp: SHOW(),
          bp: SHOW(),
          sd: A_HIGH_GONE,
          air: JT3_AIR,
        },
      },
    ],
  },
  {
    card: "6♣",
    kind: "dynamic",
    bet: "twoThirds",
    story: "6♣ · Dynamic. A second flush draw (clubs) arrives: BTN bets 66%.",
    ...JT3_CUT,
    answers: {
      twopair: autoAll("Still way ahead: charge both flush draws."),
      op: a("50", "QQ–AA are still ahead: keep charging the draws."),
      tpgk: a("20", "AJ and KJ: the second small bet goes in now."),
      tpmk: a("little", "QJ–J7: one more small bet at most."),
      tpwk: SHOW(),
      pp1: SHOW(),
      pp2: SHOW(),
      pp3: SHOW(),
      mp: SHOW("Tx: check and show down."),
      bp: SHOW(),
      sd: A_HIGH_SD(),
      air: JT3_AIR,
    },
    rivers: [
      {
        card: "3♦",
        kind: "brick",
        story: "3♦ · Brick. The board pairs and both flush draws missed.",
        ...JT3_CUT,
        answers: {
          twopair: autoAll("The draws missed: get the rest in."),
          op: a("20", "One more value bet against BB's jacks."),
          tpgk: a("little", "One small value bet at most."),
          tpmk: SHOW(),
          tpwk: SHOW(),
          pp1: SHOW(),
          pp2: SHOW(),
          pp3: SHOW(),
          mp: SHOW(),
          bp: SHOW(),
          sd: A_HIGH_SD("The draws missed: A-high can still win at showdown."),
          air: JT3_AIR,
        },
      },
      {
        card: "Q♠",
        kind: "wet",
        story: "Q♠ · Wet. The spade flush and the AK, K9 and 98 straights complete.",
        ...JT3_CUT,
        answers: {
          twopair: a("20", "Behind every flush and straight now: one value bet at most."),
          op: SHOW("Overpairs are bluff-catchers now."),
          tpgk: SHOW(),
          tpmk: SHOW(),
          tpwk: SHOW(),
          pp1: SHOW(),
          pp2: SHOW(),
          pp3: SHOW(),
          mp: SHOW(),
          bp: SHOW(),
          sd: A_HIGH_GONE,
          air: JT3_AIR,
        },
      },
    ],
  },
  {
    card: "9♠",
    kind: "wet",
    bet: "twoThirds",
    story: "9♠ · Wet. The spade flush and the KQ, Q8 and 87 straights arrive: BTN bets 66%.",
    ...JT3_CUT,
    answers: {
      twopair: a("50", "Strong, but every flush and straight beats it now: big, not all-in."),
      op: a("little", "QQ–AA without a spade: one small bet at most."),
      tpgk: a("little", "AJ and KJ: one small bet at most."),
      tpmk: SHOW(),
      tpwk: SHOW(),
      pp1: SHOW(),
      pp2: SHOW(),
      pp3: SHOW(),
      mp: SHOW(),
      bp: SHOW(),
      sd: A_HIGH_SD(),
      air: JT3_AIR,
    },
    rivers: [
      {
        card: "2♦",
        kind: "brick",
        story: "2♦ · Brick. Nothing new completes.",
        ...JT3_CUT,
        answers: {
          twopair: a("50", "Still strong, with the flush and straights already out: big, not all-in."),
          op: a("little", "One small value bet at most."),
          tpgk: SHOW(),
          tpmk: SHOW(),
          tpwk: SHOW(),
          pp1: SHOW(),
          pp2: SHOW(),
          pp3: SHOW(),
          mp: SHOW(),
          bp: SHOW(),
          sd: A_HIGH_SD(),
          air: JT3_AIR,
        },
      },
      {
        card: "8♠",
        kind: "wet",
        story: "8♠ · Wet. A fourth spade: any single spade makes a flush.",
        ...JT3_CUT,
        answers: {
          twopair: a("little", "Behind every spade now: one small bet at most."),
          op: SHOW("Overpairs are bluff-catchers now."),
          tpgk: SHOW(),
          tpmk: SHOW(),
          tpwk: SHOW(),
          pp1: SHOW(),
          pp2: SHOW(),
          pp3: SHOW(),
          mp: SHOW(),
          bp: SHOW(),
          sd: A_HIGH_GONE,
          air: JT3_AIR,
        },
      },
    ],
  },
];

/** A board of the drill: its flop, cutoffs and answers, and its runouts. */
type BoardSpec = { name: string; flop: [string, string, string]; blurb: string; flopSpec: StreetSpec; turns: TurnSpec[] };

// ---------- boards 3–10: answers computed from the rulebook ----------
//
// Instead of hand-writing every answer, these boards use the rulebook's
// "value plan": how many streets of value each group wants on a brick
// runout, spent street by street. All drafts for Uri and Noam to correct;
// a rule change here changes every one of these boards at once.

/** Streets of value a group wants (rulebook 2c and section 6). */
function valueStreets(g: PGroup, wetFlop: boolean): number {
  if (g === "op") return 3;
  if (g === "tpgk") return wetFlop ? 2 : 3; // strong kicker: three streets on a dry flop, two on a wet one
  if (g === "tpmk" || g === "tpwk") return 2; // top pair: 20% on the flop, 20% on a brick turn, then showdown
  if (g === "pp1" || g === "mp") return 1; // one small bet on the flop, then check down
  return 0;
}

const FLOP_BUCKET: Record<number, Bucket> = { 3: "50", 2: "20", 1: "little", 0: "sd" };

type RunoutKinds = { wetFlop: boolean; turn?: StreetKind; river?: StreetKind };

/** What one group wants on one street of a generated board. */
function ruleAnswer(g: PGroup, street: Street, k: RunoutKinds): Answer {
  if (g === "monster") return autoAll("Straights and better want every chip in.");
  if (g === "air") return a("bluff", "No pair and no showdown value: it can't win by checking, so it's a potential bluff.", true);
  if (g === "sd") {
    if (street === "river" && k.river === "wet") return a("bluff", "The draws arrived and the ranges are polar: this high card can't win at showdown any more.");
    return a("sd", "No pair, but the highest cards sometimes win at showdown. Draws included.", true);
  }
  if (g === "twopair") {
    if (street === "flop" || (street === "turn" && k.turn !== "wet")) return autoAll("Sets and two pair want every chip in.");
    if (street === "turn") return a("50", "The turn completed draws: still big, not all-in.");
    if (k.river === "wet") return a("20", "Behind every new flush and straight: one value bet at most.");
    return k.turn === "wet" ? a("50", "The draws missed, but the turn already brought them: big, not all-in.") : autoAll("Nothing got there: get the rest in.");
  }
  const n = valueStreets(g, k.wetFlop);
  if (street === "flop") {
    const b = FLOP_BUCKET[n];
    const why =
      n === 3 ? "Three streets of value on a brick runout." : n === 2 ? "Two small bets: 20% now, 20% more on a brick turn." : n === 1 ? "One small bet, then check down unless it improves." : "Check and show down.";
    return a(b, why);
  }
  if (street === "turn") {
    const left = n - 1;
    if (left <= 0) return a("sd", n === 1 ? "It already made its one small bet: check and show down." : "Check and show down.");
    if (k.turn === "brick") return left >= 2 ? a("50", "A blank: keep going for value.") : a("20", "Top pair on a brick turn: another 20%. That's its last bet.");
    if (k.turn === "dynamic") return left >= 2 ? a("50", "Still ahead: keep charging the new draws.") : a("little", "BB's range improved: one more small bet at most.");
    return left >= 2 ? a("20", "The turn completed draws: one step down.") : a("little", "The turn completed draws: one small bet at most.");
  }
  const left = n - 2;
  if (left <= 0) return a("sd", n === 2 ? "It bet the flop and the turn: that was its last bet. Show down." : "Check and show down.");
  if (k.river === "wet") return a("little", "The river completed draws: a bluff-catcher now, a small bet at most.");
  return k.turn === "wet" ? a("little", "The draws missed, but the turn was scary: one small value bet.") : a("20", "One more value bet on a blank river.");
}

/** Kicker and showdown cutoffs from the board itself: the two best kickers
 * are "good" (AK/AQ on an ace, AK/KQ on a king, AQ/KQ below), every other
 * kicker one group (Noam 2026-10-31); A-high has showdown value unless an
 * ace is on board, then K-high. */
function rulesCut(board: Card[]): Pick<StreetSpec, "goodKicker" | "midKicker" | "sdCutoff"> {
  const top = Math.max(...board.map((c) => c.r));
  const goodKicker = top >= 13 ? 12 : 13;
  return { goodKicker, midKicker: 2, sdCutoff: board.some((c) => c.r === 14) ? 13 : 14 };
}

function ruleAnswers(street: Street, board: Card[], k: RunoutKinds): Partial<Record<PGroup, Answer>> {
  return Object.fromEntries(PGROUP_ORDER.map((g) => [g, ruleAnswer(g, street, k)])) as Partial<Record<PGroup, Answer>>;
}

type RuleTurn = { card: string; kind: Exclude<StreetKind, "flop" | "wet"> | "wet"; story: string; rivers: [{ card: string; story: string }, { card: string; story: string }] };
type RuleBoard = { name: string; flop: [string, string, string]; blurb: string; wetFlop: boolean; story: string; turns: [RuleTurn, RuleTurn, RuleTurn] };

/** A board from its cards and runouts; every answer comes from ruleAnswer.
 * Turn size (information only): overbet on a brick, 66% otherwise. */
function ruleBoard(b: RuleBoard): BoardSpec {
  const flopCards = b.flop.map(card);
  const flopSpec: StreetSpec = { card: "", kind: "flop", story: b.story, ...rulesCut(flopCards), answers: ruleAnswers("flop", flopCards, { wetFlop: b.wetFlop }) };
  const turns = b.turns.map((t): TurnSpec => {
    const turnBoard = [...flopCards, card(t.card)];
    const rivers = t.rivers.map((rv, i): StreetSpec => {
      const kind: StreetKind = i === 0 ? "brick" : "wet";
      const riverBoard = [...turnBoard, card(rv.card)];
      return { card: rv.card, kind, story: rv.story, ...rulesCut(riverBoard), answers: ruleAnswers("river", riverBoard, { wetFlop: b.wetFlop, turn: t.kind, river: kind }) };
    }) as [StreetSpec, StreetSpec];
    return {
      card: t.card,
      kind: t.kind,
      bet: t.kind === "brick" ? "overbet" : "twoThirds",
      story: t.story,
      ...rulesCut(turnBoard),
      answers: ruleAnswers("turn", turnBoard, { wetFlop: b.wetFlop, turn: t.kind }),
      rivers,
    };
  });
  return { name: b.name, flop: b.flop, blurb: b.blurb, flopSpec, turns };
}

/** Boards 3–10, picked from Noam's planning doc for different lessons.
 * Each turn: brick / dynamic / wet; each turn's rivers: brick first, then wet. */
const RULE_BOARDS: RuleBoard[] = [
  {
    name: "K54",
    flop: ["K♠", "5♥", "4♣"],
    blurb: "King-high with low connectors",
    wetFlop: false,
    story: "King-high with a low connected pair of cards: BTN has the kings, BB the 5x and 4x.",
    turns: [
      { card: "Q♦", kind: "brick", story: "Q♦ · Brick. Nothing new for BB: BTN overbets, polar.", rivers: [{ card: "4♦", story: "4♦ · Brick. The board pairs, no new straights." }, { card: "3♥", story: "3♥ · Wet. A2, 76 and 62 make straights." }] },
      { card: "9♥", kind: "dynamic", story: "9♥ · Dynamic. A heart flush draw and gutshots like 76, 87, 86: BTN bets 66%.", rivers: [{ card: "4♦", story: "4♦ · Brick. The board pairs." }, { card: "6♥", story: "6♥ · Wet. The heart flush and the 87, 73, 32 straights come in." }] },
      { card: "3♠", kind: "wet", story: "3♠ · Wet. A2, 62 and 76 make straights, and a spade draw arrives: BTN bets 66%.", rivers: [{ card: "9♦", story: "9♦ · Brick. Nothing new completes." }, { card: "2♠", story: "2♠ · Wet. The spade flush, and any A or 6 makes a straight." }] },
    ],
  },
  {
    name: "QT7",
    flop: ["Q♥", "T♦", "7♠"],
    blurb: "Middle cards, rainbow",
    wetFlop: true,
    story: "Queen-high with tens and sevens: plenty of straight draws for both players.",
    turns: [
      { card: "2♣", kind: "brick", story: "2♣ · Brick. A blank: BTN overbets, polar.", rivers: [{ card: "3♦", story: "3♦ · Brick. Nothing completes." }, { card: "9♥", story: "9♥ · Wet. KJ, J8 and 86 make straights." }] },
      { card: "5♦", kind: "dynamic", story: "5♦ · Dynamic. A diamond flush draw and low straight draws (86, 64): BTN bets 66%.", rivers: [{ card: "2♣", story: "2♣ · Brick. The draws missed." }, { card: "9♦", story: "9♦ · Wet. The diamond flush and the KJ, J8, 86 straights come in." }] },
      { card: "J♥", kind: "wet", story: "J♥ · Wet. AK, K9 and 98 make straights, and a heart draw arrives: BTN bets 66%.", rivers: [{ card: "3♣", story: "3♣ · Brick. Nothing new." }, { card: "K♥", story: "K♥ · Wet. The heart flush, and any A or 9 makes a straight." }] },
    ],
  },
  {
    name: "986",
    flop: ["9♠", "8♦", "6♣"],
    blurb: "Very connected, low",
    wetFlop: true,
    story: "A low, very connected flop: it hits BB's calling range hard.",
    turns: [
      { card: "2♥", kind: "brick", story: "2♥ · Brick. A blank: BTN overbets, polar.", rivers: [{ card: "K♣", story: "K♣ · Brick. An overcard, no straight." }, { card: "7♥", story: "7♥ · Wet. Any T or 5 makes a straight." }] },
      { card: "K♦", kind: "dynamic", story: "K♦ · Dynamic. An overcard and a diamond draw: BTN bets 66%.", rivers: [{ card: "3♥", story: "3♥ · Brick. The draws missed." }, { card: "T♦", story: "T♦ · Wet. The diamond flush, and any 7 or QJ makes a straight." }] },
      { card: "7♠", kind: "wet", story: "7♠ · Wet. Any T or 5 makes a straight, and a spade draw arrives: BTN bets 66%.", rivers: [{ card: "2♦", story: "2♦ · Brick. Nothing new." }, { card: "J♠", story: "J♠ · Wet. The spade flush, and QT now beats any T." }] },
    ],
  },
  {
    name: "KQT",
    flop: ["K♦", "Q♣", "T♥"],
    blurb: "Broadway, connected, rainbow",
    wetFlop: true,
    story: "Three broadway cards: AJ already has the nuts, and BTN has far more of the strong hands.",
    turns: [
      { card: "3♠", kind: "brick", story: "3♠ · Brick. A blank: BTN overbets, polar.", rivers: [{ card: "4♦", story: "4♦ · Brick. Nothing new." }, { card: "J♠", story: "J♠ · Wet. Any A or 9 makes a straight." }] },
      { card: "7♣", kind: "dynamic", story: "7♣ · Dynamic. A club draw and J9, 98 draws: BTN bets 66%.", rivers: [{ card: "2♥", story: "2♥ · Brick. The draws missed." }, { card: "9♣", story: "9♣ · Wet. The club flush, and any J and 86 make straights." }] },
      { card: "J♦", kind: "wet", story: "J♦ · Wet. Any A or 9 makes a straight, and a diamond draw arrives: BTN bets 66%.", rivers: [{ card: "4♠", story: "4♠ · Brick. Nothing new." }, { card: "8♦", story: "8♦ · Wet. The diamond flush comes in." }] },
    ],
  },
  {
    name: "A76",
    flop: ["A♥", "7♥", "6♣"],
    blurb: "Ace-high, two-tone, connected",
    wetFlop: true,
    story: "Ace-high again, but two-tone with a 7-6: much more dangerous than A72.",
    turns: [
      { card: "K♠", kind: "brick", story: "K♠ · Brick. No new draws: BTN overbets, polar.", rivers: [{ card: "2♦", story: "2♦ · Brick. Every draw missed." }, { card: "8♥", story: "8♥ · Wet. The heart flush, and 95, T9, 54 make straights." }] },
      { card: "Q♣", kind: "dynamic", story: "Q♣ · Dynamic. A second flush draw and broadway gutshots: BTN bets 66%.", rivers: [{ card: "2♠", story: "2♠ · Brick. The draws missed." }, { card: "5♥", story: "5♥ · Wet. The heart flush, and 98, 84, 43 make straights." }] },
      { card: "8♥", kind: "wet", story: "8♥ · Wet. The heart flush, and 95, T9, 54 make straights: BTN bets 66%.", rivers: [{ card: "2♦", story: "2♦ · Brick. Nothing new." }, { card: "T♥", story: "T♥ · Wet. A fourth heart, and any 9 makes a straight." }] },
    ],
  },
  {
    name: "KQ4",
    flop: ["K♦", "Q♦", "4♠"],
    blurb: "Two high cards, two-tone",
    wetFlop: false,
    story: "King-queen with a flush draw: BTN's range is full of strong kings and queens.",
    turns: [
      { card: "2♣", kind: "brick", story: "2♣ · Brick. A blank: BTN overbets, polar.", rivers: [{ card: "7♥", story: "7♥ · Brick. Nothing completes." }, { card: "J♦", story: "J♦ · Wet. The diamond flush, and AT, T9 make straights." }] },
      { card: "8♠", kind: "dynamic", story: "8♠ · Dynamic. A second flush draw and small gutshots: BTN bets 66%.", rivers: [{ card: "3♥", story: "3♥ · Brick. The draws missed." }, { card: "T♦", story: "T♦ · Wet. The diamond flush, and AJ, J9 make straights." }] },
      { card: "A♦", kind: "wet", story: "A♦ · Wet. The diamond flush comes in, and JT makes broadway: BTN bets 66%.", rivers: [{ card: "7♣", story: "7♣ · Brick. Nothing new." }, { card: "T♦", story: "T♦ · Wet. A fourth diamond, and any J makes broadway." }] },
    ],
  },
  {
    name: "T87",
    flop: ["T♥", "8♥", "7♠"],
    blurb: "Very wet, two-tone",
    wetFlop: true,
    story: "The wettest board here: straights already possible, flush draws, and BB hits it hard.",
    turns: [
      { card: "2♦", kind: "brick", story: "2♦ · Brick. A blank: BTN overbets, polar.", rivers: [{ card: "3♣", story: "3♣ · Brick. Every draw missed." }, { card: "9♥", story: "9♥ · Wet. The heart flush, and any J or 6 makes a straight." }] },
      { card: "A♠", kind: "dynamic", story: "A♠ · Dynamic. An overcard and a second flush draw: BTN bets 66%.", rivers: [{ card: "2♣", story: "2♣ · Brick. The draws missed." }, { card: "6♠", story: "6♠ · Wet. The spade flush, and any 9 or 54 makes a straight." }] },
      { card: "9♥", kind: "wet", story: "9♥ · Wet. The heart flush, and any J or 6 makes a straight: BTN bets 66%.", rivers: [{ card: "2♣", story: "2♣ · Brick. Nothing new." }, { card: "Q♥", story: "Q♥ · Wet. A fourth heart, and any J makes a straight." }] },
    ],
  },
  {
    name: "962",
    flop: ["9♦", "6♦", "2♥"],
    blurb: "Low and two-tone",
    wetFlop: false,
    story: "A low, two-tone flop: overpairs are strong, and BB has plenty of 9x and 6x.",
    turns: [
      { card: "2♣", kind: "brick", story: "2♣ · Brick. The board pairs, no new draws: BTN overbets, polar.", rivers: [{ card: "K♠", story: "K♠ · Brick. An overcard, nothing completes." }, { card: "8♦", story: "8♦ · Wet. The diamond flush, and T7, 75 make straights." }] },
      { card: "Q♥", kind: "dynamic", story: "Q♥ · Dynamic. An overcard, a second flush draw and a JT draw: BTN bets 66%.", rivers: [{ card: "A♣", story: "A♣ · Brick. The draws missed." }, { card: "T♦", story: "T♦ · Wet. The diamond flush, and KJ, J8, 87 make straights." }] },
      { card: "8♦", kind: "wet", story: "8♦ · Wet. The diamond flush, and T7, 75 make straights: BTN bets 66%.", rivers: [{ card: "K♣", story: "K♣ · Brick. Nothing new." }, { card: "7♣", story: "7♣ · Wet. Four to a straight: any T or 5." }] },
    ],
  },
];

const GENERATED_BOARDS: BoardSpec[] = RULE_BOARDS.map(ruleBoard);


/** Every board in the drill. Each has 3 turns × 2 rivers = 6 runouts. */
export const BOARDS: BoardSpec[] = [
  { name: "A72", flop: ["A♣", "7♦", "2♠"], blurb: "Dry, ace-high, rainbow", flopSpec: A72_FLOP, turns: A72_TURNS },
  { name: "JT3", flop: ["J♠", "T♠", "3♣"], blurb: "Wet, no ace, two-tone", flopSpec: JT3_FLOP, turns: JT3_TURNS },
  ...GENERATED_BOARDS,
];

/** Pot and stack at the start of each street. The flop is always a small
 * bet (1.8bb) and a call; the turn is an overbet (13.7bb) or 66% (6bb) and a
 * call, so the river pot depends on the turn. */
function moneyOf(street: Street, bet: TurnBet): { pot: number; behind: number } {
  if (street === "flop") return { pot: 5.5, behind: 97.5 };
  if (street === "turn") return { pot: 9.1, behind: 95.7 };
  return bet === "overbet" ? { pot: 36.5, behind: 82 } : { pot: 21.1, behind: 89.7 };
}

export type RunoutSpec = { id: string; board: string; flop: string[]; turnBet: TurnBet; streets: [StreetSpec, StreetSpec, StreetSpec] };

/** Every runout of every board, board by board. */
export const RUNOUTS: RunoutSpec[] = BOARDS.flatMap((b) =>
  b.turns.flatMap((t) =>
    t.rivers.map((rv) => ({
      id: `${b.name} · ${t.card} · ${rv.card}`,
      board: b.name,
      flop: b.flop,
      turnBet: t.bet,
      streets: [b.flopSpec, t, rv] as [StreetSpec, StreetSpec, StreetSpec],
    })),
  ),
);

// ---------- hand groups ----------

const SUITS = ["s", "h", "d", "c"] as const;

/** Distinct board ranks, high to low. */
const boardRanks = (board: Card[]) => [...new Set(board.map((c) => c.r))].sort((p, q) => q - p);

/** The group one combo is in on this board (checked top-down). */
export function priceGroupOf(hole: [Card, Card], board: Card[], cut: Pick<StreetSpec, "goodKicker" | "midKicker" | "sdCutoff">): PGroup {
  const all = [...hole, ...board];
  const [x, y] = hole;
  const pocket = x.r === y.r;
  const boardCount = (r: number) => board.filter((c) => c.r === r).length;
  const ranks = boardRanks(board);
  const top = ranks[0];

  // Straights and better: a flush or straight that uses a hole card, a full house, quads.
  const flush = SUITS.some((s) => all.filter((c) => c.s === s).length >= 5 && (x.s === s || y.s === s));
  const straight = hasStraight(all.map((c) => c.r)) && !hasStraight(board.map((c) => c.r));
  const counts = new Map<number, number>();
  for (const c of all) counts.set(c.r, (counts.get(c.r) ?? 0) + 1);
  const usesHole = (r: number) => r === x.r || r === y.r;
  const trips = [...counts].filter(([r, n]) => n >= 3 && usesHole(r));
  const boat = trips.length > 0 && [...counts].some(([r, n]) => n >= 2 && r !== trips[0][0]);
  const quads = [...counts].some(([r, n]) => n === 4 && usesHole(r));
  if (flush || straight || boat || quads) return "monster";

  // Sets, trips and two pair (both hole cards paired with the board).
  const twoPair = !pocket && boardCount(x.r) > 0 && boardCount(y.r) > 0;
  if (trips.length || twoPair) return "twopair";

  if (pocket) {
    if (x.r > top) return "op";
    const above = ranks.filter((r) => r > x.r).length;
    return above === 1 ? "pp1" : above === 2 ? "pp2" : "pp3";
  }
  if (x.r === top || y.r === top) {
    const kicker = x.r === top ? y.r : x.r;
    return kicker >= cut.goodKicker ? "tpgk" : kicker >= cut.midKicker ? "tpmk" : "tpwk";
  }
  if (boardCount(x.r) > 0 || boardCount(y.r) > 0) return x.r === ranks[1] || y.r === ranks[1] ? "mp" : "bp";
  return Math.max(x.r, y.r) >= cut.sdCutoff ? "sd" : "air";
}

// ---------- names (neutral: what the hands ARE, never what to do) ----------

const ch = (r: number) => rankChar(r);

/** The highest rank at or below `r` that isn't on the board (a no-pair hand's high card can't be a board rank). */
function missingAtOrBelow(boardRanksHiLo: number[], r: number): number {
  let x = r;
  while (x > 2 && boardRanksHiLo.includes(x)) x--;
  return x;
}

/** [13, 11, 10, 9] → "K, J–9" style runs (high to low). */
function runs(vals: number[], fmt: (v: number) => string): string {
  const sorted = [...new Set(vals)].sort((p, q) => q - p);
  const out: string[] = [];
  for (let i = 0; i < sorted.length; ) {
    let j = i;
    while (j + 1 < sorted.length && sorted[j + 1] === sorted[j] - 1) j++;
    out.push(j === i ? fmt(sorted[i]) : j === i + 1 ? `${fmt(sorted[i])}, ${fmt(sorted[j])}` : `${fmt(sorted[i])}–${fmt(sorted[j])}`);
    i = j + 1;
  }
  return out.join(", ");
}

const RV: Record<string, number> = { A: 14, K: 13, Q: 12, J: 11, T: 10 };
const rv = (c: string) => RV[c] ?? Number(c);

function namesOf(g: PGroup, board: Card[], hands: string[], cut: Pick<StreetSpec, "sdCutoff">): { label: string; name: string } {
  const ranks = boardRanks(board);
  const top = ch(ranks[0]);
  switch (g) {
    case "monster":
      return { label: "Straight+", name: "Straights, flushes and full houses" };
    case "twopair":
      return { label: "Sets & 2 pair", name: "Sets, trips and two pair" };
    case "op":
      return { label: "Overpairs", name: `Pocket pairs above the ${top}` };
    case "tpgk":
    case "tpmk":
    case "tpwk": {
      const kickers = hands.map((h) => (h[0] === top ? rv(h[1]) : rv(h[0])));
      // Higher card first, the poker way: "AJ, KJ" (not "JA, JK") when the kicker outranks the board.
      const label = runs(kickers, (k) => (k > ranks[0] ? `${ch(k)}${top}` : `${top}${ch(k)}`));
      const kind = g === "tpgk" ? "good" : g === "tpmk" ? "medium" : "weak";
      return { label, name: `Top pair, ${kind} kicker` };
    }
    case "pp1":
    case "pp2":
    case "pp3": {
      const label = runs(hands.map((h) => rv(h[0])), (r) => `${ch(r)}${ch(r)}`);
      const i = g === "pp1" ? 1 : g === "pp2" ? 2 : 3;
      const where = i < ranks.length && g !== "pp3" ? `between the ${ch(ranks[i - 1])} and the ${ch(ranks[i])}` : `below the ${ch(ranks[i - 1])}`;
      return { label, name: `Pocket pairs ${where}` };
    }
    case "mp":
      return { label: `${ch(ranks[1])}x`, name: `Second pair (a ${ch(ranks[1])})` };
    case "bp": {
      const lows = ranks.slice(2).filter((r) => hands.some((h) => rv(h[0]) === r || rv(h[1]) === r));
      return { label: lows.map((r) => `${ch(r)}x`).join(" · "), name: "Lower pairs" };
    }
    // No-pair names use only ranks that are NOT on the board (Noam: "K-high" makes
    // no sense on a board with a king), e.g. "A-high" and "J-high & below" on K♦Q♦4♠.
    case "sd": {
      const hi = missingAtOrBelow(ranks, cut.sdCutoff);
      return { label: `${ch(hi)}-high`, name: `No pair, ${ch(hi)}-high (draws included)` };
    }
    default: {
      const lo = missingAtOrBelow(ranks, cut.sdCutoff - 1);
      return { label: `${ch(lo)}-high & below`, name: `No pair, ${ch(lo)}-high or lower (draws included)` };
    }
  }
}

// ---------- one street, ready to show ----------

export type PriceSnap = MatrixSnap & { byGroup: Record<PGroup, number> };

/** A group the player drags into a box. */
export type PricePiece = {
  key: PGroup;
  shape: string;
  /** Short neutral name on the piece, e.g. "AT–A8", "66–33", "K-high". */
  label: string;
  /** Longer name when tapped, e.g. "Top pair, medium kicker". */
  name: string;
  color: string;
  desc: string;
  partMark: string;
  entries: { hand: string; part: number }[];
  pct: number;
  answer: Answer;
};

export type PriceStreet = {
  street: Street;
  board: Card[];
  kind: StreetKind;
  story: string;
  /** How BTN bets the turn on this runout (shown on the turn and the river). */
  turnBet: TurnBet;
  pot: number;
  behind: number;
  snap: PriceSnap;
  /** Every group present on this street with its answer. */
  answers: Partial<Record<PGroup, Answer>>;
  /** The groups the player sorts (shown one at a time, in mixed order). */
  pieces: PricePiece[];
  /** The groups that place themselves. */
  auto: PGroup[];
  /** Short name of every present group (pieces and auto ones). */
  labels: Partial<Record<PGroup, string>>;
};

export type Runout = { index: number; id: string; streets: PriceStreet[] };

const STREET_NAMES: Street[] = ["flop", "turn", "river"];

/** Rules that hold on every board, over each board's own answers.
 * Noam 2026-10-31: a pocket pair under three or more board cards on the river
 * (fourth pair or worse) is a potential bluff, not showdown value. When such
 * pairs keep showdown value (draws missing vs arriving) is still open for Uri. */
/** Noam 2026-10-31: in a single-raised pot the ranges are wide, so every pair
 * on the flop wants some money, even the worst one: never showdown value yet. */
const PAIR_GROUPS = new Set<PGroup>(["op", "tpgk", "tpmk", "tpwk", "pp1", "pp2", "pp3", "mp", "bp"]);
function everyBoardRule(g: PGroup, street: Street, ans: Answer | undefined): Answer | undefined {
  if (ans && street === "flop" && PAIR_GROUPS.has(g) && BUCKET_RANK[ans.bucket] < BUCKET_RANK.little) {
    return a("little", "Any pair on the flop of a single-raised pot wants some money: both ranges are wide.");
  }
  return ans;
}

function riverRule(g: PGroup, street: Street): Answer | undefined {
  if (street === "river" && g === "pp3") return a("bluff", "Fourth pair or worse on the river: it rarely wins at showdown, so it's a potential bluff.");
  return undefined;
}
const RUNOUT_CACHE = new Map<number, Runout>();

/** Everything the screen shows for one runout, worked out once. */
export function buildRunout(index: number): Runout {
  const cached = RUNOUT_CACHE.get(index);
  if (cached) return cached;
  const spec = RUNOUTS[index];
  const cards = [...spec.flop.map(card), card(spec.streets[1].card), card(spec.streets[2].card)];
  const { combos, basis } = btnRangeCombos(cards);

  const streets = spec.streets.map((st, i): PriceStreet => {
    const street = STREET_NAMES[i];
    const board = cards.slice(0, 3 + i);
    const snap = snapshotOf(street, combos, basis, board, st);
    const answers: Partial<Record<PGroup, Answer>> = {};
    const labels: Partial<Record<PGroup, string>> = {};
    const pieces: PricePiece[] = [];
    for (const g of PGROUP_ORDER) {
      if (snap.byGroup[g] <= 0) continue;
      const ans = everyBoardRule(g, street, riverRule(g, street) ?? st.answers[g] ?? AUTO[g]);
      if (!ans) throw new Error(`price-hands: no answer for ${g} on ${spec.id} (${street})`);
      answers[g] = ans;
      const entries: { hand: string; part: number }[] = [];
      for (const [hand, cell] of snap.cells) {
        const mine = cell[g] ?? 0;
        if (mine <= 0) continue;
        const all = PGROUP_ORDER.reduce((s, k) => s + (cell[k] ?? 0), 0);
        entries.push({ hand, part: mine / all });
      }
      const { label, name } = namesOf(g, board, entries.map((e) => e.hand), st);
      labels[g] = label;
      if (ans.auto) continue;
      pieces.push({
        key: g,
        shape: PGROUP_INFO[g].shape,
        label,
        name,
        color: PGROUP_INFO[g].color,
        desc: name,
        partMark: "some",
        entries,
        pct: Math.round((snap.byGroup[g] / snap.total) * 100),
        answer: ans,
      });
    }
    return {
      street,
      board,
      kind: st.kind,
      story: st.story,
      turnBet: spec.turnBet,
      ...moneyOf(street, spec.turnBet),
      snap,
      answers,
      pieces,
      auto: PGROUP_ORDER.filter((g) => answers[g]?.auto),
      labels,
    };
  });

  const runout = { index, id: spec.id, streets };
  RUNOUT_CACHE.set(index, runout);
  return runout;
}

function snapshotOf(street: Street, combos: Combo[], basis: Map<string, number>, board: Card[], cut: StreetSpec): PriceSnap {
  const cells = new Map<string, Partial<Record<PGroup, number>>>();
  const byGroup = Object.fromEntries(PGROUP_ORDER.map((g) => [g, 0])) as Record<PGroup, number>;
  let total = 0;
  for (const c of combos) {
    const g = priceGroupOf(c.cards, board, cut);
    const cell = cells.get(c.hand) ?? {};
    cell[g] = (cell[g] ?? 0) + c.weight;
    cells.set(c.hand, cell);
    byGroup[g] += c.weight;
    total += c.weight;
  }
  return { street, cells, basis, total, byGroup };
}
