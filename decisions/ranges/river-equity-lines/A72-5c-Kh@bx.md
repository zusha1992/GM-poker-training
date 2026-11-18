# A72-5c-Kh@bx river (A♣ 7♦ 2♠ 5♣ K♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | 43 | 100% | 100% | 100% | 100% |
| g2 | 25–50bb | Sets | AA, KK, 77, 55, 22 | 99% | 100% | 100% | 93% |
| g3 | 15–25bb | Two pair | AK, A7, A5, A2, K7, K5, K2, 75 | 95% | 98% | 97% | 54% |
| g4 | 15–25bb | Top pair | AQ–A8 | 82% | 78% | 66% | 22% |
| g5 | 0–5bb | Top pair, weak kicker | A6, A4, A3 | 66% | 44% | 14% | 15% |
| g6 | 0–5bb | Second pair | KQ–K8, K6, K4, K3 | 50% | 23% | 0% | 2% |
| g7 | 0–5bb | Small pairs | QQ–88, 66, 44, 33, Q7, Q5, J7, T7, 97, 87, 76, 65, 54 | 33% | 15% | 0% | 1% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| 43 | straight | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AA | twopair | 100% | 100% | 100% | 100% | 50–100bb | g2 |
| KK | twopair | 100% | 100% | 100% | 100% | 50–100bb | g2 |
| 77 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g2 |
| 55 | twopair | 100% | 100% | 100% | 96% | 50–100bb | g2 |
| 22 | twopair | 97% | 100% | 100% | 69% | 50–100bb | g2 |
| A2 | twopair | 93% | 98% | 96% | 41% | 25–50bb | g3 |
| K7 | twopair | 90% | 95% | 94% | 36% | 25–50bb | g3 |
| K5 | twopair | 93% | 95% | 93% | 42% | 25–50bb | g3 |
| K2 | twopair | 90% | 95% | 92% | 30% | 25–50bb | g3 |
| 75 | twopair | 91% | 92% | 89% | 38% | 25–50bb | g3 |
| A5 | twopair | 97% | 99% | 99% | 71% | 50–100bb | g3 |
| A7 | twopair | 96% | 100% | 100% | 63% | 50–100bb | g3 |
| AK | twopair | 96% | 100% | 100% | 63% | 50–100bb | g3 |
| AQ | tpgk | 88% | 90% | 85% | 23% | 25–50bb | g4 |
| AJ | tpmk | 86% | 87% | 79% | 22% | 25–50bb | g4 |
| AT | tpmk | 83% | 80% | 69% | 23% | 25–50bb | g4 |
| A8 | tpmk | 74% | 62% | 41% | 21% | 15–25bb | g4 |
| A9 | tpmk | 79% | 71% | 58% | 23% | 25–50bb | g4 |
| A4 | tpwk | 67% | 43% | 13% | 17% | 0–5bb | g5 |
| A3 | tpwk | 62% | 37% | 3% | 6% | 0–5bb | g5 |
| A6 | tpwk | 70% | 51% | 26% | 23% | 5–15bb | g5 |
| KQ | mp | 53% | 25% | 0% | 2% | 0–5bb | g6 |
| KT | mp | 50% | 24% | 0% | 2% | 0–5bb | g6 |
| KJ | mp | 50% | 24% | 0% | 2% | 0–5bb | g6 |
| K8 | mp | 49% | 21% | 0% | 2% | 0–5bb | g6 |
| K9 | mp | 49% | 23% | 0% | 2% | 0–5bb | g6 |
| K3 | mp | 48% | 20% | 0% | 2% | 0–5bb | g6 |
| K4 | mp | 48% | 21% | 0% | 1% | 0–5bb | g6 |
| K6 | mp | 47% | 22% | 0% | 2% | 0–5bb | g6 |
| JJ | pp2 | 47% | 21% | 0% | 1% | 0–5bb | g7 |
| 99 | pp2 | 47% | 22% | 0% | 2% | 0–5bb | g7 |
| TT | pp2 | 47% | 21% | 0% | 2% | 0–5bb | g7 |
| QQ | pp2 | 45% | 21% | 0% | 2% | 0–5bb | g7 |
| 88 | pp2 | 43% | 21% | 0% | 2% | 0–5bb | g7 |
| Q7 | bp | 37% | 17% | 0% | 1% | 0–5bb | g7 |
| J7 | bp | 36% | 18% | 0% | 1% | 0–5bb | g7 |
| T7 | bp | 35% | 18% | 0% | 1% | 0–5bb | g7 |
| 97 | bp | 33% | 16% | 0% | 1% | 0–5bb | g7 |
| 87 | bp | 32% | 15% | 0% | 1% | 0–5bb | g7 |
| 76 | bp | 27% | 13% | 0% | 1% | 0–5bb | g7 |
| 65 | bp | 22% | 9% | 0% | 0% | 0–5bb | g7 |
| 66 | pp3 | 22% | 10% | 0% | 0% | 0–5bb | g7 |
| Q5 | bp | 20% | 9% | 0% | 0% | 0–5bb | g7 |
| 54 | bp | 18% | 7% | 0% | 0% | 0–5bb | g7 |
| 44 | pp3 | 16% | 5% | 0% | 0% | 0–5bb | g7 |
| 33 | pp3 | 9% | 1% | 0% | 0% | 0–5bb | g7 |
