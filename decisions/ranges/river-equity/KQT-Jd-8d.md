# KQT-Jd-8d river (K♦ Q♣ T♥ J♦ 8♦): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes & straights | AA, AK, A2 · ♦ flushes: AQ, AT, A9, A7–A2, QT, Q9, Q7–Q5, T9, T7, 97, 96, 76, 75, 65, 64, 54, 43 | 84% | 79% | 79% | 69% |
| g2 | 25–50bb | Straights | AQ–A3 | 76% | 66% | 66% | 50% |
| g3 | 0–5bb | Straights & sets | KK–88, K9, Q9, J9, T9, 98–96 | 36% | 15% | 15% | 4% |
| g4 | 0–5bb | Two pair | KQ–KT, K8, QJ, QT, Q8, JT, J8, T8 | 13% | 2% | 2% | 3% |
| g5 | 0–5bb | Top pair, weak kicker | K7–K2 | 8% | 0% | 0% | 4% |
| g6 | 0–5bb | Second pair | Q7–Q5 | 4% | 0% | 0% | 1% |
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
| Q9+fl | flush | 96% | 94% | 93% | 98% | 50–100bb | g1 |
| QT+fl | flush | 95% | 93% | 94% | 97% | 50–100bb | g1 |
| T9+fl | flush | 94% | 95% | 95% | 97% | 50–100bb | g1 |
| 96+fl | flushlo | 94% | 95% | 96% | 97% | 50–100bb | g1 |
| Q7+fl | flush | 97% | 94% | 94% | 96% | 50–100bb | g1 |
| 97+fl | flushlo | 94% | 96% | 95% | 96% | 50–100bb | g1 |
| Q6+fl | flush | 96% | 94% | 94% | 96% | 50–100bb | g1 |
| Q5+fl | flush | 95% | 93% | 92% | 96% | 50–100bb | g1 |
| T7+fl | flush | 94% | 94% | 94% | 94% | 50–100bb | g1 |
| 43+fl | flushlo | 93% | 94% | 94% | 94% | 50–100bb | g1 |
| 54+fl | flushlo | 92% | 93% | 94% | 94% | 50–100bb | g1 |
| 65+fl | flushlo | 93% | 93% | 94% | 94% | 50–100bb | g1 |
| 64+fl | flushlo | 93% | 95% | 94% | 94% | 50–100bb | g1 |
| 75+fl | flushlo | 93% | 94% | 94% | 94% | 50–100bb | g1 |
| 76+fl | flushlo | 94% | 95% | 95% | 94% | 50–100bb | g1 |
| AA | straight | 80% | 72% | 71% | 51% | 50–100bb | g1 |
| AK | straight | 75% | 66% | 65% | 50% | 50–100bb | g1 |
| A2 | straight | 76% | 66% | 66% | 50% | 50–100bb | g1 |
| A8 | straight | 77% | 66% | 67% | 50% | 25–50bb | g2 |
| A5 | straight | 76% | 66% | 66% | 49% | 25–50bb | g2 |
| A4 | straight | 76% | 67% | 66% | 49% | 25–50bb | g2 |
| A7 | straight | 76% | 67% | 66% | 50% | 25–50bb | g2 |
| A6 | straight | 76% | 66% | 66% | 49% | 25–50bb | g2 |
| AJ | straight | 75% | 66% | 65% | 50% | 25–50bb | g2 |
| A3 | straight | 76% | 66% | 65% | 50% | 25–50bb | g2 |
| AT | straight | 75% | 65% | 65% | 50% | 25–50bb | g2 |
| A9 | straight | 74% | 64% | 65% | 49% | 25–50bb | g2 |
| AQ | straight | 74% | 63% | 64% | 49% | 25–50bb | g2 |
| 99 | straight | 43% | 18% | 18% | 5% | 0–5bb | g3 |
| 98 | straight | 42% | 20% | 20% | 5% | 0–5bb | g3 |
| 97 | straight | 42% | 20% | 19% | 4% | 0–5bb | g3 |
| 96 | straight | 41% | 20% | 19% | 5% | 0–5bb | g3 |
| T9 | straight | 41% | 19% | 19% | 6% | 0–5bb | g3 |
| K9 | straight | 40% | 17% | 18% | 5% | 0–5bb | g3 |
| J9 | straight | 39% | 18% | 18% | 5% | 0–5bb | g3 |
| Q9 | straight | 39% | 18% | 18% | 3% | 0–5bb | g3 |
| TT | twopair | 29% | 9% | 8% | 5% | 0–5bb | g3 |
| 88 | twopair | 28% | 9% | 8% | 4% | 0–5bb | g3 |
| JJ | twopair | 25% | 6% | 7% | 4% | 0–5bb | g3 |
| QQ | twopair | 21% | 6% | 6% | 1% | 0–5bb | g3 |
| KK | twopair | 21% | 4% | 4% | 4% | 0–5bb | g3 |
| KQ | twopair | 21% | 4% | 6% | 3% | 0–5bb | g4 |
| KJ | twopair | 18% | 3% | 4% | 3% | 0–5bb | g4 |
| KT | twopair | 16% | 3% | 3% | 4% | 0–5bb | g4 |
| K8 | twopair | 16% | 2% | 3% | 3% | 0–5bb | g4 |
| QJ | twopair | 10% | 1% | 1% | 3% | 0–5bb | g4 |
| J8 | twopair | 9% | 0% | 0% | 3% | 0–5bb | g4 |
| JT | twopair | 8% | 0% | 0% | 4% | 0–5bb | g4 |
| T8 | twopair | 8% | 0% | 0% | 4% | 0–5bb | g4 |
| QT | twopair | 7% | 0% | 0% | 3% | 0–5bb | g4 |
| Q8 | twopair | 6% | 0% | 0% | 2% | 0–5bb | g4 |
| K7 | tpmk | 8% | 0% | 0% | 3% | 0–5bb | g5 |
| K2 | tpmk | 8% | 0% | 0% | 4% | 0–5bb | g5 |
| K6 | tpmk | 7% | 0% | 0% | 3% | 0–5bb | g5 |
| K5 | tpmk | 7% | 0% | 0% | 4% | 0–5bb | g5 |
| K4 | tpmk | 7% | 0% | 0% | 3% | 0–5bb | g5 |
| K3 | tpmk | 7% | 0% | 0% | 4% | 0–5bb | g5 |
| Q7 | mp | 4% | 0% | 0% | 1% | 0–5bb | g6 |
| Q5 | mp | 4% | 0% | 0% | 1% | 0–5bb | g6 |
| Q6 | mp | 4% | 0% | 0% | 1% | 0–5bb | g6 |
| J7 | bp | 2% | 0% | 0% | 0% | 0–5bb | g7 |
| T7 | bp | 1% | 0% | 0% | 0% | 0–5bb | g7 |
| 87 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 86 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 77 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 66 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 55 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 44 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 33 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 22 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
