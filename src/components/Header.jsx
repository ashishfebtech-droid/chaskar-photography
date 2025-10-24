import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaInstagram,
  FaWhatsapp,
  FaCamera,
} from "react-icons/fa";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showHeader, setShowHeader] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);
      setShowHeader(currentScrollY <= lastScrollY || currentScrollY <= 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  const cameraLogo = "images/logo.png";

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-xl py-3"
            : "bg-transparent py-5"
        } ${
          showHeader
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="transition-transform duration-300 group-hover:scale-110">
              <img
                src={cameraLogo}
                alt="Chaskar Photography"
                className="w-20 h-20 object-contain drop-shadow-lg"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <FaCamera
                className="text-4xl hidden text-[#ff7f50]"
              />
            </div>
          </Link>

          {/* Desktop Nav - Only Border Effect Changed */}
          <nav className="hidden lg:flex gap-1 xl:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="group relative px-3 xl:px-4 py-2 font-medium text-gray-700 rounded-xl transition-all duration-300 hover:text-gray-900"
              >
                <span className="text-sm font-semibold uppercase tracking-wide">
                  {item.name}
                </span>
                {/* Border Effect - Improved */}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#ff6666] via-[#ff7f50] to-[#ffcc66] transition-all duration-300 transform -translate-x-1/2 group-hover:w-3/4 rounded-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button (desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="group relative px-8 py-3 bg-transparent border-2 border-[#ff7f50] text-[#ff7f50] rounded-xl font-semibold text-sm overflow-hidden transition-all duration-300 hover:text-white"
            >
              <span className="relative z-10">Book Now</span>
              <div className="absolute inset-0 bg-[#ff7f50] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Link>
          </div>

          {/* Hamburger Button (mobile) */}
          <button
            className="lg:hidden text-gray-800 text-2xl focus:outline-none hover:scale-110 transition-transform duration-200"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Sidebar - Original Style */}
      <aside
        className={`fixed top-0 right-0 w-80 max-w-[85vw] h-full bg-white/95 backdrop-blur-md z-50 transform transition-transform duration-300 flex flex-col shadow-2xl lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-300">
          <div className="flex items-center gap-3">
            <div>
              <img
                src={cameraLogo}
                alt="Chaskar Photography"
                className="w-16 h-16 object-contain drop-shadow-lg"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <FaCamera className="text-3xl hidden text-[#ff7f50]" />
            </div>
          </div>
          <button
            className="text-2xl text-[#ff7f50] hover:rotate-90 transition-transform duration-300"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-4 gap-2 flex-1 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={closeMobileMenu}
              className="p-4 rounded-xl text-gray-700 font-medium transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
            >
              {item.name.toUpperCase()}
            </Link>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-6 border-t border-gray-300">
          <Link
            to="/contact"
            onClick={closeMobileMenu}
            className="block w-full px-6 py-3 bg-[#ff7f50] text-white rounded-xl font-semibold text-center transition-all duration-300 hover:bg-[#ff6347] shadow-lg mb-4"
          >
            Book Your Session
          </Link>

          <p className="text-gray-600 text-sm mb-3 text-center font-medium">
            <FaCamera className="inline mr-2 text-[#ff7f50]" />
            Every Moment Tells a Story
          </p>

          <div className="flex justify-center gap-6 text-gray-700 text-2xl">
            <a
              href="https://www.instagram.com/chaskar.photography._/#"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:text-[#ff7f50] hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/919557867881"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:text-[#ff7f50] hover:scale-110"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-4 text-center">
            <p className="text-gray-600 text-xs">
              <FaWhatsapp className="inline mr-1 text-[#ff7f50]" />
              +91 9557867881
            </p>
            <p className="text-gray-600 text-xs mt-1">
              <FaInstagram className="inline mr-1 text-[#ff7f50]" />
              @chaskar.photography
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Header;