import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Quality from '../components/Quality'
import ExploreParts from '../components/ExploreParts'
import FeaturedProduct from '../components/FeaturedProduct'
export default function Home() {
  return (
    <main>
      <SEO 
        title="Premium Automobile Parts & Accessories"
        description="Buy, sell, and learn about the best automotive brands. Get race-grade genuine parts with fast shipping."
        keywords="premium auto parts, mobile auto mechanic Accra, genuine car parts, auto repair services, ETS automotive"
      />
      <Hero />

      {/* Stats Bar */}
      <div className="stats-bar">
        <div className="container">
          <div className="stats-bar-inner">
            {[
              { num: '100', suffix: '', label: 'Happy Customers' },
              { num: '26', suffix: '', label: 'Products Listed' },
              { num: '50', suffix: '+',  label: 'Premium Brands' },
              { num: '4',   suffix: ' Yrs', label: 'In Business' },
            ].map((s, i) => (
              <div className="stat-item" key={i}>
                <div className="stat-number">
                  {s.num}<span>{s.suffix}</span>
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Quality />
      <ExploreParts />
      <FeaturedProduct />
    </main>
  )
}
