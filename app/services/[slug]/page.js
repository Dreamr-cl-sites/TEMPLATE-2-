import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Phone, ArrowRight, CheckCircle2, AlertTriangle, Wrench, Siren, Waves, Flame, Droplets, Pipette, GitFork, Building2, Clock3, DollarSign, MapPin } from 'lucide-react';
import { services, getService } from '@/lib/services-data';
import { site, images, testimonials } from '@/lib/site-config';
import { locations } from '@/lib/locations-data';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import CtaBanner from '@/components/site/CtaBanner';

const ICONS = { Siren, Waves, Flame, Droplets, Pipette, Wrench, GitFork, Building2 };
export function generateStaticParams() { return services.map((s) => ({ slug: s.slug })); }
export function generateMetadata({ params }) {
  const s = getService(params.slug);
  if (!s) return {};
  return { title: `${s.name} in ${site.address.city}`, description: `${s.short} ${s.pricing}` };
}

export default function ServiceDetailPage({ params }) {
  const s = getService(params.slug);
  if (!s) notFound();
  const Icon = ICONS[s.icon] || Wrench;
  const related = services.filter((x) => x.slug !== s.slug).slice(0, 3);
  return (
    <>
      <section className="relative overflow-hidden border-b border-black/5">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-brand-sky/40" />
        <div className="container relative pt-14 pb-16 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div>
            <Link href="/services" className="inline-flex items-center gap-1.5 text-sm text-brand-mute hover:text-brand-navy">← All services</Link>
            <div className="mt-4 inline-flex items-center gap-3">
              <div className="w-14 h-14 rounded-2xl bg-brand-navy grid place-items-center"><Icon className="w-7 h-7 text-brand-accent" /></div>
              <div className="eyebrow">Service page</div>
            </div>
            <h1 className="h-display text-5xl md:text-6xl mt-4">{s.name}</h1>
            <p className="mt-1 text-sm text-brand-blue font-semibold">{s.keyword}</p>
            <p className="mt-4 text-lg text-brand-mute max-w-2xl">{s.hero}</p>
            <div className="mt-5 card-soft p-4 grid md:grid-cols-2 gap-4 text-sm">
              <div className="inline-flex gap-2"><Clock3 className="w-4 h-4 text-brand-blue mt-0.5" /><span><span className="font-semibold">Typical timeline:</span> {s.duration}</span></div>
              <div className="inline-flex gap-2"><DollarSign className="w-4 h-4 text-brand-blue mt-0.5" /><span><span className="font-semibold">Pricing:</span> {s.pricing}</span></div>
            </div>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link href={`tel:${site.phoneRaw}`} className="btn-primary"><Phone className="w-4 h-4" /> Call {site.phone}</Link>
              <Link href="/book" className="btn-ghost">Book this service <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <div className="mt-6 text-sm text-brand-mute">Starts at <span className="font-semibold text-brand-navy">${s.priceFrom}</span> · Flat-rate quote first · One-year labor warranty</div>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl"><Image src={images.workShot1} alt={s.name} fill className="object-cover" sizes="50vw" /></div>
        </div>
      </section>

      <section className="section">
        <div className="container grid lg:grid-cols-2 gap-12">
          <div className="card-soft p-8">
            <div className="eyebrow"><CheckCircle2 className="w-3.5 h-3.5" /> What is included</div>
            <h2 className="h-display text-3xl mt-3">Service scope</h2>
            <ul className="mt-6 space-y-4">
              {s.includes.map((i) => (
                <li key={i} className="flex gap-3 text-brand-navy"><CheckCircle2 className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" /><span>{i}</span></li>
              ))}
            </ul>
          </div>
          <div className="card-soft p-8">
            <div className="eyebrow text-brand-accent"><AlertTriangle className="w-3.5 h-3.5" /> Signs you need this</div>
            <h2 className="h-display text-3xl mt-3">When to call now</h2>
            <ul className="mt-6 space-y-4">
              {s.signs.map((i) => (
                <li key={i} className="flex gap-3 text-brand-navy"><div className="w-2 h-2 mt-2 rounded-full bg-brand-accent flex-shrink-0" /><span>{i}</span></li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-brand-mute">Spotting more than one? Call us — small fixes are always cheaper than waiting.</p>
          </div>
        </div>
      </section>

      <section className="section bg-white border-y border-black/5 reveal">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <div className="eyebrow justify-center">The process</div>
            <h2 className="h-display text-4xl mt-3">Simple, transparent, documented.</h2>
          </div>
          <div className="mt-12 grid md:grid-cols-4 gap-5">
            {[
              { n: '1', t: 'Call us', d: 'A real person picks up 24/7 and gets the basics in 2 minutes.' },
              { n: '2', t: 'Free diagnosis', d: 'We arrive on time and figure out the cause — no charge.' },
              { n: '3', t: 'Flat-rate quote', d: 'You see the price up front. No surprises, no upsells.' },
              { n: '4', t: 'Fixed & warrantied', d: 'Clean, tested work backed by a one-year labor warranty.' },
            ].map((x) => (
              <div key={x.n} className="card-soft p-6">
                <div className="font-display text-4xl font-extrabold text-brand-sky">0{x.n}</div>
                <div className="mt-2 font-display text-lg font-bold text-brand-navy">{x.t}</div>
                <p className="mt-1 text-sm text-brand-mute">{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section reveal">
        <div className="container grid lg:grid-cols-[1fr_1.4fr] gap-12 items-start">
          <div>
            <div className="eyebrow">FAQ</div>
            <h2 className="h-display text-4xl mt-3">{s.name} questions, answered.</h2>
            <figure className="mt-8 card-soft p-6">
              <div className="text-xs uppercase tracking-wider text-brand-mute">Recent customer note</div>
              <blockquote className="text-brand-navy">“{testimonials[0].quote}”</blockquote>
              <figcaption className="mt-3 text-xs text-brand-mute">— {testimonials[0].name}, {testimonials[0].city}</figcaption>
            </figure>
            <div className="card-soft p-6 mt-6">
              <h3 className="font-display text-2xl font-bold">Local coverage</h3>
              <p className="text-sm text-brand-mute mt-2">Read location pages that connect this service to local neighborhoods:</p>
              <ul className="mt-4 space-y-2 text-sm">
                {locations.slice(0, 6).map((location) => (
                  <li key={location.slug} className="inline-flex items-center gap-2 mr-4">
                    <MapPin className="w-4 h-4 text-brand-blue" />
                    <Link href={`/locations/${location.slug}`} className="hover:underline">{location.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {s.faq.map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`} className="border-b border-black/10">
                <AccordionTrigger className="text-left font-display font-bold text-brand-navy text-base md:text-lg hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-brand-mute leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="section bg-white border-t border-black/5">
        <div className="container">
          <h2 className="h-display text-3xl mb-8">Related service pages</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {related.map((r) => {
              const RI = ICONS[r.icon] || Wrench;
              return (
                <Link key={r.slug} href={`/services/${r.slug}`} className="card-soft p-6 group hover:-translate-y-1 transition">
                  <div className="w-10 h-10 rounded-lg bg-brand-sky grid place-items-center"><RI className="w-5 h-5 text-brand-blue" /></div>
                  <div className="mt-3 font-display font-bold text-brand-navy">{r.name}</div>
                  <p className="mt-1 text-sm text-brand-mute">{r.short}</p>
                  <p className="text-xs text-brand-blue mt-2">{r.keyword}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner title={`Need ${s.name.toLowerCase()} now?`} />
    </>
  );
}
