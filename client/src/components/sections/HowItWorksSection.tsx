/*
 * Design: Tropical Rationalist
 * How It Works: 3-step numbered layout. Cool teal bg section.
 * Product diagram image. Clean, informative, practical.
 */
import { SectionReveal } from "@/components/SectionReveal";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { WHATSAPP_URL } from "@shared/const";

const HOW_IT_WORKS_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/103006489/Ysomh8sanPtsvbbp3smSHg/how-it-works-mk9Dmu9T3p6g4fXVzDoHcR.webp";

const steps = [
  {
    number: "01",
    title: "Place the unit beside your bed",
    description:
      "The compact cooling unit sits on your nightstand or on the floor next to your bed. It takes up minimal space.",
  },
  {
    number: "02",
    title: "Air is directed into your bedding",
    description:
      "A flexible duct channels cooler air from the unit directly into your bed, right where you sleep.",
  },
  {
    number: "03",
    title: "Sleep cooler without overcooling the room",
    description:
      "You feel the cooling where it matters — in bed — without having to chill the entire room all night.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-b from-teal-50/60 to-background scroll-mt-20">
      <div className="container">
        <SectionReveal>
          <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Cool your bed, <span className="text-teal-700">not your room.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Sleep Cool is a compact airflow system that sends cooler air directly into your bed, so you sleep more comfortably without running the aircon all night.
            </p>
          </div>
        </SectionReveal>

        {/* 3-step layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 md:mb-16">
          {steps.map((step, i) => (
            <SectionReveal key={i} delay={i * 120}>
              <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 h-full hover:shadow-md transition-shadow duration-300">
                <span className="text-5xl font-bold text-teal-200/70 absolute top-4 right-6 select-none">
                  {step.number}
                </span>
                <div className="relative">
                  <h3 className="text-lg font-bold text-slate-900 mb-3 pr-12">{step.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Product diagram */}
        <SectionReveal>
          <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 bg-white">
            <img
              src={HOW_IT_WORKS_IMAGE}
              alt="How Sleep Cool works — diagram showing the compact cooling unit, flexible duct directing airflow under bedding, and the cool sleeping zone"
              className="w-full object-cover"
              loading="lazy"
            />
          </div>
        </SectionReveal>

        {/* CTA */}
        <SectionReveal delay={200}>
          <div className="text-center mt-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
