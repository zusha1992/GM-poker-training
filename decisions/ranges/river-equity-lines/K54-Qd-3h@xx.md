# K54-Qd-3h@xx river (K♠ 5♥ 4♣ Q♦ 3♥): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | A2, 76 | 98% | 100% | 100% | 63% |
| g2 | 25–50bb | Sets | KK, QQ, 55–33 | 97% | 100% | 100% | 39% |
| g3 | 15–25bb | Overpair | AA | 88% | 81% | 54% | 26% |
| g4 | 15–25bb | Two pair | KQ, K5–K3, Q5, 54, 43 | 93% | 96% | 88% | 25% |
| g5 | 15–25bb | Top pair | AK, KJ–K6, K2 | 86% | 79% | 27% | 25% |
| g6 | 15–25bb | Second pair | AQ, QJ, QT | 76% | 63% | 0% | 22% |
| g7 | 5–15bb | Second pair | Q9–Q6 | 71% | 55% | 0% | 22% |
| g8 | 0–5bb | Small pairs | JJ–66, 22, A5–A3, 75, 65, 64 | 57% | 34% | 0% | 16% |
| g9 | Pot is too big | Ace-high | AJ–A6 | 33% | 8% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| 76 | straight | 100% | 100% | 100% | 91% | 50–100bb | g1 |
| A2 | straight | 98% | 100% | 100% | 56% | 50–100bb | g1 |
| KK | twopair | 97% | 100% | 100% | 46% | 25–50bb | g2 |
| QQ | twopair | 97% | 100% | 100% | 45% | 25–50bb | g2 |
| 55 | twopair | 98% | 100% | 100% | 39% | 25–50bb | g2 |
| 44 | twopair | 97% | 100% | 100% | 33% | 25–50bb | g2 |
| 33 | twopair | 95% | 100% | 100% | 30% | 25–50bb | g2 |
| AA | op | 88% | 81% | 54% | 26% | 25–50bb | g3 |
| KQ | twopair | 93% | 99% | 96% | 25% | 25–50bb | g4 |
| K5 | twopair | 94% | 98% | 90% | 25% | 25–50bb | g4 |
| K4 | twopair | 93% | 97% | 86% | 26% | 25–50bb | g4 |
| K3 | twopair | 93% | 95% | 82% | 24% | 25–50bb | g4 |
| Q5 | twopair | 92% | 93% | 80% | 25% | 25–50bb | g4 |
| 54 | twopair | 91% | 90% | 67% | 26% | 25–50bb | g4 |
| 43 | twopair | 91% | 87% | 61% | 25% | 25–50bb | g4 |
| AK | tpgk | 89% | 85% | 48% | 25% | 15–25bb | g5 |
| KJ | tpmk | 88% | 84% | 41% | 23% | 15–25bb | g5 |
| KT | tpmk | 86% | 81% | 31% | 25% | 15–25bb | g5 |
| K9 | tpmk | 84% | 78% | 22% | 25% | 15–25bb | g5 |
| K8 | tpmk | 83% | 76% | 14% | 25% | 15–25bb | g5 |
| K2 | tpmk | 83% | 74% | 2% | 18% | 15–25bb | g5 |
| K7 | tpmk | 83% | 73% | 9% | 26% | 15–25bb | g5 |
| K6 | tpmk | 82% | 73% | 6% | 26% | 15–25bb | g5 |
| QJ | mp | 76% | 64% | 0% | 20% | 15–25bb | g6 |
| AQ | mp | 77% | 63% | 0% | 23% | 15–25bb | g6 |
| QT | mp | 74% | 62% | 0% | 22% | 15–25bb | g6 |
| Q9 | mp | 72% | 57% | 0% | 21% | 5–15bb | g7 |
| Q8 | mp | 72% | 55% | 0% | 22% | 5–15bb | g7 |
| Q7 | mp | 70% | 53% | 0% | 23% | 5–15bb | g7 |
| Q6 | mp | 69% | 51% | 0% | 23% | 5–15bb | g7 |
| JJ | pp2 | 66% | 47% | 0% | 18% | 0–5bb | g8 |
| TT | pp2 | 66% | 47% | 0% | 18% | 0–5bb | g8 |
| 99 | pp2 | 64% | 46% | 0% | 18% | 0–5bb | g8 |
| 77 | pp2 | 63% | 44% | 0% | 21% | 0–5bb | g8 |
| 88 | pp2 | 63% | 44% | 0% | 19% | 0–5bb | g8 |
| 66 | pp2 | 61% | 42% | 0% | 21% | 0–5bb | g8 |
| A5 | bp | 58% | 34% | 0% | 19% | 0–5bb | g8 |
| 75 | bp | 57% | 33% | 0% | 19% | 0–5bb | g8 |
| 65 | bp | 56% | 33% | 0% | 19% | 0–5bb | g8 |
| A4 | bp | 51% | 26% | 0% | 15% | 0–5bb | g8 |
| 64 | bp | 51% | 27% | 0% | 14% | 0–5bb | g8 |
| A3 | bp | 46% | 20% | 0% | 13% | 0–5bb | g8 |
| 22 | pp3 | 45% | 21% | 0% | 1% | 0–5bb | g8 |
| AJ | khnd | 41% | 15% | 0% | 0% | Pot is too big | g9 |
| AT | khnd | 38% | 12% | 0% | 0% | Pot is too big | g9 |
| A9 | khnd | 34% | 11% | 0% | 0% | Pot is too big | g9 |
| A8 | khnd | 31% | 8% | 0% | 0% | Pot is too big | g9 |
| A7 | khnd | 28% | 4% | 0% | 0% | Pot is too big | g9 |
| A6 | khnd | 26% | 1% | 0% | 0% | Pot is too big | g9 |
