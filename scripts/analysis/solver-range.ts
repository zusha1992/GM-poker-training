// BB's range on the next street from a TexasSolver result, in the drill's line:
// BB checks, BTN bets the drill's size, BB calls. Weight of each hand =
// its weight in the solve × how often it checks × how often it calls (its combos averaged).
// Usage: npx tsx scripts/analysis/solver-range.ts <result.json> <input.txt> <BTN bet in bb> <out.txt>
import { readFileSync, writeFileSync } from "node:fs";

const [file, input, betArg, out] = process.argv.slice(2);
const tree = JSON.parse(readFileSync(file, "utf8"));
const prior = new Map<string, number>();
for (const l of readFileSync(input, "utf8").split(/\r?\n/)) {
  if (!l.startsWith("set_range_oop ")) continue;
  for (const p of l.slice(14).split(",")) {
    const [h, w] = p.split(":");
    prior.set(h, Number(w ?? 1));
  }
}

const probOf = (node: { strategy: { actions: string[]; strategy: Record<string, number[]> } }, action: string) => {
  const i = node.strategy.actions.indexOf(action);
  return (combo: string) => node.strategy.strategy[combo]?.[i] ?? 0;
};
const check = probOf(tree, "CHECK");
const ipNode = tree.childrens.CHECK;
const bets = Object.keys(ipNode.childrens).filter((a) => a.startsWith("BET"));
const bet = bets.sort((a, b) => Math.abs(Number(a.split(" ")[1]) - Number(betArg)) - Math.abs(Number(b.split(" ")[1]) - Number(betArg)))[0];
const call = probOf(ipNode.childrens[bet], "CALL");

const RANKS = "AKQJT98765432";
const classOf = (c: string) => {
  const [a, b] = [c[0], c[2]].sort((x, y) => RANKS.indexOf(x) - RANKS.indexOf(y));
  return a === b ? a + b : a + b + (c[1] === c[3] ? "s" : "o");
};
const sum = new Map<string, { p: number; n: number }>();
for (const combo of Object.keys(tree.strategy.strategy)) {
  const k = classOf(combo);
  const cur = sum.get(k) ?? { p: 0, n: 0 };
  sum.set(k, { p: cur.p + check(combo) * call(combo), n: cur.n + 1 });
}
const range = [...sum]
  .map(([k, v]) => [k, (prior.get(k) ?? 0) * (v.p / v.n)] as const)
  .filter(([, w]) => w > 0.02)
  .map(([k, w]) => `${k}:${w.toFixed(2)}`);
writeFileSync(out, range.join(","));
console.log(`BTN bets ${bet}: BB continues with ${range.length} hands (was ${prior.size})`);
