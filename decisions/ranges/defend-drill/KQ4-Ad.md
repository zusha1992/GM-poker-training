# Defend turn · KQ4-Ad (Kd Qd 4s Ad)

BTN bets 6bb into 9.1bb. Answer by the solver's strategy and the EV of calling (Noam 2026-11-21): the solver calls 75%+ = Call, 25% or less = Fold; when it mixes, EV −0.5 to +0.5bb = Bluff-catch, more = Call, less = Fold. Source: TexasSolver (our solve); EV = both play the solver's strategy after the call. Draft for Noam and Uri.

| Group | Hands | Share | EV of a call | Solver continues | Answer |
|---|---|---|---|---|---|
| Big flush or better | JTs, J9s, J8s, J7s, J6s, J5s, J4s, J3s, J2s, T8s, T7s +8 more | 1.6% | +28.09bb | 100% | Call |
| Small flush | 87s, 86s, 85s, 84s, 76s, 75s, 74s, 65s, 64s, 63s, 54s +4 more | 2.4% | +20.89bb | 100% | Call |
| Straight: A-high | JT | 3.8% | +15.31bb | 100% | Call |
| Two pair | AQo, A4 | 2.3% | +6.86bb | 100% | Call |
| Top pair | AJo, AT, A9, A8, A7, A6, A5o, A3s, A2s | 13.8% | +3.31bb | 100% | Call |
| Pair + draw | KJo, KTo, K9o, K8o, QJo, QTo, Q9o | 6.6% | +3.27bb | 100% | Call |
| Flush draws | J9o, T9o | 2.7% | +1.24bb | 100% | Call |
| Second pair: KJ, KT | KJ, KT | 4.4% | +0.32bb | 100% | Call |
| Third pair or lower: QJ, QT | QJ, QT | 7.2% | +0.08bb | 100% | Call |
| Second pair: K9, K8, K7s… | K9, K8, K7s, K6s, K5s, K3s, K2s | 12.1% | -0.44bb | 0.1% | Fold |
| Third pair or lower: Q9, Q8s, Q7s… | Q9, Q8s, Q7s, Q6s, Q5s, Q3s, Q2s, J4s, T4s, 84s, 74s +4 more | 18.6% | -1.05bb | 0.4% | Fold |
| Pocket pairs 99, 88, 77, 66, 55, 33, 22 | 99, 88, 77, 66, 55, 33, 22 | 17.3% | -1.53bb | 18.5% | Fold |
| Gutshots | J9, J8s, J7s, J6s, J5s, J3s, J2s, T9o, T8s, T7s, T6s +4 more | 5.5% | -2.77bb | 0% | Fold |
| King-high and worse | 98s, 97s, 96s, 95s, 87s, 86s, 85s, 76s, 75s, 65s, 63s | 1.6% | -4.76bb | 0% | Fold |
