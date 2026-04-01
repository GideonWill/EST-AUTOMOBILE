import { Link } from 'react-router-dom'
import { ShoppingCart, ArrowRight, Star, Check } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { FEATURED_PRODUCT } from '../data/products'
import { PHOTOS } from '../data/photos'

export default function FeaturedProduct() {
  const { addToCart } = useCart()
  const product = FEATURED_PRODUCT

  return (
    <section className="featured-section" id="featured">
      <div className="container">
        <div className="featured-inner">
          {/* Info */}
          <div>
            <p className="featured-label" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Star size={14} fill="var(--accent)" /> Featured Product</p>
            <h2 className="featured-title">FORMULA ONE<br />TYRES</h2>
            <p className="featured-desc">
              Race-grade performance tyres engineered for superior grip, handling stability,
              and long-lasting durability. Compatible with most passenger and sports vehicles.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 28 }}>
              {[
                'All-weather performance compound',
                'Low rolling resistance',
                'Reinforced sidewall construction',
                'Available in all standard sizes',
              ].map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 18, height: 18, borderRadius: '50%',
                    background: 'var(--accent-dim)', border: '1px solid rgba(245,197,24,0.4)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Check size={10} color="var(--accent)" />
                  </div>
                  <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{f}</span>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28 }}>
              {[1,2,3,4,5].map(s => (
                <Star key={s} size={16} fill={s <= 4 ? 'var(--accent)' : 'none'} color="var(--accent)" />
              ))}
              <span style={{ fontSize: 13, color: 'var(--text-secondary)', marginLeft: 4 }}>
                4.4 · 512 reviews
              </span>
            </div>

            <div className="featured-price-wrap">
              <span className="badge">SAVE 30%</span>
            </div>

            <div className="featured-actions">
              <button className="btn-primary" id="featured-add-cart-btn" onClick={() => addToCart(product)}>
                <ShoppingCart size={16} /> Add to Cart
              </button>
              <Link to="/shop" className="btn-outline" id="featured-view-btn">
                View All Tyres <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Real Tyre Image */}
          <div className="featured-image-wrap">
            <div className="featured-image-bg" />
            <div style={{ position: 'relative', zIndex: 2, animation: 'float 4s ease-in-out infinite' }}>
              <img
                src="/tyre_product.png"
                alt="Formula One Performance Tyre"
                style={{
                  width: 340, height: 340,
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 20px 50px rgba(0,0,0,0.7))',
                }}
                onError={e => {
                  e.target.src = PHOTOS.tyreDetail
                  e.target.style.borderRadius = '12px'
                  e.target.style.objectFit = 'cover'
                }}
              />
            </div>

            {/* Floating price badge removed */}
          </div>
        </div>
      </div>
    </section>
  )
}
