import { publicUrl } from '../lib/publicUrl';

export const projects = [
  {
    title: "Find-Movie",
    guild: "React and JavaScript",
    details: "A movie discovery interface for searching and browsing films through a focused, easy-to-use layout.",
    highlights: [
      "Search-first browsing so finding a film stays quick",
      "Clean page structure in React, JavaScript, HTML, and CSS",
      "Interface shaped around one clear task instead of extra chrome",
    ],
    tech: ["React", "JavaScript", "HTML", "CSS"],
    image: publicUrl("projects/findmovie.jpg"),
  },
  {
    title: "E-commerce Platform",
    guild: "React, TypeScript, and Node.js",
    details: "A full-stack shopping experience with authentication, product browsing, and payment-oriented application flows.",
    highlights: [
      "Connected a React front end to Express and MongoDB",
      "Authentication and catalog flows that stay readable end to end",
      "Practiced turning a store idea into a working application",
    ],
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    image: publicUrl("projects/ecommerce.jpg"),
  },
  {
    title: "Birthday Wisher",
    guild: "React, TypeScript, and Shadcn UI",
    details: "A shareable birthday greeting experience designed to make sending a personal wish feel simple and memorable.",
    highlights: [
      "Built a focused greeting flow with Tailwind CSS and Shadcn UI",
      "Kept the layout warm, readable, and easy to share by link",
      "Turned a small idea into a complete, polished page",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    image: publicUrl("projects/birthday.jpg"),
  },
  {
    title: "Todo List",
    guild: "React, TypeScript, and Tailwind CSS",
    details: "A straightforward task manager for capturing daily work, organizing priorities, and keeping progress visible.",
    highlights: [
      "Simple capture and organize flow for everyday tasks",
      "Reusable components with a consistent visual system",
      "Practice shipping a complete utility instead of a fragment",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    image: publicUrl("projects/todo.jpg"),
  },
];
