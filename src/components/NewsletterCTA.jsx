import { useState } from 'react'
import { ArrowRight } from 'lucide-react'

export default function NewsletterCTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="cta-bar" id="newsletter">
      <div className="container">
        <div className="cta-bar-inner">
          <div>
            <h2 className="cta-bar-title">
              GET <span>EXCLUSIVE</span> DEALS<br />STRAIGHT TO YOUR INBOX
            </h2>
            <p className="cta-bar-sub">
              Join 50,000+ enthusiasts. No spam, unsubscribe anytime.
            </p>
          </div>

          {submitted ? (
            <div style={{
              padding: '20px 32px',
              background: 'var(--accent-dim)',
              border: '1px solid rgba(245,197,24,0.3)',
              borderRadius: 'var(--radius-md)',
              fontFamily: 'Rajdhani, sans-serif',
              fontWeight: 700,
              fontSize: 15,
              letterSpacing: 1,
              color: 'var(--accent)',
              textAlign: 'center',
              minWidth: 380,
            }}>
              ✓ You're in! Welcome to the club.
            </div>
          ) : (
            <form className="newsletter-form" onSubmit={handleSubmit} id="newsletter-form">
              <input
                id="newsletter-email"
                type="email"
                className="newsletter-input"
                placeholder="Enter your email address"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary" id="newsletter-submit-btn">
                Subscribe <ArrowRight size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
