import Link from 'next/link';
import Image from 'next/image';
import { Wrench, ArrowRight, ChevronRight, Siren, Waves, Flame, Droplets, Pipette, GitFork, Building2 } from 'lucide-react';
import { services } from '@/lib/services-data';
import { images, site } from '@/lib/site-config';
import CtaBanner from '@/components/site/CtaBanner';

const ICONS = { Siren, Waves, Flame, Droplets, Pipette, Wrench, GitFork, Building2 };
export const metadata = { title: `Plumbing Services in ${site.address.city}`, description: 'Dedicated pages for each plumbing service with service-specific keywords, pricing expectations, process details, and FAQs.' };

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-black/5">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-white to-brand-sky" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container relative pt-16 pb-20 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-end">
          <div>
            <div className="eyebrow"><Wrench className="w-3.5 h-3.5" /> Services</div>
            <h1 className="h-display text-5xl md:text-6xl mt-3">Every plumbing service your home needs.</h1>
            <p className="mt-5 text-lg text-brand-mute max-w-2xl">From a midnight burst pipe to a planned whole-home repipe — master plumbers, flat-rate pricing, one-year labor warranty on everything.</p>
          </div>
          <div className="relative aspect-[5/4] rounded-3xl overflow-hidden shadow-xl"><Image src={images.workShot3} alt="Plumber" fill className="object-cover" sizes="50vw" /></div>
        </div>
      </section>

      <section className="section">
        <div className="container grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => {
            const Icon = ICONS[s.icon] || Wrench;
            return (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card-soft p-7 group hover:-translate-y-1 hover:shadow-xl transition-all flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-brand-sky grid place-items-center group-hover:bg-brand-accent transition"><Icon className="w-6 h-6 text-brand-blue group-hover:text-white transition" /></div>
                <h3 className="mt-5 font-display text-xl font-bold text-brand-navy">{s.name}</h3>
                <p className="mt-2 text-sm text-brand-mute leading-relaxed flex-1">{s.short}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-brand-mute">From <span className="font-semibold text-brand-navy">${s.priceFrom}</span></span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue group-hover:text-brand-accent transition">Details <ChevronRight className="w-4 h-4" /></span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
