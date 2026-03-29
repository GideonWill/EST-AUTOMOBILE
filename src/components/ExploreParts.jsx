import { Link } from 'react-router-dom'
import { ShoppingCart, Star, ArrowRight, Settings } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { WHEELS, SPARES } from '../data/products'

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
      </div>

      <div className="part-card-info">
        <div className="part-card-name">{product.name}</div>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 6 }}>{product.brand}</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
          <span className="part-card-price">GH₵{product.price.toFixed(2)}</span>
          <span className="part-card-price-old">GH₵{product.oldPrice.toFixed(2)}</span>
        </div>
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
            View All <ArrowRight size={16} />
          </Link>
        </div>

        {/* Trending Wheels */}
        <div className="parts-sub-header" style={{ marginTop: 0 }}>
          <span className="parts-sub-title">Trending Wheels</span>
          <Link to="/shop?cat=wheels" style={{ fontSize: 13, color: 'var(--accent)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 600, letterSpacing: 1 }}>
            See All →
          </Link>
        </div>
        <div className="parts-grid">
          {WHEELS.map(p => <PartCard key={p.id} product={p} />)}
        </div>

        {/* Trending Spares */}
        <div className="parts-sub-header">
          <span className="parts-sub-title">Trending Spares</span>
          <Link to="/shop?cat=brakes" style={{ fontSize: 13, color: 'var(--accent)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 600, letterSpacing: 1 }}>
            See All →
          </Link>
        </div>
        <div className="parts-grid">
          {SPARES.map(p => <PartCard key={p.id} product={p} />)}
        </div>
      </div>
    </section>
  )
}
