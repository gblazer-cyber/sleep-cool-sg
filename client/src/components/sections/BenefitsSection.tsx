/*
 * Design: Tropical Rationalist
 * Benefits: 6 cards in a 2x3 grid (desktop) or stacked (mobile).
 * Clean white cards with teal icon accents. Practical copy.
 */
import { SectionReveal } from "@/components/SectionReveal";
import { Moon, Zap, Users, Box, Clock, MapPin } from "lucide-react";

const benefits = [
  {
    icon: Moon,
    title: "Sleep more comfortably",
    description: "Targeted airflow where you actually feel heat at night. Cool the sleeping zone, not the ceiling.",
  },
  {
    icon: Zap,
    title: "Use less unnecessary aircon",
    description: "Reduce the urge to chill the entire room just to get comfortable in bed.",
  },
  {
    icon: Users,
    title: "Better for shared rooms",
    description: "Cool one sleeping area instead of forcing the whole room colder. Great for couples with different preferences.",
  },
  {
    icon: Box,
    title: "Compact and simple",
    description: "Designed to fit normal homes without bulky installation. Sits on a nightstand or beside your bed.",
  },
  {
    icon: Clock,
    title: "Made for real nightly use",
    description: "Easy enough to become part of a normal bedtime routine. Set it up once and use it every night.",
  },
  {
    icon: MapPin,
    title: "Practical for Singapore",
    description: "Built around heat, humidity, and cost-conscious living. Not a luxury gadget — a practical solution.",
  },
];

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-16 md:py-24 scroll-mt-20">
      <div className="container">
        <SectionReveal>
          <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Why people will <span className="text-teal-700">want this</span>
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((benefit, i) => (
            <SectionReveal key={i} delay={i * 80}>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 h-full hover:shadow-md hover:border-teal-200/60 transition-all duration-300 group">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-teal-100 text-teal-700 mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300">
                  <benefit.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
