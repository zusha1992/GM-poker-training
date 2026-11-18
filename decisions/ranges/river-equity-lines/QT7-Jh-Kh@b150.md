# QT7-Jh-Kh@b150 river (Q♥ T♦ 7♠ J♥ K♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: AT–A2, T9–T7, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 99% | 99% | 99% | 97% |
| g2 | 25–50bb | Straights | AA, 99, AK–A2, T9, 98 | 86% | 86% | 86% | 59% |
| g3 | 5–15bb | Straights | 97, 96 | 63% | 50% | 50% | 20% |
| g4 | 0–5bb | Straights | K9, Q9, J9 | 62% | 48% | 48% | 20% |
| g5 | 0–5bb | Sets | KK–TT, 77 | 46% | 20% | 20% | 12% |
| g6 | 0–5bb | Two pair | KQ–KT, K7, QJ, QT, Q7, JT, J7, T7 | 27% | 14% | 13% | 9% |
| g7 | 0–5bb | Top pair, weak kicker | K8, K6–K2 | 7% | 0% | 0% | 7% |
| g8 | 0–5bb | Second pair | Q8, Q6, Q5 | 6% | 0% | 0% | 7% |
| g9 | 0–5bb | Small pairs | 88, 66–22, J8, T8, 87, 76, 75 | 1% | 0% | 0% | 1% |

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
| T7+fl | flush | 99% | 99% | 99% | 97% | 50–100bb | g1 |
| T8+fl | flush | 99% | 99% | 99% | 96% | 50–100bb | g1 |
| 97+fl | flush | 98% | 99% | 99% | 95% | 50–100bb | g1 |
| 87+fl | flushlo | 98% | 99% | 99% | 95% | 50–100bb | g1 |
| 76+fl | flushlo | 98% | 99% | 99% | 95% | 50–100bb | g1 |
| 75+fl | flushlo | 98% | 98% | 99% | 94% | 50–100bb | g1 |
| 98+fl | flush | 97% | 99% | 99% | 94% | 50–100bb | g1 |
| 96+fl | flush | 97% | 98% | 98% | 94% | 50–100bb | g1 |
| 86+fl | flushlo | 98% | 98% | 98% | 93% | 50–100bb | g1 |
| 54+fl | flushlo | 97% | 97% | 97% | 93% | 50–100bb | g1 |
| 64+fl | flushlo | 96% | 98% | 98% | 92% | 50–100bb | g1 |
| 65+fl | flushlo | 97% | 98% | 98% | 92% | 50–100bb | g1 |
| 43+fl | flushlo | 96% | 97% | 98% | 92% | 50–100bb | g1 |
| AA | straight | 90% | 93% | 92% | 68% | 50–100bb | g2 |
| AJ | straight | 87% | 90% | 90% | 63% | 50–100bb | g2 |
| A6 | straight | 88% | 90% | 90% | 63% | 50–100bb | g2 |
| A7 | straight | 87% | 89% | 90% | 63% | 50–100bb | g2 |
| AT | straight | 88% | 90% | 90% | 63% | 50–100bb | g2 |
| A5 | straight | 87% | 89% | 89% | 63% | 50–100bb | g2 |
| A2 | straight | 88% | 89% | 89% | 63% | 50–100bb | g2 |
| A3 | straight | 88% | 90% | 89% | 63% | 50–100bb | g2 |
| A8 | straight | 88% | 89% | 90% | 63% | 50–100bb | g2 |
| AK | straight | 86% | 89% | 89% | 63% | 50–100bb | g2 |
| AQ | straight | 86% | 88% | 87% | 62% | 50–100bb | g2 |
| A4 | straight | 88% | 90% | 90% | 62% | 50–100bb | g2 |
| A9 | straight | 88% | 88% | 88% | 62% | 50–100bb | g2 |
| 99 | straight | 66% | 50% | 51% | 21% | 25–50bb | g2 |
| 98 | straight | 65% | 51% | 50% | 21% | 25–50bb | g2 |
| T9 | straight | 64% | 49% | 50% | 21% | 25–50bb | g2 |
| 97 | straight | 63% | 50% | 50% | 20% | 5–15bb | g3 |
| 96 | straight | 64% | 50% | 50% | 20% | 5–15bb | g3 |
| J9 | straight | 63% | 48% | 48% | 22% | 0–5bb | g4 |
| Q9 | straight | 62% | 48% | 48% | 19% | 0–5bb | g4 |
| K9 | straight | 62% | 49% | 49% | 19% | 0–5bb | g4 |
| QQ | twopair | 49% | 24% | 24% | 13% | 0–5bb | g5 |
| 77 | twopair | 48% | 22% | 24% | 11% | 0–5bb | g5 |
| TT | twopair | 45% | 17% | 18% | 11% | 0–5bb | g5 |
| KK | twopair | 45% | 24% | 22% | 12% | 0–5bb | g5 |
| JJ | twopair | 42% | 12% | 12% | 14% | 0–5bb | g5 |
| KQ | twopair | 45% | 24% | 23% | 11% | 0–5bb | g6 |
| KJ | twopair | 38% | 18% | 17% | 11% | 0–5bb | g6 |
| KT | twopair | 35% | 19% | 18% | 10% | 0–5bb | g6 |
| K7 | twopair | 32% | 19% | 21% | 9% | 0–5bb | g6 |
| QJ | twopair | 21% | 12% | 11% | 10% | 0–5bb | g6 |
| Q7 | twopair | 19% | 12% | 12% | 7% | 0–5bb | g6 |
| QT | twopair | 17% | 9% | 8% | 8% | 0–5bb | g6 |
| JT | twopair | 12% | 3% | 3% | 7% | 0–5bb | g6 |
| J7 | twopair | 6% | 0% | 0% | 6% | 0–5bb | g6 |
| T7 | twopair | 5% | 0% | 0% | 4% | 0–5bb | g6 |
| K2 | tpmk | 8% | 0% | 0% | 7% | 0–5bb | g7 |
| K6 | tpmk | 7% | 0% | 0% | 6% | 0–5bb | g7 |
| K3 | tpmk | 7% | 0% | 0% | 7% | 0–5bb | g7 |
| K8 | tpmk | 7% | 0% | 0% | 7% | 0–5bb | g7 |
| K4 | tpmk | 7% | 0% | 0% | 7% | 0–5bb | g7 |
| K5 | tpmk | 6% | 0% | 0% | 6% | 0–5bb | g7 |
| Q6 | mp | 6% | 0% | 0% | 7% | 0–5bb | g8 |
| Q8 | mp | 5% | 0% | 0% | 6% | 0–5bb | g8 |
| Q5 | mp | 5% | 0% | 0% | 7% | 0–5bb | g8 |
| J8 | bp | 5% | 0% | 0% | 7% | 0–5bb | g9 |
| T8 | bp | 4% | 0% | 0% | 6% | 0–5bb | g9 |
| 88 | spp | 3% | 0% | 0% | 3% | 0–5bb | g9 |
| 76 | bp | 1% | 0% | 0% | 1% | 0–5bb | g9 |
| 87 | bp | 1% | 0% | 0% | 1% | 0–5bb | g9 |
| 75 | bp | 1% | 0% | 0% | 1% | 0–5bb | g9 |
| 66 | spp | 0% | 0% | 0% | 0% | 0–5bb | g9 |
| 55 | spp | 0% | 0% | 0% | 0% | 0–5bb | g9 |
| 44 | spp | 0% | 0% | 0% | 0% | 0–5bb | g9 |
| 33 | spp | 0% | 0% | 0% | 0% | 0–5bb | g9 |
| 22 | spp | 0% | 0% | 0% | 0% | 0–5bb | g9 |
