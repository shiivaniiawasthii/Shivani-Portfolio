import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const { ref, inView } = useInView();

  const projects = [
    {
      title: 'Gym Manager (Messy2Easy) — Built with Claude Code',
      description: "Replaced a real gym's Google Form, WhatsApp and manual Excel tracking with one system for 80 members: registration, ID checks, payments, renewals and attendance. I mapped the owner's workflow and directed Claude Code (CLAUDE.md / AGENTS.md) to build it, live in 10 days. New members wait in a pending queue until the owner verifies their Aadhaar. The owner no longer calculates profit/loss by hand and gets a daily WhatsApp/email summary of dues and members about to drop off. Demo login (sample data): phone 7080176406 · password sample123",
      image: 'https://s0.wp.com/mshots/v1/https://messy2easy.vercel.app/?w=800',
      tech: ['Claude Code', 'React', 'TypeScript', 'Supabase', 'WhatsApp API', 'Vercel'],
      github: 'https://github.com/shiivaniiawasthii/messy2easy',
      demo: 'https://messy2easy.vercel.app/',
    },
    {
      title: 'Support Doc RAG Assistant',
      description: 'Upload a document and ask questions in plain English. Answers come only from the document and cite the source passage, so every answer can be verified. Provider-agnostic LLM layer: Gemini or OpenAI with one config change.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
      tech: ['Python', 'FastAPI', 'FAISS', 'Gemini / OpenAI', 'Streamlit'],
      github: 'https://github.com/shiivaniiawasthii/RAG-SUPPORT-chatbot',
      demo: 'https://rag-support-chatbot-qcpoha2timjuirs84bko4n.streamlit.app/',
    },
    {
      title: 'WorkHiveAI — AI-Enabled Team Productivity Platform',
      description: "Built at CognifAI as the team's internal project management tool — used daily by 20 team members, replacing Asana. Kanban boards, sprint planning and milestones. An IMAP worker turns email replies into task comments or new tasks, and an LLM (Llama 3.1 via Groq) creates tasks from plain-English descriptions, filling in title, priority, assignee and due date.",
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'IMAP', 'Groq (Llama 3.1)', 'Tailwind CSS'],
      github: 'https://github.com/shiivaniiawasthii/WorkHive',
      demo: 'https://team-task-navy.vercel.app/',
    },
    {
      title: 'SyntropIQ-AI — AI Studio Website',
      description: 'Production marketing website for an AI studio specialising in Conversational AI, Generative AI, and Agentic Workflow services. Built with Next.js 14 App Router and deployed on Hostinger.',
      image: 'https://s0.wp.com/mshots/v1/https://syntropiq-ai.com/?w=800',
      tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS'],
      github: null,
      demo: 'https://syntropiq-ai.com/',
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
                    {project.github && (
                    <a
                      href={project.github}
                      className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                    )}
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