import { useState, useEffect } from 'react';
import { FaSearchPlus, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
    <div className="relative overflow-x-hidden bg-white">
      {/* 🌈 Same Animated Background as Services Page */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#fff8f0] to-[#fff0f5]"></div>

        <div className="absolute top-10 left-10 w-40 h-40 bg-[#ff6666]/15 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-52 h-52 bg-[#ffcc66]/15 rounded-full blur-3xl animate-pulse-medium animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-[#66ccff]/12 rounded-full blur-3xl animate-pulse-fast animation-delay-4000"></div>
        <div className="absolute bottom-1/3 left-1/3 w-60 h-60 bg-[#ff7f50]/15 rounded-full blur-3xl animate-float animation-delay-6000"></div>
        <div className="absolute top-1/4 left-1/2 w-64 h-64 bg-[#ff6666]/12 rounded-full blur-3xl animate-pulse-slow animation-delay-3000"></div>

        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-[#ff6666]/20 via-[#ffcc66]/15 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-[#66ccff]/18 via-[#ff7f50]/15 to-transparent blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-1/3 h-1/3 bg-gradient-to-r from-[#ff7f50]/20 via-[#ff6666]/12 to-transparent blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-1/3 h-1/3 bg-gradient-to-l from-[#ffcc66]/20 via-[#66ccff]/12 to-transparent blur-3xl"></div>
      </div>

      {/* ✨ Same Animated Lines Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute left-[20%] w-px h-full bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 top-0">
          <div className="absolute top-[-120px] left-[-1px] w-[3px] h-[120px] bg-gradient-to-b from-transparent via-[#ff7f50]/60 to-transparent animate-lineFlow"></div>
        </div>

        <div className="absolute left-[40%] w-px h-full bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 top-0">
          <div className="absolute top-[-120px] left-[-1px] w-[3px] h-[120px] bg-gradient-to-b from-transparent via-[#ffcc66]/60 to-transparent animate-lineFlow animation-delay-1300"></div>
        </div>

        <div className="absolute left-[60%] w-px h-full bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 top-0">
          <div className="absolute top-[-120px] left-[-1px] w-[3px] h-[120px] bg-gradient-to-b from-transparent via-[#ff6666]/60 to-transparent animate-lineFlow animation-delay-2600"></div>
        </div>

        <div className="absolute left-[80%] w-px h-full bg-gradient-to-b from-gray-200 via-gray-300 to-gray-200 top-0">
          <div className="absolute top-[-120px] left-[-1px] w-[3px] h-[120px] bg-gradient-to-b from-transparent via-[#66ccff]/60 to-transparent animate-lineFlow animation-delay-4000"></div>
        </div>
      </div>

      {/* 🔝 All Content on Top of Background */}
      <div className="relative z-10">
        {/* Portfolio Hero Section */}
        <section className={`relative py-24 flex items-center justify-center overflow-hidden pt-40 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`text-center z-10 px-4 md:px-5 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#ff7f50]/10 border border-[#ff7f50]/30 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#ff7f50] rounded-full animate-pulse"></div>
              <span className="text-[#ff7f50] text-sm font-semibold tracking-wider uppercase">Our Portfolio</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Portfolio <span className="bg-gradient-to-r from-[#ff6666] via-[#ffcc66] to-[#66ccff] bg-clip-text text-transparent animate-gradient">Gallery</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Showcasing our best photography moments and creative work
            </p>
          </div>
        </section>

        {/* Portfolio Filter Section */}
        <section className="py-16 md:py-20 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            {/* Filter Buttons */}
            <div className={`flex justify-center flex-wrap gap-3 sm:gap-4 mb-12 md:mb-16 transform transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              {filters.map((filter) => (
                <button
                  key={filter.key}
                  className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl border-2 transition-all duration-300 font-semibold text-xs sm:text-sm ${
                    activeFilter === filter.key
                      ? 'bg-gradient-to-r from-[#ff7f50] to-[#ffcc66] text-white border-[#ff7f50] shadow-lg'
                      : 'bg-white/80 backdrop-blur-sm text-gray-700 border-gray-200 hover:border-[#ff7f50] hover:bg-white'
                  }`}
                  onClick={() => setActiveFilter(filter.key)}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {filteredItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className={`group transform transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
                  style={{ transitionDelay: `${600 + (index % 8) * 100}ms` }}
                >
                  <div className="relative rounded-2xl overflow-hidden cursor-pointer h-72 sm:h-80 bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-[#ff7f50] shadow-lg hover:shadow-2xl transition-all duration-300">
                    <img
                      src={item.src}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-between p-4 sm:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="mt-auto">
                        <span className="bg-[#ff7f50] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2 inline-block">
                          {item.category}
                        </span>
                        <h3 className="text-white font-bold text-base sm:text-lg">{item.title}</h3>
                      </div>
                      
                      <button
                        className="absolute top-4 sm:top-6 right-4 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-[#ff7f50] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-xl"
                        onClick={() => openLightbox(filteredItems.indexOf(item))}
                      >
                        <FaSearchPlus className="text-sm sm:text-lg" />
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
            className="absolute top-4 sm:top-6 right-4 sm:right-6 w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-[#ff7f50] hover:border-[#ff7f50] transition-all duration-300 z-10"
            onClick={closeLightbox}
          >
            <FaTimes className="text-lg sm:text-xl" />
          </button>

          <button
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-[#ff7f50] hover:border-[#ff7f50] transition-all duration-300 z-10"
            onClick={() => changeLightboxImage(-1)}
          >
            <FaChevronLeft className="text-lg sm:text-xl" />
          </button>

          <button
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full flex items-center justify-center hover:bg-[#ff7f50] hover:border-[#ff7f50] transition-all duration-300 z-10"
            onClick={() => changeLightboxImage(1)}
          >
            <FaChevronRight className="text-lg sm:text-xl" />
          </button>

          <img
            src={filteredItems[currentImageIndex]?.src}
            alt={filteredItems[currentImageIndex]?.title}
            className="max-w-[90%] max-h-[80vh] object-contain rounded-xl shadow-2xl"
          />

          <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-center max-w-[90%] border border-white/10 text-sm sm:text-base">
            {filteredItems[currentImageIndex]?.caption}
          </div>
        </div>
      )}

      {/* Same Custom Animations */}
      <style jsx>{`
        @keyframes lineFlow {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(calc(100vh + 120px));
            opacity: 0;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.8;
          }
        }

        @keyframes pulse-medium {
          0%, 100% {
            transform: scale(1);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.75;
          }
        }

        @keyframes pulse-fast {
          0%, 100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.7;
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

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-lineFlow {
          animation: lineFlow 4s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }

        .animate-pulse-medium {
          animation: pulse-medium 5s ease-in-out infinite;
        }

        .animate-pulse-fast {
          animation: pulse-fast 4s ease-in-out infinite;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 6s ease infinite;
        }

        .animation-delay-1300 {
          animation-delay: 1.3s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-2600 {
          animation-delay: 2.6s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animation-delay-6000 {
          animation-delay: 6s;
        }
      `}</style>
    </div>
  );
};

export default PortfolioPage;