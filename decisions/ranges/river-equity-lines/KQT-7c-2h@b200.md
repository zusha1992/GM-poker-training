# KQT-7c-2h@b200 river (K♦ Q♣ T♥ 7♣ 2♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights & sets | KK, QQ, TT, 77, 22, AJ, J9 | 96% | 91% | 90% | 91% |
| g2 | 50–100bb | Two pair | KQ, KT | 85% | 64% | 59% | 64% |
| g3 | 0–5bb | Overpair | AA | 58% | 31% | 21% | 31% |
| g4 | 0–5bb | Two pair | K7, K2, QT, Q7, T7 | 73% | 40% | 31% | 40% |
| g5 | 0–5bb | Top pair | AK, KJ, K9, K8, K6–K3 | 50% | 19% | 6% | 20% |
| g6 | 0–5bb | Second pair | AQ, QJ, Q9, Q8, Q6, Q5 | 24% | 6% | 0% | 6% |
| g7 | 0–5bb | Small pairs | JJ, 99, 88, 66–33, AT, A7, A2, JT, J7, T9, T8, 97, 87, 76, 75 | 4% | 0% | 0% | 0% |
| g8 | Pot is too big | Ace-high | A9, A8, A6–A3 | 0% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AJ | straight | 100% | 99% | 99% | 99% | 50–100bb | g1 |
| J9 | straight | 97% | 94% | 94% | 94% | 50–100bb | g1 |
| 77 | twopair | 91% | 83% | 82% | 85% | 50–100bb | g1 |
| 22 | twopair | 91% | 84% | 80% | 83% | 50–100bb | g1 |
| TT | twopair | 92% | 82% | 79% | 81% | 50–100bb | g1 |
| QQ | twopair | 90% | 81% | 79% | 81% | 50–100bb | g1 |
| KK | twopair | 90% | 75% | 69% | 75% | 50–100bb | g1 |
| KQ | twopair | 87% | 72% | 68% | 71% | 50–100bb | g2 |
| KT | twopair | 82% | 57% | 50% | 57% | 50–100bb | g2 |
| AA | op | 58% | 31% | 21% | 31% | 0–5bb | g3 |
| K7 | twopair | 79% | 50% | 39% | 49% | 0–5bb | g4 |
| K2 | twopair | 78% | 44% | 35% | 45% | 0–5bb | g4 |
| QT | twopair | 72% | 37% | 29% | 37% | 0–5bb | g4 |
| Q7 | twopair | 66% | 33% | 25% | 32% | 0–5bb | g4 |
| T7 | twopair | 65% | 33% | 24% | 36% | 0–5bb | g4 |
| AK | tpgk | 58% | 30% | 18% | 31% | 0–5bb | g5 |
| KJ | tpmk | 54% | 18% | 7% | 20% | 0–5bb | g5 |
| K9 | tpmk | 49% | 16% | 0% | 16% | 0–5bb | g5 |
| K8 | tpmk | 46% | 15% | 0% | 16% | 0–5bb | g5 |
| K6 | tpmk | 45% | 15% | 0% | 15% | 0–5bb | g5 |
| K5 | tpmk | 43% | 16% | 0% | 15% | 0–5bb | g5 |
| K3 | tpmk | 41% | 15% | 0% | 15% | 0–5bb | g5 |
| K4 | tpmk | 40% | 15% | 0% | 16% | 0–5bb | g5 |
| AQ | mp | 31% | 10% | 0% | 10% | 0–5bb | g6 |
| QJ | mp | 25% | 5% | 0% | 5% | 0–5bb | g6 |
| Q8 | mp | 19% | 3% | 0% | 2% | 0–5bb | g6 |
| Q5 | mp | 19% | 2% | 0% | 2% | 0–5bb | g6 |
| Q9 | mp | 19% | 3% | 0% | 3% | 0–5bb | g6 |
| Q6 | mp | 19% | 2% | 0% | 3% | 0–5bb | g6 |
| JJ | pp2 | 17% | 2% | 0% | 2% | 0–5bb | g7 |
| AT | bp | 11% | 2% | 0% | 1% | 0–5bb | g7 |
| JT | bp | 7% | 1% | 0% | 1% | 0–5bb | g7 |
| T8 | bp | 5% | 0% | 0% | 0% | 0–5bb | g7 |
| T9 | bp | 5% | 0% | 0% | 0% | 0–5bb | g7 |
| J7 | bp | 2% | 0% | 0% | 0% | 0–5bb | g7 |
| 76 | bp | 2% | 0% | 0% | 0% | 0–5bb | g7 |
| 44 | spp | 2% | 0% | 0% | 0% | 0–5bb | g7 |
| 33 | spp | 2% | 0% | 0% | 0% | 0–5bb | g7 |
| 87 | bp | 2% | 0% | 0% | 0% | 0–5bb | g7 |
| 55 | spp | 2% | 0% | 0% | 0% | 0–5bb | g7 |
| 97 | bp | 1% | 0% | 0% | 0% | 0–5bb | g7 |
| 75 | bp | 1% | 0% | 0% | 0% | 0–5bb | g7 |
| 66 | spp | 1% | 0% | 0% | 0% | 0–5bb | g7 |
| 88 | spp | 1% | 0% | 0% | 0% | 0–5bb | g7 |
| 99 | pp3 | 1% | 0% | 0% | 0% | 0–5bb | g7 |
| A2 | bp | 1% | 0% | 0% | 0% | 0–5bb | g7 |
| A7 | bp | 1% | 0% | 0% | 0% | 0–5bb | g7 |
| A9 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g8 |
| A8 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
