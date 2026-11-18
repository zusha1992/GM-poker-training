# 962-8d-Kc@xx river (9♦ 6♦ 2♥ 8♦ K♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AK–AT, A7, A5–A2, KQ–KT, K7, K5–K2, QJ, QT, Q7, Q5, JT, J7, T7, 75, 54, 43 | 99% | 99% | 97% | 93% |
| g2 | 25–50bb | Straights | T7, 75 | 91% | 98% | 92% | 71% |
| g3 | 15–25bb | Sets | KK, 99, 88, 66, 22 | 90% | 96% | 84% | 72% |
| g4 | 15–25bb | Two pair | K9, K8, K6, K2, 98, 96, 86 | 86% | 87% | 38% | 71% |
| g5 | 0–5bb | Overpair | AA | 80% | 71% | 1% | 68% |
| g6 | 0–5bb | Top pair | AK, KQ–KT, K7, K5–K3 | 81% | 78% | 1% | 70% |
| g7 | 0–5bb | Big pocket pairs | QQ–TT | 75% | 74% | 0% | 64% |
| g8 | 0–5bb | Second pair | A9, Q9, J9, T9, 97 | 71% | 69% | 0% | 63% |
| g9 | 0–5bb | Small pairs | 77, 55–33, A8, A6, A2, Q8, Q6, J8, T8, 87, 76, 65, 64 | 47% | 27% | 0% | 57% |
| g10 | Pot is too big | Ace-high | AQ–AT, A7, A5–A3 | 23% | 4% | 0% | 36% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| A7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| T7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 75+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AT+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| A5+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| AJ+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| AQ+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| AK+fl | flush | 100% | 100% | 100% | 98% | 50–100bb | g1 |
| K7+fl | flush | 99% | 99% | 97% | 94% | 50–100bb | g1 |
| K3+fl | flush | 99% | 99% | 96% | 93% | 50–100bb | g1 |
| K2+fl | flush | 99% | 100% | 98% | 93% | 50–100bb | g1 |
| KT+fl | flush | 99% | 99% | 96% | 93% | 50–100bb | g1 |
| K4+fl | flush | 99% | 99% | 96% | 93% | 50–100bb | g1 |
| K5+fl | flush | 99% | 99% | 96% | 92% | 50–100bb | g1 |
| KJ+fl | flush | 99% | 99% | 96% | 91% | 50–100bb | g1 |
| KQ+fl | flush | 98% | 99% | 95% | 90% | 50–100bb | g1 |
| Q7+fl | flush | 97% | 99% | 95% | 89% | 50–100bb | g1 |
| QT+fl | flush | 97% | 99% | 94% | 89% | 50–100bb | g1 |
| Q5+fl | flush | 97% | 99% | 94% | 88% | 50–100bb | g1 |
| QJ+fl | flush | 97% | 98% | 94% | 87% | 50–100bb | g1 |
| J7+fl | flushlo | 96% | 99% | 95% | 85% | 50–100bb | g1 |
| 54+fl | flushlo | 95% | 99% | 95% | 85% | 50–100bb | g1 |
| 43+fl | flushlo | 95% | 99% | 94% | 84% | 50–100bb | g1 |
| JT+fl | flushlo | 96% | 99% | 94% | 84% | 50–100bb | g1 |
| T7 | straight | 91% | 98% | 92% | 72% | 50–100bb | g2 |
| 75 | straight | 90% | 98% | 92% | 71% | 50–100bb | g2 |
| 22 | twopair | 90% | 95% | 78% | 73% | 50–100bb | g3 |
| KK | twopair | 91% | 98% | 90% | 72% | 50–100bb | g3 |
| 88 | twopair | 91% | 97% | 85% | 72% | 50–100bb | g3 |
| 66 | twopair | 89% | 94% | 77% | 72% | 50–100bb | g3 |
| 99 | twopair | 90% | 97% | 89% | 71% | 50–100bb | g3 |
| K6 | twopair | 86% | 87% | 34% | 73% | 50–100bb | g4 |
| K9 | twopair | 89% | 92% | 60% | 72% | 50–100bb | g4 |
| K8 | twopair | 87% | 89% | 46% | 71% | 50–100bb | g4 |
| 86 | twopair | 84% | 80% | 6% | 71% | 50–100bb | g4 |
| 96 | twopair | 83% | 79% | 14% | 71% | 50–100bb | g4 |
| 98 | twopair | 84% | 82% | 22% | 69% | 50–100bb | g4 |
| K2 | twopair | 87% | 86% | 35% | 67% | 50–100bb | g4 |
| AA | op | 80% | 71% | 1% | 68% | 50–100bb | g5 |
| KQ | tpgk | 83% | 79% | 1% | 71% | 50–100bb | g6 |
| KT | tpmk | 80% | 78% | 1% | 71% | 50–100bb | g6 |
| KJ | tpmk | 81% | 79% | 1% | 71% | 50–100bb | g6 |
| K7 | tpmk | 80% | 77% | 1% | 70% | 50–100bb | g6 |
| AK | tpgk | 82% | 77% | 1% | 68% | 50–100bb | g6 |
| K5 | tpmk | 79% | 78% | 0% | 68% | 50–100bb | g6 |
| K4 | tpmk | 79% | 78% | 0% | 67% | 50–100bb | g6 |
| K3 | tpmk | 78% | 78% | 0% | 65% | 50–100bb | g6 |
| TT | pp1 | 75% | 74% | 0% | 65% | 50–100bb | g7 |
| JJ | pp1 | 76% | 74% | 0% | 63% | 50–100bb | g7 |
| QQ | pp1 | 74% | 74% | 0% | 63% | 50–100bb | g7 |
| Q9 | mp | 72% | 72% | 0% | 64% | 50–100bb | g8 |
| T9 | mp | 68% | 64% | 0% | 63% | 50–100bb | g8 |
| J9 | mp | 70% | 68% | 0% | 63% | 50–100bb | g8 |
| A9 | mp | 74% | 72% | 0% | 62% | 50–100bb | g8 |
| 97 | mp | 67% | 60% | 0% | 61% | 50–100bb | g8 |
| T8 | bp | 59% | 45% | 0% | 60% | 50–100bb | g9 |
| A8 | bp | 60% | 47% | 0% | 59% | 50–100bb | g9 |
| 87 | bp | 57% | 42% | 0% | 59% | 50–100bb | g9 |
| Q8 | bp | 60% | 45% | 0% | 59% | 50–100bb | g9 |
| 77 | pp3 | 53% | 34% | 0% | 59% | 50–100bb | g9 |
| J8 | bp | 60% | 44% | 0% | 58% | 50–100bb | g9 |
| 55 | pp3 | 40% | 17% | 0% | 57% | 50–100bb | g9 |
| 33 | pp3 | 36% | 12% | 0% | 57% | 50–100bb | g9 |
| 76 | bp | 47% | 26% | 0% | 57% | 50–100bb | g9 |
| 44 | pp3 | 37% | 14% | 0% | 56% | 50–100bb | g9 |
| 65 | bp | 45% | 22% | 0% | 56% | 50–100bb | g9 |
| A6 | bp | 48% | 28% | 0% | 55% | 50–100bb | g9 |
| Q6 | bp | 48% | 26% | 0% | 55% | 50–100bb | g9 |
| 64 | bp | 44% | 21% | 0% | 54% | 50–100bb | g9 |
| A2 | bp | 33% | 9% | 0% | 54% | 50–100bb | g9 |
| AQ | khnd | 30% | 8% | 0% | 43% | Pot is too big | g10 |
| AJ | khnd | 28% | 7% | 0% | 42% | Pot is too big | g10 |
| AT | khnd | 24% | 6% | 0% | 41% | Pot is too big | g10 |
| A7 | khnd | 23% | 4% | 0% | 36% | Pot is too big | g10 |
| A5 | khnd | 19% | 1% | 0% | 29% | Pot is too big | g10 |
| A3 | khnd | 19% | 1% | 0% | 29% | Pot is too big | g10 |
| A4 | khnd | 19% | 1% | 0% | 29% | Pot is too big | g10 |
