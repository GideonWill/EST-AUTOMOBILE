import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { BRANDS } from '../data/products'
import ferrariBadge from '../assets/exotic cars/ferari badge.jpg'
import lamborghiniBadge from '../assets/exotic cars/lamborghini badge.jpg'
import porscheBadge from '../assets/exotic cars/porche badge.jpg'

const BADGE_MAP = { 1: ferrariBadge, 2: lamborghiniBadge, 3: porscheBadge }

export default function BrandsSection() {
  return (
    <section className="brands-section" id="brands">
      <div className="container">
        <div className="brands-header">
          <p className="section-tag">Exclusive Partnerships</p>
          <h2 className="section-title" style={{ marginTop: 12 }}>
            PREMIUM <span style={{ color: 'var(--accent)' }}>BRANDS</span>
          </h2>
        </div>

        <div className="brands-grid">
          {BRANDS.slice(0, 3).map(brand => {
            const BadgeImg = BADGE_MAP[brand.id]
            return (
              <Link
                key={brand.id}
                to="/brands"
                className="brand-card"
                id={`brand-card-${brand.id}`}
              >
                {/* Color accent top strip */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0,
                  height: 3, background: brand.color, opacity: 0.8,
                }} />

                <div className="brand-card-inner">
                  {/* Brand Badge */}
                  <div style={{ marginBottom: 16, display: 'flex', justifyContent: 'center', height: 120 }}>
                    {BadgeImg && <img src={BadgeImg} alt={`${brand.name} badge`} style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: 8 }} />}
                  </div>
                  <div className="brand-logo-text">{brand.name}</div>
                  <div className="brand-card-sub">{brand.sub}</div>
                  <div className="badge" style={{ marginTop: 10 }}>{brand.count} Products</div>
                </div>

                {/* Hover arrow */}
                <div style={{ position: 'absolute', bottom: 16, right: 16, opacity: 0.4, transition: 'var(--transition)' }}>
                  <ArrowRight size={18} />
                </div>
              </Link>
            )
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <Link to="/brands" className="btn-outline" id="view-all-brands-btn">
            View All Brands <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
