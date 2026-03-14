"use client";

// ── CAREERS CTA ──
// Orange background, centered max-width, flex row

import Link from "next/link";

export default function CareersCTASection() {
  return (
    <section style={{ background: "#F97316", padding: "80px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "32px" }}>
        <div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: "12px", letterSpacing: "-1px" }}>
            Build your career with us
          </h2>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.85)", maxWidth: "500px" }}>
            People are at the heart of Enclecta. This is your place to grow, lead, and make a lasting impact.
          </p>
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          <Link href="/careers" style={{ background: "#fff", color: "#F97316", padding: "14px 32px", borderRadius: "4px", fontWeight: 700, fontSize: "0.95rem", display: "inline-block", textDecoration: "none" }}>Join Us</Link>
          <Link href="/contact" style={{ background: "transparent", color: "#fff", padding: "14px 32px", borderRadius: "4px", fontWeight: 600, fontSize: "0.95rem", border: "2px solid rgba(255,255,255,0.5)", display: "inline-block", textDecoration: "none" }}>Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
