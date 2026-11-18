# A72-Qh-9c@xx river (A♣ 7♦ 2♠ Q♥ 9♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets & two pair | AA, QQ, 99, 77, 22, AQ, A9, A7 | 98% | 100% | 99% | 74% |
| g2 | 25–50bb | Two pair | A2, Q9, Q7, 97 | 94% | 92% | 85% | 27% |
| g3 | 15–25bb | Top pair | AK, AJ, AT, A8, A6–A3 | 85% | 69% | 33% | 12% |
| g4 | 5–15bb | Pocket pairs under the A | KK, JJ, TT | 66% | 31% | 0% | 3% |
| g5 | 5–15bb | Second pair | KQ, QJ, QT, Q8, Q6, Q5 | 70% | 36% | 0% | 5% |
| g6 | 0–5bb | Small pairs | 88, 66–33, K9, K7, K2, J9, J7, T9, T7, 98, 96, 87, 76, 75 | 49% | 11% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AA | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| QQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 99 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 100% | 100% | 100% | 91% | 50–100bb | g1 |
| 22 | twopair | 99% | 100% | 100% | 78% | 50–100bb | g1 |
| AQ | twopair | 98% | 100% | 100% | 70% | 50–100bb | g1 |
| A9 | twopair | 97% | 100% | 99% | 66% | 50–100bb | g1 |
| A7 | twopair | 96% | 98% | 95% | 52% | 50–100bb | g1 |
| A2 | twopair | 95% | 95% | 88% | 36% | 25–50bb | g2 |
| Q9 | twopair | 93% | 91% | 83% | 20% | 25–50bb | g2 |
| Q7 | twopair | 91% | 88% | 80% | 16% | 25–50bb | g2 |
| 97 | twopair | 92% | 87% | 77% | 16% | 25–50bb | g2 |
| A8 | tpmk | 86% | 70% | 38% | 12% | 15–25bb | g3 |
| A6 | tpwk | 83% | 66% | 27% | 12% | 15–25bb | g3 |
| AK | tpgk | 90% | 84% | 64% | 12% | 25–50bb | g3 |
| A5 | tpwk | 82% | 61% | 17% | 12% | 15–25bb | g3 |
| AJ | tpmk | 90% | 82% | 60% | 11% | 25–50bb | g3 |
| A4 | tpwk | 81% | 57% | 7% | 12% | 5–15bb | g3 |
| A3 | tpwk | 79% | 54% | 1% | 12% | 5–15bb | g3 |
| AT | tpmk | 88% | 77% | 52% | 12% | 25–50bb | g3 |
| KK | pp1 | 72% | 44% | 0% | 10% | 0–5bb | g4 |
| TT | pp2 | 63% | 24% | 0% | 0% | 0–5bb | g4 |
| JJ | pp2 | 62% | 24% | 0% | 0% | 0–5bb | g4 |
| QJ | mp | 72% | 37% | 0% | 6% | 0–5bb | g5 |
| KQ | mp | 71% | 41% | 0% | 8% | 0–5bb | g5 |
| QT | mp | 71% | 35% | 0% | 3% | 0–5bb | g5 |
| Q8 | mp | 69% | 32% | 0% | 1% | 0–5bb | g5 |
| Q6 | mp | 67% | 31% | 0% | 1% | 0–5bb | g5 |
| Q5 | mp | 66% | 30% | 0% | 0% | 0–5bb | g5 |
| K9 | bp | 61% | 20% | 0% | 0% | 0–5bb | g6 |
| J9 | bp | 59% | 20% | 0% | 0% | 0–5bb | g6 |
| T9 | bp | 58% | 17% | 0% | 0% | 0–5bb | g6 |
| 98 | bp | 57% | 15% | 0% | 0% | 0–5bb | g6 |
| 96 | bp | 55% | 14% | 0% | 0% | 0–5bb | g6 |
| 88 | pp3 | 51% | 12% | 0% | 0% | 0–5bb | g6 |
| K7 | bp | 51% | 11% | 0% | 0% | 0–5bb | g6 |
| T7 | bp | 51% | 10% | 0% | 0% | 0–5bb | g6 |
| 87 | bp | 50% | 9% | 0% | 0% | 0–5bb | g6 |
| J7 | bp | 50% | 10% | 0% | 0% | 0–5bb | g6 |
| 76 | bp | 48% | 8% | 0% | 0% | 0–5bb | g6 |
| 75 | bp | 47% | 6% | 0% | 0% | 0–5bb | g6 |
| 66 | pp3 | 44% | 6% | 0% | 0% | 0–5bb | g6 |
| 55 | pp3 | 41% | 5% | 0% | 0% | 0–5bb | g6 |
| 44 | pp3 | 38% | 4% | 0% | 0% | 0–5bb | g6 |
| 33 | pp3 | 37% | 3% | 0% | 0% | 0–5bb | g6 |
| K2 | bp | 36% | 2% | 0% | 0% | 0–5bb | g6 |
