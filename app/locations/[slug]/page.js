import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ExternalLink, MapPin, Phone } from 'lucide-react';
import { site } from '@/lib/site-config';
import { getLocation, getLocationServiceLinks, locations } from '@/lib/locations-data';

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export function generateMetadata({ params }) {
  const location = getLocation(params.slug);
  if (!location) return {};
  return {
    title: `Plumber in ${location.name}, ${location.region}`,
    description: `${site.name} serves ${location.name}, ${location.region} with emergency plumbing, drain cleaning, water heaters, leak repair, sewer service, and more.`,
  };
}

export default function LocationDetailPage({ params }) {
  const location = getLocation(params.slug);
  if (!location) notFound();
  const serviceLinks = getLocationServiceLinks();

  return (
    <>
      <section className="relative overflow-hidden border-b border-brand-blue/10">
        <div className="container pb-16 pt-14">
          <Link href="/locations" className="text-sm text-brand-mute hover:text-brand-navy">← All service areas</Link>
          <div className="mt-4 max-w-3xl">
            <div className="eyebrow"><MapPin className="h-3.5 w-3.5" /> Maston’s service area</div>
            <h1 className="h-display mt-3 text-5xl leading-[0.95] md:text-6xl">Plumber in {location.name}, {location.region}</h1>
            <p className="mt-3 text-brand-mute">{location.summary}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href={`tel:${site.phoneRaw}`} className="btn-primary"><Phone className="h-4 w-4" /> Call {site.phone}</Link>
              <a href={location.gbpUrl} target="_blank" rel="noreferrer" className="btn-secondary inline-flex">
                Search Maston’s locally <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-6 lg:grid-cols-2">
          <div className="card-soft p-8">
            <h2 className="h-display text-4xl leading-[0.95]">Neighborhood coverage</h2>
            <p className="mt-3 text-brand-mute">Maston’s regularly schedules plumbing and drain calls around these parts of {location.name}:</p>
            <ul className="mt-5 space-y-2 text-sm">
              {location.neighborhoods.map((area) => (
                <li key={area} className="mb-2 mr-4 inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-blue" /> {area}</li>
              ))}
            </ul>
          </div>

          <div className="card-soft p-8">
            <h2 className="h-display text-4xl leading-[0.95]">What to expect</h2>
            <div className="mt-4 space-y-3 text-sm">
              <p><span className="font-semibold">Scheduling:</span> emergency calls are prioritized, with same-day options when available.</p>
              <p><span className="font-semibold">Communication:</span> dispatch and technicians explain the next step in plain language.</p>
              <p><span className="font-semibold">Team:</span> local professionals focused on clean, respectful plumbing service.</p>
              <p><span className="font-semibold">Scope:</span> repairs, drains, water heaters, sewer concerns, filtration, gas lines, and commercial support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-y border-brand-blue/10 bg-white">
        <div className="container">
          <h2 className="h-display text-4xl leading-[0.95] md:text-5xl">Relevant services in {location.name}</h2>
          <p className="mt-3 text-brand-mute">Choose the closest service or call Maston’s and describe the symptom.</p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {serviceLinks.map((service) => (
              <Link key={service.slug} href={service.href} className="rounded-2xl border border-brand-blue/10 bg-white p-5 transition hover:bg-brand-sky/50">
                <h3 className="font-display text-xl font-bold">{service.name}</h3>
                <p className="mt-1 text-xs text-brand-mute">{service.keyword}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue">Open service page <ArrowRight className="h-4 w-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
