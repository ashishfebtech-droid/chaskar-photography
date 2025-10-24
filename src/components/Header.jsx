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
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-lg shadow-2xl py-3 border-b border-[#e0b56f]/30"
            : "bg-gradient-to-b from-black/80 to-transparent py-4"
        } ${
          showHeader
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo - Left Side */}
          <Link to="/" className="flex items-center group">
            <div className="transition-all duration-500 group-hover:scale-110">
              <img
                src={cameraLogo}
                alt="Chaskar Photography"
                className="w-20 h-20 object-contain drop-shadow-2xl"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <FaCamera className="text-5xl hidden text-[#e0b56f]" />
            </div>
          </Link>

          {/* Desktop Nav - Center Aligned */}
          <nav className="hidden lg:flex gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="group relative px-6 py-3 font-medium text-white/90 rounded-xl transition-all duration-500 hover:text-[#e0b56f]"
              >
                <span className="text-sm font-semibold uppercase tracking-wider relative z-10">
                  {item.name}
                </span>
                {/* Hover Underline Effect */}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#e0b56f] transition-all duration-300 transform -translate-x-1/2 group-hover:w-4/5 rounded-full"></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button - Right Side */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 bg-[#e0b56f] text-black rounded-xl font-bold text-sm transition-all duration-300 hover:bg-transparent hover:text-[#e0b56f] border-2 border-[#e0b56f]"
            >
              Book Now
            </Link>
          </div>

          {/* Hamburger Button (mobile) - Right Side */}
          <button
            className="lg:hidden w-12 h-12 bg-[#e0b56f]/20 border-2 border-[#e0b56f]/30 text-[#e0b56f] rounded-xl flex items-center justify-center hover:bg-[#e0b56f] hover:text-black transition-all duration-300"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/90 backdrop-blur-lg z-40 transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Sidebar - Right Side */}
      <aside
        className={`fixed top-0 right-0 w-80 max-w-[85vw] h-full bg-gradient-to-b from-black to-gray-900 z-50 transform transition-all duration-500 flex flex-col shadow-2xl border-l border-[#e0b56f]/30 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-6 border-b border-[#e0b56f]/30">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img
                src={cameraLogo}
                alt="Chaskar Photography"
                className="w-16 h-16 object-contain drop-shadow-2xl"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <FaCamera className="text-4xl hidden text-[#e0b56f]" />
            </div>
          </div>
          <button
            className="w-10 h-10 bg-[#e0b56f]/20 border-2 border-[#e0b56f]/30 text-[#e0b56f] rounded-lg flex items-center justify-center hover:bg-[#e0b56f] hover:text-black transition-all duration-300"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <FaTimes className="text-lg" />
          </button>
        </div>

        {/* Navigation Links - With Golden Border */}
        <nav className="flex flex-col p-4 gap-3 flex-1 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              onClick={closeMobileMenu}
              className="p-4 rounded-xl text-white/90 font-medium transition-all duration-300 hover:text-[#e0b56f] border-2 border-[#e0b56f]/30 hover:border-[#e0b56f] hover:bg-[#e0b56f]/10 text-left"
            >
              <span className="text-sm font-semibold uppercase tracking-wider">
                {item.name}
              </span>
            </Link>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-6 border-t border-[#e0b56f]/30">
          <Link
            to="/contact"
            onClick={closeMobileMenu}
            className="block w-full px-6 py-4 bg-[#e0b56f] text-black rounded-xl font-bold text-center transition-all duration-300 hover:bg-transparent hover:text-[#e0b56f] border-2 border-[#e0b56f] mb-6"
          >
            Book Your Session
          </Link>

          <div className="flex justify-center gap-6 mb-4">
            <a
              href="https://www.instagram.com/chaskar.photography._/#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#e0b56f]/20 border-2 border-[#e0b56f]/30 text-[#e0b56f] rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-[#e0b56f] hover:text-black hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="https://wa.me/919557867881"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#e0b56f]/20 border-2 border-[#e0b56f]/30 text-[#e0b56f] rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-[#e0b56f] hover:text-black hover:scale-110"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-xl" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="text-center space-y-2">
            <p className="text-white/70 text-sm">
              <FaWhatsapp className="inline mr-2 text-[#e0b56f]" />
              +91 9557867881
            </p>
            <p className="text-white/70 text-sm">
              <FaInstagram className="inline mr-2 text-[#e0b56f]" />
              @chaskar.photography
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Header;