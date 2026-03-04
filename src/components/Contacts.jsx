// src/components/Contacts.jsx
import { useState } from "react";
import { EmailIcon, GitHubIcon, LinkedInIcon } from "../assets/icons/Icons";
import { personalInfo } from "../data/portfolioData";
import "./Contacts.css";

const Contacts_ITEMS = [
  { icon: <EmailIcon size={20} />,    label: "Email",    value: "zeeshaaan2601@email.com",        href: "mailto:zeeshaaan2601@email.com" },
  { icon: <GitHubIcon size={20} />,   label: "GitHub",   value: "https://github.com/ZeeShaanMala",        href:"https://github.com/ZeeShaanMala" },
  { icon: <LinkedInIcon size={20} />, label: "LinkedIn", value: "linkedin.com/in/zeeshan",   href: personalInfo.linkedin },
];

export default function Contacts() {
  const [form,    setForm]    = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSuccess(false), 3500);
  };

  return (
    <section id="Contacts" data-animate className="section Contacts">
      <div className="section-header">
        
        <h2 className="section-title">
          Contact <span className="accent">Me</span>
        </h2>
      </div>

      <div className="Contacts__grid">
        {/* ── Left: Info ── */}
        <div className="Contacts__info">
          <p className="Contacts__intro">
            I'm currently open to new opportunities. Whether you have a project,
            a question, or just want to say hi — my inbox is always open!
          </p>

          {Contacts_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="Contacts__item"
            >
              <span className="Contacts__item-icon">{item.icon}</span>
              <div>
                <div className="Contacts__item-label">{item.label}</div>
                <div className="Contacts__item-value">{item.value}</div>
              </div>
            </a>
          ))}
        </div>

        {/* ── Right: Form ── */}
        <form className="Contacts__form" onSubmit={handleSubmit}>
          {success && (
            <div className="Contacts__success">
              ✅ Message sent!Also contact me directly incase i miss your message.
            </div>
          )}

          <div className="Contacts__field">
            <label className="Contacts__label" htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              className="Contacts__input"
            />
          </div>

          <div className="Contacts__field">
            <label className="Contacts__label" htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              className="Contacts__input"
            />
          </div>

          <div className="Contacts__field">
            <label className="Contacts__label" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Your message..."
              value={form.message}
              onChange={handleChange}
              className="Contacts__input Contacts__textarea"
            />
          </div>

          <button type="submit" className="btn-primary Contacts__submit">
            Send Message ✉️
          </button>
        </form>
      </div>
    </section>
  );
}