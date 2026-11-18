# KQ4-Ad-7c@b200 river (K♦ Q♦ 4♠ A♦ 7♣): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♦ flushes: JT–J7, T9–T7, 98–96, 87, 86, 76, 75, 65, 64, 54, 43 | 99% | 99% | 99% | 99% |
| g2 | 25–50bb | Straights | JT | 93% | 92% | 92% | 92% |
| g3 | 15–25bb | Sets | AA–QQ, 77, 44 | 85% | 76% | 75% | 75% |
| g4 | 15–25bb | Two pair | AK, AQ, A7, A4, KQ, K4, Q7 | 80% | 64% | 64% | 64% |
| g5 | 0–5bb | Two pair | K7 | 74% | 49% | 50% | 49% |
| g6 | 0–5bb | Top pair | AJ–A8, A6, A5, A3, A2 | 48% | 8% | 7% | 8% |
| g7 | 0–5bb | Second pair | KJ–K8, K6, K5, K3, K2 | 24% | 1% | 0% | 1% |
| g8 | 0–5bb | Small pairs | JJ–88, 66, 55, 33, 22, QJ–Q8, Q6, Q5, J7, T7, 97, 87, 76, 75, 64, 54, 43 | 6% | 1% | 0% | 1% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| JT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| J7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| T9+fl | flush | 99% | 99% | 99% | 100% | 50–100bb | g1 |
| T8+fl | flush | 99% | 100% | 99% | 100% | 50–100bb | g1 |
| 64+fl | flushlo | 99% | 99% | 99% | 99% | 50–100bb | g1 |
| T7+fl | flush | 99% | 100% | 99% | 99% | 50–100bb | g1 |
| 54+fl | flushlo | 99% | 99% | 99% | 99% | 50–100bb | g1 |
| 43+fl | flushlo | 99% | 99% | 99% | 99% | 50–100bb | g1 |
| 87+fl | flushlo | 98% | 99% | 99% | 99% | 50–100bb | g1 |
| 76+fl | flushlo | 98% | 99% | 99% | 99% | 50–100bb | g1 |
| 75+fl | flushlo | 99% | 99% | 99% | 99% | 50–100bb | g1 |
| 98+fl | flush | 98% | 99% | 99% | 99% | 50–100bb | g1 |
| 86+fl | flushlo | 99% | 99% | 99% | 99% | 50–100bb | g1 |
| 65+fl | flushlo | 98% | 99% | 99% | 99% | 50–100bb | g1 |
| 97+fl | flush | 99% | 99% | 99% | 99% | 50–100bb | g1 |
| 96+fl | flush | 98% | 99% | 99% | 99% | 50–100bb | g1 |
| JT | straight | 93% | 92% | 92% | 92% | 50–100bb | g2 |
| 77 | twopair | 87% | 80% | 81% | 81% | 50–100bb | g3 |
| QQ | twopair | 85% | 80% | 80% | 81% | 50–100bb | g3 |
| KK | twopair | 85% | 80% | 80% | 80% | 50–100bb | g3 |
| 44 | twopair | 87% | 77% | 76% | 76% | 50–100bb | g3 |
| AA | twopair | 80% | 60% | 57% | 59% | 50–100bb | g3 |
| AK | twopair | 83% | 73% | 74% | 74% | 50–100bb | g4 |
| AQ | twopair | 83% | 72% | 73% | 72% | 50–100bb | g4 |
| A7 | twopair | 83% | 71% | 69% | 70% | 50–100bb | g4 |
| A4 | twopair | 79% | 58% | 57% | 57% | 50–100bb | g4 |
| K4 | twopair | 76% | 54% | 55% | 53% | 50–100bb | g4 |
| KQ | twopair | 72% | 50% | 50% | 50% | 50–100bb | g4 |
| Q7 | twopair | 74% | 51% | 50% | 50% | 25–50bb | g4 |
| K7 | twopair | 74% | 49% | 50% | 49% | 0–5bb | g5 |
| AJ | tpmk | 71% | 37% | 37% | 38% | 0–5bb | g6 |
| AT | tpmk | 57% | 14% | 12% | 14% | 0–5bb | g6 |
| A8 | tpmk | 45% | 2% | 1% | 3% | 0–5bb | g6 |
| A9 | tpmk | 45% | 4% | 2% | 3% | 0–5bb | g6 |
| A6 | tpmk | 44% | 2% | 0% | 2% | 0–5bb | g6 |
| A2 | tpmk | 42% | 1% | 0% | 2% | 0–5bb | g6 |
| A5 | tpmk | 42% | 2% | 0% | 2% | 0–5bb | g6 |
| A3 | tpmk | 41% | 2% | 0% | 2% | 0–5bb | g6 |
| KJ | mp | 30% | 1% | 0% | 1% | 0–5bb | g7 |
| KT | mp | 29% | 2% | 0% | 2% | 0–5bb | g7 |
| K9 | mp | 22% | 1% | 0% | 1% | 0–5bb | g7 |
| K3 | mp | 21% | 1% | 0% | 1% | 0–5bb | g7 |
| K5 | mp | 20% | 1% | 0% | 1% | 0–5bb | g7 |
| K8 | mp | 20% | 1% | 0% | 2% | 0–5bb | g7 |
| K6 | mp | 20% | 1% | 0% | 1% | 0–5bb | g7 |
| K2 | mp | 20% | 1% | 0% | 2% | 0–5bb | g7 |
| QJ | bp | 13% | 1% | 0% | 1% | 0–5bb | g8 |
| QT | bp | 10% | 1% | 0% | 1% | 0–5bb | g8 |
| TT | pp3 | 7% | 2% | 0% | 2% | 0–5bb | g8 |
| Q9 | bp | 6% | 2% | 0% | 2% | 0–5bb | g8 |
| 99 | pp3 | 6% | 1% | 0% | 1% | 0–5bb | g8 |
| 88 | spp | 6% | 1% | 0% | 1% | 0–5bb | g8 |
| Q5 | bp | 6% | 1% | 0% | 1% | 0–5bb | g8 |
| Q8 | bp | 6% | 1% | 0% | 1% | 0–5bb | g8 |
| T7 | bp | 6% | 2% | 0% | 1% | 0–5bb | g8 |
| 97 | bp | 6% | 1% | 0% | 1% | 0–5bb | g8 |
| 55 | spp | 6% | 2% | 0% | 1% | 0–5bb | g8 |
| JJ | pp3 | 5% | 1% | 0% | 1% | 0–5bb | g8 |
| Q6 | bp | 5% | 1% | 0% | 1% | 0–5bb | g8 |
| 87 | bp | 5% | 1% | 0% | 1% | 0–5bb | g8 |
| 76 | bp | 5% | 1% | 0% | 1% | 0–5bb | g8 |
| 75 | bp | 5% | 1% | 0% | 1% | 0–5bb | g8 |
| 66 | spp | 5% | 1% | 0% | 1% | 0–5bb | g8 |
| J7 | bp | 5% | 1% | 0% | 1% | 0–5bb | g8 |
| 54 | bp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| 43 | bp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| 64 | bp | 2% | 0% | 0% | 0% | 0–5bb | g8 |
| 33 | spp | 1% | 0% | 0% | 0% | 0–5bb | g8 |
| 22 | spp | 1% | 0% | 0% | 0% | 0–5bb | g8 |
