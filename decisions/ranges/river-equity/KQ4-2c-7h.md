# KQ4-2c-7h river (K♦ Q♦ 4♠ 2♣ 7♥): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | KK, QQ, 77, 44, 22 | 100% | 100% | 100% | 100% |
| g2 | 50–100bb | Two pair | KQ, K7, K4, K2, Q7 | 99% | 100% | 100% | 97% |
| g3 | 50–100bb | Overpair | AA | 89% | 100% | 100% | 67% |
| g4 | 50–100bb | Top pair, good kicker | AK, KJ, KT | 85% | 97% | 95% | 55% |
| g5 | 15–25bb | Top pair, weak kicker | K9, K8, K6 | 66% | 69% | 52% | 33% |
| g6 | 0–5bb | Top pair, weak kicker | K5, K3 | 56% | 43% | 15% | 12% |
| g7 | Pot is too big | Second pair | AQ, QJ–Q8, Q6, Q5 | 36% | 16% | 0% | 1% |
| g8 | Pot is too big | Small pairs | JJ–88, 66, 55, 33, A7, A4, A2, J7, T7, 97, 87, 76, 75, 64, 54, 43 | 18% | 2% | 0% | 0% |
| g9 | Pot is too big | Ace-high | AJ–A8, A6, A5, A3 | 5% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| KK | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| QQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 44 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 22 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g2 |
| K7 | twopair | 99% | 100% | 100% | 98% | 50–100bb | g2 |
| K4 | twopair | 98% | 100% | 100% | 94% | 50–100bb | g2 |
| K2 | twopair | 97% | 100% | 100% | 92% | 50–100bb | g2 |
| Q7 | twopair | 94% | 100% | 100% | 86% | 50–100bb | g2 |
| AA | op | 89% | 100% | 100% | 67% | 50–100bb | g3 |
| KT | tpmk | 79% | 92% | 89% | 50% | 25–50bb | g4 |
| AK | tpgk | 88% | 100% | 100% | 59% | 50–100bb | g4 |
| KJ | tpmk | 86% | 98% | 97% | 56% | 50–100bb | g4 |
| K9 | tpmk | 72% | 82% | 71% | 42% | 25–50bb | g5 |
| K8 | tpmk | 66% | 67% | 50% | 34% | 15–25bb | g5 |
| K6 | tpmk | 60% | 56% | 35% | 23% | 5–15bb | g5 |
| K5 | tpmk | 57% | 48% | 22% | 17% | 0–5bb | g6 |
| K3 | tpmk | 55% | 39% | 7% | 6% | 0–5bb | g6 |
| AQ | mp | 39% | 20% | 0% | 1% | Pot is too big | g7 |
| QJ | mp | 37% | 18% | 0% | 1% | Pot is too big | g7 |
| Q9 | mp | 36% | 15% | 0% | 1% | Pot is too big | g7 |
| QT | mp | 36% | 16% | 0% | 1% | Pot is too big | g7 |
| Q8 | mp | 33% | 14% | 0% | 1% | Pot is too big | g7 |
| Q6 | mp | 29% | 12% | 0% | 1% | Pot is too big | g7 |
| Q5 | mp | 28% | 8% | 0% | 1% | Pot is too big | g7 |
| 99 | pp2 | 22% | 3% | 0% | 0% | Pot is too big | g8 |
| 55 | spp | 22% | 2% | 0% | 0% | Pot is too big | g8 |
| 88 | spp | 22% | 3% | 0% | 0% | Pot is too big | g8 |
| 87 | bp | 22% | 3% | 0% | 0% | Pot is too big | g8 |
| 97 | bp | 21% | 3% | 0% | 0% | Pot is too big | g8 |
| TT | pp2 | 21% | 2% | 0% | 0% | Pot is too big | g8 |
| 76 | bp | 21% | 3% | 0% | 0% | Pot is too big | g8 |
| 75 | bp | 21% | 2% | 0% | 0% | Pot is too big | g8 |
| J7 | bp | 21% | 3% | 0% | 0% | Pot is too big | g8 |
| 66 | spp | 20% | 3% | 0% | 0% | Pot is too big | g8 |
| T7 | bp | 20% | 3% | 0% | 0% | Pot is too big | g8 |
| A7 | bp | 19% | 2% | 0% | 0% | Pot is too big | g8 |
| JJ | pp2 | 18% | 2% | 0% | 0% | Pot is too big | g8 |
| A4 | bp | 15% | 1% | 0% | 0% | Pot is too big | g8 |
| 64 | bp | 13% | 1% | 0% | 0% | Pot is too big | g8 |
| 54 | bp | 13% | 0% | 0% | 0% | Pot is too big | g8 |
| 43 | bp | 13% | 0% | 0% | 0% | Pot is too big | g8 |
| 33 | spp | 11% | 0% | 0% | 0% | Pot is too big | g8 |
| A2 | bp | 10% | 0% | 0% | 0% | Pot is too big | g8 |
| AJ | khnd | 7% | 0% | 0% | 0% | Pot is too big | g9 |
| A9 | khnd | 6% | 0% | 0% | 0% | Pot is too big | g9 |
| A3 | khnd | 5% | 0% | 0% | 0% | Pot is too big | g9 |
| AT | khnd | 5% | 0% | 0% | 0% | Pot is too big | g9 |
| A8 | khnd | 5% | 0% | 0% | 0% | Pot is too big | g9 |
| A6 | khnd | 5% | 0% | 0% | 0% | Pot is too big | g9 |
| A5 | khnd | 4% | 0% | 0% | 0% | Pot is too big | g9 |
