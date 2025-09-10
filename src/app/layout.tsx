import type { Metadata } from 'next';
import './globals.css';

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
      <body className='min-h-screen w-full bg-gradient-violet'>{children}</body>
    </html>
  );
}
