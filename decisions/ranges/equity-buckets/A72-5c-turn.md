# A♣7♦2♠ 5♣ turn: BTN's equity buckets (GTO Wizard, screenshots from Noam, 2026-11-05)

BTN vs BB after a small flop bet and a call. Pot 9.1bb, 95.7bb behind. BTN's options: check, or bet 33%, 50%, 75%, 125%, 175% or 250% of the pot (3, 4.55, 6.8, 11.4, 15.9 and 22.75bb).

## How BTN's range splits (all buckets)

| Bucket | Share of BTN's range |
|---|---|
| 90–100 | 6.3% |
| 80–90 | 14.5% |
| 70–80 | 9.9% |
| 60–70 | 2.1% |
| 50–60 | 8.6% |
| 25–50 | 17.9% |
| 0–25 | 40.6% |

The simple buckets: best hands 23.1%, good 18.3%, weak 12.2%, trash 46.3%.

## Bucket by bucket

### 0–25%
- **Hands:** the no-pair hands:
  - K-high: KJs, KTs, K9s, K8s, K6s, plus K4s and K3s (wheel gutshots); offsuit KJo, KTo, K9o, K8o;
  - Q-high: QJs, QTs, Q9s, Q8s, Q6s, plus Q4s and Q3s; offsuit QJo, QTo, Q9o;
  - J-high: JTs, J9s, J8s, J6s, plus J4s and J3s; offsuit JTo, J9o, J8o;
  - lower: T9s, T8s, T6s, T9o, T8o, 98s, 98o, 96s, 86s, plus part of 64s.
- **Strategy:** mostly checks. The bets are big, polar bluffs.

  | Check | 33% | 50% | 75% | 125% | 175% | 250% |
  |---|---|---|---|---|---|---|
  | 78.7% | 0.5% | 0.8% | 3.1% | 10.1% | 5.2% | 1.6% |

- **EV:**

  | Hands | EV |
  |---|---|
  | No draw | 0.4–1.2bb |
  | Wheel gutshots (K4s, K3s, Q4s, Q3s, J4s, J3s) | 1.55–1.71bb |
  | 98s, 98o, 96s | 1.94–2.06bb |
  | Open-enders 86s and 64s | 3.81 and 3.53bb |

### 25–50%
- **Hands:** two kinds.
  - **Draws: club flush draws and combo draws** (the club combos of the suited hands). They bet, big:
    - flush draws KJs, K9s, K8s, K6s, QJs, QTs, Q9s, Q8s, Q6s, JTs, J9s, J8s, J6s, T9s, T8s, T6s;
    - combo draws K4s, K3s, Q4s, Q3s, J4s, J3s, 98s, 96s, 86s, 64s, 54s, 53s.
  - **Weak pairs.** They check:
    - 5x: K5s, Q5s, J5s, T5s, 85s, 65s;
    - 2x: K2s, Q2s;
    - 66, 44, 33 and 76s;
  - **Part of KQs and KQo** as well (K-high, no draw; EV 1.84 and 1.46bb).
- **Strategy:**

  | Check | 33% | 50% | 75% | 125% | 175% | 250% |
  |---|---|---|---|---|---|---|
  | 74% | 0.2% | 0.4% | 2.5% | 12% | 7.4% | 3.5% |

- **EV:**

  | Hands | EV |
  |---|---|
  | Club flush draws | 3.0–4.8bb (K-high ones 4.4–4.8, J- and T-high 3.0–3.4) |
  | Combo draws | wheel ones K4s, K3s 5.7–5.8; Q4s, Q3s 4.8; J4s, J3s 4.5; 98s, 96s 4.4–4.5; 54s, 53s 4.1–4.2 |
  | Club open-enders 86s and 64s | 5.87 and 5.68bb |
  | Weak pairs | 3.1–3.8bb (2x 3.7–3.8, 5x 3.3–3.4, 66–33 3.1–3.5, 76s 3.69) |

### 50–60%
- **Hands:**
  - KK–88 (a sliver of KK and QQ, all of JJ, TT, 99, 88);
  - every 7x: K7s, Q7s, J7s, T7s, 97s, 87s, K7o.
- **Strategy:** they check, almost always.

  | Check | 33% | 50% | bigger |
  |---|---|---|---|
  | 98.9% | 1% | 0.1% | 0% |

- **EV:**

  | Hands | EV |
  |---|---|
  | KK–TT | 4.6–4.75bb |
  | 99, 88 | 4.57 and 4.28bb |
  | 7x | 3.9–4.2bb |

### 60–70%
- **Hands:** pairs with a draw.
  - The club combos of 7x (K7s, Q7s, J7s, T7s, 97s, 87s): middle pair plus a flush draw.
  - 76s: a pair plus an open-ender, and it mostly bets.
