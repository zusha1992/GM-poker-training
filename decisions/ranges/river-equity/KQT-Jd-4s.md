# KQT-Jd-4s river (K♦ Q♣ T♥ J♦ 4♠): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | AA, AK–A2 | 82% | 100% | 100% | 50% |
| g2 | 25–50bb | Straights | 99, K9, Q9, J9, T9, 98–96 | 44% | 58% | 58% | 0% |
| g3 | Pot is too big | Sets | KK–TT, 44 | 28% | 10% | 10% | 0% |
| g4 | Pot is too big | Two pair | KQ–KT, K4, QJ, QT, JT | 17% | 3% | 3% | 0% |
| g5 | Pot is too big | Top pair, weak kicker | K8–K5, K3, K2 | 12% | 0% | 0% | 0% |
| g6 | Pot is too big | Second pair | Q8–Q5 | 8% | 0% | 0% | 0% |
| g7 | Pot is too big | Small pairs | 88–55, 33, 22, J8, J7, T8, T7, 64, 54, 43 | 1% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AA | straight | 87% | 100% | 100% | 50% | 50–100bb | g1 |
| AK | straight | 81% | 100% | 100% | 50% | 50–100bb | g1 |
| AQ | straight | 80% | 100% | 100% | 50% | 50–100bb | g1 |
| AJ | straight | 82% | 100% | 100% | 50% | 50–100bb | g1 |
| AT | straight | 82% | 100% | 100% | 50% | 50–100bb | g1 |
| A9 | straight | 81% | 100% | 100% | 50% | 50–100bb | g1 |
| A8 | straight | 83% | 100% | 100% | 50% | 50–100bb | g1 |
| A7 | straight | 83% | 100% | 100% | 50% | 50–100bb | g1 |
| A6 | straight | 82% | 100% | 100% | 50% | 50–100bb | g1 |
| A5 | straight | 83% | 100% | 100% | 50% | 50–100bb | g1 |
| A4 | straight | 82% | 100% | 100% | 50% | 50–100bb | g1 |
| A3 | straight | 82% | 100% | 100% | 50% | 50–100bb | g1 |
| A2 | straight | 83% | 100% | 100% | 50% | 50–100bb | g1 |
| 99 | straight | 46% | 61% | 60% | 0% | 25–50bb | g2 |
| 97 | straight | 45% | 57% | 58% | 0% | 25–50bb | g2 |
| T9 | straight | 45% | 58% | 58% | 0% | 25–50bb | g2 |
| 96 | straight | 47% | 58% | 58% | 0% | 25–50bb | g2 |
| 98 | straight | 46% | 58% | 57% | 0% | 25–50bb | g2 |
| J9 | straight | 43% | 57% | 57% | 0% | 25–50bb | g2 |
| Q9 | straight | 41% | 57% | 57% | 0% | 25–50bb | g2 |
| K9 | straight | 41% | 56% | 56% | 0% | 25–50bb | g2 |
| TT | twopair | 31% | 14% | 13% | 0% | Pot is too big | g3 |
| 44 | twopair | 30% | 11% | 11% | 0% | Pot is too big | g3 |
| JJ | twopair | 28% | 10% | 9% | 0% | Pot is too big | g3 |
| KK | twopair | 25% | 5% | 7% | 0% | Pot is too big | g3 |
| QQ | twopair | 25% | 10% | 10% | 0% | Pot is too big | g3 |
| KQ | twopair | 24% | 7% | 7% | 0% | Pot is too big | g4 |
| KJ | twopair | 23% | 4% | 3% | 0% | Pot is too big | g4 |
| KT | twopair | 20% | 4% | 3% | 0% | Pot is too big | g4 |
| K4 | twopair | 19% | 2% | 3% | 0% | Pot is too big | g4 |
| QJ | twopair | 14% | 1% | 1% | 0% | Pot is too big | g4 |
| JT | twopair | 12% | 0% | 0% | 0% | Pot is too big | g4 |
| QT | twopair | 10% | 0% | 1% | 0% | Pot is too big | g4 |
| K2 | tpmk | 13% | 0% | 0% | 0% | Pot is too big | g5 |
| K8 | tpmk | 12% | 0% | 0% | 0% | Pot is too big | g5 |
| K3 | tpmk | 12% | 0% | 0% | 0% | Pot is too big | g5 |
| K7 | tpmk | 12% | 0% | 0% | 0% | Pot is too big | g5 |
| K5 | tpmk | 12% | 0% | 0% | 0% | Pot is too big | g5 |
| K6 | tpmk | 12% | 0% | 0% | 0% | Pot is too big | g5 |
| Q8 | mp | 10% | 0% | 0% | 0% | Pot is too big | g6 |
| Q7 | mp | 8% | 0% | 0% | 0% | Pot is too big | g6 |
| Q6 | mp | 7% | 0% | 0% | 0% | Pot is too big | g6 |
| Q5 | mp | 6% | 0% | 0% | 0% | Pot is too big | g6 |
| J8 | bp | 4% | 0% | 0% | 0% | Pot is too big | g7 |
| J7 | bp | 4% | 0% | 0% | 0% | Pot is too big | g7 |
| T8 | bp | 3% | 0% | 0% | 0% | Pot is too big | g7 |
| T7 | bp | 2% | 0% | 0% | 0% | Pot is too big | g7 |
| 88 | spp | 0% | 0% | 0% | 0% | Pot is too big | g7 |
| 77 | spp | 0% | 0% | 0% | 0% | Pot is too big | g7 |
| 66 | spp | 0% | 0% | 0% | 0% | Pot is too big | g7 |
| 64 | bp | 0% | 0% | 0% | 0% | Pot is too big | g7 |
| 55 | spp | 0% | 0% | 0% | 0% | Pot is too big | g7 |
| 54 | bp | 0% | 0% | 0% | 0% | Pot is too big | g7 |
| 43 | bp | 0% | 0% | 0% | 0% | Pot is too big | g7 |
| 33 | spp | 0% | 0% | 0% | 0% | Pot is too big | g7 |
| 22 | spp | 0% | 0% | 0% | 0% | Pot is too big | g7 |
