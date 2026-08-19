import { Code2, Github, Instagram, Linkedin, Mail } from 'lucide-react';

const links = [
  {
    href: "https://github.com/samshatan",
    label: "GitHub",
    icon: Github,
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/samshatan/",
    label: "LinkedIn",
    icon: Linkedin,
    external: true,
  },
  {
    href: "https://www.instagram.com/samshatan",
    label: "Instagram",
    icon: Instagram,
    external: true,
  },
  {
    href: "https://leetcode.com/u/samshatan",
    label: "LeetCode",
    icon: Code2,
    external: true,
  },
  {
    href: "mailto:sameermaurya97044@gmail.com",
    label: "Email",
    icon: Mail,
    external: false,
  },
];

export function SocialBar() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.label}
            className="social-orb"
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noreferrer" : undefined}
            aria-label={link.label}
          >
            <Icon size={16} />
          </a>
        );
      })}
    </div>
  );
}
