/*
 * Design: Tropical Rationalist
 * Problem Section: Warm amber tint for "problem" feel.
 * 3-column comparison: Aircon vs Fan vs Sleep Cool.
 */
import { SectionReveal } from "@/components/SectionReveal";
import { AirVent, Fan, Target } from "lucide-react";

const comparisons = [
  {
    icon: AirVent,
    title: "Air-conditioning",
    description: "Cools the whole room — expensive and often more than you need just to sleep.",
    accent: "bg-amber-100 text-amber-700",
  },
  {
    icon: Fan,
    title: "Ceiling / standing fan",
    description: "Moves warm air around. Helps a little, but doesn't actually cool where you feel the heat.",
    accent: "bg-amber-50 text-amber-600",
  },
  {
    icon: Target,
    title: "Sleep Cool",
    description: "Sends cooler airflow directly into your bed. Targets the sleeping zone, not the whole room.",
    accent: "bg-teal-100 text-teal-700",
  },
];

export function ProblemSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50/50 to-background">
      <div className="container">
        <SectionReveal>
          <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              Your room is not the problem.{" "}
              <span className="text-amber-600">Your bed is.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              At night, many people turn the aircon lower and lower just to fall asleep comfortably. But cooling the whole room for hours is expensive and inefficient — especially when what you really want is relief where your body actually feels the heat: in bed.
            </p>
          </div>
        </SectionReveal>

        {/* 3-column comparison */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {comparisons.map((item, i) => (
            <SectionReveal key={i} delay={i * 100}>
              <div
                className={`rounded-2xl p-6 md:p-8 h-full border transition-all duration-300 hover:shadow-lg ${
                  i === 2
                    ? "bg-teal-50/80 border-teal-200 shadow-md ring-2 ring-teal-200/50"
                    : "bg-white border-slate-200/80 shadow-sm"
                }`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${item.accent}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
