import { useState } from "react";
import { NAV_ITEMS } from "../data/data";
import { useScrolled, useScrollSpy } from "../hooks/hooks";

export default function Navbar({ onNav }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const scrolled = useScrolled();
    const active = useScrollSpy(NAV_ITEMS);

    const handle = (id) => { setMenuOpen(false); onNav(id); };

    return (
        <>
            <nav style={{
                position: "fixed", top: 4, left: 0, right: 0, zIndex: 40,
                padding: "14px 48px", display: "flex", alignItems: "center", justifyContent: "space-between",
                background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
                backdropFilter: scrolled ? "blur(12px)" : "none",
                borderBottom: scrolled ? "1px solid #E8ECF0" : "none",
                transition: "all .3s",
            }}>
                {/* Logo */}
                <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                    <span style={{ fontFamily: "monospace", fontSize: 11, letterSpacing: "0.5em", textTransform: "uppercase", color: "#1A6A9A" }}>AR</span>
                    <span style={{ fontFamily: "monospace", fontSize: 10, color: "#C8DCF0" }}>/ portfolio</span>
                </div>

                {/* Desktop links */}
                <ul style={{ display: "flex", listStyle: "none", gap: 28, margin: 0, padding: 0 }}>
                    {NAV_ITEMS.map(id => (
                        <li key={id}>
                            <button onClick={() => handle(id)} style={{
                                fontFamily: "monospace", fontSize: 11, letterSpacing: "0.25em", textTransform: "uppercase",
                                background: "none", border: "none", cursor: "pointer", padding: 0, position: "relative",
                                color: active === id ? "#1A6A9A" : "#8AAABF", transition: "color .2s",
                            }}>
                                {id}
                                {active === id && <span style={{ position: "absolute", bottom: -5, left: 0, right: 0, height: 1, background: "#1A6A9A" }} />}
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Mobile hamburger */}
                <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "#1A6A9A", fontSize: 18, cursor: "pointer", display: "none" }} className="mobile-menu-btn">
                    {menuOpen ? "✕" : "☰"}
                </button>
            </nav>

            {/* Mobile overlay */}
            {menuOpen && (
                <div style={{ position: "fixed", inset: 0, zIndex: 30, background: "rgba(255,255,255,0.98)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 32 }}>
                    {NAV_ITEMS.map(id => (
                        <button key={id} onClick={() => handle(id)} style={{ fontFamily: "monospace", fontSize: 22, letterSpacing: "0.4em", textTransform: "uppercase", color: "#1A1A2E", background: "none", border: "none", cursor: "pointer" }}>
                            {id}
                        </button>
                    ))}
                </div>
            )}
        </>
    );
}
