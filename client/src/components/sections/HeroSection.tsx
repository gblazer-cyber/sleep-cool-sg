/*
 * Design: Tropical Rationalist — Scandinavian-Tropical Fusion
 * Hero: Asymmetric 60/40 split. Large headline left, product photos + video right.
 * Warm off-white bg. Teal accents. DM Sans Bold headlines.
 * Three benefit bullets below hero copy.
 */
import { WhatsAppIcon } from "@/components/WhatsAppIcon";
import { WHATSAPP_URL } from "@shared/const";
import { SectionReveal } from "@/components/SectionReveal";
import { Wind, Thermometer, Home } from "lucide-react";

const PRODUCT_FRONT = "https://d2xsxph8kpxj0f.cloudfront.net/103006489/Ysomh8sanPtsvbbp3smSHg/product-front_b0c75b09.webp";
const PRODUCT_SIDE = "https://d2xsxph8kpxj0f.cloudfront.net/103006489/Ysomh8sanPtsvbbp3smSHg/product-side_b0273c23.webp";

const benefits = [
  { icon: Thermometer, text: "Cool the bed, not the whole room" },
  { icon: Wind, text: "Better comfort with less aircon reliance" },
  { icon: Home, text: "Compact setup for Singapore homes" },
];

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
                Stop paying to cool an empty room. Sleep Cool sends cooling airflow directly into your bed, so you stay comfortable at night without relying on the aircon all night.
              </p>
            </SectionReveal>

            <SectionReveal delay={150}>
              <p className="text-sm font-medium text-amber-600 tracking-wide uppercase">
                Built for hot nights in Singapore
              </p>
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
                <a href="#how-it-works" className="btn-secondary-cta">
                  See how it works
                </a>
              </div>
            </SectionReveal>

            {/* Benefit bullets */}
            <SectionReveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                {benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm text-slate-700">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-100 text-teal-700 shrink-0">
                      <b.icon className="w-4 h-4" />
                    </div>
                    <span className="font-medium">{b.text}</span>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>

          {/* Right: Real product photos — 45% */}
          <SectionReveal delay={200} className="lg:w-[45%]">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-teal-200/30 to-amber-100/30 rounded-3xl blur-2xl" />
              <div className="relative grid grid-cols-2 gap-3">
                <img
                  src={PRODUCT_FRONT}
                  alt="Sleep Cool SG bed cooling unit — front view showing the compact airflow system"
                  className="rounded-2xl shadow-lg w-full object-cover aspect-[3/4] bg-slate-100"
                  loading="eager"
                />
                <img
                  src={PRODUCT_SIDE}
                  alt="Sleep Cool SG bed cooling unit — side view showing the duct and airflow direction"
                  className="rounded-2xl shadow-lg w-full object-cover aspect-[3/4] bg-slate-100"
                  loading="eager"
                />
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
