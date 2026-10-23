---
name: log-decision
description: Turn a short context sentence plus a conversation (audio transcript, notes, or pasted text — about ANY topic, not just poker ranges) into a structured decision document, and present it for approval. Makes no code changes. Use whenever Noam says he had a conversation (with Uri or anyone else) and wants it captured before anything gets implemented.
argument-hint: "<one-line: what was this conversation about>"
allowed-tools: Read Write Grep Glob Bash
---

# Capture a conversation into a structured decision document

## Purpose

General-purpose capture step for this project — NOT specific to preflop ranges. Noam has a conversation (with Uri Peleg, a teammate, anyone) about some decision affecting the app — poker strategy, UI/UX, scoring, drill design, anything — and wants it turned into a clean written record **before** any code changes happen. This skill only produces and saves that document. Implementation is a separate, later step (`/apply-decision`), run only after Noam explicitly approves.

## Input

- A short one-line context sentence (the skill argument) — what the conversation was about.
- Alongside or shortly after: an audio file, a transcript, or raw typed notes.

### Handling audio

This agent cannot natively transcribe audio or video files. If what's provided is a raw audio/video file and no transcript came with it:
- Check whether the conversation already contains transcribed text for it.
- If not, say so plainly and ask Noam for a text transcript (any transcription tool/app) or his own typed notes. Don't guess content from a filename, and don't skip the step silently.

Only move to "Procedure" once you actually have text to work from.

## Procedure

1. Read the one-line context sentence and the provided text in full.
2. Ground yourself in the current codebase before writing anything — use Grep/Glob/Read (or spawn an Explore agent if the relevant area isn't obvious) to find what currently exists for this topic. Examples: "preflop groups" → `public/gm-poker-training.html`; "flop categories" → `src/lib/poker/board-texture.ts`; a UI/UX topic → the relevant component under `src/components/`. The point is to write the document against what's really there, not from assumption.
3. Produce a structured markdown document with exactly these sections:
   - **Topic** — one line
   - **Date**
   - **Current state** — what exists in the code/app today, in plain language, so Noam and whoever he discussed this with can see what's being proposed to change
   - **What was discussed** — a faithful, organized summary of the conversation, grouped by subtopic (not a raw transcript dump)
   - **Decisions / conclusions** — the explicit, itemized decisions actually reached; each one a concrete, unambiguous statement
   - **Open questions** — anything left unresolved, including anything you (as the future implementer) would need decided that the conversation didn't cover
   - **Proposed changes** — in plain language (poker/product terms, not code): what you intend to change, and roughly where (which drill/feature/file area) — do not write any code or pseudocode here
4. Save the document to `decisions/<YYYY-MM-DD>-<short-slug>.md` in the repo root (create the `decisions/` folder if it doesn't exist yet). This is the durable record and will be the exact input to `/apply-decision`.
5. Show the full document to Noam. End your turn by asking explicitly whether it accurately captures the conversation and conclusions — invite corrections.

## Explicit non-goals

- Do not edit any code, data, or config file in this skill.
- Do not treat silence, a vague "ok", or moving on to another topic as approval. Only proceed to `/apply-decision` once Noam explicitly says to apply it (or runs `/apply-decision` himself).
