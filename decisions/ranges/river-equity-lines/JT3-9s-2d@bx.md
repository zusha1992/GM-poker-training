# JT3-9s-2d@bx river (J♠ T♠ 3♣ 9♠ 2♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♠ flushes: AK, AQ, A8–A2, KQ, K8–K2, Q8–Q5, 87, 86, 76, 75, 65, 64, 54, 43 | 99% | 100% | 99% | 96% |
| g2 | 25–50bb | Straights | KQ, Q8, 87 | 92% | 97% | 95% | 75% |
| g3 | 15–25bb | Sets | JJ–99, 33, 22 | 88% | 92% | 85% | 63% |
| g4 | 15–25bb | Two pair | JT, J9, T9 | 84% | 84% | 69% | 58% |
| g5 | 0–5bb | Overpairs | AA–QQ | 81% | 73% | 51% | 61% |
| g6 | 0–5bb | Top pair | AJ, KJ, QJ, J8, J7 | 76% | 70% | 36% | 60% |
| g7 | 0–5bb | Second pair | AT, KT, QT, T8, T7 | 57% | 32% | 0% | 53% |
| g8 | 0–5bb | Small pairs | 88–44, A9, A3, A2, K9, K3, K2, Q9, 98–96, 43 | 27% | 3% | 0% | 34% |
| g9 | Pot is too big | Ace-high | AK, AQ, A8–A4 | 7% | 0% | 0% | 10% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| A8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KQ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| Q8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 87+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AQ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A5+fl | flush | 100% | 99% | 99% | 99% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| A7+fl | flush | 100% | 99% | 99% | 99% | 50–100bb | g1 |
| A3+fl | flush | 99% | 99% | 99% | 99% | 50–100bb | g1 |
| A6+fl | flush | 99% | 99% | 99% | 99% | 50–100bb | g1 |
| AK+fl | flush | 100% | 99% | 99% | 99% | 50–100bb | g1 |
| A2+fl | flush | 100% | 99% | 99% | 99% | 50–100bb | g1 |
| K8+fl | flush | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| K3+fl | flush | 99% | 99% | 99% | 96% | 50–100bb | g1 |
| K6+fl | flush | 98% | 99% | 98% | 96% | 50–100bb | g1 |
| K2+fl | flush | 98% | 99% | 99% | 96% | 50–100bb | g1 |
| K7+fl | flush | 99% | 99% | 98% | 95% | 50–100bb | g1 |
| K4+fl | flush | 98% | 99% | 98% | 95% | 50–100bb | g1 |
| K5+fl | flush | 98% | 99% | 98% | 94% | 50–100bb | g1 |
| 43+fl | flushlo | 97% | 99% | 99% | 94% | 50–100bb | g1 |
| Q7+fl | flush | 98% | 100% | 100% | 93% | 50–100bb | g1 |
| Q6+fl | flush | 97% | 100% | 99% | 93% | 50–100bb | g1 |
| Q5+fl | flush | 97% | 100% | 100% | 93% | 50–100bb | g1 |
| 76+fl | flushlo | 97% | 99% | 98% | 92% | 50–100bb | g1 |
| 86+fl | flushlo | 97% | 100% | 99% | 92% | 50–100bb | g1 |
| 65+fl | flushlo | 97% | 99% | 98% | 92% | 50–100bb | g1 |
| 64+fl | flushlo | 97% | 99% | 98% | 92% | 50–100bb | g1 |
| 75+fl | flushlo | 97% | 99% | 98% | 91% | 50–100bb | g1 |
| 54+fl | flushlo | 96% | 99% | 98% | 89% | 50–100bb | g1 |
| KQ | straight | 93% | 98% | 97% | 79% | 50–100bb | g2 |
| Q8 | straight | 91% | 96% | 93% | 69% | 50–100bb | g2 |
| 87 | straight | 89% | 94% | 90% | 63% | 50–100bb | g2 |
| 33 | twopair | 90% | 93% | 86% | 64% | 50–100bb | g3 |
| JJ | twopair | 87% | 92% | 79% | 63% | 50–100bb | g3 |
| 22 | twopair | 89% | 92% | 85% | 63% | 50–100bb | g3 |
| 99 | twopair | 88% | 93% | 86% | 63% | 50–100bb | g3 |
| TT | twopair | 88% | 91% | 87% | 61% | 50–100bb | g3 |
| J9 | twopair | 86% | 85% | 70% | 59% | 50–100bb | g4 |
| JT | twopair | 85% | 87% | 75% | 58% | 50–100bb | g4 |
| T9 | twopair | 82% | 77% | 61% | 58% | 50–100bb | g4 |
| QQ | op | 82% | 72% | 48% | 64% | 50–100bb | g5 |
| KK | op | 80% | 74% | 51% | 63% | 50–100bb | g5 |
| AA | op | 80% | 72% | 52% | 57% | 50–100bb | g5 |
| QJ | tpmk | 75% | 69% | 32% | 62% | 50–100bb | g6 |
| KJ | tpgk | 78% | 72% | 42% | 61% | 50–100bb | g6 |
| AJ | tpgk | 79% | 73% | 44% | 58% | 50–100bb | g6 |
| J8 | tpmk | 72% | 63% | 21% | 58% | 50–100bb | g6 |
| J7 | tpmk | 70% | 61% | 16% | 57% | 50–100bb | g6 |
| KT | mp | 58% | 34% | 0% | 54% | 50–100bb | g7 |
| AT | mp | 60% | 38% | 0% | 54% | 50–100bb | g7 |
| QT | mp | 54% | 27% | 0% | 52% | 50–100bb | g7 |
| T8 | mp | 52% | 22% | 0% | 47% | 0–5bb | g7 |
| T7 | mp | 50% | 20% | 0% | 46% | 0–5bb | g7 |
| A9 | bp | 43% | 12% | 0% | 43% | 0–5bb | g8 |
| K9 | bp | 41% | 9% | 0% | 44% | 0–5bb | g8 |
| Q9 | bp | 38% | 5% | 0% | 44% | 0–5bb | g8 |
| 98 | bp | 35% | 2% | 0% | 43% | 0–5bb | g8 |
| 97 | bp | 34% | 1% | 0% | 40% | 0–5bb | g8 |
| 96 | bp | 33% | 1% | 0% | 42% | 0–5bb | g8 |
| 88 | spp | 32% | 1% | 0% | 41% | 0–5bb | g8 |
| 77 | spp | 28% | 1% | 0% | 36% | 0–5bb | g8 |
| 66 | spp | 25% | 1% | 0% | 31% | 0–5bb | g8 |
| 55 | spp | 21% | 0% | 0% | 32% | 0–5bb | g8 |
| 44 | spp | 17% | 1% | 0% | 32% | 0–5bb | g8 |
| K3 | bp | 15% | 0% | 0% | 25% | 0–5bb | g8 |
| A3 | bp | 15% | 0% | 0% | 26% | 0–5bb | g8 |
| 43 | bp | 14% | 0% | 0% | 18% | 0–5bb | g8 |
| K2 | bp | 12% | 0% | 0% | 15% | 0–5bb | g8 |
| A2 | bp | 11% | 0% | 0% | 14% | 0–5bb | g8 |
| AQ | khnd | 10% | 0% | 0% | 12% | Pot is too big | g9 |
| AK | khnd | 10% | 0% | 0% | 12% | Pot is too big | g9 |
| A8 | khnd | 8% | 0% | 0% | 12% | Pot is too big | g9 |
| A7 | khnd | 7% | 0% | 0% | 9% | Pot is too big | g9 |
| A6 | khnd | 5% | 0% | 0% | 7% | Pot is too big | g9 |
| A5 | khnd | 5% | 0% | 0% | 7% | Pot is too big | g9 |
| A4 | khnd | 4% | 0% | 0% | 7% | Pot is too big | g9 |
