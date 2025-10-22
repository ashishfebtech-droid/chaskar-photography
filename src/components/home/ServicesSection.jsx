import { useState } from "react";
import { FaCamera, FaBirthdayCake, FaBox, FaTshirt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      icon: <FaCamera className="text-5xl" />,
      title: "Wedding Shoot",
      description:
        "Capturing your special day with artistic storytelling, from intimate moments to grand celebrations. Every emotion preserved forever.",
      image: "/images/Bridal.JPG",
    },
    {
      icon: <FaBirthdayCake className="text-5xl" />,
      title: "Birthday Shoot",
      description:
        "Fun and vibrant photography for all ages. From cute baby birthdays to milestone celebrations - making every birthday memorable.",
      image:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=1000&fit=crop",
    },
    {
      icon: <FaBox className="text-5xl" />,
      title: "Product Shoot",
      description:
        "Professional product photography that makes your items shine. Perfect for e-commerce, catalogs, and marketing materials.",
      image: "/images/Productphotoshoot.jpg",
    },
    {
      icon: <FaTshirt className="text-5xl" />,
      title: "Fashion Shoot",
      description:
        "Creative fashion photography for brands, models, and designers. Bringing style and clothing to life through stunning visuals.",
      image: "/images/fashionphotography.jpg",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-6"
            style={{
              backgroundColor: "rgba(224, 181, 111, 0.1)",
              border: "1px solid rgba(224, 181, 111, 0.3)",
            }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "#e0b56f" }}
            ></div>
            <span
              className="text-sm font-semibold tracking-wider"
              style={{ color: "#e0b56f" }}
            >
              MY SERVICES
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Professional <span style={{ color: "#e0b56f" }}>Photography</span>{" "}
            Services
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From wedding celebrations to commercial projects, I offer
            comprehensive photography services tailored to capture your unique
            story with creativity and technical excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative overflow-hidden rounded-3xl cursor-pointer"
              style={{
                height: "500px",
                transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
                style={{
                  backgroundImage: `url(${service.image})`,
                  transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                }}
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 transition-all duration-500"
                style={{
                  background:
                    hoveredIndex === index
                      ? "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.4) 100%)"
                      : "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 100%)",
                }}
              />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8">
                {/* Icon */}
                <div
                  className="mb-6 transition-all duration-500"
                  style={{
                    color: "#e0b56f",
                    transform:
                      hoveredIndex === index
                        ? "translateY(-10px) scale(1.1)"
                        : "translateY(0) scale(1)",
                  }}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3
                  className="text-2xl font-bold text-white mb-4 transition-all duration-500"
                  style={{
                    transform:
                      hoveredIndex === index
                        ? "translateY(-5px)"
                        : "translateY(0)",
                  }}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className="text-gray-300 leading-relaxed transition-all duration-500"
                  style={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    maxHeight: hoveredIndex === index ? "200px" : "0",
                    overflow: "hidden",
                  }}
                >
                  {service.description}
                </p>
              </div>

              {/* Bottom Border */}
              <div
                className="absolute bottom-0 left-0 h-1 transition-all duration-500"
                style={{
                  width: hoveredIndex === index ? "100%" : "0%",
                  backgroundColor: "#e0b56f",
                }}
              />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <Link
            to="/services"
            className="group relative inline-block px-8 py-4 bg-transparent border-2 border-[#e0b56f] text-[#e0b56f] rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:text-gray-900"
          >
            <span className="relative z-10">Explore All Services</span>
            <div className="absolute inset-0 bg-[#e0b56f] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
