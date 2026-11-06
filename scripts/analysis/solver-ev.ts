// BTN's EV per "How many bb" group from a TexasSolver turn result dumped with
// the river (DUMP=2), in the drill's line: BB checks, then both play the solved
// strategies. EV = what BTN gets back from the pot minus what it adds from here
// (as in GTO Wizard). Also prints how often each group bets and how much.
// Usage: npx tsx scripts/analysis/solver-ev.ts <result.json> <input.txt> [rows.json]
import { readFileSync, writeFileSync } from "node:fs";
import { buildRunout, RUNOUTS, priceGroupOf } from "../../src/lib/drill/postflop/price-hands";
import { card, type Card } from "../../src/lib/drill/postflop/line-demo";
import { score } from "./price-equity";

const [file, input] = process.argv.slice(2);
const tree = JSON.parse(readFileSync(file, "utf8"));
const lines = readFileSync(input, "utf8").split(/\r?\n/);
const arg = (k: string) => lines.find((l) => l.startsWith(k + " "))!.slice(k.length + 1);
const pot0 = Number(arg("set_pot"));
const stack0 = Number(arg("set_effective_stack"));
const board0 = arg("set_board").split(",");
const weights = (k: string) => new Map(arg(k).split(",").map((p) => [p.split(":")[0], Number(p.split(":")[1] ?? 1)] as const));

const RANKS = "AKQJT98765432";
const toCard = (c: string): Card => ({ r: 14 - RANKS.indexOf(c[0]), s: c[1] }) as Card;
const classOf = (c: string) => {
  const [a, b] = [c[0], c[2]].sort((x, y) => RANKS.indexOf(x) - RANKS.indexOf(y));
  return a === b ? a + b : a + b + (c[1] === c[3] ? "s" : "o");
};

type Node = { node_type: string; player?: number; actions?: string[]; childrens?: Record<string, Node>; strategy?: { actions: string[]; strategy: Record<string, number[]> }; dealcards?: Record<string, Node> };
const ipNode: Node = tree.childrens.CHECK;
const ip = Object.keys(ipNode.strategy!.strategy); // BTN combos
const oop = Object.keys(tree.strategy.strategy); // BB combos
const ipW = weights("set_range_ip"), oopW = weights("set_range_oop");
const ipCards = ip.map((c) => [c.slice(0, 2), c.slice(2, 4)]);
const oopCards = oop.map((c) => [c.slice(0, 2), c.slice(2, 4)]);
const compat = ip.map((_, i) => oop.map((_, j) => !ipCards[i].some((x) => oopCards[j].includes(x))));
const checkI = tree.strategy.actions.indexOf("CHECK");
const reach0 = oop.map((c) => (oopW.get(classOf(c)) ?? 0) * tree.strategy.strategy[c][checkI]);

const live = (cards: string[], board: string[]) => !cards.some((c) => board.includes(c));

