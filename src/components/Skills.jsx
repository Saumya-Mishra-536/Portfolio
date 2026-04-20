import { useState } from 'react'
import Section from './shared/Section'
import SectionHeader from './shared/SectionHeader'
import GlassCard from './shared/GlassCard'

const categories = [
  {
    title: 'Languages',
    icon: '💻',
    color: '#7c3aed',
    skills: ['Python', 'JavaScript', 'SQL'],
  },
  {
    title: 'AI / ML',
    icon: '🤖',
    color: '#3b82f6',
    skills: ['PyTorch', 'Neural Networks', 'RAG', '1D-CNN', 'scikit-learn'],
  },
  {
    title: 'Data & Analytics',
    icon: '📊',
    color: '#8b5cf6',
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Excel', 'Looker Studio', 'Streamlit'],
  },
  {
    title: 'Frameworks',
    icon: '⚙️',
    color: '#60a5fa',
    skills: ['Node.js', 'Express', 'React', 'REST APIs'],
  },
  {
    title: 'Research',
    icon: '🔬',
    color: '#a78bfa',
    skills: ['Literature Review', 'Data Analysis', 'Research Design', 'AI in Healthcare', 'Survey Analysis'],
  },
  {
    title: 'Soft Skills',
    icon: '🌟',
    color: '#34d399',
    skills: ['Public Speaking', 'Leadership', 'Critical Thinking', 'Collaboration', 'Problem Solving'],
  },
]

function SkillTag({ skill, color }) {
  const [hovered, setHovered] = useState(false)
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? `${color}25` : 'rgba(255,255,255,0.05)',
        border: `1px solid ${hovered ? color + '50' : 'rgba(255,255,255,0.1)'}`,
        color: hovered ? color : 'rgba(255,255,255,0.65)',
        fontSize: '0.78rem',
        fontWeight: '500',
        padding: '0.3rem 0.75rem',
        borderRadius: '8px',
        cursor: 'default',
        transition: 'all 0.2s ease',
        transform: hovered ? 'scale(1.05)' : 'scale(1)',
      }}
    >
      {skill}
    </span>
  )
}

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        tag="Skills"
        title="Technical Arsenal"
        subtitle="A diverse toolkit spanning machine learning, analytics, research, and beyond"
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {categories.map((cat, i) => (
          <GlassCard key={i}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: `${cat.color}20`,
                  border: `1px solid ${cat.color}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.1rem',
                }}
              >
                {cat.icon}
              </div>
              <h3 style={{ color: 'white', fontSize: '0.95rem', fontWeight: '700' }}>
                {cat.title}
              </h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {cat.skills.map((skill, j) => (
                <SkillTag key={j} skill={skill} color={cat.color} />
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  )
}