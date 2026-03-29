import { useLocation, Link, Navigate } from 'react-router-dom'
import { CheckCircle, ShoppingBag, ArrowRight, Truck, Mail } from 'lucide-react'

export default function Success() {
  const location = useLocation()
  const orderId = location.state?.orderId

  if (!orderId) return <Navigate to="/" replace />

  return (
    <div className="page-enter" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '100px 20px' }}>
      <div style={{ maxWidth: 600, width: '100%', textAlign: 'center', background: 'var(--bg-card)', padding: '60px 40px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-card)' }}>
        <div style={{ width: 80, height: 80, background: 'var(--accent-dim)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', margin: '0 auto 32px', animation: 'pulse 2s infinite' }}>
          <CheckCircle size={48} />
        </div>
        
        <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 'clamp(32px, 5vw, 48px)', letterSpacing: 2, marginBottom: 16 }}>ORDER CONFIRMED</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: 16, marginBottom: 40, lineHeight: 1.6 }}>
          Thank you for choosing EST AUTOMOTIVE. We've received your order and are preparing it for delivery.
        </p>

        <div style={{ background: 'var(--bg-secondary)', padding: 24, borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', marginBottom: 40, textAlign: 'left' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border)', paddingBottom: 12, marginBottom: 12 }}>
            <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Order ID</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--accent)' }}>#{orderId}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <Truck size={20} color="var(--text-muted)" />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>Estimated Delivery</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>Arriving in 3-5 business days</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Mail size={20} color="var(--text-muted)" />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>Confirmation Email</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>Sent to your registered email address</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 16 }}>
          <Link to="/profile" className="btn-outline" style={{ flex: 1, justifyContent: 'center' }}>
            View Order History
          </Link>
          <Link to="/shop" className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
            Continue Shopping <ArrowRight size={16} />
          </Link>
        </div>

        <div style={{ marginTop: 40, borderTop: '1px solid var(--border)', paddingTop: 24 }}>
          <p style={{ fontSize: 12, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            <ShoppingBag size={14} /> Shop with confidence at EST AUTOMOTIVE
          </p>
        </div>
      </div>
    </div>
  )
}

const clamp = (min, val, max) => Math.max(min, Math.min(val, max))
