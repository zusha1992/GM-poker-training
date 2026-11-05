// Reads a TexasSolver river or turn result and prints, for each "How many bb"
// group, how much BTN puts in on this street on average once BB checks:
// sum over bets of (frequency × size). Usage:
//   npx tsx scripts/analysis/solver-groups.ts <result.json> <runout id, e.g. "A72 · Q♥ · 9♣"> <street 1|2>
import { readFileSync } from "node:fs";
import { buildRunout, RUNOUTS, priceGroupOf } from "../../src/lib/drill/postflop/price-hands";
import { card, type Card } from "../../src/lib/drill/postflop/line-demo";

const [file, id, streetArg] = process.argv.slice(2);
const tree = JSON.parse(readFileSync(file, "utf8"));
const node = tree.childrens.CHECK; // BB checks to BTN
const idx = RUNOUTS.findIndex((r) => r.id.includes(id));
const spec = RUNOUTS[idx];
const si = Number(streetArg);
const st = buildRunout(idx).streets[si];
const toCard = (c: string): Card => card(c[0] + { s: "♠", h: "♥", d: "♦", c: "♣" }[c[1]]!);
const sizes = node.strategy.actions.map((a: string) => (a.startsWith("BET") ? Number(a.split(" ")[1]) : 0));
const groups = new Map<string, { money: number; bet: number; n: number }>();
for (const [combo, probs] of Object.entries<number[]>(node.strategy.strategy)) {
  const hole = [toCard(combo.slice(0, 2)), toCard(combo.slice(2, 4))] as [Card, Card];
  const g = priceGroupOf(hole, st.board, spec.streets[si]);
  const money = probs.reduce((s, p, i) => s + p * sizes[i], 0);
  const bet = probs.reduce((s, p, i) => s + (sizes[i] ? p : 0), 0);
  const cur = groups.get(g) ?? { money: 0, bet: 0, n: 0 };
  groups.set(g, { money: cur.money + money, bet: cur.bet + bet, n: cur.n + 1 });
}
console.log(`actions: ${node.strategy.actions.join(", ")}`);
for (const [g, v] of [...groups].sort((a, b) => b[1].money / b[1].n - a[1].money / a[1].n)) {
  console.log(`${String(st.labels[g as keyof typeof st.labels] ?? g).padEnd(18)} bets ${Math.round((v.bet / v.n) * 100)}%  avg ${(v.money / v.n).toFixed(1)}bb   drill: ${st.answers[g as keyof typeof st.answers]?.bucket ?? "-"}`);
}
