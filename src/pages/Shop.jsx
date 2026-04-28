import { useState, useMemo, useEffect } from 'react'
import { ShoppingCart, Star, SlidersHorizontal, Search } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { ALL_PRODUCTS } from '../data/products'
import { useSearchParams } from 'react-router-dom'
import SEO from '../components/SEO'

const CATEGORIES = ['All', 'Wheels', 'Tyres', 'Brakes', 'Exhaust', 'Engine', 'Suspension']
const BRANDS_FILTER = ['All', ...new Set(ALL_PRODUCTS.map(p => p.brand))].sort((a, b) => a === 'All' ? -1 : b === 'All' ? 1 : a.localeCompare(b))

function ProductCard({ product }) {
  const { addToCart } = useCart()
  return (
    <div className="part-card" id={`shop-product-${product.id}`}>
      <div className="part-card-img">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            onError={e => {
              if (product.fallback) {
                e.target.src = product.fallback
              } else {
                e.target.style.display = 'none'
                const p = e.target.nextSibling
                if (p) p.style.display = 'flex'
              }
            }}
          />
        ) : null}
        <div
          className="part-placeholder"
          style={{ display: product.image ? 'none' : 'flex' }}
        >
          {product.emoji || '📦'}
        </div>
        {/* Hover Overlay */}
        <div className="part-card-overlay">
          <p className="part-card-desc">{product.desc || 'Premium automotive part for peak performance.'}</p>
        </div>
      </div>
      <div className="part-card-info">
        <div style={{ marginBottom: 4 }}>
          <span className="badge">{product.category}</span>
        </div>
        <div className="part-card-name">{product.name}</div>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 6 }}>{product.brand}</div>
        <div className="part-card-footer">
          <div className="part-rating">
            <Star size={12} fill="var(--accent)" color="var(--accent)" />
            <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{product.rating}</span>
            <span>({product.reviews})</span>
          </div>
          <button
            className="add-to-cart-btn"
            id={`shop-add-${product.id}`}
            onClick={() => addToCart(product)}
            aria-label="Add to cart"
          >
            <ShoppingCart size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Shop() {
  const [searchParams] = useSearchParams()
  const initCat = searchParams.get('cat') || 'all'
  const [activeCategory, setActiveCategory] = useState(
    CATEGORIES.find(c => c.toLowerCase() === initCat) || 'All'
  )
  const [activeBrand, setActiveBrand] = useState('All')
  const [sort, setSort] = useState('featured')
  const [search, setSearch] = useState(searchParams.get('q') || '')
  const [showFilters, setShowFilters] = useState(true)

  useEffect(() => {
    const q = searchParams.get('q')
    if (q !== null) {
      setSearch(q)
    }
  }, [searchParams])

  const filtered = useMemo(() => {
    let list = [...ALL_PRODUCTS]
    if (activeCategory !== 'All') list = list.filter(p => p.category === activeCategory.toLowerCase())
    if (activeBrand !== 'All') list = list.filter(p => p.brand === activeBrand)
    if (search) list = list.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase()))
    if (sort === 'price-asc') list.sort((a, b) => a.price - b.price)
    else if (sort === 'price-desc') list.sort((a, b) => b.price - a.price)
    else if (sort === 'rating') list.sort((a, b) => b.rating - a.rating)
    return list
  }, [activeCategory, activeBrand, sort, search])

  return (
    <div className="shop-page page-enter">
      <SEO 
        title="Shop Automobile Parts" 
        description={`Browse our extensive catalogue of ${ALL_PRODUCTS.length} premium automobile parts across various categories. Find exactly what you need.`} 
        keywords="buy auto parts online, car accessories, genuine vehicle parts, car wheels, automobile spares, racing parts"
      />
      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <p className="section-tag">Catalogue</p>
          <h1 className="page-hero-title" style={{ marginTop: 12 }}>SHOP ALL PARTS</h1>
          <p className="page-hero-sub">
            {ALL_PRODUCTS.length} products across {CATEGORIES.length - 1} categories
          </p>
        </div>
      </div>

      <div className="container">
        <div className="shop-layout">
          {/* Sidebar Filters */}
          <aside className="shop-filters" id="shop-filters">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <span style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, letterSpacing: 2, fontSize: 13, textTransform: 'uppercase' }}>
                Filters
              </span>
              <SlidersHorizontal size={16} color="var(--accent)" />
            </div>

            {/* Search */}
            <div style={{ position: 'relative', marginBottom: 24 }}>
              <Search size={14} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input
                id="shop-search"
                placeholder="Search products..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 12px 10px 36px',
                  background: 'var(--bg-primary)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                  color: 'var(--text-primary)',
                  fontSize: 13,
                  outline: 'none',
                }}
              />
            </div>

            {/* Category */}
            <div className="filter-section">
              <div className="filter-title">Category</div>
              {CATEGORIES.map(cat => (
                <div
                  key={cat}
                  className="filter-option"
                  id={`filter-cat-${cat.toLowerCase()}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  <div className={`filter-checkbox${activeCategory === cat ? ' checked' : ''}`}>
                    {activeCategory === cat && <span style={{ color: '#000', fontSize: 10, fontWeight: 700 }}>✓</span>}
                  </div>
                  <span className="filter-option-label" style={{ color: activeCategory === cat ? 'var(--text-primary)' : undefined }}>
                    {cat}
                  </span>
                </div>
              ))}
            </div>

            {/* Brand */}
            <div className="filter-section">
              <div className="filter-title">Brand</div>
              {BRANDS_FILTER.map(brand => (
                <div
                  key={brand}
                  className="filter-option"
                  id={`filter-brand-${brand.toLowerCase()}`}
                  onClick={() => setActiveBrand(brand)}
                >
                  <div className={`filter-checkbox${activeBrand === brand ? ' checked' : ''}`}>
                    {activeBrand === brand && <span style={{ color: '#000', fontSize: 10, fontWeight: 700 }}>✓</span>}
                  </div>
                  <span className="filter-option-label" style={{ color: activeBrand === brand ? 'var(--text-primary)' : undefined }}>
                    {brand}
                  </span>
                </div>
              ))}
            </div>

            <button
              className="btn-outline"
              id="reset-filters-btn"
              style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}
              onClick={() => { setActiveCategory('All'); setActiveBrand('All'); setSearch('') }}
            >
              Reset Filters
            </button>
          </aside>

          {/* Products */}
          <div>
            <div className="shop-topbar">
              <span className="shop-topbar-count">
                <strong style={{ color: 'var(--text-primary)' }}>{filtered.length}</strong> products found
              </span>
              <select
                id="shop-sort"
                className="shop-sort"
                value={sort}
                onChange={e => setSort(e.target.value)}
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>

            {filtered.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-muted)' }}>
                <div style={{ fontSize: 56, marginBottom: 16 }}>🔍</div>
                <p style={{ fontSize: 16 }}>No products found. Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="shop-products-grid">
                {filtered.map(p => <ProductCard key={p.id} product={p} />)}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
