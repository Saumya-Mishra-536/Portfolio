import Section from './shared/Section'
import SectionHeader from './shared/SectionHeader'
import GlassCard from './shared/GlassCard'

const contacts = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'saumya.mishra2024@nst.rishihood.edu.in',
    href: 'mailto:saumya.mishra2024@nst.rishihood.edu.in',
    color: '#7c3aed',
  },
  {
    icon: '📱',
    label: 'Phone',
    value: '+91 6379162240',
    href: 'tel:+916379162240',
    color: '#3b82f6',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/saumyamishra',
    href: 'https://linkedin.com',
    color: '#8b5cf6',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/saumyamishra',
    href: 'https://github.com',
    color: '#60a5fa',
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ padding: '6rem 2rem', position: 'relative', overflow: 'hidden' }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(124,58,237,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <SectionHeader
          tag="Contact"
          title="Let's Connect"
          subtitle="Open to internship opportunities, research collaborations, and exciting conversations"
        />

        {/* Contact Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2.5rem',
          }}
        >
          {contacts.map((c, i) => (
            <a key={i} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" style={{ textDecoration: 'none' }}>
              <GlassCard style={{ textAlign: 'center', padding: '1.75rem 1rem' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{c.icon}</div>
                <div
                  style={{
                    color: c.color,
                    fontSize: '0.75rem',
                    fontWeight: '700',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: '0.4rem',
                  }}
                >
                  {c.label}
                </div>
                <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.8rem', lineHeight: '1.4', wordBreak: 'break-all' }}>
                  {c.value}
                </div>
              </GlassCard>
            </a>
          ))}
        </div>

        {/* CTA Banner */}
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(124,58,237,0.2), rgba(59,130,246,0.2))',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(139,92,246,0.3)',
            borderRadius: '24px',
            padding: '2.5rem',
            textAlign: 'center',
          }}
        >
          <h3 style={{ color: 'white', fontSize: '1.4rem', fontWeight: '700', marginBottom: '0.75rem' }}>
            Ready to work together?
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.95rem', marginBottom: '1.75rem', lineHeight: '1.7' }}>
            Whether it's an internship, research project, or just a great conversation
            about data and AI — my inbox is always open.
          </p>
          <a
            href="mailto:saumya.mishra2024@nst.rishihood.edu.in"
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #7c3aed, #3b82f6)',
              color: 'white',
              padding: '0.9rem 2.5rem',
              borderRadius: '50px',
              fontSize: '0.95rem',
              fontWeight: '600',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(124,58,237,0.4)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(124,58,237,0.6)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(124,58,237,0.4)'
            }}
          >
            Send Me an Email →
          </a>
        </div>
      </div>
    </section>
  )
}