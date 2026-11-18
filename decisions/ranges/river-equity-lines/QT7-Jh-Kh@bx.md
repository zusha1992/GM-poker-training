# QT7-Jh-Kh@bx river (Q♥ T♦ 7♠ J♥ K♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: AT–A2, T9–T7, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 98% | 98% | 98% | 94% |
| g2 | 25–50bb | Straights | AA, AK–A2 | 87% | 80% | 80% | 55% |
| g3 | 0–5bb | Straights | 99, K9, Q9, J9, T9, 98–96 | 67% | 33% | 33% | 25% |
| g4 | 0–5bb | Sets | KK–TT, 77 | 56% | 11% | 11% | 21% |
| g5 | 0–5bb | Two pair | KQ–KT, K7, QJ, QT, Q7, JT, J7, T7 | 49% | 5% | 5% | 21% |
| g6 | 0–5bb | Top pair, weak kicker | K8, K6–K2 | 41% | 0% | 0% | 21% |
| g7 | 0–5bb | Second pair | Q8, Q6, Q5 | 36% | 0% | 0% | 21% |
| g8 | 0–5bb | Small pairs | 88, 66–22, J8, T8, 87, 76, 75 | 15% | 0% | 0% | 6% |

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
| T7+fl | flush | 98% | 97% | 97% | 95% | 50–100bb | g1 |
| T8+fl | flush | 99% | 96% | 96% | 94% | 50–100bb | g1 |
| 98+fl | flush | 97% | 97% | 97% | 90% | 50–100bb | g1 |
| 96+fl | flush | 98% | 96% | 96% | 90% | 50–100bb | g1 |
| 87+fl | flushlo | 97% | 97% | 97% | 89% | 50–100bb | g1 |
| 76+fl | flushlo | 98% | 97% | 96% | 89% | 50–100bb | g1 |
| 86+fl | flushlo | 97% | 96% | 96% | 89% | 50–100bb | g1 |
| 97+fl | flush | 97% | 97% | 97% | 89% | 50–100bb | g1 |
| 75+fl | flushlo | 97% | 96% | 96% | 87% | 50–100bb | g1 |
| 65+fl | flushlo | 96% | 95% | 95% | 85% | 50–100bb | g1 |
| 64+fl | flushlo | 95% | 95% | 95% | 84% | 50–100bb | g1 |
| 54+fl | flushlo | 95% | 95% | 95% | 83% | 50–100bb | g1 |
| 43+fl | flushlo | 94% | 94% | 95% | 81% | 50–100bb | g1 |
| AA | straight | 90% | 85% | 84% | 58% | 50–100bb | g2 |
| AJ | straight | 87% | 79% | 80% | 56% | 50–100bb | g2 |
| AQ | straight | 86% | 78% | 78% | 56% | 50–100bb | g2 |
| A3 | straight | 86% | 79% | 80% | 56% | 50–100bb | g2 |
| A5 | straight | 87% | 80% | 80% | 56% | 50–100bb | g2 |
| A9 | straight | 87% | 77% | 77% | 55% | 50–100bb | g2 |
| AK | straight | 87% | 79% | 79% | 55% | 50–100bb | g2 |
| A8 | straight | 87% | 79% | 79% | 55% | 50–100bb | g2 |
| A7 | straight | 88% | 81% | 81% | 55% | 50–100bb | g2 |
| A2 | straight | 87% | 80% | 80% | 55% | 50–100bb | g2 |
| A4 | straight | 87% | 80% | 80% | 55% | 50–100bb | g2 |
| AT | straight | 88% | 78% | 79% | 54% | 50–100bb | g2 |
| A6 | straight | 87% | 80% | 80% | 54% | 50–100bb | g2 |
| 99 | straight | 69% | 33% | 33% | 26% | 0–5bb | g3 |
| 97 | straight | 68% | 36% | 35% | 23% | 0–5bb | g3 |
| J9 | straight | 68% | 33% | 33% | 26% | 0–5bb | g3 |
| T9 | straight | 68% | 34% | 33% | 24% | 0–5bb | g3 |
| 96 | straight | 67% | 34% | 34% | 24% | 0–5bb | g3 |
| 98 | straight | 67% | 35% | 34% | 24% | 0–5bb | g3 |
| K9 | straight | 67% | 32% | 33% | 26% | 0–5bb | g3 |
| Q9 | straight | 66% | 32% | 32% | 25% | 0–5bb | g3 |
| TT | twopair | 58% | 13% | 12% | 18% | 0–5bb | g4 |
| 77 | twopair | 57% | 14% | 15% | 21% | 0–5bb | g4 |
| KK | twopair | 55% | 9% | 9% | 22% | 0–5bb | g4 |
| QQ | twopair | 55% | 11% | 11% | 22% | 0–5bb | g4 |
| JJ | twopair | 55% | 9% | 10% | 22% | 0–5bb | g4 |
| KQ | twopair | 54% | 10% | 10% | 22% | 0–5bb | g5 |
| KJ | twopair | 54% | 7% | 7% | 23% | 0–5bb | g5 |
| KT | twopair | 52% | 7% | 7% | 20% | 0–5bb | g5 |
| K7 | twopair | 51% | 6% | 6% | 21% | 0–5bb | g5 |
| QJ | twopair | 47% | 3% | 2% | 22% | 0–5bb | g5 |
| QT | twopair | 46% | 2% | 2% | 22% | 0–5bb | g5 |
| JT | twopair | 45% | 1% | 0% | 20% | 0–5bb | g5 |
| Q7 | twopair | 44% | 3% | 3% | 20% | 0–5bb | g5 |
| J7 | twopair | 42% | 0% | 0% | 21% | 0–5bb | g5 |
| T7 | twopair | 42% | 0% | 0% | 16% | 0–5bb | g5 |
| K5 | tpmk | 42% | 0% | 0% | 20% | 0–5bb | g6 |
| K8 | tpmk | 41% | 0% | 0% | 21% | 0–5bb | g6 |
| K4 | tpmk | 41% | 0% | 0% | 21% | 0–5bb | g6 |
| K2 | tpmk | 41% | 0% | 0% | 22% | 0–5bb | g6 |
| K6 | tpmk | 41% | 0% | 0% | 22% | 0–5bb | g6 |
| K3 | tpmk | 39% | 0% | 0% | 22% | 0–5bb | g6 |
| Q8 | mp | 38% | 0% | 0% | 20% | 0–5bb | g7 |
| Q5 | mp | 36% | 0% | 0% | 20% | 0–5bb | g7 |
| Q6 | mp | 35% | 0% | 0% | 21% | 0–5bb | g7 |
| J8 | bp | 33% | 0% | 0% | 21% | 0–5bb | g8 |
| T8 | bp | 30% | 0% | 0% | 17% | 0–5bb | g8 |
| 88 | spp | 26% | 0% | 0% | 10% | 0–5bb | g8 |
| 87 | bp | 22% | 0% | 0% | 5% | 0–5bb | g8 |
| 75 | bp | 20% | 0% | 0% | 6% | 0–5bb | g8 |
| 76 | bp | 20% | 0% | 0% | 5% | 0–5bb | g8 |
| 66 | spp | 16% | 0% | 0% | 2% | 0–5bb | g8 |
| 55 | spp | 13% | 0% | 0% | 3% | 0–5bb | g8 |
| 44 | spp | 9% | 0% | 0% | 3% | 0–5bb | g8 |
| 33 | spp | 6% | 0% | 0% | 3% | 0–5bb | g8 |
| 22 | spp | 1% | 0% | 0% | 3% | 0–5bb | g8 |
