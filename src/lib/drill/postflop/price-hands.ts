/**
 * "How many big blinds?" drill (spec: Noam's "Price Every Hand" doc, agreed
 * with Uri 2026-10-28). SRP BTN vs BB, 100bb, BTN is the player. On every
 * street BTN's range is split into hand groups, and the player drags each
 * group into the bucket of how many MORE big blinds it wants to put in from
 * here, assuming the rest of the board bricks. Bet sizes are never asked.
 *
 * Hands never leave the matrix: every street the whole range re-sorts into
 * the groups for the new board. Obvious groups (straights and better, and
 * hands with no pair) place themselves; the player only gets the groups they
 * could get wrong.
 *
 * All answers below are DRAFTS. `sure: false` marks the ones Uri should check.
 */
import { btnRangeCombos, card, hasStraight, rankChar, type Card, type Combo, type Street } from "./line-demo";
import type { MatrixSnap } from "@/components/drill/postflop/LineMatrix";

/** Strongest first. Re-calculated on every card, top-down. */
export type PGroup = "monster" | "twopair" | "op" | "tpgk" | "tpwk" | "up" | "low" | "nopair";
export const PGROUP_ORDER: PGroup[] = ["monster", "twopair", "op", "tpgk", "tpwk", "up", "low", "nopair"];

/** Same name, color and shape on every board and street, so the player
 * learns "orange T = top pair, good kicker" without reading. */
export const PGROUP_INFO: Record<PGroup, { label: string; name: string; color: string; shape: string }> = {
  monster: { label: "Straight+", name: "Straights and better", color: "#E0413A", shape: "block6" },
  twopair: { label: "Sets & 2 pair", name: "Sets and two pair", color: "#F2853D", shape: "O" },
  op: { label: "Overpair", name: "Overpair", color: "#E46FC8", shape: "I" },
  tpgk: { label: "TP good kicker", name: "Top pair, good kicker", color: "#3FA9F5", shape: "value" },
  tpwk: { label: "TP weak kicker", name: "Top pair, weak kicker", color: "#22C4A1", shape: "check" },
  up: { label: "Underpair", name: "Pocket pair below the top card", color: "#9B7FEA", shape: "bluff" },
  low: { label: "Mid/bottom pair", name: "Middle and bottom pair", color: "#9DB4C4", shape: "V" },
  nopair: { label: "No pair", name: "No pair (draws and air)", color: "#56626C", shape: "giveup" },
};

/** The money ladder: how many more big blinds from here. "all" = the rest of the stack. */
export type Bucket = "0" | "5" | "15" | "40" | "all";
export const BUCKETS: Bucket[] = ["0", "5", "15", "40", "all"];

/** Darker = less money, brighter = more. One hue, so it never clashes with the group colors. */
export const BUCKET_COLOR: Record<Bucket, string> = {
  "0": "#5A6670",
  "5": "#8C7A4E",
  "15": "#B8913F",
  "40": "#E0A43A",
  all: "#FFC94A",
};

export type Answer = { bucket: Bucket; why: string; sure: boolean; auto?: boolean };

// ---------- the board: A♣7♦2♠, 3 turns × 2 rivers ----------

type StreetKind = "flop" | "brick" | "dynamic" | "wet";
type StreetSpec = {
  card: string;
  kind: StreetKind;
  story: string;
  /** Top pair needs this kicker or better to be "good" (11 = J). */
  goodKicker: number;
  answers: Partial<Record<PGroup, Answer>>;
};

const a = (bucket: Bucket, why: string, sure = false): Answer => ({ bucket, why, sure });

/** Groups that place themselves unless a street says otherwise. */
const AUTO: Partial<Record<PGroup, Answer>> = {
  monster: { bucket: "all", why: "Straights and better want every chip in.", sure: true, auto: true },
  nopair: { bucket: "0", why: "No pair: no showdown value to pay for. Which of these bluff is a later drill.", sure: true, auto: true },
};
const autoAll = (why: string): Answer => ({ bucket: "all", why, sure: true, auto: true });

const FLOP: StreetSpec = {
  card: "",
  kind: "flop",
  story: "A dry ace-high flop. BTN has far more strong aces than BB.",
  goodKicker: 11,
  answers: {
    twopair: autoAll("Sets and two pair want every chip in on a dry board."),
    tpgk: a("40", "AJ+ beats all of BB's weaker aces: three streets of value."),
    tpwk: a("15", "A weak kicker gets called by better aces too often: two thin streets."),
    up: a("5", "Pairs under the ace: one small bet, then showdown.", true),
    low: a("5", "Middle and bottom pair: keep the pot small.", true),
  },
};

