// src/components/Projects.jsx
import { ExternalLinkIcon, GitHubIcon } from "../assets/icons/Icons";
import { projects } from "../data/portfolioData";
import "./Projects.css";

export default function Projects({ isVisible }) {
  return (
    <section id="projects" data-animate className="section projects">
      <div className="section-header">
        <span className="section-label">WHAT I BUILT</span>
        <h2 className="section-title">
          My <span className="accent">Projects</span>
        </h2>
      </div>

      <div className="projects__grid">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className={`projects__card ${isVisible ? "projects__card--visible" : ""}`}
            style={{ transitionDelay: `${i * 0.12}s` }}
          >
            {/* Top accent bar */}
            <div
              className="projects__accent-bar"
              style={{ background: project.color }}
            />

            {/* Emoji */}
            <div className="projects__emoji" style={{ color: project.color }}>
              {project.emoji}
            </div>

            {/* Title */}
            <h3 className="projects__title">{project.title}</h3>

            {/* Description */}
            <p className="projects__desc">{project.description}</p>

            {/* Tech tags */}
            <div className="projects__tags">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="projects__tag"
                  style={{
                    borderColor: `${project.color}66`,
                    color: project.color,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="projects__buttons">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="projects__btn-live"
                style={{ background: project.color }}
              >
               
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="projects__btn-github"
                style={{ borderColor: project.color, color: project.color }}
              >
              
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}