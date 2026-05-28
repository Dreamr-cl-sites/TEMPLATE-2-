import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, ExternalLink, MapPin, Phone } from 'lucide-react';
import { site } from '@/lib/site-config';
import { locations, getLocation, getLocationServiceLinks } from '@/lib/locations-data';

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export function generateMetadata({ params }) {
  const location = getLocation(params.slug);
  if (!location) return {};

  return {
    title: `Plumber in ${location.name}, ${location.region}`,
    description: `${site.name} provides local plumbing services in ${location.name}, ${location.region}, including drain cleaning, water heater repair, and emergency plumbing.`,
  };
}

export default function LocationDetailPage({ params }) {
  const location = getLocation(params.slug);
  if (!location) notFound();

  const serviceLinks = getLocationServiceLinks();

  return (
    <>
      <section className="relative overflow-hidden border-b border-black/5">
        <div className="container pt-14 pb-16">
          <Link href="/locations" className="text-sm text-brand-mute hover:text-brand-navy">← All locations</Link>
          <div className="mt-4 max-w-3xl">
            <div className="eyebrow"><MapPin className="w-3.5 h-3.5" /> Location page</div>
            <h1 className="h-display text-5xl md:text-6xl leading-[0.95] mt-3">Plumber in {location.name}, {location.region}</h1>
            <p className="text-brand-mute mt-3">{location.summary}</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link href={`tel:${site.phoneRaw}`} className="btn-primary"><Phone className="w-4 h-4" /> Call {site.phone}</Link>
              <a href={location.gbpUrl} target="_blank" rel="noreferrer" className="btn-ghost inline-flex">
                View Google Business Profile <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid lg:grid-cols-2 gap-6">
          <div className="card-soft p-8">
            <h2 className="h-display text-4xl leading-[0.95]">Neighborhood coverage</h2>
            <p className="text-brand-mute mt-3">We regularly schedule jobs across these parts of {location.name}:</p>
            <ul className="mt-5 space-y-2 text-sm">
              {location.neighborhoods.map((area) => (
                <li key={area} className="inline-flex items-center gap-2 mr-4 mb-2"><MapPin className="w-4 h-4 text-brand-blue" /> {area}</li>
              ))}
            </ul>
          </div>

          <div className="card-soft p-8">
            <h2 className="h-display text-4xl leading-[0.95]">What to expect</h2>
            <div className="space-y-3 text-sm mt-4">
              <p><span className="font-semibold">Scheduling:</span> same-day slots are usually available.</p>
              <p><span className="font-semibold">Pricing:</span> written flat-rate quote before work starts.</p>
              <p><span className="font-semibold">Team:</span> licensed, background-checked technicians.</p>
              <p><span className="font-semibold">Guarantee:</span> one-year labor warranty on completed work.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white border-y border-black/5">
        <div className="container">
          <h2 className="h-display text-4xl md:text-5xl leading-[0.95]">Relevant services in {location.name}</h2>
          <p className="text-brand-mute mt-3">These service pages are internally linked from this location page to keep local/service intent tightly connected.</p>
          <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-4 gap-4">
            {serviceLinks.map((service) => (
              <Link key={service.slug} href={service.href} className="rounded-2xl border border-black/10 bg-white p-5 hover:bg-brand-sky/30 transition">
                <h3 className="font-display text-xl font-bold">{service.name}</h3>
                <p className="text-xs text-brand-mute mt-1">{service.keyword}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue">Open service page <ArrowRight className="w-4 h-4" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
