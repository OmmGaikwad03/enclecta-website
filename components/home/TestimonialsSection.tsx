"use client";

// ── TESTIMONIALS ──
// #FFFAF5 background, 3-col cards, centered max-width

const testimonials = [
  { quote: "Enclecta transformed our operations from a vendor relationship to a true strategic partnership, bringing greater stability and productivity.", name: "Rahul Sharma", title: "CTO, FinServe India" },
  { quote: "A decade-long partnership that streamlined our systems, minimized risk, and delivered measurable business value across all departments.", name: "Priya Mehta", title: "CIO, BuildCorp" },
  { quote: "Enclecta brought not just skills but a true team spirit — they feel like a genuine extension of our own organization.", name: "Amit Patel", title: "Group CIO, RetailMax" },
];

export default function TestimonialsSection() {
  return (
    <section style={{ background: "#FFFAF5", padding: "100px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 40px" }}>
        <span style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#F97316", display: "block", marginBottom: "16px" }}>Client Stories</span>
        <h2 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, color: "#0A0A0A", lineHeight: 1.1, marginBottom: "60px", letterSpacing: "-1px" }}>Hear from our clients</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: "8px", padding: "36px 32px" }}>
              <div style={{ fontSize: "2.5rem", color: "#F97316", marginBottom: "16px", lineHeight: 1 }}>"</div>
              <p style={{ fontSize: "0.95rem", color: "#374151", lineHeight: 1.8, marginBottom: "28px", fontStyle: "italic" }}>{t.quote}</p>
              <div style={{ borderTop: "1px solid #F3F4F6", paddingTop: "20px" }}>
                <div style={{ fontWeight: 700, color: "#0A0A0A", fontSize: "0.95rem" }}>{t.name}</div>
                <div style={{ fontSize: "0.85rem", color: "#F97316", marginTop: "4px" }}>{t.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
