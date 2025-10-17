import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const TestimonialsSection = () => {
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
    <section className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br ">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#e0b56f]/5 via-transparent to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#e0b56f]/10 border border-[#e0b56f]/30 rounded-full mb-6">
            <div className="w-2 h-2 bg-[#e0b56f] rounded-full"></div>
            <span className="text-[#e0b56f] text-sm font-semibold tracking-wider">TESTIMONIALS</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            What Our <span className="text-[#e0b56f]">Clients Say</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed text-justify">
            Don't just take our word for it. Here's what our valued clients have to say about 
            their experience working with us and the results we delivered.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="group relative p-8 bg-white/5 border border-white/10 rounded-3xl transition-all duration-500 hover:border-[#e0b56f]/50 hover:bg-white/10"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#e0b56f] rounded-2xl flex items-center justify-center">
                <FaQuoteLeft className="w-5 h-5 text-gray-900" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5 text-[#e0b56f]" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 text-justify leading-relaxed mb-6 text-lg italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div className="text-center border-t border-white/10 pt-6">
                <h4 className="text-white font-semibold text-lg mb-1">
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
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl group hover:border-[#e0b56f]/50 transition-all duration-300">
            <div className="text-3xl font-bold text-[#e0b56f] mb-2 group-hover:scale-110 transition-transform duration-300">386+</div>
            <div className="text-gray-400 text-sm">Happy Clients</div>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl group hover:border-[#e0b56f]/50 transition-all duration-300">
            <div className="text-3xl font-bold text-[#e0b56f] mb-2 group-hover:scale-110 transition-transform duration-300">806+</div>
            <div className="text-gray-400 text-sm">Projects Done</div>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl group hover:border-[#e0b56f]/50 transition-all duration-300">
            <div className="text-3xl font-bold text-[#e0b56f] mb-2 group-hover:scale-110 transition-transform duration-300">5.0</div>
            <div className="text-gray-400 text-sm">Average Rating</div>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl group hover:border-[#e0b56f]/50 transition-all duration-300">
            <div className="text-3xl font-bold text-[#e0b56f] mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
            <div className="text-gray-400 text-sm">Satisfaction Rate</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-white/5 border border-white/10 rounded-2xl max-w-2xl mx-auto">
            <div className="text-center sm:text-left">
              <h4 className="text-white font-semibold text-xl mb-2">Join Our Happy Clients</h4>
              <p className="text-gray-400">Let's create beautiful memories together</p>
            </div>
            <button className="px-8 py-3 bg-[#e0b56f] text-gray-900 font-semibold rounded-lg hover:bg-[#d4a95e] transition-colors duration-300 whitespace-nowrap">
              Book Your Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;