# QT7 flop (Q♥ T♦ 7♠): equity groups

Generated 2026-11-11 by scripts/analysis/flop-equity-groups.ts (6000 samples per hand and level).
BTN opens, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB's whole range · L1 = BB after calling a flop bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | QQ, TT, 77 | 93% | 92% | 95% | 94% |
| g2 | 50–100bb | Two pair | QT, Q7, T7 | 87% | 85% | 82% | 77% |
| g3 | 50–100bb | Overpairs | AA, KK | 82% | 81% | 72% | 66% |
| g4 | 25–50bb | Top pair, top kicker | AQ, KQ | 83% | 82% | 74% | 65% |
| g5 | 25–50bb | Top pair, good kicker | QJ, Q9, Q8 | 80% | 79% | 65% | 48% |
| g6 | 15–25bb | Top pair, weak kicker | Q6, Q5 | 76% | 73% | 53% | 26% |
| g7 | 5–15bb | Big pocket pairs | JJ | 74% | 70% | 42% | 12% |
| g8 | 5–15bb | Second pair | AT, KT, JT, T9, T8 | 72% | 65% | 33% | 19% |
| g9 | 0–5bb | Small pairs | 99, 88, 66–22, A7, K7, J7, 97, 87, 76, 75 | 54% | 40% | 14% | 14% |
| g10 | 0–5bb | Ace-high | A9, A8, A6–A2 | 39% | 24% | 12% | 12% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| QQ | twopair | 93% | 93% | 96% | 96% | 50–100bb | g1 |
| TT | twopair | 93% | 92% | 95% | 94% | 50–100bb | g1 |
| 77 | twopair | 92% | 92% | 93% | 92% | 50–100bb | g1 |
| QT | twopair | 88% | 86% | 86% | 81% | 50–100bb | g2 |
| Q7 | twopair | 86% | 83% | 75% | 64% | 50–100bb | g2 |
| T7 | twopair | 83% | 80% | 66% | 62% | 50–100bb | g2 |
| KK | op | 82% | 82% | 72% | 66% | 50–100bb | g3 |
| AA | op | 82% | 81% | 72% | 66% | 50–100bb | g3 |
| AQ | tpgk | 83% | 82% | 74% | 67% | 50–100bb | g4 |
| KQ | tpgk | 82% | 82% | 73% | 63% | 50–100bb | g4 |
| Q9 | tpmk | 78% | 77% | 62% | 42% | 25–50bb | g5 |
| Q8 | tpmk | 79% | 75% | 58% | 35% | 25–50bb | g5 |
| QJ | tpmk | 81% | 80% | 69% | 55% | 50–100bb | g5 |
| Q6 | tpmk | 76% | 73% | 54% | 28% | 25–50bb | g6 |
| Q5 | tpmk | 76% | 73% | 52% | 24% | 25–50bb | g6 |
| JJ | pp1 | 74% | 70% | 42% | 12% | 15–25bb | g7 |
| AT | mp | 74% | 68% | 39% | 19% | 15–25bb | g8 |
| KT | mp | 72% | 66% | 36% | 19% | 15–25bb | g8 |
| JT | mp | 72% | 65% | 30% | 18% | 15–25bb | g8 |
| T9 | mp | 70% | 61% | 25% | 18% | 15–25bb | g8 |
| T8 | mp | 68% | 60% | 23% | 20% | 5–15bb | g8 |
| 97 | bp | 63% | 49% | 20% | 20% | 0–5bb | g9 |
| K7 | bp | 62% | 47% | 21% | 21% | 0–5bb | g9 |
| J7 | bp | 62% | 50% | 22% | 20% | 0–5bb | g9 |
| A7 | bp | 62% | 49% | 21% | 21% | 0–5bb | g9 |
| 87 | bp | 61% | 47% | 21% | 20% | 0–5bb | g9 |
| 88 | spp | 59% | 49% | 11% | 10% | 0–5bb | g9 |
| 76 | bp | 58% | 44% | 20% | 19% | 0–5bb | g9 |
| 75 | bp | 56% | 43% | 19% | 19% | 0–5bb | g9 |
| 99 | pp2 | 63% | 52% | 11% | 12% | 5–15bb | g9 |
| 66 | spp | 49% | 33% | 9% | 9% | Pot is too big | g9 |
| 55 | spp | 46% | 31% | 8% | 8% | Pot is too big | g9 |
| 44 | spp | 41% | 26% | 8% | 8% | Pot is too big | g9 |
| 33 | spp | 40% | 23% | 8% | 8% | Pot is too big | g9 |
| 22 | spp | 39% | 21% | 8% | 8% | Pot is too big | g9 |
| A9 | khnd | 46% | 29% | 14% | 14% | Pot is too big | g10 |
| A8 | khnd | 42% | 27% | 14% | 15% | Pot is too big | g10 |
| A6 | khnd | 39% | 24% | 12% | 12% | Pot is too big | g10 |
| A5 | khnd | 37% | 22% | 11% | 11% | Pot is too big | g10 |
| A3 | khnd | 36% | 20% | 12% | 11% | Pot is too big | g10 |
| A4 | khnd | 36% | 22% | 12% | 11% | Pot is too big | g10 |
| A2 | khnd | 36% | 22% | 11% | 12% | Pot is too big | g10 |
