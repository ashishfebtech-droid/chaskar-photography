import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";

function Home() {
  return (
    <div className="relative overflow-x-hidden bg-white">
      {/* 🌈 Light Gradient Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Multiple smooth gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fff8f0] to-[#fff0f5]"></div>

        {/* soft glowing blobs - Hero section colors */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-[#ff6666]/15 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-52 h-52 bg-[#ffcc66]/15 rounded-full blur-3xl animate-pulse-medium animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-[#66ccff]/12 rounded-full blur-3xl animate-pulse-fast animation-delay-4000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-60 h-60 bg-[#ff7f50]/15 rounded-full blur-3xl animate-float animation-delay-6000"></div>
        <div className="absolute top-1/4 left-1/2 w-64 h-64 bg-[#ff6666]/12 rounded-full blur-3xl animate-pulse-slow animation-delay-3000"></div>

        {/* gradient fog layers */}
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#ff6666]/20 via-[#ffcc66]/15 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#66ccff]/18 via-[#ff7f50]/15 to-transparent blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-1/3 h-1/3 bg-gradient-to-r from-[#ff7f50]/20 via-[#ff6666]/12 to-transparent blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1/3 h-1/3 bg-gradient-to-l from-[#ffcc66]/20 via-[#66ccff]/12 to-transparent blur-3xl"></div>
      </div>

      {/* ✨ Animated Lines Background - Equally Divided */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Line 1 - 20% from left */}
        <div className="absolute left-[20%] w-px h-full bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 top-0">
          <div className="absolute top-[-120px] left-[-1px] w-[3px] h-[120px] bg-gradient-to-b from-transparent via-[#ff7f50]/60 to-transparent animate-lineFlow"></div>
        </div>

        {/* Line 2 - 40% from left */}
        <div className="absolute left-[40%] w-px h-full bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 top-0">
          <div className="absolute top-[-120px] left-[-1px] w-[3px] h-[120px] bg-gradient-to-b from-transparent via-[#ffcc66]/60 to-transparent animate-lineFlow animation-delay-1300"></div>
        </div>

        {/* Line 3 - 60% from left (Center) */}
        <div className="absolute left-[60%] w-px h-full bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 top-0">
          <div className="absolute top-[-120px] left-[-1px] w-[3px] h-[120px] bg-gradient-to-b from-transparent via-[#ff6666]/60 to-transparent animate-lineFlow animation-delay-2600"></div>
        </div>

        {/* Line 4 - 80% from left */}
        <div className="absolute left-[80%] w-px h-full bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 top-0">
          <div className="absolute top-[-120px] left-[-1px] w-[3px] h-[120px] bg-gradient-to-b from-transparent via-[#66ccff]/60 to-transparent animate-lineFlow animation-delay-4000"></div>
        </div>
      </div>

      {/* 🔝 All Content on Top of Background */}
      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <TestimonialsSection />
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes lineFlow {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(calc(100vh + 120px));
            opacity: 0;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        @keyframes pulse-medium {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.75;
          }
        }

        @keyframes pulse-fast {
          0%, 100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.7;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-10px);
          }
        }

        .animate-lineFlow {
          animation: lineFlow 4s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }

        .animate-pulse-medium {
          animation: pulse-medium 5s ease-in-out infinite;
        }

        .animate-pulse-fast {
          animation: pulse-fast 4s ease-in-out infinite;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animation-delay-1300 {
          animation-delay: 1.3s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-2600 {
          animation-delay: 2.6s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </div>
  );
}

export default Home;