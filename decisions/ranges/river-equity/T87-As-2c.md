# T87-As-2c river (T♥ 8♥ 7♠ A♠ 2♣): equity groups

Generated 2026-11-14 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Straights & sets | AA, TT, 88, 77, 22, J9, 96 | 100% | 100% | 100% | 100% |
| g2 | 50–100bb | Two pair | AT, A8, A7, A2 | 93% | 94% | 91% | 69% |
| g3 | 25–50bb | Two pair | T8, T7, 87 | 82% | 79% | 74% | 46% |
| g4 | 15–25bb | Top pair, good kicker | AK–AJ | 77% | 74% | 60% | 46% |
| g5 | 0–5bb | Top pair, weak kicker | A9, A6–A3 | 63% | 43% | 10% | 29% |
| g6 | 0–5bb | Big pocket pairs | KK–JJ | 50% | 27% | 0% | 19% |
| g7 | 0–5bb | Second pair | KT, QT, JT, T9 | 43% | 20% | 0% | 13% |
| g8 | 0–5bb | Small pairs | 99, 66–33, K8, K7, K2, Q8, Q7, J8, J7, 98, 97, 86, 76, 75 | 17% | 3% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| J9 | straight | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 96 | straight | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AA | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| TT | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 88 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 77 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 22 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AT | twopair | 99% | 100% | 100% | 95% | 50–100bb | g2 |
| A8 | twopair | 95% | 99% | 99% | 75% | 50–100bb | g2 |
| A7 | twopair | 90% | 93% | 89% | 56% | 50–100bb | g2 |
| A2 | twopair | 88% | 84% | 74% | 51% | 50–100bb | g2 |
| T7 | twopair | 81% | 80% | 76% | 40% | 25–50bb | g3 |
| 87 | twopair | 82% | 81% | 75% | 49% | 25–50bb | g3 |
| T8 | twopair | 83% | 78% | 72% | 46% | 25–50bb | g3 |
| AK | tpgk | 78% | 76% | 63% | 47% | 25–50bb | g4 |
| AQ | tpgk | 79% | 77% | 62% | 47% | 25–50bb | g4 |
| AJ | tpmk | 75% | 70% | 55% | 44% | 25–50bb | g4 |
| A6 | tpmk | 63% | 42% | 9% | 28% | 0–5bb | g5 |
| A3 | tpmk | 61% | 36% | 1% | 28% | 0–5bb | g5 |
| A5 | tpmk | 61% | 39% | 5% | 27% | 0–5bb | g5 |
| A4 | tpmk | 60% | 39% | 4% | 28% | 0–5bb | g5 |
| A9 | tpmk | 67% | 57% | 28% | 31% | 5–15bb | g5 |
| QQ | pp1 | 51% | 28% | 0% | 20% | 0–5bb | g6 |
| JJ | pp1 | 50% | 26% | 0% | 17% | 0–5bb | g6 |
| KK | pp1 | 49% | 26% | 0% | 21% | 0–5bb | g6 |
| KT | mp | 47% | 22% | 0% | 15% | 0–5bb | g7 |
| QT | mp | 43% | 21% | 0% | 15% | 0–5bb | g7 |
| JT | mp | 42% | 19% | 0% | 12% | 0–5bb | g7 |
| T9 | mp | 38% | 15% | 0% | 4% | 0–5bb | g7 |
| 99 | pp2 | 31% | 10% | 0% | 0% | 0–5bb | g8 |
| K8 | bp | 25% | 8% | 0% | 0% | 0–5bb | g8 |
| Q8 | bp | 24% | 7% | 0% | 0% | 0–5bb | g8 |
| 98 | bp | 23% | 4% | 0% | 0% | 0–5bb | g8 |
| J8 | bp | 23% | 6% | 0% | 0% | 0–5bb | g8 |
| 86 | bp | 20% | 4% | 0% | 0% | 0–5bb | g8 |
| Q7 | bp | 15% | 1% | 0% | 0% | 0–5bb | g8 |
| K7 | bp | 14% | 2% | 0% | 0% | 0–5bb | g8 |
| 97 | bp | 14% | 1% | 0% | 0% | 0–5bb | g8 |
| 76 | bp | 13% | 0% | 0% | 0% | 0–5bb | g8 |
| J7 | bp | 13% | 1% | 0% | 0% | 0–5bb | g8 |
| 75 | bp | 11% | 1% | 0% | 0% | 0–5bb | g8 |
| 66 | pp3 | 11% | 0% | 0% | 0% | 0–5bb | g8 |
| 44 | pp3 | 11% | 0% | 0% | 0% | 0–5bb | g8 |
| 55 | pp3 | 11% | 0% | 0% | 0% | 0–5bb | g8 |
| 33 | pp3 | 11% | 0% | 0% | 0% | 0–5bb | g8 |
| K2 | bp | 10% | 0% | 0% | 0% | 0–5bb | g8 |
