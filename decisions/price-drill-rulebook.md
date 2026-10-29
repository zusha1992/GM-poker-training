# "How many big blinds?" drill: the rulebook

This is a living document. It holds every rule for splitting BTN's range into hand groups and deciding what each group is worth. Every piece of feedback from Uri or Noam becomes a rule here, and every new board is built from it. The code that follows it is `src/lib/drill/postflop/price-hands.ts`.

**Status:** draft rules and draft answers. Uri is the final authority (see [Uri: poker authority](../CLAUDE.md)). Rules marked *(Uri)* or *(Noam)* came from them. Rules marked *(draft)* are Claude's proposals and wait for review.

---

## 1. The spot and the question

- Single-raised pot, BTN vs BB, 100bb deep. The player is BTN, the aggressor. *(doc, 2026-10-28)*
- The question for every group: **what is it worth from here**, assuming the rest of the board bricks. It's always "how much more", never the total. *(Noam)*
- Bet sizes are never asked. Only the money each group wants. *(Noam)*
- Between streets, BTN bets and BB calls. In the background the bets are 1.8bb on the flop and 6bb on the turn, which gives a 5.5bb flop pot, a 9.1bb turn pot and a 21.1bb river pot. The player sees only the pot and the stack behind. *(draft)*

## 2. The six boxes *(Noam, 2026-10-29)*

| Box | Means |
|---|---|
| **Potential bluffs** (left side) | Worth 0. It can't win by checking, so it's a candidate to bluff. That doesn't mean it always bluffs: which ones actually bet is taught in the later bluff drill. |
| **Showdown value** (right side) | Worth about 1bb. No value bet, but it sometimes wins when checked down. |
| **+5 · +15 · +40 · All-in** (top) | Real money, from one small bet up to stacks. |

Layout: money boxes across the top, Potential bluffs down the left side, Showdown value down the right side. *(Noam)*

## 3. How the range is split into groups

**Core rule *(Uri)*: a group only holds hands of the same strength.** If two kinds of hand are clearly different in strength, they're two groups.

Every hand goes into exactly one group, checked from the top down. Groups are recalculated on every card, and hands never leave the matrix.

| # | Group | Rule |
|---|---|---|
| 1 | Straight+ | Straight or flush using a hole card, full house, quads |
| 2 | Sets & two pair | Sets, trips, two pair (both hole cards pair the board) |
| 3 | Overpairs | Pocket pair above the top card |
| 4 | Top pair, good kicker | Kicker ≥ the board's *good* cutoff |
| 5 | Top pair, medium kicker | Kicker ≥ the *medium* cutoff *(Noam: AT–A8 apart from A6–A3 on A72)* |
| 6 | Top pair, weak kicker | The rest of top pair |
| 7–9 | Pocket pairs below the top card | Split by **how many board cards sit above them**: one card, two cards, three or more. *(Uri: on A72, KK–88 and 66–33 are different strengths.)* |
| 10 | Second pair | A hole card pairs the second-highest board card |
| 11 | Lower pairs | A hole card pairs a lower board card |
| 12 | No pair, showdown | Highest card ≥ the board's **showdown cutoff** *(Uri/Noam: K-high on A72)* |
| 13 | No pair, the rest | Everything else |

### Draws *(Noam, 2026-10-29)*
- Draws don't get their own group. **Every flush draw and straight draw with no pair and no showdown value is a potential bluff.** "Potential" doesn't mean "always": some of them check, and that choice belongs to the bluff drill.
- **A hand's strongest feature decides its group** *(draft, proposed and accepted)*: a pair plus a draw stays in its pair group, and a K-high draw stays in showdown value, because it can win by checking and doesn't need to bluff.

### Cutoffs to set for every new board
1. Good kicker (A72: J or better)
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

- Brick turn: nothing changes from the flop, except pairs that a new overcard pushed down a slot.
- Dynamic turn: the strongest top pair keeps going, and the medium kickers slow down.
- Wet turn: sets and two pair stop being all-in (40), and every top pair drops one step.
- Brick river after two calls: top pair good kicker = one value bet (+15), and most one-pair hands go to showdown value.
- Wet river: sets and two pair drop to +15 or +40, top pair becomes a bluff-catcher (+5), and the rest goes to showdown value.

## 7. Open questions for Uri

1. Is "Top pair, weak kicker" A6–A3 one group, or A6 alone plus the wheel draws A5–A3?
2. Should K-high draws stay in showdown value, or be their own group?
3. On rivers where the K pairs (K♦, K♠, K♥), no K-high no-pair hands exist. Should the showdown cutoff drop to Q-high there?
4. All the turn and river buckets are drafts. Please correct them; the gold dots in the app's summary mark them.

## Change log

- **2026-10-28**: Drill spec agreed with Uri (Noam's doc "Price Every Hand").
- **2026-10-29**: First prototype on A72 with 8 groups and 5 boxes. Uri's feedback led to finer groups (pocket pairs by slot, middle and bottom pair apart, top pair in three kicker bands), no-pair hands split into showdown vs potential bluffs, six boxes, one piece at a time, and boxes on the top and both sides.
