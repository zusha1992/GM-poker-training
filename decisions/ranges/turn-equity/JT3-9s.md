# JT3-9s turn (J♠ T♠ 3♣ 9♠): equity groups

Generated 2026-11-13 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes, straights & sets | JJ–99, 33, AK, AQ, A8, A7, KQ, K8–K4, K2, Q8–Q5, 87, 86, 76, 75, 65, 64, 54 | 90% | 89% | 85% | 78% |
| g2 | 25–50bb | Two pair | JT, J9, T9 | 72% | 66% | 60% | 49% |
| g3 | 25–50bb | Overpairs | AA–QQ | 70% | 65% | 57% | 44% |
| g4 | 25–50bb | Top pair, good kicker | AJ, KJ, QJ | 68% | 61% | 52% | 34% |
| g5 | 15–25bb | Top pair, weak kicker | J8, J7 | 64% | 53% | 45% | 23% |
| g6 | 0–5bb | Second pair | AT, KT, QT, T8, T7 | 54% | 41% | 24% | 13% |
| g7 | 0–5bb | Small pairs | 88–44, 22, A9, A3, K9, K3, Q9, 98–96, 43 | 36% | 24% | 14% | 12% |
| g8 | Pot is too big | Ace-high | A6–A4, A2 | 21% | 17% | 16% | 15% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| A8 | flush | 99% | 99% | 98% | 98% | 50–100bb | g1 |
| AQ | flush | 99% | 99% | 98% | 98% | 50–100bb | g1 |
| A7 | flush | 99% | 98% | 98% | 96% | 50–100bb | g1 |
| AK | flush | 99% | 98% | 98% | 96% | 50–100bb | g1 |
| K8 | flush | 98% | 98% | 96% | 94% | 50–100bb | g1 |
| K7 | flush | 97% | 97% | 95% | 93% | 50–100bb | g1 |
| K2 | flush | 97% | 97% | 95% | 93% | 50–100bb | g1 |
| K6 | flush | 97% | 97% | 95% | 92% | 50–100bb | g1 |
| K4 | flush | 97% | 97% | 95% | 92% | 50–100bb | g1 |
| K5 | flush | 97% | 97% | 95% | 92% | 50–100bb | g1 |
| Q7 | flush | 96% | 97% | 94% | 91% | 50–100bb | g1 |
| Q6 | flush | 96% | 97% | 93% | 90% | 50–100bb | g1 |
| Q5 | flush | 96% | 97% | 93% | 89% | 50–100bb | g1 |
| 86 | flushlo | 95% | 95% | 92% | 89% | 50–100bb | g1 |
| 75 | flushlo | 94% | 93% | 92% | 87% | 50–100bb | g1 |
| 76 | flushlo | 94% | 95% | 91% | 87% | 50–100bb | g1 |
| 64 | flushlo | 94% | 94% | 91% | 86% | 50–100bb | g1 |
| 65 | flushlo | 93% | 94% | 91% | 86% | 50–100bb | g1 |
| 54 | flushlo | 92% | 93% | 90% | 84% | 50–100bb | g1 |
| KQ | straight | 90% | 90% | 84% | 76% | 50–100bb | g1 |
| Q8 | straight | 88% | 87% | 82% | 75% | 50–100bb | g1 |
| 87 | straight | 84% | 84% | 79% | 71% | 50–100bb | g1 |
| 33 | twopair | 83% | 80% | 78% | 71% | 50–100bb | g1 |
| TT | twopair | 81% | 78% | 70% | 68% | 50–100bb | g1 |
| 99 | twopair | 80% | 78% | 74% | 64% | 50–100bb | g1 |
| JJ | twopair | 80% | 77% | 71% | 56% | 50–100bb | g1 |
| J9 | twopair | 73% | 67% | 62% | 48% | 25–50bb | g2 |
| JT | twopair | 74% | 69% | 64% | 53% | 50–100bb | g2 |
| T9 | twopair | 68% | 61% | 53% | 43% | 25–50bb | g2 |
| QQ | op | 74% | 70% | 63% | 49% | 25–50bb | g3 |
| KK | op | 70% | 66% | 58% | 45% | 25–50bb | g3 |
| AA | op | 66% | 59% | 51% | 38% | 25–50bb | g3 |
| AJ | tpgk | 65% | 59% | 50% | 34% | 5–15bb | g4 |
| KJ | tpgk | 69% | 62% | 54% | 36% | 25–50bb | g4 |
| QJ | tpmk | 69% | 62% | 53% | 34% | 25–50bb | g4 |
| J8 | tpmk | 66% | 55% | 47% | 25% | 5–15bb | g5 |
| J7 | tpmk | 62% | 51% | 44% | 21% | 5–15bb | g5 |
| QT | mp | 56% | 44% | 27% | 18% | 0–5bb | g6 |
| KT | mp | 55% | 43% | 25% | 12% | 0–5bb | g6 |
| AT | mp | 52% | 40% | 23% | 7% | 0–5bb | g6 |
| T8 | mp | 52% | 37% | 22% | 16% | 0–5bb | g6 |
| T7 | mp | 47% | 31% | 16% | 11% | Pot is too big | g6 |
| K3 | bp | 50% | 44% | 41% | 39% | Pot is too big | g7 |
| Q9 | bp | 45% | 33% | 19% | 16% | Pot is too big | g7 |
| K9 | bp | 44% | 31% | 13% | 12% | Pot is too big | g7 |
| 43 | bp | 44% | 38% | 36% | 33% | Pot is too big | g7 |
| 98 | bp | 43% | 29% | 18% | 14% | Pot is too big | g7 |
| A9 | bp | 40% | 28% | 8% | 6% | Pot is too big | g7 |
| 88 | spp | 39% | 26% | 15% | 13% | Pot is too big | g7 |
| 97 | bp | 38% | 24% | 12% | 10% | Pot is too big | g7 |
| 96 | bp | 34% | 21% | 7% | 5% | Pot is too big | g7 |
| 77 | spp | 33% | 18% | 8% | 8% | Pot is too big | g7 |
| A3 | bp | 31% | 23% | 21% | 19% | Pot is too big | g7 |
| 66 | spp | 25% | 11% | 3% | 3% | Pot is too big | g7 |
| 55 | spp | 21% | 9% | 4% | 3% | Pot is too big | g7 |
| 44 | spp | 19% | 7% | 3% | 3% | Pot is too big | g7 |
| 22 | spp | 12% | 5% | 3% | 3% | Pot is too big | g7 |
| A6 | khnd | 22% | 18% | 16% | 15% | Pot is too big | g8 |
| A5 | khnd | 21% | 18% | 16% | 15% | Pot is too big | g8 |
| A4 | khnd | 21% | 17% | 16% | 15% | Pot is too big | g8 |
| A2 | khnd | 20% | 17% | 16% | 15% | Pot is too big | g8 |
