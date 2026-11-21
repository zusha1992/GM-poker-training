# Defend river · KQ4-8s-3h (Kd Qd 4s 8s 3h)

BTN bets 14bb into 21.1bb. Answer by the solver's strategy and the EV of calling (Noam 2026-11-21): the solver calls 75%+ = Call, 25% or less = Fold; when it mixes, EV −0.5 to +0.5bb = Bluff-catch, more = Call, less = Fold. Source: TexasSolver (our solve); EV = both play the solver's strategy after the call. Draft for Noam and Uri.

| Group | Hands | Share | EV of a call | Solver continues | Answer |
|---|---|---|---|---|---|
| Two pair or better | K8, K3s, Q8s, Q3s, 43s | 4.5% | +30.93bb | 100% | Call |
| Top pair | KJ, KT, K9, K7s, K6s, K5s, K2s | 20.7% | +22.75bb | 100% | Call |
| Third pair or lower: A8, A4, A3s… | A8, A4, A3s, 86s, 85s, 64s, 54s, 42s | 10.9% | +0.68bb | 55.9% | Call |
| Second pair: AQo, Q6s, Q5s… | AQo, Q6s, Q5s, Q2s | 10.1% | +0.66bb | 67.8% | Call |
| Pocket pairs under the top card: 77, 66, 55 | 77, 66, 55 | 1.4% | +0.19bb | 46.9% | Bluff-catch |
| Third pair or lower: J8s, J4s, T8s… | J8s, J4s, T8s, T4s, 98s, 87s, 74s | 4.3% | +0bb | 47.1% | Bluff-catch |
| Second pair: QJ, QT, Q9… | QJ, QT, Q9, Q7s | 35.1% | -0.22bb | 49.7% | Bluff-catch |
| Ace-high | AJo, AT, A9s, A7s, A6s | 12.3% | -0.34bb | 3.1% | Fold |
| Pocket pairs under the top card: 99 | 99 | 0.6% | -1.24bb | 7.9% | Fold |
