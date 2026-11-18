# QT7-Jh-Kh river (Q♥ T♦ 7♠ J♥ K♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: AT–A2, T9–T7, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 99% | 99% | 99% | 97% |
| g2 | 25–50bb | Straights | AA, AK–A2 | 88% | 84% | 85% | 51% |
| g3 | 0–5bb | Straights | 99, K9, Q9, J9, T9, 98–96 | 60% | 35% | 35% | 9% |
| g4 | 0–5bb | Sets | KK–TT, 77 | 42% | 9% | 9% | 7% |
| g5 | 0–5bb | Two pair | KQ–KT, K7, QJ, QT, Q7, JT, J7, T7 | 31% | 5% | 5% | 7% |
| g6 | 0–5bb | Top pair, weak kicker | K8, K6–K2 | 18% | 0% | 0% | 7% |
| g7 | 0–5bb | Second pair | Q8, Q6, Q5 | 10% | 0% | 0% | 7% |
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
| 76+fl | flushlo | 99% | 99% | 99% | 96% | 50–100bb | g1 |
| 87+fl | flushlo | 99% | 99% | 99% | 96% | 50–100bb | g1 |
| 75+fl | flushlo | 98% | 99% | 99% | 96% | 50–100bb | g1 |
| T8+fl | flush | 99% | 98% | 98% | 96% | 50–100bb | g1 |
| 97+fl | flush | 99% | 99% | 99% | 95% | 50–100bb | g1 |
| 98+fl | flush | 98% | 97% | 97% | 93% | 50–100bb | g1 |
| 96+fl | flush | 98% | 97% | 97% | 93% | 50–100bb | g1 |
| 86+fl | flushlo | 97% | 97% | 97% | 92% | 50–100bb | g1 |
| 54+fl | flushlo | 97% | 97% | 96% | 91% | 50–100bb | g1 |
| 65+fl | flushlo | 97% | 97% | 97% | 91% | 50–100bb | g1 |
| 64+fl | flushlo | 97% | 97% | 97% | 90% | 50–100bb | g1 |
| 43+fl | flushlo | 97% | 97% | 96% | 90% | 50–100bb | g1 |
| AT | straight | 88% | 84% | 85% | 50% | 25–50bb | g2 |
| AA | straight | 90% | 89% | 89% | 53% | 50–100bb | g2 |
| AQ | straight | 87% | 84% | 84% | 51% | 50–100bb | g2 |
| AK | straight | 87% | 84% | 83% | 51% | 50–100bb | g2 |
| A9 | straight | 87% | 82% | 82% | 51% | 50–100bb | g2 |
| AJ | straight | 88% | 85% | 85% | 51% | 50–100bb | g2 |
| A2 | straight | 87% | 84% | 85% | 51% | 50–100bb | g2 |
| A3 | straight | 87% | 85% | 84% | 50% | 50–100bb | g2 |
| A5 | straight | 88% | 84% | 84% | 50% | 50–100bb | g2 |
| A6 | straight | 88% | 85% | 85% | 50% | 50–100bb | g2 |
| A7 | straight | 88% | 86% | 86% | 50% | 50–100bb | g2 |
| A8 | straight | 87% | 85% | 85% | 50% | 50–100bb | g2 |
| A4 | straight | 88% | 85% | 85% | 50% | 50–100bb | g2 |
| 97 | straight | 62% | 37% | 38% | 7% | 0–5bb | g3 |
| 99 | straight | 62% | 35% | 34% | 8% | 0–5bb | g3 |
| T9 | straight | 61% | 35% | 35% | 9% | 0–5bb | g3 |
| 96 | straight | 61% | 36% | 36% | 8% | 0–5bb | g3 |
| J9 | straight | 60% | 36% | 36% | 9% | 0–5bb | g3 |
| 98 | straight | 59% | 36% | 37% | 8% | 0–5bb | g3 |
| K9 | straight | 59% | 35% | 34% | 9% | 0–5bb | g3 |
| Q9 | straight | 56% | 36% | 36% | 9% | 0–5bb | g3 |
| 77 | twopair | 47% | 11% | 12% | 6% | 0–5bb | g4 |
| TT | twopair | 46% | 6% | 6% | 6% | 0–5bb | g4 |
| KK | twopair | 41% | 8% | 8% | 7% | 0–5bb | g4 |
| JJ | twopair | 41% | 7% | 7% | 8% | 0–5bb | g4 |
| QQ | twopair | 38% | 11% | 11% | 7% | 0–5bb | g4 |
| KQ | twopair | 39% | 9% | 9% | 8% | 0–5bb | g5 |
| KT | twopair | 38% | 5% | 5% | 7% | 0–5bb | g5 |
| KJ | twopair | 37% | 7% | 7% | 7% | 0–5bb | g5 |
| K7 | twopair | 34% | 6% | 6% | 7% | 0–5bb | g5 |
| QJ | twopair | 26% | 4% | 4% | 8% | 0–5bb | g5 |
| Q7 | twopair | 24% | 6% | 5% | 6% | 0–5bb | g5 |
| JT | twopair | 23% | 1% | 2% | 8% | 0–5bb | g5 |
| QT | twopair | 23% | 4% | 4% | 7% | 0–5bb | g5 |
| J7 | twopair | 20% | 0% | 0% | 6% | 0–5bb | g5 |
| T7 | twopair | 19% | 0% | 0% | 5% | 0–5bb | g5 |
| K3 | tpmk | 18% | 0% | 0% | 7% | 0–5bb | g6 |
| K6 | tpmk | 18% | 0% | 0% | 7% | 0–5bb | g6 |
| K2 | tpmk | 18% | 0% | 0% | 7% | 0–5bb | g6 |
| K5 | tpmk | 18% | 0% | 0% | 7% | 0–5bb | g6 |
| K8 | tpmk | 18% | 0% | 0% | 7% | 0–5bb | g6 |
| K4 | tpmk | 18% | 0% | 0% | 7% | 0–5bb | g6 |
| Q8 | mp | 13% | 0% | 0% | 7% | 0–5bb | g7 |
| Q5 | mp | 8% | 0% | 0% | 7% | 0–5bb | g7 |
| Q6 | mp | 8% | 0% | 0% | 6% | 0–5bb | g7 |
| J8 | bp | 4% | 0% | 0% | 7% | 0–5bb | g8 |
| T8 | bp | 3% | 0% | 0% | 6% | 0–5bb | g8 |
| 88 | spp | 2% | 0% | 0% | 4% | 0–5bb | g8 |
| 87 | bp | 1% | 0% | 0% | 1% | 0–5bb | g8 |
| 75 | bp | 1% | 0% | 0% | 1% | 0–5bb | g8 |
| 76 | bp | 1% | 0% | 0% | 1% | 0–5bb | g8 |
| 66 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 55 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 44 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 33 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 22 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
