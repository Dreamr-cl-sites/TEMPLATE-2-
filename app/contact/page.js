'use client';
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { site } from '@/lib/site-config';
import { services } from '@/lib/services-data';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [loading, setLoading] = useState(false);
  const upd = (k) => (e) => setForm((f) => ({ ...f, [k]: typeof e === 'string' ? e : e.target.value }));

  async function submit(e) {
    e.preventDefault();
    if (!form.name || !form.phone) { toast.error('Please add your name and phone.'); return; }
    setLoading(true);
    try {
      const res = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed');
      toast.success('Got it! We will call you within 15 minutes during business hours.');
      setForm({ name: '', phone: '', email: '', service: '', message: '' });
    } catch (err) { toast.error(err.message || 'Something went wrong'); } finally { setLoading(false); }
  }

  return (
    <>
      <section className="relative overflow-hidden border-b border-black/5">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-white to-brand-sky" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container relative pt-16 pb-12 text-center max-w-3xl mx-auto">
          <div className="eyebrow justify-center">Contact us</div>
          <h1 className="h-display text-5xl md:text-6xl mt-3">Let&apos;s fix it together.</h1>
          <p className="mt-5 text-lg text-brand-mute">Tell us what is going on. We will text or call you back within 15 minutes during business hours — sooner if it is urgent.</p>
        </div>
      </section>

      <section className="section -mt-6">
        <div className="container grid lg:grid-cols-[1.2fr_1fr] gap-10">
          <form onSubmit={submit} className="card-soft p-8 md:p-10">
            <h2 className="h-display text-2xl">Send us a message</h2>
            <p className="mt-1 text-sm text-brand-mute">Name and phone are all we need to get started.</p>
            <div className="mt-7 grid sm:grid-cols-2 gap-4">
              <div className="sm:col-span-1"><Label>Full name *</Label><Input value={form.name} onChange={upd('name')} placeholder="Jane Smith" className="mt-1.5" required /></div>
              <div className="sm:col-span-1"><Label>Phone *</Label><Input value={form.phone} onChange={upd('phone')} placeholder="(555) 123-4567" type="tel" className="mt-1.5" required /></div>
              <div className="sm:col-span-2"><Label>Email (optional)</Label><Input value={form.email} onChange={upd('email')} placeholder="you@email.com" type="email" className="mt-1.5" /></div>
              <div className="sm:col-span-2"><Label>Service needed</Label>
                <Select value={form.service} onValueChange={(v) => setForm((f) => ({ ...f, service: v }))}>
                  <SelectTrigger className="mt-1.5"><SelectValue placeholder="Pick a service (or leave blank)" /></SelectTrigger>
                  <SelectContent>{services.map((s) => (<SelectItem key={s.slug} value={s.name}>{s.name}</SelectItem>))}<SelectItem value="Not sure">Not sure yet</SelectItem></SelectContent>
                </Select>
              </div>
              <div className="sm:col-span-2"><Label>What is going on?</Label><Textarea value={form.message} onChange={upd('message')} placeholder="Tell us what you're seeing or hearing..." className="mt-1.5 min-h-[120px]" /></div>
            </div>
            <button type="submit" disabled={loading} className="btn-primary mt-6 w-full sm:w-auto justify-center disabled:opacity-60">
              {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />} {loading ? 'Sending...' : 'Send message'}
            </button>
            <p className="mt-4 text-xs text-brand-mute">By submitting you agree we can call/text you. We never share your info.</p>
          </form>

          <div className="space-y-4">
            <div className="card-soft p-6 bg-brand-navy text-white">
              <Phone className="w-8 h-8 text-brand-accent" />
              <div className="mt-3 text-xs uppercase tracking-wider text-white/60">Emergency or now</div>
              <a href={`tel:${site.phoneRaw}`} className="font-display text-2xl font-bold hover:text-brand-accent transition block">{site.phone}</a>
              <p className="mt-2 text-sm text-white/75">A real person answers, day or night.</p>
            </div>
            <div className="card-soft p-6">
              <Mail className="w-6 h-6 text-brand-blue" />
              <div className="mt-2 text-xs uppercase tracking-wider text-brand-mute">Email</div>
              <a href={`mailto:${site.email}`} className="font-semibold text-brand-navy hover:text-brand-blue">{site.email}</a>
            </div>
            <div className="card-soft p-6">
              <MapPin className="w-6 h-6 text-brand-blue" />
              <div className="mt-2 text-xs uppercase tracking-wider text-brand-mute">Office</div>
              <div className="font-semibold text-brand-navy">{site.address.line1}<br />{site.address.city}, {site.address.region} {site.address.postal}</div>
            </div>
            <div className="card-soft p-6">
              <Clock className="w-6 h-6 text-brand-blue" />
              <div className="mt-2 text-xs uppercase tracking-wider text-brand-mute">Hours</div>
              <div className="font-semibold text-brand-navy">{site.hours}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white border-t border-black/5">
        <div className="container">
          <h2 className="h-display text-3xl text-center">Service areas</h2>
          <p className="text-center text-brand-mute mt-3">{site.serviceArea}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {site.serviceTowns.map((t) => (<span key={t} className="inline-flex items-center gap-1 rounded-full bg-brand-cream border border-black/5 px-3.5 py-1.5 text-sm text-brand-navy"><MapPin className="w-3 h-3 text-brand-blue" /> {t}</span>))}
          </div>
        </div>
      </section>
    </>
  );
}
