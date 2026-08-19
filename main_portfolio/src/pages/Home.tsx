import { useState } from 'react';
import type { FormEvent } from 'react';
import { motion } from 'motion/react';
import { OrnateWrapper } from '../components/OrnateWrapper';
import { Send, Sparkles } from 'lucide-react';

export function Home() {
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
    } catch (err) {
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
      className="flex flex-col gap-8 items-center text-center pt-8 pb-12"
    >
      <header className="text-center mb-4">
        <h1 className="text-5xl mb-2 text-amber-950 fantasy-font">Sameer Maurya</h1>
        <p className="text-lg italic text-amber-800">Web developer and competitive programmer</p>
      </header>
      
      <OrnateWrapper className="p-8 max-w-2xl bg-amber-50/50">
          <p className="leading-relaxed text-gray-800 text-lg">
            I build modern web experiences with <strong>React, TypeScript, and Tailwind CSS</strong>, balancing thoughtful interfaces with practical engineering. 
            <br/><br/>
            This portfolio gathers selected projects, the tools I use most, and a little context about how I approach development.
            <br/><br/>
            I enjoy solving problems, exploring new technologies, and shaping interfaces that feel clear, useful, and enjoyable to use.
          </p>
      </OrnateWrapper>

      {/* Sage's Corner */}
      <OrnateWrapper className="w-full max-w-2xl bg-[#1e1e1e] border-gray-600 mt-4 relative overflow-hidden">
        {/* Magical subtle glow */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/20 blur-3xl rounded-full pointer-events-none"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/20 blur-3xl rounded-full pointer-events-none"></div>

        <div className="p-6 relative z-10 flex flex-col gap-4">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Sparkles className="text-purple-400" size={24} />
            <h2 className="fantasy-font text-3xl text-gray-100 font-bold">Sage's Corner</h2>
            <Sparkles className="text-purple-400" size={24} />
          </div>
          
          <p className="text-gray-400 italic text-sm mb-2">
            "Ask about Sameer's projects, front-end skills, or the tools behind this portfolio."
          </p>

          <div className="bg-[#121212] border border-gray-700 rounded-lg p-4 min-h-[120px] flex items-start text-left shadow-inner">
            {sageResponse ? (
              <motion.div 
                key={sageResponse} 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap"
              >
                {sageResponse}
              </motion.div>
            ) : (
              <span className="text-gray-600 italic text-sm">The Sage awaits your query...</span>
            )}
          </div>

          <form onSubmit={askSage} className="flex gap-2">
            <input 
              type="text" 
              value={sageQuery}
              onChange={(e) => setSageQuery(e.target.value)}
              placeholder="E.g., What did Sameer build with React?"
              className="flex-1 bg-[#2a2a2a] text-gray-200 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:border-purple-500 transition-colors placeholder-gray-500 text-sm"
              disabled={isAsking}
            />
            <button 
              type="submit"
              disabled={isAsking || !sageQuery.trim()}
              className="bg-purple-900 hover:bg-purple-800 text-purple-100 px-4 py-2 rounded-lg border border-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </OrnateWrapper>

    </motion.div>
  );
}
