import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Code, Layers, Server, Cloud, Wrench, Cpu } from 'lucide-react';

export function Skills() {
  const { ref, inView } = useInView();

  const skillCategories = [
    {
      icon: Code,
      title: 'Languages',
      skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
    },
    {
      icon: Layers,
      title: 'Frontend',
      skills: [
        'React.js',
        'Next.js',
        'Redux Toolkit',
        'React Hooks',
        'Tailwind CSS',
        'Material UI',
        'ShadCN UI',
      ],
    },
    {
      icon: Server,
      title: 'Backend',
      skills: [
        'Node.js',
        'Express.js',
        'REST APIs',
        'JWT Authentication',
        'RBAC',
      ],
    },
    {
      icon: Cpu,
      title: 'Databases',
      skills: ['MongoDB', 'PostgreSQL', 'Mongoose'],
    },
    {
      icon: Cloud,
      title: 'AI Tools (used)',
      skills: [
        'Claude',
        'Azure OpenAI',
        'Claude Code',
      ],
    },
    {
      icon: Wrench,
      title: 'Tools & Workflow',
      skills: [
        'Git',
        'Postman',
        'Figma',
        'Jira',
        'Asana',
        'Chrome DevTools',
        'CI/CD',
      ],
    },
  ];

  const additionalSkills = [
    'Client-facing: product demos, discovery calls, stakeholder communication',
    'Requirements gathering: workflow diagrams, acceptance criteria, use cases',
    'Performance: code splitting, lazy loading, bundle size reduction',
    'State management: Redux Toolkit, Context API',
    'Responsive design & cross-browser compatibility',
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-br from-blue-50 to-rose-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl text-center mb-12 text-gray-900">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-blue-400 rounded-xl flex items-center justify-center">
                    <category.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl text-gray-900">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-rose-50 text-rose-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl mb-6 text-gray-900">
              Additional Expertise
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {additionalSkills.map((skill, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-700">{skill}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
