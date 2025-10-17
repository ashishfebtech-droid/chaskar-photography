import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaAngleRight } from 'react-icons/fa';

const Footer = () => {
  const galleryImages = [
    { src: "/Bridal.JPG", alt: "Gallery 1" },
    { src: "/DSC07986.JPG", alt: "Gallery 2" },
    { src: "/Prewed1.JPG", alt: "Gallery 3" },
    { src: "/Prewed2.JPG", alt: "Gallery 4" },
    { src: "/Prewed3.JPG", alt: "Gallery 5" },
    { src: "/Prewed4.JPG", alt: "Gallery 6" }
  ];

  return (
    <footer className="relative bg-cover bg-center text-white z-10" role="contentinfo" 
      style={{backgroundImage: "url('public/bg.jpg')"}}>
      
      {/* Dark Overlay - Background image ki opacity kam karne ke liye */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      {/* Container 1 */}
      <div className="footer-container-1 py-16 w-full relative z-10">
        <div className="footer-inner-wrapper max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-8 lg:gap-0 w-full">
          {/* Left - Fixed padding */}
          <div className="footer-left flex-1 lg:flex-[0_0_40%] xl:flex-[0_0_35%] flex flex-col gap-6 lg:pr-6">
            {/* Logo */}
            <div className="logo mb-2">
              <a href="/" aria-label="Chaskar Photography Home">
                <img
                  src="/logo.png"
                  alt="Chaskar Photography Logo"
                  width="100"
                  height="100"
                  loading="lazy"
                  className="object-cover"
                />
              </a>
            </div>

            {/* Paragraph */}
            <p className="footer-paragraph text-gray-300 leading-relaxed text-sm">
              Capturing moments, creating memories. Professional photography services for every occasion.
            </p>

            {/* Gallery */}
            <div className="footer-gallery">
              <h3 className="text-white text-lg font-semibold mb-4">Gallery</h3>
              <div className="gallery-grid grid grid-cols-3 gap-2">
                {galleryImages.map((image, index) => (
                  <div key={index} className="gallery-item aspect-square rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      loading="lazy"
                      width="100"
                      height="100"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Fixed padding */}
          <div className="footer-right flex-1 lg:flex-[0_0_60%] xl:flex-[0_0_65%] flex flex-col gap-8 lg:gap-10 lg:pl-6 mt-8 lg:mt-0">
            {/* Contact Cards */}
            <div className="footer-right-top grid md:grid-cols-3 gap-4 lg:gap-6">
              {/* Email */}
              <a href="mailto:Vineechaskar@gmail.com" className="contact-item flex flex-col gap-3 no-underline group p-4 lg:p-5 bg-white/10 rounded-xl border border-white/20 hover:border-[#e0b56f]/50 transition-all duration-300">
                <div className="contact-icon w-10 h-10 lg:w-12 lg:h-12 bg-[#e0b56f]/20 rounded-lg flex items-center justify-center text-[#e0b56f] text-lg lg:text-xl transition-all duration-300 group-hover:bg-[#e0b56f]/30 group-hover:-translate-y-1">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="contact-label text-white text-sm lg:text-base font-medium mb-1">Email Address</div>
                  <div className="contact-value text-gray-200 text-xs lg:text-sm group-hover:text-[#e0b56f] transition-colors duration-300 break-words">
                    Vineechaskar@gmail.com
                  </div>
                </div>
              </a>

              {/* Telephone */}
              <a href="tel:+919557867881" className="contact-item flex flex-col gap-3 no-underline group p-4 lg:p-5 bg-white/10 rounded-xl border border-white/20 hover:border-[#e0b56f]/50 transition-all duration-300">
                <div className="contact-icon w-10 h-10 lg:w-12 lg:h-12 bg-[#e0b56f]/20 rounded-lg flex items-center justify-center text-[#e0b56f] text-lg lg:text-xl transition-all duration-300 group-hover:bg-[#e0b56f]/30 group-hover:-translate-y-1">
                  <FaPhone />
                </div>
                <div>
                  <div className="contact-label text-white text-sm lg:text-base font-medium mb-1">Telephone</div>
                  <div className="contact-value text-gray-200 text-xs lg:text-sm group-hover:text-[#e0b56f] transition-colors duration-300">
                    +91 9557867881
                  </div>
                </div>
              </a>

              {/* Location */}
              <a
                href="https://maps.app.goo.gl/y3415g6wfBZBuRnp9"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item flex flex-col gap-3 no-underline group p-4 lg:p-5 bg-white/10 rounded-xl border border-white/20 hover:border-[#e0b56f]/50 transition-all duration-300"
              >
                <div className="contact-icon w-10 h-10 lg:w-12 lg:h-12 bg-[#e0b56f]/20 rounded-lg flex items-center justify-center text-[#e0b56f] text-lg lg:text-xl transition-all duration-300 group-hover:bg-[#e0b56f]/30 group-hover:-translate-y-1">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <div className="contact-label text-white text-sm lg:text-base font-medium mb-1">Our Location</div>
                  <div className="contact-value text-gray-200 text-xs lg:text-sm group-hover:text-[#e0b56f] transition-colors duration-300 line-clamp-3">
                    Mahila MahaVidhyalaya PG College, Behind Shakti Kunj, Krishna Nagar, Jagjeetpur-249404
                  </div>
                </div>
              </a>
            </div>

            {/* Right Bottom Links */}
            <div className="footer-right-bottom grid md:grid-cols-3 gap-6 lg:gap-8">
              {/* Column 1 */}
              <div className="footer-links-column">
                <h3 className="text-white text-base lg:text-lg font-semibold mb-3 lg:mb-4 pb-2 border-b border-[#e0b56f]/30">Explore Us</h3>
                <ul className="flex flex-col gap-2 lg:gap-3 list-none">
                  <li><a href="/" className="text-gray-200 no-underline text-xs lg:text-sm transition-colors duration-300 hover:text-[#e0b56f] flex items-center gap-2 group"><FaAngleRight className="text-[#e0b56f] text-xs transition-transform duration-300 group-hover:translate-x-1" /> Home</a></li>
                  <li><a href="/about" className="text-gray-200 no-underline text-xs lg:text-sm transition-colors duration-300 hover:text-[#e0b56f] flex items-center gap-2 group"><FaAngleRight className="text-[#e0b56f] text-xs transition-transform duration-300 group-hover:translate-x-1" /> About Us</a></li>
                  <li><a href="/services" className="text-gray-200 no-underline text-xs lg:text-sm transition-colors duration-300 hover:text-[#e0b56f] flex items-center gap-2 group"><FaAngleRight className="text-[#e0b56f] text-xs transition-transform duration-300 group-hover:translate-x-1" /> Service</a></li>
                  <li><a href="/portfolio" className="text-gray-200 no-underline text-xs lg:text-sm transition-colors duration-300 hover:text-[#e0b56f] flex items-center gap-2 group"><FaAngleRight className="text-[#e0b56f] text-xs transition-transform duration-300 group-hover:translate-x-1" /> Portfolio</a></li>
                </ul>
              </div>

              {/* Column 2 */}
              <div className="footer-links-column">
                <h3 className="text-white text-base lg:text-lg font-semibold mb-3 lg:mb-4 pb-2 border-b border-[#e0b56f]/30">Support</h3>
                <ul className="flex flex-col gap-2 lg:gap-3 list-none">
                  <li><a href="/privacy" className="text-gray-200 no-underline text-xs lg:text-sm transition-colors duration-300 hover:text-[#e0b56f] flex items-center gap-2 group"><FaAngleRight className="text-[#e0b56f] text-xs transition-transform duration-300 group-hover:translate-x-1" /> Privacy Policy</a></li>
                  <li><a href="/faq" className="text-gray-200 no-underline text-xs lg:text-sm transition-colors duration-300 hover:text-[#e0b56f] flex items-center gap-2 group"><FaAngleRight className="text-[#e0b56f] text-xs transition-transform duration-300 group-hover:translate-x-1" /> FAQ</a></li>
                  <li><a href="/terms" className="text-gray-200 no-underline text-xs lg:text-sm transition-colors duration-300 hover:text-[#e0b56f] flex items-center gap-2 group"><FaAngleRight className="text-[#e0b56f] text-xs transition-transform duration-300 group-hover:translate-x-1" /> Terms & Conditions</a></li>
                  <li><a href="/contact" className="text-gray-200 no-underline text-xs lg:text-sm transition-colors duration-300 hover:text-[#e0b56f] flex items-center gap-2 group"><FaAngleRight className="text-[#e0b56f] text-xs transition-transform duration-300 group-hover:translate-x-1" /> Contact Us</a></li>
                </ul>
              </div>

              {/* Column 3 - Social Media with Icons */}
              <div className="footer-links-column">
                <h3 className="text-white text-base lg:text-lg font-semibold mb-3 lg:mb-4 pb-2 border-b border-[#e0b56f]/30">Follow Us</h3>
                <div className="social-links flex flex-col gap-2 lg:gap-3">
                  <a href="https://www.facebook.com/chaskarphoto" className="flex items-center gap-3 text-gray-200 no-underline transition-all duration-300 hover:text-[#e0b56f] group">
                    <div className="w-8 h-8 lg:w-9 lg:h-9 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-[#e0b56f]/20 transition-colors duration-300">
                      <FaFacebook className="w-3 h-3 lg:w-4 lg:h-4" />
                    </div>
                    <span className="text-xs lg:text-sm">Facebook</span>
                  </a>
                  <a href="https://x.com/vineetchaskar1" className="flex items-center gap-3 text-gray-200 no-underline transition-all duration-300 hover:text-[#e0b56f] group">
                    <div className="w-8 h-8 lg:w-9 lg:h-9 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-[#e0b56f]/20 transition-colors duration-300">
                      <FaTwitter className="w-3 h-3 lg:w-4 lg:h-4" />
                    </div>
                    <span className="text-xs lg:text-sm">X Twitter</span>
                  </a>
                  <a href="https://www.youtube.com/@chaskarphotography1541/videos" className="flex items-center gap-3 text-gray-200 no-underline transition-all duration-300 hover:text-[#e0b56f] group">
                    <div className="w-8 h-8 lg:w-9 lg:h-9 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-[#e0b56f]/20 transition-colors duration-300">
                      <FaYoutube className="w-3 h-3 lg:w-4 lg:h-4" />
                    </div>
                    <span className="text-xs lg:text-sm">YouTube</span>
                  </a>
                  <a href="https://www.instagram.com/chaskar.photography._/#" className="flex items-center gap-3 text-gray-200 no-underline transition-all duration-300 hover:text-[#e0b56f] group">
                    <div className="w-8 h-8 lg:w-9 lg:h-9 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-[#e0b56f]/20 transition-colors duration-300">
                      <FaInstagram className="w-3 h-3 lg:w-4 lg:h-4" />
                    </div>
                    <span className="text-xs lg:text-sm">Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Container 2 */}
      <div className="footer-container-2 bg-[#e0b56f] py-5 relative z-10">
        <div className="footer-bottom-content max-w-7xl mx-auto px-6 flex justify-center items-center">
          <p className="copyright text-gray-900 text-sm font-medium m-0 text-center">
            © 2025 Chaskar Photography. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;