import Link from 'next/link';
import { Phone, Mail, MapPin, Droplet, Facebook, Instagram, Youtube } from 'lucide-react';
import { site } from '@/lib/site-config';
import { services } from '@/lib/services-data';
import { locations } from '@/lib/locations-data';

export default function Footer() {
  return (
    <footer className="bg-[#090d12] text-white mt-auto">
      <div className="container py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-white/10 grid place-items-center">
              <Droplet className="w-5 h-5 text-brand-accent" />
            </div>
            <div className="font-display font-bold text-xl tracking-[-0.02em]">{site.name}</div>
          </Link>
          <p className="mt-4 text-sm text-white/65 leading-relaxed">{site.description}</p>
          <div className="mt-5 flex gap-2">
            {site.social.facebook && <a href={site.social.facebook} aria-label="Facebook" className="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-brand-accent transition"><Facebook className="w-4 h-4" /></a>}
            {site.social.instagram && <a href={site.social.instagram} aria-label="Instagram" className="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-brand-accent transition"><Instagram className="w-4 h-4" /></a>}
            {site.social.youtube && <a href={site.social.youtube} aria-label="YouTube" className="w-9 h-9 grid place-items-center rounded-full bg-white/10 hover:bg-brand-accent transition"><Youtube className="w-4 h-4" /></a>}
          </div>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.28em] text-brand-accent font-semibold">Services</div>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}><Link href={`/services/${s.slug}`} className="text-white/75 hover:text-white transition">{s.name}</Link></li>
            ))}
            <li><Link href="/services" className="text-brand-accent hover:underline">See all services →</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.28em] text-brand-accent font-semibold">Company</div>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/about" className="text-white/75 hover:text-white">About us</Link></li>
            <li><Link href="/locations" className="text-white/75 hover:text-white">Locations</Link></li>
            <li><Link href="/faq" className="text-white/75 hover:text-white">FAQ</Link></li>
            <li><Link href="/blog" className="text-white/75 hover:text-white">Blog</Link></li>
            <li><Link href="/contact" className="text-white/75 hover:text-white">Contact</Link></li>
            <li><Link href="/book" className="text-white/75 hover:text-white">Book online</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-[10px] uppercase tracking-[0.28em] text-brand-accent font-semibold">Contact Matrix</div>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 text-brand-accent" /><a href={`tel:${site.phoneRaw}`} className="hover:text-white">{site.phone}</a></li>
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 text-brand-accent" /><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 text-brand-accent" /><span>{site.address.line1}<br />{site.address.city}, {site.address.region} {site.address.postal}</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-6">
          <div className="text-[10px] uppercase tracking-[0.28em] text-brand-accent font-semibold">Areas we serve</div>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {locations.map((location) => (
              <Link key={location.slug} href={`/locations/${location.slug}`} className="text-white/70 hover:text-white transition">
                {location.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] text-white/55">
          <div>© {new Date().getFullYear()} {site.name}. All rights reserved.</div>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white">Privacy</Link>
            <Link href="/terms" className="hover:text-white">Terms</Link>
            <span>Lic. #PL-00928374</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
