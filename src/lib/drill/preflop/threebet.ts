import { combosOf } from "@/lib/drill/matrix";
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

/** 3-bet: any opener, any later seat. Sample strategy built from rough
 * group strength, how wide the opener is, and the hero's seat. Placeholder
 * numbers for the prototype — not reviewed by Uri yet. */
function genStrat(opener: Seat, hero: Seat): Record<string, [number, number]> {
  const o = SEATS.indexOf(opener);
  const T = 72 - 9 * o + (hero === "BB" ? -14 : 0) + (hero === "SB" ? 4 : 0);
  const st: Record<string, [number, number]> = {};
  for (const k of Object.keys(STRENGTH)) {
    const s = STRENGTH[k];
    let v: [number, number] | null = null;
    if (hero === "SB") {
      if (s >= T + 12) v = [100, 0];
      else if (s >= T) v = [55, 0];
    } else if (s >= T + 28) v = [100, 0];
    else if (s >= T + 20) v = [55, 45];
    else if (s >= T + 5) v = [0, 100];
    else if (s >= T - 5) v = [0, 50];
    if (!v && (k === "SAH" || k === "SAL") && o >= 1) v = [40, 0];
    if (k === "PP" && hero === "BB" && o >= 3) v = [70, 30];
    if (v) st[k] = v;
  }
  return st;
}

export type ThreebetSpot = {
  modeKey: "tb";
  key: string;
  heroSeat: Seat;
  openerSeat: Seat;
  title: string;
  roleText: string;
  drill: {
    pieces: DrillPiece[];
    tbPct: number;
    callPct: number;
  };
};

function buildThreebet(hero: Seat, opener: Seat): ThreebetSpot["drill"] {
  const strat = genStrat(opener, hero);
  const pieces: DrillPiece[] = [];
  const folds: string[] = [];
  let raiseCombos = 0;
  let callCombos = 0;

  for (const g of FAMS) {
    const s = strat[g.key];
    if (!s) {
      folds.push(g.key);
      continue;
    }
    const a: Split = { raise: s[0], call: s[1], fold: 100 - s[0] - s[1] };
    for (const h of g.hands) {
      raiseCombos += (combosOf(h) * a.raise) / 100;
      callCombos += (combosOf(h) * a.call) / 100;
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
    tbPct: Math.round((raiseCombos / 1326) * 100),
    callPct: Math.round((callCombos / 1326) * 100),
  };
}

const CACHE = new Map<string, ThreebetSpot>();

export function threebetSpot(opener: Seat, hero: Seat): ThreebetSpot {
  const key = `${hero} vs ${opener}`;
  const cached = CACHE.get(key);
  if (cached) return cached;
  const spot: ThreebetSpot = {
    modeKey: "tb",
    key,
    heroSeat: hero,
    openerSeat: opener,
    title: `${hero} vs ${SEAT_NAME[opener].toLowerCase()} open`,
    roleText: `You are in the ${hero}. The ${opener} opened to 2.5bb.`,
    drill: buildThreebet(hero, opener),
  };
  CACHE.set(key, spot);
  return spot;
}
