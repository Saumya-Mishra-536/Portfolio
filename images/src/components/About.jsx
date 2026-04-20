import Section from './shared/Section'
import SectionHeader from './shared/SectionHeader'
import GlassCard from './shared/GlassCard'

const focusAreas = [
  {
    icon: '🤖',
    title: 'Machine Learning & AI',
    desc: 'PyTorch, Neural Networks, RAG systems, cost-sensitive models',
    color: '#7c3aed',
  },
  {
    icon: '📊',
    title: 'Data Analytics',
    desc: 'Pandas, NumPy, Looker Studio, Excel dashboards, KPI design',
    color: '#3b82f6',
  },
  {
    icon: '🏥',
    title: 'Healthcare & Research',
    desc: 'Clinical research, AI in healthcare, interdisciplinary design',
    color: '#8b5cf6',
  },
  {
    icon: '📜',
    title: 'Economics & Policy',
    desc: 'Minor in Economics & Public Policy · Vice President, Policy Club',
    color: '#60a5fa',
  },
]

const stats = [
  { value: '2024', label: 'Enrolled' },
  { value: '6+', label: 'Projects' },
  { value: '2', label: 'Internships' },
  { value: 'Top 0.1%', label: 'Viksit Bharat' },
]

export default function About() {
  return (
    <Section id="about">
      <SectionHeader
        tag="About Me"
        title="Who I Am"
        subtitle="A data-driven thinker at the intersection of technology and impact"
      />

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2.5rem',
          alignItems: 'start',
        }}
        className="about-grid"
      >
        {/* Summary Card */}
        <GlassCard>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.3rem',
              }}
            >
              🎯
            </div>
            <div>
              <h3 style={{ color: 'white', fontSize: '1.2rem', fontWeight: '700' }}>
                Data Science Undergraduate
              </h3>
              <p style={{ color: '#a78bfa', fontSize: '0.85rem' }}>
                B.Tech CSE · Rishihood University
              </p>
            </div>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: '1.9', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
            I'm a Data Science undergraduate with hands-on experience in machine learning,
            analytics, and interdisciplinary research. I've built end-to-end ML and analytics
            projects spanning healthcare, economics, and finance — driven by a passion for
            real-world impact.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.65)', lineHeight: '1.9', fontSize: '0.95rem' }}>
            My work bridges technology and policy — from clinical research at IIT Hyderabad
            to analyzing Kumbh survey data, I approach every problem with rigor, curiosity,
            and a systems-thinking mindset.
          </p>
        </GlassCard>

        {/* Focus Areas */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {focusAreas.map((item, i) => (
            <GlassCard key={i} style={{ padding: '1.25rem 1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: `${item.color}20`,
                    border: `1px solid ${item.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <h4 style={{ color: 'white', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.2rem' }}>
                    {item.title}
                  </h4>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem', lineHeight: '1.5' }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Stats Row */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem',
          marginTop: '2.5rem',
        }}
        className="stats-grid"
      >
        {stats.map((s, i) => (
          <GlassCard key={i} style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
            <div
              style={{
                fontSize: '1.8rem',
                fontWeight: '800',
                background: 'linear-gradient(135deg, #a78bfa, #60a5fa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '0.3rem',
              }}
            >
              {s.value}
            </div>
            <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.78rem', letterSpacing: '0.5px' }}>
              {s.label}
            </div>
          </GlassCard>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </Section>
  )
}