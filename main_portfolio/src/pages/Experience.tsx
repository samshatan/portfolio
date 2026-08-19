import { motion } from 'motion/react';
import { BannerPanel } from '../components/BannerPanel';
import { ChapterProgress } from '../components/ChapterProgress';

const quests = [
  {
    chapter: 3,
    role: "Find-Movie",
    guild: "React and JavaScript",
    timeline: "Shipped quest",
    details: "A movie discovery interface for searching and browsing films through a focused, easy-to-use layout.",
    highlights: [
      "Search-first browsing so finding a film stays quick",
      "Clean page structure in React, JavaScript, HTML, and CSS",
      "Interface shaped around one clear task instead of extra chrome",
    ],
    image: "/projects/findmovie.jpg",
  },
  {
    chapter: 4,
    role: "E-commerce Platform",
    guild: "React, TypeScript, and Node.js",
    timeline: "Full-stack quest",
    details: "A full-stack shopping experience with authentication, product browsing, and payment-oriented application flows.",
    highlights: [
      "Connected a React front end to Express and MongoDB",
      "Authentication and catalog flows that stay readable end to end",
      "Practiced turning a store idea into a working application",
    ],
    image: "/projects/ecommerce.jpg",
  },
  {
    chapter: 5,
    role: "Birthday Wisher",
    guild: "React, TypeScript, and Shadcn UI",
    timeline: "Interface quest",
    details: "A shareable birthday greeting experience designed to make sending a personal wish feel simple and memorable.",
    highlights: [
      "Built a focused greeting flow with Tailwind CSS and Shadcn UI",
      "Kept the layout warm, readable, and easy to share by link",
      "Turned a small idea into a complete, polished page",
    ],
    image: "/projects/birthday.jpg",
  },
  {
    chapter: 6,
    role: "Todo List",
    guild: "React, TypeScript, and Tailwind CSS",
    timeline: "Daily-tool quest",
    details: "A straightforward task manager for capturing daily work, organizing priorities, and keeping progress visible.",
    highlights: [
      "Simple capture and organize flow for everyday tasks",
      "Reusable components with a consistent visual system",
      "Practice shipping a complete utility instead of a fragment",
    ],
    image: "/projects/todo.jpg",
  },
];

export function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-8"
    >
      <ChapterProgress current={3} total={7} label="Experience" />

      <header className="text-center">
        <h1 className="text-4xl md:text-5xl mb-2 text-amber-950 fantasy-font">Experience</h1>
        <p className="text-amber-800 italic">
          Quests completed, roles filled, and lessons earned along the way.
        </p>
      </header>

      <div className="flex flex-col gap-8">
        {quests.map((quest) => (
          <BannerPanel key={quest.chapter} title={`Chapter ${quest.chapter}`}>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
              <div className="lg:col-span-3">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <div>
                    <h3 className="fantasy-font text-2xl text-amber-950">{quest.role}</h3>
                    <h4 className="text-amber-800">{quest.guild}</h4>
                  </div>
                  <span className="text-sm text-amber-800/80 whitespace-nowrap">{quest.timeline}</span>
                </div>
                <p className="text-gray-800 text-sm leading-relaxed mb-4">{quest.details}</p>
                <ul className="space-y-2 text-sm text-amber-950">
                  {quest.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="quest-bullet mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-2">
                <img
                  src={quest.image}
                  alt={`${quest.role} screenshot`}
                  className="quest-shot"
                />
              </div>
            </div>
          </BannerPanel>
        ))}
      </div>
    </motion.div>
  );
}
