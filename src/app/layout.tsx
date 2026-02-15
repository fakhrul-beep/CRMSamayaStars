import type { ReactNode } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import './globals.css';

export const metadata = {
  title: 'Samaya Stars – Wedding Venue Excellence',
  description: 'Authority-based wedding venue rating and assisted booking platform.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id">
      <body className="bg-neutral-50 text-neutral-900 flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}

