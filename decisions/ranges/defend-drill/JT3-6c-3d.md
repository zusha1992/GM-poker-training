# Defend river · JT3-6c-3d (Js Ts 3c 6c 3d)

BTN bets 14bb into 21.1bb. Answer by the solver's strategy and the EV of calling (Noam 2026-11-21): the solver calls 75%+ = Call, 25% or less = Fold; when it mixes, EV −0.5 to +0.5bb = Bluff-catch, more = Call, less = Fold. Source: TexasSolver (our solve); EV = both play the solver's strategy after the call. Draft for Noam and Uri.

| Group | Hands | Share | EV of a call | Solver continues | Answer |
|---|---|---|---|---|---|
| Full house or better | 63s | 1.4% | +32.35bb | 100% | Call |
| Set or trips | A3s, K3s, 53s, 43s, 32s | 3% | +32.27bb | 100% | Call |
| Top pair | AJo, KJ, QJ, J8s, J7s, J5s, J4s, J2s | 10.7% | +26.52bb | 100% | Call |
| Second pair: AT, T9o, T8… | AT, T9o, T8, T7s, T6s, T5s, T4s | 38% | +1.94bb | 70.8% | Call |
| Ace-high | AQo, A9s, A8s, A7s, A4s, A2s | 6.4% | +0.02bb | 17.3% | Fold |
| Second pair: KT, QT | KT, QT | 22.9% | -0.05bb | 50.9% | Bluff-catch |
| Third pair or lower | A6, K6s, Q6s, 96s, 86s, 76s, 65s, 64s | 5.7% | -0.46bb | 44.1% | Bluff-catch |
| Pocket pairs under the top card | 99, 88, 77 | 7.4% | -1.29bb | 22.1% | Fold |
| No pair, no draw | KQo, K9s, K8s, Q9 | 4.6% | -3.54bb | 0.4% | Fold |
