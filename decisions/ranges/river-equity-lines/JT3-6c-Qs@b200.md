# JT3-6c-Qs@b200 river (J♠ T♠ 3♣ 6♣ Q♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♠ flushes: AK, A9–A2, K9–K2, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 98% | 99% | 99% | 99% |
| g2 | 25–50bb | Straights | AK, K9, 98 | 93% | 95% | 93% | 95% |
| g3 | 15–25bb | Sets | QQ–TT, 66, 33 | 92% | 94% | 89% | 93% |
| g4 | 15–25bb | Two pair | QJ, QT | 84% | 69% | 49% | 69% |
| g5 | 0–5bb | Overpairs | AA, KK | 69% | 32% | 4% | 32% |
| g6 | 0–5bb | Two pair | Q6, JT | 75% | 45% | 17% | 46% |
| g7 | 0–5bb | Top pair | AQ, KQ, Q9–Q7, Q5 | 73% | 40% | 2% | 40% |
| g8 | 0–5bb | Second pair | AJ, KJ, J9–J7 | 58% | 25% | 0% | 25% |
| g9 | 0–5bb | Small pairs | 99–77, 55, 44, 22, AT, A6, A3, KT, K6, K3, T9–T7, 96, 86, 76, 65, 64, 43 | 14% | 6% | 0% | 6% |
| g10 | Pot is too big | Ace-high | A9–A7, A5, A4, A2 | 3% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AK+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 98+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 99% | 100% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A5+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A6+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K3+fl | flush | 98% | 99% | 99% | 99% | 50–100bb | g1 |
| K6+fl | flush | 98% | 99% | 99% | 99% | 50–100bb | g1 |
| K8+fl | flush | 98% | 99% | 99% | 99% | 50–100bb | g1 |
| K2+fl | flush | 97% | 99% | 98% | 99% | 50–100bb | g1 |
| 96+fl | flush | 97% | 99% | 98% | 99% | 50–100bb | g1 |
| K7+fl | flush | 98% | 99% | 99% | 99% | 50–100bb | g1 |
| 43+fl | flushlo | 97% | 99% | 98% | 99% | 50–100bb | g1 |
| K5+fl | flush | 97% | 99% | 98% | 99% | 50–100bb | g1 |
| K4+fl | flush | 97% | 99% | 98% | 99% | 50–100bb | g1 |
| 76+fl | flushlo | 97% | 99% | 98% | 99% | 50–100bb | g1 |
| 97+fl | flush | 98% | 99% | 98% | 99% | 50–100bb | g1 |
| 87+fl | flushlo | 98% | 98% | 98% | 98% | 50–100bb | g1 |
| 86+fl | flushlo | 98% | 99% | 98% | 98% | 50–100bb | g1 |
| 65+fl | flushlo | 97% | 98% | 98% | 98% | 50–100bb | g1 |
| 64+fl | flushlo | 97% | 99% | 97% | 98% | 50–100bb | g1 |
| 75+fl | flushlo | 97% | 98% | 98% | 98% | 50–100bb | g1 |
| 54+fl | flushlo | 95% | 96% | 94% | 96% | 50–100bb | g1 |
| AK | straight | 93% | 95% | 93% | 95% | 50–100bb | g2 |
| K9 | straight | 93% | 95% | 93% | 95% | 50–100bb | g2 |
| 98 | straight | 92% | 94% | 92% | 94% | 50–100bb | g2 |
| 33 | twopair | 94% | 96% | 94% | 96% | 50–100bb | g3 |
| 66 | twopair | 94% | 96% | 94% | 95% | 50–100bb | g3 |
| TT | twopair | 91% | 93% | 90% | 93% | 50–100bb | g3 |
| QQ | twopair | 92% | 91% | 81% | 91% | 50–100bb | g3 |
| JJ | twopair | 90% | 91% | 87% | 91% | 50–100bb | g3 |
| QJ | twopair | 88% | 80% | 68% | 80% | 50–100bb | g4 |
| QT | twopair | 81% | 58% | 31% | 57% | 50–100bb | g4 |
| KK | op | 69% | 29% | 3% | 28% | 0–5bb | g5 |
| AA | op | 68% | 35% | 5% | 36% | 0–5bb | g5 |
| JT | twopair | 73% | 43% | 18% | 45% | 0–5bb | g6 |
| Q6 | twopair | 80% | 50% | 15% | 50% | 5–15bb | g6 |
| Q9 | tpmk | 74% | 39% | 1% | 39% | 0–5bb | g7 |
| Q5 | tpmk | 74% | 40% | 0% | 39% | 0–5bb | g7 |
| Q7 | tpmk | 73% | 40% | 0% | 41% | 0–5bb | g7 |
| Q8 | tpmk | 73% | 40% | 0% | 40% | 0–5bb | g7 |
| AQ | tpgk | 73% | 42% | 4% | 43% | 0–5bb | g7 |
| KQ | tpgk | 73% | 38% | 3% | 38% | 0–5bb | g7 |
| AJ | mp | 64% | 31% | 0% | 33% | 0–5bb | g8 |
| KJ | mp | 59% | 25% | 0% | 25% | 0–5bb | g8 |
| J9 | mp | 52% | 19% | 0% | 19% | 0–5bb | g8 |
| J8 | mp | 51% | 17% | 0% | 17% | 0–5bb | g8 |
| J7 | mp | 48% | 18% | 0% | 17% | 0–5bb | g8 |
| AT | bp | 29% | 12% | 0% | 12% | 0–5bb | g9 |
| KT | bp | 24% | 10% | 0% | 10% | 0–5bb | g9 |
| T9 | bp | 20% | 7% | 0% | 7% | 0–5bb | g9 |
| T8 | bp | 18% | 6% | 0% | 6% | 0–5bb | g9 |
| T7 | bp | 14% | 6% | 0% | 5% | 0–5bb | g9 |
| 88 | spp | 14% | 4% | 0% | 5% | 0–5bb | g9 |
| 77 | spp | 12% | 5% | 0% | 5% | 0–5bb | g9 |
| 99 | spp | 12% | 5% | 0% | 5% | 0–5bb | g9 |
| K6 | bp | 12% | 5% | 0% | 5% | 0–5bb | g9 |
| 86 | bp | 11% | 4% | 0% | 4% | 0–5bb | g9 |
| 96 | bp | 10% | 5% | 0% | 5% | 0–5bb | g9 |
| 65 | bp | 10% | 5% | 0% | 4% | 0–5bb | g9 |
| 76 | bp | 10% | 5% | 0% | 4% | 0–5bb | g9 |
| A6 | bp | 10% | 4% | 0% | 4% | 0–5bb | g9 |
| 64 | bp | 10% | 5% | 0% | 5% | 0–5bb | g9 |
| 44 | spp | 10% | 4% | 0% | 4% | 0–5bb | g9 |
| 55 | spp | 9% | 4% | 0% | 4% | 0–5bb | g9 |
| K3 | bp | 8% | 3% | 0% | 3% | 0–5bb | g9 |
| A3 | bp | 7% | 3% | 0% | 3% | 0–5bb | g9 |
| 43 | bp | 7% | 2% | 0% | 2% | 0–5bb | g9 |
| 22 | spp | 5% | 2% | 0% | 2% | 0–5bb | g9 |
| A9 | khnd | 5% | 1% | 0% | 1% | Pot is too big | g10 |
| A8 | khnd | 4% | 1% | 0% | 1% | Pot is too big | g10 |
| A7 | khnd | 2% | 0% | 0% | 0% | Pot is too big | g10 |
| A4 | khnd | 2% | 0% | 0% | 0% | Pot is too big | g10 |
| A2 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g10 |
| A5 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g10 |
