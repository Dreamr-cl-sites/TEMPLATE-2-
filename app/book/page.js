'use client';

import { useState } from 'react';
import { AlertTriangle, Calendar as CalendarIcon, Check, ChevronLeft, ChevronRight, Clock, Loader2, Phone, Sparkles } from 'lucide-react';
import { toast } from 'sonner';
import { site } from '@/lib/site-config';
import { services } from '@/lib/services-data';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const urgencyOptions = [
  { value: 'emergency', title: 'Emergency - ASAP', description: 'Active leak, no water, sewage backup', icon: AlertTriangle },
  { value: 'today', title: 'Today or tomorrow', description: 'Not flooding, but soon', icon: Clock },
  { value: 'standard', title: 'This week', description: 'Schedule when convenient', icon: CalendarIcon },
  { value: 'estimate', title: 'Estimate or planning', description: 'Future repair, upgrade, or project', icon: Sparkles },
];

const timeSlots = ['8-10 am', '10 am-12 pm', '12-2 pm', '2-4 pm', '4-6 pm'];

export default function BookPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ service: '', urgency: '', preferredDate: '', preferredTime: '', name: '', phone: '', email: '', address: '', notes: '' });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const update = (key) => (event) => setForm((current) => ({ ...current, [key]: typeof event === 'string' ? event : event.target.value }));
  const set = (key, value) => setForm((current) => ({ ...current, [key]: value }));

  function next() {
    if (step === 0 && !form.service) return toast.error('Pick a service to continue.');
    if (step === 1 && !form.urgency) return toast.error('Pick how urgent it is.');
    if (step === 2 && (!form.name || !form.phone)) return toast.error('Maston’s needs a name and phone.');
    setStep(step + 1);
  }

  async function submit() {
    setLoading(true);
    try {
      const res = await fetch('/api/book', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed');
      setDone(true);
    } catch (err) {
      toast.error(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <section className="section">
        <div className="container max-w-xl text-center">
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-brand-accent"><Check className="h-10 w-10 text-white" /></div>
          <h1 className="h-display mt-6 text-4xl">Request received.</h1>
          <p className="mt-3 text-brand-mute">Maston’s will call or text to confirm your service request. For an active emergency, call <a href={`tel:${site.phoneRaw}`} className="font-semibold text-brand-blue">{site.phone}</a> now.</p>
          <a href={`tel:${site.phoneRaw}`} className="btn-primary mt-8 inline-flex"><Phone className="h-4 w-4" /> Call now</a>
        </div>
      </section>
    );
  }

  const steps = ['Service', 'Urgency', 'Your info', 'Confirm'];

  return (
    <>
      <section className="relative overflow-hidden border-b border-brand-blue/10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-white to-brand-sky" />
        <div className="container relative mx-auto max-w-3xl pb-12 pt-14 text-center">
          <div className="eyebrow justify-center"><CalendarIcon className="h-3.5 w-3.5" /> Book Maston’s</div>
          <h1 className="h-display mt-3 text-5xl md:text-6xl">Request plumbing service in under a minute.</h1>
          <p className="mt-4 text-brand-mute">Four quick questions help Maston’s route the right plumber, drain technician, or water heater specialist.</p>
        </div>
      </section>

      <section className="section -mt-8">
        <div className="container max-w-3xl">
          <div className="mb-6 flex items-center justify-between">
            {steps.map((label, index) => (
              <div key={label} className="flex flex-1 items-center">
                <div className={`grid h-8 w-8 place-items-center rounded-full text-sm font-bold transition ${index <= step ? 'bg-brand-accent text-white' : 'border border-brand-blue/10 bg-brand-cream text-brand-mute'}`}>{index + 1}</div>
                <span className={`ml-2 hidden text-xs sm:inline ${index <= step ? 'font-semibold text-brand-navy' : 'text-brand-mute'}`}>{label}</span>
                {index < steps.length - 1 && <div className={`mx-2 h-0.5 flex-1 ${index < step ? 'bg-brand-accent' : 'bg-brand-blue/10'}`} />}
              </div>
            ))}
          </div>

          <div className="card-soft min-h-[380px] p-8 md:p-10">
            {step === 0 && (
              <div>
                <h2 className="h-display text-2xl">What can Maston’s help with?</h2>
                <p className="mt-1 text-sm text-brand-mute">Pick the closest match. Dispatch can adjust after reviewing the details.</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {services.map((service) => (
                    <button key={service.slug} type="button" onClick={() => set('service', service.name)} className={`rounded-xl border p-4 text-left transition ${form.service === service.name ? 'border-brand-accent bg-brand-accent/5' : 'border-brand-blue/10 bg-white hover:border-brand-blue/50'}`}>
                      <div className="font-display font-bold text-brand-navy">{service.name}</div>
                      <div className="mt-0.5 text-xs text-brand-mute">{service.short}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div>
                <h2 className="h-display text-2xl">How soon do you need service?</h2>
                <p className="mt-1 text-sm text-brand-mute">Choose the urgency honestly. Emergency plumbing should be called in directly too.</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {urgencyOptions.map((option) => {
                    const Icon = option.icon;
                    return (
                      <button key={option.value} type="button" onClick={() => set('urgency', option.value)} className={`rounded-xl border p-5 text-left transition ${form.urgency === option.value ? 'border-brand-accent bg-brand-accent/5' : 'border-brand-blue/10 bg-white hover:border-brand-blue/50'}`}>
                        <Icon className="h-6 w-6 text-brand-blue" />
                        <div className="mt-3 font-display font-bold text-brand-navy">{option.title}</div>
                        <div className="mt-0.5 text-xs text-brand-mute">{option.description}</div>
                      </button>
                    );
                  })}
                </div>
                {form.urgency && form.urgency !== 'emergency' && (
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div><Label>Preferred date</Label><Input type="date" value={form.preferredDate} onChange={update('preferredDate')} className="mt-1.5" min={new Date().toISOString().slice(0, 10)} /></div>
                    <div>
                      <Label>Preferred window</Label>
                      <div className="mt-1.5 flex flex-wrap gap-2">
                        {timeSlots.map((slot) => (
                          <button key={slot} type="button" onClick={() => set('preferredTime', slot)} className={`rounded-full border px-3 py-1.5 text-sm transition ${form.preferredTime === slot ? 'border-brand-accent bg-brand-accent text-white' : 'border-brand-blue/10 bg-white text-brand-navy hover:border-brand-blue'}`}>{slot}</button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {step === 2 && (
              <div>
                <h2 className="h-display text-2xl">How should Maston’s reach you?</h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div><Label>Name *</Label><Input value={form.name} onChange={update('name')} className="mt-1.5" /></div>
                  <div><Label>Phone *</Label><Input value={form.phone} onChange={update('phone')} type="tel" className="mt-1.5" /></div>
                  <div className="sm:col-span-2"><Label>Email</Label><Input value={form.email} onChange={update('email')} type="email" className="mt-1.5" /></div>
                  <div className="sm:col-span-2"><Label>Service address</Label><Input value={form.address} onChange={update('address')} placeholder="Tulsa, Broken Arrow, Bixby, or nearby service address" className="mt-1.5" /></div>
                  <div className="sm:col-span-2"><Label>Anything else?</Label><Textarea value={form.notes} onChange={update('notes')} className="mt-1.5" placeholder="Gate code, urgent symptoms, fixture location, or what changed today..." /></div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div>
                <h2 className="h-display text-2xl">Ready to send?</h2>
                <p className="mt-1 text-sm text-brand-mute">Maston’s will use this to confirm the next step.</p>
                <dl className="mt-6 divide-y divide-brand-blue/10">
                  {[
                    ['Service', form.service],
                    ['When', form.urgency],
                    ['Date', form.preferredDate || 'Not selected'],
                    ['Window', form.preferredTime || 'Not selected'],
                    ['Name', form.name],
                    ['Phone', form.phone],
                    ['Email', form.email || 'Not provided'],
                    ['Address', form.address || 'Not provided'],
                    ['Notes', form.notes || 'None'],
                  ].map(([key, value]) => (
                    <div key={key} className="flex justify-between gap-4 py-3"><dt className="text-sm text-brand-mute">{key}</dt><dd className="text-right text-sm font-semibold text-brand-navy">{value}</dd></div>
                  ))}
                </dl>
              </div>
            )}
          </div>

          <div className="mt-6 flex justify-between">
            <button type="button" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0} className="btn-ghost disabled:opacity-40"><ChevronLeft className="h-4 w-4" /> Back</button>
            {step < 3 ? (
              <button type="button" onClick={next} className="btn-primary">Next <ChevronRight className="h-4 w-4" /></button>
            ) : (
              <button type="button" onClick={submit} disabled={loading} className="btn-primary disabled:opacity-60">{loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />} Send request</button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
