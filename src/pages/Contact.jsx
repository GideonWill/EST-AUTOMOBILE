import { useState } from 'react'
import { MapPin, Clock, Phone, Mail, Send, CheckCircle, Settings, Snowflake, Wrench, Zap } from 'lucide-react'
import SEO from '../components/SEO'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    
    // Format message
    const waNumber = '233509294314'; // Ghana format for 0509294314
    const text = `*New Contact Request*\n\n*Name:* ${form.name}\n*Email:* ${form.email}\n*Service:* ${form.subject}\n*Message:* ${form.message}`;
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(text)}`;
    
    window.open(url, '_blank');

    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="page-enter" style={{ paddingTop: 70 }}>
      <SEO 
        title="Contact Us" 
        description="Get in touch with EST AUTOMOTIVE. Book a consultation for premium car service, parts, sales, and leasing directly on our site."
        keywords="contact auto mechanic, book car service, ETS automotive phone number, auto repair workshop, car garage Accra"
      />
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <p className="section-tag">Get In Touch</p>
          <h1 className="page-hero-title" style={{ marginTop: 12 }}>CONTACT US</h1>
          <p className="page-hero-sub">
            Have a question or want to book a service? We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="contact-layout">
          {/* Info column */}
          <div>
            <h2 className="section-title" style={{ marginBottom: 8 }}>
              LET'S <span style={{ color: 'var(--accent)' }}>TALK</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: 15, lineHeight: 1.8, marginBottom: 36 }}>
              We offer automobile air-conditioning services, vulcanizing and auto electrical services.
              Reach out to book a service or ask about our products.
            </p>

            <div className="contact-info">
              {/* Phone 1 */}
              <div className="contact-item" id="contact-phone-1">
                <div className="contact-item-icon"><Phone size={20} /></div>
                <div>
                  <div className="contact-item-title">Call Us</div>
                  <a href="tel:0509294314" className="contact-item-value" style={{ display: 'block', color: 'var(--text-primary)', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-primary)'}
                  >
                    0509294314
                  </a>
                  <a href="tel:0245753268" className="contact-item-value" style={{ display: 'block', marginTop: 4, color: 'var(--text-primary)', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-primary)'}
                  >
                    0245753268
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="contact-item" id="contact-whatsapp">
                <div className="contact-item-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 20, height: 20 }}>
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                  </svg>
                </div>
                <div>
                  <div className="contact-item-title">WhatsApp Contact</div>
                  <a href="https://wa.me/0509294314" target="_blank" rel="noopener noreferrer" className="contact-item-value" style={{ display: 'block', color: 'var(--text-primary)', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-primary)'}
                  >
                    0509294314
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="contact-item" id="contact-email">
                <div className="contact-item-icon"><Mail size={20} /></div>
                <div>
                  <div className="contact-item-title">Email Us</div>
                  <a href="mailto:niiamarh024@gmail.com" className="contact-item-value" style={{ display: 'block', color: 'var(--text-primary)', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = 'var(--accent)'}
                    onMouseLeave={e => e.target.style.color = 'var(--text-primary)'}
                  >
                    niiamarh024@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item" id="contact-services">
                <div className="contact-item-icon" style={{ padding: 4 }}><Settings size={20} /></div>
                <div>
                  <div className="contact-item-title">Our Services</div>
                  <div className="contact-item-value" style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 4 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Snowflake size={14} color="var(--accent)" /> Air-Conditioning Service</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Wrench size={14} color="var(--accent)" /> Vulcanizing Service</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}><Zap size={14} color="var(--accent)" /> Auto Electrical Service</div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="contact-item" id="contact-hours">
                <div className="contact-item-icon"><Clock size={20} /></div>
                <div>
                  <div className="contact-item-title">Business Hours</div>
                  <div className="contact-item-value" style={{ whiteSpace: 'pre-line' }}>
                    Mon – Fri: 8AM – 6PM{'\n'}Saturday: 9AM – 4PM
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="contact-item" id="contact-location">
                <div className="contact-item-icon"><MapPin size={20} /></div>
                <div>
                  <div className="contact-item-title">Visit Us</div>
                  <div className="contact-item-value">Our workshop is open to walk-ins. Call ahead for service bookings.</div>
                </div>
              </div>
            </div>

            {/* Quick call buttons */}
            <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
              <a
                href="tel:0509294314"
                className="btn-primary"
                id="call-btn-1"
                style={{ flex: 1, justifyContent: 'center', minWidth: 180 }}
              >
                <Phone size={16} /> Call 0509294314
              </a>
              <a
                href="tel:0245753268"
                className="btn-outline"
                id="call-btn-2"
                style={{ flex: 1, justifyContent: 'center', minWidth: 180 }}
              >
                <Phone size={16} /> Call 0245753268
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="contact-form">
            {sent ? (
              <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                <CheckCircle size={56} color="var(--accent)" style={{ marginBottom: 20, display: 'block', margin: '0 auto 20px' }} />
                <h3 style={{ fontFamily: 'Bebas Neue, sans-serif', fontSize: 32, letterSpacing: 2, marginBottom: 10 }}>
                  MESSAGE SENT!
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: 15, marginBottom: 28 }}>
                  Thanks for reaching out. We'll get back to you shortly.
                </p>
                <button className="btn-primary" id="contact-send-another-btn" onClick={() => setSent(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h3 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 14, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 28, color: 'var(--text-primary)' }}>
                  Send a Message
                </h3>
                <form onSubmit={handleSubmit} id="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contact-name">Name</label>
                      <input id="contact-name" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contact-email">Email</label>
                      <input id="contact-email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-subject">Service Required</label>
                    <select id="contact-subject" name="subject" value={form.subject} onChange={handleChange} required>
                      <option value="">Select a service</option>
                      <option value="aircon">Air-Conditioning Service</option>
                      <option value="vulcanizing">Vulcanizing / Tyre Repair</option>
                      <option value="electrical">Auto Electrical Service</option>
                      <option value="parts">Parts Enquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contact-message">Message</label>
                    <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} placeholder="Tell us about your vehicle and the service you need..." rows={5} required />
                  </div>
                  <button type="submit" className="btn-primary" id="contact-submit-btn" style={{ width: '100%', justifyContent: 'center' }}>
                    <Send size={16} /> Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
      <div style={{ height: 60 }} />
    </div>
  )
}
