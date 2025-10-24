import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const [counters, setCounters] = useState({ years: 0, clients: 0, shoots: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Animate numbers
            animateCounter("years", 8, 200);
            animateCounter("clients", 386, 10);
            animateCounter("shoots", 806, 5);
          }
        });
      },
      { threshold: 0.3 }
    );

    const animateCounter = (type, target, speed) => {
      let count = 0;
      const interval = setInterval(() => {
        count += Math.ceil(target / 30);
        if (count >= target) {
          setCounters((prev) => ({ ...prev, [type]: target }));
          clearInterval(interval);
        } else {
          setCounters((prev) => ({ ...prev, [type]: count }));
        }
      }, speed);
    };

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      className="relative py-20 bg-transparent overflow-hidden"
      ref={sectionRef}
      id="about"
    >
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 z-10">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Column - Sticky Image */}
          {/* Left Column - Sticky Image */}
          <div className="relative">
            <div className="lg:sticky lg:top-20 lg:max-h-[80vh]">
              <div
                className={`transform transition-all duration-1000 delay-300 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                {/* Main Image */}
                <div className="relative group">
                  <img
                    src="images/about.jpg"
                    alt="Chaskar Photography in action"
                    className="w-full h-[400px] sm:h-[500px] object-cover rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-3xl"></div>

                  {/* Floating Element */}
                  <div className="absolute -bottom-4 -right-4 bg-[#ff7f50] text-white p-4 sm:p-6 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-110">
                    <div className="text-xl sm:text-2xl font-bold">
                      {counters.years}+
                    </div>
                    <div className="text-xs sm:text-sm font-medium">Years</div>
                    <div className="text-xs opacity-90">Experience</div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-20 h-20 sm:w-24 sm:h-24 border-2 border-[#ff7f50]/30 rounded-full"></div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 border-2 border-[#ff7f50]/20 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Original Content */}
          <div
            className={`space-y-6 md:space-y-8 transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff7f50]/10 border border-[#ff7f50]/30 rounded-full">
              <div className="w-2 h-2 bg-[#ff7f50] rounded-full"></div>
              <span className="text-[#ff7f50] text-sm font-semibold tracking-wider">
                ABOUT CHASKAR
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Every Picture{" "}
              <span className="bg-gradient-to-r from-[#ff6666] via-[#ffcc66] to-[#66ccff] bg-clip-text text-transparent animate-gradient">
                Tells
              </span>{" "}
              A Story
            </h2>

            {/* Description */}
            <div className="space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed text-justify">
              <p>
                I don't just take photos, I capture emotions, preserve memories,
                and tell stories that last generations. With a passion for
                authenticity and an eye for the extraordinary in the ordinary.
              </p>
              <p>
                My approach blends technical expertise with artistic vision,
                ensuring every shot reflects the true essence of the moment
                while creating timeless visual legacy.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-[#ff7f50]/50 transition-colors">
                <div className="text-3xl font-bold text-[#ff7f50] mb-2">
                  {counters.clients}+
                </div>
                <div className="text-gray-600 text-sm font-medium">
                  Happy Clients
                </div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:border-[#ff7f50]/50 transition-colors">
                <div className="text-3xl font-bold text-[#ff7f50] mb-2">
                  {counters.shoots}+
                </div>
                <div className="text-gray-600 text-sm font-medium">
                  Projects Done
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Link
                to="/portfolio"
                className="group relative inline-block px-8 py-4 bg-transparent border-2 border-[#ff7f50] text-[#ff7f50] rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:text-white"
              >
                <span className="relative z-10">Explore My Journey</span>
                <div className="absolute inset-0 bg-[#ff7f50] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Animation Style */}
      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 6s ease infinite;
        }

        /* Smooth sticky behavior */
        @media (min-width: 1024px) {
          .lg\:sticky {
            position: sticky;
            align-self: flex-start;
            top: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
