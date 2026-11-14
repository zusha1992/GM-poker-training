# JT3-9s-2d river (J♠ T♠ 3♣ 9♠ 2♦): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes, straights & sets | JJ–99, 33, 22, KQ, Q8, 87 · ♠ flushes: AK, AQ, A8–A2, KQ, K8–K2, Q8–Q5, 87, 86, 76, 75, 65, 64, 54, 43 | 95% | 96% | 94% | 82% |
| g2 | 15–25bb | Two pair | JT, J9, T9 | 84% | 83% | 75% | 50% |
| g3 | 0–5bb | Overpairs | AA–QQ | 77% | 69% | 55% | 46% |
| g4 | 0–5bb | Top pair | AJ, KJ, QJ, J8, J7 | 70% | 57% | 30% | 39% |
| g5 | 0–5bb | Second pair | AT, KT, QT, T8, T7 | 43% | 21% | 0% | 23% |
| g6 | 0–5bb | Small pairs | 88–44, A9, A3, A2, K9, K3, K2, Q9, 98–96, 43 | 13% | 2% | 0% | 8% |
| g7 | Pot is too big | Ace-high | AK, AQ, A8–A4 | 1% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| A8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KQ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| Q8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 87+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AQ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| Q7+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| Q6+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| Q5+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 86+fl | flushlo | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| A6+fl | flush | 99% | 99% | 99% | 98% | 50–100bb | g1 |
| A2+fl | flush | 99% | 99% | 99% | 98% | 50–100bb | g1 |
| A5+fl | flush | 99% | 99% | 98% | 98% | 50–100bb | g1 |
| AK+fl | flush | 99% | 99% | 99% | 98% | 50–100bb | g1 |
| A4+fl | flush | 99% | 99% | 98% | 98% | 50–100bb | g1 |
| A3+fl | flush | 99% | 99% | 99% | 98% | 50–100bb | g1 |
| A7+fl | flush | 99% | 99% | 99% | 98% | 50–100bb | g1 |
| K2+fl | flush | 99% | 99% | 98% | 98% | 50–100bb | g1 |
| K5+fl | flush | 99% | 99% | 98% | 98% | 50–100bb | g1 |
| K3+fl | flush | 99% | 99% | 98% | 98% | 50–100bb | g1 |
| 43+fl | flushlo | 99% | 99% | 98% | 97% | 50–100bb | g1 |
| K4+fl | flush | 99% | 99% | 98% | 97% | 50–100bb | g1 |
| K7+fl | flush | 99% | 99% | 99% | 97% | 50–100bb | g1 |
| K6+fl | flush | 99% | 99% | 98% | 97% | 50–100bb | g1 |
| 64+fl | flushlo | 98% | 99% | 98% | 96% | 50–100bb | g1 |
| 65+fl | flushlo | 98% | 99% | 99% | 96% | 50–100bb | g1 |
| 75+fl | flushlo | 98% | 99% | 99% | 96% | 50–100bb | g1 |
| 76+fl | flushlo | 98% | 99% | 98% | 96% | 50–100bb | g1 |
| 54+fl | flushlo | 98% | 99% | 98% | 96% | 50–100bb | g1 |
| KQ | straight | 96% | 98% | 97% | 85% | 50–100bb | g1 |
| Q8 | straight | 92% | 96% | 94% | 67% | 50–100bb | g1 |
| 87 | straight | 89% | 93% | 91% | 61% | 50–100bb | g1 |
| 33 | twopair | 88% | 90% | 86% | 60% | 50–100bb | g1 |
| 22 | twopair | 89% | 90% | 86% | 59% | 50–100bb | g1 |
| TT | twopair | 87% | 89% | 87% | 55% | 50–100bb | g1 |
| 99 | twopair | 87% | 90% | 85% | 54% | 50–100bb | g1 |
| JJ | twopair | 85% | 87% | 76% | 54% | 50–100bb | g1 |
| T9 | twopair | 80% | 76% | 68% | 45% | 25–50bb | g2 |
| JT | twopair | 85% | 87% | 80% | 53% | 50–100bb | g2 |
| J9 | twopair | 86% | 85% | 75% | 51% | 50–100bb | g2 |
| AA | op | 76% | 71% | 55% | 42% | 25–50bb | g3 |
| KK | op | 77% | 68% | 55% | 48% | 25–50bb | g3 |
| QQ | op | 77% | 67% | 54% | 47% | 25–50bb | g3 |
| AJ | tpgk | 76% | 68% | 46% | 41% | 15–25bb | g4 |
| QJ | tpmk | 67% | 49% | 18% | 37% | 0–5bb | g4 |
| KJ | tpgk | 72% | 61% | 38% | 43% | 15–25bb | g4 |
| J8 | tpmk | 61% | 43% | 8% | 32% | 0–5bb | g4 |
| J7 | tpmk | 60% | 41% | 5% | 32% | 0–5bb | g4 |
| AT | mp | 48% | 26% | 0% | 26% | 0–5bb | g5 |
| KT | mp | 46% | 24% | 0% | 25% | 0–5bb | g5 |
| QT | mp | 39% | 17% | 0% | 21% | 0–5bb | g5 |
| T8 | mp | 32% | 12% | 0% | 16% | 0–5bb | g5 |
| T7 | mp | 31% | 12% | 0% | 14% | 0–5bb | g5 |
| A9 | bp | 26% | 8% | 0% | 14% | 0–5bb | g6 |
| K9 | bp | 26% | 7% | 0% | 14% | 0–5bb | g6 |
| Q9 | bp | 22% | 3% | 0% | 13% | 0–5bb | g6 |
| 98 | bp | 19% | 0% | 0% | 10% | 0–5bb | g6 |
| 96 | bp | 17% | 0% | 0% | 10% | 0–5bb | g6 |
| 97 | bp | 17% | 0% | 0% | 9% | 0–5bb | g6 |
| 88 | spp | 15% | 0% | 0% | 10% | 0–5bb | g6 |
| 77 | spp | 13% | 0% | 0% | 8% | 0–5bb | g6 |
| 66 | spp | 10% | 0% | 0% | 7% | 0–5bb | g6 |
| 55 | spp | 7% | 0% | 0% | 5% | 0–5bb | g6 |
| 44 | spp | 5% | 0% | 0% | 5% | 0–5bb | g6 |
| A3 | bp | 4% | 0% | 0% | 3% | 0–5bb | g6 |
| K3 | bp | 3% | 0% | 0% | 3% | 0–5bb | g6 |
| 43 | bp | 2% | 0% | 0% | 1% | 0–5bb | g6 |
| K2 | bp | 2% | 0% | 0% | 1% | 0–5bb | g6 |
| A2 | bp | 2% | 0% | 0% | 1% | 0–5bb | g6 |
| AQ | khnd | 2% | 0% | 0% | 1% | Pot is too big | g7 |
| AK | khnd | 2% | 0% | 0% | 1% | Pot is too big | g7 |
| A8 | khnd | 2% | 0% | 0% | 1% | Pot is too big | g7 |
| A7 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g7 |
| A5 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g7 |
| A6 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g7 |
| A4 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g7 |
