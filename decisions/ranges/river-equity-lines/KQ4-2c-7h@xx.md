# KQ4-2c-7h@xx river (K♦ Q♦ 4♠ 2♣ 7♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | KK, QQ, 77, 44, 22 | 100% | 100% | 100% | 87% |
| g2 | 25–50bb | Two pair | KQ, K7, K4, K2, Q7 | 97% | 100% | 99% | 41% |
| g3 | 25–50bb | Overpair | AA | 91% | 95% | 77% | 0% |
| g4 | 25–50bb | Top pair, good kicker | AK, KJ, KT | 92% | 93% | 58% | 0% |
| g5 | 15–25bb | Top pair, weak kicker | K9, K8, K6, K5, K3 | 87% | 86% | 16% | 0% |
| g6 | 15–25bb | Second pair | AQ, QJ–Q9 | 80% | 72% | 0% | 0% |
| g7 | 5–15bb | Second pair | Q8, Q6, Q5 | 75% | 55% | 0% | 0% |
| g8 | 0–5bb | Small pairs | JJ–88, 66, 55, 33, A7, A4, A2, J7, T7, 97, 87, 76, 75, 64, 54, 43 | 60% | 29% | 0% | 0% |
| g9 | 0–5bb | Ace-high | AJ–A8, A6, A5, A3 | 35% | 7% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| KK | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| QQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 44 | twopair | 99% | 100% | 100% | 76% | 50–100bb | g1 |
| 22 | twopair | 98% | 100% | 100% | 58% | 50–100bb | g1 |
| KQ | twopair | 97% | 100% | 100% | 43% | 25–50bb | g2 |
| K7 | twopair | 97% | 100% | 100% | 45% | 25–50bb | g2 |
| K4 | twopair | 97% | 100% | 100% | 40% | 25–50bb | g2 |
| K2 | twopair | 96% | 100% | 98% | 37% | 25–50bb | g2 |
| Q7 | twopair | 95% | 99% | 96% | 28% | 25–50bb | g2 |
| AA | op | 91% | 94% | 77% | 0% | 25–50bb | g3 |
| KT | tpmk | 90% | 90% | 44% | 0% | 15–25bb | g4 |
| AK | tpgk | 92% | 95% | 69% | 0% | 25–50bb | g4 |
| KJ | tpmk | 93% | 94% | 60% | 0% | 25–50bb | g4 |
| K9 | tpmk | 89% | 88% | 29% | 0% | 15–25bb | g5 |
| K8 | tpmk | 87% | 86% | 16% | 0% | 15–25bb | g5 |
| K6 | tpmk | 86% | 85% | 11% | 0% | 15–25bb | g5 |
| K5 | tpmk | 86% | 85% | 7% | 0% | 15–25bb | g5 |
| K3 | tpmk | 86% | 83% | 2% | 0% | 15–25bb | g5 |
| QJ | mp | 81% | 76% | 0% | 0% | 15–25bb | g6 |
| AQ | mp | 81% | 75% | 0% | 0% | 15–25bb | g6 |
| QT | mp | 79% | 71% | 0% | 0% | 15–25bb | g6 |
| Q9 | mp | 77% | 64% | 0% | 0% | 15–25bb | g6 |
| Q8 | mp | 75% | 58% | 0% | 0% | 5–15bb | g7 |
| Q6 | mp | 75% | 55% | 0% | 0% | 5–15bb | g7 |
| Q5 | mp | 74% | 53% | 0% | 0% | 5–15bb | g7 |
| 99 | pp2 | 70% | 48% | 0% | 0% | 0–5bb | g8 |
| 88 | spp | 69% | 43% | 0% | 0% | 0–5bb | g8 |
| JJ | pp2 | 69% | 48% | 0% | 0% | 0–5bb | g8 |
| TT | pp2 | 69% | 48% | 0% | 0% | 0–5bb | g8 |
| T7 | bp | 66% | 36% | 0% | 0% | 0–5bb | g8 |
| J7 | bp | 66% | 35% | 0% | 0% | 0–5bb | g8 |
| 97 | bp | 65% | 35% | 0% | 0% | 0–5bb | g8 |
| A7 | bp | 65% | 35% | 0% | 0% | 0–5bb | g8 |
| 87 | bp | 64% | 33% | 0% | 0% | 0–5bb | g8 |
| 76 | bp | 63% | 30% | 0% | 0% | 0–5bb | g8 |
| 75 | bp | 62% | 30% | 0% | 0% | 0–5bb | g8 |
| 66 | spp | 58% | 26% | 0% | 0% | 0–5bb | g8 |
| 55 | spp | 56% | 23% | 0% | 0% | 0–5bb | g8 |
| 54 | bp | 55% | 19% | 0% | 0% | 0–5bb | g8 |
| 64 | bp | 54% | 19% | 0% | 0% | 0–5bb | g8 |
| A4 | bp | 54% | 19% | 0% | 0% | 0–5bb | g8 |
| 43 | bp | 52% | 18% | 0% | 0% | 0–5bb | g8 |
| 33 | spp | 51% | 14% | 0% | 0% | 0–5bb | g8 |
| A2 | bp | 46% | 11% | 0% | 0% | 0–5bb | g8 |
| AJ | khnd | 43% | 10% | 0% | 0% | 0–5bb | g9 |
| AT | khnd | 39% | 10% | 0% | 0% | 0–5bb | g9 |
| A9 | khnd | 37% | 10% | 0% | 0% | 0–5bb | g9 |
| A8 | khnd | 34% | 8% | 0% | 0% | 0–5bb | g9 |
| A6 | khnd | 31% | 5% | 0% | 0% | 0–5bb | g9 |
| A5 | khnd | 30% | 2% | 0% | 0% | 0–5bb | g9 |
| A3 | khnd | 28% | 0% | 0% | 0% | 0–5bb | g9 |
