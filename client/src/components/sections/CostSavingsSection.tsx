/*
 * Design: Tropical Rationalist
 * Cost Savings Section: Full-page section with calculator and context
 * Positioned to show ROI and financial benefit of Sleep Cool
 */
import { SectionReveal } from "@/components/SectionReveal";
import { CostSavingsCalculator } from "@/components/CostSavingsCalculator";

export function CostSavingsSection() {
  return (
    <section id="savings" className="py-16 md:py-24 bg-gradient-to-b from-background via-slate-50/30 to-background scroll-mt-20">
      <div className="container">
        <SectionReveal>
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
              See your savings
            </h2>
            <p className="text-lg text-slate-600">
              Adjust the sliders to see how much you'll save with Sleep Cool compared to running your aircon all night.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal delay={100}>
          <div className="max-w-4xl mx-auto">
            <CostSavingsCalculator />
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
