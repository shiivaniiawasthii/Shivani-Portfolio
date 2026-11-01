import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Check, BookOpen, Mail } from 'lucide-react';

export function WhyHireMe() {
  const { ref, inView } = useInView();

  const reasons = [
    '3+ years in customer-facing deployment and solutions engineering',
    '8+ enterprise implementations owned from discovery to production',
    'Power user of AI tooling — Claude Code, prompt engineering, RAG',
    'Available to join immediately, full-time in Bengaluru',
    'Fast learner of new domains — from agriculture to pharmacovigilance to gyms',
    'Detail-focused debugger: 75–80% of issues fixed without escalation',
  ];

  return (
    <section id="why-hire" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-br from-rose-50 to-blue-50 rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-blue-400 rounded-full flex items-center justify-center">
                <BookOpen size={24} className="text-white" />
              </div>
              <h2 className="text-4xl text-gray-900">
                Need AI Running in the Real World?
              </h2>
            </div>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              I'm open to AI deployment, agent operations and forward-deployed roles where I
              work directly with customers and own getting AI to run their operations reliably.
            </p>

            <div className="space-y-4 mb-8">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-md flex-shrink-0">
                    <Check size={20} className="text-rose-500" />
                  </div>
                  <p className="text-lg text-gray-700">{reason}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-2xl p-6 border-l-4 border-rose-400"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-rose-400 to-blue-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen size={20} className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl mb-2 text-gray-900">
                    Continuous Learner
                  </h3>
                  <p className="text-gray-700">
                    I have a proven track record of quickly picking up new technologies and frameworks. 
                    From transitioning into web development from a completely different field, to mastering 
                    complex tools like Redux Toolkit, AI integrations, and cloud deployments — I adapt fast 
                    and deliver results. If I don't know something, I learn it.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 text-center"
            >
              <a
                href="mailto:awasthi28shivani@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-500 to-blue-500 text-white rounded-full hover:from-rose-600 hover:to-blue-600 transition-all hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Mail size={20} />
                <span>Get In Touch</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
