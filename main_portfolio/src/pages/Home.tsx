import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'motion/react';
import { BannerPanel } from '../components/BannerPanel';
import { Send, Sparkles } from 'lucide-react';

const contents = [
  {
    title: "The Story",
    desc: "How curiosity turned into a craft, chapter by chapter.",
    page: "Story",
  },
  {
    title: "The Inventory",
    desc: "Shields, swords and scrolls — the tools of the trade.",
    page: "Inventory",
  },
  {
    title: "The Quest Log",
    desc: "Apps, tools and experiments that made it out the door.",
    page: "Projects",
  },
  {
    title: "Send a Letter",
    desc: "The owl is always ready for a new message.",
    page: "Contact",
  },
];

export function Home({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [sageQuery, setSageQuery] = useState("");
  const [sageResponse, setSageResponse] = useState("");
  const [isAsking, setIsAsking] = useState(false);

  const askSage = async (e: FormEvent) => {
    e.preventDefault();
    if (!sageQuery.trim() || isAsking) return;

    setIsAsking(true);
    setSageResponse("The Sage is gazing into the orb of knowledge...");

    try {
      const res = await fetch('/api/sage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: sageQuery })
      });

      const data = await res.json();
      if (data.answer) {
        setSageResponse(data.answer);
      } else if (data.error) {
        setSageResponse(`Error: ${data.error}`);
      }
    } catch {
      setSageResponse("The magical connection was interrupted. Please try again later.");
    } finally {
      setIsAsking(false);
      setSageQuery("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-8 pb-4"
    >
      <header>
        <h1 className="text-4xl md:text-5xl mb-2 text-amber-950 fantasy-font">Sameer Maurya</h1>
        <p className="text-base md:text-lg italic text-amber-800">
          Developer of warm interfaces and quiet backends.
        </p>
      </header>

      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 ">
        <img
          alt="Illustrated owl with glasses beside a shelf of books and a steaming mug"
          className="w-full max-w-[220px] h-auto drop-shadow-md shrink-0"
          src="/owl-shelf.png"
        />

        <BannerPanel title="Prologue" className="flex-1 w-full">
          <h2 className="text-2xl mb-3 text-amber-950 fantasy-font text-center">Welcome to the Reading Nook</h2>
          <p className="leading-relaxed text-gray-800 text-sm md:text-base text-center">
            The kettle is on, the shelves are open, and this nook is where I keep the work I care about.
            Warm interfaces, quiet backends, and the small details that make a product feel considered.
            Wander at your own pace.
          </p>
          <div className="flex justify-center mt-6">
            <button
              type="button"
              onClick={() => onNavigate('Story')}
              className="px-8 py-2.5 rounded-full bg-[#efe3cc] border border-amber-300/80 text-amber-950 fantasy-font shadow-sm hover:bg-[#e8d8b8] hover:-translate-y-0.5 transition-all"
            >
              Begin the story.
            </button>
          </div>
        </BannerPanel>
      </div>

      <BannerPanel title="Table of Contents">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contents.map((item) => (
            <button
              key={item.title}
              type="button"
              onClick={() => onNavigate(item.page)}
              className="toc-card text-left hover:-translate-y-0.5 transition-transform"
            >
              <h3 className="fantasy-font text-lg text-amber-950 mb-1">{item.title}</h3>
              <p className="text-sm text-amber-900/80 leading-relaxed">{item.desc}</p>
            </button>
          ))}
        </div>
      </BannerPanel>

      <BannerPanel title="Sage's Corner">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Sparkles className="text-amber-700" size={18} />
          <p className="text-amber-800 italic text-sm text-center">
            Ask about projects, front-end skills, or the tools behind this portfolio.
          </p>
          <Sparkles className="text-amber-700" size={18} />
        </div>
        <div className="toc-card min-h-[96px] mb-3 text-left">
          {sageResponse ? (
            <p className="text-sm text-amber-950 leading-relaxed whitespace-pre-wrap">{sageResponse}</p>
          ) : (
            <span className="text-amber-800/70 italic text-sm">The Sage awaits your query...</span>
          )}
        </div>
        <form onSubmit={askSage} className="flex gap-2">
          <input
            type="text"
            value={sageQuery}
            onChange={(e) => setSageQuery(e.target.value)}
            placeholder="E.g., What did Sameer build with React?"
            className="flex-1 bg-[#f8f1e3] text-amber-950 border border-amber-300/70 rounded-full px-4 py-2 focus:outline-none focus:border-amber-500 transition-colors placeholder-amber-800/50 text-sm"
            disabled={isAsking}
          />
          <button
            type="submit"
            disabled={isAsking || !sageQuery.trim()}
            className="bg-amber-800 hover:bg-amber-700 text-amber-50 px-4 py-2 rounded-full border border-amber-900/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            <Send size={16} />
          </button>
        </form>
      </BannerPanel>
    </motion.div>
  );
}
