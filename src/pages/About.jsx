import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBullseye, FaEye, FaHeart, FaQuoteLeft } from 'react-icons/fa';

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const missionVision = [
    {
      icon: FaBullseye,
      title: "Our Mission",
      description: "To capture authentic moments that tell unique stories, preserving memories that last a lifetime through creative and technical excellence."
    },
    {
      icon: FaEye,
      title: "Our Vision", 
      description: "To be the most trusted photography studio that transforms ordinary moments into extraordinary memories for generations to cherish."
    },
    {
      icon: FaHeart,
      title: "Our Values",
      description: "Creativity, Passion, Authenticity, Professionalism, and Building lasting relationships with our clients."
    }
  ];

  const owner = {
    name: "Vineet Chaskar",
    role: "Founder & Lead Photographer",
    description: "With over 8 years of experience, I specialize in wedding, portrait, and commercial photography. My passion lies in capturing emotions and telling beautiful stories through my lens. Every photograph is a piece of my heart, carefully crafted to preserve your precious moments forever."
  };

  const timeline = [
    { year: "2010", title: "Studio Foundation", description: "Started our journey with a small studio and big dreams" },
    { year: "2014", title: "First International Award", description: "Won 'Best Wedding Photography' at International Photography Awards" },
    { year: "2018", title: "Studio Expansion", description: "Expanded to a larger studio space and added new photography services" },
    { year: "2022", title: "1000+ Happy Clients", description: "Reached the milestone of serving over 1000 satisfied clients worldwide" },
    { year: "2024", title: "Digital Transformation", description: "Launched online booking and virtual gallery services" }
  ];

  const testimonials = [
    {
      quote: "Chaskar Photography captured our wedding day perfectly! Every photo tells a story and brings back beautiful memories.",
      client: "Anjali & Rohit",
      type: "Wedding Clients"
    },
    {
      quote: "Professional, creative, and amazing to work with. Our family portraits came out better than we ever imagined!",
      client: "The Sharma Family", 
      type: "Portrait Session"
    },
    {
      quote: "The team understood our brand vision perfectly. The commercial photos helped elevate our business to new heights.",
      client: "Design Studio Co.",
      type: "Commercial Client"
    }
  ];

  const missionDelays = ['delay-500', 'delay-600', 'delay-700'];
  const timelineDelays = ['delay-1300', 'delay-1400', 'delay-1500', 'delay-1600', 'delay-1700'];
  const testimonialDelays = ['delay-1900', 'delay-2000', 'delay-2100'];

  return (
    <div className="relative overflow-x-hidden bg-white">
      {/* 🌈 Same Animated Background as Home Page */}
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

      {/* ✨ Same Animated Lines Background as Home Page */}
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
        {/* About Hero Section */}
        <section className={`relative py-24 flex items-center justify-center overflow-hidden pt-40 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`text-center z-10 px-4 md:px-5 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff7f50]/10 border border-[#ff7f50]/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#ff7f50] rounded-full"></div>
              <span className="text-[#ff7f50] text-sm font-semibold tracking-wider">OUR STORY</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-[#ff6666] via-[#ffcc66] to-[#66ccff] bg-clip-text text-transparent animate-gradient">
                Us
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Capturing life's most precious moments since 2010
            </p>
          </div>
        </section>

        {/* Mission Vision Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {missionVision.map((item, index) => (
                <div 
                  key={index}
                  className={`bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 md:p-8 text-center hover:border-[#ff7f50] hover:bg-white hover:shadow-2xl transition-all duration-700 ${missionDelays[index]} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#ff7f50]/20 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6">
                    <item.icon className="text-xl sm:text-2xl md:text-3xl text-[#ff7f50]" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Owner Section */}
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className={`text-center mb-12 md:mb-16 transform transition-all duration-700 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff7f50]/10 border border-[#ff7f50]/30 rounded-full mb-6">
                <div className="w-2 h-2 bg-[#ff7f50] rounded-full"></div>
                <span className="text-[#ff7f50] text-sm font-semibold tracking-wider">MEET THE PHOTOGRAPHER</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                The Creative Mind{" "}
                <span className="bg-gradient-to-r from-[#ff6666] via-[#ffcc66] to-[#66ccff] bg-clip-text text-transparent animate-gradient">
                  Behind The Lens
                </span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                A passionate photographer dedicated to capturing your special moments
              </p>
            </div>

            {/* Owner Card */}
            <div className={`bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 md:p-8 hover:border-[#ff7f50] hover:shadow-2xl transition-all duration-700 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="text-center">
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-[#ff7f50] to-[#ffcc66] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl sm:text-3xl font-bold">
                  VC
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">{owner.name}</h3>
                <div className="text-[#ff7f50] font-semibold text-lg mb-4 md:mb-6">{owner.role}</div>
                <p className="text-gray-600 leading-relaxed text-base sm:text-lg text-justify md:text-center">
                  {owner.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className={`text-center mb-12 md:mb-16 transform transition-all duration-700 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff7f50]/10 border border-[#ff7f50]/30 rounded-full mb-6">
                <div className="w-2 h-2 bg-[#ff7f50] rounded-full"></div>
                <span className="text-[#ff7f50] text-sm font-semibold tracking-wider">OUR JOURNEY</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Milestones &{" "}
                <span className="bg-gradient-to-r from-[#ff6666] via-[#ffcc66] to-[#66ccff] bg-clip-text text-transparent animate-gradient">
                  Achievements
                </span>
              </h2>
            </div>

            <div className="space-y-6 md:space-y-8">
              {timeline.map((item, index) => (
                <div 
                  key={index}
                  className={`flex flex-col sm:flex-row items-start gap-4 md:gap-6 transform transition-all duration-700 ${timelineDelays[index]} ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                >
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-[#ff7f50] to-[#ffcc66] text-white rounded-2xl flex items-center justify-center font-bold text-base sm:text-lg">
                    {item.year}
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-4 md:p-6 flex-1 hover:border-[#ff7f50] hover:bg-white transition-all duration-300">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className={`text-center mb-12 md:mb-16 transform transition-all duration-700 delay-1800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff7f50]/10 border border-[#ff7f50]/30 rounded-full mb-6">
                <div className="w-2 h-2 bg-[#ff7f50] rounded-full"></div>
                <span className="text-[#ff7f50] text-sm font-semibold tracking-wider">TESTIMONIALS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                What Our{" "}
                <span className="bg-gradient-to-r from-[#ff6666] via-[#ffcc66] to-[#66ccff] bg-clip-text text-transparent animate-gradient">
                  Clients Say
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className={`bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 md:p-8 hover:border-[#ff7f50] hover:shadow-lg transition-all duration-700 ${testimonialDelays[index]} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                >
                  <FaQuoteLeft className="text-2xl sm:text-3xl md:text-4xl text-[#ff7f50] mb-4 md:mb-6 opacity-50" />
                  <p className="text-gray-600 italic text-base leading-relaxed mb-4 md:mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <h4 className="text-gray-900 font-bold text-lg">{testimonial.client}</h4>
                    <div className="text-[#ff7f50] text-sm">{testimonial.type}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <div className={`transform transition-all duration-700 delay-2200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Ready to Create{" "}
                <span className="bg-gradient-to-r from-[#ff6666] via-[#ffcc66] to-[#66ccff] bg-clip-text text-transparent animate-gradient">
                  Beautiful Memories?
                </span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
                Let's discuss your photography needs and create something extraordinary together
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-[#ff7f50] text-[#ff7f50] rounded-xl font-semibold text-sm sm:text-base overflow-hidden transition-all duration-300 hover:text-white"
                >
                  <span className="relative z-10">Get In Touch</span>
                  <div className="absolute inset-0 bg-[#ff7f50] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </Link>
                <Link 
                  to="/portfolio"
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-gray-300 text-gray-700 rounded-xl font-semibold text-sm sm:text-base overflow-hidden transition-all duration-300 hover:text-white hover:border-[#ff7f50]"
                >
                  <span className="relative z-10">View Portfolio</span>
                  <div className="absolute inset-0 bg-[#ff7f50] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Same Custom Animations as Home Page */}
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

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
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

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 6s ease infinite;
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
};

export default AboutPage;