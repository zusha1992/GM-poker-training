// Solves one "How many bb" board in the drill's line, street by street, with TexasSolver:
// flop (BTN bets 33%) → BB's calls → each turn (BTN bets 66% or overbets 150%, river dumped
// for the EV) → BB's calls → each river. Reports go to <runs>/<board>/report.txt.
// Usage: npx tsx scripts/analysis/solve-board.ts <board name, e.g. A72> [--skip-flop]
import { execFileSync } from "node:child_process";
import { appendFileSync, closeSync, existsSync, mkdirSync, openSync, readFileSync, writeFileSync } from "node:fs";
import { BOARDS } from "../../src/lib/drill/postflop/price-hands";

const TOOLS = "C:/Users/noams/Developer/tools/TexasSolver";
const EXE = `${TOOLS}/release/TexasSolver-v0.2.0-Windows/console_solver.exe`;
const RES = `${TOOLS}/release/TexasSolver-v0.2.0-Windows/resources`;
const name = process.argv[2];
const b = BOARDS.find((x) => x.name === name)!;
const dir = `${TOOLS}/runs/${name}`;
mkdirSync(dir, { recursive: true });
const report = `${dir}/report.txt`;
const log = (s: string) => { appendFileSync(report, s + "\n"); console.log(s); };

const sc = (c: string) => c[0] + { "♠": "s", "♥": "h", "♦": "d", "♣": "c" }[c.slice(1)]!;
// The turn results are big (60MB+), so the EV step gets more memory.
const tsx = (script: string, args: string[], env: Record<string, string> = {}) =>
  execFileSync("node", ["--max-old-space-size=6144", "node_modules/tsx/dist/cli.mjs", `scripts/analysis/${script}`, ...args], { encoding: "utf8", shell: true, env: { ...process.env, ...env } });
function solve(tag: string, board: string[], pot: number, stack: number, bbRange: string | null, env: Record<string, string>) {
  const inp = `${dir}/${tag}.txt`, out = `${dir}/${tag}.json`;
  // quoted: PowerShell and cmd must not read "7d" as a number
  tsx("solver-input.ts", [`"${board.join(",")}"`, String(pot), String(stack), `"${inp}"`, `"${out}"`, ...(bbRange ? [`"${bbRange}"`] : [])], env);
  const t0 = Date.now();
  if (!existsSync(out)) {
    const fd = openSync(`${dir}/${tag}.log`, "w");
    execFileSync(EXE, ["--input_file", inp, "--resource_dir", RES, "--mode", "holdem"], { stdio: ["ignore", fd, fd] });
    closeSync(fd);
  }
  const solverLog = existsSync(`${dir}/${tag}.log`) ? readFileSync(`${dir}/${tag}.log`, "utf8") : "";
  const acc = [...solverLog.matchAll(/Total exploitability ([\d.]+)/g)].pop()?.[1];
  log(`  (${tag}: ${Math.round((Date.now() - t0) / 60000)} min, accuracy ${acc ? Number(acc).toFixed(2) + "%" : "?"})`);
  return { inp, out };
}

const flop = b.flop.map(sc);
log(`==== ${name} ${new Date().toISOString()}`);
const f = solve("flop", flop, 5.5, 97.5, null, { ACC: "1" });
log(tsx("solver-range.ts", [f.out, f.inp, "1.8", `${dir}/bb-turn.txt`]).trim());

for (const t of b.turns) {
  const turn = [...flop, sc(t.card)];
  const tt = solve(`turn-${sc(t.card)}`, turn, 9.1, 95.7, `${dir}/bb-turn.txt`, { DUMP: "2", ACC: "0.5" });
  const bet = t.bet === "overbet" ? 13.7 : 6;
  const [pot, stack] = t.bet === "overbet" ? [36.5, 82] : [21.1, 89.7];
  log(`\n== turn ${t.card} (BTN ${t.bet === "overbet" ? "overbets 150%" : "bets 66%"})`);
  log(tsx("solver-ev.ts", [tt.out, tt.inp, `${dir}/rows-turn-${sc(t.card)}.json`]).trim());
  const bbRiver = `${dir}/bb-river-${sc(t.card)}.txt`;
  log(tsx("solver-range.ts", [tt.out, tt.inp, String(bet), bbRiver]).trim());
  for (const rv of t.rivers) {
    const r = solve(`river-${sc(t.card)}-${sc(rv.card)}`, [...turn, sc(rv.card)], pot, stack, bbRiver, { ACC: "0.3" });
    log(`\n== river ${t.card} ${rv.card}`);
    log(tsx("solver-ev.ts", [r.out, r.inp, `${dir}/rows-river-${sc(t.card)}-${sc(rv.card)}.json`]).trim());
  }
}
log(`==== ${name} done ${new Date().toISOString()}`);
writeFileSync(`${dir}/DONE`, "");
