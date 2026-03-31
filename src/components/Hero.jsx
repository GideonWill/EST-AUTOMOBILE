import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'

// Selected a high-quality Unsplash image similar to the BMW reference
const BMW_BG = 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=1920&q=80'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Immersive background image */}
      <div 
        className="hero-bg" 
        style={{ backgroundImage: `url('${BMW_BG}')` }} 
      />
      
      {/* Dark slanted overlay */}
      <div className="hero-slant-overlay">
        <div className="hero-slant-content page-enter">
          <h1 className="hero-main-title">
             SETTING OFF<br />
             IN A TOP FORM
          </h1>
          <p className="hero-sub-title">EXPLORE ALL YOUR SPARE PARTS</p>
          
          <div className="hero-actions" style={{ marginTop: '20px' }}>
            <Link to="/contact" className="btn-primary" id="hero-book-btn">
              Book a Service <ArrowRight size={16} />
            </Link>
            <Link to="/shop" className="btn-outline" id="hero-shop-btn" style={{ borderColor: 'rgba(255,255,255,0.2)', color: '#fff', background: 'rgba(255,255,255,0.05)' }}>
              Shop Parts
            </Link>
          </div>
        </div>
        
        {/* Decorative chevons on the slant edge */}
        <div className="slant-decoration">
          <div className="slant-chevron"></div>
          <div className="slant-chevron"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          color: 'rgba(255,255,255,0.6)', animation: 'float 2s ease-in-out infinite',
          cursor: 'pointer', zIndex: 3,
        }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span style={{ fontSize: 11, letterSpacing: 2, fontFamily: 'Rajdhani, sans-serif', textTransform: 'uppercase' }}>Scroll</span>
        <ChevronDown size={16} />
      </div>
    </section>
  )
}
