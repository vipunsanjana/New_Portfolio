import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_wyuc3xx',       // ✅ your service ID
        'template_mm31z6l',      // ✅ your template ID
        formRef.current,
        '3VoLOssOTkBwp0sbb'      // ✅ your user ID / public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setFormData({ from_name: '', from_email: '', subject: '', message: '' });
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Get In Touch
          </h2>
          <div className={`w-24 h-1 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full`}></div>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Let's discuss your next project
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-4">
          {/* Left Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <Mail className={`w-6 h-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <div>
                <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Email</h4>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  vipunsanjana34@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <Phone className={`w-6 h-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <div>
                <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Phone</h4>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  +94 (77) 878-0559
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <MapPin className={`w-6 h-6 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              </div>
              <div>
                <h4 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Location</h4>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Colombo, Sri Lanka</p>
              </div>
            </div>
            <div className="flex space-x-4 pt-4">
              {[
                { icon: Github, href: 'https://github.com/vipunsanjana' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/vipun' },
                { icon: Mail, href: 'mailto:vipunsanjana34@gmail.com' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`p-3 rounded-lg transition hover:scale-110 ${
                    darkMode
                      ? 'bg-gray-800 text-gray-400 hover:text-blue-400'
                      : 'bg-gray-100 text-gray-600 hover:text-blue-600'
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Form */}
          <div className={`p-6 sm:p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
                <input
                  type="email"
                  name="from_email"
                  placeholder="Your email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 text-white'
                      : 'bg-white border-gray-300 text-gray-900'
                  }`}
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg border ${
                  darkMode
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
              <textarea
                name="message"
                rows={6}
                placeholder="Tell me about your project..."
                value={formData.message}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg border resize-none ${
                  darkMode
                    ? 'bg-gray-700 border-gray-600 text-white'
                    : 'bg-white border-gray-300 text-gray-900'
                }`}
              />
              <button
                type="submit"
                className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 ${
                  darkMode
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                } hover:scale-105 transition`}
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
              {done && (
                <p className="text-center mt-4 text-green-500 text-lg font-semibold">
                  ✅ Thanks for contacting me!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
