"use client";

// ── INDUSTRIES ──
// White background, 3-col grid, centered max-width

import Link from "next/link";

const industries = [
  { icon: "🏦", name: "Banking & Financial Services" },
  { icon: "🛒", name: "Consumer Services" },
  { icon: "🏥", name: "Healthcare & Life Sciences" },
  { icon: "🛡️", name: "Insurance" },
  { icon: "🏭", name: "Manufacturing" },
  { icon: "📡", name: "Technology, Media & Telecom" },
];

export default function IndustriesSection() {
  return (
    <section style={{ background: "#ffffff", padding: "100px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
        <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#F97316", display: "block", marginBottom: "16px" }}>Sectors</span>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#0A0A0A", lineHeight: 1.1, marginBottom: "16px", letterSpacing: "-1px" }}>Industries we empower</h2>
        <p style={{ fontSize: "1.05rem", color: "#6B7280", maxWidth: "560px", lineHeight: 1.7, marginBottom: "60px" }}>
          We work with industries that impact daily life and shape what's next.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
          {industries.map((ind, i) => (
            <Link href="/industries" key={i}
              style={{ display: "flex", alignItems: "center", gap: "16px", padding: "24px 28px", border: "1px solid #E5E7EB", borderRadius: "8px", textDecoration: "none", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#F97316"; e.currentTarget.style.background = "#FFFAF5"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#E5E7EB"; e.currentTarget.style.background = "#fff"; }}
            >
              <span style={{ fontSize: "1.8rem" }}>{ind.icon}</span>
              <span style={{ fontWeight: 600, color: "#0A0A0A", fontSize: "0.95rem" }}>{ind.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
