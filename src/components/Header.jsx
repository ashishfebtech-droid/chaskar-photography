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

  // Camera logo
  const cameraLogo = "images/logo.png";

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/90 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        } ${
          showHeader
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
        style={
          isScrolled ? { boxShadow: "0 4px 20px rgba(224, 181, 111, 0.1)" } : {}
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            {/* Camera Logo */}
            <div className="transition-transform duration-300 group-hover:scale-110">
              <img
                src={cameraLogo}
                alt="Chaskar Photography"
                className="w-20 h-20 object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              {/* Fallback icon */}
              <FaCamera
                className="text-4xl hidden"
                style={{ color: "#e0b56f" }}
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-1 xl:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="group relative px-3 xl:px-4 py-2 text-white font-medium rounded-lg transition-all duration-300 hover:scale-105"
                style={{
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(224, 181, 111, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                <span className="text-base font-semibold uppercase tracking-wide">
                  {item.name}
                </span>
                <span
                  className="absolute bottom-0 left-1/2 w-0 h-0.5 transition-all duration-300 transform -translate-x-1/2 group-hover:w-3/4"
                  style={{ backgroundColor: "#e0b56f" }}
                ></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button (desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3 rounded-full font-bold text-base transition-all duration-300 hover:scale-105 shadow-lg text-black"
              style={{
                background: "linear-gradient(to right, #e0b56f, #d4a055)",
                boxShadow: "0 4px 15px rgba(224, 181, 111, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(to right, #d4a055, #c89540)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(224, 181, 111, 0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(to right, #e0b56f, #d4a055)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(224, 181, 111, 0.3)";
              }}
            >
              Book Now
            </Link>
          </div>

          {/* Hamburger Button (mobile) */}
          <button
            className="lg:hidden text-white text-2xl focus:outline-none hover:scale-110 transition-transform duration-200"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 w-80 max-w-[85vw] h-full bg-gradient-to-b from-black via-gray-900 to-black z-50 transform transition-transform duration-300 flex flex-col shadow-2xl lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ borderLeft: "1px solid rgba(224, 181, 111, 0.2)" }}
      >
        {/* Sidebar Header */}
        <div
          className="backdrop-blur-md text-white flex justify-between items-center p-6 shadow-md"
          style={{
            backgroundColor: "rgba(224, 181, 111, 0.1)",
            borderBottom: "1px solid rgba(224, 181, 111, 0.2)",
          }}
        >
          <div className="flex items-center gap-3">
            {/* Camera Logo */}
            <div>
              <img
                src={cameraLogo}
                alt="Chaskar Photography"
                className="w-16 h-16 object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              {/* Fallback icon */}
              <FaCamera
                className="text-3xl hidden"
                style={{ color: "#e0b56f" }}
              />
            </div>
          </div>
          <button
            className="text-2xl hover:rotate-90 transition-transform duration-300"
            style={{ color: "#e0b56f" }}
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
              className="p-4 rounded-lg backdrop-blur-sm text-white font-medium transition-all duration-200"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(224, 181, 111, 0.1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(224, 181, 111, 0.1)";
                e.currentTarget.style.borderColor = "rgba(224, 181, 111, 0.3)";
                e.currentTarget.style.transform = "translateX(4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor =
                  "rgba(255, 255, 255, 0.05)";
                e.currentTarget.style.borderColor = "rgba(224, 181, 111, 0.1)";
                e.currentTarget.style.transform = "translateX(0)";
              }}
            >
              {item.name.toUpperCase()}
            </Link>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div
          className="p-6 backdrop-blur-md"
          style={{
            borderTop: "1px solid rgba(224, 181, 111, 0.2)",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
          }}
        >
          <Link
            to="/contact"
            onClick={closeMobileMenu}
            className="block w-full px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg text-center mb-4 text-black"
            style={{
              background: "linear-gradient(to right, #e0b56f, #d4a055)",
              boxShadow: "0 4px 15px rgba(224, 181, 111, 0.3)",
            }}
          >
            Book Your Session
          </Link>

          <p className="text-gray-300 text-sm mb-3 text-center font-medium">
            <FaCamera className="inline mr-2" style={{ color: "#e0b56f" }} />
            Every Moment Tells a Story
          </p>

          <div className="flex justify-center gap-6 text-white text-2xl">
            <a
              href="https://www.instagram.com/chaskar.photography"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-125"
              style={{ transition: "all 0.3s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#e0b56f")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-125"
              style={{ transition: "all 0.3s ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#e0b56f")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "white")}
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-4 text-center">
            <p className="text-gray-300 text-xs">
              <FaWhatsapp
                className="inline mr-1"
                style={{ color: "#e0b56f" }}
              />
              +91 98765 43210
            </p>
            <p className="text-gray-300 text-xs mt-1">
              <FaInstagram
                className="inline mr-1"
                style={{ color: "#e0b56f" }}
              />
              @chaskar.photography
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Header;