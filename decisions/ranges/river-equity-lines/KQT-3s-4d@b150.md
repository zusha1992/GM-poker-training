# KQT-3s-4d@b150 river (K♦ Q♣ T♥ 3♠ 4♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights & sets | KK, QQ, TT, 44, 33, AJ, J9 | 96% | 100% | 100% | 88% |
| g2 | 50–100bb | Two pair | KQ, KT | 87% | 98% | 97% | 60% |
| g3 | 25–50bb | Two pair | K4, K3, QT, 43 | 78% | 79% | 73% | 44% |
| g4 | 15–25bb | Overpair | AA | 68% | 63% | 50% | 39% |
| g5 | 5–15bb | Top pair, good kicker | AK, KJ | 66% | 57% | 41% | 31% |
| g6 | 0–5bb | Top pair, weak kicker | K9–K5, K2 | 49% | 36% | 8% | 20% |
| g7 | 0–5bb | Second pair | AQ, QJ, Q9–Q5 | 27% | 16% | 0% | 5% |
| g8 | 0–5bb | Small pairs | JJ, 99–55, 22, AT, A4, A3, JT, T9–T7, 64, 54 | 3% | 2% | 0% | 0% |
| g9 | Pot is too big | Ace-high | A9–A5, A2 | 0% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AJ | straight | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| J9 | straight | 97% | 100% | 100% | 90% | 50–100bb | g1 |
| 33 | twopair | 93% | 100% | 100% | 78% | 50–100bb | g1 |
| 44 | twopair | 93% | 100% | 100% | 78% | 50–100bb | g1 |
| TT | twopair | 91% | 100% | 100% | 75% | 50–100bb | g1 |
| QQ | twopair | 91% | 100% | 100% | 71% | 50–100bb | g1 |
| KK | twopair | 90% | 100% | 100% | 66% | 50–100bb | g1 |
| KQ | twopair | 90% | 100% | 100% | 65% | 50–100bb | g2 |
| KT | twopair | 85% | 96% | 95% | 55% | 50–100bb | g2 |
| K4 | twopair | 84% | 89% | 85% | 50% | 25–50bb | g3 |
| K3 | twopair | 83% | 85% | 80% | 48% | 25–50bb | g3 |
| QT | twopair | 76% | 76% | 70% | 41% | 25–50bb | g3 |
| 43 | twopair | 71% | 66% | 56% | 38% | 25–50bb | g3 |
| AA | op | 68% | 63% | 50% | 39% | 25–50bb | g4 |
| AK | tpgk | 69% | 61% | 47% | 38% | 15–25bb | g5 |
| KJ | tpmk | 63% | 53% | 36% | 25% | 5–15bb | g5 |
| K9 | tpmk | 58% | 45% | 21% | 21% | 0–5bb | g6 |
| K8 | tpmk | 48% | 38% | 10% | 20% | 0–5bb | g6 |
| K7 | tpmk | 46% | 33% | 5% | 19% | 0–5bb | g6 |
| K6 | tpmk | 45% | 33% | 3% | 20% | 0–5bb | g6 |
| K5 | tpmk | 45% | 32% | 2% | 21% | 0–5bb | g6 |
| K2 | tpmk | 43% | 30% | 1% | 20% | 0–5bb | g6 |
| AQ | mp | 34% | 21% | 0% | 12% | 0–5bb | g7 |
| QJ | mp | 26% | 15% | 0% | 6% | 0–5bb | g7 |
| Q9 | mp | 24% | 14% | 0% | 0% | 0–5bb | g7 |
| Q5 | mp | 23% | 14% | 0% | 0% | 0–5bb | g7 |
| Q8 | mp | 22% | 13% | 0% | 0% | 0–5bb | g7 |
| Q6 | mp | 22% | 13% | 0% | 0% | 0–5bb | g7 |
| Q7 | mp | 21% | 13% | 0% | 0% | 0–5bb | g7 |
| JJ | pp2 | 18% | 10% | 0% | 0% | 0–5bb | g8 |
| AT | bp | 12% | 8% | 0% | 0% | 0–5bb | g8 |
| JT | bp | 4% | 3% | 0% | 0% | 0–5bb | g8 |
| A4 | bp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| A3 | bp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| T9 | bp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| T8 | bp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| T7 | bp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 99 | pp3 | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 88 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 77 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 66 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 64 | bp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 55 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 54 | bp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| 22 | spp | 0% | 0% | 0% | 0% | 0–5bb | g8 |
| A9 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A8 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A7 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
