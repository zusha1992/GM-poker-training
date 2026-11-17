# A72-5c-Kh@xx river (A♣ 7♦ 2♠ 5♣ K♥): equity groups

Generated 2026-11-17 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | 43 | 100% | 100% | 100% | 92% |
| g2 | 25–50bb | Sets | AA, KK, 77, 55, 22 | 99% | 100% | 100% | 62% |
| g3 | 15–25bb | Two pair | AK, A7, A5, A2, K7, K5, K2, 75 | 96% | 98% | 96% | 9% |
| g4 | 15–25bb | Top pair | AQ–A8, A6 | 87% | 77% | 50% | 0% |
| g5 | 5–15bb | Top pair, weak kicker | A4, A3 | 80% | 55% | 4% | 0% |
| g6 | 0–5bb | Second pair | KQ–K8, K6, K4, K3 | 69% | 34% | 0% | 0% |
| g7 | 0–5bb | Small pairs | QQ–88, 66, 44, 33, Q7, Q5, J7, T7, 97, 87, 76, 65, 54 | 54% | 17% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| 43 | straight | 100% | 100% | 100% | 92% | 50–100bb | g1 |
| 22 | twopair | 97% | 100% | 100% | 41% | 25–50bb | g2 |
| KK | twopair | 99% | 100% | 100% | 79% | 50–100bb | g2 |
| AA | twopair | 99% | 100% | 100% | 72% | 50–100bb | g2 |
| 77 | twopair | 99% | 100% | 100% | 66% | 50–100bb | g2 |
| 55 | twopair | 98% | 100% | 100% | 52% | 50–100bb | g2 |
| AK | twopair | 97% | 100% | 100% | 29% | 25–50bb | g3 |
| A7 | twopair | 97% | 100% | 100% | 16% | 25–50bb | g3 |
| A5 | twopair | 96% | 99% | 99% | 2% | 25–50bb | g3 |
| A2 | twopair | 95% | 98% | 94% | 0% | 25–50bb | g3 |
| K7 | twopair | 94% | 95% | 92% | 0% | 25–50bb | g3 |
| K5 | twopair | 93% | 95% | 91% | 0% | 25–50bb | g3 |
| K2 | twopair | 92% | 93% | 88% | 0% | 25–50bb | g3 |
| 75 | twopair | 93% | 92% | 86% | 0% | 25–50bb | g3 |
| A9 | tpmk | 86% | 76% | 47% | 0% | 15–25bb | g4 |
| AQ | tpgk | 91% | 89% | 75% | 0% | 25–50bb | g4 |
| AJ | tpmk | 91% | 86% | 71% | 0% | 25–50bb | g4 |
| A8 | tpmk | 84% | 68% | 31% | 0% | 15–25bb | g4 |
| A6 | tpwk | 82% | 62% | 18% | 0% | 15–25bb | g4 |
| AT | tpmk | 89% | 82% | 61% | 0% | 25–50bb | g4 |
| A4 | tpwk | 80% | 57% | 7% | 0% | 5–15bb | g5 |
| A3 | tpwk | 79% | 53% | 2% | 0% | 5–15bb | g5 |
| KQ | mp | 72% | 39% | 0% | 0% | 0–5bb | g6 |
| KJ | mp | 71% | 37% | 0% | 0% | 0–5bb | g6 |
| KT | mp | 69% | 35% | 0% | 0% | 0–5bb | g6 |
| K9 | mp | 67% | 33% | 0% | 0% | 0–5bb | g6 |
| K8 | mp | 67% | 30% | 0% | 0% | 0–5bb | g6 |
| K4 | mp | 64% | 25% | 0% | 0% | 0–5bb | g6 |
| K6 | mp | 64% | 28% | 0% | 0% | 0–5bb | g6 |
| K3 | mp | 64% | 25% | 0% | 0% | 0–5bb | g6 |
| 88 | pp2 | 60% | 23% | 0% | 0% | 0–5bb | g7 |
| JJ | pp2 | 59% | 23% | 0% | 0% | 0–5bb | g7 |
| TT | pp2 | 59% | 23% | 0% | 0% | 0–5bb | g7 |
| 99 | pp2 | 59% | 24% | 0% | 0% | 0–5bb | g7 |
| 97 | bp | 58% | 19% | 0% | 0% | 0–5bb | g7 |
| QQ | pp2 | 57% | 22% | 0% | 0% | 0–5bb | g7 |
| 87 | bp | 57% | 19% | 0% | 0% | 0–5bb | g7 |
| J7 | bp | 57% | 20% | 0% | 0% | 0–5bb | g7 |
| T7 | bp | 56% | 19% | 0% | 0% | 0–5bb | g7 |
| Q7 | bp | 56% | 20% | 0% | 0% | 0–5bb | g7 |
| 76 | bp | 55% | 15% | 0% | 0% | 0–5bb | g7 |
| 66 | pp3 | 51% | 13% | 0% | 0% | 0–5bb | g7 |
| Q5 | bp | 48% | 12% | 0% | 0% | 0–5bb | g7 |
| 65 | bp | 48% | 10% | 0% | 0% | 0–5bb | g7 |
| 54 | bp | 46% | 8% | 0% | 0% | 0–5bb | g7 |
| 44 | pp3 | 43% | 5% | 0% | 0% | 0–5bb | g7 |
| 33 | pp3 | 41% | 3% | 0% | 0% | 0–5bb | g7 |
