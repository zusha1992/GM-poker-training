# A76-Qc turn (A♥ 7♥ 6♣ Q♣): equity groups

Generated 2026-11-13 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | AA, QQ, 77, 66 | 95% | 96% | 98% | 98% |
| g2 | 50–100bb | Two pair | AQ, A7, A6, Q7, Q6, 76 | 89% | 87% | 85% | 85% |
| g3 | 25–50bb | Top pair, top kicker | AK | 85% | 82% | 78% | 77% |
| g4 | 15–25bb | Top pair, good kicker | AJ, AT | 81% | 78% | 70% | 69% |
| g5 | 5–15bb | Top pair, weak kicker | A9, A8, A5–A2 | 69% | 52% | 35% | 30% |
| g6 | 5–15bb | Big pocket pairs | KK | 52% | 28% | 10% | 6% |
| g7 | 5–15bb | Second pair | KQ, QJ–Q8, Q5 | 56% | 33% | 15% | 13% |
| g8 | 0–5bb | Small pairs | JJ–88, 55–22, K7, K6, J7, T7, 97, 96, 87, 86, 75, 65, 64 | 39% | 20% | 9% | 9% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| QQ | twopair | 95% | 97% | 98% | 99% | 50–100bb | g1 |
| AA | twopair | 94% | 95% | 98% | 98% | 50–100bb | g1 |
| 66 | twopair | 95% | 97% | 98% | 98% | 50–100bb | g1 |
| 77 | twopair | 95% | 96% | 98% | 98% | 50–100bb | g1 |
| AQ | twopair | 93% | 94% | 97% | 97% | 50–100bb | g2 |
| A7 | twopair | 90% | 89% | 87% | 87% | 50–100bb | g2 |
| A6 | twopair | 86% | 84% | 80% | 80% | 50–100bb | g2 |
| Q7 | twopair | 84% | 80% | 75% | 75% | 50–100bb | g2 |
| Q6 | twopair | 84% | 80% | 75% | 75% | 50–100bb | g2 |
| 76 | twopair | 81% | 77% | 73% | 73% | 50–100bb | g2 |
| AK | tpgk | 84% | 82% | 78% | 77% | 50–100bb | g3 |
| AJ | tpmk | 83% | 81% | 74% | 73% | 50–100bb | g4 |
| AT | tpmk | 79% | 75% | 67% | 65% | 50–100bb | g4 |
| A5 | tpmk | 67% | 50% | 31% | 25% | 0–5bb | g5 |
| A4 | tpmk | 66% | 48% | 27% | 22% | 0–5bb | g5 |
| A2 | tpmk | 66% | 44% | 25% | 18% | 0–5bb | g5 |
| A3 | tpmk | 65% | 44% | 26% | 19% | 0–5bb | g5 |
| A8 | tpmk | 72% | 60% | 46% | 41% | 15–25bb | g5 |
| A9 | tpmk | 76% | 67% | 58% | 52% | 50–100bb | g5 |
| KK | pp1 | 52% | 28% | 10% | 6% | 0–5bb | g6 |
| Q8 | mp | 58% | 35% | 19% | 17% | 0–5bb | g7 |
| Q5 | mp | 57% | 35% | 17% | 16% | 0–5bb | g7 |
| QT | mp | 56% | 32% | 14% | 12% | 0–5bb | g7 |
| KQ | mp | 56% | 33% | 15% | 13% | 0–5bb | g7 |
| QJ | mp | 55% | 32% | 14% | 12% | 0–5bb | g7 |
| Q9 | mp | 55% | 33% | 14% | 12% | 0–5bb | g7 |
| JJ | pp2 | 50% | 24% | 4% | 5% | Pot is too big | g8 |
| J7 | bp | 49% | 29% | 16% | 16% | Pot is too big | g8 |
| TT | pp2 | 49% | 24% | 5% | 5% | Pot is too big | g8 |
| 99 | pp2 | 49% | 23% | 5% | 5% | Pot is too big | g8 |
| 97 | bp | 49% | 28% | 16% | 15% | Pot is too big | g8 |
| K7 | bp | 48% | 27% | 12% | 11% | Pot is too big | g8 |
| T7 | bp | 47% | 29% | 16% | 15% | Pot is too big | g8 |
| 87 | bp | 47% | 27% | 16% | 15% | Pot is too big | g8 |
| 88 | pp2 | 46% | 24% | 4% | 5% | Pot is too big | g8 |
| 75 | bp | 45% | 26% | 16% | 15% | Pot is too big | g8 |
| 96 | bp | 41% | 23% | 16% | 16% | Pot is too big | g8 |
| 86 | bp | 40% | 22% | 16% | 16% | Pot is too big | g8 |
| K6 | bp | 40% | 19% | 12% | 13% | Pot is too big | g8 |
| 65 | bp | 37% | 22% | 16% | 16% | Pot is too big | g8 |
| 64 | bp | 37% | 22% | 16% | 17% | Pot is too big | g8 |
| 55 | pp3 | 26% | 9% | 5% | 4% | Pot is too big | g8 |
| 44 | pp3 | 24% | 9% | 4% | 4% | Pot is too big | g8 |
| 33 | pp3 | 21% | 9% | 4% | 5% | Pot is too big | g8 |
| 22 | pp3 | 19% | 9% | 5% | 4% | Pot is too big | g8 |
