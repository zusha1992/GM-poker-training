# GM Poker Training

A Duolingo-style poker trainer that teaches cash-game strategy preflop through the river by drilling whole hand-ranges as groups — "Tetris pieces" the player swipes into an action — rather than grading one hand at a time. Chess is the pedagogical hook (the target audience is chess players being recruited into poker), not a feature in itself. See [ROADMAP.md](./ROADMAP.md) for the full vision and phased plan, [CLAUDE.md](./CLAUDE.md) for project context, and [TECH_SPEC.md](./TECH_SPEC.md) for stack notes.

## Live

| | URL |
| --- | --- |
| **Production** | https://gm-poker-training-app.noamshochat18.workers.dev |
| **Dev preview** | https://gm-poker-training-app-dev.noamshochat18.workers.dev |
| **Cloudflare dashboard** | Workers & Pages → `gm-poker-training-app` (and `gm-poker-training-app-dev`) |

Production is served from `main`; the dev preview is served from `dev`. They're deployed as two **separate Cloudflare Workers**, but currently share the same D1 database — that's deliberate for now (no real content/data divergence between them yet), while keeping the option to fully separate them (their own database, their own config) later without restructuring anything.

## What's in this repo

This repo holds two things that are meant to converge into one product over time:

- **The practice-table app** (`src/app`, `src/components/table`, `src/lib/poker`) — a GTO-Wizard-style 13×13 range matrix where the player paints a range, then plays it out hand-by-hand against a board (flop/turn/river), built with Next.js + React + Tailwind.
- **The "Tetris range drill" prototype** (`public/gm-poker-training.html`, `public/gm-poker-training-postflop.html`) — a standalone, swipe-based macro-range drill (preflop RFI/3-bet/4-bet, and a postflop BTN-c-bet-vs-BB draft), currently plain HTML/CSS/JS, being ported into React components under `src/components/drill` (see ROADMAP.md) so both experiences live in one codebase and one deploy.

### Structure

```
src/
  app/              Next.js routes, including API routes (api/games, api/feedback)
  components/table/ Range matrix + poker table practice UI
  components/drill/ The in-progress React port of the Tetris range-drill engine
  lib/poker/         Poker domain logic — hand classification, range filters, GTO ranges, board texture
  lib/drill/          Types/data for the drill engine port
  db/                 Drizzle schema + D1 connection (src/db/schema.ts, src/db/index.ts)
public/
  gm-poker-training.html            Preflop drill prototype (vanilla JS, standalone)
  gm-poker-training-postflop.html   Postflop drill prototype (vanilla JS, standalone)
decisions/            Dated records of range/strategy decisions (from /log-decision, /range-from-screenshots)
.claude/skills/        Custom Claude Code skills for this project's workflow (see below)
drizzle/                Generated SQL migrations
ROADMAP.md, CLAUDE.md   Vision, phased plan, and persistent project context
```

### Feedback threads

Every drill has an in-app feedback thread (speech-bubble icon in the top bar) — notes are scoped per drill/spot, support one level of replies, and let each person edit/delete their own messages. Backed by the `drill_feedback` D1 table via `/api/feedback`.

### Custom Claude Code workflow

This project uses a few custom skills (`.claude/skills/`) for how poker-content decisions get captured and applied:

- `/log-decision` + `/apply-decision` — turn a conversation (transcript/notes) into a reviewable document before any code changes, applied only after explicit approval.
- `/range-from-screenshots` — reads solver range-chart screenshots into a structured range table + decision doc.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the practice-table app, or `http://localhost:3000/gm-poker-training.html` / `.../gm-poker-training-postflop.html` for the drill prototypes.

| Script | Purpose |
| --- | --- |
| `npm run dev` | Next.js dev server (with local Cloudflare bindings) |
| `npm run preview` | Build and run in the Workers runtime |
| `npm run deploy` | Build and deploy to **production** |
| `npm run deploy:dev` | Build and deploy to the **dev preview** Worker |
| `npm run db:generate` | Generate Drizzle SQL migrations |
| `npm run db:migrate:local` | Apply migrations to local D1 |
| `npm run db:migrate:remote` | Apply migrations to production D1 |

Note: `npm run deploy`/`deploy:dev` will fail with an `EPERM` error on Windows if a local `npm run dev` server is still running (it locks `.open-next/`) — stop it first.

## Deployment

Two GitHub Actions workflows (`.github/workflows/`) handle deploys automatically:

- **`deploy-prod.yml`** — on push to `main`: applies D1 migrations, builds, deploys to the production Worker.
- **`deploy-dev-preview.yml`** — on push to `dev`: same, but deploys to the separate `gm-poker-training-app-dev` Worker. Never touches production.

Both need these repo secrets configured (Settings → Secrets and variables → Actions):

- `CLOUDFLARE_API_TOKEN` — a token scoped to Account → Workers Scripts (Edit) and Account → D1 (Edit). No zone permissions needed (this project doesn't use a custom domain).
- `CLOUDFLARE_ACCOUNT_ID` — found in the Cloudflare dashboard sidebar.
