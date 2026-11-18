# JT3-9s-8s@bx river (J♠ T♠ 3♣ 9♠ 8♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♠ flushes: AA–QQ, 77–22, AK–A2, KQ–K2, QJ–Q9, Q7–Q5, 76, 75, 65, 64, 54, 43 | 90% | 90% | 88% | 72% |
| g2 | 25–50bb | K-high straights | KQ | 72% | 76% | 71% | 56% |
| g3 | 25–50bb | Q-high straights | QQ, AQ, QJ–Q5 | 67% | 66% | 58% | 40% |
| g4 | 0–5bb | J-high straights | 77, A7, K7, J7, T7, 97, 87, 76, 75 | 57% | 48% | 36% | 17% |
| g5 | 0–5bb | Sets | JJ–88, 33 | 52% | 41% | 28% | 13% |
| g6 | 0–5bb | Overpairs | AA, KK | 37% | 24% | 10% | 10% |
| g7 | 0–5bb | Two pair | JT–J8, T9, T8, 98 | 48% | 36% | 21% | 13% |
| g8 | 0–5bb | Top pair, good kicker | AJ, KJ | 38% | 23% | 7% | 10% |
| g9 | 0–5bb | Second pair | AT, KT | 28% | 15% | 0% | 6% |
| g10 | 0–5bb | Small pairs | 66–44, 22, A9, A8, A3, K9, K8, K3, 96, 86, 43 | 15% | 8% | 0% | 2% |
| g11 | Pot is too big | Ace-high | AK, A6–A4, A2 | 3% | 1% | 0% | 0% |

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
| AQ+fl | flush | 97% | 95% | 95% | 85% | 50–100bb | g1 |
| KQ+fl | flush | 95% | 95% | 94% | 83% | 50–100bb | g1 |
| 75+fl | flush | 95% | 92% | 91% | 80% | 50–100bb | g1 |
| 76+fl | flush | 95% | 92% | 91% | 80% | 50–100bb | g1 |
| 77+fl | flush | 95% | 92% | 91% | 79% | 50–100bb | g1 |
| A7+fl | flush | 94% | 92% | 90% | 76% | 50–100bb | g1 |
| K7+fl | flush | 92% | 91% | 89% | 72% | 50–100bb | g1 |
| AJ+fl | flush | 93% | 90% | 87% | 71% | 50–100bb | g1 |
| A9+fl | flush | 93% | 90% | 87% | 71% | 50–100bb | g1 |
| AT+fl | flush | 92% | 90% | 89% | 70% | 50–100bb | g1 |
| A8+fl | flush | 92% | 91% | 89% | 70% | 50–100bb | g1 |
| AA+fl | flush | 93% | 90% | 88% | 69% | 50–100bb | g1 |
| AK+fl | flush | 90% | 90% | 88% | 68% | 50–100bb | g1 |
| A2+fl | flush | 84% | 86% | 84% | 67% | 50–100bb | g1 |
| A5+fl | flush | 87% | 87% | 84% | 66% | 50–100bb | g1 |
| A6+fl | flush | 88% | 87% | 86% | 66% | 50–100bb | g1 |
| A4+fl | flush | 86% | 87% | 85% | 66% | 50–100bb | g1 |
| A3+fl | flush | 85% | 86% | 83% | 65% | 50–100bb | g1 |
| K3+fl | flush | 88% | 90% | 88% | 64% | 50–100bb | g1 |
| K8+fl | flush | 87% | 89% | 86% | 64% | 50–100bb | g1 |
| K5+fl | flush | 87% | 89% | 86% | 64% | 50–100bb | g1 |
| 54+fl | flushlo | 81% | 83% | 79% | 63% | 50–100bb | g1 |
| K4+fl | flush | 87% | 89% | 87% | 63% | 50–100bb | g1 |
| KT+fl | flush | 87% | 90% | 87% | 63% | 50–100bb | g1 |
| K2+fl | flush | 87% | 90% | 88% | 63% | 50–100bb | g1 |
| 22+fl | flushlo | 76% | 81% | 77% | 63% | 50–100bb | g1 |
| KK+fl | flush | 87% | 89% | 87% | 63% | 50–100bb | g1 |
| 33+fl | flushlo | 78% | 82% | 79% | 63% | 50–100bb | g1 |
| K9+fl | flush | 88% | 90% | 87% | 63% | 50–100bb | g1 |
| K6+fl | flush | 85% | 87% | 84% | 63% | 50–100bb | g1 |
| 44+fl | flushlo | 77% | 82% | 78% | 62% | 50–100bb | g1 |
| 43+fl | flushlo | 80% | 83% | 81% | 62% | 50–100bb | g1 |
| 64+fl | flushlo | 83% | 84% | 82% | 62% | 50–100bb | g1 |
| 55+fl | flushlo | 80% | 83% | 80% | 61% | 50–100bb | g1 |
| KJ+fl | flush | 87% | 89% | 87% | 61% | 50–100bb | g1 |
| 66+fl | flushlo | 82% | 84% | 81% | 61% | 50–100bb | g1 |
| 65+fl | flushlo | 83% | 84% | 80% | 61% | 50–100bb | g1 |
| KQ | straight | 72% | 76% | 71% | 56% | 50–100bb | g2 |
| QQ | straight | 69% | 71% | 60% | 41% | 25–50bb | g3 |
| Q5 | straight | 67% | 66% | 60% | 41% | 25–50bb | g3 |
| Q6 | straight | 68% | 67% | 59% | 41% | 25–50bb | g3 |
| AQ | straight | 66% | 66% | 59% | 37% | 25–50bb | g3 |
| QT | straight | 66% | 65% | 57% | 41% | 25–50bb | g3 |
| Q7 | straight | 67% | 65% | 57% | 37% | 25–50bb | g3 |
| Q8 | straight | 66% | 65% | 56% | 40% | 25–50bb | g3 |
| QJ | straight | 66% | 65% | 56% | 40% | 25–50bb | g3 |
| Q9 | straight | 67% | 65% | 56% | 40% | 25–50bb | g3 |
| 77 | straight | 58% | 49% | 37% | 17% | 0–5bb | g4 |
| K7 | straight | 57% | 50% | 36% | 19% | 0–5bb | g4 |
| 87 | straight | 57% | 47% | 34% | 18% | 0–5bb | g4 |
| 75 | straight | 57% | 48% | 37% | 18% | 0–5bb | g4 |
| T7 | straight | 57% | 47% | 37% | 18% | 0–5bb | g4 |
| 97 | straight | 56% | 46% | 36% | 17% | 0–5bb | g4 |
| J7 | straight | 56% | 48% | 33% | 18% | 0–5bb | g4 |
| A7 | straight | 56% | 48% | 37% | 14% | 0–5bb | g4 |
| 76 | straight | 55% | 47% | 36% | 18% | 0–5bb | g4 |
| TT | twopair | 52% | 44% | 32% | 12% | 0–5bb | g5 |
| 88 | twopair | 52% | 40% | 27% | 13% | 0–5bb | g5 |
| JJ | twopair | 51% | 40% | 27% | 14% | 0–5bb | g5 |
| 99 | twopair | 51% | 40% | 27% | 14% | 0–5bb | g5 |
| 33 | twopair | 50% | 40% | 31% | 13% | 0–5bb | g5 |
| AA | op | 37% | 26% | 11% | 5% | 0–5bb | g6 |
| KK | op | 37% | 21% | 8% | 15% | 0–5bb | g6 |
| JT | twopair | 51% | 39% | 26% | 13% | 0–5bb | g7 |
| J9 | twopair | 50% | 38% | 23% | 14% | 0–5bb | g7 |
| J8 | twopair | 48% | 36% | 20% | 13% | 0–5bb | g7 |
| T9 | twopair | 44% | 33% | 18% | 12% | 0–5bb | g7 |
| 98 | twopair | 43% | 29% | 12% | 13% | 0–5bb | g7 |
| T8 | twopair | 43% | 31% | 14% | 12% | 0–5bb | g7 |
| AJ | tpgk | 39% | 26% | 8% | 10% | 0–5bb | g8 |
| KJ | tpgk | 38% | 21% | 6% | 11% | 0–5bb | g8 |
| AT | mp | 28% | 16% | 0% | 5% | 0–5bb | g9 |
| KT | mp | 27% | 13% | 0% | 6% | 0–5bb | g9 |
| A9 | bp | 22% | 11% | 0% | 3% | 0–5bb | g10 |
| K9 | bp | 20% | 10% | 0% | 3% | 0–5bb | g10 |
| 96 | bp | 18% | 8% | 0% | 3% | 0–5bb | g10 |
| K8 | bp | 17% | 9% | 0% | 1% | 0–5bb | g10 |
| A8 | bp | 16% | 8% | 0% | 1% | 0–5bb | g10 |
| 86 | bp | 15% | 7% | 0% | 1% | 0–5bb | g10 |
| 66 | spp | 14% | 7% | 0% | 1% | 0–5bb | g10 |
| 55 | spp | 12% | 6% | 0% | 1% | 0–5bb | g10 |
| 44 | spp | 10% | 5% | 0% | 1% | 0–5bb | g10 |
| K3 | bp | 8% | 4% | 0% | 1% | 0–5bb | g10 |
| A3 | bp | 8% | 4% | 0% | 1% | 0–5bb | g10 |
| 43 | bp | 7% | 3% | 0% | 0% | 0–5bb | g10 |
| 22 | spp | 4% | 1% | 0% | 0% | 0–5bb | g10 |
| AK | khnd | 4% | 1% | 0% | 0% | Pot is too big | g11 |
| A5 | khnd | 3% | 1% | 0% | 0% | Pot is too big | g11 |
| A6 | khnd | 3% | 1% | 0% | 0% | Pot is too big | g11 |
| A2 | khnd | 3% | 1% | 0% | 0% | Pot is too big | g11 |
| A4 | khnd | 3% | 1% | 0% | 0% | Pot is too big | g11 |
