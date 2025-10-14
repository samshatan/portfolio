import { Github, Linkedin, Mail, Heart } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Social Links */}
        <div className="flex justify-center items-center gap-6 mb-4">
          <a
            href="https://github.com/samshatan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:your.email@example.com"
            aria-label="Email"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <div className="flex justify-center items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
          <span>© {currentYear} Sameer Maurya. Made with</span>
          <Heart className="w-4 h-4 text-red-500 fill-red-500" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;