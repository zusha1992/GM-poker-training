# KQT-Jd-8d@bx river (K♦ Q♣ T♥ J♦ 8♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AQ, AT, A9, A7–A2, QT, Q9, Q7–Q5, T9, T7, 97, 96, 76, 75, 65, 64, 54, 43 | 97% | 98% | 98% | 92% |
| g2 | 25–50bb | A-high straights | AA, AK–A2 | 81% | 81% | 80% | 57% |
| g3 | 0–5bb | K-high straights | 99, K9, Q9, J9, T9, 98–96 | 59% | 43% | 43% | 34% |
| g4 | 0–5bb | Sets | KK–TT, 88 | 46% | 25% | 25% | 31% |
| g5 | 0–5bb | Two pair | KQ–KT, K8, QJ, QT, Q8, JT, J8, T8 | 37% | 14% | 14% | 30% |
| g6 | 0–5bb | Top pair, weak kicker | K7–K2 | 18% | 0% | 0% | 31% |
| g7 | 0–5bb | Second pair | Q7–Q5 | 8% | 0% | 0% | 16% |
| g8 | 0–5bb | Small pairs | 77–22, J7, T7, 87, 86 | 0% | 0% | 0% | 1% |

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
| Q9+fl | flush | 98% | 96% | 96% | 95% | 50–100bb | g1 |
| Q7+fl | flush | 98% | 96% | 96% | 94% | 50–100bb | g1 |
| Q6+fl | flush | 97% | 96% | 96% | 94% | 50–100bb | g1 |
| QT+fl | flush | 97% | 95% | 95% | 94% | 50–100bb | g1 |
| Q5+fl | flush | 97% | 95% | 95% | 93% | 50–100bb | g1 |
| T7+fl | flush | 93% | 96% | 95% | 84% | 50–100bb | g1 |
| T9+fl | flush | 93% | 96% | 96% | 83% | 50–100bb | g1 |
| 75+fl | flushlo | 93% | 96% | 96% | 83% | 50–100bb | g1 |
| 76+fl | flushlo | 94% | 96% | 96% | 82% | 50–100bb | g1 |
| 97+fl | flushlo | 93% | 97% | 97% | 82% | 50–100bb | g1 |
| 65+fl | flushlo | 93% | 96% | 95% | 81% | 50–100bb | g1 |
| 64+fl | flushlo | 93% | 96% | 95% | 81% | 50–100bb | g1 |
| 96+fl | flushlo | 92% | 97% | 97% | 81% | 50–100bb | g1 |
| 54+fl | flushlo | 93% | 94% | 94% | 81% | 50–100bb | g1 |
| 43+fl | flushlo | 93% | 95% | 95% | 81% | 50–100bb | g1 |
| AA | straight | 84% | 85% | 85% | 60% | 50–100bb | g2 |
| A9 | straight | 81% | 80% | 79% | 58% | 50–100bb | g2 |
| AK | straight | 79% | 79% | 80% | 57% | 50–100bb | g2 |
| A7 | straight | 81% | 81% | 81% | 57% | 50–100bb | g2 |
| A4 | straight | 81% | 81% | 80% | 57% | 50–100bb | g2 |
| AJ | straight | 81% | 79% | 80% | 57% | 50–100bb | g2 |
| A5 | straight | 81% | 81% | 80% | 57% | 50–100bb | g2 |
| A3 | straight | 81% | 81% | 80% | 57% | 50–100bb | g2 |
| A8 | straight | 81% | 81% | 80% | 57% | 50–100bb | g2 |
| A2 | straight | 81% | 80% | 81% | 57% | 50–100bb | g2 |
| A6 | straight | 81% | 80% | 80% | 56% | 50–100bb | g2 |
| AT | straight | 81% | 79% | 80% | 56% | 50–100bb | g2 |
| AQ | straight | 81% | 79% | 79% | 54% | 50–100bb | g2 |
| 99 | straight | 62% | 46% | 45% | 36% | 0–5bb | g3 |
| 97 | straight | 60% | 44% | 46% | 34% | 0–5bb | g3 |
| T9 | straight | 60% | 43% | 43% | 34% | 0–5bb | g3 |
| J9 | straight | 60% | 43% | 43% | 35% | 0–5bb | g3 |
| 98 | straight | 60% | 44% | 44% | 35% | 0–5bb | g3 |
| 96 | straight | 59% | 44% | 44% | 33% | 0–5bb | g3 |
| Q9 | straight | 59% | 42% | 42% | 30% | 0–5bb | g3 |
| K9 | straight | 57% | 43% | 43% | 36% | 0–5bb | g3 |
| TT | twopair | 48% | 25% | 26% | 32% | 0–5bb | g4 |
| 88 | twopair | 48% | 27% | 28% | 34% | 0–5bb | g4 |
| QQ | twopair | 46% | 25% | 25% | 23% | 0–5bb | g4 |
| JJ | twopair | 46% | 23% | 22% | 31% | 0–5bb | g4 |
| KK | twopair | 43% | 23% | 23% | 32% | 0–5bb | g4 |
| KQ | twopair | 45% | 23% | 24% | 29% | 0–5bb | g5 |
| KJ | twopair | 42% | 21% | 21% | 32% | 0–5bb | g5 |
| KT | twopair | 42% | 18% | 19% | 33% | 0–5bb | g5 |
| K8 | twopair | 40% | 18% | 19% | 34% | 0–5bb | g5 |
| QJ | twopair | 35% | 12% | 12% | 28% | 0–5bb | g5 |
| QT | twopair | 31% | 9% | 10% | 26% | 0–5bb | g5 |
| Q8 | twopair | 31% | 10% | 9% | 24% | 0–5bb | g5 |
| JT | twopair | 30% | 5% | 5% | 31% | 0–5bb | g5 |
| J8 | twopair | 28% | 3% | 3% | 32% | 0–5bb | g5 |
| T8 | twopair | 27% | 2% | 2% | 31% | 0–5bb | g5 |
| K4 | tpmk | 19% | 0% | 0% | 30% | 0–5bb | g6 |
| K2 | tpmk | 18% | 0% | 0% | 31% | 0–5bb | g6 |
| K5 | tpmk | 18% | 0% | 0% | 30% | 0–5bb | g6 |
| K6 | tpmk | 18% | 0% | 0% | 31% | 0–5bb | g6 |
| K3 | tpmk | 18% | 0% | 0% | 31% | 0–5bb | g6 |
| K7 | tpmk | 17% | 0% | 0% | 32% | 0–5bb | g6 |
| Q6 | mp | 8% | 0% | 0% | 17% | 0–5bb | g7 |
| Q5 | mp | 8% | 0% | 0% | 16% | 0–5bb | g7 |
| Q7 | mp | 7% | 0% | 0% | 16% | 0–5bb | g7 |
| J7 | bp | 4% | 0% | 0% | 8% | 0–5bb | g8 |
| T7 | bp | 2% | 0% | 0% | 3% | 0–5bb | g8 |
| 86 | bp | 1% | 0% | 0% | 0% | 0–5bb | g8 |
| 87 | bp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 77 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 66 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 55 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 44 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 33 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 22 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
