import React, { useState, useEffect } from 'react';
import {
  Code,
  Database,
  Server,
  Globe,
  Smartphone,
  Cloud,
  TerminalSquare,
  Layers,
  Settings,
  MonitorCheck,
  Brain,
  BadgeCheck,
  GitBranch,
  Wrench
} from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const techDetails = [
    { icon: TerminalSquare, title: 'Languages', content: 'Python, JavaScript/TypeScript, Java, SQL, Go, Ballerina, KQL, Dart, C, C++, PHP' },
    { icon: Layers, title: 'Frameworks', content: 'NestJS, FastAPI, Flask, Flutter, NodeJS, Angular, Spring Boot, React, React Native, Express' },
    { icon: Settings, title: 'DevOps Tools & Platforms', content: 'Git, Docker, GitHub Actions, Jenkins, Ansible, Terraform, Kubernetes' },
    { icon: Cloud, title: 'Cloud & Infrastructure', content: 'AWS, Azure' },
    { icon: Wrench, title: 'Scripting & Automation', content: 'Shell Scripting, Cron Jobs, Automation' },
    { icon: Database, title: 'Databases', content: 'MySQL, MongoDB, Firebase, MariaDB' },
    { icon: MonitorCheck, title: 'Tools & IDEs', content: 'Postman, Jira, LaTeX, VS Code, IntelliJ IDEA, Android Studio, Arduino IDE' },
    { icon: GitBranch, title: 'Platforms', content: 'Windows, Linux (Ubuntu, Kali), Arduino, ESP8266, Raspberry Pi' },
    { icon: Brain, title: 'Soft Skills', content: 'Problem Solving, Critical Thinking, Team Player, Communication, Continuous Learning' }
  ];

  return (
    <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Skills & Technologies
          </h2>
          <p className={`text-lg sm:text-xl px-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Technologies I work with
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {techDetails.map((tech, index) => (
            <div key={index} className={`flex items-start gap-4 p-4 rounded-xl ${darkMode ? 'bg-gray-900 text-gray-300' : 'bg-white text-gray-700'} shadow-md hover:shadow-lg`}>
              <tech.icon className={`w-6 h-6 mt-1 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
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
