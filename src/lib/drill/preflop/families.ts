/**
 * The 19 named "pieces" that every preflop starting hand belongs to. Ported
 * directly from the solver-informed groupings in the original prototype —
 * see decisions/2026-10-23-rfi-ranges-from-solver-screenshots.md and memory
 * `tetris-piece-grouping-principle`. UTG's raise-first-in strategy is real;
 * every other seat/mode's percentages are still placeholder.
 */

import type { DrillAction } from "@/lib/drill/types";

export type Family = {
  key: string;
  name: string;
  sub: string;
  color: string;
  hands: string[];
};

function fam(key: string, name: string, sub: string, color: string, hands: string): Family {
  return { key, name, sub, color, hands: hands.split(" ") };
}

export const FAMS: Family[] = [
  fam("PP", "Premium pairs", "AA–QQ", "#D6C8FF", "AA KK QQ"),
  fam("MP", "Medium pairs", "JJ–77", "#B49CFF", "JJ TT 99 88 77"),
  fam("LP", "Low pairs", "66–22", "#8F78E8", "66 55 44 33 22"),
  fam("SAH", "Suited aces", "A6s–AKs", "#5EE0C0", "A6s A7s A8s A9s ATs AJs AQs AKs"),
  fam("SAL", "Suited aces, low", "A2s–A5s", "#3FCBA8", "A2s A3s A4s A5s"),
  fam("SBW", "Suited broadways", "KQs–JTs", "#FFD36B", "KQs KJs KTs QJs QTs JTs"),
  fam("SBF", "Suited broadway frontier", "K9s Q9s J9s T9s", "#E8BD55", "K9s Q9s J9s T9s"),
  fam("BO", "Big offsuit", "AKo AQo AJo KQo", "#F3E2A9", "AKo AQo AJo KQo"),
  fam("OBWF", "Offsuit broadway frontier", "ATo KJo QJo", "#D9C27E", "ATo KJo QJo"),
  fam("OF", "Offsuit broadway, low", "KTo QTo JTo", "#8A7B5C", "KTo QTo JTo"),
  fam("SC", "Suited connectors", "98s–65s, T8s 97s", "#FF8FC1", "98s 87s 76s 65s T8s 97s"),
  fam("SK", "Suited kings", "K8s–K2s", "#7FE3F0", "K8s K7s K6s K5s K4s K3s K2s"),
  fam("SQ", "Suited queens and jacks", "Q8s–Q5s, J8s–J7s", "#C3CBFF", "Q8s Q7s Q6s Q5s J8s J7s"),
  fam("OA", "Offsuit aces", "A9o–A2o", "#D9B88F", "A9o A8o A7o A6o A5o A4o A3o A2o"),
  // Uri 2026-11-01: the gappers get asked on their own, so they left "Small suited".
  fam("SG", "Suited gappers", "86s 75s 64s T7s 96s", "#F28FA0", "86s 75s 64s T7s 96s"),
  fam("LS", "Small suited", "54s 43s", "#FFB28A", "54s 43s"),
  fam("OK", "Offsuit kings", "K9o–K6o, Q9o J9o T9o", "#B8A08A", "K9o K8o K7o K6o Q9o J9o T9o"),
  fam("LK", "Low offsuit kings", "K5o–K2o", "#9C8E80", "K5o K4o K3o K2o"),
  fam("WO", "Weak offsuit", "Q8o J8o T8o 98o 87o 76o", "#8E8478", "Q8o J8o T8o 98o 87o 76o"),
];

const handsOf = (...keys: string[]) => keys.flatMap((k) => FAMS.find((f) => f.key === k)!.hands).join(" ");

/** Every suited (or offsuit) hand no group above holds: Q4s, 95s, 32s... */
function leftovers(kind: "s" | "o"): string {
  const ranks = "AKQJT98765432";
  const taken = new Set(FAMS.flatMap((f) => f.hands));
  const out: string[] = [];
  for (let i = 0; i < 13; i++) for (let j = i + 1; j < 13; j++) {
    const h = `${ranks[i]}${ranks[j]}${kind}`;
    if (!taken.has(h)) out.push(h);
  }
  return out.join(" ");
}

