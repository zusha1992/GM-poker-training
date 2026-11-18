# JT3-9s-8s river (J♠ T♠ 3♣ 9♠ 8♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♠ flushes: AA–QQ, 77–22, AK–A2, KQ–K2, QJ–Q9, Q7–Q5, 76, 75, 65, 64, 54, 43 | 88% | 87% | 86% | 77% |
| g2 | 25–50bb | K-high straights | KQ | 73% | 74% | 70% | 54% |
| g3 | 25–50bb | Q-high straights | QQ, AQ, QJ, Q9, Q7–Q5 | 65% | 57% | 51% | 42% |
| g4 | 5–15bb | Q-high straights | QT, Q8 | 65% | 56% | 50% | 42% |
| g5 | 0–5bb | J-high straights | 77, A7, K7, J7, T7, 97, 87, 76, 75 | 50% | 34% | 28% | 26% |
| g6 | 0–5bb | Sets | JJ–88, 33 | 46% | 31% | 23% | 25% |
| g7 | 0–5bb | Overpairs | AA, KK | 24% | 12% | 4% | 20% |
| g8 | 0–5bb | Two pair | JT–J8, T9, T8, 98 | 39% | 25% | 17% | 25% |
| g9 | 0–5bb | Top pair, good kicker | AJ, KJ | 23% | 12% | 2% | 19% |
| g10 | 0–5bb | Second pair | AT, KT | 13% | 8% | 0% | 11% |
| g11 | 0–5bb | Small pairs | 66–44, 22, A9, A8, A3, K9, K8, K3, 96, 86, 43 | 5% | 3% | 0% | 3% |
| g12 | Pot is too big | Ace-high | AK, A6–A4, A2 | 0% | 0% | 0% | 0% |

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
| KQ+fl | flush | 94% | 92% | 91% | 86% | 50–100bb | g1 |
| 76+fl | flush | 92% | 89% | 87% | 83% | 50–100bb | g1 |
| 77+fl | flush | 92% | 89% | 88% | 83% | 50–100bb | g1 |
| 75+fl | flush | 93% | 89% | 87% | 83% | 50–100bb | g1 |
| A7+fl | flush | 92% | 88% | 87% | 82% | 50–100bb | g1 |
| AT+fl | flush | 90% | 87% | 88% | 79% | 50–100bb | g1 |
| AJ+fl | flush | 90% | 88% | 87% | 79% | 50–100bb | g1 |
| A9+fl | flush | 91% | 87% | 87% | 79% | 50–100bb | g1 |
| A8+fl | flush | 90% | 88% | 86% | 78% | 50–100bb | g1 |
| K7+fl | flush | 90% | 87% | 86% | 78% | 50–100bb | g1 |
| AA+fl | flush | 90% | 87% | 87% | 78% | 50–100bb | g1 |
| AK+fl | flush | 88% | 86% | 85% | 75% | 50–100bb | g1 |
| KT+fl | flush | 86% | 86% | 85% | 74% | 50–100bb | g1 |
| K3+fl | flush | 87% | 86% | 84% | 74% | 50–100bb | g1 |
| K5+fl | flush | 87% | 85% | 83% | 74% | 50–100bb | g1 |
| K2+fl | flush | 87% | 86% | 83% | 73% | 50–100bb | g1 |
| K9+fl | flush | 86% | 84% | 83% | 73% | 50–100bb | g1 |
| A6+fl | flush | 86% | 84% | 84% | 73% | 50–100bb | g1 |
| K8+fl | flush | 86% | 84% | 83% | 73% | 50–100bb | g1 |
| A4+fl | flush | 84% | 83% | 82% | 72% | 50–100bb | g1 |
| KJ+fl | flush | 87% | 85% | 83% | 72% | 50–100bb | g1 |
| K4+fl | flush | 86% | 84% | 83% | 72% | 50–100bb | g1 |
| KK+fl | flush | 86% | 85% | 83% | 72% | 50–100bb | g1 |
| A5+fl | flush | 86% | 84% | 83% | 71% | 50–100bb | g1 |
| A2+fl | flush | 84% | 84% | 82% | 70% | 50–100bb | g1 |
| A3+fl | flush | 84% | 83% | 81% | 70% | 50–100bb | g1 |
| K6+fl | flush | 83% | 82% | 81% | 69% | 50–100bb | g1 |
| 66+fl | flushlo | 82% | 81% | 78% | 65% | 50–100bb | g1 |
| 64+fl | flushlo | 80% | 80% | 78% | 65% | 50–100bb | g1 |
| 55+fl | flushlo | 78% | 80% | 77% | 64% | 50–100bb | g1 |
| 54+fl | flushlo | 80% | 78% | 76% | 64% | 50–100bb | g1 |
| 65+fl | flushlo | 81% | 81% | 78% | 64% | 50–100bb | g1 |
| 43+fl | flushlo | 79% | 79% | 77% | 63% | 50–100bb | g1 |
| 22+fl | flushlo | 77% | 77% | 75% | 63% | 50–100bb | g1 |
| 44+fl | flushlo | 78% | 78% | 76% | 62% | 50–100bb | g1 |
| 33+fl | flushlo | 78% | 78% | 76% | 61% | 50–100bb | g1 |
| KQ | straight | 73% | 73% | 70% | 54% | 50–100bb | g2 |
| QQ | straight | 68% | 59% | 55% | 44% | 25–50bb | g3 |
| Q6 | straight | 66% | 57% | 53% | 42% | 25–50bb | g3 |
| Q5 | straight | 65% | 57% | 52% | 43% | 25–50bb | g3 |
| Q7 | straight | 66% | 57% | 51% | 43% | 25–50bb | g3 |
| AQ | straight | 65% | 57% | 51% | 41% | 25–50bb | g3 |
| Q9 | straight | 64% | 55% | 50% | 42% | 25–50bb | g3 |
| QJ | straight | 64% | 56% | 50% | 41% | 25–50bb | g3 |
| Q8 | straight | 64% | 56% | 50% | 43% | 5–15bb | g4 |
| QT | straight | 65% | 56% | 50% | 42% | 5–15bb | g4 |
| 76 | straight | 51% | 35% | 29% | 27% | 0–5bb | g5 |
| 77 | straight | 51% | 35% | 28% | 27% | 0–5bb | g5 |
| 87 | straight | 50% | 34% | 26% | 27% | 0–5bb | g5 |
| 75 | straight | 50% | 35% | 28% | 26% | 0–5bb | g5 |
| T7 | straight | 50% | 35% | 27% | 28% | 0–5bb | g5 |
| K7 | straight | 50% | 35% | 28% | 24% | 0–5bb | g5 |
| A7 | straight | 49% | 34% | 28% | 25% | 0–5bb | g5 |
| J7 | straight | 49% | 35% | 27% | 26% | 0–5bb | g5 |
| 97 | straight | 48% | 34% | 26% | 27% | 0–5bb | g5 |
| TT | twopair | 47% | 32% | 26% | 24% | 0–5bb | g6 |
| JJ | twopair | 46% | 33% | 23% | 23% | 0–5bb | g6 |
| 33 | twopair | 46% | 32% | 25% | 25% | 0–5bb | g6 |
| 99 | twopair | 45% | 29% | 21% | 25% | 0–5bb | g6 |
| 88 | twopair | 45% | 31% | 21% | 26% | 0–5bb | g6 |
| AA | op | 25% | 13% | 4% | 20% | 0–5bb | g7 |
| KK | op | 22% | 11% | 4% | 20% | 0–5bb | g7 |
| JT | twopair | 44% | 30% | 23% | 25% | 0–5bb | g8 |
| J9 | twopair | 42% | 28% | 19% | 24% | 0–5bb | g8 |
| J8 | twopair | 40% | 27% | 17% | 25% | 0–5bb | g8 |
| T9 | twopair | 36% | 20% | 13% | 24% | 0–5bb | g8 |
| T8 | twopair | 32% | 18% | 9% | 24% | 0–5bb | g8 |
| 98 | twopair | 31% | 17% | 8% | 25% | 0–5bb | g8 |
| AJ | tpgk | 26% | 13% | 3% | 21% | 0–5bb | g9 |
| KJ | tpgk | 21% | 12% | 1% | 17% | 0–5bb | g9 |
| AT | mp | 14% | 9% | 0% | 12% | 0–5bb | g10 |
| KT | mp | 12% | 6% | 0% | 9% | 0–5bb | g10 |
| A9 | bp | 9% | 5% | 0% | 7% | 0–5bb | g11 |
| K9 | bp | 8% | 5% | 0% | 5% | 0–5bb | g11 |
| K8 | bp | 7% | 3% | 0% | 4% | 0–5bb | g11 |
| 96 | bp | 6% | 3% | 0% | 3% | 0–5bb | g11 |
| A8 | bp | 6% | 4% | 0% | 4% | 0–5bb | g11 |
| 86 | bp | 5% | 3% | 0% | 3% | 0–5bb | g11 |
| 66 | spp | 4% | 3% | 0% | 3% | 0–5bb | g11 |
| 55 | spp | 3% | 2% | 0% | 2% | 0–5bb | g11 |
| 44 | spp | 2% | 1% | 0% | 1% | 0–5bb | g11 |
| K3 | bp | 1% | 0% | 0% | 0% | 0–5bb | g11 |
| A3 | bp | 1% | 1% | 0% | 0% | 0–5bb | g11 |
| 43 | bp | 1% | 0% | 0% | 0% | 0–5bb | g11 |
| 22 | spp | 1% | 0% | 0% | 0% | 0–5bb | g11 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g12 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g12 |
| AK | khnd | 0% | 0% | 0% | 0% | Pot is too big | g12 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g12 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g12 |
