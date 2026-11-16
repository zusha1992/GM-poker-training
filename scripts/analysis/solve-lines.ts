// Lines (Noam 2026-11-16): what a hand is worth depends on the line. For one board, BB's range on the
// river after each of the 6 lines, then BB's calls of a 66% river bet and of an all-in on every river:
//   b75 / b150 / b200: flop bet 33% – call, turn bet 75% / 150% / 200% – call
//   bx:  flop bet 33% – call, turn check – check
//   x75: flop check – check, turn bet 75% – call
//   xx:  flop check – check, turn check – check
// Reuses the board's flop solve (solve-board.ts). Writes decisions/ranges/solver/<board>/lines/<line>/
//   bb-river-<turn>.txt, bb-call-<turn>-<river>.txt, bb-allin-<turn>-<river>.txt
// Usage: npx tsx scripts/analysis/solve-lines.ts <board, e.g. A72>
import { execFileSync } from "node:child_process";
import { appendFileSync, closeSync, copyFileSync, existsSync, mkdirSync, openSync, readFileSync } from "node:fs";
import { BOARDS } from "../../src/lib/drill/postflop/price-hands";

const TOOLS = "C:/Users/noams/Developer/tools/TexasSolver";
const EXE = `${TOOLS}/release/TexasSolver-v0.2.0-Windows/console_solver.exe`;
const RES = `${TOOLS}/release/TexasSolver-v0.2.0-Windows/resources`;
const name = process.argv[2];
const b = BOARDS.find((x) => x.name === name)!;
const dir = `${TOOLS}/runs/${name}/lines`;
mkdirSync(dir, { recursive: true });
const OUT = `decisions/ranges/solver/${name}/lines`;
const report = `${dir}/report.txt`;
const log = (s: string) => { appendFileSync(report, s + "\n"); console.log(s); };
const sc = (c: string) => c[0] + { "♠": "s", "♥": "h", "♦": "d", "♣": "c" }[c.slice(1)]!;
const tsx = (script: string, args: string[], env: Record<string, string> = {}) =>
  execFileSync("node", ["--max-old-space-size=6144", "node_modules/tsx/dist/cli.mjs", `scripts/analysis/${script}`, ...args], { encoding: "utf8", shell: true, env: { ...process.env, ...env } }).trim();

function solve(tag: string, board: string[], pot: number, stack: number, bbRange: string, env: Record<string, string>) {
  const inp = `${dir}/${tag}.txt`, out = `${dir}/${tag}.json`;
  tsx("solver-input.ts", [`"${board.join(",")}"`, String(pot), String(stack), `"${inp}"`, `"${out}"`, `"${bbRange}"`], env);
  const t0 = Date.now();
  if (!existsSync(out)) {
    const fd = openSync(`${dir}/${tag}.log`, "w");
    execFileSync(EXE, ["--input_file", inp, "--resource_dir", RES, "--mode", "holdem"], { stdio: ["ignore", fd, fd] });
    closeSync(fd);
  }
  const acc = [...readFileSync(`${dir}/${tag}.log`, "utf8").matchAll(/Total exploitability ([\d.]+)/g)].pop()?.[1];
  log(`  (${tag}: ${Math.round((Date.now() - t0) / 1000)}s, accuracy ${acc ? Number(acc).toFixed(2) + "%" : "?"})`);
  return { inp, out };
}

type Line = { key: string; flop: "bet" | "check"; turn: number | "check" };
const LINES: Line[] = [
  { key: "b75", flop: "bet", turn: 75 },
  { key: "b150", flop: "bet", turn: 150 },
  { key: "b200", flop: "bet", turn: 200 },
  { key: "bx", flop: "bet", turn: "check" },
  { key: "x75", flop: "check", turn: 75 },
  { key: "xx", flop: "check", turn: "check" },
];
const r3 = (x: number) => Math.round(x * 1000) / 1000;

log(`==== ${name} lines ${new Date().toISOString()}`);
const runs = `${TOOLS}/runs/${name}`;
// BB after the flop: calls of the 33% bet (from solve-board.ts), or every check when BTN checks back.
const flopBB = { bet: `${runs}/bb-turn.txt`, check: `${dir}/bb-turn-xx.txt` };
log(tsx("solver-range.ts", [`${runs}/flop.json`, `${runs}/flop.txt`, "check", flopBB.check]));

for (const t of b.turns) {
  const turn = [...b.flop.map(sc), sc(t.card)];
  for (const flopAct of ["bet", "check"] as const) {
    const [pot, stack] = flopAct === "bet" ? [9.1, 95.7] : [5.5, 97.5];
    const lines = LINES.filter((l) => l.flop === flopAct);
    const sizes = lines.map((l) => l.turn).filter((x): x is number => typeof x === "number");
    log(`\n== turn ${t.card} after flop ${flopAct}`);
    const tt = solve(`turn-${flopAct}-${sc(t.card)}`, turn, pot, stack, flopBB[flopAct], { IP_SIZES: sizes.join(","), ACC: "0.5" });
    for (const l of lines) {
      mkdirSync(`${OUT}/${l.key}`, { recursive: true });
      const bet = l.turn === "check" ? 0 : r3((pot * l.turn) / 100);
      const bbRiver = `${OUT}/${l.key}/bb-river-${sc(t.card)}.txt`;
      log(`  ${l.key}: ${tsx("solver-range.ts", [tt.out, tt.inp, l.turn === "check" ? "check" : String(bet), bbRiver])}`);
      const rPot = r3(pot + 2 * bet), rStack = r3(stack - bet);
      for (const rv of t.rivers) {
        const tag = `river-${l.key}-${sc(t.card)}-${sc(rv.card)}`;
        const r = solve(tag, [...turn, sc(rv.card)], rPot, rStack, bbRiver, { ACC: "0.3" });
        const call = `${OUT}/${l.key}/bb-call-${sc(t.card)}-${sc(rv.card)}.txt`;
        const allin = `${OUT}/${l.key}/bb-allin-${sc(t.card)}-${sc(rv.card)}.txt`;
        log(`    ${rv.card} 66%: ${tsx("solver-range.ts", [r.out, r.inp, String(r3(rPot * 0.66)), call])}`);
        log(`    ${rv.card} all-in: ${tsx("solver-range.ts", [r.out, r.inp, "999", allin])}`);
      }
    }
  }
}
copyFileSync(flopBB.check, `decisions/ranges/solver/${name}/bb-turn-xx.txt`);
log(`==== ${name} lines done ${new Date().toISOString()}`);
