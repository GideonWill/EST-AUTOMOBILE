import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom'
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { LOGO } from '../data/products'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { cartCount } = useCart()
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on nav change
  useEffect(() => { setMobileOpen(false) }, [location])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/shop', label: 'Shop' },
    { to: '/brands', label: 'Brands' },
    { to: '/visuals', label: 'Visuals' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <Link to="/" className="navbar-logo">
          <img src={LOGO} alt="ETS logo" style={{ height: '32px', objectFit: 'contain' }} />
          <span>ETS AUTO<span style={{ color: 'var(--accent)' }}>MOTIVE</span></span>
        </Link>

        <ul className="navbar-links">
          {links.map(l => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button
            className="navbar-icon-btn"
            id="search-btn"
            onClick={() => setSearchOpen(s => !s)}
            aria-label="Search"
          >
            <Search size={18} />
          </button>
          <Link to="/cart" className="navbar-icon-btn" id="cart-btn" aria-label="Cart">
            <ShoppingCart size={18} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
          <button
            className="hamburger"
            id="hamburger-btn"
            aria-label="Menu"
            onClick={() => setMobileOpen(o => !o)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu${mobileOpen ? ' open' : ''}`}>
        {links.map(l => (
          <NavLink key={l.to} to={l.to} end={l.to === '/'}>{l.label}</NavLink>
        ))}
        <Link to="/cart" style={{ borderBottom: 'none' }}>Cart ({cartCount})</Link>
      </div>

      {/* Search overlay */}
      {searchOpen && (
        <div
          id="search-overlay"
          style={{
            position: 'fixed', top: '70px', left: 0, right: 0,
            background: 'rgba(10,10,10,0.98)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid var(--border)',
            padding: '24px 20px',
            zIndex: 998,
            display: 'flex',
            gap: '12px',
            alignItems: 'center',
          }}
        >
          <Search size={18} color="var(--text-muted)" />
          <input
            autoFocus
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                if (searchQuery.trim()) {
                  navigate(`/shop?q=${encodeURIComponent(searchQuery.trim())}`)
                } else {
                  navigate('/shop')
                }
                setSearchOpen(false)
                setSearchQuery('')
              }
            }}
            placeholder="Search parts, brands, wheels..."
            style={{
              flex: 1,
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              fontSize: '18px',
              outline: 'none',
              fontFamily: 'Inter, sans-serif',
            }}
          />
          <button
            onClick={() => setSearchOpen(false)}
            style={{ color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <X size={20} />
          </button>
        </div>
      )}
    </>
  )
}
