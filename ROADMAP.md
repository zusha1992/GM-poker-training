# GM Poker Training — Roadmap

Companion to the project-context section in `CLAUDE.md`. That file is "what this is and how it works"; this file is "where it's going and in what order." Last updated 2026-10-23.

## Vision

An app that teaches cash-game poker street by street — preflop → flop → turn → river — using one consistent macro method throughout: pre-split the range into named groups ("Tetris pieces"), drill what each group does, and let the grouping get finer/more complex as the player advances deeper into the game tree. Inspired by Duolingo (bite-sized, highly responsive), Tetris (the visual piece/group metaphor), and chess strategy (the pedagogical framing for why ranges matter). Built around Uri Peleg's teaching philosophy specifically, with a second well-known streamer joining as a content partner (as of 2026-10-23). Eventually subscription-gated — some content free, deeper content paid.

## Where we are today (2026-10-23)

- **Preflop RFI**: UTG reworked from real solver screenshots + corrections — considered real. HJ/CO/BTN/SB restructured to the new group taxonomy but still carrying old placeholder percentages, not yet verified.
- **Preflop 3-bet / facing-3-bet / facing-4-bet**: fully placeholder, formula-generated (`genStrat`/`genStrat4`/`genStrat5`), untouched.
- **Postflop**: one example spot exists as a format/flow draft — BTN c-bet vs BB response on K72r — illustrative categories and sizes only, not real strategy.
- **Engine** (swipe/drag, scoring, streaks, celebrations, lobby, sheets): built, working, considered done — this is the part that should NOT get rebuilt, only reused and restyled.
- No accounts, no subscription/paywall, no backend — pure static files.
- A separate, unrelated Next.js app already lives in this same repo (deployed, flop-only range-matrix UX) — different product surface, don't conflate the two (see `CLAUDE.md`).

## The full game tree (preflop → river)

Noam's stated end goal (2026-10-23): a user can drill a hand all the way from preflop through the river, not just isolated spots. This means every postflop decision point becomes a branch in an actual game tree that needs modeling, not just a single illustrative example:

- **Per street** (flop/turn/river), the acting player chooses from a simplified set of bet sizes — Noam's stated starting point is **two sizes** (e.g. small + polar/big), matching the "two main strategies" principle already in `CLAUDE.md`.
- **The out-of-position player's response** starts simple and grows: initially just **fold or call**; **raise gets added later** as a third branch. Each response is itself a new branch that needs its own follow-up spot modeled (a call continues to the next street in that line; a raise opens a whole new sub-tree: 4-bet/call/fold from the original aggressor, etc.).
- This is explicitly a **breadth** problem, not just a depth one — every new (street × sizing × response) combination is a new spot to build data for, so the tree grows multiplicatively, not linearly. Scope discipline matters: build one single-raised-pot line all the way through before widening to 3-bet pots, limped pots, multiway, etc.

**Current foothold**: the single-raised-pot BTN-vs-BB line, starting with just the flop c-bet (BTN: check/small-bet only; BB: fold/call/raise already modeled, though raise isn't yet followed up with its own sub-spot). This is the first branch of the tree being built out — see Phase 1 below. Turn and river for this same line are the next branches once flop is solid (see Phase 2).

## Phases

### Phase 0 — Finish preflop (near-term)
Get HJ, CO, BTN, SB to the same "real data, reviewed" state UTG just reached (more solver screenshots, same correction workflow via `/range-from-screenshots`). Then do 3-bet / facing-3-bet / facing-4-bet — these likely need Uri directly rather than a single simplified solver chart, since they're opponent-range-dependent. This is the floor everything else stands on: the preflop groups and visual language carry forward into every later street.

### Phase 1 — Postflop v1: one texture, one line
Take the BTN-vs-BB draft from format-check to real content: real hand-category boundaries (sets, two pair, top-pair-good-kicker, etc.), a real small-vs-polar sizing split, for one board texture (e.g. K72r dry). This is where Uri's input matters most — his "two main bet types" principle (linear/merged small bet with a wide range, vs. polarized big bet with a split range) needs to become concrete category-to-action mappings per texture. The hardest open problem: modeling BB's actual continuing/defending range composition on a given flop (their preflop calling range, mapped onto this board) — worth a dedicated conversation with Uri early, before building more textures on a shaky foundation.

### Phase 2 — Postflop breadth
Expand from one texture to a fuller board-texture taxonomy (there's already relevant thinking in this repo's other app — see memory on flop subcategories — reuse what applies). Add turn and river, same macro-group method, with complexity increasing as Noam described: more parts to the strategy the deeper into the tree you go. Add the attacker's full line (not just the c-bet) and multi-street navigation; the other Next.js app in this repo has a more developed version of this concept worth drawing UX lessons from, even though the data/engine won't be shared directly.

### Phase 3 — Subscription model (parallel with Phase 2)
Decide the free/paid content split — a product decision for Noam/Uri/the streamer partner, not a technical one. Surface it as a `/log-decision` topic when there's an actual conversation to capture. Deliberately no infrastructure work (auth, payments, gating) until that split is decided — building it early risks building the wrong thing.

### Phase 4 — Professional design pass
Noam's own timeline: a few days to a few weeks out from 2026-10-23. The current visual design (dark theme, Chakra Petch/Figtree, swipe-card mechanic, sound/haptics/celebrations) is the **functional reference** for a hired designer, not a throwaway — the interaction model is considered good. Before handoff, it's worth consolidating styling into clearly-scoped CSS custom properties (already mostly true) so a designer can restyle without touching game logic.

## Proposed skills

1. **`/range-from-screenshots`** (built 2026-10-23) — formalizes the UTG workflow: read solver range screenshots, apply the red/blue majority rule, produce a structured per-position range table, save it as a decision doc. Reusable for HJ/CO/BTN/SB and any future 3-bet/4-bet screenshots.
2. **`/new-postflop-spot`** (proposed, not built) — scaffold a new board-texture/spot drill from the BTN-vs-BB template, once Phase 1's data modeling is settled. Not worth building until there's a second real spot to generalize from.
3. **A "Uri style" consistency check** (proposed, not built) — once there's a real corpus of his content/copy to pattern-match against. Premature today; would just be guessing at a style that doesn't exist yet.
4. **Subscription/paywall tooling** — deliberately not proposed yet. Phase 3 is a product decision before it's an engineering task.

## Guardrails

- Never invent poker-strategy numbers beyond what's explicitly provided (Uri, a cited solver source, or marked placeholder).
- Don't start subscription/auth infrastructure before the product split is decided.
- Don't merge this prototype with the other Next.js app in this repo without being asked.
- Keep new drills/spots mechanically and visually consistent with the existing engine — grow the content, not the framework, unless a genuinely new mechanic is called for (and even then, flag it as a design conversation first).
