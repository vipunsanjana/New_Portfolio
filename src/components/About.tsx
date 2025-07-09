import React from 'react';
import { Code, Heart, Users } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '100+' },
    { icon: Users, label: 'Happy Clients', value: '5+' },
    { icon: Heart, label: 'Years of Experience', value: '5+' },
    { icon: Code, label: 'Available Technologies', value: '20K+' }
  ];

  return (
    <section id="about" className={`py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <p className={`text-lg sm:text-xl px-4 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Get to know me better
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold px-4 md:px-0 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Passionate Developer & Problem Solver
            </h3>
            <p className={`text-base sm:text-lg leading-relaxed px-4 md:px-0 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm <strong>Vipun Sanjana</strong>, a final year Software Engineering student at the University of Kelaniya and a former Software Engineer Intern at <strong>WSO2</strong>. Currently, I'm diving deep into <strong>DevOps</strong> and <strong>Machine Learning</strong>, constantly pushing my boundaries to learn and build impactful systems.
            </p>
            <p className={`text-base sm:text-lg leading-relaxed px-4 md:px-0 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm a dedicated software engineer with a passion for creating innovative solutions 
              that bridge the gap between complex technical challenges and user-friendly experiences. 
              My journey in technology started with curiosity and has evolved into a career driven 
              by continuous learning and excellence.
            </p>
            <p className={`text-base sm:text-lg leading-relaxed px-4 md:px-0 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community. I believe 
              in writing clean, maintainable code and creating applications that make a real 
              difference in people's lives.
            </p>

            <div className="flex flex-wrap gap-2 sm:gap-3 px-4 md:px-0">
              {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Java', 'Python', 'AWS', 'Go', 'Shell', 'CI/CD', 'Terraform'].map((tech) => (
                <span
                  key={tech}
                  className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium ${
                    darkMode 
                      ? 'bg-gray-800 text-blue-400 border border-gray-700' 
                      : 'bg-blue-100 text-blue-800 border border-blue-200'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className={`p-6 sm:p-8 rounded-2xl mx-4 md:mx-0 ${
            darkMode ? 'bg-gray-800' : 'bg-gray-50'
          } relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full transform translate-x-16 -translate-y-16 opacity-20"></div>
            <div className="relative z-10">
              <h4 className={`text-lg sm:text-xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Fun Facts About Me
              </h4>
              <ul className={`space-y-3 text-sm sm:text-base ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>I write clean, documented code</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Love solving complex algorithms</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Always learning new technologies</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span>Believer in agile methodologies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-4 sm:p-6 rounded-xl ${
                darkMode ? 'bg-gray-800' : 'bg-gray-50'
              } transition-transform hover:scale-105`}
            >
              <stat.icon className={`w-6 sm:w-8 h-6 sm:h-8 mx-auto mb-3 sm:mb-4 ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`} />
              <div className={`text-2xl sm:text-3xl font-bold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {stat.value}
              </div>
              <div className={`text-xs sm:text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
