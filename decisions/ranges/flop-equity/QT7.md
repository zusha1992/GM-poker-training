# QT7 flop (Q♥ T♦ 7♠): equity groups

Generated 2026-11-10 by scripts/analysis/flop-equity-groups.ts (6000 samples per hand and level).
BTN opens, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB's whole range · L1 = BB after calling a flop bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|
| g1 | 50–100bb | QQ, TT, 77 | 93% | 93% | 95% | 94% |
| g2 | 50–100bb | AA, KK, AQ, KQ, QJ, QT, Q7, T7 | 83% | 82% | 74% | 66% |
| g3 | 25–50bb | Q9, Q8, Q6, Q5 | 77% | 75% | 58% | 35% |
| g4 | 15–25bb | JJ, AT, KT, JT, T9 | 72% | 66% | 35% | 18% |
| g5 | 5–15bb | 99, T8 | 65% | 54% | 15% | 14% |
| g6 | 0–5bb | 88, A7, K7, J7, 97, 87, 76, 75 | 61% | 48% | 19% | 19% |
| g7 | Pot is too big | 66–22, A9, A8, A6–A2 | 39% | 24% | 11% | 11% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| QQ | twopair | 93% | 93% | 96% | 96% | 50–100bb | g1 |
| TT | twopair | 93% | 92% | 95% | 94% | 50–100bb | g1 |
| 77 | twopair | 92% | 92% | 93% | 92% | 50–100bb | g1 |
| QT | twopair | 87% | 86% | 85% | 80% | 50–100bb | g2 |
| AQ | tpgk | 82% | 81% | 74% | 67% | 50–100bb | g2 |
| AA | op | 83% | 81% | 72% | 66% | 50–100bb | g2 |
| KK | op | 83% | 83% | 72% | 66% | 50–100bb | g2 |
| Q7 | twopair | 86% | 84% | 75% | 65% | 50–100bb | g2 |
| KQ | tpgk | 82% | 82% | 73% | 64% | 50–100bb | g2 |
| T7 | twopair | 83% | 80% | 64% | 62% | 50–100bb | g2 |
| QJ | tpmk | 81% | 79% | 70% | 56% | 50–100bb | g2 |
| Q9 | tpmk | 78% | 76% | 62% | 42% | 25–50bb | g3 |
| Q8 | tpmk | 77% | 75% | 57% | 35% | 25–50bb | g3 |
| Q6 | tpmk | 76% | 74% | 56% | 27% | 25–50bb | g3 |
| Q5 | tpmk | 76% | 73% | 52% | 24% | 25–50bb | g3 |
| JJ | pp1 | 74% | 69% | 42% | 12% | 15–25bb | g4 |
| AT | mp | 73% | 68% | 40% | 20% | 15–25bb | g4 |
| KT | mp | 72% | 68% | 36% | 19% | 15–25bb | g4 |
| JT | mp | 72% | 65% | 31% | 18% | 15–25bb | g4 |
| T9 | mp | 69% | 60% | 25% | 18% | 15–25bb | g4 |
| T8 | mp | 67% | 59% | 23% | 19% | 5–15bb | g5 |
| 99 | pp2 | 64% | 52% | 11% | 11% | 5–15bb | g5 |
| J7 | bp | 64% | 49% | 22% | 20% | 0–5bb | g6 |
| A7 | bp | 63% | 50% | 21% | 20% | 0–5bb | g6 |
| K7 | bp | 62% | 48% | 21% | 21% | 0–5bb | g6 |
| 97 | bp | 61% | 48% | 22% | 20% | 0–5bb | g6 |
| 87 | bp | 61% | 47% | 20% | 21% | 0–5bb | g6 |
| 88 | spp | 59% | 47% | 10% | 11% | 0–5bb | g6 |
| 76 | bp | 58% | 45% | 19% | 18% | 0–5bb | g6 |
| 75 | bp | 56% | 43% | 19% | 18% | 0–5bb | g6 |
| 66 | spp | 49% | 33% | 9% | 9% | Pot is too big | g7 |
| A9 | khnd | 46% | 29% | 12% | 14% | Pot is too big | g7 |
| 55 | spp | 45% | 30% | 8% | 8% | Pot is too big | g7 |
| A8 | khnd | 42% | 27% | 14% | 14% | Pot is too big | g7 |
| 44 | spp | 42% | 25% | 9% | 8% | Pot is too big | g7 |
| 33 | spp | 40% | 24% | 9% | 7% | Pot is too big | g7 |
| 22 | spp | 38% | 21% | 8% | 8% | Pot is too big | g7 |
| A6 | khnd | 36% | 23% | 11% | 11% | Pot is too big | g7 |
| A5 | khnd | 35% | 22% | 11% | 11% | Pot is too big | g7 |
| A3 | khnd | 35% | 20% | 10% | 10% | Pot is too big | g7 |
| A4 | khnd | 35% | 21% | 10% | 10% | Pot is too big | g7 |
| A2 | khnd | 34% | 21% | 10% | 11% | Pot is too big | g7 |
