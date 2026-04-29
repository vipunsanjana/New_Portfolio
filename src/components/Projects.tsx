import React from 'react';
import { Github, Calendar } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const projects = [
    {
      title: 'NDB Bank API Integration Platform',
      description: 'Developed and deployed secure API gateways to facilitate seamless communication between core banking systems and third-party services. Applied advanced security policies, optimized payload routing, and enabled detailed API analytics.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['WSO2 API Manager', 'WSO2 Micro Integrator', 'JSON/XML', 'Postman', 'Security Policies'],
      githubUrl: 'Private Repository',
      date: '2026',
      category: 'Enterprise Integration',
      deployment: 'Production Live'
    },
    {
      title: 'Tradesteam Backend Web Services',
      description: 'Architected and developed scalable, high-performance backend web services using Python to handle complex business logic and data processing for the Tradesteam financial platform.',
      image: 'https://images.pexels.com/photos/7567565/pexels-photo-7567565.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'FastAPI', 'RESTful Architecture', 'MongoDB', 'Docker', 'Microservices'],
      githubUrl: 'Private Repository',
      date: '2026',
      category: 'Backend Development',
      deployment: 'Production Live'
    },
    {
      title: 'DFCC Bank API Management Gateway',
      description: 'Designed and implemented an enterprise-grade API Management solution to securely expose and manage core banking APIs. Focused on high availability, robust rate limiting, and secure authentication for fintech integrations.',
      image: 'https://images.pexels.com/photos/259209/pexels-photo-259209.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['WSO2 API Manager', 'OAuth 2.0', 'REST APIs', 'Linux', 'Performance Tuning'],
      githubUrl: 'Private Repository',
      date: '2025',
      category: 'Enterprise Integration & Fintech',
      deployment: 'Production Live'
    },
    {
      title: 'Cambodian Banking APIM Migration',
      description: 'Spearheaded the complex migration of legacy banking API gateways to a modernized WSO2 API Management platform. Ensured zero-downtime transition, handled environment synchronization, and established automated deployment pipelines.',
      image: 'https://images.pexels.com/photos/730564/pexels-photo-730564.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['WSO2 API Manager', 'CI/CD', 'Bash Scripting', 'API Migration', 'Python', 'Oracle DB'],
      githubUrl: 'Private Repository',
      date: '2025',
      category: 'System Migration',
      deployment: 'Production Live'
    },
    {
      title: 'Sampath Bank IAM Version Migration',
      description: 'Executed a comprehensive Identity and Access Management (IAM) migration for banking systems. Configured secure authentication flows, Single Sign-On (SSO), and role-based access control to ensure strict compliance with banking security standards.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['WSO2 IAM', 'SSO', 'OAuth 2.0', 'OpenID Connect', 'SAML', 'Active Directory'],
      githubUrl: 'Private Repository',
      date: '2026',
      category: 'Cybersecurity & IAM',
      deployment: 'Production Live'
    },
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
      technologies: ['Python FastAPI', 'Angular NX', 'AWS', 'CI/CD', 'Shell Scripting', 'Google Sheet API', 'Docker', 'Nginx', 'GitHub Actions', 'Reverse Proxy', 'Load Balancing'],
      githubUrl: [
        'https://github.com/vipunsanjana/university-course-app-fastapi-angularnx-ec2-nginx-ci-cd.git'
      ],
      date: '2025',
      category: 'Mobile Computing',
      deployment: 'AWS with CI/CD EC2 Instance'
    },
    {
      title: 'MERN App Deployment - AWS EC2 with CI/CD',
      description: 'Production-ready MERN application deployment on AWS EC2 featuring Docker containerization, NGINX reverse proxy and load balancer, SSL security via Let\'s Encrypt, and automated CI/CD pipeline using GitHub Actions with secure secret management.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['MERN Stack', 'Docker', 'NGINX', 'AWS EC2', 'GitHub Actions', 'Load Balancer', 'Reverse Proxy', 'AWS Secrets Manager', 'VPC'],
      githubUrl: 'https://github.com/vipunsanjana/mern-aws-docker-nginx-cicd-githubaction-reverseproxy-loadbalancer-ec2-vpc',
      date: '2025',
      category: 'DevOps',
      deployment: 'AWS CI/CD EC2 Production'
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
      title: 'FastAPI DevOps Pipeline - Jenkins & ArgoCD (Pending)',
      description: 'Production-grade FastAPI CRUD application with comprehensive DevOps pipeline featuring Jenkins CI/CD, SonarQube code analysis, Kubernetes deployment via ArgoCD, and AWS EC2 hosting with Minikube cluster.',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['FastAPI', 'Jenkins', 'ArgoCD', 'SonarQube', 'Kubernetes', 'Docker', 'AWS EC2', 'Minikube', 'Pydantic', 'Swagger UI'],
      githubUrl: 'https://github.com/vipunsanjana/Fastapi-K8s-Jenkins-AgroCD-EC2-SonarQube-Docker',
      date: '2025',
      category: 'DevOps',
      deployment: 'AWS EC2 with K8s'
    },
    {
      title: 'Memory Match Game - Kubernetes Deployment',
      description: 'Cloud-native memory match game deployed on AWS EKS with advanced Kubernetes orchestration. Features auto-scaling, load balancing, and container management using Fargate serverless compute with Helm charts for deployment automation.',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['AWS EKS', 'Kubernetes', 'Ingress', 'AWS ALB', 'Fargate', 'Helm', 'Container Orchestration', 'Docker', 'GitHub Actions', 'Docker Hub', 'CI/CD'],
      githubUrl: 'https://github.com/vipunsanjana/Memory-Match-EKS',
      date: '2024',
      category: 'DevOps',
      deployment: 'AWS EKS Cluster'
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
    },
    {
      title: 'RAG-Based Knowledge Management System',
      description: 'End-to-end Retrieval-Augmented Generation (RAG) Knowledge Management System leveraging OpenAI for generative AI, Pinecone as a vector database, and Flask for deployment.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800', // AI Knowledge base image
      technologies: ['Flask', 'OpenAI', 'Pinecone', 'TypeScript', 'Docker'],
      githubUrl: 'https://github.com/vipunsanjana/RAG-Based-Knowledge-Management-System-LLMs-with-Flask-OpenAI-Pinecone',
      date: '2025',
      category: 'AI/ML',
      deployment: 'Flask + Pinecone'
    },
    {
      title: 'Multi-Agent AI Pipeline - Automated Research & Report Generation',
      description: 'A multi-agent AI research pipeline built with CrewAI, LangChain, and Groq. Orchestrates specialized AI agents (Researcher, Writer, Editor, Presenter) for automated research and report generation.',
      image: 'https://images.pexels.com/photos/3184635/pexels-photo-3184635.jpeg?auto=compress&cs=tinysrgb&w=800', // AI teamwork image
      technologies: ['Python', 'CrewAI', 'LangChain', 'Groq', 'SerperDevTool'],
      githubUrl: 'https://github.com/vipunsanjana/Multi-agent-AIPipeline-AutomatedResearch-reportGeneration-CrewAI-LangChain-Groq',
      date: '2025',
      category: 'AI/ML',
      deployment: 'Pipeline Automation'
    },
    {
      title: 'Medical Assistant Chatbot (RAG + LLMs)',
      description: 'End-to-end medical chatbot built with Generative AI, combining LLMs, LangChain, Pinecone for vector search, and Flask for deployment with AWS CI/CD.',
      image: 'https://images.pexels.com/photos/6129681/pexels-photo-6129681.jpeg?auto=compress&cs=tinysrgb&w=800', // medical AI chatbot
      technologies: ['LLMs', 'LangChain', 'Flask', 'AWS', 'Pinecone', 'CI/CD'],
      githubUrl: 'https://github.com/vipunsanjana/Medical-Assistant-Chatbot-LLM-Langchain-Flask-RAG-AWS-CI-CD-Pinecone-GenAI',
      date: '2025',
      category: 'AI/ML',
      deployment: 'AWS CI/CD'
    },
    {
      title: 'Spring Microservices Complete Blueprint',
      description: 'A complete end-to-end microservices architecture built with Spring Boot and Spring Cloud. Includes service discovery (Eureka), API Gateway, Keycloak security, inter-service communication, and circuit breakers.',
      image: 'https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=800', // microservices image
      technologies: ['Java', 'Spring Boot', 'Spring Cloud', 'Eureka', 'Keycloak', 'Docker', 'Kafka', 'MySQL', 'MongoDB', 'Circuit Breaker', 'Grafana', 'Prometheus'],
      githubUrl: 'https://github.com/vipunsanjana/Spring-Microservices-Complete-Blueprint',
      date: '2024',
      category: 'Backend',
      deployment: 'Microservices Architecture'
    },
    {
      title: 'MLOps Diabetes Prediction API with FastAPI & Kubernetes',
      description: 'MLOps-ready Diabetes Prediction API using FastAPI, Docker, and Kubernetes. Includes automated CI/CD with GitHub Actions, versioned Docker images, and secure secret management.',
      image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800', // ML prediction image
      technologies: ['FastAPI', 'Random Forest', 'Docker', 'Kubernetes', 'GitHub Actions'],
      githubUrl: 'https://github.com/vipunsanjana/MLOPS-Diabetes-Prediction-FastAPI-RandomForest',
      date: '2025',
      category: 'AI/ML',
      deployment: 'Kubernetes Cluster'
    },
    {
      title: 'AutoSecOps: Automated Vulnerability Detection in DevSecOps (Pending)',
      description: 'Ongoing final year research project focused on automating vulnerability detection in DevSecOps pipelines. Integrates ML models for vulnerability prediction, security automation, and visualization dashboards.',
      image: 'https://images.pexels.com/photos/5380643/pexels-photo-5380643.jpeg?auto=compress&cs=tinysrgb&w=800', // Cybersecurity-themed image
      technologies: ['Cybersecurity', 'Artificial Intelligence (AI)', 'DevSecOps', 'Machine Learning'],
      githubUrl: 'Private Repository',
      date: '2025',
      category: 'Cybersecurity + AI',
      deployment: 'Security Automation Research'
    }

  ];

  return (
    <section id="projects" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'
      }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-4 ${darkMode ? 'text-white' : 'text-gray-900'
            }`}>
            Featured Projects
          </h2>
          <div className={`w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full`}></div>
          <p className={`text-lg sm:text-xl px-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
            Real-world solutions and research implementations
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 px-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`cursor-pointer rounded-xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-all duration-300 group`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode
                      ? 'bg-gray-900/80 text-gray-200'
                      : 'bg-white/80 text-gray-800'
                    }`}>
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${darkMode
                      ? 'bg-blue-600/80 text-white'
                      : 'bg-blue-600/80 text-white'
                    }`}>
                    {project.deployment}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`text-lg sm:text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                    {project.title}
                  </h3>
                  <div className="flex items-center space-x-1 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                </div>

                <p className={`text-xs sm:text-sm mb-4 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies && project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className={`px-2 py-1 rounded text-xs font-medium ${darkMode
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
                          className={`flex items-center justify-center space-x-2 px-6 py-2 rounded-lg text-sm font-medium transition-colors w-full ${darkMode
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
                      className={`flex items-center justify-center space-x-2 px-6 py-2 rounded-lg text-sm font-medium transition-colors w-full ${project.githubUrl === 'Private Repository' || project.githubUrl === '#'
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
        <div className={`mt-16 text-center p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'
          }`}>
          <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'
            }`}>
            Backend Development Expertise
          </h3>
          <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
            Specialized in developing scalable backend modules using <strong>NestJS, Node js, Express, SpringBoot, Fast API, Flask, Ballerina and Go Lang</strong>,
            with extensive experience in microservices architecture, API development, and cloud deployment strategies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;