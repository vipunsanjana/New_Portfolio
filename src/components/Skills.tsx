import React, { useState, useEffect } from 'react';
import {
  TerminalSquare,
  Layers,
  Settings,
  Cloud,
  Wrench,
  Database,
  MonitorCheck,
  GitBranch,
  Brain,
} from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.3 }
    );
    const element = document.getElementById('skills');
    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const techDetails = [
    { icon: TerminalSquare, title: 'Languages', content: 'Python, JavaScript/TypeScript, Java, SQL, Go, Ballerina, KQL, Dart, C, C++, PHP' },
    { icon: Layers, title: 'Frameworks', content: 'NestJS, FastAPI, Flask, Flutter, NodeJS, Angular, Spring Boot, React, React Native, Express' },
    { icon: Settings, title: 'DevOps Tools & Platforms', content: 'Git, Docker, GitHub Actions, Jenkins, Ansible, Terraform, Kubernetes, Argo CD learning' },
    { icon: Cloud, title: 'Cloud & Infrastructure', content: 'AWS, Oracle and Azure Learning' },
    { icon: Wrench, title: 'Scripting & Automation', content: 'Shell Scripting, Cron Jobs, Ansible Automation, Python Automation' },
    { icon: Database, title: 'Databases', content: 'MySQL, MongoDB, Firebase, MariaDB' },
    { icon: MonitorCheck, title: 'Tools & IDEs', content: 'Postman, Jira, LaTeX, VS Code, IntelliJ IDEA, Android Studio, Arduino IDE' },
    { icon: GitBranch, title: 'Platforms', content: 'Windows, Linux (Ubuntu, Kali), Arduino, ESP8266, Raspberry Pi Learning' },
    { icon: Brain, title: 'Soft Skills', content: 'Problem Solving, Critical Thinking, Team Player, Communication, Continuous Learning' }
  ];

  return (
    <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-white via-blue-50 to-white'}`}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-4xl md:text-5xl font-extrabold tracking-tight mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Skills & Technologies
          </h2>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Tools and tech I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ease-in-out">
          {techDetails.map((tech, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 p-6 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-105 ${
                darkMode
                  ? 'bg-gray-800/60 backdrop-blur-md border border-gray-700 text-gray-300 hover:border-blue-500'
                  : 'bg-white/60 backdrop-blur-md border border-gray-200 text-gray-800 hover:border-blue-600'
              }`}
            >
              <tech.icon
                className={`w-8 h-8 flex-shrink-0 mt-1 ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}
              />
              <div>
                <h4 className="text-lg font-semibold mb-1">{tech.title}</h4>
                <p className="text-sm leading-relaxed">{tech.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
