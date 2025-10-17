import { FaCamera, FaTrophy, FaUserEdit, FaRocket, FaMagic, FaRupeeSign } from 'react-icons/fa';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: <FaCamera className="w-8 h-8" />,
      title: 'Professional Equipment',
      description: 'We use top-of-the-line cameras, lenses, and lighting equipment to ensure every shot is crystal clear and beautifully composed with stunning detail.'
    },
    {
      icon: <FaTrophy className="w-8 h-8" />,
      title: 'Award-Winning Expertise',
      description: 'Our experienced photographers have won multiple awards and have years of expertise in capturing life\'s most precious moments with creativity and precision.'
    },
    {
      icon: <FaUserEdit className="w-8 h-8" />,
      title: 'Personalized Approach',
      description: 'Every client is unique, and we tailor our services to match your vision, style, and preferences to create truly one-of-a-kind photographs.'
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: 'Quick Turnaround',
      description: 'We deliver professionally edited photos within 7-10 days, ensuring you can relive and share your special moments without unnecessary delays.'
    },
    {
      icon: <FaMagic className="w-8 h-8" />,
      title: 'Expert Editing',
      description: 'Our post-production team uses advanced editing techniques to enhance colors, lighting, and composition while maintaining the natural beauty of every shot.'
    },
    {
      icon: <FaRupeeSign className="w-8 h-8" />,
      title: 'Quality Assurance',
      description: 'We are committed to delivering exceptional quality in every aspect of our service, from the first click to the final delivery.'
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
            <span className="text-[#e0b56f] text-sm font-semibold tracking-wider">WHY CHOOSE US</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            The Compelling Reasons To <span className="text-[#e0b56f]">Select Our Photography</span>
          </h2>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed text-justify">
            We combine technical expertise with artistic vision to deliver exceptional photography 
            experiences that exceed expectations and create lasting memories.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative p-8 bg-white/5 border border-white/10 rounded-3xl transition-all duration-500 hover:border-[#e0b56f]/50 hover:bg-white/10 hover:transform hover:scale-105"
            >
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#e0b56f]/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon Container */}
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#e0b56f] text-gray-900 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#e0b56f] transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-justify">
                  {feature.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent rounded-3xl group-hover:border-[#e0b56f]/30 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <div className="text-3xl font-bold text-[#e0b56f] mb-2">100%</div>
            <div className="text-gray-400 text-sm">Client Satisfaction</div>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <div className="text-3xl font-bold text-[#e0b56f] mb-2">500+</div>
            <div className="text-gray-400 text-sm">Projects Completed</div>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <div className="text-3xl font-bold text-[#e0b56f] mb-2">8+</div>
            <div className="text-gray-400 text-sm">Years Experience</div>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <div className="text-3xl font-bold text-[#e0b56f] mb-2">24/7</div>
            <div className="text-gray-400 text-sm">Customer Support</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-white/5 border border-white/10 rounded-2xl max-w-2xl mx-auto">
            <div className="text-center sm:text-left">
              <h4 className="text-white font-semibold text-xl mb-2">Ready to Experience the Difference?</h4>
              <p className="text-gray-400">Let's create something extraordinary together</p>
            </div>
            <button className="px-8 py-3 bg-[#e0b56f] text-gray-900 font-semibold rounded-lg hover:bg-[#d4a95e] transition-colors duration-300 whitespace-nowrap">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;