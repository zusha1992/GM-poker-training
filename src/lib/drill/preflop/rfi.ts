import { combosOf } from "@/lib/drill/matrix";
import type { DrillPiece } from "@/lib/drill/types";
import { FAMS, FAM_BY_KEY, FAMILY_DESC, nearFolds, type Family } from "./families";
import { SEAT_NAME, type Seat } from "./seats";

export type RfiPosition = {
  key: Seat;
  name: string;
  /** Raise % per family key. Families not listed are a pure fold. */
  strat: Partial<Record<string, number>>;
  /** Folding groups to ask about (Uri's picks). Without it, the two
   * strongest folding groups are asked. */
  ask?: string[];
};

/** Raise-first-in: how wide each seat opens, per hand-group family.
 * UTG is real (ported from solver screenshots, see decisions/2026-10-23-
 * rfi-ranges-from-solver-screenshots.md). HJ/CO/BTN/SB are still placeholder,
 * with Uri's notes of 2026-11-01 applied (decisions/2026-11-01-rfi-uri-notes.md). */
export const RFI_POSITIONS: RfiPosition[] = [
  {
    key: "UTG",
    name: "Under the gun",
    // Uri: suited connectors mix; ask about the gappers and suited kings that fold.
    // Uri 2026-11-03: also the bad offsuit aces (A9o–A2o) and the suited queens and jacks.
    strat: { PP: 100, MP: 100, LP: 100, SAH: 100, SAL: 100, SBW: 100, SBF: 100, BO: 100, OBWF: 100, SC: 50 },
    ask: ["SG", "SK", "SQ", "OA", "OF"],
  },
  {
    key: "HJ",
    name: "Hijack",
    // Uri: low pairs were a pure raise from UTG, so they're not asked here;
    // suited kings and offsuit broadways mix; ask about gappers, suited queens, weak offsuit aces.
    strat: { PP: 100, MP: 100, LP: 100, SAH: 100, SAL: 100, SBW: 100, SBF: 100, BO: 100, OBWF: 100, SC: 60, SK: 50, OF: 50 },
    ask: ["SG", "SQ", "OA"],
  },
  {
    key: "CO",
    name: "Cutoff",
    strat: {
      PP: 100, MP: 100, LP: 100, SAH: 100, SAL: 100, SBW: 100, SBF: 100, BO: 100, OBWF: 100,
      OF: 100, SC: 100, SK: 60, SQ: 40, OA: 30,
    },
  },
  {
    key: "BTN",
    name: "Button",
    strat: {
      PP: 100, MP: 100, LP: 100, SAH: 100, SAL: 100, SBW: 100, SBF: 100, BO: 100, OBWF: 100,
      OF: 100, SC: 100, SK: 100, SQ: 100, OA: 100, SG: 60, LS: 60, OK: 50,
    },
  },
  {
    key: "SB",
    name: "Small blind",
    strat: {
      PP: 100, MP: 100, LP: 100, SAH: 100, SAL: 100, SBW: 100, SBF: 100, BO: 100, OBWF: 100,
      OF: 100, SC: 100, SK: 100, SQ: 100, OA: 100, SG: 100, LS: 100, OK: 40,
    },
  },
];

/** Raise-first-in is linear: on each "ladder" (pairs, suited aces, suited
 * broadways/kings/connectors, offsuit) only the weakest new pure-raise group
 * is asked. Raising it auto-fills every stronger group on that ladder. */
const LADDERS: string[][] = [
  ["SBW", "SBF", "SK", "SQ", "SC", "SG", "LS"],
  ["BO", "OBWF", "OF", "OA", "OK", "LK", "WO"],
];

/** Uri/Noam 2026-11-01: every pair and every suited ace raises from every
 * seat, so asking them isn't a challenge: they start filled in. */
const ALWAYS_RAISE = ["PP", "MP", "LP", "SAH", "SAL"];

/** Uri 2026-11-03: ask category by category, weakest first inside each
 * (suited hands, then offsuit hands, then pairs). The answers then run fold →
 * mix → raise inside a category instead of every fold first and every raise last. */
const ASK_ORDER = [
  "LS", "SG", "SQ", "SK", "SC", "SAL", "SAH", "SBF", "SBW",
  "WO", "LK", "OK", "OA", "OF", "OBWF", "BO",
  "LP", "MP", "PP",
];

