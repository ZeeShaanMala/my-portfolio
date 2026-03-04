// src/App.jsx
// ─────────────────────────────────────────────
//  Root component – assembles all sections
// ─────────────────────────────────────────────
import { useEffect, useState } from "react";

import "./styles/global.css";

import Navbar   from "./components/Navbar";
import Hero     from "./components/Hero";
import About    from "./components/About";
import Skills   from "./components/Skills";
import Projects from "./components/Projects";
import Contacts  from "./components/Contacts";
import Footer   from "./components/Footer";

export default function App() {
  // Track which sections have scrolled into view for entrance animations
  const [visible, setVisible] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.12 }
    );

    // Observe every section that has [data-animate]
    document.querySelectorAll("[data-animate]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const isVisible = (id) => visible.has(id);

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About    isVisible={isVisible("about")}    />
        <Skills   isVisible={isVisible("skills")}   />
        <Projects isVisible={isVisible("projects")} />
        <Contacts  />
      </main>

      <Footer />
    </>
  );
}