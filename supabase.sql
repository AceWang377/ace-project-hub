create table if not exists public.waitlist_subscribers (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  name text,
  project_slug text,
  source_path text,
  message text,
  created_at timestamptz default now()
);

create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  name text,
  project_slug text,
  message text not null,
  source_path text,
  created_at timestamptz default now()
);

create table if not exists public.site_events (
  id uuid primary key default gen_random_uuid(),
  event_name text not null,
  project_slug text,
  source_path text,
  target_url text,
  metadata jsonb,
  created_at timestamptz default now()
);
