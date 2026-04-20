export default function SectionHeader({ tag, title, subtitle }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'rgba(139, 92, 246, 0.12)',
          border: '1px solid rgba(139, 92, 246, 0.25)',
          borderRadius: '50px',
          padding: '0.3rem 0.9rem',
          marginBottom: '1rem',
        }}
      >
        <span
          style={{
            color: '#a78bfa',
            fontSize: '0.75rem',
            fontWeight: '600',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
          }}
        >
          {tag}
        </span>
      </div>

      <h2
        style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
          fontWeight: '800',
          background: 'linear-gradient(135deg, #ffffff, #a78bfa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '0.75rem',
          letterSpacing: '-0.5px',
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          style={{
            color: 'rgba(255,255,255,0.45)',
            fontSize: '1rem',
            maxWidth: '500px',
            margin: '0 auto',
            lineHeight: '1.7',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}