import type { Metadata } from 'next';
import './globals.css';
import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'], weight: ['300','400','500','700'] });

export const metadata: Metadata = {
  title: 'Portafolio',
  description: 'Portafolio de Pedro Arreguez',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen w-full bg-gradient-violet ${rubik.className}`}>{children}</body>
    </html>
  );
}
