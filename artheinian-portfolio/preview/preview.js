import { useState } from "react";

// ── Shared screen toggle ───────────────────────────────────────────────────────
function ScreenToggle({ screens, current, onChange, accent }) {
    return (
        <div style={{ display: "flex", gap: 5 }}>
            {screens.map((s, i) => (
                <button
                    key={i}
                    onClick={() => onChange(i)}
                    style={{
                        fontSize: 8, fontFamily: "monospace", padding: "2px 7px", borderRadius: 4,
                        cursor: "pointer", transition: "all .2s",
                        background: i === current ? `${accent}22` : "transparent",
                        color: i === current ? accent : "#aaa",
                        border: `1px solid ${i === current ? accent + "44" : "#DDE6EF"}`,
                    }}
                >
                    {s.label}
                </button>
            ))}
        </div>
    );
}

const PreviewLabel = () => (
    <p style={{ color: "#BBB", fontSize: 9, fontFamily: "monospace", letterSpacing: "0.3em", textTransform: "uppercase" }}>
        App Preview
    </p>
);

// ── PhonePreview ──────────────────────────────────────────────────────────────
export function PhonePreview({ project }) {
    const [s, setS] = useState(0);
    const { accent, previewScreens: ps } = project;
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
            <div style={{ width: 150, height: 270, borderRadius: 32, border: "4px solid #E0ECF5", background: "#111", overflow: "hidden", position: "relative", boxShadow: `0 8px 40px ${accent}22, 0 20px 50px #0003` }}>
                {/* Notch */}
                <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 52, height: 16, background: "#0A0A0A", borderRadius: "0 0 10px 10px", zIndex: 10 }} />
                {/* Screen */}
                <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 8, padding: "28px 12px 20px", background: `linear-gradient(160deg,#111,${accent}18)` }}>
                    <div style={{ width: 40, height: 40, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, background: `${accent}22`, border: `1px solid ${accent}44` }}>
                        {ps[s].icon}
                    </div>
                    <p style={{ color: "#fff", fontSize: 10, fontWeight: "bold", textAlign: "center" }}>{ps[s].label}</p>
                    <p style={{ color: "#aaa", fontSize: 9, textAlign: "center", lineHeight: 1.5 }}>{ps[s].desc}</p>
                    {/* Dot indicators */}
                    <div style={{ position: "absolute", bottom: 16, display: "flex", gap: 5 }}>
                        {ps.map((_, i) => (
                            <button key={i} onClick={() => setS(i)} style={{ height: 5, width: i === s ? 16 : 5, borderRadius: 3, background: i === s ? accent : "#333", border: "none", cursor: "pointer", transition: "all .2s" }} />
                        ))}
                    </div>
                </div>
            </div>
            <PreviewLabel />
        </div>
    );
}

// ── DesktopPreview ────────────────────────────────────────────────────────────
export function DesktopPreview({ project }) {
    const [s, setS] = useState(0);
    const { accent, previewScreens: ps } = project;
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <div style={{ width: 200, height: 134, borderRadius: 7, border: "1px solid #E0ECF5", background: "#111", overflow: "hidden", boxShadow: `0 4px 24px ${accent}18` }}>
                {/* Browser chrome */}
                <div style={{ display: "flex", alignItems: "center", gap: 4, padding: "6px 9px", background: "#1A1A1A", borderBottom: "1px solid #333" }}>
                    {["#FF5F57", "#FEBC2E", "#28C840"].map((c, i) => (
                        <div key={i} style={{ width: 7, height: 7, borderRadius: "50%", background: c }} />
                    ))}
                    <div style={{ marginLeft: 5, flex: 1, borderRadius: 3, height: 9, background: "#222", display: "flex", alignItems: "center", padding: "0 5px" }}>
                        <span style={{ color: "#555", fontSize: 7, fontFamily: "monospace" }}>localhost:3000</span>
                    </div>
                </div>
                {/* Screen */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 5, height: "calc(100% - 25px)", background: `linear-gradient(135deg,#0F0F0F,${accent}12)` }}>
                    <span style={{ fontSize: 22 }}>{ps[s].icon}</span>
                    <p style={{ color: "#fff", fontSize: 9, fontWeight: "bold" }}>{ps[s].label}</p>
                    <p style={{ color: "#aaa", fontSize: 8, textAlign: "center", padding: "0 12px" }}>{ps[s].desc}</p>
                </div>
            </div>
            <ScreenToggle screens={ps} current={s} onChange={setS} accent={accent} />
            <PreviewLabel />
        </div>
    );
}

