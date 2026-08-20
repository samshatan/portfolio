import { motion } from 'motion/react';
import { BannerPanel } from '../components/BannerPanel';
import { Code2, Github, Globe, Instagram, Linkedin, Mail, Send } from 'lucide-react';

export function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-8"
    >
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl mb-2 text-amber-950 fantasy-font">Contact</h1>
        <p className="text-amber-800 italic">Send a letter – the owl knows the way.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <BannerPanel title="Write to Me" className="lg:col-span-3">
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-1.5">
              <label className="text-amber-950 font-bold text-sm">Your name</label>
              <input
                type="text"
                className="contact-field"
                placeholder="A curious traveller."
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-amber-950 font-bold text-sm">Your email</label>
              <input
                type="email"
                className="contact-field"
                placeholder="you@example.com"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-amber-950 font-bold text-sm">Your message</label>
              <textarea
                className="contact-field min-h-[140px] resize-y"
                placeholder="Tell me about the quest..."
              />
            </div>
            <button
              type="submit"
              className="self-start flex items-center gap-2 px-8 py-2.5 rounded-full bg-[#efe3cc] border border-amber-300/80 text-amber-950 fantasy-font shadow-sm hover:bg-[#e8d8b8] hover:-translate-y-0.5 transition-all"
            >
              <Send size={16} />
              Send Letter
            </button>
          </form>
        </BannerPanel>

        <BannerPanel title="Where to Find Me" className="lg:col-span-2">
          <div className="flex flex-col gap-3">
            <a href="mailto:sameermaurya97044@gmail.com" className="find-me-card">
              <Mail size={18} className="text-amber-800 shrink-0" />
              <div>
                <h3 className="font-bold text-amber-950 text-sm">Email</h3>
                <p className="text-sm text-amber-800 break-all">sameermaurya97044@gmail.com</p>
              </div>
            </a>
            <div className="find-me-card">
              <Send size={18} className="text-amber-800 shrink-0" />
              <div>
                <h3 className="font-bold text-amber-950 text-sm">Owl Post</h3>
                <p className="text-sm text-amber-800">Usually answers within a day.</p>
              </div>
            </div>
            <a
              href="https://github.com/samshatan"
              target="_blank"
              rel="noreferrer"
              className="find-me-card"
            >
              <Github size={18} className="text-amber-800 shrink-0" />
              <div>
                <h3 className="font-bold text-amber-950 text-sm">GitHub</h3>
                <p className="text-sm text-amber-800">github.com/samshatan</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/samshatan"
              target="_blank"
              rel="noreferrer"
              className="find-me-card"
            >
              <Linkedin size={18} className="text-amber-800 shrink-0" />
              <div>
                <h3 className="font-bold text-amber-950 text-sm">LinkedIn</h3>
                <p className="text-sm text-amber-800">linkedin.com/in/samshatan</p>
              </div>
            </a>
            <a
              href="https://www.instagram.com/samshatan"
              target="_blank"
              rel="noreferrer"
              className="find-me-card"
            >
              <Instagram size={18} className="text-amber-800 shrink-0" />
              <div>
                <h3 className="font-bold text-amber-950 text-sm">Instagram</h3>
                <p className="text-sm text-amber-800">instagram.com/samshatan</p>
              </div>
            </a>
            <a
              href="https://leetcode.com/u/samshatan"
              target="_blank"
              rel="noreferrer"
              className="find-me-card"
            >
              <Code2 size={18} className="text-amber-800 shrink-0" />
              <div>
                <h3 className="font-bold text-amber-950 text-sm">LeetCode</h3>
                <p className="text-sm text-amber-800">leetcode.com/u/samshatan</p>
              </div>
            </a>
            <div className="find-me-card">
              <Globe size={18} className="text-amber-800 shrink-0" />
              <div>
                <h3 className="font-bold text-amber-950 text-sm">Based in</h3>
                <p className="text-sm text-amber-800">India — UTC+5:30</p>
              </div>
            </div>
          </div>
        </BannerPanel>
      </div>
    </motion.div>
  );
}
