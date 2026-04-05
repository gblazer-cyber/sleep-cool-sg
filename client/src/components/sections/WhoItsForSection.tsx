/*
 * Design: Tropical Rationalist
 * Who It's For: Audience tiles in a 2x2 grid. Warm amber accents for "hot sleeper" feel.
 * Teal check icons. Concise audience descriptions.
 */
import { SectionReveal } from "@/components/SectionReveal";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { WHATSAPP_URL } from "@shared/const";
import { Check } from "lucide-react";

const audiences = [
  "People who get too warm in bed at night",
  "Households trying to cut back on aircon use",
  "Couples with different temperature preferences",
  "Anyone who wants a smarter way to sleep cool",
];

const BEDROOM_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/103006489/Ysomh8sanPtsvbbp3smSHg/bedroom-comfort-emoCvofR6K8nWzPDmD8oZT.webp";

export function WhoItsForSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-teal-50/30">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
          {/* Image */}
          <SectionReveal className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-teal-200/20 to-amber-100/20 rounded-3xl blur-xl" />
              <img
                src={BEDROOM_IMAGE}
                alt="Person sleeping comfortably in a Singapore apartment with Sleep Cool system"
                className="relative rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </SectionReveal>

          {/* Content */}
          <div className="lg:w-1/2">
            <SectionReveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Built for <span className="text-teal-700">hot sleepers</span> in Singapore
              </h2>
            </SectionReveal>

            <div className="flex flex-col gap-4 mb-8">
              {audiences.map((audience, i) => (
                <SectionReveal key={i} delay={i * 100}>
                  <div className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm border border-slate-200/80">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-100 text-teal-700 shrink-0 mt-0.5">
                      <Check className="w-4 h-4" strokeWidth={3} />
                    </div>
                    <span className="text-base text-slate-700 font-medium">{audience}</span>
                  </div>
                </SectionReveal>
              ))}
            </div>

            <SectionReveal delay={400}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </SectionReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
