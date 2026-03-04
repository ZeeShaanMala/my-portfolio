// src/components/Footer.jsx
import { GitHubIcon, LinkedInIcon } from "../assets/icons/Icons";
import { personalInfo } from "../data/portfolioData";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <button
        className="footer__logo"
        onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
      >
        {personalInfo.name}<span className="accent">.</span>dev
      </button>

      <p className="footer__text">
        © 2026 {personalInfo.name} · Built with React ⚛️
      </p>

      <div className="footer__socials">
        <a
          href={personalInfo.github}
          target="_blank"
          rel="noreferrer"
          className="footer__social"
          aria-label="GitHub"
        >
          <GitHubIcon size={20} />
        </a>
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noreferrer"
          className="footer__social"
          aria-label="LinkedIn"
        >
          <LinkedInIcon size={20} />
        </a>
      </div>
    </footer>
  );
}