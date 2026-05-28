import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Clock, Phone } from 'lucide-react';
import { posts } from '@/lib/blog-data';
import { site } from '@/lib/site-config';
import CtaBanner from '@/components/site/CtaBanner';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = posts.find((item) => item.slug === params.slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default function BlogPostPage({ params }) {
  const post = posts.find((item) => item.slug === params.slug);
  if (!post) notFound();
  const related = posts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="section">
        <div className="container max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-brand-mute hover:text-brand-navy"><ArrowLeft className="h-4 w-4" /> All articles</Link>
          <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-wider text-brand-mute"><span className="font-bold text-brand-accent">{post.tag}</span><span>·</span><Clock className="h-3.5 w-3.5" /><span>{post.read}</span><span>·</span><span>{post.date}</span></div>
          <h1 className="h-display mt-4 text-4xl md:text-5xl">{post.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-brand-mute">{post.excerpt}</p>
          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl shadow-lg">
            <Image src={post.img} alt={post.title} fill className="object-cover" priority sizes="100vw" />
          </div>
          <div className="mt-10">
            {post.body.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-5 text-lg leading-relaxed text-brand-navy/85">{paragraph}</p>
            ))}
          </div>
          <div className="card-soft mt-8 p-6">
            <h2 className="h-display text-3xl">Next step</h2>
            <p className="mt-2 text-sm text-brand-mute">If this sounds like your home or business, use these direct pages:</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {post.serviceSlug && <Link href={`/services/${post.serviceSlug}`} className="btn-secondary">Related service <ArrowRight className="h-4 w-4" /></Link>}
              {post.locationSlug && <Link href={`/locations/${post.locationSlug}`} className="btn-secondary">Local area page <ArrowRight className="h-4 w-4" /></Link>}
              <Link href={`tel:${site.phoneRaw}`} className="btn-primary"><Phone className="h-4 w-4" /> Call {site.phone}</Link>
            </div>
          </div>
        </div>
      </article>

      <section className="section border-t border-brand-blue/10 bg-white">
        <div className="container">
          <h2 className="h-display mb-8 text-3xl">Keep reading</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="card-soft group overflow-hidden transition hover:-translate-y-1">
                <div className="relative aspect-[16/10]"><Image src={item.img} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-105" /></div>
                <div className="p-5">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-accent">{item.tag}</div>
                  <h3 className="h-display mt-2 text-lg transition group-hover:text-brand-blue">{item.title}</h3>
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
