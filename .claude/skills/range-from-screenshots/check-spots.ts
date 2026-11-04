/**
 * The check before any solver spot goes live (Noam 2026-11-04): for every spot
 * with a read, compares what the drill teaches for each of the 169 hands with
 * that hand's own chart answer under the 75/25 rule. Exits with an error if a
 * single hand differs, so a mismatch never gets pushed.
 *
 * Usage, from the repo root:
 *   npx tsx .claude/skills/range-from-screenshots/check-spots.ts
 */
import { MATRIX_HANDS } from "../../../src/lib/drill/matrix";
import { ruleAnswer, splitOf } from "../../../src/lib/drill/preflop/solver";
import { SOLVER_READS } from "../../../src/lib/drill/preflop/solver-reads";
import { threebetSpot } from "../../../src/lib/drill/preflop/threebet";
import type { Seat } from "../../../src/lib/drill/preflop/seats";

type Taught = { answer: string; mix?: string };
const kindOf = (t: Taught) => (t.answer === "mix" ? `mix ${t.mix}` : t.answer);

let bad = 0;
for (const spot of Object.keys(SOLVER_READS)) {
  const [drill, name] = spot.split("/");
  if (drill !== "3bet") continue;
  const [hero, , opener] = name.split("-") as [Seat, string, Seat];
  const s = threebetSpot(opener, hero);
  const read = SOLVER_READS[spot];

  // What the drill teaches: asked pieces, filled-in groups, and fold for the rest.
  const taught = new Map<string, Taught>();
  const mixName = (m?: [string, string, number]) => (m ? [m[0], m[1]].sort().join("/") : undefined);
  for (const p of s.drill.pieces) for (const h of p.hands) taught.set(h, { answer: p.answer, mix: mixName(p.mixSplit) });
  for (const g of s.drill.preFilled) for (const h of g.hands ?? []) taught.set(h, { answer: g.answer, mix: mixName(g.mixSplit) });

  const wrong: string[] = [];
  for (const { key } of MATRIX_HANDS) {
    const a = ruleAnswer(splitOf(read, key));
    const chart = kindOf({ answer: a.answer, mix: mixName(a.mixSplit) });
    const drillSays = kindOf(taught.get(key) ?? { answer: "fold" });
    if (chart !== drillSays) wrong.push(`${key} (chart ${chart}, drill ${drillSays})`);
  }
  bad += wrong.length;
  console.log(`${name.padEnd(12)} ${s.drill.pieces.length} questions, ${wrong.length ? `${wrong.length} WRONG: ${wrong.join(", ")}` : "every hand matches the chart"}`);
}
if (bad) {
  console.error(`\n${bad} hands differ from the charts. Fix before pushing.`);
  process.exit(1);
}
console.log("\nAll spots match their charts.");
