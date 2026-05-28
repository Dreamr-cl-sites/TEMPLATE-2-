import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Mail, MapPin, Phone, Star } from 'lucide-react';
import { site, images } from '@/lib/site-config';
import { services } from '@/lib/services-data';
import { locations } from '@/lib/locations-data';

export default function Footer() {
  return (
    <footer className="mt-auto bg-brand-navy text-white">
      <div className="container grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.2fr_0.9fr_0.9fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center rounded-xl bg-white p-3">
            <Image src={images.logo} alt="Maston’s Plumbing and Drain logo" width={158} height={66} className="h-14 w-auto" />
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/72">{site.description}</p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold">
            <Star className="h-4 w-4 fill-brand-accent text-brand-accent" /> {site.rating} rating from {site.reviewCount} local reviews
          </div>
          <div className="mt-5 flex gap-2">
            {site.social.facebook && (
              <a href={site.social.facebook} aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-brand-accent">
                <Facebook className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand-accent">Services</div>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.slice(0, 8).map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="text-white/76 transition hover:text-white">{service.name}</Link>
              </li>
            ))}
            <li><Link href="/services" className="font-semibold text-brand-accent hover:underline">All services</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand-accent">Company</div>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link href="/about" className="text-white/76 hover:text-white">About Maston’s</Link></li>
            <li><Link href="/locations" className="text-white/76 hover:text-white">Service Areas</Link></li>
            <li><Link href="/faq" className="text-white/76 hover:text-white">FAQ</Link></li>
            <li><Link href="/blog" className="text-white/76 hover:text-white">Plumbing Tips</Link></li>
            <li><Link href="/contact" className="text-white/76 hover:text-white">Contact</Link></li>
            <li><Link href="/book" className="text-white/76 hover:text-white">Book Service</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand-accent">Contact</div>
          <ul className="mt-4 space-y-3 text-sm text-white/82">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-brand-accent" /><a href={`tel:${site.phoneRaw}`} className="hover:text-white">{site.phone}</a></li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-brand-accent" /><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-brand-accent" /><span>{site.address.line1}<br />{site.address.city}, {site.address.region} {site.address.postal}</span></li>
          </ul>
          <p className="mt-4 text-sm text-white/65">{site.hours}</p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-6">
          <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-brand-accent">Areas we serve</div>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
            {locations.map((location) => (
              <Link key={location.slug} href={`/locations/${location.slug}`} className="text-white/70 transition hover:text-white">{location.name}</Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-between gap-2 py-5 text-[11px] text-white/55 md:flex-row">
          <div>© {new Date().getFullYear()} {site.legalName}. All rights reserved.</div>
          <div>{site.tagline}</div>
        </div>
      </div>
    </footer>
  );
}
