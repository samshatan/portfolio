import { motion } from 'motion/react';
import { OrnateWrapper } from '../components/OrnateWrapper';
import { Ribbon } from '../components/Ribbon';

export function Story() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-10"
    >
      <header className="text-center mb-4">
        <h1 className="text-5xl mb-2 text-amber-950 fantasy-font">About Me</h1>
        <p className="text-lg italic text-amber-800">A Story of Code, Cosmogony, and Comfort</p>
      </header>

      <div className="flex justify-center mb-8">
        <img 
          alt="Illustrated owl with glasses beside a shelf of books and a steaming mug"
          className="max-w-full h-auto drop-shadow-md hover:-translate-y-1 transition-transform" 
          src="/owl-shelf.png"
        />
      </div>

      <div className="relative flex flex-col items-center">
        <Ribbon>Chapter 1</Ribbon>
        <OrnateWrapper className="mt-4 p-8">
          <h2 className="text-2xl mb-4 text-amber-950 fantasy-font">The Beginning: A Spark of Curiosity</h2>
          <p className="leading-relaxed text-gray-800 text-sm">
            My earliest encounters with technology happened on a hand-me-down desktop tucked into the corner of the living room. Games came first, then curiosity about how they were made, and soon I was pulling apart every menu and config file I could find. That itch to look behind the curtain never left; it just grew into a habit of building small things, breaking them, and learning what made them tick.
          </p>
        </OrnateWrapper>
      </div>

      <div className="relative flex flex-col items-center mt-4">
        <Ribbon>Chapter 2</Ribbon>
        <OrnateWrapper className="mt-4 flex flex-col md:flex-row items-center justify-between gap-6 p-8">
          <div className="w-full md:w-1/4 flex justify-center">
            <img 
              alt="Keyboard" 
              className="w-full max-w-[200px] h-auto object-contain drop-shadow-md hover:scale-105 transition-transform" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-oIAJuG5FAr6-cmoIpDXzzVND4xJ9ZwxQBJOcyKhML79JgN4Kggaw1cxaeOPU9tZAkXtTLS3YNDBgeXmKOJQtKCF1SCJvgE-fuOcJHlvqnshoe7UJHb493SAXIYbsr67y4A3bZaBigc6oVHRFzqmFYrUGZYr81zuq_mweF44vaXsjtXD_Xg8YxFyHL6JGLY3BABLO3ehaSwZILkHfp0FeYSqpyAiFKSuaKPZSXUUAUVhY_NB_46CZ"
            />
          </div>
          <div className="w-full md:w-2/4">
            <h2 className="text-xl mb-3 text-amber-950 fantasy-font">Tech Quest: The Coding Odyssey</h2>
            <p className="leading-relaxed text-gray-800 text-sm">
              My current toolkit includes React, TypeScript, Tailwind CSS, JavaScript, HTML, CSS, and Shadcn UI, with additional experience exploring Node.js, Express, MongoDB, Java, Python, Git, npm, and Photoshop. I learn best by turning ideas into working projects and refining them as I go.
            </p>
          </div>
          <div className="w-full md:w-1/4 flex justify-center">
            <img 
              alt="Star Map" 
              className="w-full max-w-[200px] h-auto object-contain drop-shadow-md hover:scale-105 transition-transform" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb0miY5hxQIcPyYB92noj6qBWVOZs5sRE0q4_0SqtDDTuXKAbtfriHdg4DqYmHC2jbHxjo0m3Tt6gJDaRWVCsIUmVdVpi8OV9D5k293XS_dqPxgKtxVV-2ynS-hEIHEqaGJZ4Z-MoZsua3i6sakOSxma4U3gsbrHL9ZhyQ6Ackm9VrfYsuRSRwVjZrJyYLwzFybyXTrjc5gIYtPWLfUlMKNYZikVJSGxvVeUFleksSYYwyEDf83hyi"
            />
          </div>
        </OrnateWrapper>
      </div>
    </motion.div>
  );
}
