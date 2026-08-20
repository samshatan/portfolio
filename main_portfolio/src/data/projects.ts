import { publicUrl } from '../lib/publicUrl';

export const projects = [
  {
    title: "Find-Movie",
    guild: "HTML and CSS",
    details: "A movie discovery interface for searching and browsing films through a focused, easy-to-use layout.",
    highlights: [
      "Search-first browsing so finding a film stays quick",
      "Clean page structure in React, JavaScript, HTML, and CSS",
      "Interface shaped around one clear task instead of extra chrome",
      "Contributed to a team project with clear roles and shared goals",
    ],
    tech: ["HTML", "CSS"],
    image: publicUrl("projects/findmovie.jpg"),
    url: "https://github.com/Sanasaifi786/projectnow",
  },
  {
    title: "E-commerce Platform",
    guild: "Web Application",
    details: "A full-stack shopping experience with authentication, product browsing, and payment-oriented application flows.",
    highlights: [
      "Connected a React front end to Spring Boot and PostgreSQL back end",
      "Authentication and catalog flows that stay readable end to end",
      "Practiced turning a store idea into a working application",
    ],
    tech: ["React", "TypeScript", "Node.js", "Spring Boot", "PostgreSQL"],
    image: publicUrl("projects/ecommerce.jpg"),
    url: "https://github.com/samshatan/e-commerce-training",
  },
  {
    title: "Todo List",
    guild: "React and TypeScript",
    details: "A straightforward task manager for capturing daily work, organizing priorities, and keeping progress visible.",
    highlights: [
      "Simple capture and organize flow for everyday tasks",
      "Reusable components with a consistent visual system",
      "Practice shipping a complete utility instead of a fragment",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    image: publicUrl("projects/todo.jpg"),
    url: "https://github.com/samshatan/Todo-App",
  },
  {
    title: "Plant Selling Platform",
    guild: "Web Application",
    details: "A full-stack application for browsing and purchasing plants, with user authentication and a shopping cart.",
    highlights: [
      "Implemented user authentication and product catalog",
      "Built a shopping cart and checkout flow with React and Node.js",
      "Practiced integrating front-end and back-end technologies",
    ],
    tech: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    image: publicUrl("projects/plantselling.jpg"),
    url: "https://onlinenursery.in"
  },
  {
    title: "Basic Gaming Site",
    guild: "Phaser 3",
    details: "A simple gaming site built with Phaser 3, featuring a basic game and interactive elements.",
    highlights: [
      "Developed a basic game using Phaser 3 framework",
      "Implemented interactive elements and animations",
      "Gained experience in game development and web integration",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Phaser 3"],
    image: publicUrl("projects/gaming.jpg"),
    url: "https://samshatan.github.io/Game-Dev-Learning/index.html",
  },
  {
    title: "Parcel Delivery Website",
    guild: "Web Application",
    details: "A parcel delivery website for tracking shipments and accessing essential delivery information through a clear, user-friendly interface.",
    highlights: [
      "Designed and built a focused parcel delivery experience",
      "Created clear navigation for accessing shipment information",
      "Available online at officialparcel.com",
    ],
    tech: ["React", "TypeScript"],
    image: publicUrl("projects/officialparcel.jpg"),
    url: "https://www.officialparcel.com",
  },
  {
    title: "Brick Our House",
    guild: "Web and Mobile Application",
    details: "A property-focused website and mobile application for exploring and managing house-building and related services, available on the web and Google Play.",
    highlights: [
      "Built and deployed the Brick Our House website",
      "Developed and published the companion application on Google Play",
      "Created a consistent experience across web and mobile platforms",
    ],
    tech: ["React", "TypeScript", "Mobile Application"],
    image: publicUrl("projects/brickourhouse.jpg"),
    url: "https://www.brickourhouse.com",
  }
];
