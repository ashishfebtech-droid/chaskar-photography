import { useState, useRef } from "react";
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
  const [activeCategory, setActiveCategory] = useState("Wedding Photography");
  const servicesRef = useRef(null);

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
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Bubbles Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-[#e0b56f]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-52 h-52 bg-[#e0b56f]/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-[#e0b56f]/8 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-60 h-60 bg-[#e0b56f]/10 rounded-full blur-3xl animate-float"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Services Hero Section with Background Image */}
        <section 
          className="relative py-20 flex items-center justify-center bg-cover bg-center bg-no-repeat min-h-[60vh]"
          style={{ backgroundImage: "url('images/services-hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e0b56f]/20 border border-[#e0b56f]/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#e0b56f] rounded-full"></div>
              <span className="text-[#e0b56f] text-sm font-semibold tracking-wider">
                OUR SERVICES
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Professional{" "}
              <span className="bg-gradient-to-r from-[#ff6666] via-[#ffcc66] to-[#66ccff] bg-clip-text text-transparent">
                Services
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Capturing your special moments with expertise and creativity
            </p>

            {/* Explore Button - Scroll to Services */}
            <button
              onClick={scrollToServices}
              className="group relative mt-8 px-8 py-4 bg-transparent border-2 border-[#e0b56f] text-[#e0b56f] rounded-xl font-semibold hover:bg-[#e0b56f] hover:text-black transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              <span>Explore All Services</span>
              <FaArrowRight />
            </button>
          </div>
        </section>

        {/* Main Section with Background Image */}
        <section 
          className="relative py-16 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('images/main-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative z-10">
            {/* Featured Services */}
            <div className="max-w-7xl mx-auto px-4 mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Featured{" "}
                  <span className="bg-gradient-to-r from-[#ff6666] via-[#ffcc66] to-[#66ccff] bg-clip-text text-transparent">
                    Services
                  </span>
                </h2>
                <p className="text-gray-400">
                  Our most popular photography packages
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredServices.map((service, index) => (
                  <div
                    key={index}
                    className="group relative bg-gray-800/80 border border-gray-700 rounded-2xl overflow-hidden hover:border-[#e0b56f] transition-all duration-300 cursor-pointer backdrop-blur-sm"
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
                    <div className="relative p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-[#e0b56f]/20 rounded-xl flex items-center justify-center">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {service.title}
                          </h3>
                          <span className="text-[#e0b56f] text-sm font-medium">
                            {service.count}
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm mb-4">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-[#e0b56f] text-sm font-semibold">
                          View Details →
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* All Categories Section with Ref */}
            <div ref={servicesRef} className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Categories Sidebar */}
                <div className="lg:col-span-1">
                  <div className="sticky top-24">
                    <h3 className="text-2xl font-bold text-white mb-6">
                      All Categories
                    </h3>
                    <div className="space-y-2">
                      {services.map((service, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveCategory(service.category)}
                          className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                            activeCategory === service.category
                              ? "bg-gradient-to-r from-[#e0b56f] to-[#f0c97a] text-black font-bold shadow-lg"
                              : "bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 border border-gray-600 backdrop-blur-sm"
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div
                              className={`p-2 rounded-lg transition-all duration-300 ${
                                activeCategory === service.category
                                  ? "bg-black/20 transform scale-110"
                                  : "bg-[#e0b56f]/20"
                              }`}
                            >
                              {service.icon}
                            </div>
                            <span className="font-medium">
                              {service.category}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Services Content */}
                <div className="lg:col-span-3">
                  {activeService && (
                    <div className="bg-gray-800/80 border border-gray-700 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 backdrop-blur-sm">
                      <div className="relative h-80">
                        <img
                          src={activeService.image}
                          alt={activeService.category}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                        <div className="absolute bottom-6 left-6">
                          <h2 className="text-3xl font-bold text-white mb-2">
                            {activeService.category}
                          </h2>
                          <div className="w-16 h-1 bg-[#e0b56f]"></div>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {activeService.items.map((item, index) => (
                            <div
                              key={index}
                              className="bg-gray-700/80 border border-gray-600 rounded-xl p-4 flex items-center gap-3 hover:border-[#e0b56f] hover:bg-gray-600/80 transition-all duration-300 backdrop-blur-sm"
                            >
                              <div className="w-6 h-6 bg-[#e0b56f]/20 rounded-full flex items-center justify-center flex-shrink-0">
                                <FaCheck className="text-[#e0b56f] text-xs" />
                              </div>
                              <span className="text-white font-medium text-sm">
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
          </div>
        </section>

        {/* Service Details */}
        <section className="py-16 bg-black">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Service{" "}
                <span className="bg-gradient-to-r from-[#ff6666] via-[#ffcc66] to-[#66ccff] bg-clip-text text-transparent">
                  Information
                </span>
              </h2>
              <p className="text-gray-400">
                Everything you need to know about our services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
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
                        className="flex items-center gap-3 text-gray-400"
                      >
                        <FaCheck className="text-[#e0b56f] text-sm" />
                        <span>{item}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#e0b56f]/20 rounded-xl flex items-center justify-center">
                    <FaMoneyBillWave className="text-2xl text-[#e0b56f]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Payment Terms</h3>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <FaCheck className="text-[#e0b56f] text-sm" />
                  <span>Upto 50% Advance</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-black">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to{" "}
              <span className="bg-gradient-to-r from-[#ff6666] via-[#ffcc66] to-[#66ccff] bg-clip-text text-transparent">
                Get Started?
              </span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Choose your preferred way to connect with us
            </p>
            
            {/* Two Options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Call Option */}
              <a
                href="tel:+919557867881"
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-green-500 text-green-500 rounded-xl font-semibold hover:bg-green-500 hover:text-black transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <FaPhone className="text-xl" />
                <span>Call Us Now</span>
              </a>

              {/* Contact Form Option */}
              <a
                href="/contact#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[#e0b56f] text-[#e0b56f] rounded-xl font-semibold hover:bg-[#e0b56f] hover:text-black transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <FaArrowRight className="text-xl" />
                <span>Fill Contact Form</span>
              </a>
            </div>

            {/* Quick Info */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Instant call: +91 9557867881</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#e0b56f] rounded-full"></div>
                <span>Detailed quotes via form</span>
              </div>
            </div>
          </div>
        </section>
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

export default ServicesPage;