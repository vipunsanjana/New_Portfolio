import React, { useState, useEffect } from 'react';
import {
  Menu, X, Code, Moon, Sun,
  User, Book, Laptop, Mail, Award, Briefcase, BadgeCheck
} from 'lucide-react';

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

  const navItems = [
    { name: 'About', id: 'about', icon: <User className="w-5 h-5 mr-2" /> },
    { name: 'Education', id: 'education', icon: <Book className="w-5 h-5 mr-2" /> },
    { name: 'Projects', id: 'projects', icon: <Laptop className="w-5 h-5 mr-2" /> },
    { name: 'Contact', id: 'contact', icon: <Mail className="w-5 h-5 mr-2" /> },
    { name: 'Skills', id: 'skills', icon: <Award className="w-5 h-5 mr-2" /> },
    { name: 'Experience', id: 'experience', icon: <Briefcase className="w-5 h-5 mr-2" /> },
    { name: 'Certifications', id: 'certifications', icon: <BadgeCheck className="w-5 h-5 mr-2" /> }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${scrolled
          ? `${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm shadow-lg`
          : 'bg-transparent'}
      `}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center space-x-2">
            <Code className={`w-8 h-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
            <span className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Vipun Sanjana
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors hover:text-blue-600 text-sm lg:text-base
                  ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700'}
                `}
              >
                {item.name}
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

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-2">
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
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 right-0 z-40">
          <div
            className={`mt-2 py-4 rounded-lg border shadow-xl backdrop-blur-sm w-[90%] max-w-xs mx-auto
              ${darkMode
                ? 'bg-gray-900/95 border-gray-700'
                : 'bg-white/95 border-gray-200'}
            `}
          >
            <nav className="flex flex-col">
              {navItems.map(item => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center text-left px-6 py-3 font-medium transition-colors border-b last:border-b-0
                    ${darkMode 
                      ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 border-gray-700' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 border-gray-200'}
                  `}
                >
                  {item.icon}
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
