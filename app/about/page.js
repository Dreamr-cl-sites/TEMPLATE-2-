import Image from 'next/image';
import Link from 'next/link';
import { Award, CheckCircle2, HeartHandshake, ShieldCheck, Users } from 'lucide-react';
import { site, images } from '@/lib/site-config';
import CtaBanner from '@/components/site/CtaBanner';

export const metadata = {
  title: 'About Maston’s Plumbing and Drain',
  description: 'Learn about Maston’s Plumbing and Drain, a veteran-owned and family-owned Tulsa plumbing company built around service the way it ought to be.',
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-brand-blue/10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-white to-brand-sky" />
        <div className="container relative grid gap-12 pb-20 pt-16 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <div className="eyebrow"><Users className="h-3.5 w-3.5" /> About Maston’s</div>
            <h1 className="h-display mt-3 text-5xl leading-[0.95] md:text-6xl">A Tulsa plumbing company built on respect.</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-brand-mute">
              Maston’s Plumbing and Drain is veteran owned, family owned, and focused on a simple promise: treat people the way service ought to feel. That means answering the phone, explaining the work, respecting the home, and standing behind the recommendation.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/services" className="btn-primary">Explore services</Link>
              <Link href={`tel:${site.phoneRaw}`} className="btn-secondary">Call {site.phone}</Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-brand-sky shadow-2xl">
            <Image src={images.mascot} alt="Maston’s plumber mascot" fill className="object-contain p-8" sizes="50vw" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-5 md:grid-cols-4">
          {site.stats.map((stat) => (
            <div key={stat.label} className="card-soft p-7 text-center">
              <div className="font-display text-4xl font-extrabold text-brand-navy md:text-5xl">{stat.value}</div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-wider text-brand-mute">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section border-y border-brand-blue/10 bg-white">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[5/4] overflow-hidden rounded-3xl shadow-xl">
            <Image src={images.plumberTeam} alt="Maston’s plumbing team" fill className="object-cover" sizes="50vw" />
          </div>
          <div>
            <div className="eyebrow"><HeartHandshake className="h-3.5 w-3.5" /> Service culture</div>
            <h2 className="h-display mt-3 text-4xl leading-[0.95] md:text-5xl">The brand promise is not decoration. It is the operating system.</h2>
            <p className="mt-5 leading-relaxed text-brand-mute">
              “The Way Service Ought to Be” shows up in practical ways: clear scheduling, careful diagnosis, honest options, clean work habits, and communication that does not make the customer decode technical jargon.
            </p>
            <ul className="mt-8 space-y-3">
              {['Veteran-owned discipline and accountability', 'Family-owned care for the customer relationship', '24/7 help for urgent plumbing problems', 'Service across Tulsa and surrounding Green Country communities'].map((point) => (
                <li key={point} className="flex gap-3 text-brand-navy"><CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-brand-rust" />{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="eyebrow justify-center"><ShieldCheck className="h-3.5 w-3.5" /> What customers can expect</div>
            <h2 className="h-display mt-3 text-4xl leading-[0.95] md:text-5xl">Four standards on every visit.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { t: 'Answer the call', d: 'Urgent plumbing issues need calm, responsive guidance, not voicemail roulette.' },
              { t: 'Explain the options', d: 'Customers deserve to know what failed, what can wait, and what should be fixed now.' },
              { t: 'Respect the property', d: 'A good plumber leaves the work area safer, cleaner, and easier to understand.' },
              { t: 'Serve locally', d: 'Tulsa, Broken Arrow, Bixby, Jenks, Owasso, and nearby communities are not an afterthought.' },
            ].map((value, index) => (
              <div key={value.t} className="card-soft p-7">
                <div className="font-display text-5xl font-extrabold text-brand-sky">0{index + 1}</div>
                <h3 className="mt-3 font-display text-lg font-bold text-brand-navy">{value.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-mute">{value.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-brand-blue/10 bg-white">
        <div className="container grid gap-8 md:grid-cols-3">
          {site.trustBadges.map((badge) => (
            <div key={badge} className="card-soft flex items-center gap-4 p-6">
              <Award className="h-7 w-7 flex-shrink-0 text-brand-accent" />
              <span className="font-display text-xl font-bold text-brand-navy">{badge}</span>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner title="Ready for plumbing service that feels different?" subtitle="Call Maston’s for friendly local help backed by veteran-owned accountability and family-owned care." />
    </>
  );
}
