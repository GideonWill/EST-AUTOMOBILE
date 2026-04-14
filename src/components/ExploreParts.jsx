import { Link } from 'react-router-dom'
import { ShoppingCart, Star, ArrowRight, Settings } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { ALL_PRODUCTS } from '../data/products'

function PartCard({ product }) {
  return (
    <Link to={`/item/${product.id}`} className="part-card" id={`part-${product.id}`} style={{ textDecoration: 'none', display: 'block' }}>
      {/* Real product image */}
      <div className="part-card-img" style={{ overflow: 'hidden', background: '#111' }}>
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.35s ease' }}
            onError={e => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex' }}
          />
        ) : null}
        <div
          className="part-placeholder"
          style={{ display: product.image ? 'none' : 'flex', color: 'var(--text-muted)' }}
        >
          <Settings size={48} />
        </div>
        {/* Hover Overlay */}
        <div className="part-card-overlay">
          <p className="part-card-desc">{product.desc || 'Premium automotive part for peak performance.'}</p>
        </div>
      </div>

      <div className="part-card-info">
        <div className="part-card-name" style={{ color: '#fff' }}>{product.name}</div>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 6 }}>{product.brand}</div>
        <div className="part-card-footer">
          <div className="part-rating">
            <Star size={12} fill="var(--accent)" color="var(--accent)" />
            <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{product.rating}</span>
            <span>({product.reviews})</span>
          </div>
          <div style={{ color: 'var(--accent)', fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>DETAILS <ArrowRight size={10} style={{ marginLeft: 2 }} /></div>
        </div>
      </div>
    </Link>
  )
}

export default function ExploreParts() {
  const featuredIds = [401, 206, 204, 211, 212, 216]
  const exploreParts = ALL_PRODUCTS.filter(p => featuredIds.includes(p.id)).sort((a,b) => featuredIds.indexOf(a.id) - featuredIds.indexOf(b.id))

  return (
    <section className="explore-section" id="explore">
      <div className="container">
        <div className="explore-header">
          <div>
            <p className="section-tag">Services & Hardware</p>
            <h2 className="section-title" style={{ marginTop: 12 }}>
              EXPLORE <span style={{ color: 'var(--accent)' }}>SERVICES</span>
            </h2>
          </div>
          <Link to="/inventory" className="btn-outline" id="explore-shop-btn">
            View Inventory <ArrowRight size={16} />
          </Link>
        </div>

        <div className="parts-grid" style={{ marginTop: 32 }}>
          {exploreParts.map(p => <PartCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  )
}
