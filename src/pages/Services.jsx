import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Wrench, CheckCircle2, ChevronRight } from 'lucide-react'
import SEO from '../components/SEO'
import { SERVICE_CATEGORIES } from '../data/services'

export default function Services() {
  const [activeCategory, setActiveCategory] = useState(SERVICE_CATEGORIES[0].id)

  // Update active category based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const categoryElements = SERVICE_CATEGORIES.map(cat => ({
        id: cat.id,
        element: document.getElementById(`category-${cat.id}`)
      }))

      for (let i = categoryElements.length - 1; i >= 0; i--) {
        const item = categoryElements[i]
        if (item.element) {
          const rect = item.element.getBoundingClientRect()
          if (rect.top <= 200) {
            setActiveCategory(item.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToCategory = (id) => {
    setActiveCategory(id)
    const element = document.getElementById(`category-${id}`)
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="page-enter" style={{ paddingTop: 70, background: 'var(--bg-primary)' }}>
      <SEO 
        title="Our Services - AutoMotive" 
        description="Comprehensive automobile maintenance and repair services including diagnostics, electrical, air conditioning, and more."
      />
      
      {/* Page Hero */}
      <div className="page-hero" style={{ background: '#0a0a0a', padding: '80px 20px', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <p className="section-tag">What We Do</p>
          <h1 className="page-hero-title" style={{ marginTop: 12 }}>
            EXPERT <span style={{ color: 'var(--accent)' }}>SERVICES</span>
          </h1>
          <p className="page-hero-sub" style={{ maxWidth: 600 }}>
            Professional car servicing and repairs at our premium workshop or your location. 
            We handle everything from routine maintenance to complex diagnostics.
          </p>
        </div>
      </div>

      <div className="container" style={{ padding: '60px 20px' }}>
        <div style={{ display: 'flex', gap: '48px', alignItems: 'flex-start' }} className="services-layout">
          
          {/* Sidebar Navigation */}
          <aside style={{ 
            flex: '0 0 280px', 
            position: 'sticky', 
            top: '100px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 'var(--radius-md)',
            padding: '24px 0'
          }} className="services-sidebar">
            <h3 style={{ padding: '0 24px', marginBottom: 16, fontSize: 14, textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: 1, fontFamily: 'Rajdhani, sans-serif' }}>
              Service Categories
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {SERVICE_CATEGORIES.map(cat => (
                <li key={cat.id}>
                  <button 
                    onClick={() => scrollToCategory(cat.id)}
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      background: activeCategory === cat.id ? 'var(--bg-secondary)' : 'transparent',
                      border: 'none',
                      borderLeft: `3px solid ${activeCategory === cat.id ? 'var(--accent)' : 'transparent'}`,
                      padding: '12px 24px',
                      color: activeCategory === cat.id ? 'var(--accent)' : 'var(--text-secondary)',
                      fontSize: 15,
                      fontFamily: 'Inter, sans-serif',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      if (activeCategory !== cat.id) {
                        e.currentTarget.style.background = 'var(--bg-secondary)'
                        e.currentTarget.style.color = 'var(--text-primary)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeCategory !== cat.id) {
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.color = 'var(--text-secondary)'
                      }
                    }}
                  >
                    {cat.title}
                    <ChevronRight size={16} opacity={activeCategory === cat.id ? 1 : 0} />
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content Area */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '60px' }}>
            {SERVICE_CATEGORIES.map(category => (
              <section key={category.id} id={`category-${category.id}`} style={{ scrollMarginTop: '100px' }}>
                <div style={{ marginBottom: 32, borderBottom: '1px solid var(--border)', paddingBottom: 16 }}>
                  <h2 style={{ fontSize: 28, fontFamily: 'Rajdhani, sans-serif', letterSpacing: 1, color: 'var(--text-primary)', marginBottom: 8 }}>
                    {category.title}
                  </h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 16 }}>
                    {category.description}
                  </p>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
                  {category.services.map(service => (
                    <div key={service.id} style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-md)',
                      padding: '24px',
                      display: 'flex',
                      flexDirection: 'column',
                      transition: 'border-color 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--accent)'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
                    >
                      {service.image && (
                        <div style={{ position: 'absolute', top: 0, right: 0, width: '120px', height: '120px', opacity: 0.05, pointerEvents: 'none' }}>
                          <img src={service.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      )}
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 16 }}>
                        <div style={{ color: 'var(--accent)', marginTop: 2 }}>
                          <CheckCircle2 size={20} />
                        </div>
                        <div>
                          <h4 style={{ fontSize: 16, color: 'var(--text-primary)', marginBottom: 6, fontWeight: 600 }}>
                            {service.name}
                          </h4>
                          <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            {service.desc}
                          </p>
                        </div>
                      </div>
                      
                      <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingTop: 20, borderTop: '1px solid var(--border)' }}>
                        <Link to="/contact" style={{ color: 'var(--accent)', fontSize: 14, display: 'flex', alignItems: 'center', gap: 6, fontWeight: 500 }}>
                          Book <ArrowRight size={14} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

        </div>
      </div>
    </div>
  )
}
