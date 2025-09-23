import { motion } from "framer-motion";

function HeroSection() {
  return (
    <motion.section
      id="home"
      className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <section id="home" className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <img src="" alt="Sana Saifi" className="h-32 rounded-full mb-6 shadow-lg" />
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900 dark:text-white">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Sana Saifi</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-600 dark:text-gray-300 mb-6">
          Web Developer | Competetive Programmer | TypeScript | Tailwind CSS
        </p>
        <a href="#projects" className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition">
          See My Work
        </a>
      </section>
    </motion.section>
  );
}
export default HeroSection;