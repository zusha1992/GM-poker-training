# KQ4-Ad turn (K♦ Q♦ 4♠ A♦): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes, straights & sets | AA–QQ, 44, JT–J7, T9–T7, 98–96, 87, 86, 76, 75, 65 | 92% | 91% | 87% | 76% |
| g2 | 15–25bb | Two pair | AK, AQ, A4, KQ, K4 | 80% | 75% | 68% | 48% |
| g3 | 5–15bb | Top pair with a flush draw | AJ–A5, A3, A2 with a ♦ | 78% | 64% | 60% | 30% |
| g4 | 0–5bb | Top pair, no flush draw | AJ–A5, A3, A2 | 71% | 56% | 51% | 16% |
| g5 | 0–5bb | Second pair | KJ–K5, K3, K2 | 63% | 39% | 28% | 11% |
| g6 | 0–5bb | Small pairs | JJ–55, 33, 22, QJ–Q5, 64, 54, 43 | 39% | 20% | 15% | 13% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| J7 | flush | 100% | 99% | 99% | 99% | 50–100bb | g1 |
| J8 | flush | 100% | 99% | 99% | 99% | 50–100bb | g1 |
| J9 | flush | 100% | 99% | 100% | 99% | 50–100bb | g1 |
| T8 | flush | 98% | 97% | 96% | 93% | 50–100bb | g1 |
| T9 | flush | 98% | 98% | 97% | 93% | 50–100bb | g1 |
| T7 | flush | 98% | 98% | 97% | 93% | 50–100bb | g1 |
| 97 | flush | 97% | 96% | 95% | 92% | 50–100bb | g1 |
| 98 | flush | 97% | 96% | 95% | 92% | 50–100bb | g1 |
| 86 | flushlo | 96% | 95% | 95% | 91% | 50–100bb | g1 |
| 75 | flushlo | 96% | 95% | 95% | 91% | 50–100bb | g1 |
| 87 | flushlo | 96% | 95% | 95% | 91% | 50–100bb | g1 |
| 96 | flush | 97% | 96% | 95% | 91% | 50–100bb | g1 |
| 76 | flushlo | 96% | 95% | 94% | 90% | 50–100bb | g1 |
| 65 | flushlo | 95% | 95% | 94% | 88% | 50–100bb | g1 |
| AA | twopair | 87% | 83% | 76% | 47% | 25–50bb | g1 |
| 44 | twopair | 88% | 86% | 84% | 73% | 50–100bb | g1 |
| JT | straight | 91% | 91% | 85% | 72% | 50–100bb | g1 |
| KK | twopair | 86% | 85% | 74% | 67% | 50–100bb | g1 |
| QQ | twopair | 85% | 85% | 80% | 66% | 50–100bb | g1 |
| AQ | twopair | 80% | 79% | 72% | 50% | 25–50bb | g2 |
| A4 | twopair | 82% | 74% | 70% | 44% | 25–50bb | g2 |
| KQ | twopair | 77% | 68% | 60% | 44% | 25–50bb | g2 |
| K4 | twopair | 76% | 69% | 56% | 44% | 25–50bb | g2 |
| AK | twopair | 82% | 80% | 71% | 53% | 50–100bb | g2 |
| AT+fd | tpmk | 84% | 76% | 68% | 43% | 25–50bb | g3 |
| A9+fd | tpmk | 79% | 65% | 62% | 33% | 25–50bb | g3 |
| A8+fd | tpmk | 77% | 62% | 59% | 28% | 25–50bb | g3 |
| A7+fd | tpmk | 77% | 61% | 58% | 27% | 25–50bb | g3 |
| A6+fd | tpmk | 75% | 58% | 57% | 23% | 25–50bb | g3 |
| A5+fd | tpmk | 74% | 58% | 56% | 22% | 25–50bb | g3 |
| AJ+fd | tpmk | 87% | 85% | 73% | 55% | 50–100bb | g3 |
| A3+fd | tpmk | 73% | 56% | 55% | 18% | 25–50bb | g3 |
| A2+fd | tpmk | 74% | 55% | 54% | 18% | 25–50bb | g3 |
| A2 | tpmk | 69% | 46% | 45% | 5% | 0–5bb | g4 |
| A3 | tpmk | 69% | 48% | 46% | 5% | 0–5bb | g4 |
| A5 | tpmk | 68% | 49% | 47% | 7% | 0–5bb | g4 |
| AJ | tpmk | 78% | 75% | 66% | 42% | 25–50bb | g4 |
| AT | tpmk | 76% | 68% | 61% | 31% | 25–50bb | g4 |
| A9 | tpmk | 71% | 57% | 52% | 20% | 25–50bb | g4 |
| A7 | tpmk | 69% | 51% | 47% | 11% | 5–15bb | g4 |
| A6 | tpmk | 69% | 50% | 47% | 9% | 5–15bb | g4 |
| A8 | tpmk | 70% | 54% | 50% | 15% | 25–50bb | g4 |
| KJ | mp | 70% | 48% | 42% | 15% | 0–5bb | g5 |
| KT | mp | 69% | 44% | 38% | 14% | 0–5bb | g5 |
| K9 | mp | 62% | 35% | 29% | 9% | 0–5bb | g5 |
| K8 | mp | 60% | 35% | 24% | 9% | 0–5bb | g5 |
| K7 | mp | 59% | 34% | 21% | 10% | 0–5bb | g5 |
| K6 | mp | 57% | 33% | 19% | 10% | 0–5bb | g5 |
| K5 | mp | 55% | 31% | 13% | 6% | 0–5bb | g5 |
| K3 | mp | 54% | 31% | 10% | 6% | 0–5bb | g5 |
| K2 | mp | 53% | 31% | 9% | 6% | 0–5bb | g5 |
| QJ | bp | 55% | 33% | 18% | 15% | 0–5bb | g6 |
| QT | bp | 53% | 26% | 18% | 14% | 0–5bb | g6 |
| Q9 | bp | 46% | 18% | 12% | 10% | Pot is too big | g6 |
| 64 | bp | 45% | 38% | 37% | 35% | Pot is too big | g6 |
| 54 | bp | 45% | 38% | 38% | 35% | Pot is too big | g6 |
| TT | pp3 | 44% | 23% | 18% | 16% | Pot is too big | g6 |
| 43 | bp | 44% | 37% | 37% | 34% | Pot is too big | g6 |
| JJ | pp3 | 43% | 24% | 19% | 17% | Pot is too big | g6 |
| Q8 | bp | 41% | 13% | 8% | 6% | Pot is too big | g6 |
| Q7 | bp | 39% | 13% | 8% | 6% | Pot is too big | g6 |
| Q6 | bp | 38% | 13% | 9% | 6% | Pot is too big | g6 |
| Q5 | bp | 37% | 13% | 8% | 6% | Pot is too big | g6 |
| 99 | pp3 | 36% | 16% | 12% | 12% | Pot is too big | g6 |
| 88 | spp | 35% | 15% | 12% | 11% | Pot is too big | g6 |
| 77 | spp | 32% | 12% | 13% | 11% | Pot is too big | g6 |
| 66 | spp | 28% | 13% | 13% | 11% | Pot is too big | g6 |
| 55 | spp | 25% | 13% | 13% | 11% | Pot is too big | g6 |
| 33 | spp | 20% | 12% | 12% | 10% | Pot is too big | g6 |
| 22 | spp | 18% | 10% | 12% | 9% | Pot is too big | g6 |
