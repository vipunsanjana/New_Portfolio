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
  Code2,
  FileCode,
  Zap,
  Server,
  Globe,
  Smartphone,
  Cpu,
  Package,
  Terminal,
  Container,
  GitMerge,
  Workflow,
  CloudCog,
  HardDrive,
  FileText,
  Monitor,
  Laptop,
  Lightbulb,
  Users,
  MessageSquare,
  Target,
  BookOpen
} from 'lucide-react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Technology-specific icons mapping
  const techIcons: { [key: string]: any } = {
    // Languages
    'Python': Code2,
    'JavaScript/TypeScript': FileCode,
    'Java': Cpu,
    'SQL': Database,
    'Go': Zap,
    'Ballerina': Globe,
    'KQL': Terminal,
    'Dart': Smartphone,
    'C': Code2,
    'C++': Code2,
    'PHP': Server,
    
    // Frameworks
    'NestJS': Server,
    'FastAPI': Zap,
    'Flask': Code2,
    'Flutter': Smartphone,
    'NodeJS': Server,
    'Angular': Globe,
    'Spring Boot': Cpu,
    'React': Globe,
    'React Native': Smartphone,
    'Express': Server,
    
    // DevOps
    'Git': GitMerge,
    'Docker': Container,
    'GitHub Actions': Workflow,
    'Jenkins': Settings,
    'Ansible': CloudCog,
    'Terraform': Cloud,
    'Kubernetes': Container,
    'Argo CD learning': GitMerge,
    
    // Cloud
    'AWS': Cloud,
    'Oracle': Database,
    'Azure Learning': CloudCog,
    
    // Scripting
    'Shell Scripting': Terminal,
    'Cron Jobs': Settings,
    'Ansible Automation': CloudCog,
    'Python Automation': Code2,
    
    // Databases
    'MySQL': Database,
    'MongoDB': HardDrive,
    'Firebase': Cloud,
    'MariaDB': Database,
    
    // Tools
    'Postman': Globe,
    'Jira': Package,
    'LaTeX': FileText,
    'VS Code': Monitor,
    'IntelliJ IDEA': Laptop,
    'Android Studio': Smartphone,
    'Arduino IDE': Cpu,
    
    // Platforms
    'Windows': Monitor,
    'Linux (Ubuntu, Kali)': Terminal,
    'Arduino': Cpu,
    'ESP8266': Zap,
    'Raspberry Pi Learning': Cpu,
    
    // Soft Skills
    'Problem Solving': Lightbulb,
    'Critical Thinking': Target,
    'Team Player': Users,
    'Communication': MessageSquare,
    'Continuous Learning': BookOpen
  };
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

  const parseSkills = (content: string) => {
    return content.split(', ').map(skill => skill.trim());
  };

  return (
    <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-white via-blue-50 to-white'}`}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className={`text-4xl md:text-5xl font-extrabold tracking-tight mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Tools and tech I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 transition-all duration-1000 ease-in-out">
          {techDetails.map((tech, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
                darkMode
                  ? 'bg-gray-800/60 backdrop-blur-md border border-gray-700 hover:border-blue-500'
                  : 'bg-white/80 backdrop-blur-md border border-gray-200 hover:border-blue-400 shadow-lg hover:shadow-xl'
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Header with Icon and Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-xl ${
                  darkMode ? 'bg-blue-500/20' : 'bg-blue-100'
                }`}>
                  <tech.icon className={`w-6 h-6 ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                </div>
                <h4 className={`text-xl font-bold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {tech.title}
                </h4>
              </div>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2">
                {parseSkills(tech.content).map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 ${
                      darkMode
                        ? 'bg-gray-700/80 text-gray-200 hover:bg-blue-600/30 hover:text-blue-300'
                        : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                    }`}
                    style={{
                      animationDelay: `${index * 100 + skillIndex * 50}ms`
                    }}
                  >
                    {techIcons[skill] && (() => {
                      const IconComponent = techIcons[skill];
                      return <IconComponent className="w-4 h-4" />;
                    })()}
                  <span
                      className="whitespace-nowrap"
                    >
                      {skill}
                    </span>
                  </div>
                ))}
              </div>

              {/* Skill Count Badge */}
              <div className="mt-4 flex justify-between items-center">
                <span className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {parseSkills(tech.content).length} skills
                </span>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'
                }`}>
                  {tech.title.split(' ')[0]}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl ${
                darkMode
                  ? 'bg-gradient-to-br from-blue-600/10 to-purple-600/10'
                  : 'bg-gradient-to-br from-blue-50/50 to-purple-50/50'
              }`} />

              {/* Decorative Corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 opacity-10 ${
                darkMode ? 'text-blue-400' : 'text-blue-600'
              }`}>
                <tech.icon className="w-full h-full transform rotate-12 translate-x-6 -translate-y-6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;