export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  highlights: string[];
  featured: boolean;
  github: string;
  live: string | null;
  year: string;
  kind: string;
  image?: string;
  caseStudy?: {
    problem: string;
    approach: string;
    outcome: string;
  };
};

export const site = {
  brand: "IMX",
  fullName: "Imran Noori",
  headline: "I build full-stack web apps and teach people to do the same.",
  role: "Full-Stack Web Developer",
  location: "Afghanistan",
  availability: "Open to projects & collaboration",
  profileImage: "/images/imran.jpg",
  logo: "/images/logo-transparent.png",
  logoMark: "/images/logo-transparent.png",
  ogImage: "/images/og-card.jpg",
  summary:
    "Full-stack developer and computer instructor building modern, scalable web applications with JavaScript, Node.js, Express, MongoDB, React, and Next.js. I teach programming, Linux, and creative tools—and ship clean, user-friendly products.",
  nav: [
    { name: "Home", path: "/" },
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
      slug: "linkhub",
      name: "LinkHub",
      tagline: "Link-in-bio product with shop & analytics",
      description:
        "Full-stack link-in-bio platform—one public page for links, themes, and a shop with product collections. Auth, onboarding, live preview, click tracking, and a polished dashboard built as a monorepo.",
      stack: [
        "Next.js",
        "React Query",
        "Express",
        "MongoDB",
        "JWT",
        "TypeScript",
      ],
      highlights: [
        "Auth, email verify, and password reset",
        "Links, themes, shop & collections",
        "Public profile with view/click analytics",
        "Live mobile preview in the dashboard",
        "Monorepo: Express API + Next.js web",
      ],
      featured: true,
      github: "https://github.com/noori-codes/linkhub",
      live: "https://linkhub-inky.vercel.app",
      year: "2026",
      kind: "Full-stack product",
      image: "/images/linkhub.png",
      caseStudy: {
        problem:
          "Creators need one place for links, branding, and light commerce—without duct-taping a bio page, a shop, and analytics together.",
        approach:
          "Shipped a monorepo product: Express + MongoDB API with JWT auth, and a Next.js dashboard with live mobile preview, themes, shop collections, and click tracking.",
        outcome:
          "A publishable public profile at /u/[username] with onboarding, email verify, analytics, and a dashboard that feels like a real SaaS—not a demo.",
      },
    },
    {
      slug: "imx-os",
      name: "IMX OS",
      tagline: "Personal OS for focus, habits & goals",
      description:
        "A dark, calm personal operating system—tasks, focus sessions, habits, goals, notes, books, and analytics in one clear room. Built with Next.js, Supabase, and a polished productivity UI.",
      stack: [
        "Next.js",
        "Supabase",
        "TypeScript",
        "Zustand",
        "TipTap",
        "Recharts",
      ],
      highlights: [
        "Dashboard with focus, habits & streaks",
        "Tasks, calendar, goals, notes & books",
        "Focus sessions and daily review",
        "Analytics and “Ask IMX” assistant",
        "Auth & data with Supabase",
      ],
      featured: true,
      github: "https://github.com/noori-codes/imx-os",
      live: "https://imx-os.vercel.app",
      year: "2026",
      kind: "Full-stack product",
      image: "/images/imx-os.png",
      caseStudy: {
        problem:
          "Productivity tools scatter attention across apps. I wanted one calm space for operate → build → reflect—without noise.",
        approach:
          "Designed a personal OS UI around daily pulse: focus sessions, habits, goals, notes (TipTap), and analytics on Next.js with Supabase auth and Zustand state.",
        outcome:
          "A cohesive dark workspace with streaks, review, and an “Ask IMX” entry point—built as a product I’d actually use every day.",
      },
    },
    {
      slug: "natours",
      name: "Natours",
      tagline: "Full-stack tour booking platform",
      description:
        "Production-style tour booking app with authentication, role-based access, bookings, reviews, image uploads, admin tools, and a secure REST API—built with Node.js, Express, and MongoDB.",
      stack: ["Node.js", "Express", "MongoDB", "Mongoose", "Pug", "JWT"],
      highlights: [
        "User auth & role-based authorization",
        "Tour booking & reviews",
        "Image upload & processing",
        "Admin dashboard",
        "Secure REST API",
      ],
      featured: false,
      github: "https://github.com/noori-codes",
      live: null,
      year: "2025",
      kind: "Full-stack app",
    },
    {
      slug: "the-wild-oasis",
      name: "The Wild Oasis",
      tagline: "Cabin booking & hotel operations app",
      description:
        "Full-stack cabin management experience with bookings, guest flows, and a polished React interface—built to practice real product patterns beyond static pages.",
      stack: ["React", "JavaScript", "Supabase", "React Query"],
      highlights: [
        "Booking and cabin management flows",
        "Authenticated app experience",
        "Data-driven UI with React Query",
        "Production deploy on Vercel",
      ],
      featured: false,
      github: "https://github.com/noori-codes/the-wild-oasis",
      live: "https://the-wild-oasis-eight-sooty.vercel.app",
      year: "2025",
      kind: "Full-stack app",
    },
    {
      slug: "omnifood",
      name: "Omnifood",
      tagline: "Responsive food-delivery marketing site",
      description:
        "High-converting landing page for a fictional food service—layout systems, sections, and mobile-first CSS practiced end to end.",
      stack: ["HTML", "CSS", "Responsive Design"],
      highlights: [
        "Mobile-first layout",
        "Marketing page structure",
        "Deployed on Vercel",
      ],
      featured: false,
      github: "https://github.com/noori-codes/Omnifood",
      live: "https://omnifood-ashen.vercel.app",
      year: "2024",
      kind: "Landing page",
    },
    {
      slug: "laslesvpn",
      name: "LaslesVPN",
      tagline: "VPN product landing page",
      description:
        "Clean product landing UI with pricing, features, and responsive sections—focused on visual hierarchy and frontend craft.",
      stack: ["HTML", "CSS"],
      highlights: [
        "Section-based landing layout",
        "Responsive components",
        "Live Vercel deploy",
      ],
      featured: false,
      github: "https://github.com/noori-codes/LaslesVPN",
      live: "https://lasles-vpn-ecru-eight.vercel.app",
      year: "2024",
      kind: "Landing page",
    },
    {
      slug: "guess-my-number",
      name: "Guess My Number",
      tagline: "Browser game in vanilla JavaScript",
      description:
        "A small interactive game built with HTML, CSS, and JavaScript—DOM updates, game state, and UX feedback without a framework.",
      stack: ["HTML", "CSS", "JavaScript"],
      highlights: [
        "Game state logic",
        "DOM manipulation",
        "Instant playable demo",
      ],
      featured: false,
      github: "https://github.com/noori-codes/Guess-My-Number-",
      live: "https://guess-my-number-game-phi.vercel.app",
      year: "2024",
      kind: "JavaScript game",
    },
  ] satisfies Project[],
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

export function getProject(slug: string): Project | undefined {
  return site.projects.find((p) => p.slug === slug);
}
