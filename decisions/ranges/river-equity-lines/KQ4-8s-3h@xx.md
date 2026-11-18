# KQ4-8s-3h@xx river (K♦ Q♦ 4♠ 8♠ 3♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | KK, QQ, 88, 44, 33 | 100% | 100% | 100% | 90% |
| g2 | 25–50bb | Two pair | KQ, K8, K4, K3, Q8, 43 | 96% | 100% | 98% | 26% |
| g3 | 25–50bb | Overpair | AA | 91% | 96% | 85% | 0% |
| g4 | 25–50bb | Top pair, good kicker | AK, KJ, KT | 92% | 94% | 65% | 0% |
| g5 | 15–25bb | Top pair, weak kicker | K9, K7–K5, K2 | 87% | 86% | 16% | 0% |
| g6 | 15–25bb | Second pair | AQ, QJ–Q9 | 80% | 71% | 0% | 0% |
| g7 | 5–15bb | Second pair | Q7–Q5 | 75% | 56% | 0% | 0% |
| g8 | 0–5bb | Small pairs | JJ–99, 77–55, 22, A8, A4, A3, J8, T8, 98, 87, 86, 64, 54 | 59% | 28% | 0% | 0% |
| g9 | 0–5bb | Ace-high | AJ–A9, A7–A5, A2 | 32% | 5% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| KK | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| QQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 88 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 44 | twopair | 99% | 100% | 100% | 87% | 50–100bb | g1 |
| 33 | twopair | 98% | 100% | 100% | 63% | 50–100bb | g1 |
| KQ | twopair | 97% | 100% | 100% | 38% | 25–50bb | g2 |
| K8 | twopair | 97% | 100% | 100% | 26% | 25–50bb | g2 |
| K4 | twopair | 96% | 100% | 99% | 20% | 25–50bb | g2 |
| K3 | twopair | 95% | 99% | 96% | 17% | 25–50bb | g2 |
| Q8 | twopair | 94% | 98% | 94% | 7% | 25–50bb | g2 |
| 43 | twopair | 94% | 97% | 90% | 0% | 25–50bb | g2 |
| AA | op | 91% | 96% | 85% | 0% | 25–50bb | g3 |
| KT | tpmk | 90% | 91% | 47% | 0% | 15–25bb | g4 |
| AK | tpgk | 93% | 96% | 80% | 0% | 25–50bb | g4 |
| KJ | tpmk | 92% | 95% | 69% | 0% | 25–50bb | g4 |
| K9 | tpmk | 89% | 88% | 28% | 0% | 15–25bb | g5 |
| K7 | tpmk | 87% | 86% | 17% | 0% | 15–25bb | g5 |
| K6 | tpmk | 87% | 84% | 12% | 0% | 15–25bb | g5 |
| K5 | tpmk | 86% | 84% | 8% | 0% | 15–25bb | g5 |
| K2 | tpmk | 86% | 83% | 3% | 0% | 15–25bb | g5 |
| QJ | mp | 80% | 74% | 0% | 0% | 15–25bb | g6 |
| AQ | mp | 81% | 74% | 0% | 0% | 15–25bb | g6 |
| QT | mp | 80% | 69% | 0% | 0% | 15–25bb | g6 |
| Q9 | mp | 79% | 62% | 0% | 0% | 15–25bb | g6 |
| Q7 | mp | 75% | 59% | 0% | 0% | 5–15bb | g7 |
| Q6 | mp | 75% | 55% | 0% | 0% | 5–15bb | g7 |
| Q5 | mp | 75% | 53% | 0% | 0% | 5–15bb | g7 |
| TT | pp2 | 71% | 47% | 0% | 0% | 0–5bb | g8 |
| JJ | pp2 | 70% | 46% | 0% | 0% | 0–5bb | g8 |
| 99 | pp2 | 69% | 47% | 0% | 0% | 0–5bb | g8 |
| A8 | bp | 68% | 36% | 0% | 0% | 0–5bb | g8 |
| J8 | bp | 68% | 37% | 0% | 0% | 0–5bb | g8 |
| 98 | bp | 66% | 34% | 0% | 0% | 0–5bb | g8 |
| T8 | bp | 65% | 35% | 0% | 0% | 0–5bb | g8 |
| 87 | bp | 63% | 31% | 0% | 0% | 0–5bb | g8 |
| 86 | bp | 63% | 30% | 0% | 0% | 0–5bb | g8 |
| 77 | spp | 59% | 27% | 0% | 0% | 0–5bb | g8 |
| 66 | spp | 57% | 24% | 0% | 0% | 0–5bb | g8 |
| 55 | spp | 55% | 24% | 0% | 0% | 0–5bb | g8 |
| A4 | bp | 53% | 18% | 0% | 0% | 0–5bb | g8 |
| 64 | bp | 52% | 18% | 0% | 0% | 0–5bb | g8 |
| 54 | bp | 50% | 17% | 0% | 0% | 0–5bb | g8 |
| A3 | bp | 47% | 13% | 0% | 0% | 0–5bb | g8 |
| 22 | spp | 44% | 10% | 0% | 0% | 0–5bb | g8 |
| AJ | khnd | 39% | 7% | 0% | 0% | 0–5bb | g9 |
| AT | khnd | 36% | 8% | 0% | 0% | 0–5bb | g9 |
| A9 | khnd | 35% | 8% | 0% | 0% | 0–5bb | g9 |
| A7 | khnd | 31% | 6% | 0% | 0% | 0–5bb | g9 |
| A6 | khnd | 29% | 4% | 0% | 0% | 0–5bb | g9 |
| A5 | khnd | 25% | 2% | 0% | 0% | 0–5bb | g9 |
| A2 | khnd | 25% | 0% | 0% | 0% | 0–5bb | g9 |
