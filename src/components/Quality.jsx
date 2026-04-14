import { Thermometer, Wrench, Zap, Award } from 'lucide-react'
import { Link } from 'react-router-dom'

const FEATURES = [
  {
    icon: Thermometer,
    title: 'Air-Conditioning Service',
    desc: 'Full automobile AC diagnostics, servicing, regas and repair. Keeping your cabin cool and comfortable all year round.',
  },
  {
    icon: Wrench,
    title: 'Vulcanizing Service',
    desc: 'Professional tyre vulcanizing, puncture repair, wheel balancing and replacement. Back on the road in no time.',
  },
  {
    icon: Zap,
    title: 'Auto Electrical Service',
    desc: 'Complete auto electrical diagnostics, fault finding, wiring repairs, battery service and ECU programming.',
  },
]

export default function Quality() {
  return (
    <section className="quality-section" id="quality">
      <div className="container">
        <div className="quality-header">
          <div>
            <p className="section-tag">Why Choose Us</p>
            <h2 className="section-title" style={{ marginTop: 12 }}>
              DRIVEN TO DELIVER<br />
              <span style={{ color: 'var(--accent)' }}>QUALITY</span>
            </h2>
          </div>
          <Link to="/about" className="btn-outline">Our Services</Link>
        </div>

        <div className="quality-grid">
          {FEATURES.map((f, i) => (
            <div className="quality-card" key={i}>
              <div className="quality-icon">
                <f.icon size={22} />
              </div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
