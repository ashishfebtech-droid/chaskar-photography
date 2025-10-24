import { Link } from 'react-router-dom';
import { FaBullseye, FaEye, FaHeart, FaQuoteLeft } from 'react-icons/fa';

const AboutPage = () => {
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
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Bubbles Background - Only for sections after hero */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-[#e0b56f]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-52 h-52 bg-[#e0b56f]/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-[#e0b56f]/8 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-60 h-60 bg-[#e0b56f]/10 rounded-full blur-3xl animate-float"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section with Background Image - Normal height */}
        <section 
          className="relative py-20 flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('images/about.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e0b56f]/20 border border-[#e0b56f]/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#e0b56f] rounded-full"></div>
              <span className="text-[#e0b56f] text-sm font-semibold tracking-wider">OUR STORY</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              About{" "}
              <span className="bg-gradient-to-r from-[#ff6666] via-[#ffcc66] to-[#66ccff] bg-clip-text text-transparent">
                Us
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Capturing life's most precious moments since 2010
            </p>
          </div>
        </section>

        {/* Rest of the sections with black background and animated bubbles */}
        <div className="relative">
          {/* Mission Vision Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {missionVision.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 text-center hover:border-[#e0b56f] transition-all duration-300 backdrop-blur-sm"
                  >
                    <div className="w-14 h-14 bg-[#e0b56f]/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <item.icon className="text-xl text-[#e0b56f]" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Owner Section */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e0b56f]/20 border border-[#e0b56f]/30 rounded-full mb-6">
                  <div className="w-2 h-2 bg-[#e0b56f] rounded-full"></div>
                  <span className="text-[#e0b56f] text-sm font-semibold tracking-wider">MEET THE PHOTOGRAPHER</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  The Creative Mind{" "}
                  <span className="bg-gradient-to-r from-[#ff6666] via-[#ffcc66] to-[#66ccff] bg-clip-text text-transparent">
                    Behind The Lens
                  </span>
                </h2>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 text-center backdrop-blur-sm">
                <div className="w-24 h-24 bg-gradient-to-r from-[#e0b56f] to-[#f0c97a] rounded-full flex items-center justify-center mx-auto mb-4 text-black text-2xl font-bold">
                  VC
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{owner.name}</h3>
                <div className="text-[#e0b56f] font-semibold mb-4">{owner.role}</div>
                <p className="text-gray-400 leading-relaxed">
                  {owner.description}
                </p>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e0b56f]/20 border border-[#e0b56f]/30 rounded-full mb-6">
                  <div className="w-2 h-2 bg-[#e0b56f] rounded-full"></div>
                  <span className="text-[#e0b56f] text-sm font-semibold tracking-wider">TESTIMONIALS</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  What Our{" "}
                  <span className="bg-gradient-to-r from-[#ff6666] via-[#ffcc66] to-[#66ccff] bg-clip-text text-transparent">
                    Clients Say
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:border-[#e0b56f] transition-all duration-300 backdrop-blur-sm"
                  >
                    <FaQuoteLeft className="text-2xl text-[#e0b56f] mb-4 opacity-50" />
                    <p className="text-gray-400 italic leading-relaxed mb-4 text-sm">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <h4 className="text-white font-bold text-lg">{testimonial.client}</h4>
                      <div className="text-[#e0b56f] text-sm">{testimonial.type}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Create{" "}
                <span className="bg-gradient-to-r from-[#ff6666] via-[#ffcc66] to-[#66ccff] bg-clip-text text-transparent">
                  Beautiful Memories?
                </span>
              </h2>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Let's discuss your photography needs and create something extraordinary together
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link 
                  to="/contact"
                  className="px-6 py-3 bg-transparent border-2 border-[#e0b56f] text-[#e0b56f] rounded-xl font-semibold hover:bg-[#e0b56f] hover:text-black transition-all duration-300 text-center text-sm"
                >
                  Get In Touch
                </Link>
                <Link 
                  to="/portfolio"
                  className="px-6 py-3 bg-transparent border-2 border-gray-600 text-gray-400 rounded-xl font-semibold hover:border-[#e0b56f] hover:text-[#e0b56f] transition-all duration-300 text-center text-sm"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
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

        .animate-pulse {
          animation: pulse 6s ease-in-out infinite;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default AboutPage;