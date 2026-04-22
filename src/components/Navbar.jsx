import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Business News', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Tech Stack', href: '#skills' },
  { label: 'Honors', href: '#achievements' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setIsOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: scrolled ? 'rgba(247,246,243,0.97)' : 'rgba(247,246,243,0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: `1px solid ${scrolled ? '#e0ddd7' : 'transparent'}`,
      transition: 'all 0.3s ease',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '58px',
        padding: '0 2rem',
      }}>

        {/* Logo */}
        <div
          onClick={() => handleNavClick('#home')}
          style={{
            fontSize: '0.88rem',
            fontWeight: '600',
            color: '#111',
            cursor: 'pointer',
            letterSpacing: '-0.01em',
          }}
        >
          Saumya Mishra
        </div>

        {/* Desktop Nav */}
        <div className="desktop-nav" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.1rem',
        }}>
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              style={{
                background: 'none',
                border: 'none',
                color: '#444',
                fontSize: '0.78rem',
                fontWeight: '500',
                padding: '0.4rem 0.85rem',
                cursor: 'pointer',
                borderRadius: '50px',
                transition: 'all 0.18s ease',
                fontFamily: 'inherit',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(0,0,0,0.05)'
                e.target.style.color = '#111'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'none'
                e.target.style.color = '#444'
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <a
          href="mailto:saumyamishra@example.com"
          className="btn btn-dark desktop-nav"
          style={{ fontSize: '0.74rem', padding: '0.5rem 1.1rem' }}
        >
          Contact Me
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hamburger"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '22px',
                height: '1.5px',
                background: '#111',
                borderRadius: '2px',
                transition: 'all 0.25s ease',
                opacity: isOpen && i === 1 ? 0 : 1,
                transform:
                  isOpen && i === 0
                    ? 'rotate(45deg) translate(4.5px, 4.5px)'
                    : isOpen && i === 2
                    ? 'rotate(-45deg) translate(4.5px, -4.5px)'
                    : 'none',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          background: '#f7f6f3',
          borderTop: '1px solid #e0ddd7',
          padding: '1rem 2rem 1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.25rem',
        }}>
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              style={{
                background: 'none',
                border: 'none',
                color: '#333',
                fontSize: '1rem',
                fontWeight: '500',
                padding: '0.65rem 0.75rem',
                cursor: 'pointer',
                borderRadius: '8px',
                textAlign: 'left',
                transition: 'background 0.15s ease',
                fontFamily: 'inherit',
              }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="mailto:saumyamishra@example.com"
            className="btn btn-dark"
            style={{ marginTop: '0.5rem', alignSelf: 'flex-start' }}
          >
            Contact Me
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}