import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Clock, ArrowLeft, ArrowRight, Phone } from 'lucide-react';
import { posts } from '@/lib/blog-data';
import { site } from '@/lib/site-config';
import CtaBanner from '@/components/site/CtaBanner';

export function generateStaticParams() { return posts.map((p) => ({ slug: p.slug })); }
export function generateMetadata({ params }) {
  const p = posts.find((x) => x.slug === params.slug);
  return p ? { title: p.title, description: p.excerpt } : {};
}

export default function BlogPostPage({ params }) {
  const p = posts.find((x) => x.slug === params.slug);
  if (!p) notFound();
  const related = posts.filter((x) => x.slug !== p.slug).slice(0, 3);
  return (
    <>
      <article className="section">
        <div className="container max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-brand-mute hover:text-brand-navy"><ArrowLeft className="w-4 h-4" /> All articles</Link>
          <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-wider text-brand-mute"><span className="text-brand-accent font-bold">{p.tag}</span><span>·</span><Clock className="w-3.5 h-3.5" /><span>{p.read}</span><span>·</span><span>{p.date}</span></div>
          <h1 className="h-display text-4xl md:text-5xl mt-4">{p.title}</h1>
          <p className="mt-4 text-lg text-brand-mute leading-relaxed">{p.excerpt}</p>
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mt-8 shadow-lg"><Image src={p.img} alt={p.title} fill className="object-cover" priority sizes="100vw" /></div>
          <div className="mt-10 prose prose-lg max-w-none prose-headings:font-display prose-headings:text-brand-navy prose-p:text-brand-navy/85 prose-p:leading-relaxed">
            {p.body.split('\n\n').map((para, i) => (<p key={i} className="text-brand-navy/85 leading-relaxed mb-5">{para}</p>))}
          </div>
          <div className="card-soft p-6 mt-8">
            <h2 className="h-display text-3xl">Next step</h2>
            <p className="text-sm text-brand-mute mt-2">If this situation matches your home, use these direct pages:</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {p.serviceSlug && <Link href={`/services/${p.serviceSlug}`} className="btn-ghost">Related service <ArrowRight className="w-4 h-4" /></Link>}
              {p.locationSlug && <Link href={`/locations/${p.locationSlug}`} className="btn-ghost">Local area page <ArrowRight className="w-4 h-4" /></Link>}
              <Link href={`tel:${site.phoneRaw}`} className="btn-primary"><Phone className="w-4 h-4" /> Call {site.phone}</Link>
            </div>
          </div>
        </div>
      </article>

      <section className="section bg-white border-t border-black/5">
        <div className="container">
          <h2 className="h-display text-3xl mb-8">Keep reading</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((r) => (
              <Link key={r.slug} href={`/blog/${r.slug}`} className="card-soft overflow-hidden group hover:-translate-y-1 transition">
                <div className="relative aspect-[16/10]"><Image src={r.img} alt={r.title} fill className="object-cover group-hover:scale-105 transition duration-700" /></div>
                <div className="p-5">
                  <div className="text-xs uppercase tracking-wider text-brand-accent font-bold">{r.tag}</div>
                  <h3 className="h-display text-lg mt-2 group-hover:text-brand-blue transition">{r.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
