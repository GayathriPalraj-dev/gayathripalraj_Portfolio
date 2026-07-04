export const heroData = {
  greeting: "Hi, I'm",

  name: "Gayathri Palraj",

  roles: [
    "Full Stack Developer (MERN)",
    "Software Developer",
    "React Developer",
    "MERN Stack Developer",
  ],

  tagline:
    "Building scalable software solutions with modern frontend and backend technologies.",

  location: "Chennai, India",

  locationDetail: "Based in Tamil Nadu",

  primaryCTA: {
    label: "View My Work",
    href: "#projects",
  },

  secondaryCTA: {
    label: "Download Resume",
    href: "/resume.pdf",
  },

  highlights: [
    {
      id: "location",
      title: "Chennai, India",
      description: "Based in Tamil Nadu",
      icon: "map-pin",
    },
    {
      id: "role",
      title: "Software Developer",
      description: "Passionate about coding",
      icon: "badge",
    },
    {
      id: "stack",
      title: "MERN Stack",
      description: "MongoDB, Express, React, Node",
      icon: "code",
    },
    {
      id: "mindset",
      title: "Problem Solver",
      description: "Turning ideas into reality",
      icon: "rocket",
    },
  ],
} as const;
