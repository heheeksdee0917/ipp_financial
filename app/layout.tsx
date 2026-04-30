import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ipp.com.my'),
  title: {
    default: 'IPP Financial Planning Group',
    template: '%s | IPP',
  },
  description:
    "IPP Financial Planning Group — Malaysia's premier financial advisory. Wealth protection, accumulation, management and distribution for professionals and high net worth individuals.",
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    siteName: 'IPP Financial Planning Group',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
