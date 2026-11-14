# JT3-6c turn (J♠ T♠ 3♣ 6♣): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | JJ, TT, 66, 33 | 94% | 95% | 97% | 96% |
| g2 | 50–100bb | Two pair | JT | 90% | 91% | 89% | 86% |
| g3 | 25–50bb | Overpairs & top pair, top kicker | AA–QQ, AJ | 85% | 85% | 80% | 72% |
| g4 | 15–25bb | Top pair, good kicker | KJ, QJ | 82% | 82% | 73% | 54% |
| g5 | 5–15bb | Top pair, weak kicker | J9–J7 | 76% | 74% | 62% | 30% |
| g6 | 5–15bb | Second pair | AT, KT, QT, T9–T7 | 63% | 51% | 29% | 12% |
| g7 | 0–5bb | Small pairs | 99–77, 55, 44, 22, A6, A3, K6, K3, Q6, 96, 86, 76, 65, 64, 43 | 42% | 27% | 10% | 10% |
| g8 | Pot is too big | Ace-high | A9–A7, A5, A4, A2 | 24% | 16% | 6% | 5% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| JJ | twopair | 94% | 95% | 98% | 97% | 50–100bb | g1 |
| TT | twopair | 94% | 94% | 97% | 97% | 50–100bb | g1 |
| 66 | twopair | 95% | 95% | 98% | 97% | 50–100bb | g1 |
| 33 | twopair | 93% | 95% | 94% | 91% | 50–100bb | g1 |
| JT | twopair | 90% | 91% | 89% | 86% | 50–100bb | g2 |
| AA | op | 85% | 85% | 80% | 73% | 50–100bb | g3 |
| QQ | op | 85% | 85% | 79% | 73% | 50–100bb | g3 |
| KK | op | 85% | 85% | 79% | 71% | 50–100bb | g3 |
| AJ | tpgk | 84% | 85% | 80% | 70% | 50–100bb | g3 |
| QJ | tpmk | 81% | 80% | 70% | 47% | 25–50bb | g4 |
| KJ | tpgk | 83% | 83% | 76% | 61% | 50–100bb | g4 |
| J9 | tpmk | 76% | 74% | 63% | 33% | 25–50bb | g5 |
| J8 | tpmk | 76% | 73% | 61% | 28% | 25–50bb | g5 |
| J7 | tpmk | 75% | 72% | 60% | 26% | 25–50bb | g5 |
| QT | mp | 63% | 50% | 26% | 12% | 0–5bb | g6 |
| T7 | mp | 59% | 42% | 18% | 15% | 0–5bb | g6 |
| T8 | mp | 59% | 43% | 19% | 16% | 0–5bb | g6 |
| T9 | mp | 58% | 43% | 19% | 11% | 0–5bb | g6 |
| AT | mp | 67% | 58% | 38% | 12% | 5–15bb | g6 |
| KT | mp | 64% | 54% | 33% | 11% | 5–15bb | g6 |
| 86 | bp | 50% | 34% | 17% | 17% | 0–5bb | g7 |
| 96 | bp | 50% | 33% | 16% | 16% | Pot is too big | g7 |
| Q6 | bp | 50% | 33% | 18% | 17% | Pot is too big | g7 |
| 76 | bp | 49% | 34% | 17% | 17% | Pot is too big | g7 |
| 65 | bp | 48% | 33% | 18% | 17% | Pot is too big | g7 |
| 99 | spp | 48% | 28% | 4% | 5% | Pot is too big | g7 |
| 64 | bp | 48% | 33% | 17% | 17% | Pot is too big | g7 |
| 88 | spp | 47% | 28% | 5% | 5% | Pot is too big | g7 |
| A6 | bp | 46% | 30% | 12% | 13% | Pot is too big | g7 |
| K6 | bp | 46% | 29% | 12% | 11% | Pot is too big | g7 |
| 77 | spp | 43% | 26% | 5% | 5% | Pot is too big | g7 |
| K3 | bp | 42% | 31% | 17% | 16% | Pot is too big | g7 |
| 43 | bp | 39% | 27% | 17% | 16% | Pot is too big | g7 |
| 55 | spp | 39% | 22% | 4% | 4% | Pot is too big | g7 |
| A3 | bp | 36% | 27% | 11% | 12% | Pot is too big | g7 |
| 44 | spp | 35% | 22% | 4% | 4% | Pot is too big | g7 |
| 22 | spp | 28% | 16% | 4% | 4% | Pot is too big | g7 |
| A9 | khnd | 28% | 17% | 6% | 5% | Pot is too big | g8 |
| A8 | khnd | 25% | 17% | 5% | 5% | Pot is too big | g8 |
| A7 | khnd | 25% | 16% | 5% | 5% | Pot is too big | g8 |
| A5 | khnd | 23% | 16% | 6% | 5% | Pot is too big | g8 |
| A4 | khnd | 22% | 16% | 6% | 6% | Pot is too big | g8 |
| A2 | khnd | 20% | 14% | 6% | 5% | Pot is too big | g8 |
