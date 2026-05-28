'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ArrowRight, CheckCircle2, Clock, MapPin, Phone, ShieldCheck, Star, Wrench } from 'lucide-react';
import { site, images, testimonials } from '@/lib/site-config';
import { services } from '@/lib/services-data';
import { locations } from '@/lib/locations-data';
import CtaBanner from '@/components/site/CtaBanner';

const serviceImages = {
  'emergency-plumbing': images.van,
  'drain-cleaning': images.workShot3,
  'sewer-drain': images.workShot1,
  'water-heaters': images.plumberTeam,
  'leak-detection': images.heroPlumber,
  'gas-lines': images.workShot2,
  'water-filtration': images.workShot1,
  'fixtures-toilets-disposals': images.heroPlumber,
  repiping: images.plumberTeam,
  'commercial-plumbing': images.van,
  'service-agreements': images.workShot2,
};

export default function HomePage() {
  const [activeServiceSlug, setActiveServiceSlug] = useState(services[0].slug);
  const activeService = useMemo(
    () => services.find((service) => service.slug === activeServiceSlug) || services[0],
    [activeServiceSlug],
  );

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#fff6e6_0%,#fffaf0_48%,#ddefef_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-brand-cream to-transparent" />
        <div className="container relative grid gap-12 pb-20 pt-16 md:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="eyebrow"><ShieldCheck className="h-3.5 w-3.5" /> Veteran owned plumbing in Tulsa</p>
            <h1 className="h-display mt-4 max-w-4xl text-5xl leading-[0.95] md:text-7xl">
              Plumbing service the way it ought to be.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-mute">
              Maston’s Plumbing and Drain helps Tulsa-area homeowners and businesses with 24/7 emergency plumbing, drain cleaning, water heaters, sewer and drain work, leak repair, gas lines, and everyday fixture service.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={`tel:${site.phoneRaw}`} className="btn-primary magnetic"><Phone className="h-4 w-4" /> Call {site.phone}</Link>
              <Link href="/book" className="btn-secondary magnetic">Book service <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 md:grid-cols-4">
              {site.stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-brand-blue/10 bg-white/75 p-4">
                  <div className="font-display text-2xl font-bold text-brand-navy">{stat.value}</div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-mute">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative aspect-[5/4] overflow-hidden rounded-[2rem] bg-brand-navy shadow-2xl">
              <Image src={images.van} alt="Maston’s Plumbing and Drain branded service van" fill priority className="object-contain object-center p-6" sizes="(max-width: 1024px) 100vw, 48vw" />
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-white p-5 shadow-xl md:left-auto md:w-80">
              <div className="flex items-center gap-1 text-brand-accent">
                {Array.from({ length: 5 }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-2 text-sm font-semibold text-brand-navy">“{testimonials[0].quote}”</p>
              <p className="mt-2 text-xs text-brand-mute">{testimonials[0].name}, {testimonials[0].city}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="eyebrow"><Wrench className="h-3.5 w-3.5" /> Exact services</p>
              <h2 className="h-display mt-3 text-4xl leading-[0.95] md:text-5xl">Tulsa plumbing help without the runaround.</h2>
              <p className="mt-4 text-brand-mute">Every service page is built around real Maston’s offerings, from emergency calls to planned water quality upgrades.</p>
            </div>
            <div className="rounded-2xl bg-white p-4 text-sm text-brand-mute">
              Serving {site.serviceArea}.
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="card-soft p-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onMouseEnter={() => setActiveServiceSlug(service.slug)}
                  className={`group flex items-center justify-between rounded-xl px-4 py-3 transition ${activeService.slug === service.slug ? 'bg-brand-navy text-white' : 'text-brand-navy hover:bg-brand-sky'}`}
                >
                  <div>
                    <h3 className="font-display text-xl font-bold">{service.name}</h3>
                    <p className={`text-xs ${activeService.slug === service.slug ? 'text-white/70' : 'text-brand-mute'}`}>{service.keyword}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
            <div className="card-soft overflow-hidden">
              <div className="relative aspect-[16/10]">
                <Image src={serviceImages[activeService.slug] || images.workShot1} alt={activeService.name} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="font-display text-4xl font-bold leading-none">{activeService.name}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/80">{activeService.short}</p>
                  <Link href={`/services/${activeService.slug}`} className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-brand-navy">
                    View details <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-brand-sky">
            <Image src={images.mascot} alt="Maston’s friendly plumber mascot" fill className="object-contain p-8" sizes="(max-width: 1024px) 100vw, 48vw" />
          </div>
          <div>
            <p className="eyebrow"><CheckCircle2 className="h-3.5 w-3.5" /> Why Tulsa calls Maston’s</p>
            <h2 className="h-display mt-3 text-4xl leading-[0.95] md:text-5xl">Friendly enough for your home. Serious enough for the problem.</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'Veteran-owned accountability',
                'Family-owned service culture',
                'Emergency help, day or night',
                'Options explained before work starts',
                'Local technicians serving Green Country',
                'Clean, respectful work in your home',
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-xl bg-brand-cream p-4 text-brand-navy">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-rust" />
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow justify-center"><Star className="h-3.5 w-3.5" /> Local proof</p>
            <h2 className="h-display mt-3 text-4xl leading-[0.95] md:text-5xl">Customers call it professional, honest, and refreshingly human.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.slice(0, 6).map((review) => (
              <figure key={`${review.name}-${review.service}`} className="card-soft p-6">
                <div className="flex items-center gap-1 text-brand-accent">
                  {Array.from({ length: review.rating }).map((_, index) => <Star key={index} className="h-4 w-4 fill-current" />)}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-brand-navy">“{review.quote}”</blockquote>
                <figcaption className="mt-4 text-sm font-bold text-brand-navy">{review.name}<span className="font-normal text-brand-mute">, {review.city}</span></figcaption>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-brand-blue">{review.service}</p>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-brand-navy text-white">
        <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow text-brand-accent"><MapPin className="h-3.5 w-3.5" /> Green Country coverage</p>
            <h2 className="h-display mt-3 text-4xl leading-[0.95] text-white md:text-5xl">A Tulsa plumbing company built for the surrounding communities, too.</h2>
            <p className="mt-4 text-white/72">Choose your city for localized service details, or call and Maston’s will route the right technician to your home or business.</p>
            <Link href={`tel:${site.phoneRaw}`} className="btn-primary mt-7"><Phone className="h-4 w-4" /> Call {site.phone}</Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {locations.map((location) => (
              <Link key={location.slug} href={`/locations/${location.slug}`} className="rounded-xl bg-white/10 p-4 transition hover:bg-white/16">
                <div className="font-display text-xl font-bold">{location.name}</div>
                <div className="mt-1 text-xs text-white/62">{location.neighborhoods.slice(0, 3).join(', ')}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-3">
          {[
            { icon: Phone, title: 'Call or book', text: 'Tell Maston’s what you are seeing, hearing, or smelling. Emergency calls are prioritized immediately.' },
            { icon: Clock, title: 'Get a clear arrival path', text: 'Dispatch confirms the right window, the right technician, and the practical next step for your situation.' },
            { icon: CheckCircle2, title: 'Approve the work', text: 'The technician explains findings and options before repair, replacement, or maintenance work begins.' },
          ].map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="card-soft p-7">
                <Icon className="h-8 w-8 text-brand-rust" />
                <h3 className="font-display mt-5 text-2xl font-bold text-brand-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-mute">{step.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
