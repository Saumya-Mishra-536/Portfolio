import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setIsOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: scrolled ? 'rgba(10,10,30,0.95)' : 'rgba(10,10,30,0.7)',
        backdropFilter: 'blur(20px)',
        borderBottom: scrolled ? '1px solid rgba(139,92,246,0.3)' : 'none',
        padding: '0 2rem',
        transition: 'all 0.3s ease',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '70px',
        }}
      >
        {/* Logo */}
        <div
          onClick={() => handleNavClick('#home')}
          style={{
            fontSize: '1.4rem',
            fontWeight: '800',
            background: 'linear-gradient(135deg, #a78bfa, #60a5fa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            cursor: 'pointer',
            letterSpacing: '-0.5px',
          }}
        >
          SM
        </div>

        {/* Desktop Links */}
        <div
          style={{
            display: 'flex',
            gap: '0.2rem',
            alignItems: 'center',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(255,255,255,0.75)',
                fontSize: '0.82rem',
                fontWeight: '500',
                padding: '0.4rem 0.7rem',
                cursor: 'pointer',
                borderRadius: '8px',
                transition: 'all 0.2s ease',
                letterSpacing: '0.3px',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#a78bfa'
                e.target.style.background = 'rgba(167,139,250,0.1)'
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'rgba(255,255,255,0.75)'
                e.target.style.background = 'none'
              }}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            flexDirection: 'column',
            gap: '5px',
          }}
          className="hamburger"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '25px',
                height: '2px',
                background: '#a78bfa',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                opacity: isOpen && i === 1 ? 0 : 1,
                transform:
                  isOpen && i === 0
                    ? 'rotate(45deg) translate(5px, 5px)'
                    : isOpen && i === 2
                    ? 'rotate(-45deg) translate(5px, -5px)'
                    : 'none',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          style={{
            background: 'rgba(10,10,30,0.98)',
            backdropFilter: 'blur(20px)',
            padding: '1rem 2rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            borderTop: '1px solid rgba(139,92,246,0.2)',
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(255,255,255,0.8)',
                fontSize: '1rem',
                fontWeight: '500',
                padding: '0.75rem 1rem',
                cursor: 'pointer',
                borderRadius: '10px',
                textAlign: 'left',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#a78bfa'
                e.target.style.background = 'rgba(167,139,250,0.1)'
              }}
              onMouseLeave={(e) => {
                e.target.style.color = 'rgba(255,255,255,0.8)'
                e.target.style.background = 'none'
              }}
            >
              {link.label}
            </button>
          ))}
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