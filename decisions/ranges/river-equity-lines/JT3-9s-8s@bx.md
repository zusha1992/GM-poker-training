# JT3-9s-8s@bx river (J♠ T♠ 3♣ 9♠ 8♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♠ flushes: AA–QQ, 77–22, AK–A2, KQ–K2, QJ–Q9, Q7–Q5, 76, 75, 65, 64, 54, 43 | 90% | 90% | 88% | 72% |
| g2 | 25–50bb | Straights | QQ, AQ, KQ, QJ–Q5 | 68% | 68% | 60% | 42% |
| g3 | 0–5bb | Straights | 77, A7, K7, J7, T7, 97, 87, 76, 75 | 56% | 47% | 36% | 17% |
| g4 | 0–5bb | Sets | JJ–88, 33 | 52% | 41% | 28% | 13% |
| g5 | 0–5bb | Overpairs | AA, KK | 37% | 23% | 9% | 10% |
| g6 | 0–5bb | Two pair | JT–J8, T9, T8, 98 | 47% | 35% | 20% | 13% |
| g7 | 0–5bb | Top pair, good kicker | AJ, KJ | 38% | 23% | 7% | 10% |
| g8 | 0–5bb | Second pair | AT, KT | 27% | 15% | 0% | 6% |
| g9 | 0–5bb | Small pairs | 66–44, 22, A9, A8, A3, K9, K8, K3, 96, 86, 43 | 15% | 7% | 0% | 2% |
| g10 | Pot is too big | Ace-high | AK, A6–A4, A2 | 3% | 1% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| QQ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| Q7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| Q6+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| Q5+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| QJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| QT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| Q9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AQ+fl | flush | 97% | 95% | 94% | 84% | 50–100bb | g1 |
| KQ+fl | flush | 94% | 95% | 94% | 82% | 50–100bb | g1 |
| 76+fl | flush | 95% | 92% | 90% | 80% | 50–100bb | g1 |
| 75+fl | flush | 95% | 92% | 91% | 80% | 50–100bb | g1 |
| 77+fl | flush | 95% | 92% | 90% | 78% | 50–100bb | g1 |
| A7+fl | flush | 94% | 92% | 90% | 76% | 50–100bb | g1 |
| K7+fl | flush | 92% | 90% | 90% | 73% | 50–100bb | g1 |
| A8+fl | flush | 93% | 90% | 87% | 71% | 50–100bb | g1 |
| AT+fl | flush | 93% | 91% | 88% | 70% | 50–100bb | g1 |
| A9+fl | flush | 92% | 91% | 88% | 70% | 50–100bb | g1 |
| AJ+fl | flush | 92% | 90% | 88% | 70% | 50–100bb | g1 |
| AA+fl | flush | 92% | 89% | 89% | 68% | 50–100bb | g1 |
| A2+fl | flush | 85% | 87% | 84% | 67% | 50–100bb | g1 |
| AK+fl | flush | 89% | 90% | 88% | 66% | 50–100bb | g1 |
| A6+fl | flush | 88% | 88% | 85% | 66% | 50–100bb | g1 |
| A5+fl | flush | 87% | 87% | 85% | 66% | 50–100bb | g1 |
| A3+fl | flush | 85% | 86% | 84% | 66% | 50–100bb | g1 |
| A4+fl | flush | 86% | 87% | 85% | 65% | 50–100bb | g1 |
| K3+fl | flush | 88% | 91% | 89% | 65% | 50–100bb | g1 |
| K4+fl | flush | 87% | 89% | 87% | 64% | 50–100bb | g1 |
| K2+fl | flush | 87% | 90% | 87% | 64% | 50–100bb | g1 |
| KJ+fl | flush | 87% | 89% | 87% | 64% | 50–100bb | g1 |
| K5+fl | flush | 87% | 90% | 87% | 64% | 50–100bb | g1 |
| KT+fl | flush | 88% | 89% | 87% | 63% | 50–100bb | g1 |
| K8+fl | flush | 87% | 89% | 87% | 63% | 50–100bb | g1 |
| K6+fl | flush | 86% | 87% | 84% | 63% | 50–100bb | g1 |
| 44+fl | flushlo | 78% | 81% | 79% | 63% | 50–100bb | g1 |
| 22+fl | flushlo | 76% | 80% | 78% | 63% | 50–100bb | g1 |
| K9+fl | flush | 87% | 90% | 87% | 63% | 50–100bb | g1 |
| KK+fl | flush | 87% | 90% | 87% | 63% | 50–100bb | g1 |
| 43+fl | flushlo | 79% | 83% | 80% | 63% | 50–100bb | g1 |
| 66+fl | flushlo | 82% | 84% | 80% | 62% | 50–100bb | g1 |
| 64+fl | flushlo | 83% | 84% | 82% | 62% | 50–100bb | g1 |
| 54+fl | flushlo | 81% | 83% | 79% | 62% | 50–100bb | g1 |
| 65+fl | flushlo | 83% | 84% | 80% | 62% | 50–100bb | g1 |
| 33+fl | flushlo | 78% | 82% | 78% | 61% | 50–100bb | g1 |
| 55+fl | flushlo | 81% | 83% | 80% | 60% | 50–100bb | g1 |
| QQ | straight | 70% | 69% | 61% | 40% | 25–50bb | g2 |
| Q6 | straight | 69% | 66% | 59% | 40% | 25–50bb | g2 |
| Q5 | straight | 68% | 66% | 59% | 42% | 25–50bb | g2 |
| AQ | straight | 66% | 66% | 58% | 37% | 25–50bb | g2 |
| QT | straight | 68% | 65% | 57% | 42% | 25–50bb | g2 |
| Q7 | straight | 68% | 66% | 57% | 38% | 25–50bb | g2 |
| Q9 | straight | 68% | 65% | 57% | 41% | 25–50bb | g2 |
| Q8 | straight | 67% | 65% | 57% | 40% | 25–50bb | g2 |
| QJ | straight | 67% | 66% | 56% | 41% | 25–50bb | g2 |
| KQ | straight | 72% | 77% | 70% | 55% | 50–100bb | g2 |
| 77 | straight | 58% | 49% | 37% | 17% | 0–5bb | g3 |
| T7 | straight | 57% | 48% | 36% | 18% | 0–5bb | g3 |
| 75 | straight | 57% | 48% | 38% | 18% | 0–5bb | g3 |
| 76 | straight | 56% | 48% | 38% | 19% | 0–5bb | g3 |
| 87 | straight | 56% | 47% | 35% | 18% | 0–5bb | g3 |
| K7 | straight | 56% | 46% | 37% | 19% | 0–5bb | g3 |
| J7 | straight | 56% | 47% | 34% | 18% | 0–5bb | g3 |
| 97 | straight | 56% | 48% | 35% | 18% | 0–5bb | g3 |
| A7 | straight | 56% | 47% | 37% | 13% | 0–5bb | g3 |
| JJ | twopair | 52% | 41% | 25% | 14% | 0–5bb | g4 |
| TT | twopair | 52% | 43% | 32% | 12% | 0–5bb | g4 |
| 99 | twopair | 52% | 40% | 27% | 13% | 0–5bb | g4 |
| 88 | twopair | 51% | 41% | 28% | 13% | 0–5bb | g4 |
| 33 | twopair | 50% | 40% | 31% | 14% | 0–5bb | g4 |
| KK | op | 38% | 21% | 8% | 14% | 0–5bb | g5 |
| AA | op | 36% | 26% | 10% | 5% | 0–5bb | g5 |
| JT | twopair | 49% | 39% | 25% | 12% | 0–5bb | g6 |
| J9 | twopair | 49% | 37% | 23% | 13% | 0–5bb | g6 |
| J8 | twopair | 48% | 34% | 20% | 13% | 0–5bb | g6 |
| T9 | twopair | 45% | 31% | 18% | 13% | 0–5bb | g6 |
| T8 | twopair | 44% | 29% | 14% | 12% | 0–5bb | g6 |
| 98 | twopair | 43% | 29% | 13% | 13% | 0–5bb | g6 |
| KJ | tpgk | 38% | 22% | 6% | 11% | 0–5bb | g7 |
| AJ | tpgk | 38% | 25% | 8% | 9% | 0–5bb | g7 |
| AT | mp | 28% | 17% | 0% | 5% | 0–5bb | g8 |
| KT | mp | 27% | 14% | 0% | 6% | 0–5bb | g8 |
| A9 | bp | 21% | 10% | 0% | 3% | 0–5bb | g9 |
| K9 | bp | 21% | 10% | 0% | 3% | 0–5bb | g9 |
| 96 | bp | 19% | 9% | 0% | 3% | 0–5bb | g9 |
| A8 | bp | 16% | 8% | 0% | 1% | 0–5bb | g9 |
| K8 | bp | 16% | 9% | 0% | 1% | 0–5bb | g9 |
| 86 | bp | 14% | 7% | 0% | 2% | 0–5bb | g9 |
| 66 | spp | 13% | 7% | 0% | 1% | 0–5bb | g9 |
| 55 | spp | 12% | 7% | 0% | 1% | 0–5bb | g9 |
| 44 | spp | 10% | 5% | 0% | 1% | 0–5bb | g9 |
| K3 | bp | 8% | 4% | 0% | 0% | 0–5bb | g9 |
| A3 | bp | 7% | 4% | 0% | 0% | 0–5bb | g9 |
| 43 | bp | 6% | 3% | 0% | 0% | 0–5bb | g9 |
| 22 | spp | 4% | 1% | 0% | 0% | 0–5bb | g9 |
| AK | khnd | 4% | 1% | 0% | 0% | Pot is too big | g10 |
| A2 | khnd | 3% | 1% | 0% | 0% | Pot is too big | g10 |
| A5 | khnd | 3% | 1% | 0% | 0% | Pot is too big | g10 |
| A4 | khnd | 3% | 1% | 0% | 0% | Pot is too big | g10 |
| A6 | khnd | 3% | 1% | 0% | 0% | Pot is too big | g10 |
