import { TIMELINE } from "../data/data";
import { FadeIn, SectionLabel } from "../ui/ui";

const DOT_COLOR = { edu: "#1A6A9A", project: "#2A8AB0", work: "#2A5A7A" };

export default function Experience() {
    return (
        <section id="experience" style={{ padding: "80px 80px", borderTop: "1px solid #E8ECF0" }}>
            <FadeIn>
                <SectionLabel n="03" label="Experience" />
                <h2 style={{ fontSize: "clamp(2rem,5vw,4.5rem)", fontWeight: "bold", letterSpacing: "-0.02em", marginBottom: 10 }}>
                    Journey
                </h2>
                <p style={{ fontSize: 13, color: "#5A7A9A", maxWidth: 460, lineHeight: 1.7, marginBottom: 48 }}>
                    My path through education, projects, and professional work.
                </p>
            </FadeIn>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
                {/* Timeline */}
                <FadeIn delay={0.05} direction="left">
                    <p style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "0.4em", textTransform: "uppercase", color: "#1A6A9A", marginBottom: 20 }}>
                        Timeline
                    </p>
                    {TIMELINE.map((item, i) => (
                        <div key={i} style={{ display: "flex", gap: 14 }}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <div style={{ width: 10, height: 10, borderRadius: "50%", marginTop: 4, flexShrink: 0, background: DOT_COLOR[item.type] }} />
                                {i < TIMELINE.length - 1 && (
                                    <div style={{ width: 1, flex: 1, marginTop: 4, marginBottom: 4, background: "#E0E6EC", minHeight: 24 }} />
                                )}
                            </div>
                            <div style={{ paddingBottom: 20 }}>
                                <span style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.15em", textTransform: "uppercase", color: "#8AAABF" }}>
                                    {item.year}
                                </span>
                                <p style={{ fontSize: 13, marginTop: 2, color: "#2A5A7A" }}>{item.event}</p>
                            </div>
                        </div>
                    ))}
                </FadeIn>

                {/* TrustBix capstone card */}
                <FadeIn delay={0.1} direction="right">
                    <div style={{ borderRadius: 14, overflow: "hidden", background: "#F8F9FB", border: "1px solid #E8ECF0" }}>
                        <div style={{ padding: "12px 20px", display: "flex", justifyContent: "space-between", borderBottom: "1px solid #E8ECF0" }}>
                            <span style={{ fontFamily: "monospace", fontSize: 10, letterSpacing: "0.4em", textTransform: "uppercase", color: "#1A99BB" }}>
                                Capstone
                            </span>
                            <span style={{ fontFamily: "monospace", fontSize: 10, color: "#8AAABF" }}>Sep–Dec 2025</span>
                        </div>
                        <div style={{ padding: 20 }}>
                            <h3 style={{ fontSize: 20, fontWeight: "bold", color: "#1A1A2E", marginBottom: 3 }}>TrustBix</h3>
                            <p style={{ fontFamily: "monospace", fontSize: 12, color: "#1A99BB", marginBottom: 14 }}>Edmonton, AB</p>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 16 }}>
                                {["Python", "Django", "SQLite", "MySQL", "CSS", "Git"].map(t => (
                                    <span key={t} style={{ fontFamily: "monospace", fontSize: 10, padding: "2px 7px", borderRadius: 4, background: "#EBF3FA", color: "#1A6A9A", border: "1px solid #C8DCF0" }}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                                {[
                                    "Designed mode-aware toolbar (Cursor / Draw / Move / Delete) with dynamic resize handles",
                                    "Improved AI annotation accuracy to ~80% through data pipeline contributions",
                                    "Built label aggregation utilities producing camera snapshot health scores",
                                ].map((b, i) => (
                                    <li key={i} style={{ display: "flex", gap: 8, fontSize: 12, lineHeight: 1.6, color: "#2A5A7A", marginBottom: 8 }}>
                                        <span style={{ color: "#1A99BB", flexShrink: 0, marginTop: 2 }}>▸</span>
                                        {b}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
