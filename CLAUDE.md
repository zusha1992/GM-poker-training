@AGENTS.md

# GM Poker Training — Project Context

This section is the persistent project-content context for the standalone "Tetris range drill" prototype (`public/gm-poker-training.html`, `public/gm-poker-training-postflop.html`) — distinct from the deployed flop-trainer Next.js app that shares this repo (see `src/`). It supersedes an earlier partial context doc Noam wrote on his phone that never finished uploading; last updated 2026-10-23 from live conversation. See `decisions/` for the dated record of specific range/strategy calls and `.claude/skills/` for the workflow tooling referenced below.

## Who and what

- **Noam Shochat** — owns the project, studies poker theory, not a programmer.
- **Uri Peleg** — partner, internationally known pro-poker coach, final authority on all poker content (ranges, groupings, frequencies, teaching philosophy). As of 2026-10-23, Noam said he'll be working intensely with Uri **and another well-known streamer** over the coming weeks to build this out — the app needs to reflect Uri's specific teaching philosophy.
- A programmer and designer are being assembled as a team; neither knows poker deeply, so poker decisions get made by Noam/Uri and handed down as data/spec.
- **App name:** GM Poker Training ("GM" as in chess grandmaster).

## Core idea

A Duolingo-style poker trainer that teaches strategy at the level of the whole range/group, not the single hand or combo — see `ROADMAP.md` for the phased plan. Chess is the pedagogical hook (recruits already have chess-opening-tree intuition), not a product feature in itself.

**Non-negotiable experience principles:** never overwhelm (no raw 13×13-matrix-of-numbers overload); short sessions, one concept per drill; every action gets instant sound/animation/haptic feedback — Duolingo + Tetris + chess-strategy as the three reference points; phone-first.

## The Tetris-piece grouping mechanic

The player never builds hand groups — the app pre-splits the range into named "pieces," and the player's only job is deciding what each *group* does. Established rules (2026-10-23, from direct conversation, not yet from Uri):

- A piece is always a **group of hands**, never a single hand as the question.
- A group can be asked via its **weakest/anchor sub-range** (e.g. the suited-ace piece is asked as just A2s-A5s), with the rest of that same family (A6s-AKs) auto-revealing as correct once answered — this is the `LADDERS` + `reveal` mechanic in the code.
- A piece can **bundle across card families** when they sit at the same strategic frontier (e.g. K9s+Q9s+J9s+T9s as one "suited broadway frontier" piece, revealing KQs/KJs/KTs/QJs/QTs/JTs above).
- This applies to **preflop only** — postflop grouping works differently (hand-strength categories relative to the board, not raw starting-hand combos; see the postflop draft file).

## Current state (2026-10-23)

- **Preflop RFI**: UTG fully reworked from real solver screenshots + Noam's corrections (see `decisions/2026-10-23-rfi-ranges-from-solver-screenshots.md`). HJ/CO/BTN/SB are still placeholder data, structurally updated but not yet verified against real ranges.
- **Preflop 3-bet / facing-3-bet / facing-4-bet drills**: still fully placeholder formula-based data (`genStrat`/`genStrat4`/`genStrat5` in the code), untouched.
- **Postflop**: a first-draft format sketch exists (`public/gm-poker-training-postflop.html`) for BTN c-bet vs BB response on a single example flop (K72r), reusing the same swipe/scoring engine. Explicitly a format/flow check, not real strategy — categories and sizes are illustrative placeholders.

## How to apply

- Never invent poker-strategy numbers — they must trace back to Uri, a cited solver source (with Noam's screenshot-reading method), or be explicitly marked placeholder. Use `/log-decision` + `/apply-decision` for any conversation-driven change, and the range-screenshot skill for solver-image-driven range updates.
- Don't touch `src/lib/poker/gto-ranges.ts` (the main app's separate, already-accurate GTO Wizard data) from this prototype's work unless explicitly asked to reconcile the two systems.
- Keep every new drill/spot visually and mechanically consistent with the existing swipe-card/Tetris-piece engine already built — it's considered done/good; only the poker content and the scope (new spots, new streets) should grow.
