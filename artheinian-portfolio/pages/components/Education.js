import { COURSES } from "../../data/data";
import { FadeIn, SectionLabel } from "../../ui/ui";

export default function Education() {
    return (
        <section style={{ padding: "80px 80px", borderTop: "1px solid #E8ECF0" }}>
            <FadeIn>
                <SectionLabel n="05" label="Education" />
                <h2 style={{ fontSize: "clamp(2rem,5vw,4.5rem)", fontWeight: "bold", letterSpacing: "-0.02em", marginBottom: 40 }}>
                    Education
                </h2>
            </FadeIn>

            <FadeIn delay={0.1}>
                <div style={{ borderRadius: 14, padding: "32px 36px", background: "#F8F9FB", border: "1px solid #E8ECF0" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 12, marginBottom: 20 }}>
                        <div>
                            <h3 style={{ fontSize: 20, fontWeight: "bold", color: "#1A1A2E" }}>
                                Northern Alberta Institute of Technology
                            </h3>
                            <p style={{ fontSize: 13, color: "#1A6A9A", marginTop: 3 }}>
                                Diploma — Digital Media and Information Technology
                            </p>
                            <p style={{ fontFamily: "monospace", fontSize: 11, color: "#8AAABF", marginTop: 2 }}>
                                Computer Software Development
                            </p>
                        </div>
                        <div style={{ textAlign: "right" }}>
                            <p style={{ fontFamily: "monospace", fontSize: 11, color: "#8AAABF" }}>Edmonton, AB</p>
                            <p style={{ fontFamily: "monospace", fontSize: 11, color: "#C8DCF0", marginTop: 2 }}>Jan 2024 – Dec 2025</p>
                        </div>
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                        {COURSES.map(c => (
                            <span key={c} style={{ fontSize: 12, padding: "5px 11px", borderRadius: 7, background: "#EBF3FA", color: "#1A6A9A", border: "1px solid #C8DCF0" }}>
                                {c}
                            </span>
                        ))}
                    </div>
                </div>
            </FadeIn>
        </section>
    );
}
