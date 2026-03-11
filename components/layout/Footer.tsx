"use client";
import Link from "next/link";

const footerLinks = {
  "Who We Are": [
    { name: "What We Do", href: "/services" },
    { name: "Industries We Empower", href: "/industries" },
    { name: "Our Brand", href: "/about" },
    { name: "CSR", href: "/about" },
  ],
  "Quick Links": [
    { name: "Partners", href: "/partners" },
    { name: "Our Perspectives", href: "/blog" },
    { name: "PR and News", href: "/blog" },
    { name: "Sitemap", href: "/" },
  ],
  "Careers": [
    { name: "Job Opportunities", href: "/careers" },
    { name: "Life At Enclecta", href: "/careers" },
    { name: "Learning Academy", href: "/careers" },
    { name: "Gen Z At Enclecta", href: "/careers" },
  ],
  "Let's Connect": [
    { name: "Contact Us", href: "/contact" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", icon: "in", href: "#" },
  { name: "Facebook", icon: "f", href: "#" },
  { name: "Instagram", icon: "ig", href: "#" },
  { name: "Twitter", icon: "x", href: "#" },
  { name: "YouTube", icon: "yt", href: "#" },
];

export default function Footer() {
  return (
    <footer style={{ background: '#0a0a0a', color: '#fff', fontFamily: 'Inter, sans-serif' }}>

      {/* ── NEWSLETTER STRIP ── */}
      <div style={{ borderBottom: '1px solid #1f1f1f', padding: '60px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '32px' }}>
          <div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>Let's connect</h3>
            <p style={{ fontSize: '0.9rem', color: '#6B7280' }}>Stay ahead with the latest updates from Enclecta.</p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <input
              type="email"
              placeholder="Business email address"
              style={{ background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '6px', padding: '12px 20px', color: '#fff', fontSize: '0.9rem', outline: 'none', width: '280px', fontFamily: 'Inter, sans-serif' }}
            />
            <button style={{ background: '#F97316', color: '#fff', border: 'none', borderRadius: '6px', padding: '12px 28px', fontWeight: '700', fontSize: '0.9rem', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
              Submit →
            </button>
          </div>
        </div>
      </div>

      {/* ── MAIN FOOTER LINKS ── */}
      <div style={{ padding: '60px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: '48px' }}>

          {/* Logo + Social */}
          <div>
            <Link href="/" style={{ fontSize: '2rem', fontWeight: '900', color: '#F97316', textDecoration: 'none', display: 'block', marginBottom: '24px', letterSpacing: '-1px' }}>
              Enclecta
            </Link>
            <p style={{ fontSize: '0.88rem', color: '#6B7280', lineHeight: '1.7', marginBottom: '28px', maxWidth: '260px' }}>
              Transforming businesses through experience, engineering, and engagement.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {socialLinks.map((s) => (
                <a key={s.name} href={s.href}
                  style={{ width: '36px', height: '36px', background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#9CA3AF', fontSize: '0.7rem', fontWeight: '700', textDecoration: 'none', textTransform: 'uppercase', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#F97316'; e.currentTarget.style.borderColor = '#F97316'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#1a1a1a'; e.currentTarget.style.borderColor = '#2a2a2a'; e.currentTarget.style.color = '#9CA3AF'; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{ fontSize: '0.8rem', fontWeight: '700', letterSpacing: '2px', textTransform: 'uppercase', color: '#ffffff', marginBottom: '20px' }}>
                {title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}
                      style={{ fontSize: '0.88rem', color: '#6B7280', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#F97316')}
                      onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div style={{ borderTop: '1px solid #1f1f1f', padding: '24px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {['Privacy Policy', 'Cookie Policy', 'Terms of Use', 'Disclaimer'].map((item) => (
              <Link key={item} href="#"
                style={{ fontSize: '0.78rem', color: '#6B7280', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#F97316')}
                onMouseLeave={e => (e.currentTarget.style.color = '#6B7280')}
              >
                {item}
              </Link>
            ))}
          </div>
          <p style={{ fontSize: '0.78rem', color: '#4B5563' }}>
            © 2024 Enclecta. All rights reserved.
          </p>
        </div>
      </div>

    </footer>
  );
}