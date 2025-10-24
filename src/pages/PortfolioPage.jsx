import { useState } from 'react';
import { FaSearchPlus, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const portfolioItems = [
    // Wedding Photos
    { id: 1, category: 'wedding', src: 'images/Bridal.JPG', title: 'Bridal Portrait', caption: 'Bridal Portrait - Wedding Photography' },
    { id: 2, category: 'wedding', src: 'images/DSC07986.JPG', title: 'Traditional Ceremony', caption: 'Traditional Ceremony - Wedding Photography' },
    { id: 3, category: 'wedding', src: 'images/Groom.JPG', title: 'Groom Portrait', caption: 'Groom Portrait - Wedding Photography' },
    
    // Pre-Wedding Photos
    { id: 4, category: 'pre-wedding', src: 'images/Prewed1.JPG', title: 'Love Story', caption: 'Love Story - Pre-Wedding Photography' },
    { id: 5, category: 'pre-wedding', src: 'images/Prewed2.JPG', title: 'Romantic Moments', caption: 'Romantic Moments - Pre-Wedding Photography' },
    { id: 6, category: 'pre-wedding', src: 'images/Prewed3.JPG', title: 'Couple Shoot', caption: 'Couple Shoot - Pre-Wedding Photography' },
    { id: 7, category: 'pre-wedding', src: 'images/Prewed4.JPG', title: 'Fashion Pre-Wedding', caption: 'Fashion Pre-Wedding - Pre-Wedding Photography' },
    { id: 8, category: 'pre-wedding', src: 'images/Prewed5.JPG', title: 'Outdoor Pre-Wedding', caption: 'Outdoor Pre-Wedding - Pre-Wedding Photography' },
    { id: 9, category: 'pre-wedding', src: 'images/Prewed6.JPG', title: 'Studio Pre-Wedding', caption: 'Studio Pre-Wedding - Pre-Wedding Photography' },
    { id: 10, category: 'pre-wedding', src: 'images/Prewed7.JPG', title: 'Creative Pre-Wedding', caption: 'Creative Pre-Wedding - Pre-Wedding Photography' },
    
    // Event Photos
    { id: 11, category: 'event', src: 'images/tour.JPG', title: 'Tour Event', caption: 'Tour Event - Event Photography' },
  ];

  const filters = [
    { key: 'all', label: 'All Works' },
    { key: 'wedding', label: 'Wedding' },
    { key: 'pre-wedding', label: 'Pre-Wedding' },
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
        {/* Sabse Uper Wala Section - Hero Section with Background Image */}
        <section 
          className="relative py-20 flex items-center justify-center bg-cover bg-center bg-no-repeat min-h-[60vh]"
          style={{ backgroundImage: "url('images/portfolio-hero.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#e0b56f]/20 border border-[#e0b56f]/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#e0b56f] rounded-full"></div>
              <span className="text-[#e0b56f] text-sm font-semibold tracking-wider uppercase">Our Portfolio</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Portfolio <span className="bg-gradient-to-r from-[#ff6666] via-[#ffcc66] to-[#66ccff] bg-clip-text text-transparent">Gallery</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Showcasing our best photography moments and creative work
            </p>
          </div>
        </section>

        {/* Baaki ka Content - Black Background with Bubbles */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            {/* Filter Buttons */}
            <div className="flex justify-center flex-wrap gap-4 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  className={`px-6 py-3 rounded-xl border-2 transition-all duration-300 font-semibold ${
                    activeFilter === filter.key
                      ? 'bg-gradient-to-r from-[#e0b56f] to-[#f0c97a] text-black border-[#e0b56f] shadow-lg'
                      : 'bg-gray-800/50 text-gray-300 border-gray-700 hover:border-[#e0b56f] hover:bg-gray-700/50 backdrop-blur-sm'
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
                  className="group"
                >
                  <div className="relative rounded-2xl overflow-hidden cursor-pointer h-80 bg-gray-800/50 border border-gray-700 hover:border-[#e0b56f] shadow-lg hover:shadow-2xl transition-all duration-300 backdrop-blur-sm">
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
                        className="absolute top-6 right-6 w-12 h-12 bg-[#e0b56f] text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-xl"
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
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={(e) => e.target === e.currentTarget && closeLightbox()}
        >
          <button
            className="absolute top-6 right-6 w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-[#e0b56f] hover:border-[#e0b56f] hover:text-black transition-all duration-300 z-10"
            onClick={closeLightbox}
          >
            <FaTimes className="text-xl" />
          </button>

          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-[#e0b56f] hover:border-[#e0b56f] hover:text-black transition-all duration-300 z-10"
            onClick={() => changeLightboxImage(-1)}
          >
            <FaChevronLeft className="text-xl" />
          </button>

          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-[#e0b56f] hover:border-[#e0b56f] hover:text-black transition-all duration-300 z-10"
            onClick={() => changeLightboxImage(1)}
          >
            <FaChevronRight className="text-xl" />
          </button>

          <img
            src={filteredItems[currentImageIndex]?.src}
            alt={filteredItems[currentImageIndex]?.title}
            className="max-w-[90%] max-h-[80vh] object-contain rounded-xl shadow-2xl"
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white px-6 py-3 rounded-full text-center max-w-[90%] border border-white/10">
            {filteredItems[currentImageIndex]?.caption}
          </div>
        </div>
      )}

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

export default PortfolioPage;