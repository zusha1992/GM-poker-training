# KQT-7c-2h@xx river (K♦ Q♣ T♥ 7♣ 2♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 25–50bb | Straights | AJ, J9 | 99% | 100% | 100% | 58% |
| g2 | 25–50bb | Sets | KK, QQ, TT, 77, 22 | 94% | 100% | 100% | 0% |
| g3 | 15–25bb | Overpair | AA | 84% | 76% | 46% | 1% |
| g4 | 15–25bb | Two pair | KQ, KT, K7, K2, QT, Q7, T7 | 90% | 89% | 74% | 0% |
| g5 | 15–25bb | Top pair | AK, KJ, K9, K8, K6–K3 | 83% | 72% | 26% | 1% |
| g6 | 0–5bb | Second pair | AQ, QJ, Q9, Q8, Q6, Q5 | 74% | 46% | 0% | 0% |
| g7 | 0–5bb | Small pairs | JJ, 99, 88, 66–33, AT, A7, A2, JT, J7, T9, T8, 97, 87, 76, 75 | 51% | 8% | 0% | 0% |
| g8 | Pot is too big | Ace-high | A9, A8, A6–A3 | 24% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| J9 | straight | 97% | 100% | 100% | 22% | 25–50bb | g1 |
| AJ | straight | 99% | 100% | 100% | 80% | 50–100bb | g1 |
| KK | twopair | 93% | 100% | 100% | 1% | 25–50bb | g2 |
| QQ | twopair | 94% | 100% | 100% | 0% | 25–50bb | g2 |
| TT | twopair | 94% | 100% | 100% | 0% | 25–50bb | g2 |
| 77 | twopair | 94% | 100% | 100% | 0% | 25–50bb | g2 |
| 22 | twopair | 93% | 99% | 97% | 0% | 25–50bb | g2 |
| AA | op | 84% | 76% | 46% | 1% | 15–25bb | g3 |
| KQ | twopair | 92% | 95% | 87% | 0% | 25–50bb | g4 |
| KT | twopair | 91% | 92% | 79% | 0% | 25–50bb | g4 |
| K7 | twopair | 91% | 91% | 75% | 0% | 25–50bb | g4 |
| K2 | twopair | 91% | 90% | 74% | 1% | 25–50bb | g4 |
| QT | twopair | 89% | 83% | 65% | 0% | 25–50bb | g4 |
| Q7 | twopair | 87% | 81% | 58% | 0% | 25–50bb | g4 |
| T7 | twopair | 86% | 78% | 52% | 0% | 25–50bb | g4 |
| AK | tpgk | 86% | 78% | 40% | 0% | 15–25bb | g5 |
| KJ | tpmk | 86% | 76% | 36% | 1% | 15–25bb | g5 |
| K9 | tpmk | 83% | 73% | 28% | 1% | 15–25bb | g5 |
| K8 | tpmk | 81% | 69% | 19% | 1% | 15–25bb | g5 |
| K6 | tpmk | 79% | 67% | 16% | 1% | 15–25bb | g5 |
| K5 | tpmk | 80% | 66% | 12% | 1% | 15–25bb | g5 |
| K4 | tpmk | 80% | 63% | 7% | 0% | 15–25bb | g5 |
| K3 | tpmk | 79% | 62% | 2% | 0% | 15–25bb | g5 |
| QJ | mp | 77% | 50% | 0% | 0% | 0–5bb | g6 |
| Q9 | mp | 74% | 43% | 0% | 0% | 0–5bb | g6 |
| Q6 | mp | 71% | 37% | 0% | 0% | 0–5bb | g6 |
| Q8 | mp | 71% | 39% | 0% | 0% | 0–5bb | g6 |
| Q5 | mp | 70% | 35% | 0% | 0% | 0–5bb | g6 |
| AQ | mp | 75% | 52% | 0% | 0% | 5–15bb | g6 |
| JJ | pp2 | 68% | 25% | 0% | 0% | 0–5bb | g7 |
| AT | bp | 63% | 21% | 0% | 0% | 0–5bb | g7 |
| JT | bp | 63% | 18% | 0% | 0% | 0–5bb | g7 |
| T9 | bp | 61% | 13% | 0% | 0% | 0–5bb | g7 |
| T8 | bp | 59% | 9% | 0% | 0% | 0–5bb | g7 |
| 99 | pp3 | 55% | 6% | 0% | 0% | 0–5bb | g7 |
| 88 | spp | 53% | 6% | 0% | 0% | 0–5bb | g7 |
| J7 | bp | 52% | 4% | 0% | 0% | 0–5bb | g7 |
| A7 | bp | 51% | 5% | 0% | 0% | 0–5bb | g7 |
| 97 | bp | 50% | 4% | 0% | 0% | 0–5bb | g7 |
| 87 | bp | 48% | 2% | 0% | 0% | 0–5bb | g7 |
| 76 | bp | 48% | 2% | 0% | 0% | 0–5bb | g7 |
| 75 | bp | 46% | 2% | 0% | 0% | 0–5bb | g7 |
| 66 | spp | 42% | 1% | 0% | 0% | 0–5bb | g7 |
| 55 | spp | 41% | 1% | 0% | 0% | 0–5bb | g7 |
| 44 | spp | 40% | 1% | 0% | 0% | 0–5bb | g7 |
| 33 | spp | 37% | 1% | 0% | 0% | 0–5bb | g7 |
| A2 | bp | 35% | 1% | 0% | 0% | 0–5bb | g7 |
| A9 | khnd | 31% | 0% | 0% | 0% | Pot is too big | g8 |
| A8 | khnd | 27% | 0% | 0% | 0% | Pot is too big | g8 |
| A3 | khnd | 22% | 0% | 0% | 0% | Pot is too big | g8 |
| A5 | khnd | 21% | 0% | 0% | 0% | Pot is too big | g8 |
| A4 | khnd | 21% | 0% | 0% | 0% | Pot is too big | g8 |
| A6 | khnd | 20% | 0% | 0% | 0% | Pot is too big | g8 |
