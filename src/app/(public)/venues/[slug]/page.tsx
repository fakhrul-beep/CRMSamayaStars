import { notFound } from 'next/navigation';
import { getVenueBySlug } from '@/lib/venues';
import { StarBadge } from '@/components/brand/StarBadge';
import { ConsultationForm } from './consultation-form';

interface VenueDetailPageProps {
  params: { slug: string };
}

export default function VenueDetailPage({ params }: VenueDetailPageProps) {
  const venue = getVenueBySlug(params.slug);

  if (!venue) return notFound();

  return (
    <main className="min-h-screen bg-neutral-50 pt-20 md:pt-24">
      <section className="bg-primary text-neutral-50">
        <div className="mx-auto max-w-container px-0 pb-8 pt-6 md:px-6 md:pb-10">
          <div className="grid gap-6 md:grid-cols-[3fr,2fr] md:items-end">
            <div className="relative">
              <div className="aspect-video overflow-hidden md:rounded-xl">
                <img
                  src={venue.heroImage}
                  alt={venue.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute left-4 top-4 md:left-6 md:top-6">
                <StarBadge star={venue.starRating} showLabel />
              </div>
            </div>
            <div className="space-y-4 px-6 md:px-0">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                SAMAYA CERTIFIED VENUE
              </p>
              <h1 className="text-3xl font-semibold md:text-4xl">{venue.name}</h1>
              <p className="text-sm text-neutral-200">
                {venue.city} • {venue.capacityMin}–{venue.capacityMax} guests • From{' '}
                {venue.priceStart.toLocaleString('id-ID', {
                  style: 'currency',
                  currency: 'IDR',
                  maximumFractionDigits: 0
                })}
              </p>
              <p className="text-sm text-neutral-200">{venue.strength}</p>
              <div className="mt-4 inline-flex items-baseline gap-2 rounded-lg bg-neutral-900/40 px-4 py-3">
                <span className="text-xs uppercase tracking-[0.25em] text-neutral-400">
                  SAMAYA SCORE
                </span>
                <span className="text-3xl font-semibold text-gold">{venue.finalScore}</span>
                <span className="text-xs text-neutral-300">/ 100</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-container px-6 py-10 md:py-14">
        <div className="grid gap-10 md:grid-cols-[2fr,1.5fr]">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-neutral-900">Venue Overview</h2>
            <p className="text-sm text-neutral-700">
              This is a placeholder overview section. In the full MVP, this will contain inspector
              notes, recommended event formats, and key strengths based on Samaya&apos;s evaluation
              framework.
            </p>
            <div className="grid gap-4 text-sm text-neutral-700 md:grid-cols-2">
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  LOCATION
                </p>
                <p>{venue.address}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  STYLE
                </p>
                <p className="capitalize">{venue.style}</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
                  INDOOR / OUTDOOR
                </p>
                <p>
                  {venue.isIndoor && 'Indoor'}
                  {venue.isIndoor && venue.isOutdoor && ' • '}
                  {venue.isOutdoor && 'Outdoor'}
                </p>
              </div>
            </div>
          </div>

          <aside className="space-y-4 rounded-xl bg-neutral-100 p-5">
            <h3 className="text-sm font-semibold text-neutral-900">Plan Your Wedding Here</h3>
            <p className="text-xs text-neutral-700">
              Share your wedding details and the Samaya team will personally assist you with this
              venue.
            </p>
            <ConsultationForm venueSlug={venue.slug} />
          </aside>
        </div>
      </section>
    </main>
  );
}

