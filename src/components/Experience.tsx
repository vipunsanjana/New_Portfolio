import React from 'react';
import { MapPin, Calendar, Building } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const experiences = [
  {
    title: 'Former Intern - Software Engineer',
    company: 'WSO2 Cloud Security Operations Center',
    location: 'Colombo',
    period: 'Oct 2024 - Apr 2025',
    description: 'Contributed to cloud security initiatives with a focus on automation, observability, and scalable backend and frontend solutions.',
    achievements: [
      'Built monitoring dashboards using Azure Log Analytics and Firebase',
      'Worked on secure API integration using Ballerina and Choreo platform',
      'Assisted in backend and frontend development with scalable cloud-first architecture'
    ],
    technologies: ['Python', 'Ballerina', 'React', 'Docker', 'MongoDB', 'Firebase', 'Choreo', 'MySQL', 'Azure', 'Log Analytics']
  },
  {
    title: 'Software Developer',
    company: 'Crytec Labs',
    location: 'Remote',
    period: 'Feb 2024 - Aug 2024',
    description: 'Developed and maintained backend services for internal products using NestJS and modern TypeScript stack.',
    achievements: [
      'Designed RESTful APIs with NestJS and integrated with MySQL databases',
      'Improved backend response time by optimizing middleware and query layers',
      'Collaborated with frontend teams to deliver end-to-end features'
    ],
    technologies: ['NestJS', 'TypeScript', 'MySQL']
  },
  
];


  return (
    <section id="experience" className={`py-20 ${
      darkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Work Experience
          </h2>
          <div className={`w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full`}></div>
          <p className={`text-lg sm:text-xl px-4 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            My professional journey
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 ${
              darkMode ? 'bg-gray-700' : 'bg-gray-300'
            }`}></div>

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full ${
                  darkMode ? 'bg-blue-600' : 'bg-blue-600'
                } flex items-center justify-center z-10`}>
                  <Building className="w-4 h-4 text-white" />
                </div>

                <div className={`w-full md:w-1/2 ml-12 md:ml-0 mr-4 md:mr-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className={`p-4 sm:p-6 rounded-xl ${
                    darkMode ? 'bg-gray-900' : 'bg-white'
                  } shadow-lg hover:shadow-xl transition-shadow`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className={`text-lg sm:text-xl font-bold mb-1 ${
                          darkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                          {exp.title}
                        </h3>
                        <p className={`text-base sm:text-lg font-semibold ${
                          darkMode ? 'text-blue-400' : 'text-blue-600'
                        }`}>
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col space-y-1 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-4 mb-4 text-xs sm:text-sm">
                      <div className={`flex items-center space-x-1 ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                      <div className={`flex items-center space-x-1 ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className={`mb-4 text-sm sm:text-base ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className={`font-semibold mb-2 text-sm sm:text-base ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        Key Achievements:
                      </h4>
                      <ul className={`space-y-1 ${
                        darkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-2">
                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-xs sm:text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-2 py-1 rounded text-xs font-medium ${
                            darkMode 
                              ? 'bg-gray-800 text-gray-300' 
                              : 'bg-gray-100 text-gray-700'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;