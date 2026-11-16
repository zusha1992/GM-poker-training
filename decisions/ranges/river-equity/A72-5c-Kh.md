# A72-5c-Kh river (A♣ 7♦ 2♠ 5♣ K♥): equity groups

Generated 2026-11-16 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | 43 | 100% | 100% | 100% | 100% |
| g2 | 25–50bb | Sets | AA, KK, 77, 55, 22 | 100% | 100% | 100% | 98% |
| g3 | 15–25bb | Two pair | AK, A7, A5, A2, K7, K5, K2, 75 | 94% | 97% | 97% | 71% |
| g4 | 15–25bb | Top pair, good kicker | AQ, AJ | 84% | 82% | 82% | 40% |
| g5 | 0–5bb | Top pair, weak kicker | AT–A8, A6, A4, A3 | 56% | 32% | 32% | 24% |
| g6 | 0–5bb | Second pair | KQ–K8, K6, K4, K3 | 29% | 0% | 0% | 0% |
| g7 | 0–5bb | Small pairs | QQ–88, 66, 44, 33, Q7, Q5, J7, T7, 97, 87, 76, 65, 54 | 20% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| 43 | straight | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AA | twopair | 100% | 100% | 100% | 100% | 50–100bb | g2 |
| KK | twopair | 100% | 100% | 100% | 100% | 50–100bb | g2 |
| 77 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g2 |
| 55 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g2 |
| 22 | twopair | 98% | 100% | 100% | 90% | 50–100bb | g2 |
| K7 | twopair | 89% | 92% | 91% | 48% | 25–50bb | g3 |
| K2 | twopair | 88% | 90% | 91% | 44% | 25–50bb | g3 |
| A7 | twopair | 97% | 100% | 100% | 88% | 50–100bb | g3 |
| AK | twopair | 97% | 100% | 100% | 87% | 50–100bb | g3 |
| A5 | twopair | 97% | 99% | 99% | 83% | 50–100bb | g3 |
| K5 | twopair | 91% | 91% | 91% | 54% | 50–100bb | g3 |
| A2 | twopair | 91% | 95% | 95% | 53% | 50–100bb | g3 |
| 75 | twopair | 90% | 89% | 90% | 53% | 50–100bb | g3 |
| AQ | tpgk | 85% | 83% | 84% | 40% | 25–50bb | g4 |
| AJ | tpmk | 83% | 81% | 80% | 39% | 25–50bb | g4 |
| AT | tpmk | 77% | 68% | 68% | 38% | 25–50bb | g5 |
| A8 | tpmk | 59% | 36% | 37% | 27% | 0–5bb | g5 |
| A6 | tpwk | 52% | 22% | 22% | 24% | 0–5bb | g5 |
| A9 | tpmk | 69% | 52% | 51% | 35% | 25–50bb | g5 |
| A4 | tpwk | 42% | 11% | 10% | 14% | 0–5bb | g5 |
| A3 | tpwk | 39% | 2% | 2% | 3% | 0–5bb | g5 |
| KT | mp | 30% | 0% | 0% | 0% | 0–5bb | g6 |
| KJ | mp | 30% | 0% | 0% | 0% | 0–5bb | g6 |
| K9 | mp | 29% | 0% | 0% | 0% | 0–5bb | g6 |
| KQ | mp | 29% | 0% | 0% | 0% | 0–5bb | g6 |
| K6 | mp | 28% | 0% | 0% | 0% | 0–5bb | g6 |
| K8 | mp | 28% | 0% | 0% | 0% | 0–5bb | g6 |
| K4 | mp | 28% | 0% | 0% | 0% | 0–5bb | g6 |
| K3 | mp | 27% | 0% | 0% | 0% | 0–5bb | g6 |
| TT | pp2 | 30% | 0% | 0% | 0% | 0–5bb | g7 |
| 88 | pp2 | 28% | 0% | 0% | 0% | 0–5bb | g7 |
| 99 | pp2 | 28% | 0% | 0% | 0% | 0–5bb | g7 |
| JJ | pp2 | 27% | 0% | 0% | 0% | 0–5bb | g7 |
| QQ | pp2 | 26% | 0% | 0% | 0% | 0–5bb | g7 |
| Q7 | bp | 22% | 0% | 0% | 0% | 0–5bb | g7 |
| J7 | bp | 21% | 0% | 0% | 0% | 0–5bb | g7 |
| T7 | bp | 20% | 0% | 0% | 0% | 0–5bb | g7 |
| 97 | bp | 19% | 0% | 0% | 0% | 0–5bb | g7 |
| 87 | bp | 17% | 0% | 0% | 0% | 0–5bb | g7 |
| 76 | bp | 16% | 0% | 0% | 0% | 0–5bb | g7 |
| 65 | bp | 15% | 0% | 0% | 0% | 0–5bb | g7 |
| 66 | pp3 | 15% | 0% | 0% | 0% | 0–5bb | g7 |
| Q5 | bp | 14% | 0% | 0% | 0% | 0–5bb | g7 |
| 54 | bp | 12% | 0% | 0% | 0% | 0–5bb | g7 |
| 44 | pp3 | 10% | 0% | 0% | 0% | 0–5bb | g7 |
| 33 | pp3 | 4% | 0% | 0% | 0% | 0–5bb | g7 |
