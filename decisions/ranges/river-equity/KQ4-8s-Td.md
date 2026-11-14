# KQ4-8s-Td river (K♦ Q♦ 4♠ 8♠ T♦): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes, straights & sets | KK, QQ, TT, 88, 44, AJ, J9 · ♦ flushes: AJ, A9–A2, J9–J7, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 95% | 99% | 98% | 83% |
| g2 | 15–25bb | Two pair | KQ, KT, K8, K4, QT, Q8, T8 | 86% | 89% | 84% | 59% |
| g3 | 0–5bb | Overpair | AA | 80% | 73% | 63% | 54% |
| g4 | 0–5bb | Top pair | AK, KJ, K9, K7–K5, K3, K2 | 72% | 57% | 33% | 42% |
| g5 | 0–5bb | Second pair | AQ, QJ, Q9, Q7–Q5 | 41% | 18% | 0% | 26% |
| g6 | 0–5bb | Small pairs | JJ, 99, 77–55, 33, 22, AT, A8, A4, JT, J8, T9, T7, 98, 87, 86, 64, 54, 43 | 11% | 1% | 0% | 11% |
| g7 | Pot is too big | Ace-high | A9, A7–A5, A3, A2 | 0% | 0% | 0% | 0% |

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
| 98+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| J8+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 86+fl | flushlo | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 87+fl | flushlo | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 54+fl | flushlo | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| J7+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 64+fl | flushlo | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 96+fl | flush | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| 97+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 43+fl | flushlo | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 76+fl | flushlo | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| 75+fl | flushlo | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| 65+fl | flushlo | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| AJ | straight | 95% | 99% | 99% | 85% | 50–100bb | g1 |
| J9 | straight | 91% | 98% | 97% | 72% | 50–100bb | g1 |
| 44 | twopair | 92% | 97% | 96% | 71% | 50–100bb | g1 |
| 88 | twopair | 90% | 97% | 96% | 70% | 50–100bb | g1 |
| TT | twopair | 90% | 97% | 95% | 65% | 50–100bb | g1 |
| KK | twopair | 89% | 96% | 92% | 65% | 50–100bb | g1 |
| QQ | twopair | 87% | 96% | 96% | 62% | 50–100bb | g1 |
| Q8 | twopair | 79% | 75% | 66% | 47% | 25–50bb | g2 |
| KT | twopair | 88% | 93% | 90% | 64% | 50–100bb | g2 |
| KQ | twopair | 88% | 96% | 95% | 63% | 50–100bb | g2 |
| K8 | twopair | 86% | 89% | 81% | 61% | 50–100bb | g2 |
| K4 | twopair | 85% | 87% | 81% | 59% | 50–100bb | g2 |
| QT | twopair | 83% | 84% | 78% | 54% | 50–100bb | g2 |
| T8 | twopair | 81% | 78% | 69% | 52% | 50–100bb | g2 |
| AA | op | 80% | 73% | 63% | 54% | 50–100bb | g3 |
| K7 | tpmk | 68% | 49% | 20% | 37% | 0–5bb | g4 |
| K6 | tpmk | 66% | 46% | 16% | 38% | 0–5bb | g4 |
| KJ | tpmk | 77% | 66% | 49% | 45% | 15–25bb | g4 |
| K5 | tpmk | 64% | 45% | 12% | 38% | 0–5bb | g4 |
| K2 | tpmk | 61% | 40% | 5% | 39% | 0–5bb | g4 |
| K3 | tpmk | 61% | 40% | 5% | 38% | 0–5bb | g4 |
| K9 | tpmk | 71% | 55% | 32% | 39% | 5–15bb | g4 |
| AK | tpgk | 79% | 71% | 55% | 50% | 50–100bb | g4 |
| AQ | mp | 48% | 25% | 0% | 34% | 0–5bb | g5 |
| QJ | mp | 45% | 20% | 0% | 28% | 0–5bb | g5 |
| Q9 | mp | 39% | 13% | 0% | 19% | 0–5bb | g5 |
| Q7 | mp | 32% | 10% | 0% | 16% | 0–5bb | g5 |
| Q6 | mp | 30% | 8% | 0% | 16% | 0–5bb | g5 |
| Q5 | mp | 28% | 8% | 0% | 17% | 0–5bb | g5 |
| JJ | pp2 | 21% | 2% | 0% | 17% | 0–5bb | g6 |
| AT | bp | 17% | 2% | 0% | 16% | 0–5bb | g6 |
| JT | bp | 16% | 1% | 0% | 16% | 0–5bb | g6 |
| 99 | pp3 | 15% | 0% | 0% | 13% | 0–5bb | g6 |
| T9 | bp | 14% | 0% | 0% | 14% | 0–5bb | g6 |
| T7 | bp | 14% | 0% | 0% | 13% | 0–5bb | g6 |
| A8 | bp | 10% | 0% | 0% | 11% | 0–5bb | g6 |
| J8 | bp | 10% | 0% | 0% | 12% | 0–5bb | g6 |
| 98 | bp | 10% | 0% | 0% | 11% | 0–5bb | g6 |
| 87 | bp | 9% | 0% | 0% | 9% | 0–5bb | g6 |
| 86 | bp | 9% | 0% | 0% | 9% | 0–5bb | g6 |
| 77 | spp | 9% | 0% | 0% | 9% | 0–5bb | g6 |
| 55 | spp | 8% | 0% | 0% | 9% | 0–5bb | g6 |
| 66 | spp | 8% | 0% | 0% | 9% | 0–5bb | g6 |
| A4 | bp | 4% | 0% | 0% | 7% | 0–5bb | g6 |
| 43 | bp | 3% | 0% | 0% | 2% | 0–5bb | g6 |
| 54 | bp | 3% | 0% | 0% | 2% | 0–5bb | g6 |
| 64 | bp | 2% | 0% | 0% | 3% | 0–5bb | g6 |
| 33 | spp | 2% | 0% | 0% | 1% | 0–5bb | g6 |
| 22 | spp | 2% | 0% | 0% | 1% | 0–5bb | g6 |
| A9 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g7 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g7 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g7 |
| A7 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g7 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g7 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g7 |
