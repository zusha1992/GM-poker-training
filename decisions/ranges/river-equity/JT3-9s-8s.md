# JT3-9s-8s river (J♠ T♠ 3♣ 9♠ 8♠): equity groups

Generated 2026-11-16 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♠ flushes: AA–QQ, 77–22, AK–A2, KQ–K2, QJ–Q9, Q7–Q5, 76, 75, 65, 64, 54, 43 | 88% | 87% | 85% | 77% |
| g2 | 25–50bb | Straights | QQ, AQ, KQ, QJ, QT, Q7–Q5 | 67% | 60% | 55% | 44% |
| g3 | 5–15bb | Straights | Q9, Q8 | 64% | 56% | 49% | 42% |
| g4 | 0–5bb | Straights | 77, A7, K7, J7, T7, 97, 87, 76, 75 | 51% | 35% | 28% | 26% |
| g5 | 0–5bb | Sets | JJ–88, 33 | 46% | 32% | 23% | 25% |
| g6 | 0–5bb | Overpairs | AA, KK | 24% | 12% | 4% | 21% |
| g7 | 0–5bb | Two pair | JT–J8, T9, T8, 98 | 39% | 25% | 17% | 25% |
| g8 | 0–5bb | Top pair, good kicker | AJ, KJ | 24% | 12% | 2% | 20% |
| g9 | 0–5bb | Second pair | AT, KT | 14% | 7% | 0% | 11% |
| g10 | 0–5bb | Small pairs | 66–44, 22, A9, A8, A3, K9, K8, K3, 96, 86, 43 | 5% | 3% | 0% | 3% |
| g11 | Pot is too big | Ace-high | AK, A6–A4, A2 | 0% | 0% | 0% | 0% |

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
| AQ+fl | flush | 95% | 94% | 93% | 90% | 50–100bb | g1 |
| KQ+fl | flush | 94% | 93% | 92% | 87% | 50–100bb | g1 |
| 76+fl | flush | 91% | 89% | 87% | 83% | 50–100bb | g1 |
| 77+fl | flush | 92% | 89% | 87% | 83% | 50–100bb | g1 |
| 75+fl | flush | 92% | 89% | 87% | 83% | 50–100bb | g1 |
| A7+fl | flush | 91% | 89% | 87% | 81% | 50–100bb | g1 |
| A8+fl | flush | 90% | 87% | 86% | 81% | 50–100bb | g1 |
| AJ+fl | flush | 90% | 87% | 87% | 79% | 50–100bb | g1 |
| A9+fl | flush | 90% | 88% | 86% | 79% | 50–100bb | g1 |
| AA+fl | flush | 90% | 88% | 86% | 78% | 50–100bb | g1 |
| AT+fl | flush | 90% | 88% | 86% | 78% | 50–100bb | g1 |
| K7+fl | flush | 89% | 88% | 86% | 77% | 50–100bb | g1 |
| AK+fl | flush | 88% | 87% | 85% | 74% | 50–100bb | g1 |
| K2+fl | flush | 87% | 85% | 84% | 73% | 50–100bb | g1 |
| A4+fl | flush | 84% | 83% | 82% | 73% | 50–100bb | g1 |
| A5+fl | flush | 85% | 84% | 82% | 73% | 50–100bb | g1 |
| K3+fl | flush | 86% | 85% | 84% | 73% | 50–100bb | g1 |
| K9+fl | flush | 86% | 84% | 83% | 73% | 50–100bb | g1 |
| K8+fl | flush | 86% | 84% | 83% | 73% | 50–100bb | g1 |
| KT+fl | flush | 86% | 85% | 84% | 72% | 50–100bb | g1 |
| KJ+fl | flush | 87% | 85% | 84% | 72% | 50–100bb | g1 |
| A6+fl | flush | 86% | 85% | 83% | 72% | 50–100bb | g1 |
| K5+fl | flush | 87% | 85% | 83% | 71% | 50–100bb | g1 |
| K4+fl | flush | 86% | 84% | 83% | 71% | 50–100bb | g1 |
| A3+fl | flush | 84% | 84% | 82% | 71% | 50–100bb | g1 |
| A2+fl | flush | 84% | 83% | 81% | 71% | 50–100bb | g1 |
| KK+fl | flush | 87% | 85% | 84% | 70% | 50–100bb | g1 |
| K6+fl | flush | 83% | 83% | 81% | 68% | 50–100bb | g1 |
| 66+fl | flushlo | 81% | 80% | 78% | 65% | 50–100bb | g1 |
| 64+fl | flushlo | 81% | 80% | 78% | 65% | 50–100bb | g1 |
| 43+fl | flushlo | 77% | 79% | 77% | 65% | 50–100bb | g1 |
| 65+fl | flushlo | 80% | 79% | 79% | 64% | 50–100bb | g1 |
| 55+fl | flushlo | 79% | 79% | 76% | 64% | 50–100bb | g1 |
| 44+fl | flushlo | 77% | 79% | 77% | 63% | 50–100bb | g1 |
| 33+fl | flushlo | 77% | 79% | 77% | 63% | 50–100bb | g1 |
| 54+fl | flushlo | 79% | 78% | 77% | 63% | 50–100bb | g1 |
| 22+fl | flushlo | 77% | 77% | 75% | 62% | 50–100bb | g1 |
| KQ | straight | 73% | 73% | 70% | 54% | 50–100bb | g2 |
| QQ | straight | 68% | 60% | 53% | 43% | 25–50bb | g2 |
| Q5 | straight | 66% | 57% | 52% | 43% | 25–50bb | g2 |
| QT | straight | 65% | 57% | 52% | 42% | 25–50bb | g2 |
| Q6 | straight | 65% | 57% | 51% | 43% | 25–50bb | g2 |
| AQ | straight | 64% | 57% | 51% | 40% | 25–50bb | g2 |
| Q7 | straight | 65% | 58% | 51% | 41% | 25–50bb | g2 |
| QJ | straight | 65% | 56% | 51% | 42% | 25–50bb | g2 |
| Q8 | straight | 65% | 56% | 49% | 42% | 5–15bb | g3 |
| Q9 | straight | 64% | 56% | 49% | 42% | 5–15bb | g3 |
| A7 | straight | 52% | 35% | 28% | 24% | 0–5bb | g4 |
| 77 | straight | 51% | 36% | 28% | 27% | 0–5bb | g4 |
| T7 | straight | 51% | 35% | 28% | 26% | 0–5bb | g4 |
| 76 | straight | 51% | 36% | 29% | 27% | 0–5bb | g4 |
| 75 | straight | 51% | 36% | 29% | 27% | 0–5bb | g4 |
| 87 | straight | 50% | 34% | 27% | 27% | 0–5bb | g4 |
| K7 | straight | 49% | 35% | 28% | 25% | 0–5bb | g4 |
| J7 | straight | 49% | 34% | 27% | 28% | 0–5bb | g4 |
| 97 | straight | 49% | 34% | 25% | 28% | 0–5bb | g4 |
| 33 | twopair | 47% | 33% | 25% | 26% | 0–5bb | g5 |
| JJ | twopair | 46% | 33% | 23% | 23% | 0–5bb | g5 |
| TT | twopair | 46% | 31% | 25% | 24% | 0–5bb | g5 |
| 88 | twopair | 45% | 31% | 22% | 26% | 0–5bb | g5 |
| 99 | twopair | 44% | 30% | 21% | 26% | 0–5bb | g5 |
| AA | op | 25% | 12% | 4% | 21% | 0–5bb | g6 |
| KK | op | 22% | 11% | 4% | 20% | 0–5bb | g6 |
| JT | twopair | 44% | 31% | 23% | 25% | 0–5bb | g7 |
| J9 | twopair | 43% | 28% | 20% | 24% | 0–5bb | g7 |
| J8 | twopair | 41% | 26% | 17% | 25% | 0–5bb | g7 |
| T9 | twopair | 36% | 21% | 12% | 26% | 0–5bb | g7 |
| T8 | twopair | 33% | 18% | 9% | 25% | 0–5bb | g7 |
| 98 | twopair | 32% | 17% | 7% | 25% | 0–5bb | g7 |
| AJ | tpgk | 26% | 13% | 4% | 21% | 0–5bb | g8 |
| KJ | tpgk | 22% | 11% | 1% | 18% | 0–5bb | g8 |
| AT | mp | 15% | 8% | 0% | 13% | 0–5bb | g9 |
| KT | mp | 12% | 6% | 0% | 9% | 0–5bb | g9 |
| A9 | bp | 9% | 5% | 0% | 6% | 0–5bb | g10 |
| K9 | bp | 8% | 4% | 0% | 5% | 0–5bb | g10 |
| A8 | bp | 7% | 4% | 0% | 4% | 0–5bb | g10 |
| K8 | bp | 6% | 4% | 0% | 4% | 0–5bb | g10 |
| 96 | bp | 6% | 3% | 0% | 4% | 0–5bb | g10 |
| 86 | bp | 5% | 3% | 0% | 3% | 0–5bb | g10 |
| 66 | spp | 5% | 2% | 0% | 3% | 0–5bb | g10 |
| 55 | spp | 3% | 2% | 0% | 2% | 0–5bb | g10 |
| 44 | spp | 2% | 1% | 0% | 1% | 0–5bb | g10 |
| K3 | bp | 1% | 0% | 0% | 0% | 0–5bb | g10 |
| A3 | bp | 1% | 1% | 0% | 0% | 0–5bb | g10 |
| 43 | bp | 1% | 0% | 0% | 0% | 0–5bb | g10 |
| 22 | spp | 0% | 0% | 0% | 0% | 0–5bb | g10 |
| A2 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g11 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g11 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g11 |
| AK | khnd | 0% | 0% | 0% | 0% | Pot is too big | g11 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g11 |
