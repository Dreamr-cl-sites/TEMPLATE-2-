'use client';
import { useState } from 'react';
import { Calendar as CalIcon, ChevronRight, ChevronLeft, Loader2, Check, Phone, Sparkles, AlertTriangle, Clock } from 'lucide-react';
import { toast } from 'sonner';
import { site } from '@/lib/site-config';
import { services } from '@/lib/services-data';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const urgencyOpts = [
  { v: 'emergency', t: 'Emergency — ASAP', d: 'Active leak, no water, sewage backup', icon: AlertTriangle },
  { v: 'today',     t: 'Today / tomorrow',  d: 'Not flooding, but soon', icon: Clock },
  { v: 'standard',  t: 'This week',          d: 'Schedule when convenient', icon: CalIcon },
  { v: 'estimate',  t: 'Just an estimate',  d: 'Planning a future project', icon: Sparkles },
];
const timeSlots = ['8–10 am','10 am–12 pm','12–2 pm','2–4 pm','4–6 pm'];

export default function BookPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ service: '', urgency: '', preferredDate: '', preferredTime: '', name: '', phone: '', email: '', address: '', notes: '' });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const upd = (k) => (e) => setForm((f) => ({ ...f, [k]: typeof e === 'string' ? e : e.target.value }));
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  function next() {
    if (step === 0 && !form.service) { toast.error('Pick a service to continue.'); return; }
    if (step === 1 && !form.urgency) { toast.error('Pick how urgent it is.'); return; }
    if (step === 2 && (!form.name || !form.phone)) { toast.error('We need a name and phone.'); return; }
    setStep(step + 1);
  }
  async function submit() {
    setLoading(true);
    try {
      const res = await fetch('/api/book', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed');
      setDone(true);
    } catch (err) { toast.error(err.message); } finally { setLoading(false); }
  }

  if (done) {
    return (
      <section className="section">
        <div className="container max-w-xl text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-brand-accent grid place-items-center"><Check className="w-10 h-10 text-white" /></div>
          <h1 className="h-display text-4xl mt-6">You&apos;re booked!</h1>
          <p className="mt-3 text-brand-mute">A real human will call you within 15 minutes to confirm your slot and ETA. For emergencies, call <a href={`tel:${site.phoneRaw}`} className="text-brand-blue font-semibold">{site.phone}</a> directly.</p>
          <a href={`tel:${site.phoneRaw}`} className="btn-primary mt-8 inline-flex"><Phone className="w-4 h-4" /> Call us now</a>
        </div>
      </section>
    );
  }

  const steps = ['Service', 'Urgency', 'Your info', 'Confirm'];
  return (
    <>
      <section className="relative overflow-hidden border-b border-black/5">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-white to-brand-sky" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container relative pt-14 pb-12 text-center max-w-3xl mx-auto">
          <div className="eyebrow justify-center"><CalIcon className="w-3.5 h-3.5" /> Book online</div>
          <h1 className="h-display text-5xl md:text-6xl mt-3">Book a plumber in 60 seconds.</h1>
          <p className="mt-4 text-brand-mute">Four quick questions. No commitment. We&apos;ll text to confirm.</p>
        </div>
      </section>

      <section className="section -mt-8">
        <div className="container max-w-3xl">
          <div className="flex items-center justify-between mb-6">
            {steps.map((s, i) => (
              <div key={s} className="flex-1 flex items-center">
                <div className={`w-8 h-8 rounded-full grid place-items-center text-sm font-bold transition ${i <= step ? 'bg-brand-accent text-white' : 'bg-brand-cream text-brand-mute border border-black/10'}`}>{i + 1}</div>
                <span className={`ml-2 text-xs hidden sm:inline ${i <= step ? 'text-brand-navy font-semibold' : 'text-brand-mute'}`}>{s}</span>
                {i < steps.length - 1 && <div className={`flex-1 h-0.5 mx-2 ${i < step ? 'bg-brand-accent' : 'bg-black/10'}`} />}
              </div>
            ))}
          </div>

          <div className="card-soft p-8 md:p-10 min-h-[380px]">
            {step === 0 && (
              <div><h2 className="h-display text-2xl">What can we help with?</h2><p className="mt-1 text-sm text-brand-mute">Pick the closest match — we can adjust later.</p>
                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  {services.map((s) => (<button key={s.slug} type="button" onClick={() => set('service', s.name)} className={`text-left p-4 rounded-xl border transition ${form.service === s.name ? 'border-brand-accent bg-brand-accent/5' : 'border-black/10 hover:border-brand-blue/50 bg-white'}`}><div className="font-display font-bold text-brand-navy">{s.name}</div><div className="text-xs text-brand-mute mt-0.5">{s.short}</div></button>))}
                </div></div>
            )}
            {step === 1 && (
              <div><h2 className="h-display text-2xl">How soon do you need us?</h2><p className="mt-1 text-sm text-brand-mute">Be honest — emergencies skip the line.</p>
                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                  {urgencyOpts.map((u) => { const I = u.icon; return (<button key={u.v} type="button" onClick={() => set('urgency', u.v)} className={`text-left p-5 rounded-xl border transition ${form.urgency === u.v ? 'border-brand-accent bg-brand-accent/5' : 'border-black/10 hover:border-brand-blue/50 bg-white'}`}><I className="w-6 h-6 text-brand-blue" /><div className="mt-3 font-display font-bold text-brand-navy">{u.t}</div><div className="text-xs text-brand-mute mt-0.5">{u.d}</div></button>); })}
                </div>
                {form.urgency && form.urgency !== 'emergency' && (
                  <div className="mt-6 grid sm:grid-cols-2 gap-4">
                    <div><Label>Preferred date</Label><Input type="date" value={form.preferredDate} onChange={upd('preferredDate')} className="mt-1.5" min={new Date().toISOString().slice(0,10)} /></div>
                    <div><Label>Preferred window</Label><div className="mt-1.5 flex flex-wrap gap-2">{timeSlots.map((t) => (<button key={t} type="button" onClick={() => set('preferredTime', t)} className={`px-3 py-1.5 rounded-full text-sm border transition ${form.preferredTime === t ? 'border-brand-accent bg-brand-accent text-white' : 'border-black/10 bg-white text-brand-navy hover:border-brand-blue'}`}>{t}</button>))}</div></div>
                  </div>
                )}
              </div>
            )}
            {step === 2 && (
              <div><h2 className="h-display text-2xl">How do we reach you?</h2>
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <div><Label>Name *</Label><Input value={form.name} onChange={upd('name')} className="mt-1.5" /></div>
                  <div><Label>Phone *</Label><Input value={form.phone} onChange={upd('phone')} type="tel" className="mt-1.5" /></div>
                  <div className="sm:col-span-2"><Label>Email</Label><Input value={form.email} onChange={upd('email')} type="email" className="mt-1.5" /></div>
                  <div className="sm:col-span-2"><Label>Service address</Label><Input value={form.address} onChange={upd('address')} placeholder="123 Main St, Springfield IL" className="mt-1.5" /></div>
                  <div className="sm:col-span-2"><Label>Anything else?</Label><Textarea value={form.notes} onChange={upd('notes')} className="mt-1.5" placeholder="Gate code, dog in the yard, when symptoms started..." /></div>
                </div>
              </div>
            )}
            {step === 3 && (
              <div><h2 className="h-display text-2xl">Look right?</h2><p className="mt-1 text-sm text-brand-mute">A human will call within 15 minutes to confirm.</p>
                <dl className="mt-6 divide-y divide-black/10">
                  {[['Service', form.service],['When', form.urgency],['Date', form.preferredDate || '—'],['Window', form.preferredTime || '—'],['Name', form.name],['Phone', form.phone],['Email', form.email || '—'],['Address', form.address || '—'],['Notes', form.notes || '—']].map(([k,v]) => (<div key={k} className="flex justify-between py-3 gap-4"><dt className="text-sm text-brand-mute">{k}</dt><dd className="text-sm font-semibold text-brand-navy text-right">{v}</dd></div>))}
                </dl>
              </div>
            )}
          </div>

          <div className="mt-6 flex justify-between">
            <button type="button" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} className="btn-ghost disabled:opacity-40"><ChevronLeft className="w-4 h-4" /> Back</button>
            {step < 3 ? (
              <button type="button" onClick={next} className="btn-primary">Next <ChevronRight className="w-4 h-4" /></button>
            ) : (
              <button type="button" onClick={submit} disabled={loading} className="btn-primary disabled:opacity-60">{loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />} Confirm booking</button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
