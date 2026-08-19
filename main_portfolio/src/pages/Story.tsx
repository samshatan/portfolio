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
        <h1 className="text-5xl mb-2 text-amber-950 fantasy-font">About Sameer</h1>
        <p className="text-lg italic text-amber-800">A practical path through code and design</p>
      </header>

      <div className="flex justify-center mb-8">
        <img 
          alt="Owl and books illustration" 
          className="max-w-full h-auto drop-shadow-md hover:-translate-y-1 transition-transform" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQL_RF60BubmhzO1oGAFoEXLUZHamEUif6agsFwiFEseu9E9uiHy-FxJ1AEkSkGnyqjUjc7RoHUCjrz6Kr92qnAPEJnPAthoo6hT2u7pVs5UyB5Vc41fY-091FSRIIVVcTRaNyngYbhafP6kqYI6srtZorMkiJA1dXLnvcZlPoC6N7pBg9TDC_bc_-1Lxm5QduD0IijpKkUxA5zPfSk6nILPYQf8DwHwehZMAmtGDFIwlu3blDLgKw"
        />
      </div>

      <div className="relative flex flex-col items-center">
        <Ribbon>Level 1</Ribbon>
        <OrnateWrapper className="mt-4 p-8">
          <h2 className="text-2xl mb-4 text-amber-950 fantasy-font">The Terminal Awakening</h2>
          <p className="leading-relaxed text-gray-800 text-sm">
            I am Sameer Maurya, a web developer who enjoys building modern applications and learning how the pieces of the web fit together. My interests sit at the intersection of front-end development, visual design, and problem solving.
          </p>
        </OrnateWrapper>
      </div>

      <div className="relative flex flex-col items-center mt-4">
        <Ribbon>Level 10</Ribbon>
        <OrnateWrapper className="mt-4 flex flex-col md:flex-row items-center justify-between gap-6 p-8">
          <div className="w-full md:w-1/4 flex justify-center">
            <img 
              alt="Keyboard" 
              className="w-full max-w-[200px] h-auto object-contain drop-shadow-md hover:scale-105 transition-transform" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-oIAJuG5FAr6-cmoIpDXzzVND4xJ9ZwxQBJOcyKhML79JgN4Kggaw1cxaeOPU9tZAkXtTLS3YNDBgeXmKOJQtKCF1SCJvgE-fuOcJHlvqnshoe7UJHb493SAXIYbsr67y4A3bZaBigc6oVHRFzqmFYrUGZYr81zuq_mweF44vaXsjtXD_Xg8YxFyHL6JGLY3BABLO3ehaSwZILkHfp0FeYSqpyAiFKSuaKPZSXUUAUVhY_NB_46CZ"
            />
          </div>
          <div className="w-full md:w-2/4">
            <h2 className="text-xl mb-3 text-amber-950 fantasy-font">The Full-Stack Dungeon</h2>
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
