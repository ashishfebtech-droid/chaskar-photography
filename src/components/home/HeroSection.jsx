import { useState, useEffect, useRef } from "react";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const autoPlayIntervalRef = useRef(null);

  const imagesData = [
    "images/Prewed6.JPG",
    "images/DSC07986.JPG",
    "images/Bridal.JPG",
    "images/Prewed3.JPG",
    "images/Prewed7.JPG",
    "images/tour.JPG",
    "images/Prewed1.JPG",
    "images/Groom.JPG",
    "images/Prewed2.JPG",
    "images/Prewed4.JPG",
    "images/Prewed5.JPG",
  ];

  // Check mobile screen and initialize animations
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Start entrance animation
    setIsVisible(true);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Auto play carousel
  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }

    return () => {
      stopAutoPlay();
    };
  }, [isAutoPlaying]);

  const getItemPosition = (itemIndex) => {
    return (itemIndex - currentIndex + imagesData.length) % imagesData.length;
  };

  const moveNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesData.length);
  };

  const movePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imagesData.length) % imagesData.length
    );
  };

  const startAutoPlay = () => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
    }

    autoPlayIntervalRef.current = setInterval(() => {
      moveNext();
    }, 3000);
  };

  const stopAutoPlay = () => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
      autoPlayIntervalRef.current = null;
    }
  };

  const handleManualInteraction = () => {
    setIsAutoPlaying(false);
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);
  };

  // Touch events for mobile
  const handleTouchStart = (e) => {
    handleManualInteraction();
    e.currentTouchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const startX = e.currentTouchStartX;
    const swipeThreshold = 50;

    if (startX - endX > swipeThreshold) {
      moveNext();
    } else if (endX - startX > swipeThreshold) {
      movePrev();
    }
  };

  return (
    <div className="relative">
      {/* Hero Content */}
      <section
        className={`min-h-screen flex flex-col items-center justify-center px-4 md:px-5 pt-32 sm:pt-24 md:pt-24 pb-16 md:pb-24 bg-transparent relative z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className={`mb-8 md:mb-10 transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0" : "translate-y-10"
          }`}
        >
          <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full bg-black border-4 sm:border-6 md:border-8 border-[#e0b56f]/30 shadow-xl shadow-[#e0b56f]/20 flex items-center justify-center overflow-hidden">
            <img
              src="images/CHAKAR LOGO.png"
              alt="Chaskar Photography Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div
          className={`text-center max-w-4xl px-2 transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0" : "translate-y-10"
          }`}
        >
          <h1 className="text-2xl sm:text-3xl md:text-6xl mb-4 md:mb-8 leading-tight">
            <span className="italic text-white">Hello,</span>
            <span className="text-[#e0b56f] font-bold"> I am Chaskar!</span>
          </h1>

          <p className="text-sm sm:text-base md:text-xl text-white/85 leading-relaxed mb-6 md:mb-12">
            I believe every moment tells a story. My photography captures the
            essence of life through the lens of authenticity and artistry,
            creating timeless memories that speak to the soul.
          </p>

          <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-[#e0b56f] text-[#e0b56f] rounded-xl font-semibold text-sm sm:text-base overflow-hidden transition-all duration-300 hover:text-gray-900">
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-[#e0b56f] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
          </button>
        </div>
      </section>

      {/* Carousel Section */}
      <section
        className={`px-5 py-8 bg-transparent flex flex-col items-center justify-center relative z-10 overflow-hidden transform transition-all duration-1000 delay-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        id="gallery"
      >
        <div
          className="relative w-full max-w-7xl h-[500px] flex items-center justify-center p-0 overflow-visible"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative w-full h-full flex items-center justify-center overflow-visible">
            {isMobile ? (
              // Mobile Single Column Carousel
              <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  key={currentIndex}
                  src={imagesData[currentIndex]}
                  alt={`Photography ${currentIndex + 1}`}
                  className="w-full h-full object-cover animate-fadeIn"
                />
                <div className="absolute inset-4 border-2 border-white/80 rounded-xl shadow-inner pointer-events-none animate-pulse-slow"></div>
              </div>
            ) : (
              // Desktop Multi-Image Carousel
              imagesData.map((imgSrc, index) => {
                const pos = getItemPosition(index);
                let positionClass = "opacity-0 pointer-events-none";

                if (pos === 0)
                  positionClass =
                    "left-[10%] -translate-x-1/2 scale-75 opacity-60 z-10 brightness-70";
                else if (pos === 1)
                  positionClass =
                    "left-[27%] -translate-x-1/2 scale-85 opacity-75 z-20 brightness-85";
                else if (pos === 2)
                  positionClass =
                    "left-1/2 -translate-x-1/2 scale-100 opacity-100 z-30 brightness-100 w-85 h-[450px]";
                else if (pos === 3)
                  positionClass =
                    "left-[73%] -translate-x-1/2 scale-85 opacity-75 z-20 brightness-85";
                else if (pos === 4)
                  positionClass =
                    "left-[90%] -translate-x-1/2 scale-75 opacity-60 z-10 brightness-70";

                return (
                  <div
                    key={index}
                    className={`absolute w-80 h-[440px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-600 ${positionClass}`}
                    onClick={() => {
                      handleManualInteraction();
                      setCurrentIndex(index);
                    }}
                  >
                    <img
                      src={imgSrc}
                      alt={`Photography ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {/* Inner Border for Focus Image */}
                    {pos === 2 && (
                      <div className="absolute inset-4 border-2 border-white/80 rounded-xl shadow-inner pointer-events-none animate-pulse-slow"></div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Dots Indicator - Always visible */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-10 flex-wrap">
          {imagesData.map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#e0b56f] scale-125"
                  : "bg-white/30 hover:bg-white/50"
              }`}
              onClick={() => {
                handleManualInteraction();
                setCurrentIndex(index);
              }}
            />
          ))}
        </div>
      </section>

      {/* Custom Animation for Inner Border */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;