import Section from './shared/Section'
import SectionHeader from './shared/SectionHeader'
import GlassCard from './shared/GlassCard'

const experiences = [
  {
    role: 'Clinical Research Intern',
    org: 'IIT Hyderabad',
    period: 'March – April 2025',
    color: '#7c3aed',
    icon: '🔬',
    points: [
      'Analyzed clinical workflows to identify compliance gaps while studying ethical frameworks in trial oversight.',
      'Gained exposure to AI applications in clinical research, contributing to ethical AI decision-making discussions.',
    ],
  },
  {
    role: 'Research Intern',
    org: 'Rishihood University',
    period: 'June – July 2025',
    color: '#3b82f6',
    icon: '📚',
    points: [
      'Conducted research in literature and social sciences with focus on analyzing survey-based data from large-scale field studies (e.g., Kumbh survey).',
      'Performed data cleaning, structuring, and formatting ensuring accuracy and consistency across datasets in interdisciplinary research design.',
    ],
  },
]

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        tag="Experience"
        title="Work Experience"
        subtitle="Hands-on research and internships bridging data science with real-world challenges"
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {experiences.map((exp, i) => (
          <GlassCard key={i}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '1.25rem',
              }}
            >
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '14px',
                    background: `linear-gradient(135deg, ${exp.color}30, ${exp.color}10)`,
                    border: `1px solid ${exp.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                  }}
                >
                  {exp.icon}
                </div>
                <div>
                  <h3 style={{ color: 'white', fontSize: '1rem', fontWeight: '700' }}>
                    {exp.role}
                  </h3>
                  <p style={{ color: exp.color === '#7c3aed' ? '#a78bfa' : '#60a5fa', fontSize: '0.85rem', fontWeight: '500' }}>
                    {exp.org}
                  </p>
                </div>
              </div>
              <span
                style={{
                  background: `${exp.color}15`,
                  border: `1px solid ${exp.color}30`,
                  color: exp.color === '#7c3aed' ? '#a78bfa' : '#60a5fa',
                  fontSize: '0.7rem',
                  fontWeight: '600',
                  padding: '0.3rem 0.7rem',
                  borderRadius: '50px',
                  whiteSpace: 'nowrap',
                }}
              >
                {exp.period}
              </span>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {exp.points.map((pt, j) => (
                <li
                  key={j}
                  style={{
                    display: 'flex',
                    gap: '0.75rem',
                    alignItems: 'flex-start',
                    marginBottom: j < exp.points.length - 1 ? '0.75rem' : 0,
                  }}
                >
                  <span
                    style={{
                      color: exp.color === '#7c3aed' ? '#a78bfa' : '#60a5fa',
                      fontSize: '0.7rem',
                      marginTop: '0.35rem',
                      flexShrink: 0,
                    }}
                  >
                    ◆
                  </span>
                  <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', lineHeight: '1.7' }}>
                    {pt}
                  </span>
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </Section>
  )
}