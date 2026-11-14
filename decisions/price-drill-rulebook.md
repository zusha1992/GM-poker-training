# "How many big blinds?" drill: the rulebook

This is a living document. It holds every rule for splitting BTN's range into hand groups and deciding what each group is worth. Every piece of feedback from Uri or Noam becomes a rule here, and every new board is built from it. The code that follows it is `src/lib/drill/postflop/price-hands.ts`.

**Status:** draft rules and draft answers. Uri is the final authority (see [Uri: poker authority](../CLAUDE.md)). Rules marked *(Uri)* or *(Noam)* came from them. Rules marked *(draft)* are Claude's proposals and wait for review.

---

## 0. Split into Flop, Turn and River drills *(Noam & Uri, 2026-11-10)*

The full-hand drill is split into three smaller drills, one per street. The **Flop** drill is built first. Turn and River are in the lobby as "Coming soon". The old full-hand drill stays playable as "Full hand (old)". Everything below section 0 is the old drill's rules.

The Flop drill's rules:
- **Spot:** BTN opens, BB calls, one of the 11 flops.
- **Asked:** only made hands. Ace-high with no draw is the weakest group asked; everything else is a pair or better. Draws, backdoor draws and K-high or worse are not asked.
- **Groups and boxes come from equity, not from the solver's strategy** *(Noam)*. The solver's lines mix sizes (bet big then check twice, and so on), so they don't show the pot a hand wants. Each hand gets its equity against a ladder of BB ranges:

  | Level | BB range |
  |---|---|
  | L0 | BB's whole range |
  | L1 | BB after calling a flop bet (from the solver) |
  | L2 | BB's middle pair or better |
  | L3 | BB's top pair or better |

  Its box is the biggest one whose test it passes:

  | Box | Test |
  |---|---|
  | 50–100 | L3 ≥ 50% |
  | 25–50 | L2 ≥ 50% |
  | 15–25 | L1 ≥ 60% |
  | 5–15 | L1 ≥ 50% |
  | 0–5 | L0 ≥ 50% |
  | Pot is too big | fails every test |

  The levels and percentages are draft settings, tuned so that A72 lands close to Noam's checked answers.
- **Groups:**
  - Inside a box, hands are split at the biggest equity gaps, so a group never straddles two boxes.
  - Two pair is never grouped with one-pair hands below the best one; it goes up to the top-kicker group *(Noam, A72 and K54)*.
  - Pairs below top pair are ordered by the pair's rank, e.g. on J♠T♠3♣: 99–77, then 66–44, then 3x *(Noam)*.
  - A7s and A7o are one hand.
  - No group of one hand.
### Flop principles from Noam's review of A♣7♦2♠ and J♠T♠3♣ *(Noam, 2026-11-11)*

After this review, a board's groups are Noam's own, and they replace the computed ones. The equity is still shown when a group is tapped. These principles carry over to new boards as a draft that Noam then plays and corrects:

| # | Principle | A♣7♦2♠ (dry) | J♠T♠3♣ (wet) |
|---|---|---|---|
| 1 | **Sets** go for stacks. | AA, 77, 22: 50–100 | JJ, TT, 33: 50–100 |
| 2 | **Two pair is never with one-pair hands.** On a dry board it goes with the sets; on a wet board it's its own group. Two pair and better go for stacks. | A7, A2 with the sets | JT alone: 50–100 |
| 3 | **Overpairs** are their own group, apart from top pair. | — | AA–QQ: 50–100 |
| 4 | **Top pair splits in two:** good kickers and weak kickers. | AK–AT: 50–100 · A9–A3: 15–25 | AJ, KJ, QJ: 25–50 · J9–J7: 15–25 |
| 5 | **Top pair, good kicker** goes for stacks on a dry board, but only for a big pot (25–50) on a wet one. | | |
| 6 | **Pocket pairs between the top two cards** are their own group: 5–15. | KK–88: 5–15 | — |
| 7 | **Second pair is one group whatever the kicker:** 5–15. | All 7x: 5–15 | All Tx: 5–15 |
| 8 | **Small pairs** (pocket pairs below the second card plus bottom pair) are one group at 0–5, **never "Pot is too big"**. | 66–33, K2: 0–5 | 99–44, 22, 3x: 0–5 |
| 9 | **Ace-high** with no real draw is asked. A backdoor doesn't count as a draw, so A5 or A4 on J♠T♠3♣ are ace-high; AK and AQ there are gutshots, so they're draws and not asked. **On a dry board, or one without many draws, ace-high is never Pot is too big:** in a single-raised pot it can be good, and AQ–AT take one bet of value (0–5). Pot is too big only on wet, connected boards. On K♠5♥4♣ (rainbow): AQ–AT 0–5, A9–A6 0–5. | — | A9–A4, A2: Pot is too big |
| 10 | **Every group has a name in words** under the cards ("Second pair", "Small pairs"); the hands show when it's tapped. | | |
| 11 | **Two pair goes for half a stack, not stacks, when a straight or a flush can already be made on the flop** (Noam 2026-11-12, 9-8-6). Boards: 9-8-6, K-Q-T, T-8-7. | 98, 96, 86 on 9-8-6: 25–50 | — |

Which boards count as dry or wet is still Noam's call per board: K♠5♥4♣ is treated as connected, so like a wet board, from his earlier note.

### Turn drill, first version *(Noam, 2026-11-12)*

The same principles as the flop, one street later. The answers are drafts for Noam and Uri to play and correct, board by board.

- **Spot:** BTN opens, BB calls; BTN bets the flop small (1.8bb), BB calls. The pot is 9.1bb, 95.7bb behind. Every flop has its three turns from the old full-hand drill, so there are 33 turns.
- **Asked:** made hands only, ace-high and better; no draws. A pair with a draw is asked as a pair.
- **Equity ladder, moved up a street:**

  | Level | BB's range on the turn |
  |---|---|
  | L0 | BB's range after calling the flop (solver) |
  | L1 | BB after calling a turn bet (solver) |
  | L2 | BB's middle pair or better |
  | L3 | BB's top pair or better |

  The box tests are the same as on the flop.
- **Groups:** Noam's flop principles, applied to the 4-card board. A turn that makes a straight or a flush possible makes the board wet (principle 11 then puts two pair at 25–50). Flop notes for one board are not carried to its turns.
- **Code:** `npx tsx scripts/analysis/flop-equity-groups.ts --turn` writes `src/lib/drill/postflop/turn-groups.ts` and `decisions/ranges/turn-equity/<spot>.md`.

#### Turn review, turn by turn *(Noam, 2026-11-13)*

Each note changes only its own turn. When Noam has finished, the notes that look general will be proposed for the other turns.

**Principle (Noam, 2026-11-13, "very important"):** BB's calling range gets smaller and stronger street by street, so on the turn **one pair doesn't go for the whole stack yet**. Whether a hand like AK (top pair) goes for stacks is decided only on the river. Sets and two pair are different: by this point they are way ahead, so they can still go for stacks on the turn. **Applied to all 33 turns (2026-11-13, Noam: "take this review and see what you can change on the other turns"):** overpairs and top pair are capped at 25–50 on every turn.

