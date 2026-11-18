# A76-Ks-2d@xx river (A♥ 7♥ 6♣ K♠ 2♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | AA, KK, 77, 66, 22 | 100% | 100% | 100% | 88% |
| g2 | 50–100bb | Two pair | AK, A7 | 97% | 100% | 100% | 54% |
| g3 | 25–50bb | Two pair | A6, A2, K7, K6, K2, 76 | 95% | 98% | 95% | 32% |
| g4 | 25–50bb | Top pair, good kicker | AQ–AT | 91% | 87% | 71% | 23% |
| g5 | 15–25bb | Top pair, weak kicker | A9, A8, A5 | 85% | 70% | 33% | 22% |
| g6 | 5–15bb | Top pair, weak kicker | A4, A3 | 81% | 57% | 4% | 20% |
| g7 | 0–5bb | Second pair | KQ–K8, K5–K3 | 70% | 35% | 0% | 8% |
| g8 | 0–5bb | Small pairs | QQ–88, 55–33, Q7, Q6, J7, T7, 97, 96, 87, 86, 75, 65, 64 | 55% | 16% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AA | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KK | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 66 | twopair | 99% | 100% | 100% | 75% | 50–100bb | g1 |
| 22 | twopair | 98% | 100% | 100% | 64% | 50–100bb | g1 |
| A7 | twopair | 97% | 100% | 100% | 55% | 50–100bb | g2 |
| AK | twopair | 97% | 100% | 100% | 54% | 50–100bb | g2 |
| A6 | twopair | 96% | 100% | 99% | 40% | 25–50bb | g3 |
| A2 | twopair | 95% | 99% | 97% | 33% | 25–50bb | g3 |
| K7 | twopair | 94% | 96% | 93% | 29% | 25–50bb | g3 |
| K6 | twopair | 94% | 96% | 93% | 22% | 25–50bb | g3 |
| K2 | twopair | 93% | 95% | 90% | 18% | 25–50bb | g3 |
| 76 | twopair | 94% | 93% | 87% | 33% | 25–50bb | g3 |
| AQ | tpgk | 91% | 89% | 77% | 21% | 25–50bb | g4 |
| AJ | tpmk | 91% | 87% | 72% | 23% | 25–50bb | g4 |
| AT | tpmk | 89% | 83% | 62% | 24% | 25–50bb | g4 |
| A9 | tpmk | 88% | 76% | 49% | 22% | 15–25bb | g5 |
| A8 | tpmk | 86% | 71% | 33% | 22% | 15–25bb | g5 |
| A5 | tpmk | 83% | 63% | 19% | 21% | 15–25bb | g5 |
| A4 | tpmk | 82% | 59% | 7% | 19% | 5–15bb | g6 |
| A3 | tpmk | 80% | 55% | 1% | 20% | 5–15bb | g6 |
| KQ | mp | 73% | 39% | 0% | 12% | 0–5bb | g7 |
| KJ | mp | 73% | 39% | 0% | 9% | 0–5bb | g7 |
| KT | mp | 71% | 36% | 0% | 9% | 0–5bb | g7 |
| K9 | mp | 69% | 33% | 0% | 8% | 0–5bb | g7 |
| K8 | mp | 68% | 30% | 0% | 6% | 0–5bb | g7 |
| K5 | mp | 67% | 27% | 0% | 4% | 0–5bb | g7 |
| K3 | mp | 66% | 24% | 0% | 1% | 0–5bb | g7 |
| K4 | mp | 65% | 25% | 0% | 2% | 0–5bb | g7 |
| 88 | pp2 | 62% | 22% | 0% | 0% | 0–5bb | g8 |
| 99 | pp2 | 62% | 22% | 0% | 0% | 0–5bb | g8 |
| TT | pp2 | 61% | 23% | 0% | 0% | 0–5bb | g8 |
| JJ | pp2 | 61% | 21% | 0% | 0% | 0–5bb | g8 |
| QQ | pp2 | 60% | 21% | 0% | 0% | 0–5bb | g8 |
| 87 | bp | 59% | 18% | 0% | 0% | 0–5bb | g8 |
| J7 | bp | 59% | 19% | 0% | 0% | 0–5bb | g8 |
| 97 | bp | 59% | 19% | 0% | 0% | 0–5bb | g8 |
| T7 | bp | 59% | 19% | 0% | 0% | 0–5bb | g8 |
| Q7 | bp | 59% | 19% | 0% | 0% | 0–5bb | g8 |
| 75 | bp | 57% | 16% | 0% | 0% | 0–5bb | g8 |
| 86 | bp | 53% | 12% | 0% | 0% | 0–5bb | g8 |
| 96 | bp | 52% | 13% | 0% | 0% | 0–5bb | g8 |
| 65 | bp | 52% | 10% | 0% | 0% | 0–5bb | g8 |
| Q6 | bp | 52% | 13% | 0% | 0% | 0–5bb | g8 |
| 64 | bp | 50% | 10% | 0% | 0% | 0–5bb | g8 |
| 55 | pp3 | 46% | 7% | 0% | 0% | 0–5bb | g8 |
| 44 | pp3 | 45% | 5% | 0% | 0% | 0–5bb | g8 |
| 33 | pp3 | 43% | 4% | 0% | 0% | 0–5bb | g8 |
