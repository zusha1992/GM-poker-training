# Raise First In: Uri's notes (2026-11-01)

Source: Uri's in-app feedback notes on the UTG and HJ opening drills, 2026-11-01. Noam said "apply everything according to Uri's notes".

## Uri's notes
1. UTG: "Suited connector utg should mix."
2. UTG: "I want to ask more about hands that fold — suited kings, suited gappers. Start with gapper and suited king."
3. HJ: "We can add suited kings and offsuit broadways from hijack as mix. Also still ask about suited gappers and suited queens and weaker offsuit aces."
4. HJ: "Low pairs shouldn't be asked about in hijack, they were pure raised EP."

## General rules (apply to every seat)
- **Ask about the hands at the edge of the range**, including the strongest hands that fold, not just the clear raises.
- **A hand that was a pure raise from an earlier seat is never asked again** in a later seat: it is pre-filled. (This already worked; HJ low pairs were wrongly set to 70%.)
- **Hands at the border are a mix.**
- **Every later seat opens at least as wide as the earlier one.**

## What changed
- New hand group **Suited gappers**: 86s 75s 64s T7s 96s. They used to sit inside "Small suited", which is now just 54s 43s. (BTN and SB keep exactly the same range, so the "How many big blinds?" drill is unchanged.)
- "Offsuit broadway, fold" renamed **"Offsuit broadway, low"** (KTo QTo JTo): the name gave the answer away, and at HJ it's now a mix.
- **UTG:** suited connectors mix 50%. Folds asked: suited gappers, suited kings, offsuit broadway low.
- **HJ:** low pairs 100% (pre-filled from UTG, not asked). Suited kings mix 50%, offsuit broadway low mix 50%, suited connectors mix 60%. Folds asked: suited gappers, suited queens and jacks, offsuit aces.
- CO, BTN, SB: the gappers carry the value "Small suited" had (CO fold, now asked; BTN 60%; SB 100%).

## Follow-up (Noam, same day, after checking on the phone)
- Uri's "ask more about hands that fold" was meant in general: **don't ask hands that always raise.** Every pair and every suited ace now starts filled in red at every seat and is never asked.
- **The drill starts with the folding hands** (gappers first, then suited kings), then the clear raises, then the mixes.

## Still placeholder
The mix percentages (50%, 60%) are placeholders for Uri to correct. HJ, CO, BTN and SB are still not from real solver ranges.

## Uri's notes of 2026-11-03 (the technical ones; the design notes wait for Noam's review)

- **Order:** raise first in asks category by category, weakest first inside each: suited hands, then offsuit hands, then pairs (`ASK_ORDER` in `rfi.ts`). Inside a category the answers then run fold → mix → raise, instead of every fold first and every raise last.
- **No phase message:** "Clear decisions done. Now the mixed hands" and the "Clear decisions / Mixed hands" counter are removed from every preflop drill, because they gave the answer away. The counter now reads "Question n of N". The random-order drills (3-bet, facing a 3-bet, facing a 4-bet) now shuffle the mixed groups in with the rest.
- **UTG asks more:** the bad offsuit aces (A9o–A2o) and the suited queens and jacks are now asked too.
- **Facing a 3-bet:** only AA–QQ is filled in, so AKo and the other strong groups are asked. Every folding group in the opening range is asked, not just the two strongest. The numbers are still placeholders until Noam's screenshots arrive.
