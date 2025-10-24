import { useState, useEffect, useRef } from 'react';
import { FaCamera, FaTrophy, FaUserEdit, FaRocket, FaMagic, FaRupeeSign } from 'react-icons/fa';
import { Link } from "react-router-dom";

const WhyChooseUsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { 
        threshold: 0.1, // Reduced threshold for mobile
        rootMargin: '0px 0px -50px 0px' // Trigger when 50px from bottom
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <FaCamera className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Professional Equipment',
      description: 'We use top-of-the-line cameras, lenses, and lighting equipment to ensure every shot is crystal clear and beautifully composed with stunning detail.'
    },
    {
      icon: <FaTrophy className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Award-Winning Expertise',
      description: 'Our experienced photographers have won multiple awards and have years of expertise in capturing life\'s most precious moments with creativity and precision.'
    },
    {
      icon: <FaUserEdit className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Personalized Approach',
      description: 'Every client is unique, and we tailor our services to match your vision, style, and preferences to create truly one-of-a-kind photographs.'
    },
    {
      icon: <FaRocket className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Quick Turnaround',
      description: 'We deliver professionally edited photos within 7-10 days, ensuring you can relive and share your special moments without unnecessary delays.'
    },
    {
      icon: <FaMagic className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Expert Editing',
      description: 'Our post-production team uses advanced editing techniques to enhance colors, lighting, and composition while maintaining the natural beauty of every shot.'
    },
    {
      icon: <FaRupeeSign className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: 'Quality Assurance',
      description: 'We are committed to delivering exceptional quality in every aspect of our service, from the first click to the final delivery.'
    }
  ];

  return (
    <section 
      className="relative py-20 bg-transparent overflow-hidden" 
      id="why-choose-us"
      ref={sectionRef}
    >
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff7f50]/10 border border-[#ff7f50]/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-[#ff7f50] rounded-full"></div>
            <span className="text-[#ff7f50] text-sm font-semibold tracking-wider">WHY CHOOSE US</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            The Compelling Reasons To{" "}
            <span className="bg-gradient-to-r from-[#ff6666] via-[#ffcc66] to-[#66ccff] bg-clip-text text-transparent animate-gradient">
              Select Our Photography
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine technical expertise with artistic vision to deliver exceptional photography 
            experiences that exceed expectations and create lasting memories.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group relative p-4 sm:p-6 md:p-8 bg-gray-50 border border-gray-200 rounded-2xl md:rounded-3xl transition-all duration-500 hover:border-[#ff7f50]/50 hover:bg-white hover:shadow-lg md:hover:shadow-2xl md:hover:scale-105 ${
                isVisible 
                  ? "translate-y-0 opacity-100" 
                  : "translate-y-10 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff7f50]/5 to-transparent rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon Container */}
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#ff7f50] text-white rounded-xl md:rounded-2xl mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 group-hover:text-[#ff7f50] transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed text-xs sm:text-sm md:text-base">
                  {feature.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent rounded-2xl md:rounded-3xl group-hover:border-[#ff7f50]/20 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className={`mt-8 md:mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 text-center transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          <div className="p-3 sm:p-4 md:p-6 bg-gray-50 border border-gray-200 rounded-xl md:rounded-2xl hover:border-[#ff7f50]/50 transition-all duration-300 hover:shadow-lg">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#ff7f50] mb-1 sm:mb-2">100%</div>
            <div className="text-gray-600 text-xs sm:text-sm">Client Satisfaction</div>
          </div>
          <div className="p-3 sm:p-4 md:p-6 bg-gray-50 border border-gray-200 rounded-xl md:rounded-2xl hover:border-[#ff7f50]/50 transition-all duration-300 hover:shadow-lg">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#ff7f50] mb-1 sm:mb-2">500+</div>
            <div className="text-gray-600 text-xs sm:text-sm">Projects Completed</div>
          </div>
          <div className="p-3 sm:p-4 md:p-6 bg-gray-50 border border-gray-200 rounded-xl md:rounded-2xl hover:border-[#ff7f50]/50 transition-all duration-300 hover:shadow-lg">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#ff7f50] mb-1 sm:mb-2">8+</div>
            <div className="text-gray-600 text-xs sm:text-sm">Years Experience</div>
          </div>
          <div className="p-3 sm:p-4 md:p-6 bg-gray-50 border border-gray-200 rounded-xl md:rounded-2xl hover:border-[#ff7f50]/50 transition-all duration-300 hover:shadow-lg">
            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#ff7f50] mb-1 sm:mb-2">24/7</div>
            <div className="text-gray-600 text-xs sm:text-sm">Customer Support</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-8 md:mt-12 transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-6 p-4 sm:p-6 md:p-8 bg-gray-50 border border-gray-200 rounded-xl md:rounded-2xl max-w-2xl mx-auto hover:shadow-lg transition-all duration-300">
            <div className="text-center sm:text-left">
              <h4 className="text-gray-900 font-semibold text-base sm:text-lg md:text-xl mb-1 sm:mb-2">Ready to Experience the Difference?</h4>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base">Let's create something extraordinary together</p>
            </div>
            <Link
              to="/contact"
              className="group relative inline-block px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-transparent border-2 border-[#ff7f50] text-[#ff7f50] rounded-lg md:rounded-xl font-semibold text-xs sm:text-sm md:text-base overflow-hidden transition-all duration-300 hover:text-white whitespace-nowrap"
            >
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-[#ff7f50] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Link>
          </div>
        </div>
      </div>

      {/* Gradient Animation Style */}
      <style jsx>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUsSection;