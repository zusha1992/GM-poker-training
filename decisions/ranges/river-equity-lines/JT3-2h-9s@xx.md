# JT3-2h-9s@xx river (J♠ T♠ 3♣ 2♥ 9♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♠ flushes: AK, AQ, A8–A2, KQ, K8–K2, Q8–Q5, 87, 86, 76, 75, 65, 64, 54, 43 | 98% | 99% | 98% | 94% |
| g2 | 50–100bb | Ace-high | AK, AQ | 29% | 3% | 0% | 53% |
| g3 | 25–50bb | Straights | KQ, Q8, 87 | 89% | 97% | 93% | 76% |
| g4 | 15–25bb | Sets | JJ–99, 33, 22 | 86% | 93% | 81% | 74% |
| g5 | 15–25bb | Two pair | JT, J9, T9 | 81% | 87% | 67% | 74% |
| g6 | 0–5bb | Overpairs | AA–QQ | 78% | 80% | 52% | 73% |
| g7 | 0–5bb | Top pair | AJ, KJ, QJ, J8, J7 | 76% | 79% | 37% | 74% |
| g8 | 0–5bb | Second pair | AT, KT, QT, T8, T7 | 65% | 48% | 0% | 72% |
| g9 | 0–5bb | Small pairs | 88–44, A9, A3, A2, K9, K3, K2, Q9, 98–96, 43 | 43% | 9% | 0% | 67% |
| g10 | Pot is too big | Ace-high | A8–A4 | 21% | 1% | 0% | 39% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| A8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KQ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| Q8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 87+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AQ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 99% | 99% | 50–100bb | g1 |
| A2+fl | flush | 99% | 99% | 98% | 99% | 50–100bb | g1 |
| A4+fl | flush | 100% | 99% | 98% | 99% | 50–100bb | g1 |
| AK+fl | flush | 100% | 99% | 98% | 99% | 50–100bb | g1 |
| A5+fl | flush | 100% | 99% | 98% | 99% | 50–100bb | g1 |
| A6+fl | flush | 100% | 99% | 98% | 99% | 50–100bb | g1 |
| A3+fl | flush | 99% | 99% | 98% | 99% | 50–100bb | g1 |
| K8+fl | flush | 99% | 99% | 99% | 94% | 50–100bb | g1 |
| K7+fl | flush | 98% | 99% | 97% | 93% | 50–100bb | g1 |
| K2+fl | flush | 98% | 99% | 97% | 93% | 50–100bb | g1 |
| K6+fl | flush | 98% | 99% | 97% | 93% | 50–100bb | g1 |
| K4+fl | flush | 98% | 99% | 97% | 93% | 50–100bb | g1 |
| K3+fl | flush | 98% | 99% | 97% | 92% | 50–100bb | g1 |
| K5+fl | flush | 98% | 99% | 97% | 92% | 50–100bb | g1 |
| Q7+fl | flush | 97% | 99% | 98% | 89% | 50–100bb | g1 |
| Q6+fl | flush | 97% | 99% | 98% | 89% | 50–100bb | g1 |
| Q5+fl | flush | 96% | 99% | 98% | 87% | 50–100bb | g1 |
| 86+fl | flushlo | 96% | 99% | 97% | 87% | 50–100bb | g1 |
| 76+fl | flushlo | 96% | 98% | 96% | 86% | 50–100bb | g1 |
| 75+fl | flushlo | 95% | 98% | 95% | 86% | 50–100bb | g1 |
| 65+fl | flushlo | 95% | 98% | 95% | 85% | 50–100bb | g1 |
| 64+fl | flushlo | 95% | 98% | 95% | 85% | 50–100bb | g1 |
| 43+fl | flushlo | 94% | 99% | 96% | 83% | 50–100bb | g1 |
| 54+fl | flushlo | 95% | 98% | 95% | 83% | 50–100bb | g1 |
| AQ | khnd | 29% | 3% | 0% | 54% | 50–100bb | g2 |
| AK | khnd | 28% | 3% | 0% | 52% | 50–100bb | g2 |
| KQ | straight | 90% | 97% | 95% | 78% | 50–100bb | g3 |
| Q8 | straight | 88% | 96% | 90% | 73% | 50–100bb | g3 |
| 87 | straight | 86% | 95% | 89% | 72% | 50–100bb | g3 |
| 33 | twopair | 86% | 94% | 84% | 74% | 50–100bb | g4 |
| JJ | twopair | 85% | 93% | 73% | 74% | 50–100bb | g4 |
| 22 | twopair | 86% | 93% | 83% | 74% | 50–100bb | g4 |
| TT | twopair | 86% | 93% | 82% | 73% | 50–100bb | g4 |
| 99 | twopair | 86% | 93% | 83% | 73% | 50–100bb | g4 |
| JT | twopair | 82% | 89% | 71% | 74% | 50–100bb | g5 |
| J9 | twopair | 82% | 87% | 63% | 74% | 50–100bb | g5 |
| T9 | twopair | 79% | 83% | 63% | 73% | 50–100bb | g5 |
| QQ | op | 78% | 80% | 51% | 75% | 50–100bb | g6 |
| KK | op | 79% | 81% | 54% | 73% | 50–100bb | g6 |
| AA | op | 77% | 78% | 52% | 71% | 50–100bb | g6 |
| QJ | tpmk | 76% | 78% | 34% | 75% | 50–100bb | g7 |
| KJ | tpgk | 77% | 81% | 42% | 74% | 50–100bb | g7 |
| AJ | tpgk | 77% | 80% | 44% | 74% | 50–100bb | g7 |
| J8 | tpmk | 73% | 73% | 24% | 73% | 50–100bb | g7 |
| J7 | tpmk | 73% | 72% | 18% | 73% | 50–100bb | g7 |
| QT | mp | 64% | 43% | 0% | 73% | 50–100bb | g8 |
| KT | mp | 66% | 49% | 0% | 73% | 50–100bb | g8 |
| T8 | mp | 62% | 40% | 0% | 72% | 50–100bb | g8 |
| AT | mp | 67% | 54% | 0% | 72% | 50–100bb | g8 |
| T7 | mp | 60% | 39% | 0% | 70% | 50–100bb | g8 |
| Q9 | bp | 52% | 13% | 0% | 71% | 50–100bb | g9 |
| A9 | bp | 55% | 22% | 0% | 70% | 50–100bb | g9 |
| 88 | spp | 45% | 6% | 0% | 70% | 50–100bb | g9 |
| K9 | bp | 54% | 18% | 0% | 69% | 50–100bb | g9 |
| 97 | bp | 48% | 8% | 0% | 69% | 50–100bb | g9 |
| 98 | bp | 50% | 9% | 0% | 69% | 50–100bb | g9 |
| 96 | bp | 48% | 7% | 0% | 69% | 50–100bb | g9 |
| 55 | spp | 37% | 6% | 0% | 68% | 50–100bb | g9 |
| 44 | spp | 37% | 6% | 0% | 68% | 50–100bb | g9 |
| 66 | spp | 40% | 6% | 0% | 68% | 50–100bb | g9 |
| 77 | spp | 42% | 6% | 0% | 67% | 50–100bb | g9 |
| A3 | bp | 35% | 5% | 0% | 66% | 50–100bb | g9 |
| K3 | bp | 35% | 5% | 0% | 64% | 50–100bb | g9 |
| 43 | bp | 34% | 5% | 0% | 63% | 50–100bb | g9 |
| A2 | bp | 32% | 4% | 0% | 58% | 50–100bb | g9 |
| K2 | bp | 33% | 4% | 0% | 55% | 50–100bb | g9 |
| A8 | khnd | 27% | 2% | 0% | 49% | Pot is too big | g10 |
| A7 | khnd | 23% | 1% | 0% | 43% | Pot is too big | g10 |
| A6 | khnd | 21% | 1% | 0% | 37% | Pot is too big | g10 |
| A5 | khnd | 18% | 0% | 0% | 35% | Pot is too big | g10 |
| A4 | khnd | 16% | 0% | 0% | 32% | Pot is too big | g10 |
