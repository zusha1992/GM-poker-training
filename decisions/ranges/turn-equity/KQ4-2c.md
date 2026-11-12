# KQ4-2c turn (K♦ Q♦ 4♠ 2♣): equity groups

Generated 2026-11-12 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | KK, QQ, 44, 22 | 96% | 98% | 100% | 99% |
| g2 | 50–100bb | Two pair | KQ, K4, K2 | 93% | 93% | 94% | 89% |
| g3 | 50–100bb | Overpair | AA | 87% | 85% | 82% | 75% |
| g4 | 25–50bb | Top pair, good kicker | AK, KJ, KT | 87% | 83% | 81% | 69% |
| g5 | 15–25bb | Top pair, weak kicker | K9–K5, K3 | 79% | 64% | 65% | 27% |
| g6 | 5–15bb | Second pair | AQ, QJ–Q5 | 67% | 41% | 33% | 11% |
| g7 | 0–5bb | Small pairs | JJ–55, 33, A4, A2, 64, 54, 43 | 42% | 21% | 8% | 8% |
| g8 | Pot is too big | Ace-high | A9–A6 | 21% | 10% | 6% | 6% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| 22 | twopair | 96% | 98% | 100% | 100% | 50–100bb | g1 |
| QQ | twopair | 96% | 98% | 100% | 99% | 50–100bb | g1 |
| 44 | twopair | 96% | 98% | 100% | 99% | 50–100bb | g1 |
| KK | twopair | 96% | 97% | 100% | 99% | 50–100bb | g1 |
| KQ | twopair | 93% | 95% | 96% | 93% | 50–100bb | g2 |
| K4 | twopair | 92% | 91% | 90% | 81% | 50–100bb | g2 |
| K2 | twopair | 91% | 87% | 88% | 78% | 50–100bb | g2 |
| AA | op | 87% | 85% | 82% | 75% | 50–100bb | g3 |
| AK | tpgk | 88% | 87% | 82% | 75% | 50–100bb | g4 |
| KJ | tpmk | 86% | 85% | 82% | 72% | 50–100bb | g4 |
| KT | tpmk | 85% | 78% | 77% | 60% | 50–100bb | g4 |
| K9 | tpmk | 83% | 72% | 71% | 45% | 25–50bb | g5 |
| K8 | tpmk | 79% | 66% | 66% | 32% | 25–50bb | g5 |
| K7 | tpmk | 78% | 62% | 64% | 25% | 25–50bb | g5 |
| K6 | tpmk | 78% | 60% | 62% | 19% | 25–50bb | g5 |
| K5 | tpmk | 77% | 57% | 60% | 16% | 25–50bb | g5 |
| K3 | tpmk | 76% | 55% | 58% | 11% | 25–50bb | g5 |
| AQ | mp | 72% | 45% | 46% | 12% | 0–5bb | g6 |
| QJ | mp | 70% | 42% | 41% | 10% | 0–5bb | g6 |
| QT | mp | 68% | 41% | 33% | 11% | 0–5bb | g6 |
| Q9 | mp | 64% | 40% | 25% | 10% | 0–5bb | g6 |
| Q8 | mp | 62% | 40% | 20% | 10% | 0–5bb | g6 |
| Q6 | mp | 61% | 33% | 15% | 11% | 0–5bb | g6 |
| Q7 | mp | 61% | 37% | 18% | 11% | 0–5bb | g6 |
| Q5 | mp | 59% | 30% | 12% | 11% | 0–5bb | g6 |
| JJ | pp2 | 52% | 20% | 5% | 5% | 0–5bb | g7 |
| TT | pp2 | 52% | 21% | 5% | 6% | 0–5bb | g7 |
| 99 | pp2 | 51% | 22% | 4% | 5% | 0–5bb | g7 |
| 88 | spp | 50% | 22% | 4% | 5% | Pot is too big | g7 |
| 77 | spp | 45% | 21% | 5% | 5% | Pot is too big | g7 |
| 66 | spp | 43% | 22% | 5% | 5% | Pot is too big | g7 |
| 54 | bp | 42% | 25% | 16% | 16% | Pot is too big | g7 |
| 64 | bp | 42% | 26% | 17% | 16% | Pot is too big | g7 |
| 43 | bp | 40% | 24% | 17% | 16% | Pot is too big | g7 |
| A4 | bp | 39% | 23% | 13% | 13% | Pot is too big | g7 |
| 55 | spp | 37% | 21% | 5% | 5% | Pot is too big | g7 |
| A2 | bp | 34% | 19% | 12% | 13% | Pot is too big | g7 |
| 33 | spp | 29% | 13% | 5% | 5% | Pot is too big | g7 |
| A9 | khnd | 23% | 11% | 6% | 5% | Pot is too big | g8 |
| A8 | khnd | 22% | 10% | 6% | 5% | Pot is too big | g8 |
| A7 | khnd | 20% | 10% | 6% | 6% | Pot is too big | g8 |
| A6 | khnd | 18% | 9% | 7% | 6% | Pot is too big | g8 |
