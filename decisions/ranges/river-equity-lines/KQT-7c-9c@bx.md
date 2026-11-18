# KQT-7c-9c@bx river (K♦ Q♣ T♥ 7♣ 9♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♣ flushes: AK, AJ, AT, A8, A6–A2, KJ, KT, K8, K6–K2, JT, J8, T8, 86, 65, 64, 54, 43 | 98% | 99% | 99% | 93% |
| g2 | 25–50bb | Straights | JJ, AJ, KJ, QJ, JT–J7, 86 | 86% | 87% | 85% | 72% |
| g3 | 15–25bb | Sets | KK, QQ, TT, 99, 77 | 73% | 65% | 61% | 66% |
| g4 | 15–25bb | Two pair | KQ, KT, K9, K7, QT, Q9, Q7, T9, T7, 97 | 65% | 46% | 39% | 58% |
| g5 | 0–5bb | Overpair | AA | 44% | 15% | 6% | 49% |
| g6 | 0–5bb | Top pair | AK, K8, K6–K2 | 48% | 13% | 3% | 43% |
| g7 | 0–5bb | Second pair | AQ, Q8, Q6, Q5 | 38% | 8% | 0% | 21% |
| g8 | 0–5bb | Small pairs | 88, 66–22, AT, A9, A7, T8, 98, 96, 87, 76, 75 | 11% | 0% | 0% | 12% |
| g9 | Pot is too big | Ace-high | A8, A6–A2 | 3% | 0% | 0% | 5% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AK+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A6+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A5+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K8+fl | flush | 98% | 100% | 100% | 95% | 50–100bb | g1 |
| K4+fl | flush | 98% | 100% | 100% | 94% | 50–100bb | g1 |
| K3+fl | flush | 98% | 100% | 100% | 94% | 50–100bb | g1 |
| KT+fl | flush | 98% | 100% | 100% | 94% | 50–100bb | g1 |
| K6+fl | flush | 98% | 100% | 100% | 94% | 50–100bb | g1 |
| K2+fl | flush | 98% | 100% | 100% | 94% | 50–100bb | g1 |
| K5+fl | flush | 98% | 100% | 100% | 93% | 50–100bb | g1 |
| KJ+fl | flush | 98% | 100% | 100% | 93% | 50–100bb | g1 |
| T8+fl | flushlo | 95% | 98% | 98% | 84% | 50–100bb | g1 |
| 65+fl | flushlo | 94% | 98% | 97% | 83% | 50–100bb | g1 |
| 64+fl | flushlo | 94% | 97% | 97% | 83% | 50–100bb | g1 |
| 86+fl | flushlo | 94% | 98% | 98% | 83% | 50–100bb | g1 |
| J8+fl | flush | 95% | 98% | 98% | 82% | 50–100bb | g1 |
| 43+fl | flushlo | 94% | 98% | 97% | 82% | 50–100bb | g1 |
| 54+fl | flushlo | 94% | 98% | 97% | 82% | 50–100bb | g1 |
| JT+fl | flush | 94% | 98% | 98% | 81% | 50–100bb | g1 |
| AJ | straight | 92% | 97% | 97% | 76% | 50–100bb | g2 |
| J9 | straight | 83% | 83% | 82% | 72% | 50–100bb | g2 |
| JJ | straight | 87% | 88% | 87% | 72% | 50–100bb | g2 |
| J7 | straight | 83% | 85% | 83% | 72% | 50–100bb | g2 |
| QJ | straight | 84% | 84% | 82% | 72% | 50–100bb | g2 |
| KJ | straight | 85% | 85% | 83% | 71% | 50–100bb | g2 |
| J8 | straight | 84% | 84% | 83% | 71% | 50–100bb | g2 |
| JT | straight | 84% | 84% | 82% | 71% | 50–100bb | g2 |
| 86 | straight | 73% | 66% | 64% | 64% | 50–100bb | g2 |
| QQ | twopair | 73% | 66% | 64% | 67% | 50–100bb | g3 |
| TT | twopair | 74% | 65% | 62% | 67% | 50–100bb | g3 |
| 77 | twopair | 72% | 66% | 61% | 66% | 50–100bb | g3 |
| 99 | twopair | 72% | 61% | 56% | 65% | 50–100bb | g3 |
| KK | twopair | 74% | 66% | 61% | 63% | 50–100bb | g3 |
| KQ | twopair | 73% | 64% | 59% | 66% | 50–100bb | g4 |
| KT | twopair | 71% | 61% | 55% | 60% | 50–100bb | g4 |
| K9 | twopair | 69% | 54% | 47% | 58% | 50–100bb | g4 |
| QT | twopair | 63% | 44% | 37% | 56% | 50–100bb | g4 |
| T9 | twopair | 55% | 22% | 13% | 56% | 50–100bb | g4 |
| Q7 | twopair | 57% | 32% | 24% | 56% | 50–100bb | g4 |
| Q9 | twopair | 60% | 36% | 29% | 55% | 50–100bb | g4 |
| 97 | twopair | 53% | 18% | 8% | 55% | 50–100bb | g4 |
| K7 | twopair | 67% | 53% | 47% | 54% | 50–100bb | g4 |
| T7 | twopair | 51% | 16% | 8% | 52% | 50–100bb | g4 |
| AA | op | 44% | 15% | 6% | 49% | 0–5bb | g5 |
| AK | tpgk | 48% | 14% | 5% | 51% | 50–100bb | g6 |
| K8 | tpmk | 49% | 12% | 3% | 49% | 0–5bb | g6 |
| K4 | tpmk | 47% | 12% | 1% | 34% | 0–5bb | g6 |
| K6 | tpmk | 47% | 11% | 1% | 36% | 0–5bb | g6 |
| K3 | tpmk | 46% | 10% | 1% | 34% | 0–5bb | g6 |
| K5 | tpmk | 46% | 12% | 1% | 35% | 0–5bb | g6 |
| K2 | tpmk | 45% | 11% | 1% | 34% | 0–5bb | g6 |
| AQ | mp | 39% | 9% | 0% | 20% | 0–5bb | g7 |
| Q8 | mp | 38% | 8% | 0% | 22% | 0–5bb | g7 |
| Q5 | mp | 35% | 6% | 0% | 22% | 0–5bb | g7 |
| Q6 | mp | 35% | 6% | 0% | 21% | 0–5bb | g7 |
| AT | bp | 20% | 3% | 0% | 16% | 0–5bb | g8 |
| T8 | bp | 19% | 1% | 0% | 16% | 0–5bb | g8 |
| A9 | bp | 13% | 0% | 0% | 10% | 0–5bb | g8 |
| 96 | bp | 12% | 0% | 0% | 13% | 0–5bb | g8 |
| 98 | bp | 11% | 0% | 0% | 12% | 0–5bb | g8 |
| 88 | spp | 10% | 0% | 0% | 12% | 0–5bb | g8 |
| 75 | bp | 9% | 0% | 0% | 12% | 0–5bb | g8 |
| 76 | bp | 8% | 0% | 0% | 11% | 0–5bb | g8 |
| 44 | spp | 8% | 0% | 0% | 13% | 0–5bb | g8 |
| 55 | spp | 8% | 0% | 0% | 14% | 0–5bb | g8 |
| 66 | spp | 8% | 0% | 0% | 11% | 0–5bb | g8 |
| 33 | spp | 8% | 0% | 0% | 13% | 0–5bb | g8 |
| 22 | spp | 8% | 0% | 0% | 11% | 0–5bb | g8 |
| A7 | bp | 8% | 0% | 0% | 11% | 0–5bb | g8 |
| 87 | bp | 8% | 0% | 0% | 12% | 0–5bb | g8 |
| A5 | khnd | 4% | 0% | 0% | 5% | Pot is too big | g9 |
| A2 | khnd | 3% | 0% | 0% | 5% | Pot is too big | g9 |
| A4 | khnd | 3% | 0% | 0% | 5% | Pot is too big | g9 |
| A6 | khnd | 3% | 0% | 0% | 5% | Pot is too big | g9 |
| A3 | khnd | 3% | 0% | 0% | 4% | Pot is too big | g9 |
| A8 | khnd | 3% | 0% | 0% | 5% | Pot is too big | g9 |
