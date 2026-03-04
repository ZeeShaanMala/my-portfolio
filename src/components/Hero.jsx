// src/components/Hero.jsx
import { GitHubIcon, LinkedInIcon, EmailIcon } from "../assets/icons/Icons";
import { personalInfo } from "../data/portfolioData";
import profilePhoto from "../assets/profile.jpg";
import "./Hero.css";

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="hero">
      {/* Background glow */}
      <div className="hero__bg" />

      <div className="hero__grid animate-fadeup">
        {/* ── Left: Text ── */}
        <div className="hero__text">
        <p className="hero__tag">👋 Hello, Folks!</p>
          <h1 className="hero__name">
            I'm <span className="accent">{personalInfo.name}</span>
          </h1>

          <p className="hero__role">{personalInfo.role}</p>

          <p className="hero__desc">{personalInfo.tagline}</p>

          <div className="hero__buttons">
            <button className="btn-primary" onClick={() => scrollTo("projects")}>
              View Projects →
            </button>
            <button className="btn-outline" onClick={() => scrollTo("Contacts")}>
              Contacts Me
            </button>
          </div>

          <div className="hero__socials">
            <a href={personalInfo.github}   target="_blank" rel="noreferrer" className="hero__social-link">
              <GitHubIcon />   GitHub
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hero__social-link">
              <LinkedInIcon /> LinkedIn
            </a>
            <a href={`mailto:${personalInfo.email}`} className="hero__social-link">
              <EmailIcon />    Email
            </a>
          </div>
        </div>

        {/* ── Right: Avatar ── */}
        <div className="hero__image-wrap">
          <div className="hero__avatar-ring">
            {/* Orbit track + dot */}
            <div className="hero__orbit-track">
              <div className="hero__orbit-dot animate-orbit" />
            </div>
            {/* Avatar */}
            <div className="hero__avatar">
            <img src={profilePhoto} alt="Zeeshan" /></div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
    </section>
  );
}