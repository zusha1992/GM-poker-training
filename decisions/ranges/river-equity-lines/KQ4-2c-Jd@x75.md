# KQ4-2c-Jd@x75 river (K♦ Q♦ 4♠ 2♣ J♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AT–A2, T9–T7, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 99% | 100% | 100% | 98% |
| g2 | 25–50bb | Straights | AT, T9 | 92% | 98% | 97% | 79% |
| g3 | 15–25bb | Sets | KK–JJ, 44, 22 | 86% | 94% | 92% | 66% |
| g4 | 15–25bb | Two pair | KQ, KJ, K4, K2, QJ | 82% | 87% | 81% | 57% |
| g5 | 0–5bb | Overpair | AA | 77% | 77% | 65% | 53% |
| g6 | 0–5bb | Top pair | AK, KT–K5, K3 | 68% | 61% | 36% | 46% |
| g7 | 0–5bb | Second pair | AQ, QT–Q5 | 47% | 20% | 0% | 35% |
| g8 | 0–5bb | Small pairs | TT–55, 33, AJ, A4, A2, JT–J7, 64, 54, 43 | 19% | 1% | 0% | 21% |
| g9 | Pot is too big | Ace-high | A9–A5, A3 | 5% | 0% | 0% | 5% |

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
| T7+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| T8+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 64+fl | flushlo | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| 76+fl | flushlo | 99% | 100% | 99% | 97% | 50–100bb | g1 |
| 96+fl | flush | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| 43+fl | flushlo | 98% | 100% | 99% | 97% | 50–100bb | g1 |
| 97+fl | flush | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| 75+fl | flushlo | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| 86+fl | flushlo | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| 54+fl | flushlo | 98% | 100% | 99% | 97% | 50–100bb | g1 |
| 98+fl | flush | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| 87+fl | flushlo | 98% | 100% | 100% | 96% | 50–100bb | g1 |
| 65+fl | flushlo | 97% | 100% | 99% | 95% | 50–100bb | g1 |
| AT | straight | 93% | 99% | 98% | 83% | 50–100bb | g2 |
| T9 | straight | 89% | 97% | 95% | 72% | 50–100bb | g2 |
| 22 | twopair | 87% | 96% | 94% | 69% | 50–100bb | g3 |
| 44 | twopair | 88% | 95% | 94% | 68% | 50–100bb | g3 |
| JJ | twopair | 86% | 94% | 92% | 65% | 50–100bb | g3 |
| QQ | twopair | 85% | 94% | 92% | 64% | 50–100bb | g3 |
| KK | twopair | 85% | 93% | 86% | 62% | 50–100bb | g3 |
| KQ | twopair | 85% | 92% | 88% | 63% | 50–100bb | g4 |
| KJ | twopair | 84% | 88% | 81% | 58% | 50–100bb | g4 |
| K2 | twopair | 82% | 84% | 74% | 56% | 50–100bb | g4 |
| K4 | twopair | 83% | 85% | 75% | 55% | 50–100bb | g4 |
| QJ | twopair | 78% | 82% | 76% | 52% | 50–100bb | g4 |
| AA | op | 77% | 77% | 65% | 53% | 50–100bb | g5 |
| K9 | tpmk | 69% | 64% | 40% | 44% | 15–25bb | g6 |
| K7 | tpmk | 64% | 50% | 18% | 41% | 0–5bb | g6 |
| K6 | tpmk | 62% | 47% | 13% | 42% | 0–5bb | g6 |
| K5 | tpmk | 60% | 44% | 8% | 42% | 0–5bb | g6 |
| K3 | tpmk | 59% | 40% | 3% | 41% | 0–5bb | g6 |
| K8 | tpmk | 65% | 55% | 25% | 44% | 5–15bb | g6 |
| AK | tpgk | 76% | 76% | 59% | 52% | 50–100bb | g6 |
| KT | tpmk | 74% | 71% | 56% | 50% | 50–100bb | g6 |
| AQ | mp | 52% | 27% | 0% | 40% | 0–5bb | g7 |
| QT | mp | 50% | 22% | 0% | 39% | 0–5bb | g7 |
| Q9 | mp | 45% | 16% | 0% | 32% | 0–5bb | g7 |
| Q8 | mp | 41% | 14% | 0% | 30% | 0–5bb | g7 |
| Q7 | mp | 41% | 13% | 0% | 29% | 0–5bb | g7 |
| Q6 | mp | 39% | 12% | 0% | 28% | 0–5bb | g7 |
| Q5 | mp | 38% | 11% | 0% | 29% | 0–5bb | g7 |
| AJ | bp | 29% | 6% | 0% | 28% | 0–5bb | g8 |
| JT | bp | 28% | 2% | 0% | 30% | 0–5bb | g8 |
| TT | pp3 | 27% | 0% | 0% | 30% | 0–5bb | g8 |
| J9 | bp | 26% | 0% | 0% | 27% | 0–5bb | g8 |
| J7 | bp | 25% | 0% | 0% | 24% | 0–5bb | g8 |
| J8 | bp | 25% | 0% | 0% | 25% | 0–5bb | g8 |
| 99 | pp3 | 24% | 0% | 0% | 26% | 0–5bb | g8 |
| 88 | spp | 22% | 0% | 0% | 24% | 0–5bb | g8 |
| 77 | spp | 17% | 0% | 0% | 21% | 0–5bb | g8 |
| 66 | spp | 16% | 0% | 0% | 19% | 0–5bb | g8 |
| 55 | spp | 13% | 0% | 0% | 18% | 0–5bb | g8 |
| A4 | bp | 12% | 0% | 0% | 16% | 0–5bb | g8 |
| 64 | bp | 9% | 0% | 0% | 11% | 0–5bb | g8 |
| 54 | bp | 9% | 0% | 0% | 9% | 0–5bb | g8 |
| 43 | bp | 9% | 0% | 0% | 8% | 0–5bb | g8 |
| 33 | spp | 8% | 0% | 0% | 7% | 0–5bb | g8 |
| A2 | bp | 7% | 0% | 0% | 7% | 0–5bb | g8 |
| A8 | khnd | 6% | 0% | 0% | 6% | Pot is too big | g9 |
| A9 | khnd | 6% | 0% | 0% | 6% | Pot is too big | g9 |
| A7 | khnd | 6% | 0% | 0% | 6% | Pot is too big | g9 |
| A6 | khnd | 6% | 0% | 0% | 4% | Pot is too big | g9 |
| A5 | khnd | 3% | 0% | 0% | 4% | Pot is too big | g9 |
| A3 | khnd | 2% | 0% | 0% | 3% | Pot is too big | g9 |
