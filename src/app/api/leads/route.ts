import { NextResponse } from 'next/server';
import type { LeadPayload } from '@/lib/leads';
import { supabaseAdmin } from '@/lib/supabase-server';

export async function POST(request: Request) {
  const data = (await request.json()) as LeadPayload & { venue_slug?: string };

  if (!data.full_name || !data.phone) {
    return NextResponse.json({ error: 'Name and phone are required.' }, { status: 400 });
  }

  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return NextResponse.json(
      { error: 'Supabase is not configured on the server.' },
      { status: 500 }
    );
  }

  const leadInsert = {
    full_name: data.full_name,
    phone: data.phone,
    email: data.email ?? null,
    wedding_date: data.wedding_date ?? null,
    guest_count: data.guest_count ?? null,
    budget_min: data.budget_min ?? null,
    budget_max: data.budget_max ?? null,
    city_preference: data.city_preference ?? null,
    indoor_preference: data.indoor_preference ?? null,
    lead_score: data.lead_score ?? null,
    temperature: data.temperature ?? null,
    source: data.source ?? 'venue_detail'
  };

  const { data: lead, error: leadError } = await supabaseAdmin
    .from('leads')
    .insert(leadInsert)
    .select('id')
    .single();

  if (leadError || !lead) {
    return NextResponse.json(
      { error: 'Failed to create lead', details: leadError?.message },
      { status: 500 }
    );
  }

  if (data.venue_slug) {
    // Look up venue by slug to connect to lead_venue_interest
    const { data: venue, error: venueError } = await supabaseAdmin
      .from('venues')
      .select('id')
      .eq('slug', data.venue_slug)
      .single();

    if (!venueError && venue) {
      await supabaseAdmin.from('lead_venue_interest').insert({
        lead_id: lead.id,
        venue_id: venue.id,
        priority_rank: 1
      });
    }
  }

  return NextResponse.json({ success: true });
}

