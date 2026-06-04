import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, FileDown } from 'lucide-react';
import profilePhoto1 from '../../assets/profilePhoto1.png';
import profilePhoto2 from '../../assets/profilePhoto2.jpeg';

export function Hero() {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const photos = [profilePhoto1, profilePhoto2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhoto((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/shiivaniiawasthii', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shivani-awasthi-51b18a284/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:shivani28f23@gmail.com', label: 'Email' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-rose-500 mb-2">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl mb-4 text-gray-900">
                Shivani Awasthi
              </h1>
              <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
                Solution Engineer | Full-Stack Developer | AI-Integrated Products
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-xl"
            >
              I bridge clients and engineering — building AI-integrated web apps, running product demos, and translating business goals into shipped features.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="px-8 py-3 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Projects
              </a>
              <a
  href="https://drive.google.com/file/d/1OX9oyVCYBAu32r4tU0yprvIEVrGvdyOv/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="px-8 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-50 transition-all hover:scale-105 shadow-lg hover:shadow-xl border border-gray-200 flex items-center gap-2"
>
  <FileDown size={20} />
  Download Resume
</a>

            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-4 pt-4"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg flex items-center justify-center text-gray-700 hover:text-rose-500 transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Profile Photo with Rotation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-400 to-blue-400 rounded-3xl blur-2xl opacity-30 animate-pulse" />
              <motion.div
                key={currentPhoto}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="relative w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src={photos[currentPhoto]}
                  alt="Shivani Awasthi"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}