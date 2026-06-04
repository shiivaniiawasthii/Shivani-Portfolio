import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const { ref, inView } = useInView();

  const experiences = [
    {
      role: 'Solution Engineer',
      company: 'CognifAI',
      period: 'Jan 2024 - Present',
      location: 'Remote',
      description: 'Client-facing role bridging engineering and business — running demos, gathering requirements, and building AI-integrated web applications.',
      achievements: [
        'Served as primary contact during client demos — walked non-technical stakeholders through end-to-end product workflows and triaged reported issues to a 4-member junior team',
        'Ran discovery sessions with clients to define role-based workflows and scope — produced workflow diagrams, feature documentation, and acceptance criteria used directly by engineering',
        'Built WorkHiveAI — a full-stack team productivity platform (Kanban, sprints, milestones, dashboard) with a Claude API email-to-task automation pipeline',
        'Delivered a multi-format data export system (Excel, CSV, PDF) processing 50+ GB monthly, cutting manual reporting time by 60%',
        'Improved application performance through code splitting and lazy loading, reducing initial bundle size by 35% and page load time by 2.5 seconds',
        'Performed weekly product monitoring using browser dev tools — identified failing APIs and auth issues, resolved or escalated with structured root cause analysis',
      ],
    },
    {
      role: 'Full-Stack Developer',
      company: 'Procxl Private Limited (Carbonmint)',
      period: 'Sept 2022 - Sept 2023',
      location: 'Hyderabad, India',
      description: 'Built web applications for a carbon credits FinTech SaaS platform — APIs, UI components, and authentication.',
      achievements: [
        'Developed 20+ CRUD APIs using Node.js, Express, and Redux Toolkit, reducing API response time by 40%',
        'Designed MongoDB schemas and optimised queries, improving data retrieval performance by 50%',
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