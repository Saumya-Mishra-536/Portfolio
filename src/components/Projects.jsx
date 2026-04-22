import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'Asymmetric Fraud Detection',
    desc: 'Developing robust and reliable algorithms to detect fraud in transaction datasets while automatically balancing the proportion of legitimate transactions.',
    tags: ['FRAUD', 'ML'],
    featured: true,
    dark: true,
    wide: true,
    links: { github: '#', live: '#' },
  },
  {
    id: 2,
    title: 'Economic Shock Impact Analyzer',
    desc: 'A predictive tool designed to help policymakers understand how economic policy or sudden events impact on market stability.',
    tags: ['MACRO', 'SIM DATA'],
    featured: true,
    dark: false,
    links: { github: '#', live: '#' },
  },
  {
    id: 3,
    title: 'SleepSense AI',
    desc: 'Modular deep neural networks for detecting sleep apnea using signals, performing a scoring and mapping chain for each situation within interest.',
    tags: ['Healthcare', 'Deep Learning'],
    icon: '🌙',
    dark: false,
    accent: '#fce7f0',
    links: { github: '#' },
  },
  {
    id: 4,
    title: 'Blinkit Analytics',
    desc: 'Strategic deep analytics platform designed to help organizations perform a scoring and mapping plan for each situation within success.',
    tags: ['DATA TO INSIGHTS →'],
    icon: '⚡',
    dark: false,
    links: { github: '#' },
  },
  {
    id: 5,
    title: 'Covid-19 India Impact',
    desc: 'End-to-end analysis of pandemic impact using open data with 43 states, 10+ visualisations and statistical modeling.',
    tags: ['EDA', 'Public Health'],
    icon: '🦠',
    dark: true,
    links: { github: '#' },
  },
  {
    id: 6,
    title: 'Threaded Comment System',
    desc: 'Deeply-nested, thread-structured comment system with replies, collapsing, and optimistic UI interactions.',
    tags: ['Full Stack', 'React'],
    icon: '💬',
    dark: false,
    links: { github: '#' },
  },
  {
    id: 7,
    title: 'Video Caption Generator',
    desc: 'Full-stack video captioning system using AI to auto-transcribe, transliterate, and render styled captions with real-time preview.',
    tags: ['NLP', 'Full Stack'],
    icon: '🎬',
    dark: false,
    links: { github: '#' },
  },
]

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)

  const baseStyle = {
    borderRadius: '12px',
    padding: '1.4rem',
    border: '1px solid #e0ddd7',
    transition: 'all 0.22s ease',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transform: hovered ? 'translateY(-3px)' : 'none',
    boxShadow: hovered ? '0 8px 30px rgba(0,0,0,0.09)' : 'none',
  }

  if (project.dark && project.wide) {
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          ...baseStyle,
          background: '#111',
          border: '1px solid #222',
          gridColumn: 'span 2',
        }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '1.5rem',
          alignItems: 'center',
        }}>
          {/* Left: description */}
          <div>
            <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              {project.tags.map((tag) => (
                <span key={tag} className="tag" style={{ background: '#222', borderColor: '#333', color: '#aaa' }}>{tag}</span>
              ))}
            </div>
            <h3 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '1.35rem',
              fontWeight: '800',
              color: '#fff',
              marginBottom: '0.75rem',
              lineHeight: 1.2,
            }}>
              {project.title}
            </h3>
            <p style={{ fontSize: '0.8rem', color: '#aaa', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              {project.desc}
            </p>
            <a href={project.links.github} style={{ color: '#d4522a', fontSize: '0.78rem', fontWeight: '600', textDecoration: 'none' }}>
              View Project →
            </a>
          </div>

          {/* Right: chart illustration */}
          <div style={{
            background: '#1a1a1a',
            borderRadius: '10px',
            padding: '1.25rem',
            height: '180px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            gap: '0.4rem',
            overflow: 'hidden',
          }}>
            {/* Fake bar chart */}
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '100%' }}>
              {[40, 65, 35, 80, 55, 90, 45, 70, 60, 85, 50, 75].map((h, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: `${h}%`,
                    background: i % 3 === 0 ? '#d4522a' : '#333',
                    borderRadius: '3px 3px 0 0',
                    transition: 'height 0.3s ease',
                  }}
                />
              ))}
            </div>
            <p style={{ fontSize: '0.62rem', color: '#555', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Transaction risk analysis
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (project.dark && !project.wide) {
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{ ...baseStyle, background: '#111', border: '1px solid #222' }}
      >
        <div>
          <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            {project.tags.map((tag) => (
              <span key={tag} className="tag" style={{ background: '#222', borderColor: '#333', color: '#aaa' }}>{tag}</span>
            ))}
          </div>
          <h3 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#fff', marginBottom: '0.6rem', lineHeight: 1.35 }}>
            {project.title}
          </h3>
          <p style={{ fontSize: '0.78rem', color: '#888', lineHeight: 1.65 }}>{project.desc}</p>
        </div>
        <div style={{ marginTop: '1rem' }}>
          <span style={{ fontSize: '1.4rem' }}>{project.icon}</span>
        </div>
      </div>
    )
  }

  // Light card
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        ...baseStyle,
        background: project.accent || '#fff',
        border: `1px solid ${project.accent ? '#f9a8d4' : '#e0ddd7'}`,
      }}
    >
      <div>
        <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <h3 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#111', marginBottom: '0.6rem', lineHeight: 1.35 }}>
          {project.title}
        </h3>
        <p style={{ fontSize: '0.78rem', color: '#666', lineHeight: 1.65 }}>{project.desc}</p>
      </div>
      <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '1.4rem' }}>{project.icon}</span>
        <a href={project.links.github} style={{ color: '#999', fontSize: '0.72rem', fontWeight: '600', textDecoration: 'none' }}>
          GitHub →
        </a>
      </div>
    </div>
  )
}

