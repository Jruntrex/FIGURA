import { GlobalProgressSpine } from '@/features/landing/components/GlobalProgressSpine';
import { HeroSection } from '@/features/landing/sections/HeroSection';
import { ProductionSection } from '@/features/landing/sections/ProductionSection';
import { ScalingSection } from '@/features/landing/sections/ScalingSection';
import { QualitySection } from '@/features/landing/sections/QualitySection';
import { MaterialsSection } from '@/features/landing/sections/MaterialsSection';
import { LeadTimeSection } from '@/features/landing/sections/LeadTimeSection';
import { ReliabilitySection } from '@/features/landing/sections/ReliabilitySection';
import { PricingSection } from '@/features/landing/sections/PricingSection';
import { FarmGallery } from '@/features/landing/sections/FarmGallery';
import { CEOSection } from '@/features/landing/sections/CEOSection';
import { ContactSection } from '@/features/landing/sections/ContactSection';
import { Footer } from '@/components/layout/Footer';

const LandingPage = () => {
   return (
      <div className="min-h-screen bg-black text-white overflow-x-hidden font-sans selection:bg-defense selection:text-white">
         {/* === GLOBAL PROGRESS SPINE === */}
         <GlobalProgressSpine />

         <main>
            {/* === HERO SECTION === */}
            <HeroSection />

            {/* === SECTION: PRODUCTION PLATFORM === */}
            <ProductionSection />

            {/* === SECTION: SCALING === */}
            <ScalingSection />

            {/* === SECTION: QUALITY CONTROL === */}
            <QualitySection />

            {/* === SECTION: MATERIALS === */}
            <MaterialsSection />

            {/* === SECTION: LEAD TIME === */}
            <LeadTimeSection />

            {/* === SECTION: RELIABILITY === */}
            <ReliabilitySection />

            {/* === SECTION: PRICING APPROACH === */}
            <PricingSection />

            {/* === SECTION: CONTACT (FINAL CTA) === */}
            <ContactSection />

            {/* === SECTION: FACILITY SHOWCASE === */}
            <FarmGallery />

            {/* === SECTION: LEADERSHIP === */}
            <CEOSection />
         </main>

         <Footer />
      </div>
   );
};

export default LandingPage;
