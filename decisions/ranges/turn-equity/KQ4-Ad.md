# KQ4-Ad turn (K♦ Q♦ 4♠ A♦): equity groups

Generated 2026-11-13 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes, straights & sets | AA–QQ, 44, JT–J7, T9–T7, 98–96, 87, 86, 76, 75, 65 | 92% | 91% | 86% | 76% |
| g2 | 15–25bb | Two pair | AK, AQ, A4, KQ, K4 | 80% | 75% | 68% | 48% |
| g3 | 0–5bb | Top pair | AJ–A5, A3, A2 | 73% | 58% | 53% | 19% |
| g4 | 0–5bb | Second pair | KJ–K5, K3, K2 | 63% | 38% | 28% | 11% |
| g5 | 0–5bb | Small pairs | JJ–55, 33, 22, QJ–Q5, 64, 54, 43 | 39% | 20% | 15% | 13% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| J7 | flush | 100% | 99% | 100% | 99% | 50–100bb | g1 |
| J9 | flush | 100% | 99% | 99% | 99% | 50–100bb | g1 |
| J8 | flush | 100% | 99% | 99% | 99% | 50–100bb | g1 |
| T7 | flush | 98% | 98% | 96% | 94% | 50–100bb | g1 |
| T9 | flush | 98% | 97% | 96% | 94% | 50–100bb | g1 |
| T8 | flush | 98% | 98% | 96% | 93% | 50–100bb | g1 |
| 98 | flush | 97% | 96% | 95% | 92% | 50–100bb | g1 |
| 97 | flush | 97% | 96% | 95% | 91% | 50–100bb | g1 |
| 96 | flush | 97% | 96% | 95% | 91% | 50–100bb | g1 |
| 87 | flushlo | 95% | 95% | 95% | 90% | 50–100bb | g1 |
| 75 | flushlo | 96% | 95% | 95% | 90% | 50–100bb | g1 |
| 86 | flushlo | 96% | 96% | 95% | 90% | 50–100bb | g1 |
| 76 | flushlo | 96% | 95% | 94% | 90% | 50–100bb | g1 |
| 65 | flushlo | 95% | 95% | 93% | 87% | 50–100bb | g1 |
| AA | twopair | 87% | 83% | 76% | 47% | 25–50bb | g1 |
| JT | straight | 91% | 92% | 85% | 73% | 50–100bb | g1 |
| 44 | twopair | 87% | 86% | 84% | 71% | 50–100bb | g1 |
| KK | twopair | 86% | 85% | 73% | 67% | 50–100bb | g1 |
| QQ | twopair | 85% | 85% | 80% | 66% | 50–100bb | g1 |
| AQ | twopair | 81% | 78% | 73% | 49% | 25–50bb | g2 |
| A4 | twopair | 81% | 74% | 70% | 44% | 25–50bb | g2 |
| KQ | twopair | 76% | 70% | 60% | 45% | 25–50bb | g2 |
| K4 | twopair | 76% | 67% | 56% | 44% | 25–50bb | g2 |
| AK | twopair | 82% | 81% | 72% | 54% | 50–100bb | g2 |
| A3 | tpmk | 70% | 50% | 47% | 9% | 0–5bb | g3 |
| A2 | tpmk | 69% | 50% | 48% | 8% | 0–5bb | g3 |
| AJ | tpmk | 81% | 77% | 68% | 44% | 25–50bb | g3 |
| AT | tpmk | 79% | 71% | 63% | 34% | 25–50bb | g3 |
| A9 | tpmk | 73% | 59% | 53% | 23% | 25–50bb | g3 |
| A8 | tpmk | 72% | 56% | 53% | 18% | 25–50bb | g3 |
| A5 | tpmk | 70% | 52% | 48% | 11% | 5–15bb | g3 |
| A6 | tpmk | 71% | 51% | 49% | 12% | 5–15bb | g3 |
| A7 | tpmk | 72% | 54% | 51% | 14% | 25–50bb | g3 |
| KJ | mp | 70% | 48% | 42% | 15% | 0–5bb | g4 |
| KT | mp | 67% | 43% | 38% | 14% | 0–5bb | g4 |
| K9 | mp | 62% | 36% | 29% | 10% | 0–5bb | g4 |
| K8 | mp | 61% | 33% | 23% | 10% | 0–5bb | g4 |
| K7 | mp | 59% | 34% | 22% | 11% | 0–5bb | g4 |
| K6 | mp | 59% | 35% | 19% | 11% | 0–5bb | g4 |
| K5 | mp | 55% | 32% | 13% | 6% | 0–5bb | g4 |
| K2 | mp | 54% | 32% | 9% | 6% | 0–5bb | g4 |
| K3 | mp | 54% | 31% | 9% | 6% | 0–5bb | g4 |
| QJ | bp | 54% | 33% | 19% | 14% | 0–5bb | g5 |
| QT | bp | 53% | 25% | 17% | 14% | 0–5bb | g5 |
| Q9 | bp | 45% | 18% | 13% | 10% | Pot is too big | g5 |
| 54 | bp | 45% | 38% | 37% | 34% | Pot is too big | g5 |
| 64 | bp | 44% | 38% | 37% | 35% | Pot is too big | g5 |
| 43 | bp | 44% | 38% | 37% | 34% | Pot is too big | g5 |
| TT | pp3 | 43% | 23% | 18% | 16% | Pot is too big | g5 |
| JJ | pp3 | 43% | 23% | 19% | 17% | Pot is too big | g5 |
| Q7 | bp | 40% | 12% | 8% | 5% | Pot is too big | g5 |
| Q8 | bp | 40% | 12% | 9% | 5% | Pot is too big | g5 |
| Q6 | bp | 39% | 13% | 8% | 6% | Pot is too big | g5 |
| Q5 | bp | 38% | 13% | 8% | 6% | Pot is too big | g5 |
| 99 | pp3 | 36% | 15% | 12% | 10% | Pot is too big | g5 |
| 88 | spp | 34% | 15% | 13% | 11% | Pot is too big | g5 |
| 77 | spp | 32% | 13% | 12% | 11% | Pot is too big | g5 |
| 66 | spp | 29% | 13% | 13% | 10% | Pot is too big | g5 |
| 55 | spp | 25% | 13% | 12% | 10% | Pot is too big | g5 |
| 33 | spp | 19% | 12% | 12% | 10% | Pot is too big | g5 |
| 22 | spp | 17% | 12% | 12% | 9% | Pot is too big | g5 |
