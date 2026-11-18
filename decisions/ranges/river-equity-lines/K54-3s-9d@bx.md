# K54-3s-9d@bx river (K♠ 5♥ 4♣ 3♠ 9♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | A2, 76 | 99% | 100% | 100% | 91% |
| g2 | 25–50bb | Sets | KK, 99, 55–33 | 98% | 100% | 100% | 70% |
| g3 | 15–25bb | Overpair | AA | 87% | 88% | 74% | 42% |
| g4 | 15–25bb | Two pair | K9, K5–K3, 54, 43 | 93% | 96% | 89% | 54% |
| g5 | 15–25bb | Top pair | AK, KQ–KT, K8–K6, K2 | 84% | 81% | 43% | 42% |
| g6 | 5–15bb | Big pocket pairs | QQ–TT | 70% | 59% | 0% | 31% |
| g7 | 5–15bb | Second pair | A9, Q9, J9, T9, 98–96 | 67% | 53% | 0% | 31% |
| g8 | 0–5bb | Small pairs | 88–66, 22, A5–A3, Q5, 75, 65, 64 | 44% | 31% | 0% | 19% |
| g9 | Pot is too big | Ace-high | AQ–AT, A8–A6 | 13% | 3% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| 76 | straight | 100% | 100% | 100% | 99% | 50–100bb | g1 |
| A2 | straight | 99% | 100% | 100% | 88% | 50–100bb | g1 |
| KK | twopair | 98% | 100% | 100% | 74% | 50–100bb | g2 |
| 99 | twopair | 98% | 100% | 100% | 70% | 50–100bb | g2 |
| 33 | twopair | 98% | 100% | 100% | 69% | 50–100bb | g2 |
| 44 | twopair | 97% | 100% | 100% | 69% | 50–100bb | g2 |
| 55 | twopair | 97% | 100% | 100% | 68% | 50–100bb | g2 |
| AA | op | 87% | 87% | 74% | 42% | 25–50bb | g3 |
| K5 | twopair | 93% | 96% | 89% | 50% | 25–50bb | g4 |
| K4 | twopair | 92% | 96% | 88% | 50% | 25–50bb | g4 |
| 54 | twopair | 89% | 89% | 79% | 43% | 25–50bb | g4 |
| 43 | twopair | 90% | 90% | 78% | 42% | 25–50bb | g4 |
| K9 | twopair | 95% | 99% | 96% | 63% | 50–100bb | g4 |
| K3 | twopair | 94% | 95% | 84% | 51% | 50–100bb | g4 |
| KT | tpmk | 82% | 80% | 37% | 42% | 15–25bb | g5 |
| K8 | tpmk | 80% | 75% | 25% | 42% | 15–25bb | g5 |
| K7 | tpmk | 78% | 72% | 17% | 43% | 15–25bb | g5 |
| AK | tpgk | 89% | 90% | 71% | 42% | 25–50bb | g5 |
| K6 | tpmk | 77% | 71% | 12% | 43% | 15–25bb | g5 |
| K2 | tpmk | 77% | 67% | 4% | 34% | 15–25bb | g5 |
| KQ | tpgk | 88% | 89% | 67% | 42% | 25–50bb | g5 |
| KJ | tpmk | 86% | 85% | 51% | 43% | 25–50bb | g5 |
| JJ | pp1 | 69% | 60% | 0% | 30% | 5–15bb | g6 |
| QQ | pp1 | 71% | 60% | 0% | 30% | 5–15bb | g6 |
| TT | pp1 | 69% | 59% | 0% | 31% | 5–15bb | g6 |
| A9 | mp | 67% | 54% | 0% | 32% | 5–15bb | g7 |
| T9 | mp | 68% | 53% | 0% | 29% | 5–15bb | g7 |
| 98 | mp | 66% | 53% | 0% | 31% | 5–15bb | g7 |
| J9 | mp | 67% | 53% | 0% | 31% | 5–15bb | g7 |
| Q9 | mp | 67% | 52% | 0% | 30% | 5–15bb | g7 |
| 96 | mp | 67% | 51% | 0% | 30% | 5–15bb | g7 |
| 97 | mp | 68% | 51% | 0% | 30% | 5–15bb | g7 |
| 77 | pp2 | 61% | 49% | 0% | 27% | 0–5bb | g8 |
| 66 | pp2 | 58% | 45% | 0% | 25% | 0–5bb | g8 |
| 88 | pp2 | 65% | 52% | 0% | 25% | 5–15bb | g8 |
| Q5 | bp | 51% | 38% | 0% | 21% | 0–5bb | g8 |
| A5 | bp | 50% | 37% | 0% | 23% | 0–5bb | g8 |
| 75 | bp | 47% | 34% | 0% | 21% | 0–5bb | g8 |
| 65 | bp | 46% | 34% | 0% | 21% | 0–5bb | g8 |
| A4 | bp | 36% | 23% | 0% | 16% | 0–5bb | g8 |
| 64 | bp | 33% | 20% | 0% | 15% | 0–5bb | g8 |
| 22 | pp3 | 28% | 10% | 0% | 1% | 0–5bb | g8 |
| A3 | bp | 28% | 15% | 0% | 14% | 0–5bb | g8 |
| AQ | khnd | 21% | 7% | 0% | 0% | Pot is too big | g9 |
| AJ | khnd | 19% | 6% | 0% | 0% | Pot is too big | g9 |
| AT | khnd | 14% | 4% | 0% | 0% | Pot is too big | g9 |
| A8 | khnd | 9% | 2% | 0% | 0% | Pot is too big | g9 |
| A7 | khnd | 7% | 1% | 0% | 0% | Pot is too big | g9 |
| A6 | khnd | 6% | 0% | 0% | 0% | Pot is too big | g9 |
