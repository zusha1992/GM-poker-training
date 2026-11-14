# JT3-6c-Qs river (J♠ T♠ 3♣ 6♣ Q♠): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes, straights & sets | QQ–TT, 66, 33, AK, K9, 98 · ♠ flushes: AK, A9–A2, K9–K2, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 95% | 99% | 97% | 90% |
| g2 | 15–25bb | Two pair | QJ, QT, Q6, JT | 84% | 81% | 59% | 64% |
| g3 | 0–5bb | Overpairs | AA, KK | 77% | 67% | 34% | 52% |
| g4 | 0–5bb | Top pair | AQ, KQ, Q9–Q7, Q5 | 78% | 68% | 20% | 54% |
| g5 | 0–5bb | Second pair | AJ, KJ, J9–J7 | 63% | 45% | 0% | 41% |
| g6 | 0–5bb | Small pairs | 99–77, 55, 44, 22, AT, A6, A3, KT, K6, K3, T9–T7, 96, 86, 76, 65, 64, 43 | 16% | 5% | 0% | 16% |
| g7 | Pot is too big | Ace-high | A9–A7, A5, A4, A2 | 2% | 0% | 0% | 1% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AK+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 98+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A8+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| A5+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 99% | 98% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 99% | 98% | 50–100bb | g1 |
| A6+fl | flush | 99% | 100% | 99% | 98% | 50–100bb | g1 |
| K8+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| K3+fl | flush | 99% | 100% | 99% | 97% | 50–100bb | g1 |
| K6+fl | flush | 99% | 100% | 100% | 97% | 50–100bb | g1 |
| K4+fl | flush | 98% | 100% | 99% | 97% | 50–100bb | g1 |
| K7+fl | flush | 98% | 100% | 99% | 97% | 50–100bb | g1 |
| 96+fl | flush | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| 97+fl | flush | 98% | 100% | 100% | 96% | 50–100bb | g1 |
| K2+fl | flush | 99% | 100% | 99% | 96% | 50–100bb | g1 |
| K5+fl | flush | 98% | 100% | 99% | 96% | 50–100bb | g1 |
| 86+fl | flushlo | 98% | 100% | 100% | 96% | 50–100bb | g1 |
| 65+fl | flushlo | 98% | 100% | 99% | 96% | 50–100bb | g1 |
| 43+fl | flushlo | 98% | 100% | 99% | 96% | 50–100bb | g1 |
| 87+fl | flushlo | 98% | 100% | 100% | 95% | 50–100bb | g1 |
| 64+fl | flushlo | 98% | 100% | 100% | 95% | 50–100bb | g1 |
| 76+fl | flushlo | 98% | 100% | 100% | 95% | 50–100bb | g1 |
| 75+fl | flushlo | 97% | 100% | 99% | 94% | 50–100bb | g1 |
| 54+fl | flushlo | 96% | 99% | 99% | 93% | 50–100bb | g1 |
| AK | straight | 95% | 99% | 99% | 90% | 50–100bb | g1 |
| K9 | straight | 94% | 99% | 98% | 89% | 50–100bb | g1 |
| 98 | straight | 93% | 99% | 97% | 85% | 50–100bb | g1 |
| 33 | twopair | 94% | 97% | 93% | 81% | 50–100bb | g1 |
| 66 | twopair | 92% | 97% | 94% | 81% | 50–100bb | g1 |
| TT | twopair | 88% | 96% | 92% | 75% | 50–100bb | g1 |
| QQ | twopair | 90% | 96% | 82% | 74% | 50–100bb | g1 |
| JJ | twopair | 90% | 96% | 91% | 74% | 50–100bb | g1 |
| QJ | twopair | 89% | 92% | 80% | 72% | 50–100bb | g2 |
| QT | twopair | 84% | 81% | 54% | 63% | 50–100bb | g2 |
| Q6 | twopair | 82% | 76% | 40% | 60% | 50–100bb | g2 |
| JT | twopair | 78% | 72% | 46% | 58% | 50–100bb | g2 |
| KK | op | 77% | 67% | 31% | 50% | 15–25bb | g3 |
| AA | op | 77% | 67% | 36% | 55% | 50–100bb | g3 |
| Q5 | tpmk | 75% | 60% | 0% | 50% | 5–15bb | g4 |
| AQ | tpgk | 80% | 74% | 36% | 59% | 50–100bb | g4 |
| KQ | tpgk | 78% | 70% | 26% | 54% | 50–100bb | g4 |
| Q8 | tpmk | 76% | 61% | 1% | 52% | 50–100bb | g4 |
| Q7 | tpmk | 74% | 61% | 0% | 52% | 50–100bb | g4 |
| Q9 | tpmk | 77% | 64% | 9% | 51% | 50–100bb | g4 |
| AJ | mp | 66% | 48% | 0% | 45% | 0–5bb | g5 |
| KJ | mp | 65% | 47% | 0% | 41% | 0–5bb | g5 |
| J9 | mp | 60% | 41% | 0% | 38% | 0–5bb | g5 |
| J8 | mp | 56% | 38% | 0% | 37% | 0–5bb | g5 |
| J7 | mp | 55% | 37% | 0% | 35% | 0–5bb | g5 |
| AT | bp | 37% | 21% | 0% | 30% | 0–5bb | g6 |
| KT | bp | 32% | 16% | 0% | 27% | 0–5bb | g6 |
| T9 | bp | 26% | 9% | 0% | 21% | 0–5bb | g6 |
| T8 | bp | 21% | 4% | 0% | 20% | 0–5bb | g6 |
| T7 | bp | 19% | 3% | 0% | 20% | 0–5bb | g6 |
| 99 | spp | 17% | 0% | 0% | 18% | 0–5bb | g6 |
| 88 | spp | 13% | 0% | 0% | 16% | 0–5bb | g6 |
| 77 | spp | 11% | 0% | 0% | 16% | 0–5bb | g6 |
| K6 | bp | 10% | 0% | 0% | 14% | 0–5bb | g6 |
| 86 | bp | 9% | 0% | 0% | 13% | 0–5bb | g6 |
| A6 | bp | 9% | 0% | 0% | 13% | 0–5bb | g6 |
| 76 | bp | 9% | 0% | 0% | 12% | 0–5bb | g6 |
| 96 | bp | 9% | 0% | 0% | 13% | 0–5bb | g6 |
| 65 | bp | 8% | 0% | 0% | 11% | 0–5bb | g6 |
| 55 | spp | 8% | 0% | 0% | 11% | 0–5bb | g6 |
| 64 | bp | 8% | 0% | 0% | 12% | 0–5bb | g6 |
| 44 | spp | 8% | 0% | 0% | 11% | 0–5bb | g6 |
| A3 | bp | 6% | 0% | 0% | 8% | 0–5bb | g6 |
| K3 | bp | 5% | 0% | 0% | 7% | 0–5bb | g6 |
| 43 | bp | 5% | 0% | 0% | 5% | 0–5bb | g6 |
| 22 | spp | 3% | 0% | 0% | 3% | 0–5bb | g6 |
| A9 | khnd | 2% | 0% | 0% | 2% | Pot is too big | g7 |
| A8 | khnd | 2% | 0% | 0% | 1% | Pot is too big | g7 |
| A7 | khnd | 2% | 0% | 0% | 1% | Pot is too big | g7 |
| A4 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g7 |
| A2 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g7 |
| A5 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g7 |
