import Section from './shared/Section'
import SectionHeader from './shared/SectionHeader'
import GlassCard from './shared/GlassCard'

const items = [
  {
    school: 'Rishihood University',
    sub: 'Newton School of Technology',
    degree: 'B.Tech in Computer Science & Engineering',
    details: 'Major: Data Science · Minor: Economics & Public Policy',
    period: 'Aug 2024 – 2028',
    location: 'Haryana',
    activities: 'Robotics Club · Music Club · Literary Club · Public Policy Club (Vice President)',
    color: '#7c3aed',
    icon: '🎓',
    current: true,
  },
  {
    school: 'Sri Chaitanya Techno School',
    sub: null,
    degree: 'Science (Biology & Mathematics)',
    details: 'Class XII · CBSE',
    period: 'Graduated March 2023',
    location: 'Bengaluru, Karnataka',
    activities: 'Head Girl · Vice Captain · NCC · Olympiad Achiever',
    color: '#3b82f6',
    icon: '🏫',
    current: false,
  },
]

export default function Education() {
  return (
    <Section id="education">
      <SectionHeader
        tag="Education"
        title="Academic Journey"
        subtitle="Building a strong foundation across technology, data science, and public policy"
      />

      <div style={{ position: 'relative', paddingLeft: '2rem' }}>
        {/* Timeline Line */}
        <div
          style={{
            position: 'absolute',
            left: '0',
            top: '0',
            bottom: '0',
            width: '2px',
            background: 'linear-gradient(to bottom, #7c3aed, #3b82f6, transparent)',
            borderRadius: '2px',
          }}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {items.map((item, i) => (
            <div key={i} style={{ position: 'relative' }}>
              {/* Timeline Dot */}
              <div
                style={{
                  position: 'absolute',
                  left: '-2.45rem',
                  top: '1.5rem',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: item.color,
                  border: '3px solid #080818',
                  boxShadow: `0 0 15px ${item.color}60`,
                }}
              />

              <GlassCard>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    marginBottom: '1rem',
                  }}
                >
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '14px',
                        background: `${item.color}20`,
                        border: `1px solid ${item.color}40`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.3rem',
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
                        <h3 style={{ color: 'white', fontSize: '1.1rem', fontWeight: '700' }}>
                          {item.school}
                        </h3>
                        {item.current && (
                          <span
                            style={{
                              background: 'rgba(124,58,237,0.2)',
                              border: '1px solid rgba(124,58,237,0.4)',
                              color: '#a78bfa',
                              fontSize: '0.65rem',
                              fontWeight: '600',
                              padding: '0.2rem 0.6rem',
                              borderRadius: '50px',
                              letterSpacing: '0.5px',
                              textTransform: 'uppercase',
                            }}
                          >
                            Current
                          </span>
                        )}
                      </div>
                      {item.sub && (
                        <p style={{ color: '#a78bfa', fontSize: '0.8rem', marginTop: '0.1rem' }}>
                          {item.sub}
                        </p>
                      )}
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', fontWeight: '500' }}>
                      📅 {item.period}
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.78rem', marginTop: '0.2rem' }}>
                      📍 {item.location}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    background: `${item.color}10`,
                    border: `1px solid ${item.color}20`,
                    borderRadius: '12px',
                    padding: '0.75rem 1rem',
                    marginBottom: '0.75rem',
                  }}
                >
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', fontWeight: '600' }}>
                    {item.degree}
                  </p>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.82rem', marginTop: '0.25rem' }}>
                    {item.details}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
                  <span style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.78rem' }}>
                    Activities:
                  </span>
                  {item.activities.split(' · ').map((act, j) => (
                    <span
                      key={j}
                      style={{
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        color: 'rgba(255,255,255,0.55)',
                        fontSize: '0.72rem',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '50px',
                      }}
                    >
                      {act}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}