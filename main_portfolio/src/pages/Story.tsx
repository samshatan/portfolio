import { motion } from 'motion/react';
import { BannerPanel } from '../components/BannerPanel';
import { publicUrl } from '../lib/publicUrl';

export function Story() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-8"
    >
      <header className="text-center">
        <h1 className="text-4xl md:text-5xl mb-2 text-amber-950 fantasy-font">About Me</h1>
        <p className="text-base md:text-lg italic text-amber-800">A Story of Code, Cosmogony, and Comfort</p>
      </header>

      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <img
          alt="Illustrated owl with glasses beside a shelf of books and a steaming mug"
          className="w-full max-w-[220px] h-auto drop-shadow-md shrink-0"
          src={publicUrl('owl-shelf.png')}
        />

        <BannerPanel title="Chapter 1" className="flex-1 w-full">
          <h2 className="text-2xl mb-3 text-amber-950 fantasy-font">The Beginning: A Spark of Curiosity</h2>
          <p className="leading-relaxed text-gray-800 text-sm md:text-base">
            My earliest encounters with technology happened on a hand-me-down desktop tucked into the corner of the living room. Games came first, then curiosity about how they were made, and soon I was pulling apart every menu and config file I could find. That itch to look behind the curtain never left; it just grew into a habit of building small things, breaking them, and learning what made them tick.
          </p>
        </BannerPanel>
      </div>

      <BannerPanel title="Chapter 2">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="w-full md:w-1/4 flex justify-center">
            <img
              alt="Colorful mechanical keyboard"
              className="w-full max-w-[160px] h-auto object-contain drop-shadow-md"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-oIAJuG5FAr6-cmoIpDXzzVND4xJ9ZwxQBJOcyKhML79JgN4Kggaw1cxaeOPU9tZAkXtTLS3YNDBgeXmKOJQtKCF1SCJvgE-fuOcJHlvqnshoe7UJHb493SAXIYbsr67y4A3bZaBigc6oVHRFzqmFYrUGZYr81zuq_mweF44vaXsjtXD_Xg8YxFyHL6JGLY3BABLO3ehaSwZILkHfp0FeYSqpyAiFKSuaKPZSXUUAUVhY_NB_46CZ"
            />
          </div>
          <div className="w-full md:w-2/4 text-center md:text-left">
            <h2 className="text-xl md:text-2xl mb-3 text-amber-950 fantasy-font">Tech Quest: The Coding Odyssey</h2>
            <p className="leading-relaxed text-gray-800 text-sm md:text-base">
              My current toolkit includes React, TypeScript, Tailwind CSS, JavaScript, HTML, CSS, and Shadcn UI, with additional experience exploring Node.js, Express, MongoDB, Java, Python, Git, npm, and Photoshop. I learn best by turning ideas into working projects and refining them as I go.
            </p>
          </div>
          <div className="w-full md:w-1/4 flex justify-center">
            <img
              alt="Open star map book"
              className="w-full max-w-[160px] h-auto object-contain drop-shadow-md"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb0miY5hxQIcPyYB92noj6qBWVOZs5sRE0q4_0SqtDDTuXKAbtfriHdg4DqYmHC2jbHxjo0m3Tt6gJDaRWVCsIUmVdVpi8OV9D5k293XS_dqPxgKtxVV-2ynS-hEIHEqaGJZ4Z-MoZsua3i6sakOSxma4U3gsbrHL9ZhyQ6Ackm9VrfYsuRSRwVjZrJyYLwzFybyXTrjc5gIYtPWLfUlMKNYZikVJSGxvVeUFleksSYYwyEDf83hyi"
            />
          </div>
        </div>
      </BannerPanel>
    </motion.div>
  );
}
