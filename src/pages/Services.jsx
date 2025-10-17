import { useState, useEffect } from "react";
import { FaCheck, FaClock, FaMoneyBillWave } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

const ServicesPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      category: "Wedding Photography",
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
      ],
    },
    {
      category: "Lifestyle Photography",
      items: [
        "Maternity Shoot",
        "Kids Photography",
        "Portrait Sessions",
        "Family Photography",
        "Newborn Shoot",
        "Couple Portraits",
      ],
    },
    {
      category: "Commercial Photography",
      items: [
        "Fashion Photography",
        "Product Shoot",
        "Brand Campaigns",
        "E-commerce Photography",
        "Editorial Shoot",
      ],
    },
    {
      category: "Event Photography",
      items: [
        "Corporate Events",
        "Seminars",
        "Birthday Parties",
        "Anniversary Events",
        "Cultural Functions",
      ],
    },
    {
      category: "Specialized Photography",
      items: ["Underwater Shoot", "Videography", "Aerial Photography"],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Services Hero Section - Same as Portfolio */}
      <section
        className={`relative py-24 flex items-center justify-center bg-gradient-to-r from-black via-black/90 to-black/80 overflow-hidden pt-40 transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-[url('/bgservices.JPG')] bg-cover bg-center opacity-20"></div>

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
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 delay-${
                  500 + index * 100
                } ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                    {service.category}
                  </h2>
                  <div className="w-20 h-1 bg-[#e0b56f] mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {service.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-white/5 border border-white/10 rounded-xl p-6 flex items-center gap-4 hover:border-[#e0b56f] hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="w-8 h-8 bg-[#e0b56f]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaCheck className="text-[#e0b56f] text-sm" />
                      </div>
                      <span className="text-white font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-4xl mx-auto px-6">
          <div
            className={`text-center mb-16 transform transition-all duration-700 delay-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
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

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div
            className={`transform transition-all duration-700 delay-1200 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to <span className="text-[#e0b56f]">Capture Memories?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your photography needs and create something
              beautiful together
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
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
