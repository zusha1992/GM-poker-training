# QT7-5d turn (Q♥ T♦ 7♠ 5♦): equity groups

Generated 2026-11-13 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | QQ, TT, 77, 55 | 95% | 96% | 99% | 97% |
| g2 | 50–100bb | Two pair | QT, Q7, Q5, T7, 75 | 89% | 90% | 88% | 81% |
| g3 | 25–50bb | Overpairs | AA, KK | 85% | 86% | 80% | 71% |
| g4 | 25–50bb | Top pair, top kicker | AQ, KQ | 86% | 87% | 81% | 68% |
| g5 | 25–50bb | Top pair, good kicker | QJ, Q9, Q8 | 82% | 80% | 71% | 46% |
| g6 | 5–15bb | Top pair, weak kicker | Q6 | 77% | 76% | 62% | 28% |
| g7 | 5–15bb | Big pocket pairs | JJ | 70% | 61% | 47% | 6% |
| g8 | 0–5bb | Second pair | AT, KT, JT, T9, T8 | 65% | 51% | 29% | 10% |
| g9 | 0–5bb | Small pairs | 99, 88, 66, 44–22, A7, A5, K7, K5, J7, 97, 87, 76, 65, 54 | 40% | 24% | 9% | 9% |
| g10 | 0–5bb | Ace-high | A9, A8, A6, A4–A2 | 19% | 14% | 5% | 5% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| QQ | twopair | 96% | 96% | 99% | 98% | 50–100bb | g1 |
| TT | twopair | 95% | 95% | 98% | 98% | 50–100bb | g1 |
| 77 | twopair | 95% | 96% | 99% | 97% | 50–100bb | g1 |
| 55 | twopair | 96% | 96% | 99% | 97% | 50–100bb | g1 |
| QT | twopair | 90% | 92% | 91% | 85% | 50–100bb | g2 |
| Q7 | twopair | 90% | 91% | 88% | 80% | 50–100bb | g2 |
| Q5 | twopair | 88% | 88% | 86% | 74% | 50–100bb | g2 |
| T7 | twopair | 86% | 85% | 78% | 71% | 50–100bb | g2 |
| 75 | twopair | 83% | 80% | 77% | 71% | 50–100bb | g2 |
| AA | op | 85% | 86% | 79% | 71% | 50–100bb | g3 |
| KK | op | 84% | 85% | 80% | 70% | 50–100bb | g3 |
| AQ | tpgk | 86% | 88% | 82% | 71% | 50–100bb | g4 |
| KQ | tpgk | 86% | 87% | 80% | 66% | 50–100bb | g4 |
| Q9 | tpmk | 80% | 78% | 67% | 37% | 25–50bb | g5 |
| Q8 | tpmk | 79% | 76% | 65% | 31% | 25–50bb | g5 |
| QJ | tpmk | 83% | 82% | 75% | 54% | 50–100bb | g5 |
| Q6 | tpmk | 77% | 76% | 62% | 28% | 25–50bb | g6 |
| JJ | pp1 | 70% | 61% | 47% | 6% | 15–25bb | g7 |
| JT | mp | 65% | 49% | 25% | 9% | 0–5bb | g8 |
| T9 | mp | 60% | 44% | 19% | 10% | 0–5bb | g8 |
| AT | mp | 69% | 58% | 39% | 11% | 5–15bb | g8 |
| T8 | mp | 56% | 40% | 14% | 10% | 0–5bb | g8 |
| KT | mp | 66% | 54% | 33% | 10% | 5–15bb | g8 |
| 99 | pp2 | 51% | 32% | 4% | 5% | 0–5bb | g9 |
| J7 | bp | 49% | 32% | 16% | 15% | Pot is too big | g9 |
| 87 | bp | 48% | 30% | 17% | 15% | Pot is too big | g9 |
| A7 | bp | 48% | 30% | 12% | 12% | Pot is too big | g9 |
| 97 | bp | 48% | 31% | 16% | 14% | Pot is too big | g9 |
| 88 | spp | 47% | 28% | 5% | 5% | Pot is too big | g9 |
| K7 | bp | 46% | 28% | 12% | 12% | Pot is too big | g9 |
| 76 | bp | 43% | 29% | 16% | 15% | Pot is too big | g9 |
| 65 | bp | 36% | 22% | 11% | 10% | Pot is too big | g9 |
| K5 | bp | 36% | 22% | 10% | 10% | Pot is too big | g9 |
| 54 | bp | 36% | 22% | 10% | 9% | Pot is too big | g9 |
| A5 | bp | 36% | 21% | 10% | 10% | Pot is too big | g9 |
| 66 | spp | 32% | 17% | 4% | 4% | Pot is too big | g9 |
| 44 | spp | 29% | 17% | 5% | 4% | Pot is too big | g9 |
| 33 | spp | 26% | 16% | 4% | 4% | Pot is too big | g9 |
| 22 | spp | 23% | 16% | 5% | 4% | Pot is too big | g9 |
| A9 | khnd | 22% | 15% | 5% | 5% | Pot is too big | g10 |
| A8 | khnd | 19% | 14% | 6% | 5% | Pot is too big | g10 |
| A4 | khnd | 19% | 14% | 5% | 5% | Pot is too big | g10 |
| A2 | khnd | 18% | 14% | 5% | 5% | Pot is too big | g10 |
| A6 | khnd | 18% | 12% | 5% | 5% | Pot is too big | g10 |
| A3 | khnd | 17% | 13% | 5% | 5% | Pot is too big | g10 |
