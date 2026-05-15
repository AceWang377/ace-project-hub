# Ace Project Hub

Ace Project Hub is the formal umbrella website for Ace's apps, tools, experiments,
legal pages, and support links.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Supabase-backed contact, waitlist, and analytics API routes
- Editable project data in `content/projects.ts`

## Local Development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Supabase

Create the tables in `supabase.sql`, then set:

```bash
SUPABASE_URL=
SUPABASE_SERVICE_ROLE_KEY=
```

Without those variables, the app still builds and the forms return a clear setup message.

## Core Routes

- `/`
- `/projects`
- `/projects/[slug]`
- `/about`
- `/notes`
- `/contact`
- `/legal/privacy/[projectSlug]`
- `/legal/terms/[projectSlug]`
- `/support/[projectSlug]`

## Checks

```bash
npm run lint
npm run build
```
