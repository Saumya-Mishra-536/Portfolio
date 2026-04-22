// Experience & Academic Path — combines Education + Experience + Leadership
export default function Education() {
  return (
    <section id="experience" style={{ background: '#f7f6f3' }}>
      <div className="section">

        {/* Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <p className="section-label">Experience &amp; Academic Path</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '1.5rem',
          alignItems: 'start',
        }} className="exp-grid">

          {/* === LEFT: Education === */}
          <div className="card" style={{ padding: '1.5rem' }}>
            <div style={{ marginBottom: '1rem' }}>
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: '#111',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
              }}>
                <span style={{ color: '#fff', fontSize: '0.9rem' }}>🎓</span>
              </div>
              <p className="section-label" style={{ marginBottom: 0 }}>Education</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <p style={{ fontSize: '0.65rem', color: '#999', marginBottom: '0.25rem', letterSpacing: '0.05em' }}>
                  2024 – 2028
                </p>
                <p style={{ fontSize: '0.85rem', fontWeight: '700', color: '#111', marginBottom: '0.1rem' }}>
                  Rishihood University
                </p>
                <p style={{ fontSize: '0.75rem', color: '#555' }}>
                  B.Tech CSE · Data Science
                </p>
                <p style={{ fontSize: '0.72rem', color: '#888', marginTop: '0.2rem' }}>
                  Newton School of Technology
                </p>
              </div>

              <div style={{ borderTop: '1px solid #ece9e3', paddingTop: '1rem' }}>
                <p style={{ fontSize: '0.65rem', color: '#999', marginBottom: '0.25rem', letterSpacing: '0.05em' }}>
                  March 2023
                </p>
                <p style={{ fontSize: '0.85rem', fontWeight: '700', color: '#111', marginBottom: '0.1rem' }}>
                  Sri Chaitanya Techno School
                </p>
                <p style={{ fontSize: '0.75rem', color: '#555' }}>
                  Class XII · CBSE · Science
                </p>
                <p style={{ fontSize: '0.72rem', color: '#888', marginTop: '0.2rem' }}>
                  Bengaluru, Karnataka
                </p>
              </div>
            </div>
          </div>

          {/* === RIGHT: Experiences + Leadership === */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

            {/* Clinical Research Intern */}
            <div className="card" style={{ padding: '1.4rem' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: '1rem',
                marginBottom: '0.75rem',
                flexWrap: 'wrap',
              }}>
                <div>
                  <p style={{ fontSize: '0.62rem', color: '#999', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                    March 2024 – April 2025
                  </p>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#111', marginBottom: '0.15rem' }}>
                    Clinical Research Intern
                  </h3>
                  <p style={{ fontSize: '0.78rem', color: '#888' }}>at Hydrabad</p>
                </div>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  border: '1px solid #e0ddd7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  flexShrink: 0,
                }}>🏥</div>
              </div>
              <p style={{ fontSize: '0.8rem', color: '#555', lineHeight: 1.7 }}>
                Analyzing clinical datasets to derive actionable insights for multi-stage engineering. Focus on predictive modeling in patient data across security-ranked scenarios.
              </p>
            </div>

            {/* Bottom row: Research Intern + Leadership */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 1fr',
              gap: '1rem',
            }} className="bottom-exp-grid">

              {/* Research Intern - dark card */}
              <div className="card-dark" style={{ padding: '1.4rem', borderRadius: '12px' }}>
                <p style={{ fontSize: '0.62rem', color: '#aaa', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  June – July 2025
                </p>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '0.75rem',
                }}>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#fff' }}>
                    Research Intern
                  </h3>
                  <span style={{ fontSize: '1rem' }}>👤</span>
                </div>
                <p style={{ fontSize: '0.78rem', color: '#bbb', lineHeight: 1.65 }}>
                  Ideas-led, computational models and ecosystem research methodology, including bringing change between new data and policy-level impact.
                </p>
              </div>

              {/* Leadership - pink card */}
              <div className="card-pink" style={{ padding: '1.4rem', borderRadius: '12px' }}>
                <p style={{ fontSize: '0.62rem', color: '#be185d', letterSpacing: '0.10em', textTransform: 'uppercase', fontWeight: '700', marginBottom: '0.75rem' }}>
                  Leadership
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {[
                    'Vice President · Public Policy Club',
                    'Ignite 2025 Finalist',
                    'Head Girl &amp; Vice Captain',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <span style={{ color: '#be185d', fontSize: '0.6rem', marginTop: '0.32rem', flexShrink: 0 }}>●</span>
                      <p style={{ fontSize: '0.78rem', color: '#881337', lineHeight: 1.4 }}
                        dangerouslySetInnerHTML={{ __html: item }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .exp-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 600px) {
          .bottom-exp-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}