# "How many big blinds?" drill: the rulebook

This is a living document. It holds every rule for splitting BTN's range into hand groups and deciding what each group is worth. Every piece of feedback from Uri or Noam becomes a rule here, and every new board is built from it. The code that follows it is `src/lib/drill/postflop/price-hands.ts`.

**Status:** draft rules and draft answers. Uri is the final authority (see [Uri: poker authority](../CLAUDE.md)). Rules marked *(Uri)* or *(Noam)* came from them. Rules marked *(draft)* are Claude's proposals and wait for review.

---

## 1. The spot and the question

- Single-raised pot, BTN vs BB, 100bb deep. The player is BTN, the aggressor. *(doc, 2026-10-28)*
- The question for every group: **what is it worth from here**, assuming the rest of the board bricks. It's always "how much more", never the total. *(Noam)*
- Bet sizes are never asked. Only the money each group wants. *(Noam)*
- Between streets, BTN bets and BB calls. The flop bet is always small (1.8bb). The turn bet depends on the card (section 2b). Pots: 5.5bb on the flop, 9.1bb on the turn, then about 36bb on the river after an overbet turn or about 21bb after a 66% turn. The player sees the pot, the stack behind and the bet size. *(draft numbers)*

## 2. The six boxes *(Noam, 2026-10-29; money as stack shares since 2026-10-30)*

| Box | Means |
|---|---|
| **Potential bluffs** (left side) | Worth nothing. It can't win by checking, so it's a candidate to bluff. That doesn't mean it always bluffs: which ones actually bet is taught in the later bluff drill. |
| **Showdown value** (right side) | Worth a tiny bit. No value bet, but it sometimes wins when checked down. |
| **A little · ~20% · ~50% of stack · All-in** (top) | Real money as a rough share of the stack that's left. *(Noam: no exact bb numbers like +5/+15/+40, because we don't aim for that accuracy.)* |

Layout: money boxes across the top, Potential bluffs down the left side, Showdown value down the right side. *(Noam)*

## 2b. Bet sizes between streets *(Noam, 2026-10-30)*

- Flop: a small bet and a call.
- Turn: depends on the card. On a **brick turn (good for BTN), BTN overbets** (polar). On a **wet turn (completes a straight or flush, or helps BB), BTN bets about 66–75%**.
- **Groups never change because of the bet size; the answers do** *(Noam)*. On a polar overbet turn, and on the river after it, every group is still asked, but only three answers are right: **All-in** (the polar value: two pair or better and top pair with the top kicker), **Potential bluffs** (the polar bluffs) and **Showdown value** (everything that checks back, even a good kicker like AJ). The middle boxes are the believable mistake there.
- On a 66–75% turn the full ladder applies.
- The screen always shows the bet: a badge under the board ("Turn: OVERBET · polar" or "Turn: 66% bet"), and on the river what the turn was.

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

### Draws *(Noam, 2026-10-29)*
- Draws don't get their own group. **Every flush draw and straight draw with no pair and no showdown value is a potential bluff.** "Potential" doesn't mean "always": some of them check, and that choice belongs to the bluff drill.
- **A hand's strongest feature decides its group** *(draft, proposed and accepted)*: a pair plus a draw stays in its pair group, and a K-high draw stays in showdown value, because it can win by checking and doesn't need to bluff.

### Showdown value on the river *(Noam, 2026-10-30, from his note on A72 · 5♣ · 6♣)*
- It depends on **how many draws arrived and how many missed**.
- **The river completes the draws** (flush comes in, more straights): K-high loses its showdown value and becomes a **potential bluff**, because the ranges are polar.
- **The draws brick** (for example the turn brought two flush draws and straight draws, and the river misses them all): BB has many missed draws, so **K-high can keep showdown value**.

### Cutoffs to set for every new board
1. Good kicker (A72: Q or better, so AK and AQ: in a single-raised pot AQ is very strong on this board *(Noam)*)
2. Medium kicker (A72: 8 or better)
3. Showdown cutoff (A72: K-high)

## 4. How the drill presents the groups *(Uri/Noam)*

- **One group at a time, in mixed order** (not strongest to weakest, so the player can't just walk down the ladder).
- The current group is **lit in its own color** on the matrix. Groups not answered yet are **grey**, and answered groups take **their box's money color**. By the end of a street the matrix is a money map.
- Obvious groups place themselves: straight+ always, and sets & two pair when they're all-in. Everything else is asked.
- **Names are neutral.** A piece says what the hands are ("AT–A8", "66–33", "K-high", "Q-high & below"), never what to do. The words "bluff", "give up" and "showdown" only appear on the boxes, never on a piece.
- A wrong drop says only "worth more" or "worth less", never the right box.
- Tapping a piece shows its full name and every hand in it.

## 5. How boards and runouts are chosen *(doc, 2026-10-28)*

- Every flop gets three turns: **brick** (changes little), **dynamic** (new draws or an overcard, nothing completes), **wet** (completes something; on two-tone flops the flush).
- Every turn gets two rivers: **brick** and **wet**.
- On boards where every unpaired river completes something, the brick river pairs the board.

## 6. Answer patterns so far (A♣7♦2♠, all drafts)

These are the patterns the A72 answers follow. Uri's corrections will turn them into rules.

- Brick turn (Q♥) = polar overbet: two pair+ and AK all-in; every other one-pair hand checks back (showdown value); no-pair hands without showdown value are the bluffs.
- Dynamic turn (6♦, 66%): the strong kickers keep going (~50%), the medium kickers slow down (a little).
- Wet turn (5♣, 66%): sets and two pair stop being all-in (~50%), and every top pair drops one step.
- Brick river: after an overbet turn, the same polar split as the turn; after a 66% turn, the strong kicker makes one value bet (~20%) and most one-pair hands go to showdown value.
- Wet river: sets and two pair drop to ~20% (or stay all-in on the polar line), top pair becomes a bluff-catcher (a little), K-high becomes a potential bluff, and the rest goes to showdown value.

## 7. Open questions for Uri

1. Is "Top pair, weak kicker" A6–A3 one group, or A6 alone plus the wheel draws A5–A3?
2. Should K-high draws stay in showdown value, or be their own group?
3. On rivers where the K pairs (K♦, K♠, K♥), no K-high no-pair hands exist. Should the showdown cutoff drop to Q-high there?
4. *(Settled 2026-10-30: groups stay; answers on a polar line are all-in, potential bluffs or showdown value.)*
5. All the turn and river buckets are drafts. Please correct them; the gold dots in the app's summary mark them.

## Change log

- **2026-10-28**: Drill spec agreed with Uri (Noam's doc "Price Every Hand").
- **2026-10-29**: First prototype on A72 with 8 groups and 5 boxes. Uri's feedback led to finer groups (pocket pairs by slot, middle and bottom pair apart, top pair in three kicker bands), no-pair hands split into showdown vs potential bluffs, six boxes, one piece at a time, and boxes on the top and both sides.
- **2026-10-30**: Money boxes became stack shares (A little, ~20%, ~50%, All-in) instead of +5/+15/+40bb. Feedback notes now save exactly where they were written (board, street, group, app answer, what was tried). Turn bet size depends on the card (overbet on bricks, 66–75% on wet cards); not built yet.
- **2026-10-30 (later)**: Turn sizes built (Q♥ = polar overbet, 6♦ and 5♣ = 66%), with a badge on screen. Polar line answers. AK and AQ are the strong kickers on A72. K-high on the river follows how many draws arrived. Rulebook readable from the lobby.
