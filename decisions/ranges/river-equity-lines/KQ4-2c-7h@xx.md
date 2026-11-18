# KQ4-2c-7h@xx river (K♦ Q♦ 4♠ 2♣ 7♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | KK, QQ, 77, 44, 22 | 100% | 100% | 100% | 87% |
| g2 | 25–50bb | Two pair | KQ, K7, K4, K2, Q7 | 97% | 100% | 99% | 40% |
| g3 | 25–50bb | Overpair | AA | 91% | 94% | 76% | 0% |
| g4 | 25–50bb | Top pair, good kicker | AK, KJ, KT | 92% | 93% | 58% | 0% |
| g5 | 15–25bb | Top pair, weak kicker | K9, K8, K6, K5, K3 | 87% | 86% | 16% | 0% |
| g6 | 15–25bb | Second pair | AQ, QJ–Q9 | 80% | 72% | 0% | 0% |
| g7 | 5–15bb | Second pair | Q8, Q6, Q5 | 74% | 55% | 0% | 0% |
| g8 | 0–5bb | Small pairs | JJ–88, 66, 55, 33, A7, A4, A2, J7, T7, 97, 87, 76, 75, 64, 54, 43 | 60% | 30% | 0% | 0% |
| g9 | 0–5bb | Ace-high | AJ–A8, A6, A5, A3 | 34% | 6% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| KK | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| QQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 44 | twopair | 99% | 100% | 100% | 78% | 50–100bb | g1 |
| 22 | twopair | 98% | 100% | 100% | 58% | 50–100bb | g1 |
| KQ | twopair | 97% | 100% | 100% | 41% | 25–50bb | g2 |
| K7 | twopair | 97% | 100% | 100% | 44% | 25–50bb | g2 |
| K4 | twopair | 97% | 100% | 100% | 40% | 25–50bb | g2 |
| K2 | twopair | 96% | 100% | 99% | 36% | 25–50bb | g2 |
| Q7 | twopair | 96% | 99% | 96% | 27% | 25–50bb | g2 |
| AA | op | 91% | 94% | 76% | 0% | 25–50bb | g3 |
| KT | tpmk | 90% | 91% | 44% | 0% | 15–25bb | g4 |
| AK | tpgk | 92% | 95% | 70% | 0% | 25–50bb | g4 |
| KJ | tpmk | 92% | 94% | 61% | 0% | 25–50bb | g4 |
| K9 | tpmk | 89% | 89% | 29% | 0% | 15–25bb | g5 |
| K8 | tpmk | 88% | 86% | 17% | 0% | 15–25bb | g5 |
| K6 | tpmk | 87% | 85% | 11% | 0% | 15–25bb | g5 |
| K5 | tpmk | 87% | 85% | 7% | 0% | 15–25bb | g5 |
| K3 | tpmk | 84% | 83% | 2% | 0% | 15–25bb | g5 |
| QJ | mp | 81% | 77% | 0% | 0% | 15–25bb | g6 |
| AQ | mp | 80% | 75% | 0% | 0% | 15–25bb | g6 |
| QT | mp | 80% | 70% | 0% | 0% | 15–25bb | g6 |
| Q9 | mp | 78% | 63% | 0% | 0% | 15–25bb | g6 |
| Q8 | mp | 75% | 58% | 0% | 0% | 5–15bb | g7 |
| Q6 | mp | 74% | 55% | 0% | 0% | 5–15bb | g7 |
| Q5 | mp | 73% | 53% | 0% | 0% | 5–15bb | g7 |
| TT | pp2 | 70% | 48% | 0% | 0% | 0–5bb | g8 |
| 99 | pp2 | 70% | 48% | 0% | 0% | 0–5bb | g8 |
| JJ | pp2 | 69% | 47% | 0% | 0% | 0–5bb | g8 |
| 88 | spp | 69% | 44% | 0% | 0% | 0–5bb | g8 |
| J7 | bp | 67% | 35% | 0% | 0% | 0–5bb | g8 |
| A7 | bp | 65% | 35% | 0% | 0% | 0–5bb | g8 |
| T7 | bp | 65% | 35% | 0% | 0% | 0–5bb | g8 |
| 97 | bp | 65% | 34% | 0% | 0% | 0–5bb | g8 |
| 87 | bp | 64% | 33% | 0% | 0% | 0–5bb | g8 |
| 76 | bp | 63% | 30% | 0% | 0% | 0–5bb | g8 |
| 75 | bp | 62% | 30% | 0% | 0% | 0–5bb | g8 |
| 66 | spp | 59% | 27% | 0% | 0% | 0–5bb | g8 |
| 55 | spp | 57% | 23% | 0% | 0% | 0–5bb | g8 |
| A4 | bp | 55% | 19% | 0% | 0% | 0–5bb | g8 |
| 64 | bp | 54% | 20% | 0% | 0% | 0–5bb | g8 |
| 54 | bp | 54% | 19% | 0% | 0% | 0–5bb | g8 |
| 43 | bp | 53% | 17% | 0% | 0% | 0–5bb | g8 |
| 33 | spp | 50% | 16% | 0% | 0% | 0–5bb | g8 |
| A2 | bp | 47% | 12% | 0% | 0% | 0–5bb | g8 |
| AJ | khnd | 43% | 9% | 0% | 0% | 0–5bb | g9 |
| AT | khnd | 38% | 10% | 0% | 0% | 0–5bb | g9 |
| A9 | khnd | 38% | 9% | 0% | 0% | 0–5bb | g9 |
| A8 | khnd | 34% | 8% | 0% | 0% | 0–5bb | g9 |
| A6 | khnd | 31% | 5% | 0% | 0% | 0–5bb | g9 |
| A5 | khnd | 30% | 2% | 0% | 0% | 0–5bb | g9 |
| A3 | khnd | 27% | 0% | 0% | 0% | 0–5bb | g9 |
