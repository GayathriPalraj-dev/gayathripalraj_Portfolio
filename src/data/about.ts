export interface TechnologyGroup {
  title: string;
  items: string[];
}

export const aboutData = {
  title: "About Me",

  heading: "I build scalable software solutions with passion and purpose.",

  description: [
    "I'm a Full Stack Developer specializing in the MERN stack. I enjoy building responsive, user-friendly web applications with clean architecture and modern technologies.",

    "I recently completed my Bachelor of Engineering in Computer Science and continue to improve my skills through hands-on projects and continuous learning.",
  ],
};

export const technologyGroups: TechnologyGroup[] = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
    ],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Figma" ,
    ],
  },
];