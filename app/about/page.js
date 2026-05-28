import Image from 'next/image';
import Link from 'next/link';
import { Award, Users, Sparkles, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';
import { site, images, testimonials } from '@/lib/site-config';
import CtaBanner from '@/components/site/CtaBanner';

export const metadata = { title: 'About Us', description: `Meet the team at ${site.name}. ${site.yearsInBusiness}+ years, 12,000+ happy homes.` };

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-black/5">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-white to-brand-sky" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container relative pt-16 pb-20 grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <div className="eyebrow"><Users className="w-3.5 h-3.5" /> About us</div>
            <h1 className="h-display text-5xl md:text-6xl mt-3">A {site.yearsInBusiness}-year promise: do good work, charge a fair price.</h1>
            <p className="mt-5 text-lg text-brand-mute max-w-2xl">{site.name} was founded on a simple idea — that homeowners deserve a plumber who treats their home, their time, and their wallet with respect.</p>
          </div>
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl"><Image src={images.plumberTeam} alt="Our team" fill className="object-cover" sizes="50vw" /></div>
        </div>
      </section>

      <section className="section">
        <div className="container grid md:grid-cols-4 gap-5">
          {site.stats.map((s) => (
            <div key={s.label} className="card-soft p-7 text-center">
              <div className="font-display text-4xl md:text-5xl font-extrabold text-brand-navy">{s.value}</div>
              <div className="mt-2 text-xs uppercase tracking-wider text-brand-mute">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-white border-y border-black/5">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[5/6] rounded-3xl overflow-hidden shadow-xl"><Image src={images.workShot2} alt="At work" fill className="object-cover" sizes="50vw" /></div>
          <div>
            <div className="eyebrow"><Sparkles className="w-3.5 h-3.5" /> Our story</div>
            <h2 className="h-display text-4xl md:text-5xl mt-3">It started with one truck and one rule.</h2>
            <p className="mt-5 text-brand-mute leading-relaxed">After {site.yearsInBusiness} years in the trade, our founder was tired of one thing: watching neighbors get burned by dishonest plumbers. So in {new Date().getFullYear() - site.yearsInBusiness}, he started {site.name} with one rule — quote the real price, do the real work, and stand behind it.</p>
            <p className="mt-4 text-brand-mute leading-relaxed">12,000+ jobs later, that rule has not changed. We still answer the phone. We still show up on time. And we still treat every home like it is our own.</p>
            <ul className="mt-8 space-y-3">
              {['Family-owned and operated since ' + (new Date().getFullYear() - site.yearsInBusiness),'Master plumbers — not subcontractors','Background-checked, drug-tested techs','Trucks stocked to finish 95% of jobs in one visit'].map((p) => (
                <li key={p} className="flex gap-3 text-brand-navy"><CheckCircle2 className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <div className="eyebrow justify-center"><ShieldCheck className="w-3.5 h-3.5" /> Our values</div>
            <h2 className="h-display text-4xl md:text-5xl mt-3">Four rules. No exceptions.</h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { t: 'Honesty first', d: 'We tell you the truth even when it costs us the job. Bad news is always better than a surprise bill.' },
              { t: 'Respect your home', d: 'Shoe covers. Drop cloths. Clean up better than we found it. Every visit.' },
              { t: 'Show up on time', d: 'Real arrival windows. Real text updates. If we are late, your service is free.' },
              { t: 'Stand behind the work', d: 'One-year labor warranty on everything. If it fails, we come back free.' },
            ].map((v, i) => (
              <div key={v.t} className="card-soft p-7">
                <div className="font-display text-5xl font-extrabold text-brand-sky">0{i + 1}</div>
                <h3 className="mt-3 font-display text-lg font-bold text-brand-navy">{v.t}</h3>
                <p className="mt-2 text-sm text-brand-mute leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section bg-white border-y border-black/5">
        <div className="container">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="eyebrow"><Users className="w-3.5 h-3.5" /> The team</div>
              <h2 className="h-display text-4xl md:text-5xl mt-3">Real people, real names, real licenses.</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {/* EDIT: replace team members with real ones. Add /public/team/*.jpg images. */}
            {[
              { name: 'Mike Hernandez', role: 'Founder & Master Plumber', img: images.heroPlumber, bio: '24-year veteran. ASSE 5110 certified. Started the company in his driveway.' },
              { name: 'Tasha Brooks',   role: 'Service Manager',         img: images.plumberTeam, bio: 'Runs the schedule and makes sure every customer is taken care of, first call to last.' },
              { name: 'Andre Patel',    role: 'Lead Technician',          img: images.workShot3,  bio: 'Specializes in tankless water heaters and trenchless sewer repair. 12 years on the job.' },
            ].map((p) => (
              <div key={p.name} className="card-soft overflow-hidden">
                <div className="relative aspect-[4/5]"><Image src={p.img} alt={p.name} fill className="object-cover" sizes="33vw" /></div>
                <div className="p-6">
                  <div className="font-display text-xl font-bold text-brand-navy">{p.name}</div>
                  <div className="text-sm text-brand-blue font-semibold">{p.role}</div>
                  <p className="mt-3 text-sm text-brand-mute">{p.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow justify-center text-center"><Award className="w-3.5 h-3.5" /> Certifications</div>
          <h2 className="h-display text-4xl md:text-5xl mt-3 text-center">Licensed, certified, and verified.</h2>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {['State Master Plumber License #PL-00928374','$2M General Liability Insurance','BBB A+ Accredited Business','ASSE 5110 Certified','Better Business Bureau','EPA Lead-Safe Certified','Workers’ Comp Insured','OSHA 30 Certified'].map((c) => (
              <div key={c} className="card-soft p-5 flex items-center gap-3"><Award className="w-5 h-5 text-brand-accent flex-shrink-0" /><span className="text-sm font-semibold text-brand-navy">{c}</span></div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
