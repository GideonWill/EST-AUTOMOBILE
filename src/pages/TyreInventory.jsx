import React, { useState, useMemo } from 'react';
import { TYRE_INVENTORY } from '../data/tyres';
import SEO from '../components/SEO';
import { Search, ArrowUpDown, TrendingUp, Box, X, Info, ShieldCheck, Zap } from 'lucide-react';

export default function TyreInventory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'size', direction: 'asc' });
  const [selectedTyre, setSelectedTyre] = useState(null);

  // Data processing for chart
  const rimData = useMemo(() => {
    const groups = {};
    TYRE_INVENTORY.forEach(item => {
      const parts = item.size.split('/');
      let rim = parts[parts.length - 1];
      if (rim.startsWith('R')) rim = rim.substring(1);
      
      if (!groups[rim]) {
        groups[rim] = { rim, count: 0, totalCost: 0, items: [] };
      }
      groups[rim].count += 1;
      groups[rim].totalCost += item.cost;
      groups[rim].items.push(item);
    });
    
    return Object.values(groups).sort((a, b) => parseInt(a.rim) - parseInt(b.rim));
  }, []);

  const totalTyres = TYRE_INVENTORY.length;
  const avgPrice = Math.round(TYRE_INVENTORY.reduce((acc, curr) => acc + curr.cost, 0) / totalTyres);
  const mostExpensive = Math.max(...TYRE_INVENTORY.map(t => t.cost));

  // Filter and Sort Table Data
  const filteredData = useMemo(() => {
    let data = TYRE_INVENTORY.filter(item => 
      item.size.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.cost.toString().includes(searchTerm) ||
      item.brand?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortConfig.key) {
      data.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'asc' ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }
    return data;
  }, [searchTerm, sortConfig]);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const chartMaxCount = Math.max(...rimData.map(d => d.count));

  return (
    <div className="page-enter" style={{ paddingTop: 90, paddingBottom: 100 }}>
      <SEO 
        title="Tyre Inventory & Pricing" 
        description="Browse our professional warehouse tyre inventory with detailed pricing and size distributions."
      />

      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <p className="section-tag">Warehouse Inventory</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20, marginTop: 12 }}>
            <h1 className="section-title">TYRE SELECTION</h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 500, fontSize: 15 }}>
              A professional breakdown of our current warehouse stock in Ghana Cedis.
            </p>
          </div>
        </div>

        {/* Stats Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginBottom: 40 }}>
          <div className="quality-card" style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '24px' }}>
            <div className="quality-icon" style={{ marginBottom: 0, width: 44, height: 44 }}><Box size={20} /></div>
            <div>
              <div className="stat-label" style={{ fontSize: 10 }}>Total Stock</div>
              <div className="stat-number" style={{ fontSize: 28 }}>{totalTyres} <span style={{ fontSize: 14 }}>Items</span></div>
            </div>
          </div>
          <div className="quality-card" style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '24px' }}>
            <div className="quality-icon" style={{ marginBottom: 0, fontSize: 20, fontWeight: 800, width: 44, height: 44 }}>₵</div>
            <div>
              <div className="stat-label" style={{ fontSize: 10 }}>Average Price</div>
              <div className="stat-number" style={{ fontSize: 28 }}>GH₵{avgPrice}</div>
            </div>
          </div>
          <div className="quality-card" style={{ display: 'flex', alignItems: 'center', gap: 20, padding: '24px' }}>
            <div className="quality-icon" style={{ marginBottom: 0, width: 44, height: 44 }}><TrendingUp size={20} /></div>
            <div>
              <div className="stat-label" style={{ fontSize: 10 }}>Price Range</div>
              <div className="stat-number" style={{ fontSize: 28 }}>₵200 - ₵{mostExpensive}</div>
            </div>
          </div>
        </div>

        {/* Visual Analytics Section */}
        <div className="visuals-grid-layout" style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: 30, marginBottom: 60 }}>
          {/* SVG Bar Chart */}
          <div className="product-card chart-container" style={{ padding: '32px 24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24, gap: 10, flexWrap: 'wrap' }}>
              <h3 style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: 1, fontSize: 16 }}>Availability by Rim</h3>
              <div className="badge">Analytics</div>
            </div>
            
            <div style={{ height: 260, display: 'flex', alignItems: 'flex-end', gap: '3%', paddingBottom: 20, borderBottom: '1px solid var(--border)' }}>
              {rimData.map((d, i) => (
                <div key={d.rim} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, position: 'relative', minWidth: 20 }}>
                  <div style={{ 
                    width: '100%', 
                    height: `${(d.count / chartMaxCount) * 100}%`, 
                    background: 'linear-gradient(to top, var(--accent), var(--accent-hover))',
                    borderRadius: '4px 4px 0 0',
                    transition: 'height 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: '0 0 10px rgba(245, 197, 24, 0.2)',
                    minHeight: 8
                  }}>
                    <div className="chart-count-label" style={{ position: 'absolute', top: -24, width: '100%', textAlign: 'center', color: 'var(--accent)', fontSize: 11, fontWeight: 700 }}>
                      {d.count}
                    </div>
                  </div>
                  <div style={{ fontFamily: 'Bebas Neue', fontSize: 14, color: 'var(--text-secondary)' }}>R{d.rim}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Insights */}
          <div className="insights-vertical" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div className="product-card" style={{ padding: 24, flex: 1 }}>
              <h3 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 14, marginBottom: 12, color: 'var(--accent)' }}>Most Popular</h3>
              <div style={{ fontSize: 24, fontFamily: 'Bebas Neue', letterSpacing: 1 }}>
                {rimData.length > 0 ? rimData.reduce((prev, current) => (prev.count > current.count) ? prev : current).rim : '0'}" RIM
              </div>
              <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 8 }}>
                Largest portion of warehouse stock.
              </p>
            </div>
            <div className="product-card" style={{ padding: 24, flex: 1, background: 'var(--accent)', borderColor: 'var(--accent)' }}>
              <h3 style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 14, marginBottom: 12, color: '#000', fontWeight: 800 }}>Premium</h3>
              <div style={{ fontSize: 24, fontFamily: 'Bebas Neue', letterSpacing: 1, color: '#000' }}>
                {TYRE_INVENTORY.find(t => t.cost === mostExpensive)?.size}
              </div>
              <p style={{ fontSize: 12, color: '#333', fontWeight: 600, marginTop: 8 }}>
                Highest performance: GH₵{mostExpensive}.
              </p>
            </div>
          </div>
        </div>

        {/* Inventory List */}
        <div className="product-card inventory-list-container" style={{ overflow: 'hidden' }}>
          <div style={{ padding: '24px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <h3 style={{ fontFamily: 'Bebas Neue', fontSize: 20, letterSpacing: 1 }}>Complete Inventory</h3>
            
            <div className="search-wrap" style={{ position: 'relative', width: '100%', maxWidth: 300 }}>
              <Search size={16} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input 
                type="text" 
                placeholder="Search..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '9px 12px 9px 36px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-sm)',
                  color: '#fff',
                  fontSize: 13,
                  outline: 'none',
                }}
              />
            </div>
          </div>

          {/* Desktop Table */}
          <div className="desktop-table" style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ background: 'var(--bg-secondary)' }}>
                  <th onClick={() => requestSort('size')} style={{ padding: '16px 24px', cursor: 'pointer', fontFamily: 'Rajdhani', fontSize: 12, fontWeight: 700, letterSpacing: 1, color: 'var(--text-secondary)' }}>
                    SIZE <ArrowUpDown size={10} style={{ marginLeft: 4, opacity: 0.5 }} />
                  </th>
                  <th onClick={() => requestSort('cost')} style={{ padding: '16px 24px', cursor: 'pointer', fontFamily: 'Rajdhani', fontSize: 12, fontWeight: 700, letterSpacing: 1, color: 'var(--text-secondary)' }}>
                    COST (GHS) <ArrowUpDown size={10} style={{ marginLeft: 4, opacity: 0.5 }} />
                  </th>
                  <th style={{ padding: '16px 24px', fontFamily: 'Rajdhani', fontSize: 12, fontWeight: 700, letterSpacing: 1, color: 'var(--text-secondary)' }}>
                    BRAND
                  </th>
                  <th style={{ padding: '16px 24px', textAlign: 'right' }}></th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, i) => (
                  <tr key={i} style={{ borderTop: '1px solid var(--border)', transition: 'background 0.2s' }} className="table-row-hover">
                    <td style={{ padding: '16px 24px', fontFamily: 'Rajdhani', fontWeight: 700, fontSize: 15 }}>{item.size}</td>
                    <td style={{ padding: '16px 24px', fontFamily: 'Bebas Neue', fontSize: 18, color: 'var(--accent)' }}>GH₵{item.cost}</td>
                    <td style={{ padding: '16px 24px', fontFamily: 'Rajdhani', color: 'var(--text-secondary)', fontWeight: 600, fontSize: 13 }}>{item.brand}</td>
                    <td style={{ padding: '16px 24px', textAlign: 'right' }}>
                      <button className="badge" style={{ cursor: 'pointer', background: 'transparent', fontSize: 10 }} onClick={() => setSelectedTyre(item)}>Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card Layout */}
          <div className="mobile-cards" style={{ display: 'none', padding: 16, flexDirection: 'column', gap: 12 }}>
            {filteredData.map((item, i) => (
              <div key={i} className="inventory-mobile-card" style={{ background: 'var(--bg-secondary)', padding: 20, borderRadius: 0, border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <div>
                    <div style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: 1 }}>{item.brand}</div>
                    <div style={{ fontFamily: 'Rajdhani', fontWeight: 700, fontSize: 18, marginTop: 2 }}>{item.size}</div>
                  </div>
                  <div style={{ fontFamily: 'Bebas Neue', fontSize: 22, color: 'var(--accent)' }}>GH₵{item.cost}</div>
                </div>
                <button 
                  className="btn-primary" 
                  style={{ width: '100%', justifyContent: 'center', fontSize: 12, padding: '10px' }}
                  onClick={() => setSelectedTyre(item)}
                >
                  View Full Details
                </button>
              </div>
            ))}
          </div>

          {filteredData.length === 0 && (
            <div style={{ padding: 60, textAlign: 'center', color: 'var(--text-muted)' }}>
              No matches found.
            </div>
          )}
        </div>
      </div>

      {/* Item Details Modal */}
      {selectedTyre && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 1100,
          background: 'rgba(0,0,0,0.95)',
          backdropFilter: 'blur(10px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 16
        }} onClick={() => setSelectedTyre(null)}>
          <div className="product-card modal-enter" style={{
            width: '100%', maxWidth: 800, maxHeight: '90vh', overflow: 'auto',
            background: 'var(--bg-card)', position: 'relative', border: '1px solid var(--border)',
            borderRadius: 0
          }} onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedTyre(null)}
              style={{ position: 'absolute', top: 16, right: 16, zIndex: 10, color: '#fff', cursor: 'pointer', background: 'rgba(0,0,0,0.5)', borderRadius: '50%', padding: 4 }}
            >
              <X size={20} />
            </button>

            <div className="modal-content-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr' }}>
              <div style={{ position: 'relative', background: '#000', minHeight: 250 }}>
                <img src="/premium_tyre.png" alt={selectedTyre.size} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>

              <div style={{ padding: '32px' }}>
                <p className="section-tag" style={{ fontSize: 10 }}>{selectedTyre.brand}</p>
                <h2 style={{ fontFamily: 'Bebas Neue', fontSize: 32, letterSpacing: 1, marginTop: 8 }}>{selectedTyre.size}</h2>
                <div style={{ display: 'flex', gap: 12, margin: '20px 0' }}>
                  <div style={{ padding: '8px 16px', background: 'var(--bg-secondary)', borderRadius: 0, flex: 1 }}>
                    <div style={{ fontSize: 9, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Price</div>
                    <div style={{ fontFamily: 'Bebas Neue', fontSize: 20, color: 'var(--accent)' }}>GH₵{selectedTyre.cost}</div>
                  </div>
                  <div style={{ padding: '8px 16px', background: 'var(--bg-secondary)', borderRadius: 0, flex: 1 }}>
                    <div style={{ fontSize: 9, color: 'var(--text-muted)', textTransform: 'uppercase' }}>Rating</div>
                    <div style={{ fontFamily: 'Bebas Neue', fontSize: 20, color: '#fff' }}>{selectedTyre.rating}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <ShieldCheck size={20} color="var(--accent)" style={{ flexShrink: 0 }} />
                    <p style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.5 }}>Advanced tread compound for maximum longevity.</p>
                  </div>
                  <div style={{ display: 'flex', gap: 12 }}>
                    <Zap size={20} color="var(--accent)" style={{ flexShrink: 0 }} />
                    <p style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.5 }}>High-performance handling and superior braking.</p>
                  </div>
                </div>
                <button className="btn-primary" style={{ width: '100%', marginTop: 32, justifyContent: 'center' }} onClick={() => setSelectedTyre(null)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .table-row-hover:hover { background: rgba(255, 255, 255, 0.02); }
        .modal-enter { animation: modalFadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
        @keyframes modalFadeIn {
          from { opacity: 0; transform: scale(0.98) translateY(10px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @media (max-width: 800px) {
          .visuals-grid-layout { grid-template-columns: 1fr !important; }
          .desktop-table { display: none !important; }
          .mobile-cards { display: flex !important; }
          .modal-content-grid { grid-template-columns: 1fr !important; }
          .container { padding: 0 20px !important; }
          .section-title { fontSize: 32px !important; }
        }
        @media (max-width: 500px) {
          .stats-bar-inner { grid-template-columns: 1fr !important; }
          .chart-count-label { display: none !important; }
        }
      `}</style>
    </div>
  );
}
