import { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = '919557867881';
  const defaultMessage = 'Hello! I would like to inquire about your photography services.';

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      window.location.href = url;
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Chat Preview Box */}
        {isOpen && (
          <div className="bg-white rounded-2xl shadow-2xl p-5 w-72 animate-fade-in border border-gray-200">
            <div className="flex items-start gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                <FaWhatsapp className="text-white text-2xl" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 text-base">Chaskar Photography</h3>
                <p className="text-xs text-gray-500">Typically replies within minutes</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Close chat"
              >
                <FaTimes className="text-lg" />
              </button>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-3 mb-4">
              <p className="text-sm text-gray-700 leading-relaxed">
                Hi there! 👋<br />
                How can we help you today?
              </p>
            </div>

            <button
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              <FaWhatsapp className="text-xl" />
              <span>Start Chat</span>
            </button>
          </div>
        )}

        {/* Main WhatsApp Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/50"
          aria-label="Open WhatsApp chat"
        >
          {isOpen ? (
            <FaTimes className="text-3xl transition-transform duration-300" />
          ) : (
            <FaWhatsapp className="text-3xl transition-transform duration-300 group-hover:scale-110" />
          )}
          
          {/* Pulse Animation */}
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></span>
          
          {/* Online Indicator */}
          <span className="absolute top-1 right-1 w-4 h-4 bg-green-300 border-2 border-white rounded-full animate-pulse"></span>
        </button>
      </div>

      {/* CSS Animation Styles */}
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;