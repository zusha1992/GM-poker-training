/**
 * "How many big blinds?" drill (spec: Noam's "Price Every Hand" doc, agreed
 * with Uri 2026-10-28; grouping rules: decisions/price-drill-rulebook.md).
 * SRP BTN vs BB, 100bb, BTN is the player. On every street BTN's range is
 * split into hand groups of the SAME strength, and the player drags each
 * group, one at a time, into what it's worth from here: Potential bluffs,
 * Showdown value, a little more, ~20% or ~50% of the stack, or All-in, assuming the rest of the board
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
  sd: { color: "#D9C38A", shape: "plus" },
  air: { color: "#56626C", shape: "U" },
};

/** What a group is worth from here, as a share of the stack that's left
 * (Noam 2026-10-30: rough shares, not exact bb). "bluff" = Potential bluffs
 * (nothing: it can't win by checking), "sd" = Showdown value (a tiny bit),
 * "little" = a little more money, "20" ≈ 20% of the stack, "50" ≈ half the
 * stack, "all" = all of it. */
export type Bucket = "bluff" | "sd" | "little" | "20" | "50" | "all";
export const BUCKETS: Bucket[] = ["bluff", "sd", "little", "20", "50", "all"];
export const BUCKET_RANK: Record<Bucket, number> = { bluff: 0, sd: 1, little: 2, "20": 3, "50": 4, all: 5 };

/** Grey for no money, then one hue getting brighter with the money, so it
 * never clashes with the group colors. */
export const BUCKET_COLOR: Record<Bucket, string> = {
  bluff: "#8A94A0",
  sd: "#8C7A4E",
  little: "#A88A45",
  "20": "#C99A3C",
  "50": "#E6AC38",
  all: "#FFC94A",
};

/** Box text: big line + small line. */
export function bucketLabel(b: Bucket, behind: number): { big: string; small: string } {
  if (b === "bluff") return { big: "Potential", small: "bluffs" };
  if (b === "sd") return { big: "Showdown", small: "value" };
  if (b === "all") return { big: "All-in", small: `${behind}bb` };
  if (b === "little") return { big: "A little", small: "more" };
  return { big: `~${b}%`, small: "of stack" };
}

/** Tiny text for the legend and summary chips. */
export function bucketTiny(b: Bucket): string {
  return b === "bluff" ? "Bluffs" : b === "sd" ? "Showdown" : b === "all" ? "All-in" : b === "little" ? "A little" : `~${b}%`;
}

