'use client';

import { useState } from 'react';
import { Clock, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react';
import { toast } from 'sonner';
import { site } from '@/lib/site-config';
import { services } from '@/lib/services-data';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [loading, setLoading] = useState(false);
  const upd = (key) => (event) => setForm((current) => ({ ...current, [key]: typeof event === 'string' ? event : event.target.value }));

  async function submit(event) {
    event.preventDefault();
    if (!form.name || !form.phone) {
      toast.error('Please add your name and phone.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed');
      toast.success('Got it. Maston’s will follow up about your plumbing request.');
      setForm({ name: '', phone: '', email: '', service: '', message: '' });
    } catch (err) {
      toast.error(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-brand-blue/10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-white to-brand-sky" />
        <div className="container relative mx-auto max-w-3xl pb-12 pt-16 text-center">
          <div className="eyebrow justify-center">Contact Maston’s</div>
          <h1 className="h-display mt-3 text-5xl md:text-6xl">Tell us what is going on.</h1>
          <p className="mt-5 text-lg text-brand-mute">For urgent plumbing, call now. For scheduling, estimates, or non-emergency questions, send the form and Maston’s will follow up with the right next step.</p>
        </div>
      </section>

      <section className="section -mt-6">
        <div className="container grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <form onSubmit={submit} className="card-soft p-8 md:p-10">
            <h2 className="h-display text-2xl">Request plumbing service</h2>
            <p className="mt-1 text-sm text-brand-mute">Name and phone are all Maston’s needs to start routing your call.</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div><Label>Full name *</Label><Input value={form.name} onChange={upd('name')} placeholder="Tulsa homeowner" className="mt-1.5" required /></div>
              <div><Label>Phone *</Label><Input value={form.phone} onChange={upd('phone')} placeholder="(918) 555-0123" type="tel" className="mt-1.5" required /></div>
              <div className="sm:col-span-2"><Label>Email (optional)</Label><Input value={form.email} onChange={upd('email')} placeholder="Your email address" type="email" className="mt-1.5" /></div>
              <div className="sm:col-span-2">
                <Label>Service needed</Label>
                <Select value={form.service} onValueChange={(value) => setForm((current) => ({ ...current, service: value }))}>
                  <SelectTrigger className="mt-1.5"><SelectValue placeholder="Pick a service or leave blank" /></SelectTrigger>
                  <SelectContent>
                    {services.map((service) => <SelectItem key={service.slug} value={service.name}>{service.name}</SelectItem>)}
                    <SelectItem value="Not sure">Not sure yet</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="sm:col-span-2"><Label>What is going on?</Label><Textarea value={form.message} onChange={upd('message')} placeholder="Slow drain, leaking pipe, no hot water, sewer smell, or another plumbing concern..." className="mt-1.5 min-h-[120px]" /></div>
            </div>
            <button type="submit" disabled={loading} className="btn-primary mt-6 w-full justify-center disabled:opacity-60 sm:w-auto">
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />} {loading ? 'Sending...' : 'Send request'}
            </button>
            <p className="mt-4 text-xs text-brand-mute">By submitting, you agree Maston’s can call or text about your plumbing request.</p>
          </form>

          <div className="space-y-4">
            <div className="card-soft bg-brand-navy p-6 text-white">
              <Phone className="h-8 w-8 text-brand-accent" />
              <div className="mt-3 text-xs uppercase tracking-wider text-white/60">Emergency or same-day help</div>
              <a href={`tel:${site.phoneRaw}`} className="block font-display text-2xl font-bold transition hover:text-brand-accent">{site.phone}</a>
              <p className="mt-2 text-sm text-white/75">Call for 24/7 emergency plumbing dispatch.</p>
            </div>
            <div className="card-soft p-6">
              <Mail className="h-6 w-6 text-brand-blue" />
              <div className="mt-2 text-xs uppercase tracking-wider text-brand-mute">Email</div>
              <a href={`mailto:${site.email}`} className="font-semibold text-brand-navy hover:text-brand-blue">{site.email}</a>
            </div>
            <div className="card-soft p-6">
              <MapPin className="h-6 w-6 text-brand-blue" />
              <div className="mt-2 text-xs uppercase tracking-wider text-brand-mute">Service base</div>
              <div className="font-semibold text-brand-navy">{site.address.line1}<br />{site.address.city}, {site.address.region} {site.address.postal}</div>
            </div>
            <div className="card-soft p-6">
              <Clock className="h-6 w-6 text-brand-blue" />
              <div className="mt-2 text-xs uppercase tracking-wider text-brand-mute">Hours</div>
              <div className="font-semibold text-brand-navy">{site.hours}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-brand-blue/10 bg-white">
        <div className="container">
          <h2 className="h-display text-center text-3xl">Service areas</h2>
          <p className="mt-3 text-center text-brand-mute">{site.serviceArea}</p>
          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2">
            {site.serviceTowns.map((town) => (
              <span key={town} className="inline-flex items-center gap-1 rounded-full border border-brand-blue/10 bg-brand-cream px-3.5 py-1.5 text-sm text-brand-navy"><MapPin className="h-3 w-3 text-brand-blue" /> {town}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
