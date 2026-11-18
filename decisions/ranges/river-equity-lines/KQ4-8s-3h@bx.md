# KQ4-8s-3h@bx river (K♦ Q♦ 4♠ 8♠ 3♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | KK, QQ, 88, 44, 33 | 100% | 100% | 100% | 94% |
| g2 | 50–100bb | Two pair | KQ, K8, K4, K3 | 97% | 100% | 100% | 73% |
| g3 | 25–50bb | Two pair | Q8, 43 | 95% | 99% | 97% | 33% |
| g4 | 25–50bb | Overpair | AA | 91% | 98% | 93% | 8% |
| g5 | 25–50bb | Top pair, good kicker | AK, KJ, KT | 91% | 95% | 75% | 11% |
| g6 | 15–25bb | Top pair, weak kicker | K9, K7–K5, K2 | 85% | 84% | 17% | 10% |
| g7 | 15–25bb | Second pair | AQ, QJ–Q9 | 71% | 65% | 0% | 9% |
| g8 | 0–5bb | Second pair | Q7–Q5 | 63% | 40% | 0% | 8% |
| g9 | 0–5bb | Small pairs | JJ–99, 77–55, 22, A8, A4, A3, J8, T8, 98, 87, 86, 64, 54 | 45% | 18% | 0% | 4% |
| g10 | 0–5bb | Ace-high | AJ–A9, A7–A5, A2 | 17% | 1% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| KK | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| QQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 88 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 44 | twopair | 99% | 100% | 100% | 86% | 50–100bb | g1 |
| 33 | twopair | 99% | 100% | 100% | 83% | 50–100bb | g1 |
| K8 | twopair | 98% | 100% | 100% | 78% | 50–100bb | g2 |
| KQ | twopair | 98% | 100% | 100% | 77% | 50–100bb | g2 |
| K4 | twopair | 96% | 100% | 100% | 60% | 50–100bb | g2 |
| K3 | twopair | 96% | 100% | 99% | 57% | 50–100bb | g2 |
| Q8 | twopair | 96% | 99% | 98% | 46% | 25–50bb | g3 |
| 43 | twopair | 93% | 99% | 95% | 12% | 25–50bb | g3 |
| AA | op | 91% | 98% | 93% | 8% | 25–50bb | g4 |
| AK | tpgk | 93% | 98% | 91% | 10% | 25–50bb | g5 |
| KJ | tpmk | 92% | 96% | 79% | 11% | 25–50bb | g5 |
| KT | tpmk | 89% | 90% | 54% | 10% | 25–50bb | g5 |
| K9 | tpmk | 87% | 86% | 31% | 10% | 15–25bb | g6 |
| K7 | tpmk | 85% | 83% | 19% | 10% | 15–25bb | g6 |
| K6 | tpmk | 84% | 83% | 13% | 10% | 15–25bb | g6 |
| K5 | tpmk | 83% | 81% | 8% | 10% | 15–25bb | g6 |
| K2 | tpmk | 82% | 81% | 2% | 10% | 15–25bb | g6 |
| QJ | mp | 73% | 70% | 0% | 9% | 15–25bb | g7 |
| AQ | mp | 74% | 68% | 0% | 9% | 15–25bb | g7 |
| QT | mp | 69% | 63% | 0% | 9% | 15–25bb | g7 |
| Q9 | mp | 67% | 53% | 0% | 8% | 5–15bb | g7 |
| Q6 | mp | 63% | 40% | 0% | 8% | 0–5bb | g8 |
| Q7 | mp | 63% | 45% | 0% | 8% | 0–5bb | g8 |
| Q5 | mp | 62% | 36% | 0% | 7% | 0–5bb | g8 |
| 99 | pp2 | 55% | 30% | 0% | 5% | 0–5bb | g9 |
| 98 | bp | 55% | 24% | 0% | 7% | 0–5bb | g9 |
| JJ | pp2 | 54% | 28% | 0% | 5% | 0–5bb | g9 |
| J8 | bp | 54% | 25% | 0% | 6% | 0–5bb | g9 |
| TT | pp2 | 54% | 30% | 0% | 5% | 0–5bb | g9 |
| T8 | bp | 52% | 25% | 0% | 7% | 0–5bb | g9 |
| 86 | bp | 52% | 23% | 0% | 7% | 0–5bb | g9 |
| 87 | bp | 52% | 23% | 0% | 6% | 0–5bb | g9 |
| A8 | bp | 52% | 24% | 0% | 6% | 0–5bb | g9 |
| 77 | spp | 50% | 23% | 0% | 6% | 0–5bb | g9 |
| 66 | spp | 45% | 20% | 0% | 5% | 0–5bb | g9 |
| 55 | spp | 44% | 18% | 0% | 5% | 0–5bb | g9 |
| A4 | bp | 36% | 11% | 0% | 3% | 0–5bb | g9 |
| 64 | bp | 35% | 8% | 0% | 2% | 0–5bb | g9 |
| 54 | bp | 34% | 7% | 0% | 1% | 0–5bb | g9 |
| 22 | spp | 30% | 2% | 0% | 0% | 0–5bb | g9 |
| A3 | bp | 30% | 5% | 0% | 0% | 0–5bb | g9 |
| AJ | khnd | 24% | 1% | 0% | 0% | 0–5bb | g10 |
| AT | khnd | 19% | 1% | 0% | 0% | 0–5bb | g10 |
| A9 | khnd | 17% | 1% | 0% | 0% | 0–5bb | g10 |
| A7 | khnd | 17% | 1% | 0% | 0% | 0–5bb | g10 |
| A6 | khnd | 15% | 1% | 0% | 0% | 0–5bb | g10 |
| A2 | khnd | 14% | 0% | 0% | 0% | 0–5bb | g10 |
| A5 | khnd | 14% | 0% | 0% | 0% | 0–5bb | g10 |
