# JT3-6c turn (J♠ T♠ 3♣ 6♣): equity groups

Generated 2026-11-12 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | JJ, TT, 66, 33 | 94% | 94% | 97% | 96% |
| g2 | 50–100bb | Two pair | JT | 89% | 91% | 90% | 86% |
| g3 | 50–100bb | Overpairs | AA–QQ | 85% | 85% | 80% | 73% |
| g4 | 25–50bb | Top pair, good kicker | AJ, KJ, QJ | 83% | 83% | 75% | 59% |
| g5 | 15–25bb | Top pair, weak kicker | J9–J7 | 76% | 74% | 62% | 31% |
| g6 | 5–15bb | Second pair | AT, KT, QT, T9–T7 | 63% | 51% | 29% | 12% |
| g7 | 0–5bb | Small pairs | 99–77, 55, 44, 22, A6, A3, K6, K3, Q6, 96, 86, 76, 65, 64, 43 | 42% | 27% | 10% | 10% |
| g8 | Pot is too big | Ace-high | A9–A7, A5, A4, A2 | 24% | 16% | 5% | 5% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| TT | twopair | 95% | 94% | 98% | 97% | 50–100bb | g1 |
| 66 | twopair | 95% | 95% | 98% | 97% | 50–100bb | g1 |
| JJ | twopair | 95% | 94% | 98% | 97% | 50–100bb | g1 |
| 33 | twopair | 93% | 95% | 94% | 91% | 50–100bb | g1 |
| JT | twopair | 89% | 91% | 90% | 86% | 50–100bb | g2 |
| QQ | op | 84% | 85% | 80% | 73% | 50–100bb | g3 |
| KK | op | 84% | 85% | 80% | 73% | 50–100bb | g3 |
| AA | op | 85% | 85% | 80% | 72% | 50–100bb | g3 |
| AJ | tpgk | 84% | 85% | 80% | 69% | 50–100bb | g4 |
| QJ | tpmk | 81% | 80% | 69% | 48% | 25–50bb | g4 |
| KJ | tpgk | 82% | 83% | 75% | 60% | 50–100bb | g4 |
| J9 | tpmk | 76% | 74% | 64% | 33% | 25–50bb | g5 |
| J8 | tpmk | 76% | 73% | 62% | 29% | 25–50bb | g5 |
| J7 | tpmk | 75% | 72% | 60% | 25% | 25–50bb | g5 |
| QT | mp | 62% | 49% | 26% | 11% | 0–5bb | g6 |
| T8 | mp | 60% | 43% | 19% | 15% | 0–5bb | g6 |
| T9 | mp | 58% | 44% | 20% | 12% | 0–5bb | g6 |
| T7 | mp | 58% | 41% | 18% | 16% | 0–5bb | g6 |
| AT | mp | 67% | 58% | 38% | 11% | 5–15bb | g6 |
| KT | mp | 65% | 53% | 32% | 11% | 5–15bb | g6 |
| 86 | bp | 49% | 33% | 17% | 18% | Pot is too big | g7 |
| 76 | bp | 49% | 34% | 18% | 17% | Pot is too big | g7 |
| Q6 | bp | 49% | 32% | 17% | 18% | Pot is too big | g7 |
| 96 | bp | 48% | 33% | 17% | 16% | Pot is too big | g7 |
| 65 | bp | 48% | 32% | 17% | 17% | Pot is too big | g7 |
| 99 | spp | 48% | 29% | 4% | 5% | Pot is too big | g7 |
| 64 | bp | 48% | 32% | 17% | 17% | Pot is too big | g7 |
| K6 | bp | 47% | 30% | 12% | 11% | Pot is too big | g7 |
| A6 | bp | 46% | 31% | 12% | 12% | Pot is too big | g7 |
| 88 | spp | 45% | 27% | 5% | 5% | Pot is too big | g7 |
| 77 | spp | 43% | 27% | 5% | 5% | Pot is too big | g7 |
| K3 | bp | 40% | 30% | 17% | 16% | Pot is too big | g7 |
| 43 | bp | 39% | 28% | 17% | 16% | Pot is too big | g7 |
| A3 | bp | 38% | 27% | 12% | 11% | Pot is too big | g7 |
| 55 | spp | 38% | 21% | 5% | 4% | Pot is too big | g7 |
| 44 | spp | 36% | 22% | 4% | 4% | Pot is too big | g7 |
| 22 | spp | 27% | 16% | 5% | 4% | Pot is too big | g7 |
| A9 | khnd | 27% | 17% | 5% | 5% | Pot is too big | g8 |
| A8 | khnd | 26% | 15% | 5% | 5% | Pot is too big | g8 |
| A7 | khnd | 24% | 16% | 5% | 5% | Pot is too big | g8 |
| A5 | khnd | 23% | 16% | 5% | 5% | Pot is too big | g8 |
| A4 | khnd | 22% | 16% | 5% | 5% | Pot is too big | g8 |
| A2 | khnd | 22% | 15% | 5% | 5% | Pot is too big | g8 |
