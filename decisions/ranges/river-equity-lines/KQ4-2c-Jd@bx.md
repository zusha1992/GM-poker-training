# KQ4-2c-Jd@bx river (K♦ Q♦ 4♠ 2♣ J♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AT–A2, T9–T7, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 99% | 100% | 100% | 98% |
| g2 | 25–50bb | Straights | AT, T9 | 92% | 98% | 97% | 76% |
| g3 | 15–25bb | Sets | KK–JJ, 44, 22 | 86% | 92% | 86% | 59% |
| g4 | 15–25bb | Two pair | KQ, KJ, K4, K2, QJ | 82% | 86% | 75% | 57% |
| g5 | 0–5bb | Overpair | AA | 78% | 75% | 54% | 62% |
| g6 | 0–5bb | Top pair | AK, KT–K5, K3 | 71% | 65% | 31% | 54% |
| g7 | 0–5bb | Second pair | AQ, QT–Q5 | 55% | 31% | 0% | 49% |
| g8 | 0–5bb | Small pairs | TT–55, 33, AJ, A4, A2, JT–J7, 64, 54, 43 | 27% | 2% | 0% | 30% |
| g9 | Pot is too big | Ace-high | A9–A5, A3 | 5% | 0% | 0% | 2% |

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
| 64+fl | flushlo | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| T7+fl | flush | 99% | 100% | 100% | 97% | 50–100bb | g1 |
| T8+fl | flush | 99% | 100% | 100% | 97% | 50–100bb | g1 |
| 54+fl | flushlo | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| 43+fl | flushlo | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| 98+fl | flush | 98% | 100% | 100% | 96% | 50–100bb | g1 |
| 96+fl | flush | 98% | 100% | 99% | 96% | 50–100bb | g1 |
| 86+fl | flushlo | 98% | 100% | 99% | 96% | 50–100bb | g1 |
| 87+fl | flushlo | 98% | 100% | 100% | 96% | 50–100bb | g1 |
| 97+fl | flush | 98% | 100% | 100% | 96% | 50–100bb | g1 |
| 76+fl | flushlo | 98% | 100% | 100% | 96% | 50–100bb | g1 |
| 75+fl | flushlo | 98% | 100% | 99% | 96% | 50–100bb | g1 |
| 65+fl | flushlo | 98% | 100% | 100% | 93% | 50–100bb | g1 |
| AT | straight | 93% | 99% | 99% | 81% | 50–100bb | g2 |
| T9 | straight | 90% | 97% | 94% | 67% | 50–100bb | g2 |
| 22 | twopair | 87% | 93% | 87% | 61% | 50–100bb | g3 |
| 44 | twopair | 88% | 94% | 89% | 59% | 50–100bb | g3 |
| KK | twopair | 86% | 92% | 80% | 59% | 50–100bb | g3 |
| QQ | twopair | 85% | 91% | 87% | 59% | 50–100bb | g3 |
| JJ | twopair | 86% | 92% | 85% | 59% | 50–100bb | g3 |
| K2 | twopair | 83% | 87% | 74% | 57% | 50–100bb | g4 |
| KQ | twopair | 84% | 89% | 80% | 57% | 50–100bb | g4 |
| QJ | twopair | 80% | 80% | 69% | 57% | 50–100bb | g4 |
| KJ | twopair | 83% | 87% | 77% | 56% | 50–100bb | g4 |
| K4 | twopair | 83% | 87% | 75% | 53% | 50–100bb | g4 |
| AA | op | 78% | 75% | 54% | 61% | 50–100bb | g5 |
| KT | tpmk | 76% | 72% | 46% | 58% | 50–100bb | g6 |
| AK | tpgk | 76% | 73% | 46% | 55% | 50–100bb | g6 |
| K9 | tpmk | 72% | 68% | 37% | 55% | 50–100bb | g6 |
| K6 | tpmk | 67% | 56% | 14% | 52% | 50–100bb | g6 |
| K5 | tpmk | 65% | 54% | 8% | 51% | 50–100bb | g6 |
| K8 | tpmk | 69% | 62% | 25% | 51% | 50–100bb | g6 |
| K7 | tpmk | 67% | 59% | 18% | 50% | 50–100bb | g6 |
| K3 | tpmk | 65% | 50% | 3% | 50% | 50–100bb | g6 |
| Q9 | mp | 54% | 27% | 0% | 47% | 0–5bb | g7 |
| QT | mp | 60% | 34% | 0% | 53% | 50–100bb | g7 |
| AQ | mp | 58% | 38% | 0% | 51% | 50–100bb | g7 |
| Q8 | mp | 50% | 25% | 0% | 45% | 0–5bb | g7 |
| Q7 | mp | 48% | 24% | 0% | 43% | 0–5bb | g7 |
| Q6 | mp | 48% | 22% | 0% | 44% | 0–5bb | g7 |
| Q5 | mp | 46% | 22% | 0% | 44% | 0–5bb | g7 |
| AJ | bp | 39% | 11% | 0% | 43% | 0–5bb | g8 |
| JT | bp | 39% | 7% | 0% | 44% | 0–5bb | g8 |
| J9 | bp | 37% | 3% | 0% | 41% | 0–5bb | g8 |
| TT | pp3 | 37% | 0% | 0% | 45% | 0–5bb | g8 |
| J7 | bp | 34% | 1% | 0% | 37% | 0–5bb | g8 |
| J8 | bp | 34% | 1% | 0% | 37% | 0–5bb | g8 |
| 99 | pp3 | 33% | 0% | 0% | 42% | 0–5bb | g8 |
| 88 | spp | 30% | 0% | 0% | 37% | 0–5bb | g8 |
| 77 | spp | 26% | 0% | 0% | 31% | 0–5bb | g8 |
| 66 | spp | 23% | 0% | 0% | 27% | 0–5bb | g8 |
| 55 | spp | 19% | 0% | 0% | 24% | 0–5bb | g8 |
| A4 | bp | 15% | 0% | 0% | 21% | 0–5bb | g8 |
| 64 | bp | 14% | 0% | 0% | 14% | 0–5bb | g8 |
| 54 | bp | 14% | 0% | 0% | 13% | 0–5bb | g8 |
| 43 | bp | 12% | 0% | 0% | 10% | 0–5bb | g8 |
| 33 | spp | 11% | 0% | 0% | 8% | 0–5bb | g8 |
| A2 | bp | 9% | 0% | 0% | 6% | 0–5bb | g8 |
| A9 | khnd | 8% | 0% | 0% | 4% | Pot is too big | g9 |
| A8 | khnd | 6% | 0% | 0% | 4% | Pot is too big | g9 |
| A7 | khnd | 5% | 0% | 0% | 2% | Pot is too big | g9 |
| A6 | khnd | 4% | 0% | 0% | 2% | Pot is too big | g9 |
| A5 | khnd | 3% | 0% | 0% | 1% | Pot is too big | g9 |
| A3 | khnd | 3% | 0% | 0% | 1% | Pot is too big | g9 |
