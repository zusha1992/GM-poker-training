# T87-As turn (T♥ 8♥ 7♠ A♠): equity groups

Generated 2026-11-13 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights & sets | AA, TT, 88, 77, J9, 96 | 90% | 90% | 91% | 88% |
| g2 | 25–50bb | Two pair | AT, A8, A7, T8, T7, 87 | 78% | 77% | 71% | 56% |
| g3 | 25–50bb | Top pair, top kicker | AK | 70% | 67% | 57% | 35% |
| g4 | 15–25bb | Top pair, good kicker | AQ, AJ | 71% | 68% | 59% | 38% |
| g5 | 5–15bb | Top pair, weak kicker | A9, A6–A2 | 66% | 56% | 48% | 16% |
| g6 | 5–15bb | Big pocket pairs | KK–JJ | 58% | 44% | 37% | 9% |
| g7 | 5–15bb | Second pair | KT, QT, JT, T9 | 56% | 43% | 28% | 13% |
| g8 | 0–5bb | Small pairs | 99, 66–22, K8, K7, Q8, Q7, J8, J7, 98, 97, 86, 76, 75 | 33% | 22% | 12% | 11% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| J9 | straight | 93% | 93% | 94% | 90% | 50–100bb | g1 |
| 96 | straight | 91% | 91% | 91% | 87% | 50–100bb | g1 |
| 88 | twopair | 86% | 88% | 88% | 86% | 50–100bb | g1 |
| AA | twopair | 88% | 89% | 90% | 86% | 50–100bb | g1 |
| TT | twopair | 86% | 89% | 87% | 85% | 50–100bb | g1 |
| 77 | twopair | 87% | 87% | 87% | 84% | 50–100bb | g1 |
| AT | twopair | 83% | 86% | 82% | 75% | 50–100bb | g2 |
| A7 | twopair | 77% | 75% | 67% | 46% | 25–50bb | g2 |
| A8 | twopair | 79% | 80% | 74% | 57% | 50–100bb | g2 |
| T8 | twopair | 73% | 68% | 57% | 45% | 25–50bb | g2 |
| 87 | twopair | 66% | 60% | 53% | 36% | 25–50bb | g2 |
| T7 | twopair | 69% | 61% | 50% | 38% | 25–50bb | g2 |
| AK | tpgk | 70% | 67% | 57% | 34% | 25–50bb | g3 |
| AJ | tpmk | 73% | 70% | 60% | 39% | 25–50bb | g4 |
| AQ | tpgk | 70% | 66% | 57% | 37% | 25–50bb | g4 |
| A9 | tpmk | 73% | 67% | 60% | 33% | 25–50bb | g5 |
| A6 | tpmk | 67% | 57% | 49% | 18% | 5–15bb | g5 |
| A5 | tpmk | 64% | 53% | 45% | 12% | 5–15bb | g5 |
| A2 | tpmk | 64% | 53% | 44% | 11% | 5–15bb | g5 |
| A4 | tpmk | 64% | 52% | 45% | 12% | 5–15bb | g5 |
| A3 | tpmk | 64% | 52% | 44% | 11% | 5–15bb | g5 |
| JJ | pp1 | 62% | 48% | 42% | 13% | 0–5bb | g6 |
| KK | pp1 | 56% | 42% | 35% | 6% | 0–5bb | g6 |
| QQ | pp1 | 55% | 43% | 34% | 7% | 0–5bb | g6 |
| T9 | mp | 57% | 46% | 28% | 22% | 0–5bb | g7 |
| KT | mp | 56% | 42% | 32% | 10% | 0–5bb | g7 |
| JT | mp | 56% | 44% | 27% | 15% | 0–5bb | g7 |
| QT | mp | 54% | 41% | 25% | 9% | 0–5bb | g7 |
| 98 | bp | 51% | 37% | 26% | 24% | 0–5bb | g8 |
| 99 | pp2 | 50% | 38% | 19% | 20% | 0–5bb | g8 |
| J8 | bp | 47% | 33% | 20% | 19% | Pot is too big | g8 |
| 97 | bp | 45% | 33% | 26% | 24% | Pot is too big | g8 |
| 86 | bp | 43% | 31% | 19% | 18% | Pot is too big | g8 |
| Q8 | bp | 42% | 31% | 14% | 15% | Pot is too big | g8 |
| K8 | bp | 41% | 28% | 10% | 9% | Pot is too big | g8 |
| J7 | bp | 41% | 27% | 20% | 19% | Pot is too big | g8 |
| 76 | bp | 37% | 25% | 19% | 17% | Pot is too big | g8 |
| Q7 | bp | 35% | 25% | 14% | 13% | Pot is too big | g8 |
| 75 | bp | 33% | 22% | 15% | 12% | Pot is too big | g8 |
| K7 | bp | 32% | 22% | 10% | 9% | Pot is too big | g8 |
| 66 | pp3 | 26% | 16% | 10% | 10% | Pot is too big | g8 |
| 44 | pp3 | 20% | 11% | 4% | 4% | Pot is too big | g8 |
| 55 | pp3 | 20% | 10% | 4% | 4% | Pot is too big | g8 |
| 22 | pp3 | 20% | 11% | 4% | 5% | Pot is too big | g8 |
| 33 | pp3 | 19% | 11% | 4% | 4% | Pot is too big | g8 |
