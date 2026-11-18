# 962-Qh-Ac@bx river (9♦ 6♦ 2♥ Q♥ A♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Sets | AA, QQ, 99, 66, 22 | 100% | 100% | 100% | 100% |
| g2 | 50–100bb | Two pair | AQ, A9, A6 | 99% | 100% | 100% | 82% |
| g3 | 25–50bb | Two pair | A2, Q9, Q6, 96 | 94% | 96% | 92% | 29% |
| g4 | 25–50bb | Top pair, good kicker | AK, AJ, AT | 87% | 81% | 54% | 0% |
| g5 | 15–25bb | Top pair, weak kicker | A8, A7 | 81% | 66% | 20% | 0% |
| g6 | 5–15bb | Top pair, weak kicker | A5–A3 | 78% | 58% | 4% | 0% |
| g7 | 0–5bb | Big pocket pairs | KK | 70% | 50% | 0% | 0% |
| g8 | 0–5bb | Second pair | KQ, QJ, QT, Q8, Q7, Q5 | 70% | 47% | 0% | 0% |
| g9 | 0–5bb | Small pairs | JJ, TT, 88, 77, 55–33, K9, K6, K2, J9, T9, 98, 97, 86, 76, 65, 64 | 48% | 25% | 0% | 0% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AA | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| QQ | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 99 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 66 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| 22 | twopair | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AQ | twopair | 100% | 100% | 100% | 99% | 50–100bb | g2 |
| A9 | twopair | 99% | 100% | 100% | 86% | 50–100bb | g2 |
| A6 | twopair | 98% | 100% | 99% | 61% | 50–100bb | g2 |
| A2 | twopair | 96% | 99% | 97% | 45% | 25–50bb | g3 |
| Q9 | twopair | 94% | 95% | 91% | 19% | 25–50bb | g3 |
| Q6 | twopair | 91% | 92% | 85% | 9% | 25–50bb | g3 |
| 96 | twopair | 90% | 87% | 76% | 0% | 25–50bb | g3 |
| AT | tpmk | 85% | 75% | 40% | 0% | 15–25bb | g4 |
| AK | tpgk | 89% | 84% | 64% | 0% | 25–50bb | g4 |
| AJ | tpmk | 87% | 82% | 57% | 0% | 25–50bb | g4 |
| A8 | tpmk | 82% | 69% | 26% | 0% | 15–25bb | g5 |
| A7 | tpmk | 79% | 64% | 15% | 0% | 15–25bb | g5 |
| A5 | tpmk | 79% | 59% | 8% | 0% | 5–15bb | g6 |
| A4 | tpmk | 77% | 58% | 4% | 0% | 5–15bb | g6 |
| A3 | tpmk | 78% | 57% | 1% | 0% | 5–15bb | g6 |
| KK | pp1 | 70% | 50% | 0% | 0% | 0–5bb | g7 |
| KQ | mp | 71% | 49% | 0% | 0% | 0–5bb | g8 |
| QJ | mp | 71% | 47% | 0% | 0% | 0–5bb | g8 |
| QT | mp | 69% | 46% | 0% | 0% | 0–5bb | g8 |
| Q7 | mp | 69% | 44% | 0% | 0% | 0–5bb | g8 |
| Q8 | mp | 69% | 45% | 0% | 0% | 0–5bb | g8 |
| Q5 | mp | 67% | 42% | 0% | 0% | 0–5bb | g8 |
| JJ | pp2 | 67% | 42% | 0% | 0% | 0–5bb | g9 |
| TT | pp2 | 65% | 41% | 0% | 0% | 0–5bb | g9 |
| K9 | bp | 64% | 38% | 0% | 0% | 0–5bb | g9 |
| J9 | bp | 61% | 36% | 0% | 0% | 0–5bb | g9 |
| T9 | bp | 59% | 34% | 0% | 0% | 0–5bb | g9 |
| 98 | bp | 56% | 30% | 0% | 0% | 0–5bb | g9 |
| 97 | bp | 54% | 29% | 0% | 0% | 0–5bb | g9 |
| 88 | pp3 | 50% | 27% | 0% | 0% | 0–5bb | g9 |
| 77 | pp3 | 47% | 26% | 0% | 0% | 0–5bb | g9 |
| K6 | bp | 43% | 22% | 0% | 0% | 0–5bb | g9 |
| 86 | bp | 41% | 22% | 0% | 0% | 0–5bb | g9 |
| 76 | bp | 40% | 19% | 0% | 0% | 0–5bb | g9 |
| 64 | bp | 37% | 15% | 0% | 0% | 0–5bb | g9 |
| 65 | bp | 37% | 16% | 0% | 0% | 0–5bb | g9 |
| 55 | pp3 | 30% | 11% | 0% | 0% | 0–5bb | g9 |
| 44 | pp3 | 27% | 7% | 0% | 0% | 0–5bb | g9 |
| 33 | pp3 | 25% | 4% | 0% | 0% | 0–5bb | g9 |
| K2 | bp | 21% | 2% | 0% | 0% | 0–5bb | g9 |
