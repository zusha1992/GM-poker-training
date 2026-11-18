# JT3-9s-2d@xx river (J♠ T♠ 3♣ 9♠ 2♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♠ flushes: AK, AQ, A8–A2, KQ, K8–K2, Q8–Q5, 87, 86, 76, 75, 65, 64, 54, 43 | 98% | 100% | 99% | 94% |
| g2 | 25–50bb | Straights | KQ, Q8, 87 | 90% | 98% | 96% | 74% |
| g3 | 15–25bb | Sets | JJ–99, 33, 22 | 88% | 96% | 90% | 74% |
| g4 | 15–25bb | Two pair | JT, J9, T9 | 84% | 89% | 74% | 73% |
| g5 | 0–5bb | Overpairs | AA–QQ | 80% | 80% | 55% | 73% |
| g6 | 0–5bb | Top pair | AJ, KJ, QJ, J8, J7 | 79% | 78% | 39% | 73% |
| g7 | 0–5bb | Second pair | AT, KT, QT, T8, T7 | 66% | 46% | 0% | 71% |
| g8 | 0–5bb | Small pairs | 88–44, A9, A3, A2, K9, K3, K2, Q9, 98–96, 43 | 41% | 7% | 0% | 66% |
| g9 | Pot is too big | Ace-high | AK, AQ, A8–A4 | 21% | 1% | 0% | 42% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| A8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KQ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| Q8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 87+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AQ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A6+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| A5+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| AK+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| K8+fl | flush | 98% | 100% | 99% | 93% | 50–100bb | g1 |
| K7+fl | flush | 98% | 99% | 98% | 93% | 50–100bb | g1 |
| K3+fl | flush | 98% | 99% | 99% | 93% | 50–100bb | g1 |
| K6+fl | flush | 98% | 99% | 98% | 93% | 50–100bb | g1 |
| K2+fl | flush | 98% | 99% | 99% | 92% | 50–100bb | g1 |
| K4+fl | flush | 98% | 99% | 98% | 91% | 50–100bb | g1 |
| K5+fl | flush | 98% | 99% | 98% | 91% | 50–100bb | g1 |
| Q7+fl | flush | 97% | 100% | 99% | 88% | 50–100bb | g1 |
| Q6+fl | flush | 97% | 99% | 98% | 88% | 50–100bb | g1 |
| Q5+fl | flush | 97% | 99% | 99% | 87% | 50–100bb | g1 |
| 76+fl | flushlo | 97% | 99% | 97% | 87% | 50–100bb | g1 |
| 86+fl | flushlo | 96% | 99% | 98% | 86% | 50–100bb | g1 |
| 75+fl | flushlo | 96% | 99% | 97% | 86% | 50–100bb | g1 |
| 64+fl | flushlo | 96% | 99% | 97% | 85% | 50–100bb | g1 |
| 65+fl | flushlo | 96% | 99% | 97% | 84% | 50–100bb | g1 |
| 43+fl | flushlo | 94% | 99% | 98% | 83% | 50–100bb | g1 |
| 54+fl | flushlo | 95% | 99% | 97% | 83% | 50–100bb | g1 |
| KQ | straight | 91% | 99% | 97% | 75% | 50–100bb | g2 |
| Q8 | straight | 89% | 98% | 94% | 73% | 50–100bb | g2 |
| 87 | straight | 88% | 97% | 94% | 71% | 50–100bb | g2 |
| 22 | twopair | 88% | 96% | 90% | 75% | 50–100bb | g3 |
| 99 | twopair | 88% | 96% | 91% | 74% | 50–100bb | g3 |
| 33 | twopair | 89% | 97% | 92% | 74% | 50–100bb | g3 |
| JJ | twopair | 88% | 96% | 85% | 73% | 50–100bb | g3 |
| TT | twopair | 88% | 96% | 91% | 73% | 50–100bb | g3 |
| JT | twopair | 85% | 92% | 79% | 73% | 50–100bb | g4 |
| J9 | twopair | 85% | 89% | 72% | 73% | 50–100bb | g4 |
| T9 | twopair | 81% | 84% | 67% | 73% | 50–100bb | g4 |
| QQ | op | 81% | 81% | 52% | 74% | 50–100bb | g5 |
| KK | op | 81% | 81% | 57% | 73% | 50–100bb | g5 |
| AA | op | 79% | 79% | 55% | 72% | 50–100bb | g5 |
| KJ | tpgk | 79% | 81% | 45% | 74% | 50–100bb | g6 |
| QJ | tpmk | 78% | 77% | 35% | 74% | 50–100bb | g6 |
| AJ | tpgk | 80% | 81% | 47% | 73% | 50–100bb | g6 |
| J8 | tpmk | 75% | 72% | 23% | 73% | 50–100bb | g6 |
| J7 | tpmk | 75% | 70% | 18% | 72% | 50–100bb | g6 |
| QT | mp | 64% | 42% | 0% | 72% | 50–100bb | g7 |
| T8 | mp | 63% | 37% | 0% | 72% | 50–100bb | g7 |
| KT | mp | 66% | 47% | 0% | 71% | 50–100bb | g7 |
| AT | mp | 67% | 51% | 0% | 71% | 50–100bb | g7 |
| T7 | mp | 60% | 37% | 0% | 70% | 50–100bb | g7 |
| Q9 | bp | 52% | 12% | 0% | 70% | 50–100bb | g8 |
| A9 | bp | 54% | 21% | 0% | 70% | 50–100bb | g8 |
| 88 | spp | 42% | 4% | 0% | 69% | 50–100bb | g8 |
| 98 | bp | 48% | 6% | 0% | 69% | 50–100bb | g8 |
| K9 | bp | 52% | 16% | 0% | 69% | 50–100bb | g8 |
| 97 | bp | 47% | 5% | 0% | 68% | 50–100bb | g8 |
| 77 | spp | 41% | 4% | 0% | 68% | 50–100bb | g8 |
| 66 | spp | 38% | 4% | 0% | 68% | 50–100bb | g8 |
| A3 | bp | 32% | 3% | 0% | 67% | 50–100bb | g8 |
| 44 | spp | 33% | 4% | 0% | 67% | 50–100bb | g8 |
| 96 | bp | 46% | 5% | 0% | 67% | 50–100bb | g8 |
| 55 | spp | 36% | 4% | 0% | 67% | 50–100bb | g8 |
| K3 | bp | 33% | 3% | 0% | 63% | 50–100bb | g8 |
| 43 | bp | 31% | 3% | 0% | 61% | 50–100bb | g8 |
| A2 | bp | 29% | 2% | 0% | 56% | 50–100bb | g8 |
| K2 | bp | 30% | 3% | 0% | 55% | 50–100bb | g8 |
| AQ | khnd | 27% | 2% | 0% | 50% | Pot is too big | g9 |
| AK | khnd | 26% | 2% | 0% | 49% | Pot is too big | g9 |
| A8 | khnd | 24% | 1% | 0% | 47% | Pot is too big | g9 |
| A7 | khnd | 20% | 1% | 0% | 40% | Pot is too big | g9 |
| A6 | khnd | 19% | 0% | 0% | 38% | Pot is too big | g9 |
| A5 | khnd | 16% | 0% | 0% | 36% | Pot is too big | g9 |
| A4 | khnd | 15% | 0% | 0% | 33% | Pot is too big | g9 |
