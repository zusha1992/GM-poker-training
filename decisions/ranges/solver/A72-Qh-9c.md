# A♣7♦2♠ · Q♥ · 9♣ river: TexasSolver (2026-11-05)

**The first solve with our own solver** (TexasSolver v0.2.0, run on Noam's computer). How it was set up:
- **The drill's model:** BTN's whole opening range reaches the river.
- **BB's range:** its preflop calls (`decisions/ranges/defend/BB-vs-BTN.txt`), continuing after the small flop bet and the turn overbet. This part is an estimate, from `scripts/analysis/price-equity.ts`.
- **Money:** pot 36.5bb, 82bb behind.
- **Bet sizes:** BTN can bet 66% of the pot (24bb) or go all-in (82bb). BB can check, or bet 66%.
- **Accuracy:** 0.4%, solved in 34 seconds.
- **Tools:** the input file is made by `scripts/analysis/solver-input.ts` and read by `scripts/analysis/solver-groups.ts`.

## BTN after BB checks

| Group | Bets | Average bet | Drill before | Drill now |
|---|---|---|---|---|
| Sets and two pair | 100% | 57.5bb | 50–100bb | 50–100bb |
| AK | 100% | 25.8bb | 5–15bb | **25–50bb** |
| AJ, AT, A8 | 88% | 22.1bb | 5–15bb | **15–25bb** |
| A6–A3 | 1% | 0.6bb | 0–5bb | 0–5bb |
| KK, JJ, TT, Qx, 9x, 7x, 2x, 88, 66–33 | 0% | 0bb | 0–5bb | 0–5bb |
| Trash | 77% | 36.6bb (bluffs) | 0–5bb | 0–5bb |
| K-high | 36% | 17.6bb (bluffs) | 0–5bb | 0–5bb |

- **The bluffs** put money in, but the drill asks what a group is worth, so they stay at 0–5bb *(Noam and Uri, 2026-11-02)*.
- **Compared with GTO Wizard's equity screenshot:** GTO Wizard had AK at 73% on its narrower polar line, and the equity rule made that 5–15bb. In the drill's model (BTN's whole range on the river) the solver bets AK and AJ–A8 big, so those changed back up.
