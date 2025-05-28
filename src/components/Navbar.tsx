import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  // Theme State
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-sky-100 dark:bg-gray-900 text-black dark:text-white shadow-md py-4 px-6 flex items-center justify-between transition-colors duration-300">
      {/* Logo */}
      <div className="text-xl font-bold tracking-wide">My Portfolio</div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex space-x-6 font-medium">
        <li>
          <a href="#home" className="hover:text-sky-600 transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-sky-600 transition-colors">
            Services
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-sky-600 transition-colors">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-sky-600 transition-colors">
            Contact
          </a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden p-2 rounded-full hover:bg-sky-200 dark:hover:bg-gray-800 transition"
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-6 w-48 bg-sky-100 dark:bg-gray-900 shadow-lg rounded-lg p-4 flex flex-col space-y-4 md:hidden">
          <a
            href="#home"
            className="hover:text-sky-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#services"
            className="hover:text-sky-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#projects"
            className="hover:text-sky-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-sky-600 transition"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      )}

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-full hover:bg-sky-200 dark:hover:bg-gray-800 transition-colors"
      >
        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </nav>
  );
}
