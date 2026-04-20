import { useState } from 'react'
import Section from './shared/Section'
import SectionHeader from './shared/SectionHeader'

const projects = [
  {
    title: 'Asymmetric Fraud Detection System',
    desc: 'Cost-sensitive fraud detection with a custom asymmetric loss function to penalize false negatives, improving risk-aware predictions in financial transaction analysis.',
    tags: ['Python', 'ML', 'PyTorch', 'Finance'],
    icon: '🔐',
    color: '#7c3aed',
  },
  {
    title: 'Economic Shock Impact Analyzer',
    desc: 'ML + Monte Carlo simulation system to analyze commodity shock impacts with risk insight visualization via an interactive Streamlit dashboard.',
    tags: ['Python', 'Streamlit', 'Monte Carlo', 'ML'],
    icon: '📈',
    color: '#3b82f6',
  },
  {
    title: 'SleepSense AI',
    desc: '1D-CNN pipeline in PyTorch for sleep apnea detection using multimodal physiological signals with advanced preprocessing and LOPO-CV validation.',
    tags: ['PyTorch', 'CNN', 'Healthcare', 'Signal Processing'],
    icon: '🧠',
    color: '#8b5cf6',
  },
  {
    title: 'Blinkit Analytics Center',
    desc: 'Analytics dashboards and KPIs using Excel and Looker Studio to drive customer insights, inventory optimization, and feedback analysis.',
    tags: ['Excel', 'Looker Studio', 'Analytics', 'KPI'],
    icon: '📊',
    color: '#60a5fa',
  },
  {
    title: 'Covid-19 India Impact Analysis',
    desc: 'End-to-end data analysis pipeline using Pandas, NumPy, and Matplotlib analyzing COVID-19 trends across 43 Indian states with 10+ statistical visualizations.',
    tags: ['Pandas', 'NumPy', 'Matplotlib', 'EDA'],
    icon: '🦠',
    color: '#a78bfa',
  },
  {
    title: 'Video Caption Generator',
    desc: 'Full-stack video captioning system using React, Node.js, and Deepgram to auto-transcribe, transliterate, and render styled Hinglish captions with real-time preview.',
    tags: ['React', 'Node.js', 'Deepgram', 'NLP'],
    icon: '🎬',
    color: '#34d399',
  },
]

function ProjectCard({ proj }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(20px)',
        border: `1px solid ${hovered ? `${proj.color}60` : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '20px',
        padding: '1.75rem',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-6px) scale(1.01)' : 'none',
        boxShadow: hovered
          ? `0 25px 50px ${proj.color}20, 0 0 0 1px ${proj.color}20`
          : '0 4px 20px rgba(0,0,0,0.2)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: 'absolute',
          top: '-30px',
          right: '-30px',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: `${proj.color}${hovered ? '15' : '08'}`,
          transition: 'all 0.3s ease',
          pointerEvents: 'none',
        }}
      />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '14px',
            background: `${proj.color}20`,
            border: `1px solid ${proj.color}40`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.3rem',
            transition: 'all 0.3s ease',
            transform: hovered ? 'scale(1.1)' : 'none',
          }}
        >
          {proj.icon}
        </div>
        <div
          style={{
            color: proj.color,
            fontSize: '1.2rem',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translate(0,0)' : 'translate(5px,-5px)',
            transition: 'all 0.3s ease',
          }}
        >
          →
        </div>
      </div>

      <h3 style={{ color: 'white', fontSize: '1rem', fontWeight: '700', marginBottom: '0.75rem', lineHeight: '1.4' }}>
        {proj.title}
      </h3>

      <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.855rem', lineHeight: '1.7', marginBottom: '1.25rem' }}>
        {proj.desc}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {proj.tags.map((tag, j) => (
          <span
            key={j}
            style={{
              background: `${proj.color}15`,
              border: `1px solid ${proj.color}30`,
              color: proj.color,
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
    </div>
  )
}

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        tag="Projects"
        title="Featured Projects"
        subtitle="End-to-end systems built across ML, analytics, healthcare, and full-stack development"
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
        }}
      >
        {projects.map((proj, i) => (
          <ProjectCard key={i} proj={proj} />
        ))}
      </div>
    </Section>
  )
}