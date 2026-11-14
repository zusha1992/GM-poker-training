import type { MatrixSnap } from "@/components/drill/postflop/LineMatrix";
import { btnRangeCombos, card, type Card } from "./line-demo";
import { FLOP_GROUPS, type FlopGroup } from "./flop-groups";
import { TURN_GROUPS } from "./turn-groups";
import { RIVER_GROUPS } from "./river-groups";
import { flushSuit, handKey, madeGroup } from "./hand-key";
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

export type Street = "flop" | "turn" | "river";
/** `name`: the flop ("A72"), the turn spot ("A72-Qh") or the river spot ("A72-Qh-9c"); `flop`: its flop.
 * `turnBet`: BTN's turn bet in bb (river spots). */
export type FlopSpot = { name: string; flop: string; street: Street; board: Card[]; pot: number; behind: number; turnBet?: number; snap: MatrixSnap; pieces: FlopPiece[]; order: string[] };

const CACHE = new Map<string, FlopSpot>();

export const FLOP_BOARDS = BOARDS.filter((b) => FLOP_GROUPS[b.name]?.length);

/** "Q♥" → "Qh". */
const code = (c: string) => c[0] + ({ "♠": "s", "♥": "h", "♦": "d", "♣": "c" } as Record<string, string>)[c[1]];

/** Turn drill (Noam 2026-11-12): every flop's three turns, e.g. "A72-Qh". */
export const TURN_SPOTS: { name: string; flop: string; turn: string }[] = BOARDS.flatMap((b) =>
  b.turns.map((t) => ({ name: `${b.name}-${code(t.card)}`, flop: b.name, turn: t.card })).filter((t) => TURN_GROUPS[t.name]?.length),
);

/** River drill (Noam 2026-11-14): every turn's two rivers (a brick and one that changes the board), e.g. "A72-Qh-9c". */
export const RIVER_SPOTS: { name: string; flop: string; turn: string; river: string }[] = BOARDS.flatMap((b) =>
  b.turns.flatMap((t) => t.rivers.map((r) => ({ name: `${b.name}-${code(t.card)}-${code(r.card)}`, flop: b.name, turn: t.card, river: r.card }))),
).filter((r) => RIVER_GROUPS[r.name]?.length);

/** The spots of a street. */
export const spotsOf = (street: Street) => (street === "flop" ? FLOP_BOARDS.map((b) => ({ name: b.name, flop: b.name })) : street === "turn" ? TURN_SPOTS : RIVER_SPOTS);

/** The cards on a group's fan. With a flush possible on the board the suits matter
 * (Noam 2026-11-13): a flush-draw group shows a card of the suit, every other group shows real
 * cards of its own without one, so "no flush draw" never looks like it has one. */
function fanCards(g: FlopGroup, hands: string[], combos: Map<string, [Card, Card][]>, board: Card[]): [Card, Card][] {
  const suit = flushSuit(board);
  if (!suit) return cardsToShow("op", hands, combos, board);
  const fd = g.hands.every((h) => h.endsWith("+fd"));
  const seen = new Set<string>();
  const out: [Card, Card][] = [];
  for (const h of hands) {
    if (seen.has(h.slice(0, 2))) continue;
    seen.add(h.slice(0, 2));
    const all = combos.get(h) ?? [];
    const n = (c: [Card, Card]) => c.filter((x) => x.s === suit).length;
    const ok = all.filter((c) => n(c) === (fd ? 1 : 0));
    // Mixed suits where the hand has them, a different pair of suits from hand to hand.
    const mixed = ok.filter((c) => c[0].s !== c[1].s);
    const from = mixed.length ? mixed : ok;
    const pick = from[out.length % Math.max(1, from.length)] ?? all[0];
    if (pick) out.push(pick);
  }
  return out;
}

export function buildFlopSpot(name: string): FlopSpot {
  const cached = CACHE.get(name);
  if (cached) return cached;
  const [flopName, turnCode, riverCode] = name.split("-");
  const spec = BOARDS.find((b) => b.name === flopName)!;
  const turn = turnCode ? spec.turns.find((t) => code(t.card) === turnCode)! : undefined;
  const river = turn && riverCode ? turn.rivers.find((r) => code(r.card) === riverCode)! : undefined;
  // On the turn a pair with a draw is still a pair (as in the generator).
  const cut = river ? { ...river, pairDraws: false } : turn ? { ...turn, pairDraws: false } : RUNOUTS.find((r) => r.board === flopName)!.streets[0];
  const board = [...spec.flop, ...(turn ? [turn.card] : []), ...(river ? [river.card] : [])].map(card);
  const groups: FlopGroup[] = river ? RIVER_GROUPS[name] : turn ? TURN_GROUPS[name] : FLOP_GROUPS[name];
  const groupOf = new Map<string, string>();
  for (const g of groups) for (const h of g.hands) groupOf.set(h, g.id);

  const { combos, basis } = btnRangeCombos(board);
  const cells = new Map<string, Partial<Record<string, number>>>();
  const byGroup = new Map<string, number>();
  const made = new Map<string, Map<string, [Card, Card][]>>();
  let total = 0;
  for (const c of combos) {
    const g = madeGroup(priceGroupOf(c.cards, board, cut), c.cards, board, cut);
    const asked = isAskedFlopHand(g, c.cards, board);
    const id = (asked && groupOf.get(handKey(c.hand, c.cards, g, board))) || REST;
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
      name: river
        ? `Equity: ${g.eq[3].toFixed(0)}% vs the hands that call an all-in · ${g.eq[2].toFixed(0)}% vs BB's top pair+ that calls · ${g.eq[1].toFixed(0)}% vs a river call · ${g.eq[0].toFixed(0)}% vs BB's turn calls`
        : turn
        ? `Equity: ${g.eq[3].toFixed(0)}% vs BB's top pair+ · ${g.eq[2].toFixed(0)}% vs middle pair+ · ${g.eq[1].toFixed(0)}% vs a turn call · ${g.eq[0].toFixed(0)}% vs BB's flop calls`
        : `Equity: ${g.eq[3].toFixed(0)}% vs BB's top pair+ · ${g.eq[2].toFixed(0)}% vs middle pair+ · ${g.eq[1].toFixed(0)}% vs a flop call · ${g.eq[0].toFixed(0)}% vs all`,
      desc: g.handsLabel ?? g.label,
      hands: g.handsLabel ?? g.label,
      color: GROUP_COLORS[i % GROUP_COLORS.length],
      partMark: "some",
      entries,
      cards: fanCards(g, hands, made.get(g.id) ?? new Map(), board),
      pct: Math.round(((byGroup.get(g.id) ?? 0) / total) * 100),
      answer: { bucket: g.box, why: g.why },
      eq: g.eq,
    };
  });

  // The flop bet is 1.8bb and called (as in the old full-hand drill): 9.1bb in the pot on the turn.
  // River: the turn bet was 66% (6bb) or an overbet (13.7bb), and called.
  const money = river
    ? turn!.bet === "overbet"
      ? { pot: 36.5, behind: 82, turnBet: 13.7 }
      : { pot: 21.1, behind: 89.7, turnBet: 6 }
    : turn
      ? { pot: 9.1, behind: 95.7 }
      : { pot: 5.5, behind: 97.5 };
  const street: Street = river ? "river" : turn ? "turn" : "flop";
  const spot: FlopSpot = { name, flop: flopName, street, board, ...money, snap: { street, cells, basis, total }, pieces, order: [...groups.map((g) => g.id), REST] };
  CACHE.set(name, spot);
  return spot;
}
