import { useEffect, useState } from "react";

export default function Hero({ onNav }) {
    const [showAboutCard, setShowAboutCard] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth <= 768);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    return (
        <section
            id="about"
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: isMobile ? "96px 24px 56px" : "96px 80px 80px",
                overflow: "hidden",
                gap: isMobile ? 24 : 0,
            }}
        >
            {!showAboutCard && (
                <div
                    style={{
                        position: isMobile ? "static" : "absolute",
                        right: isMobile ? "auto" : 60,
                        top: isMobile ? "auto" : "50%",
                        transform: isMobile ? "none" : "translateY(-50%)",
                        zIndex: 2,
                        alignSelf: isMobile ? "flex-start" : "auto",
                        marginTop: isMobile ? 8 : 0,
                        order: isMobile ? 2 : 0,
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

            <div
                style={{
                    position: isMobile ? "static" : "absolute",
                    right: isMobile ? "auto" : 60,
                    top: isMobile ? "auto" : "50%",
                    width: isMobile ? "100%" : 290,
                    maxWidth: isMobile ? 360 : "none",
                    padding: "20px 22px",
                    borderRadius: 16,
                    background: "rgba(248,249,251,0.96)",
                    border: "1px solid #E8ECF0",
                    boxShadow: "0 18px 40px rgba(26, 106, 154, 0.08)",
                    backdropFilter: "blur(8px)",
                    zIndex: 3,
                    transform: isMobile
                        ? showAboutCard
                            ? "translateY(0)"
                            : "translateY(-8px)"
                        : showAboutCard
                            ? "translateY(-50%) translateX(0)"
                            : "translateY(-50%) translateX(120%)",
                    opacity: showAboutCard ? 1 : 0,
                    pointerEvents: showAboutCard ? "auto" : "none",
                    transition: "transform .45s cubic-bezier(.16,1,.3,1), opacity .3s ease",
                    alignSelf: isMobile ? "stretch" : "auto",
                    order: isMobile ? 3 : 0,
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
                            width: isMobile ? 140 : 180,
                            height: isMobile ? 140 : 180,
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

            <div
                style={{
                    position: "relative",
                    zIndex: 1,
                    maxWidth: isMobile ? "100%" : 800,
                    order: 1,
                    paddingRight: isMobile ? 0 : 340,
                }}
            >
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
                        Software Developer
                    </span>
                </div>

                <h1
                    style={{
                        fontSize: isMobile ? "clamp(2.4rem, 14vw, 4.2rem)" : "clamp(3rem,9vw,8rem)",
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
                        fontSize: isMobile ? "1rem" : "1.1rem",
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