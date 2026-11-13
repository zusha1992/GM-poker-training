# JT3-6c turn (J♠ T♠ 3♣ 6♣): equity groups

Generated 2026-11-13 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | JJ, TT, 66, 33 | 94% | 95% | 97% | 96% |
| g2 | 50–100bb | Two pair | JT | 90% | 90% | 89% | 86% |
| g3 | 25–50bb | Overpairs | AA–QQ | 84% | 85% | 80% | 73% |
| g4 | 25–50bb | Top pair, good kicker | AJ, KJ, QJ | 82% | 83% | 75% | 59% |
| g5 | 15–25bb | Top pair, weak kicker | J9–J7 | 76% | 73% | 63% | 30% |
| g6 | 5–15bb | Second pair | AT, KT, QT, T9–T7 | 63% | 51% | 29% | 12% |
| g7 | 0–5bb | Small pairs | 99–77, 55, 44, 22, A6, A3, K6, K3, Q6, 96, 86, 76, 65, 64, 43 | 43% | 28% | 10% | 10% |
| g8 | Pot is too big | Ace-high | A9–A7, A5, A4, A2 | 24% | 16% | 5% | 5% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| 66 | twopair | 95% | 95% | 98% | 98% | 50–100bb | g1 |
| TT | twopair | 94% | 94% | 98% | 98% | 50–100bb | g1 |
| JJ | twopair | 95% | 94% | 98% | 97% | 50–100bb | g1 |
| 33 | twopair | 93% | 95% | 95% | 90% | 50–100bb | g1 |
| JT | twopair | 90% | 90% | 89% | 86% | 50–100bb | g2 |
| KK | op | 85% | 85% | 79% | 73% | 50–100bb | g3 |
| AA | op | 85% | 85% | 80% | 73% | 50–100bb | g3 |
| QQ | op | 84% | 84% | 80% | 73% | 50–100bb | g3 |
| QJ | tpmk | 80% | 81% | 70% | 47% | 25–50bb | g4 |
| AJ | tpgk | 84% | 85% | 79% | 69% | 50–100bb | g4 |
| KJ | tpgk | 83% | 84% | 74% | 60% | 50–100bb | g4 |
| J9 | tpmk | 76% | 74% | 64% | 33% | 25–50bb | g5 |
| J8 | tpmk | 75% | 73% | 63% | 29% | 25–50bb | g5 |
| J7 | tpmk | 75% | 71% | 60% | 25% | 25–50bb | g5 |
| QT | mp | 63% | 49% | 26% | 12% | 0–5bb | g6 |
| T8 | mp | 58% | 45% | 20% | 16% | 0–5bb | g6 |
| T9 | mp | 58% | 44% | 19% | 11% | 0–5bb | g6 |
| T7 | mp | 58% | 42% | 18% | 16% | 0–5bb | g6 |
| AT | mp | 67% | 56% | 38% | 12% | 5–15bb | g6 |
| KT | mp | 63% | 54% | 33% | 11% | 5–15bb | g6 |
| Q6 | bp | 50% | 33% | 16% | 17% | Pot is too big | g7 |
| 86 | bp | 49% | 34% | 18% | 18% | Pot is too big | g7 |
| 96 | bp | 49% | 33% | 16% | 17% | Pot is too big | g7 |
| 76 | bp | 49% | 33% | 17% | 16% | Pot is too big | g7 |
| 65 | bp | 48% | 34% | 17% | 17% | Pot is too big | g7 |
| 99 | spp | 48% | 30% | 5% | 5% | Pot is too big | g7 |
| 64 | bp | 47% | 33% | 18% | 17% | Pot is too big | g7 |
| K6 | bp | 47% | 30% | 13% | 12% | Pot is too big | g7 |
| A6 | bp | 46% | 29% | 11% | 12% | Pot is too big | g7 |
| 88 | spp | 45% | 29% | 5% | 5% | Pot is too big | g7 |
| 77 | spp | 43% | 26% | 4% | 5% | Pot is too big | g7 |
| K3 | bp | 42% | 31% | 17% | 16% | Pot is too big | g7 |
| 43 | bp | 40% | 27% | 17% | 16% | Pot is too big | g7 |
| 55 | spp | 39% | 22% | 4% | 4% | Pot is too big | g7 |
| A3 | bp | 38% | 26% | 12% | 11% | Pot is too big | g7 |
| 44 | spp | 35% | 22% | 4% | 4% | Pot is too big | g7 |
| 22 | spp | 29% | 15% | 4% | 4% | Pot is too big | g7 |
| A9 | khnd | 28% | 17% | 5% | 5% | Pot is too big | g8 |
| A8 | khnd | 26% | 17% | 5% | 5% | Pot is too big | g8 |
| A7 | khnd | 25% | 16% | 5% | 5% | Pot is too big | g8 |
| A5 | khnd | 23% | 16% | 5% | 5% | Pot is too big | g8 |
| A4 | khnd | 22% | 16% | 5% | 5% | Pot is too big | g8 |
| A2 | khnd | 20% | 14% | 5% | 5% | Pot is too big | g8 |