// ── DashboardPreview ──────────────────────────────────────────────────────────
export function DashboardPreview({ project }) {
    const { accent } = project;

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <div
                style={{
                    width: 260,
                    height: 165,
                    borderRadius: 10,
                    border: "1px solid #E0ECF5",
                    background: "#F8F9FB",
                    overflow: "hidden",
                    display: "flex",
                    boxShadow: `0 4px 24px ${accent}18`,
                }}
            >
                {/* Left tools */}
                <div
                    style={{
                        width: 30,
                        background: "#EEF2F6",
                        borderRight: "1px solid #E0E6EC",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingTop: 8,
                        gap: 7,
                    }}
                >
                    {["↖", "✏", "✥", "⌫"].map((tool, i) => (
                        <div
                            key={i}
                            style={{
                                width: 18,
                                height: 18,
                                borderRadius: 4,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 9,
                                color: i === 1 ? accent : "#6E8194",
                                background: i === 1 ? `${accent}22` : "transparent",
                                border: i === 1 ? `1px solid ${accent}33` : "1px solid transparent",
                            }}
                        >
                            {tool}
                        </div>
                    ))}
                </div>

                {/* Center annotation canvas */}
                <div
                    style={{
                        flex: 1,
                        position: "relative",
                        background:
                            "linear-gradient(180deg, #DCEBCF 0%, #C9DFB7 38%, #A7C58B 100%)",
                        borderRight: "1px solid #E0E6EC",
                    }}
                >
                    {/* Fake plants */}
                    <div
                        style={{
                            position: "absolute",
                            left: 18,
                            bottom: 26,
                            width: 22,
                            height: 45,
                            borderRadius: "12px 12px 8px 8px",
                            background: "#5C8F43",
                            transform: "rotate(-6deg)",
                            opacity: 0.95,
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            left: 54,
                            bottom: 24,
                            width: 26,
                            height: 55,
                            borderRadius: "14px 14px 8px 8px",
                            background: "#6FA24F",
                            transform: "rotate(4deg)",
                            opacity: 0.95,
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            left: 92,
                            bottom: 28,
                            width: 20,
                            height: 40,
                            borderRadius: "12px 12px 8px 8px",
                            background: "#587D39",
                            transform: "rotate(-2deg)",
                            opacity: 0.95,
                        }}
                    />

                    {/* Bounding boxes */}
                    <div
                        style={{
                            position: "absolute",
                            left: 14,
                            top: 46,
                            width: 34,
                            height: 60,
                            border: `2px solid ${accent}`,
                            boxShadow: `0 0 0 1px ${accent}33 inset`,
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            left: 50,
                            top: 35,
                            width: 38,
                            height: 74,
                            border: "2px solid #FFB84D",
                            boxShadow: "0 0 0 1px #FFB84D33 inset",
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            left: 88,
                            top: 49,
                            width: 30,
                            height: 52,
                            border: "2px solid #E46B7A",
                            boxShadow: "0 0 0 1px #E46B7A33 inset",
                        }}
                    />

                    {/* Tiny header */}
                    <div
                        style={{
                            position: "absolute",
                            top: 6,
                            left: 8,
                            fontSize: 7,
                            fontFamily: "monospace",
                            color: "#35506A",
                            background: "#FFFFFFCC",
                            padding: "2px 5px",
                            borderRadius: 4,
                        }}
                    >
                        camera_07_frame_128
                    </div>
                </div>

                {/* Right metadata */}
                <div
                    style={{
                        width: 64,
                        background: "#FCFDFE",
                        padding: "8px 6px",
                        display: "flex",
                        flexDirection: "column",
                        gap: 6,
                    }}
                >
                    <div>
                        <p style={{ fontSize: 6, fontFamily: "monospace", color: "#8AAABF", marginBottom: 2 }}>
                            LABEL
                        </p>
                        <div
                            style={{
                                fontSize: 7,
                                color: accent,
                                background: `${accent}18`,
                                border: `1px solid ${accent}30`,
                                borderRadius: 4,
                                padding: "2px 4px",
                                display: "inline-block",
                            }}
                        >
                            Healthy
                        </div>
                    </div>

                    <div>
                        <p style={{ fontSize: 6, fontFamily: "monospace", color: "#8AAABF", marginBottom: 2 }}>
                            BOX
                        </p>
                        <p style={{ fontSize: 7, color: "#486072", lineHeight: 1.4 }}>
                            x: 142
                            <br />
                            y: 81
                            <br />
                            w: 64
                            <br />
                            h: 118
                        </p>
                    </div>

                    <div>
                        <p style={{ fontSize: 6, fontFamily: "monospace", color: "#8AAABF", marginBottom: 2 }}>
                            SCORE
                        </p>
                        <div
                            style={{
                                height: 5,
                                borderRadius: 99,
                                background: "#E8EEF4",
                                overflow: "hidden",
                            }}
                        >
                            <div
                                style={{
                                    width: "78%",
                                    height: "100%",
                                    background: `linear-gradient(90deg, ${accent}, #7FC4D8)`,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom thumbnails */}
            <div
                style={{
                    width: 260,
                    display: "flex",
                    gap: 6,
                    overflowX: "auto",
                    paddingBottom: 2,
                }}
            >
                {[0, 1, 2, 3, 4].map((i) => (
                    <div
                        key={i}
                        style={{
                            flex: "0 0 auto",
                            width: 44,
                            height: 28,
                            borderRadius: 5,
                            border: i === 1 ? `1px solid ${accent}` : "1px solid #DDE6EF",
                            background:
                                i === 1
                                    ? "linear-gradient(180deg, #DCEBCF 0%, #B9D69D 100%)"
                                    : "linear-gradient(180deg, #E9F1DF 0%, #C9D9B8 100%)",
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                left: 8,
                                bottom: 4,
                                width: 8,
                                height: 16,
                                borderRadius: 8,
                                background: "#6C9A4E",
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                left: 18,
                                bottom: 5,
                                width: 10,
                                height: 18,
                                borderRadius: 8,
                                background: "#5B8742",
                            }}
                        />
                        <div
                            style={{
                                position: "absolute",
                                right: 6,
                                top: 5,
                                width: 12,
                                height: 10,
                                border: i === 1 ? `1px solid ${accent}` : "1px solid #90AFC2",
                            }}
                        />
                    </div>
                ))}
            </div>

            <p
                style={{
                    color: "#BBB",
                    fontSize: 9,
                    fontFamily: "monospace",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                }}
            >
                App Preview
            </p>
        </div>
    );
}

