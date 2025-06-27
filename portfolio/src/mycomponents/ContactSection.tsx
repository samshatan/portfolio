function ContactSection() {
  return (
    <section id="contact" className="py-12 bg-white dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Contact Me</h2>
      <p className="mt-4 text-lg text-center text-gray-600 dark:text-gray-300">
        Feel free to reach out via email or connect with me on social media.
      </p>
      <div className="flex justify-center mt-6">
        <a href="mailto:sameermaurya97044@gmail.com" className="text-blue-600 hover:underline">
          sameermaurya97044@gmail.com
        </a>
      </div>
    </section>
  );
}
export default ContactSection;