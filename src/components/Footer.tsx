import React, { useState, useEffect } from 'react';
import {
  Heart, ArrowUp, Github, Linkedin, Mail,
  Code, Sparkles, Star, Zap, Coffee,
  MapPin, Clock
} from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  interface FloatingParticleProps {
    delay?: number;
    className?: string;
    style?: React.CSSProperties;
  }

  const FloatingParticle: React.FC<FloatingParticleProps> = ({ delay = 0, className = '', style = {} }) => (
    <div
      className={`absolute w-1 h-1 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} rounded-full opacity-30 ${className}`}
      style={{
        animation: `float 4s ease-in-out infinite, twinkle 2s ease-in-out infinite alternate`,
        animationDelay: `${delay}s`,
        ...style
      }}
    />
  );

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/vipunsanjana',
      label: 'GitHub',
      color: 'hover:text-gray-900 hover:bg-gray-100'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/vipun',
      label: 'LinkedIn',
      color: 'hover:text-blue-600 hover:bg-blue-50'
    },
    {
      icon: Mail,
      href: 'mailto:vipunsanjana34@gmail.com',
      label: 'Email',
      color: 'hover:text-red-600 hover:bg-red-50'
    }
  ];

  return (
    <footer
      className={`relative overflow-hidden transition-all duration-500 ${darkMode
        ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-t border-gray-700/50'
        : 'bg-gradient-to-r from-blue-50 via-white to-indigo-50 border-t border-gray-200/50'
        }`}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${darkMode ? 'bg-gradient-to-r from-blue-900/5 via-purple-900/5 to-pink-900/5' : 'bg-gradient-to-r from-blue-100/30 via-purple-100/30 to-pink-100/30'}`} />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <FloatingParticle
            key={i}
            delay={i * 0.2}
            className={`left-${Math.floor(Math.random() * 100)}% top-${Math.floor(Math.random() * 100)}%`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 py-4 sm:py-6">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            {/* Top Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">

              {/* Brand Section */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-2 mb-3">
                  <Code className={`w-8 h-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                  <span className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Vipun Sanjana
                  </span>
                  <Sparkles className={`w-5 h-5 ${darkMode ? 'text-yellow-400' : 'text-yellow-500'} animate-pulse`} />
                </div>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-xs mx-auto md:mx-0`}>
                  Crafting digital experiences with passion and precision. Building the future, one line of code at a time.
                </p>
              </div>

              {/* Quick Links */}
              <div className="text-center">
                <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Quick Links
                </h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {['About', 'Projects', 'Skills', 'Contact'].map((link, index) => (
                    <button
                      key={link}
                      onClick={() => {
                        const el = document.getElementById(link.toLowerCase());
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${darkMode
                        ? 'text-gray-400 hover:text-blue-400 hover:bg-gray-800/50'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                        }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {link}
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Info */}
              <div className="text-center md:text-right">
                <div className="space-y-2">
                  <div className={`flex items-center justify-center md:justify-end space-x-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <MapPin className="w-4 h-4" />
                    <span>Colombo, Sri Lanka</span>
                  </div>
                  <div className={`flex items-center justify-center md:justify-end space-x-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <Clock className="w-4 h-4" />
                    <span>{currentTime.toLocaleTimeString()}</span>
                  </div>
                  <div className={`flex items-center justify-center md:justify-end space-x-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <Coffee className="w-4 h-4" />
                    <span>Available for work</span>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className={`h-px ${darkMode ? 'bg-gradient-to-r from-transparent via-gray-700 to-transparent' : 'bg-gradient-to-r from-transparent via-gray-300 to-transparent'} mb-6`} />

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-3 rounded-xl transition-all duration-300 hover:scale-110 transform ${darkMode
                      ? 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 backdrop-blur-sm'
                      : 'bg-white/50 text-gray-600 backdrop-blur-sm'
                      } ${social.color} shadow-lg hover:shadow-xl border ${darkMode ? 'border-gray-700/50' : 'border-gray-200/50'}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <social.icon className="w-5 h-5 group-hover:animate-pulse" />
                  </a>
                ))}
              </div>

              {/* Copyright */}
              <div className="text-center">
                <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-medium ${darkMode
                  ? 'bg-gray-800/50 text-gray-400 border border-gray-700/50'
                  : 'bg-white/50 text-gray-600 border border-gray-200/50'
                  } backdrop-blur-sm`}>
                  <Zap className="w-3 h-3" />
                  <p className={`text-sm font-semibold flex items-center gap-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    <span>© 2025 with</span>
                    <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
                    <span>Vipun Sanjana</span>
                  </p>
                  <Star className="w-3 h-3 text-yellow-500" />
                </div>
              </div>

              {/* Scroll to Top */}
              <button
                onClick={scrollToTop}
                className={`group relative p-4 rounded-xl transition-all duration-500 hover:scale-110 transform ${darkMode
                  ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 hover:from-blue-500/30 hover:to-purple-500/30'
                  : 'bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 hover:from-blue-500/20 hover:to-purple-500/20'
                  } shadow-lg hover:shadow-xl backdrop-blur-sm border ${darkMode ? 'border-blue-500/30' : 'border-blue-500/20'} overflow-hidden`}
                aria-label="Scroll to top"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <ArrowUp className="w-6 h-6 relative z-10 group-hover:animate-bounce" />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(90deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
          75% { transform: translateY(-10px) rotate(270deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        
        .bg-grid-pattern {
          background-image:
            linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </footer>
  );
};

export default Footer;