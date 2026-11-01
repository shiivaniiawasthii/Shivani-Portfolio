import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Briefcase, Calendar } from 'lucide-react';

export function Experience() {
  const { ref, inView } = useInView();

  const experiences = [
    {
      role: 'Solutions Engineer',
      company: 'CognifAI',
      period: 'Jun 2024 - Oct 2026',
      location: 'Remote',
      description: 'Clients: Oracle (pharmacovigilance), drug-safety reporting startups and a UK-based NPS platform. Owned customer deployments from discovery to production.',
      achievements: [
        'Owned 8+ enterprise implementations end to end, from discovery and solution design to go-live and production support; primary technical contact for 30+ client accounts across US, UK and India hours',
        'Ran discovery calls with customer engineering, product and operations teams; mapped their real workflows, data and user journeys into implementation checklists with named owners, tracked to verified production launch',
        'Resolved 100+ production issues, 75–80% without escalation, by isolating platform bug vs. customer setup vs. configuration vs. third-party incident; turned each root cause into a reusable troubleshooting playbook',
        "Owned E2B(R2) XML schema mapping and field-level validation for Oracle's drug-safety reporting; traced delivery failures and rejected payloads to root cause",
        'Ran 20+ live demos and technical deep-dives that supported 12–13 client renewals; wrote the onboarding playbooks and API docs used by Support and Customer Success',
        "Built WorkHiveAI, the team's internal project management tool (Kanban, sprint tracking, AI-powered email-to-task automation), used daily by 10+ team members and replacing Asana",
      ],
    },
    {
      role: 'Junior Software Engineer',
      company: 'Procxl Private Limited (Carbonmint)',
      period: 'Feb 2023 - Sept 2023',
      location: 'Hyderabad, India',
      description: 'Agri-climate tech startup — APIs, data and authentication for the platform.',
      achievements: [
        'Built and documented 20+ REST APIs (Node.js, Express); cut response time by 40%',
        'Rolled out JWT authentication and role-based access for 300+ users across three permission levels; redesigned PostgreSQL and MongoDB schemas for 50% faster data retrieval',
      ],
    },
    {
      role: 'Web Developer Intern',
      company: 'We Infinity Plus',
      period: 'Sept 2022 - Feb 2023',
      location: 'Remote',
      description: 'Early-stage web team — backend routes, UI and testing.',
      achievements: [
        'Built RESTful API routes for new product features and a consistent UI with Material UI components and themes',
        'Owned unit testing and debugging sessions to keep releases stable and catch regressions before users did',
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