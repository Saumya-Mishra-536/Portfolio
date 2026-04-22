export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '58px',
        background: '#f7f6f3',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem', width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
        }} className="hero-grid">

          {/* Left */}
          <div style={{ animation: 'fadeUp 0.7s ease both' }}>

            {/* Tag */}
            <div style={{ marginBottom: '2rem' }}>
              <span className="tag accent">
                <span style={{ fontSize: '0.55rem' }}>●</span>
                Data Science &amp; Engineering
              </span>
            </div>

            {/* Heading */}
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4.5vw, 3.4rem)',
              lineHeight: 1.12,
              color: '#111',
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
            }}>
              Bridging Clinical Insights{' '}
              <span style={{ display: 'block' }}>with{' '}
                <em style={{
                  color: '#d4522a',
                  fontStyle: 'italic',
                  fontFamily: "'Playfair Display', Georgia, serif",
                }}>
                  Algorithmic Precision
                </em>.
              </span>
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: '0.88rem',
              color: '#666',
              lineHeight: 1.75,
              maxWidth: '420px',
              marginBottom: '2.25rem',
            }}>
              B.Tech CSE scholar at Rishihood University, specializing in Data
              Analytics and AI/ML, applying this in healthcare and socio-economic
              systems.
            </p>

            {/* Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a
                href="#projects"
                className="btn btn-dark"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                View Research
              </a>
              <a
                href="/resume.pdf"
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume ↓
              </a>
            </div>
          </div>

          {/* Right */}
          <div style={{
            position: 'relative',
            animation: 'fadeIn 1s ease 0.2s both',
          }}>

            {/* Neural viz image */}
            <div style={{
              background: '#fff',
              border: '1px solid #e0ddd7',
              borderRadius: '16px',
              overflow: 'hidden',
              aspectRatio: '1 / 1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
            }}>
              <img
                src="/images/hero_viz.png"
                alt="Neural network data visualization"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.85,
                  mixBlendMode: 'multiply',
                }}
              />

              {/* Floating counter */}
              <div style={{
                position: 'absolute',
                bottom: '1.25rem',
                right: '1.25rem',
                background: '#fff',
                border: '1px solid #e0ddd7',
                borderRadius: '10px',
                padding: '0.75rem 1rem',
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
              }}>
                <div style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.75rem',
                  fontWeight: 800,
                  color: '#111',
                  lineHeight: 1,
                }}>7+</div>
                <div style={{
                  fontSize: '0.58rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#999',
                  marginTop: '0.25rem',
                }}>
                  Complex<br/>Projects
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  )
}