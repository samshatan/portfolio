import { SendHorizonal } from "lucide-react";
import { DarkMode } from "./DarkMode";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow-md">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <span className="font-bold text-xl text-blue-600 dark:text-blue-400">Sameer Maurya</span>
        <ul className="flex flex-wrap justify-center items-center gap-4 py-3 font-semibold text-gray-500 dark:text-gray-300">
          <li><a href="#home" className="hover:text-black dark:hover:text-white transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-black dark:hover:text-white transition-colors">About</a></li>
          <li><a href="#skills" className="hover:text-black dark:hover:text-white transition-colors">Skills</a></li>
          <li><a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</a></li>
          <li><a href="#contact" className="hover:text-black dark:hover:text-white transition-colors">Contact</a></li>
          <li><a href="#techstack" className="hover:text-black dark:hover:text-white transition-colors"> Tech Stack</a></li>
          <li><DarkMode /></li>
          <li>
            <a href="https://github.com/samshatan" className="hover:text-black dark:hover:text-white transition-colors">
              <SendHorizonal />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;