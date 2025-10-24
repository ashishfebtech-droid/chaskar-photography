import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import ServicesSection from "../components/home/ServicesSection";
import WhyChooseUsSection from "../components/home/WhyChooseUsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";

function Home() {
  return (
    <div className="relative overflow-x-hidden bg-black">
      {/* 🌑 Sophisticated Black with Golden Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Deep black base with subtle golden undertones */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a1a1a]"></div>
        
        {/* Subtle corner gradients */}
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-gradient-to-br from-yellow-900/5 via-transparent to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-amber-900/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-yellow-800/3 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-tl from-amber-800/3 via-transparent to-transparent"></div>

        {/* Refined golden glowing blobs */}
        <div className="absolute top-20 -left-10 w-60 h-60 bg-gradient-to-r from-yellow-600/8 to-amber-600/6 rounded-full blur-4xl animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -right-10 w-80 h-80 bg-gradient-to-l from-amber-600/6 to-yellow-600/8 rounded-full blur-4xl animate-pulse-medium animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-700/4 via-amber-600/3 to-transparent rounded-full blur-4xl animate-float"></div>

        {/* Elegant golden accents */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl animate-pulse-slow animation-delay-3000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 bg-yellow-400/8 rounded-full blur-2xl animate-pulse-fast animation-delay-1000"></div>
      </div>

      {/* ✨ Premium Golden Animated Lines */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Line 1 - 20% from left */}
        <div className="absolute left-[20%] w-px h-full bg-gradient-to-b from-transparent via-gray-800/40 to-transparent top-0">
          <div className="absolute top-[-120px] left-[-1px] w-[2px] h-[120px] bg-gradient-to-b from-transparent via-amber-400/90 to-amber-200/70 animate-lineFlow"></div>
        </div>

        {/* Line 2 - 40% from left */}
        <div className="absolute left-[40%] w-px h-full bg-gradient-to-b from-transparent via-gray-800/40 to-transparent top-0">
          <div className="absolute top-[-120px] left-[-1px] w-[2px] h-[120px] bg-gradient-to-b from-transparent via-yellow-400/90 to-yellow-200/70 animate-lineFlow animation-delay-1300"></div>
        </div>

        {/* Line 3 - 60% from left (Center) */}
        <div className="absolute left-[60%] w-px h-full bg-gradient-to-b from-transparent via-gray-800/40 to-transparent top-0">
          <div className="absolute top-[-120px] left-[-1px] w-[2px] h-[120px] bg-gradient-to-b from-transparent via-amber-300/90 to-amber-100/70 animate-lineFlow animation-delay-2600"></div>
        </div>

        {/* Line 4 - 80% from left */}
        <div className="absolute left-[80%] w-px h-full bg-gradient-to-b from-transparent via-gray-800/40 to-transparent top-0">
          <div className="absolute top-[-120px] left-[-1px] w-[2px] h-[120px] bg-gradient-to-b from-transparent via-yellow-300/90 to-yellow-100/70 animate-lineFlow animation-delay-4000"></div>
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
          10% {
            opacity: 1;
          }
          90% {
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
            opacity: 0.4;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.6;
          }
        }

        @keyframes pulse-medium {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.5;
          }
        }

        @keyframes pulse-fast {
          0%, 100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.4;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
          }
          33% {
            transform: translate(-50%, -52%) scale(1.02);
          }
          66% {
            transform: translate(-50%, -48%) scale(0.98);
          }
        }

        .animate-lineFlow {
          animation: lineFlow 3.5s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        .animate-pulse-medium {
          animation: pulse-medium 7s ease-in-out infinite;
        }

        .animate-pulse-fast {
          animation: pulse-fast 6s ease-in-out infinite;
        }

        .animate-float {
          animation: float 10s ease-in-out infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
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
      `}</style>
    </div>
  );
}

export default Home;