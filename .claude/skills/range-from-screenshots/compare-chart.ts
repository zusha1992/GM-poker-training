/**
 * A side-by-side picture for Noam to check a spot at a glance (2026-11-04):
 * the solver screenshot on the left, and on the right the 13×13 chart the
 * drill teaches, in the solver's colors (mixes as split cells), with every
 * question's hands outlined in the same color.
 *
 * Usage, from the repo root:
 *   npx tsx .claude/skills/range-from-screenshots/compare-chart.ts <screenshot.png> <hero> <opener> <out.png>
 */
import sharp from "sharp";
import { labelAt } from "../../../src/lib/drill/matrix";
import { threebetSpot } from "../../../src/lib/drill/preflop/threebet";
import type { Seat } from "../../../src/lib/drill/preflop/seats";

const COLOR: Record<string, string> = { raise: "#F2403C", call: "#5CB85C", fold: "#3D7CC0" };

async function main() {
  const [shot, hero, opener, out] = process.argv.slice(2);
  const spot = threebetSpot(opener as Seat, hero as Seat);
  const taught = new Map<string, { answer: string; mix?: [string, string, number]; q?: number }>();
  spot.drill.pieces.forEach((p, i) => p.hands.forEach((h) => taught.set(h, { answer: p.answer, mix: p.mixSplit, q: i + 1 })));
  spot.drill.preFilled.forEach((g) => (g.hands ?? []).forEach((h) => taught.set(h, { answer: g.answer, mix: g.mixSplit })));

  const C = 64;
  const W = C * 13;
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${W + 40}"><rect width="100%" height="100%" fill="#1B1F24"/>`;
  svg += `<text x="8" y="28" fill="#fff" font-family="Arial" font-size="22" font-weight="bold">What the drill teaches: ${hero} vs ${opener} (numbers = question)</text>`;
  for (let i = 0; i < 13; i++) {
    for (let j = 0; j < 13; j++) {
      const h = labelAt(i, j);
      const t = taught.get(h) ?? { answer: "fold" };
      const x = j * C;
      const y = 40 + i * C;
      if (t.answer === "mix" && t.mix) {
        // Same order as the solver: 3-bet, then call, then fold.
        const order = ["raise", "call", "fold"];
        const parts: [string, number][] = [[t.mix[0], t.mix[2]], [t.mix[1], 100 - t.mix[2]]];
        parts.sort((p, q) => order.indexOf(p[0]) - order.indexOf(q[0]));
        const w = Math.round((parts[0][1] / 100) * (C - 2));
        svg += `<rect x="${x + 1}" y="${y + 1}" width="${w}" height="${C - 2}" fill="${COLOR[parts[0][0]]}"/>`;
        svg += `<rect x="${x + 1 + w}" y="${y + 1}" width="${C - 2 - w}" height="${C - 2}" fill="${COLOR[parts[1][0]]}"/>`;
      } else {
        svg += `<rect x="${x + 1}" y="${y + 1}" width="${C - 2}" height="${C - 2}" fill="${COLOR[t.answer]}"/>`;
      }
      svg += `<text x="${x + 5}" y="${y + 22}" fill="#fff" font-family="Arial" font-size="17">${h}</text>`;
      if (t.q) svg += `<text x="${x + C - 6}" y="${y + C - 8}" fill="#fff" font-family="Arial" font-size="15" font-weight="bold" text-anchor="end">${t.q}</text>`;
    }
  }
  svg += "</svg>";
  const right = await sharp(Buffer.from(svg)).png().toBuffer();
  const left = await sharp(shot).resize({ height: W + 40, fit: "contain", background: "#1B1F24" }).png().toBuffer();
  const lw = (await sharp(left).metadata()).width ?? W;
  await sharp({ create: { width: lw + W + 20, height: W + 40, channels: 3, background: "#1B1F24" } })
    .composite([{ input: left, left: 0, top: 0 }, { input: right, left: lw + 20, top: 0 }])
    .png()
    .toFile(out);
  console.log(`wrote ${out}`);
}

main();
