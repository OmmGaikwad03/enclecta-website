"use client";

import Link from "next/link";
import { useState } from "react";

const quickPicks = [
  "Discover Enclecta's services",
  "Explore industries we support",
  "Find job opportunities",
  "What is Enclecta's latest work?",
];

const services = [
  { icon: "⚡", title: "Application Services", desc: "Comprehensive app lifecycle services that boost performance and power seamless enterprise integration." },
  { icon: "🤖", title: "Artificial Intelligence", desc: "AI solutions that transform data into actionable insights — empowering smarter decisions and faster innovation." },
  { icon: "☁️", title: "Cloud & Infrastructure", desc: "Cloud consulting and management services that protect ecosystems, boost performance, and enhance experience." },
  { icon: "📊", title: "Data & Analytics", desc: "End-to-end data services that turn complexity into clarity — unlocking insights, intelligence, and innovation." },
  { icon: "📣", title: "Marketing & Engagement", desc: "Storytelling-led experiences that combine strategy, design, and media to connect with your audience." },
  { icon: "🚀", title: "Product & Platforms", desc: "Product transformation services that support the full lifecycle — from early-stage innovation to next-gen shifts." },
];

const industries = [
  { icon: "🏦", name: "Banking & Financial Services" },
  { icon: "🛒", name: "Consumer Services" },
  { icon: "🏥", name: "Healthcare & Life Sciences" },
  { icon: "🛡️", name: "Insurance" },
  { icon: "🏭", name: "Manufacturing" },
  { icon: "📡", name: "Technology, Media & Telecom" },
];

const testimonials = [
  { quote: "Enclecta transformed our operations from a vendor relationship to a true strategic partnership, bringing greater stability and productivity.", name: "Rahul Sharma", title: "CTO, FinServe India" },
  { quote: "A decade-long partnership that streamlined our systems, minimized risk, and delivered measurable business value across all departments.", name: "Priya Mehta", title: "CIO, BuildCorp" },
  { quote: "Enclecta brought not just skills but a true team spirit — they feel like a genuine extension of our own organization.", name: "Amit Patel", title: "Group CIO, RetailMax" },
];

const insights = [
  { tag: "Technology", title: "AI Trends Shaping Enterprise in 2026", link: "/blog" },
  { tag: "Cloud", title: "Unlocking Value with Cloud-Native Architecture", link: "/blog" },
  { tag: "Data Analytics", title: "From Data to Decisions: The Modern Analytics Stack", link: "/blog" },
  { tag: "Innovation", title: "How Agentic AI is Redefining Business Automation", link: "/blog" },
];

export default function Home() {
  const [query, setQuery] = useState("");

  return (
    <main style={{ fontFamily: 'Inter, sans-serif' }}>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', width: '100%', height: '260px', background: '#000000', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
       <div style={{
    position: 'absolute', inset: 0, zIndex: 0,
    backgroundImage: "url('/images/bg-animation01.gif')",
    backgroundSize: '50% 60%',
    backgroundPosition: 'top right',
    backgroundRepeat: 'no-repeat',
    opacity: 0.35,
  }} />
   <div style={{ position: 'relative', zIndex: 2, padding: '0 48px' }}>
          <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: '700', color: '#ffffff', lineHeight: '1.05', letterSpacing: '-2px', margin: 0 }}>
            Experiences,<br />Thoughtfully<br />Reimagined
          </h1>
        </div>
        </section>

      {/*<section style={{ position: 'relative', width: '100%', height: '260px', background: '#000000', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #000000 35%, #120820 55%, #1a0d35 70%, #250a2a 85%, #1a0510 100%)' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, width: '60%', height: '100%', background: 'linear-gradient(135deg, transparent 10%, rgba(139,92,246,0.5) 40%, rgba(236,72,153,0.4) 70%, rgba(249,115,22,0.2) 100%)' }} />
        <div style={{ position: 'absolute', right: '8%', top: '5%', width: '45%', height: '90%', background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.4) 0%, transparent 65%)' }} />
        <div style={{ position: 'relative', zIndex: 2, padding: '0 48px' }}>
          <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', fontWeight: '700', color: '#ffffff', lineHeight: '1.05', letterSpacing: '-2px', margin: 0 }}>
            Experiences,<br />Thoughtfully<br />Reimagined
          </h1>
        </div>
      </section>

      {/* ── AI CHAT BOX SECTION ── */}
      <section style={{ position: 'relative', overflow: 'hidden', height:'420px',paddingBottom: '80px', background: '#000000' }}>
{/* GIF 1 — left side */}
<div style={{
  position: 'absolute', inset: 0, zIndex: 0,
  backgroundImage: "url('/images/bg-animation.gif')",
  backgroundSize: 'cover',
  backgroundPosition: 'left center',
  backgroundRepeat: 'no-repeat',
  opacity: 0.25,
}} />

