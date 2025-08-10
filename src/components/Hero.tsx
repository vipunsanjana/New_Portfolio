import React from 'react';
import {
  Github, Linkedin, Mail, Download,
  Code, Database, Server, Cpu, GitBranch,
  Terminal, Zap, CloudLightning
} from 'lucide-react';
import { useTypewriter } from 'react-simple-typewriter';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [text] = useTypewriter({
    words: [
      'Backend Developer',
      'DevOps Enthusiast',
      'AI Enthusiast',
      'DevSecOps Explorer',
      'Open Source Contributor'
    ],
    loop: 0,
    typeSpeed: 80,
    deleteSpeed: 50,
    delaySpeed: 1500
  });

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const FloatingLogo = ({
    icon: Icon,
    className,
    delay = 0,
    name
  }: {
    icon: any;
    className: string;
    delay?: number;
    name: string;
  }) => (
    <div
      className={`absolute ${className} opacity-20 hover:opacity-60 transition-all duration-500 cursor-pointer group`}
      style={{
        animation: `float 6s ease-in-out infinite`,
        animationDelay: `${delay}s`
      }}
    >
      <div className={`p-4 rounded-full ${darkMode ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm border ${darkMode ? 'border-gray-700' : 'border-gray-200'} group-hover:scale-110 transition-transform duration-300`}>
        <Icon className={`w-8 h-8 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
      </div>
      <span className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        {name}
      </span>
    </div>
  );

  return (
    <section id='hero' className={`min-h-screen flex items-center justify-center relative overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-indigo-50'}`}>
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Floating Icons - Left */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <FloatingLogo icon={Code} className="top-10 left-4 md:top-20 md:left-20" delay={0} name="Code" />
        <FloatingLogo icon={Database} className="top-24 left-12 md:top-40 md:left-40" delay={1} name="Database" />
        <FloatingLogo icon={Server} className="top-40 left-6 md:top-60 md:left-20" delay={2} name="Server" />
        <FloatingLogo icon={GitBranch} className="top-64 left-16 md:top-80 md:left-32" delay={3} name="Git" />
        <FloatingLogo icon={Terminal} className="bottom-24 left-10 md:bottom-40 md:left-24" delay={4} name="Terminal" />
        <FloatingLogo icon={CloudLightning} className="bottom-40 left-12 md:bottom-60 md:left-40" delay={5} name="Cloud" />
      </div>

      {/* Floating Icons - Right */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <FloatingLogo icon={Cpu} className="top-12 right-6 md:top-20 md:right-20" delay={1.5} name="CPU" />
        <FloatingLogo icon={Zap} className="top-32 right-12 md:top-40 md:right-40" delay={2.5} name="Performance" />
        <FloatingLogo icon={Code} className="top-48 right-6 md:top-60 md:right-20" delay={3.5} name="Code" />
        <FloatingLogo icon={Database} className="top-72 right-10 md:top-80 md:right-32" delay={4.5} name="Database" />
        <FloatingLogo icon={Server} className="bottom-24 right-6 md:bottom-40 md:right-24" delay={5.5} name="Server" />
        <FloatingLogo icon={Terminal} className="bottom-40 right-10 md:bottom-60 md:right-40" delay={0.5} name="Terminal" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 mt-24 sm:mt-16">
            <div className={`w-48 h-48 mx-auto mb-12 rounded-full overflow-hidden border-4 ${darkMode ? 'border-blue-500' : 'border-blue-600'} shadow-2xl transition-all duration-300 hover:scale-105`}>
              <img
                src="/qw.jpg"
                alt="Vipun Sanjana"
                className="cursor-pointer w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className={`text-5xl md:text-7xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-7xl">Hi, I'm</span>
            <span className={`bg-gradient-to-r ${darkMode ? 'from-blue-400 to-purple-500' : 'from-blue-600 to-indigo-600'} bg-clip-text text-transparent`}>
              Vipun Sanjana
            </span>
          </h1>

          <p className={`text-base sm:text-lg md:text-xl lg:text-2xl mb-4 leading-relaxed px-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Crafting digital experiences with clean code and innovative solutions.
            <br />
            Passionate about building scalable applications that make a difference.
          </p>

          <div className="mb-6">
            <span className={`text-lg sm:text-xl font-mono ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              {text}
            </span>
            <span className={`animate-pulse ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>|</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className={`px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 w-full sm:w-auto ${darkMode ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700' : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'} shadow-lg hover:shadow-xl`}
            >
              View My Work
            </button>
            <a
              href="/vipun_cv.pdf"
              download="vipun_cv.pdf"
              className={`px-6 sm:px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 w-full sm:w-auto ${darkMode ? 'border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500' : 'border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400'}`}
            >
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4 sm:space-x-6 mb-10 px-4">
            {[
              { icon: Github, href: 'https://github.com/vipunsanjana' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/vipun' },
              { icon: Mail, href: 'mailto:vipunsanjana34@gmail.com' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`p-3 rounded-lg transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-blue-400' : 'bg-white text-gray-600 hover:bg-gray-50 hover:text-blue-600'} shadow-lg hover:shadow-xl`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* CSS */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .bg-grid-pattern {
          background-image:
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};

export default Hero;
