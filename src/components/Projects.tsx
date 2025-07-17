import React from 'react';
import { Github, Calendar } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
    {
      title: 'Phishing Analysis & First-Response Automation',
      description: 'Comprehensive research project implementing automated phishing detection and response systems. Features real-time threat analysis, automated incident response workflows, and integration with multiple security platforms.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Ballerina', 'MongoDB', 'Docker', 'Azure Logic Apps', 'ServiceNow', 'OpenAI', 'KQL', 'Firebase', 'React', 'Google APIs'],
      githubUrl: 'Private Repository',
      date: '2025',
      category: 'Research',
      deployment: 'Choreo Platform'
    },
    {
      title: 'University Z-Score Analysis System',
      description: 'Advanced analytics platform analyzing island-wide Z-score data to recommend suitable university courses. Features comprehensive data processing, predictive analytics, and responsive course recommendation engine.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python FastAPI', 'Angular NX', 'AWS', 'CI/CD', 'Shell Scripting', 'Google Sheet API'],
      githubUrl: [
        'https://github.com/vipunsanjana/university-project-mobile-computing-backend.git',
        'https://github.com/vipunsanjana/university-project-mobile-computing-frontend.git'
      ],
      date: '2025',
      category: 'Mobile Computing',
      deployment: 'AWS with CI/CD'
    },
    {
      title: 'MediConnect - Medical Web Application',
      description: 'Full-stack medical web application enabling patients to book online doctor appointments and access essential health services. Built for local client with high-performance architecture and secure authentication.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['MERN Stack', 'Firebase Auth', 'Node.js', 'MongoDB', 'React TypeScript', 'AWS'],
      githubUrl: 'Private Repository',
      date: '2024',
      category: 'Full Stack',
      deployment: 'Production Live'
    },
    {
      title: 'Hospital Management System Backend',
      description: 'Robust backend system for hospital management with comprehensive patient records, appointment scheduling, and administrative features. Currently serving in production environment.',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
      githubUrl: 'Private Repository',
      date: '2024',
      category: 'Backend',
      deployment: 'Production Live'
    },
    {
      title: 'Real-Time Chat Application',
      description: 'High-performance real-time chat platform with instant messaging capabilities. Implemented socket-based communication for seamless user experience and real-time message delivery.',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['MERN Stack', 'WebSockets', 'Socket.io', 'MongoDB', 'React'],
      githubUrl: 'https://github.com/vipunsanjana/Real-time-chat-application',
      date: '2024',
      category: 'Full Stack',
      deployment: 'GitHub'
    },
    {
      title: 'IoT Agriculture Monitoring System',
      description: 'Smart irrigation system monitoring soil moisture, temperature, and humidity. Features real-time data visualization and remote control capabilities through mobile application.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['C++', 'NodeMCU ESP8266', 'Blynk IoT', 'Arduino IDE', 'Sensor Integration'],
      githubUrl: 'Private Repository',
      date: '2023',
      category: 'IoT',
      deployment: 'Blynk Platform'
    },
    {
      title: 'Land Sale Mobile Application',
      description: 'Cross-platform mobile application for real estate listings with real-time database synchronization. Users can browse, post, and manage land listings with live updates.',
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Firebase Realtime DB', 'Dart', 'Firebase Auth'],
      githubUrl: 'https://github.com/vipunsanjana/LandSalemobileApp',
      date: '2024',
      category: 'Mobile',
      deployment: 'Firebase'
    },
    {
      title: 'Advanced Task Management System',
      description: 'Enterprise-level task management system with role-based access control, JWT authentication, and comprehensive admin/employee dashboards for efficient workflow management.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Spring Boot', 'AngularJS', 'MySQL', 'JWT', 'REST API'],
      githubUrl: 'https://github.com/vipunsanjana/AdvancedTaskMangamentSystem.git',
      date: '2023',
      category: 'Full Stack',
      deployment: 'Self-hosted'
    },
    {
      title: 'Laundromat Service Mobile App',
      description: 'Custom mobile solution for local laundromat business enabling service scheduling, order tracking, and digital payment processing. Developed as freelance project with complete business integration.',
      image: 'https://images.pexels.com/photos/5591663/pexels-photo-5591663.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Flutter', 'Firebase', 'Payment Gateway', 'Push Notifications'],
      githubUrl: 'Private Repository',
      date: '2024',
      category: 'Mobile',
      deployment: 'Client Production'
    }
  ];

  return (
    <section id="projects" className={`py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Projects
          </h2>
          <div className={`w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full`}></div>
          <p className={`text-lg sm:text-xl px-4 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Real-world solutions and research implementations
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`cursor-pointer rounded-xl overflow-hidden ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-lg hover:shadow-xl transition-all duration-300 group`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    darkMode 
                      ? 'bg-gray-900/80 text-gray-200' 
                      : 'bg-white/80 text-gray-800'
                  }`}>
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    darkMode 
                      ? 'bg-blue-600/80 text-white' 
                      : 'bg-blue-600/80 text-white'
                  }`}>
                    {project.deployment}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`text-lg sm:text-xl font-bold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                </div>

                <p className={`text-xs sm:text-sm mb-4 leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies && project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        darkMode 
                          ? 'bg-gray-700 text-gray-300' 
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center">
                  {Array.isArray(project.githubUrl) ? (
                    <div className="flex flex-col w-full space-y-2">
                      {project.githubUrl.map((url, idx) => (
                        <a
                          key={idx}
                          href={url}
                          className={`flex items-center justify-center space-x-2 px-6 py-2 rounded-lg text-sm font-medium transition-colors w-full ${
                            darkMode 
                              ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4" />
                          <span>View Code {project.githubUrl.length > 1 ? idx + 1 : ''}</span>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <a
                      href={typeof project.githubUrl === 'string' ? project.githubUrl : '#'}
                      className={`flex items-center justify-center space-x-2 px-6 py-2 rounded-lg text-sm font-medium transition-colors w-full ${
                        project.githubUrl === 'Private Repository' || project.githubUrl === '#'
                          ? darkMode 
                            ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                          : darkMode 
                            ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      {...(project.githubUrl === 'Private Repository' || project.githubUrl === '#' 
                        ? { onClick: (e) => e.preventDefault() } 
                        : { target: '_blank', rel: 'noopener noreferrer' }
                      )}
                    >
                      <Github className="w-4 h-4" />
                      <span>
                        {project.githubUrl === 'Private Repository' 
                          ? 'Private Repository'  
                          : 'View Code'
                        }
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className={`mt-16 text-center p-8 rounded-xl ${
          darkMode ? 'bg-gray-800' : 'bg-gray-50'
        }`}>
          <h3 className={`text-xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Backend Development Expertise
          </h3>
          <p className={`text-sm ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Specialized in developing scalable backend modules using <strong>NestJS, Node js, Express, SpringBoot, Fast API, Flask, Ballerina and Go Lang</strong> framework, 
            with extensive experience in microservices architecture, API development, and cloud deployment strategies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;