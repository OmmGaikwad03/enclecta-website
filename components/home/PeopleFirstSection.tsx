"use client";

// ── WE PUT PEOPLE FIRST ──
// Dark #0A0A0A background, 2-col grid, centered max-width

import Link from "next/link";

export default function PeopleFirstSection() {
  return (
    <section style={{ background: "#0A0A0A", padding: "100px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
        <div>
          <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#F97316", display: "block", marginBottom: "20px" }}>
            Our Philosophy
          </span>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#ffffff", lineHeight: 1.1, marginBottom: "24px", letterSpacing: "-1px" }}>
            We put <span style={{ color: "#F97316" }}>people</span> first
          </h2>
          <p style={{ fontSize: "1.05rem", color: "#9CA3AF", lineHeight: 1.8, marginBottom: "16px" }}>
            As creators, thinkers, and problem solvers, we are dedicated to meeting all your needs at any stage of your journey.
          </p>
          <p style={{ fontSize: "1.05rem", color: "#9CA3AF", lineHeight: 1.8, marginBottom: "32px" }}>
            Whether you're building digital products, creating brand experiences, or managing services — we're with you from start to finish.
          </p>
          <Link href="/about" style={{ color: "#F97316", fontWeight: 600, fontSize: "0.95rem", textDecoration: "none" }}>
            Learn About Us →
          </Link>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          {["Experience", "Engineering", "Engagement", "Excellence"].map((word, i) => (
            <div key={i} style={{ background: i === 0 ? "#F97316" : "#1A1A1A", border: "1px solid #2A2A2A", borderRadius: "12px", padding: "32px 24px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ fontSize: "1.1rem", fontWeight: 700, color: "#ffffff" }}>{word}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
