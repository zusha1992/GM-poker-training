# KQT-7c-9c river (K♦ Q♣ T♥ 7♣ 9♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♣ flushes: AK, AJ, AT, A8, A6–A2, KJ, KT, K8, K6–K2, JT, J8, T8, 86, 65, 64, 54, 43 | 98% | 100% | 100% | 97% |
| g2 | 25–50bb | A-high straights | AJ | 91% | 98% | 98% | 85% |
| g3 | 25–50bb | K-high straights | JJ, KJ, QJ, JT–J7 | 80% | 76% | 75% | 64% |
| g4 | 0–5bb | T-high straights | 86 | 63% | 46% | 46% | 36% |
| g5 | 0–5bb | Sets | KK, QQ, TT, 99, 77 | 63% | 43% | 42% | 37% |
| g6 | 0–5bb | Overpair | AA | 28% | 6% | 5% | 26% |
| g7 | 0–5bb | Two pair | KQ, KT, K9, K7, QT, Q9, Q7, T9, T7, 97 | 50% | 26% | 24% | 31% |
| g8 | 0–5bb | Top pair | AK, K8, K6–K2 | 28% | 4% | 2% | 17% |
| g9 | 0–5bb | Second pair | AQ, Q8, Q6, Q5 | 17% | 2% | 0% | 4% |
| g10 | 0–5bb | Small pairs | 88, 66–22, AT, A9, A7, T8, 98, 96, 87, 76, 75 | 4% | 0% | 0% | 0% |
| g11 | Pot is too big | Ace-high | A8, A6–A2 | 1% | 0% | 0% | 0% |

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
| K5+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K6+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K8+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K3+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K4+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K2+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| KJ+fl | flush | 98% | 100% | 100% | 99% | 50–100bb | g1 |
| 43+fl | flushlo | 94% | 99% | 98% | 91% | 50–100bb | g1 |
| 54+fl | flushlo | 93% | 98% | 98% | 90% | 50–100bb | g1 |
| 65+fl | flushlo | 94% | 98% | 98% | 90% | 50–100bb | g1 |
| T8+fl | flushlo | 93% | 99% | 99% | 90% | 50–100bb | g1 |
| 86+fl | flushlo | 93% | 99% | 98% | 90% | 50–100bb | g1 |
| 64+fl | flushlo | 93% | 98% | 98% | 90% | 50–100bb | g1 |
| J8+fl | flush | 93% | 99% | 99% | 89% | 50–100bb | g1 |
| JT+fl | flush | 92% | 98% | 98% | 87% | 50–100bb | g1 |
| AJ | straight | 91% | 97% | 98% | 85% | 50–100bb | g2 |
| JJ | straight | 83% | 81% | 80% | 67% | 50–100bb | g3 |
| J7 | straight | 80% | 75% | 74% | 64% | 50–100bb | g3 |
| J9 | straight | 79% | 75% | 74% | 64% | 50–100bb | g3 |
| QJ | straight | 80% | 75% | 74% | 64% | 50–100bb | g3 |
| JT | straight | 80% | 76% | 76% | 64% | 50–100bb | g3 |
| J8 | straight | 80% | 75% | 75% | 63% | 50–100bb | g3 |
| KJ | straight | 79% | 75% | 74% | 62% | 50–100bb | g3 |
| 86 | straight | 63% | 46% | 46% | 36% | 0–5bb | g4 |
| QQ | twopair | 64% | 44% | 42% | 43% | 0–5bb | g5 |
| TT | twopair | 64% | 45% | 44% | 39% | 0–5bb | g5 |
| 99 | twopair | 63% | 42% | 40% | 38% | 0–5bb | g5 |
| 77 | twopair | 62% | 45% | 43% | 38% | 0–5bb | g5 |
| KK | twopair | 62% | 41% | 41% | 27% | 0–5bb | g5 |
| AA | op | 28% | 6% | 5% | 26% | 0–5bb | g6 |
| KQ | twopair | 63% | 43% | 39% | 36% | 0–5bb | g7 |
| KT | twopair | 59% | 37% | 37% | 31% | 0–5bb | g7 |
| K9 | twopair | 56% | 31% | 30% | 28% | 0–5bb | g7 |
| K7 | twopair | 50% | 29% | 28% | 27% | 0–5bb | g7 |
| QT | twopair | 48% | 22% | 22% | 31% | 0–5bb | g7 |
| Q9 | twopair | 47% | 16% | 15% | 30% | 0–5bb | g7 |
| Q7 | twopair | 40% | 11% | 9% | 30% | 0–5bb | g7 |
| T9 | twopair | 37% | 9% | 8% | 30% | 0–5bb | g7 |
| 97 | twopair | 36% | 8% | 5% | 28% | 0–5bb | g7 |
| T7 | twopair | 33% | 8% | 6% | 27% | 0–5bb | g7 |
| K8 | tpmk | 31% | 4% | 2% | 21% | 0–5bb | g8 |
| AK | tpgk | 29% | 6% | 4% | 23% | 0–5bb | g8 |
| K6 | tpmk | 25% | 3% | 1% | 11% | 0–5bb | g8 |
| K4 | tpmk | 25% | 3% | 0% | 11% | 0–5bb | g8 |
| K3 | tpmk | 24% | 3% | 1% | 10% | 0–5bb | g8 |
| K5 | tpmk | 24% | 3% | 0% | 10% | 0–5bb | g8 |
| K2 | tpmk | 24% | 3% | 0% | 10% | 0–5bb | g8 |
| Q8 | mp | 19% | 2% | 0% | 4% | 0–5bb | g9 |
| Q5 | mp | 19% | 2% | 0% | 4% | 0–5bb | g9 |
| Q6 | mp | 19% | 2% | 0% | 4% | 0–5bb | g9 |
| AQ | mp | 15% | 2% | 0% | 4% | 0–5bb | g9 |
| AT | bp | 9% | 0% | 0% | 2% | 0–5bb | g10 |
| T8 | bp | 7% | 0% | 0% | 1% | 0–5bb | g10 |
| 96 | bp | 6% | 0% | 0% | 0% | 0–5bb | g10 |
| 98 | bp | 6% | 0% | 0% | 0% | 0–5bb | g10 |
| 88 | spp | 6% | 0% | 0% | 0% | 0–5bb | g10 |
| A9 | bp | 5% | 0% | 0% | 0% | 0–5bb | g10 |
| A7 | bp | 2% | 0% | 0% | 0% | 0–5bb | g10 |
| 75 | bp | 1% | 0% | 0% | 0% | 0–5bb | g10 |
| 55 | spp | 1% | 0% | 0% | 0% | 0–5bb | g10 |
| 22 | spp | 1% | 0% | 0% | 0% | 0–5bb | g10 |
| 76 | bp | 1% | 0% | 0% | 0% | 0–5bb | g10 |
| 44 | spp | 1% | 0% | 0% | 0% | 0–5bb | g10 |
| 87 | bp | 1% | 0% | 0% | 0% | 0–5bb | g10 |
| 66 | spp | 1% | 0% | 0% | 0% | 0–5bb | g10 |
| 33 | spp | 1% | 0% | 0% | 0% | 0–5bb | g10 |
| A4 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g11 |
| A6 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g11 |
| A8 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g11 |
| A2 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g11 |
| A3 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g11 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g11 |
