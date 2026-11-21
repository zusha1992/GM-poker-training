# Defend river · KQ4-2c-Jd (Kd Qd 4s 2c Jd)

BTN bets 24bb into 36.5bb. Answer by the solver's strategy and the EV of calling (Noam 2026-11-21): the solver calls 75%+ = Call, 25% or less = Fold; when it mixes, EV −0.5 to +0.5bb = Bluff-catch, more = Call, less = Fold. Source: TexasSolver (our solve); EV = both play the solver's strategy after the call. Draft for Noam and Uri.

| Group | Hands | Share | EV of a call | Solver continues | Answer |
|---|---|---|---|---|---|
| Big flush or better | ATs, A9s, A8s, A7s, A6s, A4s, A3s, A2s, T4s | 1.5% | +60.06bb | 100% | Call |
| Small flush | 74s, 64s, 63s, 54s, 53s, 52s, 43s, 42s | 2.6% | +58.63bb | 100% | Call |
| Straight: A-high | ATs | 0.7% | +57.2bb | 100% | Call |
| Two pair or a set | KJ, K2s, QJ, J4s, J2s, 42s, 22 | 13.6% | +41.17bb | 100% | Call |
| Third pair or lower: AJo, JT | AJo, JT | 5.7% | +1.61bb | 47.9% | Call |
| Top pair | KT, K9, K8, K7s, K6s, K5s, K3s | 41.9% | +1.41bb | 76.6% | Call |
| Second pair: AQo, QT, Q5s… | AQo, QT, Q5s, Q3s | 10.2% | -0.07bb | 30.2% | Bluff-catch |
| Second pair: Q9, Q8s, Q7s… | Q9, Q8s, Q7s, Q6s | 14.2% | -0.98bb | 19.3% | Fold |
| Third pair or lower: A4, A2s, J9s… | A4, A2s, J9s, T4s, 74s, 64s, 54s, 52s, 43s | 8.1% | -1.11bb | 3% | Fold |
| Ace-high | A9s, A8s, A7s, A6s, A3s | 1.6% | -6.5bb | 0.3% | Fold |
