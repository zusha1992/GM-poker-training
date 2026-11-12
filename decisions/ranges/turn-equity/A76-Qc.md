# A76-Qc turn (A♥ 7♥ 6♣ Q♣): equity groups

Generated 2026-11-12 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | AA, QQ, 77, 66 | 95% | 96% | 98% | 98% |
| g2 | 50–100bb | Two pair | AQ, A7, A6, Q7, Q6, 76 | 89% | 87% | 85% | 85% |
| g3 | 25–50bb | Top pair, good kicker | AK, AJ, AT | 82% | 79% | 73% | 72% |
| g4 | 15–25bb | Top pair, weak kicker | A9, A8, A5–A2 | 69% | 52% | 36% | 29% |
| g5 | 5–15bb | Big pocket pairs | KK | 51% | 29% | 11% | 6% |
| g6 | 5–15bb | Second pair | KQ, QJ–Q8, Q5 | 56% | 33% | 15% | 13% |
| g7 | 0–5bb | Small pairs | JJ–88, 55–22, K7, K6, J7, T7, 97, 96, 87, 86, 75, 65, 64 | 39% | 20% | 9% | 9% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AA | twopair | 95% | 95% | 98% | 98% | 50–100bb | g1 |
| 66 | twopair | 95% | 97% | 98% | 98% | 50–100bb | g1 |
| QQ | twopair | 95% | 97% | 98% | 98% | 50–100bb | g1 |
| 77 | twopair | 95% | 96% | 98% | 98% | 50–100bb | g1 |
| AQ | twopair | 93% | 95% | 97% | 97% | 50–100bb | g2 |
| A7 | twopair | 89% | 89% | 88% | 87% | 50–100bb | g2 |
| A6 | twopair | 88% | 84% | 80% | 80% | 50–100bb | g2 |
| Q6 | twopair | 85% | 80% | 75% | 76% | 50–100bb | g2 |
| Q7 | twopair | 84% | 79% | 75% | 75% | 50–100bb | g2 |
| 76 | twopair | 80% | 76% | 73% | 73% | 50–100bb | g2 |
| AK | tpgk | 84% | 82% | 77% | 78% | 50–100bb | g3 |
| AJ | tpmk | 83% | 80% | 75% | 72% | 50–100bb | g3 |
| AT | tpmk | 81% | 74% | 67% | 65% | 50–100bb | g3 |
| A4 | tpmk | 66% | 47% | 28% | 21% | 0–5bb | g4 |
| A3 | tpmk | 66% | 45% | 27% | 18% | 0–5bb | g4 |
| A2 | tpmk | 64% | 45% | 26% | 18% | 0–5bb | g4 |
| A8 | tpmk | 73% | 60% | 46% | 40% | 5–15bb | g4 |
| A9 | tpmk | 77% | 68% | 56% | 53% | 50–100bb | g4 |
| A5 | tpmk | 68% | 50% | 32% | 25% | 5–15bb | g4 |
| KK | pp1 | 51% | 29% | 11% | 5% | 0–5bb | g5 |
| Q8 | mp | 58% | 35% | 18% | 18% | 0–5bb | g6 |
| Q5 | mp | 57% | 34% | 17% | 17% | 0–5bb | g6 |
| KQ | mp | 56% | 33% | 16% | 13% | 0–5bb | g6 |
| QJ | mp | 56% | 33% | 15% | 12% | 0–5bb | g6 |
| Q9 | mp | 55% | 32% | 13% | 13% | 0–5bb | g6 |
| QT | mp | 55% | 33% | 13% | 12% | 0–5bb | g6 |
| JJ | pp2 | 50% | 23% | 4% | 5% | 0–5bb | g7 |
| TT | pp2 | 50% | 24% | 5% | 4% | Pot is too big | g7 |
| J7 | bp | 49% | 29% | 16% | 16% | Pot is too big | g7 |
| 99 | pp2 | 49% | 25% | 5% | 5% | Pot is too big | g7 |
| 97 | bp | 48% | 28% | 16% | 16% | Pot is too big | g7 |
| T7 | bp | 48% | 30% | 15% | 15% | Pot is too big | g7 |
| 87 | bp | 47% | 27% | 17% | 15% | Pot is too big | g7 |
| K7 | bp | 47% | 27% | 11% | 12% | Pot is too big | g7 |
| 88 | pp2 | 47% | 23% | 5% | 5% | Pot is too big | g7 |
| 75 | bp | 45% | 25% | 14% | 16% | Pot is too big | g7 |
| 96 | bp | 41% | 24% | 16% | 16% | Pot is too big | g7 |
| 86 | bp | 40% | 22% | 16% | 16% | Pot is too big | g7 |
| 65 | bp | 39% | 22% | 16% | 15% | Pot is too big | g7 |
| K6 | bp | 39% | 20% | 12% | 12% | Pot is too big | g7 |
| 64 | bp | 38% | 21% | 17% | 16% | Pot is too big | g7 |
| 55 | pp3 | 25% | 9% | 4% | 4% | Pot is too big | g7 |
| 44 | pp3 | 25% | 9% | 4% | 4% | Pot is too big | g7 |
| 33 | pp3 | 21% | 9% | 4% | 4% | Pot is too big | g7 |
| 22 | pp3 | 19% | 10% | 5% | 5% | Pot is too big | g7 |
