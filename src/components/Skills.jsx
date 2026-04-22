import { useState } from 'react'

const skillGroups = [
  {
    label: 'Full Stack',
    skills: ['JavaScript', 'React', 'Node.js', 'Express', 'HTML / CSS', 'REST APIs'],
  },
  {
    label: 'Data Analytics',
    skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Excel', 'Looker Studio', 'Streamlit', 'SQL'],
  },
  {
    label: 'AI / ML',
    skills: ['PyTorch', 'scikit-learn', 'Neural Networks', 'RAG', '1D-CNN', 'Monte Carlo'],
  },
]

const highlightedTags = ['Neural Networks', 'R2D Spaces', 'PyTorch']

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState(null)

  return (
    <section id="skills" style={{ background: '#fff' }}>
      <div className="section">

        {/* Header Row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '2.5rem',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <div>
            <p className="section-label">Skills</p>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 800,
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              color: '#111',
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
            }}>
              Technical Arsenal
            </h2>
          </div>
          <div style={{ textAlign: 'right' }}>
            <p className="section-label">Data-Driven Skill Synthesis</p>
          </div>
        </div>

        {/* Skills Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gap: '0',
          border: '1px solid #e0ddd7',
          borderRadius: '12px',
          overflow: 'hidden',
          background: '#fff',
        }} className="skills-grid">

          {skillGroups.map((group, i) => (
            <div key={i} style={{ display: 'contents' }}>
              {/* Category label */}
              <div style={{
                padding: '1.25rem 1.5rem',
                borderBottom: i < skillGroups.length - 1 ? '1px solid #ece9e3' : 'none',
                borderRight: '1px solid #e0ddd7',
                display: 'flex',
                alignItems: 'center',
                minWidth: '140px',
              }}>
                <p style={{
                  fontSize: '0.68rem',
                  fontWeight: '700',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#111',
                  whiteSpace: 'nowrap',
                }}>
                  {group.label}
                </p>
              </div>

              {/* Skills */}
              <div style={{
                padding: '1.25rem 1.5rem',
                borderBottom: i < skillGroups.length - 1 ? '1px solid #ece9e3' : 'none',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                alignItems: 'center',
              }}>
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`skill-pill ${highlightedTags.includes(skill) ? 'dark' : ''}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted tags bottom */}
        <div style={{
          marginTop: '1.5rem',
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}>
          <span style={{ fontSize: '0.72rem', color: '#999', marginRight: '0.25rem' }}>Focused on:</span>
          {['Neural Networks', 'R2D Spaces', 'PyTorch'].map((tag) => (
            <span key={tag} className="skill-pill dark">{tag}</span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
          .skills-grid > div[style*="border-right"] {
            border-right: none !important;
            border-bottom: 1px solid #ece9e3 !important;
          }
        }
      `}</style>
    </section>
  )
}