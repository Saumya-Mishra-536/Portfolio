export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(139,92,246,0.15)',
        padding: '2rem',
        textAlign: 'center',
        color: 'rgba(255,255,255,0.3)',
        fontSize: '0.82rem',
      }}
    >
      <div
        style={{
          background: 'linear-gradient(135deg, #a78bfa, #60a5fa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: '700',
          fontSize: '0.95rem',
          marginBottom: '0.5rem',
        }}
      >
        Saumya Mishra
      </div>
      <p>Data Science Undergraduate · ML Enthusiast · Research Intern</p>
      <p style={{ marginTop: '0.3rem' }}>© 2025 Saumya Mishra. Built with React.</p>
    </footer>
  )
}