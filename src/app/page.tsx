import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { VenueCard } from '@/components/venue/VenueCard';
import { venues } from '@/lib/venues';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <header className="fixed inset-x-0 top-0 z-20 border-b border-neutral-200 bg-neutral-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-container items-center justify-between px-6 py-4">
          <div className="text-sm font-semibold tracking-[0.2em] text-neutral-800">
            SAMAYA STARS
          </div>
          <nav className="hidden items-center gap-8 text-sm text-neutral-700 md:flex">
            <Link href="/venues">Explore Venues</Link>
            <a href="#how-it-works">How It Works</a>
            <a href="#about">About</a>
            <a href="#consultation" className="text-gold">
              For Venues
            </a>
          </nav>
          <div className="hidden md:block">
            <Link href="/venues">
              <Button size="sm">Request Consultation</Button>
            </Link>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-b from-primary via-primary/95 to-primary/90 pt-28 text-neutral-50 md:pt-32">
        <div className="mx-auto flex max-w-container flex-col gap-10 px-6 pb-20 md:flex-row md:items-center md:pb-28">
          <div className="max-w-xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
              WEDDING VENUE EXCELLENCE
            </p>
            <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
              Find Your Perfect Wedding Venue — Curated by Samaya Stars
            </h1>
            <p className="max-w-lg text-base text-neutral-200 md:text-lg">
              Expert-evaluated venues. Structured scoring. No paid rankings. An authority layer for
              Indonesia&apos;s wedding venues.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/venues">
                <Button size="md">Explore Venues</Button>
              </Link>
              <Link href="/venues">
                <Button size="md" variant="secondary">
                  Take Venue Quiz
                </Button>
              </Link>
            <div className="mt-4 flex flex-wrap gap-4 text-xs text-neutral-300 md:text-sm">
              <span>✓ Independent Mystery Audit</span>
              <span>✓ Structured Evaluation Framework</span>
              <span>✓ Annual Revalidation</span>
            </div>
          </div>
          <div className="relative w-full max-w-md self-stretch md:max-w-lg">
            <div className="absolute inset-0 rounded-2xl bg-gold/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-neutral-700/60 bg-neutral-900/40 shadow-lg">
              <img
                src="https://images.pexels.com/photos/169211/pexels-photo-169211.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Wedding reception ballroom"
                className="h-64 w-full object-cover md:h-80"
              />
              <div className="space-y-3 px-5 py-4">
                <p className="text-xs font-semibold tracking-[0.2em] text-gold">
                  SAMAYA CERTIFIED VENUE
                </p>
                <p className="text-sm text-neutral-200">
                  Curated like a Michelin Guide — but for Indonesia&apos;s wedding venues.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="venues" className="bg-neutral-50 py-16 md:py-20">
        <div className="mx-auto max-w-container px-6">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                FEATURED VENUES
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-neutral-900 md:text-3xl">
                Exceptional Wedding Destinations
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                A curated selection of Samaya-certified venues with outstanding execution and
                experience quality.
              </p>
            </div>
            <Link href="/venues" className="hidden md:inline-flex">
              <Button variant="ghost" className="text-sm text-neutral-800">
                View all venues
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {venues.slice(0, 3).map((venue) => (
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
        </div>
      </section>
    </main>
  );
}

