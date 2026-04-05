/*
 * Design: Tropical Rationalist
 * Who It's For: Audience tiles + YouTube video embed.
 * No couples reference. Teal check icons.
 */
import { SectionReveal } from "@/components/SectionReveal";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { WHATSAPP_URL } from "@shared/const";
import { Check } from "lucide-react";

const audiences = [
  "People who get too warm in bed at night",
  "Households trying to cut back on aircon use",
  "Anyone who wants a smarter way to sleep cool",
];

export function WhoItsForSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-teal-50/30">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
          {/* Video */}
          <SectionReveal className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-teal-200/20 to-amber-100/20 rounded-3xl blur-xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[9/16] max-w-[320px] mx-auto lg:mx-0">
                <iframe
                  src="https://www.youtube.com/embed/Skf6kJInp-w"
                  title="Sleep Cool SG product demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
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
