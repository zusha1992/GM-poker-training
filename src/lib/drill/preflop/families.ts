/**
 * The 18 named "pieces" that every preflop starting hand belongs to. Ported
 * directly from the solver-informed groupings in the original prototype —
 * see decisions/2026-10-23-rfi-ranges-from-solver-screenshots.md and memory
 * `tetris-piece-grouping-principle`. UTG's raise-first-in strategy is real;
 * every other seat/mode's percentages are still placeholder.
 */

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
  fam("OF", "Offsuit broadway, fold", "KTo QTo JTo", "#8A7B5C", "KTo QTo JTo"),
  fam("SC", "Suited connectors", "98s–65s, T8s 97s", "#FF8FC1", "98s 87s 76s 65s T8s 97s"),
  fam("SK", "Suited kings", "K8s–K2s", "#7FE3F0", "K8s K7s K6s K5s K4s K3s K2s"),
  fam("SQ", "Suited queens and jacks", "Q8s–Q5s, J8s–J7s", "#C3CBFF", "Q8s Q7s Q6s Q5s J8s J7s"),
  fam("OA", "Offsuit aces", "A9o–A2o", "#D9B88F", "A9o A8o A7o A6o A5o A4o A3o A2o"),
  fam("LS", "Small suited", "54s 43s 86s 75s 64s T7s 96s", "#FFB28A", "54s 43s 86s 75s 64s T7s 96s"),
  fam("OK", "Offsuit kings", "K9o–K6o, Q9o J9o T9o", "#B8A08A", "K9o K8o K7o K6o Q9o J9o T9o"),
  fam("LK", "Low offsuit kings", "K5o–K2o", "#9C8E80", "K5o K4o K3o K2o"),
  fam("WO", "Weak offsuit", "Q8o J8o T8o 98o 87o 76o", "#8E8478", "Q8o J8o T8o 98o 87o 76o"),
];

export const FAM_BY_KEY: Record<string, Family> = Object.fromEntries(
  FAMS.map((f) => [f.key, f]),
);

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
  OF: "Offsuit broadways just below the opening threshold here — close, but a fold.",
  SC: "Suited cards close together. They make straights and flushes and play well after the flop.",
  SK: "A king with a small card of the same suit. Flush potential with one strong high card.",
  SQ: "Suited queens and jacks with small kickers. Playable mostly from late position.",
  OA: "An ace with a small offsuit card. The ace blocks strong hands, but the kicker is weak.",
  LS: "Small suited cards and gappers. Hard to play well, so they belong to the latest seats.",
  OK: "Offsuit kings and offsuit connectors. Mostly steals from late position.",
  LK: "A king with a tiny offsuit card. Usually a fold, except from the blinds.",
  WO: "Weak offsuit hands. They rarely make strong hands, so they are usually folds.",
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
  LS: 25,
  OK: 18,
  LK: 12,
  WO: 10,
};

/** How many of the strongest-still-folding groups to ask about, so the
 * player learns where the range stops instead of only seeing clear raises. */
const NEAR_FOLDS = 2;

export function nearFolds(foldKeys: string[]): string[] {
  return foldKeys
    .slice()
    .sort((a, b) => STRENGTH[b] - STRENGTH[a])
    .slice(0, NEAR_FOLDS);
}
