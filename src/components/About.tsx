import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";

export default function About() {
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
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center 
               bg-[url('/textures/light-texture.svg')] bg-cover bg-center 
               dark:bg-gradient-to-br dark:from-[#0f0f1b] dark:via-[#1b1b2f] dark:to-black 
               text-black dark:text-white px-6 py-4 md:px-16 md:py-0 scroll-mt-16 overflow-hidden"
      aria-labelledby="about-heading"
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
          id="about-heading"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-8 text-center"
        >
          {/* Inline wrapper for background and blur */}
          <span
            className="inline-block px-6 py-3 rounded-xl shadow-lg backdrop-blur-sm
                 bg-white/80 dark:bg-transparent
                 dark:bg-gradient-to-r dark:from-blue-600 dark:via-pink-500 dark:to-yellow-400
                 dark:bg-clip-text dark:text-transparent"
          >
            About <span className="text-pink-600 dark:text-pink-400">Me</span>
          </span>
        </motion.h2>
      </header>

      {/* About Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl text-[1.1rem] md:text-xl text-center leading-loose 
             p-6 rounded-xl shadow-xl 
             bg-white/80 dark:bg-white/10 backdrop-blur-xl 
             ring-1 ring-white/20 dark:ring-white/10"
      >
        <p className="mb-4 font-semibold text-gray-900 dark:text-gray-100 tracking-wide">
          👋 Hello! I'm
          <span className="text-blue-600 dark:text-blue-300"> Dancan</span>, a
          passionate
          <span className="text-pink-500 dark:text-pink-400 italic">
            {" "}
            frontend and MERN stack developer
          </span>
          who thrives on building beautiful and functional web experiences.
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          From sleek interfaces to robust backends, I love turning ideas into
          interactive, responsive, and blazing-fast apps. I specialize in React,
          Node.js, MongoDB, and everything in between.
        </p>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Whether it's building tools for small businesses or creating SaaS
          solutions, I'm all about clean code, sharp UI, and delivering value
          through tech.
        </p>
        <p className="italic text-blue-700 dark:text-blue-400 font-medium mt-4">
          Let’s bring your vision to life — one line of code at a time. 🚀
        </p>

        {/* Skill Badges */}
        <div
          className="mt-6 flex flex-wrap justify-center gap-3 text-sm"
          role="list"
          aria-label="Skills I specialize in"
        >
          {[
            { name: "React", bg: "bg-blue-100", text: "text-blue-700" },
            { name: "Node.js", bg: "bg-green-100", text: "text-green-700" },
            { name: "Express", bg: "bg-gray-200", text: "text-gray-800" },
            { name: "MongoDB", bg: "bg-green-200", text: "text-green-800" },
            { name: "TypeScript", bg: "bg-blue-200", text: "text-blue-800" },
            {
              name: "JavaScript",
              bg: "bg-yellow-200",
              text: "text-yellow-800",
            },
            { name: "Tailwind CSS", bg: "bg-teal-100", text: "text-teal-700" },
            { name: "Next.js", bg: "bg-gray-100", text: "text-gray-900" },
            { name: "REST APIs", bg: "bg-purple-100", text: "text-purple-700" },
            { name: "Git", bg: "bg-red-100", text: "text-red-700" },
          ].map(({ name, bg, text }) => (
            <span
              key={name}
              role="listitem"
              aria-label={name}
              className={`${bg} ${text} dark:bg-white/10 dark:text-gray-100 
                 backdrop-blur px-3 py-1 rounded-full 
                 font-medium border border-white/30 
                 shadow-sm hover:scale-105 transition`}
            >
              {name}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
