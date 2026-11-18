# K54-Qd-4d@bx river (K♠ 5♥ 4♣ Q♦ 4♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Full houses | KK, QQ, 55, 44, K4, 54 | 100% | 100% | 100% | 99% |
| g2 | 50–100bb | Trips | A4, 64, 43 | 98% | 100% | 100% | 79% |
| g3 | 25–50bb | Overpair | AA | 90% | 100% | 100% | 41% |
| g4 | 25–50bb | Top pair | AK, KQ–K5, K3, K2 | 84% | 91% | 70% | 21% |
| g5 | 5–15bb | Second pair | AQ, QJ–Q5 | 65% | 58% | 0% | 12% |
| g6 | 5–15bb | Small pairs | JJ–66 | 60% | 55% | 0% | 11% |
| g7 | 0–5bb | Third pair | A5, 75, 65 | 45% | 38% | 0% | 5% |
| g8 | 0–5bb | Small pairs | 33, 22 | 34% | 15% | 0% | 0% |
| g9 | 0–5bb | Ace-high | AJ–A6, A3, A2 | 10% | 3% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| KK | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K4 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| QQ | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 55 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 44 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 54 | boat | 99% | 100% | 100% | 89% | 50–100bb | g1 |
| A4 | trips | 99% | 100% | 100% | 83% | 50–100bb | g2 |
| 64 | trips | 96% | 100% | 100% | 66% | 50–100bb | g2 |
| 43 | trips | 96% | 100% | 100% | 61% | 50–100bb | g2 |
| AA | op | 90% | 100% | 100% | 41% | 25–50bb | g3 |
| KQ | twopair | 91% | 100% | 100% | 25% | 25–50bb | g4 |
| K5 | twopair | 88% | 100% | 100% | 18% | 25–50bb | g4 |
| AK | tpgk | 89% | 100% | 99% | 21% | 25–50bb | g4 |
| KJ | tpmk | 88% | 98% | 94% | 21% | 25–50bb | g4 |
| K8 | tpmk | 79% | 84% | 49% | 22% | 15–25bb | g4 |
| K7 | tpmk | 76% | 81% | 39% | 21% | 15–25bb | g4 |
| KT | tpmk | 84% | 94% | 78% | 20% | 25–50bb | g4 |
| K6 | tpmk | 77% | 78% | 33% | 21% | 15–25bb | g4 |
| K3 | tpmk | 75% | 75% | 24% | 18% | 15–25bb | g4 |
| K2 | tpmk | 74% | 71% | 11% | 17% | 15–25bb | g4 |
| K9 | tpmk | 82% | 89% | 63% | 22% | 25–50bb | g4 |
| QJ | mp | 66% | 60% | 0% | 13% | 15–25bb | g5 |
| AQ | mp | 64% | 58% | 0% | 13% | 5–15bb | g5 |
| Q9 | mp | 65% | 58% | 0% | 12% | 5–15bb | g5 |
| QT | mp | 65% | 58% | 0% | 11% | 5–15bb | g5 |
| Q7 | mp | 65% | 57% | 0% | 12% | 5–15bb | g5 |
| Q5 | twopair | 66% | 56% | 1% | 10% | 5–15bb | g5 |
| Q8 | mp | 65% | 56% | 0% | 12% | 5–15bb | g5 |
| Q6 | mp | 64% | 55% | 0% | 13% | 5–15bb | g5 |
| 99 | pp2 | 63% | 57% | 0% | 11% | 5–15bb | g6 |
| JJ | pp2 | 64% | 57% | 0% | 11% | 5–15bb | g6 |
| TT | pp2 | 63% | 56% | 0% | 10% | 5–15bb | g6 |
| 88 | pp2 | 61% | 56% | 0% | 10% | 5–15bb | g6 |
| 77 | pp2 | 57% | 53% | 0% | 11% | 5–15bb | g6 |
| 66 | pp2 | 54% | 50% | 0% | 11% | 5–15bb | g6 |
| 75 | bp | 45% | 34% | 0% | 2% | 0–5bb | g7 |
| A5 | bp | 45% | 39% | 0% | 7% | 0–5bb | g7 |
| 65 | bp | 44% | 35% | 0% | 2% | 0–5bb | g7 |
| 33 | pp3 | 36% | 20% | 0% | 0% | 0–5bb | g8 |
| 22 | pp3 | 32% | 10% | 0% | 0% | 0–5bb | g8 |
| AJ | khnd | 25% | 7% | 0% | 0% | 0–5bb | g9 |
| AT | khnd | 18% | 6% | 0% | 0% | 0–5bb | g9 |
| A9 | khnd | 12% | 4% | 0% | 0% | 0–5bb | g9 |
| A8 | khnd | 8% | 4% | 0% | 0% | 0–5bb | g9 |
| A7 | khnd | 6% | 2% | 0% | 0% | 0–5bb | g9 |
| A6 | khnd | 5% | 2% | 0% | 0% | 0–5bb | g9 |
| A2 | khnd | 4% | 1% | 0% | 0% | 0–5bb | g9 |
| A3 | khnd | 4% | 1% | 0% | 0% | 0–5bb | g9 |
