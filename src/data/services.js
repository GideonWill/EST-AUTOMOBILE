import { PHOTOS } from './photos'
import { LOGO } from './products'

import vulcanizing_img from '../assets/exotic cars/vulcanizing.png'
import electrical_img from '../assets/exotic cars/electrical.png'
import aircon_img from '../assets/exotic cars/aircon.png'

export const SERVICE_CATEGORIES = [
  {
    id: 'maintenance',
    title: 'Maintenance & Repair',
    description: 'Routine upkeep and essential repairs to keep your vehicle running smoothly.',
    services: [
      { id: 'm1', name: 'Scheduled Maintenance', desc: 'Manufacturer recommended interval servicing.', price: 150 },
      { id: 'm2', name: 'Brake Pad & Rotor Replacement', desc: 'Comprehensive brake system service for maximum safety.', price: 280 },
      { id: 'm3', name: 'Vulcanizing & Tyre Service', desc: 'Puncture repair, wheel balancing, and tyre replacements.', price: 45, image: vulcanizing_img },
    ]
  },
  {
    id: 'diagnostics',
    title: 'Diagnostics & Inspection',
    description: 'Advanced computer diagnostics to identify hidden faults.',
    services: [
      { id: 'd1', name: 'Check Engine Light Diagnostic', desc: 'Full OBD-II scan and fault code resolution.', price: 85 },
      { id: 'd2', name: 'Comprehensive Vehicle Health Check', desc: 'Multi-point inspection of all major systems.', price: 120 }
    ]
  },
  {
    id: 'electrical',
    title: 'Electrical & Electronics',
    description: 'Specialized electrical fault finding and electronic system repairs.',
    services: [
      { id: 'e1', name: 'Battery Testing & Replacement', desc: 'Alternator, starter, and battery health checks.', price: 60 },
      { id: 'e2', name: 'Auto Electrical Diagnostics', desc: 'Wiring repairs, ECU programming, and sensor calibration.', price: 320, image: electrical_img }
    ]
  },
  {
    id: 'aircon',
    title: 'Air Conditioning',
    description: 'Climate control system maintenance and repairs.',
    services: [
      { id: 'a1', name: 'A/C Regas & Service', desc: 'Refrigerant recharge and system leak test.', price: 150 },
      { id: 'a2', name: 'Full HVAC System Repair', desc: 'Compressor, condenser, and evaporator repairs.', price: 645, image: aircon_img }
    ]
  },
  {
    id: 'fluids',
    title: 'Oil & Fluids',
    description: 'Essential fluid changes for engine longevity.',
    services: [
      { id: 'f1', name: 'Full Synthetic Oil Change', desc: 'Premium oil and filter replacement.', price: 120 },
      { id: 'f2', name: 'Transmission Fluid Flush', desc: 'Complete transmission fluid exchange and filter.', price: 250 },
      { id: 'f3', name: 'Coolant Flush', desc: 'Radiator flush and anti-freeze replacement.', price: 90 }
    ]
  },
  {
    id: 'suspension',
    title: 'Suspension & Steering',
    description: 'Ride comfort and handling optimization.',
    services: [
      { id: 's1', name: 'Shock & Strut Replacement', desc: 'Restoring factory ride quality and handling.', price: 400 },
      { id: 's2', name: 'Wheel Alignment', desc: 'Precision laser wheel alignment.', price: 80 }
    ]
  },
  {
    id: 'prepurchase',
    title: 'Pre-Purchase Inspection',
    description: 'Buy your next vehicle with absolute confidence.',
    services: [
      { id: 'p1', name: 'Standard Pre-Purchase Check', desc: 'Visual inspection and test drive evaluation.', price: 150 },
      { id: 'p2', name: 'Premium Inspection', desc: 'Includes full computer scan, paint depth check, and hoist inspection.', price: 250 }
    ]
  }
];
