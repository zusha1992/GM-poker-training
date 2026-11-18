# KQT-Jd-8d@b75 river (K♦ Q♣ T♥ J♦ 8♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AQ, AT, A9, A7–A2, QT, Q9, Q7–Q5, T9, T7, 97, 96, 76, 75, 65, 64, 54, 43 | 97% | 97% | 97% | 97% |
| g2 | 25–50bb | Straights | AA, AK–A2 | 74% | 64% | 64% | 50% |
| g3 | 0–5bb | Straights | 99, K9, Q9, J9, T9, 98–96 | 39% | 19% | 19% | 5% |
| g4 | 0–5bb | Sets | KK–TT, 88 | 26% | 9% | 9% | 4% |
| g5 | 0–5bb | Two pair | KQ–KT, K8, QJ, QT, Q8, JT, J8, T8 | 14% | 3% | 3% | 4% |
| g6 | 0–5bb | Top pair, weak kicker | K7–K2 | 8% | 0% | 0% | 4% |
| g7 | 0–5bb | Second pair | Q7–Q5 | 5% | 0% | 0% | 2% |
| g8 | 0–5bb | Small pairs | 77–22, J7, T7, 87, 86 | 0% | 0% | 0% | 0% |

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
| Q9+fl | flush | 96% | 94% | 94% | 97% | 50–100bb | g1 |
| QT+fl | flush | 96% | 94% | 93% | 97% | 50–100bb | g1 |
| T9+fl | flush | 93% | 95% | 95% | 97% | 50–100bb | g1 |
| Q7+fl | flush | 96% | 94% | 94% | 97% | 50–100bb | g1 |
| 97+fl | flushlo | 94% | 95% | 96% | 96% | 50–100bb | g1 |
| Q5+fl | flush | 96% | 93% | 93% | 96% | 50–100bb | g1 |
| Q6+fl | flush | 96% | 94% | 94% | 96% | 50–100bb | g1 |
| 96+fl | flushlo | 93% | 96% | 96% | 95% | 50–100bb | g1 |
| T7+fl | flush | 93% | 94% | 94% | 95% | 50–100bb | g1 |
| 75+fl | flushlo | 93% | 94% | 94% | 95% | 50–100bb | g1 |
| 65+fl | flushlo | 93% | 94% | 94% | 94% | 50–100bb | g1 |
| 43+fl | flushlo | 92% | 94% | 94% | 94% | 50–100bb | g1 |
| 54+fl | flushlo | 92% | 94% | 93% | 94% | 50–100bb | g1 |
| 76+fl | flushlo | 94% | 95% | 95% | 94% | 50–100bb | g1 |
| 64+fl | flushlo | 93% | 95% | 94% | 94% | 50–100bb | g1 |
| A6 | straight | 74% | 64% | 65% | 50% | 25–50bb | g2 |
| A2 | straight | 73% | 65% | 65% | 49% | 25–50bb | g2 |
| A3 | straight | 74% | 64% | 65% | 50% | 25–50bb | g2 |
| A7 | straight | 73% | 65% | 65% | 49% | 25–50bb | g2 |
| A5 | straight | 74% | 65% | 64% | 50% | 25–50bb | g2 |
| A8 | straight | 75% | 65% | 64% | 50% | 25–50bb | g2 |
| A4 | straight | 74% | 64% | 64% | 50% | 25–50bb | g2 |
| AT | straight | 73% | 64% | 64% | 50% | 25–50bb | g2 |
| AJ | straight | 73% | 63% | 63% | 50% | 25–50bb | g2 |
| A9 | straight | 72% | 64% | 63% | 50% | 25–50bb | g2 |
| AQ | straight | 72% | 64% | 63% | 49% | 25–50bb | g2 |
| AK | straight | 72% | 63% | 63% | 50% | 25–50bb | g2 |
| AA | straight | 78% | 70% | 70% | 50% | 50–100bb | g2 |
| 99 | straight | 41% | 19% | 20% | 6% | 0–5bb | g3 |
| T9 | straight | 41% | 19% | 19% | 5% | 0–5bb | g3 |
| 98 | straight | 41% | 20% | 21% | 5% | 0–5bb | g3 |
| 97 | straight | 40% | 21% | 20% | 4% | 0–5bb | g3 |
| 96 | straight | 40% | 20% | 20% | 5% | 0–5bb | g3 |
| J9 | straight | 38% | 18% | 18% | 5% | 0–5bb | g3 |
| Q9 | straight | 37% | 18% | 17% | 4% | 0–5bb | g3 |
| K9 | straight | 36% | 17% | 17% | 5% | 0–5bb | g3 |
| TT | twopair | 30% | 11% | 12% | 5% | 0–5bb | g4 |
| 88 | twopair | 29% | 11% | 12% | 4% | 0–5bb | g4 |
| JJ | twopair | 24% | 7% | 8% | 4% | 0–5bb | g4 |
| QQ | twopair | 23% | 8% | 9% | 2% | 0–5bb | g4 |
| KK | twopair | 21% | 6% | 6% | 4% | 0–5bb | g4 |
| KQ | twopair | 21% | 7% | 7% | 3% | 0–5bb | g5 |
| KJ | twopair | 19% | 5% | 5% | 5% | 0–5bb | g5 |
| KT | twopair | 16% | 4% | 4% | 4% | 0–5bb | g5 |
| K8 | twopair | 16% | 3% | 3% | 4% | 0–5bb | g5 |
| QJ | twopair | 11% | 1% | 1% | 3% | 0–5bb | g5 |
| J8 | twopair | 9% | 0% | 0% | 4% | 0–5bb | g5 |
| JT | twopair | 9% | 0% | 0% | 4% | 0–5bb | g5 |
| T8 | twopair | 9% | 0% | 0% | 4% | 0–5bb | g5 |
| QT | twopair | 8% | 0% | 0% | 3% | 0–5bb | g5 |
| Q8 | twopair | 7% | 0% | 0% | 2% | 0–5bb | g5 |
| K4 | tpmk | 9% | 0% | 0% | 4% | 0–5bb | g6 |
| K3 | tpmk | 9% | 0% | 0% | 4% | 0–5bb | g6 |
| K2 | tpmk | 9% | 0% | 0% | 4% | 0–5bb | g6 |
| K6 | tpmk | 8% | 0% | 0% | 4% | 0–5bb | g6 |
| K5 | tpmk | 8% | 0% | 0% | 4% | 0–5bb | g6 |
| K7 | tpmk | 8% | 0% | 0% | 4% | 0–5bb | g6 |
| Q6 | mp | 5% | 0% | 0% | 2% | 0–5bb | g7 |
| Q7 | mp | 4% | 0% | 0% | 2% | 0–5bb | g7 |
| Q5 | mp | 4% | 0% | 0% | 2% | 0–5bb | g7 |
| J7 | bp | 3% | 0% | 0% | 1% | 0–5bb | g8 |
| T7 | bp | 1% | 0% | 0% | 0% | 0–5bb | g8 |
| 87 | bp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 86 | bp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 77 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 66 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 55 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 44 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 33 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 22 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
