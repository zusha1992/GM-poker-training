# K54-Qd-4d river (K♠ 5♥ 4♣ Q♦ 4♦): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Full houses | KK, QQ, 55, 44, K4, 54 | 100% | 100% | 100% | 100% |
| g2 | 50–100bb | Trips | A4, 64, 43 | 98% | 100% | 100% | 97% |
| g3 | 50–100bb | Overpair | AA | 94% | 99% | 99% | 95% |
| g4 | 25–50bb | Top pair | AK, KQ–K5, K3, K2 | 72% | 66% | 66% | 58% |
| g5 | 0–5bb | Second pair | AQ, QJ–Q5 | 27% | 0% | 0% | 0% |
| g6 | 0–5bb | Small pairs | JJ–66, 33, 22 | 23% | 0% | 0% | 0% |
| g7 | 0–5bb | Third pair | A5, 75, 65 | 18% | 0% | 0% | 0% |
| g8 | 0–5bb | Ace-high | AJ–A6, A3, A2 | 3% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| KK | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K4 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| QQ | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 55 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 44 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 54 | boat | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| 64 | trips | 97% | 100% | 100% | 98% | 50–100bb | g2 |
| 43 | trips | 97% | 100% | 100% | 97% | 50–100bb | g2 |
| A4 | trips | 99% | 100% | 100% | 97% | 50–100bb | g2 |
| AA | op | 94% | 99% | 99% | 95% | 50–100bb | g3 |
| KQ | twopair | 90% | 99% | 99% | 90% | 50–100bb | g4 |
| K5 | twopair | 88% | 99% | 99% | 81% | 50–100bb | g4 |
| AK | tpgk | 88% | 99% | 99% | 80% | 50–100bb | g4 |
| KJ | tpmk | 83% | 94% | 93% | 75% | 50–100bb | g4 |
| KT | tpmk | 75% | 77% | 78% | 64% | 50–100bb | g4 |
| K8 | tpmk | 58% | 38% | 39% | 39% | 0–5bb | g4 |
| K7 | tpmk | 54% | 27% | 28% | 32% | 0–5bb | g4 |
| K9 | tpmk | 67% | 57% | 57% | 53% | 50–100bb | g4 |
| K6 | tpmk | 51% | 22% | 21% | 25% | 0–5bb | g4 |
| K3 | tpmk | 47% | 14% | 14% | 16% | 0–5bb | g4 |
| K2 | tpmk | 43% | 5% | 5% | 6% | 0–5bb | g4 |
| QJ | mp | 28% | 0% | 0% | 0% | 0–5bb | g5 |
| QT | mp | 28% | 0% | 0% | 0% | 0–5bb | g5 |
| Q5 | twopair | 28% | 0% | 0% | 0% | 0–5bb | g5 |
| Q8 | mp | 27% | 0% | 0% | 0% | 0–5bb | g5 |
| Q9 | mp | 27% | 0% | 0% | 0% | 0–5bb | g5 |
| Q7 | mp | 26% | 0% | 0% | 0% | 0–5bb | g5 |
| AQ | mp | 26% | 0% | 0% | 0% | 0–5bb | g5 |
| Q6 | mp | 25% | 0% | 0% | 0% | 0–5bb | g5 |
| 88 | pp2 | 26% | 0% | 0% | 0% | 0–5bb | g6 |
| 99 | pp2 | 25% | 0% | 0% | 0% | 0–5bb | g6 |
| 66 | pp2 | 24% | 0% | 0% | 0% | 0–5bb | g6 |
| TT | pp2 | 24% | 0% | 0% | 0% | 0–5bb | g6 |
| 77 | pp2 | 24% | 0% | 0% | 0% | 0–5bb | g6 |
| JJ | pp2 | 23% | 0% | 0% | 0% | 0–5bb | g6 |
| 33 | pp3 | 18% | 0% | 0% | 0% | 0–5bb | g6 |
| 22 | pp3 | 17% | 0% | 0% | 0% | 0–5bb | g6 |
| 75 | bp | 20% | 0% | 0% | 0% | 0–5bb | g7 |
| 65 | bp | 18% | 0% | 0% | 0% | 0–5bb | g7 |
| A5 | bp | 17% | 0% | 0% | 0% | 0–5bb | g7 |
| AJ | khnd | 9% | 0% | 0% | 0% | 0–5bb | g8 |
| AT | khnd | 3% | 0% | 0% | 0% | 0–5bb | g8 |
| A9 | khnd | 1% | 0% | 0% | 0% | 0–5bb | g8 |
| A3 | khnd | 1% | 0% | 0% | 0% | 0–5bb | g8 |
| A6 | khnd | 1% | 0% | 0% | 0% | 0–5bb | g8 |
| A7 | khnd | 1% | 0% | 0% | 0% | 0–5bb | g8 |
| A2 | khnd | 1% | 0% | 0% | 0% | 0–5bb | g8 |
| A8 | khnd | 1% | 0% | 0% | 0% | 0–5bb | g8 |
