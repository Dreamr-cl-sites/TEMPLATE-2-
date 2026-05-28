import Link from 'next/link';
import { ArrowRight, MapPin, Phone } from 'lucide-react';
import { site } from '@/lib/site-config';
import { locations } from '@/lib/locations-data';

export const metadata = {
  title: `Plumbing Service Areas | ${site.address.city} Metro`,
  description: `Maston’s Plumbing and Drain serves Tulsa, Broken Arrow, Bixby, Jenks, Owasso, Sand Springs, Sapulpa, and surrounding Green Country communities.`,
};

export default function LocationsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-brand-blue/10">
        <div className="container pb-16 pt-14">
          <div className="max-w-3xl">
            <div className="eyebrow"><MapPin className="h-3.5 w-3.5" /> Service areas</div>
            <h1 className="h-display mt-3 text-5xl leading-[0.95] md:text-6xl">Tulsa-area plumbing service across Green Country.</h1>
            <p className="mt-3 text-brand-mute">Maston’s routes plumbing and drain service across Tulsa and the nearby communities that depend on fast, friendly, local help.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {locations.map((location) => (
            <Link key={location.slug} href={`/locations/${location.slug}`} className="card-soft p-6 transition hover:-translate-y-1">
              <h2 className="h-display text-3xl leading-tight">{location.name}, {location.region}</h2>
              <p className="mt-2 text-sm text-brand-mute">{location.summary}</p>
              <p className="mt-4 text-xs text-brand-blue">Neighborhoods: {location.neighborhoods.join(', ')}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue">Open service-area page <ArrowRight className="h-4 w-4" /></span>
            </Link>
          ))}
        </div>

        <div className="container mt-12">
          <div className="card-soft flex flex-col gap-4 p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="h-display text-3xl leading-tight">Not sure whether Maston’s serves your address?</h3>
              <p className="mt-2 text-brand-mute">Call and dispatch will confirm coverage and the right service path.</p>
            </div>
            <Link href={`tel:${site.phoneRaw}`} className="btn-primary"><Phone className="h-4 w-4" /> Call {site.phone}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
