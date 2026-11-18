# KQT-7c-2h@x75 river (K♦ Q♣ T♥ 7♣ 2♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | AJ, J9 | 99% | 100% | 100% | 91% |
| g2 | 25–50bb | Sets | KK, QQ, TT, 77, 22 | 94% | 100% | 100% | 60% |
| g3 | 15–25bb | Overpair | AA | 75% | 66% | 54% | 41% |
| g4 | 15–25bb | Two pair | KQ, KT, K7, K2, QT, Q7, T7 | 88% | 89% | 84% | 46% |
| g5 | 15–25bb | Top pair, good kicker | AK, KJ | 77% | 64% | 45% | 38% |
| g6 | 0–5bb | Top pair, weak kicker | K9, K8, K6–K3 | 67% | 45% | 15% | 29% |
| g7 | 0–5bb | Second pair | AQ, QJ, Q9, Q8, Q6, Q5 | 47% | 23% | 0% | 13% |
| g8 | 0–5bb | Small pairs | JJ, 99, 88, 66–33, AT, A7, A2, JT, J7, T9, T8, 97, 87, 76, 75 | 10% | 2% | 0% | 1% |
| g9 | Pot is too big | Ace-high | A9, A8, A6–A3 | 0% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AJ | straight | 100% | 100% | 100% | 96% | 50–100bb | g1 |
| J9 | straight | 98% | 100% | 100% | 82% | 50–100bb | g1 |
| 77 | twopair | 95% | 100% | 100% | 66% | 50–100bb | g2 |
| 22 | twopair | 94% | 100% | 100% | 62% | 50–100bb | g2 |
| TT | twopair | 94% | 100% | 100% | 61% | 50–100bb | g2 |
| KK | twopair | 94% | 100% | 100% | 57% | 50–100bb | g2 |
| QQ | twopair | 94% | 100% | 100% | 55% | 50–100bb | g2 |
| AA | op | 75% | 66% | 54% | 41% | 25–50bb | g3 |
| KQ | twopair | 92% | 98% | 97% | 50% | 25–50bb | g4 |
| KT | twopair | 90% | 94% | 90% | 48% | 25–50bb | g4 |
| K7 | twopair | 89% | 90% | 84% | 47% | 25–50bb | g4 |
| K2 | twopair | 88% | 88% | 80% | 45% | 25–50bb | g4 |
| QT | twopair | 84% | 82% | 74% | 41% | 25–50bb | g4 |
| Q7 | twopair | 81% | 75% | 66% | 39% | 25–50bb | g4 |
| T7 | twopair | 78% | 72% | 60% | 43% | 25–50bb | g4 |
| AK | tpgk | 78% | 66% | 48% | 40% | 15–25bb | g5 |
| KJ | tpmk | 76% | 62% | 42% | 35% | 15–25bb | g5 |
| K8 | tpmk | 67% | 47% | 17% | 29% | 0–5bb | g6 |
| K6 | tpmk | 66% | 44% | 11% | 29% | 0–5bb | g6 |
| K5 | tpmk | 65% | 43% | 9% | 29% | 0–5bb | g6 |
| K4 | tpmk | 63% | 38% | 5% | 28% | 0–5bb | g6 |
| K3 | tpmk | 62% | 38% | 2% | 28% | 0–5bb | g6 |
| K9 | tpmk | 71% | 53% | 30% | 30% | 5–15bb | g6 |
| QJ | mp | 51% | 24% | 0% | 16% | 0–5bb | g7 |
| AQ | mp | 50% | 27% | 0% | 20% | 0–5bb | g7 |
| Q9 | mp | 45% | 19% | 0% | 7% | 0–5bb | g7 |
| Q8 | mp | 42% | 18% | 0% | 6% | 0–5bb | g7 |
| Q6 | mp | 40% | 18% | 0% | 5% | 0–5bb | g7 |
| Q5 | mp | 39% | 16% | 0% | 6% | 0–5bb | g7 |
| JJ | pp2 | 30% | 11% | 0% | 7% | 0–5bb | g8 |
| AT | bp | 23% | 9% | 0% | 2% | 0–5bb | g8 |
| JT | bp | 21% | 5% | 0% | 0% | 0–5bb | g8 |
| T9 | bp | 16% | 1% | 0% | 0% | 0–5bb | g8 |
| T8 | bp | 15% | 0% | 0% | 0% | 0–5bb | g8 |
| 88 | spp | 12% | 0% | 0% | 0% | 0–5bb | g8 |
| 99 | pp3 | 12% | 0% | 0% | 0% | 0–5bb | g8 |
| A7 | bp | 6% | 0% | 0% | 0% | 0–5bb | g8 |
| J7 | bp | 3% | 0% | 0% | 0% | 0–5bb | g8 |
| 97 | bp | 3% | 0% | 0% | 0% | 0–5bb | g8 |
| 76 | bp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| 55 | spp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| 75 | bp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| 87 | bp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| 33 | spp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| 66 | spp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| 44 | spp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| A2 | bp | 1% | 0% | 0% | 0% | 0–5bb | g8 |
| A9 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A8 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
