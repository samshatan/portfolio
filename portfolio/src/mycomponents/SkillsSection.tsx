import { SiJavascript, SiReact, SiTypescript, SiTailwindcss, SiHtml5, SiCss3, SiShadcnui, SiNpm, SiAdobephotoshop } from "react-icons/si";
import { FaGit, FaJava, FaPython } from "react-icons/fa";

function SkillsSection() {
  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">Skills</h2>
      <ul className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        <li className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow text-center flex flex-col items-center hover:scale-105 transition-transform">
          <SiHtml5 className="text-yellow-400 text-4xl mb-2" />
          <h3 className="font-semibold text-lg mb-2">HTML</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Expert in building semantic and accessible web pages.</p>
        </li>
        <li className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow text-center flex flex-col items-center hover:scale-105 transition-transform">
          <SiCss3 className="text-yellow-400 text-4xl mb-2" />
          <h3 className="font-semibold text-lg mb-2">CSS</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Expert in building responsive layouts and styling.</p>
        </li>
        <li className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow text-center flex flex-col items-center hover:scale-105 transition-transform">
          <SiJavascript className="text-yellow-400 text-4xl mb-2" />
          <h3 className="font-semibold text-lg mb-2">JavaScript</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Expert in building interactive web applications.</p>
        </li>
        <li className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow text-center flex flex-col items-center hover:scale-105 transition-transform">
          <SiReact className="text-blue-400 text-4xl mb-2" />
          <h3 className="font-semibold text-lg mb-2">React</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Proficient in building user interfaces with React.</p>
        </li>
        <li className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow text-center flex flex-col items-center hover:scale-105 transition-transform">
          <SiTypescript className="text-blue-600 text-4xl mb-2" />
          <h3 className="font-semibold text-lg mb-2">TypeScript</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Strongly typed JavaScript for scalable apps.</p>
        </li>
        <li className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow text-center flex flex-col items-center hover:scale-105 transition-transform">
          <SiTailwindcss className="text-sky-400 text-4xl mb-2" />
          <h3 className="font-semibold text-lg mb-2">Tailwind CSS</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Rapid UI development with utility-first CSS.</p>
        </li>
        <li className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow text-center flex flex-col items-center hover:scale-105 transition-transform">
          <SiShadcnui className="text-sky-400 text-4xl mb-2" />
          <h3 className="font-semibold text-lg mb-2">Shadcn UI</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Rapid UI development with Shadcn UI components.</p>
        </li>
        <li className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow text-center flex flex-col items-center hover:scale-105 transition-transform">
          <FaGit className="text-orange-600 text-4xl mb-2" />
          <h3 className="font-semibold text-lg mb-2">Git</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Version control and collaboration.</p>
        </li>
        <li className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow text-center flex flex-col items-center hover:scale-105 transition-transform">
          <FaJava className="text-orange-600 text-4xl mb-2" />
          <h3 className="font-semibold text-lg mb-2">Java</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Backend development and REST APIs.</p>
        </li>
        <li className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow text-center flex flex-col items-center hover:scale-105 transition-transform">
          <FaPython className="text-orange-600 text-4xl mb-2" />
          <h3 className="font-semibold text-lg mb-2">Python</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Data analysis and scripting.</p>
        </li>
        <li className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow text-center flex flex-col items-center hover:scale-105 transition-transform">
          <SiNpm className="text-orange-600 text-4xl mb-2" />
          <h3 className="font-semibold text-lg mb-2">NPM</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Package management for JavaScript.</p>
        </li>
        <li className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow text-center flex flex-col items-center hover:scale-105 transition-transform">
          <SiAdobephotoshop className="text-orange-600 text-4xl mb-2" />
          <h3 className="font-semibold text-lg mb-2">Adobe Photoshop</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Image editing and graphic design.</p>
        </li>
      </ul>
    </section>
  );
}
export default SkillsSection;