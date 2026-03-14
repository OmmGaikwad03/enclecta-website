"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "What We Do", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Insights", href: "/blog" },
  { name: "About Us", href: "/about" },
  { name: "Careers", href: "/careers" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{ width: '100%', position: 'sticky', top: 0, zIndex: 50, background: '#000000' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>

        {/* LEFT — Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ffffff', display: 'flex', flexDirection: 'column', gap: '5px', padding: '4px' }}
        >
          {menuOpen ? (
            <span style={{ fontSize: '1.3rem', color: '#fff' }}>✕</span>
          ) : (
            <>
              <span style={{ display: 'block', width: '22px', height: '2px', background: '#fff' }} />
              <span style={{ display: 'block', width: '22px', height: '2px', background: '#fff' }} />
              <span style={{ display: 'block', width: '22px', height: '2px', background: '#fff' }} />
            </>
          )}
        </button>

        {/* CENTER — Logo */}
       <Link href="/" style={{
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  fontSize: '2.8rem',
  fontWeight: '700',
  color: '#f5f5f5',
  textDecoration: 'none',
  letterSpacing: '3px',
  fontFamily: 'Raghero, sans-serif',
  marginTop:'20px',
 
}}>
  Enclecta
</Link>

        {/* RIGHT — Icons like Zensar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {/* Circle icon */}
          <div style={{ width: '32px', height: '32px', background: '#F97316', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <span style={{ color: '#fff', fontSize: '0.75rem', fontWeight: '800' }}>E</span>
          </div>
          {/* Globe */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
            <span style={{ color: '#fff', fontSize: '1rem' }}>🌐</span>
            <span style={{ color: '#fff', fontSize: '0.8rem', fontWeight: '500' }}>Global</span>
            <span style={{ color: '#fff', fontSize: '0.7rem' }}>▾</span>
          </div>
          {/* Mail */}
          <Link href="/contact" style={{ color: '#fff', fontSize: '1.1rem', textDecoration: 'none' }}>✉️</Link>
        </div>
      </div>

      {/* Full screen dropdown menu */}
      {menuOpen && (
        <div style={{ position: 'fixed', top: '60px', left: 0, width: '100%', height: 'calc(100vh - 60px)', background: '#111', zIndex: 49, padding: '48px 60px', overflowY: 'auto' }}>
          <p style={{ fontSize: '0.7rem', fontWeight: '700', letterSpacing: '3px', textTransform: 'uppercase', color: '#6B7280', marginBottom: '32px' }}>Menu</p>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}
                style={{ fontSize: '2.2rem', fontWeight: '700', color: '#ffffff', textDecoration: 'none', padding: '20px 0', borderBottom: '1px solid #222', display: 'block', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#F97316')}
                onMouseLeave={e => (e.currentTarget.style.color = '#ffffff')}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div style={{ marginTop: '48px' }}>
            <Link href="/contact"
              style={{ background: '#F97316', color: '#fff', padding: '14px 32px', borderRadius: '4px', fontWeight: '700', textDecoration: 'none', fontSize: '1rem' }}
              onClick={() => setMenuOpen(false)}
            >
              Get Started →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}