// Image Preview
export function ImagePreview({ project }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <div
                style={{
                    width: 360,
                    borderRadius: 8,
                    border: "1px solid #E0ECF5",
                    overflow: "hidden",
                    background: "#F8F9FB",
                    boxShadow: `0 4px 24px ${project.accent}18`,
                }}
            >
                <img
                    src={project.previewImage}
                    alt={`${project.title} preview`}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        display: "block",
                    }}
                />
            </div>

            <p
                style={{
                    color: "#BBB",
                    fontSize: 9,
                    fontFamily: "monospace",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                }}
            >
                App Preview
            </p>
        </div>
    );
}


export function GalleryPreview({ project }) {
    const [current, setCurrent] = useState(0);
    const images = project.previewImages || [];

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <div
                style={{
                    height: 250,
                    borderRadius: 8,
                    border: "1px solid #E0ECF5",
                    overflow: "hidden",
                    background: "#F8F9FB",
                    boxShadow: `0 4px 24px ${project.accent}18`,
                }}
            >
                <img
                    src={images[current]}
                    alt={`${project.title} screenshot ${current + 1}`}
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        display: "block",
                    }}
                />
            </div>

            <div style={{ display: "flex", gap: 5 }}>
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        style={{
                            width: i === current ? 16 : 12,
                            height: 12,
                            borderRadius: 999,
                            border: "none",
                            cursor: "pointer",
                            background: i === current ? project.accent : "#DDE6EF",
                            transition: "all .2s",
                        }}
                    />
                ))}
            </div>

            <p
                style={{
                    color: "#BBB",
                    fontSize: 9,
                    fontFamily: "monospace",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                }}
            >
                App Preview
            </p>
        </div>
    );
}