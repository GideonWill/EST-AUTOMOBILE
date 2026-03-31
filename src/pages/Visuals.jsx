import { useState } from 'react'
import { VISUALS_GALLERY } from '../data/products'

const TABS = ['All', 'Exotic Cars', 'Drift', 'Track', 'Street', 'Wheels']

// Alternate tall/short pattern for masonry feel
const HEIGHTS = [320, 220, 280, 240, 300, 200, 260, 320, 200, 280, 240, 300, 220, 260, 320]
import SEO from '../components/SEO'

export default function Visuals() {
  const [activeTab, setActiveTab] = useState('All')

  const filtered = activeTab === 'All'
    ? VISUALS_GALLERY
    : VISUALS_GALLERY.filter(v => v.category === activeTab)

  return (
    <div className="page-enter" style={{ paddingTop: 70 }}>
      <SEO 
        title="Automotive Visuals Gallery" 
        description="A curated collection of automotive beauty. See high-quality photography of track cars, exotic beasts, street tuners, and premium wheels."
      />
      <style>{`
        .visuals-masonry:hover .masonry-item {
          filter: blur(5px) grayscale(0.5);
          opacity: 0.7;
        }
        .visuals-masonry .masonry-item {
          transition: filter 0.4s ease, opacity 0.4s ease, transform 0.4s ease;
        }
        .visuals-masonry .masonry-item:hover {
          filter: blur(0) grayscale(0) saturate(1.2);
          opacity: 1;
          transform: scale(1.02);
          z-index: 10;
        }
        .visuals-masonry .masonry-item img {
          /* Uniform colour tone */
          filter: contrast(1.05) brightness(0.95);
        }
      `}</style>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <p className="section-tag">Gallery</p>
          <h1 className="page-hero-title" style={{ marginTop: 12 }}>VISUALS</h1>
          <p className="page-hero-sub">
            A curated collection of automotive beauty — real machines, real passion
          </p>
        </div>
      </div>

      <div className="container">
        {/* Filter Tabs */}
        <div style={{ display: 'flex', gap: 10, padding: '32px 0 28px', flexWrap: 'wrap' }}>
          {TABS.map(tab => (
            <button
              key={tab}
              id={`visuals-tab-${tab.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '9px 22px',
                background: activeTab === tab ? 'var(--accent)' : 'var(--bg-card)',
                border: '1px solid',
                borderColor: activeTab === tab ? 'var(--accent)' : 'var(--border)',
                borderRadius: 'var(--radius-sm)',
                color: activeTab === tab ? '#000' : 'var(--text-secondary)',
                fontFamily: 'Rajdhani, sans-serif',
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: 1,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {tab}
            </button>
          ))}
          <span style={{ marginLeft: 'auto', fontSize: 13, color: 'var(--text-muted)', fontFamily: 'Rajdhani, sans-serif', alignSelf: 'center' }}>
            {filtered.length} photos
          </span>
        </div>

        {/* Masonry Grid */}
        <div className="visuals-masonry" style={{ paddingBottom: 80 }}>
          {filtered.map((item, i) => (
            <div
              className="masonry-item"
              key={item.id}
              id={`visual-item-${item.id}`}
              style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', marginBottom: 16 }}
            >
              <img
                src={item.image}
                alt={item.label}
                loading="lazy"
                style={{
                  width: '100%',
                  height: HEIGHTS[i % HEIGHTS.length],
                  objectFit: 'cover',
                  display: 'block',
                }}
                onError={e => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              {/* Fallback */}
              <div style={{
                display: 'none',
                width: '100%',
                height: HEIGHTS[i % HEIGHTS.length],
                background: 'var(--bg-card)',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
                fontSize: 13,
              }}>
                Loading…
              </div>

              {/* Overlay */}
              <div className="masonry-overlay" style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                display: 'flex',
                alignItems: 'flex-end',
                padding: '16px 20px',
              }}
                onMouseEnter={e => e.currentTarget.style.opacity = '1'}
                onMouseLeave={e => e.currentTarget.style.opacity = '0'}
              >
                <div>
                  <div style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 18, letterSpacing: 2, color: '#fff' }}>
                    {item.label}
                  </div>
                  <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--accent)', marginTop: 2 }}>
                    {item.category}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
