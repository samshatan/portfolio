function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto flex flex-col items-center px-4">
        {/* <img src="/photo.jpg" alt="Sameer Maurya" className="h-32 rounded-full mb-6 shadow-lg" /> */}
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white text-center">About Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 text-center">
          Hi! I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Sameer Maurya</span>, a passionate developer with experience in building modern web applications using React, TypeScript, and Tailwind CSS.
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-4">
          I enjoy solving problems, learning new technologies, and creating beautiful, user-friendly interfaces.
        </p>
        <ul className="text-gray-500 dark:text-gray-400 text-center">
          <li>🌱 Always learning something new</li>
          <li>📚 Love reading and exploring tech</li>
          <li>💡 Interested in UI/UX and performance</li>
        </ul>
      </div>
    </section>
  );
}
export default AboutSection;