# 986-7s-Js@bx river (9♠ 8♦ 6♣ 7♠ J♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♠ flushes: AK, AQ, AT, A8, A6–A2, KQ, KT, K8, K6–K2, QT, Q8, Q6, Q5, T8, 86, 65, 64, 54, 43 | 99% | 99% | 99% | 97% |
| g2 | 25–50bb | Q-high straights | QT | 91% | 96% | 94% | 80% |
| g3 | 25–50bb | J-high straights | TT, AT, KT, JT, T9–T7 | 83% | 86% | 81% | 73% |
| g4 | 25–50bb | 9-high straights | 55, A5, K5, Q5, 75, 65, 54 | 68% | 67% | 56% | 60% |
| g5 | 15–25bb | Sets | JJ, 99–66 | 63% | 55% | 40% | 54% |
| g6 | 15–25bb | Two pair | J9–J7, 98, 97, 87 | 57% | 40% | 21% | 53% |
| g7 | 0–5bb | Overpairs | AA–QQ | 51% | 28% | 8% | 52% |
| g8 | 0–5bb | Two pair | 96, 86, 76 | 53% | 33% | 12% | 49% |
| g9 | 0–5bb | Top pair, good kicker | AJ, KJ, QJ | 52% | 29% | 4% | 55% |
| g10 | 0–5bb | Second pair | A9, K9, Q9 | 41% | 15% | 0% | 48% |
| g11 | 0–5bb | Small pairs | 44–22, A8–A6, K8–K6, Q8–Q6, 64 | 13% | 1% | 0% | 15% |
| g12 | Pot is too big | Ace-high | AK, AQ, A4–A2 | 0% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| T8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A6+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AQ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A5+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AK+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 86+fl | flushlo | 99% | 99% | 99% | 99% | 50–100bb | g1 |
| K6+fl | flush | 99% | 99% | 99% | 98% | 50–100bb | g1 |
| K8+fl | flush | 99% | 100% | 99% | 97% | 50–100bb | g1 |
| K2+fl | flush | 98% | 99% | 99% | 96% | 50–100bb | g1 |
| K5+fl | flush | 98% | 99% | 99% | 96% | 50–100bb | g1 |
| KT+fl | flush | 99% | 100% | 99% | 96% | 50–100bb | g1 |
| K4+fl | flush | 98% | 99% | 99% | 96% | 50–100bb | g1 |
| K3+fl | flush | 98% | 99% | 99% | 96% | 50–100bb | g1 |
| Q6+fl | flush | 98% | 99% | 99% | 96% | 50–100bb | g1 |
| KQ+fl | flush | 98% | 99% | 99% | 95% | 50–100bb | g1 |
| Q8+fl | flush | 98% | 99% | 99% | 95% | 50–100bb | g1 |
| 65+fl | flushlo | 97% | 99% | 98% | 92% | 50–100bb | g1 |
| Q5+fl | flush | 97% | 99% | 99% | 91% | 50–100bb | g1 |
| QT+fl | flush | 97% | 99% | 99% | 91% | 50–100bb | g1 |
| 64+fl | flushlo | 97% | 97% | 97% | 90% | 50–100bb | g1 |
| 54+fl | flushlo | 95% | 98% | 98% | 87% | 50–100bb | g1 |
| 43+fl | flushlo | 94% | 96% | 95% | 87% | 50–100bb | g1 |
| QT | straight | 91% | 96% | 94% | 80% | 50–100bb | g2 |
| TT | straight | 85% | 89% | 84% | 75% | 50–100bb | g3 |
| T7 | straight | 82% | 85% | 80% | 74% | 50–100bb | g3 |
| AT | straight | 82% | 86% | 81% | 73% | 50–100bb | g3 |
| JT | straight | 83% | 85% | 79% | 73% | 50–100bb | g3 |
| KT | straight | 83% | 86% | 82% | 72% | 50–100bb | g3 |
| T9 | straight | 81% | 84% | 80% | 72% | 50–100bb | g3 |
| T8 | straight | 82% | 86% | 80% | 71% | 50–100bb | g3 |
| 55 | straight | 69% | 68% | 56% | 62% | 50–100bb | g4 |
| Q5 | straight | 69% | 66% | 55% | 61% | 50–100bb | g4 |
| 75 | straight | 67% | 65% | 53% | 60% | 50–100bb | g4 |
| 54 | straight | 69% | 67% | 56% | 60% | 50–100bb | g4 |
| A5 | straight | 68% | 68% | 58% | 59% | 50–100bb | g4 |
| K5 | straight | 69% | 67% | 55% | 59% | 50–100bb | g4 |
| 65 | straight | 67% | 67% | 54% | 58% | 50–100bb | g4 |
| JJ | twopair | 63% | 53% | 33% | 57% | 50–100bb | g5 |
| 88 | twopair | 66% | 59% | 45% | 54% | 50–100bb | g5 |
| 77 | twopair | 62% | 56% | 40% | 54% | 50–100bb | g5 |
| 66 | twopair | 63% | 55% | 38% | 52% | 50–100bb | g5 |
| 99 | twopair | 61% | 50% | 41% | 51% | 50–100bb | g5 |
| J7 | twopair | 57% | 42% | 20% | 55% | 50–100bb | g6 |
| J9 | twopair | 59% | 44% | 27% | 54% | 50–100bb | g6 |
| J8 | twopair | 58% | 43% | 21% | 53% | 50–100bb | g6 |
| 97 | twopair | 54% | 34% | 15% | 51% | 50–100bb | g6 |
| 87 | twopair | 52% | 34% | 13% | 51% | 50–100bb | g6 |
| 98 | twopair | 55% | 34% | 17% | 50% | 50–100bb | g6 |
| QQ | op | 52% | 28% | 6% | 55% | 50–100bb | g7 |
| AA | op | 49% | 28% | 8% | 52% | 50–100bb | g7 |
| KK | op | 52% | 27% | 9% | 50% | 50–100bb | g7 |
| 96 | twopair | 54% | 33% | 15% | 49% | 0–5bb | g8 |
| 76 | twopair | 53% | 33% | 10% | 49% | 0–5bb | g8 |
| 86 | twopair | 53% | 34% | 11% | 48% | 0–5bb | g8 |
| QJ | tpmk | 52% | 27% | 1% | 56% | 50–100bb | g9 |
| KJ | tpgk | 52% | 29% | 4% | 55% | 50–100bb | g9 |
| AJ | tpgk | 52% | 30% | 5% | 53% | 50–100bb | g9 |
| A9 | mp | 44% | 18% | 0% | 51% | 50–100bb | g10 |
| K9 | mp | 41% | 15% | 0% | 46% | 0–5bb | g10 |
| Q9 | mp | 37% | 11% | 0% | 45% | 0–5bb | g10 |
| A8 | bp | 26% | 4% | 0% | 34% | 0–5bb | g11 |
| K8 | bp | 25% | 3% | 0% | 29% | 0–5bb | g11 |
| Q8 | bp | 24% | 2% | 0% | 25% | 0–5bb | g11 |
| K7 | bp | 15% | 0% | 0% | 17% | 0–5bb | g11 |
| A7 | bp | 15% | 1% | 0% | 18% | 0–5bb | g11 |
| Q7 | bp | 14% | 0% | 0% | 19% | 0–5bb | g11 |
| A6 | bp | 8% | 0% | 0% | 10% | 0–5bb | g11 |
| K6 | bp | 7% | 0% | 0% | 8% | 0–5bb | g11 |
| Q6 | bp | 6% | 0% | 0% | 5% | 0–5bb | g11 |
| 64 | bp | 4% | 0% | 0% | 3% | 0–5bb | g11 |
| 44 | pp3 | 3% | 0% | 0% | 0% | 0–5bb | g11 |
| 33 | pp3 | 2% | 0% | 0% | 0% | 0–5bb | g11 |
| 22 | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g11 |
| AK | khnd | 0% | 0% | 0% | 0% | Pot is too big | g12 |
| AQ | khnd | 0% | 0% | 0% | 0% | Pot is too big | g12 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g12 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g12 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g12 |
