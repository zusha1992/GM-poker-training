# T87-As turn (T♥ 8♥ 7♠ A♠): equity groups

Generated 2026-11-12 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights & sets | AA, TT, 88, 77, J9, 96 | 90% | 91% | 90% | 88% |
| g2 | 25–50bb | Two pair | AT, A8, A7, T8, T7, 87 | 78% | 77% | 71% | 56% |
| g3 | 25–50bb | Top pair, good kicker | AK–AJ | 71% | 67% | 59% | 37% |
| g4 | 15–25bb | Top pair, weak kicker | A9, A6–A2 | 66% | 56% | 48% | 16% |
| g5 | 5–15bb | Big pocket pairs | KK–JJ | 59% | 44% | 37% | 8% |
| g6 | 5–15bb | Second pair | KT, QT, JT, T9 | 56% | 42% | 28% | 13% |
| g7 | 0–5bb | Small pairs | 99, 66–22, K8, K7, Q8, Q7, J8, J7, 98, 97, 86, 76, 75 | 34% | 22% | 12% | 11% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| J9 | straight | 93% | 93% | 92% | 91% | 50–100bb | g1 |
| 96 | straight | 90% | 91% | 91% | 87% | 50–100bb | g1 |
| TT | twopair | 87% | 88% | 88% | 86% | 50–100bb | g1 |
| AA | twopair | 87% | 89% | 90% | 86% | 50–100bb | g1 |
| 88 | twopair | 87% | 88% | 88% | 84% | 50–100bb | g1 |
| 77 | twopair | 87% | 88% | 87% | 83% | 50–100bb | g1 |
| AT | twopair | 83% | 86% | 82% | 75% | 50–100bb | g2 |
| A7 | twopair | 77% | 74% | 68% | 48% | 25–50bb | g2 |
| T7 | twopair | 68% | 62% | 48% | 39% | 15–25bb | g2 |
| T8 | twopair | 71% | 66% | 58% | 45% | 25–50bb | g2 |
| A8 | twopair | 79% | 80% | 73% | 57% | 50–100bb | g2 |
| 87 | twopair | 66% | 61% | 55% | 36% | 25–50bb | g2 |
| AJ | tpmk | 74% | 69% | 61% | 40% | 25–50bb | g3 |
| AQ | tpgk | 71% | 66% | 58% | 36% | 25–50bb | g3 |
| AK | tpgk | 70% | 67% | 57% | 36% | 25–50bb | g3 |
| A9 | tpmk | 72% | 66% | 58% | 35% | 25–50bb | g4 |
| A4 | tpmk | 64% | 54% | 45% | 11% | 5–15bb | g4 |
| A5 | tpmk | 64% | 54% | 45% | 12% | 5–15bb | g4 |
| A3 | tpmk | 64% | 53% | 44% | 11% | 5–15bb | g4 |
| A2 | tpmk | 64% | 52% | 44% | 11% | 5–15bb | g4 |
| A6 | tpmk | 68% | 57% | 50% | 18% | 25–50bb | g4 |
| JJ | pp1 | 63% | 47% | 43% | 13% | 0–5bb | g5 |
| KK | pp1 | 57% | 42% | 34% | 6% | 0–5bb | g5 |
| QQ | pp1 | 56% | 43% | 34% | 6% | 0–5bb | g5 |
| T9 | mp | 58% | 45% | 28% | 23% | 0–5bb | g6 |
| KT | mp | 57% | 42% | 32% | 9% | 0–5bb | g6 |
| JT | mp | 56% | 43% | 26% | 15% | 0–5bb | g6 |
| QT | mp | 54% | 40% | 25% | 10% | 0–5bb | g6 |
| 99 | pp2 | 52% | 38% | 20% | 21% | 0–5bb | g7 |
| 98 | bp | 51% | 39% | 27% | 25% | 0–5bb | g7 |
| J8 | bp | 47% | 34% | 20% | 19% | Pot is too big | g7 |
| 97 | bp | 45% | 33% | 26% | 24% | Pot is too big | g7 |
| 86 | bp | 43% | 29% | 20% | 18% | Pot is too big | g7 |
| Q8 | bp | 41% | 31% | 15% | 14% | Pot is too big | g7 |
| K8 | bp | 41% | 28% | 10% | 9% | Pot is too big | g7 |
| J7 | bp | 40% | 27% | 20% | 17% | Pot is too big | g7 |
| 76 | bp | 37% | 26% | 19% | 17% | Pot is too big | g7 |
| Q7 | bp | 36% | 24% | 14% | 13% | Pot is too big | g7 |
| K7 | bp | 32% | 20% | 10% | 8% | Pot is too big | g7 |
| 75 | bp | 32% | 22% | 15% | 13% | Pot is too big | g7 |
| 66 | pp3 | 26% | 16% | 10% | 10% | Pot is too big | g7 |
| 22 | pp3 | 21% | 11% | 4% | 4% | Pot is too big | g7 |
| 55 | pp3 | 21% | 11% | 5% | 4% | Pot is too big | g7 |
| 44 | pp3 | 20% | 10% | 4% | 4% | Pot is too big | g7 |
| 33 | pp3 | 19% | 11% | 4% | 4% | Pot is too big | g7 |
