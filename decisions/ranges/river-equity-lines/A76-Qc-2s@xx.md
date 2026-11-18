# A76-Qc-2s@xx river (A♥ 7♥ 6♣ Q♣ 2♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | AA, QQ, 77, 66, 22 | 100% | 100% | 100% | 86% |
| g2 | 25–50bb | Two pair | AQ, A7, A6, A2, Q7, Q6, 76 | 96% | 99% | 98% | 26% |
| g3 | 25–50bb | Top pair, good kicker | AK, AJ, AT | 90% | 88% | 72% | 6% |
| g4 | 15–25bb | Top pair, weak kicker | A9, A8, A5–A3 | 83% | 69% | 23% | 5% |
| g5 | 0–5bb | Big pocket pairs | KK | 73% | 49% | 0% | 3% |
| g6 | 0–5bb | Second pair | KQ, QJ–Q8, Q5 | 70% | 41% | 0% | 2% |
| g7 | 0–5bb | Small pairs | JJ–88, 55–33, K7, K6, K2, J7, T7, 97, 96, 87, 86, 75, 65, 64 | 54% | 17% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AA | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| QQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 66 | twopair | 99% | 100% | 100% | 73% | 50–100bb | g1 |
| 22 | twopair | 98% | 100% | 100% | 56% | 50–100bb | g1 |
| AQ | twopair | 97% | 100% | 100% | 38% | 25–50bb | g2 |
| A7 | twopair | 97% | 100% | 100% | 34% | 25–50bb | g2 |
| A6 | twopair | 96% | 100% | 100% | 21% | 25–50bb | g2 |
| A2 | twopair | 95% | 99% | 98% | 19% | 25–50bb | g2 |
| Q7 | twopair | 94% | 97% | 95% | 15% | 25–50bb | g2 |
| Q6 | twopair | 93% | 96% | 93% | 11% | 25–50bb | g2 |
| 76 | twopair | 94% | 93% | 87% | 11% | 25–50bb | g2 |
| AK | tpgk | 91% | 90% | 77% | 6% | 25–50bb | g3 |
| AJ | tpmk | 91% | 89% | 74% | 6% | 25–50bb | g3 |
| AT | tpmk | 89% | 85% | 64% | 6% | 25–50bb | g3 |
| A8 | tpmk | 84% | 74% | 36% | 6% | 15–25bb | g4 |
| A5 | tpmk | 82% | 68% | 20% | 5% | 15–25bb | g4 |
| A4 | tpmk | 82% | 63% | 8% | 3% | 15–25bb | g4 |
| A3 | tpmk | 81% | 60% | 2% | 3% | 15–25bb | g4 |
| A9 | tpmk | 87% | 79% | 51% | 6% | 25–50bb | g4 |
| KK | pp1 | 73% | 49% | 0% | 3% | 0–5bb | g5 |
| KQ | mp | 72% | 45% | 0% | 2% | 0–5bb | g6 |
| QJ | mp | 71% | 44% | 0% | 2% | 0–5bb | g6 |
| QT | mp | 70% | 41% | 0% | 2% | 0–5bb | g6 |
| Q9 | mp | 67% | 37% | 0% | 2% | 0–5bb | g6 |
| Q8 | mp | 66% | 32% | 0% | 2% | 0–5bb | g6 |
| Q5 | mp | 66% | 30% | 0% | 1% | 0–5bb | g6 |
| 99 | pp2 | 61% | 26% | 0% | 0% | 0–5bb | g7 |
| TT | pp2 | 61% | 26% | 0% | 0% | 0–5bb | g7 |
| 88 | pp2 | 60% | 23% | 0% | 0% | 0–5bb | g7 |
| JJ | pp2 | 60% | 26% | 0% | 0% | 0–5bb | g7 |
| 87 | bp | 59% | 19% | 0% | 0% | 0–5bb | g7 |
| J7 | bp | 58% | 22% | 0% | 0% | 0–5bb | g7 |
| K7 | bp | 58% | 21% | 0% | 0% | 0–5bb | g7 |
| T7 | bp | 58% | 20% | 0% | 0% | 0–5bb | g7 |
| 97 | bp | 57% | 21% | 0% | 0% | 0–5bb | g7 |
| 75 | bp | 55% | 17% | 0% | 0% | 0–5bb | g7 |
| 96 | bp | 53% | 14% | 0% | 0% | 0–5bb | g7 |
| K6 | bp | 53% | 15% | 0% | 0% | 0–5bb | g7 |
| 65 | bp | 50% | 12% | 0% | 0% | 0–5bb | g7 |
| 86 | bp | 50% | 13% | 0% | 0% | 0–5bb | g7 |
| 64 | bp | 49% | 11% | 0% | 0% | 0–5bb | g7 |
| 55 | pp3 | 46% | 7% | 0% | 0% | 0–5bb | g7 |
| 44 | pp3 | 45% | 6% | 0% | 0% | 0–5bb | g7 |
| 33 | pp3 | 42% | 4% | 0% | 0% | 0–5bb | g7 |
| K2 | bp | 39% | 3% | 0% | 0% | 0–5bb | g7 |
