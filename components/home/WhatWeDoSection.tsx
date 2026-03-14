"use client";

// ── WHAT WE DO ──
// White background, 3-col service cards, centered max-width

import Link from "next/link";

const services = [
  { icon: "⚡", title: "Application Services", desc: "Comprehensive app lifecycle services that boost performance and power seamless enterprise integration." },
  { icon: "🤖", title: "Artificial Intelligence", desc: "AI solutions that transform data into actionable insights — empowering smarter decisions and faster innovation." },
  { icon: "☁️", title: "Cloud & Infrastructure", desc: "Cloud consulting and management services that protect ecosystems, boost performance, and enhance experience." },
  { icon: "📊", title: "Data & Analytics", desc: "End-to-end data services that turn complexity into clarity — unlocking insights, intelligence, and innovation." },
  { icon: "📣", title: "Marketing & Engagement", desc: "Storytelling-led experiences that combine strategy, design, and media to connect with your audience." },
  { icon: "🚀", title: "Product & Platforms", desc: "Product transformation services that support the full lifecycle — from early-stage innovation to next-gen shifts." },
];

export default function WhatWeDoSection() {
  return (
    <section style={{ background: "#ffffff", padding: "100px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
        <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#F97316", display: "block", marginBottom: "16px" }}>Our Services</span>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#0A0A0A", lineHeight: 1.1, marginBottom: "16px", letterSpacing: "-1px" }}>What we do</h2>
        <p style={{ fontSize: "1.05rem", color: "#6B7280", maxWidth: "560px", lineHeight: 1.7, marginBottom: "60px" }}>
          From ideas to execution, our services tackle your most pressing business challenges.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {services.map((s, i) => (
            <Link href="/services" key={i}
              style={{ display: "block", padding: "36px 32px", border: "1px solid #E5E7EB", borderRadius: "8px", textDecoration: "none", transition: "all 0.3s" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#F97316"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(249,115,22,0.12)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#E5E7EB"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "16px" }}>{s.icon}</div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#0A0A0A", marginBottom: "12px" }}>{s.title}</h3>
              <p style={{ fontSize: "0.9rem", color: "#6B7280", lineHeight: 1.7, marginBottom: "20px" }}>{s.desc}</p>
              <span style={{ fontSize: "0.85rem", fontWeight: 600, color: "#F97316" }}>Know More →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
