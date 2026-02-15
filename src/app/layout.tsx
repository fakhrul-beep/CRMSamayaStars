import type { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'Samaya Stars – Wedding Venue Excellence',
  description: 'Authority-based wedding venue rating and assisted booking platform.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-neutral-50 text-neutral-900">
        {children}
      </body>
    </html>
  );
}

