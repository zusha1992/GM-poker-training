import { combosOf, labelAt } from "@/lib/drill/matrix";
import type { DrillPiece } from "@/lib/drill/types";
import { FAMS, FAM_BY_KEY, FAMILY_DESC, STRENGTH, nearFolds, type Family } from "./families";
import { SEATS, SEAT_NAME, type Seat } from "./seats";

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

type Split = { raise: number; call: number; fold: number };

/** Facing a 4-bet: someone opens, you 3-bet from a later seat, they 4-bet.
 * Only your 3-bet range is in play: the strongest groups (wider against
 * later openers), plus suited aces as bluffs. Placeholder numbers. */
function genStrat5(opener: Seat, hero: Seat): Record<string, [number, number]> {
  const oi = SEATS.indexOf(opener);
  const ip = !(hero === "SB" || hero === "BB");
  const T = 84 - 6 * oi - (ip ? 4 : 0);
  const st: Record<string, [number, number]> = {};
  for (const k of Object.keys(STRENGTH)) {
    const s = STRENGTH[k];
    let v: [number, number] | null = null;
    if (k === "PP") v = [90, 10];
    else if (!ip && s >= T + 20) v = [35, 65];
    else if (s >= T) v = [5, 90];
    else if (s >= T - 10) v = [0, 60];
    else if (k === "SAH" || k === "SAL") v = [25, 0];
    if (v) st[k] = v;
  }
  return st;
}

/** Your 3-bet range vs this opener: the strongest N families by strength,
 * where N grows the later the opener is, always including suited aces
 * (they're the bluff-3-bet candidates even when they rank lower). */
function threebetRangeKeys(opener: Seat): string[] {
  const n = 4 + SEATS.indexOf(opener);
  const keys = Object.keys(STRENGTH)
    .sort((a, b) => STRENGTH[b] - STRENGTH[a])
    .slice(0, n);
  if (!keys.includes("SAH")) keys.push("SAH");
  if (!keys.includes("SAL")) keys.push("SAL");
  return keys;
}

export type Facing4betSpot = {
  modeKey: "fv";
  key: string;
  heroSeat: Seat;
  openerSeat: Seat;
  title: string;
  roleText: string;
  drill: {
    pieces: DrillPiece[];
    outOfRange: string[];
    allInPct: number;
    callPct: number;
  };
};

function buildFacing4bet(hero: Seat, opener: Seat): Facing4betSpot["drill"] {
  const rangeKeys = threebetRangeKeys(opener);
  const inRange = FAMS.filter((g) => rangeKeys.includes(g.key));
  const strat = genStrat5(opener, hero);

  const pieces: DrillPiece[] = [];
  const folds: string[] = [];
  const outOfRange: string[] = [];
  let raiseCombos = 0;
  let callCombos = 0;
  let allCombos = 0;

  const inHands = new Set(inRange.flatMap((g) => g.hands));
  for (let i = 0; i < 13; i++) {
    for (let j = 0; j < 13; j++) {
      const h = labelAt(i, j);
      if (!inHands.has(h)) outOfRange.push(h);
    }
  }

  for (const g of inRange) {
    const s = strat[g.key] ?? [0, 0];
    const a: Split = { raise: s[0], call: s[1], fold: 100 - s[0] - s[1] };
    for (const h of g.hands) {
      const n = combosOf(h);
      allCombos += n;
      raiseCombos += (n * a.raise) / 100;
      callCombos += (n * a.call) / 100;
    }
    if (a.fold >= 90) {
      folds.push(g.key);
      continue;
    }
    const ranked = (Object.keys(a) as (keyof Split)[]).sort((x, y) => a[y] - a[x]);
    const top = ranked[0];
    const second = ranked[1];
    const answer = a[top] >= 80 ? top : "mix";
    pieces.push({
      key: g.key,
      label: g.name,
      sub: g.sub,
      color: g.color,
      hands: g.hands,
      answer,
      mixSplit: answer === "mix" ? [top, second, Math.round((a[top] / (a[top] + a[second])) * 100)] : undefined,
      desc: FAMILY_DESC[g.key],
    });
  }

  nearFolds(folds).forEach((k) => pieces.push(foldPiece(FAM_BY_KEY[k])));

  return {
    pieces,
    outOfRange,
    allInPct: allCombos ? Math.round((raiseCombos / allCombos) * 100) : 0,
    callPct: allCombos ? Math.round((callCombos / allCombos) * 100) : 0,
  };
}

const CACHE = new Map<string, Facing4betSpot>();

export function facing4betSpot(opener: Seat, hero: Seat): Facing4betSpot {
  const key = `${hero} vs ${opener}`;
  const cached = CACHE.get(key);
  if (cached) return cached;
  const spot: Facing4betSpot = {
    modeKey: "fv",
    key,
    heroSeat: hero,
    openerSeat: opener,
    title: `${hero} vs ${SEAT_NAME[opener].toLowerCase()} 4-bet`,
    roleText: `You 3-bet from the ${hero}. The ${opener} 4-bet to 20bb.`,
    drill: buildFacing4bet(hero, opener),
  };
  CACHE.set(key, spot);
  return spot;
}
