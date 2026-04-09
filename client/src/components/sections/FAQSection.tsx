/*
 * Design: Tropical Rationalist
 * FAQ: Clean accordion using Radix. Practical plain-English answers.
 * No invented specs. Directs to WhatsApp where details are unknown.
 */
import { SectionReveal } from "@/components/SectionReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WHATSAPP_URL } from "@shared/const";

const faqs = [
  {
    question: "What does Sleep Cool do?",
    answer:
      "Sleep Cool is a compact airflow system that sends cooler air directly into your bed. Instead of cooling the whole room, it targets the sleeping zone — so you stay comfortable at night without relying on the aircon all night.",
  },
  {
    question: "Do I need installation?",
    answer:
      "No. It is directly plug and play. Just position it beside your bed, tuck the duct under your sheets, and plug it in.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Opening special: $99 SGD (U.P. $150). Message us on WhatsApp to order.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-background to-slate-50/50 scroll-mt-20">
      <div className="container">
        <SectionReveal>
          <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Quick answers
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal delay={100}>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-white rounded-xl border border-slate-200/80 shadow-sm px-6 data-[state=open]:shadow-md transition-shadow duration-300"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-slate-900 hover:text-teal-700 py-5 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-slate-600 leading-relaxed pb-5">
                    {faq.answer}
                    {faq.answer.includes("WhatsApp") && (
                      <>
                        {" "}
                        <a
                          href={WHATSAPP_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-teal-700 font-medium underline underline-offset-2 hover:text-teal-800"
                        >
                          Message us here
                        </a>
                        .
                      </>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
