// BB's EV of calling, per hand (Noam 2026-11-21: the defend drill answers by EV, not equity).
// From a TexasSolver result: BB checks, BTN bets `bet`, BB calls; from there both play the solved
// strategies to the end. EV is in bb, counted from BB's decision, so folding is 0: a call is +EV
// when it wins more than it puts in. Where the dump stops before the river (the flop solve dumps
// the turn only), the hand is checked down from there (marked as an approximation in the reports).
import { readFileSync } from "node:fs";
import { score } from "./price-equity";
import type { Card } from "../../src/lib/drill/postflop/line-demo";

type Strat = { actions: string[]; strategy: Record<string, number[]> };
export type SolverNode = { node_type?: string; player?: number; actions?: string[]; childrens?: Record<string, SolverNode>; strategy?: Strat; dealcards?: Record<string, SolverNode> };

const RANKS = "AKQJT98765432";
const toCard = (c: string): Card => ({ r: 14 - RANKS.indexOf(c[0]), s: c[1] }) as Card;
const classOf = (c: string) => {
  const [a, b] = [c[0], c[2]].sort((x, y) => RANKS.indexOf(x) - RANKS.indexOf(y));
  return a === b ? a + b : a + b + (c[1] === c[3] ? "s" : "o");
};

/** EV (bb) of BB calling `bet` (the action name in BTN's node, e.g. "BET 14.000000"), per BB combo. */
export function bbCallEv(tree: SolverNode, input: string, bet: string): { ev: Map<string, number>; checkedDown: boolean } {
  const lines = readFileSync(input, "utf8").split(/\r?\n/);
  const arg = (k: string) => lines.find((l) => l.startsWith(k + " "))!.slice(k.length + 1);
  const pot0 = Number(arg("set_pot"));
  const stack0 = Number(arg("set_effective_stack"));
  const board0 = arg("set_board").split(",");
  const weights = (k: string) => new Map(arg(k).split(",").map((p) => [p.split(":")[0], Number(p.split(":")[1] ?? 1)] as const));
  const ipW = weights("set_range_ip");

  const ipNode = tree.childrens!.CHECK;
  const bbNode = ipNode.childrens![bet];
  const H = Object.keys(bbNode.strategy!.strategy); // BB (hero)
  const V = Object.keys(ipNode.strategy!.strategy); // BTN
  const hCards = H.map((c) => [c.slice(0, 2), c.slice(2, 4)]);
  const vCards = V.map((c) => [c.slice(0, 2), c.slice(2, 4)]);
  const vByCard = new Map<string, number[]>();
  vCards.forEach((cs, j) => cs.forEach((c) => vByCard.set(c, [...(vByCard.get(c) ?? []), j])));
  // BTN combos that share a card with each BB combo (a combo holding both cards appears once).
  const blockers = hCards.map((cs) => [...new Set([...(vByCard.get(cs[0]) ?? []), ...(vByCard.get(cs[1]) ?? [])])]);
  const betI = ipNode.strategy!.actions.indexOf(bet);
  const vr0 = V.map((c) => (ipW.get(classOf(c)) ?? 0) * (ipNode.strategy!.strategy[c][betI] ?? 0));
  const betAmt = Number(bet.split(" ")[1]);
  let checkedDown = false;

  const scoreCache = new Map<string, { h: number[]; v: number[] }>();
  const scores = (board: string[]) => {
    const key = board.join();
    let s = scoreCache.get(key);
    if (!s) {
      const bc = board.map(toCard);
      const of = (cs: string[]) => (cs.some((c) => board.includes(c)) ? -1 : score([...cs.map(toCard), ...bc]));
      s = { h: hCards.map(of), v: vCards.map(of) };
      if (scoreCache.size > 400) scoreCache.clear();
      scoreCache.set(key, s);
    }
    return s;
  };
  /** BTN's reach that can hold a hand next to BB combo i. */
  const liveReach = (vr: number[], total: number, i: number) => total - blockers[i].reduce((s, j) => s + vr[j], 0);

  function showdown(board: string[], a0: number, a1: number, vr: number[]): number[] {
    const { h, v } = scores(board);
    const idx = V.map((_, j) => j).filter((j) => v[j] >= 0 && vr[j] > 0).sort((a, b) => v[a] - v[b]);
    const sv = idx.map((j) => v[j]);
    const cum = [0];
    for (const j of idx) cum.push(cum[cum.length - 1] + vr[j]);
    const firstAtLeast = (x: number) => {
      let lo = 0, hi = sv.length;
      while (lo < hi) {
        const m = (lo + hi) >> 1;
        if (sv[m] < x) lo = m + 1;
        else hi = m;
      }
      return lo;
    };
    const win = pot0 + a0, lose = -a1, tie = (pot0 + a0 - a1) / 2;
    return H.map((_, i) => {
      if (h[i] < 0) return 0;
      const lo = firstAtLeast(h[i]), hi = firstAtLeast(h[i] + 0.5);
      let less = cum[lo], eq = cum[hi] - cum[lo], more = cum[cum.length - 1] - cum[hi];
      for (const j of blockers[i]) {
        if (v[j] < 0 || !vr[j]) continue;
        if (v[j] < h[i]) less -= vr[j];
        else if (v[j] === h[i]) eq -= vr[j];
        else more -= vr[j];
      }
      return less * win + eq * tie + more * lose;
    });
  }
  function runout(board: string[], a0: number, a1: number, vr: number[]): number[] {
    checkedDown = true;
    const deck = [..."AKQJT98765432"].flatMap((r) => [..."shdc"].map((s) => r + s)).filter((c) => !board.includes(c));
    const out = new Array(H.length).fill(0);
    for (const c of deck) {
      const r = vr.slice();
      for (const j of vByCard.get(c) ?? []) r[j] = 0;
      const val = showdown([...board, c], a0, a1, r);
      for (let i = 0; i < H.length; i++) if (!hCards[i].includes(c)) out[i] += val[i] / (deck.length - 2);
    }
    return out;
  }

  /** Values for every BB combo (summed over BTN's reach). a0/a1: chips BTN/BB added since the street began; c0/c1: on this street. */
  function cfv(node: SolverNode | undefined, board: string[], a0: number, a1: number, c0: number, c1: number, vr: number[]): number[] {
    if (!node || (node.node_type === "chance_node" && !node.dealcards)) return board.length === 5 ? showdown(board, a0, a1, vr) : runout(board, a0, a1, vr);
    if (node.node_type === "chance_node") {
      const cards = Object.keys(node.dealcards!).filter((c) => !board.includes(c) && node.dealcards![c].strategy);
      const out = new Array(H.length).fill(0);
      for (const c of cards) {
        const r = vr.slice();
        for (const j of vByCard.get(c) ?? []) r[j] = 0;
        const val = cfv(node.dealcards![c], [...board, c], a0, a1, 0, 0, r);
        for (let i = 0; i < H.length; i++) if (!hCards[i].includes(c)) out[i] += val[i] / (cards.length - 2);
      }
      return out;
    }
    const strat = node.strategy!;
    const player = node.player; // 0 = BTN, 1 = BB
    const total = vr.reduce((s, x) => s + x, 0);
    const out = new Array(H.length).fill(0);
    for (const [ai, act] of strat.actions.entries()) {
      const [kind, amt] = act.split(" ");
      let [na0, na1, nc0, nc1] = [a0, a1, c0, c1];
      const to = (x: number) => {
        if (player === 0) { na0 += x - c0; nc0 = x; } else { na1 += x - c1; nc1 = x; }
      };
      if (kind === "BET" || kind === "RAISE") to(Math.min(Number(amt), stack0 - (player === 0 ? a0 - c0 : a1 - c1)));
      if (kind === "CALL") to(player === 0 ? c1 : c0);
      const r = player === 0 ? vr.map((w, j) => w * (strat.strategy[V[j]]?.[ai] ?? 0)) : vr;
      let val: number[];
      if (kind === "FOLD") {
        const t = player === 0 ? r.reduce((s, x) => s + x, 0) : total;
        val = H.map((_, i) => liveReach(r, t, i) * (player === 0 ? pot0 + a0 : -a1));
      } else {
        const child = node.childrens?.[act];
        const ends = kind === "CALL" || (kind === "CHECK" && player === 0);
        if (ends && board.length === 5) val = showdown(board, na0, na1, r);
        else if (ends && !child) val = runout(board, na0, na1, r);
        else val = cfv(child, board, na0, na1, ends ? 0 : nc0, ends ? 0 : nc1, r);
      }
      if (player === 0) for (let i = 0; i < H.length; i++) out[i] += val[i];
      else for (let i = 0; i < H.length; i++) out[i] += (strat.strategy[H[i]]?.[ai] ?? 0) * val[i];
    }
    return out;
  }

  // BB has called: both put in the bet, the street is over.
  const call = bbNode.childrens?.CALL;
  const vals = board0.length === 5 ? showdown(board0, betAmt, betAmt, vr0) : cfv(call, board0, betAmt, betAmt, 0, 0, vr0);
  const total0 = vr0.reduce((s, x) => s + x, 0);
  const ev = new Map<string, number>();
  H.forEach((c, i) => {
    const t = liveReach(vr0, total0, i);
    if (t > 0) ev.set(c, vals[i] / t);
  });
  return { ev, checkedDown };
}
