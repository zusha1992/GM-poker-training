// Writes a TexasSolver input file for one street of a "How many bb" runout,
// in the drill's model: BTN's whole opening range reaches the street, BB's
// range is its preflop calls (decisions/ranges/defend/BB-vs-BTN.txt) after
// continuing on the earlier streets (estimate, see price-equity.ts).
// Usage: npx tsx scripts/analysis/solver-input.ts <board e.g. Ac,7d,2s,Qh,9c> <pot> <stack> <out.txt> <result.json> [bb-range.txt]
// bb-range.txt: BB's range from the earlier street's solve (solver-range.ts), instead of the estimate.
// Env: DUMP=2 also dumps the next street (for solver-ev.ts); ACC=accuracy in % (default 0.5).
// A flop solve uses one bet size on the turn and river: only BB's flop calls and BTN's flop bets are read from it.
import { readFileSync, writeFileSync } from "node:fs";
import { card } from "../../src/lib/drill/postflop/line-demo";
import { rfiSpot } from "../../src/lib/drill/preflop/rfi";
import { FAMS } from "../../src/lib/drill/preflop/families";
import { MATRIX_HANDS } from "../../src/lib/drill/matrix";
import { bbCombos, continueWeight } from "./price-equity";

const [boardArg, pot, stack, out, result, bbFile] = process.argv.slice(2);
const toCard = (c: string) => card(c[0] + { s: "♠", h: "♥", d: "♦", c: "♣" }[c[1]]!);
const board = boardArg.split(",").map(toCard);

const strat = rfiSpot("BTN").position.strat;
const famOf = new Map<string, string>();
for (const f of FAMS) for (const h of f.hands) famOf.set(h, f.key);
const btn: string[] = [];
for (const c of MATRIX_HANDS) {
  const f = strat[famOf.get(c.key) ?? ""] ?? 0;
  const w = f >= 90 ? 1 : f > 10 ? f / 100 : 0;
  if (w) btn.push(`${c.key}:${w.toFixed(2)}`);
}

// BB: average weight of each hand's live combos after the earlier streets.
const RANKS = "AKQJT98765432";
const classOf = (a: number, b: number, suited: boolean) => {
  const [hi, lo] = a >= b ? [a, b] : [b, a];
  const ch = (r: number) => RANKS[14 - r];
  return hi === lo ? ch(hi) + ch(lo) : ch(hi) + ch(lo) + (suited ? "s" : "o");
};
const sum = new Map<string, { w: number; n: number }>();
for (const c of bbCombos(board)) {
  let w = c.w;
  if (board.length >= 4) w *= continueWeight(c.cards, board.slice(0, 3), "flop");
  if (board.length >= 5) w *= continueWeight(c.cards, board.slice(0, 4), "turn");
  const k = classOf(c.cards[0].r, c.cards[1].r, c.cards[0].s === c.cards[1].s);
  const cur = sum.get(k) ?? { w: 0, n: 0 };
  sum.set(k, { w: cur.w + w, n: cur.n + 1 });
}
const bb = bbFile
  ? readFileSync(bbFile, "utf8").trim().split(",")
  : [...sum].filter(([, v]) => v.w / v.n > 0.02).map(([k, v]) => `${k}:${(v.w / v.n).toFixed(2)}`);

const street = ["flop", "turn", "river"][board.length - 3];
const lines = [
  `set_pot ${pot}`,
  `set_effective_stack ${stack}`,
  `set_board ${boardArg}`,
  `set_range_oop ${bb.join(",")}`,
  `set_range_ip ${btn.join(",")}`,
];
for (const s of ["flop", "turn", "river"].slice(["flop", "turn", "river"].indexOf(street))) {
  const later = street === "flop" && s !== "flop";
  lines.push(`set_bet_sizes oop,${s},allin`);
  if (!later) lines.push(`set_bet_sizes oop,${s},raise,75`, `set_bet_sizes ip,${s},raise,75`);
  if (s !== "flop" && !later) lines.push(`set_bet_sizes oop,${s},bet,66`);
  lines.push(`set_bet_sizes ip,${s},bet,${s === "flop" ? "33,75" : later ? "66" : s === "turn" ? "66,150" : "66,125"}`, `set_bet_sizes ip,${s},allin`);
}
lines.push("set_allin_threshold 0.67", "build_tree", "set_thread_num 4", `set_accuracy ${Number(process.env.ACC ?? 0.5).toFixed(2)}`, "set_max_iteration 200", "set_print_interval 10",
  // solver-ev.ts needs every river card in the dump, so no suit isomorphism when dumping the river.
  `set_use_isomorphism ${process.env.DUMP === "2" ? 0 : 1}`, "start_solve", `set_dump_rounds ${process.env.DUMP ?? "1"}`, `dump_result ${result}`);
writeFileSync(out, lines.join("\n") + "\n");
console.log(`${street}: BTN ${btn.length} hands, BB ${bb.length} hands`);
