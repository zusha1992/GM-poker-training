# JT3-9s-8s river (J♠ T♠ 3♣ 9♠ 8♠): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes & straights | KQ · ♠ flushes: AA–QQ, 77–22, AK–A2, KQ–K2, QJ–Q9, Q7–Q5, 76, 75, 65, 64, 54, 43 | 87% | 86% | 85% | 76% |
| g2 | 25–50bb | Straights | QQ, AQ, QJ, QT, Q7–Q5 | 65% | 57% | 51% | 42% |
| g3 | 5–15bb | Straights | Q9, Q8 | 64% | 56% | 49% | 43% |
| g4 | 0–5bb | Straights & sets | JJ–77, 33, A7, K7, J7, T7, 97, 87, 76, 75 | 49% | 34% | 26% | 26% |
| g5 | 0–5bb | Overpairs | AA, KK | 24% | 12% | 4% | 21% |
| g6 | 0–5bb | Two pair | JT–J8, T9, T8, 98 | 40% | 24% | 17% | 24% |
| g7 | 0–5bb | Top pair, good kicker | AJ, KJ | 24% | 12% | 2% | 19% |
| g8 | 0–5bb | Second pair | AT, KT | 13% | 7% | 0% | 11% |
| g9 | 0–5bb | Small pairs | 66–44, 22, A9, A8, A3, K9, K8, K3, 96, 86, 43 | 5% | 3% | 0% | 3% |
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
| KQ+fl | flush | 94% | 93% | 91% | 87% | 50–100bb | g1 |
| 76+fl | flush | 91% | 89% | 87% | 84% | 50–100bb | g1 |
| 77+fl | flush | 92% | 88% | 88% | 83% | 50–100bb | g1 |
| 75+fl | flush | 91% | 88% | 87% | 82% | 50–100bb | g1 |
| A7+fl | flush | 91% | 89% | 87% | 81% | 50–100bb | g1 |
| AT+fl | flush | 90% | 88% | 87% | 80% | 50–100bb | g1 |
| A9+fl | flush | 90% | 88% | 87% | 79% | 50–100bb | g1 |
| AA+fl | flush | 90% | 88% | 86% | 79% | 50–100bb | g1 |
| K7+fl | flush | 90% | 87% | 86% | 79% | 50–100bb | g1 |
| A8+fl | flush | 90% | 87% | 86% | 78% | 50–100bb | g1 |
| AJ+fl | flush | 89% | 88% | 87% | 78% | 50–100bb | g1 |
| AK+fl | flush | 88% | 87% | 85% | 75% | 50–100bb | g1 |
| K3+fl | flush | 88% | 86% | 85% | 74% | 50–100bb | g1 |
| K5+fl | flush | 86% | 85% | 83% | 73% | 50–100bb | g1 |
| A6+fl | flush | 86% | 85% | 82% | 73% | 50–100bb | g1 |
| KJ+fl | flush | 87% | 85% | 83% | 73% | 50–100bb | g1 |
| K2+fl | flush | 87% | 85% | 83% | 72% | 50–100bb | g1 |
| K8+fl | flush | 87% | 85% | 82% | 72% | 50–100bb | g1 |
| K9+fl | flush | 86% | 84% | 83% | 72% | 50–100bb | g1 |
| A5+fl | flush | 85% | 83% | 82% | 72% | 50–100bb | g1 |
| K4+fl | flush | 86% | 86% | 83% | 72% | 50–100bb | g1 |
| KT+fl | flush | 87% | 85% | 82% | 72% | 50–100bb | g1 |
| A4+fl | flush | 85% | 83% | 83% | 71% | 50–100bb | g1 |
| KK+fl | flush | 86% | 85% | 83% | 71% | 50–100bb | g1 |
| A2+fl | flush | 84% | 84% | 82% | 71% | 50–100bb | g1 |
| A3+fl | flush | 84% | 83% | 81% | 70% | 50–100bb | g1 |
| K6+fl | flush | 84% | 83% | 81% | 69% | 50–100bb | g1 |
| 65+fl | flushlo | 81% | 80% | 79% | 65% | 50–100bb | g1 |
| 66+fl | flushlo | 81% | 80% | 77% | 64% | 50–100bb | g1 |
| 43+fl | flushlo | 80% | 79% | 77% | 64% | 50–100bb | g1 |
| 64+fl | flushlo | 80% | 81% | 77% | 64% | 50–100bb | g1 |
| 54+fl | flushlo | 80% | 78% | 77% | 63% | 50–100bb | g1 |
| 55+fl | flushlo | 80% | 79% | 77% | 63% | 50–100bb | g1 |
| 44+fl | flushlo | 78% | 77% | 77% | 63% | 50–100bb | g1 |
| 33+fl | flushlo | 78% | 79% | 76% | 62% | 50–100bb | g1 |
| 22+fl | flushlo | 77% | 78% | 76% | 61% | 50–100bb | g1 |
| KQ | straight | 73% | 74% | 71% | 54% | 50–100bb | g1 |
| QQ | straight | 69% | 61% | 53% | 44% | 25–50bb | g2 |
| Q6 | straight | 65% | 58% | 52% | 42% | 25–50bb | g2 |
| QT | straight | 65% | 56% | 52% | 42% | 25–50bb | g2 |
| Q5 | straight | 66% | 58% | 52% | 43% | 25–50bb | g2 |
| Q7 | straight | 65% | 56% | 51% | 42% | 25–50bb | g2 |
| AQ | straight | 65% | 57% | 50% | 41% | 25–50bb | g2 |
| QJ | straight | 64% | 57% | 50% | 42% | 25–50bb | g2 |
| Q9 | straight | 64% | 57% | 49% | 43% | 5–15bb | g3 |
| Q8 | straight | 65% | 56% | 49% | 43% | 5–15bb | g3 |
| 77 | straight | 52% | 35% | 29% | 26% | 0–5bb | g4 |
| 75 | straight | 51% | 35% | 28% | 27% | 0–5bb | g4 |
| A7 | straight | 51% | 35% | 27% | 25% | 0–5bb | g4 |
| 87 | straight | 50% | 33% | 26% | 28% | 0–5bb | g4 |
| 76 | straight | 50% | 35% | 29% | 27% | 0–5bb | g4 |
| J7 | straight | 50% | 35% | 26% | 26% | 0–5bb | g4 |
| T7 | straight | 50% | 34% | 28% | 27% | 0–5bb | g4 |
| 97 | straight | 50% | 32% | 26% | 28% | 0–5bb | g4 |
| K7 | straight | 49% | 35% | 28% | 24% | 0–5bb | g4 |
| 33 | twopair | 47% | 32% | 25% | 24% | 0–5bb | g4 |
| TT | twopair | 46% | 33% | 26% | 24% | 0–5bb | g4 |
| JJ | twopair | 46% | 32% | 22% | 23% | 0–5bb | g4 |
| 99 | twopair | 46% | 30% | 22% | 25% | 0–5bb | g4 |
| 88 | twopair | 44% | 30% | 22% | 26% | 0–5bb | g4 |
| AA | op | 26% | 12% | 4% | 21% | 0–5bb | g5 |
| KK | op | 22% | 11% | 4% | 20% | 0–5bb | g5 |
| JT | twopair | 45% | 30% | 23% | 24% | 0–5bb | g6 |
| J9 | twopair | 43% | 27% | 20% | 23% | 0–5bb | g6 |
| J8 | twopair | 40% | 26% | 17% | 24% | 0–5bb | g6 |
| T9 | twopair | 37% | 20% | 13% | 25% | 0–5bb | g6 |
| T8 | twopair | 32% | 18% | 8% | 23% | 0–5bb | g6 |
| 98 | twopair | 32% | 17% | 7% | 26% | 0–5bb | g6 |
| AJ | tpgk | 26% | 13% | 3% | 21% | 0–5bb | g7 |
| KJ | tpgk | 22% | 11% | 1% | 17% | 0–5bb | g7 |
| AT | mp | 14% | 8% | 0% | 12% | 0–5bb | g8 |
| KT | mp | 11% | 7% | 0% | 9% | 0–5bb | g8 |
| A9 | bp | 9% | 5% | 0% | 6% | 0–5bb | g9 |
| K9 | bp | 7% | 5% | 0% | 5% | 0–5bb | g9 |
| A8 | bp | 6% | 4% | 0% | 4% | 0–5bb | g9 |
| K8 | bp | 6% | 4% | 0% | 4% | 0–5bb | g9 |
| 96 | bp | 6% | 3% | 0% | 4% | 0–5bb | g9 |
| 86 | bp | 5% | 3% | 0% | 4% | 0–5bb | g9 |
| 66 | spp | 4% | 3% | 0% | 3% | 0–5bb | g9 |
| 55 | spp | 3% | 1% | 0% | 2% | 0–5bb | g9 |
| 44 | spp | 2% | 1% | 0% | 1% | 0–5bb | g9 |
| A3 | bp | 1% | 0% | 0% | 0% | 0–5bb | g9 |
| K3 | bp | 1% | 0% | 0% | 0% | 0–5bb | g9 |
| 43 | bp | 1% | 0% | 0% | 0% | 0–5bb | g9 |
| 22 | spp | 0% | 0% | 0% | 0% | 0–5bb | g9 |
| AK | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
