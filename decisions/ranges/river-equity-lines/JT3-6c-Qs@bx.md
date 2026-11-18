# JT3-6c-Qs@bx river (J♠ T♠ 3♣ 6♣ Q♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♠ flushes: AK, A9–A2, K9–K2, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 99% | 100% | 99% | 96% |
| g2 | 25–50bb | Straights | AK, K9, 98 | 93% | 98% | 96% | 82% |
| g3 | 15–25bb | Sets | QQ–TT, 66, 33 | 87% | 90% | 76% | 61% |
| g4 | 15–25bb | Two pair | QJ, QT, Q6, JT | 81% | 78% | 50% | 58% |
| g5 | 0–5bb | Overpairs | AA, KK | 76% | 68% | 32% | 58% |
| g6 | 0–5bb | Top pair | AQ, KQ, Q9–Q7, Q5 | 76% | 68% | 20% | 58% |
| g7 | 0–5bb | Second pair | AJ, KJ, J9–J7 | 65% | 45% | 0% | 53% |
| g8 | 0–5bb | Small pairs | 99–77, 55, 44, 22, AT, A6, A3, KT, K6, K3, T9–T7, 96, 86, 76, 65, 64, 43 | 32% | 5% | 0% | 34% |
| g9 | Pot is too big | Ace-high | A9–A7, A5, A4, A2 | 6% | 0% | 0% | 8% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AK+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 98+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A8+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| A5+fl | flush | 100% | 99% | 99% | 99% | 50–100bb | g1 |
| A6+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| A4+fl | flush | 99% | 100% | 99% | 99% | 50–100bb | g1 |
| A7+fl | flush | 100% | 99% | 99% | 99% | 50–100bb | g1 |
| A3+fl | flush | 100% | 99% | 99% | 99% | 50–100bb | g1 |
| A2+fl | flush | 100% | 99% | 99% | 98% | 50–100bb | g1 |
| K3+fl | flush | 98% | 100% | 99% | 96% | 50–100bb | g1 |
| K7+fl | flush | 98% | 100% | 99% | 95% | 50–100bb | g1 |
| K4+fl | flush | 98% | 100% | 99% | 95% | 50–100bb | g1 |
| K8+fl | flush | 99% | 100% | 100% | 95% | 50–100bb | g1 |
| K6+fl | flush | 98% | 100% | 99% | 95% | 50–100bb | g1 |
| K2+fl | flush | 98% | 100% | 99% | 95% | 50–100bb | g1 |
| 97+fl | flush | 98% | 100% | 100% | 94% | 50–100bb | g1 |
| K5+fl | flush | 98% | 100% | 100% | 94% | 50–100bb | g1 |
| 96+fl | flush | 98% | 100% | 100% | 93% | 50–100bb | g1 |
| 43+fl | flushlo | 97% | 99% | 98% | 93% | 50–100bb | g1 |
| 87+fl | flushlo | 97% | 100% | 99% | 93% | 50–100bb | g1 |
| 76+fl | flushlo | 97% | 99% | 99% | 92% | 50–100bb | g1 |
| 86+fl | flushlo | 98% | 100% | 99% | 92% | 50–100bb | g1 |
| 65+fl | flushlo | 97% | 99% | 98% | 92% | 50–100bb | g1 |
| 75+fl | flushlo | 97% | 99% | 99% | 92% | 50–100bb | g1 |
| 64+fl | flushlo | 96% | 99% | 99% | 91% | 50–100bb | g1 |
| 54+fl | flushlo | 96% | 99% | 98% | 90% | 50–100bb | g1 |
| AK | straight | 94% | 99% | 98% | 86% | 50–100bb | g2 |
| K9 | straight | 93% | 98% | 95% | 79% | 50–100bb | g2 |
| 98 | straight | 89% | 94% | 88% | 67% | 50–100bb | g2 |
| 66 | twopair | 88% | 91% | 79% | 62% | 50–100bb | g3 |
| QQ | twopair | 86% | 90% | 66% | 62% | 50–100bb | g3 |
| JJ | twopair | 86% | 89% | 79% | 62% | 50–100bb | g3 |
| TT | twopair | 86% | 90% | 79% | 59% | 50–100bb | g3 |
| 33 | twopair | 88% | 88% | 76% | 58% | 50–100bb | g3 |
| Q6 | twopair | 81% | 77% | 39% | 61% | 50–100bb | g4 |
| QJ | twopair | 84% | 84% | 63% | 59% | 50–100bb | g4 |
| QT | twopair | 82% | 77% | 47% | 59% | 50–100bb | g4 |
| JT | twopair | 77% | 71% | 43% | 57% | 50–100bb | g4 |
| KK | op | 77% | 68% | 32% | 63% | 50–100bb | g5 |
| AA | op | 74% | 68% | 33% | 53% | 50–100bb | g5 |
| Q9 | tpmk | 75% | 67% | 16% | 59% | 50–100bb | g6 |
| KQ | tpgk | 77% | 71% | 27% | 59% | 50–100bb | g6 |
| Q5 | tpmk | 73% | 62% | 3% | 57% | 50–100bb | g6 |
| Q8 | tpmk | 73% | 63% | 7% | 56% | 50–100bb | g6 |
| AQ | tpgk | 77% | 70% | 28% | 56% | 50–100bb | g6 |
| Q7 | tpmk | 72% | 63% | 3% | 55% | 50–100bb | g6 |
| J8 | mp | 61% | 36% | 0% | 49% | 0–5bb | g7 |
| J7 | mp | 59% | 36% | 0% | 47% | 0–5bb | g7 |
| KJ | mp | 67% | 47% | 0% | 54% | 50–100bb | g7 |
| J9 | mp | 63% | 42% | 0% | 54% | 50–100bb | g7 |
| AJ | mp | 66% | 49% | 0% | 54% | 50–100bb | g7 |
| AT | bp | 50% | 19% | 0% | 45% | 0–5bb | g8 |
| KT | bp | 48% | 15% | 0% | 45% | 0–5bb | g8 |
| T9 | bp | 43% | 9% | 0% | 42% | 0–5bb | g8 |
| T8 | bp | 39% | 4% | 0% | 39% | 0–5bb | g8 |
| T7 | bp | 37% | 2% | 0% | 37% | 0–5bb | g8 |
| 99 | spp | 36% | 0% | 0% | 42% | 0–5bb | g8 |
| 88 | spp | 33% | 0% | 0% | 36% | 0–5bb | g8 |
| K6 | bp | 30% | 0% | 0% | 31% | 0–5bb | g8 |
| 96 | bp | 29% | 0% | 0% | 31% | 0–5bb | g8 |
| 77 | spp | 29% | 0% | 0% | 32% | 0–5bb | g8 |
| 76 | bp | 28% | 0% | 0% | 29% | 0–5bb | g8 |
| 86 | bp | 28% | 0% | 0% | 31% | 0–5bb | g8 |
| A6 | bp | 28% | 0% | 0% | 29% | 0–5bb | g8 |
| 64 | bp | 27% | 0% | 0% | 30% | 0–5bb | g8 |
| 65 | bp | 26% | 0% | 0% | 29% | 0–5bb | g8 |
| 55 | spp | 23% | 0% | 0% | 27% | 0–5bb | g8 |
| 44 | spp | 21% | 0% | 0% | 27% | 0–5bb | g8 |
| K3 | bp | 19% | 0% | 0% | 23% | 0–5bb | g8 |
| A3 | bp | 18% | 0% | 0% | 25% | 0–5bb | g8 |
| 43 | bp | 17% | 0% | 0% | 20% | 0–5bb | g8 |
| 22 | spp | 15% | 0% | 0% | 15% | 0–5bb | g8 |
| A9 | khnd | 11% | 0% | 0% | 12% | Pot is too big | g9 |
| A8 | khnd | 7% | 0% | 0% | 10% | Pot is too big | g9 |
| A7 | khnd | 6% | 0% | 0% | 7% | Pot is too big | g9 |
| A2 | khnd | 5% | 0% | 0% | 6% | Pot is too big | g9 |
| A5 | khnd | 5% | 0% | 0% | 6% | Pot is too big | g9 |
| A4 | khnd | 4% | 0% | 0% | 7% | Pot is too big | g9 |
