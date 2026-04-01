import { Link } from 'react-router-dom'
import { ArrowRight, Handshake, CheckCircle2, Zap } from 'lucide-react'
import { BRANDS } from '../data/products'
import { FerrariLogo, LamborghiniLogo, PorscheLogo, BMWLogo, MercedesLogo, AstonMartinLogo, AudiLogo, TeslaLogo, ToyotaLogo, HondaLogo, GenericBrandLogo } from '../components/BrandLogos'

const LOGO_MAP = {
  1: FerrariLogo,
  2: LamborghiniLogo,
  3: PorscheLogo,
  4: BMWLogo,
  5: MercedesLogo,
  6: AstonMartinLogo,
  7: AudiLogo,
  8: TeslaLogo,
  9: ToyotaLogo,
  10: HondaLogo,
}

import SEO from '../components/SEO'

export default function Brands() {
  return (
    <div className="page-enter" style={{ paddingTop: 70 }}>
      <SEO 
        title="Premium Brands" 
        description="Handpicked partnerships with the world's most respected automotive manufacturers and high-end parts suppliers."
      />
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <p className="section-tag">Partnerships</p>
          <h1 className="page-hero-title" style={{ marginTop: 12 }}>PREMIUM BRANDS</h1>
          <p className="page-hero-sub">
            Handpicked partnerships with the world's most respected automotive manufacturers
          </p>
        </div>
      </div>

      <div className="container">
        <div className="brands-page-grid">
          {BRANDS.map(brand => {
            const LogoComp = LOGO_MAP[brand.id]
            return (
              <Link
                to="/shop"
                key={brand.id}
                className="brand-page-card"
                id={`brands-page-card-${brand.id}`}
              >
                {/* Colour top bar */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0,
                  height: 3, background: brand.color, opacity: 0.8,
                }} />

                {/* Logo */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20, minHeight: 70, alignItems: 'center' }}>
                  {LogoComp ? <LogoComp size={70} /> : <GenericBrandLogo brand={brand} size={70} />}
                </div>

                <div className="brand-page-logo" style={{ fontSize: 28 }}>{brand.name}</div>
                <div className="brand-page-sub">{brand.sub}</div>

                <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, margin: '12px 0 16px', textAlign: 'center' }}>
                  {brand.description}
                </p>

                <div className="divider" style={{ marginBottom: 16 }} />
                <div className="brand-page-count">
                  <span>{brand.count}</span> products available
                </div>

                <div style={{ marginTop: 16, display: 'flex', justifyContent: 'center' }}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    fontSize: 13, fontFamily: 'Rajdhani, sans-serif', fontWeight: 600,
                    letterSpacing: 1, color: 'var(--accent)',
                  }}>
                    Shop Brand <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Brand trust strip */}
        <div style={{
          background: 'var(--bg-card)', border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)', padding: '48px',
          marginBottom: 80,
          display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 40, textAlign: 'center',
        }}>
          {[
            { val: '50+', label: 'Brand Partners',     icon: <Handshake size={32} color="var(--text-secondary)" /> },
            { val: '99%',  label: 'Authenticity Rate',  icon: <CheckCircle2 size={32} color="var(--text-secondary)" /> },
            { val: '48hr', label: 'Brand Verification', icon: <Zap size={32} color="var(--text-secondary)" /> },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: 36, marginBottom: 8 }}>{s.icon}</div>
              <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 44, color: 'var(--accent)', letterSpacing: 2 }}>{s.val}</div>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 4, letterSpacing: 1, textTransform: 'uppercase', fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
