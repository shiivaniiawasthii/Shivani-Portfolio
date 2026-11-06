import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function About() {
  const { ref, inView } = useInView();

  const highlights = [
    '3+ years taking software from first discovery call to reliable production use',
    'Technical point of contact for 30+ client accounts, including 8+ enterprise implementations (Oracle)',
    'Resolved 100+ production issues, 75–80% without engineering escalation',
    'Build with AI daily: Claude Code, agent instruction files, prompt engineering, RAG',
    'Agriculture background — I learn operations-heavy industries fast',
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
              Customer-facing engineer who gets software working inside real businesses. I sit with
              customers, map how their work actually gets done, turn it into a working system, and
              keep iterating until it runs without hand-holding. Today I do that with AI — directing
              Claude Code to build and maintain production apps, and designing workflows that AI can
              run reliably.
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
              Relocating to Bengaluru and available to join immediately. I'm looking for AI
              deployment, agent operations and forward-deployed roles where I own customer
              outcomes end to end.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}