# KQT-7c-2h river (K♦ Q♣ T♥ 7♣ 2♥): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights & sets | KK, QQ, TT, 77, 22, AJ, J9 | 99% | 100% | 100% | 95% |
| g2 | 50–100bb | Two pair | KQ, KT, K7, K2 | 94% | 98% | 97% | 68% |
| g3 | 25–50bb | Overpair | AA | 76% | 68% | 60% | 42% |
| g4 | 25–50bb | Two pair | QT, Q7, T7 | 85% | 82% | 76% | 47% |
| g5 | 15–25bb | Top pair, good kicker | AK, KJ | 77% | 63% | 48% | 34% |
| g6 | 0–5bb | Top pair, weak kicker | K9, K8, K6–K3 | 63% | 43% | 17% | 22% |
| g7 | Pot is too big | Second pair | AQ, QJ, Q9, Q8, Q6, Q5 | 37% | 19% | 0% | 5% |
| g8 | Pot is too big | Small pairs | JJ, 99, 88, 66–33, AT, A7, A2, JT, J7, T9, T8, 97, 87, 76, 75 | 7% | 2% | 0% | 0% |
| g9 | Pot is too big | Ace-high | A9, A8, A6–A3 | 1% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AJ | straight | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J9 | straight | 99% | 100% | 100% | 97% | 50–100bb | g1 |
| 77 | twopair | 98% | 100% | 100% | 90% | 50–100bb | g1 |
| 22 | twopair | 98% | 100% | 100% | 90% | 50–100bb | g1 |
| TT | twopair | 98% | 100% | 100% | 88% | 50–100bb | g1 |
| QQ | twopair | 98% | 100% | 100% | 87% | 50–100bb | g1 |
| KK | twopair | 97% | 100% | 100% | 82% | 50–100bb | g1 |
| KQ | twopair | 96% | 100% | 100% | 80% | 50–100bb | g2 |
| KT | twopair | 94% | 98% | 98% | 66% | 50–100bb | g2 |
| K7 | twopair | 93% | 95% | 93% | 58% | 50–100bb | g2 |
| K2 | twopair | 90% | 91% | 87% | 55% | 50–100bb | g2 |
| AA | op | 76% | 68% | 60% | 42% | 25–50bb | g3 |
| QT | twopair | 86% | 84% | 79% | 49% | 25–50bb | g4 |
| Q7 | twopair | 81% | 77% | 72% | 42% | 25–50bb | g4 |
| T7 | twopair | 80% | 75% | 66% | 46% | 25–50bb | g4 |
| KJ | tpmk | 75% | 60% | 45% | 27% | 15–25bb | g5 |
| AK | tpgk | 78% | 66% | 52% | 41% | 25–50bb | g5 |
| K8 | tpmk | 66% | 44% | 20% | 21% | 0–5bb | g6 |
| K6 | tpmk | 62% | 41% | 14% | 21% | 0–5bb | g6 |
| K5 | tpmk | 60% | 38% | 10% | 21% | 0–5bb | g6 |
| K4 | tpmk | 58% | 36% | 6% | 21% | 0–5bb | g6 |
| K3 | tpmk | 54% | 33% | 2% | 20% | 0–5bb | g6 |
| K9 | tpmk | 70% | 52% | 31% | 23% | 5–15bb | g6 |
| AQ | mp | 41% | 22% | 0% | 12% | Pot is too big | g7 |
| QJ | mp | 39% | 21% | 0% | 6% | Pot is too big | g7 |
| Q9 | mp | 34% | 17% | 0% | 0% | Pot is too big | g7 |
| Q5 | mp | 31% | 15% | 0% | 0% | Pot is too big | g7 |
| Q6 | mp | 30% | 16% | 0% | 0% | Pot is too big | g7 |
| Q8 | mp | 30% | 16% | 0% | 0% | Pot is too big | g7 |
| JJ | pp2 | 26% | 13% | 0% | 0% | Pot is too big | g8 |
| AT | bp | 16% | 7% | 0% | 0% | Pot is too big | g8 |
| JT | bp | 11% | 2% | 0% | 0% | Pot is too big | g8 |
| T8 | bp | 9% | 0% | 0% | 0% | Pot is too big | g8 |
| T9 | bp | 9% | 0% | 0% | 0% | Pot is too big | g8 |
| 99 | pp3 | 6% | 0% | 0% | 0% | Pot is too big | g8 |
| 88 | spp | 6% | 0% | 0% | 0% | Pot is too big | g8 |
| A7 | bp | 2% | 0% | 0% | 0% | Pot is too big | g8 |
| J7 | bp | 2% | 0% | 0% | 0% | Pot is too big | g8 |
| 87 | bp | 2% | 0% | 0% | 0% | Pot is too big | g8 |
| 97 | bp | 2% | 0% | 0% | 0% | Pot is too big | g8 |
| 75 | bp | 2% | 0% | 0% | 0% | Pot is too big | g8 |
| 55 | spp | 2% | 0% | 0% | 0% | Pot is too big | g8 |
| 76 | bp | 2% | 0% | 0% | 0% | Pot is too big | g8 |
| 33 | spp | 2% | 0% | 0% | 0% | Pot is too big | g8 |
| 44 | spp | 2% | 0% | 0% | 0% | Pot is too big | g8 |
| 66 | spp | 2% | 0% | 0% | 0% | Pot is too big | g8 |
| A2 | bp | 2% | 0% | 0% | 0% | Pot is too big | g8 |
| A9 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A8 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A3 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A4 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
