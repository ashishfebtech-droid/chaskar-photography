import { useState, useEffect } from 'react';
import { FaBullseye, FaEye, FaHeart, FaInstagram, FaFacebook, FaTwitter, FaQuoteLeft } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';

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

  const teamMembers = [
    {
      name: "Raj Chaskar",
      role: "Founder & Lead Photographer",
      description: "With over 15 years of experience, Raj specializes in wedding and portrait photography, capturing emotions that tell beautiful stories.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
    },
    {
      name: "Priya Sharma",
      role: "Creative Director",
      description: "Priya brings artistic vision to every project, specializing in fashion and commercial photography with a unique creative perspective.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop"
    },
    {
      name: "Amit Patel",
      role: "Senior Photographer", 
      description: "Amit excels in landscape and wildlife photography, bringing nature's beauty to life through his exceptional technical skills.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop"
    }
  ];

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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* About Hero Section - Same as Portfolio */}
      <section className={`relative py-24 flex items-center justify-center bg-gradient-to-r from-black via-black/90 to-black/80 overflow-hidden pt-40 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=1200&h=800&fit=crop')] bg-cover bg-center opacity-20"></div>
        
        {/* Background Circles */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#e0b56f]/15 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-red-500/10 rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-12 h-12 bg-purple-500/10 rounded-full"></div>
        
        <div className={`text-center z-10 px-5 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#e0b56f]/10 border border-[#e0b56f]/30 rounded-full mb-6 animate-fadeInDown">
            <div className="w-2 h-2 bg-[#e0b56f] rounded-full"></div>
            <span className="text-[#e0b56f] text-sm font-semibold tracking-wider">OUR STORY</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fadeInUp">
            About <span className="text-[#e0b56f]">Us</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fadeInUp">
            Capturing life's most precious moments since 2010
          </p>
        </div>
      </section>

      {/* Mission Vision Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionVision.map((item, index) => (
              <div 
                key={index}
                className={`bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:border-[#e0b56f] hover:transform hover:-translate-y-2 transition-all duration-500 transform transition-all duration-700 delay-${500 + index * 100} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                <div className="w-16 h-16 bg-[#e0b56f]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="text-3xl text-[#e0b56f]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 transform transition-all duration-700 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#e0b56f]/10 border border-[#e0b56f]/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#e0b56f] rounded-full"></div>
              <span className="text-[#e0b56f] text-sm font-semibold tracking-wider">MEET OUR TEAM</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              The Creative Minds <span className="text-[#e0b56f]">Behind The Lens</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A team of passionate photographers dedicated to capturing your special moments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className={`bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#e0b56f] hover:transform hover:-translate-y-2 transition-all duration-500 transform transition-all duration-700 delay-${900 + index * 100} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                <div className="h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <div className="text-[#e0b56f] font-semibold mb-4">{member.role}</div>
                  <p className="text-gray-400 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6">
          <div className={`text-center mb-16 transform transition-all duration-700 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#e0b56f]/10 border border-[#e0b56f]/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#e0b56f] rounded-full"></div>
              <span className="text-[#e0b56f] text-sm font-semibold tracking-wider">OUR JOURNEY</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Milestones & <span className="text-[#e0b56f]">Achievements</span>
            </h2>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className={`flex items-start gap-6 transform transition-all duration-700 delay-${1300 + index * 100} ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
              >
                <div className="flex-shrink-0 w-20 h-20 bg-[#e0b56f] text-black rounded-2xl flex items-center justify-center font-bold text-lg">
                  {item.year}
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex-1 hover:border-[#e0b56f] transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center mb-16 transform transition-all duration-700 delay-1800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#e0b56f]/10 border border-[#e0b56f]/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#e0b56f] rounded-full"></div>
              <span className="text-[#e0b56f] text-sm font-semibold tracking-wider">TESTIMONIALS</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              What Our <span className="text-[#e0b56f]">Clients Say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-[#e0b56f] transition-all duration-500 transform transition-all duration-700 delay-${1900 + index * 100} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                <FaQuoteLeft className="text-4xl text-[#e0b56f] mb-6 opacity-50" />
                <p className="text-gray-300 italic text-lg leading-relaxed mb-6">
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
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className={`transform transition-all duration-700 delay-2200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Create <span className="text-[#e0b56f]">Beautiful Memories?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your photography needs and create something extraordinary together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-[#e0b56f] text-black font-bold px-8 py-4 rounded-xl hover:bg-[#d4a574] transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </a>
              <a 
                href="/portfolio"
                className="bg-white/10 text-white font-bold px-8 py-4 rounded-xl border border-white/20 hover:border-[#e0b56f] hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;