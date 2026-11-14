# A72-5c-Kh river (A♣ 7♦ 2♠ 5♣ K♥): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights & sets | AA, KK, 77, 55, 22, 43 | 100% | 100% | 100% | 98% |
| g2 | 50–100bb | Two pair | AK, A7, A5, A2, K5, 75 | 95% | 98% | 98% | 75% |
| g3 | 25–50bb | Two pair | K7, K2 | 88% | 92% | 91% | 47% |
| g4 | 25–50bb | Top pair | AQ–A9 | 78% | 71% | 71% | 38% |
| g5 | 0–5bb | Top pair, weak kicker | A8, A6 | 56% | 30% | 31% | 25% |
| g6 | Pot is too big | Top pair, weak kicker | A4, A3 | 40% | 6% | 6% | 8% |
| g7 | Pot is too big | Second pair | KQ–K8, K6, K4, K3 | 29% | 0% | 0% | 0% |
| g8 | Pot is too big | Small pairs | QQ–88, 66, 44, 33, Q7, Q5, J7, T7, 97, 87, 76, 65, 54 | 20% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| 43 | straight | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AA | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| KK | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 55 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 22 | twopair | 98% | 100% | 100% | 91% | 50–100bb | g1 |
| AK | twopair | 97% | 100% | 100% | 87% | 50–100bb | g2 |
| A7 | twopair | 97% | 100% | 100% | 86% | 50–100bb | g2 |
| A5 | twopair | 97% | 99% | 99% | 83% | 50–100bb | g2 |
| A2 | twopair | 91% | 95% | 95% | 53% | 50–100bb | g2 |
| K5 | twopair | 91% | 91% | 92% | 53% | 50–100bb | g2 |
| 75 | twopair | 90% | 89% | 89% | 52% | 50–100bb | g2 |
| K7 | twopair | 88% | 92% | 92% | 47% | 25–50bb | g3 |
| K2 | twopair | 89% | 91% | 90% | 45% | 25–50bb | g3 |
| AQ | tpgk | 85% | 84% | 84% | 38% | 25–50bb | g4 |
| AJ | tpmk | 83% | 81% | 81% | 41% | 25–50bb | g4 |
| AT | tpmk | 77% | 68% | 68% | 37% | 25–50bb | g4 |
| A9 | tpmk | 68% | 53% | 52% | 36% | 25–50bb | g4 |
| A8 | tpmk | 61% | 37% | 38% | 28% | 0–5bb | g5 |
| A6 | tpwk | 51% | 22% | 23% | 22% | 0–5bb | g5 |
| A4 | tpwk | 42% | 10% | 11% | 14% | Pot is too big | g6 |
| A3 | tpwk | 37% | 2% | 2% | 3% | Pot is too big | g6 |
| K9 | mp | 30% | 0% | 0% | 0% | Pot is too big | g7 |
| KJ | mp | 29% | 0% | 0% | 0% | Pot is too big | g7 |
| KT | mp | 29% | 0% | 0% | 0% | Pot is too big | g7 |
| K6 | mp | 28% | 0% | 0% | 0% | Pot is too big | g7 |
| K8 | mp | 28% | 0% | 0% | 0% | Pot is too big | g7 |
| KQ | mp | 28% | 0% | 0% | 0% | Pot is too big | g7 |
| K3 | mp | 27% | 0% | 0% | 0% | Pot is too big | g7 |
| K4 | mp | 26% | 0% | 0% | 0% | Pot is too big | g7 |
| 88 | pp2 | 29% | 0% | 0% | 0% | Pot is too big | g8 |
| 99 | pp2 | 29% | 0% | 0% | 0% | Pot is too big | g8 |
| TT | pp2 | 28% | 0% | 0% | 0% | Pot is too big | g8 |
| JJ | pp2 | 27% | 0% | 0% | 0% | Pot is too big | g8 |
| QQ | pp2 | 26% | 0% | 0% | 0% | Pot is too big | g8 |
| Q7 | bp | 22% | 0% | 0% | 0% | Pot is too big | g8 |
| J7 | bp | 21% | 0% | 0% | 0% | Pot is too big | g8 |
| T7 | bp | 21% | 0% | 0% | 0% | Pot is too big | g8 |
| 97 | bp | 19% | 0% | 0% | 0% | Pot is too big | g8 |
| 87 | bp | 18% | 0% | 0% | 0% | Pot is too big | g8 |
| 76 | bp | 16% | 0% | 0% | 0% | Pot is too big | g8 |
| 65 | bp | 15% | 0% | 0% | 0% | Pot is too big | g8 |
| 66 | pp3 | 15% | 0% | 0% | 0% | Pot is too big | g8 |
| Q5 | bp | 14% | 0% | 0% | 0% | Pot is too big | g8 |
| 54 | bp | 12% | 0% | 0% | 0% | Pot is too big | g8 |
| 44 | pp3 | 10% | 0% | 0% | 0% | Pot is too big | g8 |
| 33 | pp3 | 4% | 0% | 0% | 0% | Pot is too big | g8 |
