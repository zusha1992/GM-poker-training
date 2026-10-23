# GM Poker Training — Tech Spec

Interactive site for practicing poker positions and situations. A user sees a board status, marks which hands in a matrix belong to each action, then reviews the correct answers. Later they can start a new status, view history, or share a situation.

This document covers the stack only. App features are not implemented yet.

## Stack

| Layer | Choice | Why |
| --- | --- | --- |
| Framework | **Next.js 16** (App Router) + React 19 | Familiar React/Next workflow, file-based routes for practice / history / share pages, server-side DB access without a separate API server. |
| Language | **TypeScript** | Shared types for hands, actions, board status, and DB rows. |
| Styling | **Tailwind CSS 4** | Fast UI iteration for the hand matrix and training screens. |
| Hosting | **Cloudflare Workers** via `@opennextjs/cloudflare` | Official Next.js-on-Cloudflare path. Edge deploy, D1/R2/KV bindings in the same worker. |
| Local Cloudflare | **Wrangler** | Local Workers runtime, local D1, typegen, and deploy. |
| Database | **Cloudflare D1** (SQLite) | Same vendor as hosting. Good fit for user history and shared situation records. Local SQLite via Wrangler for development. |
| ORM | **Drizzle** + Drizzle Kit | Typed schema and SQL migrations that apply with `wrangler d1 migrations apply`. |
| Validation | **Zod** | Runtime parsing for board status payloads and share links. |

## Planned (not installed yet)

| Layer | Choice | When |
| --- | --- | --- |
| Auth | **Better Auth** + D1/Drizzle | When we add accounts and personal history. |
| Incremental cache | Cloudflare R2 or KV | When we deploy and need Next.js ISR/cache. |

## Local vs production

- Day-to-day: `npm run dev` (`next dev` + OpenNext Cloudflare bindings, including local D1).
- Workers-accurate preview: `npm run preview`.
- Production: `npm run deploy` to Cloudflare Workers.

The D1 `database_id` in `wrangler.jsonc` is a local placeholder. Create a real D1 database (`wrangler d1 create poker-training`) and replace the id before the first production deploy.

## Database (upcoming)

D1 will store:

- Users / sessions (after auth)
- Practice attempts (board status, user marks, score, timestamp)
- Shareable situation snapshots (public id + status payload)

Schema lives in `src/db/schema.ts`. Generate SQL with `npm run db:generate`, apply locally with `npm run db:migrate:local`.

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Next.js dev server |
| `npm run preview` | Build and run in the Workers runtime |
| `npm run deploy` | Build and deploy to Cloudflare |
| `npm run db:generate` | Generate Drizzle SQL migrations |
| `npm run db:migrate:local` | Apply migrations to local D1 |
| `npm run cf-typegen` | Regenerate Cloudflare binding types |
