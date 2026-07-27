export const site = {
  brand: "IMX",
  fullName: "Imran Noori",
  headline: "I build full-stack web apps and teach people to do the same.",
  role: "Full-Stack Web Developer",
  location: "Afghanistan",
  availability: "Open to projects & collaboration",
  profileImage: "/images/imran.jpg",
  logo: "/images/imx-logo.png",
  logoMark: "/images/imx-mark.png",
  summary:
    "Full-stack developer and computer instructor building modern, scalable web applications with JavaScript, Node.js, Express, MongoDB, React, and Next.js. I teach programming, Linux, and creative tools—and ship clean, user-friendly products.",
  nav: [
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ],
  skills: {
    frontend: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "React",
      "Next.js",
    ],
    backend: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
    database: ["MongoDB", "Mongoose"],
    tools: ["Git", "GitHub", "Linux (Ubuntu)", "VS Code", "npm"],
  },
  concepts: [
    "MVC",
    "REST APIs",
    "CRUD",
    "Auth & Authorization",
    "Responsive Design",
    "SSR",
    "Image Processing",
  ],
  experience: [
    {
      role: "Computer Instructor",
      topics: [
        "Windows",
        "Linux",
        "Microsoft Office",
        "Adobe Photoshop",
        "Web Development",
      ],
      description:
        "Guide students through practical computing—from operating systems and productivity software to foundational web development—with hands-on learning.",
    },
  ],
  projects: [
    {
      slug: "natours",
      name: "Natours",
      tagline: "Full-stack tour booking platform",
      description:
        "Production-style tour booking app with authentication, role-based access, bookings, reviews, image uploads, admin tools, and a secure REST API.",
      stack: ["Node.js", "Express", "MongoDB", "Mongoose", "Pug", "JWT"],
      highlights: [
        "Auth & role-based authorization",
        "Tour booking & reviews",
        "Image upload & processing",
        "Admin dashboard",
        "Secure REST API",
      ],
      featured: true,
      github: "https://github.com/noori-codes",
      live: null as string | null,
    },
    {
      slug: "auth-api",
      name: "Auth API Kit",
      tagline: "JWT authentication system",
      description:
        "Reusable authentication flow with signup, login, protected routes, and token-based access—built as a foundation for full-stack apps.",
      stack: ["Node.js", "Express", "MongoDB", "JWT"],
      highlights: [
        "Secure password hashing",
        "Protected route middleware",
        "Clean REST structure",
      ],
      featured: false,
      github: "https://github.com/noori-codes",
      live: null as string | null,
    },
    {
      slug: "next-apps",
      name: "Next.js Apps",
      tagline: "Modern React interfaces",
      description:
        "Responsive frontends with Next.js—routing, server components patterns, and polished UI built for real use cases.",
      stack: ["Next.js", "React", "Tailwind CSS"],
      highlights: [
        "App Router patterns",
        "Responsive layouts",
        "Component-driven UI",
      ],
      featured: false,
      github: "https://github.com/noori-codes",
      live: null as string | null,
    },
  ],
  education: {
    level: "High School",
    grade: "Grade 11",
    note: "Building professional skills through projects, teaching, and continuous self-learning.",
  },
  languages: [
    { name: "Dari", level: "Native" },
    { name: "English", level: "Intermediate — continuously improving" },
  ],
  services: [
    {
      title: "Full-Stack Web Development",
      description:
        "End-to-end apps—from database design to polished UI—on a modern JavaScript stack.",
    },
    {
      title: "Backend API Development",
      description:
        "RESTful APIs with Express, MongoDB, authentication, and secure data handling.",
    },
    {
      title: "Frontend Development",
      description:
        "Responsive interfaces with React, Next.js, and Tailwind CSS.",
    },
  ],
  learning: [
    "Advanced Next.js",
    "Backend Architecture",
    "Linux Administration",
    "Modern JavaScript",
  ],
  goals: [
    "Grow as a professional full-stack engineer",
    "Ship high-quality, scalable web applications",
    "Keep teaching and sharing knowledge",
    "Contribute to open source",
  ],
  contact: {
    email: "imrannoori1919@gmail.com",
    github: "https://github.com/noori-codes",
    portfolio: "https://imxnoori.vercel.app",
    youtube: "https://www.youtube.com/@techwithimx",
  },
} as const;

export type Site = typeof site;
export type Project = (typeof site.projects)[number];
