import React from 'react';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';

interface CertificationsProps {
  darkMode: boolean;
}

const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2024',
      credentialId: 'AWS-SAA-2024-001',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      verifyUrl: '#',
      skills: ['Cloud Architecture', 'AWS Services', 'Security', 'Scalability'],
      status: 'Active',
      description: 'Validates expertise in designing distributed systems on AWS platform with focus on security, reliability, and cost optimization.'
    },
    {
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2024',
      credentialId: 'GCP-PD-2024-002',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400',
      verifyUrl: '#',
      skills: ['GCP Services', 'Kubernetes', 'DevOps', 'Microservices'],
      status: 'Active',
      description: 'Demonstrates ability to design, build, and deploy applications on Google Cloud Platform using best practices.'
    },
    {
      title: 'Microsoft Azure Developer Associate',
      issuer: 'Microsoft',
      date: '2023',
      credentialId: 'AZ-204-2023-003',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
      verifyUrl: '#',
      skills: ['Azure Services', 'API Development', 'Security', 'Monitoring'],
      status: 'Active',
      description: 'Validates skills in developing cloud solutions that span compute, storage, security, and monitoring on Azure.'
    },
    {
      title: 'Certified Kubernetes Administrator',
      issuer: 'Cloud Native Computing Foundation',
      date: '2023',
      credentialId: 'CKA-2023-004',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      verifyUrl: '#',
      skills: ['Kubernetes', 'Container Orchestration', 'DevOps', 'Linux'],
      status: 'Active',
      description: 'Demonstrates expertise in Kubernetes administration including cluster management, networking, and troubleshooting.'
    },
    {
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB Inc.',
      date: '2023',
      credentialId: 'MDB-DEV-2023-005',
      image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=400',
      verifyUrl: '#',
      skills: ['MongoDB', 'NoSQL', 'Database Design', 'Performance Tuning'],
      status: 'Active',
      description: 'Validates proficiency in MongoDB development including data modeling, querying, and performance optimization.'
    },
    {
      title: 'React Developer Certification',
      issuer: 'Meta (Facebook)',
      date: '2022',
      credentialId: 'META-REACT-2022-006',
      image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=400',
      verifyUrl: '#',
      skills: ['React', 'JavaScript', 'Frontend Development', 'State Management'],
      status: 'Active',
      description: 'Comprehensive certification covering React fundamentals, advanced patterns, and modern development practices.'
    }
  ];

  return (
    <section id="certifications" className={`py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Certifications & Achievements
          </h2>
          <p className={`text-lg sm:text-xl px-4 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Professional certifications and industry recognition
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-lg hover:shadow-xl transition-all duration-300 group border ${
                darkMode ? 'border-gray-700' : 'border-gray-100'
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${
                    cert.status === 'Active' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                  }`}>
                    <CheckCircle className="w-3 h-3" />
                    <span>{cert.status}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Award className={`w-6 h-6 ${
                    darkMode ? 'text-yellow-400' : 'text-yellow-500'
                  }`} />
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="mb-4">
                  <h3 className={`text-base sm:text-lg font-bold mb-2 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {cert.title}
                  </h3>
                  <p className={`text-xs sm:text-sm font-medium ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}>
                    {cert.issuer}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 text-xs sm:text-sm space-y-1 sm:space-y-0">
                  <div className={`flex items-center space-x-1 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    <Calendar className="w-4 h-4" />
                    <span>{cert.date}</span>
                  </div>
                  <span className={`text-xs ${
                    darkMode ? 'text-gray-500' : 'text-gray-500'
                  }`}>
                    ID: {cert.credentialId}
                  </span>
                </div>

                <p className={`text-xs sm:text-sm mb-4 leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {cert.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        darkMode 
                          ? 'bg-gray-700 text-gray-300' 
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={cert.verifyUrl}
                  className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors w-full justify-center ${
                    darkMode 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Verify Certificate</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center p-6 sm:p-8 rounded-xl mx-4 ${
          darkMode ? 'bg-gray-800' : 'bg-gray-50'
        }`}>
          <h3 className={`text-xl sm:text-2xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Continuous Learning
          </h3>
          <p className={`text-base sm:text-lg mb-6 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            I'm committed to staying current with the latest technologies and industry best practices.
            Currently pursuing additional certifications in AI/ML and advanced cloud architectures.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['AI/ML Specialization', 'Advanced DevOps', 'Cybersecurity', 'Internet Of Things'].map((course, index) => (
              <span
                key={index}
                className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium ${
                  darkMode 
                    ? 'bg-gray-700 text-blue-400 border border-gray-600' 
                    : 'bg-blue-100 text-blue-800 border border-blue-200'
                }`}
              >
                📚 {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;