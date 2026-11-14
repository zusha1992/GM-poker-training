# QT7-5d turn (Q♥ T♦ 7♠ 5♦): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | QQ, TT, 77, 55 | 96% | 96% | 99% | 97% |
| g2 | 50–100bb | Two pair | QT, Q7, Q5, T7, 75 | 89% | 90% | 88% | 81% |
| g3 | 25–50bb | Overpairs | AA, KK | 85% | 86% | 80% | 71% |
| g4 | 25–50bb | Top pair, top kicker | AQ, KQ | 86% | 87% | 80% | 67% |
| g5 | 15–25bb | Top pair, good kicker | QJ | 83% | 83% | 75% | 53% |
| g6 | 5–15bb | Top pair, weak kicker | Q9, Q8, Q6 | 80% | 77% | 66% | 34% |
| g7 | 5–15bb | Big pocket pairs | JJ | 71% | 62% | 47% | 6% |
| g8 | 0–5bb | Second pair | AT, KT, JT, T9, T8 | 64% | 51% | 29% | 10% |
| g9 | 0–5bb | Small pairs | 99, 88, 66, 44–22, A7, A5, K7, K5, J7, 97, 87, 76, 65, 54 | 39% | 24% | 9% | 9% |
| g10 | 0–5bb | Ace-high | A9, A8, A6, A4–A2 | 19% | 14% | 5% | 5% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| QQ | twopair | 96% | 96% | 99% | 98% | 50–100bb | g1 |
| 77 | twopair | 96% | 96% | 98% | 97% | 50–100bb | g1 |
| 55 | twopair | 95% | 96% | 99% | 97% | 50–100bb | g1 |
| TT | twopair | 95% | 95% | 98% | 97% | 50–100bb | g1 |
| QT | twopair | 90% | 92% | 90% | 84% | 50–100bb | g2 |
| Q7 | twopair | 91% | 91% | 88% | 80% | 50–100bb | g2 |
| Q5 | twopair | 88% | 88% | 85% | 74% | 50–100bb | g2 |
| T7 | twopair | 85% | 85% | 78% | 72% | 50–100bb | g2 |
| 75 | twopair | 82% | 81% | 78% | 72% | 50–100bb | g2 |
| KK | op | 85% | 86% | 79% | 72% | 50–100bb | g3 |
| AA | op | 86% | 86% | 81% | 71% | 50–100bb | g3 |
| AQ | tpgk | 86% | 87% | 81% | 69% | 50–100bb | g4 |
| KQ | tpgk | 85% | 86% | 79% | 66% | 50–100bb | g4 |
| QJ | tpmk | 83% | 83% | 75% | 53% | 50–100bb | g5 |
| Q9 | tpmk | 81% | 78% | 68% | 38% | 25–50bb | g6 |
| Q8 | tpmk | 79% | 77% | 65% | 30% | 25–50bb | g6 |
| Q6 | tpmk | 77% | 76% | 63% | 28% | 25–50bb | g6 |
| JJ | pp1 | 71% | 62% | 47% | 6% | 15–25bb | g7 |
| JT | mp | 64% | 49% | 25% | 10% | 0–5bb | g8 |
| T9 | mp | 59% | 44% | 19% | 10% | 0–5bb | g8 |
| AT | mp | 69% | 58% | 39% | 11% | 5–15bb | g8 |
| T8 | mp | 58% | 40% | 14% | 10% | 0–5bb | g8 |
| KT | mp | 65% | 54% | 32% | 10% | 5–15bb | g8 |
| 99 | pp2 | 50% | 31% | 5% | 5% | 0–5bb | g9 |
| A7 | bp | 47% | 30% | 11% | 12% | Pot is too big | g9 |
| 88 | spp | 47% | 28% | 5% | 5% | Pot is too big | g9 |
| J7 | bp | 47% | 30% | 15% | 14% | Pot is too big | g9 |
| 97 | bp | 47% | 31% | 15% | 14% | Pot is too big | g9 |
| 87 | bp | 46% | 31% | 16% | 16% | Pot is too big | g9 |
| K7 | bp | 46% | 29% | 12% | 11% | Pot is too big | g9 |
| 76 | bp | 44% | 29% | 16% | 15% | Pot is too big | g9 |
| 65 | bp | 36% | 22% | 10% | 10% | Pot is too big | g9 |
| K5 | bp | 36% | 22% | 10% | 10% | Pot is too big | g9 |
| A5 | bp | 35% | 21% | 11% | 11% | Pot is too big | g9 |
| 54 | bp | 35% | 23% | 10% | 9% | Pot is too big | g9 |
| 66 | spp | 33% | 17% | 4% | 4% | Pot is too big | g9 |
| 44 | spp | 30% | 17% | 4% | 4% | Pot is too big | g9 |
| 33 | spp | 26% | 17% | 5% | 4% | Pot is too big | g9 |
| 22 | spp | 24% | 16% | 4% | 4% | Pot is too big | g9 |
| A9 | khnd | 20% | 15% | 5% | 5% | Pot is too big | g10 |
| A8 | khnd | 20% | 14% | 5% | 5% | Pot is too big | g10 |
| A3 | khnd | 19% | 13% | 5% | 5% | Pot is too big | g10 |
| A6 | khnd | 19% | 13% | 5% | 5% | Pot is too big | g10 |
| A2 | khnd | 18% | 13% | 6% | 5% | Pot is too big | g10 |
| A4 | khnd | 18% | 13% | 6% | 5% | Pot is too big | g10 |
