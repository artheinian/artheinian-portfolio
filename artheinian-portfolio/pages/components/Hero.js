export default function Hero({ onNav }) {
  return (
    <section id="about" style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "96px 80px 80px" }}>
      {/* Background number */}
      <div style={{ position: "absolute", right: 40, top: "50%", transform: "translateY(-50%)", fontSize: "20vw", fontWeight: "bold", color: "rgba(26,106,154,0.06)", fontFamily: "Georgia,serif", letterSpacing: "-0.04em", lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>
        01
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: 800 }}>
        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28, animation: "fadeUp .7s ease .1s both" }}>
          <div style={{ height: 1, width: 28, background: "#1A6A9A" }} />
          <span style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "0.5em", textTransform: "uppercase", color: "#1A6A9A" }}>
            Full-Stack Developer
          </span>
        </div>

        {/* Name */}
        <h1 style={{ fontSize: "clamp(3rem,9vw,8rem)", fontWeight: "bold", lineHeight: 0.92, letterSpacing: "-0.02em", marginBottom: 24, animation: "fadeUp .7s ease .2s both" }}>
          Artheinian<br />
          <span style={{ color: "transparent", WebkitTextStroke: "2px #1A6A9A" }}>Ramos</span>
        </h1>

        {/* Tagline */}
        <p style={{ fontSize: "1.1rem", lineHeight: 1.7, maxWidth: 480, color: "#2A5A7A", marginBottom: 14, animation: "fadeUp .7s ease .32s both" }}>
          Building clean, scalable web & mobile experiences with{" "}
          <span style={{ color: "#1A6A9A" }}>C#, Flutter, React</span> and a developer's eye for detail.
        </p>
        <p style={{ fontSize: "0.82rem", maxWidth: 420, lineHeight: 1.6, color: "#8AAABF", marginBottom: 36, animation: "fadeUp .7s ease .4s both", fontFamily: "monospace" }}>
          DMIT Graduate · NAIT Edmonton · Available for opportunities
        </p>

        {/* CTAs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, animation: "fadeUp .7s ease .5s both" }}>
          <button
            onClick={() => onNav("projects")}
            style={{ padding: "12px 28px", background: "#1A6A9A", color: "#fff", fontFamily: "monospace", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: "bold", border: "none", borderRadius: 8, cursor: "pointer" }}
            onMouseEnter={e => e.currentTarget.style.background = "#1560AA"}
            onMouseLeave={e => e.currentTarget.style.background = "#1A6A9A"}
          >
            View Projects
          </button>
          <button
            onClick={() => onNav("contact")}
            style={{ padding: "12px 28px", background: "transparent", color: "#2A5A7A", fontFamily: "monospace", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", border: "1px solid #E0E6EC", borderRadius: 8, cursor: "pointer" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#1A6A9A"; e.currentTarget.style.color = "#1A6A9A"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#E0E6EC"; e.currentTarget.style.color = "#2A5A7A"; }}
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Scroll cue */}
      <div style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: 0.35 }}>
        <span style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", color: "#1A6A9A" }}>Scroll</span>
        <div style={{ width: 1, height: 36, background: "linear-gradient(to bottom,#1A6A9A,transparent)" }} />
      </div>
    </section>
  );
}
