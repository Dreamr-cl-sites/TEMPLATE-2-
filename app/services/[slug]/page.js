import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { AlertTriangle, ArrowRight, Building2, CheckCircle2, Clock3, Droplets, Flame, GitFork, MapPin, Phone, Pipette, ShieldCheck, Siren, Waves, Wrench } from 'lucide-react';
import { services, getService } from '@/lib/services-data';
import { site, images, testimonials } from '@/lib/site-config';
import { locations } from '@/lib/locations-data';
import CtaBanner from '@/components/site/CtaBanner';

const ICONS = { Siren, Waves, Flame, Droplets, Pipette, Wrench, GitFork, Building2, ShieldCheck };
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

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }) {
  const service = getService(params.slug);
  if (!service) return {};
  return { title: `${service.name} in ${site.address.city}`, description: service.short };
}

export default function ServiceDetailPage({ params }) {
  const service = getService(params.slug);
  if (!service) notFound();
  const Icon = ICONS[service.icon] || Wrench;
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);
  const heroImage = serviceImages[service.slug] || images.workShot1;

  return (
    <>
      <section className="relative overflow-hidden border-b border-brand-blue/10">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-brand-sky/50" />
        <div className="container relative grid gap-12 pb-16 pt-14 lg:grid-cols-[1.15fr_0.95fr] lg:items-center">
          <div>
            <Link href="/services" className="inline-flex items-center gap-1.5 text-sm text-brand-mute hover:text-brand-navy">← All services</Link>
            <div className="mt-5 inline-flex items-center gap-3">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-navy"><Icon className="h-7 w-7 text-brand-accent" /></div>
              <div className="eyebrow">Maston’s service</div>
            </div>
            <h1 className="h-display mt-4 text-5xl leading-[0.95] md:text-6xl">{service.name}</h1>
            <p className="mt-1 text-sm font-bold text-brand-blue">{service.keyword}</p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-mute">{service.hero}</p>
            <div className="card-soft mt-6 grid gap-4 p-4 text-sm md:grid-cols-2">
              <div className="inline-flex gap-2"><Clock3 className="mt-0.5 h-4 w-4 text-brand-blue" /><span><span className="font-semibold">Typical timeline:</span> {service.duration}</span></div>
              <div className="inline-flex gap-2"><ShieldCheck className="mt-0.5 h-4 w-4 text-brand-blue" /><span><span className="font-semibold">Pricing:</span> {service.pricing}</span></div>
            </div>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href={`tel:${site.phoneRaw}`} className="btn-primary"><Phone className="h-4 w-4" /> Call {site.phone}</Link>
              <Link href="/book" className="btn-secondary">Book this service <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="mt-6 text-sm text-brand-mute">Clear options first · Local Tulsa-area technicians · Respectful cleanup</div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-xl">
            <Image src={heroImage} alt={`${service.name} from Maston’s Plumbing and Drain`} fill className={service.slug.includes('emergency') || service.slug.includes('commercial') ? 'object-contain bg-brand-sky p-6' : 'object-cover'} sizes="50vw" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-8 lg:grid-cols-2">
          <div className="card-soft p-8">
            <div className="eyebrow"><CheckCircle2 className="h-3.5 w-3.5" /> What is included</div>
            <h2 className="h-display mt-3 text-3xl">Service scope</h2>
            <ul className="mt-6 space-y-4">
              {service.includes.map((item) => (
                <li key={item} className="flex gap-3 text-brand-navy"><CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-rust" /><span>{item}</span></li>
              ))}
            </ul>
          </div>
          <div className="card-soft p-8">
            <div className="eyebrow text-brand-rust"><AlertTriangle className="h-3.5 w-3.5" /> Signs you need this</div>
            <h2 className="h-display mt-3 text-3xl">When to call now</h2>
            <ul className="mt-6 space-y-4">
              {service.signs.map((item) => (
                <li key={item} className="flex gap-3 text-brand-navy"><div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-brand-accent" /><span>{item}</span></li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-brand-mute">Spotting more than one? Call Maston’s. Small fixes are usually easier than waiting for a larger failure.</p>
          </div>
        </div>
      </section>

      <section className="section border-y border-brand-blue/10 bg-white">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="eyebrow justify-center">The process</div>
            <h2 className="h-display mt-3 text-4xl">Simple, transparent, documented.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {[
              { n: '1', t: 'Call or book', d: 'A real person gets the basics and routes the right service path.' },
              { n: '2', t: 'Confirm the issue', d: 'The technician reviews symptoms, access, and likely causes.' },
              { n: '3', t: 'Review options', d: 'You see practical repair or replacement choices before work begins.' },
              { n: '4', t: 'Finish cleanly', d: 'Work is completed with testing, cleanup, and notes for your records.' },
            ].map((step) => (
              <div key={step.n} className="card-soft p-6">
                <div className="font-display text-4xl font-extrabold text-brand-sky">0{step.n}</div>
                <div className="mt-2 font-display text-lg font-bold text-brand-navy">{step.t}</div>
                <p className="mt-1 text-sm text-brand-mute">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <div className="eyebrow">FAQ</div>
            <h2 className="h-display mt-3 text-4xl">{service.name} questions, answered.</h2>
            <figure className="card-soft mt-8 p-6">
              <div className="text-xs uppercase tracking-wider text-brand-mute">Recent customer note</div>
              <blockquote className="mt-3 text-brand-navy">“{testimonials[0].quote}”</blockquote>
              <figcaption className="mt-3 text-xs text-brand-mute">— {testimonials[0].name}, {testimonials[0].city}</figcaption>
            </figure>
            <div className="card-soft mt-6 p-6">
              <h3 className="font-display text-2xl font-bold text-brand-navy">Local coverage</h3>
              <p className="mt-2 text-sm text-brand-mute">Maston’s serves these Tulsa-area communities for this service:</p>
              <ul className="mt-4 space-y-2 text-sm">
                {locations.slice(0, 6).map((location) => (
                  <li key={location.slug} className="mr-4 inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-brand-blue" />
                    <Link href={`/locations/${location.slug}`} className="hover:underline">{location.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {service.faq.map((item, index) => (
              <AccordionItem key={index} value={`f-${index}`} className="border-b border-brand-blue/10">
                <AccordionTrigger className="text-left font-display text-base font-bold text-brand-navy hover:no-underline md:text-lg">{item.q}</AccordionTrigger>
                <AccordionContent className="leading-relaxed text-brand-mute">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="section border-t border-brand-blue/10 bg-white">
        <div className="container">
          <h2 className="h-display mb-8 text-3xl">Related service pages</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => {
              const RelatedIcon = ICONS[item.icon] || Wrench;
              return (
                <Link key={item.slug} href={`/services/${item.slug}`} className="card-soft group p-6 transition hover:-translate-y-1">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-sky"><RelatedIcon className="h-5 w-5 text-brand-blue" /></div>
                  <div className="mt-3 font-display font-bold text-brand-navy">{item.name}</div>
                  <p className="mt-1 text-sm text-brand-mute">{item.short}</p>
                  <p className="mt-2 text-xs text-brand-blue">{item.keyword}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner title={`Need ${service.name.toLowerCase()}?`} />
    </>
  );
}