- **Strategy:**

  | Check | 33% | 50% | 75% | 125% | 175% | 250% |
  |---|---|---|---|---|---|---|
  | 75.8% | 2.4% | 2.7% | 7.8% | 5.5% | 4.9% | 1% |

- **EV:**

  | Hands | EV |
  |---|---|
  | 7x with a club | 6.0–7.4bb (K7s 7.36, 87s 5.99) |
  | 76s | 5.83bb |

  That's 2–3bb more than the same 7x without the draw (3.9–4.2).

### 70–80%
- **Hands:** the weak and medium top pairs, mostly (some combos only): A9, A8, A6, A4 and A3, suited and offsuit.
- **Strategy:** they check, almost always.

  | Check | 33% | 50% | bigger |
  |---|---|---|---|
  | 98.2% | 0.7% | 1% | 0% |

- **EV:** 6.1–7.3bb (A9 7.2–7.3, A8 6.6–6.7, A6 6.1, A4 and A3 6.4–6.5).

### 80–90%
- **Hands:**
  - top pair, good kicker: AK, AQ, AJ, AT (suited and offsuit);
  - two pair: A5 (suited and offsuit), A2s and 75s.
- **Strategy:**

  | Check | 33% | 50% | 75% | 125% | 175% | 250% |
  |---|---|---|---|---|---|---|
  | 55.4% | 1.1% | 2% | 9.1% | 25.6% | 6.6% | 0.2% |

- **EV:**

  | Hands | EV |
  |---|---|
  | AK, AQ | 8.7–8.8bb |
  | AJ | 8.4bb |
  | AT | 7.8–7.9bb |
  | A5 | 10.7bb |
  | A2s | 9.6bb |
  | 75s | 9.7bb |

### 90–100%
- **Hands:** sets AA, 77, 55, 22, and two pair A7 (suited and offsuit).
- **Strategy:** they bet, and big.

  | Check | 33% | 50% | 75% | 125% | 175% | 250% |
  |---|---|---|---|---|---|---|
  | 5.9% | 1.1% | 1.9% | 8.1% | 39.3% | 28.8% | 14.8% |

- **EV:**

  | Hands | EV |
  |---|---|
  | Sets | 15.2–18.3bb |
  | A7 | 12.1–12.2bb |

## Decisions (2026-11-05, Noam: "do the same for the turn")

### Cut-offs
The flop cut-offs, scaled by the pot (9.1bb / 5.5bb = ×1.65):

| Box | EV |
|---|---|
| 50–100bb | above ~10.3bb |
| 15–25bb | ~7.4–10.3bb |
| 5–15bb | ~5.6–7.4bb |
| 0–5bb | below ~5.6bb |

What each bucket puts in on the turn, on average (from its strategy):

| Bucket | Average turn bet |
|---|---|
| 90–100 | 13.1bb |
| 80–90 | 4.8bb |
| 60–70 | 2.4bb |
| 25–50 | 3.5bb (the draws bet, the weak pairs check) |
| 0–25 | 2.6bb (polar bluffs) |
| 70–80, 50–60 | almost nothing |

### By group

| Group | Solver EV | Box | Change |
|---|---|---|---|
| Sets & two pair | sets 15–18, A7 12, A5 10.7, A2s and 75s 9.6–9.7 (average ~12) | **50–100bb** | was 15–25bb (Noam earlier: "they go down on a wet turn"). The solver bets them 125–250% pot 83% of the time. |
| AK, AQ | 8.7–8.8 | 15–25bb | same |
| AJ–A8 | AJ 8.4, AT 7.8, A9 7.2, A8 6.6 (average ~7.5) | 5–15bb | same, on the edge: A9 and A8 check 98% |
| A6, A4, A3 | 6.1–6.5 | 5–15bb | same |
| **Pair + draw** *(new)*: 7x with a club, 76s | 5.8–7.4 | **5–15bb** | new group; was in 7x at 0–5bb |
| KK–88 | 4.3–4.75 | 0–5bb | same; they check 99% |
| 7x with no draw | 3.9–4.2 | 0–5bb | same |
| 66, 44–33, 5x, 2x | 3.1–3.8 | 0–5bb | same |
| Strong draws (club flush and combo draws) | 3.0–5.9 (average ~4.3) | 5–15bb | same |
| Straight draws, K-high no draw, Trash | 0.4–3.8 | 0–5bb | same |

**Strong draws:** their EV is below the 5–15bb cut-off, but they're the hands that bet big as semi-bluffs, about 3.5bb on average on the turn. Noam: "they have incentive to build the pot." So they stay at 5–15bb.
