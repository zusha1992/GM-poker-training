# JT3-6c-Qs@b150 river (J♠ T♠ 3♣ 6♣ Q♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♠ flushes: AK, A9–A2, K9–K2, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 99% | 100% | 100% | 99% |
| g2 | 25–50bb | Straights | AK, K9, 98 | 94% | 98% | 95% | 93% |
| g3 | 15–25bb | Sets | QQ–TT, 66, 33 | 93% | 98% | 95% | 91% |
| g4 | 15–25bb | Two pair | QJ, QT, Q6, JT | 83% | 87% | 60% | 63% |
| g5 | 0–5bb | Overpairs | AA, KK | 71% | 69% | 14% | 39% |
| g6 | 0–5bb | Top pair | AQ, KQ, Q9–Q7, Q5 | 76% | 74% | 7% | 45% |
| g7 | 0–5bb | Second pair | AJ, KJ, J9–J7 | 60% | 52% | 0% | 28% |
| g8 | 0–5bb | Small pairs | 99–77, 55, 44, 22, AT, A6, A3, KT, K6, K3, T9–T7, 96, 86, 76, 65, 64, 43 | 13% | 4% | 0% | 8% |
| g9 | Pot is too big | Ace-high | A9–A7, A5, A4, A2 | 2% | 0% | 0% | 1% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AK+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 98+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| A5+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| A8+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| A6+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| K6+fl | flush | 98% | 100% | 100% | 99% | 50–100bb | g1 |
| 96+fl | flush | 98% | 100% | 100% | 99% | 50–100bb | g1 |
| K7+fl | flush | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| K3+fl | flush | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| 97+fl | flush | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| K8+fl | flush | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| K2+fl | flush | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| K5+fl | flush | 97% | 100% | 100% | 98% | 50–100bb | g1 |
| K4+fl | flush | 97% | 100% | 100% | 98% | 50–100bb | g1 |
| 64+fl | flushlo | 97% | 100% | 100% | 98% | 50–100bb | g1 |
| 76+fl | flushlo | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| 43+fl | flushlo | 97% | 100% | 100% | 98% | 50–100bb | g1 |
| 86+fl | flushlo | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| 65+fl | flushlo | 97% | 100% | 100% | 97% | 50–100bb | g1 |
| 75+fl | flushlo | 97% | 100% | 100% | 97% | 50–100bb | g1 |
| 87+fl | flushlo | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| 54+fl | flushlo | 96% | 98% | 95% | 95% | 50–100bb | g1 |
| AK | straight | 94% | 98% | 95% | 93% | 50–100bb | g2 |
| K9 | straight | 93% | 98% | 95% | 93% | 50–100bb | g2 |
| 98 | straight | 93% | 98% | 95% | 92% | 50–100bb | g2 |
| 33 | twopair | 95% | 99% | 98% | 95% | 50–100bb | g3 |
| 66 | twopair | 94% | 100% | 98% | 93% | 50–100bb | g3 |
| TT | twopair | 92% | 98% | 93% | 92% | 50–100bb | g3 |
| QQ | twopair | 92% | 98% | 90% | 88% | 50–100bb | g3 |
| JJ | twopair | 91% | 97% | 94% | 87% | 50–100bb | g3 |
| QJ | twopair | 90% | 96% | 86% | 78% | 50–100bb | g4 |
| QT | twopair | 85% | 89% | 61% | 61% | 50–100bb | g4 |
| Q6 | twopair | 81% | 84% | 33% | 56% | 50–100bb | g4 |
| JT | twopair | 77% | 77% | 40% | 52% | 50–100bb | g4 |
| AA | op | 72% | 70% | 16% | 42% | 15–25bb | g5 |
| KK | op | 71% | 69% | 11% | 35% | 15–25bb | g5 |
| AQ | tpgk | 76% | 77% | 13% | 47% | 15–25bb | g6 |
| Q9 | tpmk | 76% | 73% | 3% | 44% | 15–25bb | g6 |
| KQ | tpgk | 75% | 73% | 9% | 43% | 15–25bb | g6 |
| Q7 | tpmk | 75% | 72% | 0% | 45% | 15–25bb | g6 |
| Q8 | tpmk | 76% | 72% | 1% | 44% | 15–25bb | g6 |
| Q5 | tpmk | 74% | 71% | 0% | 45% | 15–25bb | g6 |
| AJ | mp | 67% | 61% | 0% | 37% | 15–25bb | g7 |
| J9 | mp | 55% | 46% | 0% | 21% | 0–5bb | g7 |
| KJ | mp | 62% | 54% | 0% | 30% | 5–15bb | g7 |
| J8 | mp | 50% | 42% | 0% | 18% | 0–5bb | g7 |
| J7 | mp | 48% | 39% | 0% | 17% | 0–5bb | g7 |
| AT | bp | 27% | 18% | 0% | 12% | 0–5bb | g8 |
| KT | bp | 22% | 12% | 0% | 11% | 0–5bb | g8 |
| T9 | bp | 18% | 7% | 0% | 9% | 0–5bb | g8 |
| T8 | bp | 17% | 4% | 0% | 9% | 0–5bb | g8 |
| T7 | bp | 14% | 3% | 0% | 9% | 0–5bb | g8 |
| 99 | spp | 11% | 0% | 0% | 8% | 0–5bb | g8 |
| 88 | spp | 11% | 0% | 0% | 8% | 0–5bb | g8 |
| 77 | spp | 10% | 0% | 0% | 8% | 0–5bb | g8 |
| A6 | bp | 9% | 0% | 0% | 6% | 0–5bb | g8 |
| K6 | bp | 9% | 0% | 0% | 7% | 0–5bb | g8 |
| 96 | bp | 9% | 0% | 0% | 7% | 0–5bb | g8 |
| 64 | bp | 9% | 0% | 0% | 6% | 0–5bb | g8 |
| 76 | bp | 9% | 0% | 0% | 6% | 0–5bb | g8 |
| 55 | spp | 9% | 0% | 0% | 6% | 0–5bb | g8 |
| 65 | bp | 8% | 0% | 0% | 6% | 0–5bb | g8 |
| 44 | spp | 8% | 0% | 0% | 6% | 0–5bb | g8 |
| 86 | bp | 8% | 0% | 0% | 6% | 0–5bb | g8 |
| K3 | bp | 7% | 0% | 0% | 4% | 0–5bb | g8 |
| A3 | bp | 6% | 0% | 0% | 4% | 0–5bb | g8 |
| 43 | bp | 5% | 0% | 0% | 4% | 0–5bb | g8 |
| 22 | spp | 4% | 0% | 0% | 3% | 0–5bb | g8 |
| A9 | khnd | 4% | 0% | 0% | 2% | Pot is too big | g9 |
| A8 | khnd | 3% | 0% | 0% | 1% | Pot is too big | g9 |
| A7 | khnd | 2% | 0% | 0% | 1% | Pot is too big | g9 |
| A4 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A2 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A5 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
