# A76-Qc turn (A♥ 7♥ 6♣ Q♣): equity groups

Generated 2026-11-13 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | AA, QQ, 77, 66 | 95% | 96% | 98% | 98% |
| g2 | 50–100bb | Two pair | AQ, A7, A6, Q7, Q6, 76 | 89% | 87% | 86% | 85% |
| g3 | 25–50bb | Top pair, good kicker | AK, AJ, AT | 83% | 80% | 74% | 71% |
| g4 | 15–25bb | Top pair, weak kicker | A9, A8, A5–A2 | 69% | 52% | 36% | 29% |
| g5 | 5–15bb | Big pocket pairs | KK | 52% | 28% | 11% | 6% |
| g6 | 5–15bb | Second pair | KQ, QJ–Q8, Q5 | 56% | 33% | 15% | 13% |
| g7 | 0–5bb | Small pairs | JJ–88, 55–22, K7, K6, J7, T7, 97, 96, 87, 86, 75, 65, 64 | 39% | 20% | 9% | 9% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AA | twopair | 95% | 96% | 98% | 98% | 50–100bb | g1 |
| QQ | twopair | 96% | 96% | 98% | 98% | 50–100bb | g1 |
| 77 | twopair | 95% | 97% | 98% | 98% | 50–100bb | g1 |
| 66 | twopair | 95% | 96% | 98% | 98% | 50–100bb | g1 |
| AQ | twopair | 93% | 94% | 97% | 97% | 50–100bb | g2 |
| A7 | twopair | 90% | 89% | 88% | 87% | 50–100bb | g2 |
| A6 | twopair | 87% | 83% | 80% | 79% | 50–100bb | g2 |
| Q7 | twopair | 83% | 80% | 75% | 75% | 50–100bb | g2 |
| Q6 | twopair | 85% | 80% | 75% | 75% | 50–100bb | g2 |
| 76 | twopair | 81% | 76% | 74% | 73% | 50–100bb | g2 |
| AK | tpgk | 85% | 82% | 78% | 77% | 50–100bb | g3 |
| AJ | tpmk | 83% | 80% | 75% | 73% | 50–100bb | g3 |
| AT | tpmk | 80% | 76% | 67% | 64% | 50–100bb | g3 |
| A5 | tpmk | 68% | 50% | 33% | 25% | 0–5bb | g4 |
| A4 | tpmk | 66% | 46% | 28% | 21% | 0–5bb | g4 |
| A2 | tpmk | 65% | 45% | 26% | 18% | 0–5bb | g4 |
| A3 | tpmk | 65% | 46% | 27% | 19% | 0–5bb | g4 |
| A8 | tpmk | 73% | 59% | 46% | 41% | 5–15bb | g4 |
| A9 | tpmk | 76% | 67% | 56% | 53% | 50–100bb | g4 |
| KK | pp1 | 52% | 28% | 11% | 6% | 0–5bb | g5 |
| Q8 | mp | 59% | 35% | 18% | 17% | 0–5bb | g6 |
| Q5 | mp | 57% | 34% | 17% | 17% | 0–5bb | g6 |
| KQ | mp | 56% | 33% | 16% | 13% | 0–5bb | g6 |
| QT | mp | 55% | 33% | 14% | 11% | 0–5bb | g6 |
| Q9 | mp | 55% | 31% | 14% | 12% | 0–5bb | g6 |
| QJ | mp | 55% | 33% | 15% | 12% | 0–5bb | g6 |
| JJ | pp2 | 52% | 25% | 4% | 5% | 0–5bb | g7 |
| TT | pp2 | 50% | 25% | 4% | 5% | Pot is too big | g7 |
| J7 | bp | 49% | 31% | 17% | 16% | Pot is too big | g7 |
| T7 | bp | 49% | 29% | 15% | 16% | Pot is too big | g7 |
| 99 | pp2 | 48% | 24% | 5% | 4% | Pot is too big | g7 |
| 97 | bp | 48% | 28% | 15% | 16% | Pot is too big | g7 |
| 87 | bp | 48% | 27% | 16% | 15% | Pot is too big | g7 |
| K7 | bp | 47% | 27% | 12% | 12% | Pot is too big | g7 |
| 88 | pp2 | 46% | 23% | 5% | 4% | Pot is too big | g7 |
| 75 | bp | 44% | 27% | 16% | 15% | Pot is too big | g7 |
| 96 | bp | 41% | 22% | 16% | 16% | Pot is too big | g7 |
| 86 | bp | 40% | 23% | 16% | 16% | Pot is too big | g7 |
| K6 | bp | 39% | 21% | 12% | 12% | Pot is too big | g7 |
| 65 | bp | 38% | 22% | 16% | 15% | Pot is too big | g7 |
| 64 | bp | 36% | 22% | 16% | 16% | Pot is too big | g7 |
| 55 | pp3 | 25% | 10% | 5% | 4% | Pot is too big | g7 |
| 44 | pp3 | 24% | 9% | 5% | 4% | Pot is too big | g7 |
| 33 | pp3 | 21% | 9% | 5% | 5% | Pot is too big | g7 |
| 22 | pp3 | 19% | 9% | 4% | 4% | Pot is too big | g7 |
