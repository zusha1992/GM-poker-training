# JT3-9s turn (J♠ T♠ 3♣ 9♠): equity groups

Generated 2026-11-13 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes, straights & sets | JJ–99, 33, AK, AQ, A8, A7, KQ, K8–K4, K2, Q8–Q5, 87, 86, 76, 75, 65, 64, 54 | 89% | 89% | 85% | 79% |
| g2 | 15–25bb | Two pair | JT, J9, T9 | 72% | 67% | 60% | 50% |
| g3 | 15–25bb | Overpairs with a flush draw | AA–QQ with a ♠ | 79% | 74% | 67% | 57% |
| g4 | 5–15bb | Top pair with a flush draw | AJ, KJ, QJ with a ♠ | 78% | 71% | 63% | 47% |
| g5 | 0–5bb | Overpairs, no flush draw | AA–QQ | 70% | 66% | 57% | 45% |
| g6 | 0–5bb | Top pair, no flush draw | AJ, KJ, QJ, J8, J7 | 67% | 59% | 51% | 32% |
| g7 | 0–5bb | Second pair | AT, KT, QT, T8, T7 | 57% | 44% | 28% | 16% |
| g8 | 0–5bb | Small pairs | 88–44, 22, A9, A3, K9, K3, Q9, 98–96, 43 | 38% | 27% | 18% | 16% |
| g9 | Pot is too big | Ace-high | A6–A4, A2 | 21% | 18% | 16% | 15% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| A8 | flush | 99% | 98% | 98% | 98% | 50–100bb | g1 |
| AQ | flush | 99% | 98% | 98% | 98% | 50–100bb | g1 |
| AK | flush | 99% | 98% | 98% | 96% | 50–100bb | g1 |
| A7 | flush | 99% | 98% | 98% | 96% | 50–100bb | g1 |
| K8 | flush | 98% | 98% | 96% | 94% | 50–100bb | g1 |
| K7 | flush | 97% | 97% | 95% | 93% | 50–100bb | g1 |
| K6 | flush | 97% | 97% | 95% | 92% | 50–100bb | g1 |
| K2 | flush | 97% | 97% | 95% | 92% | 50–100bb | g1 |
| K4 | flush | 97% | 97% | 95% | 92% | 50–100bb | g1 |
| K5 | flush | 96% | 97% | 95% | 92% | 50–100bb | g1 |
| Q6 | flush | 96% | 97% | 94% | 91% | 50–100bb | g1 |
| Q7 | flush | 96% | 97% | 94% | 91% | 50–100bb | g1 |
| Q5 | flush | 96% | 97% | 93% | 90% | 50–100bb | g1 |
| 86 | flushlo | 95% | 95% | 93% | 90% | 50–100bb | g1 |
| 76 | flushlo | 94% | 94% | 92% | 88% | 50–100bb | g1 |
| 75 | flushlo | 94% | 94% | 91% | 87% | 50–100bb | g1 |
| 64 | flushlo | 94% | 94% | 92% | 86% | 50–100bb | g1 |
| 65 | flushlo | 93% | 94% | 91% | 86% | 50–100bb | g1 |
| 54 | flushlo | 93% | 94% | 89% | 84% | 50–100bb | g1 |
| KQ | straight | 89% | 90% | 84% | 78% | 50–100bb | g1 |
| Q8 | straight | 87% | 87% | 82% | 76% | 50–100bb | g1 |
| 87 | straight | 86% | 84% | 79% | 71% | 50–100bb | g1 |
| 33 | twopair | 83% | 80% | 79% | 70% | 50–100bb | g1 |
| TT | twopair | 81% | 78% | 72% | 66% | 50–100bb | g1 |
| 99 | twopair | 81% | 77% | 74% | 64% | 50–100bb | g1 |
| JJ | twopair | 80% | 77% | 71% | 55% | 50–100bb | g1 |
| J9 | twopair | 72% | 66% | 62% | 47% | 25–50bb | g2 |
| JT | twopair | 73% | 71% | 63% | 54% | 50–100bb | g2 |
| T9 | twopair | 68% | 61% | 52% | 46% | 25–50bb | g2 |
| QQ+fd | op | 81% | 78% | 70% | 61% | 50–100bb | g3 |
| KK+fd | op | 80% | 76% | 69% | 56% | 50–100bb | g3 |
| AA+fd | op | 76% | 69% | 62% | 53% | 50–100bb | g3 |
| AJ+fd | tpgk | 77% | 69% | 64% | 48% | 25–50bb | g4 |
| KJ+fd | tpgk | 78% | 73% | 63% | 48% | 25–50bb | g4 |
| QJ+fd | tpmk | 77% | 70% | 62% | 45% | 25–50bb | g4 |
| KK | op | 71% | 67% | 58% | 45% | 25–50bb | g5 |
| AA | op | 65% | 59% | 51% | 40% | 25–50bb | g5 |
| QQ | op | 74% | 72% | 62% | 51% | 50–100bb | g5 |
| AJ | tpgk | 67% | 59% | 49% | 33% | 5–15bb | g6 |
| J8 | tpmk | 65% | 55% | 47% | 26% | 5–15bb | g6 |
| KJ | tpgk | 69% | 62% | 54% | 36% | 25–50bb | g6 |
| QJ | tpmk | 70% | 61% | 52% | 33% | 25–50bb | g6 |
| J7 | tpmk | 61% | 51% | 42% | 21% | 5–15bb | g6 |
| QT | mp | 59% | 46% | 30% | 21% | 0–5bb | g7 |
| KT | mp | 58% | 47% | 29% | 17% | 0–5bb | g7 |
| AT | mp | 56% | 43% | 27% | 12% | 0–5bb | g7 |
| T8 | mp | 51% | 38% | 21% | 17% | 0–5bb | g7 |
| T7 | mp | 47% | 32% | 15% | 10% | Pot is too big | g7 |
| K3 | bp | 50% | 43% | 41% | 40% | 0–5bb | g8 |
| Q9 | bp | 50% | 37% | 22% | 20% | Pot is too big | g8 |
| K9 | bp | 46% | 34% | 17% | 16% | Pot is too big | g8 |
| 88 | spp | 45% | 33% | 23% | 21% | Pot is too big | g8 |
| A9 | bp | 45% | 31% | 13% | 11% | Pot is too big | g8 |
| 43 | bp | 44% | 38% | 36% | 33% | Pot is too big | g8 |
| 98 | bp | 43% | 29% | 18% | 15% | Pot is too big | g8 |
| 97 | bp | 39% | 23% | 11% | 9% | Pot is too big | g8 |
| 77 | spp | 38% | 24% | 17% | 15% | Pot is too big | g8 |
| 96 | bp | 35% | 20% | 8% | 6% | Pot is too big | g8 |
| A3 | bp | 33% | 25% | 22% | 22% | Pot is too big | g8 |
| 66 | spp | 31% | 19% | 13% | 11% | Pot is too big | g8 |
| 55 | spp | 29% | 16% | 12% | 11% | Pot is too big | g8 |
| 44 | spp | 25% | 14% | 12% | 11% | Pot is too big | g8 |
| 22 | spp | 19% | 13% | 12% | 10% | Pot is too big | g8 |
| A6 | khnd | 22% | 18% | 16% | 16% | Pot is too big | g9 |
| A5 | khnd | 21% | 19% | 16% | 16% | Pot is too big | g9 |
| A4 | khnd | 21% | 17% | 17% | 15% | Pot is too big | g9 |
| A2 | khnd | 21% | 18% | 16% | 15% | Pot is too big | g9 |
