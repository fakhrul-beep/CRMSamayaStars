import { StarBadge } from '../brand/StarBadge';

interface VenueCardProps {
  name: string;
  city: string;
  imageUrl: string;
  star: 0 | 1 | 2 | 3;
  strength: string;
  priceStart: string;
  capacityRange: string;
}

export function VenueCard({
  name,
  city,
  imageUrl,
  star,
  strength,
  priceStart,
  capacityRange
}: VenueCardProps) {
  return (
    <article className="group cursor-pointer overflow-hidden rounded-md bg-neutral-50 shadow-md transition-shadow hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        <div className="absolute left-4 top-4">
          <StarBadge star={star} size="sm" />
        </div>
      </div>
      <div className="space-y-2 px-4 py-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-base font-semibold text-neutral-900">{name}</h3>
          <span className="text-xs text-neutral-500">{city}</span>
        </div>
        <p className="text-sm text-neutral-700">{strength}</p>
        <div className="flex items-center justify-between text-sm text-neutral-700">
          <span className="font-medium">From {priceStart}</span>
          <span>{capacityRange} guests</span>
        </div>
      </div>
    </article>
  );
}

