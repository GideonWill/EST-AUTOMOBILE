import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { PHOTOS } from '../data/photos'
import porscheImg from '../assets/exotic cars/WhatsApp Image 2026-03-28 at 19.51.36.jpeg'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-gradient" />
      <div className="hero-grid-overlay" />

      <div className="hero-inner">
        <style>{`
          @keyframes bounceCar {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-30px); }
            60% { transform: translateY(-15px); }
          }
        `}</style>
        {/* Left: Content */}
        <div className="hero-content page-enter">
          <div className="hero-tag">
            <span className="hero-tag-dot" />
            Premium Automobile Institution
          </div>

          <h1 className="hero-headline">
            MAKE<br />
            <span className="accent">SELL</span><br />
            EARN
          </h1>

          <p className="hero-headline-sub">Air-Con · Vulcanizing · Auto Electrical</p>

          <p className="hero-desc">
            Ghana's premier automobile-oriented institution. Expert air-conditioning services,
            professional vulcanizing and complete auto electrical solutions — all under one roof.
          </p>

          <div className="hero-actions">
            <Link to="/contact" className="btn-primary" id="hero-book-btn">
              Book a Service <ArrowRight size={16} />
            </Link>
            <Link to="/shop" className="btn-outline" id="hero-shop-btn">
              Shop Parts
            </Link>
          </div>

          <div className="hero-stats">
            {[
              { value: '50K+', label: 'Customers' },
              { value: '12K+', label: 'Products' },
              { value: '200+', label: 'Brands' },
              { value: '8 Yrs', label: 'Experience' },
            ].map((s, i) => (
              <div key={i}>
                <div className="hero-stat-value">{s.value}</div>
                <div className="hero-stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Real Car Image */}
        <div className="hero-image-wrap">
          <div className="hero-image-glow" />
          {/* Try local first, fall back to Unsplash */}
          <img
            src={porscheImg}
            alt="Premium Sports Car"
            style={{
              position: 'relative', zIndex: 2,
              width: '100%', maxWidth: 680,
              height: 460,
              objectFit: 'cover',
              animation: 'bounceCar 3s infinite',
              filter: 'drop-shadow(0 20px 60px rgba(0,0,0,0.8))',
              borderRadius: 16,
            }}
            onError={e => {
              // Fallback to Unsplash sports car
              e.target.src = PHOTOS.heroCar
              e.target.style.borderRadius = '16px'
              e.target.style.objectFit = 'cover'
              e.target.style.height = '460px'
            }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          color: 'var(--text-muted)', animation: 'float 2s ease-in-out infinite',
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
