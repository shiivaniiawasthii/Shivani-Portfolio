import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Target, Users, Lightbulb, TrendingUp } from 'lucide-react';

export function Ownership() {
  const { ref, inView } = useInView();

  const ownershipAreas = [
    {
      icon: Lightbulb,
      title: 'Make the Complex Simple',
      description: 'I map how customer work really gets done — the emails, spreadsheets and workarounds — and turn it into one clean, reliable workflow.',
    },
    {
      icon: Users,
      title: 'Trusted by Customers',
      description: 'Primary technical contact for 30+ accounts, including enterprise teams like Oracle, across US, UK and India time zones.',
    },
    {
      icon: Target,
      title: 'Push Until It Runs on Its Own',
      description: 'I set the quality bar and keep fixing — prompts, instructions, process or code — until the system works without hand-holding.',
    },
    {
      icon: TrendingUp,
      title: 'Own It End to End',
      description: 'From the first discovery call to go-live and production support, and every fix becomes a playbook that makes the next deployment faster.',
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
            Getting something to look good in a demo is easy. Getting it to run a real
            business every day is the work I care about.
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
              Real-World Example: Running a Gym with AI
            </h3>
            <div className="space-y-4 text-gray-700">
              <p>
                My friend's gym ran on a Google Form, WhatsApp and memory. I owned the whole deployment:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">•</span>
                  <span>Sat with the owner to map how registrations, payments and renewals really happened</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">•</span>
                  <span>Directed Claude Code with clear instruction files to build the system, reviewing every change</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">•</span>
                  <span>Tested edge cases and fixed what broke until it ran reliably in daily use</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-500 mt-1">•</span>
                  <span>Automated a daily WhatsApp summary so the owner sees dues and drop-offs without opening the app</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
