# JT3-9s-2d river (J♠ T♠ 3♣ 9♠ 2♦): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes, straights & sets | JJ–99, 33, 22, KQ, Q8, 87 · ♠ flushes: AK, AQ, A8–A2, KQ, K8–K2, Q8–Q5, 87, 86, 76, 75, 65, 64, 54, 43 | 95% | 96% | 94% | 82% |
| g2 | 50–100bb | Two pair | JT, J9, T9 | 83% | 84% | 76% | 51% |
| g3 | 25–50bb | Overpairs | AA–QQ | 78% | 69% | 55% | 46% |
| g4 | 15–25bb | Top pair, good kicker | AJ, KJ | 72% | 65% | 42% | 42% |
| g5 | 0–5bb | Top pair | QJ, J8, J7 | 63% | 46% | 14% | 35% |
| g6 | Pot is too big | Second pair | AT, KT, QT, T8, T7 | 42% | 22% | 0% | 23% |
| g7 | Pot is too big | Small pairs | 88–44, A9, A3, A2, K9, K3, K2, Q9, 98–96, 43 | 13% | 2% | 0% | 8% |
| g8 | Pot is too big | Ace-high | AK, AQ, A8–A4 | 2% | 0% | 0% | 0% |

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
| A3+fl | flush | 99% | 99% | 99% | 98% | 50–100bb | g1 |
| 86+fl | flushlo | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| A7+fl | flush | 100% | 99% | 99% | 98% | 50–100bb | g1 |
| A2+fl | flush | 99% | 99% | 98% | 98% | 50–100bb | g1 |
| A5+fl | flush | 99% | 99% | 99% | 98% | 50–100bb | g1 |
| 43+fl | flushlo | 99% | 99% | 98% | 98% | 50–100bb | g1 |
| A6+fl | flush | 99% | 99% | 99% | 98% | 50–100bb | g1 |
| A4+fl | flush | 99% | 99% | 98% | 98% | 50–100bb | g1 |
| K7+fl | flush | 99% | 99% | 99% | 98% | 50–100bb | g1 |
| AK+fl | flush | 99% | 99% | 98% | 98% | 50–100bb | g1 |
| K6+fl | flush | 99% | 99% | 98% | 98% | 50–100bb | g1 |
| K2+fl | flush | 99% | 99% | 98% | 98% | 50–100bb | g1 |
| K3+fl | flush | 99% | 99% | 99% | 98% | 50–100bb | g1 |
| K5+fl | flush | 99% | 99% | 98% | 97% | 50–100bb | g1 |
| 76+fl | flushlo | 98% | 99% | 99% | 97% | 50–100bb | g1 |
| K4+fl | flush | 99% | 99% | 98% | 97% | 50–100bb | g1 |
| 75+fl | flushlo | 98% | 99% | 98% | 96% | 50–100bb | g1 |
| 64+fl | flushlo | 97% | 99% | 98% | 96% | 50–100bb | g1 |
| 65+fl | flushlo | 98% | 99% | 99% | 96% | 50–100bb | g1 |
| 54+fl | flushlo | 98% | 99% | 99% | 96% | 50–100bb | g1 |
| KQ | straight | 96% | 98% | 97% | 84% | 50–100bb | g1 |
| Q8 | straight | 91% | 95% | 93% | 67% | 50–100bb | g1 |
| 87 | straight | 89% | 94% | 90% | 61% | 50–100bb | g1 |
| 33 | twopair | 88% | 89% | 85% | 60% | 50–100bb | g1 |
| 22 | twopair | 88% | 89% | 85% | 59% | 50–100bb | g1 |
| 99 | twopair | 87% | 89% | 85% | 54% | 50–100bb | g1 |
| TT | twopair | 87% | 90% | 87% | 54% | 50–100bb | g1 |
| JJ | twopair | 86% | 88% | 76% | 53% | 50–100bb | g1 |
| T9 | twopair | 80% | 77% | 68% | 46% | 25–50bb | g2 |
| JT | twopair | 85% | 87% | 80% | 53% | 50–100bb | g2 |
| J9 | twopair | 84% | 86% | 76% | 52% | 50–100bb | g2 |
| AA | op | 76% | 70% | 56% | 43% | 25–50bb | g3 |
| KK | op | 78% | 68% | 55% | 49% | 25–50bb | g3 |
| QQ | op | 78% | 68% | 54% | 46% | 25–50bb | g3 |
| AJ | tpgk | 74% | 68% | 47% | 42% | 15–25bb | g4 |
| KJ | tpgk | 71% | 61% | 38% | 43% | 15–25bb | g4 |
| QJ | tpmk | 65% | 48% | 19% | 37% | 0–5bb | g5 |
| J8 | tpmk | 60% | 41% | 7% | 32% | 0–5bb | g5 |
| J7 | tpmk | 59% | 41% | 4% | 32% | 0–5bb | g5 |
| AT | mp | 47% | 28% | 0% | 26% | Pot is too big | g6 |
| KT | mp | 45% | 24% | 0% | 25% | Pot is too big | g6 |
| QT | mp | 38% | 17% | 0% | 21% | Pot is too big | g6 |
| T8 | mp | 32% | 12% | 0% | 16% | Pot is too big | g6 |
| T7 | mp | 31% | 11% | 0% | 14% | Pot is too big | g6 |
| A9 | bp | 28% | 7% | 0% | 13% | Pot is too big | g7 |
| K9 | bp | 25% | 7% | 0% | 15% | Pot is too big | g7 |
| Q9 | bp | 23% | 3% | 0% | 12% | Pot is too big | g7 |
| 98 | bp | 19% | 0% | 0% | 11% | Pot is too big | g7 |
| 97 | bp | 18% | 0% | 0% | 10% | Pot is too big | g7 |
| 96 | bp | 17% | 0% | 0% | 10% | Pot is too big | g7 |
| 88 | spp | 16% | 0% | 0% | 10% | Pot is too big | g7 |
| 77 | spp | 12% | 0% | 0% | 8% | Pot is too big | g7 |
| 66 | spp | 10% | 0% | 0% | 7% | Pot is too big | g7 |
| 55 | spp | 7% | 0% | 0% | 5% | Pot is too big | g7 |
| 44 | spp | 5% | 0% | 0% | 5% | Pot is too big | g7 |
| A3 | bp | 4% | 0% | 0% | 3% | Pot is too big | g7 |
| K3 | bp | 4% | 0% | 0% | 3% | Pot is too big | g7 |
| A2 | bp | 2% | 0% | 0% | 1% | Pot is too big | g7 |
| 43 | bp | 2% | 0% | 0% | 1% | Pot is too big | g7 |
| K2 | bp | 2% | 0% | 0% | 1% | Pot is too big | g7 |
| AK | khnd | 2% | 0% | 0% | 1% | Pot is too big | g8 |
| AQ | khnd | 2% | 0% | 0% | 1% | Pot is too big | g8 |
| A8 | khnd | 2% | 0% | 0% | 0% | Pot is too big | g8 |
| A5 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g8 |
| A7 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g8 |
| A6 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g8 |
| A4 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g8 |
