import { portfolioEmailHref } from "./socialLinks";

export const footerData = {
  brand: {
    name: "Gayathri Palraj",

    role: "Software Developer | Full Stack Developer",

    tagline:
      "Building scalable software solutions with modern web technologies.",

    location: "Chennai, Tamil Nadu, India",
  },

  socialLinks: [
    {
      id: "github",
      title: "GitHub",
      icon: "github",
      link: "https://github.com/GayathriPalraj-dev",
      external: true,
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      icon: "linkedin",
      link: "https://linkedin.com/in/gayathri-palraj",
      external: true,
    },
    {
      id: "email",
      title: "Email",
      icon: "mail",
      link: portfolioEmailHref,
      external: true,
    },
  ],

  quickLinks: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],

  resumeLink: "/resume.pdf",

  availability: {
    status: "Open to Full-Time Opportunities",
  },

  builtWith: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Vite",
  ],

  version: "Portfolio v1.0",

  copyright: `© ${new Date().getFullYear()} Gayathri Palraj. All rights reserved.`,
};