/** The 3-bet drill's families (Noam 2026-11-04). Inside each family the hands
 * that play the same way in a spot become one question, even when they aren't
 * next to each other: on BTN vs UTG, A6s folds together with A3s and A2s.
 * Every hand belongs to one family, so nothing is filled in by mistake.
 * Raise-first-in keeps the groups above. */
export const THREEBET_FAMS: Family[] = [
  fam("PP", "Premium pairs", "AA–QQ", "#D6C8FF", "AA KK QQ"),
  fam("PRS", "Pairs", "JJ–22", "#B49CFF", handsOf("MP", "LP")),
  fam("SAA", "Suited aces", "AKs–A2s", "#5EE0C0", handsOf("SAH", "SAL")),
  fam("SBX", "Suited broadways", "KQs–JTs, K9s–T9s", "#FFD36B", handsOf("SBW", "SBF")),
  fam("SK", "Suited kings", "K8s–K2s", "#7FE3F0", handsOf("SK")),
  fam("SQ", "Suited queens and jacks", "Q8s–Q5s, J8s–J7s", "#C3CBFF", handsOf("SQ")),
  fam("SCG", "Suited connectors and gappers", "98s–43s, T8s–64s", "#FF8FC1", handsOf("SC", "SG", "LS")),
  fam("OS", "Other suited hands", "Q4s–Q2s, J6s–J2s, T6s–T2s, 95s–32s", "#A88C7A", leftovers("s")),
  fam("OBX", "Offsuit broadways", "AKo–KQo, ATo–JTo", "#F3E2A9", handsOf("BO", "OBWF", "OF")),
  fam("OA", "Offsuit aces", "A9o–A2o", "#D9B88F", handsOf("OA")),
  fam("OKX", "Offsuit kings", "K9o–K2o, Q9o J9o T9o", "#B8A08A", handsOf("OK", "LK")),
  fam("OOX", "Other offsuit hands", "Q8o–32o", "#8E8478", `${handsOf("WO")} ${leftovers("o")}`),
];

export const FAM_BY_KEY: Record<string, Family> = Object.fromEntries(
  [...FAMS, ...THREEBET_FAMS].map((f) => [f.key, f]),
);

/** Each group's own mark key (pieceOf in SpadeMark.tsx turns it into a chess
 * piece), so a group looks the same in every drill and every seat. */
export const FAMILY_SHAPE: Record<string, string> = {
  PP: "O",
  MP: "block6",
  LP: "I3",
  SAH: "I",
  SAL: "dot2",
  SBW: "plus",
  SBF: "value",
  BO: "U",
  OBWF: "J",
  OF: "check",
  SC: "bluff",
  SG: "giveup",
  SK: "V",
  SQ: "P",
  OA: "W",
  LS: "L5",
  OK: "N",
  LK: "Y",
  WO: "F",
  // The 3-bet drill's families (THREEBET_FAMS).
  PRS: "block6",
  SAA: "I",
  SBX: "plus",
  SCG: "bluff",
  OS: "whole",
  OBX: "U",
  OKX: "N",
  OOX: "F",
};

/** A 3-bet piece is keyed "<family>-<how it plays>" (e.g. "SAA-fold"): it takes its family's shape. */
export function shapeOf(key: string): string {
  return FAMILY_SHAPE[key] ?? FAMILY_SHAPE[key.split("-")[0]] ?? "O";
}

