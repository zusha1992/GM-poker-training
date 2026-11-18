# QT7-Jh-Kh@b75 river (Q♥ T♦ 7♠ J♥ K♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: AT–A2, T9–T7, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 99% | 99% | 99% | 97% |
| g2 | 25–50bb | A-high straights | AA, AK–A2 | 87% | 86% | 85% | 54% |
| g3 | 0–5bb | K-high straights | 99, K9, Q9, J9, T9, 98–96 | 59% | 34% | 34% | 10% |
| g4 | 0–5bb | Sets | KK–TT, 77 | 41% | 4% | 4% | 7% |
| g5 | 0–5bb | Two pair | KQ–KT, K7, QJ, QT, Q7, JT, J7, T7 | 28% | 3% | 3% | 7% |
| g6 | 0–5bb | Top pair, weak kicker | K8, K6–K2 | 15% | 0% | 0% | 7% |
| g7 | 0–5bb | Second pair | Q8, Q6, Q5 | 8% | 0% | 0% | 7% |
| g8 | 0–5bb | Small pairs | 88, 66–22, J8, T8, 87, 76, 75 | 1% | 0% | 0% | 1% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A6+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A5+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| T9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| T7+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| T8+fl | flush | 99% | 98% | 98% | 97% | 50–100bb | g1 |
| 97+fl | flush | 98% | 99% | 99% | 96% | 50–100bb | g1 |
| 75+fl | flushlo | 98% | 99% | 99% | 96% | 50–100bb | g1 |
| 87+fl | flushlo | 99% | 99% | 99% | 96% | 50–100bb | g1 |
| 76+fl | flushlo | 99% | 99% | 99% | 96% | 50–100bb | g1 |
| 96+fl | flush | 98% | 98% | 98% | 95% | 50–100bb | g1 |
| 98+fl | flush | 98% | 98% | 98% | 93% | 50–100bb | g1 |
| 86+fl | flushlo | 97% | 97% | 97% | 92% | 50–100bb | g1 |
| 65+fl | flushlo | 97% | 97% | 97% | 91% | 50–100bb | g1 |
| 54+fl | flushlo | 97% | 97% | 97% | 91% | 50–100bb | g1 |
| 64+fl | flushlo | 97% | 97% | 97% | 91% | 50–100bb | g1 |
| 43+fl | flushlo | 97% | 97% | 97% | 91% | 50–100bb | g1 |
| AA | straight | 90% | 89% | 89% | 56% | 50–100bb | g2 |
| A7 | straight | 89% | 87% | 87% | 54% | 50–100bb | g2 |
| A6 | straight | 87% | 85% | 86% | 54% | 50–100bb | g2 |
| AK | straight | 87% | 85% | 85% | 54% | 50–100bb | g2 |
| AJ | straight | 87% | 86% | 86% | 54% | 50–100bb | g2 |
| A8 | straight | 87% | 86% | 85% | 54% | 50–100bb | g2 |
| A2 | straight | 87% | 86% | 86% | 54% | 50–100bb | g2 |
| A4 | straight | 87% | 86% | 86% | 54% | 50–100bb | g2 |
| A9 | straight | 86% | 83% | 83% | 54% | 50–100bb | g2 |
| AQ | straight | 87% | 85% | 85% | 53% | 50–100bb | g2 |
| A5 | straight | 88% | 86% | 85% | 53% | 50–100bb | g2 |
| A3 | straight | 88% | 86% | 85% | 53% | 50–100bb | g2 |
| AT | straight | 88% | 85% | 85% | 53% | 50–100bb | g2 |
| 99 | straight | 61% | 31% | 31% | 10% | 0–5bb | g3 |
| 97 | straight | 61% | 36% | 36% | 9% | 0–5bb | g3 |
| T9 | straight | 61% | 33% | 34% | 10% | 0–5bb | g3 |
| 98 | straight | 60% | 35% | 35% | 10% | 0–5bb | g3 |
| 96 | straight | 60% | 35% | 35% | 10% | 0–5bb | g3 |
| J9 | straight | 58% | 35% | 35% | 11% | 0–5bb | g3 |
| K9 | straight | 58% | 35% | 35% | 10% | 0–5bb | g3 |
| Q9 | straight | 58% | 34% | 34% | 10% | 0–5bb | g3 |
| 77 | twopair | 45% | 5% | 5% | 6% | 0–5bb | g4 |
| TT | twopair | 44% | 3% | 2% | 7% | 0–5bb | g4 |
| KK | twopair | 39% | 4% | 4% | 7% | 0–5bb | g4 |
| JJ | twopair | 39% | 3% | 4% | 9% | 0–5bb | g4 |
| QQ | twopair | 37% | 6% | 6% | 8% | 0–5bb | g4 |
| KQ | twopair | 38% | 5% | 6% | 7% | 0–5bb | g5 |
| KJ | twopair | 36% | 4% | 4% | 8% | 0–5bb | g5 |
| KT | twopair | 35% | 3% | 3% | 6% | 0–5bb | g5 |
| K7 | twopair | 34% | 3% | 4% | 6% | 0–5bb | g5 |
| QJ | twopair | 22% | 3% | 3% | 8% | 0–5bb | g5 |
| JT | twopair | 21% | 1% | 1% | 8% | 0–5bb | g5 |
| QT | twopair | 20% | 3% | 2% | 7% | 0–5bb | g5 |
| Q7 | twopair | 20% | 4% | 4% | 6% | 0–5bb | g5 |
| J7 | twopair | 16% | 0% | 0% | 7% | 0–5bb | g5 |
| T7 | twopair | 15% | 0% | 0% | 5% | 0–5bb | g5 |
| K6 | tpmk | 15% | 0% | 0% | 7% | 0–5bb | g6 |
| K4 | tpmk | 15% | 0% | 0% | 7% | 0–5bb | g6 |
| K2 | tpmk | 14% | 0% | 0% | 8% | 0–5bb | g6 |
| K8 | tpmk | 14% | 0% | 0% | 7% | 0–5bb | g6 |
| K3 | tpmk | 14% | 0% | 0% | 6% | 0–5bb | g6 |
| K5 | tpmk | 14% | 0% | 0% | 6% | 0–5bb | g6 |
| Q8 | mp | 11% | 0% | 0% | 7% | 0–5bb | g7 |
| Q5 | mp | 6% | 0% | 0% | 6% | 0–5bb | g7 |
| Q6 | mp | 6% | 0% | 0% | 7% | 0–5bb | g7 |
| J8 | bp | 4% | 0% | 0% | 7% | 0–5bb | g8 |
| T8 | bp | 3% | 0% | 0% | 5% | 0–5bb | g8 |
| 88 | spp | 2% | 0% | 0% | 3% | 0–5bb | g8 |
| 87 | bp | 1% | 0% | 0% | 1% | 0–5bb | g8 |
| 75 | bp | 0% | 0% | 0% | 1% | 0–5bb | g8 |
| 76 | bp | 0% | 0% | 0% | 1% | 0–5bb | g8 |
| 66 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 55 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 44 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 33 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 22 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