function foldPiece(g: Family): DrillPiece {
  return {
    key: g.key,
    label: g.name,
    sub: g.sub,
    color: g.color,
    hands: g.hands,
    answer: "fold",
    desc: FAMILY_DESC[g.key],
  };
}

export type RfiDrill = {
  pieces: DrillPiece[];
  /** Hands already fully raised from an earlier, already-built seat —
   * painted red before the drill even starts. */
  preFilled: string[];
  /** % of all 1326 combos this seat opens. */
  pct: number;
};

/** Builds one seat's drill: the pieces to ask, in ASK_ORDER, plus which
 * hands from a wider seat are already known-raise and shown pre-filled.
 * `known` accumulates across seats as they're built tightest-to-widest. */
function buildRfi(pos: RfiPosition, known: Set<string>): RfiDrill {
  const pieces: DrillPiece[] = [];
  const preFilled: string[] = [];
  const freqOf = (k: string) => pos.strat[k] ?? 0;

  ALWAYS_RAISE.filter((k) => freqOf(k) >= 90).forEach((k) => preFilled.push(...FAM_BY_KEY[k].hands));

  for (const ladder of LADDERS) {
    const fresh = ladder.filter(
      (k) => freqOf(k) >= 90 && !FAM_BY_KEY[k].hands.every((h) => known.has(h)),
    );
    ladder
      .filter((k) => freqOf(k) >= 90 && FAM_BY_KEY[k].hands.every((h) => known.has(h)))
      .forEach((k) => preFilled.push(...FAM_BY_KEY[k].hands));
    if (!fresh.length) continue;

    const bottomKey = fresh[fresh.length - 1];
    const g = FAM_BY_KEY[bottomKey];
    const reveal = fresh
      .slice(0, -1)
      .reverse()
      .flatMap((k) => FAM_BY_KEY[k].hands.slice().reverse());

    pieces.push({
      key: g.key,
      label: g.name,
      sub: g.sub,
      color: g.color,
      hands: g.hands,
      answer: "raise",
      reveal,
      desc: FAMILY_DESC[g.key],
    });
  }

  for (const g of FAMS) {
    const f = freqOf(g.key);
    if (f > 10 && f < 90) {
      pieces.push({
        key: g.key,
        label: g.name,
        sub: g.sub,
        color: g.color,
        hands: g.hands,
        answer: "mix",
        mixSplit: ["raise", "fold", f],
        desc: FAMILY_DESC[g.key],
      });
    }
  }

  const foldKeys = FAMS.filter((g) => (pos.strat[g.key] ?? 0) <= 10).map((g) => g.key);
  (pos.ask?.filter((k) => foldKeys.includes(k)) ?? nearFolds(foldKeys)).forEach((k) => pieces.push(foldPiece(FAM_BY_KEY[k])));

  let combos = 0;
  for (const g of FAMS) {
    const f = pos.strat[g.key] ?? 0;
    for (const h of g.hands) combos += combosOf(h) * (f / 100);
  }

  pieces.sort((a, b) => ASK_ORDER.indexOf(a.key) - ASK_ORDER.indexOf(b.key));
  return { pieces, preFilled, pct: Math.round((combos / 1326) * 100) };
}

export type RfiSpot = {
  modeKey: "rfi";
  key: Seat;
  position: RfiPosition;
  heroSeat: Seat;
  title: string;
  roleText: string;
  drill: RfiDrill;
};

const known = new Set<string>();
export const RFI_SPOTS: RfiSpot[] = RFI_POSITIONS.map((position) => {
  const drill = buildRfi(position, known);
  for (const g of FAMS) {
    if ((position.strat[g.key] ?? 0) >= 90) g.hands.forEach((h) => known.add(h));
  }
  return {
    modeKey: "rfi" as const,
    key: position.key,
    position,
    heroSeat: position.key,
    title: `You: ${SEAT_NAME[position.key]} · first in`,
    roleText: `You are in the ${position.key}. Everyone folded to you.`,
    drill,
  };
});

export function rfiSpot(seat: Seat): RfiSpot {
  const spot = RFI_SPOTS.find((s) => s.key === seat);
  if (!spot) throw new Error(`Unknown RFI seat: ${seat}`);
  return spot;
}
