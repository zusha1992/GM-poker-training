// River drill (Noam 2026-11-14): BB's range after calling a river bet, from our river solves
// (TexasSolver, solve-board.ts). BTN bets about 66% of the pot on the river; BB checks and calls.
// Writes decisions/ranges/solver/<board>/bb-call-<turn>-<river>.txt, and bb-allin-<turn>-<river>.txt: BB's calls of an all-in.
// Usage: npx tsx scripts/analysis/river-call-ranges.ts [board ...]
import { execFileSync } from "node:child_process";
import { BOARDS } from "../../src/lib/drill/postflop/price-hands";

const RUNS = "C:/Users/noams/Developer/tools/TexasSolver/runs";
const sc = (c: string) => c[0] + { "♠": "s", "♥": "h", "♦": "d", "♣": "c" }[c.slice(1)]!;
const names = process.argv.slice(2);
for (const b of BOARDS.filter((x) => !names.length || names.includes(x.name))) {
  for (const t of b.turns) {
    const pot = t.bet === "overbet" ? 36.5 : 21.1;
    for (const rv of t.rivers) {
      const tag = `river-${sc(t.card)}-${sc(rv.card)}`;
      const out = `decisions/ranges/solver/${b.name}/bb-call-${sc(t.card)}-${sc(rv.card)}.txt`;
      const msg = execFileSync("node", ["node_modules/tsx/dist/cli.mjs", "scripts/analysis/solver-range.ts", `${RUNS}/${b.name}/${tag}.json`, `${RUNS}/${b.name}/${tag}.txt`, String(Math.round(pot * 0.66 * 10) / 10), out], { encoding: "utf8" });
      console.log(`${b.name} ${t.card} ${rv.card}: ${msg.trim()}`);
      // And BB's calls of an all-in (the biggest bet in the tree): who pays off a shove.
      const allin = `decisions/ranges/solver/${b.name}/bb-allin-${sc(t.card)}-${sc(rv.card)}.txt`;
      const msg2 = execFileSync("node", ["node_modules/tsx/dist/cli.mjs", "scripts/analysis/solver-range.ts", `${RUNS}/${b.name}/${tag}.json`, `${RUNS}/${b.name}/${tag}.txt`, "999", allin], { encoding: "utf8" });
      console.log(`   all-in: ${msg2.trim()}`);
    }
  }
}
