import React, { useState, useEffect } from 'react';
import { Github, Star, GitFork, Eye, Calendar, Code, TrendingUp, Users, BookOpen } from 'lucide-react';

interface GitHubAnalysisProps {
  darkMode: boolean;
}

interface Repository {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  watchers: number;
  updated: string;
  url: string;
  topics: string[];
}

interface GitHubStats {
  totalRepos: number;
  totalStars: number;
  totalForks: number;
  totalCommits: number;
  contributionsThisYear: number;
  longestStreak: number;
  currentStreak: number;
  languages: { name: string; percentage: number; color: string }[];
}

const GitHubAnalysis: React.FC<GitHubAnalysisProps> = ({ darkMode }) => {
  // Mock data - in a real implementation, you'd fetch this from GitHub API
  const [stats] = useState<GitHubStats>({
    totalRepos: 42,
    totalStars: 1247,
    totalForks: 89,
    totalCommits: 2156,
    contributionsThisYear: 847,
    longestStreak: 47,
    currentStreak: 12,
    languages: [
      { name: 'JavaScript', percentage: 35, color: '#f1e05a' },
      { name: 'TypeScript', percentage: 28, color: '#2b7489' },
      { name: 'Python', percentage: 18, color: '#3572A5' },
      { name: 'React', percentage: 12, color: '#61dafb' },
      { name: 'Other', percentage: 7, color: '#8e8e93' }
    ]
  });

  const [repositories] = useState<Repository[]>([
    {
      name: 'react-dashboard-pro',
      description: 'A comprehensive React dashboard with advanced analytics, real-time data visualization, and responsive design.',
      language: 'TypeScript',
      stars: 324,
      forks: 67,
      watchers: 45,
      updated: '2024-01-15',
      url: '#',
      topics: ['react', 'dashboard', 'analytics', 'typescript']
    },
    {
      name: 'node-microservices-kit',
      description: 'Production-ready Node.js microservices architecture with Docker, Kubernetes, and monitoring.',
      language: 'JavaScript',
      stars: 189,
      forks: 34,
      watchers: 28,
      updated: '2024-01-12',
      url: '#',
      topics: ['nodejs', 'microservices', 'docker', 'kubernetes']
    },
    {
      name: 'ai-content-generator',
      description: 'AI-powered content generation tool with multiple templates and real-time preview functionality.',
      language: 'Python',
      stars: 156,
      forks: 23,
      watchers: 19,
      updated: '2024-01-10',
      url: '#',
      topics: ['ai', 'content-generation', 'openai', 'python']
    },
    {
      name: 'mobile-banking-app',
      description: 'Secure React Native banking application with biometric authentication and financial analytics.',
      language: 'JavaScript',
      stars: 98,
      forks: 15,
      watchers: 12,
      updated: '2024-01-08',
      url: '#',
      topics: ['react-native', 'banking', 'mobile', 'security']
    },
    {
      name: 'devops-automation-scripts',
      description: 'Collection of DevOps automation scripts for CI/CD, monitoring, and infrastructure management.',
      language: 'Shell',
      stars: 76,
      forks: 21,
      watchers: 8,
      updated: '2024-01-05',
      url: '#',
      topics: ['devops', 'automation', 'cicd', 'infrastructure']
    },
    {
      name: 'blockchain-voting-system',
      description: 'Decentralized voting system built on Ethereum with smart contracts and web3 integration.',
      language: 'Solidity',
      stars: 67,
      forks: 12,
      watchers: 9,
      updated: '2024-01-03',
      url: '#',
      topics: ['blockchain', 'ethereum', 'voting', 'web3']
    }
  ]);

  const [contributionData] = useState(() => {
    // Generate mock contribution data for the last 365 days
    const data = [];
    const today = new Date();
    for (let i = 364; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      const contributions = Math.floor(Math.random() * 8); // 0-7 contributions per day
      data.push({
        date: date.toISOString().split('T')[0],
        count: contributions,
        level: contributions === 0 ? 0 : contributions <= 2 ? 1 : contributions <= 4 ? 2 : contributions <= 6 ? 3 : 4
      });
    }
    return data;
  });

  const getContributionColor = (level: number) => {
    if (darkMode) {
      switch (level) {
        case 0: return 'bg-gray-800';
        case 1: return 'bg-green-900';
        case 2: return 'bg-green-700';
        case 3: return 'bg-green-500';
        case 4: return 'bg-green-400';
        default: return 'bg-gray-800';
      }
    } else {
      switch (level) {
        case 0: return 'bg-gray-100';
        case 1: return 'bg-green-200';
        case 2: return 'bg-green-400';
        case 3: return 'bg-green-600';
        case 4: return 'bg-green-800';
        default: return 'bg-gray-100';
      }
    }
  };

  return (
    <section id="github" className={`py-20 ${
      darkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            GitHub Analysis
          </h2>
          <p className={`text-lg sm:text-xl px-4 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            My coding activity and open-source contributions
          </p>
        </div>

        {/* GitHub Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 px-4">
          {[
            { icon: BookOpen, label: 'Repositories', value: stats.totalRepos, color: 'text-blue-500' },
            { icon: Star, label: 'Total Stars', value: stats.totalStars, color: 'text-yellow-500' },
            { icon: GitFork, label: 'Total Forks', value: stats.totalForks, color: 'text-green-500' },
            { icon: Code, label: 'Commits', value: stats.totalCommits, color: 'text-purple-500' }
          ].map((stat, index) => (
            <div
              key={index}
              className={`p-4 sm:p-6 rounded-xl ${
                darkMode ? 'bg-gray-900' : 'bg-white'
              } shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <stat.icon className={`w-6 sm:w-8 h-6 sm:h-8 mx-auto mb-3 sm:mb-4 ${stat.color}`} />
              <div className={`text-2xl sm:text-3xl font-bold mb-2 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {stat.value.toLocaleString()}
              </div>
              <div className={`text-xs sm:text-sm ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Contribution Graph */}
        <div className={`p-6 sm:p-8 rounded-xl mb-12 mx-4 ${
          darkMode ? 'bg-gray-900' : 'bg-white'
        } shadow-lg`}>
          <div className="flex items-center justify-between mb-6">
            <h3 className={`text-xl sm:text-2xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Contribution Activity
            </h3>
            <div className="flex items-center space-x-4 text-sm">
              <div className={`flex items-center space-x-2 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <TrendingUp className="w-4 h-4" />
                <span>{stats.contributionsThisYear} contributions this year</span>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <div className="grid grid-cols-53 gap-1 min-w-full">
              {contributionData.map((day, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-sm ${getContributionColor(day.level)} hover:ring-2 hover:ring-blue-500 transition-all cursor-pointer`}
                  title={`${day.count} contributions on ${day.date}`}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 text-sm">
            <div className={`flex items-center space-x-4 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <span>Less</span>
              <div className="flex space-x-1">
                {[0, 1, 2, 3, 4].map((level) => (
                  <div
                    key={level}
                    className={`w-3 h-3 rounded-sm ${getContributionColor(level)}`}
                  />
                ))}
              </div>
              <span>More</span>
            </div>
            <div className={`flex items-center space-x-4 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <span>🔥 Current streak: {stats.currentStreak} days</span>
              <span>📈 Longest streak: {stats.longestStreak} days</span>
            </div>
          </div>
        </div>

        {/* Language Distribution */}
        <div className={`p-6 sm:p-8 rounded-xl mb-12 mx-4 ${
          darkMode ? 'bg-gray-900' : 'bg-white'
        } shadow-lg`}>
          <h3 className={`text-xl sm:text-2xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Most Used Languages
          </h3>
          <div className="space-y-4">
            {stats.languages.map((lang, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 w-24">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: lang.color }}
                  />
                  <span className={`text-sm font-medium ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {lang.name}
                  </span>
                </div>
                <div className="flex-1">
                  <div className={`w-full rounded-full h-2 ${
                    darkMode ? 'bg-gray-700' : 'bg-gray-200'
                  }`}>
                    <div
                      className="h-2 rounded-full transition-all duration-1000"
                      style={{
                        width: `${lang.percentage}%`,
                        backgroundColor: lang.color
                      }}
                    />
                  </div>
                </div>
                <span className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {lang.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Repositories */}
        <div className="px-4">
          <h3 className={`text-2xl sm:text-3xl font-bold mb-8 text-center ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Popular Repositories
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {repositories.map((repo, index) => (
              <div
                key={index}
                className={`p-6 rounded-xl ${
                  darkMode ? 'bg-gray-900' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-all duration-300 border ${
                  darkMode ? 'border-gray-700' : 'border-gray-100'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <BookOpen className={`w-5 h-5 ${
                      darkMode ? 'text-blue-400' : 'text-blue-600'
                    }`} />
                    <h4 className={`font-bold ${
                      darkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {repo.name}
                    </h4>
                  </div>
                  <a
                    href={repo.url}
                    className={`p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>

                <p className={`text-sm mb-4 leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {repo.description}
                </p>

                <div className="flex items-center justify-between mb-4 text-sm">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                      <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                        {repo.language}
                      </span>
                    </div>
                  </div>
                  <div className={`flex items-center space-x-1 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(repo.updated).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                        {repo.stars}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork className="w-4 h-4 text-blue-500" />
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                        {repo.forks}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4 text-green-500" />
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
                        {repo.watchers}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {repo.topics.slice(0, 3).map((topic, topicIndex) => (
                    <span
                      key={topicIndex}
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        darkMode 
                          ? 'bg-gray-800 text-blue-400' 
                          : 'bg-blue-100 text-blue-800'
                      }`}
                    >
                      {topic}
                    </span>
                  ))}
                  {repo.topics.length > 3 && (
                    <span className={`px-2 py-1 rounded text-xs ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      +{repo.topics.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Profile Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              darkMode 
                ? 'bg-gray-900 text-white border-2 border-gray-700 hover:border-gray-600' 
                : 'bg-white text-gray-900 border-2 border-gray-300 hover:border-gray-400'
            } shadow-lg hover:shadow-xl`}
          >
            <Github className="w-5 h-5" />
            <span>View Full GitHub Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHubAnalysis;