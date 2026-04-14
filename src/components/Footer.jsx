import { Link } from 'react-router-dom'
import { Globe, Play, Share2, Mail } from 'lucide-react'
import { LOGO } from '../data/products'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="navbar-logo" style={{ display: 'inline-flex' }}>
              <img src={LOGO} alt="ETS logo" style={{ height: '32px', objectFit: 'contain' }} />
              <span>ETS AUTO<span style={{ color: 'var(--accent)' }}>MOTIVE</span></span>
            </Link>
            <p>
              Your premier destination for premium automobile parts, wheels, tyres
              and accessories. Trusted by thousands of enthusiasts worldwide.
            </p>
            <div className="footer-social">
              <a href="https://wa.me/0509294314" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Inventory</h4>
            <ul className="footer-links">
              <li><Link to="/inventory">Full Stock</Link></li>
              <li><Link to="/inventory">Tyre Selection</Link></li>
              <li><Link to="/inventory">Rim Sizes</Link></li>
              <li><Link to="/inventory">Pricing Info</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="footer-links">
              <li>
                <a href="https://wa.me/0509294314" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14 }}>
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                    WhatsApp: 0509294314
                  </span>
                </a>
              </li>
              <li>
                <a href="tel:0245753268" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                >
                  📞 Call Line: 0245753268
                </a>
              </li>
              <li><Link to="/contact">Book a Service</Link></li>
              <li><Link to="/contact">Help Center</Link></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p className="footer-bottom-text">
            © {year} ETS AutoMotive. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/contact">Privacy Policy</Link>
            <Link to="/contact">Terms of Service</Link>
            <Link to="/contact">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
