import React from 'react'
// cSpell:ignore Saumya Mishra

export default function Navbar(){
  return (
    <nav className="nav">
      <div className="brand">
        <div className="logo">SM</div>
        <div>
          <div style={{fontWeight:700}}>Saumya Mishra</div>
          <div className="muted" style={{fontSize:12}}>Data Science · Machine Learning · Research</div>
        </div>
      </div>
      <div className="nav-links">
        <a className="link" href="#about">About</a>
        <a className="link" href="#projects">Projects</a>
        <a className="link" href="#experience">Experience</a>
        <a className="link" href="#contact">Contact</a>
      </div>
    </nav>
  )
}
