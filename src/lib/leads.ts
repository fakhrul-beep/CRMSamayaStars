export type LeadStatus =
  | 'new'
  | 'contacted'
  | 'qualified'
  | 'site_visit_scheduled'
  | 'site_visit_done'
  | 'negotiation'
  | 'converted'
  | 'lost';

export type LeadTemperature = 'cold' | 'warm' | 'hot';

export interface LeadPayload {
  full_name: string;
  phone: string;
  email?: string;
  wedding_date?: string;
  guest_count?: number;
  budget_min?: number;
  budget_max?: number;
  city_preference?: string;
  indoor_preference?: boolean;
  lead_score?: number;
  temperature?: LeadTemperature;
  source?: string;
}

