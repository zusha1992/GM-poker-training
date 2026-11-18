# QT7-Jh-Kh@b200 river (Q♥ T♦ 7♠ J♥ K♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: AT–A2, T9–T7, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 99% | 96% | 96% | 96% |
| g2 | 25–50bb | A-high straights | AA, AK–A2 | 89% | 65% | 61% | 65% |
| g3 | 0–5bb | K-high straights | 99, K9, Q9, J9, T9, 98–96 | 69% | 20% | 12% | 20% |
| g4 | 0–5bb | Sets | KK–TT, 77 | 51% | 8% | 0% | 8% |
| g5 | 0–5bb | Two pair | KQ–KT, K7, QJ, QT, Q7, JT, J7, T7 | 30% | 8% | 0% | 8% |
| g6 | 0–5bb | Top pair, weak kicker | K8, K6–K2 | 7% | 8% | 0% | 8% |
| g7 | 0–5bb | Second pair | Q8, Q6, Q5 | 6% | 8% | 0% | 8% |
| g8 | 0–5bb | Small pairs | 88, 66–22, J8, T8, 87, 76, 75 | 1% | 2% | 0% | 2% |

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
| T7+fl | flush | 99% | 97% | 96% | 97% | 50–100bb | g1 |
| 97+fl | flush | 97% | 95% | 94% | 95% | 50–100bb | g1 |
| T8+fl | flush | 98% | 95% | 94% | 95% | 50–100bb | g1 |
| 87+fl | flushlo | 98% | 94% | 93% | 94% | 50–100bb | g1 |
| 76+fl | flushlo | 97% | 93% | 93% | 94% | 50–100bb | g1 |
| 75+fl | flushlo | 98% | 94% | 93% | 94% | 50–100bb | g1 |
| 96+fl | flush | 97% | 92% | 92% | 93% | 50–100bb | g1 |
| 98+fl | flush | 97% | 93% | 92% | 93% | 50–100bb | g1 |
| 86+fl | flushlo | 97% | 92% | 91% | 91% | 50–100bb | g1 |
| 65+fl | flushlo | 96% | 90% | 89% | 90% | 50–100bb | g1 |
| 54+fl | flushlo | 96% | 89% | 88% | 90% | 50–100bb | g1 |
| 64+fl | flushlo | 96% | 90% | 89% | 89% | 50–100bb | g1 |
| 43+fl | flushlo | 96% | 89% | 88% | 88% | 50–100bb | g1 |
| AA | straight | 91% | 69% | 66% | 70% | 50–100bb | g2 |
| AJ | straight | 90% | 66% | 63% | 66% | 50–100bb | g2 |
| A8 | straight | 89% | 65% | 61% | 65% | 50–100bb | g2 |
| A6 | straight | 90% | 65% | 62% | 65% | 50–100bb | g2 |
| A3 | straight | 89% | 64% | 62% | 65% | 50–100bb | g2 |
| A7 | straight | 90% | 65% | 61% | 65% | 50–100bb | g2 |
| A2 | straight | 90% | 65% | 61% | 65% | 50–100bb | g2 |
| A4 | straight | 90% | 65% | 61% | 65% | 50–100bb | g2 |
| AT | straight | 90% | 65% | 62% | 65% | 50–100bb | g2 |
| AK | straight | 88% | 64% | 61% | 65% | 50–100bb | g2 |
| A5 | straight | 90% | 65% | 61% | 65% | 50–100bb | g2 |
| A9 | straight | 89% | 63% | 58% | 63% | 50–100bb | g2 |
| AQ | straight | 88% | 63% | 58% | 62% | 50–100bb | g2 |
| 99 | straight | 72% | 18% | 10% | 18% | 0–5bb | g3 |
| 98 | straight | 70% | 20% | 13% | 20% | 0–5bb | g3 |
| 96 | straight | 70% | 20% | 13% | 20% | 0–5bb | g3 |
| 97 | straight | 70% | 19% | 13% | 19% | 0–5bb | g3 |
| T9 | straight | 69% | 21% | 14% | 21% | 0–5bb | g3 |
| Q9 | straight | 68% | 19% | 11% | 19% | 0–5bb | g3 |
| K9 | straight | 68% | 20% | 13% | 20% | 0–5bb | g3 |
| J9 | straight | 68% | 23% | 14% | 23% | 0–5bb | g3 |
| 77 | twopair | 55% | 6% | 0% | 6% | 0–5bb | g4 |
| QQ | twopair | 53% | 9% | 0% | 9% | 0–5bb | g4 |
| KK | twopair | 52% | 8% | 0% | 8% | 0–5bb | g4 |
| TT | twopair | 49% | 6% | 0% | 6% | 0–5bb | g4 |
| JJ | twopair | 47% | 10% | 0% | 10% | 0–5bb | g4 |
| KQ | twopair | 52% | 8% | 0% | 9% | 0–5bb | g5 |
| KJ | twopair | 43% | 10% | 0% | 9% | 0–5bb | g5 |
| KT | twopair | 38% | 7% | 0% | 8% | 0–5bb | g5 |
| K7 | twopair | 36% | 8% | 0% | 7% | 0–5bb | g5 |
| QJ | twopair | 24% | 9% | 0% | 9% | 0–5bb | g5 |
| Q7 | twopair | 19% | 7% | 0% | 6% | 0–5bb | g5 |
| QT | twopair | 19% | 7% | 0% | 8% | 0–5bb | g5 |
| JT | twopair | 12% | 8% | 0% | 8% | 0–5bb | g5 |
| J7 | twopair | 6% | 7% | 0% | 7% | 0–5bb | g5 |
| T7 | twopair | 4% | 4% | 0% | 4% | 0–5bb | g5 |
| K2 | tpmk | 7% | 8% | 0% | 7% | 0–5bb | g6 |
| K8 | tpmk | 7% | 8% | 0% | 8% | 0–5bb | g6 |
| K4 | tpmk | 7% | 7% | 0% | 8% | 0–5bb | g6 |
| K6 | tpmk | 6% | 8% | 0% | 9% | 0–5bb | g6 |
| K3 | tpmk | 6% | 8% | 0% | 8% | 0–5bb | g6 |
| K5 | tpmk | 6% | 7% | 0% | 7% | 0–5bb | g6 |
| Q8 | mp | 7% | 8% | 0% | 8% | 0–5bb | g7 |
| Q6 | mp | 6% | 8% | 0% | 8% | 0–5bb | g7 |
| Q5 | mp | 6% | 8% | 0% | 8% | 0–5bb | g7 |
| J8 | bp | 7% | 8% | 0% | 9% | 0–5bb | g8 |
| T8 | bp | 5% | 7% | 0% | 6% | 0–5bb | g8 |
| 88 | spp | 3% | 4% | 0% | 4% | 0–5bb | g8 |
| 76 | bp | 1% | 1% | 0% | 1% | 0–5bb | g8 |
| 75 | bp | 1% | 1% | 0% | 1% | 0–5bb | g8 |
| 87 | bp | 1% | 1% | 0% | 1% | 0–5bb | g8 |
| 66 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 55 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 44 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 33 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 22 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
