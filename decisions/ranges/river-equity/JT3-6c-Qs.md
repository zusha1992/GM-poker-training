# JT3-6c-Qs river (J♠ T♠ 3♣ 6♣ Q♠): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes, straights & sets | QQ–TT, 66, 33, AK, K9, 98 · ♠ flushes: AK, A9–A2, K9–K2, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 95% | 99% | 97% | 89% |
| g2 | 50–100bb | Overpairs | AA | 77% | 68% | 36% | 55% |
| g3 | 50–100bb | Two pair | QJ, QT, Q6, JT | 83% | 81% | 59% | 63% |
| g4 | 50–100bb | Top pair | AQ, KQ, Q9–Q7 | 78% | 69% | 21% | 54% |
| g5 | 15–25bb | Overpairs | KK | 77% | 67% | 33% | 49% |
| g6 | 15–25bb | Top pair, weak kicker | Q5 | 73% | 62% | 0% | 50% |
| g7 | 0–5bb | Second pair | AJ, KJ, J9–J7 | 64% | 45% | 0% | 41% |
| g8 | Pot is too big | Small pairs | 99–77, 55, 44, 22, AT, A6, A3, KT, K6, K3, T9–T7, 96, 86, 76, 65, 64, 43 | 16% | 5% | 0% | 16% |
| g9 | Pot is too big | Ace-high | A9–A7, A5, A4, A2 | 2% | 0% | 0% | 1% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AK+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 98+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A8+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 99% | 98% | 50–100bb | g1 |
| A6+fl | flush | 100% | 100% | 100% | 98% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 99% | 98% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 99% | 98% | 50–100bb | g1 |
| A5+fl | flush | 99% | 100% | 99% | 98% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 99% | 98% | 50–100bb | g1 |
| K6+fl | flush | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| K8+fl | flush | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| K3+fl | flush | 98% | 100% | 99% | 97% | 50–100bb | g1 |
| K7+fl | flush | 99% | 100% | 99% | 97% | 50–100bb | g1 |
| K2+fl | flush | 98% | 100% | 99% | 97% | 50–100bb | g1 |
| 96+fl | flush | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| K4+fl | flush | 98% | 100% | 99% | 97% | 50–100bb | g1 |
| K5+fl | flush | 98% | 100% | 99% | 97% | 50–100bb | g1 |
| 97+fl | flush | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| 86+fl | flushlo | 98% | 100% | 100% | 96% | 50–100bb | g1 |
| 76+fl | flushlo | 98% | 100% | 99% | 96% | 50–100bb | g1 |
| 43+fl | flushlo | 98% | 100% | 99% | 95% | 50–100bb | g1 |
| 65+fl | flushlo | 97% | 100% | 99% | 95% | 50–100bb | g1 |
| 64+fl | flushlo | 97% | 100% | 100% | 95% | 50–100bb | g1 |
| 87+fl | flushlo | 97% | 100% | 100% | 95% | 50–100bb | g1 |
| 75+fl | flushlo | 97% | 100% | 99% | 94% | 50–100bb | g1 |
| 54+fl | flushlo | 96% | 99% | 99% | 93% | 50–100bb | g1 |
| AK | straight | 94% | 99% | 99% | 90% | 50–100bb | g1 |
| K9 | straight | 94% | 99% | 99% | 87% | 50–100bb | g1 |
| 98 | straight | 93% | 99% | 97% | 85% | 50–100bb | g1 |
| 33 | twopair | 93% | 97% | 93% | 80% | 50–100bb | g1 |
| 66 | twopair | 92% | 97% | 94% | 80% | 50–100bb | g1 |
| TT | twopair | 89% | 95% | 92% | 76% | 50–100bb | g1 |
| QQ | twopair | 90% | 95% | 82% | 75% | 50–100bb | g1 |
| JJ | twopair | 89% | 95% | 92% | 75% | 50–100bb | g1 |
| AA | op | 77% | 68% | 36% | 55% | 50–100bb | g2 |
| QJ | twopair | 88% | 92% | 81% | 72% | 50–100bb | g3 |
| QT | twopair | 83% | 80% | 54% | 62% | 50–100bb | g3 |
| JT | twopair | 78% | 72% | 46% | 58% | 50–100bb | g3 |
| Q6 | twopair | 82% | 77% | 40% | 57% | 50–100bb | g3 |
| AQ | tpgk | 81% | 73% | 34% | 59% | 50–100bb | g4 |
| KQ | tpgk | 78% | 70% | 25% | 53% | 50–100bb | g4 |
| Q8 | tpmk | 75% | 61% | 1% | 53% | 50–100bb | g4 |
| Q9 | tpmk | 77% | 65% | 8% | 51% | 50–100bb | g4 |
| Q7 | tpmk | 74% | 60% | 0% | 50% | 50–100bb | g4 |
| KK | op | 77% | 67% | 33% | 49% | 15–25bb | g5 |
| Q5 | tpmk | 73% | 62% | 0% | 50% | 15–25bb | g6 |
| AJ | mp | 69% | 48% | 0% | 44% | 0–5bb | g7 |
| KJ | mp | 65% | 47% | 0% | 41% | 0–5bb | g7 |
| J9 | mp | 61% | 42% | 0% | 37% | 0–5bb | g7 |
| J8 | mp | 57% | 38% | 0% | 36% | 0–5bb | g7 |
| J7 | mp | 55% | 37% | 0% | 36% | 0–5bb | g7 |
| AT | bp | 36% | 20% | 0% | 30% | Pot is too big | g8 |
| KT | bp | 32% | 15% | 0% | 28% | Pot is too big | g8 |
| T9 | bp | 27% | 9% | 0% | 21% | Pot is too big | g8 |
| T8 | bp | 22% | 4% | 0% | 20% | Pot is too big | g8 |
| T7 | bp | 20% | 2% | 0% | 20% | Pot is too big | g8 |
| 99 | spp | 16% | 0% | 0% | 17% | Pot is too big | g8 |
| 88 | spp | 14% | 0% | 0% | 15% | Pot is too big | g8 |
| 77 | spp | 11% | 0% | 0% | 16% | Pot is too big | g8 |
| 96 | bp | 10% | 0% | 0% | 12% | Pot is too big | g8 |
| A6 | bp | 10% | 0% | 0% | 14% | Pot is too big | g8 |
| K6 | bp | 9% | 0% | 0% | 14% | Pot is too big | g8 |
| 86 | bp | 9% | 0% | 0% | 12% | Pot is too big | g8 |
| 76 | bp | 8% | 0% | 0% | 12% | Pot is too big | g8 |
| 64 | bp | 8% | 0% | 0% | 11% | Pot is too big | g8 |
| 65 | bp | 8% | 0% | 0% | 11% | Pot is too big | g8 |
| 55 | spp | 8% | 0% | 0% | 11% | Pot is too big | g8 |
| 44 | spp | 8% | 0% | 0% | 11% | Pot is too big | g8 |
| A3 | bp | 6% | 0% | 0% | 8% | Pot is too big | g8 |
| K3 | bp | 5% | 0% | 0% | 7% | Pot is too big | g8 |
| 43 | bp | 4% | 0% | 0% | 5% | Pot is too big | g8 |
| 22 | spp | 4% | 0% | 0% | 3% | Pot is too big | g8 |
| A9 | khnd | 2% | 0% | 0% | 2% | Pot is too big | g9 |
| A8 | khnd | 2% | 0% | 0% | 1% | Pot is too big | g9 |
| A7 | khnd | 2% | 0% | 0% | 1% | Pot is too big | g9 |
| A4 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A5 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A2 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
