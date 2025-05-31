import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import emailjs from "@emailjs/browser";
import { CheckCircle, XCircle } from "lucide-react";

export default function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm(
        "service_f0ptr4j",
        "template_sw7uhws",
        formRef.current,
        "pjCZ_LvwRFJAUJ2G5"
      )
      .then(
        () => {
          setToast({ type: "success", message: "Message sent successfully!" });
          formRef.current?.reset();
        },
        () => {
          setToast({
            type: "error",
            message: "Failed to send. Please try again.",
          });
        }
      )
      .finally(() => {
        setLoading(false);
        setTimeout(() => setToast(null), 4000);
      });
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[url('/textures/light-texture.svg')] bg-cover bg-center dark:bg-gradient-to-br dark:from-[#0f0f1b] dark:via-[#1b1b2f] dark:to-black text-black dark:text-white px-6 py-4 md:px-16 md:py-0 scroll-mt-16 overflow-hidden"
    >
      {/* Floating Shapes */}
      <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
        <div className="floating-shape absolute top-10 left-10 w-32 h-32 bg-pink-300 rounded-full blur-2xl"></div>
        <div className="floating-shape absolute bottom-20 right-20 w-40 h-40 bg-yellow-400 rounded-lg rotate-12 blur-lg"></div>
        <div className="floating-shape absolute top-40 right-40 w-24 h-24 bg-teal-400 rounded-full blur-lg"></div>
      </div>

      {/* Heading */}
      <header className="relative z-10 w-full max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-8 text-center"
        >
          <span className="inline-block px-6 py-3 rounded-xl shadow-lg backdrop-blur-sm bg-white/80 dark:bg-transparent dark:bg-gradient-to-r dark:from-blue-600 dark:via-pink-500 dark:to-yellow-400 dark:bg-clip-text dark:text-transparent">
            Get In{" "}
            <span className="text-pink-600 dark:text-pink-400">Touch</span>
          </span>
        </motion.h2>
      </header>

      {/* Toasts */}
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`fixed top-6 right-6 z-50 px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 text-white text-sm font-medium transition-all duration-300 ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {toast.type === "success" ? (
            <CheckCircle size={20} />
          ) : (
            <XCircle size={20} />
          )}
          {toast.message}
        </motion.div>
      )}

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl text-[1.1rem] md:text-xl text-center leading-loose p-6 rounded-xl shadow-xl bg-white/80 dark:bg-white/10 backdrop-blur-xl ring-1 ring-white/20 dark:ring-white/10"
      >
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="user_name"
              className="w-full p-3 rounded-lg bg-white/90 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="user_email"
              className="w-full p-3 rounded-lg bg-white/90 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows={4}
              className="w-full p-3 rounded-lg bg-white/90 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 rounded-lg font-semibold text-white bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 transition"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