{/* GIF 2 — right side */}
{/*<div style={{
  position: 'absolute', inset: 0, zIndex: 0,
  backgroundImage: "url('/images/bg-animation1.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'right center',
  backgroundRepeat: 'no-repeat',
  opacity: 0.25,
}} />
{/*<div style={{
  position: 'absolute', inset: 0, zIndex: 0,
  backgroundImage: "url('/images/bg-animation01.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'left center',
  backgroundRepeat: 'no-repeat',
  opacity: 0.25,
}} />
 {/* GIF Background */}
  <div style={{
    position: 'absolute', inset: 0, zIndex: 0,
    backgroundImage: "url('/images/bg-animation.gif')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    opacity: 0.35,
  }} />

        {/* Animated background blobs */}
       { /*<style>{`
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    25% { background-position: 100% 50%; }
    50% { background-position: 100% 0%; }
    75% { background-position: 0% 100%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes blobFloat1 {
    0%   { transform: translate(0px, 0px) scale(1); opacity: 0.7; }
    25%  { transform: translate(60px, -40px) scale(1.15); opacity: 1; }
    50%  { transform: translate(30px, -80px) scale(0.95); opacity: 0.8; }
    75%  { transform: translate(-40px, -30px) scale(1.1); opacity: 1; }
    100% { transform: translate(0px, 0px) scale(1); opacity: 0.7; }
  }
  @keyframes blobFloat2 {
    0%   { transform: translate(0px, 0px) scale(1.1); opacity: 0.6; }
    25%  { transform: translate(-50px, 40px) scale(0.9); opacity: 0.9; }
    50%  { transform: translate(-80px, -20px) scale(1.2); opacity: 0.7; }
    75%  { transform: translate(30px, 50px) scale(0.95); opacity: 1; }
    100% { transform: translate(0px, 0px) scale(1.1); opacity: 0.6; }
  }
  @keyframes blobFloat3 {
    0%   { transform: translate(0px, 0px) scale(0.95); opacity: 0.5; }
    33%  { transform: translate(40px, 60px) scale(1.1); opacity: 0.8; }
    66%  { transform: translate(-30px, 30px) scale(0.9); opacity: 0.6; }
    100% { transform: translate(0px, 0px) scale(0.95); opacity: 0.5; }
  }
  @keyframes blobFloat4 {
    0%   { transform: translate(0px, 0px) scale(1); opacity: 0.4; }
    50%  { transform: translate(-60px, -50px) scale(1.2); opacity: 0.7; }
    100% { transform: translate(0px, 0px) scale(1); opacity: 0.4; }
  }
`}</style>*/}

{/* Animated gradient base */}
{/*<div style={{
  position: 'absolute', inset: 0,
  background: 'linear-gradient(125deg, #000000 0%, #080012 20%, #0d0020 35%, #060018 50%, #100008 65%, #080012 80%, #000000 100%)',
  backgroundSize: '400% 400%',
  animation: 'gradientShift 15s ease infinite',
  pointerEvents: 'none'
}} />

{/* Purple blob — left */}
<div style={{
  position: 'absolute', left: '-150px', top: '-50px',
  width: '700px', height: '700px', borderRadius: '50%',
  
  animation: 'blobFloat1 10s ease-in-out infinite',
  pointerEvents: 'none', filter: 'blur(8px)'
}} />

{/* Deep red/pink blob — right */}
{/*<div style={{
  position: 'absolute', right: '-120px', top: '-80px',
  width: '650px', height: '650px', borderRadius: '50%',
  background: 'radial-gradient(circle at center, rgba(190,18,60,0.18) 0%, rgba(220,38,100,0.08) 35%, transparent 70%)',
  animation: 'blobFloat2 13s ease-in-out infinite',
  pointerEvents: 'none', filter: 'blur(10px)'
}} />

{/* Blue blob — center */}
<div style={{
  position: 'absolute', left: '25%', top: '30px',
  width: '500px', height: '400px', borderRadius: '50%',
  background: 'radial-gradient(circle at center, rgba(37,99,235,0.12) 0%, rgba(59,130,246,0.06) 40%, transparent 70%)',
  animation: 'blobFloat3 16s ease-in-out infinite',
  pointerEvents: 'none', filter: 'blur(12px)'
}} />

