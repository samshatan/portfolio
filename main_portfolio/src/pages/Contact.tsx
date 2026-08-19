import { motion } from 'motion/react';
import { OrnateWrapper } from '../components/OrnateWrapper';

export function Contact() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-6 items-center"
    >
      <header className="text-center mb-6">
        <h1 className="text-4xl mb-2 text-amber-950 fantasy-font">Get In Touch</h1>
        <p className="text-amber-800 italic">Have a project, idea, or opportunity to discuss?</p>
      </header>

      <OrnateWrapper className="w-full max-w-md p-8 bg-amber-50/80">
        <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-1.5">
            <label className="text-amber-950 font-bold text-sm uppercase tracking-wider">Name</label>
            <input 
              type="text" 
              className="bg-[#f8f1e3] border-2 border-amber-300/50 rounded-md p-2.5 text-amber-950 focus:outline-none focus:border-amber-500 transition-colors shadow-inner" 
              placeholder="Your name" 
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-amber-950 font-bold text-sm uppercase tracking-wider">Email</label>
            <input 
              type="email" 
              className="bg-[#f8f1e3] border-2 border-amber-300/50 rounded-md p-2.5 text-amber-950 focus:outline-none focus:border-amber-500 transition-colors shadow-inner" 
              placeholder="you@example.com" 
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-amber-950 font-bold text-sm uppercase tracking-wider">Message</label>
            <textarea 
              className="bg-[#f8f1e3] border-2 border-amber-300/50 rounded-md p-2.5 text-amber-950 focus:outline-none focus:border-amber-500 transition-colors min-h-[120px] shadow-inner resize-y" 
              placeholder="Tell me a little about your idea..."
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="mt-2 bg-gradient-to-b from-amber-800 to-amber-950 text-[#f4efe6] fantasy-font text-lg py-3 rounded-md hover:from-amber-700 hover:to-amber-900 transition-all border border-amber-950 shadow-md active:scale-95 cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </OrnateWrapper>
    </motion.div>
  );
}
