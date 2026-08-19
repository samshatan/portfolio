/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { Story } from './pages/Story';
import { Experience } from './pages/Experience';
import { Inventory } from './pages/Inventory';
import { Projects } from './pages/Projects';
import { Achievements } from './pages/Achievements';
import { Contact } from './pages/Contact';
import { Sidebar } from './components/Sidebar';
import { Github, Linkedin, Mail, Moon, Sun, Sparkles } from 'lucide-react';

export default function App() {
  const [activePage, setActivePage] = useState('Home');
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    if (isNight) {
      document.documentElement.classList.add('night-mode');
    } else {
      document.documentElement.classList.remove('night-mode');
    }
  }, [isNight]);

  const navItems = ['Home', 'Story', 'Experience', 'Inventory', 'Projects', 'Achievements', 'Contact'];
  const usesSidebar = ['Home', 'Story', 'Contact'].includes(activePage);

  const renderContent = () => {
    switch (activePage) {
      case 'Home': return <Home onNavigate={setActivePage} />;
      case 'Story': return <Story />;
      case 'Experience': return <Experience />;
      case 'Inventory': return <Inventory />;
      case 'Projects': return <Projects />;
      case 'Achievements': return <Achievements />;
      case 'Contact': return <Contact />;
      default: return <Home onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="page-shell">
      <div className="gutter-art gutter-left" aria-hidden="true">
        <span className="gutter-seal">✦</span>
        <span className="gutter-vine">❧</span>
        <span className="gutter-seal gutter-seal-late">☽</span>
      </div>

      <main className="parchment-container">
        <div className="page-sticker sticker-top-left"><Sparkles size={24} /></div>
        <div className="page-sticker sticker-bottom-right">✦</div>
        <button
          onClick={() => setIsNight(!isNight)}
          className="absolute top-4 right-4 md:top-8 md:right-8 z-50 p-2 rounded-full bg-amber-200/50 border border-amber-300 text-amber-900 hover:scale-110 transition-transform shadow-sm flex items-center justify-center day-night-toggle"
          title="Toggle Day/Night Cycle"
        >
          {isNight ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        <div className="content-wrapper">
          <nav className="site-nav flex justify-center gap-2 md:gap-4 mb-10 fantasy-font text-sm md:text-base lg:text-lg flex-wrap">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => setActivePage(item)}
                className={`transition-all px-4 py-1.5 rounded-full ${
                  activePage === item
                    ? 'text-amber-900 bg-amber-200/60 shadow-sm border border-amber-300 scale-105 font-bold'
                    : 'hover:text-amber-800 hover:bg-amber-100/30'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="page-stage grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            <div key={activePage} className="lg:col-span-8 animate-fade-in">
              {renderContent()}
            </div>

            {usesSidebar ? (
              <Sidebar />
            ) : (
              <div className="hidden lg:block lg:col-span-4" aria-hidden="true" />
            )}
          </div>

          <footer className="mt-12 flex flex-col items-center gap-4 border-t border-amber-200/50 pt-6">
            <div className="flex gap-3">
              <a
                className="w-9 h-9 rounded-full bg-amber-950 text-amber-50 flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
                href="https://github.com/samshatan"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                className="w-9 h-9 rounded-full bg-[#0a66c2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
                href="https://www.linkedin.com/in/samshatan/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                className="w-9 h-9 rounded-full bg-amber-700 text-white flex items-center justify-center hover:scale-110 transition-transform shadow-sm"
                href="mailto:sameermaurya97044@gmail.com"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
            <p className="text-xs text-amber-800">© 2024 Sameer Maurya. Crafted with Code & Comfort.</p>
          </footer>
        </div>
      </main>

      <div className="gutter-art gutter-right" aria-hidden="true">
        <span className="gutter-seal">✧</span>
        <span className="gutter-vine">❦</span>
        <span className="gutter-seal gutter-seal-late">☾</span>
      </div>
    </div>
  );
}
