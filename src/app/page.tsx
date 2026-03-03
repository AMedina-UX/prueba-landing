import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { TechSection } from '@/components/sections/TechSection';
import { ProcessSection } from '@/components/sections/ProcessSection';
import { OptInSection } from '@/components/sections/OptInSection';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden flex flex-col items-center">
      {/* Background blobs for premium feel */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-l from-[#343045] to-transparent opacity-50 z-0 pointer-events-none rounded-full blur-[100px]" />
      <div className="absolute top-[1200px] left-[-200px] w-[600px] h-[600px] bg-gradient-to-r from-[#343045] to-transparent opacity-40 z-0 pointer-events-none rounded-full blur-[120px]" />
      <div className="absolute bottom-[800px] right-[-100px] w-[500px] h-[500px] bg-gradient-to-t from-[#343045] to-transparent opacity-40 z-0 pointer-events-none rounded-full blur-[120px]" />

      <div className="w-full max-w-[1440px] mx-auto flex flex-col relative z-10">
        <Header />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TechSection />
        <ProcessSection />
        <OptInSection />
        <Footer />
      </div>
    </main>
  );
}
