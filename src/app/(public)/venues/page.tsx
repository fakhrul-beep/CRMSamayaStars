'use client';

import Link from 'next/link';
import { useState } from 'react';
import { venues } from '@/lib/venues';
import { VenueCard } from '@/components/venue/VenueCard';

const cities = Array.from(new Set(venues.map((v) => v.city)));
const stars = [1, 2, 3] as const;

export default function VenuesPage() {
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedStar, setSelectedStar] = useState<number | ''>('');

  const filteredVenues = venues.filter((venue) => {
    const matchCity = selectedCity ? venue.city === selectedCity : true;
    const matchStar = selectedStar ? venue.starRating === selectedStar : true;
    return matchCity && matchStar;
  });

  return (
    <main className="min-h-screen pt-32 pb-16">
      <section className="mx-auto max-w-container px-6">
        <header className="mb-8 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            CURATED VENUES
          </p>
          <h1 className="text-3xl font-semibold text-neutral-900 md:text-4xl">
            Samaya Certified Wedding Venues
          </h1>
          <p className="max-w-2xl text-sm text-neutral-600 md:text-base">
            Every venue listed here has been evaluated through Samaya&apos;s structured framework —
            focusing on execution reliability, emotional experience, and value for money.
          </p>
        </header>

        <div className="mb-6 flex flex-wrap items-center gap-4 rounded-lg bg-neutral-100 p-4 text-sm">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
              FILTER
            </span>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-800 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            >
              <option value="">All Cities</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            <select
              value={selectedStar}
              onChange={(e) =>
                setSelectedStar(e.target.value ? Number(e.target.value) : '')
              }
              className="rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-800 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            >
              <option value="">All Stars</option>
              {stars.map((star) => (
                <option key={star} value={star}>
                  {`${'⭐'.repeat(star)} & up`}
                </option>
              ))}
            </select>
          </div>
          <div className="ml-auto text-xs text-neutral-600">
            Showing {filteredVenues.length} of {venues.length} venues
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {filteredVenues.map((venue) => (
            <Link key={venue.id} href={`/venues/${venue.slug}`} className="block">
              <VenueCard
                name={venue.name}
                city={venue.city}
                imageUrl={venue.heroImage}
                star={venue.starRating}
                strength={venue.strength}
                priceStart={`IDR ${venue.priceStart.toLocaleString('id-ID')}`}
                capacityRange={`${venue.capacityMin}–${venue.capacityMax}`}
              />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

