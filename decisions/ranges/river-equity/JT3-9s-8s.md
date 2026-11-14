# JT3-9s-8s river (J♠ T♠ 3♣ 9♠ 8♠): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes & straights | KQ · ♠ flushes: AA–QQ, 77–22, AK–A2, KQ–K2, QJ–Q9, Q7–Q5, 76, 75, 65, 64, 54, 43 | 87% | 86% | 85% | 76% |
| g2 | 25–50bb | Straights | QQ, AQ, QT–Q5 | 66% | 56% | 51% | 42% |
| g3 | 0–5bb | Straights | 77, A7, QJ, T7, 97, 76 | 55% | 41% | 35% | 31% |
| g4 | Pot is too big | Straights & sets | JJ–88, 33, K7, J7, 87, 75 | 48% | 33% | 25% | 25% |
| g5 | Pot is too big | Overpairs | AA, KK | 25% | 12% | 4% | 20% |
| g6 | Pot is too big | Two pair | JT–J8, T9, T8, 98 | 39% | 25% | 17% | 25% |
| g7 | Pot is too big | Top pair, good kicker | AJ, KJ | 23% | 11% | 2% | 19% |
| g8 | Pot is too big | Second pair | AT, KT | 13% | 7% | 0% | 10% |
| g9 | Pot is too big | Small pairs | 66–44, 22, A9, A8, A3, K9, K8, K3, 96, 86, 43 | 5% | 3% | 0% | 3% |
| g10 | Pot is too big | Ace-high | AK, A6–A4, A2 | 0% | 0% | 0% | 0% |

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
| AQ+fl | flush | 96% | 94% | 93% | 90% | 50–100bb | g1 |
| KQ+fl | flush | 94% | 93% | 92% | 86% | 50–100bb | g1 |
| 75+fl | flush | 92% | 88% | 87% | 84% | 50–100bb | g1 |
| 76+fl | flush | 92% | 89% | 87% | 83% | 50–100bb | g1 |
| 77+fl | flush | 93% | 89% | 89% | 83% | 50–100bb | g1 |
| A7+fl | flush | 92% | 88% | 87% | 82% | 50–100bb | g1 |
| A8+fl | flush | 89% | 87% | 85% | 79% | 50–100bb | g1 |
| A9+fl | flush | 90% | 87% | 86% | 79% | 50–100bb | g1 |
| AT+fl | flush | 90% | 88% | 86% | 79% | 50–100bb | g1 |
| K7+fl | flush | 90% | 88% | 86% | 78% | 50–100bb | g1 |
| AA+fl | flush | 90% | 88% | 86% | 78% | 50–100bb | g1 |
| AJ+fl | flush | 90% | 88% | 87% | 78% | 50–100bb | g1 |
| AK+fl | flush | 89% | 87% | 85% | 76% | 50–100bb | g1 |
| K9+fl | flush | 87% | 84% | 83% | 74% | 50–100bb | g1 |
| A6+fl | flush | 86% | 84% | 82% | 73% | 50–100bb | g1 |
| K3+fl | flush | 87% | 86% | 84% | 73% | 50–100bb | g1 |
| K2+fl | flush | 87% | 86% | 83% | 73% | 50–100bb | g1 |
| K4+fl | flush | 86% | 85% | 83% | 73% | 50–100bb | g1 |
| A4+fl | flush | 84% | 84% | 81% | 73% | 50–100bb | g1 |
| K5+fl | flush | 87% | 85% | 83% | 73% | 50–100bb | g1 |
| A5+fl | flush | 85% | 85% | 83% | 72% | 50–100bb | g1 |
| KJ+fl | flush | 87% | 85% | 83% | 72% | 50–100bb | g1 |
| KT+fl | flush | 87% | 86% | 83% | 72% | 50–100bb | g1 |
| KK+fl | flush | 86% | 85% | 84% | 72% | 50–100bb | g1 |
| K8+fl | flush | 86% | 84% | 83% | 71% | 50–100bb | g1 |
| A2+fl | flush | 84% | 84% | 82% | 71% | 50–100bb | g1 |
| A3+fl | flush | 84% | 83% | 81% | 70% | 50–100bb | g1 |
| K6+fl | flush | 83% | 83% | 82% | 68% | 50–100bb | g1 |
| 65+fl | flushlo | 80% | 80% | 77% | 65% | 50–100bb | g1 |
| 66+fl | flushlo | 80% | 80% | 77% | 64% | 50–100bb | g1 |
| 64+fl | flushlo | 81% | 79% | 78% | 64% | 50–100bb | g1 |
| 43+fl | flushlo | 78% | 78% | 78% | 63% | 50–100bb | g1 |
| 54+fl | flushlo | 80% | 79% | 77% | 63% | 50–100bb | g1 |
| 33+fl | flushlo | 77% | 78% | 77% | 63% | 50–100bb | g1 |
| 44+fl | flushlo | 78% | 78% | 76% | 62% | 50–100bb | g1 |
| 55+fl | flushlo | 78% | 80% | 77% | 62% | 50–100bb | g1 |
| 22+fl | flushlo | 77% | 77% | 75% | 62% | 50–100bb | g1 |
| KQ | straight | 73% | 73% | 70% | 54% | 50–100bb | g1 |
| QQ | straight | 70% | 61% | 54% | 45% | 25–50bb | g2 |
| Q6 | straight | 65% | 56% | 52% | 43% | 25–50bb | g2 |
| Q5 | straight | 66% | 57% | 52% | 42% | 25–50bb | g2 |
| Q7 | straight | 65% | 57% | 51% | 41% | 25–50bb | g2 |
| AQ | straight | 65% | 56% | 51% | 41% | 25–50bb | g2 |
| QT | straight | 66% | 56% | 50% | 42% | 25–50bb | g2 |
| Q8 | straight | 64% | 55% | 50% | 43% | 25–50bb | g2 |
| Q9 | straight | 64% | 55% | 50% | 43% | 25–50bb | g2 |
| QJ | straight | 65% | 56% | 49% | 42% | 5–15bb | g3 |
| A7 | straight | 51% | 34% | 28% | 25% | 0–5bb | g3 |
| 77 | straight | 51% | 35% | 29% | 28% | 0–5bb | g3 |
| 76 | straight | 51% | 35% | 29% | 27% | 0–5bb | g3 |
| 97 | straight | 50% | 33% | 26% | 27% | 0–5bb | g3 |
| T7 | straight | 50% | 33% | 28% | 28% | 0–5bb | g3 |
| 75 | straight | 50% | 35% | 29% | 28% | Pot is too big | g4 |
| J7 | straight | 50% | 35% | 27% | 27% | Pot is too big | g4 |
| K7 | straight | 49% | 35% | 29% | 25% | Pot is too big | g4 |
| 87 | straight | 49% | 34% | 27% | 27% | Pot is too big | g4 |
| TT | twopair | 47% | 33% | 26% | 24% | Pot is too big | g4 |
| JJ | twopair | 47% | 32% | 22% | 23% | Pot is too big | g4 |
| 33 | twopair | 45% | 31% | 25% | 26% | Pot is too big | g4 |
| 99 | twopair | 45% | 30% | 21% | 25% | Pot is too big | g4 |
| 88 | twopair | 45% | 31% | 22% | 25% | Pot is too big | g4 |
| AA | op | 27% | 13% | 4% | 20% | Pot is too big | g5 |
| KK | op | 23% | 11% | 4% | 20% | Pot is too big | g5 |
| JT | twopair | 44% | 31% | 22% | 24% | Pot is too big | g6 |
| J9 | twopair | 43% | 29% | 20% | 25% | Pot is too big | g6 |
| J8 | twopair | 40% | 27% | 17% | 25% | Pot is too big | g6 |
| T9 | twopair | 35% | 21% | 13% | 25% | Pot is too big | g6 |
| 98 | twopair | 32% | 16% | 7% | 25% | Pot is too big | g6 |
| T8 | twopair | 32% | 17% | 8% | 25% | Pot is too big | g6 |
| AJ | tpgk | 25% | 13% | 3% | 22% | Pot is too big | g7 |
| KJ | tpgk | 22% | 10% | 1% | 17% | Pot is too big | g7 |
| AT | mp | 14% | 8% | 0% | 12% | Pot is too big | g8 |
| KT | mp | 12% | 7% | 0% | 9% | Pot is too big | g8 |
| A9 | bp | 10% | 5% | 0% | 6% | Pot is too big | g9 |
| K9 | bp | 8% | 4% | 0% | 5% | Pot is too big | g9 |
| 96 | bp | 6% | 3% | 0% | 3% | Pot is too big | g9 |
| A8 | bp | 6% | 4% | 0% | 4% | Pot is too big | g9 |
| K8 | bp | 6% | 4% | 0% | 4% | Pot is too big | g9 |
| 86 | bp | 5% | 3% | 0% | 4% | Pot is too big | g9 |
| 66 | spp | 4% | 3% | 0% | 3% | Pot is too big | g9 |
| 55 | spp | 3% | 2% | 0% | 2% | Pot is too big | g9 |
| 44 | spp | 2% | 1% | 0% | 1% | Pot is too big | g9 |
| A3 | bp | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| K3 | bp | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| 43 | bp | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| 22 | spp | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| AK | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
