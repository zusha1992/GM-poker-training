# A72-6d-Ks@bx river (A♣ 7♦ 2♠ 6♦ K♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets & two pair | AA, KK, 77, 66, 22, AK, A7, A6 | 98% | 100% | 100% | 75% |
| g2 | 25–50bb | Two pair | A2, K7, K6, K2, 76 | 92% | 96% | 95% | 29% |
| g3 | 25–50bb | Top pair | AQ–A9 | 83% | 78% | 69% | 13% |
| g4 | 0–5bb | Top pair, weak kicker | A8, A5–A3 | 67% | 42% | 20% | 6% |
| g5 | 0–5bb | Second pair | KQ–K8, K5–K3 | 48% | 18% | 0% | 0% |
| g6 | 0–5bb | Small pairs | QQ–88, 55–33, Q7, Q6, J7, T7, 97, 96, 87, 86, 75, 65, 64 | 32% | 12% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AA | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KK | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 66 | twopair | 100% | 100% | 100% | 96% | 50–100bb | g1 |
| 22 | twopair | 97% | 100% | 100% | 69% | 50–100bb | g1 |
| A6 | twopair | 97% | 100% | 99% | 69% | 50–100bb | g1 |
| A7 | twopair | 96% | 100% | 100% | 64% | 50–100bb | g1 |
| AK | twopair | 96% | 100% | 100% | 62% | 50–100bb | g1 |
| A2 | twopair | 92% | 98% | 97% | 36% | 25–50bb | g2 |
| K7 | twopair | 92% | 96% | 95% | 25% | 25–50bb | g2 |
| K6 | twopair | 94% | 96% | 95% | 28% | 25–50bb | g2 |
| K2 | twopair | 90% | 95% | 93% | 21% | 25–50bb | g2 |
| 76 | twopair | 91% | 90% | 88% | 25% | 25–50bb | g2 |
| AQ | tpgk | 86% | 86% | 80% | 13% | 25–50bb | g3 |
| AJ | tpmk | 84% | 83% | 76% | 13% | 25–50bb | g3 |
| AT | tpmk | 83% | 76% | 65% | 13% | 25–50bb | g3 |
| A9 | tpmk | 77% | 67% | 54% | 13% | 25–50bb | g3 |
| A5 | tpwk | 68% | 45% | 24% | 8% | 0–5bb | g4 |
| A4 | tpwk | 64% | 35% | 12% | 4% | 0–5bb | g4 |
| A3 | tpwk | 61% | 29% | 2% | 1% | 0–5bb | g4 |
| A8 | tpmk | 74% | 57% | 40% | 12% | 5–15bb | g4 |
| KQ | mp | 50% | 19% | 0% | 0% | 0–5bb | g5 |
| KJ | mp | 49% | 18% | 0% | 0% | 0–5bb | g5 |
| KT | mp | 47% | 19% | 0% | 0% | 0–5bb | g5 |
| K9 | mp | 47% | 16% | 0% | 0% | 0–5bb | g5 |
| K8 | mp | 47% | 17% | 0% | 0% | 0–5bb | g5 |
| K4 | mp | 46% | 15% | 0% | 0% | 0–5bb | g5 |
| K5 | mp | 45% | 16% | 0% | 0% | 0–5bb | g5 |
| K3 | mp | 44% | 15% | 0% | 0% | 0–5bb | g5 |
| TT | pp2 | 46% | 18% | 0% | 0% | 0–5bb | g6 |
| 99 | pp2 | 45% | 16% | 0% | 0% | 0–5bb | g6 |
| JJ | pp2 | 45% | 17% | 0% | 0% | 0–5bb | g6 |
| QQ | pp2 | 42% | 17% | 0% | 0% | 0–5bb | g6 |
| 88 | pp2 | 40% | 16% | 0% | 0% | 0–5bb | g6 |
| Q7 | bp | 36% | 15% | 0% | 0% | 0–5bb | g6 |
| J7 | bp | 35% | 14% | 0% | 0% | 0–5bb | g6 |
| T7 | bp | 33% | 14% | 0% | 0% | 0–5bb | g6 |
| 97 | bp | 33% | 13% | 0% | 0% | 0–5bb | g6 |
| 87 | bp | 30% | 12% | 0% | 0% | 0–5bb | g6 |
| 96 | bp | 27% | 11% | 0% | 0% | 0–5bb | g6 |
| Q6 | bp | 27% | 10% | 0% | 0% | 0–5bb | g6 |
| 86 | bp | 27% | 11% | 0% | 0% | 0–5bb | g6 |
| 75 | bp | 26% | 10% | 0% | 0% | 0–5bb | g6 |
| 65 | bp | 25% | 9% | 0% | 0% | 0–5bb | g6 |
| 64 | bp | 24% | 9% | 0% | 0% | 0–5bb | g6 |
| 55 | pp3 | 22% | 7% | 0% | 0% | 0–5bb | g6 |
| 44 | pp3 | 15% | 4% | 0% | 0% | 0–5bb | g6 |
| 33 | pp3 | 9% | 1% | 0% | 0% | 0–5bb | g6 |
