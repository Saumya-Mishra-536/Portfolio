export default function Footer() {
  const handleNav = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{
      background: '#f7f6f3',
      borderTop: '1px solid #e0ddd7',
      padding: '2.5rem 2rem',
    }}>
      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1.5rem',
      }}>

        {/* Left */}
        <div>
          <p style={{ fontSize: '0.85rem', fontWeight: '700', color: '#111', marginBottom: '0.25rem' }}>
            Saumya Mishra
          </p>
          <p style={{ fontSize: '0.72rem', color: '#888' }}>
            Data Science & Engineering · B.Tech CSE
          </p>
        </div>

        {/* Center links */}
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          {[
            { label: 'Projects', href: '#projects' },
            { label: 'Tech Stack', href: '#skills' },
            { label: 'Honors', href: '#achievements' },
          ].map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.75rem',
                color: '#888',
                fontFamily: 'inherit',
                transition: 'color 0.15s',
                padding: 0,
              }}
              onMouseEnter={(e) => e.target.style.color = '#111'}
              onMouseLeave={(e) => e.target.style.color = '#888'}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right */}
        <p style={{ fontSize: '0.72rem', color: '#aaa' }}>
          © 2025 Saumya Mishra
        </p>
      </div>
    </footer>
  )
}