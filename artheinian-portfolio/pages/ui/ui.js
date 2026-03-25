import { useInView } from "../hooks/hooks";

// ── FadeIn ────────────────────────────────────────────────────────────────────
// direction: "up" | "left" | "right"
export function FadeIn({ children, delay = 0, direction = "up", style = {} }) {
    const [ref, visible] = useInView();
    const transforms = {
        up: visible ? "translateY(0) scale(1)" : "translateY(36px) scale(0.97)",
        left: visible ? "translateX(0) scale(1)" : "translateX(-44px) scale(0.97)",
        right: visible ? "translateX(0) scale(1)" : "translateX(44px) scale(0.97)",
    };
    return (
        <div
            ref={ref}
            style={{
                opacity: visible ? 1 : 0,
                transform: transforms[direction],
                filter: visible ? "blur(0)" : "blur(5px)",
                transition: `opacity .75s cubic-bezier(.16,1,.3,1) ${delay}s,
                     transform .75s cubic-bezier(.16,1,.3,1) ${delay}s,
                     filter .6s ease ${delay}s`,
                ...style,
            }}
        >
            {children}
        </div>
    );
}

// ── SkillBar ──────────────────────────────────────────────────────────────────
export function SkillBar({ name, level, delay }) {
    const [ref, visible] = useInView(0.1);
    return (
        <div
            ref={ref}
            style={{
                marginBottom: 14,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateX(0)" : "translateX(-18px)",
                filter: visible ? "blur(0)" : "blur(3px)",
                transition: `opacity .5s ease ${delay}s, transform .5s ease ${delay}s, filter .4s ease ${delay}s`,
            }}
        >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                <span style={{ fontSize: 12, fontFamily: "monospace", color: "#1A1A2E" }}>{name}</span>
                <span style={{ fontSize: 10, fontFamily: "monospace", color: "#2A5A7A" }}>{level}%</span>
            </div>
            <div style={{ height: 6, borderRadius: 99, background: "#E8EEF4", overflow: "hidden" }}>
                <div
                    style={{
                        height: "100%", borderRadius: 99,
                        width: visible ? `${level}%` : "0%",
                        background: "linear-gradient(90deg,#1A6A9A,#4A9FCC)",
                        transition: `width 1.1s cubic-bezier(.4,0,.2,1) ${delay + .1}s`,
                    }}
                />
            </div>
        </div>
    );
}

// ── SectionLabel ──────────────────────────────────────────────────────────────
export function SectionLabel({ n, label }) {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <div style={{ height: 1, width: 20, background: "#1A6A9A" }} />
            <span style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "0.45em", textTransform: "uppercase", color: "#1A6A9A" }}>
                {n} — {label}
            </span>
        </div>
    );
}
