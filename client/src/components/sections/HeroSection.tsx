/*
 * Design: Tropical Rationalist — Scandinavian-Tropical Fusion
 * Hero: Asymmetric layout. Headline + copy left, YouTube video right.
 * Warm off-white bg. Teal accents. DM Sans Bold headlines.
 * "Built for hot sleepers in Singapore" tagline.
 */
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { WHATSAPP_URL } from "@shared/const";
import { SectionReveal } from "@/components/SectionReveal";

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Subtle warm-to-cool gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/60 via-background to-teal-50/40 pointer-events-none" />

      <div className="container relative">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
          {/* Left: Copy — 55% */}
          <div className="lg:w-[55%] flex flex-col gap-6">
            <SectionReveal>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-slate-900">
                Sleep cool.{" "}
                <span className="text-teal-700">Spend less.</span>
              </h1>
            </SectionReveal>

            <SectionReveal delay={100}>
              <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-xl">
                Built for hot sleepers in Singapore. Cool your bed, not your room. Save up to $900/year on electricity.
              </p>
            </SectionReveal>

            <SectionReveal delay={150}>
              <div className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-bold w-fit">
                Opening Special: $99 (U.P. $150)
              </div>
            </SectionReveal>

            <SectionReveal delay={200}>
              <div className="flex flex-wrap gap-3 mt-2">
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

            {/* Quick facts */}
            <SectionReveal delay={300}>
              <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-teal-700">60W</span>
                  <span className="text-sm text-slate-600">Energy efficient</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-teal-700">$0.15</span>
                  <span className="text-sm text-slate-600">Cost per night</span>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Right: YouTube Video — 45% */}
          <SectionReveal delay={200} className="lg:w-[45%]">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl bg-slate-900">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Skf6kJInp-w?feature=share"
                title="Sleep Cool SG Product Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0"
              />
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
