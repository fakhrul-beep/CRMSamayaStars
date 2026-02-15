-- Supabase / PostgreSQL schema for Samaya Stars MVP

-- 1. Users
create type user_role as enum ('admin', 'inspector', 'sales');

create table if not exists users (
  id uuid primary key default gen_random_uuid(),
  name varchar(120) not null,
  email varchar(255) not null unique,
  role user_role not null default 'admin',
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 2. Venues
create table if not exists venues (
  id uuid primary key default gen_random_uuid(),
  slug varchar(160) not null unique,
  name varchar(200) not null,
  description text,
  city varchar(100) not null,
  address text,
  latitude decimal,
  longitude decimal,
  capacity_min integer,
  capacity_max integer,
  price_start numeric,
  price_currency varchar(8) not null default 'IDR',
  style varchar(50),
  is_indoor boolean default false,
  is_outdoor boolean default false,
  parking_capacity integer,
  bridal_room_count integer,
  backup_power boolean default false,
  final_score numeric,
  star_rating integer default 0,
  is_published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists venues_city_idx on venues (city);
create index if not exists venues_star_rating_idx on venues (star_rating);

-- 3. Venue images
create type venue_image_category as enum ('hero', 'gallery', 'ceremony', 'reception', 'layout');

create table if not exists venue_images (
  id uuid primary key default gen_random_uuid(),
  venue_id uuid not null references venues(id) on delete cascade,
  image_url text not null,
  category venue_image_category not null default 'gallery',
  sort_order integer default 0,
  created_at timestamptz not null default now()
);

create index if not exists venue_images_venue_idx on venue_images (venue_id);

-- 4. Venue evaluations (audit history)
create table if not exists venue_evaluations (
  id uuid primary key default gen_random_uuid(),
  venue_id uuid not null references venues(id) on delete cascade,
  venue_quality integer not null check (venue_quality between 0 and 100),
  execution_reliability integer not null check (execution_reliability between 0 and 100),
  service integer not null check (service between 0 and 100),
  emotional_experience integer not null check (emotional_experience between 0 and 100),
  value_for_money integer not null check (value_for_money between 0 and 100),
  weighted_score numeric not null,
  generated_star integer not null check (generated_star between 0 and 3),
  inspector_notes_public text,
  inspector_notes_internal text,
  evaluated_by uuid references users(id),
  evaluation_date timestamptz not null default now(),
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create index if not exists venue_evaluations_venue_idx on venue_evaluations (venue_id);
create index if not exists venue_evaluations_active_idx on venue_evaluations (venue_id, is_active);

-- 5. Leads & CRM
create type lead_status as enum (
  'new',
  'contacted',
  'qualified',
  'site_visit_scheduled',
  'site_visit_done',
  'negotiation',
  'converted',
  'lost'
);

create type lead_temperature as enum ('cold', 'warm', 'hot');

create table if not exists leads (
  id uuid primary key default gen_random_uuid(),
  full_name varchar(160) not null,
  phone varchar(50) not null,
  email varchar(255),
  wedding_date date,
  guest_count integer,
  budget_min numeric,
  budget_max numeric,
  city_preference varchar(100),
  indoor_preference boolean,
  lead_score integer,
  temperature lead_temperature,
  source varchar(80),
  assigned_to uuid references users(id),
  status lead_status not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists leads_status_idx on leads (status);
create index if not exists leads_created_idx on leads (created_at);

create table if not exists lead_venue_interest (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references leads(id) on delete cascade,
  venue_id uuid not null references venues(id) on delete cascade,
  priority_rank integer default 1
);

create index if not exists lead_venue_interest_lead_idx on lead_venue_interest (lead_id);

create type activity_type as enum ('call', 'whatsapp', 'email', 'meeting', 'note');

create table if not exists lead_activities (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references leads(id) on delete cascade,
  activity_type activity_type not null,
  summary varchar(255),
  details text,
  created_by uuid references users(id),
  created_at timestamptz not null default now()
);

-- 6. Site visits and conversions
create type site_visit_status as enum ('scheduled', 'completed', 'canceled');

create table if not exists site_visits (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references leads(id) on delete cascade,
  venue_id uuid not null references venues(id) on delete cascade,
  visit_date timestamptz not null,
  status site_visit_status not null default 'scheduled',
  feedback text
);

create type commission_status as enum ('pending', 'invoiced', 'paid');

create table if not exists conversions (
  id uuid primary key default gen_random_uuid(),
  lead_id uuid not null references leads(id) on delete cascade,
  venue_id uuid not null references venues(id) on delete cascade,
  contract_value numeric,
  commission_amount numeric,
  commission_status commission_status not null default 'pending',
  converted_at timestamptz not null default now()
);

