'use client';

import { useState, useEffect } from 'react';
import { isLightBackground } from '@/lib/colors';

export type NavbarTheme = 'light' | 'dark';

export function useNavbarTheme() {
  const [theme, setTheme] = useState<NavbarTheme>('dark'); // Default dark (text putih) untuk hero
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      // Cari elemen yang berada tepat di posisi navbar (misal 40px dari atas)
      const elementUnderNavbar = document.elementFromPoint(window.innerWidth / 2, 40);
      
      if (elementUnderNavbar) {
        // Cari parent terdekat yang memiliki background atau tema eksplisit
        const section = elementUnderNavbar.closest('section, header, footer, main') as HTMLElement;
        
        if (section) {
          // 1. Cek atribut data-theme eksplisit (prioritas utama)
          const explicitTheme = section.getAttribute('data-nav-theme') as NavbarTheme;
          if (explicitTheme) {
            setTheme(explicitTheme);
            return;
          }

          // 2. Jika tidak ada, deteksi warna background secara dinamis
          const computedStyle = window.getComputedStyle(section);
          const bgColor = computedStyle.backgroundColor;
          
          // Gunakan utility luminance untuk menentukan tema
          // Threshold 0.5 untuk menentukan apakah ini "terang"
          if (isLightBackground(bgColor, 0.5)) {
            setTheme('light'); // Background terang -> Teks Gelap
          } else {
            setTheme('dark'); // Background gelap -> Teks Putih
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Jalankan sekali saat mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { theme, isScrolled };
}
