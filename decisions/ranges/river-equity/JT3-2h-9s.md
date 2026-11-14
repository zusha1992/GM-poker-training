# JT3-2h-9s river (J♠ T♠ 3♣ 2♥ 9♠): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♠ flushes: AK, AQ, A8–A2, KQ, K8–K2, Q8–Q5, 87, 86, 76, 75, 65, 64, 54, 43 | 99% | 100% | 100% | 99% |
| g2 | 25–50bb | Straights | KQ, Q8, 87 | 92% | 100% | 100% | 83% |
| g3 | 15–25bb | Sets | JJ–99, 33, 22 | 88% | 100% | 100% | 69% |
| g4 | 15–25bb | Two pair | JT, J9, T9 | 85% | 97% | 96% | 60% |
| g5 | 0–5bb | Overpairs | AA–QQ | 83% | 88% | 85% | 51% |
| g6 | 0–5bb | Top pair | AJ, KJ, QJ, J8, J7 | 72% | 69% | 53% | 44% |
| g7 | 0–5bb | Second pair | AT, KT, QT, T8, T7 | 29% | 13% | 0% | 18% |
| g8 | 0–5bb | Small pairs | 88–44, A9, A3, A2, K9, K3, K2, Q9, 98–96, 43 | 7% | 0% | 0% | 5% |
| g9 | Pot is too big | Ace-high | AK, AQ, A8–A4 | 1% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AQ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KQ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| Q8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 87+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K8+fl | flush | 99% | 100% | 100% | 100% | 50–100bb | g1 |
| AK+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| A5+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| A3+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| A6+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| A2+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| Q6+fl | flush | 98% | 100% | 100% | 99% | 50–100bb | g1 |
| 43+fl | flushlo | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| Q7+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K5+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K4+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| K3+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 86+fl | flushlo | 98% | 100% | 100% | 99% | 50–100bb | g1 |
| K7+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| Q5+fl | flush | 98% | 100% | 100% | 99% | 50–100bb | g1 |
| K2+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| K6+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 76+fl | flushlo | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| 75+fl | flushlo | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| 64+fl | flushlo | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| 65+fl | flushlo | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| 54+fl | flushlo | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| KQ | straight | 93% | 100% | 100% | 87% | 50–100bb | g2 |
| Q8 | straight | 91% | 100% | 100% | 76% | 50–100bb | g2 |
| 87 | straight | 90% | 100% | 100% | 72% | 50–100bb | g2 |
| 33 | twopair | 91% | 100% | 100% | 73% | 50–100bb | g3 |
| 22 | twopair | 89% | 100% | 100% | 72% | 50–100bb | g3 |
| 99 | twopair | 89% | 100% | 100% | 71% | 50–100bb | g3 |
| TT | twopair | 86% | 100% | 100% | 69% | 50–100bb | g3 |
| JJ | twopair | 85% | 100% | 100% | 61% | 50–100bb | g3 |
| JT | twopair | 86% | 100% | 100% | 65% | 50–100bb | g4 |
| J9 | twopair | 85% | 98% | 97% | 61% | 50–100bb | g4 |
| T9 | twopair | 82% | 91% | 89% | 51% | 50–100bb | g4 |
| AA | op | 82% | 89% | 86% | 49% | 25–50bb | g5 |
| KK | op | 83% | 88% | 85% | 53% | 50–100bb | g5 |
| QQ | op | 84% | 88% | 85% | 51% | 50–100bb | g5 |
| KJ | tpgk | 76% | 75% | 62% | 49% | 25–50bb | g6 |
| J8 | tpmk | 61% | 46% | 19% | 31% | 0–5bb | g6 |
| J7 | tpmk | 58% | 43% | 15% | 30% | 0–5bb | g6 |
| QJ | tpmk | 68% | 56% | 35% | 39% | 5–15bb | g6 |
| AJ | tpgk | 80% | 88% | 81% | 50% | 50–100bb | g6 |
| AT | mp | 35% | 18% | 0% | 20% | 0–5bb | g7 |
| KT | mp | 31% | 15% | 0% | 21% | 0–5bb | g7 |
| QT | mp | 25% | 9% | 0% | 16% | 0–5bb | g7 |
| T8 | mp | 18% | 5% | 0% | 9% | 0–5bb | g7 |
| T7 | mp | 16% | 3% | 0% | 7% | 0–5bb | g7 |
| K9 | bp | 9% | 0% | 0% | 6% | 0–5bb | g8 |
| A9 | bp | 9% | 1% | 0% | 6% | 0–5bb | g8 |
| Q9 | bp | 8% | 0% | 0% | 7% | 0–5bb | g8 |
| 98 | bp | 8% | 0% | 0% | 7% | 0–5bb | g8 |
| 97 | bp | 8% | 0% | 0% | 6% | 0–5bb | g8 |
| 88 | spp | 8% | 0% | 0% | 6% | 0–5bb | g8 |
| 77 | spp | 7% | 0% | 0% | 6% | 0–5bb | g8 |
| 55 | spp | 7% | 0% | 0% | 5% | 0–5bb | g8 |
| 96 | bp | 7% | 0% | 0% | 6% | 0–5bb | g8 |
| 66 | spp | 7% | 0% | 0% | 5% | 0–5bb | g8 |
| 44 | spp | 6% | 0% | 0% | 5% | 0–5bb | g8 |
| K3 | bp | 5% | 0% | 0% | 3% | 0–5bb | g8 |
| A3 | bp | 5% | 0% | 0% | 4% | 0–5bb | g8 |
| 43 | bp | 4% | 0% | 0% | 1% | 0–5bb | g8 |
| K2 | bp | 3% | 0% | 0% | 1% | 0–5bb | g8 |
| A2 | bp | 2% | 0% | 0% | 1% | 0–5bb | g8 |
| AK | khnd | 2% | 0% | 0% | 1% | Pot is too big | g9 |
| AQ | khnd | 2% | 0% | 0% | 0% | Pot is too big | g9 |
| A8 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A7 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A5 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A6 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
