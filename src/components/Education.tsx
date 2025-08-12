import React from 'react';
import { GraduationCap, School, BadgeCheck } from 'lucide-react';

interface EducationProps {
  darkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ darkMode }) => {
  const educationData = [
    {
      icon: School,
      title: "G.C.E. Advanced Level",
      institution: "Sripalee College, Horana",
      year: "2020",
      stream: "Physical Science",
      result: "A - Combined Maths | B - Physics | B - Chemistry, Z-Score - 1.6"
    },
    {
      icon: GraduationCap,
      title: "B.Sc (Software Engineering) Hon's",
      institution: "University of Kelaniya",
      year: "2022 - Present",
      stream: "Net Centric Applications domain, Mobile Computing Applications domain, Data Science and Engineering Applications domain"
    },
    {
      icon: BadgeCheck,
      title: "DevOps Engineering Certification",
      institution: "Learnfi",
      year: "Aug 2025 - Present",
      skills: [
        "AWS Cloud", "Amazon EC2", "Amazon ECR", "Amazon ECS",
        "Nginx", "GitHub Actions", "Docker", "Grafana", "Amazon CloudWatch"
      ]
    },
    {
      icon: BadgeCheck,
      title: "DevOps Engineering Certification",
      institution: "ClouDev Technologies",
      year: "Oct 2024 - Jan 2025",
      skills: [
        "Kubernetes", "Shell Scripting", "Jenkins", "Docker",
        "Microsoft Azure", "CI/CD", "AWS"
      ]
    },
    {
      icon: BadgeCheck,
      title: "Computer Software Engineering Certification",
      institution: "Miha Institute",
      year: "Feb 2023 - Aug 2023",
      skills: ["MongoDB", "Flutter", "JavaScript"]
    },
    {
      icon: BadgeCheck,
      title: "Computer Programming, Specific Applications",
      institution: "Academy of Future Robotics",
      year: "Dec 2020 - Jul 2021",
      skills: [
        "PHP", "Arduino IDE", "MySQL", "Python",
        "Java Application Development", "C++"
      ]
    }
  ];

  return (
    <section
      id="education"
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Education & Certifications
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            My academic journey and professional certifications
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`group p-6 sm:p-8 rounded-xl shadow-xl transform transition-all duration-300 
                hover:scale-105 relative overflow-hidden
                ${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-50 text-gray-800'}
              `}
            >
              {/* Glow Background */}
              <div
                className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition duration-500
                  ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}
                `}
              ></div>

              {/* Header with Icon */}
              <div className="flex items-center space-x-4 mb-4 relative z-10">
                <div
                  className={`p-3 rounded-full border transition-colors duration-300
                    ${darkMode
                      ? 'bg-gray-700 border-gray-600 group-hover:bg-blue-500'
                      : 'bg-white border-gray-200 group-hover:bg-blue-100'}
                  `}
                >
                  <edu.icon
                    className={`w-6 h-6 transition-colors duration-300 ${
                      darkMode
                        ? 'text-blue-400 group-hover:text-white'
                        : 'text-blue-600 group-hover:text-blue-700'
                    }`}
                  />
                </div>
                <h3 className="text-xl font-bold">{edu.title}</h3>
              </div>

              {/* Institution & Year */}
              <p className="font-semibold relative z-10">{edu.institution}</p>
              <p className="text-sm italic text-gray-400 relative z-10">{edu.year}</p>

              {/* Stream & Result */}
              {edu.stream && (
                <p className="mt-2 text-sm relative z-10">{edu.stream}</p>
              )}
              {edu.result && (
                <p className="mt-1 text-sm font-mono relative z-10">{edu.result}</p>
              )}

              {/* Skills */}
              {edu.skills && (
                <div className="flex flex-wrap gap-2 mt-3 relative z-10">
                  {edu.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 text-xs rounded-full border ${
                        darkMode
                          ? 'bg-gray-700 border-gray-600 text-gray-300'
                          : 'bg-white border-gray-200 text-gray-800'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
