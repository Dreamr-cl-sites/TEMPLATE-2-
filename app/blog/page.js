import Link from 'next/link';
import Image from 'next/image';
import { Newspaper, Clock, ArrowRight } from 'lucide-react';
import { site } from '@/lib/site-config';
import { posts } from '@/lib/blog-data';
import CtaBanner from '@/components/site/CtaBanner';

export const metadata = {
  title: `Plumbing Blog | ${site.address.city} Buyer Guides`,
  description: 'Buyer-intent plumbing content that answers real pre-hire questions and links to relevant service/location pages.',
};

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <section className="relative overflow-hidden border-b border-black/5">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-white to-brand-sky" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container relative pt-16 pb-12 text-center max-w-3xl mx-auto">
          <div className="eyebrow justify-center"><Newspaper className="w-3.5 h-3.5" /> Blog</div>
          <h1 className="h-display text-5xl md:text-6xl mt-3">The plumber’s field notes.</h1>
          <p className="mt-4 text-brand-mute">Practical tips, money-saving guides, and the honest truth about your home&apos;s plumbing.</p>
        </div>
      </section>

      <section className="section -mt-8">
        <div className="container">
          <Link href={`/blog/${featured.slug}`} className="group block card-soft overflow-hidden mb-10 lg:grid lg:grid-cols-2">
            <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[360px]"><Image src={featured.img} alt={featured.title} fill className="object-cover group-hover:scale-105 transition duration-700" /></div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-brand-mute"><span className="text-brand-accent font-bold">{featured.tag}</span><span>·</span><Clock className="w-3.5 h-3.5" /><span>{featured.read}</span><span>·</span><span>{featured.date}</span></div>
              <h2 className="h-display text-3xl md:text-4xl mt-3 group-hover:text-brand-blue transition">{featured.title}</h2>
              <p className="mt-4 text-brand-mute leading-relaxed">{featured.excerpt}</p>
              <div className="mt-6 inline-flex items-center gap-2 text-brand-blue font-semibold">Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" /></div>
            </div>
          </Link>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group card-soft overflow-hidden hover:-translate-y-1 transition">
                <div className="relative aspect-[16/10]"><Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-105 transition duration-700" /></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-brand-mute"><span className="text-brand-accent font-bold">{p.tag}</span><span>·</span><span>{p.read}</span></div>
                  <h3 className="h-display text-xl mt-2 group-hover:text-brand-blue transition">{p.title}</h3>
                  <p className="mt-2 text-sm text-brand-mute">{p.excerpt}</p>
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
