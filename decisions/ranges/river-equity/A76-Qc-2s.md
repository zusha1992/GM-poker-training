# A76-Qc-2s river (A♥ 7♥ 6♣ Q♣ 2♠): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | AA, QQ, 77, 66, 22 | 100% | 100% | 100% | 100% |
| g2 | 50–100bb | Two pair | AQ, A7, A6, A2, Q7, Q6, 76 | 98% | 100% | 100% | 90% |
| g3 | 50–100bb | Top pair, good kicker | AK, AJ, AT | 84% | 84% | 85% | 51% |
| g4 | 0–5bb | Top pair, weak kicker | A9, A8, A5–A3 | 54% | 29% | 29% | 19% |
| g5 | 0–5bb | Big pocket pairs | KK | 28% | 0% | 0% | 0% |
| g6 | 0–5bb | Second pair | KQ, QJ–Q8, Q5 | 28% | 0% | 0% | 0% |
| g7 | 0–5bb | Small pairs | JJ–88, 55–33, K7, K6, K2, J7, T7, 97, 96, 87, 86, 75, 65, 64 | 16% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AA | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| QQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 66 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 22 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g2 |
| A7 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g2 |
| A6 | twopair | 99% | 100% | 100% | 95% | 50–100bb | g2 |
| A2 | twopair | 96% | 100% | 100% | 82% | 50–100bb | g2 |
| Q7 | twopair | 93% | 100% | 100% | 72% | 50–100bb | g2 |
| Q6 | twopair | 93% | 99% | 99% | 70% | 50–100bb | g2 |
| 76 | twopair | 92% | 96% | 96% | 69% | 50–100bb | g2 |
| AT | tpmk | 78% | 78% | 78% | 48% | 25–50bb | g3 |
| AK | tpgk | 88% | 89% | 90% | 53% | 50–100bb | g3 |
| AJ | tpmk | 86% | 87% | 87% | 51% | 50–100bb | g3 |
| A9 | tpmk | 70% | 64% | 64% | 42% | 25–50bb | g4 |
| A8 | tpmk | 61% | 45% | 46% | 28% | 0–5bb | g4 |
| A5 | tpmk | 52% | 25% | 25% | 16% | 0–5bb | g4 |
| A4 | tpmk | 44% | 11% | 10% | 7% | 0–5bb | g4 |
| A3 | tpmk | 40% | 2% | 2% | 1% | 0–5bb | g4 |
| KK | pp1 | 28% | 0% | 0% | 0% | 0–5bb | g5 |
| KQ | mp | 29% | 0% | 0% | 0% | 0–5bb | g6 |
| Q9 | mp | 28% | 0% | 0% | 0% | 0–5bb | g6 |
| QJ | mp | 28% | 0% | 0% | 0% | 0–5bb | g6 |
| Q5 | mp | 28% | 0% | 0% | 0% | 0–5bb | g6 |
| QT | mp | 28% | 0% | 0% | 0% | 0–5bb | g6 |
| Q8 | mp | 27% | 0% | 0% | 0% | 0–5bb | g6 |
| TT | pp2 | 27% | 0% | 0% | 0% | 0–5bb | g7 |
| 99 | pp2 | 26% | 0% | 0% | 0% | 0–5bb | g7 |
| JJ | pp2 | 25% | 0% | 0% | 0% | 0–5bb | g7 |
| 88 | pp2 | 24% | 0% | 0% | 0% | 0–5bb | g7 |
| J7 | bp | 21% | 0% | 0% | 0% | 0–5bb | g7 |
| K7 | bp | 21% | 0% | 0% | 0% | 0–5bb | g7 |
| T7 | bp | 19% | 0% | 0% | 0% | 0–5bb | g7 |
| 97 | bp | 19% | 0% | 0% | 0% | 0–5bb | g7 |
| 75 | bp | 17% | 0% | 0% | 0% | 0–5bb | g7 |
| 87 | bp | 17% | 0% | 0% | 0% | 0–5bb | g7 |
| K6 | bp | 12% | 0% | 0% | 0% | 0–5bb | g7 |
| 96 | bp | 11% | 0% | 0% | 0% | 0–5bb | g7 |
| 86 | bp | 9% | 0% | 0% | 0% | 0–5bb | g7 |
| 65 | bp | 9% | 0% | 0% | 0% | 0–5bb | g7 |
| 64 | bp | 9% | 0% | 0% | 0% | 0–5bb | g7 |
| 44 | pp3 | 7% | 0% | 0% | 0% | 0–5bb | g7 |
| 55 | pp3 | 7% | 0% | 0% | 0% | 0–5bb | g7 |
| K2 | bp | 6% | 0% | 0% | 0% | 0–5bb | g7 |
| 33 | pp3 | 6% | 0% | 0% | 0% | 0–5bb | g7 |
