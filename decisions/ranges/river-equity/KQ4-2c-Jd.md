# KQ4-2c-Jd river (K♦ Q♦ 4♠ 2♣ J♦): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes, straights & sets | KK–JJ, 44, 22, AT, T9 · ♦ flushes: AT–A2, T9–T7, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 97% | 100% | 99% | 95% |
| g2 | 50–100bb | Overpair | AA | 80% | 85% | 83% | 51% |
| g3 | 50–100bb | Two pair | KQ, KJ, K4, K2, QJ | 90% | 98% | 97% | 77% |
| g4 | 25–50bb | Top pair, good kicker | AK, KT | 79% | 78% | 72% | 40% |
| g5 | 0–5bb | Top pair, weak kicker | K9–K5, K3 | 59% | 38% | 24% | 11% |
| g6 | Pot is too big | Second pair | AQ, QT–Q5 | 32% | 12% | 0% | 6% |
| g7 | Pot is too big | Small pairs | TT–55, 33, AJ, A4, A2, JT–J7, 64, 54, 43 | 9% | 0% | 0% | 4% |
| g8 | Pot is too big | Ace-high | A9–A5, A3 | 1% | 0% | 0% | 0% |

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
| T7+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| T8+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 64+fl | flushlo | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 54+fl | flushlo | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 43+fl | flushlo | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 97+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 98+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 96+fl | flush | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| 87+fl | flushlo | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 76+fl | flushlo | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 75+fl | flushlo | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 86+fl | flushlo | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 65+fl | flushlo | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| 44 | twopair | 97% | 100% | 100% | 95% | 50–100bb | g1 |
| AT | straight | 96% | 99% | 99% | 94% | 50–100bb | g1 |
| 22 | twopair | 96% | 100% | 100% | 93% | 50–100bb | g1 |
| T9 | straight | 95% | 99% | 99% | 93% | 50–100bb | g1 |
| QQ | twopair | 94% | 99% | 99% | 91% | 50–100bb | g1 |
| JJ | twopair | 95% | 99% | 99% | 90% | 50–100bb | g1 |
| KK | twopair | 93% | 99% | 98% | 85% | 50–100bb | g1 |
| AA | op | 80% | 85% | 83% | 50% | 50–100bb | g2 |
| KQ | twopair | 94% | 99% | 99% | 89% | 50–100bb | g3 |
| KJ | twopair | 92% | 99% | 99% | 82% | 50–100bb | g3 |
| K4 | twopair | 90% | 99% | 99% | 72% | 50–100bb | g3 |
| K2 | twopair | 88% | 98% | 98% | 68% | 50–100bb | g3 |
| QJ | twopair | 85% | 94% | 93% | 63% | 50–100bb | g3 |
| AK | tpgk | 81% | 81% | 76% | 47% | 25–50bb | g4 |
| KT | tpmk | 77% | 75% | 68% | 33% | 25–50bb | g4 |
| K8 | tpmk | 61% | 42% | 29% | 11% | 0–5bb | g5 |
| K7 | tpmk | 58% | 34% | 19% | 10% | 0–5bb | g5 |
| K9 | tpmk | 69% | 56% | 46% | 17% | 5–15bb | g5 |
| K6 | tpmk | 54% | 32% | 14% | 9% | 0–5bb | g5 |
| K5 | tpmk | 52% | 27% | 9% | 9% | 0–5bb | g5 |
| K3 | tpmk | 49% | 22% | 3% | 9% | Pot is too big | g5 |
| Q9 | mp | 34% | 13% | 0% | 6% | Pot is too big | g6 |
| QT | mp | 34% | 12% | 0% | 6% | Pot is too big | g6 |
| AQ | mp | 32% | 12% | 0% | 6% | Pot is too big | g6 |
| Q8 | mp | 32% | 12% | 0% | 6% | Pot is too big | g6 |
| Q7 | mp | 28% | 11% | 0% | 4% | Pot is too big | g6 |
| Q6 | mp | 25% | 9% | 0% | 5% | Pot is too big | g6 |
| Q5 | mp | 23% | 7% | 0% | 5% | Pot is too big | g6 |
| AJ | bp | 12% | 2% | 0% | 5% | Pot is too big | g7 |
| JT | bp | 12% | 1% | 0% | 6% | Pot is too big | g7 |
| J8 | bp | 11% | 0% | 0% | 6% | Pot is too big | g7 |
| J9 | bp | 11% | 0% | 0% | 6% | Pot is too big | g7 |
| TT | pp3 | 10% | 0% | 0% | 6% | Pot is too big | g7 |
| 88 | spp | 10% | 0% | 0% | 5% | Pot is too big | g7 |
| J7 | bp | 10% | 0% | 0% | 6% | Pot is too big | g7 |
| 66 | spp | 10% | 0% | 0% | 5% | Pot is too big | g7 |
| 77 | spp | 10% | 0% | 0% | 5% | Pot is too big | g7 |
| 99 | pp3 | 10% | 0% | 0% | 5% | Pot is too big | g7 |
| 55 | spp | 10% | 0% | 0% | 5% | Pot is too big | g7 |
| A4 | bp | 5% | 0% | 0% | 3% | Pot is too big | g7 |
| 64 | bp | 3% | 0% | 0% | 1% | Pot is too big | g7 |
| 54 | bp | 3% | 0% | 0% | 1% | Pot is too big | g7 |
| 43 | bp | 3% | 0% | 0% | 1% | Pot is too big | g7 |
| 33 | spp | 2% | 0% | 0% | 1% | Pot is too big | g7 |
| A2 | bp | 2% | 0% | 0% | 0% | Pot is too big | g7 |
| A9 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g8 |
| A8 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g8 |
| A7 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g8 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
