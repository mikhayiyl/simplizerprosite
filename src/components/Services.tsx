import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
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
      "Beautiful, fast, and responsive websites built with React, Tailwind, and modern web technologies.",
  },
  {
    title: "MERN Stack Applications",
    icon: <Server className="w-6 h-6" />,
    description:
      "End-to-end web apps using MongoDB, Express, React, and Node.js for scalable solutions.",
  },
  {
    title: "Business Tool Development",
    icon: <Briefcase className="w-6 h-6" />,
    description:
      "I develop custom tools for small businesses, such as invoicing, inventory systems, and dashboards.",
  },
  {
    title: "Bug Fixing & Optimization",
    icon: <Wrench className="w-6 h-6" />,
    description:
      "Speed improvements, UI fixes, and debugging for smooth performance.",
  },
  {
    title: "Landing Page Development",
    icon: <RocketIcon className="w-6 h-6" />,
    description:
      "High-converting, responsive landing pages optimized for performance, SEO, and user experience.",
  },
  {
    title: "Developer Collaboration & Team Support",
    icon: <UsersIcon className="w-6 h-6" />,
    description:
      "I collaborate with startups, designers, and dev teams to accelerate product delivery.",
  },
  {
    title: "Custom Dashboard Development",
    icon: <LayoutDashboardIcon className="w-6 h-6" />,
    description:
      "Scalable admin dashboards and control panels built with React, Next.js, and modern APIs.",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.5 });

  useEffect(() => {
    if (!sectionRef.current) return;

    const shapes = sectionRef.current.querySelectorAll(".floating-shape");
    gsap.fromTo(
      shapes,
      { y: -10 },
      {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 4,
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative min-h-screen flex flex-col items-center justify-center 
                 bg-[url('/textures/bg-services.svg')] bg-cover bg-center 
                 dark:bg-gradient-to-br dark:from-[#0f0f1b] dark:via-[#1b1b2f] dark:to-black 
                 text-black dark:text-white px-6 py-4 md:px-16 md:py-0 scroll-mt-16 overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Floating Background Shapes */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <div className="floating-shape absolute top-10 left-10 w-32 h-32 bg-pink-300 rounded-full blur-2xl"></div>
        <div className="floating-shape absolute bottom-20 right-20 w-40 h-40 bg-yellow-400 rounded-lg rotate-12 blur-lg"></div>
        <div className="floating-shape absolute top-40 right-40 w-24 h-24 bg-teal-400 rounded-full blur-lg"></div>
      </div>

      {/* Heading */}
      <header className="relative z-10 w-full max-w-3xl">
        <motion.h2
          id="services-heading"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
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
        className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {services.map((service) => (
          <motion.li
            key={service.title}
            className="p-6 rounded-xl shadow-xl 
                 bg-white/80 dark:bg-white/10 backdrop-blur-xl 
                 ring-1 ring-white/20 dark:ring-white/10"
          >
            <article>
              <header className="flex items-center gap-4 mb-4 text-blue-700 dark:text-blue-300">
                <div className="p-2 rounded-full bg-blue-100 dark:bg-white/10">
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
