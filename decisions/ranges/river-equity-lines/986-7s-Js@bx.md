# 986-7s-Js@bx river (9♠ 8♦ 6♣ 7♠ J♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♠ flushes: AK, AQ, AT, A8, A6–A2, KQ, KT, K8, K6–K2, QT, Q8, Q6, Q5, T8, 86, 65, 64, 54, 43 | 99% | 99% | 99% | 97% |
| g2 | 25–50bb | Straights | TT, 55, AT, A5, KT, K5, QT, Q5, JT, T9–T7, 75, 65, 54 | 80% | 82% | 75% | 70% |
| g3 | 15–25bb | Sets | JJ, 99–66 | 63% | 55% | 40% | 54% |
| g4 | 15–25bb | Two pair | J9–J7, 98, 97, 87, 76 | 56% | 39% | 20% | 53% |
| g5 | 0–5bb | Overpairs | AA–QQ | 51% | 28% | 8% | 53% |
| g6 | 0–5bb | Two pair | 96, 86 | 53% | 35% | 14% | 48% |
| g7 | 0–5bb | Top pair, good kicker | AJ, KJ, QJ | 52% | 28% | 4% | 54% |
| g8 | 0–5bb | Second pair | A9, K9, Q9 | 41% | 15% | 0% | 48% |
| g9 | 0–5bb | Small pairs | 44–22, A8–A6, K8–K6, Q8–Q6, 64 | 12% | 1% | 0% | 15% |
| g10 | Pot is too big | Ace-high | AK, AQ, A4–A2 | 0% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| T8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AQ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A6+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AK+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A5+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 86+fl | flushlo | 99% | 99% | 99% | 100% | 50–100bb | g1 |
| K6+fl | flush | 99% | 99% | 99% | 98% | 50–100bb | g1 |
| K8+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| K5+fl | flush | 99% | 99% | 99% | 96% | 50–100bb | g1 |
| KT+fl | flush | 98% | 100% | 99% | 96% | 50–100bb | g1 |
| K4+fl | flush | 98% | 99% | 99% | 96% | 50–100bb | g1 |
| KQ+fl | flush | 99% | 99% | 99% | 96% | 50–100bb | g1 |
| K2+fl | flush | 98% | 99% | 99% | 95% | 50–100bb | g1 |
| K3+fl | flush | 98% | 99% | 99% | 95% | 50–100bb | g1 |
| Q8+fl | flush | 98% | 99% | 99% | 95% | 50–100bb | g1 |
| Q6+fl | flush | 98% | 99% | 99% | 95% | 50–100bb | g1 |
| 65+fl | flushlo | 97% | 99% | 98% | 93% | 50–100bb | g1 |
| Q5+fl | flush | 97% | 99% | 99% | 92% | 50–100bb | g1 |
| 64+fl | flushlo | 96% | 97% | 97% | 91% | 50–100bb | g1 |
| QT+fl | flush | 97% | 99% | 99% | 91% | 50–100bb | g1 |
| 43+fl | flushlo | 94% | 96% | 95% | 88% | 50–100bb | g1 |
| 54+fl | flushlo | 94% | 98% | 98% | 87% | 50–100bb | g1 |
| QT | straight | 92% | 96% | 94% | 80% | 50–100bb | g2 |
| TT | straight | 85% | 89% | 84% | 75% | 50–100bb | g2 |
| T7 | straight | 82% | 85% | 80% | 73% | 50–100bb | g2 |
| JT | straight | 83% | 85% | 80% | 73% | 50–100bb | g2 |
| KT | straight | 83% | 86% | 81% | 73% | 50–100bb | g2 |
| T9 | straight | 82% | 85% | 80% | 73% | 50–100bb | g2 |
| AT | straight | 82% | 86% | 81% | 72% | 50–100bb | g2 |
| T8 | straight | 82% | 85% | 80% | 71% | 50–100bb | g2 |
| 55 | straight | 70% | 68% | 57% | 62% | 50–100bb | g2 |
| Q5 | straight | 69% | 67% | 56% | 62% | 50–100bb | g2 |
| 75 | straight | 68% | 66% | 54% | 61% | 50–100bb | g2 |
| 54 | straight | 68% | 66% | 56% | 61% | 50–100bb | g2 |
| A5 | straight | 69% | 67% | 56% | 59% | 50–100bb | g2 |
| K5 | straight | 69% | 67% | 55% | 58% | 50–100bb | g2 |
| 65 | straight | 68% | 66% | 54% | 57% | 50–100bb | g2 |
| JJ | twopair | 63% | 54% | 33% | 56% | 50–100bb | g3 |
| 77 | twopair | 62% | 56% | 40% | 54% | 50–100bb | g3 |
| 88 | twopair | 65% | 58% | 45% | 54% | 50–100bb | g3 |
| 66 | twopair | 63% | 53% | 39% | 53% | 50–100bb | g3 |
| 99 | twopair | 61% | 52% | 41% | 50% | 50–100bb | g3 |
| J7 | twopair | 58% | 40% | 19% | 56% | 50–100bb | g4 |
| J9 | twopair | 59% | 45% | 29% | 54% | 50–100bb | g4 |
| 97 | twopair | 54% | 34% | 16% | 52% | 50–100bb | g4 |
| J8 | twopair | 59% | 42% | 21% | 52% | 50–100bb | g4 |
| 87 | twopair | 55% | 34% | 12% | 52% | 50–100bb | g4 |
| 76 | twopair | 52% | 33% | 11% | 51% | 50–100bb | g4 |
| 98 | twopair | 53% | 34% | 18% | 50% | 50–100bb | g4 |
| QQ | op | 51% | 27% | 6% | 56% | 50–100bb | g5 |
| AA | op | 49% | 28% | 8% | 52% | 50–100bb | g5 |
| KK | op | 52% | 29% | 9% | 51% | 50–100bb | g5 |
| 96 | twopair | 53% | 35% | 15% | 48% | 0–5bb | g6 |
| 86 | twopair | 53% | 34% | 11% | 48% | 0–5bb | g6 |
| QJ | tpmk | 52% | 26% | 2% | 56% | 50–100bb | g7 |
| KJ | tpgk | 52% | 29% | 4% | 54% | 50–100bb | g7 |
| AJ | tpgk | 52% | 29% | 5% | 53% | 50–100bb | g7 |
| A9 | mp | 44% | 18% | 0% | 50% | 50–100bb | g8 |
| K9 | mp | 39% | 15% | 0% | 47% | 0–5bb | g8 |
| Q9 | mp | 37% | 10% | 0% | 43% | 0–5bb | g8 |
| A8 | bp | 26% | 4% | 0% | 32% | 0–5bb | g9 |
| K8 | bp | 24% | 3% | 0% | 29% | 0–5bb | g9 |
| Q8 | bp | 23% | 2% | 0% | 24% | 0–5bb | g9 |
| A7 | bp | 16% | 1% | 0% | 18% | 0–5bb | g9 |
| K7 | bp | 14% | 0% | 0% | 17% | 0–5bb | g9 |
| Q7 | bp | 13% | 0% | 0% | 18% | 0–5bb | g9 |
| A6 | bp | 8% | 0% | 0% | 10% | 0–5bb | g9 |
| K6 | bp | 6% | 0% | 0% | 8% | 0–5bb | g9 |
| Q6 | bp | 6% | 0% | 0% | 5% | 0–5bb | g9 |
| 64 | bp | 4% | 0% | 0% | 2% | 0–5bb | g9 |
| 44 | pp3 | 3% | 0% | 0% | 0% | 0–5bb | g9 |
| 33 | pp3 | 2% | 0% | 0% | 0% | 0–5bb | g9 |
| 22 | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g9 |
| AK | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| AQ | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