type TurnSpec = StreetSpec & { rivers: [StreetSpec, StreetSpec] };

const TURNS: TurnSpec[] = [
  {
    card: "Q♥",
    kind: "brick",
    story: "Q♥ · Brick. No draw completes: almost nothing changes.",
    goodKicker: 11,
    answers: {
      twopair: autoAll("Still the best hands on a blank."),
      tpgk: a("40", "A blank changes nothing: keep going for three streets of value.", true),
      tpwk: a("15", "Same as the flop: thin value."),
      up: a("5", "Same as the flop: one small bet, then showdown.", true),
      low: a("5", "Queens join the middle pairs: keep the pot small.", true),
    },
    rivers: [
      {
        card: "9♣",
        kind: "brick",
        story: "9♣ · Brick. Nothing completes.",
        goodKicker: 11,
        answers: {
          twopair: autoAll("Nothing got there: get the rest in."),
          tpgk: a("15", "One more value bet: after two calls, only worse aces still pay."),
          tpwk: a("5", "Showdown value: a small bet at most."),
          up: a("0", "BB has called twice: underpairs check it down."),
          low: a("0", "Check it down.", true),
        },
      },
      {
        card: "K♦",
        kind: "wet",
        story: "K♦ · Wet. JT makes broadway.",
        goodKicker: 11,
        answers: {
          twopair: a("40", "Still strong, but JT has a straight now: big, not all-in."),
          tpgk: a("5", "AJ is a bluff-catcher now."),
          tpwk: a("0", "Check it down."),
          up: a("0", "Check it down.", true),
          low: a("0", "Check it down.", true),
        },
      },
    ],
  },
  {
    card: "6♦",
    kind: "dynamic",
    story: "6♦ · Dynamic. A diamond flush draw and straight draws like 98, 85 and 54.",
    goodKicker: 11,
    answers: {
      twopair: autoAll("Still way ahead: charge every new draw."),
      tpgk: a("40", "Still well ahead: keep charging the new draws."),
      tpwk: a("5", "BB's range improved: the weak kicker slows down."),
      up: a("5", "One small bet, then showdown.", true),
      low: a("5", "Keep the pot small."),
    },
    rivers: [
      {
        card: "K♠",
        kind: "brick",
        story: "K♠ · Brick. The draws missed.",
        goodKicker: 11,
        answers: {
          twopair: autoAll("The draws missed: get the rest in."),
          tpgk: a("15", "One more value bet against BB's weaker aces."),
          tpwk: a("5", "Showdown value: a small bet at most."),
          up: a("0", "Check it down."),
          low: a("0", "Check it down.", true),
        },
      },
      {
        card: "8♦",
        kind: "wet",
        story: "8♦ · Wet. The diamond flush and the 95, T9 and 54 straights all complete.",
        goodKicker: 11,
        answers: {
          twopair: a("15", "Sets and two pair are behind every flush and straight: one value bet at most."),
          tpgk: a("5", "Top pair is a bluff-catcher now."),
          tpwk: a("0", "Check it down."),
          up: a("0", "Check it down.", true),
          low: a("0", "Check it down.", true),
        },
      },
    ],
  },
  {
    card: "5♣",
    kind: "wet",
    story: "5♣ · Wet. 43 makes the wheel, and a club flush draw and more straight draws arrive.",
    goodKicker: 11,
    answers: {
      twopair: a("40", "The wheel is possible now: still big, but not all-in."),
      tpgk: a("15", "BB's range got stronger: one step down."),
      tpwk: a("5", "One small bet, then showdown."),
      up: a("5", "One small bet, then showdown."),
      low: a("0", "Small pairs stop putting money in."),
    },
    rivers: [
      {
        card: "K♥",
        kind: "brick",
        story: "K♥ · Brick. The draws missed.",
        goodKicker: 11,
        answers: {
          twopair: a("40", "The draws missed, but the wheel is still out there: big, not all-in."),
          tpgk: a("15", "The draws missed: back to a value bet."),
          tpwk: a("5", "Showdown value: a small bet at most."),
          up: a("0", "Check it down."),
          low: a("0", "Check it down.", true),
        },
      },
      {
        card: "6♣",
        kind: "wet",
        story: "6♣ · Wet. The club flush and the 43, 84 and 98 straights complete.",
        goodKicker: 11,
        answers: {
          twopair: a("15", "Behind every flush and straight: one value bet at most."),
          tpgk: a("5", "Top pair is a bluff-catcher now."),
          tpwk: a("0", "Check it down."),
          up: a("0", "Check it down.", true),
          low: a("0", "Check it down.", true),
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

/** The group one combo is in on this board (checked top-down). */
export function priceGroupOf(hole: [Card, Card], board: Card[], goodKicker: number): PGroup {
  const all = [...hole, ...board];
  const [x, y] = hole;
  const pocket = x.r === y.r;
  const boardCount = (r: number) => board.filter((c) => c.r === r).length;
  const top = Math.max(...board.map((c) => c.r));

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

  if (pocket) return x.r > top ? "op" : "up";
  if (x.r === top || y.r === top) {
    const kicker = x.r === top ? y.r : x.r;
    return kicker >= goodKicker ? "tpgk" : "tpwk";
  }
  if (boardCount(x.r) > 0 || boardCount(y.r) > 0) return "low";
  return "nopair";
}

// ---------- one street, ready to show ----------

export type PriceSnap = MatrixSnap & { byGroup: Record<PGroup, number> };

/** A group the player drags into a bucket. */
export type PricePiece = {
  key: PGroup;
  shape: string;
  label: string;
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
  /** The groups the player sorts, strongest first. */
  pieces: PricePiece[];
  /** The groups that place themselves. */
  auto: PGroup[];
};

export type Runout = { index: number; id: string; streets: PriceStreet[] };

const STREET_NAMES: Street[] = ["flop", "turn", "river"];

function describe(g: PGroup, goodKicker: number, top: number): string {
  const t = rankChar(top);
  const k = rankChar(goodKicker);
  switch (g) {
    case "tpgk":
      return `A pair of ${t}s with a ${k} kicker or better.`;
    case "tpwk":
      return `A pair of ${t}s with a kicker below ${k}.`;
    case "op":
      return `A pocket pair above the ${t}.`;
    case "up":
      return `A pocket pair below the ${t}.`;
    case "low":
      return "One hole card pairs a board card below the top card.";
    case "twopair":
      return "Sets, trips and two pair.";
    case "monster":
      return "Straights, flushes and full houses.";
    default:
      return "No pair: draws and air.";
  }
}

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
    const snap = snapshotOf(street, combos, basis, board, st.goodKicker);
    const answers: Partial<Record<PGroup, Answer>> = {};
    for (const g of PGROUP_ORDER) {
      if (snap.byGroup[g] <= 0) continue;
      const ans = st.answers[g] ?? AUTO[g];
      if (!ans) throw new Error(`price-hands: no answer for ${g} on ${spec.id} (${street})`);
      answers[g] = ans;
    }
    const top = Math.max(...board.map((c) => c.r));
    const present = PGROUP_ORDER.filter((g) => answers[g]);
    const pieces = present
      .filter((g) => !answers[g]!.auto)
      .map((g): PricePiece => {
        const entries: { hand: string; part: number }[] = [];
        for (const [hand, cell] of snap.cells) {
          const mine = cell[g] ?? 0;
          if (mine <= 0) continue;
          const all = PGROUP_ORDER.reduce((s, k) => s + (cell[k] ?? 0), 0);
          entries.push({ hand, part: mine / all });
        }
        return {
          key: g,
          shape: PGROUP_INFO[g].shape,
          label: PGROUP_INFO[g].label,
          color: PGROUP_INFO[g].color,
          desc: describe(g, st.goodKicker, top),
          partMark: "some",
          entries,
          pct: Math.round((snap.byGroup[g] / snap.total) * 100),
          answer: answers[g]!,
        };
      });
    return {
      street,
      board,
      kind: st.kind,
      story: st.story,
      ...MONEY[street],
      snap,
      answers,
      pieces,
      auto: present.filter((g) => answers[g]!.auto),
    };
  });

  const runout = { index, id: spec.id, streets };
  RUNOUT_CACHE.set(index, runout);
  return runout;
}

function snapshotOf(street: Street, combos: Combo[], basis: Map<string, number>, board: Card[], goodKicker: number): PriceSnap {
  const cells = new Map<string, Partial<Record<PGroup, number>>>();
  const byGroup = Object.fromEntries(PGROUP_ORDER.map((g) => [g, 0])) as Record<PGroup, number>;
  let total = 0;
  for (const c of combos) {
    const g = priceGroupOf(c.cards, board, goodKicker);
    const cell = cells.get(c.hand) ?? {};
    cell[g] = (cell[g] ?? 0) + c.weight;
    cells.set(c.hand, cell);
    byGroup[g] += c.weight;
    total += c.weight;
  }
  return { street, cells, basis, total, byGroup };
}

/** "+40" bb (always MORE from here), or the stack that's left for all-in. */
export function bucketLabel(b: Bucket, behind: number): { big: string; small: string } {
  if (b === "all") return { big: "All-in", small: `${behind}bb` };
  return { big: b === "0" ? "0" : `+${b}`, small: "bb" };
}