/** Longer explanation shown in the per-piece "explain" sheet. */
export const FAMILY_DESC: Record<string, string> = {
  PP: "The three strongest pairs. They win big pots and almost never fold before the flop.",
  MP: "Strong pairs that are ahead of most ranges but can get in trouble against heavy action.",
  LP: "Small pairs. They mostly play to hit a set on the flop, so they like cheap prices and deep stacks.",
  SAH: "Strong suited aces. They make the nut flush and are an easy raise from every seat.",
  SAL: "Small suited aces. The ace blocker and flush potential make them a raise from every seat too, even this weak.",
  SBW: "Two high cards of the same suit. They make strong top pairs plus flush and straight draws.",
  SBF: "The borderline suited nines to a king, queen, jack or ten — still a solid raise.",
  BO: "The strongest offsuit high cards. They make top pair with a good kicker.",
  OBWF: "The weakest offsuit broadway combos that still open from this seat.",
  OF: "Offsuit broadways with a ten or jack as the second card: the border of the opening range.",
  SC: "Suited cards close together. They make straights and flushes and play well after the flop.",
  SK: "A king with a small card of the same suit. Flush potential with one strong high card.",
  SQ: "Suited queens and jacks with small kickers. Playable mostly from late position.",
  OA: "An ace with a small offsuit card. The ace blocks strong hands, but the kicker is weak.",
  SG: "Suited cards with a gap between them. They make fewer straights than connectors, so they open later.",
  LS: "Small suited connectors. Hard to play well, so they belong to the latest seats.",
  OK: "Offsuit kings and offsuit connectors. Mostly steals from late position.",
  LK: "A king with a tiny offsuit card. Usually a fold, except from the blinds.",
  WO: "Weak offsuit hands. They rarely make strong hands, so they are usually folds.",
  PRS: "Every pair below the premium ones.",
  SAA: "Every suited ace. The ace blocks strong hands and makes the nut flush.",
  SBX: "Two suited broadway cards, and the suited nines with a broadway card.",
  SCG: "Suited cards close together, with or without a gap. They make straights and flushes.",
  OS: "Every other suited hand. The flush potential makes them playable when the price is good, like in the big blind.",
  OBX: "Two offsuit broadway cards.",
  OKX: "A king with an offsuit kicker, and the offsuit nines.",
  OOX: "Every other offsuit hand.",
};

/** Rough relative strength per family (0-100), used only to generate the
 * placeholder 3-bet / facing-3-bet / facing-4-bet strategies and to pick
 * which near-fold groups are worth asking about. */
export const STRENGTH: Record<string, number> = {
  PP: 100,
  SBW: 86,
  MP: 80,
  BO: 78,
  SAH: 66,
  SBF: 60,
  LP: 55,
  SC: 52,
  OBWF: 52,
  OF: 48,
  SK: 40,
  SQ: 35,
  OA: 30,
  SAL: 28,
  SG: 25,
  LS: 25,
  OK: 18,
  LK: 12,
  WO: 10,
  SBX: 75,
  PRS: 70,
  SAA: 66,
  OBX: 60,
  SCG: 45,
  OKX: 16,
  OS: 15,
  OOX: 8,
};

/** A clear group filled in before the drill starts, with its answer (and its
 * hands, when it's a 3-bet piece rather than a whole family). */
export type PreFilledGroup = { key: string; answer: DrillAction; mixSplit?: [DrillAction, DrillAction, number]; hands?: string[] };

/** Noam 2026-11-01: never ask what everybody already knows (3-betting
 * AA–QQ). Lined up strongest to weakest, a clear group with the same answer
 * as the groups on both sides of it starts filled in; only the borders
 * between answers (and every mix) are asked. Premium pairs are always filled
 * in, even as a mix (Noam 2026-11-03). `answers` holds every group in play,
 * folds too. */
export function obviousKeys(answers: [string, DrillAction][]): Set<string> {
  const sorted = answers.slice().sort((a, b) => STRENGTH[b[0]] - STRENGTH[a[0]]);
  const out = new Set<string>();
  sorted.forEach(([k, a], i) => {
    if (k === "PP" && a !== "fold") return void out.add(k);
    if (a === "mix" || a === "fold") return;
    const above = sorted[i - 1]?.[1] ?? a;
    const below = sorted[i + 1]?.[1];
    if (above === a && below === a) out.add(k);
  });
  return out;
}

/** How many of the strongest-still-folding groups to ask about, so the
 * player learns where the range stops instead of only seeing clear raises. */
const NEAR_FOLDS = 2;

export function nearFolds(foldKeys: string[]): string[] {
  return foldKeys
    .slice()
    .sort((a, b) => STRENGTH[b] - STRENGTH[a])
    .slice(0, NEAR_FOLDS);
}
