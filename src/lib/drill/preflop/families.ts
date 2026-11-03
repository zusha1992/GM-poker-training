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

/** Noam 2026-11-03, from the 3-bet vs UTG solver charts: in the 3-bet drill
 * five groups split in the middle (the top half 3-bets, the bottom half calls
 * or folds), and BB calls with suited hands that no group held. Raise-first-in
 * keeps the groups above. */
const SPLITS: Record<string, Family[]> = {
  MP: [fam("MPH", "Jacks and tens", "JJ TT", "#B49CFF", "JJ TT"), fam("MPL", "Medium pairs", "99–77", "#A38BF0", "99 88 77")],
  SAH: [fam("SAT", "Suited aces, high", "ATs–AKs", "#5EE0C0", "ATs AJs AQs AKs"), fam("SAM", "Suited aces, middle", "A6s–A9s", "#4FD4B4", "A6s A7s A8s A9s")],
  SAL: [fam("SAW", "Suited wheel aces", "A5s A4s", "#3FCBA8", "A5s A4s"), fam("SAX", "Suited aces, lowest", "A3s A2s", "#33B596", "A3s A2s")],
  SBW: [fam("SBT", "Suited broadways, top", "KQs KJs KTs QJs", "#FFD36B", "KQs KJs KTs QJs"), fam("SBL", "Suited broadways, low", "QTs JTs", "#F2C75E", "QTs JTs")],
  BO: [fam("BOT", "Big offsuit aces", "AKo AQo", "#F3E2A9", "AKo AQo"), fam("BOL", "Big offsuit, lower", "AJo KQo", "#E6D394", "AJo KQo")],
};
export const THREEBET_FAMS: Family[] = [
  ...FAMS.flatMap((f) => SPLITS[f.key] ?? [f]),
  // The suited hands outside every group that BB calls vs UTG; the rest (72s, T2s...) stay trash.
  fam("OS", "Other suited hands", "Q4s–Q2s, J6s–J3s, T6s, 95s, 85s, 74s, 63s, 53s…", "#A88C7A", "Q4s Q3s Q2s J6s J5s J4s J3s T6s 95s 85s 74s 63s 53s 52s 42s 32s"),
];

export const FAM_BY_KEY: Record<string, Family> = Object.fromEntries(
  [...FAMS, ...THREEBET_FAMS].map((f) => [f.key, f]),
);

/** Each group's own Tetris shape (see Tetromino in SortPiece.tsx), so a
 * group looks the same in every drill and every seat. */
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
  // The 3-bet drill's split groups keep their parent's shape; the color tells them apart.
  MPH: "block6",
  MPL: "block6",
  SAT: "I",
  SAM: "I",
  SAW: "dot2",
  SAX: "dot2",
  SBT: "plus",
  SBL: "plus",
  BOT: "U",
  BOL: "U",
  OS: "whole",
};

export function shapeOf(key: string): string {
  return FAMILY_SHAPE[key] ?? "O";
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
  MPH: "The two biggest medium pairs. Strong enough to 3-bet for value from many seats.",
  MPL: "Pairs that beat most unpaired hands but don't love a big pot: often a call.",
  SAT: "Suited aces with a broadway kicker. Strong enough to 3-bet for value.",
  SAM: "Suited aces with a middle kicker. Flush potential, but often dominated.",
  SAW: "A5s and A4s: the ace blocks strong hands, and they can make a wheel straight.",
  SAX: "The weakest suited aces.",
  SBT: "The best suited broadways.",
  SBL: "Suited broadways with a ten: they play well but often get dominated.",
  BOT: "AK and AQ offsuit: the strongest offsuit hands.",
  BOL: "AJ and KQ offsuit: good high cards that are often dominated by an early open.",
  OS: "Every other suited hand. The flush potential makes them playable when the price is good, like in the big blind.",
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
  MPH: 92,
  BOT: 90,
  SBT: 88,
  SAT: 87,
  MPL: 72,
  SBL: 64,
  BOL: 62,
  SAW: 58,
  SAM: 45,
  SAX: 27,
  OS: 15,
};

/** A clear group filled in before the drill starts, with its answer. */
export type PreFilledGroup = { key: string; answer: DrillAction; mixSplit?: [DrillAction, DrillAction, number] };

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
