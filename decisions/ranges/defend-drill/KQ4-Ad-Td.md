# Defend river · KQ4-Ad-Td (Kd Qd 4s Ad Td)

BTN bets 14bb into 21.1bb. Answer by the solver's strategy and the EV of calling (Noam 2026-11-21): the solver calls 75%+ = Call, 25% or less = Fold; when it mixes, EV −0.5 to +0.5bb = Bluff-catch, more = Call, less = Fold. Source: TexasSolver (our solve); EV = both play the solver's strategy after the call. Draft for Noam and Uri.

| Group | Hands | Share | EV of a call | Solver continues | Answer |
|---|---|---|---|---|---|
| Straight flush | AJo, KJo, QJo, JTo, J4s | 7.5% | +35.1bb | 100% | Call |
| Big flush | A9o, A8o, K9o, K8o, Q9o, 88 | 3.8% | +27.95bb | 100% | Call |
| Small flush | A7o, A6o | 0.4% | +25.44bb | 100% | Call |
| Two pair: AT | AT | 12.3% | +0.59bb | 76.2% | Call |
| Straight: A-high | AJo, KJ, QJ, JT, J4s | 27.6% | +0.47bb | 81.8% | Call |
| Two pair: AQo, A4 | AQo, A4 | 5.8% | +0.36bb | 64.7% | Bluff-catch |
| Top pair | A9, A8, A7, A6, A5o, A3s, A2s | 19% | -0.19bb | 37.4% | Bluff-catch |
| Two pair: KT, QT, T4s | KT, QT, T4s | 19% | -1.19bb | 19.8% | Fold |
| Second pair | K9o, K8o | 3.6% | -1.27bb | 1.2% | Fold |
| Third pair or lower | Q9o | 0.8% | -2.17bb | 0.6% | Fold |
