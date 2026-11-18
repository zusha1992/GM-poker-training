# KQT-7c-9c@b150 river (K♦ Q♣ T♥ 7♣ 9♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♣ flushes: AK, AJ, AT, A8, A6–A2, KJ, KT, K8, K6–K2, JT, J8, T8, 86, 65, 64, 54, 43 | 98% | 100% | 100% | 99% |
| g2 | 25–50bb | A-high straights | AJ | 92% | 99% | 99% | 93% |
| g3 | 25–50bb | K-high straights | JJ, KJ, QJ, JT–J7 | 76% | 73% | 73% | 57% |
| g4 | 0–5bb | T-high straights | 86 | 54% | 40% | 40% | 17% |
| g5 | 0–5bb | Sets | KK, QQ, TT, 99, 77 | 53% | 36% | 36% | 15% |
| g6 | 0–5bb | Overpair | AA | 15% | 0% | 0% | 9% |
| g7 | 0–5bb | Two pair | KQ, KT, K9, K7, QT, Q9, Q7, T9, T7, 97 | 35% | 15% | 15% | 10% |
| g8 | 0–5bb | Top pair | AK, K8, K6–K2 | 16% | 0% | 0% | 6% |
| g9 | 0–5bb | Second pair | AQ, Q8, Q6, Q5 | 11% | 0% | 0% | 3% |
| g10 | 0–5bb | Small pairs | 88, 66–22, AT, A9, A7, T8, 98, 96, 87, 76, 75 | 1% | 0% | 0% | 0% |
| g11 | Pot is too big | Ace-high | A8, A6–A2 | 0% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AK+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A6+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A5+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K4+fl | flush | 99% | 100% | 100% | 100% | 50–100bb | g1 |
| K5+fl | flush | 99% | 100% | 100% | 100% | 50–100bb | g1 |
| K6+fl | flush | 99% | 100% | 100% | 100% | 50–100bb | g1 |
| K8+fl | flush | 99% | 100% | 100% | 100% | 50–100bb | g1 |
| K3+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K2+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| KJ+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| T8+fl | flushlo | 96% | 100% | 100% | 97% | 50–100bb | g1 |
| 86+fl | flushlo | 96% | 99% | 99% | 96% | 50–100bb | g1 |
| 54+fl | flushlo | 95% | 99% | 99% | 96% | 50–100bb | g1 |
| 64+fl | flushlo | 95% | 99% | 99% | 96% | 50–100bb | g1 |
| J8+fl | flush | 96% | 100% | 100% | 96% | 50–100bb | g1 |
| JT+fl | flush | 96% | 100% | 100% | 96% | 50–100bb | g1 |
| 65+fl | flushlo | 95% | 99% | 99% | 96% | 50–100bb | g1 |
| 43+fl | flushlo | 95% | 99% | 99% | 95% | 50–100bb | g1 |
| AJ | straight | 92% | 99% | 99% | 93% | 50–100bb | g2 |
| JJ | straight | 81% | 79% | 79% | 60% | 50–100bb | g3 |
| QJ | straight | 76% | 73% | 73% | 58% | 50–100bb | g3 |
| JT | straight | 76% | 72% | 72% | 57% | 50–100bb | g3 |
| J7 | straight | 76% | 72% | 72% | 57% | 50–100bb | g3 |
| J8 | straight | 76% | 73% | 73% | 57% | 50–100bb | g3 |
| J9 | straight | 75% | 73% | 73% | 56% | 50–100bb | g3 |
| KJ | straight | 75% | 71% | 71% | 55% | 50–100bb | g3 |
| 86 | straight | 54% | 40% | 40% | 17% | 0–5bb | g4 |
| QQ | twopair | 56% | 41% | 41% | 19% | 0–5bb | g5 |
| 99 | twopair | 54% | 39% | 38% | 15% | 0–5bb | g5 |
| TT | twopair | 52% | 34% | 34% | 16% | 0–5bb | g5 |
| 77 | twopair | 51% | 35% | 36% | 16% | 0–5bb | g5 |
| KK | twopair | 50% | 31% | 31% | 11% | 0–5bb | g5 |
| AA | op | 15% | 0% | 0% | 9% | 0–5bb | g6 |
| KQ | twopair | 52% | 34% | 34% | 14% | 0–5bb | g7 |
| KT | twopair | 45% | 26% | 25% | 10% | 0–5bb | g7 |
| K9 | twopair | 41% | 22% | 22% | 9% | 0–5bb | g7 |
| K7 | twopair | 34% | 16% | 16% | 8% | 0–5bb | g7 |
| QT | twopair | 28% | 8% | 8% | 10% | 0–5bb | g7 |
| Q9 | twopair | 28% | 6% | 7% | 11% | 0–5bb | g7 |
| Q7 | twopair | 25% | 3% | 3% | 10% | 0–5bb | g7 |
| T9 | twopair | 20% | 2% | 1% | 9% | 0–5bb | g7 |
| 97 | twopair | 20% | 0% | 0% | 9% | 0–5bb | g7 |
| T7 | twopair | 18% | 1% | 1% | 8% | 0–5bb | g7 |
| K8 | tpmk | 17% | 0% | 0% | 7% | 0–5bb | g8 |
| AK | tpgk | 16% | 0% | 0% | 8% | 0–5bb | g8 |
| K2 | tpmk | 16% | 0% | 0% | 5% | 0–5bb | g8 |
| K4 | tpmk | 15% | 0% | 0% | 4% | 0–5bb | g8 |
| K3 | tpmk | 14% | 0% | 0% | 4% | 0–5bb | g8 |
| K6 | tpmk | 14% | 0% | 0% | 5% | 0–5bb | g8 |
| K5 | tpmk | 14% | 0% | 0% | 4% | 0–5bb | g8 |
| Q8 | mp | 12% | 0% | 0% | 3% | 0–5bb | g9 |
| Q6 | mp | 12% | 0% | 0% | 3% | 0–5bb | g9 |
| Q5 | mp | 12% | 0% | 0% | 3% | 0–5bb | g9 |
| AQ | mp | 11% | 0% | 0% | 3% | 0–5bb | g9 |
| AT | bp | 5% | 0% | 0% | 2% | 0–5bb | g10 |
| T8 | bp | 3% | 0% | 0% | 1% | 0–5bb | g10 |
| 75 | bp | 1% | 0% | 0% | 0% | 0–5bb | g10 |
| 55 | spp | 1% | 0% | 0% | 0% | 0–5bb | g10 |
| 96 | bp | 1% | 0% | 0% | 0% | 0–5bb | g10 |
| 33 | spp | 1% | 0% | 0% | 0% | 0–5bb | g10 |
| A7 | bp | 1% | 0% | 0% | 0% | 0–5bb | g10 |
| A9 | bp | 1% | 0% | 0% | 0% | 0–5bb | g10 |
| 76 | bp | 1% | 0% | 0% | 0% | 0–5bb | g10 |
| 22 | spp | 1% | 0% | 0% | 0% | 0–5bb | g10 |
| 98 | bp | 0% | 0% | 0% | 0% | 0–5bb | g10 |
| 66 | spp | 0% | 0% | 0% | 0% | 0–5bb | g10 |
| 44 | spp | 0% | 0% | 0% | 0% | 0–5bb | g10 |
| 88 | spp | 0% | 0% | 0% | 0% | 0–5bb | g10 |
| 87 | bp | 0% | 0% | 0% | 0% | 0–5bb | g10 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g11 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g11 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g11 |
| A8 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g11 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g11 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g11 |
