import Link from 'next/link';
import { ArrowRight, Check, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import { site } from '@/lib/site-config';
import CtaBanner from '@/components/site/CtaBanner';

export const metadata = {
  title: 'Pricing and Service Agreements',
  description: 'How Maston’s Plumbing and Drain approaches pricing, service requests, and preventive plumbing agreements in the Tulsa metro.',
};

const principles = [
  'The technician explains the likely cause before repair work begins.',
  'You approve the scope before Maston’s moves forward.',
  'Emergency, access, materials, and system condition are discussed clearly.',
  'Preventive service agreement options are available for homes and businesses.',
];

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-brand-blue/10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-white to-brand-sky" />
        <div className="container relative mx-auto max-w-3xl pb-12 pt-16 text-center">
          <div className="eyebrow justify-center"><Sparkles className="h-3.5 w-3.5" /> Pricing approach</div>
          <h1 className="h-display mt-3 text-5xl md:text-6xl">Clear plumbing options before work begins.</h1>
          <p className="mt-5 text-lg text-brand-mute">Every plumbing issue is different. Maston’s focuses on explaining the cause, the practical options, and the next step before you approve service.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-6 lg:grid-cols-2">
          <div className="card-soft p-8">
            <ShieldCheck className="h-10 w-10 text-brand-rust" />
            <h2 className="h-display mt-4 text-3xl">What affects price</h2>
            <p className="mt-3 leading-relaxed text-brand-mute">Plumbing pricing can depend on urgency, access, parts, pipe condition, fixture type, code requirements, and whether the right answer is repair, cleaning, replacement, or ongoing maintenance.</p>
            <ul className="mt-6 space-y-3">
              {principles.map((point) => (
                <li key={point} className="flex gap-3 text-brand-navy"><Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-rust" />{point}</li>
              ))}
            </ul>
          </div>
          <div className="card-soft bg-brand-navy p-8 text-white">
            <h2 className="h-display text-3xl text-white">Best next step</h2>
            <p className="mt-3 leading-relaxed text-white/75">Call Maston’s and describe the symptom. Dispatch can route emergency issues immediately and schedule non-emergency repairs, water heater work, drain cleaning, sewer concerns, filtration, or commercial plumbing.</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href={`tel:${site.phoneRaw}`} className="btn-primary"><Phone className="h-4 w-4" /> {site.phone}</Link>
              <Link href="/book" className="btn-ghost">Request service <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner title="Want fewer surprise plumbing problems?" subtitle="Ask Maston’s about preventive service agreements for homes, businesses, and managed properties in the Tulsa metro." />
    </>
  );
}
