/*
 * Design: Tropical Rationalist
 * Singapore Section: Connects the product to local context.
 * 3 icon cards. Warm-to-cool gradient background.
 * No fake statistics — qualitative framing only.
 */
import { SectionReveal } from "@/components/SectionReveal";
import { Sun, Wind, Leaf } from "lucide-react";

const cards = [
  {
    icon: Sun,
    title: "Designed for tropical nights",
    description:
      "Singapore stays warm year-round. Sleep Cool is built around the reality of hot, humid nights — not cold-climate assumptions.",
  },
  {
    icon: Wind,
    title: "Uses focused airflow where it matters",
    description:
      "Instead of cooling an entire room, the system directs airflow to your sleeping zone — where you actually feel the heat.",
  },
  {
    icon: Leaf,
    title: "Helps reduce wasteful cooling habits",
    description:
      "Many households run the aircon all night just to sleep. Sleep Cool offers a more targeted way to stay comfortable.",
  },
];

export function SingaporeSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <SectionReveal>
          <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Hotter nights. Higher bills.{" "}
              <span className="text-teal-700">Same sleep problem.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              In Singapore, warm nights and high humidity make it hard to sleep comfortably. Many people end up running the aircon for hours, driving up electricity bills — just to cool a room they're only using to sleep in. There's a more practical way.
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <SectionReveal key={i} delay={i * 120}>
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 h-full hover:shadow-md transition-shadow duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-teal-100 text-teal-700 mb-4">
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{card.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
