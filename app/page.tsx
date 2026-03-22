import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ValueProp from '../components/ValueProp';
import PersonaSection from '../components/PersonaSection';
import TrustArchitecture from '../components/TrustArchitecture';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ValueProp />
      <PersonaSection />
      <TrustArchitecture />
      <Features />
      <HowItWorks />
      <CtaSection />
      <Footer />
    </main>
  );
}
