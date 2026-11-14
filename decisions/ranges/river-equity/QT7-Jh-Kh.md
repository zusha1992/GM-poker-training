# QT7-Jh-Kh river (Q♥ T♦ 7♠ J♥ K♥): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes & straights | AA, AK–AJ, A8, A6–A2 · ♥ flushes: AT–A2, T9–T7, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 89% | 87% | 87% | 57% |
| g2 | 25–50bb | Straights | AT, A9, A7 | 88% | 83% | 83% | 50% |
| g3 | 0–5bb | Straights & sets | KK–99, 77, K9, Q9, J9, T9, 98–96 | 55% | 28% | 28% | 8% |
| g4 | 0–5bb | Two pair | KQ–KT, K7, QJ, QT, Q7, JT, J7, T7 | 31% | 5% | 5% | 7% |
| g5 | 0–5bb | Top pair, weak kicker | K8, K6–K2 | 18% | 0% | 0% | 7% |
| g6 | 0–5bb | Second pair | Q8, Q6, Q5 | 10% | 0% | 0% | 7% |
| g7 | 0–5bb | Small pairs | 88, 66–22, J8, T8, 87, 76, 75 | 1% | 0% | 0% | 1% |

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
| 75+fl | flushlo | 99% | 99% | 99% | 96% | 50–100bb | g1 |
| 76+fl | flushlo | 99% | 99% | 99% | 96% | 50–100bb | g1 |
| T8+fl | flush | 99% | 98% | 98% | 96% | 50–100bb | g1 |
| 87+fl | flushlo | 99% | 99% | 99% | 96% | 50–100bb | g1 |
| 97+fl | flush | 99% | 99% | 99% | 95% | 50–100bb | g1 |
| 98+fl | flush | 98% | 98% | 97% | 93% | 50–100bb | g1 |
| 96+fl | flush | 98% | 97% | 97% | 93% | 50–100bb | g1 |
| 86+fl | flushlo | 97% | 97% | 97% | 92% | 50–100bb | g1 |
| 65+fl | flushlo | 97% | 97% | 97% | 91% | 50–100bb | g1 |
| 54+fl | flushlo | 97% | 97% | 97% | 90% | 50–100bb | g1 |
| 43+fl | flushlo | 96% | 97% | 97% | 90% | 50–100bb | g1 |
| 64+fl | flushlo | 96% | 97% | 97% | 90% | 50–100bb | g1 |
| AA | straight | 91% | 88% | 88% | 51% | 50–100bb | g1 |
| AQ | straight | 86% | 84% | 84% | 51% | 50–100bb | g1 |
| A3 | straight | 87% | 85% | 85% | 51% | 50–100bb | g1 |
| AJ | straight | 87% | 84% | 84% | 51% | 50–100bb | g1 |
| AK | straight | 87% | 84% | 84% | 51% | 50–100bb | g1 |
| A8 | straight | 87% | 85% | 85% | 50% | 50–100bb | g1 |
| A2 | straight | 88% | 85% | 84% | 50% | 50–100bb | g1 |
| A5 | straight | 88% | 84% | 85% | 50% | 50–100bb | g1 |
| A4 | straight | 88% | 84% | 84% | 50% | 50–100bb | g1 |
| A6 | straight | 88% | 85% | 85% | 50% | 50–100bb | g1 |
| A7 | straight | 89% | 85% | 85% | 50% | 25–50bb | g2 |
| AT | straight | 88% | 84% | 84% | 50% | 25–50bb | g2 |
| A9 | straight | 87% | 82% | 82% | 50% | 25–50bb | g2 |
| 97 | straight | 62% | 37% | 38% | 7% | 0–5bb | g3 |
| 99 | straight | 62% | 33% | 34% | 8% | 0–5bb | g3 |
| T9 | straight | 62% | 35% | 35% | 8% | 0–5bb | g3 |
| 98 | straight | 60% | 36% | 36% | 8% | 0–5bb | g3 |
| 96 | straight | 60% | 36% | 36% | 8% | 0–5bb | g3 |
| K9 | straight | 60% | 34% | 35% | 9% | 0–5bb | g3 |
| J9 | straight | 59% | 36% | 36% | 9% | 0–5bb | g3 |
| Q9 | straight | 58% | 36% | 36% | 8% | 0–5bb | g3 |
| 77 | twopair | 48% | 11% | 11% | 6% | 0–5bb | g3 |
| TT | twopair | 45% | 6% | 6% | 7% | 0–5bb | g3 |
| JJ | twopair | 42% | 7% | 7% | 8% | 0–5bb | g3 |
| KK | twopair | 42% | 7% | 7% | 7% | 0–5bb | g3 |
| QQ | twopair | 37% | 11% | 11% | 7% | 0–5bb | g3 |
| KJ | twopair | 39% | 7% | 7% | 7% | 0–5bb | g4 |
| KQ | twopair | 39% | 9% | 9% | 7% | 0–5bb | g4 |
| KT | twopair | 38% | 5% | 5% | 7% | 0–5bb | g4 |
| K7 | twopair | 35% | 6% | 5% | 6% | 0–5bb | g4 |
| QJ | twopair | 26% | 4% | 4% | 7% | 0–5bb | g4 |
| JT | twopair | 24% | 2% | 1% | 8% | 0–5bb | g4 |
| QT | twopair | 23% | 4% | 4% | 7% | 0–5bb | g4 |
| Q7 | twopair | 23% | 6% | 6% | 6% | 0–5bb | g4 |
| J7 | twopair | 20% | 0% | 0% | 7% | 0–5bb | g4 |
| T7 | twopair | 19% | 0% | 0% | 5% | 0–5bb | g4 |
| K8 | tpmk | 19% | 0% | 0% | 7% | 0–5bb | g5 |
| K4 | tpmk | 18% | 0% | 0% | 7% | 0–5bb | g5 |
| K6 | tpmk | 18% | 0% | 0% | 7% | 0–5bb | g5 |
| K2 | tpmk | 18% | 0% | 0% | 7% | 0–5bb | g5 |
| K3 | tpmk | 18% | 0% | 0% | 6% | 0–5bb | g5 |
| K5 | tpmk | 18% | 0% | 0% | 7% | 0–5bb | g5 |
| Q8 | mp | 13% | 0% | 0% | 7% | 0–5bb | g6 |
| Q6 | mp | 8% | 0% | 0% | 7% | 0–5bb | g6 |
| Q5 | mp | 8% | 0% | 0% | 6% | 0–5bb | g6 |
| J8 | bp | 4% | 0% | 0% | 7% | 0–5bb | g7 |
| T8 | bp | 3% | 0% | 0% | 6% | 0–5bb | g7 |
| 88 | spp | 2% | 0% | 0% | 4% | 0–5bb | g7 |
| 76 | bp | 1% | 0% | 0% | 1% | 0–5bb | g7 |
| 87 | bp | 1% | 0% | 0% | 1% | 0–5bb | g7 |
| 75 | bp | 1% | 0% | 0% | 1% | 0–5bb | g7 |
| 66 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 55 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 44 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 33 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 22 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
