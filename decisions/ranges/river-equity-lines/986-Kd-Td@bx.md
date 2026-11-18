# 986-Kd-Td@bx river (9♠ 8♦ 6♣ K♦ T♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AQ, AJ, A9, A7–A2, QJ, Q9, Q7–Q5, J9, J7, 97, 96, 76, 75, 65, 64, 54, 43 | 99% | 99% | 99% | 97% |
| g2 | 25–50bb | K-high straights | QJ | 92% | 95% | 93% | 77% |
| g3 | 25–50bb | J-high straights | J7 | 88% | 93% | 89% | 68% |
| g4 | 25–50bb | T-high straights | 77, A7, K7, Q7, T7, 97, 87, 76, 75 | 82% | 88% | 81% | 63% |
| g5 | 15–25bb | Sets | KK, TT–88, 66 | 71% | 78% | 64% | 59% |
| g6 | 15–25bb | Two pair | KT–K8, K6, T9, T8 | 65% | 62% | 41% | 55% |
| g7 | 0–5bb | Overpair | AA | 56% | 38% | 5% | 48% |
| g8 | 0–5bb | Two pair | 98, 96, 86 | 56% | 40% | 7% | 47% |
| g9 | 0–5bb | Top pair | AK, KQ, KJ, K5–K2 | 58% | 40% | 3% | 53% |
| g10 | 0–5bb | Big pocket pairs | QQ, JJ | 55% | 30% | 0% | 55% |
| g11 | 0–5bb | Second pair | AT, QT, JT | 50% | 29% | 0% | 48% |
| g12 | 0–5bb | Small pairs | 55–22, A9, A8, A6, Q9, Q8, Q6, J9, J8, 65, 64 | 20% | 6% | 0% | 19% |
| g13 | Pot is too big | Ace-high | AQ, AJ, A5–A2 | 0% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AQ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A6+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A5+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 96+fl | flushlo | 99% | 99% | 98% | 98% | 50–100bb | g1 |
| Q9+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| Q6+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| Q5+fl | flush | 99% | 100% | 100% | 97% | 50–100bb | g1 |
| Q7+fl | flush | 99% | 100% | 100% | 96% | 50–100bb | g1 |
| QJ+fl | flush | 98% | 100% | 100% | 96% | 50–100bb | g1 |
| J9+fl | flush | 97% | 99% | 98% | 95% | 50–100bb | g1 |
| 64+fl | flushlo | 98% | 98% | 97% | 94% | 50–100bb | g1 |
| 76+fl | flushlo | 98% | 99% | 98% | 94% | 50–100bb | g1 |
| 65+fl | flushlo | 97% | 98% | 96% | 94% | 50–100bb | g1 |
| 97+fl | flushlo | 98% | 99% | 98% | 93% | 50–100bb | g1 |
| J7+fl | flush | 98% | 99% | 99% | 92% | 50–100bb | g1 |
| 75+fl | flushlo | 96% | 98% | 98% | 89% | 50–100bb | g1 |
| 54+fl | flushlo | 95% | 97% | 96% | 87% | 50–100bb | g1 |
| 43+fl | flushlo | 95% | 97% | 95% | 87% | 50–100bb | g1 |
| QJ | straight | 92% | 95% | 93% | 77% | 50–100bb | g2 |
| J7 | straight | 88% | 93% | 89% | 68% | 50–100bb | g3 |
| Q7 | straight | 83% | 89% | 83% | 66% | 50–100bb | g4 |
| 77 | straight | 84% | 90% | 84% | 64% | 50–100bb | g4 |
| K7 | straight | 82% | 87% | 77% | 63% | 50–100bb | g4 |
| 87 | straight | 81% | 88% | 79% | 63% | 50–100bb | g4 |
| T7 | straight | 81% | 87% | 79% | 62% | 50–100bb | g4 |
| A7 | straight | 83% | 87% | 81% | 62% | 50–100bb | g4 |
| 75 | straight | 82% | 88% | 80% | 62% | 50–100bb | g4 |
| 97 | straight | 81% | 87% | 79% | 60% | 50–100bb | g4 |
| 76 | straight | 81% | 87% | 80% | 60% | 50–100bb | g4 |
| 66 | twopair | 73% | 81% | 70% | 60% | 50–100bb | g5 |
| 88 | twopair | 71% | 79% | 66% | 60% | 50–100bb | g5 |
| KK | twopair | 72% | 76% | 57% | 59% | 50–100bb | g5 |
| TT | twopair | 69% | 75% | 63% | 59% | 50–100bb | g5 |
| 99 | twopair | 69% | 76% | 62% | 55% | 50–100bb | g5 |
| KT | twopair | 70% | 74% | 59% | 60% | 50–100bb | g6 |
| K9 | twopair | 67% | 69% | 52% | 57% | 50–100bb | g6 |
| K8 | twopair | 65% | 63% | 38% | 57% | 50–100bb | g6 |
| K6 | twopair | 65% | 59% | 35% | 54% | 50–100bb | g6 |
| T8 | twopair | 58% | 44% | 15% | 51% | 50–100bb | g6 |
| T9 | twopair | 59% | 47% | 22% | 50% | 50–100bb | g6 |
| AA | op | 56% | 38% | 5% | 48% | 0–5bb | g7 |
| 96 | twopair | 56% | 39% | 7% | 44% | 0–5bb | g8 |
| 98 | twopair | 56% | 40% | 8% | 49% | 0–5bb | g8 |
| 86 | twopair | 56% | 40% | 6% | 46% | 0–5bb | g8 |
| KJ | tpmk | 58% | 38% | 2% | 55% | 50–100bb | g9 |
| KQ | tpgk | 59% | 39% | 4% | 55% | 50–100bb | g9 |
| K4 | tpmk | 58% | 39% | 1% | 53% | 50–100bb | g9 |
| K3 | tpmk | 58% | 38% | 1% | 52% | 50–100bb | g9 |
| K2 | tpmk | 58% | 39% | 1% | 52% | 50–100bb | g9 |
| K5 | tpmk | 57% | 38% | 1% | 52% | 50–100bb | g9 |
| AK | tpgk | 57% | 42% | 4% | 50% | 50–100bb | g9 |
| JJ | pp1 | 54% | 30% | 0% | 56% | 50–100bb | g10 |
| QQ | pp1 | 56% | 30% | 0% | 55% | 50–100bb | g10 |
| AT | mp | 53% | 34% | 0% | 48% | 0–5bb | g11 |
| QT | mp | 50% | 30% | 0% | 48% | 0–5bb | g11 |
| JT | mp | 48% | 25% | 0% | 49% | 0–5bb | g11 |
| A9 | bp | 41% | 19% | 0% | 40% | 0–5bb | g12 |
| Q9 | bp | 37% | 16% | 0% | 38% | 0–5bb | g12 |
| J9 | bp | 33% | 10% | 0% | 34% | 0–5bb | g12 |
| A8 | bp | 25% | 6% | 0% | 25% | 0–5bb | g12 |
| Q8 | bp | 23% | 5% | 0% | 22% | 0–5bb | g12 |
| J8 | bp | 20% | 4% | 0% | 23% | 0–5bb | g12 |
| A6 | bp | 15% | 1% | 0% | 15% | 0–5bb | g12 |
| Q6 | bp | 13% | 1% | 0% | 10% | 0–5bb | g12 |
| 64 | bp | 11% | 0% | 0% | 7% | 0–5bb | g12 |
| 65 | bp | 10% | 0% | 0% | 4% | 0–5bb | g12 |
| 55 | pp3 | 7% | 0% | 0% | 0% | 0–5bb | g12 |
| 44 | pp3 | 6% | 0% | 0% | 0% | 0–5bb | g12 |
| 33 | pp3 | 4% | 0% | 0% | 0% | 0–5bb | g12 |
| 22 | pp3 | 3% | 0% | 0% | 0% | 0–5bb | g12 |
| AQ | khnd | 2% | 0% | 0% | 0% | Pot is too big | g13 |
| AJ | khnd | 1% | 0% | 0% | 0% | Pot is too big | g13 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g13 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g13 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g13 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g13 |
