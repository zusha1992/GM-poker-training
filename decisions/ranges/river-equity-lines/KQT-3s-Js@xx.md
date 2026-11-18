# KQT-3s-Js@xx river (K♦ Q♣ T♥ 3♠ J♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | A-high straights | AA, AK–A2 | 89% | 100% | 100% | 50% |
| g2 | 25–50bb | K-high straights | 99, K9, Q9, J9, T9, 98–96 | 67% | 71% | 71% | 0% |
| g3 | 0–5bb | Sets | KK–TT, 33 | 57% | 30% | 31% | 0% |
| g4 | 0–5bb | Two pair | KQ–KT, K3, QJ, QT, JT | 52% | 17% | 17% | 0% |
| g5 | 0–5bb | Top pair, weak kicker | K8–K4, K2 | 43% | 3% | 3% | 0% |
| g6 | 0–5bb | Second pair | Q8–Q5 | 38% | 0% | 0% | 0% |
| g7 | 0–5bb | Small pairs | 88–44, 22, J8, J7, T8, T7, 43 | 22% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AA | straight | 93% | 100% | 100% | 50% | 50–100bb | g1 |
| AK | straight | 89% | 100% | 100% | 50% | 50–100bb | g1 |
| AQ | straight | 89% | 100% | 100% | 50% | 50–100bb | g1 |
| AJ | straight | 89% | 100% | 100% | 50% | 50–100bb | g1 |
| AT | straight | 89% | 100% | 100% | 50% | 50–100bb | g1 |
| A9 | straight | 89% | 100% | 100% | 50% | 50–100bb | g1 |
| A8 | straight | 89% | 100% | 100% | 50% | 50–100bb | g1 |
| A7 | straight | 89% | 100% | 100% | 50% | 50–100bb | g1 |
| A6 | straight | 88% | 100% | 100% | 50% | 50–100bb | g1 |
| A5 | straight | 89% | 100% | 100% | 50% | 50–100bb | g1 |
| A4 | straight | 89% | 100% | 100% | 50% | 50–100bb | g1 |
| A3 | straight | 89% | 100% | 100% | 50% | 50–100bb | g1 |
| A2 | straight | 89% | 100% | 100% | 50% | 50–100bb | g1 |
| 99 | straight | 69% | 76% | 76% | 0% | 25–50bb | g2 |
| 97 | straight | 66% | 71% | 70% | 0% | 25–50bb | g2 |
| Q9 | straight | 67% | 70% | 70% | 0% | 25–50bb | g2 |
| 98 | straight | 67% | 71% | 70% | 0% | 25–50bb | g2 |
| J9 | straight | 67% | 70% | 70% | 0% | 25–50bb | g2 |
| 96 | straight | 67% | 71% | 70% | 0% | 25–50bb | g2 |
| T9 | straight | 67% | 70% | 70% | 0% | 25–50bb | g2 |
| K9 | straight | 66% | 69% | 69% | 0% | 25–50bb | g2 |
| TT | twopair | 58% | 32% | 33% | 0% | 0–5bb | g3 |
| JJ | twopair | 57% | 31% | 31% | 0% | 0–5bb | g3 |
| KK | twopair | 56% | 27% | 27% | 0% | 0–5bb | g3 |
| 33 | twopair | 56% | 29% | 29% | 0% | 0–5bb | g3 |
| QQ | twopair | 56% | 32% | 34% | 0% | 0–5bb | g3 |
| KQ | twopair | 55% | 24% | 24% | 0% | 0–5bb | g4 |
| KT | twopair | 54% | 19% | 18% | 0% | 0–5bb | g4 |
| KJ | twopair | 54% | 21% | 21% | 0% | 0–5bb | g4 |
| K3 | twopair | 53% | 17% | 16% | 0% | 0–5bb | g4 |
| QJ | twopair | 51% | 14% | 15% | 0% | 0–5bb | g4 |
| QT | twopair | 50% | 12% | 13% | 0% | 0–5bb | g4 |
| JT | twopair | 49% | 10% | 10% | 0% | 0–5bb | g4 |
| K8 | tpmk | 44% | 4% | 4% | 0% | 0–5bb | g5 |
| K6 | tpmk | 44% | 3% | 3% | 0% | 0–5bb | g5 |
| K7 | tpmk | 43% | 3% | 4% | 0% | 0–5bb | g5 |
| K4 | tpmk | 40% | 2% | 2% | 0% | 0–5bb | g5 |
| K5 | tpmk | 40% | 3% | 3% | 0% | 0–5bb | g5 |
| K2 | tpmk | 39% | 1% | 1% | 0% | 0–5bb | g5 |
| Q8 | mp | 39% | 0% | 0% | 0% | 0–5bb | g6 |
| Q6 | mp | 37% | 0% | 0% | 0% | 0–5bb | g6 |
| Q5 | mp | 37% | 0% | 0% | 0% | 0–5bb | g6 |
| Q7 | mp | 37% | 0% | 0% | 0% | 0–5bb | g6 |
| J8 | bp | 34% | 0% | 0% | 0% | 0–5bb | g7 |
| J7 | bp | 32% | 0% | 0% | 0% | 0–5bb | g7 |
| T8 | bp | 28% | 0% | 0% | 0% | 0–5bb | g7 |
| T7 | bp | 28% | 0% | 0% | 0% | 0–5bb | g7 |
| 88 | spp | 26% | 0% | 0% | 0% | 0–5bb | g7 |
| 77 | spp | 23% | 0% | 0% | 0% | 0–5bb | g7 |
| 66 | spp | 21% | 0% | 0% | 0% | 0–5bb | g7 |
| 55 | spp | 19% | 0% | 0% | 0% | 0–5bb | g7 |
| 44 | spp | 17% | 0% | 0% | 0% | 0–5bb | g7 |
| 43 | bp | 16% | 0% | 0% | 0% | 0–5bb | g7 |
| 22 | spp | 13% | 0% | 0% | 0% | 0–5bb | g7 |
