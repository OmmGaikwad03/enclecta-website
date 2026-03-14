"use client";

// ── HERO SECTION ──
// GIF right half, heading with proper left padding matching original

export default function HeroSection() {
  return (
    <section className="relative w-full h-[350px] bg-black overflow-hidden flex items-center">

      {/* Dark gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, #000000 35%, #120820 55%, #1a0d35 70%, #250a2a 85%, #1a0510 100%)",
        }}
      />

      {/* Half GIF right */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full"
        style={{
          backgroundImage: "url('/images/bg-animation02.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 1,
          maskImage: "linear-gradient(to right, transparent 0%, black 35%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 35%)",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute"
        style={{
          right: "8%", top: "5%", width: "45%", height: "90%",
          background: "radial-gradient(ellipse at center, rgba(99,102,241,0.4) 0%, transparent 65%)",
        }}
      />

      {/* Heading — paddingLeft matches original marginLeft 72px + padding 48px */}
      <div className="relative z-10" style={{ paddingLeft: "120px" }}>
        <h1
          className="font-extrabold text-white leading-tight m-0"
          style={{ fontSize: "clamp(2rem, 6vw, 4rem)", letterSpacing: "-2px" }}
        >
          Experiences,<br />Thoughtfully<br />Reimagined
        </h1>
      </div>

    </section>
  );
}
