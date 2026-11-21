# Defend river · KQ4-8s-Td (Kd Qd 4s 8s Td)

BTN bets 14bb into 21.1bb. Answer by the solver's strategy and the EV of calling (Noam 2026-11-21): the solver calls 75%+ = Call, 25% or less = Fold; when it mixes, EV −0.5 to +0.5bb = Bluff-catch, more = Call, less = Fold. Source: TexasSolver (our solve); EV = both play the solver's strategy after the call. Draft for Noam and Uri.

| Group | Hands | Share | EV of a call | Solver continues | Answer |
|---|---|---|---|---|---|
| Two pair or better | AJo, A9s, A8s, A7s, A6s, A4s, A3s, A2s, KT, K8, QT +14 more | 20.9% | +22.58bb | 100% | Call |
| Top pair: KJ, K9, K6s… | KJ, K9, K6s, K5s | 17.2% | +0.95bb | 86.3% | Call |
| Second pair and weaker pairs | QJ, JT | 12.7% | +0.86bb | 57% | Call |
| Top pair: K7s, K3s, K2s | K7s, K3s, K2s | 8% | +0.44bb | 61.8% | Bluff-catch |
| Second pair | AQo, Q9, Q7s, Q6s, Q5s, Q3s, Q2s | 24.9% | -0.08bb | 30.1% | Bluff-catch |
| Third pair or lower: ATo, J8s, J4s | ATo, J8s, J4s | 2.7% | -0.21bb | 35.9% | Bluff-catch |
| Third pair or lower: ATs, A8, A4… | ATs, A8, A4, 98s, 87s, 86s, 85s, 74s, 64s, 54s, 43s, 42s | 10.5% | -0.97bb | 20.6% | Fold |
| Pocket pairs under the top card | 99, 77, 66, 55 | 1.8% | -1.23bb | 23.2% | Fold |
| Ace-high | A9s, A7s, A6s, A3s, A2s | 1.2% | -5.39bb | 19.8% | Fold |
