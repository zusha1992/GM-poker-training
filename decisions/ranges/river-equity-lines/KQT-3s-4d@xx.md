# KQT-3s-4d@xx river (K♦ Q♣ T♥ 3♠ 4♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 25–50bb | Straights | AJ, J9 | 98% | 100% | 100% | 64% |
| g2 | 25–50bb | Sets | KK, QQ, TT, 44, 33 | 94% | 100% | 100% | 9% |
| g3 | 15–25bb | Overpair | AA | 84% | 73% | 38% | 6% |
| g4 | 15–25bb | Two pair | KQ, KT, K4, K3, QT, 43 | 90% | 90% | 74% | 8% |
| g5 | 15–25bb | Top pair | AK, KJ, K9–K5, K2 | 82% | 73% | 23% | 10% |
| g6 | 5–15bb | Second pair | AQ, QJ | 75% | 55% | 0% | 10% |
| g7 | 0–5bb | Second pair | Q9–Q5 | 70% | 42% | 0% | 10% |
| g8 | 0–5bb | Small pairs | JJ, 99–55, 22, AT, A4, A3, JT, T9–T7, 64, 54 | 52% | 10% | 0% | 5% |
| g9 | Pot is too big | Ace-high | A9–A5, A2 | 25% | 0% | 0% | 1% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| J9 | straight | 97% | 100% | 100% | 34% | 25–50bb | g1 |
| AJ | straight | 99% | 100% | 100% | 82% | 50–100bb | g1 |
| KK | twopair | 93% | 100% | 100% | 10% | 25–50bb | g2 |
| QQ | twopair | 94% | 100% | 100% | 10% | 25–50bb | g2 |
| TT | twopair | 94% | 100% | 100% | 8% | 25–50bb | g2 |
| 44 | twopair | 94% | 100% | 100% | 7% | 25–50bb | g2 |
| 33 | twopair | 93% | 99% | 98% | 9% | 25–50bb | g2 |
| AA | op | 84% | 73% | 38% | 6% | 15–25bb | g3 |
| KQ | twopair | 92% | 96% | 89% | 8% | 25–50bb | g4 |
| KT | twopair | 90% | 93% | 78% | 7% | 25–50bb | g4 |
| 43 | twopair | 87% | 77% | 44% | 8% | 15–25bb | g4 |
| K4 | twopair | 90% | 91% | 73% | 8% | 25–50bb | g4 |
| K3 | twopair | 89% | 90% | 69% | 9% | 25–50bb | g4 |
| QT | twopair | 88% | 83% | 61% | 8% | 25–50bb | g4 |
| AK | tpgk | 85% | 76% | 33% | 8% | 15–25bb | g5 |
| KJ | tpmk | 86% | 75% | 31% | 12% | 15–25bb | g5 |
| K9 | tpmk | 83% | 74% | 26% | 11% | 15–25bb | g5 |
| K8 | tpmk | 81% | 72% | 20% | 9% | 15–25bb | g5 |
| K6 | tpmk | 79% | 70% | 13% | 9% | 15–25bb | g5 |
| K7 | tpmk | 79% | 70% | 16% | 9% | 15–25bb | g5 |
| K5 | tpmk | 78% | 69% | 8% | 9% | 15–25bb | g5 |
| K2 | tpmk | 78% | 67% | 3% | 9% | 15–25bb | g5 |
| AQ | mp | 75% | 57% | 0% | 8% | 5–15bb | g6 |
| QJ | mp | 76% | 53% | 0% | 12% | 5–15bb | g6 |
| Q9 | mp | 72% | 47% | 0% | 10% | 0–5bb | g7 |
| Q8 | mp | 70% | 43% | 0% | 9% | 0–5bb | g7 |
| Q6 | mp | 69% | 39% | 0% | 9% | 0–5bb | g7 |
| Q7 | mp | 68% | 40% | 0% | 9% | 0–5bb | g7 |
| Q5 | mp | 67% | 37% | 0% | 9% | 0–5bb | g7 |
| JJ | pp2 | 68% | 28% | 0% | 16% | 0–5bb | g8 |
| JT | bp | 64% | 17% | 0% | 7% | 0–5bb | g8 |
| AT | bp | 62% | 23% | 0% | 6% | 0–5bb | g8 |
| T9 | bp | 61% | 13% | 0% | 6% | 0–5bb | g8 |
| T7 | bp | 59% | 10% | 0% | 5% | 0–5bb | g8 |
| T8 | bp | 58% | 10% | 0% | 6% | 0–5bb | g8 |
| 99 | pp3 | 56% | 7% | 0% | 7% | 0–5bb | g8 |
| 88 | spp | 52% | 7% | 0% | 5% | 0–5bb | g8 |
| 77 | spp | 50% | 6% | 0% | 5% | 0–5bb | g8 |
| 66 | spp | 48% | 7% | 0% | 5% | 0–5bb | g8 |
| 55 | spp | 46% | 7% | 0% | 5% | 0–5bb | g8 |
| A4 | bp | 44% | 4% | 0% | 3% | 0–5bb | g8 |
| 64 | bp | 44% | 4% | 0% | 2% | 0–5bb | g8 |
| 54 | bp | 43% | 3% | 0% | 2% | 0–5bb | g8 |
| A3 | bp | 39% | 2% | 0% | 1% | 0–5bb | g8 |
| 22 | spp | 37% | 1% | 0% | 0% | 0–5bb | g8 |
| A9 | khnd | 33% | 0% | 0% | 1% | Pot is too big | g9 |
| A8 | khnd | 29% | 0% | 0% | 1% | Pot is too big | g9 |
| A7 | khnd | 25% | 0% | 0% | 1% | Pot is too big | g9 |
| A6 | khnd | 22% | 0% | 0% | 1% | Pot is too big | g9 |
| A5 | khnd | 20% | 0% | 0% | 1% | Pot is too big | g9 |
| A2 | khnd | 19% | 0% | 0% | 0% | Pot is too big | g9 |
