# JT3-2h turn (J♠ T♠ 3♣ 2♥): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | JJ, TT, 33, 22 | 96% | 97% | 100% | 100% |
| g2 | 50–100bb | Two pair | JT | 92% | 93% | 93% | 89% |
| g3 | 25–50bb | Overpairs | AA–QQ | 87% | 87% | 85% | 80% |
| g4 | 25–50bb | Top pair, top kicker | AJ, KJ | 86% | 84% | 83% | 73% |
| g5 | 15–25bb | Top pair, good kicker | QJ | 83% | 75% | 74% | 53% |
| g6 | 5–15bb | Top pair, weak kicker | J9–J7 | 78% | 65% | 66% | 31% |
| g7 | 5–15bb | Second pair | AT, KT, QT, T9–T7 | 65% | 39% | 30% | 10% |
| g8 | 0–5bb | Small pairs | 99–44, A3, A2, K3, K2, 43 | 40% | 21% | 9% | 9% |
| g9 | Pot is too big | Ace-high | A9–A6 | 26% | 14% | 6% | 6% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| 22 | twopair | 95% | 98% | 100% | 100% | 50–100bb | g1 |
| TT | twopair | 96% | 97% | 100% | 100% | 50–100bb | g1 |
| 33 | twopair | 96% | 98% | 100% | 100% | 50–100bb | g1 |
| JJ | twopair | 96% | 97% | 100% | 99% | 50–100bb | g1 |
| JT | twopair | 91% | 93% | 93% | 89% | 50–100bb | g2 |
| AA | op | 87% | 86% | 85% | 80% | 50–100bb | g3 |
| QQ | op | 86% | 87% | 84% | 80% | 50–100bb | g3 |
| KK | op | 87% | 87% | 84% | 80% | 50–100bb | g3 |
| AJ | tpgk | 86% | 85% | 85% | 78% | 50–100bb | g4 |
| KJ | tpgk | 85% | 82% | 81% | 68% | 50–100bb | g4 |
| QJ | tpmk | 83% | 75% | 74% | 53% | 50–100bb | g5 |
| J9 | tpmk | 79% | 68% | 68% | 36% | 25–50bb | g6 |
| J8 | tpmk | 78% | 63% | 63% | 25% | 25–50bb | g6 |
| J7 | tpmk | 76% | 62% | 62% | 22% | 25–50bb | g6 |
| AT | mp | 69% | 45% | 41% | 11% | 0–5bb | g7 |
| KT | mp | 66% | 42% | 34% | 9% | 0–5bb | g7 |
| QT | mp | 64% | 36% | 27% | 10% | 0–5bb | g7 |
| T9 | mp | 60% | 34% | 21% | 9% | 0–5bb | g7 |
| T8 | mp | 59% | 32% | 16% | 10% | 0–5bb | g7 |
| T7 | mp | 56% | 29% | 13% | 11% | 0–5bb | g7 |
| 99 | spp | 50% | 19% | 4% | 4% | Pot is too big | g8 |
| 88 | spp | 49% | 18% | 5% | 5% | Pot is too big | g8 |
| 77 | spp | 45% | 18% | 5% | 5% | Pot is too big | g8 |
| 66 | spp | 43% | 18% | 5% | 5% | Pot is too big | g8 |
| K3 | bp | 41% | 28% | 17% | 16% | Pot is too big | g8 |
| 43 | bp | 40% | 26% | 17% | 17% | Pot is too big | g8 |
| K2 | bp | 39% | 25% | 17% | 17% | Pot is too big | g8 |
| 55 | spp | 39% | 18% | 5% | 4% | Pot is too big | g8 |
| A3 | bp | 38% | 24% | 11% | 12% | Pot is too big | g8 |
| 44 | spp | 37% | 19% | 5% | 5% | Pot is too big | g8 |
| A2 | bp | 34% | 20% | 13% | 11% | Pot is too big | g8 |
| A9 | khnd | 29% | 15% | 5% | 6% | Pot is too big | g9 |
| A8 | khnd | 27% | 14% | 6% | 5% | Pot is too big | g9 |
| A7 | khnd | 24% | 13% | 6% | 6% | Pot is too big | g9 |
| A6 | khnd | 24% | 13% | 5% | 6% | Pot is too big | g9 |
