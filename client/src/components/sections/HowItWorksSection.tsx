/*
 * Design: Tropical Rationalist
 * How It Works: 3-step numbered layout. Cool teal bg section.
 * Clean, informative, practical.
 */
import { SectionReveal } from "@/components/SectionReveal";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { WHATSAPP_URL } from "@shared/const";

const steps = [
  {
    number: "01",
    title: "Place the unit beside your bed",
    description:
      "The compact airflow unit sits on your nightstand or on the floor next to your bed. No installation, no drilling, no modifications needed.",
  },
  {
    number: "02",
    title: "Air circulates under your sheets",
    description:
      "A flexible duct channels air directly under your sheets and blankets, circulating it to remove trapped heat and improve ventilation.",
  },
  {
    number: "03",
    title: "Sleep better without overcooling the room",
    description:
      "Better airflow and ventilation in your bed means you sleep more comfortably without running the aircon all night. Lower electricity costs, better sleep.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-b from-teal-50/60 to-background scroll-mt-20">
      <div className="container">
        <SectionReveal>
          <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              A bed airflow <span className="text-teal-700">system that works.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Sleep Cool circulates air directly under your sheets, removing trapped heat and improving ventilation where you sleep. No installation needed — just place it beside your bed and enjoy better sleep comfort.
            </p>
          </div>
        </SectionReveal>

        {/* 3-step layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

        {/* CTA */}
        <SectionReveal delay={200}>
          <div className="text-center mt-12 md:mt-16">
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
