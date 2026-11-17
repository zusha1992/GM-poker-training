# A72-6d-Ks@xx river (A♣ 7♦ 2♠ 6♦ K♠): equity groups

Generated 2026-11-17 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | AA, KK, 77, 66, 22 | 100% | 100% | 100% | 88% |
| g2 | 25–50bb | Two pair | AK, A7, A6, A2, K7, K6, K2, 76 | 96% | 98% | 96% | 23% |
| g3 | 25–50bb | Top pair, good kicker | AQ, AJ | 92% | 87% | 73% | 9% |
| g4 | 15–25bb | Top pair, weak kicker | AT–A8, A5 | 86% | 72% | 40% | 9% |
| g5 | 5–15bb | Top pair, weak kicker | A4, A3 | 80% | 56% | 5% | 9% |
| g6 | 0–5bb | Second pair | KQ–K8, K5–K3 | 70% | 33% | 0% | 3% |
| g7 | 0–5bb | Small pairs | QQ–88, 55–33, Q7, Q6, J7, T7, 97, 96, 87, 86, 75, 65, 64 | 55% | 15% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AA | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KK | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 66 | twopair | 99% | 100% | 100% | 80% | 50–100bb | g1 |
| 22 | twopair | 98% | 100% | 100% | 60% | 50–100bb | g1 |
| AK | twopair | 97% | 100% | 100% | 42% | 25–50bb | g2 |
| A7 | twopair | 97% | 100% | 100% | 36% | 25–50bb | g2 |
| A6 | twopair | 96% | 99% | 99% | 21% | 25–50bb | g2 |
| A2 | twopair | 95% | 98% | 96% | 17% | 25–50bb | g2 |
| K7 | twopair | 94% | 96% | 94% | 11% | 25–50bb | g2 |
| K6 | twopair | 94% | 95% | 93% | 8% | 25–50bb | g2 |
| K2 | twopair | 93% | 94% | 90% | 7% | 25–50bb | g2 |
| 76 | twopair | 94% | 92% | 86% | 12% | 25–50bb | g2 |
| AQ | tpgk | 92% | 88% | 75% | 9% | 25–50bb | g3 |
| AJ | tpmk | 91% | 86% | 71% | 9% | 25–50bb | g3 |
| A9 | tpmk | 86% | 75% | 49% | 8% | 15–25bb | g4 |
| A8 | tpmk | 85% | 68% | 31% | 8% | 15–25bb | g4 |
| A5 | tpwk | 83% | 62% | 18% | 9% | 15–25bb | g4 |
| AT | tpmk | 90% | 82% | 61% | 9% | 25–50bb | g4 |
| A4 | tpwk | 81% | 57% | 7% | 8% | 5–15bb | g5 |
| A3 | tpwk | 80% | 55% | 2% | 9% | 5–15bb | g5 |
| KQ | mp | 73% | 39% | 0% | 5% | 0–5bb | g6 |
| KJ | mp | 72% | 36% | 0% | 4% | 0–5bb | g6 |
| KT | mp | 71% | 35% | 0% | 5% | 0–5bb | g6 |
| K9 | mp | 68% | 31% | 0% | 3% | 0–5bb | g6 |
| K8 | mp | 67% | 27% | 0% | 2% | 0–5bb | g6 |
| K5 | mp | 66% | 25% | 0% | 1% | 0–5bb | g6 |
| K4 | mp | 66% | 24% | 0% | 1% | 0–5bb | g6 |
| K3 | mp | 65% | 22% | 0% | 0% | 0–5bb | g6 |
| 88 | pp2 | 62% | 21% | 0% | 0% | 0–5bb | g7 |
| 99 | pp2 | 62% | 21% | 0% | 0% | 0–5bb | g7 |
| TT | pp2 | 61% | 21% | 0% | 0% | 0–5bb | g7 |
| JJ | pp2 | 60% | 21% | 0% | 0% | 0–5bb | g7 |
| T7 | bp | 59% | 18% | 0% | 0% | 0–5bb | g7 |
| Q7 | bp | 59% | 17% | 0% | 0% | 0–5bb | g7 |
| 87 | bp | 59% | 16% | 0% | 0% | 0–5bb | g7 |
| 97 | bp | 59% | 17% | 0% | 0% | 0–5bb | g7 |
| J7 | bp | 59% | 18% | 0% | 0% | 0–5bb | g7 |
| QQ | pp2 | 58% | 20% | 0% | 0% | 0–5bb | g7 |
| 75 | bp | 56% | 15% | 0% | 0% | 0–5bb | g7 |
| Q6 | bp | 53% | 12% | 0% | 0% | 0–5bb | g7 |
| 86 | bp | 53% | 11% | 0% | 0% | 0–5bb | g7 |
| 96 | bp | 52% | 11% | 0% | 0% | 0–5bb | g7 |
| 64 | bp | 51% | 9% | 0% | 0% | 0–5bb | g7 |
| 65 | bp | 51% | 9% | 0% | 0% | 0–5bb | g7 |
| 55 | pp3 | 47% | 6% | 0% | 0% | 0–5bb | g7 |
| 44 | pp3 | 46% | 5% | 0% | 0% | 0–5bb | g7 |
| 33 | pp3 | 42% | 3% | 0% | 0% | 0–5bb | g7 |
