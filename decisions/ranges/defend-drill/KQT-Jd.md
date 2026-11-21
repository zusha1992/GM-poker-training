# Defend turn · KQT-Jd (Kd Qc Th Jd)

BTN bets 6bb into 9.1bb. Answer by the solver's strategy and the EV of calling (Noam 2026-11-21): the solver calls 75%+ = Call, 25% or less = Fold; when it mixes, EV −0.5 to +0.5bb = Bluff-catch, more = Call, less = Fold. Source: TexasSolver (our solve); EV = both play the solver's strategy after the call. Draft for Noam and Uri.

| Group | Hands | Share | EV of a call | Solver continues | Answer |
|---|---|---|---|---|---|
| Straight: A-high | AQo, AJo, AT, A9, A8, A7, A6, A5o, A4s, A3s, A2s | 26% | +10.31bb | 100% | Call |
| Pair + draw | Q8s, Q7s, Q6s, Q5s, Q4s, Q3s, Q2s, T8s, T7s, T6s, T5s +2 more | 6.6% | +0.42bb | 100% | Call |
| Two pair: KQo, KJ, KT… | KQo, KJ, KT, QTs | 7% | +0.04bb | 94.3% | Call |
| Straight: K-high: Q9, J9, T9o… | Q9, J9, T9o, 99 | 13.7% | -0.07bb | 89.9% | Call |
| Two pair: QJo, QTo | QJo, QTo | 5.7% | -0.21bb | 40.6% | Bluff-catch |
| Straight: K-high: K9 | K9 | 4.1% | -0.23bb | 14.6% | Fold |
| Two pair: QJs, JT | QJs, JT | 5% | -0.5bb | 3.2% | Fold |
| Top pair | K8, K7s, K6s, K5s, K4s, K3s, K2s | 14.1% | -2.55bb | 0% | Fold |
| Second pair | Q8s, Q7s, Q6s, Q5s, Q4s, Q3s, Q2s | 9.1% | -2.91bb | 0% | Fold |
| Small pocket pairs | 88, 77, 66 | 1.6% | -3.02bb | 0% | Fold |
| Third pair or lower | J8s, J7s, J6s, J5s, J4s, J3s, J2s, T8, T7s, T6s, T5s +2 more | 7.1% | -3.03bb | 0% | Fold |
