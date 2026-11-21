# Defend turn · KQ4-8s (Kd Qd 4s 8s)

BTN bets 6bb into 9.1bb. Answer by the solver's strategy and the EV of calling (Noam 2026-11-21): the solver calls 75%+ = Call, 25% or less = Fold; when it mixes, EV −0.5 to +0.5bb = Bluff-catch, more = Call, less = Fold. Source: TexasSolver (our solve); EV = both play the solver's strategy after the call. Draft for Noam and Uri.

| Group | Hands | Share | EV of a call | Solver continues | Answer |
|---|---|---|---|---|---|
| Two pair or better | K8, Q8s, 88, 84s | 4.1% | +16.96bb | 100% | Call |
| Top pair | KJ, KT, K9, K7s, K6s, K5s, K3s, K2s | 16.5% | +7.13bb | 100% | Call |
| Pair + draw | A8s, A4s, QJs, QTs, Q9s, Q7s, Q6s, Q5s, Q3s, Q2s, J8s +12 more | 7.2% | +4.56bb | 100% | Call |
| Draws: AJo, ATs, A9s… | AJo, ATs, A9s, A7s, A6s, A3s, A2s, JT, J9s, 76s, 75s, 65s | 9.9% | +0.58bb | 86.6% | Call |
| Second pair and weaker pairs | AQo, A8, QJ, QT, Q9, Q7s, Q6s, Q5s, Q3s, Q2s, J8s +5 more | 20.3% | +0.45bb | 100% | Call |
| Third pair or lower: A4, 74s, 64s… | A4, 74s, 64s, 54s | 5.2% | -0.13bb | 34.3% | Bluff-catch |
| Draws: AT, J7s, J6s… | AT, J7s, J6s, J5s, J3s, J2s, T7s, T6s, T5s, T3s, 97s +5 more | 7.3% | -0.26bb | 35% | Bluff-catch |
| Third pair or lower: J4s, T4s, 43s… | J4s, T4s, 43s, 42s | 2.5% | -0.28bb | 6.2% | Fold |
| Pocket pairs 99, 77, 66, 55, 33, 22 | 99, 77, 66, 55, 33, 22 | 14.7% | -0.61bb | 6.3% | Fold |
| Gutshots | J9, T9o, 76s, 75s, 65s | 5.8% | -2.82bb | 0% | Fold |
| Ace-high and worse | A9, A7, A6, A5o, A3s, A2s, J7s, J6s, J5s, J3s, J2s +10 more | 6.6% | -3.96bb | 0% | Fold |
