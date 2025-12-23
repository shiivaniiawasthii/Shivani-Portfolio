import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const { ref, inView } = useInView();

  const experiences = [
    {
      role: 'Software Engineer (Full Stack)',
      company: 'CognifAI',
      period: 'Jan 2024 - Present',
      location: 'Ahmedabad, India',
      description: 'Leading development of enterprise-level web applications with focus on performance optimization and AI integrations.',
      achievements: [
        'Engineered a multi-format data export system (Excel, CSV, PDF) processing 50+ GB of data monthly, reducing manual exporting time by 90%',
        'Built an AI-powered text extraction pipeline using LlamaIndex and Azure OpenAI, achieving 95% accuracy and reducing manual data entry by 40%',
        'Improved application performance through code splitting and lazy loading, reducing initial bundle size by 35% and improving page load by 70%',
        'Implemented global state management with Redux Toolkit, reducing prop drilling by 60% and improving code maintainability',
        'Created workflow diagrams, feature documentation, and acceptance criteria in collaboration with product and design teams',
      ],
    },
    {
      role: 'Web Developer (Full Stack)',
      company: 'Procxl Private Limited (Carbonmint)',
      period: 'Sept 2022 - Sept 2023',
      location: 'Hyderabad, India',
      description: 'Developed high-performance web applications with focus on API optimization and responsive UI design.',
      achievements: [
        'Developed 20+ CRUD APIs using Node.js, Express, Axios, and Redux Toolkit, reducing API response time by 40%',
        'Designed MongoDB data schemas and aggregation pipelines, improving data retrieval performance by 50%',
        'Built 15+ responsive UI components using React and Tailwind CSS, increasing form completion rates by 25%',
        'Implemented JWT-based authentication and role-based access control for 300+ users across three permission levels',
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-gradient-to-br from-blue-50 to-rose-50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl text-center mb-12 text-gray-900">
            Experience
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-300 to-blue-300 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 bg-rose-400 rounded-full border-4 border-white shadow-lg hidden md:block" />

                  <div className="md:ml-20 bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl text-gray-900 mb-1">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Briefcase size={16} />
                          <p>{exp.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-500 mt-2 md:mt-0">
                        <Calendar size={16} />
                        <p>{exp.period}</p>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4">
                      {exp.description}
                    </p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-rose-400 rounded-full mt-2 flex-shrink-0" />
                          <p className="text-gray-600">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}