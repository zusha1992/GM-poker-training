# KQT-7c-9c river (K♦ Q♣ T♥ 7♣ 9♣): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes & straights | JJ, AJ, KJ, QJ, JT–J7 · ♣ flushes: AK, AJ, AT, A8, A6–A2, KJ, KT, K8, K6–K2, JT, J8, T8, 86, 65, 64, 54, 43 | 86% | 85% | 85% | 76% |
| g2 | 0–5bb | Straights & sets | KK, QQ, TT, 99, 77, 86 | 63% | 43% | 43% | 37% |
| g3 | 0–5bb | Overpair | AA | 29% | 6% | 5% | 26% |
| g4 | 0–5bb | Two pair | KQ, KT, K9, K7, QT, Q9, Q7, T9, T7, 97 | 50% | 26% | 24% | 30% |
| g5 | 0–5bb | Top pair | AK, K8, K6–K2 | 28% | 4% | 2% | 17% |
| g6 | 0–5bb | Second pair | AQ, Q8, Q6, Q5 | 18% | 2% | 0% | 4% |
| g7 | 0–5bb | Small pairs | 88, 66–22, AT, A9, A7, T8, 98, 96, 87, 76, 75 | 3% | 0% | 0% | 0% |
| g8 | Pot is too big | Ace-high | A8, A6–A2 | 0% | 0% | 0% | 0% |

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
| K2+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K5+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K4+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K3+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| KJ+fl | flush | 98% | 100% | 100% | 99% | 50–100bb | g1 |
| K6+fl | flush | 98% | 100% | 100% | 99% | 50–100bb | g1 |
| K8+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 65+fl | flushlo | 94% | 98% | 98% | 91% | 50–100bb | g1 |
| 54+fl | flushlo | 93% | 98% | 98% | 90% | 50–100bb | g1 |
| 86+fl | flushlo | 94% | 98% | 99% | 90% | 50–100bb | g1 |
| 43+fl | flushlo | 93% | 98% | 98% | 90% | 50–100bb | g1 |
| 64+fl | flushlo | 93% | 98% | 98% | 90% | 50–100bb | g1 |
| T8+fl | flushlo | 94% | 99% | 99% | 90% | 50–100bb | g1 |
| J8+fl | flush | 93% | 99% | 99% | 88% | 50–100bb | g1 |
| JT+fl | flush | 92% | 98% | 99% | 87% | 50–100bb | g1 |
| AJ | straight | 90% | 98% | 98% | 84% | 50–100bb | g1 |
| JJ | straight | 82% | 80% | 80% | 67% | 50–100bb | g1 |
| J7 | straight | 79% | 75% | 75% | 64% | 50–100bb | g1 |
| QJ | straight | 79% | 75% | 75% | 64% | 50–100bb | g1 |
| JT | straight | 79% | 75% | 75% | 64% | 50–100bb | g1 |
| J8 | straight | 80% | 76% | 75% | 63% | 50–100bb | g1 |
| J9 | straight | 79% | 74% | 74% | 63% | 50–100bb | g1 |
| KJ | straight | 79% | 75% | 74% | 62% | 50–100bb | g1 |
| QQ | twopair | 65% | 43% | 43% | 41% | 0–5bb | g2 |
| TT | twopair | 64% | 44% | 44% | 41% | 0–5bb | g2 |
| 86 | straight | 63% | 47% | 47% | 37% | 0–5bb | g2 |
| 99 | twopair | 62% | 42% | 40% | 37% | 0–5bb | g2 |
| KK | twopair | 62% | 40% | 40% | 29% | 0–5bb | g2 |
| 77 | twopair | 61% | 44% | 44% | 40% | 0–5bb | g2 |
| AA | op | 29% | 6% | 5% | 26% | 0–5bb | g3 |
| KQ | twopair | 62% | 42% | 40% | 36% | 0–5bb | g4 |
| KT | twopair | 59% | 38% | 36% | 30% | 0–5bb | g4 |
| K9 | twopair | 55% | 31% | 30% | 28% | 0–5bb | g4 |
| K7 | twopair | 52% | 29% | 28% | 27% | 0–5bb | g4 |
| QT | twopair | 49% | 23% | 22% | 31% | 0–5bb | g4 |
| Q9 | twopair | 46% | 16% | 14% | 30% | 0–5bb | g4 |
| Q7 | twopair | 41% | 12% | 10% | 29% | 0–5bb | g4 |
| T9 | twopair | 37% | 9% | 7% | 29% | 0–5bb | g4 |
| 97 | twopair | 36% | 7% | 5% | 28% | 0–5bb | g4 |
| T7 | twopair | 34% | 8% | 6% | 27% | 0–5bb | g4 |
| AK | tpgk | 30% | 5% | 4% | 24% | 0–5bb | g5 |
| K8 | tpmk | 30% | 4% | 2% | 21% | 0–5bb | g5 |
| K6 | tpmk | 25% | 3% | 1% | 11% | 0–5bb | g5 |
| K3 | tpmk | 25% | 2% | 0% | 10% | 0–5bb | g5 |
| K4 | tpmk | 24% | 3% | 0% | 10% | 0–5bb | g5 |
| K2 | tpmk | 24% | 3% | 1% | 11% | 0–5bb | g5 |
| K5 | tpmk | 23% | 2% | 0% | 11% | 0–5bb | g5 |
| Q6 | mp | 20% | 2% | 0% | 4% | 0–5bb | g6 |
| Q8 | mp | 20% | 2% | 0% | 5% | 0–5bb | g6 |
| Q5 | mp | 19% | 3% | 0% | 4% | 0–5bb | g6 |
| AQ | mp | 17% | 2% | 0% | 4% | 0–5bb | g6 |
| AT | bp | 9% | 0% | 0% | 2% | 0–5bb | g7 |
| T8 | bp | 7% | 0% | 0% | 1% | 0–5bb | g7 |
| 96 | bp | 5% | 0% | 0% | 0% | 0–5bb | g7 |
| 88 | spp | 5% | 0% | 0% | 0% | 0–5bb | g7 |
| 98 | bp | 5% | 0% | 0% | 0% | 0–5bb | g7 |
| A9 | bp | 4% | 0% | 0% | 0% | 0–5bb | g7 |
| A7 | bp | 2% | 0% | 0% | 0% | 0–5bb | g7 |
| 55 | spp | 1% | 0% | 0% | 0% | 0–5bb | g7 |
| 76 | bp | 1% | 0% | 0% | 0% | 0–5bb | g7 |
| 22 | spp | 1% | 0% | 0% | 0% | 0–5bb | g7 |
| 75 | bp | 1% | 0% | 0% | 0% | 0–5bb | g7 |
| 44 | spp | 1% | 0% | 0% | 0% | 0–5bb | g7 |
| 87 | bp | 1% | 0% | 0% | 0% | 0–5bb | g7 |
| 66 | spp | 1% | 0% | 0% | 0% | 0–5bb | g7 |
| 33 | spp | 1% | 0% | 0% | 0% | 0–5bb | g7 |
| A5 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g8 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| A8 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
