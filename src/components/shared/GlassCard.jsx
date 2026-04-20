import { useState } from 'react'

export default function GlassCard({ children, style = {}, hover = true }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => hover && setHovered(true)}
      onMouseLeave={() => hover && setHovered(false)}
      style={{
        background: 'rgba(255, 255, 255, 0.04)',
        backdropFilter: 'blur(20px)',
        border: `1px solid ${hovered ? 'rgba(167, 139, 250, 0.4)' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: '20px',
        padding: '1.75rem',
        transition: 'all 0.3s ease',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered
          ? '0 20px 50px rgba(139, 92, 246, 0.15)'
          : '0 4px 20px rgba(0,0,0,0.2)',
        ...style,
      }}
    >
      {children}
    </div>
  )
}