# KQT-7c-9c@xx river (K♦ Q♣ T♥ 7♣ 9♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♣ flushes: AK, AJ, AT, A8, A6–A2, KJ, KT, K8, K6–K2, JT, J8, T8, 86, 65, 64, 54, 43 | 98% | 99% | 99% | 93% |
| g2 | 25–50bb | Straights | JJ, AJ, KJ, QJ, JT–J7, 86 | 85% | 90% | 85% | 71% |
| g3 | 15–25bb | Sets | KK, QQ, TT, 99, 77 | 72% | 78% | 69% | 69% |
| g4 | 15–25bb | Two pair | KQ, KT, K9, K7, QT, Q9, Q7, T9, T7, 97 | 67% | 62% | 46% | 67% |
| g5 | 0–5bb | Overpair | AA | 57% | 36% | 12% | 64% |
| g6 | 0–5bb | Top pair | AK, K8, K6–K2 | 58% | 34% | 5% | 59% |
| g7 | 0–5bb | Second pair | AQ, Q8, Q6, Q5 | 54% | 26% | 0% | 46% |
| g8 | 0–5bb | Small pairs | 88, 66–22, AT, A9, A7, T8, 98, 96, 87, 76, 75 | 34% | 7% | 0% | 37% |
| g9 | Pot is too big | Ace-high | A8, A6–A2 | 14% | 0% | 0% | 28% |

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
| K2+fl | flush | 99% | 100% | 100% | 94% | 50–100bb | g1 |
| K3+fl | flush | 99% | 100% | 100% | 94% | 50–100bb | g1 |
| K8+fl | flush | 99% | 100% | 100% | 93% | 50–100bb | g1 |
| K6+fl | flush | 99% | 100% | 100% | 93% | 50–100bb | g1 |
| K4+fl | flush | 98% | 100% | 100% | 93% | 50–100bb | g1 |
| KT+fl | flush | 99% | 100% | 100% | 93% | 50–100bb | g1 |
| KJ+fl | flush | 98% | 100% | 100% | 93% | 50–100bb | g1 |
| K5+fl | flush | 98% | 100% | 100% | 92% | 50–100bb | g1 |
| T8+fl | flushlo | 96% | 97% | 96% | 87% | 50–100bb | g1 |
| 86+fl | flushlo | 96% | 97% | 95% | 86% | 50–100bb | g1 |
| J8+fl | flush | 97% | 97% | 96% | 85% | 50–100bb | g1 |
| JT+fl | flush | 97% | 97% | 95% | 84% | 50–100bb | g1 |
| 64+fl | flushlo | 95% | 97% | 95% | 84% | 50–100bb | g1 |
| 65+fl | flushlo | 96% | 97% | 95% | 84% | 50–100bb | g1 |
| 43+fl | flushlo | 95% | 96% | 95% | 81% | 50–100bb | g1 |
| 54+fl | flushlo | 95% | 96% | 95% | 80% | 50–100bb | g1 |
| JJ | straight | 86% | 90% | 87% | 73% | 50–100bb | g2 |
| AJ | straight | 90% | 94% | 92% | 72% | 50–100bb | g2 |
| KJ | straight | 84% | 89% | 84% | 72% | 50–100bb | g2 |
| JT | straight | 83% | 89% | 83% | 71% | 50–100bb | g2 |
| QJ | straight | 83% | 88% | 82% | 71% | 50–100bb | g2 |
| J9 | straight | 83% | 87% | 82% | 71% | 50–100bb | g2 |
| J7 | straight | 84% | 88% | 82% | 71% | 50–100bb | g2 |
| J8 | straight | 83% | 88% | 84% | 70% | 50–100bb | g2 |
| 86 | straight | 72% | 79% | 71% | 67% | 50–100bb | g2 |
| KK | twopair | 72% | 80% | 70% | 71% | 50–100bb | g3 |
| 99 | twopair | 73% | 77% | 67% | 69% | 50–100bb | g3 |
| QQ | twopair | 73% | 79% | 69% | 68% | 50–100bb | g3 |
| TT | twopair | 72% | 79% | 70% | 68% | 50–100bb | g3 |
| 77 | twopair | 70% | 77% | 69% | 68% | 50–100bb | g3 |
| KQ | twopair | 72% | 76% | 65% | 69% | 50–100bb | g4 |
| K7 | twopair | 68% | 68% | 53% | 68% | 50–100bb | g4 |
| KT | twopair | 71% | 73% | 62% | 68% | 50–100bb | g4 |
| QT | twopair | 67% | 60% | 44% | 67% | 50–100bb | g4 |
| K9 | twopair | 69% | 70% | 55% | 67% | 50–100bb | g4 |
| Q7 | twopair | 63% | 50% | 30% | 67% | 50–100bb | g4 |
| Q9 | twopair | 65% | 54% | 35% | 67% | 50–100bb | g4 |
| T9 | twopair | 62% | 45% | 22% | 66% | 50–100bb | g4 |
| 97 | twopair | 60% | 39% | 15% | 64% | 50–100bb | g4 |
| T7 | twopair | 60% | 40% | 17% | 63% | 50–100bb | g4 |
| AA | op | 57% | 36% | 12% | 64% | 50–100bb | g5 |
| K8 | tpmk | 59% | 34% | 6% | 64% | 50–100bb | g6 |
| AK | tpgk | 58% | 37% | 8% | 62% | 50–100bb | g6 |
| K6 | tpmk | 58% | 32% | 2% | 56% | 50–100bb | g6 |
| K4 | tpmk | 57% | 30% | 2% | 54% | 50–100bb | g6 |
| K2 | tpmk | 56% | 31% | 2% | 54% | 50–100bb | g6 |
| K3 | tpmk | 57% | 32% | 2% | 54% | 50–100bb | g6 |
| K5 | tpmk | 56% | 31% | 2% | 54% | 50–100bb | g6 |
| Q8 | mp | 56% | 26% | 0% | 46% | 0–5bb | g7 |
| AQ | mp | 54% | 28% | 0% | 45% | 0–5bb | g7 |
| Q6 | mp | 52% | 21% | 0% | 46% | 0–5bb | g7 |
| Q5 | mp | 51% | 22% | 0% | 46% | 0–5bb | g7 |
| AT | bp | 48% | 17% | 0% | 43% | 0–5bb | g8 |
| T8 | bp | 47% | 16% | 0% | 43% | 0–5bb | g8 |
| 98 | bp | 42% | 11% | 0% | 37% | 0–5bb | g8 |
| A9 | bp | 42% | 13% | 0% | 36% | 0–5bb | g8 |
| 96 | bp | 40% | 9% | 0% | 37% | 0–5bb | g8 |
| 88 | spp | 37% | 8% | 0% | 37% | 0–5bb | g8 |
| 87 | bp | 34% | 4% | 0% | 37% | 0–5bb | g8 |
| A7 | bp | 34% | 6% | 0% | 36% | 0–5bb | g8 |
| 76 | bp | 31% | 4% | 0% | 36% | 0–5bb | g8 |
| 75 | bp | 31% | 4% | 0% | 37% | 0–5bb | g8 |
| 66 | spp | 28% | 2% | 0% | 37% | 0–5bb | g8 |
| 55 | spp | 25% | 1% | 0% | 36% | 0–5bb | g8 |
| 44 | spp | 24% | 1% | 0% | 35% | 0–5bb | g8 |
| 33 | spp | 23% | 0% | 0% | 36% | 0–5bb | g8 |
| 22 | spp | 21% | 0% | 0% | 35% | 0–5bb | g8 |
| A8 | khnd | 14% | 0% | 0% | 29% | Pot is too big | g9 |
| A3 | khnd | 14% | 0% | 0% | 28% | Pot is too big | g9 |
| A2 | khnd | 14% | 0% | 0% | 27% | Pot is too big | g9 |
| A5 | khnd | 13% | 0% | 0% | 26% | Pot is too big | g9 |
| A6 | khnd | 13% | 0% | 0% | 28% | Pot is too big | g9 |
| A4 | khnd | 13% | 0% | 0% | 27% | Pot is too big | g9 |
