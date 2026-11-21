# Defend river · KQ4-8s-Td (Kd Qd 4s 8s Td)

BTN bets 14bb into 21.1bb. Answer by the solver's strategy and the EV of calling (Noam 2026-11-21): the solver calls 75%+ = Call, 25% or less = Fold; when it mixes, EV −0.5 to +0.5bb = Bluff-catch, more = Call, less = Fold. Source: TexasSolver (our solve); EV = both play the solver's strategy after the call. Draft for Noam and Uri.

| Group | Hands | Share | EV of a call | Solver continues | Answer |
|---|---|---|---|---|---|
| Big flush | A9s, A8s, A7s, A6s, A4s, A3s, A2s, J8s, J4s, 98s | 1.7% | +34.58bb | 100% | Call |
| Small flush | 87s, 86s, 85s, 74s, 64s, 54s, 43s, 42s | 2.1% | +32.12bb | 100% | Call |
| Straight: A-high | AJo | 5.4% | +29.1bb | 100% | Call |
| Two pair | KT, K8, QT, Q8s, T8s, T4s | 11.7% | +16.12bb | 100% | Call |
| Third pair or lower: JT | JT | 3.2% | +1.1bb | 56.7% | Call |
| Top pair | KJ, K9, K7s, K6s, K5s, K3s, K2s | 25.2% | +0.79bb | 78.5% | Call |
| Second pair: QJ | QJ | 9.5% | +0.78bb | 57.1% | Call |
| Second pair: AQo, Q9, Q7s… | AQo, Q9, Q7s, Q6s, Q5s, Q3s, Q2s | 24.9% | -0.08bb | 30.1% | Bluff-catch |
| Third pair or lower: ATo, J8s, J4s | ATo, J8s, J4s | 2.7% | -0.21bb | 35.9% | Bluff-catch |
| Third pair or lower: ATs, A8, A4… | ATs, A8, A4, 98s, 87s, 86s, 85s, 74s, 64s, 54s, 43s, 42s | 10.5% | -0.97bb | 20.6% | Fold |
| Pocket pairs under the top card | 99, 77, 66, 55 | 1.8% | -1.23bb | 23.2% | Fold |
| Ace-high | A9s, A7s, A6s, A3s, A2s | 1.2% | -5.39bb | 19.8% | Fold |
