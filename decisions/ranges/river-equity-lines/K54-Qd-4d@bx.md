# K54-Qd-4d@bx river (K♠ 5♥ 4♣ Q♦ 4♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Full houses | KK, QQ, 55, 44, K4, 54 | 100% | 100% | 100% | 99% |
| g2 | 50–100bb | Trips | A4, 64, 43 | 98% | 100% | 100% | 79% |
| g3 | 25–50bb | Overpair | AA | 91% | 100% | 100% | 42% |
| g4 | 25–50bb | Top pair | AK, KQ–K5, K3, K2 | 83% | 91% | 70% | 21% |
| g5 | 5–15bb | Second pair | AQ, QJ–Q5 | 65% | 59% | 0% | 12% |
| g6 | 5–15bb | Small pairs | JJ–77 | 61% | 56% | 0% | 11% |
| g7 | 0–5bb | Third pair | A5, 75, 65 | 44% | 38% | 0% | 5% |
| g8 | 0–5bb | Small pairs | 66, 33, 22 | 41% | 27% | 0% | 4% |
| g9 | Pot is too big | Ace-high | AJ–A6, A3, A2 | 10% | 3% | 0% | 0% |

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
| 43 | trips | 96% | 100% | 100% | 62% | 50–100bb | g2 |
| AA | op | 91% | 100% | 100% | 42% | 25–50bb | g3 |
| KQ | twopair | 90% | 100% | 100% | 26% | 25–50bb | g4 |
| K5 | twopair | 88% | 100% | 99% | 17% | 25–50bb | g4 |
| AK | tpgk | 89% | 100% | 99% | 22% | 25–50bb | g4 |
| KJ | tpmk | 88% | 98% | 94% | 21% | 25–50bb | g4 |
| K8 | tpmk | 79% | 85% | 48% | 21% | 15–25bb | g4 |
| K7 | tpmk | 77% | 81% | 38% | 21% | 15–25bb | g4 |
| KT | tpmk | 84% | 93% | 78% | 21% | 25–50bb | g4 |
| K6 | tpmk | 76% | 78% | 32% | 21% | 15–25bb | g4 |
| K3 | tpmk | 74% | 75% | 23% | 18% | 15–25bb | g4 |
| K2 | tpmk | 74% | 70% | 10% | 17% | 15–25bb | g4 |
| K9 | tpmk | 82% | 88% | 62% | 22% | 25–50bb | g4 |
| QJ | mp | 67% | 60% | 0% | 12% | 5–15bb | g5 |
| Q9 | mp | 65% | 59% | 0% | 12% | 5–15bb | g5 |
| AQ | mp | 63% | 59% | 0% | 13% | 5–15bb | g5 |
| QT | mp | 66% | 59% | 0% | 12% | 5–15bb | g5 |
| Q8 | mp | 65% | 58% | 0% | 11% | 5–15bb | g5 |
| Q5 | twopair | 66% | 58% | 1% | 10% | 5–15bb | g5 |
| Q7 | mp | 64% | 57% | 0% | 12% | 5–15bb | g5 |
| Q6 | mp | 65% | 56% | 0% | 12% | 5–15bb | g5 |
| 99 | pp2 | 63% | 58% | 0% | 11% | 5–15bb | g6 |
| JJ | pp2 | 64% | 58% | 0% | 10% | 5–15bb | g6 |
| TT | pp2 | 63% | 56% | 0% | 10% | 5–15bb | g6 |
| 88 | pp2 | 60% | 56% | 0% | 10% | 5–15bb | g6 |
| 77 | pp2 | 57% | 53% | 0% | 11% | 5–15bb | g6 |
| A5 | bp | 44% | 40% | 0% | 6% | 0–5bb | g7 |
| 65 | bp | 43% | 33% | 0% | 2% | 0–5bb | g7 |
| 75 | bp | 42% | 35% | 0% | 3% | 0–5bb | g7 |
| 66 | pp2 | 54% | 49% | 0% | 11% | 0–5bb | g8 |
| 33 | pp3 | 37% | 21% | 0% | 0% | 0–5bb | g8 |
| 22 | pp3 | 33% | 11% | 0% | 0% | 0–5bb | g8 |
| AJ | khnd | 24% | 7% | 0% | 0% | Pot is too big | g9 |
| AT | khnd | 18% | 6% | 0% | 0% | Pot is too big | g9 |
| A9 | khnd | 13% | 5% | 0% | 0% | Pot is too big | g9 |
| A8 | khnd | 8% | 3% | 0% | 0% | Pot is too big | g9 |
| A7 | khnd | 6% | 2% | 0% | 0% | Pot is too big | g9 |
| A6 | khnd | 5% | 2% | 0% | 0% | Pot is too big | g9 |
| A2 | khnd | 4% | 1% | 0% | 0% | Pot is too big | g9 |
| A3 | khnd | 4% | 1% | 0% | 0% | Pot is too big | g9 |
