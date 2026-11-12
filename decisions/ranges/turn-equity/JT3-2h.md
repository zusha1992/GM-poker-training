# JT3-2h turn (J♠ T♠ 3♣ 2♥): equity groups

Generated 2026-11-12 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | JJ, TT, 33, 22 | 96% | 97% | 100% | 100% |
| g2 | 50–100bb | Two pair | JT | 92% | 93% | 92% | 89% |
| g3 | 50–100bb | Overpairs | AA–QQ | 87% | 86% | 85% | 80% |
| g4 | 25–50bb | Top pair, good kicker | AJ, KJ, QJ | 85% | 81% | 80% | 65% |
| g5 | 15–25bb | Top pair, weak kicker | J9–J7 | 79% | 66% | 65% | 30% |
| g6 | 5–15bb | Second pair | AT, KT, QT, T9–T7 | 65% | 39% | 30% | 10% |
| g7 | 0–5bb | Small pairs | 99–44, A3, A2, K3, K2, 43 | 40% | 21% | 9% | 9% |
| g8 | Pot is too big | Ace-high | A9–A6 | 26% | 14% | 5% | 6% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| 22 | twopair | 95% | 97% | 100% | 100% | 50–100bb | g1 |
| 33 | twopair | 96% | 98% | 100% | 100% | 50–100bb | g1 |
| JJ | twopair | 95% | 96% | 100% | 100% | 50–100bb | g1 |
| TT | twopair | 95% | 97% | 100% | 100% | 50–100bb | g1 |
| JT | twopair | 92% | 93% | 92% | 89% | 50–100bb | g2 |
| QQ | op | 87% | 86% | 85% | 80% | 50–100bb | g3 |
| KK | op | 87% | 86% | 85% | 80% | 50–100bb | g3 |
| AA | op | 87% | 86% | 85% | 80% | 50–100bb | g3 |
| AJ | tpgk | 87% | 86% | 85% | 77% | 50–100bb | g4 |
| KJ | tpgk | 85% | 82% | 82% | 67% | 50–100bb | g4 |
| QJ | tpmk | 82% | 75% | 74% | 51% | 50–100bb | g4 |
| J9 | tpmk | 80% | 68% | 67% | 35% | 25–50bb | g5 |
| J8 | tpmk | 78% | 64% | 63% | 25% | 25–50bb | g5 |
| J7 | tpmk | 77% | 62% | 60% | 21% | 25–50bb | g5 |
| AT | mp | 69% | 45% | 40% | 10% | 0–5bb | g6 |
| KT | mp | 66% | 41% | 33% | 11% | 0–5bb | g6 |
| QT | mp | 64% | 37% | 28% | 9% | 0–5bb | g6 |
| T9 | mp | 60% | 35% | 20% | 10% | 0–5bb | g6 |
| T8 | mp | 59% | 32% | 16% | 10% | 0–5bb | g6 |
| T7 | mp | 57% | 30% | 13% | 10% | 0–5bb | g6 |
| 99 | spp | 50% | 19% | 4% | 4% | Pot is too big | g7 |
| 88 | spp | 47% | 19% | 5% | 5% | Pot is too big | g7 |
| 77 | spp | 46% | 20% | 4% | 4% | Pot is too big | g7 |
| 66 | spp | 42% | 18% | 4% | 5% | Pot is too big | g7 |
| K3 | bp | 41% | 27% | 17% | 16% | Pot is too big | g7 |
| 43 | bp | 40% | 26% | 17% | 16% | Pot is too big | g7 |
| A3 | bp | 39% | 24% | 12% | 12% | Pot is too big | g7 |
| K2 | bp | 38% | 24% | 17% | 16% | Pot is too big | g7 |
| 55 | spp | 38% | 20% | 5% | 4% | Pot is too big | g7 |
| 44 | spp | 37% | 20% | 5% | 5% | Pot is too big | g7 |
| A2 | bp | 34% | 20% | 12% | 13% | Pot is too big | g7 |
| A9 | khnd | 29% | 15% | 5% | 6% | Pot is too big | g8 |
| A8 | khnd | 26% | 14% | 6% | 6% | Pot is too big | g8 |
| A7 | khnd | 25% | 13% | 5% | 6% | Pot is too big | g8 |
| A6 | khnd | 23% | 14% | 6% | 5% | Pot is too big | g8 |
