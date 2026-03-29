import { useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom'
import { User, Mail, MapPin, Package, Phone, Settings, LogOut, ChevronRight, ShoppingBag, Truck } from 'lucide-react'

export default function Profile() {
  const { user, orders, logout } = useAuth()
  const navigate = useNavigate()

  if (!user) {
    return (
      <div className="container" style={{ paddingTop: 120, textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 32 }}>Not Logged In</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>Log in to view your profile and orders.</p>
        <Link to="/" className="btn-primary">Go Home</Link>
      </div>
    )
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="page-enter" style={{ paddingTop: 100, paddingBottom: 100 }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 40, alignItems: 'start' }}>
          
          {/* Sidebar */}
          <aside>
            <div style={{ background: 'var(--bg-card)', padding: 32, borderRadius: 'var(--radius-lg)', border: '1px solid var(--border)', textAlign: 'center', marginBottom: 24, boxShadow: 'var(--shadow-card)' }}>
              <div style={{ position: 'relative', width: 120, height: 120, margin: '0 auto 20px' }}>
                <img 
                  src={user.avatar} 
                  alt={user.name} 
                  style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--accent)' }} 
                />
                <div style={{ position: 'absolute', bottom: 5, right: 5, width: 28, height: 28, background: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', border: '3px solid var(--bg-card)' }}>
                  <Settings size={14} />
                </div>
              </div>
              <h2 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 24, letterSpacing: 1, marginBottom: 4 }}>{user.name}</h2>
              <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 24 }}>Premium Member Since 2024</p>
              
              <div style={{ textAlign: 'left', borderTop: '1px solid var(--border)', paddingTop: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <Mail size={16} color="var(--accent)" />
                  <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{user.email}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <Phone size={16} color="var(--accent)" />
                  <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{user.phone}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <MapPin size={16} color="var(--accent)" />
                  <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{user.address.split(',')[0]}</span>
                </div>
              </div>

              <button 
                onClick={handleLogout}
                style={{ marginTop: 32, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', color: 'var(--text-muted)', fontSize: 13, fontWeight: 700, transition: '0.2s ease', cursor: 'pointer' }}
                onMouseOver={e => e.currentTarget.style.color = '#ff4444'}
                onMouseOut={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                <LogOut size={16} /> Logout Simulation
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <main>
            <div style={{ marginBottom: 40 }}>
              <h1 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 32, letterSpacing: 2, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 16 }}>
                <Package size={28} color="var(--accent)" /> MY ORDERS
              </h1>
              <p style={{ color: 'var(--text-muted)', fontSize: 14 }}>Track and manage your recent purchases from EST AUTOMOTIVE.</p>
            </div>

            {orders.length === 0 ? (
              <div style={{ background: 'var(--bg-secondary)', padding: 60, borderRadius: 'var(--radius-md)', border: '1px dashed var(--border)', textAlign: 'center' }}>
                <ShoppingBag size={48} color="var(--text-muted)" style={{ marginBottom: 16 }} />
                <h3 style={{ fontSize: 18, color: 'var(--text-secondary)' }}>No orders yet</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 14, marginBottom: 24 }}>Looks like you haven't explored our parts catalog yet.</p>
                <Link to="/shop" className="btn-primary">Browse Shop</Link>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {orders.map((order) => (
                  <div key={order.id} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', transition: '0.2s ease' }}>
                    <div style={{ background: 'var(--bg-secondary)', padding: '16px 24px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', gap: 24 }}>
                        <div>
                          <div style={{ fontSize: 10, color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: 2 }}>Order ID</div>
                          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-primary)' }}>#{order.id}</div>
                        </div>
                        <div>
                          <div style={{ fontSize: 10, color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: 2 }}>Date</div>
                          <div style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{order.date}</div>
                        </div>
                        <div>
                          <div style={{ fontSize: 10, color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: 2 }}>Status</div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--accent)', fontWeight: 700 }}>
                            <div style={{ width: 6, height: 6, background: 'var(--accent)', borderRadius: '50%' }} />
                            {order.status}
                          </div>
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: 10, color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', marginBottom: 2 }}>Total Amount</div>
                        <div style={{ fontSize: 16, fontFamily: 'Bebas Neue, sans-serif', color: 'var(--accent)', letterSpacing: 1 }}>GH₵{order.total.toFixed(2)}</div>
                      </div>
                    </div>
                    
                    <div style={{ padding: '20px 24px' }}>
                      <div style={{ display: 'flex', gap: 16, overflowX: 'auto', paddingBottom: 8 }}>
                        {order.items.map((item, idx) => (
                          <div key={idx} style={{ flexShrink: 0, position: 'relative' }}>
                            <div style={{ width: 60, height: 60, background: '#111', borderRadius: 8, overflow: 'hidden', border: '1px solid var(--border)' }}>
                              <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <span style={{ position: 'absolute', top: -5, right: -5, background: 'var(--accent)', color: '#000', width: 20, height: 20, borderRadius: '50%', fontSize: 10, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid var(--bg-card)' }}>
                              {item.qty}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--border)' }}>
                        <div style={{ fontSize: 13, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: 8 }}>
                          <Truck size={14} /> Shipping to: <span style={{ color: 'var(--text-secondary)' }}>{order.address.split(',')[0]}</span>
                        </div>
                        <Link to="#" style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'var(--accent)', fontWeight: 700 }}>
                          Manage Order <ChevronRight size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
