import React from 'react';
import { Code, Heart, Users, Award, Zap, Target, Lightbulb, Coffee, Rocket, Star, BookOpen, Globe } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '15+', color: 'from-blue-500 to-cyan-500' },
    { icon: Users, label: 'Happy Clients', value: '5+', color: 'from-green-500 to-emerald-500' },
    { icon: Heart, label: 'Years of Experience', value: '3+', color: 'from-purple-500 to-pink-500' },
    { icon: Award, label: 'Technologies Mastered', value: '20+', color: 'from-orange-500 to-red-500' }
  ];

  const achievements = [
    { icon: Rocket, title: 'WSO2 Software Engineer Intern', desc: 'Gained industry experience at leading tech company' },
    { icon: Star, title: 'Research Excellence', desc: 'Completed major phishing analysis automation research' },
    { icon: Target, title: 'Production Systems', desc: 'Deployed live systems serving real users' },
    { icon: Globe, title: 'Open Source Contributor', desc: 'Contributing to developer community' }
  ];

  const interests = [
    { icon: Lightbulb, name: 'AI & Machine Learning', color: 'text-yellow-500' },
    { icon: Zap, name: 'DevOps & Automation', color: 'text-blue-500' },
    { icon: BookOpen, name: 'Research & Innovation', color: 'text-green-500' },
    { icon: Coffee, name: 'Clean Code Practices', color: 'text-purple-500' }
  ];

  return (
    <section id="about" className={`py-16 relative overflow-hidden ${
      darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-indigo-50'
    }`}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className={`absolute top-20 left-10 w-72 h-72 ${
        darkMode ? 'bg-blue-500/10' : 'bg-blue-500/5'
      } rounded-full blur-3xl`}></div>
      <div className={`absolute bottom-20 right-10 w-96 h-96 ${
        darkMode ? 'bg-purple-500/10' : 'bg-purple-500/5'
      } rounded-full blur-3xl`}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <div className={`w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full`}></div>
          <p className={`text-lg sm:text-xl px-4 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Passionate developer crafting innovative solutions
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">
          {/* Left Column - Story & Skills */}
          <div className="space-y-6">
            {/* Story Section */}
            <div className={`p-6 rounded-2xl backdrop-blur-sm border ${
              darkMode 
                ? 'bg-gray-800/50 border-gray-700' 
                : 'bg-white/70 border-gray-200'
            } shadow-xl hover:shadow-2xl transition-all duration-300`}>
              <h3 className={`text-2xl md:text-3xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                My Journey
              </h3>
               <br></br>
              <div className="space-y-3">
                <p className={`text-base leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  I'm <span className="font-semibold text-blue-500">Vipun Sanjana</span>, a final year Software Engineering student at the University of Kelaniya and former Software Engineer Intern at <span className="font-semibold text-purple-500">WSO2</span>. My passion lies in creating innovative solutions that bridge complex technical challenges with user-friendly experiences.
                </p>
                 <br></br>
                <p className={`text-base leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Currently diving deep into <span className="font-semibold text-green-500">DevOps</span> and <span className="font-semibold text-orange-500">Machine Learning</span>, I'm constantly pushing boundaries to learn and build impactful systems. My journey started with curiosity and has evolved into a career driven by continuous learning and excellence.
                </p>
                <br></br>
                <p className={`text-base leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in writing clean, maintainable code that makes a real difference.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Achievements & Interests */}
          <div className="space-y-6">
            {/* Achievements */}
            <div className={`p-6 rounded-2xl backdrop-blur-sm border ${
              darkMode 
                ? 'bg-gray-800/50 border-gray-700' 
                : 'bg-white/70 border-gray-200'
            } shadow-xl`}>
              <h4 className={`text-xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Key Achievements
              </h4>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-4 group hover:scale-105 transition-transform duration-300">
                    <div className={`p-3 rounded-lg ${
                      darkMode ? 'bg-gray-700' : 'bg-gray-100'
                    } group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300`}>
                      <achievement.icon className={`w-5 h-5 ${
                        darkMode ? 'text-blue-400 group-hover:text-white' : 'text-blue-600 group-hover:text-white'
                      }`} />
                    </div>
                    <div>
                      <h5 className={`font-semibold ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {achievement.title}
                      </h5>
                      <p className={`text-sm ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {achievement.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className={`p-6 rounded-2xl backdrop-blur-sm border ${
              darkMode 
                ? 'bg-gray-800/50 border-gray-700' 
                : 'bg-white/70 border-gray-200'
            } shadow-xl`}>
              <h4 className={`text-xl font-bold mb-6 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Current Interests
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <div key={index} className={`p-4 rounded-lg ${
                    darkMode ? 'bg-gray-700/50' : 'bg-gray-50'
                  } hover:scale-105 transition-all duration-300 group cursor-pointer`}>
                    <interest.icon className={`w-6 h-6 ${interest.color} mb-2 group-hover:animate-bounce`} />
                    <p className={`text-sm font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {interest.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-4 rounded-2xl backdrop-blur-sm border ${
                darkMode 
                  ? 'bg-gray-800/50 border-gray-700' 
                  : 'bg-white/70 border-gray-200'
              } shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group cursor-pointer`}
            >
              <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center group-hover:animate-pulse`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className={`text-sm font-medium ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style>{`
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

export default About;