{/* Orange accent blob — bottom right */}
<div style={{
  position: 'absolute', right: '10%', bottom: '-50px',
  width: '400px', height: '350px', borderRadius: '50%',
  background: 'radial-gradient(circle at center, rgba(249,115,22,0.08) 0%, transparent 65%)',
  animation: 'blobFloat4 infinite ease-in-out infinite',
  pointerEvents: 'none', filter: 'blur(15px)'
}} />
        {/* THE CHAT BOX */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '980px', margin: '0 auto', padding: '02px 5px 0' }}>
          <div style={{ background: '#111111', borderRadius: '8px', padding: '0px 40px 0px', border: '1px solid #222222' }}>

            {/* Title */}
            <h2 style={{ fontSize: '1.55rem', fontWeight: '500', color: '#ffffff', textAlign: 'center', marginBottom: '32px', marginTop:'17.5px',letterSpacing: '-0.3px' }}>
              Start your journey with Enclecta.
            </h2>

            {/* Input bar */}
            <div style={{ display: 'flex', alignItems: 'center', background: '#1a1a1a', borderRadius: '10px', padding: '8px 8px 8px 12px', gap: '12px', marginBottom: '24px', border: '1px solid #2a2a2a' }}>
              {/* Logo circle - gradient like Zensar */}
              <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ color: '#fff', fontSize: '0.85rem', fontWeight: '800' }}>E</span>
              </div>
              {/* Input */}
              <input
                type="text"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Please type out your question or tell us about your challenges."
                style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: '#6B7280', fontSize: '0.92rem', fontFamily: 'Inter, sans-serif' }}
              />
              {/* Arrow button */}
              <button style={{ width: '38px', height: '38px', background: '#2a2a2a', borderRadius: '50%', border: 'none', cursor: 'pointer', color: '#fff', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>↑</button>
              {/* Mic button */}
              <button style={{ width: '38px', height: '38px', background: '#2a2a2a', borderRadius: '50%', border: 'none', cursor: 'pointer', color: '#fff', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem' }}>🎤</button>
            </div>

            {/* Quick picks label */}
            <p style={{ fontSize: '0.88rem', fontWeight: '700', color: '#ffffff', marginBottom: '12px' }}>
              Quick picks to get you started
            </p>

            {/* Quick picks grid — 4 columns */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '28px' }}>
              {quickPicks.map((pick, i) => (
                <button key={i}
                  style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '8px', padding: '16px 14px', color: '#D1D5DB', fontSize: '0.88rem', textAlign: 'left', cursor: 'pointer', lineHeight: '1.5', fontFamily: 'Inter, sans-serif', transition: 'border-color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#F97316'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.color = '#D1D5DB'; }}
                >
                  {pick}
                </button>
              ))}
            </div>

            {/* Privacy note */}
            <p style={{ fontSize: '0.78rem', color: '#6B7280', textAlign: 'center' }}>
              We may collect your personal information. By using this, you confirm that you agree to Enclecta's{' '}
              <a href="/privacy" style={{ color: '#F97316' }}>Privacy Notice</a>
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section style={{ background: '#F97316' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[
            { number: '10,000+', label: 'Employees Worldwide' },
            { number: '1,000+', label: 'Clients Served' },
            { number: '35+', label: 'Years of Excellence' },
            { number: '50+', label: 'Countries Reached' },
          ].map((stat, i) => (
            <div key={i} style={{ padding: '32px 24px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.3)' : 'none' }}>
              <div style={{ fontSize: '2rem', fontWeight: '900', color: '#fff' }}>{stat.number}</div>
              <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', marginTop: '6px', fontWeight: '500' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WE PUT PEOPLE FIRST ── */}
      <section style={{ background: '#0A0A0A', padding: '100px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', color: '#F97316', display: 'block', marginBottom: '20px' }}>Our Philosophy</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', color: '#ffffff', lineHeight: '1.1', marginBottom: '24px', letterSpacing: '-1px' }}>
              We put <span style={{ color: '#F97316' }}>people</span> first
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#9CA3AF', lineHeight: '1.8', marginBottom: '16px' }}>
              As creators, thinkers, and problem solvers, we are dedicated to meeting all your needs at any stage of your journey.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#9CA3AF', lineHeight: '1.8', marginBottom: '32px' }}>
              Whether you're building digital products, creating brand experiences, or managing services — we're with you from start to finish.
            </p>
            <Link href="/about" style={{ color: '#F97316', fontWeight: '600', fontSize: '0.95rem' }}>Learn About Us →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {['Experience', 'Engineering', 'Engagement', 'Excellence'].map((word, i) => (
              <div key={i} style={{ background: i === 0 ? '#F97316' : '#1A1A1A', border: '1px solid #2A2A2A', borderRadius: '12px', padding: '32px 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: '700', color: '#ffffff' }}>{word}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section style={{ background: '#ffffff', padding: '100px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', color: '#F97316', display: 'block', marginBottom: '16px' }}>Our Services</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', color: '#0A0A0A', lineHeight: '1.1', marginBottom: '16px', letterSpacing: '-1px' }}>What we do</h2>
          <p style={{ fontSize: '1.05rem', color: '#6B7280', maxWidth: '560px', lineHeight: '1.7', marginBottom: '60px' }}>From ideas to execution, our services tackle your most pressing business challenges.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {services.map((s, i) => (
              <Link href="/services" key={i} style={{ display: 'block', padding: '36px 32px', border: '1px solid #E5E7EB', borderRadius: '8px', textDecoration: 'none', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#F97316'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(249,115,22,0.12)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '16px' }}>{s.icon}</div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#0A0A0A', marginBottom: '12px' }}>{s.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#6B7280', lineHeight: '1.7', marginBottom: '20px' }}>{s.desc}</p>
                <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#F97316' }}>Know More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: '#FFFAF5', padding: '100px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', color: '#F97316', display: 'block', marginBottom: '16px' }}>Client Stories</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', color: '#0A0A0A', lineHeight: '1.1', marginBottom: '60px', letterSpacing: '-1px' }}>Hear from our clients</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '36px 32px' }}>
                <div style={{ fontSize: '2.5rem', color: '#F97316', marginBottom: '16px', lineHeight: '1' }}>"</div>
                <p style={{ fontSize: '0.95rem', color: '#374151', lineHeight: '1.8', marginBottom: '28px', fontStyle: 'italic' }}>{t.quote}</p>
                <div style={{ borderTop: '1px solid #F3F4F6', paddingTop: '20px' }}>
                  <div style={{ fontWeight: '700', color: '#0A0A0A', fontSize: '0.95rem' }}>{t.name}</div>
                  <div style={{ fontSize: '0.85rem', color: '#F97316', marginTop: '4px' }}>{t.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section style={{ background: '#ffffff', padding: '100px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', color: '#F97316', display: 'block', marginBottom: '16px' }}>Sectors</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', color: '#0A0A0A', lineHeight: '1.1', marginBottom: '16px', letterSpacing: '-1px' }}>Industries we empower</h2>
          <p style={{ fontSize: '1.05rem', color: '#6B7280', maxWidth: '560px', lineHeight: '1.7', marginBottom: '60px' }}>We work with industries that impact daily life and shape what's next.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {industries.map((ind, i) => (
              <Link href="/industries" key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '24px 28px', border: '1px solid #E5E7EB', borderRadius: '8px', textDecoration: 'none', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#F97316'; e.currentTarget.style.background = '#FFFAF5'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#E5E7EB'; e.currentTarget.style.background = '#fff'; }}
              >
                <span style={{ fontSize: '1.8rem' }}>{ind.icon}</span>
                <span style={{ fontWeight: '600', color: '#0A0A0A', fontSize: '0.95rem' }}>{ind.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSIGHTS ── */}
      <section style={{ background: '#0A0A0A', padding: '100px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', color: '#F97316', display: 'block', marginBottom: '16px' }}>Latest</span>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '900', color: '#ffffff', lineHeight: '1.1', letterSpacing: '-1px' }}>Insights & Stories</h2>
            </div>
            <Link href="/blog" style={{ color: '#F97316', fontWeight: '600', fontSize: '0.9rem', textDecoration: 'none' }}>View All →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            {insights.map((ins, i) => (
              <Link href={ins.link} key={i} style={{ display: 'block', background: '#1A1A1A', border: '1px solid #2A2A2A', borderRadius: '8px', padding: '36px 32px', textDecoration: 'none', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#F97316'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#2A2A2A'; }}
              >
                <span style={{ fontSize: '0.75rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: '#F97316', display: 'block', marginBottom: '12px' }}>{ins.tag}</span>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#ffffff', lineHeight: '1.4', marginBottom: '20px' }}>{ins.title}</h3>
                <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#F97316' }}>Read More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAREERS CTA ── */}
      <section style={{ background: '#F97316', padding: '80px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '32px' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '900', color: '#fff', lineHeight: '1.1', marginBottom: '12px', letterSpacing: '-1px' }}>Build your career with us</h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.85)', maxWidth: '500px' }}>People are at the heart of Enclecta. This is your place to grow, lead, and make a lasting impact.</p>
          </div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Link href="/careers" style={{ background: '#fff', color: '#F97316', padding: '14px 32px', borderRadius: '4px', fontWeight: '700', fontSize: '0.95rem', display: 'inline-block', textDecoration: 'none' }}>Join Us</Link>
            <Link href="/contact" style={{ background: 'transparent', color: '#fff', padding: '14px 32px', borderRadius: '4px', fontWeight: '600', fontSize: '0.95rem', border: '2px solid rgba(255,255,255,0.5)', display: 'inline-block', textDecoration: 'none' }}>Contact Us</Link>
          </div>
        </div>
      </section>

    </main>
  );
}