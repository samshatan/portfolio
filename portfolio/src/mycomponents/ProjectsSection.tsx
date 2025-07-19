import { motion } from "framer-motion";

type Project = {
  title: string;
  description: string;
  link?: string;
  image?: string;
  tech?: string[];
};

const projects: Project[] = [
  {
    title: "Find-Movie",
    description: "A movie search application that allows users to find and discover movies.",
    link: "",
    image: "/findmovie.jpg",
    tech: ["React", "Javascript", "TypeScript", "Html", "CSS"],
  },
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce application with user authentication and payment integration.",
    link: "",
    image: "/ecommerce.jpg",
    tech: ["React", "Javascript", "TypeScript", "Html", "CSS"],
  },
  {
    title: "Birthday Wisher",
    description: "A simple application to send birthday wishes through link.",
    link: "",
    image: "/birthday.jpg",
    tech: ["React Vue", "TypeScript", "Html", "Tailwind-CSS", "Shadcn-UI", "JavaScript"],
  },
  {
    title: "Todo List",
    description: "A simple todo list application to manage tasks.",
    link: "",
    image: "/todo.jpg",
    tech: ["React Vue", "TypeScript", "Html", "Tailwind CSS", "Shadcn-UI"],
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React, TypeScript, and Tailwind CSS.",
    link: "",
    image: "/portfolio.jpg",
    tech: ["React Vue", "TypeScript", "Tailwind CSS", "Html"],
  }
];

function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">Projects</h2>
      <p className="mb-10 text-lg text-center text-gray-600 dark:text-gray-300">Here are some of my recent projects.</p>
      <div className="max-w-5xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex flex-col items-center hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image || "/vite.svg"}
              alt={project.title}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
            {project.tech && (
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-xs font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">{project.description}</p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                View Project
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
export default ProjectsSection;