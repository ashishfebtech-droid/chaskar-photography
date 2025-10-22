import { useState, useEffect, useRef } from "react";
import { FaCheck, FaClock, FaMoneyBillWave, FaCamera, FaBirthdayCake, FaBox, FaTshirt, FaArrowRight } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Wedding Photography");
  const servicesRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      category: "Wedding Photography",
      image: "images/Bridal.JPG",
      icon: <FaCamera className="text-3xl" />,
      items: [
        "Cinematic Wedding Shoot",
        "Pre-Wedding Shoot", 
        "Candid Photography",
        "Traditional Ceremony",
        "Destination Wedding",
        "Post-Wedding Shoot",
        "Wedding Anniversary",
        "Drone Shoot",
        "24 Hours Coverage",
        "Teaser Shoot",
        "Save The Date Shoot",
        "Vintage Wedding Shoot",
        "Black and White Wedding Shoot",
      ],
    },
    {
      category: "Lifestyle Photography", 
      image: "images/Prewed1.JPG",
      icon: <FaBirthdayCake className="text-3xl" />,
      items: [
        "Maternity Shoot",
        "Kids Photography", 
        "Portrait Sessions",
        "Family Photography",
        "Newborn Shoot",
        "Couple Portraits",
        "Birthday Shoot",
        "Modeling Shoot",
        "Passport Shoot",
      ],
    },
    {
      category: "Commercial Photography",
      image: "images/Prewed3.JPG",
      icon: <FaBox className="text-3xl" />,
      items: [
        "Fashion Photography",
        "Product Shoot",
        "Brand Campaigns",
        "E-commerce Photography", 
        "Editorial Shoot",
        "Still Life Shoot",
        "Art Shoot",
      ],
    },
    {
      category: "Event Photography",
      image: "images/Prewed4.JPG",
      icon: <FaCamera className="text-3xl" />,
      items: [
        "Corporate Events",
        "Seminars",
        "Birthday Parties", 
        "Anniversary Events",
        "Cultural Functions",
        "Landscape Shoot",
        "Underwater Shoot",
      ],
    },
    {
      category: "Specialized Services",
      image: "images/DSC07986.JPG",
      icon: <FaTshirt className="text-3xl" />,
      items: [
        "Videography",
        "Aerial Photography", 
        "Fashion Shoot",
        "Event Shoot",
      ],
    },
  ];

  const featuredServices = [
    {
      icon: <FaCamera className="text-4xl" />,
      title: "Wedding Shoot",
      description: "Capturing your special day with artistic storytelling.",
      image: "images/Bridal.JPG",
      count: "13+ Services"
    },
    {
      icon: <FaBirthdayCake className="text-4xl" />, 
      title: "Birthday Shoot",
      description: "Fun and vibrant photography for all ages.",
      image: "images/Prewed1.JPG",
      count: "9+ Services"
    },
    {
      icon: <FaBox className="text-4xl" />,
      title: "Product Shoot",
      description: "Professional product photography for businesses.",
      image: "images/Prewed3.JPG",
      count: "7+ Services"
    },
    {
      icon: <FaTshirt className="text-4xl" />,
      title: "Fashion Shoot", 
      description: "Creative fashion photography for brands.",
      image: "images/Prewed4.JPG",
      count: "4+ Services"
    },
  ];

  const activeService = services.find(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Services Hero Section - Original Wala */}
      <section
        className={`relative py-24 flex items-center justify-center bg-gradient-to-r from-black via-black/90 to-black/80 overflow-hidden pt-40 transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-[url('images/bgservices.JPG')] bg-cover bg-center opacity-20"></div>

        {/* Background Circles */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#e0b56f]/15 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-red-500/10 rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-12 h-12 bg-purple-500/10 rounded-full"></div>

        <div
          className={`text-center z-10 px-5 transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#e0b56f]/10 border border-[#e0b56f]/30 rounded-full mb-6 animate-fadeInDown">
            <div className="w-2 h-2 bg-[#e0b56f] rounded-full"></div>
            <span className="text-[#e0b56f] text-sm font-semibold tracking-wider">
              OUR SERVICES
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fadeInUp">
            Professional <span className="text-[#e0b56f]">Services</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fadeInUp">
            Capturing your special moments with expertise and creativity
          </p>

          {/* Explore Button - Scroll to Services */}
          <button
            onClick={scrollToServices}
            className="mt-8 px-8 py-4 bg-[#e0b56f] text-black font-bold rounded-xl hover:bg-[#d4a574] transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto"
          >
            Explore All Services <FaArrowRight />
          </button>
        </div>
      </section>

      {/* Featured Services - With proper navigation */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Featured <span className="text-[#e0b56f]">Services</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our most popular photography packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl overflow-hidden hover:border-[#e0b56f] transition-all duration-500 hover:transform hover:scale-105 cursor-pointer"
                onClick={() => {
                  setActiveCategory(service.title === "Wedding Shoot" ? "Wedding Photography" :
                                  service.title === "Birthday Shoot" ? "Lifestyle Photography" :
                                  service.title === "Product Shoot" ? "Commercial Photography" : 
                                  "Specialized Services");
                  setTimeout(() => {
                    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="relative p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-[#e0b56f]/20 rounded-xl flex items-center justify-center">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                      <span className="text-[#e0b56f] text-sm font-medium">{service.count}</span>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#e0b56f] text-sm font-semibold">View Details →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Categories Section with Ref */}
      <section ref={servicesRef} className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Categories Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <h3 className="text-2xl font-bold text-white mb-6">All Categories</h3>
                <div className="space-y-2">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveCategory(service.category)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                        activeCategory === service.category
                          ? "bg-[#e0b56f] text-black font-bold"
                          : "bg-white/5 text-white hover:bg-white/10"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          activeCategory === service.category ? "bg-black/20" : "bg-[#e0b56f]/20"
                        }`}>
                          {service.icon}
                        </div>
                        <span className="text-sm">{service.category}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Content - Mobile mein auto scroll */}
            <div className="lg:col-span-3">
              {activeService && (
                <div className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl overflow-hidden">
                  <div className="relative h-64 lg:h-80">
                    <img 
                      src={activeService.image} 
                      alt={activeService.category}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                    <div className="absolute bottom-6 left-6">
                      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                        {activeService.category}
                      </h2>
                      <div className="w-16 h-1 bg-[#e0b56f]"></div>
                    </div>
                  </div>

                  <div className="p-6 lg:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {activeService.items.map((item, index) => (
                        <div
                          key={index}
                          className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3 hover:border-[#e0b56f] hover:bg-white/10 transition-all duration-300"
                        >
                          <div className="w-6 h-6 bg-[#e0b56f]/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <FaCheck className="text-[#e0b56f] text-xs" />
                          </div>
                          <span className="text-white font-medium text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Service Details - Original Wala */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Service <span className="text-[#e0b56f]">Information</span>
            </h2>
            <p className="text-gray-400">
              Everything you need to know about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#e0b56f]/20 rounded-xl flex items-center justify-center">
                  <FaClock className="text-2xl text-[#e0b56f]" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Delivery Duration
                </h3>
              </div>
              <div className="space-y-3">
                {["Less Than 1 Month", "1 - 3 Months", "3 - 5 Months"].map(
                  (item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <FaCheck className="text-[#e0b56f] text-sm" />
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#e0b56f]/20 rounded-xl flex items-center justify-center">
                  <FaMoneyBillWave className="text-2xl text-[#e0b56f]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Payment Terms</h3>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FaCheck className="text-[#e0b56f] text-sm" />
                Upto 50% Advance
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA Section - Clean */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to <span className="text-[#e0b56f]">Get Started?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your photography needs and get a customized quote
          </p>
          <a
            href="https://wa.me/919557867881"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#e0b56f] text-black font-bold px-8 py-4 rounded-xl hover:bg-[#d4a574] transition-all duration-300 transform hover:scale-105"
          >
            <RiWhatsappFill className="text-xl" />
            Book Your Session
          </a>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;