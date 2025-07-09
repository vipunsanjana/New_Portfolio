import React from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
      darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-indigo-50'
    }`}>
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 mt-4">
            <div className={`w-32 h-32 mx-auto mb-8 rounded-full ${
              darkMode ? 'bg-gradient-to-r from-blue-500 to-purple-600' : 'bg-gradient-to-r from-blue-600 to-indigo-600'
            } p-1`}>
              <div className={`w-full h-full rounded-full ${
                darkMode ? 'bg-gray-900' : 'bg-white'
              } flex items-center justify-center`}>
                <span className={`text-4xl font-bold ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}>SE</span>
              </div>
            </div>
          </div>

          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-7xl">Hi, I'm</span>
            <span className={`bg-gradient-to-r ${
              darkMode ? 'from-blue-400 to-purple-500' : 'from-blue-600 to-indigo-600'
            } bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl lg:text-7xl`}>
              Vipun Sanjana
            </span>
          </h1>

          <p className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed px-4 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Crafting digital experiences with clean code and innovative solutions.
            <br />
            Passionate about building scalable applications that make a difference.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className={`px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto ${
                darkMode 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700' 
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'
              } shadow-lg hover:shadow-xl`}
            >
              View My Work
            </button>
            <button className={`px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 w-full sm:w-auto ${
              darkMode 
                ? 'border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500' 
                : 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'
            }`}>
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </button>
          </div>

          <div className="flex justify-center space-x-4 sm:space-x-6 mb-12 px-4">
            {[
              { icon: Github, href: 'https://github.com/vipunsanjana' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/vipun' },
              { icon: Mail, href: 'mailto:vipunsanjana34@gmail.com' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`p-3 rounded-lg transition-all duration-300 hover:scale-110 ${
                  darkMode 
                    ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-blue-400' 
                    : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                } shadow-lg hover:shadow-xl`}
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;