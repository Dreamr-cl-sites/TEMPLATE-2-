'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, MoveRight, Phone, Sparkles } from 'lucide-react';
import { site, images } from '@/lib/site-config';
import { services } from '@/lib/services-data';
import { locations } from '@/lib/locations-data';
import CtaBanner from '@/components/site/CtaBanner';

const city = site.address.city;
const state = site.address.region;

export default function HomePage() {
  const [activeServiceSlug, setActiveServiceSlug] = useState(services[0]?.slug);
  const activeService = useMemo(
    () => services.find((service) => service.slug === activeServiceSlug) || services[0],
    [activeServiceSlug],
  );

  const serviceImages = {
    'emergency-plumbing': images.workShot1,
    'drain-cleaning': images.workShot3,
    'water-heaters': images.bathroom1,
    'leak-detection': images.bathroom2,
    'sewer-line': images.workShot2,
    'fixtures-faucets': images.bathroom3,
    'repiping': images.plumberTeam,
    commercial: images.heroPlumber,
  };

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="ambient-orb w-[320px] h-[320px] bg-brand-accent/20 -top-24 -left-12" />
        <div className="ambient-orb w-[360px] h-[360px] bg-brand-blue/15 top-32 right-8" />
        <div className="container relative pt-16 md:pt-28 pb-24 md:pb-36">
          <p className="absolute top-12 right-0 hidden lg:block text-[10rem] font-display tracking-[-0.08em] text-brand-navy/[0.05] select-none">
            PLUMBING
          </p>
          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center reveal">
            <div>
              <p className="eyebrow"><Sparkles className="w-3.5 h-3.5" /> Craft-first local plumbing</p>
              <h1 className="h-display text-5xl md:text-8xl leading-[0.88] tracking-[-0.05em] mt-4">
                Precision plumbing
                <br />
                for {city}, {state}
              </h1>
              <p className="text-brand-mute mt-2 text-lg max-w-xl">
                Defined scope. Structured pricing. Human service.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Link href={`tel:${site.phoneRaw}`} className="btn-primary magnetic"><Phone className="w-4 h-4" /> Call {site.phone}</Link>
                <Link href="/book" className="btn-secondary magnetic">Book service <MoveRight className="w-4 h-4" /></Link>
              </div>
              <div className="mt-10 flex flex-wrap gap-3 text-xs text-brand-mute">
                {site.trustBadges.map((badge) => <span key={badge} className="px-3 py-1 rounded-full bg-white/80">{badge}</span>)}
              </div>
            </div>
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl shadow-black/30 reveal">
              <Image src={images.heroPlumber} alt={`Local plumber in ${city}`} fill priority className="object-cover contrast-125 brightness-[0.72] saturate-[0.8]" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <div className="mb-12 max-w-3xl">
            <div className="eyebrow">Split-screen service showpiece</div>
            <h2 className="h-display text-4xl md:text-7xl leading-[0.9] mt-3">Hover a service. Watch the right panel respond.</h2>
            <p className="mt-3 text-brand-mute">Each line has a dedicated service page and keyword intent. No bundled generic page blocks.</p>
          </div>
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-7 items-stretch">
            <div className="card-soft p-4 md:p-5">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  onMouseEnter={() => setActiveServiceSlug(service.slug)}
                  className={`magnetic group flex items-center justify-between px-3 py-4 rounded-2xl transition-all ${activeService.slug === service.slug ? 'bg-brand-navy text-white' : 'text-brand-navy hover:bg-white'}`}
                >
                  <div>
                    <h3 className="h-display text-2xl">{service.name}</h3>
                    <p className={`text-xs mt-0.5 ${activeService.slug === service.slug ? 'text-white/65' : 'text-brand-mute'}`}>{service.keyword}</p>
                  </div>
                  <span className={`text-xs px-2.5 py-1 rounded-full tracking-[0.1em] uppercase ${activeService.slug === service.slug ? 'bg-white/15 text-white' : 'bg-brand-sky text-brand-navy'}`}>
                    From ${service.priceFrom}
                  </span>
                </Link>
              ))}
            </div>
            <div className="card-soft p-5 md:p-7 magnetic">
              <div className="relative aspect-[5/4] rounded-[1.6rem] overflow-hidden">
                <Image
                  src={serviceImages[activeService.slug] || images.workShot1}
                  alt={activeService.name}
                  fill
                  className="object-cover transition duration-700 contrast-125 brightness-[0.72] saturate-[0.8]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute left-5 right-5 bottom-5 text-white">
                  <h3 className="h-display text-4xl text-white leading-[0.95]">{activeService.name}</h3>
                  <p className="text-sm text-white/75 mt-1">{activeService.duration}</p>
                  <div className="mt-4 inline-flex items-center rounded-full bg-white/15 backdrop-blur px-3 py-1 text-xs tracking-[0.12em] uppercase">
                    Pricing Tag: ${activeService.priceFrom}+
                  </div>
                </div>
              </div>
              <p className="mt-5 text-sm text-brand-mute">{activeService.pricing}</p>
              <Link href={`/services/${activeService.slug}`} className="btn-secondary mt-4 inline-flex">Open full service page <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container">
          <div className="card-soft p-5 overflow-hidden">
            <p className="eyebrow mb-3">Service area ticker</p>
            <div className="overflow-hidden">
              <div className="ticker-track gap-6">
                {[...locations, ...locations].map((location, idx) => (
                  <Link
                    key={`${location.slug}-${idx}`}
                    href={`/locations/${location.slug}`}
                    className="whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm text-brand-navy magnetic"
                  >
                    {location.name}, {location.region}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container grid lg:grid-cols-[1fr_1.2fr] gap-8">
          <div className="card-soft p-8">
            <p className="eyebrow">Manifesto</p>
            <h2 className="h-display text-4xl md:text-6xl leading-[0.9] mt-2">Craft, not scripts.</h2>
          </div>
          <div className="relative pl-6 md:pl-10">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-brand-navy/20" />
            <div className="space-y-10">
              {[
                'We define scope before we touch a tool.',
                'We quote in writing before any work begins.',
                'We send trained humans, not rotating subcontractors.',
                'We leave systems cleaner, safer, and documented.',
              ].map((line) => (
                <div key={line} className="relative reveal">
                  <span className="absolute -left-[30px] md:-left-[42px] top-1.5 w-2.5 h-2.5 rounded-full bg-brand-accent" />
                  <p className="h-display text-2xl md:text-4xl leading-tight">{line}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner title={`Need a plumber in ${city} today?`} subtitle="Tap to call now. We confirm scope, give a real ETA, and quote before work starts." />
    </>
  );
}
