# KQ4-Ad turn (K♦ Q♦ 4♠ A♦): equity groups

Generated 2026-11-13 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes, straights & sets | AA–QQ, 44, JT–J7, T9–T7, 98–96, 87, 86, 76, 75, 65 | 92% | 91% | 86% | 76% |
| g2 | 25–50bb | Two pair | AK, AQ, A4, KQ, K4 | 80% | 75% | 68% | 47% |
| g3 | 25–50bb | Top pair, good kicker | AJ | 79% | 75% | 66% | 41% |
| g4 | 15–25bb | Top pair, weak kicker | AT–A5, A3, A2 | 70% | 53% | 49% | 13% |
| g5 | 0–5bb | Second pair | KJ–K5, K3, K2 | 60% | 36% | 24% | 8% |
| g6 | 0–5bb | Small pairs | JJ–55, 33, 22, QJ–Q5, 64, 54, 43 | 37% | 16% | 11% | 9% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| J9 | flush | 100% | 99% | 100% | 99% | 50–100bb | g1 |
| J7 | flush | 100% | 99% | 99% | 99% | 50–100bb | g1 |
| J8 | flush | 100% | 99% | 99% | 98% | 50–100bb | g1 |
| T9 | flush | 98% | 98% | 96% | 94% | 50–100bb | g1 |
| T8 | flush | 98% | 97% | 96% | 93% | 50–100bb | g1 |
| T7 | flush | 98% | 98% | 96% | 93% | 50–100bb | g1 |
| 86 | flushlo | 96% | 95% | 95% | 91% | 50–100bb | g1 |
| 98 | flush | 97% | 96% | 95% | 91% | 50–100bb | g1 |
| 96 | flush | 97% | 96% | 95% | 91% | 50–100bb | g1 |
| 97 | flush | 97% | 96% | 95% | 91% | 50–100bb | g1 |
| 87 | flushlo | 96% | 95% | 95% | 90% | 50–100bb | g1 |
| 76 | flushlo | 95% | 95% | 95% | 90% | 50–100bb | g1 |
| 75 | flushlo | 96% | 95% | 95% | 90% | 50–100bb | g1 |
| 65 | flushlo | 95% | 95% | 93% | 87% | 50–100bb | g1 |
| AA | twopair | 87% | 83% | 77% | 48% | 25–50bb | g1 |
| JT | straight | 91% | 92% | 85% | 72% | 50–100bb | g1 |
| 44 | twopair | 88% | 87% | 83% | 71% | 50–100bb | g1 |
| QQ | twopair | 86% | 85% | 81% | 66% | 50–100bb | g1 |
| KK | twopair | 85% | 85% | 74% | 66% | 50–100bb | g1 |
| A4 | twopair | 81% | 74% | 70% | 42% | 25–50bb | g2 |
| KQ | twopair | 77% | 68% | 62% | 43% | 25–50bb | g2 |
| K4 | twopair | 75% | 68% | 56% | 45% | 25–50bb | g2 |
| AK | twopair | 82% | 81% | 70% | 55% | 50–100bb | g2 |
| AQ | twopair | 81% | 78% | 72% | 50% | 50–100bb | g2 |
| AJ | tpmk | 79% | 75% | 66% | 41% | 25–50bb | g3 |
| A2 | tpmk | 69% | 49% | 45% | 5% | 0–5bb | g4 |
| A3 | tpmk | 68% | 47% | 44% | 5% | 0–5bb | g4 |
| A5 | tpmk | 68% | 49% | 46% | 7% | 0–5bb | g4 |
| AT | tpmk | 77% | 68% | 61% | 31% | 25–50bb | g4 |
| A9 | tpmk | 71% | 57% | 52% | 20% | 25–50bb | g4 |
| A6 | tpmk | 69% | 51% | 46% | 9% | 5–15bb | g4 |
| A7 | tpmk | 69% | 51% | 48% | 11% | 5–15bb | g4 |
| A8 | tpmk | 70% | 54% | 50% | 14% | 25–50bb | g4 |
| KJ | mp | 67% | 46% | 39% | 11% | 0–5bb | g5 |
| KT | mp | 65% | 41% | 34% | 10% | 0–5bb | g5 |
| K9 | mp | 60% | 32% | 26% | 6% | 0–5bb | g5 |
| K8 | mp | 58% | 32% | 20% | 6% | 0–5bb | g5 |
| K7 | mp | 57% | 31% | 17% | 7% | 0–5bb | g5 |
| K6 | mp | 57% | 32% | 15% | 6% | 0–5bb | g5 |
| K5 | mp | 55% | 31% | 13% | 6% | 0–5bb | g5 |
| K2 | mp | 54% | 32% | 9% | 6% | 0–5bb | g5 |
| K3 | mp | 54% | 31% | 9% | 7% | 0–5bb | g5 |
| QJ | bp | 52% | 29% | 14% | 10% | 0–5bb | g6 |
| QT | bp | 49% | 22% | 15% | 11% | Pot is too big | g6 |
| 54 | bp | 45% | 38% | 37% | 34% | Pot is too big | g6 |
| 64 | bp | 45% | 38% | 38% | 34% | Pot is too big | g6 |
| 43 | bp | 45% | 38% | 37% | 34% | Pot is too big | g6 |
| Q9 | bp | 43% | 14% | 8% | 7% | Pot is too big | g6 |
| Q8 | bp | 41% | 12% | 8% | 6% | Pot is too big | g6 |
| Q7 | bp | 39% | 12% | 8% | 7% | Pot is too big | g6 |
| Q6 | bp | 38% | 13% | 8% | 6% | Pot is too big | g6 |
| Q5 | bp | 37% | 13% | 8% | 7% | Pot is too big | g6 |
| TT | pp3 | 35% | 14% | 10% | 9% | Pot is too big | g6 |
| JJ | pp3 | 34% | 14% | 10% | 7% | Pot is too big | g6 |
| 99 | pp3 | 29% | 8% | 3% | 3% | Pot is too big | g6 |
| 88 | spp | 28% | 6% | 3% | 3% | Pot is too big | g6 |
| 77 | spp | 24% | 5% | 3% | 3% | Pot is too big | g6 |
| 66 | spp | 21% | 5% | 4% | 3% | Pot is too big | g6 |
| 55 | spp | 18% | 5% | 4% | 3% | Pot is too big | g6 |
| 33 | spp | 12% | 3% | 4% | 3% | Pot is too big | g6 |
| 22 | spp | 11% | 4% | 4% | 3% | Pot is too big | g6 |
