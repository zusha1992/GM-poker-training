# Defend river · T87-As-6s (Th 8h 7s As 6s)

BTN bets 14bb into 21.1bb. Answer by the solver's strategy and the EV of calling (Noam 2026-11-21): the solver calls 75%+ = Call, 25% or less = Fold; when it mixes, EV −0.5 to +0.5bb = Bluff-catch, more = Call, less = Fold. Source: TexasSolver (our solve); EV = both play the solver's strategy after the call. Draft for Noam and Uri.

| Group | Hands | Share | EV of a call | Solver continues | Answer |
|---|---|---|---|---|---|
| Big flush | KJs, KTs, K8s, K5s, K4s, K3s, K2s, QJs, QTs, Q8s, JTs, J8s | 3.1% | +34.93bb | 100% | Call |
| Small flush | T8s, T5s, T4s, T3s, 98s, 85s | 1.8% | +34.74bb | 100% | Call |
| Straight: T-high | A9, T9o, 98, 97s | 16.4% | +24.42bb | 100% | Call |
| Two pair | AT, A8, A7, A6, T8, T7s, T6s, 87, 86s, 76s | 28.3% | +0.7bb | 81.8% | Call |
| Top pair | AQo, AJo, A4s, A3s, A2s | 15.4% | -0.05bb | 51.6% | Bluff-catch |
| Second pair | KT, QT, JT, T5s, T4s, T3s | 17.9% | -0.19bb | 26.4% | Bluff-catch |
| Third pair or lower | K8s, K7s, Q8s, Q7s, J8s, J7s, 85s, 75s, 74s, 65s, 64s | 14.7% | -1.08bb | 4.9% | Fold |
| King-high and worse | KJ | 2.4% | -8.38bb | 9.8% | Fold |
