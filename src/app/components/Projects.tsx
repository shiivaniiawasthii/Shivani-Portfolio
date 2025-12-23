import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const { ref, inView } = useInView();

  const projects = [
    {
      title: 'PlantShop — E-commerce Platform (MERN Stack)',
      description: 'A full-featured e-commerce platform for plant sales with product management, shopping cart, and payment integration.',
      image: 'https://user-images.githubusercontent.com/102580513/214058298-d6b576ed-8618-4a8a-9bc1-80dc41b5d9aa.png',
      tech: ['React', 'Redux', 'Node.js', 'MongoDB', 'Material UI'],
      github: 'https://github.com/shiivaniiawasthii/MERN-Ecommerce',
      demo: 'https://proshop-cvsz.onrender.com/',
    },
    {
      title: 'Enterprise Backend API System',
      description: 'Scalable backend API system with robust authentication, data management, and integration capabilities.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      tech: ['Node.js', 'Express.js', 'PostgreSQL'],
      github: 'https://github.com/shiivaniiawasthii/Nodejs_project_crud',
      demo: null,
    },
    {
      title: 'Real-Time Chat Application',
      description: 'Interactive real-time chat application with instant messaging, user authentication, and modern UI.',
      image: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=600&fit=crop',
      tech: ['Next.js', 'ShadCN UI', 'Clerk', 'Convex'],
      github: 'https://github.com/shiivaniiawasthii/Real-time-chat-app-Next-JS/tree/master',
      demo: null,
    },
    
  ];

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl text-center mb-12 text-gray-900">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:scale-105 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl mb-3 text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-rose-50 text-rose-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        className="flex items-center gap-2 text-rose-500 hover:text-rose-600 transition-colors"
                      >
                        <ExternalLink size={20} />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}