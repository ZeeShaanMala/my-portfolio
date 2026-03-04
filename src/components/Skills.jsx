// src/components/Skills.jsx
import { skills } from "../data/portfolioData";
import "./Skills.css";

export default function Skills({ isVisible }) {
  return (
    <section id="skills" data-animate className="section skills">
      <div className="section-header">
        <span className="section-label">WHAT I KNOW</span>
        <h2 className="section-title">
          My <span className="accent">Skills</span>
        </h2>
      </div>

      <div className="skills__grid">
        {skills.map((skill, i) => (
          <div
            key={skill.name}
            className={`skills__card ${isVisible ? "skills__card--visible" : ""}`}
            style={{ transitionDelay: `${i * 0.07}s` }}
          >
            <span className="skills__icon">{skill.icon}</span>
            <span className="skills__name">{skill.name}</span>
            <span
              className="skills__dot"
              style={{
                background:  skill.color,
                boxShadow:  `0 0 8px ${skill.color}88`,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}