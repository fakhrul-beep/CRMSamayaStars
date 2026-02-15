import { Button } from '@/components/ui/Button';
import { CheckCircle2, Users, Award, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Tentang Kami – Samaya Stars',
  description: 'Mengenal lebih dekat Samaya Stars, platform kurasi venue pernikahan terbaik di Indonesia.',
};

export default function TentangKamiPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section data-nav-theme="dark" className="bg-primary text-white py-24 md:py-32">
        <div className="mx-auto max-w-container px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold mb-4">
            OUR STORY
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Menetapkan Standar Baru untuk<br className="hidden md:block" /> Venue Pernikahan
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Samaya Stars lahir dari visi untuk memberikan transparansi dan kualitas tanpa kompromi dalam pemilihan venue pernikahan di seluruh Indonesia.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section data-nav-theme="light" className="py-20 bg-white border-b border-neutral-100">
        <div className="mx-auto max-w-container px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-neutral-500 text-sm uppercase tracking-widest font-semibold">Venue Terkurasi</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-neutral-500 text-sm uppercase tracking-widest font-semibold">Kota di Indonesia</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10k+</div>
              <p className="text-neutral-500 text-sm uppercase tracking-widest font-semibold">Pasangan Terbantu</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
              <p className="text-neutral-500 text-sm uppercase tracking-widest font-semibold">Rating Kepuasan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-neutral-50">
        <div className="mx-auto max-w-container px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/313707/pexels-photo-313707.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Luxury wedding venue" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Misi Kami</h2>
                <p className="text-neutral-600 leading-relaxed">
                  Memberikan panduan otoritatif dan independen bagi pasangan dalam memilih venue pernikahan, memastikan setiap momen spesial dirayakan di tempat yang benar-benar memenuhi standar kualitas terbaik.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 text-gold">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Integritas & Independensi</h3>
                    <p className="text-neutral-600 text-sm">Sistem rating kami bebas dari pengaruh biaya iklan, memastikan kejujuran untuk setiap ulasan.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 text-gold">
                    <Award size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">Kurasi Berstandar Tinggi</h3>
                    <p className="text-neutral-600 text-sm">Setiap venue melalui proses audit ketat sebelum mendapatkan sertifikasi Samaya Stars.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gold text-primary">
        <div className="mx-auto max-w-container px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Siap Menemukan Venue Impian Anda?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/venues">
              <Button variant="primary" className="bg-primary text-white hover:bg-primary-light px-10 rounded-full">
                Jelajahi Venue
              </Button>
            </Link>
            <Link href="/kontak">
              <Button variant="secondary" className="border-primary text-primary hover:bg-primary/5 px-10 rounded-full">
                Konsultasi Sekarang
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
