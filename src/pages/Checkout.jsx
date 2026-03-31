import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import { ArrowLeft, ArrowRight, CreditCard, MapPin, CheckCircle, ShieldCheck, Truck } from 'lucide-react'
import SEO from '../components/SEO'

export default function Checkout() {
  const { items, cartTotal, clearCart } = useCart()
  const { user, addOrder } = useAuth()
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    firstName: user?.name.split(' ')[0] || '',
    lastName: user?.name.split(' ')[1] || '',
    email: user?.email || '',
    phone: user?.phone || '',
    address: user?.address || '',
    city: 'Accra',
    zip: '00233',
    cardName: user?.name || '',
    cardNumber: '**** **** **** 1234',
    expiry: '12/28',
    cvv: '***',
  })

  if (items.length === 0 && step < 4) {
    return (
      <div className="container" style={{ paddingTop: 120, textAlign: 'center' }}>
        <SEO title="Checkout" />
        <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 32 }}>Your cart is empty</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>Add some premium parts to proceed with checkout.</p>
        <Link to="/shop" className="btn-primary">Go to Shop</Link>
      </div>
    )
  }

  const shipping = cartTotal > 5000 ? 0 : 250
  const tax = cartTotal * 0.15
  const total = cartTotal + shipping + tax

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const nextStep = () => setStep(prev => prev + 1)
  const prevStep = () => setStep(prev => prev - 1)

  const handlePlaceOrder = () => {
    setLoading(true)
    setTimeout(() => {
      const order = {
        items,
        total,
        shipping,
        tax,
        address: `${formData.address}, ${formData.city}`,
        paymentMethod: 'Credit Card',
      }
      const newOrder = addOrder(order)
      clearCart()
      setLoading(false)
      navigate('/success', { state: { orderId: newOrder.id } })
    }, 2000)
  }

  return (
    <div className="page-enter" style={{ paddingTop: 100, paddingBottom: 100 }}>
      <SEO title="Secure Checkout" description="Securely checkout your premium automobile parts." />
      <div className="container">
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          {/* Progress Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 40, position: 'relative' }}>
            <div style={{ position: 'absolute', top: '20px', left: '10%', right: '10%', height: '2px', background: 'var(--border)', zIndex: 1 }} />
            <div style={{ position: 'absolute', top: '20px', left: '10%', width: `${(step - 1) * 40}%`, height: '2px', background: 'var(--accent)', zIndex: 2, transition: '0.3s ease' }} />
            
            {[1, 2, 3].map((s) => (
              <div key={s} style={{ position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                <div style={{ 
                  width: 40, height: 40, borderRadius: '50%', 
                  background: step >= s ? 'var(--accent)' : 'var(--bg-secondary)', 
                  border: `2px solid ${step >= s ? 'var(--accent)' : 'var(--border)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: step >= s ? '#000' : 'var(--text-muted)',
                  fontWeight: 700,
                  transition: '0.3s ease'
                }}>
                  {step > s ? <CheckCircle size={20} /> : s}
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: step >= s ? 'var(--text-primary)' : 'var(--text-muted)' }}>
                  {s === 1 ? 'Shipping' : s === 2 ? 'Payment' : 'Review'}
                </span>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 40 }}>
            {/* Steps */}
            <div style={{ background: 'var(--bg-card)', padding: 32, borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
              
              {/* Step 1: Shipping */}
              {step === 1 && (
                <div className="page-enter">
                  <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 24, letterSpacing: 1, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
                    <MapPin size={22} color="var(--accent)" /> Shipping Details
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 12, color: 'var(--text-muted)', marginBottom: 6 }}>First Name</label>
                      <input name="firstName" value={formData.firstName} onChange={handleInputChange} style={inputStyle} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 12, color: 'var(--text-muted)', marginBottom: 6 }}>Last Name</label>
                      <input name="lastName" value={formData.lastName} onChange={handleInputChange} style={inputStyle} />
                    </div>
                    <div style={{ gridColumn: 'span 2' }}>
                      <label style={{ display: 'block', fontSize: 12, color: 'var(--text-muted)', marginBottom: 6 }}>Street Address</label>
                      <input name="address" value={formData.address} onChange={handleInputChange} style={inputStyle} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 12, color: 'var(--text-muted)', marginBottom: 6 }}>City</label>
                      <input name="city" value={formData.city} onChange={handleInputChange} style={inputStyle} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 12, color: 'var(--text-muted)', marginBottom: 6 }}>Phone</label>
                      <input name="phone" value={formData.phone} onChange={handleInputChange} style={inputStyle} />
                    </div>
                  </div>
                  <button className="btn-primary" style={{ marginTop: 32, width: '100%', justifyContent: 'center' }} onClick={nextStep}>
                    Next: Payment <ArrowRight size={16} />
                  </button>
                </div>
              )}

              {/* Step 2: Payment */}
              {step === 2 && (
                <div className="page-enter">
                  <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 24, letterSpacing: 1, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
                    <CreditCard size={22} color="var(--accent)" /> Secure Payment
                  </h3>
                  <div style={{ marginBottom: 24, padding: 16, border: '1px solid var(--accent)', borderRadius: 'var(--radius-sm)', background: 'var(--accent-dim)', display: 'flex', gap: 12, alignItems: 'center' }}>
                    <ShieldCheck size={24} color="var(--accent)" />
                    <span style={{ fontSize: 13, color: 'var(--accent)', fontWeight: 600 }}>All payments are encrypted and secure.</span>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div style={{ gridColumn: 'span 2' }}>
                      <label style={{ display: 'block', fontSize: 12, color: 'var(--text-muted)', marginBottom: 6 }}>Cardholder Name</label>
                      <input name="cardName" value={formData.cardName} onChange={handleInputChange} style={inputStyle} />
                    </div>
                    <div style={{ gridColumn: 'span 2' }}>
                      <label style={{ display: 'block', fontSize: 12, color: 'var(--text-muted)', marginBottom: 6 }}>Card Number</label>
                      <input name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} style={inputStyle} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 12, color: 'var(--text-muted)', marginBottom: 6 }}>Expiry</label>
                      <input name="expiry" value={formData.expiry} placeholder="MM/YY" onChange={handleInputChange} style={inputStyle} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 12, color: 'var(--text-muted)', marginBottom: 6 }}>CVV</label>
                      <input name="cvv" value={formData.cvv} placeholder="000" onChange={handleInputChange} style={inputStyle} />
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
                    <button className="btn-outline" style={{ flex: 1, justifyContent: 'center' }} onClick={prevStep}>
                      <ArrowLeft size={16} /> Back
                    </button>
                    <button className="btn-primary" style={{ flex: 2, justifyContent: 'center' }} onClick={nextStep}>
                      Next: Review <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Review */}
              {step === 3 && (
                <div className="page-enter">
                  <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 24, letterSpacing: 1, marginBottom: 24 }}>Final Review</h3>
                  
                  <div style={{ marginBottom: 24, padding: 16, border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', background: 'var(--bg-secondary)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                      <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Ship to:</span>
                      <button style={{ color: 'var(--accent)', fontSize: 11 }} onClick={() => setStep(1)}>Edit</button>
                    </div>
                    <p style={{ fontSize: 14 }}>{formData.firstName} {formData.lastName}</p>
                    <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{formData.address}, {formData.city}, {formData.zip}</p>
                  </div>

                  <div style={{ marginBottom: 32, padding: 16, border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', background: 'var(--bg-secondary)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                      <span style={{ fontSize: 12, color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>Payment:</span>
                      <button style={{ color: 'var(--accent)', fontSize: 11 }} onClick={() => setStep(2)}>Edit</button>
                    </div>
                    <p style={{ fontSize: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
                      <CreditCard size={16} /> {formData.cardNumber}
                    </p>
                  </div>

                  <div style={{ display: 'flex', gap: 12 }}>
                    <button className="btn-outline" style={{ flex: 1, justifyContent: 'center' }} onClick={prevStep}>
                      <ArrowLeft size={16} /> Back
                    </button>
                    <button 
                      className="btn-primary" 
                      style={{ flex: 2, justifyContent: 'center', minWidth: 160 }} 
                      onClick={handlePlaceOrder}
                      disabled={loading}
                    >
                      {loading ? 'Processing...' : `Place Order GH₵${total.toFixed(2)}`}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Summary */}
            <aside>
              <div style={{ background: 'var(--bg-card)', padding: 24, borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', position: 'sticky', top: 100 }}>
                <h4 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 20 }}>Order Summary</h4>
                <div style={{ borderBottom: '1px solid var(--border)', marginBottom: 20 }}>
                  {items.map(item => (
                    <div key={item.id} style={{ display: 'flex', gap: 12, marginBottom: 12 }}>
                      <div style={{ width: 48, height: 48, background: '#111', borderRadius: 4, overflow: 'hidden' }}>
                        <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: 140 }}>{item.name}</div>
                        <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>Qty: {item.qty} · GH₵{item.price.toFixed(2)}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 8, display: 'flex', justifyContent: 'space-between' }}>
                  <span>Subtotal</span>
                  <span>GH₵{cartTotal.toFixed(2)}</span>
                </div>
                <div style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 8, display: 'flex', justifyContent: 'space-between' }}>
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `GH₵${shipping.toFixed(2)}`}</span>
                </div>
                <div style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 16, display: 'flex', justifyContent: 'space-between' }}>
                  <span>Tax (15%)</span>
                  <span>GH₵{tax.toFixed(2)}</span>
                </div>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: 16, display: 'flex', justifyContent: 'space-between', fontFamily: 'Bebas Neue, sans-serif', fontSize: 24, letterSpacing: 1, color: 'var(--accent)' }}>
                  <span>Total</span>
                  <span>GH₵{total.toFixed(2)}</span>
                </div>
              </div>
              <div style={{ marginTop: 24, textAlign: 'center', color: 'var(--text-muted)', fontSize: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <Truck size={14} /> Est. Delivery: {new Date(Date.now() + 3*24*60*60*1000).toLocaleDateString('en-GB')}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  )
}

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  background: 'var(--bg-primary)',
  border: '1px solid var(--border)',
  borderRadius: 'var(--radius-sm)',
  color: 'var(--text-primary)',
  fontSize: '14px',
  outline: 'none',
  transition: 'border-color 0.2s ease',
}
