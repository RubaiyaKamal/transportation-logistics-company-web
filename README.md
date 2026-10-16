# Scaldis Logistics — Multilingual Website

Production-ready marketing website for **Scaldis Logistics BV**, a Belgian road
freight and logistics company based in Antwerp. Built as a statically generated,
SEO-first, multilingual (NL / FR / EN) site.

## Tech stack

- **Next.js 16** (App Router, Turbopack, Cache Components) + **TypeScript**
- **Tailwind CSS v4** (design tokens via `@theme`)
- **next-intl** — Dutch (default, `/nl`), French (`/fr`), English (`/en`)
- **React Hook Form + Zod** — quote/contact forms via Route Handlers
- **Resend / Nodemailer** — transactional email (env-driven), optional MongoDB lead store
- **next/image**, `next/og`, JSON-LD structured data

> ⚠️ Next.js 16 has breaking changes vs. 13–15. See `AGENTS.md` and read
> `node_modules/next/dist/docs/` before writing code.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the values you need
npm run dev
```

Open http://localhost:3000.

### Scripts

| Script                 | Purpose                          |
| ---------------------- | -------------------------------- |
| `npm run dev`          | Start the dev server             |
| `npm run build`        | Production build                 |
| `npm run start`        | Run the production build         |
| `npm run lint`         | ESLint                           |
| `npm run typecheck`    | TypeScript type check (`tsc`)    |
| `npm run format`       | Format with Prettier             |
| `npm run format:check` | Check formatting                 |

## Configuration

All environment variables are documented in `.env.example`. The site works
without any email/Mongo credentials — submissions are simply validated and
logged, so you can develop locally without external services.

## Placeholders

Every fabricated/placeholder value lives in **`content/placeholders.ts`**. Search
for `TODO(client)` to find everything that needs the client's real details
(address, VAT/KBO numbers, phone, certifications, …).

## Project structure

```
app/            App Router routes (i18n, pages, route handlers, metadata files)
components/     Reusable UI component library
content/        Placeholders + per-locale typed content (JSON/MDX)
lib/            Utilities (cn, i18n routing, SEO helpers, mailer, rate limit)
messages/       next-intl translation catalogs (nl / fr / en)
public/         Static assets (images)
```

## Deployment

Deploy-ready for Vercel. Set the variables from `.env.example` in the project
settings, then push to the connected repository. A post-launch SEO checklist
(Search Console, sitemap submission, Google Business Profile, backlinks) is added
in the final phase.
