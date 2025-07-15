import React from 'react';
import { ExternalLink } from 'lucide-react';

interface CertificationsProps {
  darkMode: boolean;
}

const Certifications: React.FC<CertificationsProps> = ({ darkMode }) => {
  const licenses = [
    {
      title: 'Getting Started With Ansible',
      issuer: 'Simplilearn',
      date: 'Jul 2025',
      logo: '/Simplilearn_Logo.jpg',
      skills: ['Ansible', 'Automation'],
      verifyUrl: 'simpli-web.app.link/e/tZHLLSCEWUb',
    },
    {
      title: 'Oracle MySQL HeatWave Certification',
      issuer: 'Oracle',
      date: 'Pending',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
      skills: ['MySQL', 'HeatWave', 'Cloud Database'],
      verifyUrl: '#',
      status: 'Pending',
    },
    {
      title: 'Oracle Cloud Infrastructure 2025 Foundations Associate (1Z0-1085-25)',
      issuer: 'Oracle',
      date: 'Jul 2025',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
      skills: ['Cloud Infrastructure', 'Oracle Cloud', 'Cloud Computing'],
      verifyUrl: 'https://mylearn.oracle.com/ou/learning-path/become-an-oci-foundations-associate-2025/148056',
    },
    {
      title: 'Oracle Cloud Infrastructure For AWS Architects - 2025',
      issuer: 'Oracle',
      date: 'Jul 2025',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg',
      skills: ['Cloud Infrastructure', 'AWS', 'OCI'],
      verifyUrl: 'https://mylearn.oracle.com/ou/learning-path/oci-for-aws-architects-2025/145594',
    },
    {
      title: 'AWS Educate Getting Started with Serverless',
      issuer: 'Amazon Web Services (AWS)',
      date: 'Jun 2025',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
      skills: ['AWS', 'Serverless', 'Cloud'],
      verifyUrl: 'https://www.credly.com/badges/c6be0d43-8416-445d-86ee-4ee6098dcda4/public_url',
    },
    {
      title: 'AWS Getting Started with Security',
      issuer: 'Amazon Web Services (AWS)',
      date: 'Jun 2025',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
      skills: ['AWS', 'Cloud Security'],
      verifyUrl: 'https://www.credly.com/badges/1b27c464-d795-4499-9f86-4d29abd7466b/public_url',
    },
    {
      title: 'Describe Cloud Computing',
      issuer: 'Microsoft',
      date: 'Jun 2025',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      skills: [],
      verifyUrl: 'https://learn.microsoft.com/api/achievements/share/en-us/VIPUNSANJANAJAYATHUNGA-8962/QS8J8C9E?sharingId=5E468DF1804EB536',
    },
    {
      title: 'Describe Cloud Service Types',
      issuer: 'Microsoft',
      date: 'Jun 2025',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      skills: [],
      verifyUrl: 'https://learn.microsoft.com/api/achievements/share/en-us/VIPUNSANJANAJAYATHUNGA-8962/QS8J8C9E?sharingId=5E468DF1804EB536',
    },
    {
      title: 'Describe Cost Management in Azure',
      issuer: 'Microsoft',
      date: 'Jun 2025',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      skills: [],
      verifyUrl: 'https://learn.microsoft.com/api/achievements/share/en-us/VIPUNSANJANAJAYATHUNGA-8962/4GF5Y5AK?sharingId=5E468DF1804EB536',
    },
    {
      title: 'Describe Monitoring Tools in Azure',
      issuer: 'Microsoft',
      date: 'Jun 2025',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      skills: [],
      verifyUrl: 'https://learn.microsoft.com/api/achievements/share/en-us/VIPUNSANJANAJAYATHUNGA-8962/FMS2LBRX?sharingId=5E468DF1804EB536',
    },
    {
      title: 'Manage Security Controls for Identity and Access',
      issuer: 'Microsoft',
      date: 'Jun 2025',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      skills: [],
      verifyUrl: 'https://learn.microsoft.com/api/achievements/share/en-us/VIPUNSANJANAJAYATHUNGA-8962/UR4XDYN3?sharingId=5E468DF1804EB536',
    },
    {
      title: 'Microsoft Certified: Azure Fundamentals: Describe Azure Management and Governance',
      issuer: 'Microsoft',
      date: 'Jun 2025',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      skills: [],
      verifyUrl: 'https://learn.microsoft.com/api/achievements/share/en-us/VIPUNSANJANAJAYATHUNGA-8962/CXEN42H9?sharingId=5E468DF1804EB536',
    },
    {
      title: 'Microsoft Certified: Azure Fundamentals: Describe Cloud Concepts',
      issuer: 'Microsoft',
      date: 'Jun 2025',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      skills: [],
      verifyUrl: 'https://learn.microsoft.com/api/achievements/share/en-us/VIPUNSANJANAJAYATHUNGA-8962/UR4XKTJ3?sharingId=5E468DF1804EB536',
    },
    {
      title: 'AWS Educate Getting Started with Databases',
      issuer: 'Amazon Web Services (AWS)',
      date: 'May 2025',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
      skills: [],
      verifyUrl: 'https://www.credly.com/badges/d258705d-baa8-44d5-bac8-b0ac27fbacc7/public_url',
    },
    {
      title: 'AWS Educate Getting Started with Networking',
      issuer: 'Amazon Web Services (AWS)',
      date: 'May 2025',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
      skills: [],
      verifyUrl: 'https://www.credly.com/badges/dcd05a69-a8d5-4437-91ab-60e66d4c8f06/public_url',
    },
    {
      title: 'A – Z DevOps Course | Comprehensive Journey from Beginner to Expert',
      issuer: 'ClouDev Technologies',
      date: 'Apr 2025',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV4So0vlPtGs6LOYUC9cvHnD4i5XM4b5bLfA&s',
      skills: ['DevOps'],
      verifyUrl: '',
    },
    {
      title: 'AWS Educate - Introduction to Cloud 101',
      issuer: 'Amazon Web Services (AWS)',
      date: 'Apr 2025',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
      skills: [],
      verifyUrl: 'https://www.credly.com/badges/42f11e7d-abeb-4381-9f47-76aff8f8de90/public_url',
    },
    {
      title: 'AWS Educate Getting Started With Compute',
      issuer: 'Amazon Web Services (AWS)',
      date: 'Apr 2025',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
      skills: ['Amazon Web Services (AWS)', 'Amazon EC2'],
      verifyUrl: 'https://www.credly.com/badges/42f11e7d-abeb-4381-9f47-76aff8f8de90/public_url',
    },
    {
      title: 'AWS Getting Started With Storage',
      issuer: 'Amazon Web Services (AWS)',
      date: 'Apr 2025',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg',
      skills: [],
      verifyUrl: 'https://www.credly.com/badges/2a52e42d-2eab-4d51-81c0-d5bdde698a26/public_url',
    },
    {
      title: 'Describe Features and Tools for Managing and Deploying Azure Resources',
      issuer: 'Microsoft',
      date: 'Jun 2025',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      skills: [],
      verifyUrl: 'https://learn.microsoft.com/api/achievements/share/en-us/VIPUNSANJANAJAYATHUNGA-8962/8ZDATQJW?sharingId=5E468DF1804EB536',
    },
  ];

  return (
    <section
      id="certifications"
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}
    >
      <div className="container mx-auto px-4">
        {/* Licenses & Certifications Section */}
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Licenses & Certifications
          </h2>
          <p
            className={`text-lg sm:text-xl px-4 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            Professional certifications and industry recognition
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4 mb-20">
          {licenses.map((license, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              } shadow-lg border ${
                darkMode ? 'border-gray-700' : 'border-gray-100'
              } transition-transform duration-300 hover:shadow-xl hover:scale-105 cursor-pointer`}
            >
              <div className="p-6 flex flex-col items-center text-center">
                <img
                  src={license.logo}
                  alt={license.issuer}
                  className="h-12 mb-4 object-contain"
                />
                <h3
                  className={`font-bold text-lg mb-1 ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {license.title}
                </h3>
                <p
                  className={`text-xs sm:text-sm font-medium mb-1 ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  {license.issuer}
                </p>
                <p
                  className={`text-xs mb-3 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  Issued {license.date}
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {license.skills.map((skill, i) => (
                    <span
                      key={i}
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        darkMode
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-100 text-gray-700'
                      } transition-colors duration-200 hover:${
                        darkMode ? 'bg-gray-600 text-white' : 'bg-gray-300'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
       {license.verifyUrl && license.verifyUrl !== '#' && (
                <a
                  href={license.verifyUrl}
                  className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors w-full justify-center ${
                    darkMode
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Verify</span>
                </a>
              )}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 text-center p-6 sm:p-8 rounded-xl mx-4 ${
            darkMode ? 'bg-gray-800' : 'bg-gray-50'
          }`}
        >
          <h3
            className={`text-xl sm:text-2xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            Continuous Learning
          </h3>
          <p
            className={`text-base sm:text-lg mb-6 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            I'm committed to staying current with the latest technologies and
            industry best practices. Currently pursuing additional
            certifications in AI/ML and advanced cloud architectures.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'AI/ML Specialization',
              'Advanced DevOps',
              'Cybersecurity',
              'Internet Of Things',
            ].map((course, index) => (
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
