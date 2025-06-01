import React, { Suspense } from "react";
import Navbar from "./components/Navbar";

const Hero = React.lazy(() => import("./components/Hero"));
const About = React.lazy(() => import("./components/About"));
const Services = React.lazy(() => import("./components/Services"));
const Contact = React.lazy(() => import("./components/Contact"));

export default function App() {
  return (
    <>
      <Navbar />
      <main
        className="bg-white dark:bg-black overflow-x-hidden scroll-smooth"
        role="main"
        tabIndex={0} // Improves keyboard accessibility
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Hero />
          <About />
          <Services />
          <Contact />
        </Suspense>
      </main>
    </>
  );
}
