# KQT-7c-2h@bx river (K♦ Q♣ T♥ 7♣ 2♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | AJ, J9 | 99% | 100% | 100% | 92% |
| g2 | 25–50bb | Sets | KK, QQ, TT, 77, 22 | 97% | 100% | 100% | 59% |
| g3 | 15–25bb | Overpair | AA | 82% | 78% | 62% | 48% |
| g4 | 15–25bb | Two pair | KQ, KT, K7, K2, QT, Q7, T7 | 92% | 94% | 90% | 53% |
| g5 | 15–25bb | Top pair | AK, KJ, K9, K8 | 81% | 73% | 48% | 41% |
| g6 | 5–15bb | Top pair, weak kicker | K6–K3 | 73% | 56% | 14% | 34% |
| g7 | 0–5bb | Second pair | AQ, QJ, Q9, Q8, Q6, Q5 | 59% | 31% | 0% | 13% |
| g8 | 0–5bb | Small pairs | JJ, 99, 88, 66–33, AT, A7, A2, JT, J7, T9, T8, 97, 87, 76, 75 | 22% | 4% | 0% | 0% |
| g9 | Pot is too big | Ace-high | A9, A8, A6–A3 | 4% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AJ | straight | 100% | 100% | 100% | 98% | 50–100bb | g1 |
| J9 | straight | 99% | 100% | 100% | 83% | 50–100bb | g1 |
| 77 | twopair | 97% | 100% | 100% | 63% | 50–100bb | g2 |
| 22 | twopair | 96% | 100% | 100% | 62% | 50–100bb | g2 |
| TT | twopair | 97% | 100% | 100% | 59% | 50–100bb | g2 |
| KK | twopair | 97% | 100% | 100% | 56% | 50–100bb | g2 |
| QQ | twopair | 96% | 100% | 100% | 52% | 50–100bb | g2 |
| AA | op | 82% | 78% | 62% | 48% | 25–50bb | g3 |
| QT | twopair | 89% | 88% | 82% | 47% | 25–50bb | g4 |
| Q7 | twopair | 88% | 85% | 77% | 45% | 25–50bb | g4 |
| T7 | twopair | 86% | 82% | 70% | 50% | 25–50bb | g4 |
| K7 | twopair | 93% | 95% | 90% | 58% | 50–100bb | g4 |
| KT | twopair | 94% | 98% | 96% | 58% | 50–100bb | g4 |
| K2 | twopair | 91% | 93% | 86% | 57% | 50–100bb | g4 |
| KQ | twopair | 96% | 100% | 99% | 55% | 50–100bb | g4 |
| K9 | tpmk | 80% | 70% | 41% | 39% | 15–25bb | g5 |
| K8 | tpmk | 76% | 63% | 30% | 35% | 15–25bb | g5 |
| AK | tpgk | 82% | 79% | 58% | 46% | 25–50bb | g5 |
| KJ | tpmk | 84% | 74% | 53% | 40% | 25–50bb | g5 |
| K3 | tpmk | 71% | 49% | 3% | 34% | 0–5bb | g6 |
| K6 | tpmk | 75% | 59% | 20% | 34% | 5–15bb | g6 |
| K5 | tpmk | 74% | 56% | 15% | 35% | 5–15bb | g6 |
| K4 | tpmk | 73% | 53% | 9% | 35% | 5–15bb | g6 |
| QJ | mp | 62% | 32% | 0% | 14% | 0–5bb | g7 |
| AQ | mp | 61% | 38% | 0% | 25% | 0–5bb | g7 |
| Q9 | mp | 57% | 26% | 0% | 4% | 0–5bb | g7 |
| Q8 | mp | 54% | 24% | 0% | 3% | 0–5bb | g7 |
| Q5 | mp | 53% | 24% | 0% | 3% | 0–5bb | g7 |
| Q6 | mp | 52% | 23% | 0% | 4% | 0–5bb | g7 |
| JJ | pp2 | 45% | 18% | 0% | 5% | 0–5bb | g8 |
| JT | bp | 34% | 10% | 0% | 0% | 0–5bb | g8 |
| AT | bp | 33% | 14% | 0% | 1% | 0–5bb | g8 |
| T9 | bp | 28% | 5% | 0% | 0% | 0–5bb | g8 |
| T8 | bp | 24% | 2% | 0% | 0% | 0–5bb | g8 |
| 99 | pp3 | 19% | 0% | 0% | 0% | 0–5bb | g8 |
| J7 | bp | 18% | 0% | 0% | 0% | 0–5bb | g8 |
| 88 | spp | 17% | 0% | 0% | 0% | 0–5bb | g8 |
| 75 | bp | 17% | 0% | 0% | 0% | 0–5bb | g8 |
| 33 | spp | 17% | 0% | 0% | 0% | 0–5bb | g8 |
| 44 | spp | 16% | 0% | 0% | 0% | 0–5bb | g8 |
| 76 | bp | 16% | 0% | 0% | 0% | 0–5bb | g8 |
| 87 | bp | 16% | 0% | 0% | 0% | 0–5bb | g8 |
| 66 | spp | 16% | 0% | 0% | 0% | 0–5bb | g8 |
| 55 | spp | 16% | 0% | 0% | 0% | 0–5bb | g8 |
| 97 | bp | 16% | 0% | 0% | 0% | 0–5bb | g8 |
| A7 | bp | 15% | 0% | 0% | 0% | 0–5bb | g8 |
| A2 | bp | 12% | 0% | 0% | 0% | 0–5bb | g8 |
| A9 | khnd | 10% | 0% | 0% | 0% | Pot is too big | g9 |
| A8 | khnd | 5% | 0% | 0% | 0% | Pot is too big | g9 |
| A3 | khnd | 2% | 0% | 0% | 0% | Pot is too big | g9 |
| A6 | khnd | 2% | 0% | 0% | 0% | Pot is too big | g9 |
| A4 | khnd | 2% | 0% | 0% | 0% | Pot is too big | g9 |
| A5 | khnd | 2% | 0% | 0% | 0% | Pot is too big | g9 |
