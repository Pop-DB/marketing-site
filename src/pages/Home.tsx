import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturesAccordion from '../components/FeaturesAccordion';
import BentoGrid from '../components/sections/BentoGrid';
import IntegrationsSection from '../components/sections/IntegrationsSection';
import FAQSection from '../components/sections/FAQSection';
import PricingSection from '../components/sections/PricingSection';
import Footer from '../components/layout/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';

function Home() {
  useScrollReveal();

  return (
    <>
      {/* Background Grid */}
      <div className="fixed inset-0 z-0 technical-grid pointer-events-none"></div>

      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 flex flex-col w-full">
        <Hero />
        <FeaturesAccordion />
        <BentoGrid />
        <IntegrationsSection />
        <FAQSection />
        <PricingSection />
      </main>

      <Footer />
    </>
  );
}

export default Home;
