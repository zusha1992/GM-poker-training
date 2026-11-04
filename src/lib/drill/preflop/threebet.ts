import { combosOf, MATRIX_HANDS } from "@/lib/drill/matrix";
import type { DrillAction, DrillPiece } from "@/lib/drill/types";
import { FAMS, FAM_BY_KEY, FAMILY_DESC, STRENGTH, THREEBET_FAMS, nearFolds, obviousKeys, type Family, type PreFilledGroup } from "./families";
import { familyPieces, groupSplit, solverRead, splitOf } from "./solver";
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

/** 3-bet: any opener, any later seat, for the spots with no solver chart yet.
 * Sample strategy built from rough group strength, how wide the opener is,
 * and the hero's seat. Placeholder numbers, not reviewed by Uri. */
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
    /** Clear groups everybody knows, filled in before the drill starts. */
    preFilled: PreFilledGroup[];
    /** True when the answers come from a solver chart (and the 3-bet groups). */
    fromSolver: boolean;
    tbPct: number;
    callPct: number;
  };
};

/** The hands of a piece as its caption, short enough for the screen. */
function caption(hands: string[]): string {
  return hands.length <= 6 ? hands.join(" ") : `${hands.slice(0, 5).join(" ")} +${hands.length - 5} more`;
}

/** How a piece plays: a pure action, or a mix of two (in either order). */
const kindOf = (p: DrillPiece) => (p.answer === "mix" && p.mixSplit ? `mix_${[p.mixSplit[0], p.mixSplit[1]].sort().join("_")}` : p.answer);
const shapeKind = (h: string) => (h.length === 2 ? "pair" : h[2]);

/** Noam 2026-11-04: a hand is never a question on its own. A hand that plays
 * differently from the rest of its family joins another question that plays
 * the same way, of the same kind (suited, offsuit, pairs) when there is one,
 * like the cross-family frontier pieces (K9s+Q9s+J9s+T9s). Every hand keeps
 * its own chart answer; only the grouping changes. Mutates `asked`. */
function bundleLoners(asked: DrillPiece[], read: Record<string, [number, number, number]>) {
  const families = new Map<DrillPiece, string[]>(asked.map((p) => [p, [p.label]]));
  for (const loner of asked.filter((p) => p.hands.length === 1)) {
    const same = asked.filter((q) => q !== loner && kindOf(q) === kindOf(loner));
    // Nothing else plays this way: it stays a question of its own.
    if (!same.length) continue;
    const host = same.find((q) => q.hands.some((h) => shapeKind(h) === shapeKind(loner.hands[0]))) ?? same[0];
    host.hands = [...host.hands, ...loner.hands];
    const names = [...new Set([...families.get(host)!, ...families.get(loner)!])];
    families.set(host, names);
    // Short enough for a phone: two families by name, more as "Mixed hands" (the caption lists them).
    host.label = names.length <= 2 ? names.join(" + ") : "Mixed hands";
    host.sub = caption(host.hands);
    if (host.mixSplit) {
      const s = groupSplit(read, host.hands);
      const [x, y] = [host.mixSplit[0], host.mixSplit[1]] as (keyof typeof s)[];
      const [a, b] = s[x] >= s[y] ? [x, y] : [y, x];
      host.mixSplit = [a, b, Math.round((s[a] / (s[a] + s[b])) * 100)];
    }
    asked.splice(asked.indexOf(loner), 1);
  }
}

/** A spot with a solver chart (decisions/ranges/3bet/). Each family splits into
 * the hands that play the same way here (familyPieces), so every hand is
 * taught its own chart answer. A family that plays one way throughout is one
 * piece; it starts filled in when the families on both sides play the same
 * way too (obviousKeys), and a family that only folds is trash, except the
 * two strongest of those, which are asked. */
function buildFromRead(read: Record<string, [number, number, number]>): ThreebetSpot["drill"] {
  const asked: DrillPiece[] = [];
  const filled: PreFilledGroup[] = [];
  const folds: string[] = [];
  const answers: [string, DrillAction][] = [];
  const whole = new Map<string, DrillPiece>();
  for (const g of THREEBET_FAMS) {
    const parts = familyPieces(read, g.hands);
    const piece = (p: (typeof parts)[number], key: string): DrillPiece => ({
      key,
      label: g.name,
      sub: caption(p.hands),
      color: g.color,
      hands: p.hands,
      answer: p.answer,
      mixSplit: p.mixSplit,
      desc: FAMILY_DESC[g.key],
    });
    // AA–QQ always start filled in, even when QQ plays differently from AA and KK.
    if (g.key === "PP") {
      for (const p of parts) filled.push({ key: `${g.key}-${p.kind}`, answer: p.answer, mixSplit: p.mixSplit, hands: p.hands });
      answers.push([g.key, parts.length === 1 ? parts[0].answer : "mix"]);
      continue;
    }
    if (parts.length === 1) {
      answers.push([g.key, parts[0].answer]);
      if (parts[0].answer === "fold") folds.push(g.key);
      else whole.set(g.key, piece(parts[0], g.key));
      continue;
    }
    // A family that splits sits on a border: every part is asked.
    answers.push([g.key, "mix"]);
    for (const p of parts) asked.push(piece(p, `${g.key}-${p.kind}`));
  }
  const obvious = obviousKeys(answers);
  for (const [key, p] of whole) {
    if (obvious.has(key)) filled.push({ key, answer: p.answer, mixSplit: p.mixSplit, hands: p.hands });
    else asked.push(p);
  }
  nearFolds(folds).forEach((k) => asked.push(foldPiece(FAM_BY_KEY[k])));
  bundleLoners(asked, read);

  let raiseCombos = 0;
  let callCombos = 0;
  for (const { key } of MATRIX_HANDS) {
    const s = splitOf(read, key);
    raiseCombos += (combosOf(key) * s.raise) / 100;
    callCombos += (combosOf(key) * s.call) / 100;
  }
  return {
    pieces: asked,
    preFilled: filled,
    fromSolver: true,
    tbPct: Math.round((raiseCombos / 1326) * 100),
    callPct: Math.round((callCombos / 1326) * 100),
  };
}

function buildThreebet(hero: Seat, opener: Seat): ThreebetSpot["drill"] {
  const read = solverRead(`3bet/${hero}-vs-${opener}`);
  if (read) return buildFromRead(read);
  const strat = genStrat(opener, hero);
  const pieces: DrillPiece[] = [];
  const folds: string[] = [];
  const answers: [string, DrillAction][] = [];
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
      answers.push([g.key, "fold"]);
      continue;
    }
    const ranked = (Object.keys(a) as (keyof Split)[]).sort((x, y) => a[y] - a[x]);
    const top = ranked[0];
    const second = ranked[1];
    const answer = a[top] >= 80 ? top : "mix";
    answers.push([g.key, answer]);
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

  const obvious = obviousKeys(answers);
  nearFolds(folds).forEach((k) => pieces.push(foldPiece(FAM_BY_KEY[k])));

  return {
    pieces: pieces.filter((p) => !obvious.has(p.key)),
    preFilled: pieces.filter((p) => obvious.has(p.key)).map((p) => ({ key: p.key, answer: p.answer, mixSplit: p.mixSplit })),
    fromSolver: false,
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