/** Counterfactual value per BTN combo. a0/a1 = chips BTN/BB added since the root; c0/c1 this street. */
function cfv(node: Node | undefined, board: string[], a0: number, a1: number, c0: number, c1: number, reach: number[]): number[] {
  if (!node || (node.node_type === "chance_node" && !node.dealcards)) return board.length === 5 ? showdown(board, a0, a1, reach) : runout(board, a0, a1, reach);
  if (node.node_type === "chance_node") {
    // The dump lists all 52 cards; the ones on the board lead nowhere.
    const cards = Object.keys(node.dealcards!).filter((c) => !board.includes(c) && node.dealcards![c].strategy);
    const out = new Array(ip.length).fill(0);
    for (const c of cards) {
      const nb = [...board, c];
      const r = reach.map((w, j) => (oopCards[j].includes(c) ? 0 : w));
      const v = cfv(node.dealcards![c], nb, a0, a1, 0, 0, r);
      for (let i = 0; i < ip.length; i++) if (!ipCards[i].includes(c)) out[i] += v[i] / cards.length;
    }
    return out;
  }
  const out = new Array(ip.length).fill(0);
  const strat = node.strategy!;
  const player = node.player; // 0 = BTN (IP), 1 = BB (OOP)
  for (const [ai, act] of strat.actions.entries()) {
    const [kind, amt] = act.split(" ");
    let [na0, na1, nc0, nc1] = [a0, a1, c0, c1];
    const to = (v: number) => {
      if (player === 0) { na0 += v - c0; nc0 = v; } else { na1 += v - c1; nc1 = v; }
    };
    if (kind === "BET" || kind === "RAISE") to(Math.min(Number(amt), stack0 - (player === 0 ? a0 - c0 : a1 - c1)));
    if (kind === "CALL") to(player === 0 ? c1 : c0);
    let v: number[];
    if (kind === "FOLD") {
      // BTN folds: loses what it added; BB folds: BTN wins the pot and BB's chips.
      v = ip.map((_, i) => {
        let s = 0;
        for (let j = 0; j < oop.length; j++) if (compat[i][j]) s += reachOf(player, reach, j, ai, strat);
        return s * (player === 0 ? -a0 : pot0 + a1);
      });
    } else {
      const child = node.childrens?.[act];
      const ends = kind === "CALL" || (kind === "CHECK" && player === 0);
      const r = player === 1 ? reach.map((w, j) => w * (strat.strategy[oop[j]]?.[ai] ?? 0)) : reach;
      if (ends && board.length === 5) v = showdown(board, na0, na1, r);
      else if (ends && !child) v = runout(board, na0, na1, r); // all-in before the river
      else v = cfv(child, board, na0, na1, ends ? 0 : nc0, ends ? 0 : nc1, r);
    }
    if (player === 0) for (let i = 0; i < ip.length; i++) out[i] += (strat.strategy[ip[i]]?.[ai] ?? 0) * v[i];
    else for (let i = 0; i < ip.length; i++) out[i] += v[i];
  }
  return out;
}
function reachOf(player: number | undefined, reach: number[], j: number, ai: number, strat: { strategy: Record<string, number[]> }) {
  return player === 1 ? reach[j] * (strat.strategy[oop[j]]?.[ai] ?? 0) : reach[j];
}

function showdown(board: string[], a0: number, a1: number, reach: number[]): number[] {
  const bc = board.map(toCard);
  const sIp = ipCards.map((h) => (live(h, board) ? score([...h.map(toCard), ...bc]) : -1));
  const sOop = oopCards.map((h) => (live(h, board) ? score([...h.map(toCard), ...bc]) : -1));
  return ip.map((_, i) => {
    if (sIp[i] < 0) return 0;
    let s = 0;
    for (let j = 0; j < oop.length; j++) {
      if (!compat[i][j] || !reach[j] || sOop[j] < 0) continue;
      s += reach[j] * (sIp[i] > sOop[j] ? pot0 + a1 : sIp[i] < sOop[j] ? -a0 : (pot0 + a1 - a0) / 2);
    }
    return s;
  });
}
function runout(board: string[], a0: number, a1: number, reach: number[]): number[] {
  const deck = [..."AKQJT98765432"].flatMap((r) => [..."shdc"].map((s) => r + s)).filter((c) => !board.includes(c));
  const out = new Array(ip.length).fill(0);
  for (const c of deck) {
    const r = reach.map((w, j) => (oopCards[j].includes(c) ? 0 : w));
    const v = showdown([...board, c], a0, a1, r);
    for (let i = 0; i < ip.length; i++) if (!ipCards[i].includes(c)) out[i] += v[i] / deck.length;
  }
  return out;
}

// Value once BB has checked: start at BTN's node.
const values = cfv(ipNode, board0, 0, 0, 0, 0, reach0);
const ev = ip.map((_, i) => {
  let s = 0;
  for (let j = 0; j < oop.length; j++) if (compat[i][j]) s += reach0[j];
  return values[i] / s;
});

