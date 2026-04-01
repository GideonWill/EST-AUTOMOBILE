import { Link } from 'react-router-dom'
import { Trash2, ShoppingBag, ArrowRight, ArrowLeft, CreditCard, Bitcoin, Banknote, Wallet, Zap } from 'lucide-react'
import { useCart } from '../context/CartContext'
import SEO from '../components/SEO'

export default function Cart() {
  const { items, cartTotal, removeFromCart, updateQty, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="page-enter" style={{ paddingTop: 70 }}>
        <SEO title="Shopping Cart" description="View items in your cart." />
        <div className="page-hero">
          <div className="container">
            <p className="section-tag">Your Cart</p>
            <h1 className="page-hero-title" style={{ marginTop: 12 }}>SHOPPING CART</h1>
          </div>
        </div>
        <div className="container">
          <div className="empty-cart">
            <div className="empty-cart-icon" style={{ fontSize: 48, marginBottom: 16, color: 'var(--accent)' }}>
              <ShoppingBag size={48} />
            </div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added anything to your cart yet.</p>
            <Link to="/shop" className="btn-primary" id="cart-continue-shopping-btn">
              <ShoppingBag size={16} /> Start Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  const shipping = cartTotal > 500 ? 0 : 29.99
  const tax = cartTotal * 0.08
  const total = cartTotal + shipping + tax

  return (
    <div className="page-enter" style={{ paddingTop: 70 }}>
      <SEO title="Shopping Cart" description="Review items in your cart and proceed to secure checkout." />
      <div className="page-hero">
        <div className="container">
          <p className="section-tag">Checkout</p>
          <h1 className="page-hero-title" style={{ marginTop: 12 }}>SHOPPING CART</h1>
          <p className="page-hero-sub">
            {items.reduce((s, i) => s + i.qty, 0)} items in your cart
          </p>
        </div>
      </div>

      <div className="container">
        <div className="cart-layout">
          {/* Items */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <Link to="/shop" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--text-secondary)', fontSize: 13, fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                <ArrowLeft size={14} /> Continue Shopping
              </Link>
              <button
                className="btn-outline"
                id="clear-cart-btn"
                onClick={clearCart}
                style={{ fontSize: 13, padding: '8px 16px' }}
              >
                <Trash2 size={14} /> Clear All
              </button>
            </div>

            <div className="cart-items">
              {items.map(item => (
                <div className="cart-item" key={item.id} id={`cart-item-${item.id}`}>
                  <div className="cart-item-img" style={{ overflow: 'hidden', padding: 0, background: '#111' }}>
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                      onError={e => { e.target.src = item.fallback || '/hero_car.png' }}
                    />
                  </div>
                  <div>
                    <div className="cart-item-name">{item.name}</div>
                    <div className="cart-item-brand">{item.brand} · {item.category}</div>
                    <div className="qty-control">
                      <button
                        className="qty-btn"
                        id={`qty-dec-${item.id}`}
                        onClick={() => updateQty(item.id, item.qty - 1)}
                      >−</button>
                      <span>{item.qty}</span>
                      <button
                        className="qty-btn"
                        id={`qty-inc-${item.id}`}
                        onClick={() => updateQty(item.id, item.qty + 1)}
                      >+</button>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    {/* Price hidden per catalog mode */}
                    <button
                      className="cart-remove"
                      id={`remove-${item.id}`}
                      onClick={() => removeFromCart(item.id)}
                      aria-label="Remove item"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div>
            <div className="cart-summary" id="cart-summary">
              <div className="cart-summary-title">Order Summary</div>

              <div className="cart-summary-row">
                <span>Subtotal ({items.reduce((s, i) => s + i.qty, 0)} items)</span>
                <span>GH₵{cartTotal.toFixed(2)}</span>
              </div>
              <div className="cart-summary-row">
                <span>Shipping</span>
                <span style={{ color: shipping === 0 ? 'var(--accent)' : undefined }}>
                  {shipping === 0 ? 'FREE' : `GH₵${shipping.toFixed(2)}`}
                </span>
              </div>
              <div className="cart-summary-row">
                <span>Tax (8%)</span>
                <span>GH₵{tax.toFixed(2)}</span>
              </div>
              <div className="cart-summary-row total">
                <span>Total</span>
                <span>GH₵{total.toFixed(2)}</span>
              </div>

              {shipping > 0 && (
                <div style={{
                  marginTop: 12,
                  padding: '10px 14px',
                  background: 'var(--accent-dim)',
                  border: '1px solid rgba(245,197,24,0.2)',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: 12,
                  color: 'var(--accent)',
                  fontFamily: 'Rajdhani, sans-serif',
                  fontWeight: 600,
                  letterSpacing: 0.5,
                }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}><Zap size={14} fill="var(--accent)" /> Add GH₵{(500 - cartTotal).toFixed(2)} more for FREE shipping!</span>
                </div>
              )}

              <Link to="/checkout" className="btn-primary cart-checkout-btn" id="checkout-btn" style={{ justifyContent: 'center', marginTop: 20 }}>
                Proceed to Checkout <ArrowRight size={18} />
              </Link>

              <div style={{ marginTop: 16, textAlign: 'center', fontSize: 12, color: 'var(--text-muted)' }}>
                🔒 Secure checkout powered by Stripe
              </div>
            </div>

            {/* Accepted payments */}
            <div style={{
              marginTop: 16,
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-md)',
              padding: '16px',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'Rajdhani, sans-serif', fontWeight: 600, marginBottom: 10 }}>
                We Accept
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 12, color: 'var(--text-secondary)' }}>
                <CreditCard size={24} />
                <Banknote size={24} />
                <Bitcoin size={24} />
                <Wallet size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: 60 }} />
    </div>
  )
}
