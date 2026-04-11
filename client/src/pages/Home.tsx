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
import { TrustSection } from "@/components/sections/TrustSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="pb-20 md:pb-0">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Why Singapore */}
        <SingaporeSection />

        {/* 3. Cost savings calculator */}
        <CostSavingsSection />

        {/* 4. Problem */}
        <ProblemSection />

        {/* 5. How it works */}
        <HowItWorksSection />

        {/* 6. Benefits */}
        <BenefitsSection />

        {/* 7. Product Gallery */}
        <ProductGallerySection />

        {/* 8. Trust / Social proof */}
        <TrustSection />

        {/* 9. FAQ */}
        <FAQSection />

        {/* 10. Final CTA */}
        <FinalCTASection />
      </main>

      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
