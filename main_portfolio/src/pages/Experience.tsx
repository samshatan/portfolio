import { motion } from 'motion/react';
import { OrnateWrapper } from '../components/OrnateWrapper';

const focusAreas = [
  {
    role: "Interface Craft",
    guild: "React and TypeScript",
    timeline: "Core focus",
    details: "I use React and TypeScript to shape reusable components and interactive web experiences with clear structure and dependable behavior."
  },
  {
    role: "Visual Systems",
    guild: "Tailwind CSS and Shadcn UI",
    timeline: "Working toolkit",
    details: "I care about responsive layouts, accessible structure, and visual consistency, using utility styling and component systems to move from idea to interface quickly."
  },
  {
    role: "Problem Solving",
    guild: "Competitive programming",
    timeline: "Always learning",
    details: "I enjoy breaking down problems, learning new technologies, and improving an idea through small, deliberate iterations."
  }
];

export function Experience() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-6"
    >
      <header className="text-center mb-6">
        <h1 className="text-4xl mb-2 text-amber-950 fantasy-font">Coding Experience</h1>
        <p className="text-amber-800 italic">The skills, tools, and problem-solving practice behind my work.</p>
      </header>

      <div className="flex flex-col gap-6 relative">
        {/* Timeline line */}
        <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-amber-300 hidden md:block"></div>

        {focusAreas.map((exp, idx) => (
          <div key={idx} className="relative flex flex-col md:flex-row gap-6 items-start">
            <div className="hidden md:flex shrink-0 w-14 h-14 bg-[#f8f1e3] border-2 border-amber-400 rounded-full items-center justify-center z-10 shadow-md">
              <span className="fantasy-font text-amber-900 font-bold text-lg">{idx + 1}</span>
            </div>
            <OrnateWrapper className="p-6 bg-amber-50/70 w-full hover:-translate-y-1 transition-transform">
              <div className="flex flex-col md:flex-row justify-between md:items-center border-b border-amber-200/50 pb-3 mb-3 gap-2">
                <div>
                  <h3 className="fantasy-font text-2xl text-amber-950 font-bold">{exp.role}</h3>
                  <h4 className="text-amber-800 font-semibold">{exp.guild}</h4>
                </div>
                <span className="text-sm bg-amber-200/50 text-amber-900 px-3 py-1 rounded-full border border-amber-300 whitespace-nowrap self-start md:self-auto">
                  {exp.timeline}
                </span>
              </div>
              <p className="text-gray-800 text-sm leading-relaxed">{exp.details}</p>
            </OrnateWrapper>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
