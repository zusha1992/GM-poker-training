# KQT-3s-4d@bx river (K♦ Q♣ T♥ 3♠ 4♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | AJ, J9 | 100% | 100% | 100% | 92% |
| g2 | 25–50bb | Sets | KK, QQ, TT, 44, 33 | 97% | 100% | 100% | 60% |
| g3 | 15–25bb | Overpair | AA | 82% | 81% | 66% | 47% |
| g4 | 15–25bb | Two pair | KQ, KT, K4, K3, QT, 43 | 93% | 95% | 92% | 55% |
| g5 | 15–25bb | Top pair | AK, KJ, K9–K7 | 81% | 73% | 45% | 40% |
| g6 | 5–15bb | Top pair, weak kicker | K6, K5, K2 | 75% | 57% | 12% | 35% |
| g7 | 0–5bb | Second pair | AQ, QJ, Q9–Q5 | 60% | 34% | 0% | 16% |
| g8 | 0–5bb | Small pairs | JJ, 99–55, 22, AT, A4, A3, JT, T9–T7, 64, 54 | 24% | 5% | 0% | 6% |
| g9 | Pot is too big | Ace-high | A9–A5, A2 | 5% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AJ | straight | 100% | 100% | 100% | 98% | 50–100bb | g1 |
| J9 | straight | 99% | 100% | 100% | 83% | 50–100bb | g1 |
| 33 | twopair | 97% | 100% | 100% | 63% | 50–100bb | g2 |
| 44 | twopair | 97% | 100% | 100% | 63% | 50–100bb | g2 |
| TT | twopair | 96% | 100% | 100% | 62% | 50–100bb | g2 |
| KK | twopair | 96% | 100% | 100% | 57% | 50–100bb | g2 |
| QQ | twopair | 97% | 100% | 100% | 52% | 50–100bb | g2 |
| AA | op | 82% | 81% | 66% | 47% | 25–50bb | g3 |
| KT | twopair | 95% | 99% | 97% | 57% | 50–100bb | g4 |
| K4 | twopair | 93% | 96% | 91% | 57% | 50–100bb | g4 |
| K3 | twopair | 93% | 93% | 86% | 56% | 50–100bb | g4 |
| KQ | twopair | 96% | 100% | 100% | 54% | 50–100bb | g4 |
| QT | twopair | 88% | 89% | 82% | 52% | 50–100bb | g4 |
| 43 | twopair | 86% | 84% | 71% | 50% | 50–100bb | g4 |
| K9 | tpmk | 82% | 72% | 42% | 37% | 15–25bb | g5 |
| K8 | tpmk | 77% | 66% | 29% | 35% | 15–25bb | g5 |
| K7 | tpmk | 76% | 61% | 22% | 37% | 15–25bb | g5 |
| AK | tpgk | 84% | 81% | 60% | 46% | 25–50bb | g5 |
| KJ | tpmk | 84% | 77% | 56% | 41% | 25–50bb | g5 |
| K6 | tpmk | 75% | 59% | 15% | 34% | 5–15bb | g6 |
| K5 | tpmk | 75% | 55% | 11% | 36% | 5–15bb | g6 |
| K2 | tpmk | 73% | 52% | 3% | 36% | 5–15bb | g6 |
| QJ | mp | 64% | 36% | 0% | 18% | 0–5bb | g7 |
| AQ | mp | 63% | 40% | 0% | 27% | 0–5bb | g7 |
| Q9 | mp | 58% | 29% | 0% | 6% | 0–5bb | g7 |
| Q8 | mp | 55% | 28% | 0% | 7% | 0–5bb | g7 |
| Q7 | mp | 54% | 27% | 0% | 7% | 0–5bb | g7 |
| Q6 | mp | 53% | 27% | 0% | 8% | 0–5bb | g7 |
| Q5 | mp | 51% | 26% | 0% | 8% | 0–5bb | g7 |
| JJ | pp2 | 45% | 21% | 0% | 11% | 0–5bb | g8 |
| JT | bp | 36% | 10% | 0% | 8% | 0–5bb | g8 |
| AT | bp | 34% | 15% | 0% | 5% | 0–5bb | g8 |
| T9 | bp | 30% | 5% | 0% | 5% | 0–5bb | g8 |
| T8 | bp | 26% | 2% | 0% | 6% | 0–5bb | g8 |
| T7 | bp | 25% | 1% | 0% | 7% | 0–5bb | g8 |
| 99 | pp3 | 20% | 0% | 0% | 4% | 0–5bb | g8 |
| 55 | spp | 19% | 0% | 0% | 6% | 0–5bb | g8 |
| 64 | bp | 19% | 0% | 0% | 6% | 0–5bb | g8 |
| 88 | spp | 19% | 0% | 0% | 7% | 0–5bb | g8 |
| 54 | bp | 19% | 0% | 0% | 7% | 0–5bb | g8 |
| 77 | spp | 19% | 0% | 0% | 7% | 0–5bb | g8 |
| 66 | spp | 18% | 0% | 0% | 7% | 0–5bb | g8 |
| 22 | spp | 18% | 0% | 0% | 7% | 0–5bb | g8 |
| A4 | bp | 15% | 0% | 0% | 5% | 0–5bb | g8 |
| A3 | bp | 15% | 0% | 0% | 5% | 0–5bb | g8 |
| A9 | khnd | 11% | 0% | 0% | 2% | Pot is too big | g9 |
| A8 | khnd | 7% | 0% | 0% | 0% | Pot is too big | g9 |
| A7 | khnd | 4% | 0% | 0% | 0% | Pot is too big | g9 |
| A6 | khnd | 2% | 0% | 0% | 0% | Pot is too big | g9 |
| A5 | khnd | 2% | 0% | 0% | 0% | Pot is too big | g9 |
| A2 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g9 |
