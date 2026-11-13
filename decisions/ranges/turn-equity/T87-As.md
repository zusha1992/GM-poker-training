# T87-As turn (T♥ 8♥ 7♠ A♠): equity groups

Generated 2026-11-13 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights & sets | AA, TT, 88, 77, J9, 96 | 89% | 90% | 91% | 87% |
| g2 | 25–50bb | Two pair | AT, A8, A7, T8, T7, 87 | 78% | 77% | 70% | 56% |
| g3 | 25–50bb | Top pair, top kicker | AK | 70% | 65% | 58% | 35% |
| g4 | 15–25bb | Top pair, good kicker | AQ, AJ | 72% | 68% | 60% | 38% |
| g5 | 5–15bb | Top pair, weak kicker | A9, A6–A2 | 66% | 56% | 48% | 16% |
| g6 | 5–15bb | Second pair | KT, QT, JT, T9 | 55% | 42% | 28% | 13% |
| g7 | 0–5bb | Big pocket pairs | KK–JJ | 58% | 44% | 37% | 8% |
| g8 | 0–5bb | Small pairs | 99, 66–22, K8, K7, Q8, Q7, J8, J7, 98, 97, 86, 76, 75 | 33% | 22% | 12% | 11% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| J9 | straight | 92% | 93% | 93% | 90% | 50–100bb | g1 |
| 96 | straight | 91% | 91% | 91% | 87% | 50–100bb | g1 |
| TT | twopair | 86% | 88% | 88% | 86% | 50–100bb | g1 |
| AA | twopair | 88% | 89% | 90% | 85% | 50–100bb | g1 |
| 88 | twopair | 87% | 88% | 89% | 84% | 50–100bb | g1 |
| 77 | twopair | 86% | 87% | 87% | 84% | 50–100bb | g1 |
| AT | twopair | 83% | 85% | 82% | 75% | 50–100bb | g2 |
| A7 | twopair | 77% | 75% | 67% | 46% | 25–50bb | g2 |
| A8 | twopair | 79% | 80% | 74% | 59% | 50–100bb | g2 |
| T8 | twopair | 73% | 67% | 58% | 44% | 25–50bb | g2 |
| 87 | twopair | 66% | 60% | 53% | 35% | 25–50bb | g2 |
| T7 | twopair | 68% | 62% | 51% | 39% | 25–50bb | g2 |
| AK | tpgk | 70% | 65% | 58% | 35% | 25–50bb | g3 |
| AJ | tpmk | 74% | 70% | 62% | 39% | 25–50bb | g4 |
| AQ | tpgk | 70% | 67% | 57% | 36% | 25–50bb | g4 |
| A9 | tpmk | 73% | 66% | 59% | 34% | 25–50bb | g5 |
| A6 | tpmk | 66% | 56% | 48% | 19% | 5–15bb | g5 |
| A3 | tpmk | 63% | 53% | 44% | 11% | 5–15bb | g5 |
| A4 | tpmk | 63% | 53% | 46% | 11% | 5–15bb | g5 |
| A5 | tpmk | 65% | 53% | 45% | 12% | 5–15bb | g5 |
| A2 | tpmk | 63% | 53% | 45% | 10% | 5–15bb | g5 |
| T9 | mp | 57% | 45% | 27% | 22% | 0–5bb | g6 |
| KT | mp | 56% | 42% | 30% | 10% | 0–5bb | g6 |
| JT | mp | 55% | 42% | 27% | 15% | 0–5bb | g6 |
| QT | mp | 54% | 41% | 26% | 9% | 0–5bb | g6 |
| JJ | pp1 | 60% | 48% | 42% | 13% | 0–5bb | g7 |
| KK | pp1 | 57% | 42% | 34% | 6% | 0–5bb | g7 |
| QQ | pp1 | 56% | 42% | 34% | 6% | 0–5bb | g7 |
| 99 | pp2 | 52% | 38% | 20% | 21% | 0–5bb | g8 |
| 98 | bp | 49% | 38% | 27% | 26% | Pot is too big | g8 |
| J8 | bp | 46% | 34% | 21% | 19% | Pot is too big | g8 |
| 97 | bp | 45% | 34% | 27% | 25% | Pot is too big | g8 |
| 86 | bp | 44% | 29% | 19% | 17% | Pot is too big | g8 |
| Q8 | bp | 43% | 31% | 14% | 14% | Pot is too big | g8 |
| K8 | bp | 42% | 27% | 11% | 9% | Pot is too big | g8 |
| J7 | bp | 41% | 27% | 20% | 18% | Pot is too big | g8 |
| 76 | bp | 37% | 26% | 19% | 17% | Pot is too big | g8 |
| Q7 | bp | 35% | 24% | 15% | 13% | Pot is too big | g8 |
| 75 | bp | 33% | 22% | 15% | 13% | Pot is too big | g8 |
| K7 | bp | 33% | 20% | 10% | 8% | Pot is too big | g8 |
| 66 | pp3 | 25% | 16% | 10% | 10% | Pot is too big | g8 |
| 33 | pp3 | 20% | 11% | 4% | 4% | Pot is too big | g8 |
| 55 | pp3 | 20% | 11% | 4% | 4% | Pot is too big | g8 |
| 44 | pp3 | 20% | 11% | 4% | 4% | Pot is too big | g8 |
| 22 | pp3 | 19% | 12% | 4% | 3% | Pot is too big | g8 |
