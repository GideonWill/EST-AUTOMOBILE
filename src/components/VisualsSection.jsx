import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { VISUALS_GALLERY } from '../data/products'

export default function VisualsSection() {
  return (
    <section className="visuals-section" id="visuals">
      <div className="container">
        <div className="visuals-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <p className="section-tag">Gallery</p>
            <h2 className="section-title" style={{ marginTop: 12 }}>VISUALS</h2>
          </div>
          <Link to="/visuals" className="btn-outline" id="visuals-all-btn">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="gallery-grid">
          {VISUALS_GALLERY.slice(0, 4).map((item, i) => (
            <Link
              to="/visuals"
              className="gallery-item"
              key={item.id}
              id={`gallery-item-${item.id}`}
              style={{ display: 'block', position: 'relative', overflow: 'hidden', borderRadius: 12, minHeight: (i === 0 || i === 3) ? 460 : 220 }}
            >
              <img
                src={item.image}
                alt={item.label}
                loading="lazy"
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: (i === 0 || i === 3) ? 460 : 220,
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease',
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.75), transparent 60%)',
                opacity: 0, transition: 'opacity 0.3s ease',
                display: 'flex', alignItems: 'flex-end', padding: '16px 20px',
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                onMouseLeave={e => e.currentTarget.style.opacity = '0'}
              >
                <span style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 16, letterSpacing: 2, color: '#fff' }}>
                  {item.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
