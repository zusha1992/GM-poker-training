/**
 * Reads a 13×13 solver chart screenshot by its pixels instead of by eye
 * (Noam 2026-11-03: by-eye reads missed cells like A7o). For every cell it
 * measures how much of its width is red (aggressive), green (call) and blue
 * (fold). The colors are vertical stripes, so each pixel column of a cell is
 * one color; white text and dark borders are ignored.
 *
 * Usage, from the repo root:
 *   npx tsx .claude/skills/range-from-screenshots/read-chart.ts <screenshot.png> > decisions/ranges/<drill>/<spot>.txt
 *
 * Prints a read file (see SKILL.md): one line per hand that isn't a pure fold.
 * Add a `# <drill>, <spot>, from <file>` comment line on top before saving.
 */
import sharp from "sharp";
import { labelAt } from "../../../src/lib/drill/matrix";

type Kind = "r" | "c" | "f" | null;

/** Red, green or blue by hue; highlighted (darker) cells still count. White text and borders don't. */
function kindOf(r: number, g: number, b: number): Kind {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  if (max < 60 || max - min < 45) return null;
  let h: number;
  if (max === r) h = ((g - b) / (max - min)) * 60;
  else if (max === g) h = (2 + (b - r) / (max - min)) * 60;
  else h = (4 + (r - g) / (max - min)) * 60;
  if (h < 0) h += 360;
  if (h < 25 || h > 335) return "r";
  if (h > 85 && h < 160) return "c";
  if (h > 190 && h < 250) return "f";
  return null;
}

/** Runs of indices where `on(i)` holds, as [start, end] (inclusive), dropping runs shorter than `min`. */
function runs(n: number, on: (i: number) => boolean, min: number): [number, number][] {
  const out: [number, number][] = [];
  let start = -1;
  for (let i = 0; i <= n; i++) {
    if (i < n && on(i)) {
      if (start < 0) start = i;
    } else if (start >= 0) {
      if (i - start >= min) out.push([start, i - 1]);
      start = -1;
    }
  }
  return out;
}

/** Keeps the 13 widest-spaced runs when extra slivers show up (e.g. a cell cut at the screenshot's edge). */
function thirteen(cells: [number, number][], axis: string): [number, number][] {
  if (cells.length === 13) return cells;
  const sizes = cells.map(([a, b]) => b - a + 1).sort((p, q) => q - p);
  const typical = sizes[Math.min(6, sizes.length - 1)];
  const kept = cells.filter(([a, b]) => b - a + 1 >= typical * 0.5);
  if (kept.length !== 13) throw new Error(`found ${kept.length} ${axis} of cells, expected 13`);
  return kept;
}

const file = process.argv[2];
if (!file) {
  console.error("usage: read-chart.ts <screenshot.png>");
  process.exit(1);
}
async function main() {
const { data, info } = await sharp(file).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height } = info;
const kindAt = (x: number, y: number): Kind => {
  const i = (y * width + x) * 3;
  return kindOf(data[i], data[i + 1], data[i + 2]);
};

// Cell rows: horizontal lines with plenty of colored pixels; borders between them have almost none.
const rowColored = Array.from({ length: height }, (_, y) => {
  let n = 0;
  for (let x = 0; x < width; x++) if (kindAt(x, y)) n++;
  return n;
});
const rows = thirteen(runs(height, (y) => rowColored[y] > width * 0.3, 8), "rows");
const top = rows[0][0];
const bottom = rows[12][1];
const colColored = Array.from({ length: width }, (_, x) => {
  let n = 0;
  for (let y = top; y <= bottom; y++) if (kindAt(x, y)) n++;
  return n;
});
const cols = thirteen(runs(width, (x) => colColored[x] > (bottom - top) * 0.3, 8), "columns");

const lines: string[] = [];
const notes: string[] = [];
for (let i = 0; i < 13; i++) {
  for (let j = 0; j < 13; j++) {
    const [x0, x1] = cols[j];
    const [y0, y1] = rows[i];
    const count = { r: 0, c: 0, f: 0 };
    for (let x = x0; x <= x1; x++) {
      // Each pixel column is one color: take the majority of its colored pixels.
      const col = { r: 0, c: 0, f: 0 };
      for (let y = y0; y <= y1; y++) {
        const k = kindAt(x, y);
        if (k) col[k]++;
      }
      const best = (["r", "c", "f"] as const).reduce((a, b) => (col[b] > col[a] ? b : a));
      if (col[best] > 0) count[best]++;
    }
    const total = count.r + count.c + count.f;
    if (total === 0) {
      notes.push(labelAt(i, j));
      continue;
    }
    // Round to whole percents that add up to 100.
    const r = Math.round((count.r / total) * 100);
    const c = Math.round((count.c / total) * 100);
    const f = 100 - r - c;
    if (f < 100) lines.push(`${labelAt(i, j)} ${r} ${c} ${f}`);
  }
}
console.log(`# Read by read-chart.ts from ${file.replace(/\\/g, "/").split("/").pop()}. Columns: hand, aggressive %, call %, fold %.`);
if (notes.length) console.log(`# No color found in: ${notes.join(", ")}`);
console.log(lines.join("\n"));
}

main();
