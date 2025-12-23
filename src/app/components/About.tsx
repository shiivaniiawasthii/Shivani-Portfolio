import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function About() {
  const { ref, inView } = useInView();

  const highlights = [
    '3+ years of experience building web applications',
    'Frontend-focused full-stack developer',
    'Comfortable owning features end-to-end',
    'Passionate about clean UI, performance, and scalability',
    'Strong focus on user experience and product thinking',
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl text-center mb-12 text-gray-900">
            About Me
          </h2>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Frontend-focused Full-Stack Engineer with 3 years of experience building scalable, 
              high-performance web applications using React.js and Next.js. Strong expertise in 
              Redux Toolkit, performance optimization, and modern state management. Experienced 
              in AI integrations, cloud deployments, and collaborating cross-functionally to ship 
              features that improve user experience and business efficiency.
            </p>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">{highlight}</p>
                </motion.div>
              ))}
            </div>

            <p className="text-lg text-gray-700 mt-8 leading-relaxed">
              Based in Gurugram, India, I'm seeking opportunities at product-driven companies 
              where I can contribute to meaningful projects and continue growing as a developer.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}