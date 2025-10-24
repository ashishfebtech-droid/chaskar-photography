import { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

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
        {/* Contact Hero Section with Background Image */}
        <section 
          className="relative py-20 flex items-center justify-center bg-cover bg-center bg-no-repeat min-h-[60vh]"
          style={{ backgroundImage: "url('images/contactbg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e0b56f]/20 border border-[#e0b56f]/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#e0b56f] rounded-full"></div>
              <span className="text-[#e0b56f] text-sm font-semibold tracking-wider">
                GET IN TOUCH
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Contact{" "}
              <span className="bg-gradient-to-r from-[#ff6666] via-[#ffcc66] to-[#66ccff] bg-clip-text text-transparent">
                Us
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to capture your special moments? Let's discuss your photography needs
            </p>
          </div>
        </section>

        {/* Contact Main Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Let's Talk About Your{" "}
                    <span className="bg-gradient-to-r from-[#ff6666] via-[#ffcc66] to-[#66ccff] bg-clip-text text-transparent">
                      Project
                    </span>
                  </h2>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    We'd love to hear from you! Whether you have a question about
                    our services, need a quote, or just want to say hello, our
                    team is ready to answer all your questions.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-6">
                  {[
                    {
                      icon: FaMapMarkerAlt,
                      title: "Our Location",
                      content:
                        "Mahila MahaVidhyalaya PG College Behind Shakti Kunj, Krishna Nagar Jagjeetpur-249404",
                      href: "https://maps.app.goo.gl/y3415g6wfBZBuRnp9",
                    },
                    {
                      icon: FaPhone,
                      title: "Phone Number",
                      content: "+91 9557867881",
                      href: "tel:+919557867881",
                    },
                    {
                      icon: FaEnvelope,
                      title: "Email Address",
                      content: "Vineechaskar@gmail.com",
                      href: "mailto:Vineechaskar@gmail.com",
                    },
                  ].map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group"
                    >
                      <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6 hover:border-[#e0b56f] hover:bg-gray-800 transition-all duration-300 group-hover:scale-105 hover:shadow-lg backdrop-blur-sm">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-[#e0b56f]/20 rounded-xl flex items-center justify-center text-[#e0b56f] flex-shrink-0">
                            <contact.icon className="text-xl" />
                          </div>
                          <div>
                            <h3 className="text-white font-semibold text-lg mb-2">
                              {contact.title}
                            </h3>
                            <p className="text-gray-400">{contact.content}</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Media */}
                <div className="mt-8">
                  <h3 className="text-white font-semibold text-xl mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    {[
                      {
                        icon: FaFacebook,
                        href: "https://www.facebook.com/chaskarphoto",
                        label: "Facebook",
                      },
                      {
                        icon: FaInstagram,
                        href: "https://www.instagram.com/chaskar.photography._/#",
                        label: "Instagram",
                      },
                      {
                        icon: FaTwitter,
                        href: "https://x.com/vineetchaskar1",
                        label: "Twitter",
                      },
                      {
                        icon: FaYoutube,
                        href: "https://www.youtube.com/@chaskarphotography1541/videos",
                        label: "YouTube",
                      },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center text-[#e0b56f] hover:bg-[#e0b56f] hover:text-black transition-all duration-300 transform hover:scale-110"
                        aria-label={social.label}
                      >
                        <social.icon className="text-lg" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form with ID for redirection */}
              <div
                id="contact"
                className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm"
              >
                <h2 className="text-3xl font-bold text-white mb-2">
                  Send Us a Message
                </h2>
                <p className="text-gray-400 mb-8">
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-white font-medium mb-2"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#e0b56f] transition-colors"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-white font-medium mb-2"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#e0b56f] transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-white font-medium mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#e0b56f] transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-white font-medium mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#e0b56f] transition-colors"
                        placeholder="+91 xxx xxx xxxx"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-white font-medium mb-2"
                    >
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#e0b56f] transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="wedding">Wedding Photography</option>
                      <option value="portrait">Portrait Photography</option>
                      <option value="event">Event Photography</option>
                      <option value="commercial">Commercial Photography</option>
                      <option value="product">Product Photography</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-white font-medium mb-2"
                    >
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="5"
                      className="w-full bg-gray-700 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#e0b56f] transition-colors resize-vertical"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full bg-transparent border-2 border-[#e0b56f] text-[#e0b56f] font-semibold py-4 px-6 rounded-xl hover:bg-[#e0b56f] hover:text-black transition-all duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Map Section */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3461.234567890123!2d78.0123456!3d29.8765432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDUyJzM1LjYiTiA3OMKwMDAnNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chaskar Photography Location"
                className="w-full"
              ></iframe>
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

export default ContactPage;