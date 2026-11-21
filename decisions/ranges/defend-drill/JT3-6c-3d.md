# Defend river · JT3-6c-3d (Js Ts 3c 6c 3d)

BTN bets 14bb into 21.1bb. Answer by the solver's strategy and the EV of calling (Noam 2026-11-21): the solver calls 75%+ = Call, 25% or less = Fold; when it mixes, EV −0.5 to +0.5bb = Bluff-catch, more = Call, less = Fold. Source: TexasSolver (our solve); EV = both play the solver's strategy after the call. Draft for Noam and Uri.

| Group | Hands | Share | EV of a call | Solver continues | Answer |
|---|---|---|---|---|---|
| Two pair or better | A3s, K3s, 63s, 53s, 43s, 32s | 4.4% | +32.29bb | 100% | Call |
| Top pair | AJo, KJ, QJ, J8s, J7s, J5s, J4s, J2s | 10.7% | +26.52bb | 100% | Call |
| Second pair: AT, T9o, T8… | AT, T9o, T8, T7s, T6s, T5s, T4s | 38% | +1.94bb | 70.8% | Call |
| Third pair or lower: A6 | A6 | 2.3% | +0.37bb | 55.4% | Bluff-catch |
| Ace-high | A4s, A2s | 1.2% | +0.28bb | 26.9% | Bluff-catch |
| Second pair: KT, QT | KT, QT | 22.9% | -0.05bb | 50.9% | Bluff-catch |
| Third pair or lower: K6s, Q6s, 96s… | K6s, Q6s, 96s, 86s, 76s, 65s, 64s | 3.4% | -1.03bb | 36.4% | Fold |
| Pocket pairs under the top card | 99, 88, 77 | 7.4% | -1.29bb | 22.1% | Fold |
| Ace-high and worse | AQo, A9s, A8s, A7s, KQo, K9s, K8s, Q9 | 9.8% | -1.68bb | 8.3% | Fold |
