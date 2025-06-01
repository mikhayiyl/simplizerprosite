import { useRef } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Code,
  Server,
  Wrench,
  RocketIcon,
  UsersIcon,
  LayoutDashboardIcon,
} from "lucide-react";

const services = [
  {
    title: "Custom Web Development",
    icon: <Code className="w-6 h-6" />,
    description:
      "Beautiful, fast, and responsive websites built with modern tech.",
  },
  {
    title: "MERN Stack Applications",
    icon: <Server className="w-6 h-6" />,
    description:
      "Scalable web apps using MongoDB, Express, React, and Node.js.",
  },
  {
    title: "Business Tool Development",
    icon: <Briefcase className="w-6 h-6" />,
    description: "Custom tools for invoicing, inventory, and dashboards.",
  },
  {
    title: "Bug Fixing & Optimization",
    icon: <Wrench className="w-6 h-6" />,
    description: "Speed improvements and UI debugging for smooth performance.",
  },
  {
    title: "Landing Page Development",
    icon: <RocketIcon className="w-6 h-6" />,
    description: "High-converting, responsive landing pages optimized for SEO.",
  },
  {
    title: "Developer Collaboration",
    icon: <UsersIcon className="w-6 h-6" />,
    description:
      "Team collaboration, UI design integration, and agile support.",
  },
  {
    title: "Custom Dashboard Development",
    icon: <LayoutDashboardIcon className="w-6 h-6" />,
    description: "Powerful admin dashboards using Next.js and React.",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative min-h-screen flex flex-col items-center justify-center 
                 bg-[url('/textures/bg-services.svg')] bg-cover bg-center 
                 dark:bg-gradient-to-br dark:from-[#0f0f1b] dark:via-[#1b1b2f] dark:to-black 
                 text-black dark:text-white px-6 py-16 md:px-20 md:py-24 scroll-mt-16 overflow-hidden"
      aria-labelledby="services-heading"
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
        <motion.h2
          id="services-heading"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-8 text-center"
        >
          <span
            className="inline-block px-6 py-3 rounded-xl shadow-lg backdrop-blur-sm
                 bg-white/80 dark:bg-transparent
                 dark:bg-gradient-to-r dark:from-blue-600 dark:via-pink-500 dark:to-yellow-400
                 dark:bg-clip-text dark:text-transparent"
          >
            What I{" "}
            <span className="text-pink-600 dark:text-pink-400">Offer</span>
          </span>
        </motion.h2>
      </header>

      {/* Services List */}
      <motion.ul
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto z-10"
      >
        {services.map((service) => (
          <motion.li
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 rounded-xl shadow-xl 
                 bg-white/80 dark:bg-white/10 backdrop-blur-xl 
                 ring-1 ring-white/20 dark:ring-white/10"
          >
            <article>
              <header className="flex items-center gap-6 mb-6 text-blue-700 dark:text-blue-300">
                <div className="p-3 rounded-full bg-blue-100 dark:bg-white/10">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </header>
              <p className="text-gray-700 dark:text-gray-300">
                {service.description}
              </p>
            </article>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
