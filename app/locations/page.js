import Link from 'next/link';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { site } from '@/lib/site-config';
import { locations } from '@/lib/locations-data';

const city = site.address.city;

export const metadata = {
  title: `Plumbing Service Areas | ${city} Metro`,
  description: `Location-specific plumbing pages for every city we serve around ${city}. Find your area and call for same-day service.`,
};

export default function LocationsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-black/5">
        <div className="container pt-14 pb-16">
          <div className="max-w-3xl">
            <div className="eyebrow"><MapPin className="w-3.5 h-3.5" /> Service areas</div>
            <h1 className="h-display text-5xl md:text-6xl leading-[0.95] mt-3">Local plumbing pages for each city we serve.</h1>
            <p className="text-brand-mute mt-3">Pick your city page for area-specific coverage, neighborhood details, and links to the most relevant plumbing services.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {locations.map((location) => (
            <Link key={location.slug} href={`/locations/${location.slug}`} className="card-soft p-6 hover:-translate-y-1 transition">
              <h2 className="h-display text-3xl leading-tight">{location.name}, {location.region}</h2>
              <p className="text-sm text-brand-mute mt-2">{location.summary}</p>
              <p className="text-xs text-brand-blue mt-4">Neighborhoods: {location.neighborhoods.join(', ')}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue">Open location page <ArrowRight className="w-4 h-4" /></span>
            </Link>
          ))}
        </div>

        <div className="container mt-12">
          <div className="card-soft p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="h-display text-3xl leading-tight">Not sure which location page fits?</h3>
              <p className="text-brand-mute mt-2">Call and we will route you to the right local service team.</p>
            </div>
            <Link href={`tel:${site.phoneRaw}`} className="btn-primary"><Phone className="w-4 h-4" /> Call {site.phone}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
