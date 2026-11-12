# KQ4-Ad turn (K♦ Q♦ 4♠ A♦): equity groups

Generated 2026-11-12 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes, straights & sets | AA–QQ, 44, JT–J7, T9–T7, 98–96, 87, 86, 76, 75, 65 | 92% | 91% | 86% | 76% |
| g2 | 25–50bb | Two pair | AK, AQ, A4, KQ, K4 | 80% | 75% | 67% | 48% |
| g3 | 25–50bb | Top pair, good kicker | AJ, AT | 77% | 72% | 63% | 37% |
| g4 | 15–25bb | Top pair, weak kicker | A9–A5, A3, A2 | 69% | 51% | 48% | 10% |
| g5 | 5–15bb | Second pair | KJ–K5, K3, K2 | 60% | 36% | 23% | 7% |
| g6 | 0–5bb | Small pairs | JJ–55, 33, 22, QJ–Q5, 64, 54, 43 | 37% | 16% | 11% | 8% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| J8 | flush | 100% | 99% | 99% | 99% | 50–100bb | g1 |
| J9 | flush | 100% | 99% | 99% | 99% | 50–100bb | g1 |
| J7 | flush | 100% | 99% | 99% | 99% | 50–100bb | g1 |
| T8 | flush | 98% | 98% | 96% | 94% | 50–100bb | g1 |
| T7 | flush | 98% | 98% | 96% | 93% | 50–100bb | g1 |
| T9 | flush | 98% | 98% | 97% | 93% | 50–100bb | g1 |
| 98 | flush | 96% | 96% | 95% | 91% | 50–100bb | g1 |
| 87 | flushlo | 96% | 95% | 95% | 91% | 50–100bb | g1 |
| 96 | flush | 97% | 96% | 95% | 91% | 50–100bb | g1 |
| 86 | flushlo | 96% | 95% | 95% | 90% | 50–100bb | g1 |
| 97 | flush | 97% | 96% | 95% | 90% | 50–100bb | g1 |
| 75 | flushlo | 96% | 95% | 95% | 90% | 50–100bb | g1 |
| 76 | flushlo | 96% | 95% | 95% | 90% | 50–100bb | g1 |
| 65 | flushlo | 95% | 95% | 93% | 88% | 50–100bb | g1 |
| AA | twopair | 86% | 84% | 76% | 48% | 25–50bb | g1 |
| JT | straight | 91% | 92% | 85% | 72% | 50–100bb | g1 |
| 44 | twopair | 88% | 86% | 84% | 72% | 50–100bb | g1 |
| QQ | twopair | 85% | 84% | 81% | 67% | 50–100bb | g1 |
| KK | twopair | 85% | 84% | 73% | 67% | 50–100bb | g1 |
| A4 | twopair | 81% | 74% | 70% | 44% | 25–50bb | g2 |
| KQ | twopair | 77% | 68% | 61% | 45% | 25–50bb | g2 |
| K4 | twopair | 76% | 69% | 56% | 44% | 25–50bb | g2 |
| AK | twopair | 82% | 80% | 71% | 53% | 50–100bb | g2 |
| AQ | twopair | 82% | 78% | 71% | 50% | 50–100bb | g2 |
| AJ | tpmk | 78% | 74% | 65% | 41% | 25–50bb | g3 |
| AT | tpmk | 76% | 69% | 61% | 32% | 25–50bb | g3 |
| A5 | tpmk | 69% | 48% | 46% | 7% | 0–5bb | g4 |
| A2 | tpmk | 68% | 49% | 46% | 5% | 0–5bb | g4 |
| A6 | tpmk | 68% | 49% | 47% | 9% | 0–5bb | g4 |
| A3 | tpmk | 67% | 48% | 44% | 5% | 0–5bb | g4 |
| A9 | tpmk | 70% | 57% | 52% | 19% | 25–50bb | g4 |
| A7 | tpmk | 70% | 52% | 49% | 11% | 5–15bb | g4 |
| A8 | tpmk | 69% | 53% | 50% | 15% | 25–50bb | g4 |
| KT | mp | 66% | 40% | 34% | 10% | 0–5bb | g5 |
| KJ | mp | 66% | 44% | 38% | 10% | 0–5bb | g5 |
| K9 | mp | 60% | 33% | 25% | 6% | 0–5bb | g5 |
| K8 | mp | 57% | 32% | 19% | 6% | 0–5bb | g5 |
| K7 | mp | 56% | 32% | 17% | 6% | 0–5bb | g5 |
| K6 | mp | 56% | 32% | 15% | 6% | 0–5bb | g5 |
| K5 | mp | 55% | 31% | 13% | 6% | 0–5bb | g5 |
| K2 | mp | 54% | 30% | 8% | 6% | 0–5bb | g5 |
| K3 | mp | 53% | 32% | 9% | 6% | 0–5bb | g5 |
| QJ | bp | 52% | 29% | 13% | 10% | 0–5bb | g6 |
| QT | bp | 50% | 21% | 14% | 10% | Pot is too big | g6 |
| 64 | bp | 46% | 38% | 37% | 35% | Pot is too big | g6 |
| 54 | bp | 45% | 38% | 37% | 35% | Pot is too big | g6 |
| 43 | bp | 44% | 39% | 38% | 35% | Pot is too big | g6 |
| Q9 | bp | 41% | 14% | 7% | 6% | Pot is too big | g6 |
| Q8 | bp | 40% | 12% | 8% | 6% | Pot is too big | g6 |
| Q7 | bp | 39% | 14% | 8% | 6% | Pot is too big | g6 |
| Q5 | bp | 37% | 14% | 9% | 6% | Pot is too big | g6 |
| Q6 | bp | 36% | 13% | 9% | 6% | Pot is too big | g6 |
| TT | pp3 | 36% | 14% | 10% | 8% | Pot is too big | g6 |
| JJ | pp3 | 35% | 14% | 10% | 7% | Pot is too big | g6 |
| 88 | spp | 28% | 6% | 3% | 3% | Pot is too big | g6 |
| 99 | pp3 | 28% | 8% | 3% | 2% | Pot is too big | g6 |
| 77 | spp | 25% | 6% | 4% | 3% | Pot is too big | g6 |
| 66 | spp | 22% | 5% | 3% | 3% | Pot is too big | g6 |
| 55 | spp | 19% | 5% | 3% | 3% | Pot is too big | g6 |
| 33 | spp | 13% | 4% | 3% | 2% | Pot is too big | g6 |
| 22 | spp | 11% | 4% | 3% | 2% | Pot is too big | g6 |
