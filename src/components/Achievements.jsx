const olympiads = [
  {
    name: 'Green Olympiad',
    detail: 'Certificate of Distinction',
    right: 'DISTINCTION',
  },
  {
    name: 'SOF GKO 2018',
    detail: 'School Rank 1 · City Rank 1',
    right: 'RANK 1 / 1',
  },
  {
    name: 'SOF GKO 2019',
    detail: 'Zonal Rank 28 · International Rank 341',
    right: 'RANK 28 / 341',
  },
  {
    name: 'SOF NSO (Level 2 Qualified)',
    detail: 'School Rank 1 · Int\'l Rank 329',
    right: 'NATIONAL LEVEL',
  },
  {
    name: 'Hummingbird Olympiad',
    detail: 'Gold Medal',
    right: 'GOLD MEDAL',
  },
  {
    name: 'Hindustan Olympiad',
    detail: '3rd Rank at District Level',
    right: '3RD / DISTRICT',
  },
]

const merit = [
  {
    title: 'Viksit Bharat',
    subtitle: 'Young Leaders Dialogue 2025',
    detail: 'Top 0.1% — 3,000 of 30 lakh+ participants',
    type: 'pink',
  },
  {
    title: 'National Exhibition on Science & Technology',
    subtitle: '3rd Place · Socio Category',
    detail: 'IoT-based smart bin — sustainable environmental solution',
    type: 'normal',
  },
  {
    title: 'Best MOC Award NCC',
    subtitle: 'Best MOC',
    detail: 'Combined Annual Training Camp — outstanding leadership',
    type: 'normal',
  },
  {
    title: 'Student Excellence',
    subtitle: 'Academic Recognition',
    detail: 'Class and School Topper 2018–2020 · Head Girl',
    type: 'normal',
  },
]

export default function Achievements() {
  return (
    <section id="achievements" style={{ background: '#fff' }}>
      <div className="section">

        {/* Two-column header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          marginBottom: '2rem',
        }} className="ach-header">
          <p style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 800,
            fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)',
            color: '#111',
            letterSpacing: '-0.02em',
          }}>Olympiads &amp; Achievements</p>
          <p style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 800,
            fontSize: 'clamp(1.3rem, 2.5vw, 1.75rem)',
            color: '#111',
            letterSpacing: '-0.02em',
          }}>Merit &amp; Recognition</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'start',
        }} className="ach-grid">

          {/* === LEFT: Olympiads === */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {olympiads.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.9rem 0',
                  borderBottom: '1px solid #ece9e3',
                  gap: '1rem',
                }}
              >
                <div>
                  <p style={{ fontSize: '0.85rem', fontWeight: '600', color: '#111', marginBottom: '0.15rem' }}>
                    {item.name}
                  </p>
                  <p style={{ fontSize: '0.72rem', color: '#888' }}>{item.detail}</p>
                </div>
                <span style={{
                  fontSize: '0.62rem',
                  fontWeight: '700',
                  letterSpacing: '0.08em',
                  color: '#555',
                  whiteSpace: 'nowrap',
                  textTransform: 'uppercase',
                }}>
                  {item.right}
                </span>
              </div>
            ))}
          </div>

          {/* === RIGHT: Merit === */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {merit.map((item, i) => {
              if (item.type === 'pink') {
                return (
                  <div key={i} className="card-pink" style={{ borderRadius: '10px', padding: '1.1rem 1.25rem' }}>
                    <p style={{ fontSize: '0.62rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#be185d', marginBottom: '0.4rem' }}>
                      MOST RECENT
                    </p>
                    <p style={{ fontSize: '0.95rem', fontWeight: '700', color: '#881337', marginBottom: '0.15rem' }}>
                      {item.title}
                    </p>
                    <p style={{ fontSize: '0.75rem', color: '#be185d', fontWeight: '500', marginBottom: '0.4rem' }}>
                      {item.subtitle}
                    </p>
                    <p style={{ fontSize: '0.72rem', color: '#9a3858' }}>{item.detail}</p>
                  </div>
                )
              }
              return (
                <div
                  key={i}
                  style={{
                    padding: '0.9rem 0',
                    borderBottom: '1px solid #ece9e3',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '1rem',
                  }}
                >
                  <div>
                    <p style={{ fontSize: '0.85rem', fontWeight: '600', color: '#111', marginBottom: '0.15rem' }}>
                      {item.title}
                    </p>
                    <p style={{ fontSize: '0.72rem', color: '#888' }}>{item.detail}</p>
                  </div>
                  <span style={{
                    fontSize: '0.62rem',
                    fontWeight: '700',
                    letterSpacing: '0.06em',
                    color: '#555',
                    whiteSpace: 'nowrap',
                    textTransform: 'uppercase',
                    textAlign: 'right',
                  }}>
                    {item.subtitle}
                  </span>
                </div>
              )
            })}

            {/* Achievement Banner */}
            <div style={{
              marginTop: '0.5rem',
              background: '#111',
              borderRadius: '10px',
              padding: '1rem 1.25rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div>
                <p style={{ fontSize: '0.62rem', fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#aaa', marginBottom: '0.2rem' }}>
                  STAR EXCELLENCE
                </p>
                <p style={{ fontSize: '0.82rem', fontWeight: '600', color: '#fff' }}>
                  Achievement Awards 2019–2025
                </p>
                <p style={{ fontSize: '0.7rem', color: '#666', marginTop: '0.15rem' }}>
                  Yearly academic distinction
                </p>
              </div>
              <span style={{ fontSize: '1.1rem' }}>🏆</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ach-header, .ach-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          .ach-header {
            gap: 0.5rem !important;
          }
          .ach-grid {
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  )
}