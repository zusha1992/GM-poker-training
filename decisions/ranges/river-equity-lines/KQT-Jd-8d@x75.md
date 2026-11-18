# KQT-Jd-8d@x75 river (K♦ Q♣ T♥ J♦ 8♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AQ, AT, A9, A7–A2, QT, Q9, Q7–Q5, T9, T7, 97, 96, 76, 75, 65, 64, 54, 43 | 97% | 97% | 97% | 97% |
| g2 | 25–50bb | A-high straights | AA, AK–A2 | 68% | 48% | 48% | 54% |
| g3 | 0–5bb | K-high straights | 99, K9, Q9, J9, T9, 98–96 | 27% | 2% | 1% | 11% |
| g4 | 0–5bb | Sets | KK–TT, 88 | 15% | 1% | 1% | 7% |
| g5 | 0–5bb | Two pair | KQ–KT, K8, QJ, QT, Q8, JT, J8, T8 | 8% | 1% | 0% | 7% |
| g6 | 0–5bb | Top pair, weak kicker | K7–K2 | 5% | 0% | 0% | 7% |
| g7 | 0–5bb | Second pair | Q7–Q5 | 2% | 0% | 0% | 3% |
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
| QT+fl | flush | 96% | 95% | 95% | 98% | 50–100bb | g1 |
| Q6+fl | flush | 97% | 95% | 95% | 98% | 50–100bb | g1 |
| Q9+fl | flush | 96% | 95% | 95% | 97% | 50–100bb | g1 |
| Q7+fl | flush | 96% | 95% | 95% | 97% | 50–100bb | g1 |
| Q5+fl | flush | 96% | 94% | 94% | 97% | 50–100bb | g1 |
| T9+fl | flush | 95% | 95% | 95% | 94% | 50–100bb | g1 |
| T7+fl | flush | 95% | 95% | 95% | 94% | 50–100bb | g1 |
| 97+fl | flushlo | 95% | 96% | 95% | 93% | 50–100bb | g1 |
| 96+fl | flushlo | 95% | 96% | 96% | 93% | 50–100bb | g1 |
| 76+fl | flushlo | 95% | 96% | 95% | 92% | 50–100bb | g1 |
| 75+fl | flushlo | 94% | 94% | 94% | 92% | 50–100bb | g1 |
| 64+fl | flushlo | 94% | 95% | 96% | 92% | 50–100bb | g1 |
| 54+fl | flushlo | 93% | 94% | 94% | 92% | 50–100bb | g1 |
| 43+fl | flushlo | 93% | 95% | 95% | 91% | 50–100bb | g1 |
| 65+fl | flushlo | 94% | 94% | 95% | 91% | 50–100bb | g1 |
| AA | straight | 72% | 50% | 49% | 56% | 50–100bb | g2 |
| AJ | straight | 67% | 49% | 48% | 54% | 50–100bb | g2 |
| A8 | straight | 68% | 48% | 48% | 54% | 50–100bb | g2 |
| A4 | straight | 68% | 48% | 48% | 54% | 50–100bb | g2 |
| A3 | straight | 68% | 49% | 48% | 54% | 50–100bb | g2 |
| A7 | straight | 68% | 48% | 48% | 54% | 50–100bb | g2 |
| AK | straight | 67% | 49% | 49% | 54% | 50–100bb | g2 |
| A5 | straight | 68% | 48% | 48% | 54% | 50–100bb | g2 |
| AT | straight | 67% | 48% | 48% | 54% | 50–100bb | g2 |
| A2 | straight | 68% | 49% | 48% | 53% | 50–100bb | g2 |
| A9 | straight | 66% | 48% | 48% | 53% | 50–100bb | g2 |
| AQ | straight | 66% | 48% | 48% | 53% | 50–100bb | g2 |
| A6 | straight | 67% | 48% | 48% | 53% | 50–100bb | g2 |
| 98 | straight | 29% | 2% | 1% | 11% | 0–5bb | g3 |
| 97 | straight | 28% | 2% | 1% | 11% | 0–5bb | g3 |
| 96 | straight | 28% | 2% | 2% | 11% | 0–5bb | g3 |
| T9 | straight | 28% | 2% | 2% | 11% | 0–5bb | g3 |
| J9 | straight | 27% | 2% | 1% | 12% | 0–5bb | g3 |
| 99 | straight | 27% | 2% | 1% | 11% | 0–5bb | g3 |
| Q9 | straight | 26% | 2% | 1% | 10% | 0–5bb | g3 |
| K9 | straight | 24% | 2% | 1% | 12% | 0–5bb | g3 |
| 88 | twopair | 19% | 1% | 1% | 9% | 0–5bb | g4 |
| JJ | twopair | 16% | 1% | 1% | 8% | 0–5bb | g4 |
| TT | twopair | 15% | 1% | 1% | 7% | 0–5bb | g4 |
| QQ | twopair | 13% | 1% | 1% | 4% | 0–5bb | g4 |
| KK | twopair | 13% | 1% | 1% | 8% | 0–5bb | g4 |
| KQ | twopair | 12% | 1% | 0% | 6% | 0–5bb | g5 |
| KJ | twopair | 11% | 1% | 0% | 8% | 0–5bb | g5 |
| K8 | twopair | 9% | 1% | 0% | 9% | 0–5bb | g5 |
| KT | twopair | 9% | 1% | 0% | 9% | 0–5bb | g5 |
| QJ | twopair | 6% | 1% | 0% | 6% | 0–5bb | g5 |
| J8 | twopair | 5% | 0% | 0% | 8% | 0–5bb | g5 |
| QT | twopair | 5% | 0% | 0% | 5% | 0–5bb | g5 |
| Q8 | twopair | 4% | 0% | 0% | 5% | 0–5bb | g5 |
| T8 | twopair | 4% | 1% | 0% | 6% | 0–5bb | g5 |
| JT | twopair | 4% | 0% | 0% | 7% | 0–5bb | g5 |
| K6 | tpmk | 5% | 0% | 0% | 7% | 0–5bb | g6 |
| K4 | tpmk | 5% | 0% | 0% | 7% | 0–5bb | g6 |
| K7 | tpmk | 4% | 1% | 0% | 7% | 0–5bb | g6 |
| K5 | tpmk | 4% | 0% | 0% | 6% | 0–5bb | g6 |
| K2 | tpmk | 4% | 0% | 0% | 7% | 0–5bb | g6 |
| K3 | tpmk | 4% | 0% | 0% | 6% | 0–5bb | g6 |
| Q5 | mp | 2% | 0% | 0% | 3% | 0–5bb | g7 |
| Q7 | mp | 2% | 0% | 0% | 3% | 0–5bb | g7 |
| Q6 | mp | 2% | 0% | 0% | 3% | 0–5bb | g7 |
| J7 | bp | 1% | 0% | 0% | 2% | 0–5bb | g8 |
| T7 | bp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 87 | bp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 86 | bp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 77 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 66 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 55 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 44 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 33 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 22 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
