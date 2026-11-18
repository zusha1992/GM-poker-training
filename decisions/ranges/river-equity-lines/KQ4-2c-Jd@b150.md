# KQ4-2c-Jd@b150 river (K♦ Q♦ 4♠ 2♣ J♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: AT–A2, T9–T7, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 99% | 100% | 100% | 99% |
| g2 | 25–50bb | Straights | AT, T9 | 96% | 99% | 99% | 94% |
| g3 | 15–25bb | Sets | KK–JJ, 44, 22 | 95% | 99% | 99% | 91% |
| g4 | 15–25bb | Two pair | KQ, KJ, K4, K2, QJ | 90% | 98% | 97% | 78% |
| g5 | 0–5bb | Overpair | AA | 81% | 86% | 82% | 51% |
| g6 | 0–5bb | Top pair | AK, KT–K5, K3 | 67% | 55% | 43% | 23% |
| g7 | 0–5bb | Second pair | AQ, QT–Q5 | 31% | 12% | 0% | 5% |
| g8 | 0–5bb | Small pairs | TT–55, 33, AJ, A4, A2, JT–J7, 64, 54, 43 | 8% | 0% | 0% | 5% |
| g9 | Pot is too big | Ace-high | A9–A5, A3 | 1% | 0% | 0% | 0% |

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
| T8+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| T7+fl | flush | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 64+fl | flushlo | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 43+fl | flushlo | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 54+fl | flushlo | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 97+fl | flush | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| 98+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 96+fl | flush | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 86+fl | flushlo | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 76+fl | flushlo | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 87+fl | flushlo | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 65+fl | flushlo | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| 75+fl | flushlo | 98% | 100% | 100% | 98% | 50–100bb | g1 |
| AT | straight | 96% | 99% | 99% | 94% | 50–100bb | g2 |
| T9 | straight | 95% | 99% | 99% | 93% | 50–100bb | g2 |
| 44 | twopair | 97% | 100% | 100% | 95% | 50–100bb | g3 |
| 22 | twopair | 95% | 100% | 100% | 93% | 50–100bb | g3 |
| QQ | twopair | 94% | 99% | 99% | 92% | 50–100bb | g3 |
| JJ | twopair | 95% | 99% | 99% | 91% | 50–100bb | g3 |
| KK | twopair | 93% | 98% | 98% | 86% | 50–100bb | g3 |
| KQ | twopair | 94% | 99% | 99% | 90% | 50–100bb | g4 |
| KJ | twopair | 92% | 99% | 99% | 82% | 50–100bb | g4 |
| K4 | twopair | 90% | 99% | 98% | 72% | 50–100bb | g4 |
| K2 | twopair | 89% | 98% | 97% | 70% | 50–100bb | g4 |
| QJ | twopair | 86% | 94% | 93% | 64% | 50–100bb | g4 |
| AA | op | 81% | 86% | 82% | 51% | 50–100bb | g5 |
| AK | tpgk | 79% | 82% | 77% | 47% | 25–50bb | g6 |
| KT | tpmk | 77% | 75% | 67% | 35% | 25–50bb | g6 |
| K8 | tpmk | 61% | 44% | 28% | 10% | 0–5bb | g6 |
| K9 | tpmk | 69% | 57% | 44% | 17% | 5–15bb | g6 |
| K7 | tpmk | 57% | 36% | 19% | 9% | 0–5bb | g6 |
| K6 | tpmk | 55% | 33% | 14% | 8% | 0–5bb | g6 |
| K5 | tpmk | 51% | 29% | 9% | 8% | 0–5bb | g6 |
| K3 | tpmk | 49% | 24% | 3% | 7% | 0–5bb | g6 |
| QT | mp | 33% | 13% | 0% | 6% | 0–5bb | g7 |
| Q9 | mp | 33% | 14% | 0% | 5% | 0–5bb | g7 |
| AQ | mp | 32% | 13% | 0% | 5% | 0–5bb | g7 |
| Q8 | mp | 31% | 12% | 0% | 5% | 0–5bb | g7 |
| Q7 | mp | 27% | 10% | 0% | 5% | 0–5bb | g7 |
| Q6 | mp | 24% | 9% | 0% | 6% | 0–5bb | g7 |
| Q5 | mp | 21% | 7% | 0% | 5% | 0–5bb | g7 |
| AJ | bp | 11% | 2% | 0% | 6% | 0–5bb | g8 |
| JT | bp | 11% | 0% | 0% | 6% | 0–5bb | g8 |
| 88 | spp | 10% | 0% | 0% | 6% | 0–5bb | g8 |
| J8 | bp | 10% | 0% | 0% | 6% | 0–5bb | g8 |
| J9 | bp | 10% | 0% | 0% | 7% | 0–5bb | g8 |
| TT | pp3 | 10% | 0% | 0% | 7% | 0–5bb | g8 |
| 77 | spp | 10% | 0% | 0% | 5% | 0–5bb | g8 |
| J7 | bp | 9% | 0% | 0% | 6% | 0–5bb | g8 |
| 55 | spp | 9% | 0% | 0% | 5% | 0–5bb | g8 |
| 99 | pp3 | 9% | 0% | 0% | 5% | 0–5bb | g8 |
| 66 | spp | 9% | 0% | 0% | 4% | 0–5bb | g8 |
| A4 | bp | 5% | 0% | 0% | 3% | 0–5bb | g8 |
| 54 | bp | 3% | 0% | 0% | 1% | 0–5bb | g8 |
| 64 | bp | 3% | 0% | 0% | 1% | 0–5bb | g8 |
| 43 | bp | 3% | 0% | 0% | 1% | 0–5bb | g8 |
| 33 | spp | 2% | 0% | 0% | 1% | 0–5bb | g8 |
| A2 | bp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| A9 | khnd | 2% | 0% | 0% | 0% | Pot is too big | g9 |
| A8 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A7 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A6 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
