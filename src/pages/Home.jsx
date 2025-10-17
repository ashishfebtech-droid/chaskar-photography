import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";

function Home() {
  return (
    <div className="bg-black relative overflow-x-hidden">
      {/* Enhanced Gradient Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black-900 via-black via-gray-950 to-golden-800"></div>
        
        {/* Spaced Circles - Golden, Red, Purple Colors */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#e0b56f]/15 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-red-500/10 rounded-full animate-pulse-medium animation-delay-2000"></div>
        <div className="absolute top-1/2 left-10 w-12 h-12 bg-purple-500/10 rounded-full animate-pulse-fast animation-delay-4000"></div>
        <div className="absolute top-10 right-1/4 w-14 h-14 bg-[#e0b56f]/12 rounded-full animate-float animation-delay-6000"></div>
        
        {/* Far Apart Circles */}
        <div className="absolute top-20 right-20 w-18 h-18 bg-red-500/8 rounded-full animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-10 h-10 bg-purple-500/8 rounded-full animate-pulse-medium animation-delay-3000"></div>
        <div className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-[#e0b56f]/10 rounded-full animate-pulse-fast animation-delay-5000"></div>

        {/* Enhanced Gradients with Golden, Red, Purple Colors */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-purple-900/15 via-red-900/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-red-900/10 via-[#e0b56f]/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-1/4 h-1/4 bg-gradient-to-r from-[#e0b56f]/12 via-purple-900/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1/3 h-1/3 bg-gradient-to-l from-purple-900/8 via-red-900/6 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Animated Lines Background (Rockets) */}
      <div className="fixed inset-0 pointer-events-none z-1">
        <div className="absolute left-[20%] w-px h-full bg-white/10 top-0">
          <div className="absolute top-[-120px] left-[-1px] w-[3px] h-[120px] bg-gradient-to-b from-transparent via-[#e0b56f]/50 to-transparent animate-lineFlow"></div>
        </div>
        <div className="absolute left-1/2 w-px h-full bg-white/10 top-0">
          <div className="absolute top-[-120px] left-[-1px] w-[3px] h-[120px] bg-gradient-to-b from-transparent via-[#e0b56f]/50 to-transparent animate-lineFlow animation-delay-1300"></div>
        </div>
        <div className="absolute left-[80%] w-px h-full bg-white/10 top-0">
          <div className="absolute top-[-120px] left-[-1px] w-[3px] h-[120px] bg-gradient-to-b from-transparent via-[#e0b56f]/50 to-transparent animate-lineFlow animation-delay-2600"></div>
        </div>
      </div>

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
    </div>
  );
}

export default Home;