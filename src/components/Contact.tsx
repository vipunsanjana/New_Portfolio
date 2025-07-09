import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className={`py-20 ${
      darkMode ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 px-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Get In Touch
          </h2>
          <p className={`text-lg sm:text-xl px-4 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Let's discuss your next project
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 px-4">
          <div className="order-2 md:order-1">
            <h3 className={`text-xl sm:text-2xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Let's Work Together
            </h3>
            <p className={`text-base sm:text-lg mb-8 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm always interested in hearing about new opportunities, 
              challenging projects, and creative collaborations. Whether you're 
              a company looking to hire, or you're a developer who wants to 
              collaborate, I'd love to hear from you.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}>
                  <Mail className={`w-6 h-6 ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                </div>
                <div>
                  <h4 className={`font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Email
                  </h4>
                  <p className={`${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  } text-sm sm:text-base`}>
                    vipunsanjana34@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}>
                  <Phone className={`w-6 h-6 ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                </div>
                <div>
                  <h4 className={`font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Phone
                  </h4>
                  <p className={`${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  } text-sm sm:text-base`}>
                    +94 (77) 878-0559
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-gray-100'
                }`}>
                  <MapPin className={`w-6 h-6 ${
                    darkMode ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                </div>
                <div>
                  <h4 className={`font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Location
                  </h4>
                  <p className={`${
                    darkMode ? 'text-gray-300' : 'text-gray-600'
                  } text-sm sm:text-base`}>
                    Colombo, Sri Lanka
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className={`font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {[
                  { icon: Github, href: 'https://github.com/vipunsanjana' },
                  { icon: Linkedin, href: 'https://www.linkedin.com/in/vipun' },
                  { icon: Mail, href: 'mailto:vipunsanjana34@gmail.com' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-3 rounded-lg transition-all duration-300 hover:scale-110 ${
                      darkMode 
                        ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-blue-400' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-blue-600'
                    }`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={`p-6 sm:p-8 rounded-xl order-1 md:order-2 ${
            darkMode ? 'bg-gray-800' : 'bg-gray-50'
          }`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      darkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Project discussion"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                  }`}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                  darkMode 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700' 
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'
                } shadow-lg hover:shadow-xl transform hover:scale-105`}
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;