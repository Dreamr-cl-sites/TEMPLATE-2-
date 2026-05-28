import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqs } from '@/lib/site-config';
import CtaBanner from '@/components/site/CtaBanner';
import { HelpCircle } from 'lucide-react';

export const metadata = { title: 'Frequently Asked Questions', description: 'Answers about pricing, scheduling, warranties, and what to expect.' };

export default function FaqPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-black/5">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-white to-brand-sky" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container relative pt-16 pb-12 text-center max-w-3xl mx-auto">
          <div className="eyebrow justify-center"><HelpCircle className="w-3.5 h-3.5" /> FAQ</div>
          <h1 className="h-display text-5xl md:text-6xl mt-3">Answers, before you have to ask.</h1>
          <p className="mt-5 text-lg text-brand-mute">If your question is not here, give us a call — real people, no scripts.</p>
        </div>
      </section>
      <section className="section">
        <div className="container max-w-3xl">
          <Accordion type="single" collapsible>
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`} className="border-b border-black/10">
                <AccordionTrigger className="text-left font-display font-bold text-brand-navy text-base md:text-lg hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-brand-mute leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
