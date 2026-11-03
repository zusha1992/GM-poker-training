/**
 * Turns a cell-by-cell read of one solver chart into one answer per hand group,
 * using Noam's rounding rule (2026-11-03):
 *   an action at 75% or more is pure, an action at 25% or less drops out,
 *   anything in between makes a mix (of the two biggest if three are left).
 *
 * Usage, from the repo root:
 *   npx tsx .claude/skills/range-from-screenshots/group-answers.ts <read.txt> [--range <rfi-seat>]
 *
 * read.txt has one hand per line: `<hand> <aggressive%> <call%> <fold%>`,
 * e.g. `AKs 100 0 0`, `A9s 45 10 45`. Blank lines and `#` comments are skipped.
 * A hand left out counts as a pure fold. With `--range UTG` (etc.), only hands
 * in that seat's opening range count (for the facing-a-3-bet drill).
 *
 * Prints, per group: the combo-weighted average, the answer, and two flags:
 *   NEAR  = within 5 points of 25% or 75%, so a closer read could flip it
 *   SPLIT = the hands inside the group play very differently (consider splitting)
 * Then every hand that isn't a pure fold but belongs to no group.
 */
import { readFileSync } from "node:fs";
import { FAMS, THREEBET_FAMS } from "../../../src/lib/drill/preflop/families";
import { ruleAnswer } from "../../../src/lib/drill/preflop/solver";
import { RFI_POSITIONS } from "../../../src/lib/drill/preflop/rfi";
import { combosOf, MATRIX_HANDS } from "../../../src/lib/drill/matrix";

type Split = { r: number; c: number; f: number };
const ACTIONS = ["r", "c", "f"] as const;

const [file, flag, seat] = process.argv.slice(2);
if (!file) {
  console.error("usage: group-answers.ts <read.txt> [--range <seat>]");
  process.exit(1);
}

const read = new Map<string, Split>();
for (const raw of readFileSync(file, "utf8").split(/\r?\n/)) {
  const line = raw.replace(/#.*/, "").trim();
  if (!line) continue;
  const [hand, r, c, f] = line.split(/\s+/);
  const s = { r: Number(r), c: Number(c), f: Number(f) };
  if (!MATRIX_HANDS.some((h) => h.key === hand) || ACTIONS.some((a) => Number.isNaN(s[a]))) {
    console.error(`bad line: "${raw}"`);
    process.exit(1);
  }
  const sum = s.r + s.c + s.f;
  if (Math.abs(sum - 100) > 2) console.error(`warning: ${hand} adds up to ${sum}, not 100`);
  read.set(hand, s);
}
const at = (h: string): Split => read.get(h) ?? { r: 0, c: 0, f: 100 };

const strat = flag === "--range" ? RFI_POSITIONS.find((p) => p.key === seat)?.strat : undefined;
if (flag === "--range" && !strat) {
  console.error(`unknown seat for --range: ${seat}`);
  process.exit(1);
}
/** How much of a hand's combos are in play (all of them, or the opening share). */
const weightOf = (key: string) => (strat ? (strat[key] ?? 0) / 100 : 1);

/** The drills' own rule (src/lib/drill/preflop/solver.ts), so this matches the app exactly. */
function answerOf(s: Split): string {
  const { answer, mixSplit, threeWay } = ruleAnswer({ raise: s.r, call: s.c, fold: s.f });
  if (!mixSplit) return answer === "raise" ? "aggressive" : answer;
  const name = (a: string) => (a === "raise" ? "aggressive" : a);
  return `mix ${name(mixSplit[0])}/${name(mixSplit[1])} ${mixSplit[2]}/${100 - mixSplit[2]}${threeWay ? " (3-way)" : ""}`;
}

const pct = (n: number) => Math.round(n).toString().padStart(3);
console.log("group".padEnd(26) + "agg call fold  answer");
/** The 3-bet drill splits five groups and adds "Other suited hands". */
const GROUPS = file.replace(/\\/g, "/").includes("/3bet/") ? THREEBET_FAMS : FAMS;
for (const g of GROUPS) {
  const w = weightOf(g.key);
  if (w === 0) continue;
  let n = 0;
  const sum: Split = { r: 0, c: 0, f: 0 };
  for (const h of g.hands) {
    const k = combosOf(h);
    n += k;
    for (const a of ACTIONS) sum[a] += at(h)[a] * k;
  }
  const avg: Split = { r: sum.r / n, c: sum.c / n, f: sum.f / n };
  const near = ACTIONS.some((a) => Math.abs(avg[a] - 25) < 5 || Math.abs(avg[a] - 75) < 5);
  const spread = Math.max(...ACTIONS.map((a) => Math.max(...g.hands.map((h) => at(h)[a])) - Math.min(...g.hands.map((h) => at(h)[a]))));
  const flags = [near && "NEAR", spread >= 60 && "SPLIT"].filter(Boolean).join(" ");
  const label = `${g.name} (${g.key})`.slice(0, 25).padEnd(26);
  console.log(`${label}${pct(avg.r)} ${pct(avg.c)} ${pct(avg.f)}   ${answerOf(avg)}${flags ? "   " + flags : ""}${w < 1 ? `   (opened ${Math.round(w * 100)}%)` : ""}`);
}

const inGroup = new Set(GROUPS.flatMap((g) => g.hands));
const loose = MATRIX_HANDS.map((h) => h.key).filter((h) => !inGroup.has(h) && at(h).f < 75);
if (loose.length) console.log(`\nNot in any group but not a fold: ${loose.map((h) => `${h} (${answerOf(at(h))})`).join(", ")}`);
