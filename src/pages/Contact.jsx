import { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    <div className="min-h-screen bg-black text-white">
      {/* Contact Hero Section */}
      <section
        className={`relative py-24 flex items-center justify-center bg-gradient-to-r from-black via-black/90 to-black/80 overflow-hidden pt-40 transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-[url('images/contactbg.jpg')] bg-cover bg-center opacity-20"></div>

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
              GET IN TOUCH
            </span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fadeInUp">
            Contact <span className="text-[#e0b56f]">Us</span>
          </h1>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fadeInUp">
            Ready to capture your special moments? Let's discuss your
            photography needs
          </p>
        </div>
      </section>

      {/* Contact Main Section */}
      <section className="py-16 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-[#e0b56f]/5 via-transparent to-transparent"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information - Animated */}
            <div className="space-y-8">
              <div
                className={`mb-8 transform transition-all duration-700 delay-500 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
              >
                <h2 className="text-4xl font-bold text-white mb-4">
                  Let's Talk About Your{" "}
                  <span className="text-[#e0b56f]">Project</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  We'd love to hear from you! Whether you have a question about
                  our services, need a quote, or just want to say hello, our
                  team is ready to answer all your questions.
                </p>
              </div>

              {/* Contact Cards with Staggered Animation */}
              <div className="space-y-6">
                {[
                  {
                    icon: FaMapMarkerAlt,
                    title: "Our Location",
                    content:
                      "Mahila MahaVidhyalaya PG College Behind Shakti Kunj, Krishna Nagar Jagjeetpur-249404",
                    href: "https://www.google.com/maps/place/29%C2%B055'08.9%22N+78%C2%B008'31.4%22E/@29.9191424,78.142055,17z/data=!3m1!4b1!4m4!3m3!8m2!3d29.9191424!4d78.142055?entry=tts&g_ep=EgoyMDI1MTAwMS4wIPu8ASoASAFQAw%3D%3D&skid=f6647c81-b9f5-40e9-9b1b-6acc61a02424",
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
                    className={`block group transform transition-all duration-700 delay-${
                      700 + index * 100
                    } ${
                      isVisible
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-10 opacity-0"
                    }`}
                  >
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#e0b56f] hover:bg-white/10 transition-all duration-300 group-hover:scale-105">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-[#e0b56f]/20 rounded-xl flex items-center justify-center text-[#e0b56f] flex-shrink-0">
                          <contact.icon className="text-xl w-5 h-5" />
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

              {/* Social Media - Animated */}
              <div
                className={`mt-8 transform transition-all duration-700 delay-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
              >
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
                      className={`w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-[#e0b56f] hover:bg-[#e0b56f] hover:text-black transition-all duration-300 transform hover:scale-110 ${
                        isVisible
                          ? "scale-100 opacity-100"
                          : "scale-50 opacity-0"
                      }`}
                      style={{ transitionDelay: `${1100 + index * 100}ms` }}
                      aria-label={social.label}
                    >
                      <social.icon className="text-lg" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form - Animated */}
            <div
              className={`bg-white/5 border border-white/10 rounded-2xl p-8 transform transition-all duration-700 delay-500 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
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
                  <div
                    className={`transform transition-all duration-700 delay-600 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                  >
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
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#e0b56f] transition-colors"
                      placeholder="John"
                    />
                  </div>
                  <div
                    className={`transform transition-all duration-700 delay-700 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                  >
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
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#e0b56f] transition-colors"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div
                    className={`transform transition-all duration-700 delay-800 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                  >
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
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#e0b56f] transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div
                    className={`transform transition-all duration-700 delay-900 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                  >
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
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#e0b56f] transition-colors"
                      placeholder="+91 xxx xxx xxxx"
                    />
                  </div>
                </div>

                <div
                  className={`transform transition-all duration-700 delay-1000 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
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
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#e0b56f] transition-colors"
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

                <div
                  className={`transform transition-all duration-700 delay-1100 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
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
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#e0b56f] transition-colors resize-vertical"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <div
                  className={`transform transition-all duration-700 delay-1200 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                >
                  <button
                    type="submit"
                    className="w-full bg-[#e0b56f] text-black font-semibold py-4 px-6 rounded-xl hover:bg-[#d4a574] transition-colors duration-300 transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Map Section - Animated */}
          <div
            className={`rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-700 delay-1300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
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
  );
};

export default ContactPage;
