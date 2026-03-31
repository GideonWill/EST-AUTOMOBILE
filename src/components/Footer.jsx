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
              {[Globe, Play, Share2, Mail].map((Icon, i) => (
                <button key={i} className="social-btn" aria-label="Social link">
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div className="footer-col">
            <h4>Shop</h4>
            <ul className="footer-links">
              <li><Link to="/shop">All Parts</Link></li>
              <li><Link to="/shop?cat=wheels">Wheels</Link></li>
              <li><Link to="/shop?cat=tyres">Tyres</Link></li>
              <li><Link to="/shop?cat=brakes">Brakes</Link></li>
              <li><Link to="/shop?cat=exhaust">Exhaust</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/brands">Our Brands</Link></li>
              <li><Link to="/visuals">Visuals</Link></li>
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
                  💬 WhatsApp: 0509294314
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
