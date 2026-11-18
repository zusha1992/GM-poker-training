# KQ4-2c-Jd@xx river (K♦ Q♦ 4♠ 2♣ J♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AT–A2, T9–T7, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 99% | 100% | 100% | 94% |
| g2 | 25–50bb | Straights | AT, T9 | 90% | 99% | 97% | 72% |
| g3 | 15–25bb | Sets | KK–JJ, 44, 22 | 85% | 94% | 86% | 69% |
| g4 | 15–25bb | Two pair | KQ, KJ, K4, K2, QJ | 81% | 91% | 78% | 69% |
| g5 | 0–5bb | Overpair | AA | 76% | 85% | 68% | 71% |
| g6 | 0–5bb | Top pair | AK, KT–K5, K3 | 74% | 78% | 40% | 68% |
| g7 | 0–5bb | Second pair | AQ, QT–Q5 | 64% | 45% | 0% | 66% |
| g8 | 0–5bb | Small pairs | TT–55, 33, AJ, A4, A2, JT–J7, 64, 54, 43 | 45% | 8% | 0% | 58% |
| g9 | Pot is too big | Ace-high | A9–A5, A3 | 22% | 0% | 0% | 38% |

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
| T7+fl | flush | 98% | 100% | 99% | 91% | 50–100bb | g1 |
| T8+fl | flush | 98% | 100% | 99% | 91% | 50–100bb | g1 |
| 96+fl | flush | 97% | 100% | 99% | 91% | 50–100bb | g1 |
| 97+fl | flush | 98% | 100% | 99% | 90% | 50–100bb | g1 |
| 76+fl | flushlo | 97% | 100% | 99% | 89% | 50–100bb | g1 |
| 87+fl | flushlo | 97% | 100% | 99% | 89% | 50–100bb | g1 |
| 98+fl | flush | 98% | 100% | 99% | 89% | 50–100bb | g1 |
| 86+fl | flushlo | 97% | 100% | 99% | 89% | 50–100bb | g1 |
| 75+fl | flushlo | 97% | 100% | 99% | 87% | 50–100bb | g1 |
| 65+fl | flushlo | 97% | 100% | 99% | 86% | 50–100bb | g1 |
| 64+fl | flushlo | 97% | 100% | 100% | 85% | 50–100bb | g1 |
| 54+fl | flushlo | 96% | 100% | 99% | 84% | 50–100bb | g1 |
| 43+fl | flushlo | 95% | 100% | 99% | 82% | 50–100bb | g1 |
| AT | straight | 92% | 99% | 99% | 73% | 50–100bb | g2 |
| T9 | straight | 88% | 98% | 95% | 70% | 50–100bb | g2 |
| 22 | twopair | 85% | 96% | 89% | 70% | 50–100bb | g3 |
| KK | twopair | 84% | 94% | 76% | 70% | 50–100bb | g3 |
| 44 | twopair | 86% | 95% | 89% | 69% | 50–100bb | g3 |
| JJ | twopair | 84% | 94% | 88% | 69% | 50–100bb | g3 |
| QQ | twopair | 85% | 93% | 88% | 69% | 50–100bb | g3 |
| KJ | twopair | 81% | 91% | 77% | 70% | 50–100bb | g4 |
| KQ | twopair | 83% | 93% | 82% | 69% | 50–100bb | g4 |
| QJ | twopair | 79% | 88% | 76% | 69% | 50–100bb | g4 |
| K2 | twopair | 82% | 90% | 74% | 69% | 50–100bb | g4 |
| K4 | twopair | 82% | 91% | 74% | 69% | 50–100bb | g4 |
| AA | op | 76% | 85% | 68% | 71% | 50–100bb | g5 |
| KT | tpmk | 76% | 86% | 61% | 69% | 50–100bb | g6 |
| AK | tpgk | 76% | 86% | 61% | 69% | 50–100bb | g6 |
| K9 | tpmk | 74% | 81% | 48% | 68% | 50–100bb | g6 |
| K3 | tpmk | 69% | 65% | 3% | 67% | 50–100bb | g6 |
| K8 | tpmk | 72% | 75% | 31% | 67% | 50–100bb | g6 |
| K7 | tpmk | 71% | 71% | 21% | 67% | 50–100bb | g6 |
| K5 | tpmk | 69% | 68% | 10% | 66% | 50–100bb | g6 |
| K6 | tpmk | 71% | 69% | 15% | 66% | 50–100bb | g6 |
| AQ | mp | 66% | 52% | 0% | 69% | 50–100bb | g7 |
| QT | mp | 67% | 49% | 0% | 68% | 50–100bb | g7 |
| Q9 | mp | 64% | 42% | 0% | 65% | 50–100bb | g7 |
| Q5 | mp | 60% | 35% | 0% | 63% | 50–100bb | g7 |
| Q8 | mp | 61% | 39% | 0% | 63% | 50–100bb | g7 |
| Q7 | mp | 61% | 36% | 0% | 62% | 50–100bb | g7 |
| Q6 | mp | 59% | 36% | 0% | 62% | 50–100bb | g7 |
| TT | pp3 | 49% | 6% | 0% | 64% | 50–100bb | g8 |
| JT | bp | 56% | 18% | 0% | 63% | 50–100bb | g8 |
| AJ | bp | 55% | 22% | 0% | 62% | 50–100bb | g8 |
| J9 | bp | 53% | 13% | 0% | 61% | 50–100bb | g8 |
| 99 | pp3 | 49% | 6% | 0% | 60% | 50–100bb | g8 |
| 88 | spp | 43% | 5% | 0% | 59% | 50–100bb | g8 |
| J8 | bp | 49% | 10% | 0% | 59% | 50–100bb | g8 |
| A4 | bp | 36% | 2% | 0% | 58% | 50–100bb | g8 |
| 55 | spp | 38% | 3% | 0% | 58% | 50–100bb | g8 |
| J7 | bp | 50% | 9% | 0% | 58% | 50–100bb | g8 |
| 66 | spp | 41% | 3% | 0% | 57% | 50–100bb | g8 |
| 77 | spp | 42% | 4% | 0% | 57% | 50–100bb | g8 |
| 43 | bp | 36% | 1% | 0% | 54% | 50–100bb | g8 |
| 54 | bp | 36% | 2% | 0% | 54% | 50–100bb | g8 |
| 64 | bp | 37% | 1% | 0% | 53% | 50–100bb | g8 |
| 33 | spp | 35% | 1% | 0% | 52% | 50–100bb | g8 |
| A2 | bp | 32% | 1% | 0% | 50% | 50–100bb | g8 |
| A9 | khnd | 29% | 0% | 0% | 46% | Pot is too big | g9 |
| A8 | khnd | 24% | 0% | 0% | 42% | Pot is too big | g9 |
| A7 | khnd | 22% | 0% | 0% | 39% | Pot is too big | g9 |
| A6 | khnd | 20% | 0% | 0% | 36% | Pot is too big | g9 |
| A5 | khnd | 17% | 0% | 0% | 34% | Pot is too big | g9 |
| A3 | khnd | 17% | 0% | 0% | 34% | Pot is too big | g9 |