/** Short text for toasts and the summary. */
export function bucketShort(b: Bucket): string {
  return b === "bluff" ? "potential bluff" : b === "sd" ? "showdown value" : b === "all" ? "all-in" : b === "little" ? "a little more" : `~${b}% of stack`;
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

/** The same cutoffs on every street of this board (Noam 2026-10-29: K-high
 * is the showdown cutoff; AT–A8 and A6–A3 are separate groups). */
const CUT = { goodKicker: 11, midKicker: 8, sdCutoff: 13 };

const AIR = a("bluff", "No pair and no high card: it can't win by checking, so it's a potential bluff.", true);
const SD = (why = "K-high: no pair, but it sometimes wins at showdown. Draws included.") => a("sd", why, true);

const FLOP: StreetSpec = {
  card: "",
  kind: "flop",
  story: "A dry ace-high flop. BTN has far more strong aces than BB.",
  ...CUT,
  answers: {
    twopair: autoAll("Sets and two pair want every chip in on a dry board."),
    tpgk: a("50", "AJ+ beats all of BB's weaker aces: three streets of value."),
    tpmk: a("20", "AT–A8 get called by better aces too often: two thin streets."),
    tpwk: a("little", "A6–A3: top pair with the weakest kickers, one small bet then showdown."),
    pp1: a("little", "KK–88 beat every 7x and 2x: one small bet, then showdown."),
    pp2: a("sd", "66–33 lose to every 7x: check and show down."),
    mp: a("little", "Middle pair: one small bet at most."),
    bp: a("sd", "Bottom pair: check and show down."),
    sd: SD(),
    air: AIR,
  },
};

type TurnSpec = StreetSpec & { rivers: [StreetSpec, StreetSpec] };

const TURNS: TurnSpec[] = [
  {
    card: "Q♥",
    kind: "brick",
    story: "Q♥ · Brick. No draw completes: almost nothing changes.",
    ...CUT,
    answers: {
      twopair: autoAll("Still the best hands on a blank."),
      tpgk: a("50", "A blank changes nothing: keep going for three streets of value.", true),
      tpmk: a("20", "Same as the flop: thin value."),
      tpwk: a("little", "Same as the flop: one small bet, then showdown."),
      pp1: a("little", "KK is only under the ace: one small bet, then showdown."),
      pp2: a("sd", "JJ–88 are now under an ace and a queen: check and show down."),
      pp3: a("sd", "66–33 are under three cards: check and show down."),
      mp: a("little", "Second pair (Qx): one small bet at most."),
      bp: a("sd", "7x and 2x: check and show down."),
      sd: SD(),
      air: AIR,
    },
    rivers: [
      {
        card: "9♣",
        kind: "brick",
        story: "9♣ · Brick. Nothing completes.",
        ...CUT,
        answers: {
          twopair: autoAll("Nothing got there: get the rest in."),
          tpgk: a("20", "One more value bet: after two calls, only worse aces still pay."),
          tpmk: a("little", "One small value bet at most."),
          tpwk: a("sd", "Check and show down."),
          pp1: a("sd", "KK: check and show down."),
          pp2: a("sd", "Check and show down."),
          pp3: a("sd", "Check and show down."),
          mp: a("sd", "Check and show down."),
          bp: a("sd", "Check and show down."),
          sd: SD("K-high: sometimes good at showdown."),
          air: AIR,
        },
      },
      {
        card: "K♦",
        kind: "wet",
        story: "K♦ · Wet. JT makes broadway.",
        ...CUT,
        answers: {
          twopair: a("50", "Still strong, but JT has a straight now: big, not all-in."),
          tpgk: a("little", "AJ is a bluff-catcher now: one small bet at most."),
          tpmk: a("sd", "Check and show down."),
          tpwk: a("sd", "Check and show down."),
          pp3: a("sd", "Check and show down.", true),
          mp: a("sd", "Check and show down.", true),
          bp: a("sd", "Check and show down.", true),
          sd: SD(),
          air: AIR,
        },
      },
    ],
  },
  {
    card: "6♦",
    kind: "dynamic",
    story: "6♦ · Dynamic. A diamond flush draw and straight draws like 98, 85 and 54.",
    ...CUT,
    answers: {
      twopair: autoAll("Still way ahead: charge every new draw."),
      tpgk: a("50", "Still well ahead: keep charging the new draws."),
      tpmk: a("little", "BB's range improved: the medium kickers slow down."),
      tpwk: a("little", "One small bet, then showdown."),
      pp1: a("little", "One small bet, then showdown.", true),
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
          tpgk: a("20", "One more value bet against BB's weaker aces."),
          tpmk: a("little", "One small value bet at most."),
          tpwk: a("sd", "Check and show down."),
          pp2: a("sd", "Check and show down."),
          pp3: a("sd", "Check and show down."),
          mp: a("sd", "Check and show down."),
          bp: a("sd", "Check and show down."),
          sd: SD(),
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
          sd: SD(),
          air: AIR,
        },
      },
    ],
  },
  {
    card: "5♣",
    kind: "wet",
    story: "5♣ · Wet. 43 makes the wheel, and a club flush draw and more straight draws arrive.",
    ...CUT,
    answers: {
      twopair: a("50", "The wheel is possible now: still big, but not all-in."),
      tpgk: a("20", "BB's range got stronger: one step down."),
      tpmk: a("little", "One small bet, then showdown."),
      tpwk: a("little", "A4 and A3 picked up a wheel draw: one small bet."),
      pp1: a("little", "One small bet, then showdown."),
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
          sd: SD(),
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
          sd: SD(),
          air: AIR,
        },
      },
    ],
  },
];

const FLOP_CARDS = ["A♣", "7♦", "2♠"];
const BOARD_NAME = "A72";

/** Pot and stack at the start of each street. Between streets BTN makes a
 * standard bet and BB calls (flop 1.8bb, turn 6bb): the player never sees or
 * picks that size, only the pot it leaves. */
const MONEY: Record<Street, { pot: number; behind: number }> = {
  flop: { pot: 5.5, behind: 97.5 },
  turn: { pot: 9.1, behind: 95.7 },
  river: { pot: 21.1, behind: 89.7 },
};

export type RunoutSpec = { id: string; streets: [StreetSpec, StreetSpec, StreetSpec] };

/** Every runout of the board: 3 turns × 2 rivers = 6. */
export const RUNOUTS: RunoutSpec[] = TURNS.flatMap((t) =>
  t.rivers.map((rv) => ({ id: `${BOARD_NAME} · ${t.card} · ${rv.card}`, streets: [FLOP, t, rv] as [StreetSpec, StreetSpec, StreetSpec] })),
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
      const label = runs(kickers, (k) => `${top}${ch(k)}`);
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
    case "sd":
      return { label: `${ch(cut.sdCutoff)}-high`, name: `No pair, ${ch(cut.sdCutoff)}-high (draws included)` };
    default:
      return { label: `${ch(cut.sdCutoff - 1)}-high & below`, name: `No pair, ${ch(cut.sdCutoff - 1)}-high or lower (draws included)` };
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
const RUNOUT_CACHE = new Map<number, Runout>();

/** Everything the screen shows for one runout, worked out once. */
export function buildRunout(index: number): Runout {
  const cached = RUNOUT_CACHE.get(index);
  if (cached) return cached;
  const spec = RUNOUTS[index];
  const cards = [...FLOP_CARDS.map(card), card(spec.streets[1].card), card(spec.streets[2].card)];
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
      const ans = st.answers[g] ?? AUTO[g];
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
      ...MONEY[street],
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
