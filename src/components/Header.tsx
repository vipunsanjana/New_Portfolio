import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Moon, Sun } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = ['About', 'Skills', 'Projects', 'Experience', 'Certifications', 'Contact'];

  return (
    <header
      className={`mt-0fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? `${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm shadow-lg`
          : 'bg-transparent'}
        h-20 
      `}
    >
      {/* increased vertical padding for breathing room */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* brand */}
          <div className="flex items-center space-x-2">
            <Code className={`w-8 h-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Vipun Sanjana
            </span>
          </div>

          {/* desktop nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-medium transition-colors hover:text-blue-600 text-sm lg:text-base
                  ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700'}
                `}
              >
                {item}
              </button>
            ))}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors
                ${darkMode
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
              `}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </nav>

          {/* mobile toggles */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors
                ${darkMode
                  ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
              `}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors
                ${darkMode
                  ? 'bg-gray-800 text-white hover:bg-gray-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
              `}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* mobile menu */}
        {isMenuOpen && (
          <div
            className={`
              md:hidden mt-4 py-4 rounded-lg border mx-4 backdrop-blur-sm
              ${darkMode
                ? 'bg-gray-800/95 border-gray-700'
                : 'bg-white/95 border-gray-200'}
            `}
          >
            <nav className="flex flex-col space-y-2">
              {navItems.map(item => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-left px-4 py-2 font-medium transition-colors hover:text-blue-600
                    ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700'}
                  `}
                >
                  {item}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
