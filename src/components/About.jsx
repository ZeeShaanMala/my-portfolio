// src/components/About.jsx
import { aboutInfo } from "../data/portfolioData";
import "./About.css";

export default function About({ isVisible }) {
  return (
    <section id="about" data-animate className="section about">
      <div className={`about__grid ${isVisible ? "about__grid--visible" : ""}`}>

      

        {/* ── Right: Text ── */}
        <div className="about__content">
         
          <h2 className="section-title about__title">
            About <span className="accent">Me</span>
          </h2>

          <p className="about__text">{aboutInfo.description1}</p>
          <p className="about__text">{aboutInfo.description2}</p>

          <div className="about__cards">
            {aboutInfo.cards.map((card) => (
              <div key={card.label} className="about__card">
                <span className="about__card-icon">{card.icon}</span>
                <span className="about__card-label">{card.label}</span>
                <span className="about__card-value">{card.value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}