"use client";

// ── STATS STRIP ──
// Orange background, 4 columns centered, dividers between items

const stats = [
  { number: "10,000+", label: "Employees Worldwide" },
  { number: "1,000+", label: "Clients Served" },
  { number: "35+", label: "Years of Excellence" },
  { number: "50+", label: "Countries Reached" },
];

export default function StatsStrip() {
  return (
    <section className="bg-[#F97316]">
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {stats.map((stat, i) => (
          <div
            key={i}
            style={{
              padding: "28px 24px",
              textAlign: "center",
              borderRight: i < 3 ? "1px solid rgba(255,255,255,0.3)" : "none",
            }}
          >
            <div style={{ fontSize: "2rem", fontWeight: 900, color: "#fff" }}>{stat.number}</div>
            <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.85)", marginTop: "6px", fontWeight: 500 }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
