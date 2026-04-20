import Section from './shared/Section'
import SectionHeader from './shared/SectionHeader'
import GlassCard from './shared/GlassCard'

const certs = [
  {
    title: 'Generative AI Certification',
    issuer: 'GUVI',
    icon: '🤖',
    color: '#7c3aed',
    desc: 'Hands-on training in Generative AI covering LLMs, Transformer architectures, and advanced NLP techniques like RAG. Practical experience fine-tuning generative models for real-world AI content creation.',
    tags: ['LLMs', 'Transformers', 'RAG', 'Fine-tuning'],
  },
  {
    title: 'Dexterity Leadership Program',
    issuer: 'Dexterity School of Leadership & Entrepreneurship',
    icon: '🏛️',
    color: '#3b82f6',
    desc: 'Comprehensive program covering 4 key skills (critical thinking, research, communication, leadership), 2 core values (empathy, fearlessness), and 2 commitments (public service, nation-building).',
    tags: ['Leadership', 'Critical Thinking', 'Public Service', 'Research'],
  },
  {
    title: 'STEM Course',
    issuer: 'School Program',
    icon: '🤖',
    color: '#8b5cf6',
    desc: 'Completed hands-on courses in Scratch programming, 3D Designing, and Robotics — building foundational skills in computational thinking and hardware programming.',
    tags: ['Scratch', '3D Design', 'Robotics', 'STEM'],
  },
]

export default function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeader
        tag="Certifications"
        title="Certifications & Training"
        subtitle="Continuous learning through structured programs and industry certifications"
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {certs.map((cert, i) => (
          <GlassCard key={i}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '16px',
                  background: `linear-gradient(135deg, ${cert.color}30, ${cert.color}10)`,
                  border: `1px solid ${cert.color}50`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                }}
              >
                {cert.icon}
              </div>
              <div>
                <h3 style={{ color: 'white', fontSize: '1rem', fontWeight: '700' }}>
                  {cert.title}
                </h3>
                <p style={{ color: '#a78bfa', fontSize: '0.8rem', marginTop: '0.15rem' }}>
                  {cert.issuer}
                </p>
              </div>
            </div>

            <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.855rem', lineHeight: '1.7', marginBottom: '1rem' }}>
              {cert.desc}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {cert.tags.map((tag, j) => (
                <span
                  key={j}
                  style={{
                    background: `${cert.color}15`,
                    border: `1px solid ${cert.color}30`,
                    color: cert.color,
                    fontSize: '0.7rem',
                    fontWeight: '600',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '50px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  )
}