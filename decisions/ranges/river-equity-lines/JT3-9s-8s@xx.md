# JT3-9s-8s@xx river (J♠ T♠ 3♣ 9♠ 8♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♠ flushes: AA–QQ, 77–22, AK–A2, KQ–K2, QJ–Q9, Q7–Q5, 76, 75, 65, 64, 54, 43 | 90% | 89% | 86% | 73% |
| g2 | 25–50bb | Straights | QQ, AQ, KQ, QJ–Q5 | 69% | 67% | 57% | 39% |
| g3 | 0–5bb | Straights | 77, A7, K7, J7, T7, 97, 87, 76, 75 | 58% | 48% | 33% | 4% |
| g4 | 0–5bb | Sets | JJ–88, 33 | 52% | 41% | 24% | 0% |
| g5 | 0–5bb | Overpairs | AA, KK | 39% | 24% | 6% | 0% |
| g6 | 0–5bb | Two pair | JT–J8, T9, T8, 98 | 48% | 35% | 16% | 0% |
| g7 | 0–5bb | Top pair, good kicker | AJ, KJ | 41% | 25% | 4% | 0% |
| g8 | 0–5bb | Second pair | AT, KT | 34% | 19% | 0% | 0% |
| g9 | 0–5bb | Small pairs | 66–44, 22, A9, A8, A3, K9, K8, K3, 96, 86, 43 | 21% | 11% | 0% | 0% |
| g10 | Pot is too big | Ace-high | AK, A6–A4, A2 | 10% | 5% | 0% | 0% |

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
| AQ+fl | flush | 97% | 96% | 94% | 83% | 50–100bb | g1 |
| KQ+fl | flush | 94% | 94% | 91% | 83% | 50–100bb | g1 |
| 76+fl | flush | 97% | 94% | 92% | 76% | 50–100bb | g1 |
| 75+fl | flush | 97% | 94% | 93% | 75% | 50–100bb | g1 |
| 77+fl | flush | 96% | 93% | 91% | 73% | 50–100bb | g1 |
| A7+fl | flush | 95% | 92% | 90% | 72% | 50–100bb | g1 |
| K7+fl | flush | 91% | 90% | 88% | 71% | 50–100bb | g1 |
| A9+fl | flush | 92% | 90% | 87% | 70% | 50–100bb | g1 |
| AJ+fl | flush | 92% | 90% | 87% | 69% | 50–100bb | g1 |
| AA+fl | flush | 93% | 90% | 89% | 69% | 50–100bb | g1 |
| K2+fl | flush | 86% | 86% | 82% | 68% | 50–100bb | g1 |
| A6+fl | flush | 88% | 87% | 84% | 68% | 50–100bb | g1 |
| KJ+fl | flush | 87% | 86% | 81% | 68% | 50–100bb | g1 |
| A4+fl | flush | 85% | 86% | 83% | 68% | 50–100bb | g1 |
| K9+fl | flush | 86% | 86% | 81% | 68% | 50–100bb | g1 |
| A8+fl | flush | 93% | 90% | 87% | 68% | 50–100bb | g1 |
| AK+fl | flush | 90% | 89% | 86% | 68% | 50–100bb | g1 |
| K4+fl | flush | 86% | 87% | 82% | 68% | 50–100bb | g1 |
| K3+fl | flush | 86% | 86% | 83% | 68% | 50–100bb | g1 |
| K8+fl | flush | 87% | 85% | 82% | 68% | 50–100bb | g1 |
| AT+fl | flush | 92% | 90% | 88% | 67% | 50–100bb | g1 |
| 43+fl | flushlo | 79% | 81% | 75% | 67% | 50–100bb | g1 |
| 65+fl | flushlo | 83% | 83% | 78% | 67% | 50–100bb | g1 |
| A3+fl | flush | 84% | 85% | 82% | 67% | 50–100bb | g1 |
| KK+fl | flush | 86% | 86% | 82% | 67% | 50–100bb | g1 |
| K5+fl | flush | 86% | 87% | 82% | 67% | 50–100bb | g1 |
| 54+fl | flushlo | 82% | 82% | 77% | 67% | 50–100bb | g1 |
| KT+fl | flush | 86% | 86% | 82% | 67% | 50–100bb | g1 |
| A5+fl | flush | 88% | 87% | 83% | 67% | 50–100bb | g1 |
| K6+fl | flush | 85% | 84% | 80% | 67% | 50–100bb | g1 |
| 64+fl | flushlo | 84% | 83% | 79% | 67% | 50–100bb | g1 |
| A2+fl | flush | 85% | 85% | 81% | 66% | 50–100bb | g1 |
| 33+fl | flushlo | 75% | 79% | 73% | 66% | 50–100bb | g1 |
| 22+fl | flushlo | 76% | 79% | 73% | 66% | 50–100bb | g1 |
| 66+fl | flushlo | 83% | 83% | 78% | 66% | 50–100bb | g1 |
| 55+fl | flushlo | 80% | 81% | 77% | 66% | 50–100bb | g1 |
| 44+fl | flushlo | 78% | 79% | 75% | 66% | 50–100bb | g1 |
| KQ | straight | 73% | 75% | 67% | 56% | 50–100bb | g2 |
| AQ | straight | 68% | 65% | 56% | 35% | 25–50bb | g2 |
| Q5 | straight | 68% | 66% | 56% | 35% | 25–50bb | g2 |
| Q6 | straight | 68% | 66% | 56% | 36% | 25–50bb | g2 |
| QT | straight | 68% | 65% | 55% | 36% | 25–50bb | g2 |
| QQ | straight | 69% | 68% | 55% | 34% | 25–50bb | g2 |
| Q9 | straight | 68% | 65% | 54% | 36% | 25–50bb | g2 |
| Q8 | straight | 68% | 65% | 54% | 35% | 25–50bb | g2 |
| Q7 | straight | 69% | 65% | 54% | 32% | 25–50bb | g2 |
| QJ | straight | 68% | 65% | 53% | 36% | 25–50bb | g2 |
| 77 | straight | 60% | 49% | 33% | 2% | 0–5bb | g3 |
| 97 | straight | 59% | 46% | 33% | 4% | 0–5bb | g3 |
| T7 | straight | 58% | 47% | 33% | 4% | 0–5bb | g3 |
| 76 | straight | 58% | 48% | 34% | 5% | 0–5bb | g3 |
| J7 | straight | 57% | 49% | 31% | 5% | 0–5bb | g3 |
| 87 | straight | 57% | 47% | 32% | 4% | 0–5bb | g3 |
| K7 | straight | 57% | 47% | 33% | 4% | 0–5bb | g3 |
| 75 | straight | 57% | 47% | 34% | 4% | 0–5bb | g3 |
| A7 | straight | 56% | 48% | 33% | 4% | 0–5bb | g3 |
| JJ | twopair | 53% | 42% | 20% | 0% | 0–5bb | g4 |
| TT | twopair | 52% | 41% | 24% | 0% | 0–5bb | g4 |
| 99 | twopair | 52% | 42% | 25% | 0% | 0–5bb | g4 |
| 33 | twopair | 52% | 40% | 25% | 0% | 0–5bb | g4 |
| 88 | twopair | 51% | 41% | 24% | 0% | 0–5bb | g4 |
| AA | op | 39% | 24% | 7% | 0% | 0–5bb | g5 |
| KK | op | 39% | 24% | 5% | 0% | 0–5bb | g5 |
| JT | twopair | 50% | 39% | 20% | 0% | 0–5bb | g6 |
| J9 | twopair | 48% | 37% | 18% | 0% | 0–5bb | g6 |
| J8 | twopair | 48% | 35% | 16% | 0% | 0–5bb | g6 |
| T9 | twopair | 46% | 33% | 13% | 0% | 0–5bb | g6 |
| 98 | twopair | 45% | 28% | 9% | 0% | 0–5bb | g6 |
| T8 | twopair | 45% | 30% | 10% | 0% | 0–5bb | g6 |
| AJ | tpgk | 42% | 26% | 5% | 0% | 0–5bb | g7 |
| KJ | tpgk | 40% | 24% | 3% | 0% | 0–5bb | g7 |
| KT | mp | 34% | 18% | 0% | 0% | 0–5bb | g8 |
| AT | mp | 34% | 20% | 0% | 0% | 0–5bb | g8 |
| A9 | bp | 28% | 16% | 0% | 0% | 0–5bb | g9 |
| K9 | bp | 28% | 15% | 0% | 0% | 0–5bb | g9 |
| 96 | bp | 26% | 13% | 0% | 0% | 0–5bb | g9 |
| A8 | bp | 23% | 11% | 0% | 0% | 0–5bb | g9 |
| K8 | bp | 23% | 12% | 0% | 0% | 0–5bb | g9 |
| 86 | bp | 20% | 10% | 0% | 0% | 0–5bb | g9 |
| 66 | spp | 17% | 10% | 0% | 0% | 0–5bb | g9 |
| 55 | spp | 16% | 9% | 0% | 0% | 0–5bb | g9 |
| A3 | bp | 15% | 8% | 0% | 0% | 0–5bb | g9 |
| 44 | spp | 15% | 8% | 0% | 0% | 0–5bb | g9 |
| K3 | bp | 14% | 8% | 0% | 0% | 0–5bb | g9 |
| 43 | bp | 13% | 7% | 0% | 0% | 0–5bb | g9 |
| 22 | spp | 11% | 6% | 0% | 0% | 0–5bb | g9 |
| AK | khnd | 11% | 5% | 0% | 0% | Pot is too big | g10 |
| A4 | khnd | 9% | 4% | 0% | 0% | Pot is too big | g10 |
| A5 | khnd | 9% | 5% | 0% | 0% | Pot is too big | g10 |
| A6 | khnd | 9% | 4% | 0% | 0% | Pot is too big | g10 |
| A2 | khnd | 9% | 4% | 0% | 0% | Pot is too big | g10 |