**Wet turns like A♣7♦2♠ 6♦** (Noam: "very wet, brings in the flush draw and the straight draw, so it's not like other turns"). A wet turn makes a flush possible, or it brings a flush draw (the flop had one card of its suit) and lands within two ranks of a flop card (an ace doesn't count). There are 13: 886-7s, 962-8d, 986-7s, A72-5c, A72-6d, A76-8h, JT3-9s, K54-3s, KQ4-Ad, KQT-Jd, QT7-5d, QT7-Jh, T87-9h. On them:
- Second pair (or medium pairs & second pair) goes to **0–5**.
- Top pair splits at the J: AK–AJ (or KA–KJ) are the good kickers, and the T goes down with the weak ones.

**Turns where a flush AND a straight are possible** (Noam, 2026-11-13, on 9♦6♦2♥ 8♦; applied to all five: 962-8d, JT3-9s, T87-9h, A76-8h, KQ4-Ad). BB has called the flop, so:
- "The two pair... has to go down dramatically... between 15 and 25, and that's it." Two pair → **15–25**.
- "Top pair... is not worth more than 0 to 5", and the same for top pair, top kicker "or something very strong one pair". Top pair (one group there), overpairs without a flush draw, and big pocket pairs → **0–5**.
- "Over pair with the flush draw is worth way more than the over pairs without the flush... separate groups." Overpairs holding one card of the flush suit are their own group, at **15–25**. *(15–25 is my pick: way above 0–5, but not above two pair. Noam to confirm.)*
**K♦Q♦4♠ 8♠** (Noam, 2026-11-13, reviewed and locked). "Double flush draw... extremely wet and dangerous board."
- "Aces and Ace King want to go for bigger pots than Ace Jack and Ace 10." AA and AK are one group at **25–50**; KJ and KT at **15–25**.
- "The weak top pair on the turn would not want to go more than 15 big blinds extra... we don't want to isolate ourselves versus big blind's strongest range." Weak top pair → **5–15**.
- Applied to the other turns:
  - On every turn with two flush draws (962-Qh, JT3-6c, T87-As), the overpairs and top pair, top kicker go together at 25–50, and the other good kickers go to 15–25.
  - On every turn, weak top pair is capped at 5–15.

**Q♥T♦7♠ J♥** (Noam, 2026-11-13, reviewed and locked). "A flush draw and a few possibilities of straights."
- "Aces and kings are not a strong hand on this board... I don't think putting 50 big blinds in will ever be good for this hand." AA, KK → **15–25**.
- Top pair, good kicker: "maybe KQ and AQ could go to 15–25 but not more than that." AQ, KQ → **15–25**. Weak top pair 5–15.
- Applied to the other turns that bring a flush draw with a straight already possible (886-7s, 986-7s, A72-5c, K54-3s): overpairs and top pair, good kicker → 15–25.

**9♦6♦2♥ 2♣** (Noam, 2026-11-13, reviewed and locked). "A9 cannot be together with T9, J9 and Q9. Maybe A9 and K9 can go together, but Q9, J9 and T9 will go to different sizes for sure."
- A9, K9 at **25–50**; Q9, J9 at **15–25**; T9 down with 98 and 97 at **5–15**. *(The boxes for Q9/J9 and T9 are my pick, following his split at the J on A♣7♦2♠ 6♦.)*
- Applied to every other turn where top pair was at 25–50 (except the two-flush-draw turns, which have their own rule): only the two best kickers stay at 25–50. Other kickers from the J up go to 15–25, and the T and below go to the weak kickers at 5–15. Hands only ever move down.

**8♠8♦6♣ J♦** (Noam, 2026-11-13, reviewed and locked). "Nines and tens don't want to put in any more money: 0 to 5." (He wasn't fully sure, then: "Yeah, I think so.") TT, 99 → **0–5**.
- Applied to the other turns where the turn is an overcard that turns the flop's overpairs into pocket pairs under it: 986-Kd (QQ–TT), 962-Qh (JJ, TT), T87-As (KK–JJ), all 5–15 → **0–5**.

**T♥8♥7♠ 2♦** (Noam, 2026-11-14, from his phone, reviewed and locked). "AT, KT, top pair top kicker and king kicker, is not worth more than 25 more big blinds on a board where there are straights." Top pair, top kicker (AT, KT) 25–50 → **15–25**.
- Applied to the other turns: with a straight possible on the 4-card board, top pair at 25–50 → **15–25** (overpairs not touched). Changed: 986-2h (A9, K9), 986-Kd (AK, KQ), KQT-3s and KQT-7c (AK, KJ), T87-As (AK).

**Pot on screen** (Noam, 2026-11-13): the drill shows the pot under the board ("Pot 9.1bb, after a 33% flop bet and call, 95.7bb behind"), so the player can see each box against the pot.

- "Top pair needs to have the same thing, plus the flush draw or without the flush draw" (Noam, 2026-11-13). On these five turns top pair is split too: **with a flush draw 5–15**, without 0–5. *(5–15 is my pick: above top pair without, below overpairs with a flush draw.)*
- The card fan follows the suits on these turns: a "with a flush draw" group shows a card of the suit, and every other group shows none.

- Fix found on the way: a pair holding one card of the flush suit used to be filed as a draw, so it wasn't asked at all on these five turns. Now it is asked as the pair it is.

| Turn | Note | Change |
|---|---|---|
| A♣7♦2♠ **6♦** | "Second pair is not worth more than five... we don't want to isolate our second pair against better hands." | Second pair (K7–75): 5–15 → **0–5** |
| A♣7♦2♠ **6♦** | "Top pair good kicker... between 25 and 50, and then on the river we decide if it makes sense to shove; on the turn it's still not aiming for everything, especially not when AT and AK are in the same group." | Top pair, good kicker (AK–AT): 50–100 → **25–50** |
| A♣7♦2♠ **6♦** | "Ace King, Ace Queen, Ace Jack, but then Ace 10, Ace 9, Ace 8 will be with Ace 5, Ace 4, Ace 3." | Top pair split at the J: **AK–AJ 25–50**, **AT–A8, A5–A3 15–25** |

- **Code:**
  - `scripts/analysis/flop-equity-groups.ts` writes `src/lib/drill/postflop/flop-groups.ts`. Reviewed boards are the `REVIEWED` list in it.
  - Readable reports per board are in `decisions/ranges/flop-equity/`.
  - Feedback on a board changes only that board (section 3, "Board by board").

### River drill, first version *(Noam, 2026-11-14: "the same as the flop and the turn ... BB's range is stronger on the river ... which hands want to go for stacks ... the river card changes the board or is a brick")*

- **Spot:** BTN bets the flop small (1.8bb), BB calls; BTN bets the turn (66%, 6bb, or the overbet, 13.7bb, as the turn already had), BB calls. Each turn has two rivers, a brick and one that changes the board: 33 × 2 = 66 rivers ("A72-Qh-9c"). The pot is 21.1bb (89.7 behind) or 36.5bb (82 behind).
- **Asked:** made hands, ace-high and better. There are no draws on the river; busted draws and trash aren't asked.
- **The river ladder** (BB's ranges come from our river solves, `river-call-ranges.ts`):

  | Level | BB range |
  |---|---|
  | L0 | BB after calling the turn bet |
  | L1 | BB's calls of a 66% river bet |
  | L2 | BB's top pair or better among those calls |
  | L3 | BB's calls of an all-in: who pays off a shove |

  The tests are the same as on the flop and turn: 50–100 (stacks) if L3 ≥ 50%, 25–50 if L2 ≥ 50%, 15–25 if L1 ≥ 60%, 5–15 if L1 ≥ 50%, 0–5 if L0 ≥ 50%, else Pot is too big. *(Why L3 is the all-in call: against everything BB brings to the river, AJ goes for stacks on A♣7♦2♠ Q♥ 9♣; against the hands that call a shove it doesn't.)*
- **Groups:** the turn's groups by Noam's principles (sets, two pair, top pair by kicker, pairs by rank). The turn-only caps don't apply ("the river decides"): each hand's box is its own equity. A group whose hands land in different boxes splits; a lone hand joins its group's part one box away, or stays alone. Two groups of one kind side by side in one box merge ("Top pair"). On a flush river the flushes are named apart: "♣ flushes: KQ–K7".
- **River review, river by river:**
  - **A♣7♦2♠ 5♣ 6♣** (Noam, 2026-11-14, reviewed and locked). "Top pair: not good to put more money in, 0–5 is good." Top pair (AK–AT were 50–100, A9–A3 Pot is too big) → **0–5**. "Same for two pair on that board: not good enough for stacks, not good enough for 50bb more; 15–25." Two pair → **15–25**. Noam called top pair going in on a flush-and-straight board "a very bad error". The first version had switched off the turn's caps on the river, so these hands were boxed by equity against BB's all-in callers alone.
  - Applied to every river with a flush and a straight possible (32 rivers): top pair and overpairs at most **0–5**, two pair at most **15–25**, the same as the turn rule.
  - From the T♥8♥7♠ 2♦ turn note (top pair no more than 25 with straights possible): on every river with a straight possible, top pair and overpairs are capped at **15–25** (11 more rivers had them at 25–50 or 50–100, e.g. K3 at 50–100 on 9♠8♦6♣ 2♥ K♣).
  - **J♠T♠3♣ 2♥ 3♦** (Noam, 2026-11-14, reviewed and locked). "J9, J8 and J7 definitely want to check back and don't want to put in more money: 0–5 is the right answer." Top pair, weak kicker (J9–J7, were 25–50) → **0–5**.
  - Applied to every river: top pair with a weak kicker is **0–5** on the river (on the turn it was capped at 5–15).
  - Same river: "44–99: 0–5" (were Pot is too big). Applied to every river: **any pair checks back, so 0–5 at least, never Pot is too big**; only ace-high with no showdown value can be Pot is too big. (On this board second pair AT–T8 beats 99, so it moves to 0–5 too.)
  - Same river: "AJ, KJ and QJ are worth 25–50, not the whole stack" (were 50–100). Applied to every **paired river** (BB can have trips and full houses): top pair is capped at **25–50**. Not to every river: the A72 rule (AK gets the stacks in by the river on a dry board) stands. Overpairs (AA–QQ at 50–100) not mentioned, so not changed.
  - Same river: "No way AA, KK and QQ are worth the same pot size as AJ." Applied to every river: **an overpair is never in a lower box than top pair**.
  - The caps (flush and straight → 0–5, straight → 15–25, paired → 25–50) cover every one-pair group, not just the ones named top pair or overpair. **A pair below top pair is never in a higher box than top pair** (9♠8♦6♣ 2♥ K♣ had QQ–TT and A9 at 50–100 over AK at 15–25: BB's all-in calls there are only a handful of hands).
- **Every other river is still a draft.** Noam's notes go in `BOARD_NOTES` under the river's name, and the river gets locked (`REVIEWED_RIVERS`), as on the turn.

---

## 1. The spot and the question

- Single-raised pot, BTN vs BB, 100bb deep. The player is BTN, the aggressor. *(doc, 2026-10-28)*
- The question for every group: **what is it worth from here**, assuming the rest of the board bricks. It's always "how much more", never the total. *(Noam)*
- Bet sizes are never asked. Only the money each group wants. *(Noam)*
- Between streets, BTN bets and BB calls. The flop bet is always small (1.8bb). The turn bet depends on the card (section 2b). Pots: 5.5bb on the flop, 9.1bb on the turn, then about 36bb on the river after an overbet turn or about 21bb after a 66% turn. The player sees the pot, the stack behind and the bet size. *(draft numbers)*

## 2. The five boxes *(Noam, 2026-11-05)*

**The boxes are big-blind ranges: 0–5bb, 5–15bb, 15–25bb, 25–50bb and 50–100bb.** That's every possibility. Names like "small pot" or "stacks" were too abstract.

*Older rules below may use the old names. Read them like this:*
- Zero, Tiny pot, potential bluff, showdown value → **0–5bb**
- Small pot, 5% → **5–15bb**
- Medium pot, 20% → **15–25bb**
- Big pot, 50% → **25–50bb**
- Stacks, 100%, all-in → **50–100bb**

**The drill only asks how much money a group is worth** *(Noam and Uri, 2026-11-02)*. Bluffing, protection and draws are not part of the question. A draw adds nothing to a hand's worth here. The box is about where the money ends up by the river, not how many bets go in.

Layout *(Noam, 2026-11-05)*: five neon paddles in one design (Arkanoid-style), different colors, in an arc over the drop area like a gauge, small to big from left to right:
- 0–5bb on the left side;
- 5–15bb in the top-left corner;
- 15–25bb in the top middle;
- 25–50bb in the top-right corner;
- 50–100bb on the right side.

**Sixth box: "Pot is too big"** *(Noam, 2026-11-07)*, under 0–5bb, on every street from the flop. With six boxes the layout is symmetric, three on each side *(Noam, 2026-11-07)*. The two ends sit on the sides, Pot is too big on the left and 50–100bb on the right. The rest go in the corners: 0–5bb top-left, 5–15bb bottom-left, 15–25bb top-right, 25–50bb bottom-right.
- **0–5bb** is showdown: the hand wants a small pot and checks it down.
- **Pot is too big** is a made hand with almost no showdown value. The pot is already bigger than it can handle, so it's a hand that could bluff. Whether the solver bets it doesn't matter: the drill only says the pot is too big.
- **From the solver, turn and river:** a made hand that wins back under **15% of the pot** (solver EV). Started on 9♠8♦6♣; **on every board since 2026-11-08 as a draft**, to review board by board *(Noam)*. It's for trash and for hands with basically no showdown value left, even made hands: small pairs under the board, bottom pairs, and on very scary rivers even overpairs, top pair or two pair.
- **On the flop** almost nothing goes there, because any small pair still has equity with two cards to come. Example: 22 on 9-8-6 · 7 · J.

The paddle the piece is near lights up, and it flashes when the piece lands.

## 2b. Bet sizes between streets *(Noam, 2026-10-30)*

- Flop: a small bet and a call.
- Turn: depends on the card. On a **brick turn (good for BTN), BTN overbets** (polar). On a **wet turn (completes a straight or flush, or helps BB), BTN bets about 66–75%**.
- **The bet size changes nothing in the answers** *(Noam, 2026-10-31)*. The amounts are estimates of what each hand wants; the turn size (overbet or 66%) is extra information for the player, shown on screen, nothing more. *(This replaces an earlier draft rule that made every one-pair hand except the very top "check back" on a polar overbet turn.)*
- The screen always shows the bet: a badge under the board ("Turn: OVERBET · polar" or "Turn: 66% bet"), and on the river what the turn was.

## 2c. How many bets a hand is worth *(Noam, 2026-10-30)*

- **The drill asks what each hand wants, whatever the bet size.** The turn size (overbet or 66%) is shown as information; every group is still asked.
- **Top pair is worth about 20% on the flop and, on a brick turn, another 20%; that is its last bet, then showdown** *(Noam, 2026-10-31, from his notes on J♠T♠3♣)*. This holds even on a dynamic board like J♠T♠3♣, assuming the runout bricks.
- **Any ace (top pair on an ace-high board) is worth two small bets:** small on the flop, then a second bet. On a 66% turn the second bet goes in on the turn. So A6–A3 are 20% on the flop, like AJ–A8.
- **Pocket pairs under an ace (KK–88 on A72) are worth one small bet:** 5% on the flop, then check down (showdown value) on the turn and river, unless they improve. Two bets with them is borderline. Bet sizes come in a few fixed sizes, and with only "bet 66%" or "check" on the turn, they check.

## 3. How the range is split into groups

**Core rule *(Uri)*: a group only holds hands of the same strength.** If two kinds of hand are clearly different in strength, they're two groups.

Every hand goes into exactly one group, checked from the top down. Groups are recalculated on every card, and hands never leave the matrix.

| # | Group | Rule |
|---|---|---|
| 1 | Straight+ | Straight or flush using a hole card, full house, quads |
| 2 | Sets & two pair | Sets, trips, two pair (both hole cards pair the board) |
| 3 | Overpairs | Pocket pair above the top card |
| 4 | Top pair, good kicker | Kicker ≥ the board's *good* cutoff |
| 5 | Top pair, medium kicker | Kicker ≥ the *medium* cutoff *(Noam: on A72, AK–AQ are the strong kickers, AJ–A8 medium, A6–A3 weak)* |
| 6 | Top pair, weak kicker | The rest of top pair |
| 7–9 | Pocket pairs below the top card | Split by **how many board cards sit above them**: one card, two cards, three or more. *(Uri: on A72, KK–88 and 66–33 are different strengths.)* |
| 10 | Second pair | A hole card pairs the second-highest board card |
| 11 | Lower pairs | A hole card pairs a lower board card |
| 12 | No pair, showdown | Highest card ≥ the board's **showdown cutoff** *(Uri/Noam: K-high on A72)* |
| 13 | No pair, the rest | Everything else |

### Made hands are always the player's call *(Noam, 2026-11-05)*
- **Straights, flushes and full houses are never filled in automatically.** "That's a very important group: the user needs to decide where to put it." This holds on every board and runout.
- **Groups:** Full houses+ (with quads), Flushes and Straights, each its own group whenever it shows up.
- **Trips** (one hole card with the pair on the board, e.g. A8 on 8♠8♦6♣) are their own group too, and also the player's call. *(Noam, 886)*
- **Draft boxes:**
  - full houses and flushes: 50–100bb;
  - a straight: 50–100bb, but 25–50bb when three cards of a suit are on the board;
  - trips follow sets and two pair.
- **High and low flushes, on every board with no pair on it** *(Noam, 2026-11-08)*:
  - **High flushes:** made with one of the three highest cards of the suit still out (and any straight flush). Worth **50–100bb**: they go for stacks.
  - **Low flushes:** every other flush. Worth **25–50bb**: a big pot, but not all the money.
  - This wins over the solver's answers. On a **paired board** full houses are possible, so flushes stay one group with their old answer.
  - On screen a flush always appears in its suit (and "pair + a ♠" shows the ♠). **Every other group shows mixed suits**, two different suits per hand, changing from hand to hand: "5x" is any 5x, so it must never look like spades *(Noam, 2026-11-08, K54)*.

### A pair on a flush turn *(Noam, 2026-11-05, from Uri on J♠T♠3♣ 9♠)*
- **Only when the flush is on the board** (three cards of a suit) **on the turn:** a fourth card of that suit can still come.
- **Two groups:**
  - **"Pair + a ♠"**: one pair plus a card of the suit. It can still improve to a flush, so it bets more: **5–15bb** *(draft)*.
  - **Every other pair**: it can't make a flush, so it doesn't bet any more: **0–5bb**.
- **Every street sorts the hands again.** A hand that improves (to a flush on the river, for example) goes straight to its stronger group and wants a bigger pot, and a hand that gets worse goes down. *(Noam)*

### Strong draws by equity *(Noam, 2026-11-05; on A♣7♦2♠ only for now, to see how it behaves)*
- **Noam:** "In reality you have very strong draws that have incentive to build the pot," especially combo draws and bluffs with equity.
- **Equity** is calculated against BB's range, with BTN's hands sorted into the drill's groups:
  - **BB's preflop range** is Noam's solver chart for BB defending against a BTN open (`decisions/ranges/defend/BB-vs-BTN.txt`, pixel-measured). Only the calls count, since the 3-bets leave the single-raised pot.
  - **After each bet, BB's range is an estimate:**
    - after the flop bet: pairs, real draws and half of the backdoor draws, A-high and K-high;
    - after the turn bet: the top two pairs, half the weaker pairs, real draws and half of the A-high.
- **A72 equities:**

  | Draw | Flop | Q♥ turn | 6♦ turn | 5♣ turn |
  |---|---|---|---|---|
  | Backdoor straight | 41% | | | |
  | Backdoor flush | 37% | | | |
  | Combo draw | | | 33–43% | 38–41% |
  | Flush draw, K-high or better | | | 40% | 42% |
  | Flush draw, lower | | | 36% | 34% |
  | Open-ended straight draw | | | 26% | 25% |
  | Gutshot | 32% | 31% | 20% | 23% |

- **Rule, as a draft:** on the turn, **flush draws and combo draws** are their own group, **"Strong draws"**, worth **5–15bb**. Straight draws without a flush draw stay at **0–5bb**. On the flop, every draw is still "Can improve" at 0–5bb: all are under about 40%, and BTN bets small with the whole range.
- The other boards are unchanged until Noam has looked at A72.

### The solver's EV decides the box *(Noam, 2026-11-05, first on the A♣7♦2♠ flop)*
- **Source:** Noam sent GTO Wizard's seven equity buckets for the A72 flop (data in `decisions/ranges/equity-buckets/A72-flop.md`).
- **The flop bet can't decide the box:** BTN bets small with the whole range, and every bucket puts in only 0.2–1.9bb on the flop.
- **But the solver's EV per hand lines up exactly with Noam's boxes:**

  | Box | EV |
  |---|---|
  | 50–100bb | above ~6.2bb |
  | 15–25bb | ~4.5–6.2bb |
  | 5–15bb | ~3.4–4.5bb |
  | 0–5bb | below ~3.4bb |

- **Noam: "make the decisions for me" on this flop.** Every answer stayed the same, except:
  - **54s and 43s**, the real draws (gutshots to the wheel, a straight that would be the nuts), have EV about 3.6bb, like 7x. They now form their own group at **5–15bb**.
  - The backdoor draws stay in "Can improve" at 0–5bb (EV 1.2–2.1).
- **Plan for other boards:** the same screenshots, then the box from each group's EV with these cut-offs, then Noam corrects the exceptions.
- **A72 · 5♣ turn** (data in `decisions/ranges/equity-buckets/A72-5c-turn.md`). On later streets the cut-offs scale with the pot: on the turn, ×1.65, so 50–100bb above ~10.3bb EV, 15–25bb 7.4–10.3bb, 5–15bb 5.6–7.4bb.
  - **Sets and two pair → 50–100bb** (was 15–25bb from Noam's earlier call). The solver bets them 125–250% pot 83% of the time, with EV about 12bb.
  - **New group, "Pair + draw" (5–15bb):** a pair below top pair with a flush draw or an open-ender, e.g. 7x with a club and 76s. EV 5.8–7.4bb, 2–3bb above the same pair alone.
  - **Everything else stayed:**
    - AJ–A8 at 5–15bb is on the edge: AJ and AT bet, while A9 and A8 check 98%.
    - The strong draws stay at 5–15bb: their EV is lower, but they're the hands that bet big as semi-bluffs.
- **A72 · 5♣ · K♥ river, from the solver's equity per hand** (`decisions/ranges/equity-buckets/A72-5c-Kh-equity.md`):
  - **sets and two pair → 50–100bb** (90–100% equity); everything else stayed;
  - **hands missing from the solver's range are placed by strength** *(Noam)*: KK with the sets, QQ–TT with 99 and 88, 43s with the straights;
  - **equity alone is enough on the river.** On the flop and turn it misses the nut draws and the betting behaviour, so those streets need the strategy or EV screenshots.
- **The other A72 runouts, from the solver's equity per hand** (`decisions/ranges/equity-buckets/A72-other-runouts-equity.md`):
  - **The Q♥ and 6♦ turns:** equity is in the same order as Noam's boxes, so no change.
  - **The rivers use the river cut-offs:** 90%+ is 50–100bb, about 80%+ is 15–25bb, 64–80% is 5–15bb, and under about 60% is 0–5bb. That gives:
    - **Q♥ · 9♣:** AK 25–50 → **5–15bb** (73%), and AJ, AT, A8 0–5 → **5–15bb** (62–71%);
    - **6♦ · K♠:** AQ 25–50 → **5–15bb** (78%; the K makes AK two pair).
  - **The other rivers** (Q♥ K♦, 6♦ 8♦, 5♣ 6♣) match.
  - **Flushes:** a cell's equity averages the combos with and without the suit, so a suit-filtered screenshot is needed before splitting big and small flushes (on hold).
  - **After a turn that goes check, check** (a line the drill doesn't have yet), top pair has 83–92% on the river (Q♥ · 9♣).
- **Our own solver (TexasSolver), first spot: A72 · Q♥ · 9♣ river** (`decisions/ranges/solver/A72-Qh-9c.md`). It's solved in the drill's model: BTN's whole range reaches the river.
  - **The box is the money BTN bets on that street** (frequency × size) once BB checks.
  - **AK bets 100%, 26bb on average: 25–50bb.** AJ, AT and A8 bet 88%, 22bb: **15–25bb.** These replace the equity-based 5–15bb from GTO Wizard's narrower line.
  - **Bluffs** bet too, but stay at 0–5bb, because the drill asks what a group is worth.
- **The solver also shows that EV isn't the whole story.** On the 5♣ turn KK–88 have EV 4.3–4.75bb but check 99%, so they put almost nothing in. The box is set from EV and the strategy together.

### Every board from our own solver, street by street *(Noam, 2026-11-06: "run solver board after board… push it")*
- **How each board is solved** (`scripts/analysis/solve-board.ts`, data in `decisions/ranges/solver/`):
  1. **Flop:** BTN's whole range against BB's preflop calls. It gives BB's range for the turn (what BB checks and calls against the 33% bet). Flop boxes stay as they are: a flop bet is 2–4bb, so it can't decide a box.
  2. **Each turn:** BB's range from the flop solve; BTN's whole range. It gives BB's range for the river (check and call against the drill's 66% or 150% bet).
  3. **Each river:** BB's range from its turn solve.
- **Turn box:** the group's EV once BB checks, with the flop cut-offs (6.2 / 4.5 / 3.4bb at a 5.5bb pot) scaled to the 9.1bb pot: 50–100bb from 10.3bb, 15–25bb from 7.4bb, 5–15bb from 5.6bb.
- **River box:** what the group bets on average once BB checks, if it bets at least 30% of the time *for value*. Value means an EV of at least half the pot: weak pairs that bet as bluffs (e.g. 9x · 7x · 2x on Q♥ 9♣, EV 1bb; 88–44 shoving on K-Q-T-3-J, EV 10bb in a 36.5bb pot) stay 0–5bb. Value bets come out at 70%+ of the pot, bluffs at 30% or less.
- **Pair-or-better groups only.** Draws and no-pair hands keep their rules.
- **A72, what changed from the earlier answers** (some were Noam's own calls, so he can reverse any of them):

  | Spot | Group | Before | Solver |
  |---|---|---|---|
  | Q♥ turn | AK | 25–50 | **50–100** (EV 12.4, bets 98%) |
  | Q♥ turn | A6–A3 | 15–25 | **5–15** (EV 6.2, bets 18%) |
  | Q♥ turn | Qx, KK | 5–15 | **0–5** (EV ~4.2, check) |
  | 6♦ turn | AK, AQ | 25–50 | **15–25** (EV 9.3) |
  | 6♦ turn | AJ–A8 | 5–15 | **15–25** (EV 7.9) |
  | 6♦ turn | A5–A3, KK–88, 7x | 5–15 | **0–5** (EV 3.5–5.5, check) |
  | 5♣ turn | A6, A4, A3 | 5–15 | **0–5** (EV 5.6, bets 10%) |
  | Q♥ 9♣ | AJ, AT, A8 | 15–25 | **5–15** (bets 33%, ~11bb) |
  | Q♥ K♦ | AJ–A8 | 5–15 | **0–5** (bets 26%) |
  | 6♦ K♠ | sets & two pair | 15–25 | **25–50** (~45bb) |
  | 6♦ 8♦ | sets & two pair | 15–25 | **5–15** (~15bb) |
  | 5♣ K♥ | straights | 25–50 | **50–100** (~74bb) |
  | 5♣ K♥ | sets & two pair | 15–25 | **25–50** (~47bb) |
  | 5♣ K♥ | AQ | 5–15 | **15–25** (~18bb) |
  | 5♣ 6♣ | flushes, straights | 25–50 | **50–100** (~69–88bb) |

  The river "before" column is from yesterday's solves, which used my estimate of BB's range; now BB's range comes from the solves before it.
- **Other boards, solved the same way** (each board's numbers and every change are in `decisions/ranges/solver/<board>/report.txt`, lines with →):
  - **JT3:** overpairs and AJ/KJ go for stacks after the 2♥ overbet; on the 9♠ 8♠ river (four spades) straights check, so 0–5bb, and flushes 15–25bb.
  - **K54:** after the Q♦ overbet, overpairs, AK and on a 4♦ river even KJ–K2 go for stacks. After a 66% turn the best hands bet 125% pot (about 25bb), so full houses, trips and flushes land at 15–25 or 25–50bb, not 50–100.
  - **QT7:** overpairs and AQ/KQ go for stacks on calm runouts; on 5♦ 2♣ even QJ–Q6 and JJ bet about 20bb. On J♥ K♥ (straights and the flush) the solver bets small: flushes 15–25bb, straights 5–15bb.
  - **986:** on the K♣ river after the overbet, every king and QQ–TT go big. After the 7♠ (9-8-7-6 on board) straights are only 15–25bb on the turn and 5–25bb on the rivers: so many straights are possible that the solver bets them carefully.
  - **KQT:** a broadway board where BB has plenty: overpairs (AA) are only 15–25bb on the turns and check the 3♠ 4♦ river. Straights (AJ and 9x) are 15–25bb on the J♦ turn and 0–15bb on the rivers; flushes 25–50bb. On 3♠ J♠ the small pairs shove as bluffs and stay 0–5bb.
  - **A76:** AQ (K♠ turn) and AK (Q♣ turn) go for stacks on the turn and bet about 25bb on a brick river. On the 8♥ T♥ river (four hearts) straights check: 0–5bb.
  - **KQ4:** overpairs and AK go for stacks on the 2♣ and 8♠ turns; KJ–K2 about 15–25bb on the brick rivers. On A♦ T♦ (four diamonds) straights check (0–5bb) and flushes are 15–25bb.
  - **T87:** the wettest board. Overpairs are 15–25bb after the 2♦ overbet, then stacks on the 3♣ river. After the 9♥ (T-9-8-7 on board) straights are only 5–15bb, and on Q♥ (four hearts) they check.
  - **962:** overpairs and A9/K9 go for stacks after the 2♣ overbet. On the K♠ river the strong hands (full houses, trips, sets, kings) bet 66% pot (about 25bb) rather than all-in: 25–50bb. On the Q♥ turn top pair and overpairs are 15–25bb.
  - **886:** a paired board where BB rarely has a strong hand: full houses and trips bet about 25–50bb, not 50–100, and overpairs 15–25bb. 77 and 6x bet the turn after the 2♥ for 15–25bb.
- **Status (2026-11-06):** all 11 boards solved and live. The flop boxes are still the rules and Noam's calls.
- **A pattern across boards:** when the river puts four of a suit on the board, straights check and become 0–5bb, and flushes bet only 15–25bb.

### No pair: draws, high card with no draw, trash *(Noam, 2026-11-05, from A♣7♦2♠; on every board and street)*
- **There's no "Q-high and below" group any more**, on any street. The hands with no pair are split into three groups:

  | Group | Flop | Turn | River |
  |---|---|---|---|
  | **Draws** ("Can improve" on the flop) | Any draw, including backdoor straights and backdoor flushes | Real draws only: flush draws, straight draws, gutshots, combo draws | No draws are left |
  | **K-high, no draw** (A-high when no ace is on the board) | The highest missing card, with no draw | same | Just "K-high" (or "A-high") |
  | **Trash** | Everything lower, with no draw | same | same |

- **Every draw is worth 0–5bb, so all draws are one group.** The drill is about the size of the pot, not about which hands bluff. *(Noam)*
- **A backdoor straight draw** means both hole cards sit inside a five-rank window that already holds three ranks (QJ, JT, 98 on A72).
- **A backdoor flush draw** means a suited hand with one board card of its suit. **A suited hand whose suit isn't on the board** (K5 of hearts on A♣7♦2♠) is in "K-high, no draw" or "Trash".
- The ace-high group with two overcards on low flops stays as it is.

### Draws *(Noam, 2026-10-29)*
- *Replaced on 2026-11-05 by the section above: draws now have their own group.* **Every flush draw and straight draw with no pair is still worth 0–5bb.** Which ones actually bet belongs to the later bluff drill.
- **A hand's strongest feature decides its group** *(draft, proposed and accepted)*: a pair plus a draw stays in its pair group, and an A-high or K-high draw counts as that high card.

### Small pairs and ace-high on the flop: count the broadway cards *(Noam, from Uri, 2026-11-02)*
Broadway cards are A, K, Q, J and T.
- **At most one broadway card, or a paired flop:** small pairs are worth one small bet (Small pot). **Ace-high with two overcards** (9-8-6: AK to AT; T-8-7: AK to AJ) is worth a small bet too. Its own group: "Ace-high, two overcards". Other ace-high stays a tiny pot.
- **Two or more broadway cards:**
  - **Underpairs from 99 to JJ** are a **small pot**, and so is second pair or better. *(Noam, from Uri)*
  - *Updated 2026-11-05 (Uri on J♠T♠3♣: "Nines is worth 0-5bb"; Noam: make it general):* a pocket pair **between the top two cards** stays 5–15bb. One **below the second card** only puts in a little: **0–5bb**. This changed 99 on JT3 and QT7, JJ and 99 on KQT, and JJ–99 on KQ4.
  - **Ace-high and third pair or lower** are a **tiny pot**.
  - **Lower pocket pairs are Zero** and **stay Zero on the turn and river unless they improve**. Their own group: "Small pocket pairs". 66 and lower are confirmed; 88 and 77 are included because they're below 99 *(draft)*. *Updated 2026-11-07 (Noam, J♠T♠3♣): the group goes up to **99**, so it's 99 and lower.*
- **A paired flop follows the first rule**, even K-K or Q-Q *(Noam, 2026-11-02)*. The drill's paired board is 8♠8♦6♣.

### No pair on the flop and turn *(Noam and Uri, 2026-11-02)*
- **Flop:** A-high (K-high when an ace is on board) is a tiny pot. Every other no-pair hand is zero. On Q-T-2, AK and AJ are a tiny pot; KJ and J9 are zero despite their straight draws.
- **Turn:** A-high and K-high have almost always lost their showdown value, so **they are zero on every turn**. *(Draft; feedback adds the exceptions.)*

### Showdown value on the river *(Noam, 2026-10-30, from his note on A72 · 5♣ · 6♣)*
- It depends on **how many draws arrived and how many missed**.
- **The river completes the draws** (flush comes in, more straights): K-high loses its showdown value and is **zero**, because the ranges are polar.
- **The draws brick** (for example the turn brought two flush draws and straight draws, and the river misses them all): BB has many missed draws, so **K-high can go back to a tiny pot**.

### Box rules from the A72 review *(Noam, 2026-11-05; applied as drafts to every other board)*
1. **A weak pair putting in a little money (about 3–5bb) is 0–5bb.** That's pocket pairs below the second board card and bottom pair (A72: 66–33 and 2x). Pairs between the top two cards and second pair stay 5–15bb (A72: KK–88, 7x).
2. **On a dry flop, three streets of value means stacks: 50–100bb.** That's strong top pair, and overpairs too (A72: AK, AQ). "If nothing changes by the river, they want to go for stacks."
   - **Not on a connected flop** *(Noam, K♠5♥4♣)*: AK and KQ there are "not good enough to go for stacks because of the connectedness of the board", so they're 25–50bb.
   - Connected means two flop cards next to each other or one apart, with the ace counting high: K54, QT7, KQ4 and 886 are connected; A72 and 962 aren't.
   - This also matches Noam's 31 October note on QT7 ("a big pot, not stacks").
5. **Pocket pairs between the top two cards on a turn that isn't wet are 5–15bb**: they're still worth one more bet. *(Noam, A72 · Q♥: KK gets value from 7x, Qx, 2x and pocket pairs; A72 · 6♦: KK–88.)*
6. **When the flush comes in without four to a straight, sets and two pair are 5–15bb**: still more than showdown. *(Noam, A72 · 6♦ · 8♦.)* With four to a straight they still check down (T87 · 9♥).
3. **A wet turn takes sets and two pair down to 15–25bb** (A72 · 5♣).
4. **Second pair on a turn that isn't wet is 5–15bb:** it still beats the lower pairs, the draws and the pocket pairs below it (A72 · Q♥: Qx).

### Every pair wants money on the flop *(Noam, 2026-10-31)*
- *Updated 2026-11-05: "some money" is now inside 0–5bb (box rule 1 above), so this no longer pushes a pair up to 5–15bb.*
- In a single-raised pot (BTN raises, BB calls) both ranges are wide, so **any pair on the flop wants to put some money in**, even the worst pair: at least 5%. No pair is showdown value on the flop yet. *Exception (2026-11-02): on a flop with two or more broadway cards, 88 and lower want no money and third pair or lower only a tiny pot (see "Small pairs and ace-high on the flop").*

### Weak pairs on the river *(Noam, 2026-10-31, from his note on K♦Q♦4♠ · 8♠ · 3♥)*
- **A pocket pair under three or more board cards on the river (fourth pair or worse) is a potential bluff**, not showdown value: it rarely wins at showdown.
- *Open:* exactly when such weak pairs still have showdown value. Noam: it follows the same principle as A-high and K-high, which draws arrived on the river and which missed. To work out with Uri.

### Very wet boards *(Noam, 2026-10-31, from his notes on T♥8♥7♠ · 9♥)*
- **A board is very wet when one card makes a straight (four to a straight on board), or when a flush is in and straights are possible too.**
- On a very wet turn or river, **one pair, sets and two pair go to showdown value**: they only get called by better. Sets and two pair never bet big there; at most a small bet sometimes, usually a check.
- It stays that way on later streets, because the board stays very wet.
- Applies on every board, checked from the cards themselves (the flop is never very wet).
- *Open (Noam):* in spots like this, two answers might both be right (check or a small bet). See section 7.

### A third bet makes a big pot *(Noam, 2026-10-31, from his notes on Q♥T♦7♠)*
- **The strong top pair on a dry or medium flop wants a big pot** (not stacks): Q♥T♦7♠ counts as dry for this, since no straight is possible yet and there's no flush draw.
- **On a blank runout, a hand that bet the flop and the turn and still has value bets a healthy third time on the river: big pot**, not medium. Applies to overpairs and strong top pairs on every board (A72 AK/AQ, J♠T♠3♣ overpairs too).

### Board by board from now on *(Noam, 2026-11-07)*
- **A note changes only the board and street it was written on.** "I don't want you to apply something I said on one board to other boards." What a hand is worth depends on that board, above all on who holds the strongest hands there. On 9♠8♦6♣, T♥8♥7♠ and 8♠8♦6♣ BB has more of them, so a rule from A76 or JT3 is wrong there (it put A9 at stacks on the 986 flop).
- Older rules in this rulebook that were spread to every board stay as they are until Noam goes over each board.

### From Noam's phone review, each on its own board only *(Noam, 2026-11-07)*
- **A♥7♥6♣ flop:** AK and AQ are 25–50bb.
- **J♠T♠3♣ flop:** AJ and KJ are 25–50bb, their own group. Small pocket pairs go up to 99. Overpairs are 50–100bb: they're worth stacks on the brick turn, so they're worth stacks from the flop.
- **K♠5♥4♣ · Q♦ turn:** overpairs stay 50–100bb (no flush or straight possible), as the app already said.
- **A♥7♥6♣ · 8♥ · T♥ river:** flushes split into **high flushes** (K♥, Q♥, J♥: the solver bets them nearly all-in) and **low flushes** (9♥ and lower: 3–26bb). Straights get less again.
- **J♠T♠3♣ · 9♠ turn:** "Pair + a ♠" splits into **strong** (overpair or top pair, solver EV 7.8–8.7bb), **middle** (second pair, 6.3–6.7bb) and **weak** (the rest, 2–5.5bb).
- **J♠T♠3♣ · 6♣ turn:** draws split into **combo draws** (EV 6–7.7bb), **flush draws** (4–5bb) and **straight draws** (2–4.4bb).
- The boxes for these new groups come from the solver.
- **9♠8♦6♣ flop:** ace-high is 0–5bb (BB has more of the straights and two pair here).
- *Open (Noam, 986):* the turn box from the solver's EV can overstate one-pair hands (A9/K9 at stacks on 9♠8♦6♣ 2♥, though they only put in about 15–25bb by the river). To look at board by board.

### Cutoffs to set for every new board
1. Good kicker (A72: Q or better, so AK and AQ: in a single-raised pot AQ is very strong on this board *(Noam)*)
2. Medium kicker (A72: 8 or better)
3. Showdown cutoff (A72: K-high)

## 4. How the drill presents the groups *(Uri/Noam)*

- **Made hands only** *(Noam & Uri, 2026-11-07)*: the drill is about how much to play with an actual hand. Draws and hands with no pair (ace-high, K-high, air) are left out, never asked, and stay grey on the matrix. They get their own drill later: draws are more complicated to play. Pairs that also have a draw stay in.

- **A group is shown as its cards, not a Tetris piece** *(Noam, 2026-11-08, design option A)*: each hand is two cards, the hands fanned in an arc like a player spreading them, strongest on the left, at most six hands (the rest counted as "+N"). The fan opens a little while it's held; the group's color glows under it.
- **Dropping is easy** *(Noam, 2026-11-08)*: each box owns the directions closest to it from the middle (like a pie menu). Once the finger is halfway to a box, that box lights up, reaches out toward the cards and pulls them in (they lean toward it and shrink), with a small buzz. Letting go then drops the group there. A short drag in the middle snaps back.
- **One group at a time, in mixed order** (not strongest to weakest, so the player can't just walk down the ladder).
- The current group is **lit in its own color** on the matrix. Groups not answered yet are **grey**, and answered groups take **their box's money color**. By the end of a street the matrix is a money map.
- Obvious groups place themselves: straight+ always, and sets & two pair when they're all-in. Everything else is asked.
- **No-pair names use only ranks that aren't on the board** *(Noam, 2026-10-31)*: on K♦Q♦4♠ the groups are "A-high" and "J-high & below", never "K-high".
- **Names are neutral.** A piece says what the hands are ("AT–A8", "66–33", "K-high", "Q-high & below"), never what to do. The words "bluff", "give up" and "showdown" never appear on a piece or a box.
- A wrong drop says only "worth more" or "worth less", never the right box.
- Tapping a piece shows its full name and every hand in it.

## 5. How boards and runouts are chosen *(doc, 2026-10-28)*

- Every flop gets three turns: **brick** (changes little), **dynamic** (new draws or an overcard, nothing completes), **wet** (completes something; on two-tone flops the flush).
- Every turn gets two rivers: **brick** and **wet**.
- On boards where every unpaired river completes something, the brick river pairs the board.

## 6. Answer patterns so far (A♣7♦2♠, all drafts)

These are the patterns the A72 answers follow. Uri's corrections will turn them into rules.

- Brick turn (Q♥, BTN overbets): AK 50% (three streets); AJ–A8 and A6–A3 another 20% (their last bet); KK and the lower pairs showdown value.
- Dynamic turn (6♦, 66%): the strong kickers keep going (50%), the medium kickers slow down (5%).
- Wet turn (5♣, 66%): sets and two pair stop being all-in (50%), and every top pair drops one step.
- Brick river: top pair that bet the flop and turn shows down, AK makes one more value bet (20%); after a 66% turn, the strong kicker makes one value bet (20%) and most one-pair hands go to showdown value.
- Wet river: sets and two pair drop to 20%, top pair becomes a bluff-catcher (5%), K-high becomes a potential bluff, and the rest goes to showdown value.

## 6b. Board 2: J♠ T♠ 3♣ (all drafts, built from these rules, 2026-10-30)

Chosen as the opposite of A72: no ace, two-tone, very connected.

- **Cutoffs:** good kicker = AJ–KJ; **every other jack (QJ–J7) is one group** *(Noam: they all want about 20% on the flop)*. **Showdown cutoff = A-high** (no ace pairs on this board).
- **New group:** overpairs (QQ–AA).
- **Runouts:** 2♥ brick (polar overbet) → 3♦ (board pairs) / 9♠ (flush and straights); 6♣ dynamic, second flush draw (66%) → 3♦ / Q♠ (flush and straights); 9♠ wet, flush in (66%) → 2♦ / 8♠ (four spades).
- **Flop:** sets and JT all-in; overpairs 50%; AJ–KJ and QJ–J7 20% (top pair); Tx 5%; 99–44, 22, 3x and A-high showdown value; the rest potential bluffs (draws included).
- **Brick turn (2♥, BTN overbets):** overpairs 50%; every top pair another 20% (its last bet, then showdown on a brick river); the lower pairs showdown value.
- **Rivers where the draws arrive (9♠, Q♠, 8♠):** A-high becomes a potential bluff; overpairs become bluff-catchers (showdown value).

## 6c. Boards 3–11: answers computed from the rules (2026-10-31, all drafts)

Eight more boards from the planning doc, each teaching something different: **K♠5♥4♣** (king-high, low connectors), **Q♥T♦7♠** (middle cards), **9♠8♦6♣** (very connected, low), **K♦Q♣T♥** (broadway), **A♥7♥6♣** (ace-high but two-tone and connected), **K♦Q♦4♠** (two high cards, two-tone), **T♥8♥7♠** (the wettest), **9♦6♦2♥** (low, two-tone). Each has the doc's brick / dynamic / wet turns and a brick and a wet river.

Their answers are not written one by one: they come from a **value plan**, the rules above turned into numbers. Change a rule here and every one of these boards follows.

**How many streets of value each group wants** (on a brick runout):
- Overpairs: 3
- Top pair, strong kicker: 3 on a dry flop, 2 on a wet flop *(wet = a straight is already possible, or two-tone and connected: 9♠8♦6♣, K♦Q♣T♥, A♥7♥6♣, T♥8♥7♠)*
- Every other top pair: 2 *(20% on the flop, 20% more on a brick turn)*
- Pairs under the top card that sit right below it, and second pair: 1 *(one small bet, then showdown)*
- Everything else with a pair: 0 (showdown value)
- No pair: a tiny pot on the flop if it holds the highest missing card (A-high, or K-high when an ace is on board), otherwise zero. Zero on every turn.

**Spending them, street by street:**
- **Flop:** 3 → 50% · 2 → 20% · 1 → 5% · 0 → showdown value. Sets and two pair all-in.
- **Turn** (with what's left): brick → 50% or 20% (its last bet) · dynamic → 50% or 5% · wet → 20% or 5% · nothing left → showdown value. Sets and two pair stay all-in, except on a wet turn (50%).
- **River:** a group with value left bets a third time on a blank: big pot (small pot if the turn was wet, or if the river completes draws); everything else shows down. On a river that completes the draws, sets and two pair drop to medium pot and the high-card hands stay zero; on other rivers they go back to a tiny pot.
- **Very wet boards** (section 3) override all of this on the turn and river: every pair, set and two pair shows down.
- **Kickers:** the two best kickers make "strong" (AK/AQ on an ace, AK/KQ on a king, AQ/KQ below); every other kicker is one group.
- **The turn bet size** (overbet on a brick, 66% otherwise) is shown as information only.

## 7. Open questions for Uri

1. Is "Top pair, weak kicker" A6–A3 one group, or A6 alone plus the wheel draws A5–A3?
2. *(Settled 2026-11-02: draws add nothing; a K-high draw counts as K-high.)*
3. On rivers where the K pairs (K♦, K♠, K♥), no K-high no-pair hands exist. Should the showdown cutoff drop to Q-high there?
4. *(Settled 2026-10-31: groups stay, and the bet size changes no answer; it is information only.)*
5. All the turn and river buckets are drafts. Please correct them; the gold dots in the app's summary mark them.
6. *(Noam)* Should some spots accept two answers? For example, sets on a very wet turn (check or a small bet). AK/AJ on Q-T-3 no longer needs this: it is a tiny pot on the flop (2026-11-02).
7. A-high and K-high are zero on the turn but can go back to a tiny pot on a river where the draws miss. Is that right, or should they stay zero?
8. On two or more broadway cards, do 88 and 77 belong with the Zero pairs? (99–JJ small pot and 66 and lower Zero are settled.)
9. *(Settled 2026-11-02: small pairs that are Zero on the flop stay Zero unless they improve.)*

## Change log

- **2026-10-28**: Drill spec agreed with Uri (Noam's doc "Price Every Hand").
- **2026-10-29**: First prototype on A72 with 8 groups and 5 boxes. Uri's feedback led to finer groups (pocket pairs by slot, middle and bottom pair apart, top pair in three kicker bands), no-pair hands split into showdown vs potential bluffs, six boxes, one piece at a time, and boxes on the top and both sides.
- **2026-10-30**: Money boxes became stack shares (A little, ~20%, ~50%, All-in) instead of +5/+15/+40bb. Feedback notes now save exactly where they were written (board, street, group, app answer, what was tried). Turn bet size depends on the card (overbet on bricks, 66–75% on wet cards); not built yet.
- **2026-10-30 (later)**: Turn sizes built (Q♥ = polar overbet, 6♦ and 5♣ = 66%), with a badge on screen. Polar line answers. AK and AQ are the strong kickers on A72. K-high on the river follows how many draws arrived. Rulebook readable from the lobby.
- **2026-10-30 (evening)**: Drop targets became six neon paddles around the frame; money boxes read 5%, 20%, 50%, 100% ("A little" is now 5%).
- **2026-10-30 (night)**: Any ace = two small bets (A6–A3 20% on the flop); KK–88 = one small bet then showdown on every turn; the drill asks every group whatever the bet size.
- **2026-10-30 (night)**: Second board J♠T♠3♣ added (6 runouts, drafts). The start screen lets you pick a board or mix them.
- **2026-10-31**: From Noam's notes: top pair = 20% on the flop and 20% more on a brick turn, then showdown; the turn bet size is information only (the polar "check back" answers are gone); on J♠T♠3♣ QJ–J7 form one group.
- **2026-10-31**: Eight more boards (10 in all, 60 runouts). Their answers come from the value plan in section 6c.
- **2026-10-31 (afternoon)**: From Noam's notes on K♦Q♦4♠: no-pair group names follow the board; fourth pair or worse is a potential bluff on the river (every board).
- **2026-10-31 (afternoon)**: Any pair on the flop wants at least 5% (single-raised pot, wide ranges); applied to every board.
- **2026-10-31 (evening)**: Money paddles renamed to pot sizes: Small pot, Medium pot, Big pot, Stacks. Open: is top pair a small pot (two small bets) or a medium pot?
- **2026-10-31 (night)**: From Noam's notes on T♥8♥7♠ · 9♥ and Q♥T♦7♠, applied to every board (143 answers changed): very wet boards (one card to a straight, or a flush plus straights) send every pair, set and two pair to showdown value on the turn and river; a third bet on a blank river is a big pot; Q♥T♦7♠ counts as a dry flop, so AQ/KQ want a big pot.
- **2026-11-02**: From Noam and Uri, applied to every board: the drill only asks what a group is worth. "Potential bluffs" became Zero and "Showdown value" became Tiny pot. A-high (K-high on an ace board) is a tiny pot on the flop and zero on every turn.
- **2026-11-02**: From Noam, from Uri: flops with at most one broadway card or paired: small pairs and ace-high with two overcards are worth a small bet. Flops with two or more broadway cards: 99–JJ and second pair or better are a small pot; ace-high and third pair or lower are a tiny pot; 88 and lower are Zero and stay Zero on the turn and river unless they improve.
- **2026-11-02**: Paired flops are in the rulebook, and an 11th board was added: 8♠8♦6♣ (6 runouts, answers computed from the rules, all drafts).
- **2026-11-05**: From Noam: the six named boxes became five big-blind ranges: 0–5, 5–15, 15–25, 25–50 and 50–100bb. Zero and Tiny pot merged into 0–5bb, and every other box moved one to one. The paddles now form an arc over the drop area, small to big from left to right. Noam is re-answering every board group by group.
- **2026-11-05**: From Noam, **A♣7♦2♠ flop only** (turn and river later, step by step). BTN bets small with the whole range here, so the no-pair hands are three big groups instead of "Q-high and below":
  - **Can improve** (38%): any draw. That's gutshots, backdoor straights (KQ, KJ, KT, QJ, QT, JT, J9, J8, T9, T8, 98s, 96s, 86s, 65s, 64s, 54s, 43s) and backdoor flushes (suited, with one board card of their suit).
  - **K-high, no draw** (6%): K9o, K8o, K6o, plus K9s–K3s in hearts (no heart on the board).
  - **Trash**: queen-high or lower, no draw.

  *Rule (Noam): discuss new groups with him before building them.*
- **2026-11-05**: Noam checked every group on the **A♣7♦2♠ flop**:

  | Group | Box |
  |---|---|
  | AK, AQ | 50–100bb |
  | AJ–A8, A6–A3 | 15–25bb |
  | KK–88, 7x | 5–15bb |
  | 66–33, 2x | 0–5bb |
  | Can improve, K-high no draw, Trash | 0–5bb |

  - **AK, AQ:** on this dry board, if nothing changes by the river, they want to get the stacks in.
  - **66–33:** they put a little money in, about 3–5bb, and that's inside the 0–5bb box.
  - **The flop pair rule** ("every pair wants some money, at least 5%") no longer pushes a pair up to 5–15bb on boards Noam has checked: "some money" is now inside 0–5bb. Boards not yet checked keep the old rule until he does.
  - **Next:** the A72 turn. AK still says 25–50bb on a brick turn and river, so it needs to match.
- **2026-11-05**: Noam checked the three **A72 turns**:
  - **5♣:** sets and two pair go to 15–25bb. Draws, K-high with no draw and trash are separate groups, and all draws are one group.
  - **Q♥:** Qx goes to 5–15bb. The draws are KJ, KT and JT (broadway gutshots) plus 54s and 43s (wheel gutshots).
  - **6♦:** the same three no-pair groups; the boxes stay as they were.
- **2026-11-05**: The A72 principles applied to **every board** while Noam is away. All of these are drafts with a gold dot.
  - The no-pair hands are split into draws, K-high or A-high with no draw, and trash on every flop, turn and river.
  - The four box rules changed 43 groups: weak flop pairs to 0–5bb, dry-flop overpairs and strong top pair to 50–100bb, sets and two pair on wet turns to 15–25bb, second pair on calm turns to 5–15bb.
  - The A72 streets Noam checked didn't change.
- **2026-11-05**: The start screen can pick a board's exact turn, river and starting street, to get to a spot under review.
- **2026-11-05**: From Noam's comments on the site (K54 flop; A72 Q♥ turn, 6♦ turn, 6♦ 8♦ river) came box rules 2 (connected flops), 5 and 6. Applied to every board, they changed 41 groups; the ones not on A72 are drafts.
- **2026-11-07**: From Noam's phone review, each change only on the board it was written on (A76 flop, JT3 flop and its 9♠ and 6♣ turns, A76 8♥ T♥ river). A first version spread them to every board; Noam stopped that ("board by board"), and the other boards went back to how they were.
