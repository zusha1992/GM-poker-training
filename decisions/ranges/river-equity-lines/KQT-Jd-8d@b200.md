# KQT-Jd-8d@b200 river (K♦ Q♣ T♥ J♦ 8♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AQ, AT, A9, A7–A2, QT, Q9, Q7–Q5, T9, T7, 97, 96, 76, 75, 65, 64, 54, 43 | 95% | 98% | 98% | 98% |
| g2 | 0–5bb | Straights | AA, 99, AK–A2, K9, Q9, J9, T9, 98–96 | 48% | 38% | 38% | 38% |
| g3 | 0–5bb | Sets | KK–TT, 88 | 14% | 0% | 0% | 0% |
| g4 | 0–5bb | Two pair | KQ–KT, K8, QJ, QT, Q8, JT, J8, T8 | 10% | 0% | 0% | 0% |
| g5 | 0–5bb | Top pair, weak kicker | K7–K2 | 8% | 0% | 0% | 0% |
| g6 | 0–5bb | Second pair | Q7–Q5 | 2% | 0% | 0% | 0% |
| g7 | 0–5bb | Small pairs | 77–22, J7, T7, 87, 86 | 0% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AQ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A6+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A5+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| T9+fl | flush | 91% | 100% | 100% | 100% | 50–100bb | g1 |
| 97+fl | flushlo | 92% | 98% | 98% | 98% | 50–100bb | g1 |
| Q9+fl | flush | 95% | 98% | 98% | 98% | 50–100bb | g1 |
| 96+fl | flushlo | 92% | 98% | 97% | 97% | 50–100bb | g1 |
| T7+fl | flush | 90% | 96% | 96% | 96% | 50–100bb | g1 |
| QT+fl | flush | 94% | 96% | 96% | 96% | 50–100bb | g1 |
| 65+fl | flushlo | 89% | 95% | 94% | 95% | 50–100bb | g1 |
| 43+fl | flushlo | 90% | 95% | 95% | 95% | 50–100bb | g1 |
| 76+fl | flushlo | 90% | 95% | 94% | 95% | 50–100bb | g1 |
| Q6+fl | flush | 95% | 94% | 95% | 95% | 50–100bb | g1 |
| 54+fl | flushlo | 90% | 94% | 95% | 95% | 50–100bb | g1 |
| Q5+fl | flush | 93% | 94% | 94% | 95% | 50–100bb | g1 |
| 75+fl | flushlo | 90% | 95% | 95% | 95% | 50–100bb | g1 |
| 64+fl | flushlo | 89% | 95% | 94% | 94% | 50–100bb | g1 |
| Q7+fl | flush | 95% | 95% | 94% | 94% | 50–100bb | g1 |
| AA | straight | 58% | 47% | 47% | 47% | 0–5bb | g2 |
| AT | straight | 56% | 47% | 47% | 47% | 0–5bb | g2 |
| A6 | straight | 56% | 47% | 47% | 47% | 0–5bb | g2 |
| A8 | straight | 56% | 47% | 47% | 47% | 0–5bb | g2 |
| A7 | straight | 55% | 47% | 47% | 47% | 0–5bb | g2 |
| A9 | straight | 55% | 47% | 47% | 47% | 0–5bb | g2 |
| AJ | straight | 55% | 47% | 47% | 47% | 0–5bb | g2 |
| A2 | straight | 55% | 47% | 47% | 47% | 0–5bb | g2 |
| A3 | straight | 55% | 47% | 47% | 47% | 0–5bb | g2 |
| AK | straight | 55% | 47% | 47% | 48% | 0–5bb | g2 |
| A4 | straight | 55% | 47% | 47% | 47% | 0–5bb | g2 |
| A5 | straight | 55% | 47% | 47% | 47% | 0–5bb | g2 |
| AQ | straight | 53% | 47% | 47% | 47% | 0–5bb | g2 |
| 99 | straight | 20% | 0% | 0% | 0% | 0–5bb | g2 |
| T9 | straight | 19% | 0% | 0% | 0% | 0–5bb | g2 |
| 96 | straight | 18% | 0% | 0% | 0% | 0–5bb | g2 |
| 98 | straight | 18% | 0% | 0% | 0% | 0–5bb | g2 |
| 97 | straight | 17% | 0% | 0% | 0% | 0–5bb | g2 |
| K9 | straight | 17% | 0% | 0% | 0% | 0–5bb | g2 |
| J9 | straight | 16% | 0% | 0% | 0% | 0–5bb | g2 |
| Q9 | straight | 14% | 0% | 0% | 0% | 0–5bb | g2 |
| TT | twopair | 18% | 0% | 0% | 0% | 0–5bb | g3 |
| 88 | twopair | 15% | 0% | 0% | 0% | 0–5bb | g3 |
| KK | twopair | 14% | 0% | 0% | 0% | 0–5bb | g3 |
| JJ | twopair | 13% | 0% | 0% | 0% | 0–5bb | g3 |
| QQ | twopair | 8% | 0% | 0% | 0% | 0–5bb | g3 |
| KT | twopair | 12% | 0% | 0% | 0% | 0–5bb | g4 |
| K8 | twopair | 12% | 0% | 0% | 0% | 0–5bb | g4 |
| KJ | twopair | 12% | 0% | 0% | 0% | 0–5bb | g4 |
| KQ | twopair | 10% | 0% | 0% | 0% | 0–5bb | g4 |
| T8 | twopair | 9% | 0% | 0% | 0% | 0–5bb | g4 |
| JT | twopair | 9% | 0% | 0% | 0% | 0–5bb | g4 |
| J8 | twopair | 8% | 0% | 0% | 0% | 0–5bb | g4 |
| QT | twopair | 7% | 0% | 0% | 0% | 0–5bb | g4 |
| QJ | twopair | 7% | 0% | 0% | 0% | 0–5bb | g4 |
| Q8 | twopair | 4% | 0% | 0% | 0% | 0–5bb | g4 |
| K6 | tpmk | 8% | 0% | 0% | 0% | 0–5bb | g5 |
| K7 | tpmk | 8% | 0% | 0% | 0% | 0–5bb | g5 |
| K5 | tpmk | 8% | 0% | 0% | 0% | 0–5bb | g5 |
| K4 | tpmk | 8% | 0% | 0% | 0% | 0–5bb | g5 |
| K2 | tpmk | 8% | 0% | 0% | 0% | 0–5bb | g5 |
| K3 | tpmk | 7% | 0% | 0% | 0% | 0–5bb | g5 |
| Q6 | mp | 2% | 0% | 0% | 0% | 0–5bb | g6 |
| Q7 | mp | 2% | 0% | 0% | 0% | 0–5bb | g6 |
| Q5 | mp | 2% | 0% | 0% | 0% | 0–5bb | g6 |
| J7 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| T7 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 87 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 86 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 77 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 66 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 55 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 44 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 33 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 22 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
