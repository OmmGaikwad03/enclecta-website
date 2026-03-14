"use client";

// ── AI CHAT BOX SECTION ──
// Exactly like Zensar - centered, breathing both sides, fully mobile responsive
// Background: bg-animation.jpg + bg-animation.gif overlay

import { useState } from "react";

const quickPicks = [
  "Discover Enclecta's services",
  "Explore industries we support",
  "Find job opportunities",
  "What is Enclecta's latest work?",
];

export default function ChatBoxSection() {
  const [query, setQuery] = useState("");

  return (
    <section
      className="relative overflow-hidden bg-black py-16 md:py-20"
    >
      {/* bg-animation.jpg base */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/bg-animation.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "right center",
          backgroundRepeat: "no-repeat",
          opacity: 1,
        }}
      />

      {/* bg-animation.gif overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/bg-animation.gif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.35,
        }}
      />

      {/* Orange blob */}
      <div
        className="absolute pointer-events-none hidden md:block"
        style={{
          right: "10%",
          bottom: "-50px",
          width: "400px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle at center, rgba(249,115,22,0.08) 0%, transparent 65%)",
          filter: "blur(15px)",
        }}
      />

      {/* THIS IS THE KEY — flex + items-center + justify-center centers the box */}
      <div className="relative z-10 flex justify-center items-center w-full px-4 sm:px-8 md:px-16 lg:px-24">

        {/* Box — max width so it doesn't stretch full screen on desktop */}
        <div
          className="w-full bg-[#111111] border border-[#222222] rounded-2xl p-5 sm:p-8 md:p-10 lg:p-12"
          style={{ maxWidth: "980px" }}
        >

          {/* Title */}
          <h2
            className="text-white text-center font-normal mb-6 md:mb-8"
            style={{
              fontSize: "clamp(1.1rem, 3vw, 1.55rem)",
              letterSpacing: "-0.3px",
            }}
          >
            Start your journey with Enclecta.
          </h2>

          {/* Input bar */}
          <div className="flex items-center bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-2 sm:px-3 py-2 gap-2 mb-5 md:mb-6">

            {/* E circle */}
            <div
              className="flex-shrink-0 flex items-center justify-center rounded-full bg-gradient-to-br from-[#7C3AED] to-[#EC4899]"
              style={{ width: "34px", height: "34px", minWidth: "34px" }}
            >
              <span className="text-white font-black text-xs">E</span>
            </div>

            {/* Input */}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Please type out your question or tell us about your challenges."
              className="flex-1 bg-transparent border-none outline-none text-[#6B7280] text-sm min-w-0"
            />

            {/* Arrow button */}
            <button
              className="flex-shrink-0 flex items-center justify-center bg-[#2a2a2a] rounded-full text-white border-none cursor-pointer hover:bg-[#F97316] transition-colors"
              style={{ width: "34px", height: "34px", minWidth: "34px" }}
            >
              ↑
            </button>

            {/* Mic button */}
            <button
              className="flex-shrink-0 flex items-center justify-center bg-[#2a2a2a] rounded-full text-white border-none cursor-pointer hover:bg-[#F97316] transition-colors"
              style={{ width: "34px", height: "34px", minWidth: "34px" }}
            >
              🎤
            </button>
          </div>

          {/* Quick picks label */}
          <p className="text-white font-bold text-sm mb-3">
            Quick picks to get you started
          </p>

          {/* Quick picks grid — 1 col mobile, 2 col tablet, 4 col desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 mb-5 md:mb-6">
            {quickPicks.map((pick, i) => (
              <button
                key={i}
                className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg px-4 py-4 text-[#D1D5DB] text-sm text-left leading-relaxed transition-all duration-200 hover:border-[#F97316] hover:text-white"
              >
                {pick}
              </button>
            ))}
          </div>

          {/* Privacy note */}
          <p className="text-[#6B7280] text-center text-xs">
            We may collect your personal information. By using this, you confirm
            that you agree to Enclecta's{" "}
            <a href="/privacy" className="text-[#F97316] hover:underline">
              Privacy Notice
            </a>
          </p>

        </div>
      </div>
    </section>
  );
}