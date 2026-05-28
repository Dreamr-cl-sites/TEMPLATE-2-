import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, Newspaper } from 'lucide-react';
import { site } from '@/lib/site-config';
import { posts } from '@/lib/blog-data';
import CtaBanner from '@/components/site/CtaBanner';

export const metadata = {
  title: `Plumbing Tips | ${site.address.city}`,
  description: 'Practical plumbing guidance from Maston’s for Tulsa-area homeowners and businesses.',
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <section className="relative overflow-hidden border-b border-brand-blue/10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-white to-brand-sky" />
        <div className="container relative mx-auto max-w-3xl pb-12 pt-16 text-center">
          <div className="eyebrow justify-center"><Newspaper className="h-3.5 w-3.5" /> Plumbing tips</div>
          <h1 className="h-display mt-3 text-5xl md:text-6xl">Field notes for Tulsa plumbing decisions.</h1>
          <p className="mt-4 text-brand-mute">Practical guidance for leaks, drains, water heaters, sewer issues, and the moments before you call a professional.</p>
        </div>
      </section>

      <section className="section -mt-8">
        <div className="container">
          <Link href={`/blog/${featured.slug}`} className="card-soft group mb-10 block overflow-hidden lg:grid lg:grid-cols-2">
            <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[360px]">
              <Image src={featured.img} alt={featured.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10">
              <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-brand-mute"><span className="font-bold text-brand-accent">{featured.tag}</span><span>·</span><Clock className="h-3.5 w-3.5" /><span>{featured.read}</span><span>·</span><span>{featured.date}</span></div>
              <h2 className="h-display mt-3 text-3xl transition group-hover:text-brand-blue md:text-4xl">{featured.title}</h2>
              <p className="mt-4 leading-relaxed text-brand-mute">{featured.excerpt}</p>
              <div className="mt-6 inline-flex items-center gap-2 font-semibold text-brand-blue">Read article <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></div>
            </div>
          </Link>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="card-soft group overflow-hidden transition hover:-translate-y-1">
                <div className="relative aspect-[16/10]"><Image src={post.img} alt={post.title} fill className="object-cover transition duration-700 group-hover:scale-105" /></div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-brand-mute"><span className="font-bold text-brand-accent">{post.tag}</span><span>·</span><span>{post.read}</span></div>
                  <h3 className="h-display mt-2 text-xl transition group-hover:text-brand-blue">{post.title}</h3>
                  <p className="mt-2 text-sm text-brand-mute">{post.excerpt}</p>
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
