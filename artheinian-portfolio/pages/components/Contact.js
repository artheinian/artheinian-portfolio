import { useState } from "react";
import { FadeIn, SectionLabel } from "../ui/ui";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("artheinianramos@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const buttons = [
    { label: copied ? "✓ Copied!" : "artheinianramos@gmail.com", onClick: copyEmail },
    { label: "780-220-8230", href: "tel:7802208230" },
  ];

  const socials = [
    { label: "LinkedIn ↗", href: "https://linkedin.com/in/artheinian" },
    { label: "GitHub ↗", href: "https://github.com/artheinian" },
  ];

  return (
    <section id="contact" style={{ padding: "100px 80px", borderTop: "1px solid #E8ECF0" }}>
      <FadeIn>
        <SectionLabel n="06" label="Contact" />
        <h2 style={{ fontSize: "clamp(2.5rem,7vw,6rem)", fontWeight: "bold", letterSpacing: "-0.02em", lineHeight: 0.95, marginBottom: 18 }}>
          Let's Build<br />
          <span style={{ color: "transparent", WebkitTextStroke: "2px #1A6A9A" }}>Something.</span>
        </h2>
        <p style={{ fontSize: 13, color: "#5A7A9A", maxWidth: 380, lineHeight: 1.7, marginBottom: 40 }}>
          Open to new roles, collaborations, or just a conversation about tech and code.
        </p>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 36 }}>
          {buttons.map((item, i) => {
            const Tag = item.href ? "a" : "button";
            return (
              <Tag
                key={i}
                {...(item.href ? { href: item.href } : { onClick: item.onClick })}
                style={{ padding: "14px 20px", borderRadius: 11, background: "#F8F9FB", border: "1px solid #E0E6EC", fontFamily: "monospace", fontSize: 13, color: "#2A5A7A", cursor: "pointer", textDecoration: "none", display: "block" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#1A6A9A"; e.currentTarget.style.color = "#1A6A9A"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#E0E6EC"; e.currentTarget.style.color = "#2A5A7A"; }}
              >
                {item.label}
              </Tag>
            );
          })}
        </div>
      </FadeIn>

      <FadeIn delay={0.25}>
        <div style={{ display: "flex", gap: 22 }}>
          {socials.map(l => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "0.3em", textTransform: "uppercase", color: "#8AAABF", textDecoration: "none" }}
              onMouseEnter={e => e.currentTarget.style.color = "#1A6A9A"}
              onMouseLeave={e => e.currentTarget.style.color = "#8AAABF"}
            >
              {l.label}
            </a>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
