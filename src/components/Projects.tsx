import React from 'react';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, inventory management, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
      githubUrl: '#',
      liveUrl: '#',
      date: '2024',
      category: 'Full Stack'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, team workspaces, and advanced filtering. Built with modern React and Firebase.',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Firebase', 'TypeScript', 'Tailwind CSS'],
      githubUrl: '#',
      liveUrl: '#',
      date: '2024',
      category: 'Frontend'
    },
    {
      title: 'Weather Analytics Dashboard',
      description: 'Real-time weather data visualization dashboard with interactive charts, historical data analysis, and location-based forecasting.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'D3.js', 'Express.js', 'MongoDB'],
      githubUrl: '#',
      liveUrl: '#',
      date: '2023',
      category: 'Full Stack'
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication, transaction history, and financial analytics. Built with React Native.',
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Node.js', 'JWT', 'SQLite'],
      githubUrl: '#',
      liveUrl: '#',
      date: '2023',
      category: 'Mobile'
    },
    {
      title: 'AI Content Generator',
      description: 'AI-powered content generation tool with multiple templates, real-time preview, and export functionality. Integrated with OpenAI API.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'OpenAI API', 'Prisma', 'PostgreSQL'],
      githubUrl: '#',
      liveUrl: '#',
      date: '2023',
      category: 'Full Stack'
    },
    {
      title: 'Real Estate Platform',
      description: 'Comprehensive real estate platform with property listings, virtual tours, mortgage calculator, and agent dashboard.',
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Django', 'PostgreSQL', 'AWS S3'],
      githubUrl: '#',
      liveUrl: '#',
      date: '2022',
      category: 'Full Stack'
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
          <p className={`text-lg sm:text-xl px-4 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Some of my recent work
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden ${
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
                  {project.technologies.map((tech, techIndex) => (
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

                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                  <a
                    href={project.githubUrl}
                    className={`flex items-center justify-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      darkMode 
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    className={`flex items-center justify-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      darkMode 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;