import { useState, useEffect, useRef } from "react";

const AboutSection = () => {
  const [counters, setCounters] = useState({ years: 0, clients: 0, shoots: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
    <section className="relative py-20 overflow-hidden" ref={sectionRef}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#e0b56f]/5 via-transparent to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Visual Story */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative group">
              <img
                src="images/about.jpg"
                alt="Chaskar Photography in action"
                className="w-full h-[500px] object-cover rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>

              {/* Floating Element */}
              <div className="absolute -bottom-6 -right-6 bg-[#e0b56f] text-gray-900 p-6 rounded-2xl shadow-2xl">
                <div className="text-2xl font-bold">{counters.years}+</div>
                <div className="text-sm font-medium">Years</div>
                <div className="text-xs">Experience</div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#e0b56f]/30 rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-2 border-[#e0b56f]/20 rounded-full"></div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#e0b56f]/10 border border-[#e0b56f]/30 rounded-full">
              <div className="w-2 h-2 bg-[#e0b56f] rounded-full"></div>
              <span className="text-[#e0b56f] text-sm font-semibold tracking-wider">
                ABOUT CHASKAR
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Every Picture <span className="text-[#e0b56f]">Tells</span> A
              Story
            </h2>

            {/* Description */}
            <div className="space-y-4 text-gray-300 text-lg leading-relaxed text-justify">
              <p>
                I don't just take photos—I capture emotions, preserve memories,
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
              <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#e0b56f]/50 transition-colors">
                <div className="text-3xl font-bold text-[#e0b56f] mb-2">
                  {counters.clients}+
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  Happy Clients
                </div>
              </div>
              <div className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-[#e0b56f]/50 transition-colors">
                <div className="text-3xl font-bold text-[#e0b56f] mb-2">
                  {counters.shoots}+
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  Projects Done
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <a
                href="#demo"
                className="group relative inline-block px-8 py-4 bg-transparent border-2 border-[#e0b56f] text-[#e0b56f] rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:text-gray-900"
              >
                <span className="relative z-10">Explore My Journey</span>
                <div className="absolute inset-0 bg-[#e0b56f] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
