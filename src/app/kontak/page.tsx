import { Button } from '@/components/ui/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const metadata = {
  title: 'Kontak Kami – Samaya Stars',
  description: 'Hubungi tim Samaya Stars untuk konsultasi venue pernikahan gratis.',
};

export default function KontakPage() {
  return (
    <main data-nav-theme="light" className="pt-32 pb-20">
      <div className="mx-auto max-w-container px-6">
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold mb-3">
            HUBUNGI KAMI
          </p>
          <h1 className="text-4xl font-bold text-primary mb-6">
            Mari Wujudkan Pernikahan Impian Anda
          </h1>
          <p className="text-lg text-neutral-600">
            Punya pertanyaan tentang venue atau butuh bantuan konsultasi? Tim ahli kami siap membantu Anda kapan saja.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-1">Telepon</h3>
                <p className="text-neutral-600">+62 812-3456-7890</p>
                <p className="text-neutral-500 text-sm">Senin - Jumat, 09:00 - 18:00</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-1">Email</h3>
                <p className="text-neutral-600">hello@samayastars.com</p>
                <p className="text-neutral-500 text-sm">Balasan dalam 24 jam</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-gold">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-primary mb-1">Kantor</h3>
                <p className="text-neutral-600">Jl. Sudirman No. 123, Jakarta Selatan</p>
                <p className="text-neutral-500 text-sm">Indonesia</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-neutral-100">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-neutral-700">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
                  placeholder="Masukkan nama Anda"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-neutral-700">Alamat Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
                  placeholder="email@contoh.com"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="subject" className="text-sm font-semibold text-neutral-700">Subjek</label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all"
                >
                  <option>Konsultasi Venue</option>
                  <option>Pertanyaan Umum</option>
                  <option>Kemitraan Vendor</option>
                  <option>Lainnya</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label htmlFor="message" className="text-sm font-semibold text-neutral-700">Pesan</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold transition-all resize-none"
                  placeholder="Ceritakan kebutuhan Anda..."
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <Button size="lg" fullWidth iconRight={<Send size={18} />}>
                  Kirim Pesan
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
