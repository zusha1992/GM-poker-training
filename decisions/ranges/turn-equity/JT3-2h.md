# JT3-2h turn (J♠ T♠ 3♣ 2♥): equity groups

Generated 2026-11-13 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | JJ, TT, 33, 22 | 96% | 97% | 100% | 100% |
| g2 | 50–100bb | Two pair | JT | 91% | 93% | 92% | 90% |
| g3 | 25–50bb | Overpairs | AA–QQ | 87% | 86% | 84% | 80% |
| g4 | 25–50bb | Top pair, top kicker | AJ, KJ | 85% | 84% | 83% | 74% |
| g5 | 15–25bb | Top pair, good kicker | QJ | 83% | 75% | 75% | 52% |
| g6 | 5–15bb | Top pair, weak kicker | J9–J7 | 78% | 65% | 66% | 30% |
| g7 | 5–15bb | Second pair | AT, KT, QT, T9–T7 | 65% | 40% | 30% | 10% |
| g8 | 0–5bb | Small pairs | 99–44, A3, A2, K3, K2, 43 | 40% | 21% | 9% | 9% |
| g9 | Pot is too big | Ace-high | A9–A6 | 26% | 14% | 6% | 6% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| 22 | twopair | 96% | 98% | 100% | 100% | 50–100bb | g1 |
| 33 | twopair | 96% | 98% | 100% | 100% | 50–100bb | g1 |
| TT | twopair | 95% | 97% | 100% | 100% | 50–100bb | g1 |
| JJ | twopair | 95% | 97% | 100% | 99% | 50–100bb | g1 |
| JT | twopair | 91% | 93% | 92% | 90% | 50–100bb | g2 |
| QQ | op | 87% | 87% | 84% | 80% | 50–100bb | g3 |
| KK | op | 87% | 86% | 84% | 79% | 50–100bb | g3 |
| AA | op | 87% | 86% | 85% | 79% | 50–100bb | g3 |
| AJ | tpgk | 86% | 86% | 85% | 79% | 50–100bb | g4 |
| KJ | tpgk | 85% | 82% | 81% | 69% | 50–100bb | g4 |
| QJ | tpmk | 83% | 75% | 75% | 52% | 50–100bb | g5 |
| J9 | tpmk | 80% | 66% | 68% | 35% | 25–50bb | g6 |
| J8 | tpmk | 78% | 65% | 63% | 25% | 25–50bb | g6 |
| J7 | tpmk | 75% | 62% | 62% | 22% | 25–50bb | g6 |
| AT | mp | 68% | 47% | 40% | 10% | 0–5bb | g7 |
| KT | mp | 66% | 43% | 33% | 10% | 0–5bb | g7 |
| QT | mp | 64% | 36% | 27% | 9% | 0–5bb | g7 |
| T9 | mp | 61% | 33% | 20% | 9% | 0–5bb | g7 |
| T8 | mp | 58% | 32% | 16% | 10% | 0–5bb | g7 |
| T7 | mp | 58% | 30% | 14% | 10% | 0–5bb | g7 |
| 99 | spp | 50% | 19% | 4% | 5% | 0–5bb | g8 |
| 88 | spp | 48% | 19% | 4% | 5% | Pot is too big | g8 |
| 77 | spp | 45% | 19% | 5% | 5% | Pot is too big | g8 |
| 66 | spp | 43% | 19% | 4% | 5% | Pot is too big | g8 |
| K3 | bp | 42% | 28% | 17% | 16% | Pot is too big | g8 |
| 43 | bp | 39% | 26% | 18% | 17% | Pot is too big | g8 |
| A3 | bp | 39% | 24% | 11% | 12% | Pot is too big | g8 |
| 55 | spp | 39% | 18% | 4% | 5% | Pot is too big | g8 |
| K2 | bp | 37% | 24% | 17% | 17% | Pot is too big | g8 |
| 44 | spp | 35% | 19% | 5% | 5% | Pot is too big | g8 |
| A2 | bp | 33% | 21% | 13% | 12% | Pot is too big | g8 |
| A9 | khnd | 29% | 14% | 6% | 5% | Pot is too big | g9 |
| A8 | khnd | 27% | 14% | 6% | 5% | Pot is too big | g9 |
| A7 | khnd | 25% | 14% | 6% | 5% | Pot is too big | g9 |
| A6 | khnd | 23% | 13% | 6% | 6% | Pot is too big | g9 |
