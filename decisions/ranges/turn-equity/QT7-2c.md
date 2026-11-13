# QT7-2c turn (Q♥ T♦ 7♠ 2♣): equity groups

Generated 2026-11-13 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | QQ, TT, 77, 22 | 97% | 98% | 100% | 100% |
| g2 | 50–100bb | Two pair | QT, Q7, T7 | 91% | 92% | 90% | 84% |
| g3 | 25–50bb | Overpairs | AA, KK | 88% | 86% | 84% | 77% |
| g4 | 25–50bb | Top pair, top kicker | AQ, KQ | 88% | 87% | 84% | 75% |
| g5 | 25–50bb | Top pair, good kicker | QJ, Q9, Q8 | 83% | 75% | 74% | 48% |
| g6 | 5–15bb | Top pair, weak kicker | Q6, Q5 | 78% | 63% | 63% | 20% |
| g7 | 5–15bb | Big pocket pairs | JJ | 73% | 51% | 51% | 4% |
| g8 | 5–15bb | Second pair | AT, KT, JT, T9, T8 | 67% | 42% | 31% | 10% |
| g9 | 0–5bb | Small pairs | 99, 88, 66–33, A7, A2, K7, K2, J7, 97, 87, 76, 75 | 38% | 19% | 8% | 8% |
| g10 | 0–5bb | Ace-high | A9, A8, A6–A3 | 20% | 12% | 6% | 6% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| 22 | twopair | 97% | 99% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 97% | 98% | 100% | 100% | 50–100bb | g1 |
| QQ | twopair | 97% | 98% | 100% | 99% | 50–100bb | g1 |
| TT | twopair | 97% | 98% | 100% | 99% | 50–100bb | g1 |
| QT | twopair | 92% | 94% | 92% | 86% | 50–100bb | g2 |
| Q7 | twopair | 90% | 89% | 87% | 78% | 50–100bb | g2 |
| T7 | twopair | 88% | 81% | 79% | 71% | 50–100bb | g2 |
| AA | op | 88% | 86% | 84% | 78% | 50–100bb | g3 |
| KK | op | 88% | 85% | 84% | 77% | 50–100bb | g3 |
| AQ | tpgk | 88% | 87% | 85% | 78% | 50–100bb | g4 |
| KQ | tpgk | 88% | 86% | 83% | 73% | 50–100bb | g4 |
| Q9 | tpmk | 83% | 72% | 71% | 38% | 25–50bb | g5 |
| Q8 | tpmk | 80% | 65% | 66% | 27% | 25–50bb | g5 |
| QJ | tpmk | 85% | 79% | 78% | 58% | 50–100bb | g5 |
| Q5 | tpmk | 78% | 63% | 63% | 19% | 25–50bb | g6 |
| Q6 | tpmk | 78% | 64% | 62% | 22% | 25–50bb | g6 |
| JJ | pp1 | 73% | 51% | 51% | 4% | 25–50bb | g7 |
| AT | mp | 71% | 47% | 42% | 11% | 0–5bb | g8 |
| KT | mp | 68% | 43% | 35% | 10% | 0–5bb | g8 |
| JT | mp | 66% | 38% | 27% | 8% | 0–5bb | g8 |
| T9 | mp | 61% | 38% | 20% | 9% | 0–5bb | g8 |
| T8 | mp | 60% | 35% | 16% | 10% | 0–5bb | g8 |
| 99 | pp2 | 54% | 24% | 4% | 5% | 0–5bb | g9 |
| 88 | spp | 49% | 23% | 4% | 5% | Pot is too big | g9 |
| A7 | bp | 48% | 25% | 11% | 11% | Pot is too big | g9 |
| K7 | bp | 46% | 24% | 10% | 10% | Pot is too big | g9 |
| J7 | bp | 45% | 21% | 9% | 9% | Pot is too big | g9 |
| 97 | bp | 45% | 23% | 10% | 8% | Pot is too big | g9 |
| 87 | bp | 44% | 23% | 10% | 10% | Pot is too big | g9 |
| 75 | bp | 41% | 18% | 11% | 10% | Pot is too big | g9 |
| 76 | bp | 40% | 21% | 11% | 10% | Pot is too big | g9 |
| 66 | spp | 32% | 10% | 4% | 5% | Pot is too big | g9 |
| 55 | spp | 31% | 11% | 5% | 4% | Pot is too big | g9 |
| K2 | bp | 28% | 15% | 10% | 11% | Pot is too big | g9 |
| 44 | spp | 27% | 10% | 5% | 5% | Pot is too big | g9 |
| A2 | bp | 27% | 16% | 11% | 12% | Pot is too big | g9 |
| 33 | spp | 23% | 10% | 4% | 5% | Pot is too big | g9 |
| A9 | khnd | 22% | 13% | 5% | 6% | Pot is too big | g10 |
| A8 | khnd | 21% | 12% | 6% | 6% | Pot is too big | g10 |
| A5 | khnd | 19% | 11% | 5% | 6% | Pot is too big | g10 |
| A6 | khnd | 19% | 11% | 6% | 6% | Pot is too big | g10 |
| A4 | khnd | 18% | 11% | 5% | 6% | Pot is too big | g10 |
| A3 | khnd | 18% | 11% | 6% | 6% | Pot is too big | g10 |
