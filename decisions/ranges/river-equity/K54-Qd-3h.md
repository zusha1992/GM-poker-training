# K54-Qd-3h river (K♠ 5♥ 4♣ Q♦ 3♥): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights & sets | KK, QQ, 55–33, A2, 76 | 99% | 100% | 100% | 98% |
| g2 | 50–100bb | Overpair | AA | 87% | 100% | 100% | 61% |
| g3 | 50–100bb | Two pair | KQ, K5–K3, Q5, 54, 43 | 95% | 100% | 100% | 84% |
| g4 | 50–100bb | Top pair, good kicker | AK, KJ, KT | 83% | 89% | 88% | 51% |
| g5 | 0–5bb | Top pair, weak kicker | K9–K6, K2 | 58% | 31% | 27% | 29% |
| g6 | Pot is too big | Second pair | AQ, QJ–Q6 | 33% | 2% | 0% | 8% |
| g7 | Pot is too big | Small pairs | JJ–66, 22, A5–A3, 75, 65, 64 | 23% | 1% | 0% | 4% |
| g8 | Pot is too big | Ace-high | AJ–A6 | 2% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| 76 | straight | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 33 | twopair | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 44 | twopair | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| A2 | straight | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 55 | twopair | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| QQ | twopair | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| KK | twopair | 98% | 100% | 100% | 97% | 50–100bb | g1 |
| AA | op | 87% | 100% | 100% | 61% | 50–100bb | g2 |
| KQ | twopair | 98% | 100% | 100% | 92% | 50–100bb | g3 |
| K4 | twopair | 95% | 100% | 100% | 84% | 50–100bb | g3 |
| K5 | twopair | 96% | 100% | 100% | 83% | 50–100bb | g3 |
| K3 | twopair | 95% | 100% | 100% | 80% | 50–100bb | g3 |
| Q5 | twopair | 92% | 100% | 100% | 75% | 50–100bb | g3 |
| 43 | twopair | 89% | 100% | 100% | 66% | 50–100bb | g3 |
| 54 | twopair | 89% | 100% | 100% | 63% | 50–100bb | g3 |
| KT | tpmk | 75% | 73% | 71% | 40% | 25–50bb | g4 |
| AK | tpgk | 88% | 100% | 100% | 59% | 50–100bb | g4 |
| KJ | tpmk | 85% | 93% | 92% | 53% | 50–100bb | g4 |
| K8 | tpmk | 59% | 35% | 32% | 31% | 0–5bb | g5 |
| K7 | tpmk | 55% | 25% | 21% | 29% | 0–5bb | g5 |
| K9 | tpmk | 68% | 54% | 50% | 36% | 5–15bb | g5 |
| K6 | tpmk | 53% | 18% | 13% | 25% | 0–5bb | g5 |
| K2 | tpmk | 49% | 10% | 5% | 17% | Pot is too big | g5 |
| QJ | mp | 34% | 2% | 0% | 8% | Pot is too big | g6 |
| AQ | mp | 33% | 2% | 0% | 6% | Pot is too big | g6 |
| Q9 | mp | 33% | 2% | 0% | 9% | Pot is too big | g6 |
| QT | mp | 32% | 2% | 0% | 8% | Pot is too big | g6 |
| Q8 | mp | 32% | 2% | 0% | 8% | Pot is too big | g6 |
| Q6 | mp | 32% | 2% | 0% | 8% | Pot is too big | g6 |
| Q7 | mp | 32% | 2% | 0% | 8% | Pot is too big | g6 |
| 99 | pp2 | 33% | 2% | 0% | 7% | Pot is too big | g7 |
| 88 | pp2 | 32% | 2% | 0% | 7% | Pot is too big | g7 |
| 77 | pp2 | 30% | 1% | 0% | 7% | Pot is too big | g7 |
| 66 | pp2 | 30% | 2% | 0% | 7% | Pot is too big | g7 |
| TT | pp2 | 30% | 2% | 0% | 8% | Pot is too big | g7 |
| JJ | pp2 | 29% | 1% | 0% | 8% | Pot is too big | g7 |
| 75 | bp | 25% | 2% | 0% | 4% | Pot is too big | g7 |
| 65 | bp | 23% | 2% | 0% | 3% | Pot is too big | g7 |
| A5 | bp | 23% | 1% | 0% | 3% | Pot is too big | g7 |
| 64 | bp | 17% | 2% | 0% | 0% | Pot is too big | g7 |
| A4 | bp | 16% | 1% | 0% | 1% | Pot is too big | g7 |
| 22 | pp3 | 16% | 2% | 0% | 0% | Pot is too big | g7 |
| A3 | bp | 12% | 1% | 0% | 0% | Pot is too big | g7 |
| AJ | khnd | 8% | 0% | 0% | 0% | Pot is too big | g8 |
| AT | khnd | 2% | 0% | 0% | 0% | Pot is too big | g8 |
| A9 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| A8 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| A7 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
