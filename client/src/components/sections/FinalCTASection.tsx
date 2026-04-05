/*
 * Design: Tropical Rationalist
 * Final CTA: Strong conversion section. Teal gradient bg.
 * Two CTA buttons. Clear, punchy copy.
 */
import { SectionReveal } from "@/components/SectionReveal";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { WHATSAPP_URL, WHATSAPP_NUMBER } from "@shared/const";

const WHATSAPP_SETUP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi, I'd like to ask about Sleep Cool SG. Can you help me check if it fits my bed setup?"
)}`;

export function FinalCTASection() {
  return (
    <section id="contact" className="py-16 md:py-24 scroll-mt-20">
      <div className="container">
        <SectionReveal>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Gradient bg */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-700 via-teal-800 to-slate-900" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.55_0.12_190_/_0.3),_transparent_60%)]" />

            <div className="relative px-6 py-14 md:px-12 md:py-20 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Stop paying to cool the whole room.
              </h2>
              <p className="text-lg text-teal-100 leading-relaxed max-w-xl mx-auto mb-8">
                Message us on WhatsApp to check fit, pricing, and early availability. We're happy to help — no pressure.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-base"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
                <a
                  href={WHATSAPP_SETUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold rounded-xl px-6 py-3.5 transition-all duration-200 backdrop-blur-sm border border-white/20"
                >
                  Ask about my bed setup
                </a>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
