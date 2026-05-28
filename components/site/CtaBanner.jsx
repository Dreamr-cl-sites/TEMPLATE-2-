import Link from 'next/link';
import { Phone, ArrowRight, Sparkles } from 'lucide-react';
import { site } from '@/lib/site-config';

// Reusable bottom-of-page CTA. EDIT copy here once and it changes site-wide.
export default function CtaBanner({
  title = 'Need a plumber today?',
  subtitle = 'Real humans answer the phone 24/7. Most calls are scheduled within an hour.',
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#0b1015] p-10 md:p-16 text-white">
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-brand-accent/25 blur-3xl" />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="eyebrow text-brand-accent"><Sparkles className="w-3.5 h-3.5" /> Same-day service</div>
              <h2 className="h-display text-3xl md:text-6xl text-white mt-3 leading-[0.92]">{title}</h2>
              <p className="mt-4 text-white/75 max-w-xl leading-relaxed">{subtitle}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href={`tel:${site.phoneRaw}`} className="btn-primary magnetic"><Phone className="w-4 h-4" /> {site.phone}</Link>
              <Link href="/book" className="btn-ghost magnetic">Book online <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
