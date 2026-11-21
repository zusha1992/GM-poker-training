# Defend river · KQ4-Ad-7c (Kd Qd 4s Ad 7c)

BTN bets 14bb into 21.1bb. Answer by the solver's strategy and the EV of calling (Noam 2026-11-21): the solver calls 75%+ = Call, 25% or less = Fold; when it mixes, EV −0.5 to +0.5bb = Bluff-catch, more = Call, less = Fold. Source: TexasSolver (our solve); EV = both play the solver's strategy after the call. Draft for Noam and Uri.

| Group | Hands | Share | EV of a call | Solver continues | Answer |
|---|---|---|---|---|---|
| Big flush or better | JTs, J4s, T4s | 0.7% | +34.95bb | 100% | Call |
| Small flush | 74s, 64s, 54s, 43s | 0.4% | +33.11bb | 100% | Call |
| Straight: A-high | JT | 5.3% | +31.76bb | 100% | Call |
| Two pair or a set | AQo, A7, A4, 77, 74s | 9.2% | +25.6bb | 100% | Call |
| Top pair | AJo, AT, A9, A8, A6, A5o, A3s, A2s | 35.3% | +1.13bb | 88.3% | Call |
| Second pair | KJ, KT, K9o, K8o | 17.9% | -0.26bb | 37.9% | Bluff-catch |
| Third pair or lower | QJ, QT, Q9o, J4s, T4s, 64s, 54s, 43s | 28% | -0.82bb | 19.8% | Fold |
| Pocket pairs under the top card | 99, 88 | 3.2% | -2.41bb | 6.5% | Fold |
