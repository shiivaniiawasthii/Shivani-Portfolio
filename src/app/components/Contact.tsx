import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Mail, Linkedin, Github, Send } from 'lucide-react';

export function Contact() {
  const { ref, inView } = useInView();

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shivani28f23@gmail.com',
      href: 'mailto:shivani28f23@gmail.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/shivani-awasthi',
      href: 'https://www.linkedin.com/in/shivani-awasthi-51b18a284/',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/shiivaniiawasthii',
      href: 'https://github.com/shiivaniiawasthii',
    },
  ];

  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl text-center mb-4 text-gray-900">
            Let's Connect
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, projects, or just 
            chatting about tech. Feel free to reach out!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all hover:scale-105 text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-rose-400 to-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <method.icon size={32} className="text-white" />
                </div>
                <h3 className="text-lg mb-2 text-gray-900">
                  {method.label}
                </h3>
                <p className="text-gray-600 text-sm break-all">
                  {method.value}
                </p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-rose-400 to-blue-400 rounded-3xl shadow-2xl p-8 md:p-12 text-white text-center"
          >
            <h3 className="text-3xl mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-white/90 mb-6 text-lg">
              I'm currently seeking opportunities at product-driven companies 
              where I can contribute and grow as a developer.
            </p>
            <a
              href="mailto:shivani28f23@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
            >
              <Send size={20} />
              <span>Send me a message</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}