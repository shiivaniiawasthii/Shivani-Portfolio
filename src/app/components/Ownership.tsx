import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Target, Users, Lightbulb, TrendingUp } from 'lucide-react';

export function Ownership() {
  const { ref, inView } = useInView();

  const ownershipAreas = [
    {
      icon: Lightbulb,
      title: 'Product & User Flows',
      description: 'Designed complete product architecture and user flows for Translator App, ensuring intuitive user experience.',
    },
    {
      icon: Users,
      title: 'Leadership & Coordination',
      description: 'Took ownership during key phases when leadership was unavailable, balancing development and team coordination.',
    },
    {
      icon: Target,
      title: 'Demo & Walkthroughs',
      description: 'Delivered comprehensive demos and walkthroughs to stakeholders, ensuring clear communication of features.',
    },
    {
      icon: TrendingUp,
      title: 'Business-First Mindset',
      description: 'Always keep business goals in mind, making technical decisions that align with product strategy.',
    },
  ];

  return (
    <section id="ownership" className="py-24 px-6 bg-gradient-to-br from-rose-50 to-blue-50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl text-center mb-4 text-gray-900">
            Ownership Beyond Code
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            I believe great developers do more than just write code. They think about 
            the product, coordinate with teams, and take ownership of outcomes.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {ownershipAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-rose-400 to-blue-400 rounded-2xl flex items-center justify-center mb-4">
                  <area.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl mb-3 text-gray-900">
                  {area.title}
                </h3>
                <p className="text-gray-600">
                  {area.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl mb-4 text-gray-900">
              Real-World Example: Translator App
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                When developing the Translator App, I didn't just code features – I owned the entire product experience:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">•</span>
                  <span>Designed user flows and wireframes to ensure intuitive navigation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">•</span>
                  <span>Coordinated with team members and stakeholders during leadership transitions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">•</span>
                  <span>Conducted demos to gather feedback and iterate quickly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">•</span>
                  <span>Made technical decisions aligned with business objectives</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
