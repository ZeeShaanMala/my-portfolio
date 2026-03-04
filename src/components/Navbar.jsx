// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { GitHubIcon, MenuIcon, CloseIcon } from "../assets/icons/Icons";
import { personalInfo } from "../data/portfolioData";
import "./Navbar.css";

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Contacts"];

export default function Navbar() {
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [scrolled,      setScrolled]      = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      for (const id of NAV_LINKS.map((l) => l.toLowerCase())) {
        const el = document.getElementById(id);
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          if (top <= 120 && bottom >= 120) {
            setActiveSection(id.charAt(0).toUpperCase() + id.slice(1));
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        {/* Logo */}
        <button className="navbar__logo" onClick={() => scrollTo("home")}>
          {personalInfo.name}<span className="accent">.</span>dev
        </button>

        {/* Desktop Links */}
        <ul className="navbar__links hide-mobile">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                className={`navbar__link ${activeSection === link ? "navbar__link--active" : ""}`}
                onClick={() => scrollTo(link)}
              >
                {link}
                {activeSection === link && <span className="navbar__underline" />}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="navbar__hamburger show-mobile"
          style={{ display: "none" }}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="navbar__mobile-menu">
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              className="navbar__mobile-item"
              onClick={() => scrollTo(link)}
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </>
  );
}