import { Link } from 'react-router-dom'
import { ShoppingCart, Star, ArrowRight, Settings } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { ALL_PRODUCTS } from '../data/products'

function PartCard({ product }) {
  const { addToCart } = useCart()
  return (
    <div className="part-card" id={`part-${product.id}`}>
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
        <div className="part-card-name">{product.name}</div>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 6 }}>{product.brand}</div>
        <div className="part-card-footer">
          <div className="part-rating">
            <Star size={12} fill="var(--accent)" color="var(--accent)" />
            <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{product.rating}</span>
            <span>({product.reviews})</span>
          </div>
          <button
            className="add-to-cart-btn"
            id={`add-cart-${product.id}`}
            onClick={() => addToCart(product)}
            aria-label="Add to cart"
          >
            <ShoppingCart size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function ExploreParts() {
  const featuredIds = [210, 211, 212, 214, 213, 215, 216]
  const exploreParts = ALL_PRODUCTS.filter(p => featuredIds.includes(p.id)).sort((a,b) => featuredIds.indexOf(a.id) - featuredIds.indexOf(b.id))

  return (
    <section className="explore-section" id="explore">
      <div className="container">
        <div className="explore-header">
          <div>
            <p className="section-tag">Catalogue</p>
            <h2 className="section-title" style={{ marginTop: 12 }}>
              EXPLORE <span style={{ color: 'var(--accent)' }}>PARTS</span>
            </h2>
          </div>
          <Link to="/shop" className="btn-outline" id="explore-shop-btn">
            View More <ArrowRight size={16} />
          </Link>
        </div>

        <div className="parts-grid" style={{ marginTop: 32 }}>
          {exploreParts.map(p => <PartCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  )
}
