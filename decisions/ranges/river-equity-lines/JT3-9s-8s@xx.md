# JT3-9s-8s@xx river (J♠ T♠ 3♣ 9♠ 8♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♠ flushes: AA–QQ, 77–22, AK–A2, KQ–K2, QJ–Q9, Q7–Q5, 76, 75, 65, 64, 54, 43 | 90% | 89% | 86% | 73% |
| g2 | 25–50bb | K-high straights | KQ | 72% | 74% | 67% | 58% |
| g3 | 25–50bb | Q-high straights | QQ, AQ, QJ–Q5 | 68% | 65% | 55% | 36% |
| g4 | 0–5bb | J-high straights | 77, A7, K7, J7, T7, 97, 87, 76, 75 | 58% | 48% | 33% | 4% |
| g5 | 0–5bb | Sets | JJ–88, 33 | 51% | 41% | 24% | 0% |
| g6 | 0–5bb | Overpairs | AA, KK | 38% | 23% | 6% | 0% |
| g7 | 0–5bb | Two pair | JT–J8, T9, T8, 98 | 48% | 34% | 16% | 0% |
| g8 | 0–5bb | Top pair, good kicker | AJ, KJ | 40% | 26% | 4% | 0% |
| g9 | 0–5bb | Second pair | AT, KT | 34% | 19% | 0% | 0% |
| g10 | 0–5bb | Small pairs | 66–44, 22, A9, A8, A3, K9, K8, K3, 96, 86, 43 | 21% | 11% | 0% | 0% |
| g11 | Pot is too big | Ace-high | AK, A6–A4, A2 | 10% | 5% | 0% | 0% |

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
| KQ+fl | flush | 94% | 93% | 91% | 83% | 50–100bb | g1 |
| 75+fl | flush | 96% | 94% | 91% | 76% | 50–100bb | g1 |
| 76+fl | flush | 97% | 94% | 91% | 75% | 50–100bb | g1 |
| 77+fl | flush | 96% | 93% | 91% | 74% | 50–100bb | g1 |
| A7+fl | flush | 95% | 92% | 90% | 72% | 50–100bb | g1 |
| K7+fl | flush | 92% | 91% | 88% | 71% | 50–100bb | g1 |
| AJ+fl | flush | 93% | 89% | 87% | 69% | 50–100bb | g1 |
| A8+fl | flush | 92% | 90% | 88% | 69% | 50–100bb | g1 |
| AT+fl | flush | 92% | 90% | 87% | 69% | 50–100bb | g1 |
| AK+fl | flush | 89% | 89% | 86% | 69% | 50–100bb | g1 |
| AA+fl | flush | 93% | 91% | 88% | 68% | 50–100bb | g1 |
| KT+fl | flush | 86% | 86% | 82% | 68% | 50–100bb | g1 |
| A2+fl | flush | 85% | 84% | 80% | 68% | 50–100bb | g1 |
| K4+fl | flush | 86% | 87% | 82% | 68% | 50–100bb | g1 |
| A9+fl | flush | 93% | 91% | 87% | 67% | 50–100bb | g1 |
| A3+fl | flush | 84% | 85% | 80% | 67% | 50–100bb | g1 |
| K3+fl | flush | 87% | 86% | 83% | 67% | 50–100bb | g1 |
| K2+fl | flush | 86% | 86% | 82% | 67% | 50–100bb | g1 |
| K9+fl | flush | 86% | 85% | 81% | 67% | 50–100bb | g1 |
| 64+fl | flushlo | 83% | 84% | 79% | 67% | 50–100bb | g1 |
| K5+fl | flush | 86% | 86% | 82% | 67% | 50–100bb | g1 |
| 65+fl | flushlo | 83% | 83% | 79% | 67% | 50–100bb | g1 |
| 44+fl | flushlo | 79% | 79% | 74% | 67% | 50–100bb | g1 |
| A4+fl | flush | 87% | 85% | 82% | 67% | 50–100bb | g1 |
| KJ+fl | flush | 86% | 85% | 81% | 67% | 50–100bb | g1 |
| 43+fl | flushlo | 79% | 81% | 76% | 67% | 50–100bb | g1 |
| K8+fl | flush | 87% | 86% | 82% | 67% | 50–100bb | g1 |
| 54+fl | flushlo | 82% | 82% | 77% | 67% | 50–100bb | g1 |
| A5+fl | flush | 89% | 86% | 82% | 67% | 50–100bb | g1 |
| 66+fl | flushlo | 83% | 83% | 78% | 66% | 50–100bb | g1 |
| 55+fl | flushlo | 80% | 82% | 76% | 66% | 50–100bb | g1 |
| KK+fl | flush | 86% | 85% | 82% | 66% | 50–100bb | g1 |
| 33+fl | flushlo | 76% | 79% | 72% | 66% | 50–100bb | g1 |
| 22+fl | flushlo | 75% | 77% | 72% | 66% | 50–100bb | g1 |
| A6+fl | flush | 88% | 86% | 83% | 66% | 50–100bb | g1 |
| K6+fl | flush | 84% | 84% | 79% | 66% | 50–100bb | g1 |
| KQ | straight | 72% | 74% | 67% | 58% | 50–100bb | g2 |
| QQ | straight | 69% | 68% | 57% | 33% | 25–50bb | g3 |
| AQ | straight | 67% | 66% | 56% | 35% | 25–50bb | g3 |
| Q5 | straight | 69% | 66% | 56% | 36% | 25–50bb | g3 |
| Q6 | straight | 69% | 65% | 55% | 36% | 25–50bb | g3 |
| Q7 | straight | 69% | 66% | 55% | 32% | 25–50bb | g3 |
| Q9 | straight | 68% | 65% | 55% | 36% | 25–50bb | g3 |
| QT | straight | 68% | 65% | 54% | 36% | 25–50bb | g3 |
| Q8 | straight | 68% | 64% | 54% | 36% | 25–50bb | g3 |
| QJ | straight | 68% | 66% | 54% | 36% | 25–50bb | g3 |
| 77 | straight | 60% | 50% | 34% | 2% | 0–5bb | g4 |
| 76 | straight | 59% | 48% | 33% | 4% | 0–5bb | g4 |
| 75 | straight | 59% | 48% | 34% | 4% | 0–5bb | g4 |
| J7 | straight | 59% | 47% | 31% | 5% | 0–5bb | g4 |
| T7 | straight | 58% | 47% | 33% | 4% | 0–5bb | g4 |
| K7 | straight | 58% | 48% | 34% | 4% | 0–5bb | g4 |
| 97 | straight | 57% | 46% | 33% | 5% | 0–5bb | g4 |
| 87 | straight | 57% | 48% | 31% | 4% | 0–5bb | g4 |
| A7 | straight | 57% | 47% | 33% | 4% | 0–5bb | g4 |
| TT | twopair | 52% | 42% | 25% | 0% | 0–5bb | g5 |
| 99 | twopair | 52% | 42% | 25% | 0% | 0–5bb | g5 |
| JJ | twopair | 51% | 40% | 21% | 0% | 0–5bb | g5 |
| 33 | twopair | 51% | 41% | 25% | 0% | 0–5bb | g5 |
| 88 | twopair | 50% | 40% | 24% | 0% | 0–5bb | g5 |
| AA | op | 39% | 23% | 7% | 0% | 0–5bb | g6 |
| KK | op | 38% | 22% | 6% | 0% | 0–5bb | g6 |
| JT | twopair | 50% | 38% | 20% | 0% | 0–5bb | g7 |
| J9 | twopair | 49% | 35% | 18% | 0% | 0–5bb | g7 |
| J8 | twopair | 48% | 35% | 15% | 0% | 0–5bb | g7 |
| T9 | twopair | 46% | 32% | 14% | 0% | 0–5bb | g7 |
| T8 | twopair | 46% | 31% | 11% | 0% | 0–5bb | g7 |
| 98 | twopair | 45% | 28% | 9% | 0% | 0–5bb | g7 |
| AJ | tpgk | 40% | 26% | 5% | 0% | 0–5bb | g8 |
| KJ | tpgk | 40% | 25% | 3% | 0% | 0–5bb | g8 |
| AT | mp | 34% | 19% | 0% | 0% | 0–5bb | g9 |
| KT | mp | 33% | 19% | 0% | 0% | 0–5bb | g9 |
| A9 | bp | 28% | 15% | 0% | 0% | 0–5bb | g10 |
| K9 | bp | 26% | 15% | 0% | 0% | 0–5bb | g10 |
| 96 | bp | 25% | 14% | 0% | 0% | 0–5bb | g10 |
| A8 | bp | 23% | 11% | 0% | 0% | 0–5bb | g10 |
| K8 | bp | 22% | 10% | 0% | 0% | 0–5bb | g10 |
| 86 | bp | 20% | 11% | 0% | 0% | 0–5bb | g10 |
| 66 | spp | 18% | 10% | 0% | 0% | 0–5bb | g10 |
| K3 | bp | 16% | 8% | 0% | 0% | 0–5bb | g10 |
| A3 | bp | 15% | 8% | 0% | 0% | 0–5bb | g10 |
| 44 | spp | 15% | 8% | 0% | 0% | 0–5bb | g10 |
| 55 | spp | 15% | 9% | 0% | 0% | 0–5bb | g10 |
| 43 | bp | 14% | 7% | 0% | 0% | 0–5bb | g10 |
| 22 | spp | 11% | 6% | 0% | 0% | 0–5bb | g10 |
| AK | khnd | 12% | 5% | 0% | 0% | Pot is too big | g11 |
| A6 | khnd | 9% | 5% | 0% | 0% | Pot is too big | g11 |
| A2 | khnd | 9% | 4% | 0% | 0% | Pot is too big | g11 |
| A4 | khnd | 9% | 5% | 0% | 0% | Pot is too big | g11 |
| A5 | khnd | 9% | 4% | 0% | 0% | Pot is too big | g11 |
