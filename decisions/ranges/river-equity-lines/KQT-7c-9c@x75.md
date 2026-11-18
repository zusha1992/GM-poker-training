# KQT-7c-9c@x75 river (K♦ Q♣ T♥ 7♣ 9♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♣ flushes: AK, AJ, AT, A8, A6–A2, KJ, KT, K8, K6–K2, JT, J8, T8, 86, 65, 64, 54, 43 | 98% | 100% | 99% | 96% |
| g2 | 25–50bb | A-high straights | AJ | 93% | 97% | 97% | 82% |
| g3 | 25–50bb | K-high straights | JJ, KJ, QJ, JT–J7 | 84% | 81% | 79% | 61% |
| g4 | 25–50bb | T-high straights | 86 | 69% | 57% | 56% | 34% |
| g5 | 15–25bb | Sets | QQ, TT, 77 | 69% | 54% | 53% | 38% |
| g6 | 5–15bb | Sets | KK, 99 | 70% | 53% | 49% | 31% |
| g7 | 0–5bb | Overpair | AA | 34% | 9% | 5% | 26% |
| g8 | 0–5bb | Two pair | KQ, KT, K9, K7, QT, Q9, Q7, T9, T7, 97 | 57% | 32% | 28% | 29% |
| g9 | 0–5bb | Top pair | AK, K8, K6–K2 | 35% | 7% | 2% | 18% |
| g10 | 0–5bb | Second pair | AQ, Q8, Q6, Q5 | 25% | 3% | 0% | 5% |
| g11 | 0–5bb | Small pairs | 88, 66–22, AT, A9, A7, T8, 98, 96, 87, 76, 75 | 5% | 0% | 0% | 1% |
| g12 | Pot is too big | Ace-high | A8, A6–A2 | 1% | 0% | 0% | 1% |

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
| KT+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| K8+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K2+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K6+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| K4+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| K3+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| K5+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| KJ+fl | flush | 99% | 100% | 100% | 97% | 50–100bb | g1 |
| T8+fl | flushlo | 96% | 98% | 98% | 89% | 50–100bb | g1 |
| 65+fl | flushlo | 95% | 97% | 98% | 88% | 50–100bb | g1 |
| 43+fl | flushlo | 96% | 98% | 98% | 88% | 50–100bb | g1 |
| 86+fl | flushlo | 95% | 98% | 98% | 88% | 50–100bb | g1 |
| 64+fl | flushlo | 95% | 98% | 98% | 88% | 50–100bb | g1 |
| 54+fl | flushlo | 95% | 98% | 97% | 88% | 50–100bb | g1 |
| JT+fl | flush | 95% | 98% | 98% | 87% | 50–100bb | g1 |
| J8+fl | flush | 95% | 99% | 99% | 87% | 50–100bb | g1 |
| AJ | straight | 93% | 97% | 97% | 82% | 50–100bb | g2 |
| JJ | straight | 86% | 84% | 84% | 65% | 50–100bb | g3 |
| J9 | straight | 83% | 79% | 78% | 62% | 50–100bb | g3 |
| JT | straight | 84% | 80% | 78% | 62% | 50–100bb | g3 |
| QJ | straight | 83% | 80% | 78% | 62% | 50–100bb | g3 |
| J8 | straight | 83% | 81% | 79% | 61% | 50–100bb | g3 |
| J7 | straight | 82% | 80% | 79% | 61% | 50–100bb | g3 |
| KJ | straight | 84% | 80% | 79% | 58% | 50–100bb | g3 |
| 86 | straight | 69% | 57% | 56% | 34% | 25–50bb | g4 |
| QQ | twopair | 67% | 53% | 54% | 40% | 25–50bb | g5 |
| 77 | twopair | 68% | 55% | 53% | 37% | 25–50bb | g5 |
| TT | twopair | 71% | 54% | 52% | 37% | 25–50bb | g5 |
| KK | twopair | 72% | 54% | 50% | 26% | 5–15bb | g6 |
| 99 | twopair | 67% | 52% | 48% | 35% | 5–15bb | g6 |
| AA | op | 33% | 9% | 5% | 26% | 0–5bb | g7 |
| KQ | twopair | 67% | 49% | 47% | 33% | 0–5bb | g8 |
| KT | twopair | 66% | 44% | 41% | 28% | 0–5bb | g8 |
| K9 | twopair | 62% | 38% | 35% | 28% | 0–5bb | g8 |
| K7 | twopair | 61% | 39% | 35% | 26% | 0–5bb | g8 |
| QT | twopair | 55% | 29% | 24% | 30% | 0–5bb | g8 |
| Q9 | twopair | 51% | 20% | 17% | 30% | 0–5bb | g8 |
| T9 | twopair | 46% | 14% | 9% | 29% | 0–5bb | g8 |
| Q7 | twopair | 46% | 18% | 15% | 29% | 0–5bb | g8 |
| 97 | twopair | 42% | 10% | 5% | 28% | 0–5bb | g8 |
| T7 | twopair | 41% | 12% | 7% | 27% | 0–5bb | g8 |
| K8 | tpmk | 38% | 7% | 2% | 21% | 0–5bb | g9 |
| AK | tpgk | 37% | 9% | 3% | 23% | 0–5bb | g9 |
| K5 | tpmk | 34% | 6% | 0% | 12% | 0–5bb | g9 |
| K2 | tpmk | 34% | 6% | 1% | 12% | 0–5bb | g9 |
| K4 | tpmk | 33% | 5% | 1% | 12% | 0–5bb | g9 |
| K3 | tpmk | 33% | 5% | 1% | 11% | 0–5bb | g9 |
| K6 | tpmk | 33% | 5% | 1% | 14% | 0–5bb | g9 |
| Q8 | mp | 27% | 3% | 0% | 5% | 0–5bb | g10 |
| AQ | mp | 25% | 4% | 0% | 5% | 0–5bb | g10 |
| Q6 | mp | 23% | 1% | 0% | 6% | 0–5bb | g10 |
| Q5 | mp | 22% | 1% | 0% | 5% | 0–5bb | g10 |
| T8 | bp | 11% | 0% | 0% | 2% | 0–5bb | g11 |
| AT | bp | 10% | 0% | 0% | 3% | 0–5bb | g11 |
| 96 | bp | 10% | 0% | 0% | 1% | 0–5bb | g11 |
| 98 | bp | 10% | 0% | 0% | 1% | 0–5bb | g11 |
| 88 | spp | 9% | 0% | 0% | 1% | 0–5bb | g11 |
| A9 | bp | 8% | 0% | 0% | 1% | 0–5bb | g11 |
| A7 | bp | 3% | 0% | 0% | 1% | 0–5bb | g11 |
| 75 | bp | 1% | 0% | 0% | 1% | 0–5bb | g11 |
| 44 | spp | 1% | 0% | 0% | 1% | 0–5bb | g11 |
| 76 | bp | 1% | 0% | 0% | 1% | 0–5bb | g11 |
| 66 | spp | 1% | 0% | 0% | 1% | 0–5bb | g11 |
| 33 | spp | 1% | 0% | 0% | 1% | 0–5bb | g11 |
| 55 | spp | 1% | 0% | 0% | 1% | 0–5bb | g11 |
| 22 | spp | 1% | 0% | 0% | 1% | 0–5bb | g11 |
| 87 | bp | 1% | 0% | 0% | 1% | 0–5bb | g11 |
| A6 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g12 |
| A3 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g12 |
| A8 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g12 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g12 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g12 |
| A4 | khnd | 0% | 0% | 0% | 1% | Pot is too big | g12 |
