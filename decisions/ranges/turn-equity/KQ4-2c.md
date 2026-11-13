# KQ4-2c turn (K♦ Q♦ 4♠ 2♣): equity groups

Generated 2026-11-13 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | KK, QQ, 44, 22 | 96% | 98% | 100% | 99% |
| g2 | 50–100bb | Two pair | KQ, K4, K2 | 92% | 94% | 94% | 89% |
| g3 | 25–50bb | Overpair | AA | 87% | 84% | 82% | 76% |
| g4 | 25–50bb | Top pair, good kicker | AK, KJ, KT | 86% | 84% | 81% | 69% |
| g5 | 15–25bb | Top pair, weak kicker | K9–K5, K3 | 79% | 64% | 64% | 28% |
| g6 | 5–15bb | Second pair | AQ, QJ–Q5 | 67% | 41% | 33% | 10% |
| g7 | 0–5bb | Small pairs | JJ–55, 33, A4, A2, 64, 54, 43 | 42% | 21% | 8% | 8% |
| g8 | Pot is too big | Ace-high | A9–A6 | 21% | 10% | 6% | 6% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| 22 | twopair | 96% | 98% | 100% | 100% | 50–100bb | g1 |
| QQ | twopair | 96% | 98% | 100% | 99% | 50–100bb | g1 |
| 44 | twopair | 96% | 98% | 100% | 99% | 50–100bb | g1 |
| KK | twopair | 96% | 97% | 100% | 99% | 50–100bb | g1 |
| KQ | twopair | 93% | 96% | 96% | 93% | 50–100bb | g2 |
| K4 | twopair | 92% | 90% | 90% | 82% | 50–100bb | g2 |
| K2 | twopair | 90% | 87% | 88% | 78% | 50–100bb | g2 |
| AA | op | 86% | 84% | 82% | 76% | 50–100bb | g3 |
| AK | tpgk | 88% | 87% | 83% | 76% | 50–100bb | g4 |
| KJ | tpmk | 87% | 84% | 82% | 71% | 50–100bb | g4 |
| KT | tpmk | 84% | 79% | 77% | 60% | 50–100bb | g4 |
| K9 | tpmk | 83% | 72% | 71% | 45% | 25–50bb | g5 |
| K8 | tpmk | 80% | 66% | 66% | 32% | 25–50bb | g5 |
| K7 | tpmk | 79% | 63% | 63% | 24% | 25–50bb | g5 |
| K6 | tpmk | 78% | 60% | 62% | 20% | 25–50bb | g5 |
| K5 | tpmk | 76% | 58% | 59% | 17% | 25–50bb | g5 |
| K3 | tpmk | 76% | 55% | 56% | 12% | 25–50bb | g5 |
| AQ | mp | 72% | 44% | 45% | 12% | 0–5bb | g6 |
| QJ | mp | 71% | 43% | 41% | 10% | 0–5bb | g6 |
| QT | mp | 67% | 40% | 33% | 10% | 0–5bb | g6 |
| Q9 | mp | 64% | 40% | 25% | 10% | 0–5bb | g6 |
| Q8 | mp | 64% | 41% | 19% | 11% | 0–5bb | g6 |
| Q7 | mp | 61% | 36% | 18% | 11% | 0–5bb | g6 |
| Q6 | mp | 60% | 33% | 16% | 11% | 0–5bb | g6 |
| Q5 | mp | 59% | 31% | 12% | 10% | 0–5bb | g6 |
| TT | pp2 | 53% | 22% | 4% | 5% | 0–5bb | g7 |
| JJ | pp2 | 52% | 20% | 5% | 5% | 0–5bb | g7 |
| 99 | pp2 | 51% | 21% | 4% | 5% | 0–5bb | g7 |
| 88 | spp | 49% | 22% | 5% | 5% | Pot is too big | g7 |
| 77 | spp | 45% | 21% | 5% | 5% | Pot is too big | g7 |
| 66 | spp | 42% | 21% | 5% | 5% | Pot is too big | g7 |
| 54 | bp | 42% | 25% | 17% | 17% | Pot is too big | g7 |
| 64 | bp | 41% | 26% | 17% | 17% | Pot is too big | g7 |
| A4 | bp | 40% | 25% | 13% | 12% | Pot is too big | g7 |
| 43 | bp | 39% | 25% | 17% | 17% | Pot is too big | g7 |
| 55 | spp | 39% | 22% | 5% | 5% | Pot is too big | g7 |
| A2 | bp | 34% | 20% | 13% | 13% | Pot is too big | g7 |
| 33 | spp | 29% | 12% | 4% | 5% | Pot is too big | g7 |
| A9 | khnd | 22% | 11% | 5% | 6% | Pot is too big | g8 |
| A8 | khnd | 21% | 10% | 6% | 6% | Pot is too big | g8 |
| A7 | khnd | 20% | 10% | 7% | 5% | Pot is too big | g8 |
| A6 | khnd | 19% | 10% | 6% | 6% | Pot is too big | g8 |
