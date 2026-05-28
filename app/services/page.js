import Image from 'next/image';
import Link from 'next/link';
import { Building2, ChevronRight, Droplets, Flame, GitFork, Pipette, ShieldCheck, Siren, Waves, Wrench } from 'lucide-react';
import { services } from '@/lib/services-data';
import { images, site } from '@/lib/site-config';
import CtaBanner from '@/components/site/CtaBanner';

const ICONS = { Siren, Waves, Flame, Droplets, Pipette, Wrench, GitFork, Building2, ShieldCheck };

export const metadata = {
  title: `Plumbing Services in ${site.address.city}`,
  description: 'Emergency plumbing, drain cleaning, sewer service, water heaters, leak repair, gas lines, filtration, repiping, and commercial plumbing from Maston’s.',
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-brand-blue/10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-white to-brand-sky" />
        <div className="container relative grid gap-10 pb-20 pt-16 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <div className="eyebrow"><Wrench className="h-3.5 w-3.5" /> Maston’s services</div>
            <h1 className="h-display mt-3 text-5xl leading-[0.95] md:text-6xl">Plumbing and drain help for Tulsa homes and businesses.</h1>
            <p className="mt-5 max-w-2xl text-lg text-brand-mute">
              From a late-night emergency to a planned water filtration upgrade, Maston’s gives Green Country a local team, clear communication, and service the way it ought to be.
            </p>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-3xl bg-brand-sky shadow-xl">
            <Image src={images.van} alt="Maston’s Plumbing and Drain service van" fill className="object-contain p-6" sizes="50vw" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = ICONS[service.icon] || Wrench;
            return (
              <Link key={service.slug} href={`/services/${service.slug}`} className="card-soft group flex flex-col p-7 transition-all hover:-translate-y-1 hover:shadow-xl">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-sky transition group-hover:bg-brand-accent">
                  <Icon className="h-6 w-6 text-brand-blue transition group-hover:text-white" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-brand-navy">{service.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-mute">{service.short}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs font-semibold text-brand-mute">Tulsa metro service</span>
                  <span className="inline-flex items-center gap-1 text-sm font-bold text-brand-blue transition group-hover:text-brand-rust">Details <ChevronRight className="h-4 w-4" /></span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <CtaBanner title="Know what you need, or just know something is wrong?" subtitle="Call Maston’s. A real person will help route the right plumber, drain technician, or water heater specialist." />
    </>
  );
}
