import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { faqs, site } from '@/lib/site-config';
import CtaBanner from '@/components/site/CtaBanner';
import { HelpCircle } from 'lucide-react';

export const metadata = {
  title: 'Frequently Asked Questions',
  description: 'Answers about Maston’s Plumbing and Drain scheduling, emergency service, service areas, and plumbing support.',
};

export default function FaqPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-brand-blue/10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-white to-brand-sky" />
        <div className="container relative mx-auto max-w-3xl pb-12 pt-16 text-center">
          <div className="eyebrow justify-center"><HelpCircle className="h-3.5 w-3.5" /> FAQ</div>
          <h1 className="h-display mt-3 text-5xl md:text-6xl">Answers before you have to ask.</h1>
          <p className="mt-5 text-lg text-brand-mute">If your question is not here, call {site.phone}. Real people, clear next steps.</p>
        </div>
      </section>
      <section className="section">
        <div className="container max-w-3xl">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border-b border-brand-blue/10">
                <AccordionTrigger className="text-left font-display text-base font-bold text-brand-navy hover:no-underline md:text-lg">{faq.q}</AccordionTrigger>
                <AccordionContent className="leading-relaxed text-brand-mute">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
