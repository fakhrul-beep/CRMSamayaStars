'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';

interface ConsultationFormProps {
  venueSlug: string;
}

export function ConsultationForm({ venueSlug }: ConsultationFormProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [weddingDate, setWeddingDate] = useState('');
  const [guestCount, setGuestCount] = useState<number | ''>('');
  const [budgetRange, setBudgetRange] = useState('');
  const [cityPreference, setCityPreference] = useState('');
  const [notes, setNotes] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const payload = {
        full_name: fullName,
        phone,
        wedding_date: weddingDate || undefined,
        guest_count: guestCount === '' ? undefined : guestCount,
        city_preference: cityPreference || undefined,
        budget_min: undefined,
        budget_max: undefined,
        source: 'venue_detail',
        venue_slug: venueSlug,
        notes
      };

      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to submit consultation request');
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unexpected error');
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="space-y-2 rounded-md bg-neutral-200 p-3 text-xs text-neutral-800">
        <p className="font-semibold">Request received.</p>
        <p>
          The Samaya team will contact you personally within 24 hours to assist with this venue.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 text-xs text-neutral-800">
      <div className="space-y-1">
        <label className="block font-semibold" htmlFor="fullName">
          Full Name
        </label>
        <input
          id="fullName"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-xs focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        />
      </div>
      <div className="space-y-1">
        <label className="block font-semibold" htmlFor="phone">
          Phone Number
        </label>
        <input
          id="phone"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-xs focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        />
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        <div className="space-y-1">
          <label className="block font-semibold" htmlFor="weddingDate">
            Wedding Date (optional)
          </label>
          <input
            id="weddingDate"
            type="date"
            value={weddingDate}
            onChange={(e) => setWeddingDate(e.target.value)}
            className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-xs focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
          />
        </div>
        <div className="space-y-1">
          <label className="block font-semibold" htmlFor="guestCount">
            Guest Count (approx.)
          </label>
          <input
            id="guestCount"
            type="number"
            min={50}
            value={guestCount}
            onChange={(e) => setGuestCount(e.target.value ? Number(e.target.value) : '')}
            className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-xs focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
          />
        </div>
      </div>
      <div className="space-y-1">
        <label className="block font-semibold" htmlFor="budgetRange">
          Budget Range (optional)
        </label>
        <select
          id="budgetRange"
          value={budgetRange}
          onChange={(e) => setBudgetRange(e.target.value)}
          className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-xs focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        >
          <option value="">Select budget</option>
          <option value="under-150">Under 150M</option>
          <option value="150-300">150–300M</option>
          <option value="300-600">300–600M</option>
          <option value="600-plus">600M+</option>
        </select>
      </div>
      <div className="space-y-1">
        <label className="block font-semibold" htmlFor="cityPreference">
          City Preference
        </label>
        <input
          id="cityPreference"
          value={cityPreference}
          onChange={(e) => setCityPreference(e.target.value)}
          className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-xs focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        />
      </div>
      <div className="space-y-1">
        <label className="block font-semibold" htmlFor="notes">
          Additional Notes (optional)
        </label>
        <textarea
          id="notes"
          rows={3}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-xs focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        />
      </div>
      {error && <p className="text-xs text-red-600">{error}</p>}
      <Button type="submit" size="md" fullWidth loading={submitting}>
        Request Consultation via Samaya
      </Button>
      <p className="text-[10px] text-neutral-500">
        By submitting this form, you agree to be contacted by the Samaya team regarding this venue.
      </p>
    </form>
  );
}

