# K54-Qd-3h@bx river (K♠ 5♥ 4♣ Q♦ 3♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | A2, 76 | 99% | 100% | 100% | 88% |
| g2 | 25–50bb | Sets | KK, QQ, 55–33 | 98% | 100% | 100% | 73% |
| g3 | 15–25bb | Overpair | AA | 86% | 88% | 76% | 41% |
| g4 | 15–25bb | Two pair | KQ, K5–K3, Q5, 54, 43 | 94% | 97% | 93% | 62% |
| g5 | 15–25bb | Top pair | AK, KJ–K6, K2 | 82% | 78% | 42% | 38% |
| g6 | 5–15bb | Second pair | AQ, QJ–Q6 | 67% | 53% | 0% | 28% |
| g7 | 5–15bb | Small pairs | JJ–88 | 65% | 51% | 0% | 25% |
| g8 | 0–5bb | Small pairs | 77, 66, 22, A5–A3, 75, 65, 64 | 41% | 28% | 0% | 18% |
| g9 | Pot is too big | Ace-high | AJ–A6 | 9% | 3% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| 76 | straight | 100% | 100% | 100% | 98% | 50–100bb | g1 |
| A2 | straight | 98% | 100% | 100% | 86% | 50–100bb | g1 |
| 33 | twopair | 98% | 100% | 100% | 74% | 50–100bb | g2 |
| 44 | twopair | 98% | 100% | 100% | 74% | 50–100bb | g2 |
| QQ | twopair | 97% | 100% | 100% | 73% | 50–100bb | g2 |
| 55 | twopair | 98% | 100% | 100% | 73% | 50–100bb | g2 |
| KK | twopair | 97% | 100% | 100% | 72% | 50–100bb | g2 |
| AA | op | 86% | 88% | 76% | 41% | 25–50bb | g3 |
| 54 | twopair | 90% | 92% | 82% | 47% | 25–50bb | g4 |
| 43 | twopair | 91% | 91% | 79% | 45% | 25–50bb | g4 |
| KQ | twopair | 95% | 99% | 98% | 67% | 50–100bb | g4 |
| K3 | twopair | 95% | 96% | 92% | 63% | 50–100bb | g4 |
| K4 | twopair | 94% | 98% | 94% | 63% | 50–100bb | g4 |
| K5 | twopair | 93% | 98% | 94% | 60% | 50–100bb | g4 |
| Q5 | twopair | 93% | 95% | 89% | 59% | 50–100bb | g4 |
| KT | tpmk | 83% | 82% | 49% | 39% | 15–25bb | g5 |
| K9 | tpmk | 81% | 76% | 35% | 38% | 15–25bb | g5 |
| AK | tpgk | 87% | 89% | 71% | 39% | 25–50bb | g5 |
| K8 | tpmk | 79% | 71% | 23% | 38% | 15–25bb | g5 |
| K7 | tpmk | 77% | 68% | 16% | 39% | 15–25bb | g5 |
| K6 | tpmk | 77% | 67% | 12% | 38% | 15–25bb | g5 |
| K2 | tpmk | 74% | 63% | 4% | 28% | 15–25bb | g5 |
| KJ | tpmk | 87% | 87% | 63% | 37% | 25–50bb | g5 |
| QJ | mp | 68% | 55% | 0% | 27% | 5–15bb | g6 |
| Q9 | mp | 68% | 54% | 0% | 27% | 5–15bb | g6 |
| QT | mp | 67% | 53% | 0% | 28% | 5–15bb | g6 |
| Q8 | mp | 66% | 53% | 0% | 28% | 5–15bb | g6 |
| AQ | mp | 67% | 52% | 0% | 29% | 5–15bb | g6 |
| Q6 | mp | 67% | 51% | 0% | 28% | 5–15bb | g6 |
| Q7 | mp | 67% | 51% | 0% | 27% | 5–15bb | g6 |
| JJ | pp2 | 66% | 51% | 0% | 25% | 5–15bb | g7 |
| 99 | pp2 | 65% | 51% | 0% | 25% | 5–15bb | g7 |
| TT | pp2 | 65% | 51% | 0% | 26% | 5–15bb | g7 |
| 88 | pp2 | 63% | 50% | 0% | 25% | 5–15bb | g7 |
| 77 | pp2 | 59% | 48% | 0% | 27% | 0–5bb | g8 |
| 66 | pp2 | 55% | 44% | 0% | 26% | 0–5bb | g8 |
| A5 | bp | 47% | 35% | 0% | 22% | 0–5bb | g8 |
| 75 | bp | 46% | 34% | 0% | 23% | 0–5bb | g8 |
| 65 | bp | 46% | 33% | 0% | 21% | 0–5bb | g8 |
| 64 | bp | 37% | 22% | 0% | 15% | 0–5bb | g8 |
| A4 | bp | 36% | 22% | 0% | 15% | 0–5bb | g8 |
| 22 | pp3 | 29% | 13% | 0% | 1% | 0–5bb | g8 |
| A3 | bp | 29% | 15% | 0% | 12% | 0–5bb | g8 |
| AJ | khnd | 21% | 8% | 0% | 0% | Pot is too big | g9 |
| AT | khnd | 15% | 5% | 0% | 0% | Pot is too big | g9 |
| A9 | khnd | 8% | 3% | 0% | 0% | Pot is too big | g9 |
| A8 | khnd | 5% | 2% | 0% | 0% | Pot is too big | g9 |
| A7 | khnd | 3% | 1% | 0% | 0% | Pot is too big | g9 |
| A6 | khnd | 2% | 0% | 0% | 0% | Pot is too big | g9 |
