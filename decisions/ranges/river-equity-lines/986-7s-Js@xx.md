# 986-7s-Js@xx river (9♠ 8♦ 6♣ 7♠ J♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♠ flushes: AK, AQ, AT, A8, A6–A2, KQ, KT, K8, K6–K2, QT, Q8, Q6, Q5, T8, 86, 65, 64, 54, 43 | 98% | 100% | 100% | 94% |
| g2 | 25–50bb | Q-high straights | QT | 91% | 96% | 96% | 75% |
| g3 | 25–50bb | J-high straights | TT, AT, KT, JT, T9–T7 | 84% | 87% | 85% | 72% |
| g4 | 25–50bb | 9-high straights | 55, A5, K5, Q5, 75, 65, 54 | 70% | 66% | 62% | 65% |
| g5 | 15–25bb | Sets | JJ, 99–66 | 60% | 51% | 45% | 61% |
| g6 | 15–25bb | Two pair | J9–J7, 98–96, 87, 86, 76 | 55% | 36% | 28% | 60% |
| g7 | 0–5bb | Overpairs | AA–QQ | 49% | 22% | 13% | 57% |
| g8 | 0–5bb | Top pair, good kicker | AJ, KJ, QJ | 49% | 18% | 7% | 56% |
| g9 | 0–5bb | Second pair | A9, K9, Q9 | 39% | 7% | 0% | 54% |
| g10 | 0–5bb | Small pairs | 44–22, A8–A6, K8–K6, Q8–Q6, 64 | 23% | 1% | 0% | 34% |
| g11 | Pot is too big | Ace-high | AK, AQ, A4–A2 | 10% | 0% | 0% | 22% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| T8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AK+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A5+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AQ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A6+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K8+fl | flush | 99% | 100% | 100% | 95% | 50–100bb | g1 |
| K2+fl | flush | 99% | 100% | 100% | 95% | 50–100bb | g1 |
| K3+fl | flush | 98% | 100% | 100% | 94% | 50–100bb | g1 |
| K6+fl | flush | 99% | 100% | 100% | 94% | 50–100bb | g1 |
| K4+fl | flush | 99% | 100% | 100% | 94% | 50–100bb | g1 |
| K5+fl | flush | 98% | 100% | 100% | 93% | 50–100bb | g1 |
| KT+fl | flush | 98% | 100% | 100% | 93% | 50–100bb | g1 |
| KQ+fl | flush | 98% | 100% | 100% | 93% | 50–100bb | g1 |
| 86+fl | flushlo | 96% | 99% | 99% | 91% | 50–100bb | g1 |
| Q6+fl | flush | 97% | 99% | 99% | 89% | 50–100bb | g1 |
| Q8+fl | flush | 97% | 99% | 99% | 88% | 50–100bb | g1 |
| Q5+fl | flush | 97% | 100% | 100% | 86% | 50–100bb | g1 |
| 65+fl | flushlo | 96% | 99% | 99% | 86% | 50–100bb | g1 |
| 64+fl | flushlo | 95% | 98% | 98% | 85% | 50–100bb | g1 |
| QT+fl | flush | 97% | 100% | 100% | 85% | 50–100bb | g1 |
| 43+fl | flushlo | 94% | 97% | 96% | 80% | 50–100bb | g1 |
| 54+fl | flushlo | 95% | 99% | 99% | 80% | 50–100bb | g1 |
| QT | straight | 90% | 96% | 96% | 75% | 50–100bb | g2 |
| TT | straight | 87% | 89% | 88% | 73% | 50–100bb | g3 |
| T9 | straight | 84% | 87% | 85% | 73% | 50–100bb | g3 |
| T7 | straight | 84% | 85% | 84% | 73% | 50–100bb | g3 |
| KT | straight | 84% | 86% | 85% | 72% | 50–100bb | g3 |
| JT | straight | 84% | 86% | 83% | 72% | 50–100bb | g3 |
| AT | straight | 84% | 87% | 85% | 71% | 50–100bb | g3 |
| T8 | straight | 83% | 86% | 85% | 70% | 50–100bb | g3 |
| 55 | straight | 71% | 68% | 64% | 68% | 50–100bb | g4 |
| Q5 | straight | 70% | 66% | 60% | 65% | 50–100bb | g4 |
| 54 | straight | 69% | 65% | 62% | 65% | 50–100bb | g4 |
| 75 | straight | 70% | 64% | 60% | 65% | 50–100bb | g4 |
| A5 | straight | 70% | 66% | 62% | 64% | 50–100bb | g4 |
| 65 | straight | 70% | 65% | 59% | 64% | 50–100bb | g4 |
| K5 | straight | 70% | 66% | 62% | 64% | 50–100bb | g4 |
| 88 | twopair | 59% | 54% | 48% | 62% | 50–100bb | g5 |
| 99 | twopair | 59% | 51% | 48% | 62% | 50–100bb | g5 |
| JJ | twopair | 61% | 49% | 42% | 61% | 50–100bb | g5 |
| 66 | twopair | 60% | 50% | 43% | 61% | 50–100bb | g5 |
| 77 | twopair | 59% | 50% | 45% | 60% | 50–100bb | g5 |
| J9 | twopair | 57% | 41% | 36% | 61% | 50–100bb | g6 |
| J7 | twopair | 57% | 39% | 29% | 61% | 50–100bb | g6 |
| 97 | twopair | 53% | 32% | 24% | 61% | 50–100bb | g6 |
| J8 | twopair | 56% | 39% | 32% | 59% | 50–100bb | g6 |
| 87 | twopair | 53% | 29% | 19% | 59% | 50–100bb | g6 |
| 96 | twopair | 53% | 32% | 22% | 58% | 50–100bb | g6 |
| 98 | twopair | 54% | 35% | 28% | 58% | 50–100bb | g6 |
| 76 | twopair | 52% | 27% | 16% | 58% | 50–100bb | g6 |
| 86 | twopair | 51% | 27% | 19% | 55% | 50–100bb | g6 |
| QQ | op | 48% | 20% | 12% | 58% | 50–100bb | g7 |
| KK | op | 50% | 22% | 13% | 57% | 50–100bb | g7 |
| AA | op | 48% | 23% | 15% | 54% | 50–100bb | g7 |
| QJ | tpmk | 49% | 15% | 5% | 57% | 50–100bb | g8 |
| AJ | tpgk | 49% | 21% | 9% | 56% | 50–100bb | g8 |
| KJ | tpgk | 49% | 18% | 7% | 56% | 50–100bb | g8 |
| A9 | mp | 41% | 9% | 0% | 55% | 50–100bb | g9 |
| Q9 | mp | 36% | 3% | 0% | 53% | 50–100bb | g9 |
| K9 | mp | 39% | 7% | 0% | 53% | 50–100bb | g9 |
| A8 | bp | 32% | 2% | 0% | 51% | 50–100bb | g10 |
| K8 | bp | 31% | 1% | 0% | 46% | 0–5bb | g10 |
| Q8 | bp | 29% | 1% | 0% | 44% | 0–5bb | g10 |
| A7 | bp | 26% | 1% | 0% | 37% | 0–5bb | g10 |
| K7 | bp | 24% | 1% | 0% | 35% | 0–5bb | g10 |
| Q7 | bp | 24% | 0% | 0% | 35% | 0–5bb | g10 |
| A6 | bp | 20% | 0% | 0% | 32% | 0–5bb | g10 |
| K6 | bp | 20% | 0% | 0% | 29% | 0–5bb | g10 |
| Q6 | bp | 20% | 0% | 0% | 27% | 0–5bb | g10 |
| 64 | bp | 17% | 0% | 0% | 25% | 0–5bb | g10 |
| 44 | pp3 | 15% | 0% | 0% | 23% | 0–5bb | g10 |
| 33 | pp3 | 14% | 0% | 0% | 22% | 0–5bb | g10 |
| 22 | pp3 | 12% | 0% | 0% | 22% | 0–5bb | g10 |
| AK | khnd | 11% | 0% | 0% | 25% | Pot is too big | g11 |
| AQ | khnd | 10% | 0% | 0% | 24% | Pot is too big | g11 |
| A3 | khnd | 9% | 0% | 0% | 20% | Pot is too big | g11 |
| A2 | khnd | 9% | 0% | 0% | 19% | Pot is too big | g11 |
| A4 | khnd | 9% | 0% | 0% | 19% | Pot is too big | g11 |
