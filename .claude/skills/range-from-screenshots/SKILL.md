---
name: range-from-screenshots
description: Read one or more solver range-chart screenshots (red=raise/aggressive, blue=fold, split cells = mixed frequency) and turn them into a structured range table + decision doc for this project. Use whenever Noam uploads solver screenshots (GTO Wizard, PioSolver, etc.) for preflop or postflop ranges, instead of reading them ad hoc.
argument-hint: "<what spot(s) these screenshots are for, e.g. 'RFI ranges for UTG/HJ/CO/BTN/SB'>"
allowed-tools: Read Write Grep Glob Bash
---

# Extract a range from solver screenshots

## Purpose

Formalizes the workflow already used once (2026-10-23, UTG RFI ranges — see `decisions/2026-10-23-rfi-ranges-from-solver-screenshots.md` for the worked example). Takes raw solver chart screenshots and turns them into a structured, reviewable range table — it does NOT edit any code directly. That's a separate, later step once Noam confirms the read is accurate (via `/apply-decision` or direct instruction).

## Input

- One or more images: 13×13 solver range grids. Standard layout: row/col order A,K,Q,J,T,9,8,7,6,5,4,3,2 — pairs on the diagonal, suited hands above it, offsuit below it (same orientation as this project's own matrix, see `lab(i,j)` in `public/gm-poker-training.html`).
- The skill argument: what spot(s) these represent (e.g. positions for an RFI set, or a specific facing-action spot). If not fully specified, infer from context — e.g. a set of RFI charts can usually be ordered by how tight AA/KK/QQ's shown EV or frequency is (tightest = earliest position).
- The color rule for this project (confirmed with Noam, apply by default unless told otherwise): a cell counts as **raise/aggressive** if it's majority red (even with a small blue sliver), and **fold** if majority blue (even with a small red sliver). Note this rule explicitly in the output so a reader knows how close calls were resolved.

## Procedure

1. Identify which position/spot each image corresponds to. State your reasoning (don't silently assume).
2. For each image, read every cell's dominant color. Go category by category rather than hand-by-hand where it keeps things faster and just as accurate: pairs, suited-by-rank (aces, kings, queens, jacks, tens, connectors), offsuit-by-rank — looking for where the color flips from raise to fold along each row/column, since solver ranges are almost always monotonic (if a hand raises, every hand of the same shape that's strictly stronger also raises).
3. Produce a **per-position range table** in compact standard notation (e.g. "A3s-AKs raise, A2s fold"; "KQo, KJo, QJo raise, KTo/QTo fold") — not a 169-cell dump unless asked.
4. Explicitly flag any cell you're genuinely unsure about (very thin color slivers, cells near 0.00 EV) — name the specific hands, don't silently round to a guess. A reader should be able to tell confidently-read boundaries from close calls at a glance.
5. Cross-reference against the current state of `public/gm-poker-training.html`'s `FAMS`/`POS` data (or whatever file is relevant for the spot) — note what would need to change, but don't edit it.
6. Save the result as a decision doc at `decisions/<date>-<slug>.md`, following the same structure `/log-decision` uses (Topic, Date, Current state, What was discussed/read, Decisions, Open questions, Proposed changes) — set "What was discussed" to a description of the screenshots provided and the read method, and "Decisions" to the extracted ranges.
7. Present the table to Noam and ask for corrections before anything gets applied. Corrections he gives afterward (in chat) should be folded back into the same decision doc, not lost — update it and note what changed and when, the same way `/apply-decision` appends an `Applied:` line once code changes are actually made.

## Explicit non-goals

- Do not edit `public/gm-poker-training.html` or any other code/data file directly from this skill — that's `/apply-decision`'s job, after Noam confirms the read.
- Don't invent values for positions/spots not covered by the provided screenshots.
