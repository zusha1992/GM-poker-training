# 986-7s-Js@xx river (9♠ 8♦ 6♣ 7♠ J♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♠ flushes: AK, AQ, AT, A8, A6–A2, KQ, KT, K8, K6–K2, QT, Q8, Q6, Q5, T8, 86, 65, 64, 54, 43 | 98% | 100% | 100% | 94% |
| g2 | 25–50bb | Straights | TT, 55, AT, A5, KT, K5, QT, Q5, JT, T9–T7, 75, 65, 54 | 81% | 82% | 80% | 70% |
| g3 | 15–25bb | Sets | JJ, 99–66 | 60% | 52% | 45% | 61% |
| g4 | 15–25bb | Two pair | J9–J7, 98–96, 87, 86, 76 | 55% | 36% | 27% | 59% |
| g5 | 0–5bb | Overpairs | AA–QQ | 49% | 22% | 13% | 57% |
| g6 | 0–5bb | Top pair, good kicker | AJ, KJ, QJ | 48% | 18% | 7% | 57% |
| g7 | 0–5bb | Second pair | A9, K9, Q9 | 39% | 6% | 0% | 54% |
| g8 | 0–5bb | Small pairs | 44–22, A8–A6, K8–K6, Q8–Q6, 64 | 23% | 1% | 0% | 34% |
| g9 | Pot is too big | Ace-high | AK, AQ, A4–A2 | 10% | 0% | 0% | 22% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| T8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A5+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AQ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A6+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AK+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K2+fl | flush | 99% | 100% | 100% | 95% | 50–100bb | g1 |
| K8+fl | flush | 98% | 100% | 100% | 95% | 50–100bb | g1 |
| K3+fl | flush | 98% | 100% | 100% | 94% | 50–100bb | g1 |
| K6+fl | flush | 99% | 100% | 100% | 94% | 50–100bb | g1 |
| K5+fl | flush | 98% | 100% | 100% | 94% | 50–100bb | g1 |
| K4+fl | flush | 99% | 100% | 100% | 93% | 50–100bb | g1 |
| KT+fl | flush | 98% | 100% | 100% | 93% | 50–100bb | g1 |
| KQ+fl | flush | 98% | 100% | 100% | 93% | 50–100bb | g1 |
| 86+fl | flushlo | 97% | 99% | 99% | 91% | 50–100bb | g1 |
| Q8+fl | flush | 97% | 99% | 99% | 89% | 50–100bb | g1 |
| Q6+fl | flush | 97% | 99% | 99% | 88% | 50–100bb | g1 |
| Q5+fl | flush | 97% | 100% | 100% | 86% | 50–100bb | g1 |
| QT+fl | flush | 97% | 100% | 100% | 86% | 50–100bb | g1 |
| 64+fl | flushlo | 96% | 98% | 98% | 86% | 50–100bb | g1 |
| 65+fl | flushlo | 96% | 99% | 99% | 85% | 50–100bb | g1 |
| 43+fl | flushlo | 94% | 97% | 96% | 81% | 50–100bb | g1 |
| 54+fl | flushlo | 95% | 99% | 99% | 80% | 50–100bb | g1 |
| QT | straight | 90% | 97% | 96% | 73% | 50–100bb | g2 |
| T7 | straight | 83% | 86% | 84% | 73% | 50–100bb | g2 |
| JT | straight | 84% | 86% | 85% | 72% | 50–100bb | g2 |
| T9 | straight | 83% | 87% | 85% | 72% | 50–100bb | g2 |
| KT | straight | 85% | 87% | 86% | 71% | 50–100bb | g2 |
| TT | straight | 85% | 89% | 88% | 71% | 50–100bb | g2 |
| AT | straight | 84% | 87% | 85% | 71% | 50–100bb | g2 |
| T8 | straight | 83% | 86% | 85% | 70% | 50–100bb | g2 |
| 55 | straight | 72% | 68% | 63% | 68% | 50–100bb | g2 |
| Q5 | straight | 69% | 64% | 61% | 66% | 50–100bb | g2 |
| 54 | straight | 69% | 65% | 61% | 65% | 50–100bb | g2 |
| 75 | straight | 69% | 64% | 59% | 65% | 50–100bb | g2 |
| A5 | straight | 70% | 68% | 62% | 65% | 50–100bb | g2 |
| K5 | straight | 69% | 66% | 62% | 64% | 50–100bb | g2 |
| 65 | straight | 69% | 64% | 60% | 63% | 50–100bb | g2 |
| 88 | twopair | 61% | 55% | 46% | 63% | 50–100bb | g3 |
| JJ | twopair | 60% | 51% | 41% | 62% | 50–100bb | g3 |
| 99 | twopair | 60% | 52% | 48% | 61% | 50–100bb | g3 |
| 66 | twopair | 60% | 50% | 44% | 61% | 50–100bb | g3 |
| 77 | twopair | 60% | 51% | 45% | 59% | 50–100bb | g3 |
| 97 | twopair | 53% | 31% | 24% | 62% | 50–100bb | g4 |
| J7 | twopair | 56% | 39% | 29% | 61% | 50–100bb | g4 |
| J9 | twopair | 57% | 43% | 35% | 60% | 50–100bb | g4 |
| J8 | twopair | 56% | 41% | 31% | 59% | 50–100bb | g4 |
| 87 | twopair | 53% | 29% | 20% | 58% | 50–100bb | g4 |
| 98 | twopair | 54% | 35% | 26% | 58% | 50–100bb | g4 |
| 96 | twopair | 54% | 31% | 23% | 58% | 50–100bb | g4 |
| 76 | twopair | 52% | 26% | 16% | 56% | 50–100bb | g4 |
| 86 | twopair | 52% | 27% | 18% | 55% | 50–100bb | g4 |
| KK | op | 48% | 23% | 12% | 58% | 50–100bb | g5 |
| QQ | op | 50% | 20% | 12% | 58% | 50–100bb | g5 |
| AA | op | 49% | 23% | 14% | 54% | 50–100bb | g5 |
| AJ | tpgk | 50% | 20% | 9% | 58% | 50–100bb | g6 |
| KJ | tpgk | 48% | 18% | 7% | 57% | 50–100bb | g6 |
| QJ | tpmk | 47% | 15% | 5% | 56% | 50–100bb | g6 |
| K9 | mp | 39% | 7% | 0% | 54% | 50–100bb | g7 |
| Q9 | mp | 36% | 3% | 0% | 54% | 50–100bb | g7 |
| A9 | mp | 40% | 8% | 0% | 53% | 50–100bb | g7 |
| A8 | bp | 31% | 1% | 0% | 49% | 0–5bb | g8 |
| K8 | bp | 30% | 1% | 0% | 46% | 0–5bb | g8 |
| Q8 | bp | 29% | 1% | 0% | 44% | 0–5bb | g8 |
| A7 | bp | 27% | 1% | 0% | 35% | 0–5bb | g8 |
| K7 | bp | 25% | 1% | 0% | 34% | 0–5bb | g8 |
| Q7 | bp | 25% | 1% | 0% | 36% | 0–5bb | g8 |
| A6 | bp | 21% | 0% | 0% | 33% | 0–5bb | g8 |
| K6 | bp | 21% | 0% | 0% | 29% | 0–5bb | g8 |
| Q6 | bp | 19% | 0% | 0% | 28% | 0–5bb | g8 |
| 64 | bp | 17% | 0% | 0% | 25% | 0–5bb | g8 |
| 44 | pp3 | 15% | 0% | 0% | 22% | 0–5bb | g8 |
| 33 | pp3 | 14% | 0% | 0% | 22% | 0–5bb | g8 |
| 22 | pp3 | 11% | 0% | 0% | 21% | 0–5bb | g8 |
| AQ | khnd | 11% | 0% | 0% | 24% | Pot is too big | g9 |
| AK | khnd | 11% | 0% | 0% | 24% | Pot is too big | g9 |
| A3 | khnd | 10% | 0% | 0% | 20% | Pot is too big | g9 |
| A4 | khnd | 10% | 0% | 0% | 19% | Pot is too big | g9 |
| A2 | khnd | 9% | 0% | 0% | 20% | Pot is too big | g9 |
