# K54-3s-2s@bx river (K♠ 5♥ 4♣ 3♠ 2♠): equity groups

Generated 2026-11-18 by scripts/analysis/flop-equity-groups.ts --river (6000 samples per hand and level).
BTN opens, BB calls; BTN bets the flop small and bets the turn, BB calls both. Made hands only (ace-high and better). Equity of each BTN hand against:
L0 = BB after calling the turn · L1 = BB's calls of a 66% river bet · L2 = BB's top pair or better among those calls · L3 = BB's calls of an all-in.
Box = the biggest box whose test the hand passes: 50–100 if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big.

| Group | Box | Name | Hands | L0 | L1 | L2 | L3 |
|---|---|---|---|---|---|---|---|
| g1 | 50–100bb | Flushes | ♠ flushes: AQ–A4, QJ–Q5, JT–J7, T9–T7, 98–96, 87, 86, 76, 75, 65, 64, 54 | 97% | 98% | 97% | 92% |
| g2 | 25–50bb | 7-high straights | 76 | 91% | 95% | 95% | 78% |
| g3 | 25–50bb | 6-high straights | 66, A6, K6, Q6, 96, 86, 65, 64 | 87% | 95% | 95% | 77% |
| g4 | 25–50bb | 5-high straights | AA, AK–A7, A5–A2 | 68% | 63% | 61% | 57% |
| g5 | 0–5bb | Sets | KK, 55–22 | 48% | 22% | 19% | 35% |
| g6 | 0–5bb | Two pair | K5–K2, 54, 43 | 41% | 16% | 12% | 34% |
| g7 | 0–5bb | Top pair | KQ–K7 | 28% | 8% | 4% | 33% |
| g8 | 0–5bb | Big pocket pairs | QQ–TT | 20% | 4% | 0% | 30% |
| g9 | 0–5bb | Medium pairs & second pair | 99–77, Q5, 75 | 16% | 2% | 0% | 29% |

## Every hand

