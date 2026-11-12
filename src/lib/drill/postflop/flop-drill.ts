import type { MatrixSnap } from "@/components/drill/postflop/LineMatrix";
import { btnRangeCombos, card, type Card } from "./line-demo";
import { FLOP_GROUPS, type FlopGroup } from "./flop-groups";
import { BOARDS, cardsToShow, priceGroupOf, realDraw, RUNOUTS, type Bucket, type PGroup } from "./price-hands";

/** Flop drill (Noam & Uri 2026-11-10): the first of the three "How many bb"
 * drills. BTN opens, BB calls, one flop: only BTN's made hands are asked
 * (ace-high and better, no draws), in groups made by equity
 * (scripts/analysis/flop-equity-groups.ts). */

const MADE = new Set<PGroup>(["boat", "flush", "flushlo", "straight", "trips", "twopair", "op", "tpgk", "tpmk", "tpwk", "pp1", "pp2", "pp3", "spp", "mp", "bp", "aho", "khnd"]);

/** A made hand that the drill asks about: ace-high is the weakest (no K-high, no draws).
 * Noam 2026-11-11: ace-high with only a backdoor draw is still ace-high (A5 on J♠T♠3♣);
 * a real draw (AK, AQ there: gutshots) is not asked. */
export function isAskedFlopHand(g: PGroup, cards: [Card, Card], board: Card[]): boolean {
  const ace = Math.max(cards[0].r, cards[1].r) === 14;
  if (g === "imp") return ace && !realDraw(cards, board);
  if (!MADE.has(g)) return false;
  return g !== "khnd" || ace;
}

/** The hands that aren't asked: the rest of the range on the matrix. */
const REST = "rest";

/** One color per group, strongest first. */
const GROUP_COLORS = ["#FF3D6E", "#FF7A3B", "#F2C14E", "#B6E35A", "#2EC4B6", "#3FA9F5", "#8B6CFF", "#C59BF0", "#E46FC8", "#9DB4C4", "#7F97A8", "#56626C"];

/** The chess piece of a group by its box (Noam 2026-11-09: each group is a piece). */
const SHAPE_OF: Record<Bucket, string> = { b50: "whole", b25: "value", b15: "check", b5: "I3", b0: "J", big: "giveup" };

export type FlopPiece = {
  key: string;
  shape: string;
  /** Its name, e.g. "Top pair, good kicker" (its hands until the board is reviewed). */
  label: string;
  /** Its hands, e.g. "AK–AT". */
  hands: string;
  /** Its equity line, shown when tapped. */
  name: string;
  desc: string;
  color: string;
  partMark: string;
  entries: { hand: string; part: number }[];
  cards: [Card, Card][];
  pct: number;
  answer: { bucket: Bucket; why: string };
  eq: number[];
};

export type FlopSpot = { name: string; board: Card[]; pot: number; behind: number; snap: MatrixSnap; pieces: FlopPiece[]; order: string[] };

const CACHE = new Map<string, FlopSpot>();

export const FLOP_BOARDS = BOARDS.filter((b) => FLOP_GROUPS[b.name]?.length);

export function buildFlopSpot(name: string): FlopSpot {
  const cached = CACHE.get(name);
  if (cached) return cached;
  const spec = BOARDS.find((b) => b.name === name)!;
  const cut = RUNOUTS.find((r) => r.board === name)!.streets[0];
  const board = spec.flop.map(card);
  const groups: FlopGroup[] = FLOP_GROUPS[name];
  const groupOf = new Map<string, string>();
  for (const g of groups) for (const h of g.hands) groupOf.set(h, g.id);

  const { combos, basis } = btnRangeCombos(board);
  const cells = new Map<string, Partial<Record<string, number>>>();
  const byGroup = new Map<string, number>();
  const made = new Map<string, Map<string, [Card, Card][]>>();
  let total = 0;
  for (const c of combos) {
    const asked = isAskedFlopHand(priceGroupOf(c.cards, board, cut), c.cards, board);
    const id = (asked && groupOf.get(c.hand.slice(0, 2))) || REST;
    const cell = cells.get(c.hand) ?? {};
    cell[id] = (cell[id] ?? 0) + c.weight;
    cells.set(c.hand, cell);
    byGroup.set(id, (byGroup.get(id) ?? 0) + c.weight);
    total += c.weight;
    if (id === REST) continue;
    const mine = made.get(id) ?? new Map<string, [Card, Card][]>();
    mine.set(c.hand, [...(mine.get(c.hand) ?? []), c.cards]);
    made.set(id, mine);
  }

  const pieces = groups.map((g, i): FlopPiece => {
    const entries: { hand: string; part: number }[] = [];
    for (const [hand, cell] of cells) {
      const mine = cell[g.id] ?? 0;
      if (mine <= 0) continue;
      const all = Object.values(cell).reduce((s: number, x) => s + (x ?? 0), 0);
      entries.push({ hand, part: mine / all });
    }
    const hands = entries.map((e) => e.hand);
    return {
      key: g.id,
      shape: SHAPE_OF[g.box],
      label: g.label,
      name: `Equity: ${g.eq[3].toFixed(0)}% vs BB's top pair+ · ${g.eq[2].toFixed(0)}% vs middle pair+ · ${g.eq[1].toFixed(0)}% vs a flop call · ${g.eq[0].toFixed(0)}% vs all`,
      desc: g.handsLabel ?? g.label,
      hands: g.handsLabel ?? g.label,
      color: GROUP_COLORS[i % GROUP_COLORS.length],
      partMark: "some",
      entries,
      cards: cardsToShow("op", hands, made.get(g.id) ?? new Map(), board),
      pct: Math.round(((byGroup.get(g.id) ?? 0) / total) * 100),
      answer: { bucket: g.box, why: g.why },
      eq: g.eq,
    };
  });

  const spot: FlopSpot = { name, board, pot: 5.5, behind: 97.5, snap: { street: "flop", cells, basis, total }, pieces, order: [...groups.map((g) => g.id), REST] };
  CACHE.set(name, spot);
  return spot;
}
