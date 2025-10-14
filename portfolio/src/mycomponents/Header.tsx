import { useState, useEffect } from "react";
import { Github, Menu, X } from "lucide-react";
import { DarkMode } from "./DarkMode";

function Header() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur shadow-md">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4 py-2">
        {/* Logo/Name */}
        <button
          onClick={scrollToTop}
          className="font-bold text-xl text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
        >
          Sameer Maurya
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6 font-semibold text-gray-500 dark:text-gray-300">
          {navItems.map(item => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`hover:text-black dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-2 py-1 ${
                  activeSection === item.href.slice(1)
                    ? 'text-black dark:text-white border-b-2 border-blue-600 dark:border-blue-400'
                    : ''
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <DarkMode />
          </li>
          <li>
            <a
              href="https://github.com/samshatan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
              className="hover:text-black dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1"
            >
              <Github className="w-5 h-5" />
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <DarkMode />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            className="text-gray-500 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded p-1"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <ul className="flex flex-col font-semibold text-gray-500 dark:text-gray-300">
            {navItems.map(item => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleNavClick}
                  className={`block px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white transition-colors ${
                    activeSection === item.href.slice(1)
                      ? 'text-black dark:text-white bg-gray-50 dark:bg-gray-800 border-l-4 border-blue-600 dark:border-blue-400'
                      : ''
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://github.com/samshatan"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="flex items-center gap-2 px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-black dark:hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;