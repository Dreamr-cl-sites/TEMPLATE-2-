import { Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/site-config';
import { Toaster } from '@/components/ui/sonner';
import Navbar from '@/components/site/Navbar';
import Footer from '@/components/site/Footer';
import EmergencyBar from '@/components/site/EmergencyBar';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' });
const grotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-grotesk', display: 'swap' });

// EDIT: SEO defaults. Add a real /public/og.jpg for social previews.
export const metadata = {
  metadataBase: new URL('https://example.com'),
  title: { default: `${site.name} — ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
  keywords: [`plumber in ${site.address.city}`, `${site.address.city} plumbing company`, 'local plumbing service'],
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    type: 'website',
    locale: 'en_US',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${grotesk.variable}`}>
      <body className="min-h-screen flex flex-col">
        <EmergencyBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster position="top-center" richColors closeButton />
      </body>
    </html>
  );
}
