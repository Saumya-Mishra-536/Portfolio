import Section from './shared/Section'
import SectionHeader from './shared/SectionHeader'
import GlassCard from './shared/GlassCard'

const achievements = [
  {
    icon: '🏆',
    title: 'Viksit Bharat Young Leaders Dialogue 2025',
    desc: 'Finalist · Top 3,000 out of 30 lakh+ participants (Top 0.1%) — contributed to national development dialogues with policymakers and thought leaders.',
    color: '#f59e0b',
    badge: 'Top 0.1%',
  },
  {
    icon: '🚀',
    title: 'Ignite 2025 Finalist',
    desc: 'Top 10 from 100+ startup ideas — selected for Founder\'s Bootcamp at BITS Goa.',
    color: '#7c3aed',
    badge: 'Top 10',
  },
  {
    icon: '🥇',
    title: 'SOF IGKO 2018',
    desc: 'School Rank 1 · City Rank 1 · Zonal Rank 19 · International Rank 139.',
    color: '#3b82f6',
    badge: "Int'l Rank 139",
  },
  {
    icon: '🥇',
    title: 'SOF IGKO 2019',
    desc: 'School Rank 1 · City Rank 1 · Zonal Rank 28 · International Rank 341.',
    color: '#3b82f6',
    badge: "Int'l Rank 341",
  },
  {
    icon: '🔬',
    title: 'SOF NSO 2018',
    desc: 'School Rank 1 · City Rank 1 · Zonal Rank 179 · International Rank 329 · Qualified for Level 2.',
    color: '#8b5cf6',
    badge: 'Level 2',
  },
  {
    icon: '🌿',
    title: 'Green Olympiad 2019-20',
    desc: 'Certificate of Distinction for excellence in environmental science and sustainability awareness.',
    color: '#34d399',
    badge: 'Distinction',
  },
  {
    icon: '🐦',
    title: 'Hummingbird International Science Olympiad',
    desc: 'Gold Medal for outstanding performance in international science competition.',
    color: '#f59e0b',
    badge: 'Gold Medal',
  },
  {
    icon: '🏛️',
    title: 'Hindustan Olympiad',
    desc: '3rd Rank at District Level demonstrating academic excellence across disciplines.',
    color: '#f97316',
    badge: 'District 3rd',
  },
  {
    icon: '📡',
    title: 'National Exhibition on Science & Technology',
    desc: '3rd Place (Socio Category) — IoT-based smart bin project demonstrating innovation in sustainable environmental solutions.',
    color: '#60a5fa',
    badge: '3rd Place',
  },
  {
    icon: '🎖️',
    title: 'NCC — Best MOC Award',
    desc: 'Best MOC Award at Combined Annual Training Camp for outstanding performance and leadership.',
    color: '#a78bfa',
    badge: 'Best MOC',
  },
  {
    icon: '📚',
    title: 'Academic Excellence Awards',
    desc: 'Class Topper 2018 & 2019 · School Topper 2020 — consistent academic excellence across years.',
    color: '#7c3aed',
    badge: 'School Topper',
  },
  {
    icon: '👑',
    title: 'Student Leadership Roles',
    desc: 'Head Girl in final year · Vice Captain for 2 consecutive years · Prefect — sustained leadership and responsibility.',
    color: '#ec4899',
    badge: 'Head Girl',
  },
  {
    icon: '🤝',
    title: 'Vice President — Public Policy Club',
    desc: 'Organizing events, leading research and discussions to promote youth engagement in public policy and civic leadership (2025).',
    color: '#3b82f6',
    badge: 'VP 2025',
  },
]

export default function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeader
        tag="Achievements"
        title="Achievements & Leadership"
        subtitle="Recognition across academics, research, innovation, and community leadership"
      />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.25rem',
        }}
      >
        {achievements.map((ach, i) => (
          <GlassCard key={i} style={{ padding: '1.4rem' }}>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '13px',
                  background: `${ach.color}20`,
                  border: `1px solid ${ach.color}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                  flexShrink: 0,
                }}
              >
                {ach.icon}
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    marginBottom: '0.4rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <h3 style={{ color: 'white', fontSize: '0.88rem', fontWeight: '700', lineHeight: '1.3' }}>
                    {ach.title}
                  </h3>
                  <span
                    style={{
                      background: `${ach.color}20`,
                      border: `1px solid ${ach.color}40`,
                      color: ach.color,
                      fontSize: '0.65rem',
                      fontWeight: '700',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '50px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {ach.badge}
                  </span>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', lineHeight: '1.6' }}>
                  {ach.desc}
                </p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  )
}