| Hand | Kind | L0 | L1 | L2 | L3 | Own box | Group |
|---|---|---|---|---|---|---|---|
| AQ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AJ+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| AT+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A9+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A8+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A7+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A6+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A5+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| A4+fl | flush | 100% | 100% | 100% | 100% | 50–100bb | g1 |
| QT+fl | flush | 98% | 96% | 96% | 94% | 50–100bb | g1 |
| Q6+fl | flush | 97% | 96% | 96% | 94% | 50–100bb | g1 |
| Q9+fl | flush | 98% | 96% | 97% | 94% | 50–100bb | g1 |
| Q7+fl | flush | 98% | 96% | 96% | 94% | 50–100bb | g1 |
| Q8+fl | flush | 98% | 97% | 96% | 94% | 50–100bb | g1 |
| Q5+fl | flush | 98% | 96% | 95% | 93% | 50–100bb | g1 |
| QJ+fl | flush | 97% | 96% | 95% | 93% | 50–100bb | g1 |
| 54+fl | flushlo | 96% | 96% | 96% | 92% | 50–100bb | g1 |
| JT+fl | flush | 96% | 96% | 96% | 89% | 50–100bb | g1 |
| J7+fl | flush | 96% | 96% | 96% | 89% | 50–100bb | g1 |
| J8+fl | flush | 96% | 96% | 96% | 89% | 50–100bb | g1 |
| J9+fl | flush | 96% | 97% | 96% | 89% | 50–100bb | g1 |
| 75+fl | flushlo | 95% | 96% | 96% | 87% | 50–100bb | g1 |
| 65+fl | flushlo | 94% | 95% | 95% | 87% | 50–100bb | g1 |
| T9+fl | flushlo | 95% | 97% | 98% | 87% | 50–100bb | g1 |
| T8+fl | flushlo | 95% | 97% | 97% | 87% | 50–100bb | g1 |
| T7+fl | flushlo | 95% | 97% | 97% | 87% | 50–100bb | g1 |
| 64+fl | flushlo | 94% | 96% | 96% | 86% | 50–100bb | g1 |
| 97+fl | flushlo | 94% | 97% | 97% | 85% | 50–100bb | g1 |
| 87+fl | flushlo | 94% | 97% | 97% | 85% | 50–100bb | g1 |
| 98+fl | flushlo | 95% | 98% | 97% | 85% | 50–100bb | g1 |
| 96+fl | flushlo | 94% | 97% | 97% | 85% | 50–100bb | g1 |
| 86+fl | flushlo | 93% | 97% | 96% | 84% | 50–100bb | g1 |
| 76+fl | flushlo | 93% | 97% | 96% | 82% | 50–100bb | g1 |
| 76 | straight | 91% | 95% | 95% | 78% | 50–100bb | g2 |
| 66 | straight | 89% | 95% | 95% | 78% | 50–100bb | g3 |
| 86 | straight | 87% | 95% | 95% | 78% | 50–100bb | g3 |
| 96 | straight | 87% | 95% | 95% | 78% | 50–100bb | g3 |
| K6 | straight | 86% | 95% | 94% | 77% | 50–100bb | g3 |
| A6 | straight | 87% | 95% | 95% | 77% | 50–100bb | g3 |
| Q6 | straight | 87% | 95% | 96% | 76% | 50–100bb | g3 |
| 64 | straight | 87% | 95% | 95% | 76% | 50–100bb | g3 |
| 65 | straight | 87% | 95% | 95% | 76% | 50–100bb | g3 |
| AA | straight | 71% | 68% | 67% | 60% | 50–100bb | g4 |
| A3 | straight | 67% | 62% | 60% | 58% | 50–100bb | g4 |
| A5 | straight | 68% | 63% | 61% | 58% | 50–100bb | g4 |
| A4 | straight | 68% | 63% | 62% | 58% | 50–100bb | g4 |
| A8 | straight | 69% | 63% | 61% | 57% | 50–100bb | g4 |
| AT | straight | 68% | 64% | 61% | 57% | 50–100bb | g4 |
| A7 | straight | 67% | 62% | 61% | 57% | 50–100bb | g4 |
| A2 | straight | 68% | 62% | 60% | 57% | 50–100bb | g4 |
| A9 | straight | 68% | 64% | 62% | 57% | 50–100bb | g4 |
| AK | straight | 65% | 61% | 59% | 57% | 50–100bb | g4 |
| AJ | straight | 68% | 63% | 61% | 57% | 50–100bb | g4 |
| AQ | straight | 68% | 63% | 61% | 56% | 50–100bb | g4 |
| 44 | twopair | 51% | 26% | 24% | 36% | 0–5bb | g5 |
| 55 | twopair | 50% | 26% | 23% | 33% | 0–5bb | g5 |
| 33 | twopair | 48% | 22% | 19% | 36% | 0–5bb | g5 |
| 22 | twopair | 47% | 20% | 14% | 37% | 0–5bb | g5 |
| KK | twopair | 42% | 18% | 15% | 34% | 0–5bb | g5 |
| K4 | twopair | 42% | 16% | 13% | 33% | 0–5bb | g6 |
| K3 | twopair | 41% | 17% | 13% | 36% | 0–5bb | g6 |
| K5 | twopair | 41% | 17% | 14% | 30% | 0–5bb | g6 |
| K2 | twopair | 41% | 15% | 11% | 36% | 0–5bb | g6 |
| 43 | twopair | 41% | 13% | 11% | 34% | 0–5bb | g6 |
| 54 | twopair | 39% | 15% | 12% | 29% | 0–5bb | g6 |
| KQ | tpgk | 33% | 10% | 5% | 32% | 0–5bb | g7 |
| KJ | tpmk | 32% | 9% | 5% | 34% | 0–5bb | g7 |
| KT | tpmk | 29% | 8% | 4% | 34% | 0–5bb | g7 |
| K9 | tpmk | 26% | 7% | 4% | 33% | 0–5bb | g7 |
| K8 | tpmk | 23% | 5% | 2% | 32% | 0–5bb | g7 |
| K7 | tpmk | 21% | 3% | 0% | 31% | 0–5bb | g7 |
| TT | pp1 | 20% | 4% | 0% | 32% | 0–5bb | g8 |
| JJ | pp1 | 20% | 4% | 0% | 31% | 0–5bb | g8 |
| QQ | pp1 | 18% | 4% | 0% | 27% | 0–5bb | g8 |
| 99 | pp1 | 20% | 4% | 0% | 33% | 0–5bb | g9 |
| 88 | pp1 | 17% | 2% | 0% | 30% | 0–5bb | g9 |
| 77 | pp1 | 13% | 1% | 0% | 28% | 0–5bb | g9 |
| Q5 | mp | 10% | 0% | 0% | 21% | 0–5bb | g9 |
| 75 | mp | 8% | 0% | 0% | 17% | 0–5bb | g9 |
