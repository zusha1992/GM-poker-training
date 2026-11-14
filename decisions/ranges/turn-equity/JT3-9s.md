# JT3-9s turn (J♠ T♠ 3♣ 9♠): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --turn (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small, BB calls. Made hands only (ace-high and better, no draws). Equity of each BTN hand against:
L0 = BB after calling the flop · L1 = BB after calling a turn bet · L2 = BB's middle pair or better · L3 = BB's top pair or better.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes, straights & sets | JJ–99, 33, AK, AQ, A8, A7, KQ, K8–K4, K2, Q8–Q5, 87, 86, 76, 75, 65, 64, 54 | 90% | 89% | 85% | 78% |
| g2 | 15–25bb | Two pair | JT, J9, T9 | 72% | 66% | 60% | 49% |
| g3 | 15–25bb | Overpairs with a flush draw | AA–QQ with a ♠ | 79% | 75% | 67% | 57% |
| g4 | 5–15bb | Top pair with a flush draw | AJ, KJ, QJ with a ♠ | 77% | 71% | 62% | 47% |
| g5 | 0–5bb | Overpairs, no flush draw | AA–QQ | 70% | 65% | 57% | 45% |
| g6 | 0–5bb | Top pair, no flush draw | AJ, KJ, QJ, J8, J7 | 67% | 59% | 51% | 32% |
| g7 | 0–5bb | Second pair | AT, KT, QT, T8, T7 | 57% | 44% | 28% | 16% |
| g8 | 0–5bb | Small pairs | 88–44, 22, A9, A3, K9, K3, Q9, 98–96, 43 | 38% | 26% | 18% | 16% |
| g9 | Pot is too big | Ace-high | A6–A4, A2 | 21% | 18% | 17% | 15% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AQ | flush | 99% | 99% | 99% | 98% | 50–100bb | g1 |
| A8 | flush | 99% | 99% | 98% | 98% | 50–100bb | g1 |
| AK | flush | 99% | 98% | 98% | 96% | 50–100bb | g1 |
| A7 | flush | 99% | 98% | 98% | 96% | 50–100bb | g1 |
| K8 | flush | 97% | 98% | 96% | 94% | 50–100bb | g1 |
| K6 | flush | 97% | 97% | 95% | 93% | 50–100bb | g1 |
| K7 | flush | 97% | 97% | 96% | 93% | 50–100bb | g1 |
| K5 | flush | 96% | 97% | 95% | 92% | 50–100bb | g1 |
| K2 | flush | 97% | 97% | 95% | 92% | 50–100bb | g1 |
| K4 | flush | 97% | 97% | 96% | 92% | 50–100bb | g1 |
| Q6 | flush | 96% | 97% | 93% | 91% | 50–100bb | g1 |
| Q7 | flush | 96% | 97% | 94% | 91% | 50–100bb | g1 |
| 86 | flushlo | 96% | 95% | 93% | 90% | 50–100bb | g1 |
| Q5 | flush | 96% | 97% | 93% | 89% | 50–100bb | g1 |
| 76 | flushlo | 94% | 94% | 92% | 87% | 50–100bb | g1 |
| 75 | flushlo | 95% | 94% | 92% | 86% | 50–100bb | g1 |
| 65 | flushlo | 93% | 94% | 91% | 86% | 50–100bb | g1 |
| 64 | flushlo | 93% | 94% | 91% | 86% | 50–100bb | g1 |
| 54 | flushlo | 92% | 93% | 90% | 84% | 50–100bb | g1 |
| KQ | straight | 90% | 91% | 84% | 77% | 50–100bb | g1 |
| Q8 | straight | 88% | 87% | 83% | 74% | 50–100bb | g1 |
| 87 | straight | 85% | 84% | 79% | 72% | 50–100bb | g1 |
| 33 | twopair | 82% | 79% | 79% | 72% | 50–100bb | g1 |
| TT | twopair | 81% | 78% | 71% | 67% | 50–100bb | g1 |
| 99 | twopair | 80% | 78% | 74% | 65% | 50–100bb | g1 |
| JJ | twopair | 80% | 77% | 71% | 56% | 50–100bb | g1 |
| J9 | twopair | 72% | 67% | 60% | 47% | 25–50bb | g2 |
| JT | twopair | 73% | 68% | 64% | 53% | 50–100bb | g2 |
| T9 | twopair | 69% | 61% | 52% | 44% | 25–50bb | g2 |
| QQ+fd | op | 81% | 79% | 69% | 60% | 50–100bb | g3 |
| KK+fd | op | 80% | 74% | 69% | 58% | 50–100bb | g3 |
| AA+fd | op | 77% | 71% | 63% | 52% | 50–100bb | g3 |
| KJ+fd | tpgk | 78% | 71% | 63% | 49% | 25–50bb | g4 |
| AJ+fd | tpgk | 76% | 70% | 63% | 48% | 25–50bb | g4 |
| QJ+fd | tpmk | 77% | 71% | 61% | 45% | 25–50bb | g4 |
| QQ | op | 73% | 70% | 62% | 49% | 25–50bb | g5 |
| KK | op | 71% | 67% | 59% | 46% | 25–50bb | g5 |
| AA | op | 65% | 59% | 51% | 40% | 25–50bb | g5 |
| J7 | tpmk | 63% | 50% | 42% | 20% | 0–5bb | g6 |
| J8 | tpmk | 65% | 56% | 47% | 26% | 5–15bb | g6 |
| KJ | tpgk | 69% | 62% | 53% | 35% | 25–50bb | g6 |
| QJ | tpmk | 69% | 60% | 52% | 32% | 25–50bb | g6 |
| AJ | tpgk | 66% | 59% | 50% | 35% | 25–50bb | g6 |
| QT | mp | 59% | 46% | 31% | 21% | 0–5bb | g7 |
| KT | mp | 58% | 46% | 30% | 17% | 0–5bb | g7 |
| AT | mp | 56% | 44% | 27% | 11% | 0–5bb | g7 |
| T8 | mp | 53% | 38% | 23% | 16% | 0–5bb | g7 |
| T7 | mp | 47% | 31% | 14% | 10% | Pot is too big | g7 |
| Q9 | bp | 51% | 37% | 23% | 22% | 0–5bb | g8 |
| K3 | bp | 50% | 43% | 41% | 39% | Pot is too big | g8 |
| 88 | spp | 46% | 32% | 22% | 20% | Pot is too big | g8 |
| K9 | bp | 46% | 34% | 17% | 15% | Pot is too big | g8 |
| A9 | bp | 46% | 31% | 13% | 11% | Pot is too big | g8 |
| 98 | bp | 44% | 29% | 18% | 15% | Pot is too big | g8 |
| 43 | bp | 44% | 37% | 36% | 34% | Pot is too big | g8 |
| 77 | spp | 38% | 24% | 17% | 15% | Pot is too big | g8 |
| 97 | bp | 37% | 24% | 12% | 10% | Pot is too big | g8 |
| 96 | bp | 34% | 19% | 7% | 6% | Pot is too big | g8 |
| A3 | bp | 33% | 24% | 23% | 22% | Pot is too big | g8 |
| 66 | spp | 32% | 18% | 12% | 11% | Pot is too big | g8 |
| 55 | spp | 28% | 17% | 12% | 11% | Pot is too big | g8 |
| 44 | spp | 25% | 15% | 13% | 11% | Pot is too big | g8 |
| 22 | spp | 19% | 12% | 12% | 11% | Pot is too big | g8 |
| A6 | khnd | 23% | 18% | 17% | 15% | Pot is too big | g9 |
| A4 | khnd | 21% | 17% | 16% | 16% | Pot is too big | g9 |
| A5 | khnd | 20% | 18% | 16% | 15% | Pot is too big | g9 |
| A2 | khnd | 20% | 17% | 17% | 15% | Pot is too big | g9 |
