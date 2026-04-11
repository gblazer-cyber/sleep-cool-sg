/*
 * Design: Tropical Rationalist — Scandinavian-Tropical Fusion
 * Sleep Cool SG Landing Page
 * Color: Warm off-white (#FAFAF7), deep teal (#0D7377), soft amber (#E8A54B), slate charcoal (#1E293B)
 * Typography: DM Sans Bold/Regular/Medium
 * Layout: Asymmetric hero, rhythmic vertical scroll, generous whitespace
 */
import { Navbar } from "@/components/Navbar";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SingaporeSection } from "@/components/sections/SingaporeSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { ProductGallerySection } from "@/components/sections/ProductGallerySection";
import { CostSavingsSection } from "@/components/sections/CostSavingsSection";
import { TrialGuaranteeSection } from "@/components/sections/TrialGuaranteeSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="pb-20 md:pb-0">
        {/* 1. Opening Special Banner */}
        <div className="bg-red-50 border-b-2 border-red-200 py-4 text-center">
          <p className="text-sm font-bold text-red-700">🎉 OPENING SPECIAL: $99 (U.P. $150)</p>
        </div>

        {/* 2. Hero with Video */}
        <HeroSection />

        {/* 3. Cool Your Bed, Not Your Room */}
        <SingaporeSection />

        {/* 4. Product Gallery */}
        <ProductGallerySection />

        {/* 5. Hotter Nights, Higher Bills */}
        <ProblemSection />

        {/* 6. See Your Savings */}
        <CostSavingsSection />

        {/* 7. Your Room Is Not The Problem */}
        <HowItWorksSection />

        {/* 8. Why People Will Want This */}
        <BenefitsSection />

        {/* 9. Trial & Guarantee */}
        <TrialGuaranteeSection />

        {/* 10. FAQ */}
        <FAQSection />

        {/* 11. Final CTA */}
        <FinalCTASection />
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
