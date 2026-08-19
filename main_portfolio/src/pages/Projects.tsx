import { motion } from 'motion/react';
import { OrnateWrapper } from '../components/OrnateWrapper';

const projects = [
  {
    title: "Find-Movie",
    desc: "A movie discovery interface for searching and browsing films through a focused, easy-to-use layout.",
    tech: ["React", "JavaScript", "HTML", "CSS"]
  },
  {
    title: "E-commerce Platform",
    desc: "A full-stack shopping experience with authentication, product browsing, and payment-oriented application flows.",
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB"]
  },
  {
    title: "Birthday Wisher",
    desc: "A shareable birthday greeting experience designed to make sending a personal wish feel simple and memorable.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI"]
  },
  {
    title: "Todo List",
    desc: "A straightforward task manager for capturing daily work, organizing priorities, and keeping progress visible.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI"]
  }
];

export function Projects() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-6"
    >
      <header className="text-center mb-6">
        <h1 className="text-4xl mb-2 text-amber-950 fantasy-font">Quest Log</h1>
        <p className="text-amber-800 italic">A selection of projects from my development journey.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <OrnateWrapper key={idx} className="p-6 flex flex-col gap-3 hover:-translate-y-1 transition-transform cursor-pointer bg-amber-50/50">
            <h3 className="fantasy-font text-xl text-amber-950 font-bold border-b border-amber-200 pb-2">{proj.title}</h3>
            <p className="text-sm text-gray-800 flex-1">{proj.desc}</p>
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-amber-200/50">
              {proj.tech.map(t => (
                <span key={t} className="text-xs bg-amber-200/50 text-amber-900 px-2 py-1 rounded border border-amber-300 font-semibold shadow-sm">
                  {t}
                </span>
              ))}
            </div>
          </OrnateWrapper>
        ))}
      </div>
    </motion.div>
  );
}
