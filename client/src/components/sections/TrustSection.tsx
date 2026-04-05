/*
 * Design: Tropical Rationalist
 * Trust Section: Honest early-stage trust. No fake reviews.
 * Founder-style note. "Why message us now?" box. Warm, personal.
 */
import { SectionReveal } from "@/components/SectionReveal";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { WHATSAPP_URL } from "@shared/const";
import { MessageCircle, Ruler, DollarSign, Settings, ShoppingBag } from "lucide-react";

const reasons = [
  { icon: Ruler, text: "Ask if it fits your bed setup" },
  { icon: DollarSign, text: "Check current pricing" },
  { icon: Settings, text: "Enquire about custom options" },
  { icon: ShoppingBag, text: "Join early orders" },
];

export function TrustSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Built to solve a problem many Singaporeans{" "}
                <span className="text-teal-700">already know</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Too hot to sleep. Too expensive to run the aircon all night. Sleep Cool is built for people who are tired of choosing between comfort and cost.
              </p>
            </div>
          </SectionReveal>

          {/* Founder note */}
          <SectionReveal delay={100}>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200/80 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-100 text-teal-700 shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">A note from the team</h3>
                  <p className="text-slate-600 leading-relaxed">
                    We're building and refining this product for real bedrooms in Singapore. We know the problem because we live with it too. Message us on WhatsApp to ask about fit, setup, and early orders. We're happy to chat — no pressure.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Why message us now? */}
          <SectionReveal delay={200}>
            <div className="bg-teal-50/80 rounded-2xl p-6 md:p-8 border border-teal-200/60">
              <h3 className="text-lg font-bold text-slate-900 mb-5 text-center">Why message us now?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {reasons.map((reason, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-white text-teal-700 shadow-sm shrink-0">
                      <reason.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-slate-700">{reason.text}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
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
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
