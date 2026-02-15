import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = [
  {
    title: 'Layanan',
    links: [
      { name: 'Cari Venue', href: '/venues' },
      { name: 'Konsultasi Wedding', href: '/kontak' },
      { name: 'Paket Bundling', href: '/venues' },
      { name: 'Rekomendasi Vendor', href: '/venues' },
    ],
  },
  {
    title: 'Perusahaan',
    links: [
      { name: 'Tentang Kami', href: '/tentang-kami' },
      { name: 'Berita & Blog', href: '/berita' },
      { name: 'Karir', href: '/tentang-kami' },
      { name: 'Kontak', href: '/kontak' },
    ],
  },
  {
    title: 'Bantuan',
    links: [
      { name: 'FAQ', href: '/kontak' },
      { name: 'Kebijakan Privasi', href: '/kebijakan-privasi' },
      { name: 'Syarat & Ketentuan', href: '/syarat-ketentuan' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-primary text-neutral-50 pt-20 pb-10">
      <div className="mx-auto max-w-container px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-[0.2em]">
              SAMAYA<span className="text-gold">STARS</span>
            </Link>
            <p className="text-neutral-400 max-w-sm leading-relaxed">
              Platform kurasi venue pernikahan terpercaya di Indonesia. Kami membantu Anda menemukan tempat impian dengan standar kualitas bintang lima.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-gold transition-colors text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-gold transition-colors text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 bg-neutral-800 rounded-full hover:bg-gold transition-colors text-white">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gold">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-neutral-400 hover:text-gold transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-neutral-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Samaya Stars. Seluruh hak cipta dilindungi.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-neutral-500">
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-gold" />
              <span>+62 812-3456-7890</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-gold" />
              <span>hello@samayastars.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
