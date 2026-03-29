import { Link } from 'react-router-dom'
import { ArrowRight, Snowflake, Wrench, Zap } from 'lucide-react'
import { SERVICES } from '../data/products'
import { PHOTOS } from '../data/photos'

const ICON_MAP = {
  snowflake: Snowflake,
  wrench: Wrench,
  zap: Zap,
}

export default function About() {
  return (
    <div className="page-enter" style={{ paddingTop: 70 }}>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <p className="section-tag">Our Story</p>
          <h1 className="page-hero-title" style={{ marginTop: 12 }}>ABOUT US</h1>
          <p className="page-hero-sub">
            Driven by passion. Built on trust. Engineered for performance.
          </p>
        </div>
      </div>

      {/* About Grid */}
      <div className="container">
        <div className="about-grid">
          <div>
            <p className="section-tag">Who We Are</p>
            <h2 className="section-title" style={{ marginTop: 12, marginBottom: 20 }}>
              A PREMIER<br />
              <span style={{ color: 'var(--accent)' }}>AUTOMOBILE</span> INSTITUTION
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.8, marginBottom: 12 }}>
              We are a premier automobile-oriented institution dedicated to delivering top-tier
              automotive services. Our team of certified technicians brings precision,
              expertise, and passion to every vehicle that enters our workshop.
            </p>
            <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.8, marginBottom: 32 }}>
              From air-conditioning diagnostics to vulcanizing and complete auto electrical solutions —
              we keep your vehicle running at peak performance, all year round.
            </p>

            <div className="about-points">
              {[
                { title: 'Certified Technicians', desc: 'Our team holds full automotive certifications across all service disciplines.' },
                { title: 'Quality Guaranteed', desc: 'Every service is completed to manufacturer specification with top-grade parts.' },
                { title: 'Fast Turnaround', desc: 'We respect your time. Most services are completed same day.' },
              ].map((p, i) => (
                <div className="about-point" key={i}>
                  <div className="about-point-num">{String(i + 1).padStart(2, '0')}</div>
                  <div className="about-point-text">
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 36, display: 'flex', gap: 12 }}>
              <Link to="/shop" className="btn-primary" id="about-shop-btn">
                Shop Now <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-outline" id="about-contact-btn">
                Contact Us
              </Link>
            </div>
          </div>

          <div>
            <div style={{ height: 320, borderRadius: 'var(--radius-lg)', overflow: 'hidden', margin: '-10px 0 20px', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}>
              <img src={PHOTOS.porscheTrack} alt="Automobile on track" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 40 }}>
              {[
                { val: '50K+',  label: 'Customers Served' },
                { val: '200+',  label: 'Brand Partners' },
                { val: '12K+',  label: 'Products Listed' },
                { val: '99.4%', label: 'Satisfaction Rate' },
              ].map((s, i) => (
                <div key={i} style={{
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)', padding: '24px 20px', textAlign: 'center',
                }}>
                  <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 40, color: 'var(--accent)', letterSpacing: 2 }}>{s.val}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 1.5, fontFamily: 'Rajdhani, sans-serif', fontWeight: 600, marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div style={{ background: 'var(--bg-secondary)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="section-tag" style={{ justifyContent: 'center' }}>What We Do</p>
            <h2 className="section-title" style={{ marginTop: 12, textAlign: 'center' }}>
              OUR <span style={{ color: 'var(--accent)' }}>SERVICES</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {SERVICES.map(svc => (
              <div key={svc.id} id={`service-${svc.id}`} style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)', overflow: 'hidden',
                transition: 'var(--transition)',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                {/* Service image */}
                <div style={{ position: 'relative', height: 200, overflow: 'hidden', background: '#111' }}>
                  {svc.image && (
                    <img
                      src={svc.image}
                      alt={svc.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
                      onError={e => { e.target.style.display = 'none' }}
                    />
                  )}
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    display: 'flex', alignItems: 'flex-end', padding: 16,
                  }}>
                    {(() => { const Icon = ICON_MAP[svc.icon]; return Icon ? <Icon size={32} color="var(--accent)" /> : null })()}
                  </div>
                </div>

                <div style={{ padding: '24px 20px' }}>
                  <h3 style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: 18, letterSpacing: 1, color: 'var(--text-primary)', marginBottom: 10 }}>
                    {svc.title}
                  </h3>
                  <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                    {svc.desc}
                  </p>
                  <Link to="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 16, fontSize: 13, fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, letterSpacing: 1, color: 'var(--accent)' }}>
                    Book Service <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: 'var(--bg-primary)', padding: '80px 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{ marginBottom: 16 }}>
            READY TO <span style={{ color: 'var(--accent)' }}>UPGRADE</span> YOUR RIDE?
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: 15, marginBottom: 32 }}>
            Browse our full catalogue or get in touch to book a service today.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/shop" className="btn-primary" id="about-cta-shop-btn" style={{ fontSize: 15, padding: '14px 36px' }}>
              Start Shopping <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn-outline" id="about-cta-contact-btn" style={{ fontSize: 15, padding: '14px 36px' }}>
              Book a Service
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
