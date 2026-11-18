# KQT-7c-9c@b200 river (K♦ Q♣ T♥ 7♣ 9♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♣ flushes: AK, AJ, AT, A8, A6–A2, KJ, KT, K8, K6–K2, JT, J8, T8, 86, 65, 64, 54, 43 | 98% | 100% | 100% | 100% |
| g2 | 25–50bb | A-high straights | AJ | 92% | 98% | 97% | 97% |
| g3 | 25–50bb | K-high straights | JJ, KJ, QJ, JT–J7 | 75% | 50% | 50% | 50% |
| g4 | 0–5bb | T-high straights | 86 | 52% | 2% | 2% | 2% |
| g5 | 0–5bb | Sets | KK, QQ, TT, 99, 77 | 50% | 3% | 3% | 3% |
| g6 | 0–5bb | Overpair | AA | 14% | 2% | 2% | 2% |
| g7 | 0–5bb | Two pair | KQ, KT, K9, K7, QT, Q9, Q7, T9, T7, 97 | 32% | 2% | 2% | 2% |
| g8 | 0–5bb | Top pair | AK, K8, K6–K2 | 14% | 1% | 1% | 1% |
| g9 | 0–5bb | Second pair | AQ, Q8, Q6, Q5 | 9% | 0% | 0% | 0% |
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
| KJ+fl | flush | 99% | 100% | 100% | 100% | 50–100bb | g1 |
| KT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K8+fl | flush | 99% | 100% | 100% | 100% | 50–100bb | g1 |
| K6+fl | flush | 99% | 100% | 100% | 100% | 50–100bb | g1 |
| K5+fl | flush | 99% | 100% | 100% | 100% | 50–100bb | g1 |
| K4+fl | flush | 99% | 100% | 100% | 100% | 50–100bb | g1 |
| K3+fl | flush | 99% | 100% | 100% | 100% | 50–100bb | g1 |
| K2+fl | flush | 99% | 100% | 100% | 100% | 50–100bb | g1 |
| J8+fl | flush | 96% | 98% | 99% | 99% | 50–100bb | g1 |
| JT+fl | flush | 96% | 98% | 98% | 98% | 50–100bb | g1 |
| T8+fl | flushlo | 96% | 98% | 98% | 98% | 50–100bb | g1 |
| 43+fl | flushlo | 94% | 98% | 98% | 98% | 50–100bb | g1 |
| 54+fl | flushlo | 95% | 98% | 98% | 98% | 50–100bb | g1 |
| 65+fl | flushlo | 95% | 98% | 98% | 98% | 50–100bb | g1 |
| 64+fl | flushlo | 95% | 98% | 98% | 98% | 50–100bb | g1 |
| 86+fl | flushlo | 95% | 98% | 98% | 98% | 50–100bb | g1 |
| AJ | straight | 92% | 97% | 97% | 97% | 50–100bb | g2 |
| JJ | straight | 78% | 51% | 51% | 51% | 50–100bb | g3 |
| J8 | straight | 74% | 50% | 50% | 50% | 25–50bb | g3 |
| JT | straight | 74% | 50% | 50% | 50% | 50–100bb | g3 |
| J7 | straight | 74% | 50% | 50% | 50% | 50–100bb | g3 |
| J9 | straight | 75% | 50% | 50% | 50% | 50–100bb | g3 |
| QJ | straight | 75% | 50% | 51% | 50% | 50–100bb | g3 |
| KJ | straight | 74% | 50% | 50% | 50% | 50–100bb | g3 |
| 86 | straight | 52% | 2% | 2% | 2% | 0–5bb | g4 |
| 99 | twopair | 53% | 3% | 3% | 3% | 0–5bb | g5 |
| QQ | twopair | 52% | 3% | 4% | 4% | 0–5bb | g5 |
| KK | twopair | 50% | 1% | 1% | 1% | 0–5bb | g5 |
| 77 | twopair | 48% | 2% | 3% | 3% | 0–5bb | g5 |
| TT | twopair | 47% | 3% | 3% | 3% | 0–5bb | g5 |
| AA | op | 14% | 2% | 2% | 2% | 0–5bb | g6 |
| KQ | twopair | 49% | 2% | 3% | 2% | 0–5bb | g7 |
| K9 | twopair | 40% | 2% | 2% | 2% | 0–5bb | g7 |
| KT | twopair | 39% | 2% | 1% | 2% | 0–5bb | g7 |
| K7 | twopair | 34% | 2% | 2% | 2% | 0–5bb | g7 |
| QT | twopair | 28% | 3% | 3% | 3% | 0–5bb | g7 |
| Q9 | twopair | 26% | 3% | 2% | 2% | 0–5bb | g7 |
| Q7 | twopair | 24% | 2% | 3% | 3% | 0–5bb | g7 |
| T9 | twopair | 18% | 3% | 2% | 2% | 0–5bb | g7 |
| 97 | twopair | 17% | 2% | 3% | 2% | 0–5bb | g7 |
| T7 | twopair | 16% | 3% | 2% | 2% | 0–5bb | g7 |
| K8 | tpmk | 15% | 2% | 2% | 1% | 0–5bb | g8 |
| AK | tpgk | 15% | 2% | 1% | 2% | 0–5bb | g8 |
| K5 | tpmk | 14% | 0% | 1% | 0% | 0–5bb | g8 |
| K4 | tpmk | 13% | 1% | 1% | 1% | 0–5bb | g8 |
| K6 | tpmk | 13% | 1% | 1% | 1% | 0–5bb | g8 |
| K2 | tpmk | 13% | 1% | 1% | 1% | 0–5bb | g8 |
| K3 | tpmk | 12% | 0% | 1% | 1% | 0–5bb | g8 |
| Q5 | mp | 10% | 0% | 0% | 0% | 0–5bb | g9 |
| Q6 | mp | 9% | 0% | 0% | 0% | 0–5bb | g9 |
| Q8 | mp | 9% | 0% | 0% | 0% | 0–5bb | g9 |
| AQ | mp | 9% | 0% | 0% | 0% | 0–5bb | g9 |
| AT | bp | 5% | 0% | 0% | 0% | 0–5bb | g10 |
| T8 | bp | 3% | 0% | 0% | 0% | 0–5bb | g10 |
| A9 | bp | 1% | 0% | 0% | 0% | 0–5bb | g10 |
| 22 | spp | 1% | 0% | 0% | 0% | 0–5bb | g10 |
| 75 | bp | 1% | 0% | 0% | 0% | 0–5bb | g10 |
| 66 | spp | 1% | 0% | 0% | 0% | 0–5bb | g10 |
| 76 | bp | 0% | 0% | 0% | 0% | 0–5bb | g10 |
| 98 | bp | 0% | 0% | 0% | 0% | 0–5bb | g10 |
| 44 | spp | 0% | 0% | 0% | 0% | 0–5bb | g10 |
| A7 | bp | 0% | 0% | 0% | 0% | 0–5bb | g10 |
| 55 | spp | 0% | 0% | 0% | 0% | 0–5bb | g10 |
| 96 | bp | 0% | 0% | 0% | 0% | 0–5bb | g10 |
| 88 | spp | 0% | 0% | 0% | 0% | 0–5bb | g10 |
| 33 | spp | 0% | 0% | 0% | 0% | 0–5bb | g10 |
| 87 | bp | 0% | 0% | 0% | 0% | 0–5bb | g10 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g11 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g11 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g11 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g11 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g11 |
| A8 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g11 |
