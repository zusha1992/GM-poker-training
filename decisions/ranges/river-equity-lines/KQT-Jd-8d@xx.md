# KQT-Jd-8d@xx river (K♦ Q♣ T♥ J♦ 8♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AQ, AT, A9, A7–A2, QT, Q9, Q7–Q5, T9, T7, 97, 96, 76, 75, 65, 64, 54, 43 | 98% | 98% | 98% | 91% |
| g2 | 25–50bb | A-high straights | AA, AK–A2 | 81% | 70% | 70% | 56% |
| g3 | 0–5bb | K-high straights | 99, K9, Q9, J9, T9, 98–96 | 61% | 26% | 26% | 32% |
| g4 | 0–5bb | Sets | KK–TT, 88 | 53% | 15% | 15% | 25% |
| g5 | 0–5bb | Two pair | KQ–KT, K8, QJ, QT, Q8, JT, J8, T8 | 46% | 8% | 8% | 25% |
| g6 | 0–5bb | Top pair, weak kicker | K7–K2 | 35% | 0% | 0% | 25% |
| g7 | 0–5bb | Second pair | Q7–Q5 | 31% | 0% | 0% | 14% |
| g8 | 0–5bb | Small pairs | 77–22, J7, T7, 87, 86 | 17% | 0% | 0% | 4% |

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
| QT+fl | flush | 98% | 96% | 96% | 91% | 50–100bb | g1 |
| Q9+fl | flush | 98% | 96% | 96% | 91% | 50–100bb | g1 |
| Q6+fl | flush | 98% | 96% | 97% | 91% | 50–100bb | g1 |
| Q7+fl | flush | 98% | 97% | 96% | 91% | 50–100bb | g1 |
| Q5+fl | flush | 98% | 96% | 96% | 89% | 50–100bb | g1 |
| T9+fl | flush | 97% | 97% | 96% | 85% | 50–100bb | g1 |
| T7+fl | flush | 97% | 96% | 96% | 83% | 50–100bb | g1 |
| 97+fl | flushlo | 96% | 97% | 97% | 82% | 50–100bb | g1 |
| 76+fl | flushlo | 96% | 97% | 97% | 82% | 50–100bb | g1 |
| 96+fl | flushlo | 97% | 97% | 97% | 81% | 50–100bb | g1 |
| 75+fl | flushlo | 96% | 96% | 96% | 81% | 50–100bb | g1 |
| 65+fl | flushlo | 96% | 96% | 96% | 80% | 50–100bb | g1 |
| 64+fl | flushlo | 96% | 96% | 96% | 79% | 50–100bb | g1 |
| 54+fl | flushlo | 95% | 96% | 96% | 78% | 50–100bb | g1 |
| 43+fl | flushlo | 94% | 96% | 97% | 78% | 50–100bb | g1 |
| AA | straight | 84% | 75% | 76% | 59% | 50–100bb | g2 |
| AJ | straight | 81% | 69% | 70% | 56% | 50–100bb | g2 |
| A8 | straight | 81% | 70% | 70% | 56% | 50–100bb | g2 |
| A6 | straight | 81% | 71% | 70% | 56% | 50–100bb | g2 |
| AK | straight | 81% | 69% | 69% | 56% | 50–100bb | g2 |
| A3 | straight | 81% | 70% | 70% | 56% | 50–100bb | g2 |
| A9 | straight | 81% | 69% | 69% | 56% | 50–100bb | g2 |
| A2 | straight | 81% | 71% | 70% | 56% | 50–100bb | g2 |
| A4 | straight | 81% | 70% | 71% | 56% | 50–100bb | g2 |
| A5 | straight | 82% | 71% | 71% | 56% | 50–100bb | g2 |
| AT | straight | 82% | 69% | 70% | 55% | 50–100bb | g2 |
| A7 | straight | 81% | 70% | 70% | 55% | 50–100bb | g2 |
| AQ | straight | 81% | 69% | 69% | 54% | 50–100bb | g2 |
| 97 | straight | 62% | 28% | 28% | 31% | 0–5bb | g3 |
| 98 | straight | 62% | 27% | 26% | 32% | 0–5bb | g3 |
| 99 | straight | 61% | 27% | 28% | 33% | 0–5bb | g3 |
| T9 | straight | 61% | 26% | 26% | 32% | 0–5bb | g3 |
| 96 | straight | 61% | 27% | 29% | 32% | 0–5bb | g3 |
| Q9 | straight | 60% | 25% | 26% | 28% | 0–5bb | g3 |
| K9 | straight | 60% | 26% | 25% | 33% | 0–5bb | g3 |
| J9 | straight | 60% | 26% | 24% | 32% | 0–5bb | g3 |
| QQ | twopair | 53% | 14% | 14% | 20% | 0–5bb | g4 |
| 88 | twopair | 53% | 16% | 16% | 27% | 0–5bb | g4 |
| TT | twopair | 53% | 14% | 15% | 25% | 0–5bb | g4 |
| KK | twopair | 52% | 14% | 14% | 27% | 0–5bb | g4 |
| JJ | twopair | 52% | 15% | 14% | 28% | 0–5bb | g4 |
| KQ | twopair | 50% | 13% | 13% | 23% | 0–5bb | g5 |
| KJ | twopair | 49% | 12% | 11% | 28% | 0–5bb | g5 |
| KT | twopair | 49% | 10% | 10% | 27% | 0–5bb | g5 |
| K8 | twopair | 47% | 11% | 10% | 27% | 0–5bb | g5 |
| QJ | twopair | 46% | 6% | 7% | 24% | 0–5bb | g5 |
| QT | twopair | 45% | 5% | 5% | 21% | 0–5bb | g5 |
| JT | twopair | 43% | 2% | 2% | 25% | 0–5bb | g5 |
| Q8 | twopair | 43% | 4% | 4% | 20% | 0–5bb | g5 |
| J8 | twopair | 40% | 1% | 1% | 25% | 0–5bb | g5 |
| T8 | twopair | 40% | 0% | 0% | 24% | 0–5bb | g5 |
| K5 | tpmk | 36% | 0% | 0% | 24% | 0–5bb | g6 |
| K6 | tpmk | 36% | 0% | 0% | 25% | 0–5bb | g6 |
| K4 | tpmk | 35% | 0% | 0% | 25% | 0–5bb | g6 |
| K2 | tpmk | 35% | 0% | 0% | 26% | 0–5bb | g6 |
| K7 | tpmk | 35% | 0% | 0% | 26% | 0–5bb | g6 |
| K3 | tpmk | 35% | 0% | 0% | 24% | 0–5bb | g6 |
| Q7 | mp | 32% | 0% | 0% | 15% | 0–5bb | g7 |
| Q5 | mp | 31% | 0% | 0% | 14% | 0–5bb | g7 |
| Q6 | mp | 31% | 0% | 0% | 14% | 0–5bb | g7 |
| J7 | bp | 28% | 0% | 0% | 8% | 0–5bb | g8 |
| T7 | bp | 25% | 0% | 0% | 6% | 0–5bb | g8 |
| 87 | bp | 24% | 0% | 0% | 3% | 0–5bb | g8 |
| 86 | bp | 22% | 0% | 0% | 4% | 0–5bb | g8 |
| 77 | spp | 20% | 0% | 0% | 4% | 0–5bb | g8 |
| 66 | spp | 18% | 0% | 0% | 4% | 0–5bb | g8 |
| 55 | spp | 16% | 0% | 0% | 3% | 0–5bb | g8 |
| 44 | spp | 13% | 0% | 0% | 4% | 0–5bb | g8 |
| 33 | spp | 11% | 0% | 0% | 4% | 0–5bb | g8 |
| 22 | spp | 9% | 0% | 0% | 4% | 0–5bb | g8 |
