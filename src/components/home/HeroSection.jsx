import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    setIsVisible(true);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isAutoPlaying) startAutoPlay();
    else stopAutoPlay();
    return () => stopAutoPlay();
  }, [isAutoPlaying]);

  const startAutoPlay = () => {
    if (autoPlayIntervalRef.current) clearInterval(autoPlayIntervalRef.current);
    autoPlayIntervalRef.current = setInterval(() => moveNext(), 3000);
  };

  const stopAutoPlay = () => {
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
      autoPlayIntervalRef.current = null;
    }
  };

  const moveNext = () =>
    setCurrentIndex((prev) => (prev + 1) % imagesData.length);
  const movePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + imagesData.length) % imagesData.length);

  const handleManualInteraction = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleTouchStart = (e) => {
    handleManualInteraction();
    e.currentTouchStartX = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const startX = e.currentTouchStartX;
    if (startX - endX > 50) moveNext();
    else if (endX - startX > 50) movePrev();
  };

  const getItemPosition = (i) =>
    (i - currentIndex + imagesData.length) % imagesData.length;

  return (
    <div className="relative bg-transparent text-white">
      {/* HERO SECTION */}
      <section
        className={`min-h-screen flex flex-col items-center justify-center px-4 md:px-5 pt-32 sm:pt-24 md:pt-24 pb-16 md:pb-24 transition-all duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Logo Circle */}
        <div
          className={`mb-8 md:mb-10 transform transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0" : "translate-y-10"
          }`}
        >
          <div className="w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full bg-gray-800 border-4 sm:border-6 md:border-8 border-[#e0b56f]/30 shadow-xl flex items-center justify-center overflow-hidden">
            <img
              src="images/CHAKAR LOGO.png"
              alt="Chaskar Photography Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div
          className={`text-center max-w-4xl px-2 transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0" : "translate-y-10"
          }`}
        >
          <h1 className="text-2xl sm:text-3xl md:text-6xl mb-4 md:mb-8 leading-tight">
            <span className="italic text-gray-300">Hello,</span>{" "}
            <span className="font-bold bg-gradient-to-r from-[#ff6666] via-[#ffcc66] to-[#66ccff] bg-clip-text text-transparent animate-gradient">
              I am Chaskar!
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-xl text-gray-400 leading-relaxed mb-6 md:mb-12">
            I believe every moment tells a story. My photography captures the
            essence of life through the lens of authenticity and artistry,
            creating timeless memories that speak to the soul.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/portfolio"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-[#e0b56f] text-[#e0b56f] rounded-xl font-semibold text-sm sm:text-base overflow-hidden transition-all duration-300 hover:text-black w-full sm:w-auto"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-[#e0b56f] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Link>

            <Link
              to="/contact#contact"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-[#e0b56f] border-2 border-[#e0b56f] text-black rounded-xl font-semibold text-sm sm:text-base overflow-hidden transition-all duration-300 hover:bg-transparent hover:text-[#e0b56f] w-full sm:w-auto"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </Link>
          </div>
        </div>
      </section>

      {/* CAROUSEL */}
      <section
        className={`px-5 py-8 bg-transparent flex flex-col items-center justify-center relative overflow-hidden transition-all duration-1000 delay-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        id="gallery"
      >
        <div
          className="relative w-full max-w-7xl h-[500px] flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative w-full h-full flex items-center justify-center overflow-visible">
            {isMobile ? (
              <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  key={currentIndex}
                  src={imagesData[currentIndex]}
                  alt={`Photography ${currentIndex + 1}`}
                  className="w-full h-full object-cover animate-fadeIn"
                />
                <div className="absolute inset-4 border-2 border-[#e0b56f]/50 rounded-xl shadow-inner pointer-events-none animate-pulse-slow"></div>
              </div>
            ) : (
              imagesData.map((img, index) => {
                const pos = getItemPosition(index);
                let positionClass = "opacity-0 pointer-events-none";
                if (pos === 0)
                  positionClass =
                    "left-[10%] -translate-x-1/2 scale-75 opacity-60 z-10";
                else if (pos === 1)
                  positionClass =
                    "left-[27%] -translate-x-1/2 scale-85 opacity-75 z-20";
                else if (pos === 2)
                  positionClass =
                    "left-1/2 -translate-x-1/2 scale-100 opacity-100 z-30 w-85 h-[450px]";
                else if (pos === 3)
                  positionClass =
                    "left-[73%] -translate-x-1/2 scale-85 opacity-75 z-20";
                else if (pos === 4)
                  positionClass =
                    "left-[90%] -translate-x-1/2 scale-75 opacity-60 z-10";
                return (
                  <div
                    key={index}
                    className={`absolute w-80 h-[440px] rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all duration-600 ${positionClass}`}
                    onClick={() => {
                      handleManualInteraction();
                      setCurrentIndex(index);
                    }}
                  >
                    <img
                      src={img}
                      alt={`Photography ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    {pos === 2 && (
                      <div className="absolute inset-4 border-2 border-[#e0b56f]/50 rounded-xl shadow-inner pointer-events-none animate-pulse-slow"></div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-8 sm:mt-10 flex-wrap">
          {imagesData.map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-all duration-300 ${
                index === currentIndex
                  ? "bg-[#e0b56f] scale-125"
                  : "bg-gray-600/40 hover:bg-gray-500/50"
              }`}
              onClick={() => {
                handleManualInteraction();
                setCurrentIndex(index);
              }}
            />
          ))}
        </div>
      </section>

      {/* Gradient Animation Style */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientMove 6s ease infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;