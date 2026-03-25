import { useState } from "react";

export default function Hero({ onNav }) {
    const [showAboutCard, setShowAboutCard] = useState(false);

    return (
        <section
            id="about"
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "96px 80px 80px",
                overflow: "hidden",
            }}
        >
            {/* More About Me button */}
            {!showAboutCard && (
                <div
                    style={{
                        position: "absolute",
                        right: 60,
                        top: "50%",
                        transform: "translateY(-50%)",
                        zIndex: 2,
                    }}
                >
                    <button
                        onClick={() => setShowAboutCard(true)}
                        style={{
                            padding: "12px 18px",
                            borderRadius: 999,
                            border: "1px solid #DDE6EF",
                            background: "rgba(248,249,251,0.96)",
                            color: "#1A6A9A",
                            fontFamily: "monospace",
                            fontSize: 10,
                            letterSpacing: "0.18em",
                            textTransform: "uppercase",
                            cursor: "pointer",
                            boxShadow: "0 10px 30px rgba(26,106,154,0.08)",
                        }}
                    >
                        More About Me →
                    </button>
                </div>
            )}

            {/* Slide-in card */}
            <div
                style={{
                    position: "absolute",
                    right: 60,
                    top: "50%",
                    width: 290,
                    padding: "20px 22px",
                    borderRadius: 16,
                    background: "rgba(248,249,251,0.96)",
                    border: "1px solid #E8ECF0",
                    boxShadow: "0 18px 40px rgba(26, 106, 154, 0.08)",
                    backdropFilter: "blur(8px)",
                    zIndex: 3,
                    transform: showAboutCard
                        ? "translateY(-50%) translateX(0)"
                        : "translateY(-50%) translateX(120%)",
                    opacity: showAboutCard ? 1 : 0,
                    pointerEvents: showAboutCard ? "auto" : "none",
                    transition: "transform .45s cubic-bezier(.16,1,.3,1), opacity .3s ease",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 12,
                    }}
                >
                    <p
                        style={{
                            fontFamily: "monospace",
                            fontSize: 10,
                            letterSpacing: "0.28em",
                            textTransform: "uppercase",
                            color: "#1A6A9A",
                            margin: 0,
                        }}
                    >
                        More About Me
                    </p>

                    <button
                        onClick={() => setShowAboutCard(false)}
                        style={{
                            border: "none",
                            background: "transparent",
                            cursor: "pointer",
                            fontSize: 16,
                            color: "#8AAABF",
                            lineHeight: 1,
                        }}
                    >
                        ×
                    </button>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: 8,
                    }}
                >
                    <img
                        src="/images/MEE.jpg"
                        alt="Artheinian Ramos"
                        style={{
                            width: 180,
                            height: 180,
                            objectFit: "cover",
                            borderRadius: "50%",
                            border: "4px solid #F8F9FB",
                            boxShadow: "0 12px 30px rgba(26,106,154,0.12)",
                            display: "block",
                        }}
                    />
                </div>

                <h3
                    style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "#1A1A2E",
                        marginBottom: 10,
                        lineHeight: 1.2,
                    }}
                >
                    Hi! I'm Artheinian
                </h3>

                <p
                    style={{
                        fontSize: 13,
                        lineHeight: 1.7,
                        color: "#5A7A9A",
                        marginBottom: 16,
                    }}
                >
                    Outside of coding, I enjoy relaxing at cafés, listening to music, going to the gym, playing video games, playing volleyball, and going rock climbing. Those interests keep me creative, active, and balanced, and they reflect the focus, teamwork, and problem-solving mindset that carries into the way I grow as a developer. Would love to connect with you!
                </p>

                <button
                    onClick={() => window.open("https://www.linkedin.com/in/artheinian/", "_blank")}
                    style={{
                        padding: "10px 16px",
                        background: "transparent",
                        color: "#1A6A9A",
                        fontFamily: "monospace",
                        fontSize: 10,
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        border: "1px solid #C8DCF0",
                        borderRadius: 8,
                        cursor: "pointer",
                    }}
                >
                    LinkedIn
                </button>
            </div>

            <div style={{ position: "relative", zIndex: 1, maxWidth: 800 }}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        marginBottom: 28,
                        animation: "fadeUp .7s ease .1s both",
                    }}
                >
                    <div style={{ height: 1, width: 28, background: "#1A6A9A" }} />
                    <span
                        style={{
                            fontFamily: "monospace",
                            fontSize: 11,
                            letterSpacing: "0.5em",
                            textTransform: "uppercase",
                            color: "#1A6A9A",
                        }}
                    >
                        Full-Stack Developer
                    </span>
                </div>

                <h1
                    style={{
                        fontSize: "clamp(3rem,9vw,8rem)",
                        fontWeight: "bold",
                        lineHeight: 0.92,
                        letterSpacing: "-0.02em",
                        marginBottom: 24,
                        animation: "fadeUp .7s ease .2s both",
                    }}
                >
                    Artheinian
                    <br />
                    <span style={{ color: "transparent", WebkitTextStroke: "2px #1A6A9A" }}>
                        Ramos
                    </span>
                </h1>

                <p
                    style={{
                        fontSize: "1.1rem",
                        lineHeight: 1.7,
                        maxWidth: 480,
                        color: "#2A5A7A",
                        marginBottom: 14,
                        animation: "fadeUp .7s ease .32s both",
                    }}
                >
                    Building clean, scalable web & mobile experiences with{" "}
                    <span style={{ color: "#1A6A9A" }}>C#, Flutter, React</span> and a developer's eye for detail.
                </p>

                <p
                    style={{
                        fontSize: "0.82rem",
                        maxWidth: 420,
                        lineHeight: 1.6,
                        color: "#8AAABF",
                        marginBottom: 36,
                        animation: "fadeUp .7s ease .4s both",
                        fontFamily: "monospace",
                    }}
                >
                    DMIT Graduate · NAIT Edmonton · Available for opportunities
                </p>

                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 14,
                        animation: "fadeUp .7s ease .5s both",
                    }}
                >
                    <button
                        onClick={() => onNav("projects")}
                        style={{
                            padding: "12px 28px",
                            background: "#1A6A9A",
                            color: "#fff",
                            fontFamily: "monospace",
                            fontSize: 11,
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            fontWeight: "bold",
                            border: "none",
                            borderRadius: 8,
                            cursor: "pointer",
                        }}
                    >
                        View Projects
                    </button>

                    <button
                        onClick={() => onNav("contact")}
                        style={{
                            padding: "12px 28px",
                            background: "transparent",
                            color: "#2A5A7A",
                            fontFamily: "monospace",
                            fontSize: 11,
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            border: "1px solid #E0E6EC",
                            borderRadius: 8,
                            cursor: "pointer",
                        }}
                    >
                        Get in Touch
                    </button>
                </div>
            </div>
        </section>
    );
}