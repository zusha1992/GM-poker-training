# QT7-2c turn (Q♥ T♦ 7♠ 2♣): equity groups

Generated 2026-11-12 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | QQ, TT, 77, 22 | 97% | 98% | 100% | 100% |
| g2 | 50–100bb | Two pair | QT, Q7, T7 | 92% | 92% | 90% | 84% |
| g3 | 50–100bb | Overpairs | AA, KK | 88% | 85% | 83% | 77% |
| g4 | 25–50bb | Top pair, top kicker | AQ, KQ | 88% | 86% | 84% | 75% |
| g5 | 25–50bb | Top pair, good kicker | QJ, Q9, Q8 | 84% | 75% | 74% | 48% |
| g6 | 15–25bb | Top pair, weak kicker | Q6, Q5 | 79% | 64% | 62% | 20% |
| g7 | 5–15bb | Big pocket pairs | JJ | 74% | 49% | 50% | 4% |
| g8 | 5–15bb | Second pair | AT, KT, JT, T9, T8 | 67% | 41% | 31% | 9% |
| g9 | 0–5bb | Small pairs | 99, 88, 66–33, A7, A2, K7, K2, J7, 97, 87, 76, 75 | 38% | 19% | 8% | 8% |
| g10 | 0–5bb | Ace-high | A9, A8, A6–A3 | 20% | 12% | 6% | 6% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| 22 | twopair | 97% | 98% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 97% | 98% | 100% | 100% | 50–100bb | g1 |
| QQ | twopair | 97% | 98% | 100% | 99% | 50–100bb | g1 |
| TT | twopair | 97% | 98% | 100% | 99% | 50–100bb | g1 |
| QT | twopair | 92% | 94% | 93% | 87% | 50–100bb | g2 |
| Q7 | twopair | 91% | 89% | 86% | 79% | 50–100bb | g2 |
| T7 | twopair | 87% | 82% | 78% | 72% | 50–100bb | g2 |
| AA | op | 88% | 85% | 83% | 77% | 50–100bb | g3 |
| KK | op | 87% | 85% | 83% | 76% | 50–100bb | g3 |
| AQ | tpgk | 88% | 86% | 84% | 77% | 50–100bb | g4 |
| KQ | tpgk | 88% | 85% | 84% | 73% | 50–100bb | g4 |
| Q9 | tpmk | 83% | 72% | 71% | 39% | 25–50bb | g5 |
| Q8 | tpmk | 80% | 66% | 65% | 27% | 25–50bb | g5 |
| QJ | tpmk | 86% | 79% | 78% | 58% | 50–100bb | g5 |
| Q6 | tpmk | 78% | 64% | 63% | 22% | 25–50bb | g6 |
| Q5 | tpmk | 79% | 63% | 61% | 17% | 25–50bb | g6 |
| JJ | pp1 | 74% | 49% | 50% | 4% | 0–5bb | g7 |
| AT | mp | 71% | 46% | 42% | 11% | 0–5bb | g8 |
| KT | mp | 68% | 42% | 35% | 9% | 0–5bb | g8 |
| JT | mp | 65% | 39% | 28% | 9% | 0–5bb | g8 |
| T9 | mp | 62% | 36% | 21% | 8% | 0–5bb | g8 |
| T8 | mp | 61% | 35% | 15% | 10% | 0–5bb | g8 |
| 99 | pp2 | 52% | 24% | 4% | 4% | 0–5bb | g9 |
| 88 | spp | 48% | 24% | 5% | 4% | Pot is too big | g9 |
| A7 | bp | 48% | 26% | 10% | 10% | Pot is too big | g9 |
| K7 | bp | 46% | 24% | 11% | 9% | Pot is too big | g9 |
| J7 | bp | 46% | 22% | 10% | 9% | Pot is too big | g9 |
| 97 | bp | 45% | 23% | 10% | 9% | Pot is too big | g9 |
| 87 | bp | 43% | 22% | 10% | 9% | Pot is too big | g9 |
| 76 | bp | 42% | 21% | 10% | 9% | Pot is too big | g9 |
| 75 | bp | 41% | 19% | 10% | 10% | Pot is too big | g9 |
| 66 | spp | 33% | 11% | 4% | 4% | Pot is too big | g9 |
| 55 | spp | 31% | 12% | 5% | 4% | Pot is too big | g9 |
| K2 | bp | 28% | 15% | 10% | 10% | Pot is too big | g9 |
| A2 | bp | 27% | 16% | 10% | 11% | Pot is too big | g9 |
| 44 | spp | 26% | 11% | 4% | 5% | Pot is too big | g9 |
| 33 | spp | 24% | 10% | 4% | 4% | Pot is too big | g9 |
| A9 | khnd | 22% | 12% | 5% | 6% | Pot is too big | g10 |
| A8 | khnd | 21% | 12% | 6% | 6% | Pot is too big | g10 |
| A6 | khnd | 20% | 11% | 6% | 6% | Pot is too big | g10 |
| A4 | khnd | 19% | 11% | 6% | 6% | Pot is too big | g10 |
| A3 | khnd | 18% | 11% | 6% | 5% | Pot is too big | g10 |
| A5 | khnd | 18% | 11% | 6% | 6% | Pot is too big | g10 |
