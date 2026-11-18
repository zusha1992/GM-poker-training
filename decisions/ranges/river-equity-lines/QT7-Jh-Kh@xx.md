# QT7-Jh-Kh@xx river (Q♥ T♦ 7♠ J♥ K♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♥ flushes: AT–A2, T9–T7, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 99% | 98% | 98% | 93% |
| g2 | 25–50bb | Straights | AA, AK–A2 | 83% | 72% | 72% | 56% |
| g3 | 0–5bb | Straights | 99, K9, Q9, J9, T9, 98–96 | 61% | 27% | 27% | 29% |
| g4 | 0–5bb | Sets | KK–TT, 77 | 53% | 14% | 14% | 25% |
| g5 | 0–5bb | Two pair | KQ–KT, K7, QJ, QT, Q7, JT, J7, T7 | 47% | 7% | 7% | 25% |
| g6 | 0–5bb | Top pair, weak kicker | K8, K6–K2 | 38% | 0% | 0% | 22% |
| g7 | 0–5bb | Second pair | Q8, Q6, Q5 | 32% | 0% | 0% | 22% |
| g8 | 0–5bb | Small pairs | 88, 66–22, J8, T8, 87, 76, 75 | 16% | 0% | 0% | 12% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A6+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A5+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| T9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| T7+fl | flush | 98% | 96% | 96% | 92% | 50–100bb | g1 |
| T8+fl | flush | 99% | 96% | 96% | 91% | 50–100bb | g1 |
| 97+fl | flush | 97% | 96% | 96% | 88% | 50–100bb | g1 |
| 87+fl | flushlo | 97% | 96% | 96% | 88% | 50–100bb | g1 |
| 76+fl | flushlo | 97% | 96% | 96% | 88% | 50–100bb | g1 |
| 96+fl | flush | 97% | 96% | 96% | 87% | 50–100bb | g1 |
| 98+fl | flush | 97% | 96% | 96% | 87% | 50–100bb | g1 |
| 75+fl | flushlo | 97% | 96% | 95% | 86% | 50–100bb | g1 |
| 86+fl | flushlo | 97% | 96% | 96% | 86% | 50–100bb | g1 |
| 65+fl | flushlo | 96% | 96% | 96% | 84% | 50–100bb | g1 |
| 64+fl | flushlo | 96% | 95% | 96% | 83% | 50–100bb | g1 |
| 54+fl | flushlo | 96% | 95% | 95% | 81% | 50–100bb | g1 |
| 43+fl | flushlo | 94% | 95% | 96% | 80% | 50–100bb | g1 |
| AA | straight | 86% | 77% | 77% | 59% | 50–100bb | g2 |
| AK | straight | 82% | 71% | 71% | 57% | 50–100bb | g2 |
| AQ | straight | 82% | 70% | 70% | 57% | 50–100bb | g2 |
| AJ | straight | 82% | 71% | 71% | 57% | 50–100bb | g2 |
| A4 | straight | 83% | 72% | 72% | 56% | 50–100bb | g2 |
| A2 | straight | 82% | 72% | 72% | 56% | 50–100bb | g2 |
| A8 | straight | 82% | 72% | 72% | 55% | 50–100bb | g2 |
| A9 | straight | 83% | 70% | 70% | 55% | 50–100bb | g2 |
| A5 | straight | 83% | 73% | 73% | 55% | 50–100bb | g2 |
| A6 | straight | 83% | 72% | 72% | 55% | 50–100bb | g2 |
| A3 | straight | 82% | 71% | 72% | 55% | 50–100bb | g2 |
| AT | straight | 82% | 71% | 71% | 55% | 50–100bb | g2 |
| A7 | straight | 83% | 73% | 72% | 55% | 50–100bb | g2 |
| 99 | straight | 64% | 28% | 27% | 29% | 0–5bb | g3 |
| 98 | straight | 62% | 29% | 29% | 28% | 0–5bb | g3 |
| T9 | straight | 62% | 28% | 27% | 27% | 0–5bb | g3 |
| 96 | straight | 62% | 29% | 29% | 27% | 0–5bb | g3 |
| 97 | straight | 62% | 28% | 27% | 27% | 0–5bb | g3 |
| Q9 | straight | 60% | 26% | 27% | 29% | 0–5bb | g3 |
| J9 | straight | 60% | 27% | 26% | 29% | 0–5bb | g3 |
| K9 | straight | 60% | 27% | 27% | 29% | 0–5bb | g3 |
| 77 | twopair | 54% | 15% | 16% | 25% | 0–5bb | g4 |
| TT | twopair | 54% | 14% | 13% | 22% | 0–5bb | g4 |
| QQ | twopair | 52% | 13% | 13% | 26% | 0–5bb | g4 |
| JJ | twopair | 52% | 13% | 13% | 26% | 0–5bb | g4 |
| KK | twopair | 51% | 14% | 14% | 25% | 0–5bb | g4 |
| KQ | twopair | 50% | 12% | 12% | 26% | 0–5bb | g5 |
| KT | twopair | 50% | 10% | 9% | 23% | 0–5bb | g5 |
| K7 | twopair | 48% | 9% | 10% | 25% | 0–5bb | g5 |
| KJ | twopair | 48% | 11% | 11% | 26% | 0–5bb | g5 |
| QJ | twopair | 46% | 6% | 6% | 26% | 0–5bb | g5 |
| QT | twopair | 46% | 3% | 4% | 23% | 0–5bb | g5 |
| Q7 | twopair | 44% | 3% | 3% | 23% | 0–5bb | g5 |
| JT | twopair | 44% | 1% | 1% | 24% | 0–5bb | g5 |
| T7 | twopair | 42% | 0% | 0% | 20% | 0–5bb | g5 |
| J7 | twopair | 41% | 0% | 0% | 24% | 0–5bb | g5 |
| K8 | tpmk | 40% | 0% | 0% | 22% | 0–5bb | g6 |
| K2 | tpmk | 39% | 0% | 0% | 23% | 0–5bb | g6 |
| K4 | tpmk | 38% | 0% | 0% | 22% | 0–5bb | g6 |
| K6 | tpmk | 37% | 0% | 0% | 23% | 0–5bb | g6 |
| K5 | tpmk | 36% | 0% | 0% | 20% | 0–5bb | g6 |
| K3 | tpmk | 36% | 0% | 0% | 22% | 0–5bb | g6 |
| Q8 | mp | 33% | 0% | 0% | 23% | 0–5bb | g7 |
| Q6 | mp | 32% | 0% | 0% | 22% | 0–5bb | g7 |
| Q5 | mp | 31% | 0% | 0% | 21% | 0–5bb | g7 |
| J8 | bp | 29% | 0% | 0% | 23% | 0–5bb | g8 |
| T8 | bp | 24% | 0% | 0% | 21% | 0–5bb | g8 |
| 88 | spp | 22% | 0% | 0% | 15% | 0–5bb | g8 |
| 87 | bp | 21% | 0% | 0% | 12% | 0–5bb | g8 |
| 76 | bp | 19% | 0% | 0% | 12% | 0–5bb | g8 |
| 75 | bp | 18% | 0% | 0% | 11% | 0–5bb | g8 |
| 66 | spp | 15% | 0% | 0% | 9% | 0–5bb | g8 |
| 55 | spp | 14% | 0% | 0% | 10% | 0–5bb | g8 |
| 44 | spp | 11% | 0% | 0% | 11% | 0–5bb | g8 |
| 33 | spp | 10% | 0% | 0% | 11% | 0–5bb | g8 |
| 22 | spp | 8% | 0% | 0% | 11% | 0–5bb | g8 |
