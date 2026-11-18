# KQT-3s-4d@x75 river (K♦ Q♣ T♥ 3♠ 4♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | AJ, J9 | 98% | 100% | 100% | 85% |
| g2 | 25–50bb | Sets | KK, QQ, TT, 44, 33 | 94% | 100% | 100% | 59% |
| g3 | 15–25bb | Overpair | AA | 76% | 69% | 58% | 42% |
| g4 | 15–25bb | Two pair | KQ, KT, K4, K3, QT, 43 | 86% | 88% | 84% | 45% |
| g5 | 15–25bb | Top pair, good kicker | AK, KJ | 76% | 65% | 51% | 37% |
| g6 | 0–5bb | Top pair, weak kicker | K9–K5, K2 | 66% | 43% | 18% | 27% |
| g7 | 0–5bb | Second pair | AQ, QJ, Q9–Q5 | 46% | 18% | 0% | 12% |
| g8 | 0–5bb | Small pairs | JJ, 99–55, 22, AT, A4, A3, JT, T9–T7, 64, 54 | 10% | 2% | 0% | 1% |
| g9 | Pot is too big | Ace-high | A9–A5, A2 | 0% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AJ | straight | 99% | 100% | 100% | 92% | 50–100bb | g1 |
| J9 | straight | 97% | 100% | 100% | 73% | 50–100bb | g1 |
| 44 | twopair | 95% | 100% | 100% | 64% | 50–100bb | g2 |
| 33 | twopair | 95% | 100% | 100% | 63% | 50–100bb | g2 |
| TT | twopair | 93% | 100% | 100% | 59% | 50–100bb | g2 |
| QQ | twopair | 93% | 100% | 100% | 54% | 50–100bb | g2 |
| KK | twopair | 93% | 100% | 100% | 53% | 50–100bb | g2 |
| AA | op | 76% | 69% | 58% | 42% | 25–50bb | g3 |
| KT | twopair | 88% | 92% | 89% | 47% | 25–50bb | g4 |
| K4 | twopair | 87% | 86% | 81% | 45% | 25–50bb | g4 |
| K3 | twopair | 87% | 85% | 77% | 44% | 25–50bb | g4 |
| QT | twopair | 80% | 79% | 73% | 38% | 25–50bb | g4 |
| 43 | twopair | 78% | 71% | 61% | 39% | 25–50bb | g4 |
| KQ | twopair | 91% | 98% | 97% | 50% | 50–100bb | g4 |
| KJ | tpmk | 76% | 62% | 47% | 35% | 15–25bb | g5 |
| AK | tpgk | 77% | 68% | 55% | 39% | 25–50bb | g5 |
| K8 | tpmk | 67% | 46% | 21% | 27% | 0–5bb | g6 |
| K7 | tpmk | 66% | 41% | 15% | 26% | 0–5bb | g6 |
| K6 | tpmk | 63% | 38% | 11% | 26% | 0–5bb | g6 |
| K5 | tpmk | 63% | 35% | 7% | 27% | 0–5bb | g6 |
| K2 | tpmk | 61% | 33% | 2% | 27% | 0–5bb | g6 |
| K9 | tpmk | 70% | 54% | 34% | 28% | 5–15bb | g6 |
| AQ | mp | 51% | 22% | 0% | 20% | 0–5bb | g7 |
| QJ | mp | 50% | 20% | 0% | 15% | 0–5bb | g7 |
| Q9 | mp | 43% | 15% | 0% | 7% | 0–5bb | g7 |
| Q7 | mp | 40% | 14% | 0% | 5% | 0–5bb | g7 |
| Q8 | mp | 39% | 14% | 0% | 6% | 0–5bb | g7 |
| Q6 | mp | 37% | 14% | 0% | 5% | 0–5bb | g7 |
| Q5 | mp | 36% | 15% | 0% | 5% | 0–5bb | g7 |
| JJ | pp2 | 30% | 10% | 0% | 7% | 0–5bb | g8 |
| AT | bp | 21% | 8% | 0% | 2% | 0–5bb | g8 |
| JT | bp | 17% | 5% | 0% | 2% | 0–5bb | g8 |
| T9 | bp | 13% | 1% | 0% | 1% | 0–5bb | g8 |
| T8 | bp | 11% | 0% | 0% | 1% | 0–5bb | g8 |
| T7 | bp | 9% | 0% | 0% | 1% | 0–5bb | g8 |
| 88 | spp | 6% | 0% | 0% | 1% | 0–5bb | g8 |
| 99 | pp3 | 5% | 0% | 0% | 0% | 0–5bb | g8 |
| 77 | spp | 5% | 0% | 0% | 1% | 0–5bb | g8 |
| 54 | bp | 5% | 0% | 0% | 0% | 0–5bb | g8 |
| 66 | spp | 5% | 0% | 0% | 1% | 0–5bb | g8 |
| 55 | spp | 5% | 0% | 0% | 1% | 0–5bb | g8 |
| 64 | bp | 5% | 0% | 0% | 0% | 0–5bb | g8 |
| A4 | bp | 5% | 0% | 0% | 0% | 0–5bb | g8 |
| A3 | bp | 3% | 0% | 0% | 0% | 0–5bb | g8 |
| 22 | spp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| A9 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A8 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A7 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A6 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A5 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
| A2 | khnd | 0% | 0% | 0% | 0% | Pot is too big | g9 |
