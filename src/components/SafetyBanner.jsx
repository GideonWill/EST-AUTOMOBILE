import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Zap } from 'lucide-react'
import { PHOTOS } from '../data/photos'

export default function SafetyBanner() {
  return (
    <section className="safety-banner" id="safety" style={{ position: 'relative', overflow: 'hidden', minHeight: 420, display: 'flex', alignItems: 'center' }}>
      {/* Real background photo */}
      <img
        src={PHOTOS.drift}
        alt="Safety Gear"
        style={{
          position: 'absolute', inset: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          opacity: 0.35,
        }}
        onError={e => { e.target.style.display = 'none' }}
      />

      {/* Dark overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(0,0,0,0.95) 40%, rgba(0,0,0,0.4) 100%)',
      }} />

      {/* Glow circles */}
      {[
        { size: 400, x: '70%', y: '50%', color: 'rgba(245,197,24,0.05)' },
        { size: 300, x: '85%', y: '30%', color: 'rgba(255,255,255,0.03)' },
      ].map((c, i) => (
        <div key={i} style={{
          position: 'absolute', width: c.size, height: c.size, borderRadius: '50%',
          background: `radial-gradient(circle, ${c.color} 0%, transparent 70%)`,
          left: c.x, top: c.y, transform: 'translate(-50%,-50%)',
          filter: 'blur(40px)', pointerEvents: 'none',
        }} />
      ))}

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="safety-content">
          <p className="safety-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Zap size={14} fill="var(--accent)" /> Limited Collection</p>

          <h2 className="safety-title">
            SAFETY GEAR FOR<br />
            <span>SMOKY</span> DRIVERS
          </h2>

          <p className="safety-desc">
            Built for the fearless. Our performance safety gear collection is designed
            for drivers who push boundaries on and off the track.
          </p>

          <div className="safety-features">
            {['Fire Resistant', 'Track Tested', 'FIA Certified', 'Custom Fit'].map((f, i) => (
              <div className="safety-feature" key={i}>
                <span className="safety-feature-dot" />
                {f}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link to="/shop" className="btn-primary" id="safety-shop-btn">
              Shop Collection <ArrowRight size={16} />
            </Link>
            <Link to="/about" className="btn-outline" id="safety-learn-btn">
              <Shield size={16} /> Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
