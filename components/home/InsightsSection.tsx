"use client";

// ── INSIGHTS ──
// Dark #0A0A0A background, 2-col grid, centered max-width

import Link from "next/link";

const insights = [
  { tag: "Technology", title: "AI Trends Shaping Enterprise in 2026", link: "/blog" },
  { tag: "Cloud", title: "Unlocking Value with Cloud-Native Architecture", link: "/blog" },
  { tag: "Data Analytics", title: "From Data to Decisions: The Modern Analytics Stack", link: "/blog" },
  { tag: "Innovation", title: "How Agentic AI is Redefining Business Automation", link: "/blog" },
];

export default function InsightsSection() {
  return (
    <section style={{ background: "#0A0A0A", padding: "100px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "60px" }}>
          <div>
            <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#F97316", display: "block", marginBottom: "16px" }}>Latest</span>
            <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#ffffff", lineHeight: 1.1, letterSpacing: "-1px" }}>Insights & Stories</h2>
          </div>
          <Link href="/blog" style={{ color: "#F97316", fontWeight: 600, fontSize: "0.9rem", textDecoration: "none" }}>View All →</Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "24px" }}>
          {insights.map((ins, i) => (
            <Link href={ins.link} key={i}
              style={{ display: "block", background: "#1A1A1A", border: "1px solid #2A2A2A", borderRadius: "8px", padding: "36px 32px", textDecoration: "none", transition: "all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#F97316"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#2A2A2A"; }}
            >
              <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#F97316", display: "block", marginBottom: "12px" }}>{ins.tag}</span>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff", lineHeight: 1.4, marginBottom: "20px" }}>{ins.title}</h3>
              <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#F97316" }}>Read More →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
