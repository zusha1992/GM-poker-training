# JT3-9s turn (J♠ T♠ 3♣ 9♠): equity groups

Generated 2026-11-13 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes, straights & sets | JJ–99, 33, AK, AQ, A8, A7, KQ, K8–K4, K2, Q8–Q5, 87, 86, 76, 75, 65, 64, 54 | 89% | 89% | 85% | 79% |
| g2 | 15–25bb | Two pair | JT, J9, T9 | 72% | 67% | 60% | 49% |
| g3 | 15–25bb | Overpairs with a flush draw | AA–QQ with a ♠ | 79% | 75% | 67% | 56% |
| g4 | 0–5bb | Overpairs, no flush draw | AA–QQ | 70% | 65% | 57% | 45% |
| g5 | 0–5bb | Top pair | AJ, KJ, QJ, J8, J7 | 69% | 62% | 53% | 35% |
| g6 | 0–5bb | Second pair | AT, KT, QT, T8, T7 | 57% | 44% | 28% | 17% |
| g7 | 0–5bb | Small pairs | 88–44, 22, A9, A3, K9, K3, Q9, 98–96, 43 | 38% | 26% | 18% | 16% |
| g8 | Pot is too big | Ace-high | A6–A4, A2 | 21% | 18% | 16% | 15% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| A8 | flush | 99% | 98% | 98% | 98% | 50–100bb | g1 |
| AQ | flush | 99% | 98% | 99% | 97% | 50–100bb | g1 |
| AK | flush | 99% | 98% | 97% | 97% | 50–100bb | g1 |
| A7 | flush | 99% | 97% | 97% | 96% | 50–100bb | g1 |
| K8 | flush | 98% | 98% | 96% | 94% | 50–100bb | g1 |
| K2 | flush | 97% | 97% | 95% | 93% | 50–100bb | g1 |
| K4 | flush | 97% | 97% | 95% | 93% | 50–100bb | g1 |
| K7 | flush | 97% | 97% | 96% | 93% | 50–100bb | g1 |
| K6 | flush | 97% | 97% | 95% | 92% | 50–100bb | g1 |
| K5 | flush | 96% | 97% | 95% | 92% | 50–100bb | g1 |
| Q7 | flush | 96% | 97% | 94% | 91% | 50–100bb | g1 |
| Q5 | flush | 96% | 97% | 93% | 90% | 50–100bb | g1 |
| Q6 | flush | 96% | 96% | 93% | 89% | 50–100bb | g1 |
| 86 | flushlo | 95% | 95% | 93% | 89% | 50–100bb | g1 |
| 76 | flushlo | 94% | 94% | 92% | 88% | 50–100bb | g1 |
| 75 | flushlo | 94% | 94% | 92% | 88% | 50–100bb | g1 |
| 64 | flushlo | 93% | 94% | 92% | 87% | 50–100bb | g1 |
| 65 | flushlo | 93% | 94% | 91% | 86% | 50–100bb | g1 |
| 54 | flushlo | 93% | 94% | 89% | 85% | 50–100bb | g1 |
| KQ | straight | 90% | 91% | 84% | 77% | 50–100bb | g1 |
| Q8 | straight | 88% | 87% | 82% | 75% | 50–100bb | g1 |
| 33 | twopair | 82% | 79% | 79% | 72% | 50–100bb | g1 |
| 87 | straight | 84% | 84% | 79% | 71% | 50–100bb | g1 |
| TT | twopair | 81% | 78% | 70% | 67% | 50–100bb | g1 |
| 99 | twopair | 80% | 78% | 73% | 64% | 50–100bb | g1 |
| JJ | twopair | 80% | 78% | 71% | 55% | 50–100bb | g1 |
| J9 | twopair | 72% | 67% | 62% | 48% | 25–50bb | g2 |
| JT | twopair | 74% | 69% | 62% | 53% | 50–100bb | g2 |
| T9 | twopair | 68% | 62% | 53% | 42% | 25–50bb | g2 |
| QQ+fd | op | 81% | 79% | 70% | 59% | 50–100bb | g3 |
| KK+fd | op | 80% | 76% | 67% | 57% | 50–100bb | g3 |
| AA+fd | op | 76% | 71% | 63% | 52% | 50–100bb | g3 |
| KK | op | 72% | 66% | 59% | 47% | 25–50bb | g4 |
| AA | op | 65% | 59% | 50% | 39% | 25–50bb | g4 |
| QQ | op | 74% | 71% | 63% | 50% | 50–100bb | g4 |
| QJ | tpmk | 71% | 63% | 55% | 35% | 25–50bb | g5 |
| KJ | tpgk | 71% | 66% | 55% | 39% | 25–50bb | g5 |
| J8 | tpmk | 65% | 55% | 48% | 26% | 5–15bb | g5 |
| AJ | tpgk | 69% | 62% | 53% | 37% | 25–50bb | g5 |
| J7 | tpmk | 62% | 50% | 43% | 20% | 5–15bb | g5 |
| QT | mp | 60% | 46% | 30% | 22% | 0–5bb | g6 |
| KT | mp | 58% | 47% | 29% | 17% | 0–5bb | g6 |
| AT | mp | 56% | 43% | 27% | 11% | 0–5bb | g6 |
| T8 | mp | 51% | 38% | 21% | 16% | 0–5bb | g6 |
| T7 | mp | 49% | 33% | 15% | 11% | Pot is too big | g6 |
| K3 | bp | 51% | 43% | 41% | 40% | 0–5bb | g7 |
| Q9 | bp | 50% | 36% | 23% | 21% | 0–5bb | g7 |
| K9 | bp | 49% | 35% | 18% | 16% | Pot is too big | g7 |
| 88 | spp | 47% | 32% | 22% | 21% | Pot is too big | g7 |
| A9 | bp | 44% | 31% | 13% | 11% | Pot is too big | g7 |
| 43 | bp | 44% | 38% | 35% | 33% | Pot is too big | g7 |
| 98 | bp | 43% | 28% | 17% | 15% | Pot is too big | g7 |
| 97 | bp | 38% | 24% | 11% | 9% | Pot is too big | g7 |
| 77 | spp | 38% | 25% | 17% | 15% | Pot is too big | g7 |
| 96 | bp | 34% | 20% | 7% | 5% | Pot is too big | g7 |
| A3 | bp | 32% | 25% | 23% | 22% | Pot is too big | g7 |
| 66 | spp | 31% | 18% | 13% | 11% | Pot is too big | g7 |
| 55 | spp | 27% | 16% | 12% | 11% | Pot is too big | g7 |
| 44 | spp | 25% | 16% | 12% | 11% | Pot is too big | g7 |
| 22 | spp | 19% | 13% | 12% | 10% | Pot is too big | g7 |
| A6 | khnd | 22% | 18% | 16% | 15% | Pot is too big | g8 |
| A5 | khnd | 22% | 18% | 16% | 15% | Pot is too big | g8 |
| A4 | khnd | 21% | 18% | 16% | 15% | Pot is too big | g8 |
| A2 | khnd | 21% | 17% | 17% | 16% | Pot is too big | g8 |
