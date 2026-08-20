import { motion } from 'motion/react';
import { BannerPanel } from '../components/BannerPanel';
import { projects } from '../data/projects';

export function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-8"
    >
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl mb-2 text-amber-950 fantasy-font">Projects</h1>
        <p className="text-amber-800 italic">Quests completed, and a few still in progress.</p>
      </header>

      <BannerPanel title="Quest Log">
        <div className="flex flex-col gap-8">
          {projects.map((project) => (
            <article key={project.title} className="project-feature">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
                <div className="lg:col-span-3">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="fantasy-font text-2xl md:text-3xl text-amber-950">{project.title}</h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title}`}
                      className="inline-flex h-7 w-7 aspect-square shrink-0 p-0 items-center justify-center rounded-full border border-amber-400 text-amber-900 hover:bg-amber-100 transition-colors storybook-btn"
                    >
                      ↗
                    </a>
                  </div>
                  <h4 className="text-amber-800 mb-3">{project.guild}</h4>
                  <p className="text-gray-800 text-sm md:text-base leading-relaxed mb-4">{project.details}</p>
                  <ul className="space-y-2 text-sm text-amber-950 mb-4">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="quest-bullet mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span key={tag} className="text-xs bg-[#efe3cc] text-amber-900 px-3 py-1 rounded-full border border-amber-300/80 storybook-btn">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="quest-shot quest-shot-large"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </BannerPanel>
    </motion.div>
  );
}
