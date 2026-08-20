import { motion } from 'motion/react';
import { BannerPanel } from '../components/BannerPanel';

const entries = [
  {
    title: "RIFT Hackathon Finalist (2026) ",
    guild: "Team build under time pressure",
    timeline: "Recent",
    details: "My first real stretch of experience came from reaching the finals of a hackathon. The weekend was short, the problem was open, and the work had to ship — design, build, and present with a team before the clock ran out.",
    highlights: [
      "Qualifying Multiple Questionaire During Hackathon",
      "Reached the finals by turning an idea into a working demo in 36 hours",
      "Practiced building quickly with clear roles and a shared goal",
      "Learned how feedback, time limits, and presentation shape a product",
    ],
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
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl mb-2 text-amber-950 fantasy-font">Experience</h1>
        <p className="text-amber-800 italic">
          Early quests, one finals run, and more still ahead.
        </p>
      </header>

      <BannerPanel title="Guild Record">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {entries.map((entry) => (
            <article key={entry.title} className="satchel-card flex-col !items-stretch">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <div>
                  <h3 className="fantasy-font text-xl text-amber-950">{entry.title}</h3>
                  <h4 className="text-amber-800 text-sm">{entry.guild}</h4>
                </div>
                <span className="text-sm text-amber-800/80 whitespace-nowrap">{entry.timeline}</span>
              </div>
              <p className="text-gray-800 text-sm leading-relaxed mb-3">{entry.details}</p>
              <ul className="space-y-2 text-sm text-amber-950">
                {entry.highlights.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="quest-bullet mt-1.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
          <article className="satchel-card flex-col !items-stretch">
            <h3 className="fantasy-font text-xl text-amber-950 mb-1">The next chapter</h3>
            <h4 className="text-amber-800 text-sm mb-2">Looking for internships and first roles</h4>
            <p className="text-gray-800 text-sm leading-relaxed">
              Professional chapters are still opening. Until then I keep shipping personal projects, tightening my front-end craft, and showing up ready for the next team that needs a builder.
            </p>
          </article>
        </div>
      </BannerPanel>
    </motion.div>
  );
}
