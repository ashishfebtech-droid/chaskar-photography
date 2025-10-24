import { useState, useEffect, useRef } from "react";
import {
  FaCheck,
  FaClock,
  FaMoneyBillWave,
  FaCamera,
  FaBirthdayCake,
  FaBox,
  FaTshirt,
  FaArrowRight,
  FaPhone,
} from "react-icons/fa";

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Wedding Photography");
  const servicesRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      category: "Wedding Photography",
      image: "images/wedding.JPG",
      icon: <FaCamera className="text-2xl sm:text-3xl" />,
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
      icon: <FaBirthdayCake className="text-2xl sm:text-3xl" />,
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
      image: "images/commercial.jpg",
      icon: <FaBox className="text-2xl sm:text-3xl" />,
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
      image: "images/event.jpg",
      icon: <FaCamera className="text-2xl sm:text-3xl" />,
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
      icon: <FaTshirt className="text-2xl sm:text-3xl" />,
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
      icon: <FaCamera className="text-3xl sm:text-4xl" />,
      title: "Wedding Shoot",
      description: "Capturing your special day with artistic storytelling.",
      image: "images/wedding.JPG",
      count: "13+ Services",
    },
    {
      icon: <FaBirthdayCake className="text-3xl sm:text-4xl" />,
      title: "Birthday Shoot",
      description: "Fun and vibrant photography for all ages.",
      image: "images/birthday.JPG",
      count: "9+ Services",
    },
    {
      icon: <FaBox className="text-3xl sm:text-4xl" />,
      title: "Product Shoot",
      description: "Professional product photography for businesses.",
      image: "images/product.jpg",
      count: "7+ Services",
    },
    {
      icon: <FaTshirt className="text-3xl sm:text-4xl" />,
      title: "Fashion Shoot",
      description: "Creative fashion photography for brands.",
      image: "images/Prewed4.JPG",
      count: "4+ Services",
    },
  ];

  const activeService = services.find(
    (service) => service.category === activeCategory
  );

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
        {/* Services Hero Section */}
        <section
          className={`relative py-24 flex items-center justify-center overflow-hidden pt-40 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`text-center z-10 px-4 md:px-5 transform transition-all duration-1000 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff7f50]/10 border border-[#ff7f50]/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#ff7f50] rounded-full"></div>
              <span className="text-[#ff7f50] text-sm font-semibold tracking-wider">
                OUR SERVICES
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Professional{" "}
              <span className="bg-gradient-to-r from-[#ff6666] via-[#ffcc66] to-[#66ccff] bg-clip-text text-transparent animate-gradient">
                Services
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Capturing your special moments with expertise and creativity
            </p>

            {/* Explore Button - Scroll to Services */}
            <button
              onClick={scrollToServices}
              className="group relative mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-[#ff7f50] text-[#ff7f50] rounded-xl font-semibold text-sm sm:text-base overflow-hidden transition-all duration-300 hover:text-white flex items-center gap-3 mx-auto"
            >
              <span className="relative z-10">Explore All Services</span>
              <FaArrowRight className="relative z-10" />
              <div className="absolute inset-0 bg-[#ff7f50] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </button>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Featured{" "}
                <span className="bg-gradient-to-r from-[#ff6666] via-[#ffcc66] to-[#66ccff] bg-clip-text text-transparent animate-gradient">
                  Services
                </span>
              </h2>
              <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
                Our most popular photography packages
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {featuredServices.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl overflow-hidden hover:border-[#ff7f50] transition-all duration-500 hover:shadow-2xl cursor-pointer"
                  onClick={() => {
                    setActiveCategory(
                      service.title === "Wedding Shoot"
                        ? "Wedding Photography"
                        : service.title === "Birthday Shoot"
                        ? "Lifestyle Photography"
                        : service.title === "Product Shoot"
                        ? "Commercial Photography"
                        : "Specialized Services"
                    );
                    setTimeout(() => {
                      servicesRef.current?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="relative p-4 md:p-6">
                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-[#ff7f50]/20 rounded-xl flex items-center justify-center">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900">
                          {service.title}
                        </h3>
                        <span className="text-[#ff7f50] text-xs md:text-sm font-medium">
                          {service.count}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#ff7f50] text-xs md:text-sm font-semibold">
                        View Details →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Categories Section with Ref - SAME FUNCTIONALITY, NEW STYLE */}
        <section ref={servicesRef} className="py-20">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
              {/* Categories Sidebar - SAME STICKY FUNCTIONALITY */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                    All Categories
                  </h3>
                  <div className="space-y-2">
                    {services.map((service, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveCategory(service.category)}
                        className={`w-full text-left p-3 md:p-4 rounded-xl transition-all duration-300 ${
                          activeCategory === service.category
                            ? "bg-gradient-to-r from-[#ff7f50] to-[#ffcc66] text-white font-bold shadow-lg"
                            : "bg-gray-50 text-gray-700 hover:bg-gray-100 border border-gray-200"
                        }`}
                      >
                        <div className="flex items-center gap-2 md:gap-3">
                          <div
                            className={`p-1 md:p-2 rounded-lg transition-all duration-300 ${
                              activeCategory === service.category
                                ? "bg-white/20 transform scale-110"
                                : "bg-[#ff7f50]/20"
                            }`}
                          >
                            {service.icon}
                          </div>
                          <span className="text-sm md:text-base font-medium">
                            {service.category}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Services Content - SAME SCROLL FUNCTIONALITY */}
              <div className="lg:col-span-3">
                {activeService && (
                  <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                    <div className="relative h-60 md:h-80 lg:h-96">
                      <img
                        src={activeService.image}
                        alt={activeService.category}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                      <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                          {activeService.category}
                        </h2>
                        <div className="w-12 md:w-16 h-1 bg-[#ff7f50]"></div>
                      </div>
                    </div>

                    <div className="p-4 md:p-6 lg:p-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
                        {activeService.items.map((item, index) => (
                          <div
                            key={index}
                            className="bg-gray-50 border border-gray-200 rounded-xl p-3 md:p-4 flex items-center gap-2 md:gap-3 hover:border-[#ff7f50] hover:bg-white transition-all duration-300"
                          >
                            <div className="w-5 h-5 md:w-6 md:h-6 bg-[#ff7f50]/20 rounded-full flex items-center justify-center flex-shrink-0">
                              <FaCheck className="text-[#ff7f50] text-xs" />
                            </div>
                            <span className="text-gray-900 font-medium text-xs md:text-sm">
                              {item}
                            </span>
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

        {/* Service Details */}
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Service{" "}
                <span className="bg-gradient-to-r from-[#ff6666] via-[#ffcc66] to-[#66ccff] bg-clip-text text-transparent animate-gradient">
                  Information
                </span>
              </h2>
              <p className="text-gray-600 text-base md:text-lg">
                Everything you need to know about our services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#ff7f50]/20 rounded-xl flex items-center justify-center">
                    <FaClock className="text-xl md:text-2xl text-[#ff7f50]" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    Delivery Duration
                  </h3>
                </div>
                <div className="space-y-2 md:space-y-3">
                  {["Less Than 1 Month", "1 - 3 Months", "3 - 5 Months"].map(
                    (item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 md:gap-3 text-gray-600"
                      >
                        <FaCheck className="text-[#ff7f50] text-sm" />
                        <span className="text-sm md:text-base">{item}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#ff7f50]/20 rounded-xl flex items-center justify-center">
                    <FaMoneyBillWave className="text-xl md:text-2xl text-[#ff7f50]" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">Payment Terms</h3>
                </div>
                <div className="flex items-center gap-2 md:gap-3 text-gray-600">
                  <FaCheck className="text-[#ff7f50] text-sm" />
                  <span className="text-sm md:text-base">Upto 50% Advance</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section with Two Options */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Ready to{" "}
              <span className="bg-gradient-to-r from-[#ff6666] via-[#ffcc66] to-[#66ccff] bg-clip-text text-transparent animate-gradient">
                Get Started?
              </span>
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Choose your preferred way to connect with us
            </p>
            
            {/* Two Options */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
              {/* Call Option */}
              <a
                href="tel:+919557867881"
                className="group relative inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-green-500 text-green-600 rounded-xl font-semibold text-sm md:text-base overflow-hidden transition-all duration-300 hover:text-white w-full sm:w-auto justify-center"
              >
                <FaPhone className="text-lg md:text-xl" />
                <span className="relative z-10">Call Us Now</span>
                <div className="absolute inset-0 bg-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </a>

              {/* Contact Form Option */}
              <a
                href="/contact#contact"
                className="group relative inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-transparent border-2 border-[#ff7f50] text-[#ff7f50] rounded-xl font-semibold text-sm md:text-base overflow-hidden transition-all duration-300 hover:text-white w-full sm:w-auto justify-center"
              >
                <FaArrowRight className="text-lg md:text-xl" />
                <span className="relative z-10">Fill Contact Form</span>
                <div className="absolute inset-0 bg-[#ff7f50] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </a>
            </div>

            {/* Quick Info */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-600 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Instant call: +91 9557867881</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#ff7f50] rounded-full"></div>
                <span>Detailed quotes via form</span>
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

export default ServicesPage;