# Defend river · JT3-2h-3d (Js Ts 3c 2h 3d)

BTN bets 24bb into 36.5bb. Answer by the solver's strategy and the EV of calling (Noam 2026-11-21): the solver calls 75%+ = Call, 25% or less = Fold; when it mixes, EV −0.5 to +0.5bb = Bluff-catch, more = Call, less = Fold. Source: TexasSolver (our solve); EV = both play the solver's strategy after the call. Draft for Noam and Uri.

| Group | Hands | Share | EV of a call | Solver continues | Answer |
|---|---|---|---|---|---|
| Full house or better | 32s | 0.3% | +51.87bb | 100% | Call |
| Set or trips | A3s, K3s, Q3s, 63s, 53s, 43s | 3.5% | +51.39bb | 100% | Call |
| Top pair | AJo, KJ, QJ, J9, J8s, J7s, J6s, J5s, J4s, J2s | 36.6% | +20.74bb | 99.5% | Call |
| Second pair: QT | QT | 12.4% | +2.26bb | 48.7% | Call |
| Third pair or lower: Q2s | Q2s | 0.3% | +1.85bb | 33% | Call |
| Second pair: AT, KT, T8… | AT, KT, T8, T7s, T6s, T5s, T4s | 43% | +0.16bb | 32% | Bluff-catch |
| Third pair or lower: A2s, K2s, 52s… | A2s, K2s, 52s, 42s | 1.8% | -0.17bb | 14% | Fold |
| Ace-high | AQo, A9s, A8s, A7s, A6s, A4s | 2.1% | -2.1bb | 5% | Fold |
