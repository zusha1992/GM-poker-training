# KQT-7c-9c@xx river (K♦ Q♣ T♥ 7♣ 9♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♣ flushes: AK, AJ, AT, A8, A6–A2, KJ, KT, K8, K6–K2, JT, J8, T8, 86, 65, 64, 54, 43 | 98% | 99% | 99% | 93% |
| g2 | 25–50bb | A-high straights | AJ | 91% | 95% | 93% | 72% |
| g3 | 25–50bb | K-high straights | JJ, KJ, QJ, JT–J7 | 84% | 89% | 83% | 72% |
| g4 | 25–50bb | T-high straights | 86 | 72% | 79% | 73% | 69% |
| g5 | 15–25bb | Sets | KK, QQ, TT, 99, 77 | 72% | 78% | 69% | 69% |
| g6 | 15–25bb | Two pair | KQ, KT, K9, K7, QT, Q9, Q7, T9, T7, 97 | 67% | 62% | 47% | 68% |
| g7 | 0–5bb | Overpair | AA | 55% | 35% | 11% | 64% |
| g8 | 0–5bb | Top pair | AK, K8, K6–K2 | 58% | 34% | 5% | 60% |
| g9 | 0–5bb | Second pair | AQ, Q8, Q6, Q5 | 53% | 26% | 0% | 45% |
| g10 | 0–5bb | Small pairs | 88, 66–22, AT, A9, A7, T8, 98, 96, 87, 76, 75 | 34% | 7% | 0% | 37% |
| g11 | Pot is too big | Ace-high | A8, A6–A2 | 14% | 0% | 0% | 27% |

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
| K3+fl | flush | 99% | 100% | 100% | 94% | 50–100bb | g1 |
| K2+fl | flush | 99% | 100% | 100% | 94% | 50–100bb | g1 |
| K8+fl | flush | 99% | 100% | 100% | 93% | 50–100bb | g1 |
| KT+fl | flush | 99% | 100% | 100% | 93% | 50–100bb | g1 |
| K4+fl | flush | 98% | 100% | 100% | 93% | 50–100bb | g1 |
| K6+fl | flush | 99% | 100% | 100% | 93% | 50–100bb | g1 |
| KJ+fl | flush | 98% | 100% | 100% | 92% | 50–100bb | g1 |
| K5+fl | flush | 98% | 100% | 100% | 92% | 50–100bb | g1 |
| T8+fl | flushlo | 96% | 97% | 96% | 87% | 50–100bb | g1 |
| J8+fl | flush | 97% | 97% | 96% | 85% | 50–100bb | g1 |
| 86+fl | flushlo | 96% | 97% | 95% | 85% | 50–100bb | g1 |
| JT+fl | flush | 97% | 96% | 95% | 84% | 50–100bb | g1 |
| 65+fl | flushlo | 96% | 97% | 95% | 84% | 50–100bb | g1 |
| 64+fl | flushlo | 96% | 97% | 95% | 81% | 50–100bb | g1 |
| 54+fl | flushlo | 95% | 96% | 95% | 81% | 50–100bb | g1 |
| 43+fl | flushlo | 95% | 97% | 95% | 80% | 50–100bb | g1 |
| AJ | straight | 90% | 95% | 93% | 72% | 50–100bb | g2 |
| JJ | straight | 86% | 91% | 86% | 72% | 50–100bb | g3 |
| J7 | straight | 83% | 87% | 82% | 72% | 50–100bb | g3 |
| JT | straight | 83% | 88% | 83% | 72% | 50–100bb | g3 |
| J9 | straight | 84% | 88% | 83% | 72% | 50–100bb | g3 |
| KJ | straight | 83% | 89% | 84% | 72% | 50–100bb | g3 |
| QJ | straight | 83% | 88% | 83% | 71% | 50–100bb | g3 |
| J8 | straight | 83% | 88% | 84% | 70% | 50–100bb | g3 |
| 86 | straight | 72% | 79% | 73% | 68% | 50–100bb | g4 |
| KK | twopair | 73% | 80% | 71% | 71% | 50–100bb | g5 |
| 77 | twopair | 72% | 78% | 68% | 70% | 50–100bb | g5 |
| TT | twopair | 74% | 78% | 69% | 69% | 50–100bb | g5 |
| QQ | twopair | 72% | 78% | 70% | 68% | 50–100bb | g5 |
| 99 | twopair | 71% | 77% | 67% | 68% | 50–100bb | g5 |
| K7 | twopair | 69% | 68% | 54% | 70% | 50–100bb | g6 |
| KQ | twopair | 72% | 77% | 67% | 69% | 50–100bb | g6 |
| K9 | twopair | 68% | 70% | 56% | 69% | 50–100bb | g6 |
| QT | twopair | 66% | 59% | 44% | 68% | 50–100bb | g6 |
| KT | twopair | 70% | 74% | 62% | 67% | 50–100bb | g6 |
| T9 | twopair | 62% | 44% | 22% | 67% | 50–100bb | g6 |
| Q7 | twopair | 62% | 49% | 31% | 67% | 50–100bb | g6 |
| Q9 | twopair | 65% | 53% | 36% | 66% | 50–100bb | g6 |
| 97 | twopair | 61% | 39% | 16% | 64% | 50–100bb | g6 |
| T7 | twopair | 60% | 40% | 16% | 63% | 50–100bb | g6 |
| AA | op | 55% | 35% | 11% | 64% | 50–100bb | g7 |
| K8 | tpmk | 59% | 33% | 7% | 64% | 50–100bb | g8 |
| AK | tpgk | 58% | 36% | 8% | 63% | 50–100bb | g8 |
| K6 | tpmk | 58% | 32% | 3% | 56% | 50–100bb | g8 |
| K4 | tpmk | 57% | 32% | 2% | 55% | 50–100bb | g8 |
| K5 | tpmk | 56% | 32% | 2% | 54% | 50–100bb | g8 |
| K2 | tpmk | 55% | 32% | 2% | 54% | 50–100bb | g8 |
| K3 | tpmk | 56% | 31% | 2% | 53% | 50–100bb | g8 |
| Q8 | mp | 54% | 26% | 0% | 48% | 0–5bb | g9 |
| AQ | mp | 53% | 28% | 0% | 44% | 0–5bb | g9 |
| Q5 | mp | 52% | 22% | 0% | 45% | 0–5bb | g9 |
| Q6 | mp | 51% | 23% | 0% | 46% | 0–5bb | g9 |
| T8 | bp | 47% | 14% | 0% | 43% | 0–5bb | g10 |
| AT | bp | 47% | 17% | 0% | 42% | 0–5bb | g10 |
| A9 | bp | 42% | 13% | 0% | 35% | 0–5bb | g10 |
| 98 | bp | 42% | 11% | 0% | 37% | 0–5bb | g10 |
| 96 | bp | 40% | 10% | 0% | 37% | 0–5bb | g10 |
| 88 | spp | 37% | 7% | 0% | 37% | 0–5bb | g10 |
| A7 | bp | 34% | 6% | 0% | 36% | 0–5bb | g10 |
| 87 | bp | 34% | 4% | 0% | 38% | 0–5bb | g10 |
| 75 | bp | 32% | 4% | 0% | 36% | 0–5bb | g10 |
| 76 | bp | 32% | 4% | 0% | 36% | 0–5bb | g10 |
| 66 | spp | 29% | 2% | 0% | 37% | 0–5bb | g10 |
| 55 | spp | 26% | 1% | 0% | 35% | 0–5bb | g10 |
| 44 | spp | 24% | 1% | 0% | 36% | 0–5bb | g10 |
| 33 | spp | 22% | 0% | 0% | 35% | 0–5bb | g10 |
| 22 | spp | 21% | 0% | 0% | 35% | 0–5bb | g10 |
| A6 | khnd | 14% | 0% | 0% | 28% | Pot is too big | g11 |
| A2 | khnd | 14% | 0% | 0% | 27% | Pot is too big | g11 |
| A5 | khnd | 13% | 0% | 0% | 27% | Pot is too big | g11 |
| A4 | khnd | 13% | 0% | 0% | 27% | Pot is too big | g11 |
| A8 | khnd | 13% | 0% | 0% | 30% | Pot is too big | g11 |
| A3 | khnd | 13% | 0% | 0% | 27% | Pot is too big | g11 |
