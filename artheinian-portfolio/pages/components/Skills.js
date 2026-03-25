import { SKILLS } from "../data/data";
import { FadeIn, SkillBar, SectionLabel } from "../ui/ui";

export default function Skills() {
    return (
        <section id="skills" style={{ padding: "80px 80px", borderTop: "1px solid #E8ECF0" }}>
            <FadeIn>
                <SectionLabel n="02" label="Skills" />
                <h2 style={{ fontSize: "clamp(2rem,5vw,4.5rem)", fontWeight: "bold", letterSpacing: "-0.02em", marginBottom: 10 }}>
                    Technical Skills
                </h2>
                <p style={{ fontSize: 13, color: "#5A7A9A", maxWidth: 480, lineHeight: 1.7, marginBottom: 48 }}>
                    Languages, frameworks, and tools I use to build production-quality software.
                </p>
            </FadeIn>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 24 }}>
                {Object.entries(SKILLS).map(([cat, items], ci) => (
                    <FadeIn key={cat} delay={ci * 0.1}>
                        <div style={{ padding: 22, borderRadius: 14, background: "#F8F9FB", border: "1px solid #E8ECF0" }}>
                            <p style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "0.4em", textTransform: "uppercase", color: "#1A6A9A", marginBottom: 18 }}>
                                {cat}
                            </p>
                            {items.map((s, i) => (
                                <SkillBar key={s.name} name={s.name} level={s.level} delay={ci * 0.1 + i * 0.05} />
                            ))}
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}
