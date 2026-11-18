# KQ4-Ad-7c@bx river (K♦ Q♦ 4♠ A♦ 7♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: JT–J7, T9–T7, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 99% | 100% | 100% | 96% |
| g2 | 25–50bb | Straights | JT | 95% | 100% | 100% | 69% |
| g3 | 15–25bb | Sets | AA–QQ, 77, 44 | 91% | 99% | 99% | 41% |
| g4 | 15–25bb | Two pair | AK, AQ, A7, A4, KQ, K7, K4, Q7 | 88% | 93% | 84% | 36% |
| g5 | 0–5bb | Top pair | AJ–A8, A6, A5, A3, A2 | 78% | 70% | 20% | 36% |
| g6 | 0–5bb | Second pair | KJ–K8, K6, K5, K3, K2 | 63% | 37% | 0% | 35% |
| g7 | 0–5bb | Small pairs | JJ–88, 66, 55, 33, 22, QJ–Q8, Q6, Q5, J7, T7, 97, 87, 76, 75, 64, 54, 43 | 30% | 3% | 0% | 27% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| JT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| T9+fl | flush | 99% | 100% | 100% | 96% | 50–100bb | g1 |
| T8+fl | flush | 99% | 100% | 100% | 96% | 50–100bb | g1 |
| 54+fl | flushlo | 99% | 100% | 100% | 95% | 50–100bb | g1 |
| 64+fl | flushlo | 99% | 100% | 100% | 95% | 50–100bb | g1 |
| T7+fl | flush | 99% | 100% | 100% | 95% | 50–100bb | g1 |
| 43+fl | flushlo | 99% | 100% | 100% | 95% | 50–100bb | g1 |
| 86+fl | flushlo | 99% | 100% | 100% | 94% | 50–100bb | g1 |
| 98+fl | flush | 99% | 100% | 100% | 94% | 50–100bb | g1 |
| 87+fl | flushlo | 99% | 100% | 100% | 94% | 50–100bb | g1 |
| 97+fl | flush | 99% | 100% | 100% | 94% | 50–100bb | g1 |
| 75+fl | flushlo | 98% | 100% | 100% | 93% | 50–100bb | g1 |
| 76+fl | flushlo | 98% | 100% | 100% | 93% | 50–100bb | g1 |
| 96+fl | flush | 99% | 100% | 100% | 93% | 50–100bb | g1 |
| 65+fl | flushlo | 98% | 100% | 100% | 93% | 50–100bb | g1 |
| JT | straight | 94% | 100% | 100% | 69% | 50–100bb | g2 |
| AA | twopair | 91% | 100% | 100% | 47% | 25–50bb | g3 |
| KK | twopair | 91% | 100% | 100% | 45% | 25–50bb | g3 |
| QQ | twopair | 90% | 100% | 100% | 44% | 25–50bb | g3 |
| 77 | twopair | 92% | 100% | 100% | 39% | 25–50bb | g3 |
| 44 | twopair | 92% | 97% | 93% | 31% | 25–50bb | g3 |
| A7 | twopair | 90% | 98% | 94% | 38% | 25–50bb | g4 |
| AK | twopair | 89% | 96% | 91% | 36% | 25–50bb | g4 |
| AQ | twopair | 88% | 96% | 90% | 36% | 25–50bb | g4 |
| A4 | twopair | 89% | 93% | 80% | 35% | 25–50bb | g4 |
| K7 | twopair | 87% | 88% | 77% | 39% | 25–50bb | g4 |
| Q7 | twopair | 86% | 88% | 76% | 37% | 25–50bb | g4 |
| K4 | twopair | 86% | 87% | 75% | 30% | 25–50bb | g4 |
| KQ | twopair | 84% | 85% | 74% | 36% | 25–50bb | g4 |
| AT | tpmk | 81% | 78% | 43% | 40% | 15–25bb | g5 |
| A9 | tpmk | 78% | 73% | 26% | 34% | 15–25bb | g5 |
| A8 | tpmk | 77% | 68% | 15% | 36% | 15–25bb | g5 |
| A6 | tpmk | 76% | 66% | 8% | 36% | 15–25bb | g5 |
| A5 | tpmk | 76% | 65% | 5% | 36% | 15–25bb | g5 |
| A3 | tpmk | 75% | 63% | 2% | 35% | 15–25bb | g5 |
| A2 | tpmk | 76% | 62% | 2% | 35% | 15–25bb | g5 |
| AJ | tpmk | 85% | 85% | 61% | 38% | 25–50bb | g5 |
| KJ | mp | 69% | 45% | 0% | 37% | 0–5bb | g6 |
| KT | mp | 67% | 41% | 0% | 37% | 0–5bb | g6 |
| K9 | mp | 62% | 36% | 0% | 33% | 0–5bb | g6 |
| K8 | mp | 61% | 33% | 0% | 33% | 0–5bb | g6 |
| K6 | mp | 59% | 30% | 0% | 33% | 0–5bb | g6 |
| K5 | mp | 58% | 29% | 0% | 31% | 0–5bb | g6 |
| K3 | mp | 57% | 25% | 0% | 32% | 0–5bb | g6 |
| K2 | mp | 57% | 27% | 0% | 31% | 0–5bb | g6 |
| QJ | bp | 47% | 13% | 0% | 34% | 0–5bb | g7 |
| QT | bp | 45% | 9% | 0% | 36% | 0–5bb | g7 |
| Q9 | bp | 38% | 6% | 0% | 30% | 0–5bb | g7 |
| Q8 | bp | 36% | 5% | 0% | 29% | 0–5bb | g7 |
| Q6 | bp | 34% | 3% | 0% | 28% | 0–5bb | g7 |
| Q5 | bp | 33% | 2% | 0% | 27% | 0–5bb | g7 |
| TT | pp3 | 32% | 0% | 0% | 34% | 0–5bb | g7 |
| JJ | pp3 | 29% | 0% | 0% | 32% | 0–5bb | g7 |
| 88 | spp | 28% | 0% | 0% | 28% | 0–5bb | g7 |
| 99 | pp3 | 28% | 0% | 0% | 29% | 0–5bb | g7 |
| 87 | bp | 27% | 0% | 0% | 29% | 0–5bb | g7 |
| T7 | bp | 26% | 0% | 0% | 32% | 0–5bb | g7 |
| J7 | bp | 26% | 0% | 0% | 32% | 0–5bb | g7 |
| 97 | bp | 25% | 0% | 0% | 29% | 0–5bb | g7 |
| 76 | bp | 25% | 0% | 0% | 26% | 0–5bb | g7 |
| 75 | bp | 24% | 0% | 0% | 27% | 0–5bb | g7 |
| 66 | spp | 23% | 0% | 0% | 24% | 0–5bb | g7 |
| 55 | spp | 18% | 0% | 0% | 25% | 0–5bb | g7 |
| 64 | bp | 15% | 0% | 0% | 13% | 0–5bb | g7 |
| 54 | bp | 15% | 0% | 0% | 13% | 0–5bb | g7 |
| 43 | bp | 14% | 0% | 0% | 13% | 0–5bb | g7 |
| 33 | spp | 12% | 0% | 0% | 9% | 0–5bb | g7 |
| 22 | spp | 10% | 0% | 0% | 9% | 0–5bb | g7 |
