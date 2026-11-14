# K54-Qd-3h river (K♠ 5♥ 4♣ Q♦ 3♥): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights & sets | KK, QQ, 55–33, A2, 76 | 99% | 100% | 100% | 98% |
| g2 | 50–100bb | Two pair | KQ, K5–K3, Q5, 54, 43 | 95% | 100% | 100% | 84% |
| g3 | 15–25bb | Overpair | AA | 87% | 100% | 100% | 62% |
| g4 | 15–25bb | Top pair, good kicker | AK, KJ, KT | 83% | 88% | 88% | 51% |
| g5 | 0–5bb | Top pair, weak kicker | K9–K6, K2 | 58% | 31% | 27% | 29% |
| g6 | 0–5bb | Second pair | AQ, QJ–Q6 | 33% | 2% | 0% | 7% |
| g7 | 0–5bb | Small pairs | JJ–66, 22, A5–A3, 75, 65, 64 | 24% | 1% | 0% | 4% |
| g8 | Pot is too big | Ace-high | AJ–A6 | 2% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| 76 | straight | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A2 | straight | 99% | 100% | 100% | 99% | 50–100bb | g1 |
| 33 | twopair | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 55 | twopair | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 44 | twopair | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| QQ | twopair | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| KK | twopair | 98% | 100% | 100% | 96% | 50–100bb | g1 |
| KQ | twopair | 98% | 100% | 100% | 92% | 50–100bb | g2 |
| K4 | twopair | 95% | 100% | 100% | 84% | 50–100bb | g2 |
| K5 | twopair | 95% | 100% | 100% | 83% | 50–100bb | g2 |
| K3 | twopair | 94% | 100% | 100% | 79% | 50–100bb | g2 |
| Q5 | twopair | 92% | 100% | 100% | 74% | 50–100bb | g2 |
| 43 | twopair | 89% | 100% | 100% | 65% | 50–100bb | g2 |
| 54 | twopair | 89% | 100% | 100% | 62% | 50–100bb | g2 |
| AA | op | 87% | 100% | 100% | 62% | 50–100bb | g3 |
| KT | tpmk | 76% | 72% | 72% | 41% | 25–50bb | g4 |
| AK | tpgk | 87% | 100% | 100% | 60% | 50–100bb | g4 |
| KJ | tpmk | 85% | 93% | 92% | 52% | 50–100bb | g4 |
| K8 | tpmk | 60% | 37% | 32% | 32% | 0–5bb | g5 |
| K7 | tpmk | 56% | 25% | 22% | 29% | 0–5bb | g5 |
| K6 | tpmk | 52% | 17% | 14% | 25% | 0–5bb | g5 |
| K9 | tpmk | 68% | 53% | 50% | 36% | 25–50bb | g5 |
| K2 | tpmk | 48% | 10% | 5% | 16% | 0–5bb | g5 |
| QJ | mp | 35% | 2% | 0% | 8% | 0–5bb | g6 |
| Q8 | mp | 33% | 2% | 0% | 8% | 0–5bb | g6 |
| AQ | mp | 33% | 2% | 0% | 6% | 0–5bb | g6 |
| QT | mp | 33% | 2% | 0% | 7% | 0–5bb | g6 |
| Q7 | mp | 33% | 2% | 0% | 8% | 0–5bb | g6 |
| Q9 | mp | 32% | 2% | 0% | 8% | 0–5bb | g6 |
| Q6 | mp | 32% | 2% | 0% | 7% | 0–5bb | g6 |
| 88 | pp2 | 32% | 2% | 0% | 7% | 0–5bb | g7 |
| 99 | pp2 | 32% | 2% | 0% | 7% | 0–5bb | g7 |
| TT | pp2 | 31% | 2% | 0% | 7% | 0–5bb | g7 |
| 66 | pp2 | 30% | 2% | 0% | 8% | 0–5bb | g7 |
| 77 | pp2 | 30% | 2% | 0% | 7% | 0–5bb | g7 |
| JJ | pp2 | 29% | 1% | 0% | 8% | 0–5bb | g7 |
| 75 | bp | 25% | 2% | 0% | 4% | 0–5bb | g7 |
| 65 | bp | 25% | 2% | 0% | 4% | 0–5bb | g7 |
| A5 | bp | 24% | 1% | 0% | 4% | 0–5bb | g7 |
| 64 | bp | 17% | 2% | 0% | 0% | 0–5bb | g7 |
| 22 | pp3 | 16% | 1% | 0% | 0% | 0–5bb | g7 |
| A4 | bp | 16% | 1% | 0% | 1% | 0–5bb | g7 |
| A3 | bp | 13% | 1% | 0% | 0% | 0–5bb | g7 |
| AJ | khnd | 8% | 1% | 0% | 0% | Pot is too big | g8 |
| AT | khnd | 2% | 0% | 0% | 0% | Pot is too big | g8 |
| A9 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| A8 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| A7 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g8 |
