import { useState, useEffect } from 'react';
import { FaSearchPlus, FaTimes, FaChevronLeft, FaChevronRight, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaAngleRight } from 'react-icons/fa';
import { RiWhatsappFill } from 'react-icons/ri';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const portfolioItems = [
    // Wedding Photos
    { id: 1, category: 'wedding', src: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop', title: 'Cinematic Wedding', caption: 'Cinematic Wedding - Wedding Photography' },
    { id: 2, category: 'wedding', src: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&h=600&fit=crop', title: 'Traditional Ceremony', caption: 'Traditional Ceremony - Wedding Photography' },
    { id: 3, category: 'wedding', src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&h=600&fit=crop', title: 'Candid Moments', caption: 'Candid Moments - Wedding Photography' },
    
    // Pre-Wedding Photos
    { id: 4, category: 'pre-wedding', src: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&h=600&fit=crop', title: 'Love Story', caption: 'Love Story - Pre-Wedding Photography' },
    { id: 5, category: 'pre-wedding', src: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&h=600&fit=crop', title: 'Romantic Moments', caption: 'Romantic Moments - Pre-Wedding Photography' },
    
    // Portrait Photos
    { id: 6, category: 'portrait', src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=600&fit=crop', title: 'Professional Portrait', caption: 'Professional Portrait - Portrait Photography' },
    { id: 7, category: 'portrait', src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop', title: 'Executive Portrait', caption: 'Executive Portrait - Portrait Photography' },
    
    // Maternity Photos
    { id: 8, category: 'maternity', src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop', title: 'Beautiful Journey', caption: 'Beautiful Journey - Maternity Photography' },
    
    // Kids Photos
    { id: 9, category: 'kids', src: 'https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?w=800&h=600&fit=crop', title: 'Playful Moments', caption: 'Playful Moments - Kids Photography' },
    
    // Fashion Photos
    { id: 10, category: 'fashion', src: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop', title: 'High Fashion', caption: 'High Fashion - Fashion Photography' },
    { id: 11, category: 'fashion', src: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=600&fit=crop', title: 'Editorial Shoot', caption: 'Editorial Shoot - Fashion Photography' },
    
    // Product Photos
    { id: 12, category: 'product', src: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop', title: 'Product Showcase', caption: 'Product Showcase - Product Photography' },
    
    // Event Photos
    { id: 13, category: 'event', src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop', title: 'Corporate Event', caption: 'Corporate Event - Event Photography' },
  ];

  const filters = [
    { key: 'all', label: 'All Works' },
    { key: 'wedding', label: 'Wedding' },
    { key: 'pre-wedding', label: 'Pre-Wedding' },
    { key: 'portrait', label: 'Portrait' },
    { key: 'maternity', label: 'Maternity' },
    { key: 'kids', label: 'Kids' },
    { key: 'fashion', label: 'Fashion' },
    { key: 'product', label: 'Product' },
    { key: 'event', label: 'Event' },
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  const changeLightboxImage = (direction) => {
    let newIndex = currentImageIndex + direction;
    
    if (newIndex < 0) {
      newIndex = filteredItems.length - 1;
    } else if (newIndex >= filteredItems.length) {
      newIndex = 0;
    }
    
    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;

      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        changeLightboxImage(-1);
      } else if (e.key === 'ArrowRight') {
        changeLightboxImage(1);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentImageIndex]);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Portfolio Hero Section */}
      <section className={`relative py-24 flex items-center justify-center bg-gradient-to-r from-black via-black/90 to-black/80 overflow-hidden pt-40 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-[url('/bg.jpg')] bg-cover bg-center opacity-20"></div>
        
        {/* Background Circles */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#e0b56f]/15 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 bg-red-500/10 rounded-full"></div>
        <div className="absolute top-1/2 left-10 w-12 h-12 bg-purple-500/10 rounded-full"></div>
        
        <div className={`text-center z-10 px-5 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#e0b56f]/10 border border-[#e0b56f]/30 rounded-full mb-6 animate-fadeInDown">
            <div className="w-2 h-2 bg-[#e0b56f] rounded-full"></div>
            <span className="text-[#e0b56f] text-sm font-semibold tracking-wider">OUR PORTFOLIO</span>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fadeInUp">
            Portfolio <span className="text-[#e0b56f]">Gallery</span>
          </h1>
          
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fadeInUp">
            Showcasing our best photography moments and creative work
          </p>
        </div>
      </section>

      {/* Portfolio Filter Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter Buttons */}
          <div className={`flex justify-center flex-wrap gap-4 mb-12 transform transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {filters.map((filter) => (
              <button
                key={filter.key}
                className={`px-6 py-3 rounded-full border-2 transition-all duration-300 font-semibold text-sm ${
                  activeFilter === filter.key
                    ? 'bg-[#e0b56f] text-black border-[#e0b56f]'
                    : 'bg-white/5 text-white border-white/10 hover:border-[#e0b56f] hover:bg-white/10'
                }`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`group transform transition-all duration-700 delay-${600 + (index % 8) * 100} ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
                style={{ transitionDelay: `${600 + (index % 8) * 100}ms` }}
              >
                <div className="relative rounded-2xl overflow-hidden cursor-pointer h-80">
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="mt-auto">
                      <span className="bg-[#e0b56f] text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2 inline-block">
                        {item.category}
                      </span>
                      <h3 className="text-white font-bold text-lg">{item.title}</h3>
                    </div>
                    
                    <button
                      className="absolute top-6 right-6 w-12 h-12 bg-[#e0b56f] text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                      onClick={() => openLightbox(filteredItems.indexOf(item))}
                    >
                      <FaSearchPlus className="text-lg" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 animate-fadeIn"
          onClick={(e) => e.target === e.currentTarget && closeLightbox()}
        >
          <button
            className="absolute top-6 right-6 w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-[#e0b56f] hover:text-black transition-all duration-300 z-10 animate-fadeInDown"
            onClick={closeLightbox}
          >
            <FaTimes className="text-xl" />
          </button>

          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-[#e0b56f] hover:text-black transition-all duration-300 z-10 animate-fadeInLeft"
            onClick={() => changeLightboxImage(-1)}
          >
            <FaChevronLeft className="text-xl" />
          </button>

          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-[#e0b56f] hover:text-black transition-all duration-300 z-10 animate-fadeInRight"
            onClick={() => changeLightboxImage(1)}
          >
            <FaChevronRight className="text-xl" />
          </button>

          <img
            src={filteredItems[currentImageIndex]?.src}
            alt={filteredItems[currentImageIndex]?.title}
            className="max-w-[90%] max-h-[80vh] object-contain rounded-xl shadow-2xl animate-zoomIn"
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/80 text-white px-6 py-3 rounded-full text-center max-w-[90%] animate-fadeInUp">
            {filteredItems[currentImageIndex]?.caption}
          </div>
        </div>
      )}

    </div>
  );
};

export default PortfolioPage;