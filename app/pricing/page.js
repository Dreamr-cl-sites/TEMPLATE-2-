import Link from 'next/link';
import { Check, ShieldCheck, ArrowRight, Sparkles, Phone } from 'lucide-react';
import { site } from '@/lib/site-config';
import CtaBanner from '@/components/site/CtaBanner';

export const metadata = { title: 'Pricing', description: 'Flat-rate plumbing pricing. No surprises, no hourly games.' };

const priceTable = [
  { svc: 'Service call & diagnosis',          price: 'Free*' },
  { svc: 'Drain cleaning (single)',            price: '$99–$249' },
  { svc: 'Garbage disposal install',           price: '$229–$349' },
  { svc: 'Faucet replacement',                 price: '$169–$329' },
  { svc: 'Toilet rebuild',                      price: '$179–$289' },
  { svc: 'Toilet replacement',                  price: '$399–$699' },
  { svc: 'Tank water heater (40–50 gal)',       price: '$1,295–$1,895' },
  { svc: 'Tankless water heater',               price: '$2,995–$4,995' },
  { svc: 'Hydro-jetting (main line)',           price: '$395–$795' },
  { svc: 'Camera inspection',                   price: '$189–$295' },
  { svc: 'Trenchless sewer repair',             price: '$3,995+' },
  { svc: 'Whole-home repipe (avg 2,000 sq ft)', price: '$4,500–$9,500' },
];

const plans = [
  { name: 'Pay-As-You-Go', price: '$0', tagline: 'Standard rates apply.', features: ['Free diagnosis on repairs','Flat-rate quoted up front','One-year labor warranty','24/7 emergency response'], cta: 'Just call when needed', highlight: false },
  { name: 'BlueLine Care',  price: '$14', tagline: 'per month — most popular', features: ['Everything in Pay-As-You-Go','One free whole-home inspection / yr','Priority booking (skip the line)','15% off all repairs','Waived after-hours dispatch fees','Discounted water-heater flush'], cta: 'Start membership', highlight: true },
  { name: 'BlueLine Care+', price: '$29', tagline: 'per month — for older homes', features: ['Everything in BlueLine Care','Two inspections per year','25% off all repairs','Annual water-heater flush included','Free annual sewer camera scan','5-year labor warranty extension'], cta: 'Start membership', highlight: false },
];

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-black/5">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-white to-brand-sky" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container relative pt-16 pb-12 text-center max-w-3xl mx-auto">
          <div className="eyebrow justify-center"><Sparkles className="w-3.5 h-3.5" /> Pricing</div>
          <h1 className="h-display text-5xl md:text-6xl mt-3">Honest, flat-rate pricing.</h1>
          <p className="mt-5 text-lg text-brand-mute">No hourly games. No surprise add-ons. You see the full price before we lift a wrench. If the job takes longer than expected, you do not pay a penny more.</p>
        </div>
      </section>

      <section className="section -mt-8">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-6">
            {plans.map((p) => (
              <div key={p.name} className={`relative card-soft p-8 flex flex-col ${p.highlight ? 'border-2 border-brand-accent shadow-2xl scale-[1.02]' : ''}`}>
                {p.highlight && (<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-accent text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">Most popular</div>)}
                <div className="font-display text-2xl font-bold text-brand-navy">{p.name}</div>
                <div className="mt-2 flex items-baseline gap-1"><span className="font-display text-5xl font-extrabold text-brand-navy">{p.price}</span><span className="text-sm text-brand-mute">/mo</span></div>
                <div className="text-sm text-brand-mute">{p.tagline}</div>
                <ul className="mt-6 space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm"><Check className="w-4 h-4 text-brand-accent flex-shrink-0 mt-0.5" /><span className="text-brand-navy">{f}</span></li>
                  ))}
                </ul>
                <Link href="/contact" className={`mt-7 ${p.highlight ? 'btn-primary' : 'btn-ghost'} justify-center`}>{p.cta} <ArrowRight className="w-4 h-4" /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white border-y border-black/5">
        <div className="container">
          <div className="max-w-2xl">
            <div className="eyebrow">Typical jobs</div>
            <h2 className="h-display text-4xl md:text-5xl mt-3">What things actually cost.</h2>
            <p className="mt-4 text-brand-mute">Ranges below are the price most customers pay for a standard job. Your tech will quote your exact price after a free in-home look. No surprises.</p>
          </div>
          <div className="mt-10 card-soft overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-brand-navy text-white text-sm"><tr><th className="px-5 py-4 font-display font-bold">Service</th><th className="px-5 py-4 font-display font-bold text-right">Typical price</th></tr></thead>
              <tbody>
                {priceTable.map((r, i) => (<tr key={r.svc} className={i % 2 ? 'bg-brand-cream/50' : ''}><td className="px-5 py-4 text-brand-navy">{r.svc}</td><td className="px-5 py-4 text-right font-semibold text-brand-navy">{r.price}</td></tr>))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-brand-mute">* Service call free with most repairs. Camera inspections and after-hours dispatch may carry a small fee, quoted before dispatch.</p>
        </div>
      </section>

      <section className="section">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow"><ShieldCheck className="w-3.5 h-3.5" /> Our guarantee</div>
            <h2 className="h-display text-4xl md:text-5xl mt-3">If you are not happy, neither are we.</h2>
            <p className="mt-5 text-brand-mute leading-relaxed">Every job comes with a one-year labor warranty and a 100% satisfaction guarantee. If something fails or you are not happy, we come back free and make it right. No fine print, no run-around.</p>
            <Link href={`tel:${site.phoneRaw}`} className="btn-primary mt-8 inline-flex"><Phone className="w-4 h-4" /> Call {site.phone}</Link>
          </div>
          <div className="card-soft p-8 bg-brand-navy text-white">
            <ShieldCheck className="w-12 h-12 text-brand-accent" />
            <h3 className="mt-4 font-display text-2xl font-bold">The BlueLine Promise</h3>
            <ul className="mt-5 space-y-3 text-white/85">
              {['Price quoted is price paid — always','One-year labor warranty on all work','Free re-visit if anything fails','100% satisfaction or it is free','Background-checked, drug-tested techs'].map((p) => (
                <li key={p} className="flex gap-2.5"><Check className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
