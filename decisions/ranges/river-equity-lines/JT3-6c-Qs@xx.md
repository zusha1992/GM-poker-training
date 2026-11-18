# JT3-6c-Qs@xx river (J♠ T♠ 3♣ 6♣ Q♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♠ flushes: AK, A9–A2, K9–K2, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 98% | 99% | 99% | 93% |
| g2 | 25–50bb | Straights | AK, K9, 98 | 91% | 97% | 94% | 74% |
| g3 | 15–25bb | Sets | QQ–TT, 66, 33 | 86% | 90% | 76% | 72% |
| g4 | 15–25bb | Two pair | QJ, QT, Q6, JT | 82% | 84% | 61% | 72% |
| g5 | 0–5bb | Overpairs | AA, KK | 75% | 76% | 46% | 70% |
| g6 | 0–5bb | Top pair | AQ, KQ, Q9–Q7, Q5 | 76% | 75% | 32% | 71% |
| g7 | 0–5bb | Second pair | AJ, KJ, J9–J7 | 68% | 48% | 0% | 70% |
| g8 | 0–5bb | Small pairs | 99–77, 55, 44, 22, AT, A6, A3, KT, K6, K3, T9–T7, 96, 86, 76, 65, 64, 43 | 46% | 11% | 0% | 63% |
| g9 | Pot is too big | Ace-high | A9–A7, A5, A4, A2 | 20% | 1% | 0% | 33% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AK+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 98+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A8+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| A6+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| A5+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| A7+fl | flush | 100% | 99% | 99% | 99% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| K3+fl | flush | 98% | 99% | 98% | 92% | 50–100bb | g1 |
| K6+fl | flush | 98% | 99% | 99% | 92% | 50–100bb | g1 |
| K8+fl | flush | 98% | 99% | 98% | 92% | 50–100bb | g1 |
| K2+fl | flush | 98% | 99% | 98% | 91% | 50–100bb | g1 |
| K7+fl | flush | 98% | 99% | 98% | 91% | 50–100bb | g1 |
| K4+fl | flush | 98% | 99% | 98% | 91% | 50–100bb | g1 |
| K5+fl | flush | 98% | 99% | 98% | 91% | 50–100bb | g1 |
| 97+fl | flush | 97% | 99% | 99% | 89% | 50–100bb | g1 |
| 96+fl | flush | 97% | 100% | 99% | 88% | 50–100bb | g1 |
| 76+fl | flushlo | 97% | 99% | 98% | 88% | 50–100bb | g1 |
| 86+fl | flushlo | 97% | 99% | 98% | 88% | 50–100bb | g1 |
| 87+fl | flushlo | 97% | 99% | 97% | 87% | 50–100bb | g1 |
| 65+fl | flushlo | 96% | 99% | 98% | 86% | 50–100bb | g1 |
| 75+fl | flushlo | 96% | 99% | 97% | 85% | 50–100bb | g1 |
| 64+fl | flushlo | 96% | 99% | 98% | 84% | 50–100bb | g1 |
| 54+fl | flushlo | 95% | 98% | 96% | 81% | 50–100bb | g1 |
| 43+fl | flushlo | 94% | 99% | 97% | 80% | 50–100bb | g1 |
| K9 | straight | 90% | 97% | 93% | 75% | 50–100bb | g2 |
| AK | straight | 92% | 98% | 96% | 74% | 50–100bb | g2 |
| 98 | straight | 87% | 94% | 86% | 70% | 50–100bb | g2 |
| 66 | twopair | 88% | 92% | 81% | 73% | 50–100bb | g3 |
| 33 | twopair | 87% | 91% | 80% | 73% | 50–100bb | g3 |
| JJ | twopair | 86% | 89% | 78% | 73% | 50–100bb | g3 |
| TT | twopair | 85% | 89% | 79% | 72% | 50–100bb | g3 |
| QQ | twopair | 86% | 90% | 66% | 72% | 50–100bb | g3 |
| QT | twopair | 82% | 84% | 59% | 73% | 50–100bb | g4 |
| JT | twopair | 79% | 79% | 58% | 72% | 50–100bb | g4 |
| QJ | twopair | 84% | 87% | 69% | 72% | 50–100bb | g4 |
| Q6 | twopair | 81% | 84% | 56% | 70% | 50–100bb | g4 |
| KK | op | 77% | 77% | 46% | 72% | 50–100bb | g5 |
| AA | op | 73% | 75% | 46% | 68% | 50–100bb | g5 |
| KQ | tpgk | 77% | 78% | 39% | 72% | 50–100bb | g6 |
| Q9 | tpmk | 75% | 74% | 29% | 71% | 50–100bb | g6 |
| Q7 | tpmk | 73% | 68% | 14% | 70% | 50–100bb | g6 |
| AQ | tpgk | 76% | 76% | 40% | 70% | 50–100bb | g6 |
| Q5 | tpmk | 72% | 68% | 11% | 70% | 50–100bb | g6 |
| Q8 | tpmk | 75% | 69% | 19% | 70% | 50–100bb | g6 |
| KJ | mp | 69% | 51% | 0% | 71% | 50–100bb | g7 |
| J9 | mp | 68% | 46% | 0% | 70% | 50–100bb | g7 |
| AJ | mp | 69% | 50% | 0% | 69% | 50–100bb | g7 |
| J7 | mp | 65% | 42% | 0% | 69% | 50–100bb | g7 |
| J8 | mp | 64% | 43% | 0% | 68% | 50–100bb | g7 |
| 88 | spp | 47% | 8% | 0% | 68% | 50–100bb | g8 |
| AT | bp | 58% | 23% | 0% | 68% | 50–100bb | g8 |
| T9 | bp | 55% | 17% | 0% | 68% | 50–100bb | g8 |
| 99 | spp | 51% | 8% | 0% | 68% | 50–100bb | g8 |
| KT | bp | 59% | 22% | 0% | 68% | 50–100bb | g8 |
| 77 | spp | 45% | 8% | 0% | 67% | 50–100bb | g8 |
| T8 | bp | 53% | 13% | 0% | 67% | 50–100bb | g8 |
| T7 | bp | 52% | 11% | 0% | 67% | 50–100bb | g8 |
| A6 | bp | 43% | 6% | 0% | 66% | 50–100bb | g8 |
| K6 | bp | 45% | 6% | 0% | 65% | 50–100bb | g8 |
| 96 | bp | 45% | 5% | 0% | 62% | 50–100bb | g8 |
| 76 | bp | 43% | 6% | 0% | 60% | 50–100bb | g8 |
| 86 | bp | 43% | 5% | 0% | 60% | 50–100bb | g8 |
| 64 | bp | 41% | 6% | 0% | 59% | 50–100bb | g8 |
| 65 | bp | 41% | 6% | 0% | 58% | 50–100bb | g8 |
| 44 | spp | 36% | 5% | 0% | 56% | 50–100bb | g8 |
| 55 | spp | 38% | 6% | 0% | 54% | 50–100bb | g8 |
| A3 | bp | 34% | 4% | 0% | 54% | 50–100bb | g8 |
| K3 | bp | 35% | 5% | 0% | 53% | 50–100bb | g8 |
| 43 | bp | 35% | 5% | 0% | 51% | 50–100bb | g8 |
| 22 | spp | 33% | 5% | 0% | 48% | 0–5bb | g8 |
| A9 | khnd | 28% | 2% | 0% | 44% | Pot is too big | g9 |
| A8 | khnd | 24% | 1% | 0% | 38% | Pot is too big | g9 |
| A7 | khnd | 21% | 0% | 0% | 33% | Pot is too big | g9 |
| A2 | khnd | 16% | 0% | 0% | 28% | Pot is too big | g9 |
| A4 | khnd | 16% | 0% | 0% | 29% | Pot is too big | g9 |
| A5 | khnd | 15% | 0% | 0% | 27% | Pot is too big | g9 |
