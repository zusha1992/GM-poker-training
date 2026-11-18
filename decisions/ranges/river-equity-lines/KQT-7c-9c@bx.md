# KQT-7c-9c@bx river (K♦ Q♣ T♥ 7♣ 9♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♣ flushes: AK, AJ, AT, A8, A6–A2, KJ, KT, K8, K6–K2, JT, J8, T8, 86, 65, 64, 54, 43 | 98% | 99% | 99% | 93% |
| g2 | 25–50bb | A-high straights | AJ | 92% | 97% | 97% | 76% |
| g3 | 25–50bb | K-high straights | JJ, KJ, QJ, JT–J7 | 84% | 85% | 83% | 72% |
| g4 | 25–50bb | T-high straights | 86 | 71% | 66% | 64% | 64% |
| g5 | 15–25bb | Sets | KK, QQ, TT, 99, 77 | 73% | 64% | 60% | 66% |
| g6 | 15–25bb | Two pair | KQ, KT, K9, K7, QT, Q9, Q7, T9, T7, 97 | 64% | 45% | 39% | 58% |
| g7 | 0–5bb | Overpair | AA | 45% | 15% | 6% | 50% |
| g8 | 0–5bb | Top pair | AK, K8, K6–K2 | 47% | 13% | 3% | 43% |
| g9 | 0–5bb | Second pair | AQ, Q8, Q6, Q5 | 37% | 8% | 0% | 21% |
| g10 | 0–5bb | Small pairs | 88, 66–22, AT, A9, A7, T8, 98, 96, 87, 76, 75 | 11% | 0% | 0% | 12% |
| g11 | Pot is too big | Ace-high | A8, A6–A2 | 3% | 0% | 0% | 5% |

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
| K8+fl | flush | 98% | 100% | 100% | 95% | 50–100bb | g1 |
| K6+fl | flush | 98% | 100% | 100% | 94% | 50–100bb | g1 |
| K2+fl | flush | 98% | 100% | 100% | 94% | 50–100bb | g1 |
| KT+fl | flush | 98% | 100% | 100% | 94% | 50–100bb | g1 |
| K4+fl | flush | 98% | 100% | 100% | 94% | 50–100bb | g1 |
| K3+fl | flush | 98% | 100% | 100% | 94% | 50–100bb | g1 |
| K5+fl | flush | 98% | 100% | 100% | 93% | 50–100bb | g1 |
| KJ+fl | flush | 98% | 100% | 100% | 93% | 50–100bb | g1 |
| T8+fl | flushlo | 95% | 98% | 98% | 84% | 50–100bb | g1 |
| 86+fl | flushlo | 94% | 98% | 98% | 83% | 50–100bb | g1 |
| J8+fl | flush | 95% | 98% | 98% | 83% | 50–100bb | g1 |
| 64+fl | flushlo | 95% | 98% | 97% | 83% | 50–100bb | g1 |
| 65+fl | flushlo | 95% | 98% | 97% | 82% | 50–100bb | g1 |
| 54+fl | flushlo | 94% | 98% | 97% | 82% | 50–100bb | g1 |
| 43+fl | flushlo | 94% | 97% | 98% | 82% | 50–100bb | g1 |
| JT+fl | flush | 94% | 98% | 98% | 80% | 50–100bb | g1 |
| AJ | straight | 92% | 97% | 97% | 76% | 50–100bb | g2 |
| JJ | straight | 86% | 88% | 86% | 73% | 50–100bb | g3 |
| JT | straight | 84% | 84% | 82% | 72% | 50–100bb | g3 |
| QJ | straight | 84% | 84% | 82% | 72% | 50–100bb | g3 |
| J9 | straight | 83% | 84% | 81% | 72% | 50–100bb | g3 |
| J7 | straight | 84% | 84% | 82% | 72% | 50–100bb | g3 |
| KJ | straight | 84% | 85% | 83% | 71% | 50–100bb | g3 |
| J8 | straight | 84% | 85% | 83% | 70% | 50–100bb | g3 |
| 86 | straight | 71% | 66% | 64% | 64% | 50–100bb | g4 |
| QQ | twopair | 72% | 66% | 62% | 68% | 50–100bb | g5 |
| TT | twopair | 74% | 65% | 60% | 67% | 50–100bb | g5 |
| 77 | twopair | 72% | 65% | 61% | 65% | 50–100bb | g5 |
| KK | twopair | 76% | 65% | 62% | 65% | 50–100bb | g5 |
| 99 | twopair | 72% | 61% | 56% | 65% | 50–100bb | g5 |
| KQ | twopair | 72% | 64% | 61% | 65% | 50–100bb | g6 |
| KT | twopair | 70% | 59% | 54% | 60% | 50–100bb | g6 |
| K9 | twopair | 69% | 55% | 48% | 57% | 50–100bb | g6 |
| Q9 | twopair | 60% | 36% | 28% | 56% | 50–100bb | g6 |
| K7 | twopair | 68% | 53% | 46% | 56% | 50–100bb | g6 |
| QT | twopair | 62% | 41% | 37% | 56% | 50–100bb | g6 |
| Q7 | twopair | 57% | 31% | 24% | 55% | 50–100bb | g6 |
| T9 | twopair | 56% | 22% | 13% | 54% | 50–100bb | g6 |
| 97 | twopair | 52% | 17% | 7% | 54% | 50–100bb | g6 |
| T7 | twopair | 50% | 15% | 7% | 52% | 50–100bb | g6 |
| AA | op | 45% | 15% | 6% | 50% | 50–100bb | g7 |
| AK | tpgk | 47% | 15% | 4% | 51% | 50–100bb | g8 |
| K8 | tpmk | 49% | 12% | 3% | 49% | 0–5bb | g8 |
| K3 | tpmk | 47% | 12% | 1% | 35% | 0–5bb | g8 |
| K5 | tpmk | 46% | 12% | 1% | 35% | 0–5bb | g8 |
| K4 | tpmk | 46% | 12% | 1% | 32% | 0–5bb | g8 |
| K6 | tpmk | 45% | 11% | 1% | 35% | 0–5bb | g8 |
| K2 | tpmk | 45% | 11% | 1% | 33% | 0–5bb | g8 |
| Q8 | mp | 39% | 7% | 0% | 22% | 0–5bb | g9 |
| AQ | mp | 38% | 9% | 0% | 20% | 0–5bb | g9 |
| Q6 | mp | 35% | 6% | 0% | 20% | 0–5bb | g9 |
| Q5 | mp | 35% | 6% | 0% | 22% | 0–5bb | g9 |
| AT | bp | 21% | 3% | 0% | 16% | 0–5bb | g10 |
| T8 | bp | 20% | 1% | 0% | 16% | 0–5bb | g10 |
| 96 | bp | 13% | 0% | 0% | 12% | 0–5bb | g10 |
| A9 | bp | 12% | 0% | 0% | 11% | 0–5bb | g10 |
| 98 | bp | 11% | 0% | 0% | 12% | 0–5bb | g10 |
| 88 | spp | 10% | 0% | 0% | 12% | 0–5bb | g10 |
| 22 | spp | 9% | 0% | 0% | 12% | 0–5bb | g10 |
| 75 | bp | 9% | 0% | 0% | 13% | 0–5bb | g10 |
| 44 | spp | 9% | 0% | 0% | 12% | 0–5bb | g10 |
| 33 | spp | 8% | 0% | 0% | 12% | 0–5bb | g10 |
| 55 | spp | 8% | 0% | 0% | 13% | 0–5bb | g10 |
| 76 | bp | 8% | 0% | 0% | 13% | 0–5bb | g10 |
| A7 | bp | 8% | 0% | 0% | 9% | 0–5bb | g10 |
| 87 | bp | 8% | 0% | 0% | 12% | 0–5bb | g10 |
| 66 | spp | 8% | 0% | 0% | 11% | 0–5bb | g10 |
| A2 | khnd | 3% | 0% | 0% | 4% | Pot is too big | g11 |
| A5 | khnd | 3% | 0% | 0% | 5% | Pot is too big | g11 |
| A4 | khnd | 3% | 0% | 0% | 5% | Pot is too big | g11 |
| A3 | khnd | 3% | 0% | 0% | 5% | Pot is too big | g11 |
| A8 | khnd | 3% | 0% | 0% | 4% | Pot is too big | g11 |
| A6 | khnd | 3% | 0% | 0% | 4% | Pot is too big | g11 |
