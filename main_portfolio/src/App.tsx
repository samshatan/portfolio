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
import { SocialBar } from './components/SocialBar';
import { ChapterProgress } from './components/ChapterProgress';
import { Moon, Sun, Sparkles } from 'lucide-react';

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
  const chapterIndex = Math.max(1, navItems.indexOf(activePage) + 1);
  const usesSidebar = ['Home', 'Story', 'Inventory'].includes(activePage);
  const sidebarMode = activePage === 'Inventory' ? 'stats' : 'full';

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
          <nav className="site-nav flex justify-center items-center gap-x-3 md:gap-x-5 gap-y-2 mb-5 text-lg md:text-xl flex-wrap">
            {navItems.map(item => (
              <button
                key={item}
                onClick={() => setActivePage(item)}
                className={`nav-link ${activePage === item ? 'nav-link-active' : ''}`}
              >
                {item}
              </button>
            ))}
          </nav>

          <ChapterProgress current={chapterIndex} total={6} label={activePage} />

          <div className={`page-stage grid grid-cols-1 gap-8 lg:gap-10 ${usesSidebar ? 'lg:grid-cols-12' : ''}`}>
            <div key={activePage} className={`${usesSidebar ? 'lg:col-span-8' : ''} animate-fade-in`}>
              {renderContent()}
            </div>

            {usesSidebar && <Sidebar mode={sidebarMode} />}
          </div>

          <footer className="mt-12 flex flex-col items-center gap-4 border-t border-amber-200/50 pt-6">
            <SocialBar />
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
