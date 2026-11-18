# QT7-Jh-Kh@x75 river (Q♥ T♦ 7♠ J♥ K♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: AT–A2, T9–T7, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 99% | 98% | 98% | 96% |
| g2 | 25–50bb | A-high straights | AA, AK–A2 | 87% | 80% | 80% | 51% |
| g3 | 0–5bb | K-high straights | 99, K9, Q9, J9, T9, 98–96 | 65% | 34% | 34% | 13% |
| g4 | 0–5bb | Sets | KK–TT, 77 | 51% | 13% | 13% | 10% |
| g5 | 0–5bb | Two pair | KQ–KT, K7, QJ, QT, Q7, JT, J7, T7 | 40% | 6% | 6% | 11% |
| g6 | 0–5bb | Top pair, weak kicker | K8, K6–K2 | 28% | 0% | 0% | 9% |
| g7 | 0–5bb | Second pair | Q8, Q6, Q5 | 22% | 0% | 0% | 8% |
| g8 | 0–5bb | Small pairs | 88, 66–22, J8, T8, 87, 76, 75 | 2% | 0% | 0% | 2% |

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
| T7+fl | flush | 99% | 97% | 98% | 96% | 50–100bb | g1 |
| T8+fl | flush | 98% | 96% | 96% | 95% | 50–100bb | g1 |
| 87+fl | flushlo | 98% | 97% | 97% | 94% | 50–100bb | g1 |
| 97+fl | flush | 98% | 97% | 97% | 93% | 50–100bb | g1 |
| 76+fl | flushlo | 98% | 98% | 97% | 93% | 50–100bb | g1 |
| 75+fl | flushlo | 98% | 97% | 97% | 92% | 50–100bb | g1 |
| 98+fl | flush | 97% | 97% | 96% | 91% | 50–100bb | g1 |
| 96+fl | flush | 97% | 96% | 97% | 91% | 50–100bb | g1 |
| 86+fl | flushlo | 97% | 96% | 96% | 89% | 50–100bb | g1 |
| 65+fl | flushlo | 96% | 95% | 95% | 87% | 50–100bb | g1 |
| 54+fl | flushlo | 96% | 95% | 95% | 87% | 50–100bb | g1 |
| 64+fl | flushlo | 96% | 96% | 96% | 87% | 50–100bb | g1 |
| 43+fl | flushlo | 96% | 96% | 95% | 86% | 50–100bb | g1 |
| AA | straight | 90% | 85% | 84% | 54% | 50–100bb | g2 |
| A4 | straight | 87% | 80% | 80% | 52% | 50–100bb | g2 |
| AQ | straight | 86% | 79% | 79% | 52% | 50–100bb | g2 |
| AK | straight | 87% | 79% | 79% | 52% | 50–100bb | g2 |
| AT | straight | 87% | 79% | 79% | 51% | 50–100bb | g2 |
| A2 | straight | 87% | 80% | 80% | 51% | 50–100bb | g2 |
| AJ | straight | 87% | 80% | 79% | 51% | 50–100bb | g2 |
| A8 | straight | 88% | 80% | 80% | 51% | 50–100bb | g2 |
| A6 | straight | 88% | 79% | 80% | 51% | 50–100bb | g2 |
| A9 | straight | 87% | 78% | 77% | 51% | 50–100bb | g2 |
| A3 | straight | 87% | 80% | 80% | 51% | 50–100bb | g2 |
| A7 | straight | 88% | 81% | 81% | 51% | 50–100bb | g2 |
| A5 | straight | 88% | 80% | 80% | 50% | 50–100bb | g2 |
| 99 | straight | 68% | 33% | 34% | 13% | 0–5bb | g3 |
| 97 | straight | 66% | 37% | 36% | 11% | 0–5bb | g3 |
| 98 | straight | 66% | 35% | 35% | 12% | 0–5bb | g3 |
| T9 | straight | 66% | 34% | 34% | 13% | 0–5bb | g3 |
| J9 | straight | 64% | 33% | 34% | 13% | 0–5bb | g3 |
| 96 | straight | 64% | 35% | 36% | 13% | 0–5bb | g3 |
| K9 | straight | 64% | 33% | 33% | 14% | 0–5bb | g3 |
| Q9 | straight | 63% | 33% | 32% | 13% | 0–5bb | g3 |
| 77 | twopair | 55% | 16% | 16% | 9% | 0–5bb | g4 |
| TT | twopair | 53% | 12% | 11% | 9% | 0–5bb | g4 |
| KK | twopair | 51% | 10% | 11% | 10% | 0–5bb | g4 |
| JJ | twopair | 48% | 13% | 12% | 12% | 0–5bb | g4 |
| QQ | twopair | 46% | 13% | 12% | 11% | 0–5bb | g4 |
| KQ | twopair | 46% | 10% | 11% | 11% | 0–5bb | g5 |
| KJ | twopair | 46% | 9% | 9% | 12% | 0–5bb | g5 |
| KT | twopair | 46% | 7% | 7% | 10% | 0–5bb | g5 |
| K7 | twopair | 45% | 7% | 7% | 11% | 0–5bb | g5 |
| QJ | twopair | 36% | 4% | 4% | 12% | 0–5bb | g5 |
| QT | twopair | 35% | 3% | 3% | 10% | 0–5bb | g5 |
| Q7 | twopair | 32% | 3% | 3% | 9% | 0–5bb | g5 |
| JT | twopair | 31% | 1% | 1% | 10% | 0–5bb | g5 |
| T7 | twopair | 30% | 0% | 0% | 7% | 0–5bb | g5 |
| J7 | twopair | 28% | 0% | 0% | 9% | 0–5bb | g5 |
| K6 | tpmk | 28% | 0% | 0% | 8% | 0–5bb | g6 |
| K8 | tpmk | 28% | 0% | 0% | 8% | 0–5bb | g6 |
| K4 | tpmk | 28% | 0% | 0% | 9% | 0–5bb | g6 |
| K2 | tpmk | 28% | 0% | 0% | 10% | 0–5bb | g6 |
| K3 | tpmk | 27% | 0% | 0% | 9% | 0–5bb | g6 |
| K5 | tpmk | 27% | 0% | 0% | 9% | 0–5bb | g6 |
| Q8 | mp | 23% | 0% | 0% | 8% | 0–5bb | g7 |
| Q5 | mp | 21% | 0% | 0% | 9% | 0–5bb | g7 |
| Q6 | mp | 21% | 0% | 0% | 8% | 0–5bb | g7 |
| J8 | bp | 13% | 0% | 0% | 9% | 0–5bb | g8 |
| T8 | bp | 4% | 0% | 0% | 7% | 0–5bb | g8 |
| 88 | spp | 2% | 0% | 0% | 4% | 0–5bb | g8 |
| 75 | bp | 1% | 0% | 0% | 2% | 0–5bb | g8 |
| 76 | bp | 1% | 0% | 0% | 3% | 0–5bb | g8 |
| 87 | bp | 1% | 0% | 0% | 2% | 0–5bb | g8 |
| 22 | spp | 1% | 0% | 0% | 1% | 0–5bb | g8 |
| 33 | spp | 1% | 0% | 0% | 1% | 0–5bb | g8 |
| 44 | spp | 1% | 0% | 0% | 2% | 0–5bb | g8 |
| 66 | spp | 1% | 0% | 0% | 1% | 0–5bb | g8 |
| 55 | spp | 0% | 0% | 0% | 1% | 0–5bb | g8 |
