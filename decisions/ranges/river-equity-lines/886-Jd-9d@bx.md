# 886-Jd-9d@bx river (8♠ 8♦ 6♣ J♦ 9♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Full houses & flushes | JJ, 99, 88, 66, J8, 98, 86 · ♦ flushes: AK, AQ, AT, A7–A2, KQ, KT, K7–K2, QT, Q7–Q5, T7, 76, 75, 65, 64 | 97% | 99% | 98% | 72% |
| g2 | 25–50bb | Flushes | ♦ flushes: 54, 43 | 91% | 97% | 91% | 49% |
| g3 | 25–50bb | Straights | QT, T7, 75 | 90% | 96% | 88% | 45% |
| g4 | 15–25bb | Trips | A8, K8, Q8, T8, 87 | 89% | 92% | 74% | 48% |
| g5 | 0–5bb | Overpairs | AA–QQ | 83% | 84% | 51% | 43% |
| g6 | 0–5bb | Top pair | AJ, KJ, QJ, JT, J9, J7 | 78% | 75% | 17% | 45% |
| g7 | 0–5bb | Big pocket pairs | TT | 73% | 67% | 2% | 45% |
| g8 | 0–5bb | Second pair | A9, K9, Q9, T9, 97, 96 | 66% | 50% | 2% | 44% |
| g9 | 0–5bb | Small pairs | 77, 55–22, A6, K6, Q6, 76, 65, 64 | 50% | 34% | 0% | 29% |
| g10 | Pot is too big | Ace-high | AK, AQ, AT, A7, A5–A2 | 18% | 7% | 0% | 9% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| QT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| T7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| JJ | boat | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| 88 | boat | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| 99 | boat | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| 98 | boat | 99% | 100% | 99% | 94% | 50–100bb | g1 |
| J8 | boat | 99% | 100% | 99% | 93% | 50–100bb | g1 |
| 86 | boat | 99% | 100% | 99% | 81% | 50–100bb | g1 |
| 66 | boat | 97% | 100% | 99% | 69% | 50–100bb | g1 |
| A6+fl | flush | 97% | 100% | 99% | 62% | 50–100bb | g1 |
| 76+fl | flush | 95% | 99% | 97% | 60% | 50–100bb | g1 |
| Q6+fl | flush | 95% | 99% | 96% | 60% | 50–100bb | g1 |
| AT+fl | flush | 96% | 100% | 100% | 60% | 50–100bb | g1 |
| 64+fl | flush | 95% | 98% | 96% | 60% | 50–100bb | g1 |
| A2+fl | flush | 95% | 100% | 99% | 59% | 50–100bb | g1 |
| A3+fl | flush | 96% | 100% | 99% | 59% | 50–100bb | g1 |
| AK+fl | flush | 96% | 100% | 99% | 59% | 50–100bb | g1 |
| A4+fl | flush | 96% | 100% | 99% | 59% | 50–100bb | g1 |
| A7+fl | flush | 95% | 100% | 99% | 59% | 50–100bb | g1 |
| 65+fl | flush | 94% | 99% | 96% | 58% | 50–100bb | g1 |
| A5+fl | flush | 96% | 100% | 99% | 58% | 50–100bb | g1 |
| AQ+fl | flush | 96% | 100% | 99% | 58% | 50–100bb | g1 |
| K6+fl | flush | 94% | 99% | 96% | 58% | 50–100bb | g1 |
| KT+fl | flush | 95% | 99% | 99% | 57% | 50–100bb | g1 |
| K7+fl | flush | 94% | 99% | 97% | 57% | 50–100bb | g1 |
| K2+fl | flush | 94% | 99% | 96% | 56% | 50–100bb | g1 |
| K3+fl | flush | 94% | 99% | 96% | 56% | 50–100bb | g1 |
| K4+fl | flush | 94% | 99% | 96% | 55% | 50–100bb | g1 |
| Q7+fl | flush | 94% | 99% | 97% | 55% | 50–100bb | g1 |
| KQ+fl | flush | 94% | 99% | 96% | 54% | 50–100bb | g1 |
| K5+fl | flush | 94% | 99% | 96% | 54% | 50–100bb | g1 |
| Q5+fl | flush | 93% | 98% | 96% | 54% | 50–100bb | g1 |
| 75+fl | flush | 92% | 98% | 94% | 52% | 50–100bb | g1 |
| 43+fl | flush | 91% | 97% | 92% | 49% | 25–50bb | g2 |
| 54+fl | flush | 91% | 97% | 91% | 50% | 25–50bb | g2 |
| QT | straight | 90% | 96% | 88% | 45% | 25–50bb | g3 |
| T7 | straight | 89% | 95% | 87% | 42% | 25–50bb | g3 |
| 75 | straight | 89% | 95% | 86% | 42% | 25–50bb | g3 |
| A8 | trips | 90% | 92% | 76% | 47% | 25–50bb | g4 |
| K8 | trips | 88% | 93% | 73% | 48% | 25–50bb | g4 |
| Q8 | trips | 89% | 92% | 73% | 48% | 25–50bb | g4 |
| T8 | trips | 87% | 91% | 72% | 48% | 25–50bb | g4 |
| 87 | trips | 87% | 90% | 66% | 49% | 25–50bb | g4 |
| AA | op | 82% | 81% | 49% | 40% | 15–25bb | g5 |
| QQ | op | 83% | 85% | 52% | 44% | 25–50bb | g5 |
| KK | op | 83% | 85% | 50% | 44% | 25–50bb | g5 |
| J9 | twopair | 83% | 82% | 43% | 49% | 15–25bb | g6 |
| AJ | tpgk | 81% | 79% | 31% | 43% | 15–25bb | g6 |
| KJ | tpgk | 78% | 75% | 14% | 45% | 15–25bb | g6 |
| JT | tpmk | 76% | 72% | 7% | 44% | 15–25bb | g6 |
| QJ | tpmk | 77% | 72% | 8% | 45% | 15–25bb | g6 |
| J7 | tpmk | 75% | 71% | 6% | 44% | 15–25bb | g6 |
| TT | pp1 | 73% | 67% | 2% | 45% | 15–25bb | g7 |
| K9 | mp | 66% | 49% | 2% | 45% | 0–5bb | g8 |
| Q9 | mp | 65% | 48% | 1% | 43% | 0–5bb | g8 |
| T9 | mp | 64% | 45% | 1% | 44% | 0–5bb | g8 |
| 97 | mp | 63% | 44% | 1% | 42% | 0–5bb | g8 |
| 96 | twopair | 63% | 45% | 1% | 44% | 0–5bb | g8 |
| A9 | mp | 69% | 56% | 2% | 44% | 5–15bb | g8 |
| A6 | bp | 57% | 38% | 0% | 38% | 0–5bb | g9 |
| 77 | pp3 | 57% | 40% | 0% | 36% | 0–5bb | g9 |
| K6 | bp | 57% | 38% | 0% | 38% | 0–5bb | g9 |
| Q6 | bp | 55% | 39% | 0% | 34% | 0–5bb | g9 |
| 76 | bp | 55% | 38% | 0% | 29% | 0–5bb | g9 |
| 65 | bp | 54% | 37% | 0% | 30% | 0–5bb | g9 |
| 64 | bp | 52% | 35% | 0% | 27% | 0–5bb | g9 |
| 55 | pp3 | 49% | 34% | 0% | 19% | 0–5bb | g9 |
| 44 | pp3 | 43% | 31% | 0% | 19% | 0–5bb | g9 |
| 33 | pp3 | 38% | 28% | 0% | 20% | 0–5bb | g9 |
| 22 | pp3 | 33% | 24% | 0% | 19% | 0–5bb | g9 |
| AQ | khnd | 28% | 21% | 0% | 17% | Pot is too big | g10 |
| AK | khnd | 28% | 21% | 0% | 16% | Pot is too big | g10 |
| AT | khnd | 24% | 11% | 0% | 14% | Pot is too big | g10 |
| A7 | khnd | 15% | 2% | 0% | 9% | Pot is too big | g10 |
| A3 | khnd | 13% | 1% | 0% | 4% | Pot is too big | g10 |
| A2 | khnd | 12% | 0% | 0% | 5% | Pot is too big | g10 |
| A5 | khnd | 11% | 1% | 0% | 4% | Pot is too big | g10 |
| A4 | khnd | 11% | 0% | 0% | 4% | Pot is too big | g10 |
