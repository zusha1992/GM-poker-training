# A♣7♦2♠ flop: BTN's equity buckets (GTO Wizard, screenshots from Noam, 2026-11-05)

BTN vs BB, single-raised pot, 100bb. Pot 5.5bb. BTN's options: check, or bet 33%, 50%, 75% or 125% of the pot.

## How BTN's range splits (all buckets)

| Bucket | Share of BTN's range |
|---|---|
| 90–100 | 3.7% |
| 80–90 | 22.2% |
| 70–80 | 3.5% |
| 60–70 | 8.7% |
| 50–60 | 7.8% |
| 25–50 | 51.5% |
| 0–25 | 2.6% |

The simple buckets: best hands 25.9%, good hands 20.1%, weak hands 30.4%, trash hands 23.7%.

## Bucket by bucket

### 90–100%
- **Hands:** AA, 77, 22, A7s, A7o, A2s (part of it).
- **Strategy:**

  | Check | 33% | 50% | 75% | 125% |
  |---|---|---|---|---|
  | 15% | 61.8% | 19.1% | 2.5% | 1.6% |

### 80–90%
- **Hands:** every top pair, AK down to A3, suited and offsuit, plus part of A2s.
- **Strategy:**

  | Check | 33% | 50% | 75% | 125% |
  |---|---|---|---|---|
  | 44.2% | 43.2% | 11% | 1.1% | 0.4% |

- **EV by kicker:** AK and AQ about 6.6 and 6.3bb, AJ–AT 6.0, A9–A8 5.0–5.6, A6–A3 about 4.6–4.9.

### 70–80%
- **Hands:** KK, QQ, JJ.
- **Strategy:**

  | Check | 33% | 50% | 75% | 125% |
  |---|---|---|---|---|
  | 87.1% | 12.3% | 0.6% | 0% | 0% |

- **EV:** KK 3.9bb, QQ 3.76, JJ 3.66.

### 60–70%
- **Hands:** TT, 99, 88, plus every 7x: K7s, Q7s, J7s, T7s, 97s, 87s, 76s, 75s and part of K7o.
- **Strategy:**

  | Check | 33% | 50% | 75% | 125% |
  |---|---|---|---|---|
  | 36.5% | 50.4% | 12.3% | 0.7% | 0% |

- **EV:** about 3.4–4.0bb (K7s 3.99, 88 3.42).
- **Note:** this bucket bets more than KK–JJ do (63% against 13%), even though its equity is lower.

### 50–60%
- **Hands:** 66, 55, 44 and 33; the 2x hands K2s and Q2s; and part of KQs, KJs and KQo (some of their combos only).
- **Strategy:**

  | Check | 33% | 50% | 75% | 125% |
  |---|---|---|---|---|
  | 57.3% | 39% | 3.4% | 0.1% | 0.1% |

- **EV:**

  | Hand | EV |
  |---|---|
  | K2s, Q2s | 3.3 and 3.18bb |
  | 66–33 | 2.77 down to 2.45bb |
  | KQs, KJs | 2.17 and 2.1bb |
  | KQo | 1.85bb |

### 25–50% (half of BTN's range)
- **Hands:** almost every hand with no pair:
  - K-high: KQ–K3 suited, KQo–K8o;
  - Q-high: QJs–Q3s, QTo, Q9o;
  - J-high: JTs–J3s, JTo–J8o;
  - lower: T9s, T8s, T6s, T5s, T9o, T8o, 98s, 98o, 96s, 86s, 85s;
  - part of 54s and 53s.
- **Strategy:**

  | Check | 33% | 50% | 75% | 125% |
  |---|---|---|---|---|
  | 48.8% | 39.1% | 10.5% | 1.1% | 0.5% |

- **EV:**

  | Hands | EV |
  |---|---|
  | Most of the bucket | 1.2–1.9bb |
  | Low connectors with backdoors (98s, 86s, 85s) | about 2.0bb |
  | Wheel gutshots 54s, 53s | 3.57 and 3.55bb, as much as 66–33 |

### 0–25%
- **Hands:** 65s and 64s, plus a few combos of T6s, T5s, 98s, 96s, 86s and 85s (those without a backdoor draw).
- **Strategy:**

  | Check | 33% | 50% | 75% | 125% |
  |---|---|---|---|---|
  | 52% | 34.3% | 10.6% | 2.1% | 1% |

- **EV:** 1.3–1.9bb.

## What it shows (2026-11-05)

### The flop bet doesn't separate the buckets
BTN bets small with the whole range. Every bucket puts in on average 0.2–1.9bb on the flop:

| Bucket | Average flop bet |
|---|---|
| 90–100 | 1.85bb |
| 80–90 | 1.15bb |
| 70–80 | 0.24bb |
| 60–70 | 1.28bb |
| 50–60 | 0.80bb |
| 25–50 | 1.07bb |
| 0–25 | 1.07bb |

So the flop strategy alone can't say how much a hand wants by the river.

### EV lines up exactly with Noam's boxes
Ordered by EV, every A72 flop group falls into Noam's boxes with clean cut-offs:

| Box | EV range | A72 flop hands |
|---|---|---|
| 50–100bb | EV above ~6.2bb | sets and two pair 8–14; AK, AQ 6.3–6.6 |
| 15–25bb | EV ~4.5–6.2bb | AJ–A8 5.0–6.0; A6–A3 4.6–4.9 |
| 5–15bb | EV ~3.4–4.5bb | KK–88 3.4–3.9; 7x 3.6–4.0 |
| 0–5bb | EV below ~3.4bb | 2x 3.2–3.3; 66–33 2.5–2.8; no-pair hands 1.2–2.1 |

- **The one exception: 54s and 53s.** Their EV is 3.57 and 3.55bb (a gutshot to the nuts), so by EV they would be 5–15bb, like 7x.
