import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ALL_PRODUCTS } from '../data/products';
import SEO from '../components/SEO';
import { ArrowLeft, Star, CheckCircle, Info, ShieldCheck } from 'lucide-react';

export default function ItemDetail() {
  const { id } = useParams();
  const product = ALL_PRODUCTS.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container" style={{ paddingTop: 120, textAlign: 'center' }}>
        <h2>Item not found</h2>
        <Link to="/" className="btn-primary" style={{ marginTop: 20 }}>Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="page-enter" style={{ paddingTop: 90, paddingBottom: 100 }}>
      <SEO 
        title={`${product.name} - Detailed Guide`}
        description={product.desc}
      />

      <div className="container">
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--text-secondary)', marginBottom: 32, fontSize: 14 }}>
          <ArrowLeft size={16} /> Back to Catalogue
        </Link>

        <div className="product-detail-layout" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.2fr', gap: 60 }}>
          {/* Image Section */}
          <div className="product-card" style={{ padding: 0, overflow: 'hidden', position: 'sticky', top: 110, height: 'fit-content' }}>
            <img 
              src={product.image || product.fallback} 
              alt={product.name} 
              style={{ width: '100%', display: 'block', objectFit: 'cover', minHeight: 400 }}
            />
          </div>

          {/* Content Section */}
          <div>
            <div style={{ marginBottom: 40 }}>
              <p className="section-tag">{product.brand}</p>
              <h1 className="section-title" style={{ marginTop: 12, fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>{product.name}</h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 16 }}>
                <div style={{ display: 'flex', gap: 2 }}>
                  {[1,2,3,4,5].map(s => (
                    <Star key={s} size={16} fill={s <= Math.floor(product.rating) ? 'var(--accent)' : 'none'} color="var(--accent)" />
                  ))}
                </div>
                <span style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{product.rating} / 5.0 Rating</span>
              </div>
            </div>

            <div style={{ display: 'grid', gap: 40 }}>
              {/* Description */}
              <div className="quality-card" style={{ padding: 32, background: 'rgba(255,255,255,0.02)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <div className="quality-icon" style={{ width: 36, height: 36, marginBottom: 0 }}><Info size={16} /></div>
                  <h3 style={{ fontFamily: 'Rajdhani', fontSize: 18, letterSpacing: 1 }}>DESCRIPTION</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: 16 }}>
                  {product.desc}
                </p>
              </div>

              {/* How it is used */}
              <div className="quality-card" style={{ padding: 32, borderLeft: '4px solid var(--accent)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <div className="quality-icon" style={{ width: 36, height: 36, marginBottom: 0 }}><ShieldCheck size={16} /></div>
                  <h3 style={{ fontFamily: 'Rajdhani', fontSize: 18, letterSpacing: 1 }}>USE IN AUTOMOTIVE</h3>
                </div>
                <p style={{ color: 'var(--text-primary)', lineHeight: 1.8, fontSize: 16, fontWeight: 500 }}>
                  {product.use || 'This part is essential for maintaining optimal vehicle performance and safety standards.'}
                </p>
                
                <div style={{ marginTop: 24, padding: 20, background: 'rgba(255,197,24,0.05)', borderRadius: 8 }}>
                  <ul style={{ listStyle: 'none', display: 'grid', gap: 12 }}>
                    {[
                      'Ensures structural integrity during high speeds',
                      'Optimizes fuel efficiency and engine cooling',
                      'Prevents premature wear of connected components',
                      'Certified for multi-brand vehicle compatibility'
                    ].map((item, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--text-secondary)' }}>
                        <CheckCircle size={14} color="var(--accent)" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div style={{ marginTop: 48, display: 'flex', gap: 16 }}>
              <Link to="/contact" className="btn-primary" style={{ padding: '16px 40px' }}>Inquire for Service</Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .product-detail-layout { grid-template-columns: 1fr !important; }
          .product-card { position: relative !important; top: 0 !important; }
        }
      `}</style>
    </div>
  );
}
