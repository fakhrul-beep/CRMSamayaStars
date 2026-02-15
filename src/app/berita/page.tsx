import Link from 'next/link';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const blogPosts = [
  {
    id: 1,
    title: '10 Tren Venue Pernikahan di Tahun 2026',
    excerpt: 'Temukan konsep pernikahan paling populer mulai dari outdoor garden hingga luxury ballroom.',
    author: 'Admin Samaya',
    date: '15 Feb 2026',
    category: 'Trends',
    image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 2,
    title: 'Tips Memilih Venue yang Sesuai dengan Budget',
    excerpt: 'Jangan biarkan biaya menghalangi impian Anda. Pelajari cara negosiasi dan pemilihan paket yang tepat.',
    author: 'Wedding Expert',
    date: '10 Feb 2026',
    category: 'Tips',
    image: 'https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 3,
    title: 'Review: 5 Ballroom Terbaik di Jakarta Selatan',
    excerpt: 'Kami mengaudit ballroom terpopuler berdasarkan fasilitas, layanan, dan aksesibilitas.',
    author: 'Samaya Auditor',
    date: '05 Feb 2026',
    category: 'Reviews',
    image: 'https://images.pexels.com/photos/260454/pexels-photo-260454.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
];

export const metadata = {
  title: 'Berita & Blog – Samaya Stars',
  description: 'Informasi terbaru, tips pernikahan, dan tren venue dari para ahli di Samaya Stars.',
};

export default function BeritaPage() {
  return (
    <main data-nav-theme="light" className="pt-32 pb-24">
      <div className="mx-auto max-w-container px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold mb-3">
              JOURNAL & NEWS
            </p>
            <h1 className="text-4xl font-bold text-primary mb-4">
              Inspirasi & Berita Terbaru
            </h1>
            <p className="text-neutral-600">
              Tetap terupdate dengan tren industri pernikahan dan panduan eksklusif dari tim kurator kami.
            </p>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto">
            {['Semua', 'Trends', 'Tips', 'Reviews'].map((cat) => (
              <button 
                key={cat}
                className="px-6 py-2 rounded-full border border-neutral-200 text-sm font-medium hover:border-gold hover:text-gold transition-colors whitespace-nowrap"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <article key={post.id} className="group bg-white rounded-2xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-bold text-gold uppercase tracking-widest">
                  {post.category}
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-xs text-neutral-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={14} />
                    {post.author}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-primary group-hover:text-gold transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-neutral-600 text-sm line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <Link 
                  href={`/berita/${post.id}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all"
                >
                  Baca Selengkapnya <ArrowRight size={16} className="text-gold" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Button variant="secondary" size="lg" className="rounded-full px-12">
            Lihat Lebih Banyak Artikel
          </Button>
        </div>
      </div>
    </main>
  );
}
