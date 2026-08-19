import { motion } from 'motion/react';
import { OrnateWrapper } from '../components/OrnateWrapper';

const strengths = [
  { 
    title: "Front-end Builder", 
    desc: "React, JavaScript, TypeScript, HTML, CSS, and Tailwind CSS form the core of my interface work.", 
    rarity: "Primary craft",
    color: "text-orange-600 border-orange-300 bg-orange-50"
  },
  { 
    title: "Component Thinker", 
    desc: "I like turning repeated interface patterns into reusable pieces that stay easy to understand and extend.", 
    rarity: "Design habit",
    color: "text-purple-700 border-purple-300 bg-purple-50"
  },
  { 
    title: "Full-stack Curious", 
    desc: "Alongside front-end work, I explore Node.js, Express, MongoDB, Java, and Python to understand the wider application.", 
    rarity: "Growing range",
    color: "text-blue-700 border-blue-300 bg-blue-50"
  },
  { 
    title: "Always Learning", 
    desc: "I keep developing through practice, reading, experimentation, and projects that make new concepts tangible.", 
    rarity: "Daily practice",
    color: "text-emerald-700 border-emerald-300 bg-emerald-50"
  }
];

export function Achievements() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-6"
    >
      <header className="text-center mb-6">
        <h1 className="text-4xl mb-2 text-amber-950 fantasy-font">Strengths</h1>
        <p className="text-amber-800 italic">The tools and working principles behind my projects.</p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {strengths.map((achieve, idx) => (
          <OrnateWrapper key={idx} className={`p-6 flex flex-col gap-3 transition-transform hover:scale-105 ${achieve.color.split(' ')[2]}`}>
            <div className="flex justify-between items-start mb-2">
              <h3 className="fantasy-font text-xl text-amber-950 font-bold">{achieve.title}</h3>
            </div>
            <span className={`text-xs px-2 py-1 rounded border font-bold self-start uppercase tracking-wider ${achieve.color}`}>
              {achieve.rarity}
            </span>
            <p className="text-sm text-gray-800 mt-2">{achieve.desc}</p>
          </OrnateWrapper>
        ))}
      </div>
    </motion.div>
  );
}
