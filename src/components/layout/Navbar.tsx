'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useNavbarTheme } from '@/hooks/useNavbarTheme';
import clsx from 'classnames';

const navLinks = [
  { name: 'Halaman Utama', href: '/' },
  { name: 'Venues', href: '/venues' },
  { name: 'Tentang Kami', href: '/tentang-kami' },
  { name: 'Berita', href: '/berita' },
  { name: 'Kontak', href: '/kontak' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, isScrolled } = useNavbarTheme();
  const pathname = usePathname();

  // Warna teks dasar berdasarkan tema background di bawahnya
  // light background -> dark text (primary)
  // dark background -> light text (white)
  const isDarkText = theme === 'light';

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-in-out',
        isScrolled 
          ? 'border-b border-neutral-200/50 bg-neutral-50/90 backdrop-blur-md py-3 shadow-sm' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="mx-auto flex max-w-container items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className={clsx(
            "text-xl font-bold tracking-[0.2em] transition-colors duration-300 group-hover:text-gold",
            isDarkText || isScrolled ? "text-primary" : "text-white"
          )}>
            SAMAYA<span className="text-gold">STARS</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'text-sm font-semibold transition-all duration-300 hover:text-gold relative py-1',
                  isActive 
                    ? 'text-gold' 
                    : (isDarkText || isScrolled ? 'text-neutral-800' : 'text-white/90'),
                  // Underline effect for active link
                  isActive && 'after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-gold after:rounded-full'
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 md:flex">
          <button 
            className={clsx(
              "p-2 transition-colors duration-300 hover:text-gold",
              isDarkText || isScrolled ? "text-neutral-700" : "text-white"
            )} 
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          <Link href="/kontak">
            <Button 
              size="sm" 
              className={clsx(
                "rounded-full shadow-sm transition-all duration-300",
                !isScrolled && theme === 'dark' && "bg-white text-primary hover:bg-neutral-100 border-transparent"
              )}
            >
              Konsultasi Gratis
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={clsx(
            "p-2 md:hidden transition-colors duration-300",
            isDarkText || isScrolled ? "text-neutral-900" : "text-white"
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={clsx(
          'absolute inset-x-0 top-full overflow-hidden bg-neutral-50 transition-all duration-500 ease-in-out md:hidden shadow-xl border-b border-neutral-200',
          isOpen ? 'max-h-[450px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="flex flex-col gap-4 p-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'text-lg font-bold transition-colors hover:text-gold',
                pathname === link.href ? 'text-gold' : 'text-primary'
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 mt-2 border-t border-neutral-100">
            <Link href="/kontak" onClick={() => setIsOpen(false)}>
              <Button fullWidth size="md" className="rounded-full py-6 text-lg">
                Konsultasi Gratis
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
