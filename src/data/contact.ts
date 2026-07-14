import { portfolioEmailAddress, portfolioEmailHref } from "./socialLinks";

export const contactData = {
  sectionTitle: "Contact",

  heading: "Let's build the next great software product together.",

  description:
    "I'm actively seeking Software Engineer and Full Stack Developer opportunities where I can contribute, learn, and build scalable products with modern technologies. If you have an opportunity or simply want to connect, I'd be happy to hear from you.",

  contacts: [
    {
      id: "email",
      title: "Email",
      value: portfolioEmailAddress,
      link: portfolioEmailHref,
      icon: "mail",
      copyable: true,
    },
    {
      id: "linkedin",
      title: "LinkedIn",
      value: "linkedin.com/in/gayathri-palraj",
      link: "https://linkedin.com/in/gayathri-palraj",
      icon: "linkedin",
      external: true,
    },
    {
      id: "github",
      title: "GitHub",
      value: "github.com/GayathriPalraj-dev",
      link: "https://github.com/GayathriPalraj-dev",
      icon: "github",
      external: true,
    },
    {
      id: "location",
      title: "Location",
      value: "Chennai, Tamil Nadu, India",
      link: "",
      icon: "map-pin",
    },
  ],

  availability: {
    title: "Available for Full-Time Opportunities",
    description:
      "Actively seeking Software Engineer and Full Stack Developer roles.",
  },

  cta: {
    primary: {
      label: "Send Email",
      href: portfolioEmailHref,
    },
    secondary: {
      label: "Download Resume",
      href: "/resume.pdf",
    },
  },
};
