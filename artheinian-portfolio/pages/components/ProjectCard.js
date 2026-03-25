import { useState } from "react";
import { useInView } from "../hooks/hooks";
import { PhonePreview, DesktopPreview, DashboardPreview, ImagePreview, GalleryPreview } from "../preview/preview";

const PREVIEWS = { phone: PhonePreview, desktop: DesktopPreview, dashboard: DashboardPreview, image: ImagePreview, gallery: GalleryPreview };

export default function ProjectCard({ project, index }) {
    const [expanded, setExpanded] = useState(false);
    const [ref, visible] = useInView(0.1);
    const Preview = PREVIEWS[project.preview];

    return (
        <div
            ref={ref}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0) scale(1)" : "translateY(44px) scale(0.97)",
                filter: visible ? "blur(0)" : "blur(5px)",
                transition: `opacity .8s cubic-bezier(.16,1,.3,1) ${index * .15}s,
                     transform .8s cubic-bezier(.16,1,.3,1) ${index * .15}s,
                     filter .65s ease ${index * .15}s`,
            }}
        >
            <div style={{
                width: 420, minHeight: 650, borderRadius: 16, overflow: "hidden", background: "#F8F9FB",
                border: `1px solid ${expanded ? project.accent + "50" : "#E8ECF0"}`,
                boxShadow: expanded ? `0 0 44px ${project.accent}12` : "none",
                transition: "all .3s",
            }}>
                {/* ── Header ── */}
                <div style={{ padding: "24px 28px" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "flex-start" }}>

                        {/* Info */}
                        <div style={{ flex: 1, minWidth: 260 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                                <span style={{ fontSize: 10, fontFamily: "monospace", letterSpacing: "0.3em", textTransform: "uppercase", padding: "3px 10px", borderRadius: 99, color: project.accent, background: `${project.accent}18`, border: `1px solid ${project.accent}30` }}>
                                    {project.tag}
                                </span>
                                <span style={{ fontFamily: "monospace", fontSize: 11, color: "#8AAABF" }}>{project.year}</span>
                            </div>

                            <h3 style={{ fontSize: 28, fontWeight: "bold", color: "#1A1A2E", fontFamily: "Georgia,serif", marginBottom: 4, lineHeight: 1.1 }}>
                                {project.title}
                            </h3>
                            <p style={{ fontSize: 12, fontFamily: "monospace", color: "#8AAABF", marginBottom: 10 }}>
                                — {project.summary}
                            </p>
                            <p style={{ fontSize: 13, lineHeight: 1.7, color: "#2A5A7A", marginBottom: 16, maxWidth: 420 }}>
                                {project.description}
                            </p>

                            {/* Tech stack */}
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
                                {project.tech.map(t => (
                                    <span key={t} style={{ fontSize: 11, fontFamily: "monospace", padding: "3px 10px", borderRadius: 5, background: "#EBF3FA", color: "#1A6A9A", border: "1px solid #C8DCF0" }}>
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <button
                                onClick={() => setExpanded(!expanded)}
                                style={{
                                    fontSize: 10, fontFamily: "monospace", letterSpacing: "0.2em", textTransform: "uppercase",
                                    padding: "8px 18px", borderRadius: 8, cursor: "pointer", transition: "all .2s",
                                    background: expanded ? `${project.accent}18` : "#EEF2F6",
                                    color: expanded ? project.accent : "#888",
                                    border: `1px solid ${expanded ? project.accent + "44" : "#DDE6EF"}`,
                                }}
                            >
                                {expanded ? "▲ Hide Details" : "▼ Explore Project"}
                            </button>
                        </div>

                        {/* Device preview */}
                        <div style={{ flexShrink: 0 }}>
                            {Preview && <Preview project={project} />}
                        </div>
                    </div>
                </div>

                {/* ── Expandable details ── */}
                <div style={{ maxHeight: expanded ? "400px" : 0, overflow: "hidden", transition: "max-height .5s cubic-bezier(.4,0,.2,1)" }}>
                    <div style={{ padding: "4px 28px 24px", borderTop: `1px solid ${project.accent}20` }}>
                        <p style={{ fontSize: 10, fontFamily: "monospace", letterSpacing: "0.4em", textTransform: "uppercase", color: project.accent, margin: "16px 0 12px" }}>
                            What I Built
                        </p>
                        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 16px" }}>
                            {project.bullets.map((b, i) => (
                                <li key={i} style={{ display: "flex", gap: 10, fontSize: 13, lineHeight: 1.7, color: "#2A5A7A", marginBottom: 8 }}>
                                    <span style={{ minWidth: 20, height: 20, borderRadius: "50%", background: `${project.accent}22`, color: project.accent, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, fontWeight: "bold", flexShrink: 0, marginTop: 2 }}>
                                        {i + 1}
                                    </span>
                                    {b}
                                </li>
                            ))}
                        </ul>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ fontSize: 10, fontFamily: "monospace", letterSpacing: "0.2em", textTransform: "uppercase", padding: "7px 16px", borderRadius: 7, background: "#EEF2F6", color: "#888", border: "1px solid #DDE6EF", textDecoration: "none", display: "inline-block" }}
                            onMouseEnter={e => { e.currentTarget.style.color = project.accent; e.currentTarget.style.borderColor = project.accent + "60"; }}
                            onMouseLeave={e => { e.currentTarget.style.color = "#888"; e.currentTarget.style.borderColor = "#DDE6EF"; }}
                        >
                            ↗ GitHub
                        </a>

                        {project.note && (
                            <p
                                style={{
                                    fontSize: 11,
                                    lineHeight: 1.6,
                                    color: "#8AAABF",
                                    marginTop: 12,
                                    maxWidth: 260,
                                }}
                            >
                                {project.note}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
