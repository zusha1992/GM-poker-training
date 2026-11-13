# A76-Qc turn (A♥ 7♥ 6♣ Q♣): equity groups

Generated 2026-11-13 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | AA, QQ, 77, 66 | 95% | 96% | 98% | 98% |
| g2 | 50–100bb | Two pair | AQ, A7, A6, Q7, Q6, 76 | 89% | 87% | 85% | 85% |
| g3 | 25–50bb | Top pair, top kicker | AK | 84% | 82% | 78% | 76% |
| g4 | 15–25bb | Top pair, good kicker | AJ, AT | 82% | 78% | 71% | 69% |
| g5 | 5–15bb | Top pair, weak kicker | A9, A8, A5–A2 | 68% | 52% | 36% | 30% |
| g6 | 5–15bb | Big pocket pairs | KK | 52% | 28% | 11% | 6% |
| g7 | 5–15bb | Second pair | KQ, QJ–Q8, Q5 | 56% | 33% | 15% | 13% |
| g8 | 0–5bb | Small pairs | JJ–88, 55–22, K7, K6, J7, T7, 97, 96, 87, 86, 75, 65, 64 | 39% | 20% | 9% | 9% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| QQ | twopair | 95% | 97% | 98% | 98% | 50–100bb | g1 |
| AA | twopair | 95% | 96% | 98% | 98% | 50–100bb | g1 |
| 66 | twopair | 96% | 97% | 98% | 98% | 50–100bb | g1 |
| 77 | twopair | 95% | 96% | 97% | 98% | 50–100bb | g1 |
| AQ | twopair | 93% | 94% | 97% | 97% | 50–100bb | g2 |
| A7 | twopair | 90% | 89% | 88% | 88% | 50–100bb | g2 |
| A6 | twopair | 88% | 84% | 80% | 80% | 50–100bb | g2 |
| Q7 | twopair | 83% | 80% | 75% | 75% | 50–100bb | g2 |
| Q6 | twopair | 85% | 80% | 75% | 74% | 50–100bb | g2 |
| 76 | twopair | 80% | 76% | 72% | 73% | 50–100bb | g2 |
| AK | tpgk | 84% | 82% | 78% | 76% | 50–100bb | g3 |
| AJ | tpmk | 83% | 81% | 74% | 73% | 50–100bb | g4 |
| AT | tpmk | 80% | 75% | 67% | 65% | 50–100bb | g4 |
| A5 | tpmk | 68% | 48% | 32% | 25% | 0–5bb | g5 |
| A4 | tpmk | 66% | 46% | 28% | 21% | 0–5bb | g5 |
| A2 | tpmk | 65% | 44% | 26% | 18% | 0–5bb | g5 |
| A3 | tpmk | 63% | 46% | 26% | 19% | 0–5bb | g5 |
| A8 | tpmk | 72% | 60% | 46% | 41% | 15–25bb | g5 |
| A9 | tpmk | 77% | 66% | 56% | 52% | 50–100bb | g5 |
| KK | pp1 | 52% | 28% | 11% | 6% | 0–5bb | g6 |
| Q5 | mp | 57% | 35% | 17% | 16% | 0–5bb | g7 |
| Q8 | mp | 57% | 35% | 17% | 17% | 0–5bb | g7 |
| QJ | mp | 56% | 32% | 15% | 12% | 0–5bb | g7 |
| KQ | mp | 56% | 34% | 16% | 12% | 0–5bb | g7 |
| Q9 | mp | 55% | 32% | 14% | 12% | 0–5bb | g7 |
| QT | mp | 54% | 32% | 13% | 12% | 0–5bb | g7 |
| JJ | pp2 | 50% | 24% | 5% | 5% | 0–5bb | g8 |
| TT | pp2 | 50% | 25% | 4% | 5% | Pot is too big | g8 |
| J7 | bp | 50% | 28% | 16% | 16% | Pot is too big | g8 |
| 87 | bp | 49% | 27% | 15% | 16% | Pot is too big | g8 |
| 97 | bp | 48% | 28% | 15% | 15% | Pot is too big | g8 |
| 99 | pp2 | 48% | 24% | 4% | 4% | Pot is too big | g8 |
| T7 | bp | 48% | 28% | 15% | 17% | Pot is too big | g8 |
| 88 | pp2 | 48% | 22% | 5% | 5% | Pot is too big | g8 |
| K7 | bp | 47% | 27% | 13% | 12% | Pot is too big | g8 |
| 75 | bp | 46% | 26% | 16% | 14% | Pot is too big | g8 |
| 96 | bp | 40% | 24% | 16% | 16% | Pot is too big | g8 |
| 86 | bp | 40% | 22% | 15% | 17% | Pot is too big | g8 |
| K6 | bp | 39% | 20% | 12% | 12% | Pot is too big | g8 |
| 65 | bp | 38% | 22% | 16% | 15% | Pot is too big | g8 |
| 64 | bp | 37% | 21% | 15% | 17% | Pot is too big | g8 |
| 55 | pp3 | 26% | 9% | 4% | 4% | Pot is too big | g8 |
| 44 | pp3 | 24% | 10% | 4% | 4% | Pot is too big | g8 |
| 33 | pp3 | 22% | 9% | 4% | 4% | Pot is too big | g8 |
| 22 | pp3 | 20% | 9% | 4% | 4% | Pot is too big | g8 |