// Featured project (Economic Shock) - light, medium card  
function FeaturedLightCard({ project }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: '#fff',
        border: '1px solid #e0ddd7',
        borderRadius: '12px',
        padding: '1.4rem',
        transition: 'all 0.22s ease',
        cursor: 'pointer',
        transform: hovered ? 'translateY(-3px)' : 'none',
        boxShadow: hovered ? '0 8px 30px rgba(0,0,0,0.08)' : 'none',
        gridRow: 'span 1',
      }}
    >
      <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        {project.tags.map((tag) => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
        <div style={{ fontSize: '1.5rem' }}>📈</div>
        <div style={{ fontSize: '0.7rem', color: '#d4522a', fontWeight: '700', cursor: 'pointer' }}>↗</div>
      </div>
      <h3 style={{
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: '1.1rem',
        fontWeight: '800',
        color: '#111',
        marginBottom: '0.65rem',
        lineHeight: 1.25,
      }}>
        {project.title}
      </h3>
      <p style={{ fontSize: '0.78rem', color: '#666', lineHeight: 1.65, marginBottom: '1rem' }}>
        {project.desc}
      </p>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <a href={project.links.github} style={{ fontSize: '0.7rem', color: '#888', textDecoration: 'none', fontWeight: '600' }}>MACRO</a>
        <span style={{ color: '#ccc' }}>·</span>
        <a href="#" style={{ fontSize: '0.7rem', color: '#888', textDecoration: 'none', fontWeight: '600' }}>SIM DATA</a>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ background: '#f7f6f3' }}>
      <div className="section">

        {/* Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <p className="section-label">Work</p>
          <h2 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontWeight: 800,
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            color: '#111',
            letterSpacing: '-0.02em',
          }}>
            Project Repository
          </h2>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'auto',
          gap: '1rem',
        }} className="projects-grid">

          {/* Full-width fraud card */}
          <div style={{ gridColumn: '1 / -1' }}>
            <ProjectCard project={projects[0]} />
          </div>

          {/* Economic Shock - two-row spanning */}
          <div style={{ gridColumn: 'span 1', gridRow: 'span 2' }}>
            <FeaturedLightCard project={projects[1]} />
          </div>

          {/* SleepSense */}
          <ProjectCard project={projects[2]} />

          {/* Blinkit */}
          <ProjectCard project={projects[3]} />

          {/* Covid */}
          <ProjectCard project={projects[4]} />

          {/* Threaded */}
          <ProjectCard project={projects[5]} />

          {/* Video Caption */}
          <ProjectCard project={projects[6]} />
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}