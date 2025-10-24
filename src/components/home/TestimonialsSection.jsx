import { useState, useEffect } from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { Link } from "react-router-dom";

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('testimonials');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const testimonials = [
    {
      id: 1,
      text: "Chaskar Photography captured our wedding day perfectly! Every photo tells a story and brings back beautiful memories. The attention to detail and ability to capture raw emotions was truly remarkable.",
      author: "Anjali & Rohit",
      role: "Wedding Clients",
      rating: 5
    },
    {
      id: 2,
      text: "Professional, creative, and amazing to work with. Our family portraits came out better than we ever imagined! Chaskar made us feel comfortable and the results were absolutely stunning.",
      author: "The Sharma Family",
      role: "Portrait Session",
      rating: 5
    },
    {
      id: 3,
      text: "Chaskar understood our brand vision perfectly. The commercial photos helped elevate our business to new heights. The professionalism and creative eye exceeded all our expectations.",
      author: "Design Studio Co.",
      role: "Commercial Client",
      rating: 5
    }
  ];

  return (
    <section className="relative py-20 bg-transparent overflow-hidden" id="testimonials">
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 delay-300 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e0b56f]/10 border border-[#e0b56f]/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-[#e0b56f] rounded-full"></div>
            <span className="text-[#e0b56f] text-sm font-semibold tracking-wider">TESTIMONIALS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            What Our{" "}
            <span className="bg-gradient-to-r from-[#ff6666] via-[#ffcc66] to-[#66ccff] bg-clip-text text-transparent animate-gradient">
              Clients Say
            </span>
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our valued clients have to say about 
            their experience working with us and the results we delivered.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 transform transition-all duration-1000 delay-500 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="group relative p-6 md:p-8 bg-gray-800/50 border border-gray-700 rounded-3xl transition-all duration-500 hover:border-[#e0b56f]/50 hover:bg-gray-800 hover:shadow-2xl"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-10 h-10 md:w-12 md:h-12 bg-[#e0b56f] rounded-2xl flex items-center justify-center">
                <FaQuoteLeft className="w-4 h-4 md:w-5 md:h-5 text-black" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4 md:mb-6 justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="w-4 h-4 md:w-5 md:h-5 text-[#e0b56f]" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-400 leading-relaxed mb-4 md:mb-6 text-base md:text-lg italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="text-center border-t border-gray-700 pt-4 md:pt-6">
                <h4 className="text-white font-semibold text-base md:text-lg mb-1">
                  {testimonial.author}
                </h4>
                <p className="text-[#e0b56f] text-sm">
                  {testimonial.role}
                </p>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent rounded-3xl group-hover:border-[#e0b56f]/20 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`mt-12 md:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-center transform transition-all duration-1000 delay-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          <div className="p-4 md:p-6 bg-gray-800/50 border border-gray-700 rounded-2xl group hover:border-[#e0b56f]/50 transition-all duration-300 hover:shadow-lg">
            <div className="text-2xl md:text-3xl font-bold text-[#e0b56f] mb-2 group-hover:scale-110 transition-transform duration-300">386+</div>
            <div className="text-gray-400 text-xs md:text-sm">Happy Clients</div>
          </div>
          <div className="p-4 md:p-6 bg-gray-800/50 border border-gray-700 rounded-2xl group hover:border-[#e0b56f]/50 transition-all duration-300 hover:shadow-lg">
            <div className="text-2xl md:text-3xl font-bold text-[#e0b56f] mb-2 group-hover:scale-110 transition-transform duration-300">806+</div>
            <div className="text-gray-400 text-xs md:text-sm">Projects Done</div>
          </div>
          <div className="p-4 md:p-6 bg-gray-800/50 border border-gray-700 rounded-2xl group hover:border-[#e0b56f]/50 transition-all duration-300 hover:shadow-lg">
            <div className="text-2xl md:text-3xl font-bold text-[#e0b56f] mb-2 group-hover:scale-110 transition-transform duration-300">5.0</div>
            <div className="text-gray-400 text-xs md:text-sm">Average Rating</div>
          </div>
          <div className="p-4 md:p-6 bg-gray-800/50 border border-gray-700 rounded-2xl group hover:border-[#e0b56f]/50 transition-all duration-300 hover:shadow-lg">
            <div className="text-2xl md:text-3xl font-bold text-[#e0b56f] mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
            <div className="text-gray-400 text-xs md:text-sm">Satisfaction Rate</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center mt-12 transform transition-all duration-1000 delay-900 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}>
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 sm:p-8 bg-gray-800/50 border border-gray-700 rounded-2xl max-w-2xl mx-auto hover:shadow-lg transition-all duration-300 w-full sm:w-auto">
            <div className="text-center sm:text-left">
              <h4 className="text-white font-semibold text-lg sm:text-xl mb-2">Join Our Happy Clients</h4>
              <p className="text-gray-400 text-sm sm:text-base">Let's create beautiful memories together</p>
            </div>
            <Link
              to="/contact"
              className="group relative inline-block px-6 sm:px-8 py-3 bg-transparent border-2 border-[#e0b56f] text-[#e0b56f] rounded-xl font-semibold text-sm sm:text-base overflow-hidden transition-all duration-300 hover:text-black whitespace-nowrap w-full sm:w-auto text-center"
            >
              <span className="relative z-10">Book Your Session</span>
              <div className="absolute inset-0 bg-[#e0b56f] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
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

export default TestimonialsSection;