-- Bookings logged from the Cal.com webhook. The service role writes; nothing
-- else reads. RLS is enabled with no policies, so anon/auth roles are denied.

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  external_id text unique not null,
  guest_email text not null,
  guest_name text,
  scheduled_at timestamptz not null,
  status text not null check (status in ('accepted', 'cancelled', 'rescheduled')),
  raw jsonb not null
);

create index if not exists bookings_scheduled_at_idx
  on public.bookings (scheduled_at desc);

alter table public.bookings enable row level security;
