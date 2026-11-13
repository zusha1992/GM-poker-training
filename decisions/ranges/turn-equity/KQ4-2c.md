# KQ4-2c turn (K♦ Q♦ 4♠ 2♣): equity groups

Generated 2026-11-13 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | KK, QQ, 44, 22 | 96% | 98% | 100% | 99% |
| g2 | 50–100bb | Two pair | KQ, K4, K2 | 93% | 93% | 94% | 89% |
| g3 | 25–50bb | Overpair | AA | 87% | 84% | 83% | 75% |
| g4 | 25–50bb | Top pair, good kicker | AK, KJ, KT | 86% | 83% | 81% | 69% |
| g5 | 5–15bb | Top pair, weak kicker | K9–K5, K3 | 79% | 64% | 65% | 28% |
| g6 | 5–15bb | Second pair | AQ, QJ–Q5 | 68% | 41% | 33% | 11% |
| g7 | 0–5bb | Small pairs | JJ–55, 33, A4, A2, 64, 54, 43 | 42% | 21% | 8% | 8% |
| g8 | Pot is too big | Ace-high | A9–A6 | 20% | 10% | 7% | 6% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| 22 | twopair | 96% | 98% | 100% | 100% | 50–100bb | g1 |
| QQ | twopair | 96% | 97% | 99% | 99% | 50–100bb | g1 |
| 44 | twopair | 96% | 98% | 100% | 99% | 50–100bb | g1 |
| KK | twopair | 96% | 97% | 100% | 99% | 50–100bb | g1 |
| KQ | twopair | 93% | 95% | 96% | 92% | 50–100bb | g2 |
| K4 | twopair | 91% | 90% | 89% | 82% | 50–100bb | g2 |
| K2 | twopair | 91% | 86% | 88% | 78% | 50–100bb | g2 |
| AA | op | 87% | 84% | 83% | 75% | 50–100bb | g3 |
| AK | tpgk | 87% | 86% | 83% | 75% | 50–100bb | g4 |
| KJ | tpmk | 86% | 85% | 82% | 72% | 50–100bb | g4 |
| KT | tpmk | 84% | 79% | 77% | 59% | 50–100bb | g4 |
| K9 | tpmk | 82% | 73% | 72% | 46% | 25–50bb | g5 |
| K8 | tpmk | 80% | 65% | 66% | 32% | 25–50bb | g5 |
| K7 | tpmk | 78% | 63% | 64% | 25% | 25–50bb | g5 |
| K6 | tpmk | 78% | 61% | 62% | 20% | 25–50bb | g5 |
| K5 | tpmk | 77% | 58% | 59% | 16% | 25–50bb | g5 |
| K3 | tpmk | 76% | 56% | 57% | 12% | 25–50bb | g5 |
| AQ | mp | 72% | 45% | 44% | 12% | 0–5bb | g6 |
| QJ | mp | 71% | 43% | 40% | 10% | 0–5bb | g6 |
| QT | mp | 68% | 42% | 34% | 11% | 0–5bb | g6 |
| Q9 | mp | 65% | 41% | 25% | 11% | 0–5bb | g6 |
| Q8 | mp | 62% | 38% | 21% | 11% | 0–5bb | g6 |
| Q7 | mp | 61% | 36% | 19% | 11% | 0–5bb | g6 |
| Q6 | mp | 59% | 33% | 16% | 11% | 0–5bb | g6 |
| Q5 | mp | 59% | 31% | 13% | 11% | 0–5bb | g6 |
| TT | pp2 | 51% | 21% | 5% | 5% | 0–5bb | g7 |
| JJ | pp2 | 51% | 20% | 5% | 5% | 0–5bb | g7 |
| 99 | pp2 | 51% | 22% | 4% | 4% | 0–5bb | g7 |
| 88 | spp | 49% | 21% | 4% | 5% | Pot is too big | g7 |
| 77 | spp | 46% | 21% | 5% | 5% | Pot is too big | g7 |
| 66 | spp | 43% | 21% | 5% | 5% | Pot is too big | g7 |
| 64 | bp | 41% | 25% | 17% | 17% | Pot is too big | g7 |
| A4 | bp | 41% | 23% | 13% | 14% | Pot is too big | g7 |
| 43 | bp | 40% | 25% | 17% | 16% | Pot is too big | g7 |
| 54 | bp | 40% | 25% | 18% | 16% | Pot is too big | g7 |
| 55 | spp | 38% | 20% | 4% | 5% | Pot is too big | g7 |
| A2 | bp | 34% | 20% | 13% | 12% | Pot is too big | g7 |
| 33 | spp | 29% | 13% | 4% | 5% | Pot is too big | g7 |
| A9 | khnd | 22% | 11% | 6% | 6% | Pot is too big | g8 |
| A8 | khnd | 21% | 10% | 7% | 6% | Pot is too big | g8 |
| A7 | khnd | 20% | 10% | 6% | 6% | Pot is too big | g8 |
| A6 | khnd | 19% | 10% | 6% | 5% | Pot is too big | g8 |
