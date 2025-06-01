import { motion } from "framer-motion";
import {
  Briefcase,
  LayoutDashboardIcon,
  RocketIcon,
  Server,
} from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    title: "E-commerce PWA with AI",
    icon: <Briefcase className="w-6 h-6" aria-label="E-commerce PWA Icon" />,
    description:
      "A mobile-first, AI-driven shopping platform with optimized UX for higher conversions.",
    technologies: [
      "React",
      "Next.js App Router",
      "Stripe",
      "GPT API",
      "Workbox PWA",
    ],
  },
  {
    title: "SaaS Dashboard with AI Insights",
    icon: (
      <LayoutDashboardIcon
        className="w-6 h-6"
        aria-label="SaaS Dashboard Icon"
      />
    ),
    description:
      "A real-time, AI-powered SaaS platform for analytics, decision-making, and automation.",
    technologies: [
      "Next.js",
      "Prisma",
      "tRPC/Firebase",
      "GPT",
      "OpenAI embeddings",
    ],
  },
  {
    title: "Booking System + i18n + PWA",
    icon: <Server className="w-6 h-6" aria-label="Booking System Icon" />,
    description:
      "A global booking solution with multi-language support and seamless payments.",
    technologies: ["Next.js", "FullCalendar", "i18next", "Workbox", "Stripe"],
  },
  {
    title: "AI-Powered Productivity App",
    icon: (
      <RocketIcon className="w-6 h-6" aria-label="AI Productivity App Icon" />
    ),
    description:
      "Smart workflows, automation, and AI-powered task management for businesses.",
    technologies: ["Next.js", "React", "GPT-4", "Firebase", "Vercel"],
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-center 
                 bg-[url('/textures/bg-projects.svg')] bg-cover bg-center lazy-load 
                 dark:bg-gradient-to-br dark:from-[#0f0f1b] dark:via-[#1b1b2f] dark:to-black 
                 text-black dark:text-white px-6 py-16 md:px-20 md:py-24 scroll-mt-16 overflow-hidden"
      role="region"
      aria-labelledby="projects-heading"
    >
      {/* Floating Background Shapes */}
      <motion.div
        className="absolute inset-0 z-0 opacity-25 floating-shapes"
        aria-hidden="true"
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="absolute top-10 left-10 w-32 h-32 bg-pink-300 rounded-full blur-2xl"
        />
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-400 rounded-lg rotate-12 blur-lg"
        />
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="absolute top-40 right-40 w-24 h-24 bg-teal-400 rounded-full blur-lg"
        />
      </motion.div>

      {/* Heading */}
      <header className="relative z-10 w-full max-w-3xl">
        <h2
          id="projects-heading"
          className="text-4xl md:text-5xl font-extrabold mb-8 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-3 rounded-xl shadow-lg backdrop-blur-sm bg-white/80 dark:bg-transparent dark:bg-gradient-to-r dark:from-blue-600 dark:via-pink-500 dark:to-yellow-400 dark:bg-clip-text dark:text-transparent"
          >
            Featured{" "}
            <span className="text-pink-600 dark:text-pink-400">Projects</span>
          </motion.span>
        </h2>
      </header>

      {/* Projects List */}
      <motion.ul
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto z-10"
      >
        {projects.map((project) => (
          <motion.li
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 rounded-xl shadow-xl bg-white/80 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/20 dark:ring-white/10"
          >
            <article>
              <header className="flex items-center gap-6 mb-6 text-blue-700 dark:text-blue-300">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-white/10">
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </header>
              <p className="text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm bg-gray-200 dark:bg-white/10 dark:text-gray-100 border border-white/20 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
