export type StarRating = 0 | 1 | 2 | 3;

export interface Venue {
  id: string;
  slug: string;
  name: string;
  city: string;
  address: string;
  capacityMin: number;
  capacityMax: number;
  priceStart: number;
  style: 'ballroom' | 'garden' | 'resort';
  isIndoor: boolean;
  isOutdoor: boolean;
  starRating: StarRating;
  finalScore: number;
  heroImage: string;
  images: string[];
  strength: string;
}

export const venues: Venue[] = [
  {
    id: 'royal-grand-ballroom',
    slug: 'the-royal-grand-ballroom',
    name: 'The Royal Grand Ballroom',
    city: 'Jakarta Selatan',
    address: 'Jl. Sudirman No. 123, Jakarta Selatan',
    capacityMin: 300,
    capacityMax: 800,
    priceStart: 250_000_000,
    style: 'ballroom',
    isIndoor: true,
    isOutdoor: false,
    starRating: 2,
    finalScore: 89,
    heroImage:
      'https://images.pexels.com/photos/169211/pexels-photo-169211.jpeg?auto=compress&cs=tinysrgb&w=1600',
    images: [
      'https://images.pexels.com/photos/169211/pexels-photo-169211.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    strength: 'Coordination excellence & spacious layout'
  },
  {
    id: 'samaya-garden-estate',
    slug: 'samaya-garden-estate',
    name: 'Samaya Garden Estate',
    city: 'Bali',
    address: 'Jl. Sunset View No. 8, Bali',
    capacityMin: 150,
    capacityMax: 400,
    priceStart: 450_000_000,
    style: 'garden',
    isIndoor: false,
    isOutdoor: true,
    starRating: 3,
    finalScore: 94,
    heroImage:
      'https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=1600',
    images: [
      'https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    strength: 'Intimate garden ambience with sunset view'
  },
  {
    id: 'luxe-city-pavilion',
    slug: 'luxe-city-pavilion',
    name: 'Luxe City Pavilion',
    city: 'Surabaya',
    address: 'Jl. Raya Citylight No. 45, Surabaya',
    capacityMin: 200,
    capacityMax: 600,
    priceStart: 180_000_000,
    style: 'ballroom',
    isIndoor: true,
    isOutdoor: false,
    starRating: 1,
    finalScore: 82,
    heroImage:
      'https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=1600',
    images: [
      'https://images.pexels.com/photos/265947/pexels-photo-265947.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/169211/pexels-photo-169211.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    strength: 'Modern city ballroom with strong SOP'
  }
];

export function getVenueBySlug(slug: string): Venue | undefined {
  return venues.find((v) => v.slug === slug);
}

