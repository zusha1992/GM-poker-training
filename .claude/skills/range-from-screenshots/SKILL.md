---
name: range-from-screenshots
description: Read solver range-chart screenshots (red = raise/3-bet/4-bet/all-in, green = call, blue = fold, split cells = mixed) and turn them into a reviewable per-group answer table plus a decision doc, using Noam's 75/25 rounding rule and the group calculator in this folder. Use whenever Noam uploads solver screenshots for any preflop drill (raise first in, 3-bet, facing a 3-bet, facing a 4-bet), instead of reading them ad hoc. Makes no code changes.
argument-hint: "<drill and seats, e.g. '3-bet drill, HJ vs UTG'>"
allowed-tools: Read Write Grep Glob Bash
---

# Read solver screenshots into drill data

Noam sends solver charts to replace placeholder drill data. This skill reads them carefully and produces something he can check. **It never edits drill code**: that happens after his approval, via `/apply-decision` or his direct go.

## 1. Know the spot. Never guess.

- **Every screenshot must come with its seats**, from Noam's message or the file name (e.g. "HJ vs UTG", "BTN vs SB 3-bet"). If a chart has no label, **stop and ask**. Never infer the seat from how the chart looks. *(Noam, 2026-11-03: "I don't want you to guess which one is what.")*
- Know which drill it is for:
  - Raise first in.
  - 3-bet: someone opens, the hero 3-bets, calls or folds.
  - Facing a 3-bet: the hero opened.
  - Facing a 4-bet: the hero 3-bet.
- The aggressive action means something different in each drill: raise, 3-bet, 4-bet or all-in.
- Ask about bet sizes or colours only if the chart doesn't show them and they're not the defaults: open 2.5bb, 3-bet to 8bb, 4-bet to 20bb.

## 2. Colours and rounding *(Noam, 2026-11-03)*

- **Pure cells:**
  - Fully **red** = the aggressive action.
  - Fully **green** = call.
  - Fully **blue** = fold.
- Dark or highlighted cells are just hovered: read the colour under the shading.
- **Ignore the numbers in the cells.** They are EV, not frequencies.
- **Mixed cells:** estimate each colour's share of the cell's width, to the nearest 5%.
- **The rule, applied to a group's combo-weighted average:**
  - An action at **75% or more** → pure.
  - An action at **25% or less** → drops out.
  - Anything in between → **mix**.
  - If three actions stay above 25%, the answer is a mix of the two biggest. Flag it.

## 3. Write the read down, hand by hand

Save one text file per chart at `decisions/ranges/<drill>/<seat>.txt`, for example `decisions/ranges/3bet/HJ-vs-UTG.txt`. One line per hand that isn't a pure fold:

```
# 3-bet drill, HJ vs UTG, solver screenshot 2026-11-03. aggressive call fold
AA  100 0 0
QQ  90 10 0
A9s 45 10 45
```

Hands left out count as pure folds. Go row by row across the whole grid; don't skip cells. Pairs are on the diagonal, suited hands above it, offsuit below. Keeping this file means a correction later is a one-line edit, and the group answers can be recalculated.

## 4. Turn it into group answers with the calculator

From the repo root:

```
npx tsx .claude/skills/range-from-screenshots/group-answers.ts decisions/ranges/3bet/HJ-vs-UTG.txt
```

- For the **facing-a-3-bet** drill, add `--range <hero's opening seat>`. This skips groups the hero never opened.
- The calculator prints each group's average, its answer under the rule, and two flags:
  - **NEAR:** the average is within 5 points of 25% or 75%, so a closer read could flip it.
  - **SPLIT:** the hands inside one group play very differently (e.g. AKs 3-bets, A6s folds).
- It also lists hands that aren't folds but belong to no group. These are filled in as fold today, so they need a new group.

Never do the averaging by hand: use the calculator.

## 5. Report to Noam and save a decision doc

Save `decisions/<date>-<drill>-<spot>-from-screenshots.md` with these sections:
- **What was read:** the charts, their seats and the method.
- **Group table:** the calculator output.
- **Hands I'm unsure of:** blurry cells, thin slivers.
- **Groups to split:** the SPLIT flags, with a concrete proposed split.
- **Hands outside every group.**
- **Proposed code change.**

In chat, give Noam a short version:
- the groups that differ from the app today,
- every NEAR and SPLIT,
- the questions.

Wait for his corrections. Fold them into the read file, rerun the calculator, and note the change in the doc.

## 6. After approval (not part of this skill)

1. Run `npm run ranges`. It copies every read file in `decisions/ranges/` into `src/lib/drill/preflop/solver-reads.ts`, which the app reads. `prebuild` runs it too, but commit the generated file.
2. Hook up the drill, if it isn't reading solver data yet. The drill data lives in `src/lib/drill/preflop/`:
   - `rfi.ts`: raise first in.
   - `threebet.ts`: 3-bet.
   - `facing3bet.ts`: facing a 3-bet.
   - `facing4bet.ts`: facing a 4-bet.
3. **The 3-bet drill already reads solver data.** For a spot keyed `3bet/<hero>-vs-<opener>` it uses the read automatically, with the split groups (`THREEBET_FAMS`) and the same 75/25 rule (`solver.ts`). For the other drills, wire them the same way, replacing their placeholder formula (`genStrat4` / `genStrat5`).
4. Keep the drill rules already in place: obvious groups start filled in (`obviousKeys`), and AA–QQ is never asked.
5. Test in a real browser and push.

## Don't

- Don't guess a seat or fill in a spot that has no screenshot.
- Don't touch `src/lib/poker/gto-ranges.ts`. That's the other app's data.
- Don't round a cell the rule doesn't cover without saying so.
