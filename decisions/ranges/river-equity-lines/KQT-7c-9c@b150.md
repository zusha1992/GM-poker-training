# KQT-7c-9c@b150 river (K♦ Q♣ T♥ 7♣ 9♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♣ flushes: AK, AJ, AT, A8, A6–A2, KJ, KT, K8, K6–K2, JT, J8, T8, 86, 65, 64, 54, 43 | 98% | 100% | 100% | 99% |
| g2 | 25–50bb | Straights | JJ, AJ, KJ, QJ, JT–J7 | 80% | 79% | 79% | 65% |
| g3 | 0–5bb | Straights | 86 | 55% | 40% | 40% | 16% |
| g4 | 0–5bb | Sets | KK, QQ, TT, 99, 77 | 52% | 36% | 36% | 15% |
| g5 | 0–5bb | Overpair | AA | 15% | 0% | 0% | 9% |
| g6 | 0–5bb | Two pair | KQ, KT, K9, K7, QT, Q9, Q7, T9, T7, 97 | 35% | 15% | 15% | 10% |
| g7 | 0–5bb | Top pair | AK, K8, K6–K2 | 16% | 0% | 0% | 6% |
| g8 | 0–5bb | Second pair | AQ, Q8, Q6, Q5 | 11% | 0% | 0% | 3% |
| g9 | 0–5bb | Small pairs | 88, 66–22, AT, A9, A7, T8, 98, 96, 87, 76, 75 | 1% | 0% | 0% | 0% |
| g10 | Pot is too big | Ace-high | A8, A6–A2 | 0% | 0% | 0% | 0% |

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
| KJ+fl | flush | 99% | 100% | 100% | 100% | 50–100bb | g1 |
| K6+fl | flush | 99% | 100% | 100% | 100% | 50–100bb | g1 |
| K8+fl | flush | 99% | 100% | 100% | 100% | 50–100bb | g1 |
| K5+fl | flush | 99% | 100% | 100% | 100% | 50–100bb | g1 |
| K2+fl | flush | 99% | 100% | 100% | 100% | 50–100bb | g1 |
| K3+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K4+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| T8+fl | flushlo | 97% | 100% | 100% | 97% | 50–100bb | g1 |
| JT+fl | flush | 96% | 100% | 100% | 96% | 50–100bb | g1 |
| J8+fl | flush | 95% | 100% | 100% | 96% | 50–100bb | g1 |
| 54+fl | flushlo | 96% | 99% | 99% | 96% | 50–100bb | g1 |
| 43+fl | flushlo | 95% | 99% | 99% | 96% | 50–100bb | g1 |
| 65+fl | flushlo | 95% | 99% | 99% | 95% | 50–100bb | g1 |
| 86+fl | flushlo | 96% | 99% | 99% | 95% | 50–100bb | g1 |
| 64+fl | flushlo | 95% | 99% | 99% | 95% | 50–100bb | g1 |
| AJ | straight | 93% | 99% | 99% | 93% | 50–100bb | g2 |
| JJ | straight | 80% | 79% | 79% | 60% | 50–100bb | g2 |
| QJ | straight | 76% | 73% | 73% | 58% | 50–100bb | g2 |
| J8 | straight | 77% | 73% | 73% | 57% | 50–100bb | g2 |
| JT | straight | 76% | 72% | 72% | 57% | 50–100bb | g2 |
| J7 | straight | 76% | 72% | 71% | 57% | 50–100bb | g2 |
| J9 | straight | 76% | 72% | 73% | 56% | 50–100bb | g2 |
| KJ | straight | 76% | 71% | 71% | 55% | 50–100bb | g2 |
| 86 | straight | 55% | 40% | 40% | 16% | 0–5bb | g3 |
| QQ | twopair | 56% | 41% | 38% | 18% | 0–5bb | g4 |
| 99 | twopair | 54% | 37% | 39% | 16% | 0–5bb | g4 |
| 77 | twopair | 52% | 36% | 36% | 16% | 0–5bb | g4 |
| TT | twopair | 50% | 35% | 36% | 16% | 0–5bb | g4 |
| KK | twopair | 49% | 31% | 31% | 11% | 0–5bb | g4 |
| AA | op | 15% | 0% | 0% | 9% | 0–5bb | g5 |
| KQ | twopair | 51% | 34% | 33% | 14% | 0–5bb | g6 |
| KT | twopair | 45% | 25% | 26% | 10% | 0–5bb | g6 |
| K9 | twopair | 41% | 23% | 21% | 9% | 0–5bb | g6 |
| K7 | twopair | 35% | 16% | 16% | 8% | 0–5bb | g6 |
| QT | twopair | 29% | 8% | 9% | 10% | 0–5bb | g6 |
| Q9 | twopair | 27% | 6% | 7% | 11% | 0–5bb | g6 |
| Q7 | twopair | 25% | 3% | 3% | 10% | 0–5bb | g6 |
| 97 | twopair | 20% | 0% | 0% | 9% | 0–5bb | g6 |
| T9 | twopair | 20% | 2% | 2% | 9% | 0–5bb | g6 |
| T7 | twopair | 18% | 1% | 0% | 9% | 0–5bb | g6 |
| K8 | tpmk | 18% | 0% | 0% | 6% | 0–5bb | g7 |
| AK | tpgk | 16% | 0% | 0% | 7% | 0–5bb | g7 |
| K6 | tpmk | 15% | 0% | 0% | 5% | 0–5bb | g7 |
| K2 | tpmk | 14% | 0% | 0% | 4% | 0–5bb | g7 |
| K5 | tpmk | 14% | 0% | 0% | 4% | 0–5bb | g7 |
| K3 | tpmk | 14% | 0% | 0% | 4% | 0–5bb | g7 |
| K4 | tpmk | 14% | 0% | 0% | 5% | 0–5bb | g7 |
| Q5 | mp | 12% | 0% | 0% | 3% | 0–5bb | g8 |
| Q8 | mp | 11% | 0% | 0% | 3% | 0–5bb | g8 |
| Q6 | mp | 11% | 0% | 0% | 3% | 0–5bb | g8 |
| AQ | mp | 10% | 0% | 0% | 3% | 0–5bb | g8 |
| AT | bp | 5% | 0% | 0% | 2% | 0–5bb | g9 |
| T8 | bp | 2% | 0% | 0% | 1% | 0–5bb | g9 |
| A9 | bp | 1% | 0% | 0% | 0% | 0–5bb | g9 |
| 75 | bp | 1% | 0% | 0% | 0% | 0–5bb | g9 |
| A7 | bp | 1% | 0% | 0% | 0% | 0–5bb | g9 |
| 76 | bp | 1% | 0% | 0% | 0% | 0–5bb | g9 |
| 66 | spp | 1% | 0% | 0% | 0% | 0–5bb | g9 |
| 33 | spp | 1% | 0% | 0% | 0% | 0–5bb | g9 |
| 44 | spp | 1% | 0% | 0% | 0% | 0–5bb | g9 |
| 96 | bp | 1% | 0% | 0% | 0% | 0–5bb | g9 |
| 87 | bp | 0% | 0% | 0% | 0% | 0–5bb | g9 |
| 55 | spp | 0% | 0% | 0% | 0% | 0–5bb | g9 |
| 98 | bp | 0% | 0% | 0% | 0% | 0–5bb | g9 |
| 22 | spp | 0% | 0% | 0% | 0% | 0–5bb | g9 |
| 88 | spp | 0% | 0% | 0% | 0% | 0–5bb | g9 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
| A8 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g10 |
