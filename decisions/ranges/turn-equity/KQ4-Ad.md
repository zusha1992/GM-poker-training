# KQ4-Ad turn (K♦ Q♦ 4♠ A♦): equity groups

Generated 2026-11-13 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes, straights & sets | AA–QQ, 44, JT–J7, T9–T7, 98–96, 87, 86, 76, 75, 65 | 92% | 91% | 86% | 76% |
| g2 | 15–25bb | Two pair | AK, AQ, A4, KQ, K4 | 80% | 75% | 67% | 48% |
| g3 | 5–15bb | Top pair with a flush draw | AJ–A5, A3, A2 with a ♦ | 78% | 64% | 61% | 30% |
| g4 | 0–5bb | Top pair, no flush draw | AJ–A5, A3, A2 | 71% | 56% | 51% | 16% |
| g5 | 0–5bb | Second pair | KJ–K5, K3, K2 | 63% | 38% | 27% | 11% |
| g6 | 0–5bb | Small pairs | JJ–55, 33, 22, QJ–Q5, 64, 54, 43 | 39% | 20% | 15% | 13% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| J9 | flush | 100% | 99% | 99% | 99% | 50–100bb | g1 |
| J7 | flush | 100% | 99% | 99% | 99% | 50–100bb | g1 |
| J8 | flush | 100% | 99% | 99% | 99% | 50–100bb | g1 |
| T8 | flush | 98% | 98% | 96% | 93% | 50–100bb | g1 |
| T9 | flush | 98% | 98% | 97% | 93% | 50–100bb | g1 |
| T7 | flush | 98% | 98% | 96% | 93% | 50–100bb | g1 |
| 86 | flushlo | 96% | 95% | 95% | 92% | 50–100bb | g1 |
| 87 | flushlo | 96% | 95% | 95% | 91% | 50–100bb | g1 |
| 96 | flush | 97% | 96% | 95% | 91% | 50–100bb | g1 |
| 98 | flush | 97% | 95% | 96% | 91% | 50–100bb | g1 |
| 97 | flush | 97% | 96% | 95% | 91% | 50–100bb | g1 |
| 76 | flushlo | 96% | 95% | 95% | 90% | 50–100bb | g1 |
| 75 | flushlo | 95% | 96% | 94% | 90% | 50–100bb | g1 |
| 65 | flushlo | 94% | 95% | 93% | 87% | 50–100bb | g1 |
| AA | twopair | 86% | 82% | 76% | 48% | 25–50bb | g1 |
| JT | straight | 91% | 91% | 85% | 72% | 50–100bb | g1 |
| 44 | twopair | 88% | 86% | 83% | 71% | 50–100bb | g1 |
| KK | twopair | 86% | 85% | 74% | 67% | 50–100bb | g1 |
| QQ | twopair | 85% | 85% | 80% | 65% | 50–100bb | g1 |
| A4 | twopair | 82% | 74% | 69% | 44% | 25–50bb | g2 |
| KQ | twopair | 76% | 68% | 59% | 43% | 25–50bb | g2 |
| K4 | twopair | 75% | 69% | 55% | 44% | 25–50bb | g2 |
| AK | twopair | 82% | 81% | 71% | 53% | 50–100bb | g2 |
| AQ | twopair | 81% | 78% | 72% | 51% | 50–100bb | g2 |
| AT+fd | tpmk | 84% | 77% | 68% | 43% | 25–50bb | g3 |
| A9+fd | tpmk | 79% | 65% | 62% | 33% | 25–50bb | g3 |
| A8+fd | tpmk | 77% | 63% | 60% | 29% | 25–50bb | g3 |
| A7+fd | tpmk | 76% | 60% | 59% | 27% | 25–50bb | g3 |
| A6+fd | tpmk | 76% | 59% | 57% | 24% | 25–50bb | g3 |
| A5+fd | tpmk | 76% | 57% | 56% | 22% | 25–50bb | g3 |
| A2+fd | tpmk | 74% | 56% | 55% | 17% | 25–50bb | g3 |
| AJ+fd | tpmk | 86% | 85% | 74% | 55% | 50–100bb | g3 |
| A3+fd | tpmk | 74% | 56% | 55% | 18% | 25–50bb | g3 |
| A3 | tpmk | 68% | 46% | 44% | 5% | 0–5bb | g4 |
| A2 | tpmk | 68% | 48% | 45% | 5% | 0–5bb | g4 |
| AJ | tpmk | 78% | 76% | 66% | 41% | 25–50bb | g4 |
| AT | tpmk | 77% | 67% | 61% | 31% | 25–50bb | g4 |
| A8 | tpmk | 70% | 54% | 49% | 16% | 5–15bb | g4 |
| A9 | tpmk | 73% | 58% | 52% | 19% | 25–50bb | g4 |
| A7 | tpmk | 69% | 52% | 50% | 11% | 5–15bb | g4 |
| A6 | tpmk | 67% | 51% | 48% | 8% | 5–15bb | g4 |
| A5 | tpmk | 68% | 50% | 46% | 7% | 5–15bb | g4 |
| KJ | mp | 70% | 48% | 41% | 15% | 0–5bb | g5 |
| KT | mp | 69% | 44% | 37% | 14% | 0–5bb | g5 |
| K9 | mp | 62% | 35% | 28% | 10% | 0–5bb | g5 |
| K8 | mp | 62% | 35% | 24% | 10% | 0–5bb | g5 |
| K7 | mp | 58% | 34% | 21% | 10% | 0–5bb | g5 |
| K6 | mp | 57% | 34% | 19% | 11% | 0–5bb | g5 |
| K5 | mp | 55% | 32% | 14% | 6% | 0–5bb | g5 |
| K2 | mp | 54% | 31% | 9% | 6% | 0–5bb | g5 |
| K3 | mp | 53% | 32% | 9% | 7% | 0–5bb | g5 |
| QJ | bp | 55% | 33% | 18% | 15% | 0–5bb | g6 |
| QT | bp | 52% | 27% | 18% | 14% | 0–5bb | g6 |
| Q9 | bp | 46% | 17% | 12% | 10% | Pot is too big | g6 |
| 64 | bp | 45% | 38% | 37% | 34% | Pot is too big | g6 |
| 54 | bp | 45% | 37% | 38% | 35% | Pot is too big | g6 |
| 43 | bp | 45% | 38% | 37% | 34% | Pot is too big | g6 |
| TT | pp3 | 44% | 22% | 19% | 15% | Pot is too big | g6 |
| JJ | pp3 | 43% | 22% | 18% | 17% | Pot is too big | g6 |
| Q7 | bp | 40% | 13% | 9% | 6% | Pot is too big | g6 |
| Q8 | bp | 38% | 12% | 8% | 6% | Pot is too big | g6 |
| Q6 | bp | 37% | 14% | 8% | 6% | Pot is too big | g6 |
| Q5 | bp | 37% | 13% | 8% | 6% | Pot is too big | g6 |
| 99 | pp3 | 36% | 15% | 12% | 11% | Pot is too big | g6 |
| 88 | spp | 35% | 14% | 12% | 11% | Pot is too big | g6 |
| 77 | spp | 33% | 13% | 12% | 11% | Pot is too big | g6 |
| 66 | spp | 29% | 13% | 13% | 11% | Pot is too big | g6 |
| 55 | spp | 26% | 12% | 12% | 10% | Pot is too big | g6 |
| 33 | spp | 20% | 11% | 12% | 10% | Pot is too big | g6 |
| 22 | spp | 18% | 11% | 11% | 10% | Pot is too big | g6 |