// The drill runout with this board (any river, if this is a turn).
const toDrill = (c: string) => card(c[0] + { s: "♠", h: "♥", d: "♦", c: "♣" }[c[1]]!);
const drillCards = board0.map((c) => c[0] + { s: "♠", h: "♥", d: "♦", c: "♣" }[c[1]]!);
const idx = RUNOUTS.findIndex((r) => [...r.flop, r.streets[1].card, r.streets[2].card].slice(0, board0.length).join() === drillCards.join());
const si = board0.length - 3;
const st = buildRunout(idx).streets[si];
const sizes = ipNode.strategy!.actions.map((a) => (a.startsWith("BET") ? Number(a.split(" ")[1]) : 0));
const groups = new Map<string, { ev: number; money: number; bet: number; w: number }>();
for (const [i, combo] of ip.entries()) {
  const w = ipW.get(classOf(combo)) ?? 0;
  const probs = ipNode.strategy!.strategy[combo];
  const g = priceGroupOf([toDrill(combo.slice(0, 2)), toDrill(combo.slice(2, 4))], st.board, RUNOUTS[idx].streets[si]);
  const cur = groups.get(g) ?? { ev: 0, money: 0, bet: 0, w: 0 };
  groups.set(g, {
    ev: cur.ev + w * ev[i],
    money: cur.money + w * probs.reduce((s, p, k) => s + p * sizes[k], 0),
    bet: cur.bet + w * probs.reduce((s, p, k) => s + (sizes[k] ? p : 0), 0),
    w: cur.w + w,
  });
}
// The box the solver suggests, for groups with a pair or better (draws and
// no-pair hands keep their rules: the drill asks what a group is worth).
// River: what the group bets on average, if it bets at least 30% of the time
// for value (EV at least a quarter of the pot: weak pairs that bet as bluffs stay 0–5bb).
// Turn: its EV, with the flop cut-offs from GTO Wizard (6.2 / 4.5 / 3.4bb at pot 5.5) scaled to the pot.
const MADE = new Set(["boat", "flush", "straight", "trips", "twopair", "pdraw", "op", "tpgk", "tpmk", "tpwk", "pfl", "pp1", "pp2", "pp3", "spp", "mp", "bp"]);
function suggest(g: string, ev: number, money: number, bet: number): string | null {
  if (!MADE.has(g)) return null;
  if (si === 2) {
    if (bet < 0.3 || money < 5 || ev < pot0 / 4) return "b0";
    return money < 15 ? "b5" : money < 25 ? "b15" : money < 50 ? "b25" : "b50";
  }
  const k = pot0 / 5.5;
  return ev >= 6.2 * k ? "b50" : ev >= 4.5 * k ? "b15" : ev >= 3.4 * k ? "b5" : "b0";
}
const rows = [...groups].sort((a, b) => b[1].ev / b[1].w - a[1].ev / a[1].w).map(([g, v]) => {
  const [ev, money, bet] = [v.ev / v.w, v.money / v.w, v.bet / v.w];
  return { g, label: String(st.labels[g as keyof typeof st.labels] ?? g), ev, money, bet, drill: st.answers[g as keyof typeof st.answers]?.bucket ?? "-", solver: suggest(g, ev, money, bet) };
});
console.log(`pot ${pot0}, actions: ${ipNode.strategy!.actions.join(", ")}`);
for (const r of rows) {
  const flag = r.solver && r.solver !== r.drill ? `  → ${r.solver}` : "";
  console.log(`${r.g.padEnd(9)}${r.label.padEnd(22)} EV ${r.ev.toFixed(1).padStart(5)}bb  bets ${String(Math.round(r.bet * 100)).padStart(3)}%  avg ${r.money.toFixed(1).padStart(4)}bb   drill ${r.drill}${flag}`);
}
if (process.argv[4]) writeFileSync(process.argv[4], JSON.stringify({ id: RUNOUTS[idx].id, street: ["flop", "turn", "river"][si], pot: pot0, rows }, null, 1));
