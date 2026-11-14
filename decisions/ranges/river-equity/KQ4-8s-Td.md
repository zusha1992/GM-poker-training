# KQ4-8s-Td river (K♦ Q♦ 4♠ 8♠ T♦): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AJ, A9–A2, J9–J7, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 99% | 100% | 100% | 99% |
| g2 | 25–50bb | Straights | AJ, J9 | 93% | 99% | 98% | 80% |
| g3 | 15–25bb | Sets | KK, QQ, TT, 88, 44 | 89% | 97% | 95% | 67% |
| g4 | 15–25bb | Two pair | KQ, KT, K8, K4, QT, Q8, T8 | 85% | 89% | 84% | 58% |
| g5 | 0–5bb | Overpair | AA | 81% | 74% | 61% | 53% |
| g6 | 0–5bb | Top pair | AK, KJ, K9, K7–K5, K3, K2 | 71% | 57% | 32% | 43% |
| g7 | 0–5bb | Second pair | AQ, QJ, Q9, Q7–Q5 | 41% | 17% | 0% | 25% |
| g8 | 0–5bb | Small pairs | JJ, 99, 77–55, 33, 22, AT, A8, A4, JT, J8, T9, T7, 98, 87, 86, 64, 54, 43 | 10% | 1% | 0% | 11% |
| g9 | Pot is too big | Ace-high | A9, A7–A5, A3, A2 | 0% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A6+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A5+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J8+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 98+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 87+fl | flushlo | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 86+fl | flushlo | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| J7+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 43+fl | flushlo | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 54+fl | flushlo | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| 96+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 97+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 64+fl | flushlo | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 75+fl | flushlo | 99% | 100% | 100% | 97% | 50–100bb | g1 |
| 76+fl | flushlo | 99% | 100% | 100% | 97% | 50–100bb | g1 |
| 65+fl | flushlo | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| AJ | straight | 95% | 99% | 99% | 85% | 50–100bb | g2 |
| J9 | straight | 91% | 98% | 97% | 73% | 50–100bb | g2 |
| 44 | twopair | 92% | 97% | 96% | 71% | 50–100bb | g3 |
| 88 | twopair | 90% | 97% | 96% | 70% | 50–100bb | g3 |
| TT | twopair | 89% | 97% | 95% | 68% | 50–100bb | g3 |
| KK | twopair | 88% | 96% | 93% | 65% | 50–100bb | g3 |
| QQ | twopair | 87% | 96% | 95% | 63% | 50–100bb | g3 |
| Q8 | twopair | 79% | 75% | 67% | 46% | 25–50bb | g4 |
| KQ | twopair | 88% | 97% | 95% | 64% | 50–100bb | g4 |
| KT | twopair | 88% | 94% | 90% | 63% | 50–100bb | g4 |
| K8 | twopair | 86% | 89% | 82% | 60% | 50–100bb | g4 |
| K4 | twopair | 85% | 88% | 80% | 57% | 50–100bb | g4 |
| T8 | twopair | 81% | 79% | 68% | 52% | 50–100bb | g4 |
| QT | twopair | 82% | 83% | 76% | 51% | 50–100bb | g4 |
| AA | op | 80% | 74% | 61% | 53% | 50–100bb | g5 |
| K7 | tpmk | 67% | 48% | 20% | 38% | 0–5bb | g6 |
| KJ | tpmk | 77% | 66% | 47% | 45% | 15–25bb | g6 |
| K6 | tpmk | 65% | 47% | 16% | 37% | 0–5bb | g6 |
| K5 | tpmk | 64% | 43% | 12% | 38% | 0–5bb | g6 |
| K2 | tpmk | 61% | 39% | 5% | 38% | 0–5bb | g6 |
| K3 | tpmk | 61% | 39% | 5% | 37% | 0–5bb | g6 |
| K9 | tpmk | 72% | 56% | 31% | 39% | 5–15bb | g6 |
| AK | tpgk | 79% | 71% | 55% | 52% | 50–100bb | g6 |
| AQ | mp | 49% | 25% | 0% | 34% | 0–5bb | g7 |
| QJ | mp | 44% | 18% | 0% | 27% | 0–5bb | g7 |
| Q9 | mp | 38% | 13% | 0% | 19% | 0–5bb | g7 |
| Q7 | mp | 32% | 10% | 0% | 17% | 0–5bb | g7 |
| Q6 | mp | 30% | 8% | 0% | 16% | 0–5bb | g7 |
| Q5 | mp | 28% | 7% | 0% | 16% | 0–5bb | g7 |
| JJ | pp2 | 20% | 2% | 0% | 18% | 0–5bb | g8 |
| AT | bp | 16% | 3% | 0% | 16% | 0–5bb | g8 |
| JT | bp | 16% | 1% | 0% | 17% | 0–5bb | g8 |
| T9 | bp | 15% | 0% | 0% | 13% | 0–5bb | g8 |
| T7 | bp | 14% | 0% | 0% | 12% | 0–5bb | g8 |
| 99 | pp3 | 13% | 0% | 0% | 13% | 0–5bb | g8 |
| J8 | bp | 11% | 0% | 0% | 11% | 0–5bb | g8 |
| A8 | bp | 10% | 0% | 0% | 11% | 0–5bb | g8 |
| 98 | bp | 10% | 0% | 0% | 10% | 0–5bb | g8 |
| 86 | bp | 9% | 0% | 0% | 9% | 0–5bb | g8 |
| 87 | bp | 9% | 0% | 0% | 9% | 0–5bb | g8 |
| 66 | spp | 8% | 0% | 0% | 9% | 0–5bb | g8 |
| 55 | spp | 8% | 0% | 0% | 9% | 0–5bb | g8 |
| 77 | spp | 8% | 0% | 0% | 8% | 0–5bb | g8 |
| A4 | bp | 5% | 0% | 0% | 7% | 0–5bb | g8 |
| 54 | bp | 3% | 0% | 0% | 3% | 0–5bb | g8 |
| 43 | bp | 3% | 0% | 0% | 3% | 0–5bb | g8 |
| 64 | bp | 3% | 0% | 0% | 3% | 0–5bb | g8 |
| 22 | spp | 2% | 0% | 0% | 1% | 0–5bb | g8 |
| 33 | spp | 1% | 0% | 0% | 1% | 0–5bb | g8 |
| A9 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A7 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
