# hello savvy — marketing site

Next.js (App Router) + Tailwind v4 + Supabase, deployed on Vercel.
Modeled after [iro.studio](https://iro.studio) and [blackflag.design](https://blackflag.design).
See [`../docs/marketing-site.md`](../docs/marketing-site.md) for the spec.

## Routes

- `/` — single-page landing
- `/book` — Cal.com inline embed
- `/privacy`, `/terms` — legal placeholders
- `/api/webhooks/cal` — Cal.com booking webhook → Supabase

## Local development

```bash
cp .env.example .env.local   # fill in values
npm install
npm run dev
```

Open <http://localhost:3000>.

## Environment

| Variable | Where it's used |
| -------- | --------------- |
| `SUPABASE_URL` | webhook handler |
| `SUPABASE_SERVICE_ROLE_KEY` | webhook handler (server-only) |
| `CAL_WEBHOOK_SECRET` | HMAC signature verification on `/api/webhooks/cal` |

The Cal.com inline embed reads the booking link from `src/content/site.ts` (`calUsername`). Update it to your Cal.com handle/event slug before deploying.

## Database

Run the migrations in `supabase/migrations/` against your Supabase project:

```bash
# from the Supabase dashboard SQL editor, or:
psql "$SUPABASE_DB_URL" -f supabase/migrations/0001_bookings.sql
```

## Deploy

Push to a Vercel project linked to this repo. Set the env vars above in the Vercel dashboard. No build config needed beyond the defaults.
