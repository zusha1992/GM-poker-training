# K54-Qd-4d river (K♠ 5♥ 4♣ Q♦ 4♦): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Full houses | KK, QQ, 55, 44, K4, 54 | 100% | 100% | 100% | 100% |
| g2 | 50–100bb | Two pair | KQ, K5 | 90% | 99% | 99% | 88% |
| g3 | 50–100bb | Trips | A4 | 99% | 100% | 100% | 98% |
| g4 | 50–100bb | Overpair | AA | 94% | 100% | 99% | 95% |
| g5 | 50–100bb | Trips | 64, 43 | 97% | 100% | 100% | 97% |
| g6 | 25–50bb | Top pair | AK, KJ–K9 | 79% | 85% | 84% | 70% |
| g7 | 0–5bb | Two pair | Q5 | 29% | 0% | 0% | 0% |
| g8 | 0–5bb | Top pair | K8–K6, K3, K2 | 52% | 25% | 25% | 27% |
| g9 | 0–5bb | Second pair | AQ, QJ–Q6 | 27% | 0% | 0% | 0% |
| g10 | 0–5bb | Small pairs | JJ–66, 33, 22, A5, 75, 65 | 21% | 0% | 0% | 0% |
| g11 | Pot is too big | Ace-high | AJ–A6, A3, A2 | 3% | 0% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| KK | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| K4 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| QQ | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 55 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 44 | boat | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 54 | boat | 99% | 100% | 100% | 98% | 50–100bb | g1 |
| KQ | twopair | 90% | 99% | 100% | 90% | 50–100bb | g2 |
| K5 | twopair | 87% | 99% | 99% | 81% | 50–100bb | g2 |
| A4 | trips | 99% | 100% | 100% | 98% | 50–100bb | g3 |
| AA | op | 94% | 100% | 99% | 95% | 50–100bb | g4 |
| 64 | trips | 97% | 100% | 100% | 97% | 50–100bb | g5 |
| 43 | trips | 97% | 100% | 100% | 97% | 50–100bb | g5 |
| AK | tpgk | 87% | 99% | 99% | 81% | 50–100bb | g6 |
| KJ | tpmk | 84% | 93% | 94% | 76% | 50–100bb | g6 |
| KT | tpmk | 75% | 77% | 78% | 64% | 50–100bb | g6 |
| K9 | tpmk | 66% | 59% | 57% | 52% | 50–100bb | g6 |
| Q5 | twopair | 29% | 0% | 0% | 0% | 0–5bb | g7 |
| K8 | tpmk | 59% | 39% | 39% | 38% | 0–5bb | g8 |
| K7 | tpmk | 55% | 29% | 28% | 30% | 0–5bb | g8 |
| K6 | tpmk | 50% | 21% | 21% | 23% | 0–5bb | g8 |
| K3 | tpmk | 46% | 14% | 15% | 15% | 0–5bb | g8 |
| K2 | tpmk | 43% | 5% | 5% | 6% | 0–5bb | g8 |
| QJ | mp | 28% | 0% | 0% | 0% | 0–5bb | g9 |
| AQ | mp | 27% | 0% | 0% | 0% | 0–5bb | g9 |
| Q8 | mp | 27% | 0% | 0% | 0% | 0–5bb | g9 |
| Q7 | mp | 26% | 0% | 0% | 0% | 0–5bb | g9 |
| QT | mp | 26% | 0% | 0% | 0% | 0–5bb | g9 |
| Q9 | mp | 26% | 0% | 0% | 0% | 0–5bb | g9 |
| Q6 | mp | 26% | 0% | 0% | 0% | 0–5bb | g9 |
| 99 | pp2 | 26% | 0% | 0% | 0% | 0–5bb | g10 |
| 66 | pp2 | 25% | 0% | 0% | 0% | 0–5bb | g10 |
| 88 | pp2 | 25% | 0% | 0% | 0% | 0–5bb | g10 |
| 77 | pp2 | 24% | 0% | 0% | 0% | 0–5bb | g10 |
| JJ | pp2 | 23% | 0% | 0% | 0% | 0–5bb | g10 |
| TT | pp2 | 23% | 0% | 0% | 0% | 0–5bb | g10 |
| 75 | bp | 19% | 0% | 0% | 0% | 0–5bb | g10 |
| A5 | bp | 18% | 0% | 0% | 0% | 0–5bb | g10 |
| 65 | bp | 18% | 0% | 0% | 0% | 0–5bb | g10 |
| 33 | pp3 | 17% | 0% | 0% | 0% | 0–5bb | g10 |
| 22 | pp3 | 16% | 0% | 0% | 0% | 0–5bb | g10 |
| AJ | khnd | 9% | 0% | 0% | 0% | Pot is too big | g11 |
| AT | khnd | 4% | 0% | 0% | 0% | Pot is too big | g11 |
| A8 | khnd | 2% | 0% | 0% | 0% | Pot is too big | g11 |
| A2 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g11 |
| A9 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g11 |
| A3 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g11 |
| A7 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g11 |
| A6 | khnd | 1% | 0% | 0% | 0% | Pot is too big | g11 |
