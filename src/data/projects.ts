export interface Project {
  id: string;
  order: number;
  featured: boolean;
  status: "Completed" | "In Progress";
  year: string;
  category: "Frontend" | "Backend" | "Full Stack" | "Database";
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  thumbnail: string | null;
  github: string | null;
  demo: string | null;
}

export const projectsData: Project[] = [
  {
    id: "portfolio",
    order: 1,
    featured: true,
    status: "Completed",
    year: "2025",
    category: "Frontend",
    title: "Gayathri Portfolio",
    subtitle: "Personal Developer Portfolio",
    description:
      "A production-grade software engineering portfolio built with React, TypeScript, Tailwind CSS, and modern frontend architecture. Designed to showcase projects, technical skills, and professional experience with a premium UI/UX.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Framer Motion",
    ],
    thumbnail: null,
    github: null,
    demo: null,
  },

  {
    id: "weather-app",
    order: 2,
    featured: true,
    status: "Completed",
    year: "2025",
    category: "Frontend",
    title: "Weather App",
    subtitle: "Real-Time Weather Dashboard",
    description:
      "A responsive weather application providing current weather conditions, geolocation support, city search, and a five-day forecast using the OpenWeather API.",
    technologies: [
      "React",
      "JavaScript",
      "CSS3",
      "OpenWeather API",
    ],
    thumbnail: null,
    github: null,
    demo: null,
  },

  {
    id: "recipe-studio",
    order: 3,
    featured: false,
    status: "Completed",
    year: "2025",
    category: "Frontend",
    title: "Recipe Studio",
    subtitle: "Recipe Discovery Platform",
    description:
      "A modern recipe browsing application featuring responsive layouts, category filtering, reusable components, and a clean user experience.",
    technologies: [
      "React",
      "JavaScript",
      "CSS3",
    ],
    thumbnail: null,
    github: null,
    demo: null,
  },

  {
    id: "secureride-ai",
    order: 4,
    featured: true,
    status: "Completed",
    year: "2025",
    category: "Full Stack",
    title: "SecureRide-AI",
    subtitle: "MERN Car Booking Platform",
    description:
      "A full-stack MERN application featuring authentication, secure booking management, protected routes, responsive dashboards, and scalable backend architecture.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
    ],
    thumbnail: null,
    github: null,
    demo: null,
  },

  {
    id: "customer-query-satisfaction",
    order: 5,
    featured: false,
    status: "Completed",
    year: "2025",
    category: "Database",
    title: "Customer Query Satisfaction",
    subtitle: "Database Management System",
    description:
      "A database-driven application for managing customer queries, improving response tracking, and supporting efficient customer service workflows using SQL and MySQL.",
    technologies: [
      "MySQL",
      "SQL",
      "Database Design",
    ],
    thumbnail: null,
    github: null,
    demo: null,
  },

  {
    id: "online-food-ordering",
    order: 6,
    featured: false,
    status: "Completed",
    year: "2024",
    category: "Frontend",
    title: "Online Food Ordering App",
    subtitle: "Responsive Restaurant Website",
    description:
      "A responsive food ordering application with interactive menus, ordering flow, and modern UI design built using core frontend technologies.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
    thumbnail: null,
    github: null,
    demo: null,
  },
];