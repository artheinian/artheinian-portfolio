"use client";
import { useCallback } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Portfolio() {
  const nav = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div style={{ background: "#fff", color: "#1A1A2E", fontFamily: "Georgia,serif", minHeight: "100vh", overflowX: "hidden" }}>

      {/* ── Decorative chrome ── */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,#1A6A9A,transparent)", zIndex: 50 }} />
      <div style={{ pointerEvents: "none", position: "fixed", inset: 0, zIndex: 0, opacity: 0.025, backgroundImage: "linear-gradient(#1A6A9A 1px,transparent 1px),linear-gradient(90deg,#1A6A9A 1px,transparent 1px)", backgroundSize: "40px 40px" }} />

      {/* ── Layout ── */}
      <Navbar onNav={nav} />
      <Hero onNav={nav} />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />

      {/* ── Global styles ── */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(26px) scale(.97); filter: blur(5px); }
          to   { opacity: 1; transform: translateY(0)    scale(1);   filter: blur(0);   }
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        ::selection { background: #1A6A9A22; color: #1A1A2E; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #fff; }
        ::-webkit-scrollbar-thumb { background: #D0DCE8; border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: #1A6A9A; }
        @media (max-width: 768px) {
          section { padding-left: 20px !important; padding-right: 20px !important; }
          nav     { padding-left: 16px !important; padding-right: 16px !important; }
          footer  { padding-left: 20px !important; padding-right: 20px !important; }
          .mobile-menu-btn { display: block !important; }
          nav ul  { display: none !important; }
        }
      `}</style>
    </div>
  );
}
