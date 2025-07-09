import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`py-1 ${
        darkMode
          ? 'bg-gray-800 border-t border-gray-700'
          : 'bg-gray-50 border-t border-gray-200'
      } h-16 flex items-center justify-center`}
    >
      <div className="flex items-center gap-3">
        <p
          className={`text-sm font-semibold flex items-center gap-1 ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}
        >
          © 2025 Vipun Sanjana
          <Heart className="w-4 h-4 text-red-500 fill-current inline-block" />
        </p>
        <button
          onClick={scrollToTop}
          className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
            darkMode
              ? 'bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-blue-400'
              : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-blue-600'
          } shadow-md`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
