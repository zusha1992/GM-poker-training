# KQT-3s-Js river (K♦ Q♣ T♥ 3♠ J♠): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights | AA, AK–A2 | 96% | 100% | 100% | 78% |
| g2 | 25–50bb | Straights & sets | KK, 99, K9, Q9, J9, T9, 98–96 | 81% | 74% | 74% | 26% |
| g3 | 0–5bb | Sets | QQ–TT, 33 | 68% | 38% | 38% | 8% |
| g4 | 0–5bb | Two pair | KQ–KT, K3, QJ, QT, JT | 47% | 26% | 26% | 6% |
| g5 | 0–5bb | Top pair, weak kicker | K8–K4, K2 | 4% | 0% | 0% | 0% |
| g6 | 0–5bb | Second pair | Q8–Q5 | 0% | 0% | 0% | 0% |
| g7 | 0–5bb | Small pairs | 88–44, 22, J8, J7, T8, T7, 43 | 0% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AA | straight | 97% | 100% | 100% | 84% | 50–100bb | g1 |
| AT | straight | 97% | 100% | 100% | 82% | 50–100bb | g1 |
| A2 | straight | 95% | 100% | 100% | 79% | 50–100bb | g1 |
| A5 | straight | 96% | 100% | 100% | 78% | 50–100bb | g1 |
| A3 | straight | 96% | 100% | 100% | 78% | 50–100bb | g1 |
| A7 | straight | 96% | 100% | 100% | 78% | 50–100bb | g1 |
| A4 | straight | 96% | 100% | 100% | 78% | 50–100bb | g1 |
| A8 | straight | 96% | 100% | 100% | 78% | 50–100bb | g1 |
| A6 | straight | 95% | 100% | 100% | 78% | 50–100bb | g1 |
| AQ | straight | 95% | 100% | 100% | 77% | 50–100bb | g1 |
| AK | straight | 95% | 100% | 100% | 77% | 50–100bb | g1 |
| AJ | straight | 95% | 100% | 100% | 77% | 50–100bb | g1 |
| A9 | straight | 96% | 100% | 100% | 75% | 50–100bb | g1 |
| 99 | straight | 83% | 81% | 80% | 25% | 25–50bb | g2 |
| K9 | straight | 80% | 77% | 78% | 25% | 25–50bb | g2 |
| 96 | straight | 82% | 75% | 76% | 28% | 25–50bb | g2 |
| 97 | straight | 82% | 76% | 75% | 28% | 25–50bb | g2 |
| 98 | straight | 81% | 75% | 75% | 27% | 25–50bb | g2 |
| J9 | straight | 80% | 74% | 74% | 25% | 25–50bb | g2 |
| T9 | straight | 83% | 74% | 74% | 32% | 25–50bb | g2 |
| Q9 | straight | 80% | 73% | 73% | 26% | 25–50bb | g2 |
| KK | twopair | 69% | 54% | 53% | 9% | 25–50bb | g2 |
| TT | twopair | 70% | 36% | 37% | 13% | 0–5bb | g3 |
| 33 | twopair | 69% | 43% | 42% | 6% | 0–5bb | g3 |
| JJ | twopair | 67% | 36% | 37% | 8% | 0–5bb | g3 |
| QQ | twopair | 66% | 35% | 34% | 5% | 0–5bb | g3 |
| KQ | twopair | 67% | 43% | 42% | 9% | 0–5bb | g4 |
| KJ | twopair | 61% | 42% | 43% | 9% | 0–5bb | g4 |
| KT | twopair | 55% | 37% | 37% | 11% | 0–5bb | g4 |
| K3 | twopair | 53% | 38% | 38% | 8% | 0–5bb | g4 |
| QJ | twopair | 41% | 20% | 20% | 3% | 0–5bb | g4 |
| QT | twopair | 33% | 9% | 10% | 2% | 0–5bb | g4 |
| JT | twopair | 22% | 3% | 2% | 0% | 0–5bb | g4 |
| K8 | tpmk | 7% | 0% | 0% | 0% | 0–5bb | g5 |
| K7 | tpmk | 4% | 0% | 0% | 0% | 0–5bb | g5 |
| K6 | tpmk | 3% | 0% | 0% | 0% | 0–5bb | g5 |
| K5 | tpmk | 2% | 0% | 0% | 0% | 0–5bb | g5 |
| K4 | tpmk | 2% | 0% | 0% | 0% | 0–5bb | g5 |
| K2 | tpmk | 0% | 0% | 0% | 0% | 0–5bb | g5 |
| Q8 | mp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| Q7 | mp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| Q6 | mp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| Q5 | mp | 0% | 0% | 0% | 0% | 0–5bb | g6 |
| J8 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| J7 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| T8 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| T7 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 88 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 77 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 66 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 55 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 44 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 43 | bp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
| 22 | spp | 0% | 0% | 0% | 0% | 0–5bb | g7 |
