import { PROJECTS } from "../data/data";
import { FadeIn, SectionLabel } from "../ui/ui";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <section id="projects" style={{ padding: "80px 80px", borderTop: "1px solid #E8ECF0" }}>
            <FadeIn>
                <SectionLabel n="04" label="Projects" />
                <h2
                    style={{
                        fontSize: "clamp(2rem,5vw,4.5rem)",
                        fontWeight: "bold",
                        letterSpacing: "-0.02em",
                        marginBottom: 10,
                    }}
                >
                    Selected Work
                </h2>
                <p
                    style={{
                        fontSize: 13,
                        color: "#5A7A9A",
                        maxWidth: 480,
                        lineHeight: 1.7,
                        marginBottom: 40,
                    }}
                >
                    Click <span style={{ color: "#1A6A9A" }}>Explore Project</span> on any card to see what I built and how.
                </p>
            </FadeIn>

            <div
                style={{
                    display: "flex",
                    gap: 18,
                    overflowX: "auto",
                    overflowY: "hidden",
                    paddingBottom: 12,
                    scrollSnapType: "x mandatory",
                    WebkitOverflowScrolling: "touch",
                }}
            >
                {PROJECTS.map((p, i) => (
                    <div
                        key={p.id}
                        style={{
                            flex: "0 0 auto",
                            minWidth: "420px",
                            scrollSnapAlign: "start",
                        }}
                    >
                        <ProjectCard project={p} index={i} />
                    </div>
                ))}
            </div>
        </section>
    );
}