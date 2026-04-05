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
      "Sleep Cool is a compact airflow system that sends cooler air directly into your bed. Instead of cooling the whole room, it targets the sleeping zone — so you stay comfortable without running the aircon all night.",
  },
  {
    question: "Does it replace air-conditioning?",
    answer:
      "It's not designed to replace your aircon entirely. Think of it as a way to reduce how much you rely on aircon at night. Many people find they can set the aircon higher or turn it off earlier when using targeted bed cooling.",
  },
  {
    question: "Is it noisy?",
    answer:
      "The system is designed to run quietly during sleep. Noise levels are comparable to a quiet fan. If you'd like more details, message us on WhatsApp and we'll share what to expect.",
  },
  {
    question: "Can it work with my bed setup?",
    answer:
      "Setup depends on your bed configuration — mattress type, bed frame, and room layout. Message us on WhatsApp with your setup details and we'll advise on the best fit.",
  },
  {
    question: "Is this suitable for couples?",
    answer:
      "Yes. One of the key advantages is that it can cool one side of the bed without affecting the other. This is especially useful for couples with different temperature preferences.",
  },
  {
    question: "Do I need installation?",
    answer:
      "No professional installation is needed. The unit is designed to be set up easily at home. We'll walk you through the process when you order.",
  },
  {
    question: "How do I order?",
    answer:
      "Message us on WhatsApp to check availability, pricing, and fit for your bed. We handle orders directly so we can make sure you get the right setup.",
  },
  {
    question: "Can I message first before buying?",
    answer:
      "Absolutely. We encourage it. Send us a message on WhatsApp to ask anything — no pressure, no obligation. We're happy to help you figure out if this is right for you.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-b from-background to-slate-50/50 scroll-mt-20">
      <div className="container">
        <SectionReveal>
          <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Questions people will ask
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
