# QT7-Jh-Kh@b150 river (Q♥ T♦ 7♠ J♥ K♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: AT–A2, T9–T7, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 99% | 99% | 99% | 97% |
| g2 | 25–50bb | A-high straights | AA, AK–A2 | 88% | 90% | 90% | 63% |
| g3 | 25–50bb | K-high straights | 99, 97, 96 | 66% | 50% | 50% | 19% |
| g4 | 0–5bb | K-high straights | K9, Q9, J9, T9, 98 | 62% | 49% | 49% | 21% |
| g5 | 0–5bb | Sets | KK–TT, 77 | 46% | 20% | 20% | 12% |
| g6 | 0–5bb | Two pair | KQ–KT, K7, QJ, QT, Q7, JT, J7, T7 | 27% | 14% | 14% | 10% |
| g7 | 0–5bb | Top pair, weak kicker | K8, K6–K2 | 7% | 0% | 0% | 7% |
| g8 | 0–5bb | Second pair | Q8, Q6, Q5 | 5% | 0% | 0% | 7% |
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
| T7+fl | flush | 99% | 99% | 99% | 98% | 50–100bb | g1 |
| T8+fl | flush | 99% | 99% | 99% | 96% | 50–100bb | g1 |
| 76+fl | flushlo | 98% | 99% | 99% | 95% | 50–100bb | g1 |
| 97+fl | flush | 98% | 99% | 99% | 95% | 50–100bb | g1 |
| 87+fl | flushlo | 98% | 99% | 99% | 95% | 50–100bb | g1 |
| 96+fl | flush | 98% | 98% | 99% | 94% | 50–100bb | g1 |
| 75+fl | flushlo | 97% | 99% | 99% | 94% | 50–100bb | g1 |
| 98+fl | flush | 98% | 99% | 99% | 94% | 50–100bb | g1 |
| 86+fl | flushlo | 97% | 98% | 98% | 93% | 50–100bb | g1 |
| 65+fl | flushlo | 96% | 97% | 98% | 92% | 50–100bb | g1 |
| 54+fl | flushlo | 97% | 98% | 98% | 92% | 50–100bb | g1 |
| 64+fl | flushlo | 96% | 97% | 97% | 92% | 50–100bb | g1 |
| 43+fl | flushlo | 95% | 98% | 97% | 91% | 50–100bb | g1 |
| AA | straight | 90% | 92% | 93% | 67% | 50–100bb | g2 |
| AJ | straight | 87% | 90% | 90% | 64% | 50–100bb | g2 |
| A6 | straight | 87% | 89% | 90% | 63% | 50–100bb | g2 |
| A4 | straight | 88% | 90% | 89% | 63% | 50–100bb | g2 |
| A3 | straight | 88% | 89% | 90% | 63% | 50–100bb | g2 |
| A8 | straight | 88% | 89% | 90% | 63% | 50–100bb | g2 |
| A5 | straight | 88% | 89% | 89% | 63% | 50–100bb | g2 |
| A7 | straight | 88% | 90% | 90% | 63% | 50–100bb | g2 |
| A2 | straight | 88% | 90% | 89% | 63% | 50–100bb | g2 |
| AT | straight | 89% | 90% | 90% | 63% | 50–100bb | g2 |
| AK | straight | 86% | 89% | 89% | 62% | 50–100bb | g2 |
| AQ | straight | 86% | 88% | 87% | 62% | 50–100bb | g2 |
| A9 | straight | 87% | 88% | 89% | 61% | 50–100bb | g2 |
| 99 | straight | 66% | 50% | 50% | 19% | 25–50bb | g3 |
| 97 | straight | 64% | 51% | 50% | 19% | 25–50bb | g3 |
| 96 | straight | 65% | 50% | 50% | 20% | 25–50bb | g3 |
| 98 | straight | 65% | 50% | 50% | 20% | 0–5bb | g4 |
| T9 | straight | 62% | 49% | 49% | 21% | 0–5bb | g4 |
| Q9 | straight | 62% | 49% | 48% | 20% | 0–5bb | g4 |
| K9 | straight | 62% | 49% | 50% | 19% | 0–5bb | g4 |
| J9 | straight | 61% | 48% | 47% | 21% | 0–5bb | g4 |
| QQ | twopair | 49% | 23% | 24% | 13% | 0–5bb | g5 |
| 77 | twopair | 49% | 23% | 23% | 12% | 0–5bb | g5 |
| TT | twopair | 45% | 17% | 18% | 10% | 0–5bb | g5 |
| KK | twopair | 45% | 24% | 23% | 11% | 0–5bb | g5 |
| JJ | twopair | 42% | 12% | 11% | 13% | 0–5bb | g5 |
| KQ | twopair | 47% | 24% | 23% | 12% | 0–5bb | g6 |
| KJ | twopair | 37% | 18% | 17% | 11% | 0–5bb | g6 |
| KT | twopair | 35% | 19% | 19% | 10% | 0–5bb | g6 |
| K7 | twopair | 31% | 21% | 21% | 9% | 0–5bb | g6 |
| QJ | twopair | 21% | 11% | 12% | 10% | 0–5bb | g6 |
| Q7 | twopair | 19% | 13% | 12% | 8% | 0–5bb | g6 |
| QT | twopair | 18% | 8% | 9% | 9% | 0–5bb | g6 |
| JT | twopair | 11% | 3% | 2% | 8% | 0–5bb | g6 |
| J7 | twopair | 7% | 0% | 0% | 6% | 0–5bb | g6 |
| T7 | twopair | 5% | 0% | 0% | 3% | 0–5bb | g6 |
| K2 | tpmk | 7% | 0% | 0% | 7% | 0–5bb | g7 |
| K4 | tpmk | 7% | 0% | 0% | 7% | 0–5bb | g7 |
| K3 | tpmk | 7% | 0% | 0% | 6% | 0–5bb | g7 |
| K6 | tpmk | 7% | 0% | 0% | 7% | 0–5bb | g7 |
| K5 | tpmk | 7% | 0% | 0% | 6% | 0–5bb | g7 |
| K8 | tpmk | 7% | 0% | 0% | 7% | 0–5bb | g7 |
| Q8 | mp | 6% | 0% | 0% | 6% | 0–5bb | g8 |
| Q5 | mp | 5% | 0% | 0% | 7% | 0–5bb | g8 |
| Q6 | mp | 5% | 0% | 0% | 7% | 0–5bb | g8 |
| J8 | bp | 7% | 0% | 0% | 8% | 0–5bb | g9 |
| T8 | bp | 4% | 0% | 0% | 5% | 0–5bb | g9 |
| 88 | spp | 3% | 0% | 0% | 3% | 0–5bb | g9 |
| 76 | bp | 1% | 0% | 0% | 1% | 0–5bb | g9 |
| 87 | bp | 1% | 0% | 0% | 1% | 0–5bb | g9 |
| 75 | bp | 1% | 0% | 0% | 1% | 0–5bb | g9 |
| 66 | spp | 0% | 0% | 0% | 0% | 0–5bb | g9 |
| 55 | spp | 0% | 0% | 0% | 0% | 0–5bb | g9 |
| 44 | spp | 0% | 0% | 0% | 0% | 0–5bb | g9 |
| 33 | spp | 0% | 0% | 0% | 0% | 0–5bb | g9 |
| 22 | spp | 0% | 0% | 0% | 0% | 0–5bb | g9 |
