/*
 * Design: Tropical Rationalist
 * Trial & Guarantee Section — Prominent, trust-building
 * 2-week sleep trial + money-back guarantee
 */
import { SectionReveal } from "@/components/SectionReveal";
import { CheckCircle2 } from "lucide-react";

export function TrialGuaranteeSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-teal-50 to-blue-50">
      <div className="container">
        <SectionReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Try it risk-free
            </h2>
            
            <p className="text-lg text-slate-600 mb-12">
              We're confident you'll love sleeping cool. That's why we offer a <span className="font-semibold text-teal-700">2-week sleep trial</span> with a <span className="font-semibold text-teal-700">full money-back guarantee</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {/* Trial */}
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  2-Week Sleep Trial
                </h3>
                <p className="text-slate-600">
                  Sleep on it for 14 nights. Experience the comfort. See the difference.
                </p>
              </div>

              {/* Guarantee */}
              <div className="bg-white rounded-lg p-8 shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 mx-auto mb-4">
                  <CheckCircle2 className="w-6 h-6 text-teal-700" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Money-Back Guarantee
                </h3>
                <p className="text-slate-600">
                  Not satisfied? Full refund. No questions asked. No hassle.
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-500 italic">
              We stand behind our product because we know it works.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
