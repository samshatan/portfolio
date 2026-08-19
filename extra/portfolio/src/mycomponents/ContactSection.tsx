import { Mail, Github, Linkedin } from 'lucide-react';

function ContactSection() {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:sameermaurya97044@gmail.com',
      text: 'sameermaurya97044@gmail.com',
      color: 'hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/samshatan',
      text: 'github.com/samshatan',
      color: 'hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-500'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/samshatan/',
      text: 'linkedin.com/in/samshatan',
      color: 'hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-600'
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out via email or connect with me on social media.
          </p>
        </div>

        <div className="flex flex-col gap-4 max-w-xl mx-auto">
          {contactLinks.map(({ icon: Icon, label, href, text, color }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel={label !== 'Email' ? 'noopener noreferrer' : undefined}
              className={`group flex items-center gap-4 p-5 bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 transition-all duration-300 ${color} transform hover:scale-105 hover:shadow-lg`}
              aria-label={`${label}: ${text}`}
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700 group-hover:bg-opacity-80 transition-colors">
                <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                  {label}
                </div>
                <div className="text-base font-semibold text-gray-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {text}
                </div>
              </div>
              <svg 
                className="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 group-hover:translate-x-1 transition-all" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;