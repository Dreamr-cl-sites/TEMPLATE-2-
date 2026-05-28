'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Droplet } from 'lucide-react';
import { site } from '@/lib/site-config';
import { Button } from '@/components/ui/button';

// EDIT: Navigation links — add/remove pages here.
const nav = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/locations', label: 'Locations' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/blog', label: 'Blog' },
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
      <div className={`container`}>
        <div className={`mx-auto flex items-center justify-between h-16 md:h-[70px] rounded-full px-4 md:px-6 transition-all ${scrolled ? 'bg-white/68 backdrop-blur-xl shadow-[0_14px_50px_-34px_rgba(5,10,20,0.55)]' : 'bg-white/55 backdrop-blur-lg'}`}>
        <Link href="/" className="flex items-center gap-2.5 group">
          {/* EDIT: replace this icon with the client logo (e.g. <Image src="/logo.svg" .../>) */}
          <div className="w-9 h-9 rounded-full bg-brand-navy grid place-items-center group-hover:rotate-6 transition">
            <Droplet className="w-5 h-5 text-brand-accent" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold tracking-[-0.02em] text-brand-navy text-lg">{site.name}</div>
            <div className="text-[9px] uppercase tracking-[0.24em] text-brand-mute">{site.tagline}</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="px-3 py-2 text-sm font-medium text-brand-navy/80 hover:text-brand-navy hover:bg-white rounded-full transition">
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Link href={`tel:${site.phoneRaw}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy hover:text-brand-blue transition">
            <Phone className="w-4 h-4" /> {site.phone}
          </Link>
          <Button asChild className="bg-brand-navy hover:bg-[#12171d] text-white rounded-full">
            <Link href="/book">Book Online</Link>
          </Button>
        </div>

        <button className="lg:hidden p-2 rounded-md text-brand-navy" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden mt-2 container">
          <div className="rounded-3xl bg-white/90 backdrop-blur-xl shadow-lg">
          <div className="container py-3 flex flex-col">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 text-base font-medium text-brand-navy border-b border-black/5 last:border-0">
                {n.label}
              </Link>
            ))}
            <div className="flex gap-2 pt-4">
              <Button asChild variant="outline" className="flex-1 rounded-full"><Link href={`tel:${site.phoneRaw}`}><Phone className="w-4 h-4 mr-1" />Call</Link></Button>
              <Button asChild className="flex-1 rounded-full bg-brand-navy hover:bg-[#12171d]"><Link href="/book">Book Online</Link></Button>
            </div>
          </div>
        </div>
        </div>
      )}
    </header>
  );
}
