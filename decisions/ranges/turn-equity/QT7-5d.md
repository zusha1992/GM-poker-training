# QT7-5d turn (Q♥ T♦ 7♠ 5♦): equity groups

Generated 2026-11-12 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | QQ, TT, 77, 55 | 96% | 96% | 99% | 97% |
| g2 | 50–100bb | Two pair | QT, Q7, Q5, T7, 75 | 89% | 90% | 87% | 80% |
| g3 | 50–100bb | Overpairs | AA, KK | 85% | 86% | 79% | 71% |
| g4 | 25–50bb | Top pair, top kicker | AQ, KQ | 86% | 86% | 79% | 68% |
| g5 | 25–50bb | Top pair, good kicker | QJ, Q9, Q8 | 82% | 80% | 71% | 44% |
| g6 | 15–25bb | Top pair, weak kicker | Q6 | 78% | 74% | 63% | 28% |
| g7 | 5–15bb | Big pocket pairs | JJ | 71% | 63% | 48% | 6% |
| g8 | 5–15bb | Second pair | AT, KT, JT, T9, T8 | 65% | 52% | 29% | 10% |
| g9 | 0–5bb | Small pairs | 99, 88, 66, 44–22, A7, A5, K7, K5, J7, 97, 87, 76, 65, 54 | 39% | 24% | 9% | 9% |
| g10 | 0–5bb | Ace-high | A9, A8, A6, A4–A2 | 19% | 14% | 5% | 5% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| QQ | twopair | 96% | 96% | 99% | 98% | 50–100bb | g1 |
| TT | twopair | 95% | 95% | 98% | 97% | 50–100bb | g1 |
| 77 | twopair | 96% | 96% | 98% | 97% | 50–100bb | g1 |
| 55 | twopair | 95% | 96% | 99% | 97% | 50–100bb | g1 |
| QT | twopair | 91% | 92% | 91% | 84% | 50–100bb | g2 |
| Q7 | twopair | 91% | 90% | 88% | 80% | 50–100bb | g2 |
| Q5 | twopair | 88% | 87% | 85% | 75% | 50–100bb | g2 |
| T7 | twopair | 86% | 84% | 78% | 71% | 50–100bb | g2 |
| 75 | twopair | 83% | 80% | 77% | 71% | 50–100bb | g2 |
| AA | op | 85% | 86% | 79% | 71% | 50–100bb | g3 |
| KK | op | 86% | 86% | 79% | 70% | 50–100bb | g3 |
| AQ | tpgk | 86% | 86% | 81% | 70% | 50–100bb | g4 |
| KQ | tpgk | 86% | 86% | 78% | 66% | 50–100bb | g4 |
| Q9 | tpmk | 81% | 79% | 68% | 35% | 25–50bb | g5 |
| Q8 | tpmk | 79% | 76% | 64% | 30% | 25–50bb | g5 |
| QJ | tpmk | 83% | 82% | 74% | 53% | 50–100bb | g5 |
| Q6 | tpmk | 78% | 74% | 63% | 28% | 25–50bb | g6 |
| JJ | pp1 | 71% | 63% | 48% | 6% | 15–25bb | g7 |
| JT | mp | 64% | 49% | 25% | 9% | 0–5bb | g8 |
| AT | mp | 70% | 59% | 39% | 11% | 5–15bb | g8 |
| T9 | mp | 59% | 43% | 19% | 10% | 0–5bb | g8 |
| T8 | mp | 57% | 40% | 13% | 10% | 0–5bb | g8 |
| KT | mp | 66% | 54% | 32% | 10% | 5–15bb | g8 |
| 99 | pp2 | 49% | 30% | 5% | 5% | Pot is too big | g9 |
| A7 | bp | 48% | 30% | 12% | 12% | Pot is too big | g9 |
| J7 | bp | 48% | 31% | 16% | 15% | Pot is too big | g9 |
| 97 | bp | 47% | 30% | 16% | 14% | Pot is too big | g9 |
| 88 | spp | 47% | 30% | 4% | 5% | Pot is too big | g9 |
| 87 | bp | 46% | 30% | 17% | 15% | Pot is too big | g9 |
| K7 | bp | 44% | 29% | 12% | 11% | Pot is too big | g9 |
| 76 | bp | 43% | 28% | 17% | 15% | Pot is too big | g9 |
| 65 | bp | 37% | 22% | 10% | 10% | Pot is too big | g9 |
| A5 | bp | 36% | 21% | 11% | 11% | Pot is too big | g9 |
| K5 | bp | 36% | 22% | 9% | 10% | Pot is too big | g9 |
| 54 | bp | 35% | 23% | 10% | 10% | Pot is too big | g9 |
| 66 | spp | 32% | 16% | 4% | 4% | Pot is too big | g9 |
| 44 | spp | 30% | 17% | 5% | 4% | Pot is too big | g9 |
| 33 | spp | 26% | 17% | 5% | 4% | Pot is too big | g9 |
| 22 | spp | 22% | 16% | 5% | 4% | Pot is too big | g9 |
| A9 | khnd | 21% | 15% | 5% | 5% | Pot is too big | g10 |
| A8 | khnd | 21% | 14% | 5% | 6% | Pot is too big | g10 |
| A6 | khnd | 19% | 13% | 5% | 5% | Pot is too big | g10 |
| A3 | khnd | 18% | 14% | 5% | 5% | Pot is too big | g10 |
| A2 | khnd | 18% | 13% | 6% | 5% | Pot is too big | g10 |
| A4 | khnd | 18% | 14% | 5% | 5% | Pot is too big | g10 |
