# "How many bb" drill: our own solver, status and plan (2026-11-05)

## Goal

Give every group in every spot of the "How many big blinds" drill a box that comes from solver data, not guesses. Then Uri reviews it.

1. **A♣7♦2♠ first:** solve it completely (flop, 3 turns, 6 rivers) and put it in the drill.
2. **Noam checks A72** on his phone, then **Uri reviews it**.
3. **Only after Noam's OK,** solve the other 10 boards the same way (an overnight run, about 10–12 hours).

## Why our own solver

- **GTO Wizard's terms** (gtowizard.com/terms) forbid automated access (Art. 7.7) and forbid commercial use of its ranges and charts (Art. 7.5). Its screenshots stay study notes for review, not shipped content.
- **TexasSolver** (github.com/bupticybee/TexasSolver, v0.2.0, AGPL) is free and runs on Noam's computer.
  - Before selling the app, ask the author to confirm that using its *results* as drill data is fine. The licence asks for a commercial licence only if the solver is built into the software or run as an online service.
  - The ready-made "texas-solver-mcp-server" isn't needed: we run the console program directly.

## Where it is installed and how it runs

- **Solver:** `C:\Users\noams\Developer\tools\TexasSolver\release\TexasSolver-v0.2.0-Windows\console_solver.exe` (outside the repo).
- **Runs** (input, log and result files): `C:\Users\noams\Developer\tools\TexasSolver\runs\`.
- **Scripts in the repo:**
  - `scripts/analysis/solver-input.ts <board> <pot> <stack> <in.txt> <out.json>` writes the input, in the drill's model:
    - BTN's whole opening range reaches the street;
    - BB's range is its preflop calls (`decisions/ranges/defend/BB-vs-BTN.txt`, from Noam's solver chart) after continuing on the earlier streets (my estimate, in `scripts/analysis/price-equity.ts`).
  - `scripts/analysis/solver-groups.ts <out.json> "<runout id>" <street 1|2>` prints, per drill group, the bet frequency and the average bet once BB checks.
- **How long it takes** (8 threads):

  | Solve | Time |
  |---|---|
  | A river | about 30 seconds |
  | A turn | a few minutes (not run yet) |
  | A flop with turn and river | about 45 minutes to 0.5% accuracy; 15–20 minutes at 1–2% |

- **Heat:** the laptop throttles itself, so there's no damage risk. Run it on a table, plugged in. Noam was worried, so use **4 threads** next time (`set_thread_num 4` in `solver-input.ts`, and in the flop input).

## How a solve becomes a box

- **The box is what the group bets on that street on average once BB checks** (frequency × size). This applies to groups with a pair or better that bet at least 30% of the time.
- **Bluffs and hands that rarely bet stay 0–5bb,** because the drill asks what a group is worth (Noam and Uri, 2026-11-02).
- **Solver answers** live in `src/lib/drill/postflop/solver-answers.ts`, keyed by runout and street, and win over the rule-based answers.
- Write each spot's data in `decisions/ranges/solver/`.

## Status when we stopped (2026-11-05 evening)

| Spot | Status |
|---|---|
| A72 · Q♥ · 9♣ river | solved, in the drill, **pushed and live** (AK 25–50bb, AJ–A8 15–25bb) |
| A72 rivers Q♥ K♦, 6♦ K♠, 6♦ 8♦, 5♣ K♥, 5♣ 6♣ | solved and in the drill, **committed but NOT pushed**, not browser-tested yet |
| A72 flop | stopped at 0.84% accuracy (iteration 151, ~45 min) because Noam worried about heat; must start again |
| A72 turns Q♥, 6♦, 5♣ | not solved yet |

What the 5 unpushed rivers change:

| River | Group | Before | Now |
|---|---|---|---|
| Q♥ K♦ | AJ–A8 | 0–5bb | 5–15bb |
| 6♦ K♠ | sets and two pair | 50–100bb | 15–25bb |
| 6♦ 8♦ | flushes | 50–100bb | 25–50bb |
| 6♦ 8♦ | sets and two pair | 5–15bb | 15–25bb |
| 5♣ K♥ | straights | 50–100bb | 25–50bb |
| 5♣ K♥ | sets and two pair | 50–100bb | 15–25bb |
| 5♣ K♥ | AQ | 15–25bb | 5–15bb |
| 5♣ 6♣ | flushes | 50–100bb | 25–50bb |
| 5♣ 6♣ | sets and two pair | 5–15bb | 15–25bb |

## Update 2026-11-06: every board solved and live

- Noam: "run solver board after board… every time you finish a board you push it."
- **All 11 boards are solved and pushed:** flop, then 3 turns, then 6 rivers per board. Each street uses BB's range from the solve before it. `scripts/analysis/solve-board.ts <board>` runs one board in about 10 minutes on 4 threads.
- **The method** is in the rulebook ("Every board from our own solver"). Each board's numbers are in `decisions/ranges/solver/<board>/report.txt`; lines with → are changes.
- **Flop boxes are still the rules and Noam's calls.** A flop bet is only 2–4bb, and our solver gives no flop EV.
- **Next:**
  - Noam checks the boards on his phone and reverses anything that feels wrong;
  - then Uri reviews;
  - the open questions below still stand. One new one: the river box is capped by the bet sizes (66%, 125%, all-in), so strong hands that pick 66% or 125% land at 15–50bb.

## Next steps (as of 2026-11-05)

1. **Browser-test the 5 rivers,** show Noam the table above, and push once he's seen it.
2. **Run the A72 flop solve again** (4 threads, about 1% accuracy), then the 3 turns.
3. **Re-solve the 6 rivers with BB's real ranges** from the turn solves, instead of my estimate, and show any box that moves.
4. **Noam checks A72,** then Uri reviews it.
5. **After Noam's OK:** an overnight run for the other 10 boards, then the same translation into boxes.

## Open questions

- **Flushes on a flush river:** split into big and small flushes? GTO Wizard cells mix suits, so it needs suit-filtered data or our solver per combo.
- **"Turn checked" lines** (a new line type in the drill)? On Q♥ 9♣ after check-check, top pair is worth much more.
- **Sets and two pair on a calm river** come out 15–25bb in the solver (6♦ K♠), against 50–100bb by the earlier rules. Does Noam agree?
- **The TexasSolver author's OK** for commercial use of the results.
