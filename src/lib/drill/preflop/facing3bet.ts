import { combosOf, labelAt } from "@/lib/drill/matrix";
import type { DrillPiece } from "@/lib/drill/types";
import { FAMS, FAM_BY_KEY, FAMILY_DESC, STRENGTH, nearFolds, type Family } from "./families";
import { RFI_POSITIONS } from "./rfi";
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

/** Facing a 3-bet: you opened from one seat and a later seat 3-bets. Only
 * your opening range is in play. Sample strategy from group strength, your
 * seat, and whether the 3-better is in position after the flop. Placeholder
 * numbers for the prototype. */
function genStrat4(hero: Seat, villain: Seat): Record<string, [number, number]> {
  const hi = SEATS.indexOf(hero);
  const ip = villain === "SB" || villain === "BB";
  const T = 76 - 6 * hi - (ip ? 6 : 0);
  const st: Record<string, [number, number]> = {};
  for (const k of Object.keys(STRENGTH)) {
    const s = STRENGTH[k];
    let v: [number, number] | null = null;
    if (k === "PP") v = ip ? [70, 30] : [90, 10];
    else if (s >= T + 26) v = ip ? [20, 80] : [40, 60];
    else if (s >= T + 8) v = [5, 95];
    else if (s >= T) v = [0, 55];
    else if (k === "SAH" || k === "SAL") v = [30, 0];
    if (v) st[k] = v;
  }
  return st;
}

export type Facing3betSpot = {
  modeKey: "fb";
  key: string;
  heroSeat: Seat;
  villainSeat: Seat;
  title: string;
  roleText: string;
  drill: {
    pieces: DrillPiece[];
    outOfRange: string[];
    fourBetPct: number;
    callPct: number;
  };
};

function buildFacing3bet(hero: Seat, villain: Seat): Facing3betSpot["drill"] {
  const openStrat = RFI_POSITIONS.find((p) => p.key === hero)!.strat;
  const inRange = FAMS.filter((g) => (openStrat[g.key] ?? 0) > 10);
  const strat = genStrat4(hero, villain);

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
    const w = (openStrat[g.key] ?? 0) / 100;
    for (const h of g.hands) {
      const n = combosOf(h) * w;
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
    fourBetPct: allCombos ? Math.round((raiseCombos / allCombos) * 100) : 0,
    callPct: allCombos ? Math.round((callCombos / allCombos) * 100) : 0,
  };
}

const CACHE = new Map<string, Facing3betSpot>();

export function facing3betSpot(hero: Seat, villain: Seat): Facing3betSpot {
  const key = `${hero} vs ${villain}`;
  const cached = CACHE.get(key);
  if (cached) return cached;
  const spot: Facing3betSpot = {
    modeKey: "fb",
    key,
    heroSeat: hero,
    villainSeat: villain,
    title: `${hero} vs ${SEAT_NAME[villain].toLowerCase()} 3-bet`,
    roleText: `You opened from the ${hero}. The ${villain} 3-bet to 8bb.`,
    drill: buildFacing3bet(hero, villain),
  };
  CACHE.set(key, spot);
  return spot;
}
