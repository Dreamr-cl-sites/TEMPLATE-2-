'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { site, images } from '@/lib/site-config';
import { Button } from '@/components/ui/button';

const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/locations', label: 'Service Areas' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="sticky top-3 z-40 transition-all">
      <div className="container">
        <div className={`mx-auto flex min-h-[72px] items-center justify-between rounded-full px-4 md:px-6 transition-all ${scrolled ? 'bg-white/82 shadow-[0_18px_50px_-34px_rgba(18,63,75,0.75)] backdrop-blur-xl' : 'bg-white/68 backdrop-blur-lg'}`}>
          <Link href="/" className="flex items-center gap-3" aria-label="Maston’s Plumbing and Drain home">
            <Image src={images.logo} alt="Maston’s Plumbing and Drain logo" width={142} height={59} priority className="h-12 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-full px-3 py-2 text-sm font-semibold text-brand-navy/80 transition hover:bg-brand-sky hover:text-brand-navy">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href={`tel:${site.phoneRaw}`} className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-navy transition hover:text-brand-rust">
              <Phone className="h-4 w-4" /> {site.phone}
            </Link>
            <Button asChild className="rounded-full bg-brand-rust text-white hover:bg-brand-accentDark">
              <Link href="/book">Book Service</Link>
            </Button>
          </div>

          <button className="rounded-md p-2 text-brand-navy lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="container mt-2 lg:hidden">
          <div className="rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-xl">
            <div className="flex flex-col">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="border-b border-brand-blue/10 py-3 text-base font-semibold text-brand-navy last:border-0">
                  {item.label}
                </Link>
              ))}
              <div className="flex gap-2 pt-4">
                <Button asChild variant="outline" className="flex-1 rounded-full">
                  <Link href={`tel:${site.phoneRaw}`}><Phone className="mr-1 h-4 w-4" />Call</Link>
                </Button>
                <Button asChild className="flex-1 rounded-full bg-brand-rust hover:bg-brand-accentDark">
                  <Link href="/book">Book</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
