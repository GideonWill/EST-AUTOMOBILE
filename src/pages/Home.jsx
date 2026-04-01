import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Quality from '../components/Quality'
import BrandsSection from '../components/BrandsSection'
import ExploreParts from '../components/ExploreParts'
import SafetyBanner from '../components/SafetyBanner'
import VisualsSection from '../components/VisualsSection'
import FeaturedProduct from '../components/FeaturedProduct'
import NewsletterCTA from '../components/NewsletterCTA'

export default function Home() {
  return (
    <main>
      <SEO 
        title="Premium Automobile Parts & Accessories"
        description="Buy, sell, and learn about the best automotive brands. Get race-grade genuine parts with fast shipping."
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

      {/* Marquee ticker */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...Array(2)].map((_, rep) =>
            ['Premium Wheels', 'Track Performance', 'Genuine Parts', 'Fast Shipping', 'Top Brands', 'Best Prices', 'Race Grade', 'OEM Certified'].map((text, i) => (
              <div className="marquee-item" key={`${rep}-${i}`}>
                {text}
                <span className="marquee-dot" />
              </div>
            ))
          )}
        </div>
      </div>

      <BrandsSection />
      <ExploreParts />
      <SafetyBanner />
      <VisualsSection />
      <FeaturedProduct />
      <NewsletterCTA />
    </main>
  )
}
