import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const particlesRef = useRef<HTMLDivElement | null>(null);
  const shapesRef = useRef<HTMLDivElement | null>(null);

  // Parallax Effect for Background
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  // Particle Animation
  useEffect(() => {
    if (!particlesRef.current) return;

    const numParticles = 20;
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute w-2 h-2 bg-white rounded-full opacity-80";
      particlesRef.current.appendChild(particle);

      gsap.set(particle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: Math.random() * 1.2,
      });

      gsap.to(particle, {
        y: "-=40",
        repeat: -1,
        yoyo: true,
        duration: Math.random() * 3 + 2,
        ease: "power1.inOut",
      });
    }
  }, []);

  // Floating Geometric Shapes Animation
  useEffect(() => {
    if (!shapesRef.current) return;

    gsap.to(shapesRef.current.children, {
      y: "+=20",
      scale: 1.05,
      repeat: -1,
      yoyo: true,
      duration: 4,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-gray-900 dark:to-black text-white overflow-hidden"
    >
      {/* Parallax Background Gradient */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-600 opacity-20 z-0"
      ></motion.div>

      {/* Floating Geometric Shapes */}
      <motion.div ref={shapesRef} className="absolute inset-0 z-0 opacity-30">
        <motion.div className="absolute top-20 left-10 w-32 h-32 bg-blue-400 rounded-full blur-lg"></motion.div>
        <motion.div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500 rounded-lg rotate-12 blur-md"></motion.div>
        <motion.div className="absolute top-40 right-40 w-24 h-24 bg-teal-300 rounded-full blur-md"></motion.div>
      </motion.div>

      {/* Particle Background */}
      <div
        ref={particlesRef}
        className="absolute inset-0 overflow-hidden"
      ></div>

      {/* Hero Text (Ensured Highest Layer Position) */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 text-4xl md:text-5xl font-extrabold text-center hero-title"
      >
        <motion.span
          whileHover={{ color: "#FFD700", scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="text-red-400"
        >
          Building web experiences
        </motion.span>{" "}
        that drive results —{" "}
        <motion.span
          whileHover={{ color: "#00FFFF", scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="text-yellow-400"
        >
          fast, beautiful
        </motion.span>{" "}
        and built to grow your{" "}
        <motion.span
          whileHover={{ color: "#FF00FF", scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="text-green-400"
        >
          business.
        </motion.span>
      </motion.h1>

      {/* CTA Button */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.1 }}
        className="relative z-10 mt-6 px-6 py-3 bg-yellow-400 text-black rounded-lg shadow-md hover:scale-105 dark:bg-gray-700 dark:text-white transition"
      >
        Get Started
      </motion.button>
    </section>
  );
}
