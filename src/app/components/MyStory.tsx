import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ChevronUp, Sprout, Code, Rocket } from 'lucide-react';

export function MyStory() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="story" className="py-12 px-6">
      <div className="container mx-auto max-w-3xl">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all flex items-center justify-between group"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-blue-400 rounded-full flex items-center justify-center">
              <Sprout size={24} className="text-white" />
            </div>
            <h2 className="text-2xl text-gray-900">
              My Story
            </h2>
          </div>
          <div className="text-gray-500 group-hover:text-gray-700 transition-colors">
            {expanded ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </div>
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="bg-gradient-to-br from-rose-50 to-blue-50 rounded-2xl shadow-lg p-8 mt-4">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Sprout size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2 text-gray-900">
                        Unexpected Beginnings
                      </h3>
                      <p className="text-gray-700">
                        I started with a BSc in Agriculture – far from the world of code. 
                        But curiosity led me to explore programming, and I discovered a 
                        passion I never knew existed.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Code size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2 text-gray-900">
                        The Transition
                      </h3>
                      <p className="text-gray-700">
                        I taught myself web development through online courses, personal 
                        projects, and relentless practice. What started as curiosity became 
                        a full-fledged career transition into full-stack development.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Rocket size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2 text-gray-900">
                        Finding My Strength
                      </h3>
                      <p className="text-gray-700">
                        Over 3+ years, I've discovered that I thrive when I can own features 
                        end-to-end – from design to deployment. I enjoy coordinating with teams, 
                        understanding user needs, and building products that make a difference.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border-l-4 border-rose-400">
                    <p className="text-gray-700 italic">
                      "My unconventional path taught me to think differently, adapt quickly, 
                      and never stop learning. I bring that mindset to every project I work on."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
