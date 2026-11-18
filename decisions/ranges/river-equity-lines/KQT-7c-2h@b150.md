# KQT-7c-2h@b150 river (K♦ Q♣ T♥ 7♣ 2♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights & sets | KK, QQ, TT, 77, 22, AJ, J9 | 97% | 100% | 100% | 89% |
| g2 | 50–100bb | Two pair | KQ, KT | 87% | 98% | 98% | 60% |
| g3 | 25–50bb | Two pair | K7, K2, QT, Q7, T7 | 78% | 82% | 75% | 42% |
| g4 | 15–25bb | Overpair | AA | 63% | 64% | 50% | 37% |
| g5 | 5–15bb | Top pair, good kicker | AK, KJ | 62% | 58% | 41% | 32% |
| g6 | 0–5bb | Top pair, weak kicker | K9, K8, K6–K3 | 48% | 39% | 10% | 22% |
| g7 | 0–5bb | Second pair | AQ, QJ, Q9, Q8, Q6, Q5 | 28% | 17% | 0% | 6% |
| g8 | 0–5bb | Small pairs | JJ, 99, 88, 66–33, AT, A7, A2, JT, J7, T9, T8, 97, 87, 76, 75 | 5% | 2% | 0% | 0% |
| g9 | Pot is too big | Ace-high | A9, A8, A6–A3 | 0% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AJ | straight | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| J9 | straight | 98% | 100% | 100% | 92% | 50–100bb | g1 |
| 77 | twopair | 94% | 100% | 100% | 80% | 50–100bb | g1 |
| 22 | twopair | 93% | 100% | 100% | 80% | 50–100bb | g1 |
| TT | twopair | 92% | 100% | 100% | 77% | 50–100bb | g1 |
| QQ | twopair | 92% | 100% | 100% | 72% | 50–100bb | g1 |
| KK | twopair | 92% | 100% | 100% | 69% | 50–100bb | g1 |
| KQ | twopair | 89% | 100% | 100% | 66% | 50–100bb | g2 |
| KT | twopair | 85% | 97% | 95% | 54% | 50–100bb | g2 |
| K7 | twopair | 84% | 90% | 84% | 47% | 25–50bb | g3 |
| K2 | twopair | 82% | 86% | 79% | 47% | 25–50bb | g3 |
| QT | twopair | 77% | 80% | 74% | 40% | 25–50bb | g3 |
| Q7 | twopair | 73% | 73% | 64% | 36% | 25–50bb | g3 |
| T7 | twopair | 70% | 72% | 62% | 40% | 25–50bb | g3 |
| AA | op | 63% | 63% | 50% | 37% | 15–25bb | g4 |
| AK | tpgk | 64% | 62% | 46% | 38% | 15–25bb | g5 |
| KJ | tpmk | 60% | 54% | 36% | 25% | 5–15bb | g5 |
| K9 | tpmk | 52% | 46% | 20% | 23% | 0–5bb | g6 |
| K8 | tpmk | 48% | 39% | 11% | 21% | 0–5bb | g6 |
| K6 | tpmk | 48% | 36% | 8% | 21% | 0–5bb | g6 |
| K5 | tpmk | 45% | 37% | 6% | 22% | 0–5bb | g6 |
| K4 | tpmk | 45% | 34% | 4% | 22% | 0–5bb | g6 |
| K3 | tpmk | 44% | 33% | 1% | 22% | 0–5bb | g6 |
| AQ | mp | 33% | 23% | 0% | 14% | 0–5bb | g7 |
| QJ | mp | 29% | 16% | 0% | 6% | 0–5bb | g7 |
| Q8 | mp | 25% | 13% | 0% | 0% | 0–5bb | g7 |
| Q5 | mp | 24% | 13% | 0% | 0% | 0–5bb | g7 |
| Q9 | mp | 24% | 14% | 0% | 0% | 0–5bb | g7 |
| Q6 | mp | 24% | 13% | 0% | 0% | 0–5bb | g7 |
| JJ | pp2 | 21% | 10% | 0% | 0% | 0–5bb | g8 |
| AT | bp | 13% | 8% | 0% | 0% | 0–5bb | g8 |
| JT | bp | 8% | 3% | 0% | 0% | 0–5bb | g8 |
| T8 | bp | 5% | 1% | 0% | 0% | 0–5bb | g8 |
| T9 | bp | 5% | 1% | 0% | 0% | 0–5bb | g8 |
| J7 | bp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| 66 | spp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| 75 | bp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| 33 | spp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| 76 | bp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| 55 | spp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| 97 | bp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| 87 | bp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| 44 | spp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| A7 | bp | 1% | 0% | 0% | 0% | 0–5bb | g8 |
| 88 | spp | 1% | 0% | 0% | 0% | 0–5bb | g8 |
| 99 | pp3 | 1% | 0% | 0% | 0% | 0–5bb | g8 |
| A2 | bp | 1% | 0% | 0% | 0% | 0–5bb | g8 |
| A9 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A8 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
