# KQT-7c-9c river (K♦ Q♣ T♥ 7♣ 9♣): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes & straights | JJ, AJ, KJ, QJ, JT–J7 · ♣ flushes: AK, AJ, AT, A8, A6–A2, KJ, KT, K8, K6–K2, JT, J8, T8, 86, 65, 64, 54, 43 | 86% | 85% | 85% | 76% |
| g2 | 0–5bb | Straights & sets | KK, QQ, TT, 99, 77, 86 | 63% | 43% | 43% | 37% |
| g3 | 0–5bb | Two pair | KQ, KT, K9, K7 | 57% | 36% | 35% | 30% |
| g4 | Pot is too big | Overpair | AA | 29% | 6% | 5% | 27% |
| g5 | Pot is too big | Two pair | QT, Q9, Q7, T9, T7, 97 | 42% | 15% | 14% | 30% |
| g6 | Pot is too big | Top pair | AK, K8, K6–K2 | 28% | 4% | 2% | 17% |
| g7 | Pot is too big | Second pair | AQ, Q8, Q6, Q5 | 17% | 2% | 0% | 4% |
| g8 | Pot is too big | Small pairs | 88, 66–22, AT, A9, A7, T8, 98, 96, 87, 76, 75 | 4% | 0% | 0% | 0% |
| g9 | Pot is too big | Ace-high | A8, A6–A2 | 1% | 0% | 0% | 0% |

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
| KT+fl | flush | 99% | 100% | 100% | 100% | 50–100bb | g1 |
| K4+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K6+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K5+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K2+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K3+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| KJ+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K8+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 86+fl | flushlo | 93% | 98% | 99% | 91% | 50–100bb | g1 |
| 43+fl | flushlo | 94% | 98% | 98% | 90% | 50–100bb | g1 |
| 65+fl | flushlo | 94% | 98% | 98% | 90% | 50–100bb | g1 |
| 64+fl | flushlo | 94% | 98% | 98% | 90% | 50–100bb | g1 |
| 54+fl | flushlo | 94% | 98% | 98% | 90% | 50–100bb | g1 |
| T8+fl | flushlo | 93% | 99% | 99% | 90% | 50–100bb | g1 |
| J8+fl | flush | 92% | 99% | 99% | 89% | 50–100bb | g1 |
| JT+fl | flush | 92% | 98% | 98% | 87% | 50–100bb | g1 |
| AJ | straight | 91% | 98% | 98% | 86% | 50–100bb | g1 |
| JJ | straight | 82% | 80% | 80% | 66% | 50–100bb | g1 |
| JT | straight | 79% | 76% | 75% | 65% | 50–100bb | g1 |
| QJ | straight | 80% | 75% | 75% | 65% | 50–100bb | g1 |
| J9 | straight | 79% | 74% | 74% | 64% | 50–100bb | g1 |
| J7 | straight | 79% | 76% | 74% | 64% | 50–100bb | g1 |
| J8 | straight | 80% | 76% | 75% | 63% | 50–100bb | g1 |
| KJ | straight | 80% | 75% | 74% | 62% | 50–100bb | g1 |
| QQ | twopair | 66% | 44% | 43% | 42% | 0–5bb | g2 |
| TT | twopair | 64% | 46% | 45% | 40% | 0–5bb | g2 |
| 86 | straight | 63% | 45% | 46% | 37% | 0–5bb | g2 |
| 99 | twopair | 62% | 41% | 40% | 38% | 0–5bb | g2 |
| KK | twopair | 62% | 40% | 40% | 27% | 0–5bb | g2 |
| 77 | twopair | 62% | 44% | 44% | 38% | 0–5bb | g2 |
| KQ | twopair | 63% | 42% | 41% | 35% | 0–5bb | g3 |
| KT | twopair | 58% | 38% | 36% | 30% | 0–5bb | g3 |
| K9 | twopair | 54% | 31% | 29% | 28% | 0–5bb | g3 |
| K7 | twopair | 51% | 28% | 28% | 26% | 0–5bb | g3 |
| AA | op | 29% | 6% | 5% | 27% | Pot is too big | g4 |
| QT | twopair | 48% | 23% | 22% | 32% | Pot is too big | g5 |
| Q9 | twopair | 45% | 16% | 15% | 31% | Pot is too big | g5 |
| Q7 | twopair | 40% | 11% | 9% | 30% | Pot is too big | g5 |
| T9 | twopair | 36% | 9% | 8% | 30% | Pot is too big | g5 |
| 97 | twopair | 35% | 7% | 5% | 28% | Pot is too big | g5 |
| T7 | twopair | 33% | 8% | 6% | 28% | Pot is too big | g5 |
| K8 | tpmk | 31% | 4% | 2% | 21% | Pot is too big | g6 |
| AK | tpgk | 30% | 5% | 4% | 23% | Pot is too big | g6 |
| K6 | tpmk | 25% | 3% | 0% | 12% | Pot is too big | g6 |
| K5 | tpmk | 25% | 2% | 0% | 10% | Pot is too big | g6 |
| K4 | tpmk | 24% | 3% | 0% | 10% | Pot is too big | g6 |
| K2 | tpmk | 24% | 3% | 0% | 10% | Pot is too big | g6 |
| K3 | tpmk | 24% | 2% | 0% | 11% | Pot is too big | g6 |
| Q6 | mp | 20% | 2% | 0% | 4% | Pot is too big | g7 |
| Q8 | mp | 19% | 2% | 0% | 4% | Pot is too big | g7 |
| Q5 | mp | 19% | 2% | 0% | 5% | Pot is too big | g7 |
| AQ | mp | 16% | 1% | 0% | 4% | Pot is too big | g7 |
| AT | bp | 9% | 1% | 0% | 2% | Pot is too big | g8 |
| T8 | bp | 8% | 0% | 0% | 1% | Pot is too big | g8 |
| 88 | spp | 6% | 0% | 0% | 0% | Pot is too big | g8 |
| 96 | bp | 6% | 0% | 0% | 0% | Pot is too big | g8 |
| 98 | bp | 5% | 0% | 0% | 0% | Pot is too big | g8 |
| A9 | bp | 5% | 0% | 0% | 0% | Pot is too big | g8 |
| A7 | bp | 2% | 0% | 0% | 0% | Pot is too big | g8 |
| 75 | bp | 2% | 0% | 0% | 0% | Pot is too big | g8 |
| 87 | bp | 1% | 0% | 0% | 0% | Pot is too big | g8 |
| 55 | spp | 1% | 0% | 0% | 0% | Pot is too big | g8 |
| 76 | bp | 1% | 0% | 0% | 0% | Pot is too big | g8 |
| 22 | spp | 1% | 0% | 0% | 0% | Pot is too big | g8 |
| 44 | spp | 1% | 0% | 0% | 0% | Pot is too big | g8 |
| 33 | spp | 1% | 0% | 0% | 0% | Pot is too big | g8 |
| 66 | spp | 1% | 0% | 0% | 0% | Pot is too big | g8 |
| A4 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A5 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A8 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
